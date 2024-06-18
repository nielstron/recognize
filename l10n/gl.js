OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Recognize",
    "Smart media tagging and face recognition with on-premises machine learning models" : "Etiquetado de medios intelixentes e recoñecemento facial con modelos de aprendizaxe automática locais",
    "Smart media tagging and face recognition with on-premises machine learning models.\nThis app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* 🎥 🤸 Recognizes human actions on video\n\n⚡ Tagging works via Nextcloud's Collaborative Tags\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos and videos with the photos app\n\nModel sizes:\n\n * Object recognition: 1GB\n * Landmark recognition: 300MB\n * Video action recognition: 50MB\n * Music genre recognition: 50MB\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "Etiquetado de medios intelixentes e recoñecemento facial con modelos de aprendizaxe automática locais\nEsta aplicación pasa pola súa colección multimedia e engade etiquetas axeitadas, clasificando automaticamente as súas fotos e música.\n\n* 📷 👪 Recoñece as facianas nas fotos de contactos\n* 📷 🏔 Recoñece animais, paisaxes, alimentos, vehículos, edificios e outros obxectos\n* 📷 🗼 Recoñece lugares emblemáticos e monumentos\n* 👂 🎵 Recoñece xéneros musicais\n* 🎥 🤸 Recoñece accións humanas en vídeo\n\n* ⚡ O etiquetado funciona a través das etiquetas colaborativas de Nextcloud,\n  * 👂 Escoite a súa música etiquetada coa aplicación de reprodutor de son\n  * 📷 Consulte as súas fotos etiquetadas coa aplicación de fotos\n\nTamaños do modelo:\n\n* Recoñecemento de obxectos: 1 GB\n* Recoñecemento de de lugares emblemáticos: 300 MB\n* Recoñecemento de accións de vídeo: 50 MB\n* Recoñecemento de xénero musical: 50 MB\n\n## Avaliación ética da IA\n### Avaliación para a detección de obxectos fotográficos: 🟢\n\nPositiva:\n* O software para o adestramento e inferencia deste modelo é de código aberto\n* O modelo adestrado está dispoñíbel de xeito libre e, polo tanto, pódese executar localmente\n* Os datos de adestramento están dispoñíbeis de xeito libre, o que permite comprobar ou corrixir o nesgo ou optimizar o rendemento e o uso de CO2.\n\n### Avaliación para o recoñecemento facial de fotos: 🟢\n\nPositiva:\n* O software para o adestramento e inferencia deste modelo é de código aberto\n* O modelo adestrado está dispoñíbel de xeito libre e, polo tanto, pódese executar localmente\n* Os datos de adestramento están dispoñíbeis de xeito libre, o que permite comprobar ou corrixir o nesgo ou optimizar o rendemento e o uso de CO2.\n\n### Avaliación para o recoñecemento de accións de vídeo: 🟢\n\nPositiva:\n* O software para o adestramento e inferencia deste modelo é de código aberto\n* O modelo adestrado está dispoñíbel de xeito libre e, polo tanto, pódese executar localmente\n* Os datos de adestramento están dispoñíbeis de xeito libre, o que permite comprobar ou corrixir o nesgo ou optimizar o rendemento e o uso de CO2.\n\n## Avaliación ética da IA\n### Valoración Recoñecemento do xénero musical: 🟡\n\nPositiva:\n* O software para adestramento e inferencia deste modelo é de código aberto\n* O modelo adestrado está dispoñíbel de xeito libre e, polo tanto, pódese executar localmente\n\nNegativa:\n* Os datos de adestramento non están dispoñíbeis de xeito libre, o que limita a capacidade de partes externas para comprobar e corrixir nesgos ou optimizar o rendemento do modelo e o uso de CO2.\n\nObteña máis información sobre a avaliación de IA Ética de Nextcloud [no noso blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nApós a instalación, pode activar a etiquetaxe na configuración do administrador.\n\nRequisitos:\n- php 7.4 e superior\n- Aplicación «Etiquetas colaborativas» activada\n- Para velocidade nativa:\n  - Procesador: x86 64-bit (con compatibilidade con instrucións AVX)\n  - Sistema con glibc (normalmente a norma en Linux; FreeBSD, Alpine Linux e, polo tanto, tamén o contedor oficial Nextcloud Docker e Nextcloud AIO *non* son tales sistemas)\n- Para velocidade subnativa (usando o modo WASM)\n  - Procesador: x86 64-bit, arm64, armv7l (non se necesita AVX)\n  - Sistema con glibc ou musl (incl. Alpine Linux e, polo tanto, tamén o contedor oficial Nextcloud Docker e tamén Nextcloud AIO)\n- ~4GB de RAM libre (se se queda curto, asegúrese de ter algún espazo de intercambio dispoñíbel)\n- Esta aplicación é agora incompatíbel coa aplicación *Acceso sospeitoso* por mor dun conflito de dependencia (é dicir, só pode ter unha das dúas instalada)\n\nA aplicación non envía ningún dato sensíbel a provedores de nube ou servizos semellantes. Todo o procesamento realízase na súa máquina Nextcloud, usando TensorFlow.js que se executa en Node.js.",
    "Status" : "Estado",
    "The machine learning models have been downloaded successfully." : "Os modelos de aprendizaxe automática descargáronse correctamente.",
    "The machine learning models still need to be downloaded." : "Aínda hai que descargar os modelos de aprendizaxe automática.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Non foi posíbel executar o binario Node.js. Quizais necesite estabelecer manualmente a ruta a un binario que funcione.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Os traballos en segundo plano non se executan mediante cron. Recognize precisa que se executen traballos en segundo plano mediante cron.",
    "The app is installed and will automatically classify files in background processes." : "A aplicación está instalada e clasificará automaticamente os ficheiros en procesos en segundo plano.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Ningunha das opcións de etiquetado a continuación está seleccionada. A aplicación non fará nada neste momento.",
    "Face recognition" : "Recoñecemento facial",
    "Face recognition is working. " : "Recoñecemento facial está funcionando.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Produciuse un erro durante o recoñecemento facial. Comprobe os rexistros de Nextcloud.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Agardando os informes de estado do recoñecemento facial. Se esta mensaxe persiste máis de 15 minutos, consulte os rexistros de Nextcloud.",
    "Face recognition:" : "Recoñecemento facial:",
    "Queued files" : "Ficheiros en cola",
    "Last classification: " : "Última clasificación:",
    "Scheduled background jobs: " : "Traballos programados en segundo plano:",
    "Last background job execution: " : "Última execución do traballo en segundo plano:",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "Hai ficheiros na cola de recoñecemento facial, mais non hai ningún traballo en segundo plano programado para procesalos.",
    "Face clustering:" : "Agrupación facial:",
    "faces left to cluster" : "facianas deixadas para agrupar",
    "Last clustering run: " : "Última execución de agrupación:",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "É necesario un mínimo de 120 facianas por usuario para que a agrupación se active",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "Activar o recoñecemento facial (agrupa as fotos segundo as facianas que aparecen nelas; a IU está na aplicación de fotos)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "O número de ficheiros a procesar por execución de traballo (programarase un traballo cada 5 minutos; para o funcionamento normal ~500 ou máis, no modo WASM recoméndase ~50)",
    "Object detection & landmark recognition" : "Detección de obxectos e recoñecemento de lugares emblemáticos",
    "Object recognition is working." : "O recoñecemento de obxectos está funcionando.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Produciuse un erro durante o recoñecemento de obxectos. Comprobe os rexistros de Nextcloud.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Agardando os informes de estado do recoñecemento de obxectos. Se esta mensaxe persiste máis de 15 minutos, consulte os rexistros de Nextcloud.",
    "Object recognition:" : "Recoñecemento de obxectos:",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "Hai ficheiros na cola de detección de obxectos, mais non hai ningún traballo en segundo plano programado para procesalos.",
    "Landmark recognition is working." : "O recoñecemento de lugares emblemáticos está funcionando.",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "Produciuse un erro durante o recoñecemento de lugares emblemáticos. Comprobe os rexistros de Nextcloud.",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Agardando os informes de estado do recoñecemento de lugares emblemáticos. Se esta mensaxe persiste máis de 15 minutos, consulte os rexistros de Nextcloud.",
    "Landmark recognition:" : "Recoñecemento de lugares emblemáticos",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "Hai ficheiros na cola de lugares emblemáticos, mais non hai ningún traballo en segundo plano programado para procesalos.",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Activar o recoñecemento de obxectos (p. ex., alimentos, vehículos, paisaxes)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "O número de ficheiros a procesar por execución de traballo (programarase un traballo cada 5 minutos; para o funcionamento normal ~100 ou máis, no modo WASM recoméndase ~20)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Activar o recoñecemento de lugares emblemáticos (p. ex., a Torre Eiffel, a Ponte Golden Gate)",
    "Audio tagging" : "Etiquetado de son",
    "Audio recognition is working." : "O recoñecemento de son está funcionando.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Produciuse un erro durante o recoñecemento de son. Comprobe os rexistros de Nextcloud.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Agardando os informes de estado do recoñecemento de son. Se esta mensaxe persiste máis de 15 minutos, consulte os rexistros de Nextcloud.",
    "Music genre recognition:" : "Recoñecemento do xénero musical:",
    "There are queued files but no background job is scheduled to process them." : "Hai ficheiros en cola mais non hai ningún traballo en segundo plano programado para procesalos.",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Activar o recoñecemento de xéneros musicais (por exemplo, pop, rock, folk, metal, new age)",
    "Video tagging" : "Etiquetado de vídeo",
    "Video recognition is working." : "O recoñecemento de vídeo está funcionando.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Produciuse un erro durante o recoñecemento de vídeo. Comprobe os rexistros de Nextcloud.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Agardando os informes de estado do recoñecemento de vídeo. Se esta mensaxe persiste máis de 15 minutos, consulte os rexistros de Nextcloud.",
    "Video recognition:" : "Recoñecemento de vídeo:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Activar o recoñecemento de accións humanas (p. ex., botar un pulso, caneo de baloncesto, bailar un hula hula)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "O número de ficheiros a procesar por execución de traballo (programarase un traballo cada 5 minutos; para o funcionamento normal ~20 ou máis, no modo WASM recoméndase ~5)",
    "Reset" : "Restabelecer",
    "Click the button below to remove all tags from all files that have been classified so far." : "Prema no botón de embaixo para retirar todas as etiquetas de todos os ficheiros clasificados ata agora.",
    "Reset tags for classified files" : "Restabelecer as etiquetas para ficheiros clasificados",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Prema no botón de embaixo para retirar todas as deteccións de facianas de todos os ficheiros clasificados ata agora.",
    "Reset faces for classified files" : "Restabelecer as facianas para ficheiros clasificados",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Prema no botón de embaixo para volver analizar todos os ficheiros nesta instancia e engadilos ás colas do clasificador.",
    "Rescan all files" : "Volver examinar todos os ficheiros",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "Prema no botón de embaixo para limpar as colas do clasificador e limpar todos os traballos en segundo plano. Isto é útil cando quere facer a clasificación inicial usando a orde do terminal.",
    "Clear queues and background jobs" : "Limpar colas e traballos en segundo plano",
    "Resource usage" : "Uso de recursos",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "De xeito predeterminado, empregaranse todos os núcleos de CPU dispoñíbeis, o que pode supor para o seu sistema unha carga considerábel. Para evitar isto, pode limitar a cantidade de núcleos de CPU utilizados. (Nota: No modo WASM, agora só se pode usar 1 núcleo en todo momento).",
    "Number of CPU Cores (0 for no limit)" : "Número de núcleos de CPU (0 para sen límite)",
    "By default, recognize will only ever run one classifier process at a time. If you have a lot of resources available and want to run as many processes in parallel as possible, you can turn on concurrency here." : "De xeito predeterminado, Recognize só executará un proceso de clasificador á vez. Se ten moitos recursos dispoñíbeis e quere executar tantos procesos en paralelo como sexa posíbel, pode activar a simultaneidade aquí.",
    "Enable unlimited concurrency of classifier processes" : "Activar a simultaneidade ilimitada dos procesos clasificadores",
    "Tensorflow WASM mode" : "Modo WASM para TensorFlow",
    "Checking CPU" : "Comprobando a CPU",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "Non foi posíbel comprobar se a súa máquina admite o funcionamento nativo de TensorFlow. Asegúrese de que o seu sistema operativo teña GNU lib C, que a súa CPU admita instrucións AVX e que está a executar en x86. Se unha destas cousas non é o caso, terá que executar no modo WASM.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "A súa máquina admite o funcionamento nativo de TensorFlow, non necesita o modo WASM.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Activouse automaticamente o modo WASM porque a súa máquina non admite o funcionamento nativo de TensorFlow:",
    "Enable WASM mode" : "Activar o modo WASM",
    "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if your installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works." : "Recognize usa TensorFlow para executar os modelos de aprendizaxe automática. Non todas as instalacións son compatíbeis con TensorFlow, sexa porque a CPU non admite instrucións AVX ou porque a plataforma non é x86 (é dicir, nun Raspberry Pi, que é ARM), ou porque o sistema operativo no que se executa a súa Nextcloud (cando se emprega docker, será o SO dentro da imaxe docker) non vén con GNU lib C (por exemplo, Alpine Linux, que tamén é usado por Nextcloud AIO). Na maioría dos casos, aínda que a súa instalación non admita a operación nativa de TensorFlow, poderá executar TensorFlow usando WebAssembly (WASM) en Node.js. Isto é algo máis lento mais funcionará.",
    "Tensorflow GPU mode" : "Modo GPU de TensorFlow",
    "Enable GPU mode" : "Activar o modo GPU",
    "Like most machine learning models, Recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "Como a maioría dos modelos de aprendizaxe automática, Recognize funcionará aínda máis rápido se emprega unha GPU. Axustar iso non é trivial, funcionará ben cando todo estea estabelecido correctamente.",
    "Learn how to setup GPU mode with Recognize" : "Aprenda a estabelecer o modo GPU con Recognize",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Comprobando Node.js",
    "Node.js {version} binary was installed successfully." : "O binario Node.js {version} foi instalado correctamente.",
    "Checking libtensorflow" : "Comprobando libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Non foi posíbel cargar libtensorflow en Node.js. Pode tentar instalar manualmente libtensorflow ou executalo en modo WASM.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "libtensorflow foi cargado correctamente en Node.js, mais non foi posíbel cargar a GPU. Asegúrese de que CUDA Toolkit e cuDNN estean instalados e accesíbeis, ou desactive o modo GPU.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow foi cargado satisfactoriamente en Node.js.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Non foi posíbel cargar Tensorflow WASM en Node.js. Algo vai mal cos seus axustes.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Libtensorflow WASM foi cargado satisfactoriamente en Node.js.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v20.9 and newer v20 releases." : "Se o binario Node.js enviado non funciona no seu sistema por algún motivo, pode estabelecer a ruta a un binario personalizado node.js. Agora é compatíbel con Node v20.9 e versións máis recentes da v20.",
    "For Nextcloud Snap users, you need to adjust this path to point to the snap's \"current\" directory as the pre-configured path will change with each update. For example, set it to \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\" instead of \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\"" : "Para os usuarios de Nextcloud Snap, é necesario axustar esta ruta para que apunte ao directorio «actual» de snap, xa que a ruta preconfigurada cambiará con cada actualización. Por exemplo, configúreo en «/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node» no canto de en «/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node»",
    "Classifier process priority" : "Clasificador da prioridade dos procesos",
    "Checking Nice binary" : "Comprobando o binario «nice»",
    "Could not find the Nice binary. You may need to set the path to a working binary manually." : "Non foi posíbel atopar o binario «nice». Quizais necesite estabelecer manualmente a ruta a un binario que funcione.",
    "Nice binary path" : "Ruta ao binario «nice»",
    "Nice value to set the priority of the Node.js processes. The value can only be from 0 to 19 since the Node.js process runs without superuser privileges. The higher the nice value, the lower the priority of the process." : "Un valor «nice» para estabelecer a prioridade dos procesos Node.js. O valor só pode ser de 0 a 19 xa que o proceso Node.js execútase sen privilexios de superusuario. Canto maior sexa o valor «nice», menor será a prioridade do proceso.",
    "Terminal commands" : "Ordes de terminal",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Para descargar todos os modelos antes de executar os traballos de clasificación, execute a seguinte orde no terminal do servidor.",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "Para activar unha execución de clasificación completa, execute a seguinte orde no terminal do servidor. (A clasificación executarase en varios traballos en segundo plano que poden executarse en paralelo).",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "Para executar unha execución de clasificación completa no terminal, execute o seguinte. (A clasificación executarase en secuencia dentro do seu terminal.)",
    "Before running a full initial classification run on the terminal, you should stop all background processing that Recognize scheduled upon installation to avoid interference." : "Antes de executar unha execución de clasificación inicial completa no terminal, Ten que deter todo o procesamento en segundo plano programado por Recognize na instalación para evitar interferencias.",
    "To run a face clustering run on for each user in the terminal, run the following. Consider adding the parameter --batch-size 10000 for large libraries to avoid PHP memory exhaustion. (The clustering will run in sequence inside your terminal.)" : "Para executar no terminal unha agrupación de facianas para cada usuario, execute o seguinte. Considere engadir o parámetro --batch-size 10000 para fototecas grandes para evitar o esgotamento da memoria PHP. (A agrupación executarase en secuencia dentro do seu terminal.)",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "Para retirar todos os grupos de facianas mais manter as facianas detectadas sen procesar, execute o seguinte no terminal:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "Para retirar todas as facianas detectadas e os grupos de facianas, execute o seguinte no terminal:",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Pode restabelecer as etiquetas de todos os ficheiros que foron previamente clasificados por Recognize coa seguinte orde:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Pode eliminar todas as etiquetas que xa non teñan ningún ficheiro asociado coa seguinte orde:",
    "To remove tags that were created by Recognize version 2 from all files run the following on the terminal:" : "Para retirar as etiquetas que foron creadas mediante a versión 2 de Recognize de todos os ficheiros, execute o seguinte no terminal:",
    "Your server does not support AVX instructions" : "O seu servidor non admite instrucións AVX",
    "Your server does not have an x86 64-bit CPU" : "O seu servidor non ten unha CPU x86 de 64 bits",
    "Your server uses musl libc" : "O seu servidor emprega «musl libc»",
    "Failed to load settings" : "Produciuse un fallo ao cargar os axustes",
    "Failed to save settings" : "Produciuse un fallo ao gardar os axustes",
    "never" : "nunca",
    "{time} ago" : "hai {time}",
    "Cat" : "Gato",
    "Animal" : "Animal",
    "Wildlife" : "Fauna",
    "Nature" : "Natureza",
    "Puma" : "Puma",
    "Leopard" : "Leopardo",
    "Lion" : "León",
    "Wild cat" : "Gato salvaxe",
    "Cheetah" : "Guepardo",
    "Seashore" : "Beiramar",
    "Beach" : "Praia",
    "Water" : "Auga",
    "Lakeside" : "Á beira do lago",
    "Flower" : "Flor",
    "Plant" : "Planta",
    "Window" : "Fiestra",
    "Architecture" : "Arquitectura",
    "Stairs" : "Escaleira",
    "Building" : "Edificio",
    "Field" : "Campo",
    "Farm" : "Granxa",
    "Landscape" : "Paisaxe",
    "Portrait" : "Retrato",
    "People" : "Xente",
    "Fashion" : "Moda",
    "Ship" : "Barco",
    "Vehicle" : "Vehículo",
    "Grasshopper" : "Saltón",
    "Insect" : "Insecto",
    "Fish" : "Peixe",
    "Shark" : "Quenlla",
    "Chicken" : "Polo",
    "Bird" : "Paxaro",
    "Ostrich" : "Avestruz",
    "Owl" : "Bufo",
    "Salamander" : "Píntega",
    "Frog" : "Ra",
    "Turtle" : "Tartaruga",
    "Reptile" : "Réptil",
    "Lizard" : "Lagarto",
    "Chameleon" : "Camaleón",
    "Crocodile" : "Crocodilo",
    "Alligator" : "Caimán",
    "Scorpion" : "Escorpión",
    "Spider" : "Araña",
    "Duck" : "Parrulo",
    "Worm" : "Miñoca",
    "Shell" : "Cuncha",
    "Snail" : "Cascarolo",
    "Crab" : "Caranguexo",
    "Lobster" : "Lagosta",
    "Cooking" : "Cociñar",
    "Penguin" : "Pingüín",
    "Whale" : "Balea",
    "Dog" : "Can",
    "Wolf" : "Lobo",
    "Fox" : "Golpe",
    "Bear" : "Oso",
    "Beetle" : "Escaravello",
    "Butterfly" : "Bolboreta",
    "Rabbit" : "Coello",
    "Hippo" : "Hipopótamo",
    "Cow" : "Vaca",
    "Buffalo" : "Búfalo",
    "Sheep" : "Ovella",
    "Ape" : "Simio",
    "Monkey" : "Mono",
    "Lemur" : "Lémure",
    "Elephant" : "Elefante",
    "Panda" : "Panda",
    "Instrument" : "Instrumento",
    "Music" : "Música",
    "Aircraft" : "Avión",
    "Airport" : "Aeroporto",
    "Tractor" : "Tractor",
    "Weapon" : "Arma",
    "Backpack" : "Mochila",
    "Shop" : "Tenda",
    "Office" : "Oficina",
    "Outdoor" : "No exterior",
    "Living" : "Vivindo",
    "Tower" : "Torre",
    "Drinks" : "Beber",
    "Beverage" : "Bebida",
    "Food" : "Comida",
    "Shelter" : "Abeiro",
    "Furniture" : "Moblaxe",
    "Book" : "Libro",
    "Train" : "Tren",
    "Butcher" : "Carniceiro",
    "Car" : "Coche",
    "Historic" : "Histórico",
    "Boat" : "Barca",
    "Electronics" : "Electrónica",
    "Indoor" : "No interior",
    "Church" : "Igrexa",
    "Shoe" : "Zapato",
    "Candle" : "Candea",
    "Coffee" : "Café",
    "Keyboard" : "Teclado",
    "Computer" : "Computador",
    "Helmet" : "Casco",
    "Wall" : "Parede",
    "Clock" : "Reloxo",
    "Dining" : "Comedor",
    "Kitchen" : "Cociña",
    "Snow" : "Neve",
    "Dome" : "Cúpula",
    "Screen" : "Pantalla",
    "Flag" : "Bandeira",
    "Truck" : "Camión",
    "Store" : "Tenda",
    "Tool" : "Ferramenta",
    "Pumpkin" : "Cabaza",
    "Vegetables" : "Vexetais",
    "Photography" : "Fotografía",
    "Library" : "Biblioteca",
    "Display" : "Presentar",
    "Bag" : "Bolsa",
    "Cup" : "Cunca",
    "Rocks" : "Rochas",
    "Bus" : "Bus",
    "Bowl" : "Cunca grande",
    "Monitor" : "Monitor",
    "Bike" : "Bicicleta",
    "Scooter" : "Scooter",
    "Camping" : "Campismo",
    "Cart" : "Carro",
    "Piggy bank" : "Peto",
    "Bottle" : "Botella",
    "Plate" : "Prato",
    "Camera" : "Cámara",
    "Camper" : "caravana",
    "Barbecue" : "Barbacoa",
    "Basket" : "Cesto",
    "Diving" : "Mergullo",
    "Snowmobile" : "Moto de neve",
    "Bridge" : "Ponte",
    "Couch" : "Sofá",
    "Theater" : "Teatro",
    "Spoon" : "Culler",
    "Comic" : "Historieta",
    "Soup" : "Sopa",
    "Dessert" : "Sobremesa",
    "Bakery" : "Panadería",
    "Fruit" : "Froita",
    "Pasta" : "Pasta",
    "Meat" : "Carne",
    "Pizza" : "Pizza",
    "Wine" : "Viño",
    "Alpine" : "Alpino",
    "Mountains" : "Montañas",
    "Sand" : "Area",
    "Wool" : "La",
    "Glass" : "Cristal",
    "Moment" : "Momento",
    "Info" : "Información",
    "Document" : "Documento",
    "Puzzle" : "Crebacabezas",
    "Heritage" : "Patrimonio",
    "Safe" : "Seguro",
    "Bucket" : "Caldeiro",
    "Baby" : "Bebé",
    "Cradle" : "Berce",
    "Patio" : "Patio",
    "Mountain" : "Montaña",
    "Radio telescope" : "Radiotelescopio",
    "Theme park" : "Parque temático",
    "Festival" : "Festival",
    "Event" : "Evento",
    "Monument" : "Monumento",
    "Balloon" : "Globo",
    "Crib" : "Rolo",
    "Fan" : "Ventilador",
    "Gas station" : "Gasolineira",
    "Wood" : "Madeira",
    "Bench" : "Banco",
    "Parking" : "Aparcadoiro",
    "Traffic" : "Tráfico",
    "Public transport" : "Transporte público",
    "Umbrella" : "Antuca",
    "Stage" : "Escenario",
    "Toy" : "Xoguete",
    "Vase" : "Floreiro",
    "Mailbox" : "Caixa de correo",
    "Sign" : "Asinar",
    "Gallery" : "Galería",
    "Park" : "Parque"
},
"nplurals=2; plural=(n != 1);");
