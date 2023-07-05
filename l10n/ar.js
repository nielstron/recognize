OC.L10N.register(
    "recognize",
    {
    "Smart media tagging for Nextcloud" : "الوسم الذكي للوسائط smart media tagging على نكست كلاود",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "هذا التطبيق يبحث عبر مجموعة الوسائط الخاصة بك ويضيف وسم مناسب، ويصنف الصور والموسيقى تلقائيًا.\n\n* 📷👪 يتعرف على الوجوه من صور جهات الاتصال \n* 📷 🏔 يتعرف على الحيوانات والمناظر الطبيعية والطعام والمركبات والمباني والأشياء الأخرى \n* 📷 🗼 يتعرف على المعالم الأرضية والمعالم الأثرية \n* 👂 🎵 يتعرف على أنواع الموسيقى\n* ⚡ يعمل وضع وسم عبر الوسم التشاركي لنكست كلود، مما يسمح بالوصول إليها من خلال أي من تطبيقاتك\n * 👂 الاستماع إلى الموسيقى التي تم وضع وسم عليها باستخدام تطبيق مشغل الصوت\n* 📷 عرض الصور التي تم وضع وسم عليها باستخدام تطبيق الصور\n\n## تقييم AI الوصفي\n ### تقييم اكتشاف كائن الصورة: 🟢\n\nالإيجابي: \n* البرنامج للتدريب والاستدلال لهذا النموذج مفتوح المصدر \n* النموذج المدرب متاح مجانًا، وبالتالي يمكن تشغيل برمجية أون بريمسيز\n* بيانات التدريب متاحة مجانًا، مما يجعل من الممكن التحقق من الخطأ المنهجي وتصحيحه أو تحسين أداء النموذج واستخدام CO2. \n\n### تقييم التعرف علي وجه الصورة: 🟢\n\nالإيجابي: \n* البرنامج للتدريب والاستدلال لهذا النموذج مفتوح المصدر \n* النموذج المدرب متاح مجانًا، وبالتالي يمكن تشغيل برمجية أون بريمسيز\n* بيانات التدريب متاحة مجانًا، مما يجعل من الممكن التحقق من الخطأ المنهجي وتصحيحه أو تحسين أداء النموذج واستخدام CO2. \n\n### تقييم التعرف علي إجراءات الفيديو: 🟢\n\nالإيجابي: \n* البرنامج للتدريب والاستدلال لهذا النموذج مفتوح المصدر \n* النموذج المدرب متاح مجانًا، وبالتالي يمكن تشغيل برمجية أون بريمسيز \n* بيانات التدريب متاحة مجانًا، مما يجعل من الممكن التحقق من الخطأ المنهجي وتصحيحه أو تحسين أداء النموذج واستخدام CO2. \n\n## تقييم AI الوصفي\n### تقييم الترف علي نوع الموسيقي :  🟡\n\nالإيجابي: \n* البرنامج للتدريب والاستدلال لهذا النموذج مفتوح المصدر \n* النموذج المدرب متاح مجانًا، وبالتالي يمكن تشغيل برمجية أون بريمسيز\n\nالسلبي: \n* بيانات التدريب غير متاحة مجانًا ، مما يحد من قدرة الأطراف الخارجية للتحقق من الخطأ المنهجي وتصحيحه أو تحسين أداء النموذج واستخدام CO2. \n\nتعرف على المزيد حول التقييم الوصفي لنكست كلود AI [من خلال مدونتنا] (https://nextcloud.com/blog/nextcloud-ethical-ai-rating/ ).\n\nبعد التثبيت، يمكنك تمكين وضع الوسم في إعدادات المسؤول. \n\nالمتطلبات:\n- معالج نص تشعبي 7.4 فما فوق\n- تمكين \"الوسم التشاركي\" للتطبيق\n- للسرعة الأصلية:\n- معالج: 86اكس 64 بت ( يدعم تعليمات شركة أيه في اكس)\n- نظام مزود ببرمجية مكتبة جنو سي (عادةً ما يكون نموذج في Linux ؛ FreeBSD و Alpine linux وبالتالي أيضًا حاوية Nextcloud Docker الرسمية و Nextcloud AIO ليست * مثل هذه الأنظمة)\n- للسرعة الأقل من الأصلية (يستخدم وضع ويب أسمبلي)\n- المعالج: 86اكس 64 بت، arm64، armv7l (لا حاجة إلى أيه في إكس)\n- نظام مزود ببرمجية مكتبة جنو سي أو musl (بما في ذلك Alpine linux وبالتالي أيضًا حاوية Nextcloud Docker الرسمية وأيضًا Nextcloud AIO) \n- 4 غيغابايت تقريبا من ذاكرة الوصول العشوائي المجانية (إذا كنت تقترب من ذلك ، فتأكد من توفر بعض الاستبدال) \n- هذا التطبيق غير متوافق حاليًا مع تطبيق * Suspicious Login * بسبب تعارض في التبعية (على سبيل المثال ، يمكنك تثبيت واحد فقط من الاثنين) \n\nلا يرسل التطبيق أي بيانات حساسة إلى موفري الخدمات السحابية أو الخدمات المماثلة. تتم جميع عمليات المعالجة على جهاز Nextcloud الخاص بك ، باستخدام Tensorflow.js الذي يعمل في Node.js.",
    "Status" : "الحاله",
    "Face recognition" : "التعرف على الوجه",
    "Scheduled background jobs: " : "المهام المجدولة فى الخلفية:",
    "Last background job execution: " : "آخر تنفيذ للمهمة في الخلفية:",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "توجد ملفات قيد الانتظار في قائمة انتظار التعرف علي الوجوه ولكن لم تتم جدولة أي مهمة في الخلفية لمعالجتهم.",
    "Face clustering:" : "تجميع الوجه:",
    "faces left to cluster" : "الأوجه المتبقية للتجميع:",
    "Last clustering run: " : "آخر عملية  تجميع تم إجراؤها:",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "يلزم ما لا يقل عن 120 وجه لكل مستخدم لبدء التجميع",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "تمكين التعرف على الوجه (تجميع الصور حسب الوجوه التي تظهر فيها؛ واجهة المستخدم موجودة في تطبيق الصور)",
    "Object detection & landmark recognition" : "اكتشاف الكائنات والتعرف على المعالم",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "توجد ملفات قيد الانتظار في قائمة انتظار اكتشاف الكائنات ولكن لم تتم جدولة أي مهمة في الخلفية لمعالجتهم.",
    "Landmark recognition is working." : "خاصية التعرف على المعالم تعمل.",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "حدث خطأ أثناء التعرف على المعالم، يرجى التحقق من سجلات نكست كلود.",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "في انتظار تقارير الحالة الخاصة بالتعرف على المعالم. إذا استمرت هذه الرسالة لأكثر من 15 دقيقة، فيرجى التحقق من سجلات نكست كلود.",
    "Landmark recognition:" : "التعرف على المعلم:",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "توجد ملفات قيد الانتظار في قائمة انتظار المعالم ولكن لم تتم جدولة أي مهمة في الخلفية لمعالجتهم.",
    "There are queued files but no background job is scheduled to process them." : "توجد ملفات في قائمة الانتظار ولكن لم تتم جدولة أي مهام في الخلفية لمعالجتها.",
    "Reset" : "إعادة الضبط",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "تعذر التحقق مما إذا كان جهازك يدعم المكتبة البرمجية تنسرفلو \"Tensorflow\" محليا. تأكد من أن نظام التشغيل لديك مزود ببرمجية مكتبة جنو سي، وأن وحدة المعالجة المركزية لديك تدعم تعليمات أيه فى إكس \"AVX\" وأنك تعمل على x86. إذا لم يكن الأمر كذلك، فسوف تحتاج إلى التشغيل في وضع ويب أسمبلي \"WASM\".",
    "Like most machine learning models, recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "مثل معظم نماذج التعلم الآلي، سيعمل التعرف بشكل أسرع عند استخدام وحدة معالجة الرسومات. عملية التنصيب ليست بالأمر السهل ولكنها تعمل بشكل جيد عندما يتم تنصيب كل شيء بشكل صحيح.",
    "Learn how to setup GPU mode with recognize" : "تعلم كيفية تهيئة وضع وحدة معالجة الرسومات مع التعرف",
    "Failed to load settings" : "إخفاق في تحميل الإعدادات",
    "Failed to save settings" : "فشل حفظ الإعدادات",
    "never" : "بتاتاً",
    "Farm" : "مزرعة",
    "Landscape" : "وضع أُفُقي",
    "Portrait" : "وضع رأسي",
    "People" : "الناس",
    "Dog" : "كلب",
    "Music" : "الموسيقى",
    "Office" : "مكتب",
    "Food" : "طعام",
    "Computer" : "كمبيوتر",
    "Clock" : "الساعة",
    "Screen" : "شاشة",
    "Library" : "مكتبة",
    "Display" : "عرض",
    "Bike" : "دراجة",
    "Camping" : "تخيم",
    "Camera" : "الكاميرا",
    "Barbecue" : "حفل شواء",
    "Theater" : "مسرح",
    "Pizza" : "بيتزا",
    "Info" : "معلومات",
    "Bucket" : "الحزمة",
    "Festival" : "مهرجان",
    "Event" : "حدث",
    "Gallery" : "معرض الصور",
    "Park" : "حديقة"
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
