<?php
/*
 * Copyright (c) 2023 The Recognize contributors.
 * This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
 */

namespace OCA\Recognize\Clustering;

use RubixML\Datasets\Labeled;
use RubixML\Graph\Nodes\Ball;
use RubixML\Helpers\Stats;
use RubixML\Kernels\Distance\Distance;
use function RubixML\argmax;

class DualTreeBall extends Ball {
	protected float $longestDistanceInNode = INF;
	protected bool $fullyConnected = false;
	protected $setId;


	public function setLongestDistance($longestDistance): void {
		if ($longestDistance < $this->longestDistanceInNode) {
			$this->longestDistanceInNode = $longestDistance;
		}
	}

	public function getLongestDistance(): float {
		return $this->longestDistanceInNode;
	}

	public function resetLongestEdge(): void {
		$this->longestDistanceInNode = INF;
		foreach ($this->children() as $child) {
			$child->resetLongestEdge();
		}
	}

	public function resetFullyConnectedStatus(): void {
		$this->fullyConnected = false;
		foreach ($this->children() as $child) {
			$child->resetFullyConnectedStatus();
		}
	}

	/**
	 * @return null|int|string
	 */
	public function getSetId() {
		if (!$this->fullyConnected) {
			return null;
		}
		return $this->setId;
	}

	public function isFullyConnected(): bool {
		return $this->fullyConnected;
	}

	/**
	 * @param array $labelToSetId
	 * @return null|int|string
	 */
	public function propagateSetChanges(array &$labelToSetId) {
		if ($this->fullyConnected) {
			// If we are already fully connected, we just need to check if the
			// set id has changed
			foreach ($this->children() as $child) {
				$this->setId = $child->propagateSetChanges($labelToSetId);
			}

			return $this->setId;
		}

		// If, and only if, both children are fully connected and in the same set id then
		// we, too, are fully connected
		$setId = null;
		foreach ($this->children() as $child) {
			$retVal = $child->propagateSetChanges($labelToSetId);

			if ($retVal === null) {
				return null;
			}

			if ($setId !== null && $setId !== $retVal) {
				return null;
			}

			$setId = $retVal;
		}

		$this->setId = $setId;
		$this->fullyConnected = true;

		return $this->setId;
	}

	/**
	 * Factory method to build a hypersphere by splitting the dataset into left and right clusters.
	 *
	 * @param RubixML\Datasets\Labeled $dataset
	 * @param RubixML\Kernels\Distance\Distance $kernel
	 * @return self
	 */
	public static function split(Labeled $dataset, Distance $kernel): self {
		$center = [];

		foreach ($dataset->features() as $column => $values) {
			if ($dataset->featureType($column)->isContinuous()) {
				$center[] = Stats::mean($values);
			} else {
				$center[] = argmax(array_count_values($values));
			}
		}

		$distances = [];

		foreach ($dataset->samples() as $sample) {
			$distances[] = $kernel->compute($sample, $center);
		}

		$radius = max($distances) ?: 0.0;

		$leftCentroid = $dataset->sample(argmax($distances));

		$distances = [];

		foreach ($dataset->samples() as $sample) {
			$distances[] = $kernel->compute($sample, $leftCentroid);
		}

		$rightCentroid = $dataset->sample(argmax($distances));

		$subsets = $dataset->spatialSplit($leftCentroid, $rightCentroid, $kernel);

		return new self($center, $radius, $subsets);
	}
}
