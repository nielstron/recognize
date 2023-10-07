OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Recognize",
    "Smart media tagging and face recognition with on-premises machine learning models" : "Intelligente Medienverschlagwortung und Gesichtserkennung mit vor Ort installierten Modellen für maschinelles Lernen",
    "Smart media tagging and face recognition with on-premises machine learning models.\nThis app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* 🎥 🤸 Recognizes human actions on video\n\n⚡ Tagging works via Nextcloud's Collaborative Tags\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos and videos with the photos app\n\nModel sizes:\n\n * Object recognition: 1GB\n * Landmark recognition: 300MB\n * Video action recognition: 50MB\n * Music genre recognition: 50MB\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "Intelligente Medienverschlagwortung und Gesichtserkennung mit lokalen maschinellen Lernmodellen.\nDiese App durchsucht Ihre Mediensammlung und fügt passende Schlagworte hinzu, um Ihre Fotos und Musik automatisch zu kategorisieren.\n\n* 📷 👪 Erkennt Gesichter anhand von Kontaktfotos\n* 📷 🏔 Erkennt Tiere, Landschaften, Lebensmittel, Fahrzeuge, Gebäude und andere Objekte\n* 📷 🗼 Erkennt Wahrzeichen und Denkmäler\n* 👂 🎵 Erkennt Musikgenres\n* 🎥 🤸 Erkennt menschliche Handlungen im Video\n\n⚡ Verschlagwortung funktioniert über die kollaborativen Schlagworte von Nextcloud\n* 👂 Hören Sie Ihre verschlagwortete Musik mit der Audioplayer-App.\n* 📷 Betrachten Sie Ihre verschlagworteten Fotos und Videos mit der Fotos-App\n\nModellgrößen:\n\n* Objekterkennung: 1GB\n* Landmark-Erkennung: 300MB\n* Video-Aktionserkennung: 50MB\n* Musikgenre-Erkennung: 50MB\n\n## Ethische KI-Bewertung\n### Bewertung für Fotoobjekterkennung: 🟢\n\nPositiv:\n* Die Software für Training und Inferenz dieses Modells ist Open Source\n* Das trainierte Modell ist frei verfügbar und kann daher vor Ort ausgeführt werden\n* Die Trainingsdaten sind frei verfügbar und ermöglichen die Überprüfung oder Korrektur von Verzerrungen sowie die Optimierung der Leistung und des CO2-Verbrauchs.\n\n### Bewertung für Foto-Gesichtserkennung: 🟢\n\nPositiv:\n* Die Software für Training und Inferenz dieses Modells ist Open Source\n* Das trainierte Modell ist frei verfügbar und kann daher vor Ort ausgeführt werden\n* Die Trainingsdaten sind frei verfügbar und ermöglichen die Überprüfung oder Korrektur von Verzerrungen sowie die Optimierung der Leistung und des CO2-Verbrauchs.\n\n### Bewertung für Video-Aktionserkennung: 🟢\n\nPositiv:\n* Die Software zum Trainieren und Inferenzieren dieses Modells ist Open Source\n* Das trainierte Modell ist frei verfügbar und kann daher vor Ort ausgeführt werden\n* Die Trainingsdaten sind frei verfügbar und ermöglichen die Überprüfung oder Korrektur von Verzerrungen sowie die Optimierung der Leistung und des CO2-Verbrauchs.\n\n## Ethische KI-Bewertung\n### Bewertung Erkennung des Musikgenres: 🟡\n\nPositiv:\n* Die Software für Training und Inferenz dieses Modells ist Open Source\n* Das trainierte Modell ist frei verfügbar und kann daher vor Ort ausgeführt werden\n\nNegativ:\n* Die Trainingsdaten sind nicht frei verfügbar, was die Möglichkeiten externer Parteien einschränkt, die Leistung des Modells und den CO2-Verbrauch zu überprüfen und auf Verzerrungen zu korrigieren oder sie zu optimieren.\n\nErfahren Sie mehr über das Nextcloud Ethical AI Rating [in unserem Blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nNach der Installation können Sie das Tagging in den Admin-Einstellungen aktivieren.\n\nAnforderungen:\n- PHP 7.4 und höher\n- App „Kollaborative Tags“ aktiviert\n- Für native Geschwindigkeit:\n- Prozessor: x86 64-Bit (mit Unterstützung für AVX-Anweisungen)\n- System mit glibc (normalerweise die Norm unter Linux; FreeBSD, Alpine Linux und damit auch der offizielle Nextcloud Docker-Container und Nextcloud AIO sind *keine* solchen Systeme)\n- Für subnative Geschwindigkeit (im WASM-Modus)\n- Prozessor: x86 64-bit, arm64, armv7l (kein AVX erforderlich)\n- System mit glibc oder musl (inkl. Alpine Linux und damit auch der offizielle Nextcloud Docker Container und auch Nextcloud AIO)\n- ~4 GB freier RAM (wenn Sie es knapp machen, stellen Sie sicher, dass Sie etwas Swap zur Verfügung haben)\n- Diese App ist derzeit aufgrund eines Abhängigkeitskonflikts nicht mit der App *Suspicious Login* kompatibel (d. h. Sie können nur eine der beiden installiert haben).\n\nDie App sendet keine sensiblen Daten an Cloud-Anbieter oder ähnliche Dienste. Die gesamte Verarbeitung erfolgt auf Ihrem Nextcloud-Computer mithilfe von Tensorflow.js, das in Node.js ausgeführt wird.",
    "Status" : "Status",
    "The machine learning models have been downloaded successfully." : "Die Modelle für maschinelles Lernen wurden erfolgreich heruntergeladen.",
    "The machine learning models still need to be downloaded." : "Die Modelle für maschinelles Lernen müssen noch heruntergeladen werden.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Die Node.js-Bibliothek konnte nicht ausgeführt werden. Möglicherweise müssen Sie den Pfad zu einer funktionierenden Bibliothek manuell festlegen.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Hintergrundjobs werden nicht über Cron ausgeführt. Recognize erfordert die Ausführung von Hintergrundaufträgen über Cron.",
    "The app is installed and will automatically classify files in background processes." : "Die App ist installiert und klassifiziert Dateien automatisch in Hintergrundprozessen.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Keine der folgenden Tagging-Optionen ist derzeit ausgewählt. Die App wird derzeit nichts tun.",
    "Face recognition" : "Gesichtserkennung",
    "Face recognition is working. " : "Die Gesichtserkennung funktioniert.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Bei der Gesichtserkennung ist ein Fehler aufgetreten, bitte überprüfen Sie die Nextcloud-Protokolle.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Gesichtserkennung. Wenn diese Meldung länger als 15 Minuten besteht, bitte die Nextcloud-Protokolle überprüfen.",
    "Face recognition:" : "Gesichtserkennung:",
    "Queued files" : "Dateien in der Warteschlange",
    "Last classification: " : "Letzte Klassifikation",
    "Scheduled background jobs: " : "Geplante Hintergrundaufgaben:",
    "Last background job execution: " : "Letzte Ausführung der Hintergrundaufgabe:",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "In der Warteschlange der Gesichtserkennung befinden sich Dateien für deren Verarbeitung kein Hintergrundjob geplant ist.",
    "Face clustering:" : "Gesichtsclusterung:",
    "faces left to cluster" : "Gesichter zum Clustern übrig",
    "Last clustering run: " : "Letzter Clustering-Lauf:",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "Damit das Clustering funktioniert, sind mindestens 120 Gesichter pro Benutzer erforderlich",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "Gesichtserkennung aktivieren (gruppiert Fotos nach den darin erscheinenden Gesichtern; die Benutzeroberfläche befindet sich in der Foto-App)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "Die Anzahl der zu verarbeitenden Dateien pro Aufgabenlauf (ein Job wird alle 5 Minuten eingeplant; für den normalen Betrieb ~500 oder mehr, im WASM-Modus werden ~50 empfohlen)",
    "Object detection & landmark recognition" : "Erkennung von Objekten und Wahrzeichen ",
    "Object recognition is working." : "Die Objekterkennung funktioniert.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Bei der Objekterkennung ist ein Fehler aufgetreten, bitte überprüfen Sie die Nextcloud-Protokolle.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Objekterkennung. Wenn diese Meldung länger als 15 Minuten beteht, bitte die Nextcloud-Protokolle überprüfen.",
    "Object recognition:" : "Objekterkennung:",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "In der Warteschlange der Objekterkennung befinden sich Dateien für deren Verarbeitung kein Hintergrundjob geplant ist.",
    "Landmark recognition is working." : "Die Erkennung von Wahrzeichen funktioniert.",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "Bei der Erkennung von Wahrzeichen ist ein Fehler aufgetreten. Bitte überprüfen Sie die Nextcloud-Protokolle.",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Erkennung von Wahrzeichen . Wenn diese Meldung länger als 15 Minuten lang erscheint, überprüfen Sie bitte die Nextcloud-Protokolle.",
    "Landmark recognition:" : "Wahrzeichenerkennung:",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "In der Warteschlange für Wahrzeichen befinden sich Dateien für deren Verarbeitung kein Hintergrundjob geplant ist.",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Objekterkennung aktivieren (z. B. Lebensmittel, Fahrzeuge, Landschaften)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "Die Anzahl der zu verarbeitenden Dateien pro Aufgabenlauf (ein Job wird alle 5 Minuten eingeplant; für den normalen Betrieb ~100 oder mehr, im WASM-Modus werden ~20 empfohlen)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Wahrzeichenerkennung aktivieren (z. B. Eiffelturm, Golden Gate Bridge)",
    "Audio tagging" : "Audio-Verschlagwortung",
    "Audio recognition is working." : "Die Audioerkennung funktioniert.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Bei der Audioerkennung ist ein Fehler aufgetreten, bitte überprüfen Sie die Nextcloud-Protokolle.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Videoerkennung. Wenn diese Meldung länger als 15 Minuten besteht, überprüfen Sie bitte die Nextcloud-Protokolle.",
    "Music genre recognition:" : "Erkennung des Musikgenres:",
    "There are queued files but no background job is scheduled to process them." : "Es befinden sich Dateien in der Warteschlange für deren Verarbeitung kein Hintergrundjob geplant ist.",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Musikgenre-Erkennung aktivieren (z. B. Pop, Rock, Folk, Metal, New Age)",
    "Video tagging" : "Video-Verschlagwortung",
    "Video recognition is working." : "Die Videoerkennung funktioniert.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Bei der Videoerkennung ist ein Fehler aufgetreten, bitte überprüfen Sie die Nextcloud-Protokolle.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Videoerkennung. Wenn diese Meldung länger als 15 Minuten besteht, überprüfen Sie bitte die Nextcloud-Protokolle.",
    "Video recognition:" : "Videoerkennung:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Aktivieren Sie die Erkennung menschlicher Aktionen (z. B. Armdrücken, Dribbeln beim Basketball, Hula-Hoop)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "Die Anzahl der zu verarbeitenden Dateien pro Aufgabenlauf (ein Job wird alle 5 Minuten eingeplant; für den normalen Betrieb ~20 oder mehr, im WASM-Modus werden ~5 empfohlen)",
    "Reset" : "Zurücksetzen",
    "Click the button below to remove all tags from all files that have been classified so far." : "Klicken Sie auf die Schaltfläche unten, um alle Tags von allen bisher klassifizierten Dateien zu entfernen.",
    "Reset tags for classified files" : "Tags für klassifizierte Dateien zurücksetzen",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Klicken Sie auf die Schaltfläche unten, um alle Gesichtserkennungen aus allen bisher klassifizierten Dateien zu entfernen.",
    "Reset faces for classified files" : "Gesichter für klassifizierte Dateien zurücksetzen",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Auf die Schaltfläche unten klicken, um alle Dateien in dieser Instanz erneut zu scannen und sie den Klassifizierungswarteschlangen hinzuzufügen.",
    "Rescan all files" : "Alle Dateien erneut scannen",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "Klicken Sie auf die Schaltfläche unten, um die Klassifizierungswarteschlangen zu löschen und alle Hintergrundjobs zu löschen. Dies ist nützlich, wenn Sie die anfängliche Klassifizierung über die Kommandozeile vornehmen möchten.",
    "Clear queues and background jobs" : "Warteschlangen und Hintergrundjobs löschen",
    "Resource usage" : "Ressourcenverbrauch",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "Standardmäßig werden alle verfügbaren CPU-Kerne verwendet, was zu einer erheblichen Belastung Ihres Systems führen kann. Um dies zu vermeiden, können Sie die Anzahl der verwendeten CPU-Kerne begrenzen. (Hinweis: Im WASM-Modus kann derzeit immer nur 1 Kern verwendet werden).",
    "Number of CPU Cores (0 for no limit)" : "Anzahl der CPU-Kerne (0 für unbegrenzt)",
    "By default, recognize will only ever run one classifier process at a time. If you have a lot of resources available and want to run as many processes in parallel as possible, you can turn on concurrency here." : "Standardmäßig führt Recognize immer nur einen Klassifizierungsprozess gleichzeitig aus. Wenn Sie viele Ressourcen zur Verfügung haben und so viele Prozesse wie möglich parallel laufen lassen möchten, können Sie hier die Parallelität aktivieren.",
    "Enable unlimited concurrency of classifier processes" : "Unbegrenzte Parallelität von Klassifizierungsprozessen ermöglichen",
    "Tensorflow WASM mode" : "Tensorflow WASM-Modus",
    "Checking CPU" : "CPU wird überprüft",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "Es konnte nicht überprüft werden, ob Ihr Computer den nativen TensorFlow-Betrieb unterstützt. Stellen Sie sicher, dass Ihr Betriebssystem über GNU lib C verfügt, Ihre CPU AVX-Anweisungen unterstützt und Sie x86 verwenden. Wenn eine dieser Voraussetzungen nicht erfüllt ist, müssen Sie im WASM-Modus arbeiten.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Ihr Computer unterstützt den nativen TensorFlow-Betrieb, Sie benötigen den WASM-Modus nicht.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Der WASM-Modus wurde automatisch aktiviert, da Ihr Computer den nativen TensorFlow-Betrieb nicht unterstützt:",
    "Enable WASM mode" : "WASM-Modus aktivieren",
    "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if your installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works." : "Recognize verwendet Tensorflow zum Ausführen der Modelle für maschinelles Lernen. Nicht alle Installationen unterstützen Tensorflow, entweder weil die CPU keine AVX-Anweisungen unterstützt, oder weil es keine x86 Plattform ist (z.B. auf einem Raspberry Pi, also ARM), oder weil das Betriebssystem, auf dem Ihre Nextcloud läuft (bei Verwendung von Docker ist dies das Betriebssystem im Docker-Image) nicht über GNU lib C verfügt (zum Beispiel Alpine Linux, das auch von Nextcloud AIO verwendet wird). Selbst wenn Ihre Installation den nativen Tensorflow-Betrieb nicht unterstützt, können Sie Tensorflow in den meisten Fällen dennoch mit WebAssembly (WASM) in Node.js ausführen. Das ist etwas langsamer, funktioniert aber dennoch.",
    "Tensorflow GPU mode" : "Tensorflow GPU-Modus",
    "Enable GPU mode" : "GPU-Modus aktivieren",
    "Like most machine learning models, Recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "Wie die meisten Modelle für maschinelles Lernen läuft Recognize bei Verwendung einer GPU schneller. Das Einrichten ist nicht einfach, es funktioniert aber gut, wenn alles richtig eingerichtet ist.",
    "Learn how to setup GPU mode with Recognize" : "Erfahren Sie, wie Sie den GPU-Modus mit Recognize einrichten",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Überprüfung von Node.js",
    "Node.js {version} binary was installed successfully." : "Node.js {version} Bibliothek wurde erfolgreich installiert.",
    "Checking libtensorflow" : "Überprüfen von libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "libtensorflow konnte nicht in Node.js geladen werden. Sie können versuchen, libtensorflow manuell zu installieren oder im WASM-Modus auszuführen.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "libtensorflow wurde erfolgreich in Node.js geladen, aber GPU konnte nicht geladen werden. Stellen Sie sicher, dass CUDA Toolkit und cuDNN installiert und zugänglich sind, oder deaktivieren Sie den GPU-Modus.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow wurde erfolgreich in Node.js geladen.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Tensorflow WASM konnte nicht in Node.js geladen werden. Irgendetwas stimmt mit den Einstellungen nicht.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM wurde erfolgreich in Node.js geladen.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Wenn die mitgelieferte Node.js-Binärdatei aus irgendeinem Grund auf Ihrem System nicht funktioniert, können Sie den Pfad zu einer benutzerdefinierten node.js-Binärdatei festlegen. Derzeit werden Node v14.17 und neuere v14-Releases unterstützt.",
    "For Nextcloud Snap users, you need to adjust this path to point to the snap's \"current\" directory as the pre-configured path will change with each update. For example, set it to \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\" instead of \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\"" : "Für Nextcloud Snap-Benutzer müssen Sie diesen Pfad so anpassen, dass er auf das „aktuelle“ Verzeichnis des Snaps verweist, da sich der vorkonfigurierte Pfad mit jedem Update ändert. Stellen Sie es beispielsweise auf „/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node“ anstelle von „/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node“ ein.",
    "Classifier process priority" : "Priorität des Klassifikationsprozesses",
    "Checking Nice binary" : "Überprüfung der Nice-Binärdatei",
    "Could not find the Nice binary. You may need to set the path to a working binary manually." : "Die Nice-Binärdatei konnte nicht gefunden werden. Möglicherweise müssen Sie den Pfad zu einer funktionierenden Binärdatei manuell festlegen.",
    "Nice binary path" : "Pfad zur Nice-Binärdatei",
    "Nice value to set the priority of the Node.js processes. The value can only be from 0 to 19 since the Node.js process runs without superuser privileges. The higher the nice value, the lower the priority of the process." : "Nice-Wert, um die Priorität der Node.js-Prozesse festzulegen. Der Wert kann nur zwischen 0 und 19 liegen, da der Node.js-Prozess ohne Superuser-Rechte ausgeführt wird. Je höher der Nice-Wert ist, desto niedriger ist die Priorität des Prozesses.",
    "Terminal commands" : "Terminalbefehle",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Um alle Modelle vor der Ausführung der Klassifizierungs-Aufgaben herunterzuladen, führen Sie den folgenden Befehl im Server-Terminal aus.",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "Um einen vollständigen Klassifizierungslauf auszulösen, führen Sie den folgenden Befehl im Server-Terminal aus (Die Klassifizierung wird in mehreren parallel laufenden Hintergrundjobs ausgeführt).",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "Um einen vollständigen Klassifizierungslauf im Terminal auszuführen, führen Sie Folgendes aus (Die Klassifizierung wird in Ihrem Terminal nacheinander ausgeführt.).",
    "Before running a full initial classification run on the terminal, you should stop all background processing that Recognize scheduled upon installation to avoid interference." : "Bevor Sie eine vollständige anfängliche Klassifizierung auf der Kommandozeile ausführen, sollten Sie, um Probleme zu vermeiden, alle Hintergrundverarbeitungen stoppen, die bei der Installation als geplant erkannt wurden.",
    "To run a face clustering run on for each user in the terminal, run the following. (The clustering will run in sequence inside your terminal.)" : "Führen Sie Folgendes aus, um einen Gesichter-Clustering-Lauf für jeden Benutzer im Terminal auszuführen (Das Clustering wird in Ihrem Terminal nacheinander ausgeführt.).",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "Um alle Gesichtscluster zu entfernen, aber die Rohdaten der erkannten Gesichter beizubehalten, führen Sie Folgendes im Terminal aus:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "Um alle erkannten Gesichter und Gesichtscluster zu entfernen, führen Sie Folgendes im Terminal aus:",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Sie können die Tags aller Dateien, die zuvor von Recognize klassifiziert wurden, mit dem folgenden Befehl zurücksetzen:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Mit dem folgenden Befehl können Sie alle Tags löschen, denen keine Dateien mehr zugeordnet sind:",
    "To remove tags that were created by Recognize version 2 from all files run the following on the terminal:" : "Führen Sie folgendes im Terminal aus, um Schlagworte zu entferrnen, die von Recognize 2 für alle Dateien erstellt wurden:",
    "Your server does not support AVX instructions" : "Ihr Server unterstützt keine AVX-Anweisungen",
    "Your server does not have an x86 64-bit CPU" : "Ihr Server hat keine x86 64-Bit-CPU",
    "Your server uses musl libc" : "Ihr Server verwendet musl-libc",
    "Failed to load settings" : "Einstellungen konnten nicht geladen werden",
    "Failed to save settings" : "Einstellungen konnten nicht gespeichert werden",
    "never" : "nie",
    "{time} ago" : "{time} her",
    "Cat" : "Katze",
    "Animal" : "Tier",
    "Wildlife" : "Tierwelt",
    "Nature" : "Natur",
    "Puma" : "Puma",
    "Leopard" : "Leopard",
    "Lion" : "Löwe",
    "Wild cat" : "Wildkatze",
    "Cheetah" : "Gepard",
    "Seashore" : "Küste",
    "Beach" : "Strand",
    "Water" : "Wasser",
    "Lakeside" : "Seeufer",
    "Flower" : "Blume",
    "Plant" : "Pflanze",
    "Window" : "Fenster",
    "Architecture" : "Architektur",
    "Stairs" : "Treppen",
    "Building" : "Gebäude",
    "Field" : "Feld",
    "Farm" : "Bauernhof",
    "Landscape" : "Landschaft",
    "Portrait" : "Porträt",
    "People" : "Personen",
    "Fashion" : "Mode",
    "Ship" : "Schiff",
    "Vehicle" : "Fahrzeug",
    "Grasshopper" : "Heuschrecke",
    "Insect" : "Insekt",
    "Fish" : "Fisch",
    "Shark" : "Hai",
    "Chicken" : "Huhn",
    "Bird" : "Vogel",
    "Ostrich" : "Strauß",
    "Owl" : "Eule",
    "Salamander" : "Salamander",
    "Frog" : "Frosch",
    "Turtle" : "Schildkröte",
    "Reptile" : "Reptil",
    "Lizard" : "Eidechse",
    "Chameleon" : "Chamäleon",
    "Crocodile" : "Krokodil",
    "Alligator" : "Alligator",
    "Scorpion" : "Skorpion",
    "Spider" : "Spinne",
    "Duck" : "Ente",
    "Worm" : "Wurm",
    "Shell" : "Muschel",
    "Snail" : "Schnecke",
    "Crab" : "Krabbe",
    "Lobster" : "Hummer",
    "Cooking" : "Kochen",
    "Penguin" : "Pinguin",
    "Whale" : "Wal",
    "Dog" : "Hund",
    "Wolf" : "Wolf",
    "Fox" : "Fuchs",
    "Bear" : "Bär",
    "Beetle" : "Käfer",
    "Butterfly" : "Schmetterling",
    "Rabbit" : "Kaninchen",
    "Hippo" : "Nilpferd",
    "Cow" : "Kuh",
    "Buffalo" : "Büffel",
    "Sheep" : "Schaf",
    "Ape" : "Menschenaffe",
    "Monkey" : "Affe",
    "Lemur" : "Lemur",
    "Elephant" : "Elefant",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "Musik",
    "Aircraft" : "Flugzeug",
    "Airport" : "Flughafen",
    "Tractor" : "Traktor",
    "Weapon" : "Waffe",
    "Backpack" : "Rucksack",
    "Shop" : "Geschäft",
    "Office" : "Büro",
    "Outdoor" : "Draußen",
    "Living" : "Leben",
    "Tower" : "Turm",
    "Drinks" : "Getränke",
    "Beverage" : "Getränke",
    "Food" : "Lebensmittel",
    "Shelter" : "Obdach",
    "Furniture" : "Möbel",
    "Book" : "Buch",
    "Train" : "Zug",
    "Butcher" : "Schlachter",
    "Car" : "Auto",
    "Historic" : "Historisch",
    "Boat" : "Boot",
    "Electronics" : "Elektronik",
    "Indoor" : "Innen",
    "Church" : "Kirche",
    "Shoe" : "Schuh",
    "Candle" : "Kerze",
    "Coffee" : "Kaffee",
    "Keyboard" : "Tastatur",
    "Computer" : "Computer",
    "Helmet" : "Helm",
    "Wall" : "Mauer",
    "Clock" : "Uhr",
    "Dining" : "Essen",
    "Kitchen" : "Küche",
    "Snow" : "Schnee",
    "Dome" : "Kuppel",
    "Screen" : "Bildschirm",
    "Flag" : "Fahne",
    "Truck" : "LKW",
    "Store" : "Geschäft",
    "Tool" : "Werkzeug",
    "Pumpkin" : "Kürbis",
    "Vegetables" : "Gemüse",
    "Photography" : "Fotografie",
    "Library" : "Bibliothek",
    "Display" : "Anzeige",
    "Bag" : "Tasche",
    "Cup" : "Tasse",
    "Rocks" : "Felsen",
    "Bus" : "Bus",
    "Bowl" : "Schüssel",
    "Monitor" : "Monitor",
    "Bike" : "Fahrrad",
    "Scooter" : "Roller",
    "Camping" : "Camping",
    "Cart" : "Wagen",
    "Piggy bank" : "Sparschwein",
    "Bottle" : "Flasche",
    "Plate" : "Teller",
    "Camera" : "Kamera",
    "Camper" : "Wohnmobil",
    "Barbecue" : "Grillen",
    "Basket" : "Korb",
    "Diving" : "Tauchen",
    "Snowmobile" : "Schneemobil",
    "Bridge" : "Brücke",
    "Couch" : "Couch",
    "Theater" : "Theater",
    "Spoon" : "Löffel",
    "Comic" : "Comic",
    "Soup" : "Suppe",
    "Dessert" : "Nachtisch",
    "Bakery" : "Bäckerei",
    "Fruit" : "Frucht",
    "Pasta" : "Pasta",
    "Meat" : "Fleisch",
    "Pizza" : "Pizza",
    "Wine" : "Wein",
    "Alpine" : "Alpin",
    "Mountains" : "Berge",
    "Sand" : "Sand",
    "Wool" : "Wolle",
    "Glass" : "Glas",
    "Moment" : "Moment",
    "Info" : "Info",
    "Document" : "Dokument",
    "Puzzle" : "Puzzle",
    "Heritage" : "Erbe",
    "Safe" : "Safe",
    "Bucket" : "Eimer",
    "Baby" : "Baby",
    "Cradle" : "Wiege",
    "Patio" : "Terrasse",
    "Mountain" : "Berg",
    "Radio telescope" : "Radioteleskop",
    "Theme park" : "Themenpark",
    "Festival" : "Festival",
    "Event" : "Ereignis",
    "Monument" : "Denkmal",
    "Balloon" : "Ballon",
    "Crib" : "Krippe",
    "Fan" : "Ventilator",
    "Gas station" : "Tankstelle",
    "Wood" : "Holz",
    "Bench" : "Bank",
    "Parking" : "Parken",
    "Traffic" : "Verkehr",
    "Public transport" : "Öffentlicher Verkehr",
    "Umbrella" : "Regenschirm",
    "Stage" : "Bühne",
    "Toy" : "Spielzeug",
    "Vase" : "Vase",
    "Mailbox" : "Briefkasten",
    "Sign" : "Zeichen",
    "Gallery" : "Galerie",
    "Park" : "Park"
},
"nplurals=2; plural=(n != 1);");
