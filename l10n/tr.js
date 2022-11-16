OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Tanıma",
    "Smart media tagging for Nextcloud" : "Nextcloud için akıllı ortam etiketleme",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "Bu uygulama, ortam koleksiyonunuzu gözden geçirir ve fotoğraflarınız ile müziklerinizi otomatik olarak kategorize ederek uygun etiketleri ekler..\n\n* 📷 👪 Kişi fotoğraflarındaki yüzleri tanır\n* 📷 🏔 Hayvanları, manzaraları, yemekleri, araçları, binaları ve diğer nesneleri tanır\n* 📷 🗼 Tabelaları ve anıtları tanır\n* 👂 🎵 Müzik türlerini tanır\n* ⚡ Etiketleme, Nextcloud İşbirlikli Etiketleri ile yapılır ve herhangi bir uygulamanızın erişimine izin verir\n  * 👂 Etiketlenmiş müziğinizi Ses oynatıcı uygulamasıyla dinleyebilirsiniz\n  * 📷 Etiketlenmiş fotoğraflarınıza Fotoğraflar uygulamasıyla bakabilirsiniz\n\nKurulumdan sonra, yönetici ayarlarından etiketleme özelliğini etkinleştirebilirsiniz..\n\nGereksinimler:\n- PHP 7.4 ve üzerindeki sürümler\n- \"İşbirlikli etiketler\" (collaborative tags) uygulaması etkinleştirilmiş olmalıdır\n- Normal hız için:\n  - İşlemci: x86 64 bit (AVX komut seti desteği olan)\n  - glibc kurulu bir sistem (genellikle Linux sistemler üzerinde kuruludur. Alpine linux ve FreeBSD bunlardan değildir)\n- Normalden düşük hız için (JavaScript kipi kullanıldığında)\n  - İşlemci: x86 64 bit, arm64, armv7l (AVX komut seti desteği gerekli değildir)\n  - glibc ya da musl kurulu bir sistem (Alpine linux ile birlikte)\n- ~4GB boş RAM bellek (yakın bir değer ayırıyorsanız takas dosyasının kullanıldığından emin olun.)\n\nBu uygulama, bulut hizmeti sağlayıcılarına veya benzer hizmetlere herhangi bir hassas veri göndermez. Tüm işlemler, Node.js üzerinde çalışan Tensorflow.js kullanılarak Nextcloud kopyanızın kurulu olduğu bilgisayar üzerinde yapılır.",
    "Status" : "Durum",
    "The machine learning models have been downloaded successfully." : "Makine öğrenmesi modelleri indirildi.",
    "The machine learning models still need to be downloaded." : "Makine öğrenmesi modellerinin indirilmesi gerekiyor.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Node.js binary dosyası yürütülemedi. Çalışan bir binary dosyasının yolunu el ile ayarlamanız gerekebilir.",
    "The app is installed and will automatically classify files in background processes." : "Uygulama kuruldu ve arka planda dosyaları otomatik olarak sınıflandıracak.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Aşağıdaki etiketleme seçeneklerinden hiçbiri seçilmemiş Uygulama bir işlem yapmayacak.",
    "Image tagging" : "Görsel etiketleme",
    "Face recognition is working. " : "Yüz tanıma çalışıyor.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Yüz tanıma sırasında bir sorun çıktı. Lütfen Nextcloud günlük kayıtlarına bakın.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Yüz tanıma ile ilgili durum raporları bekleniyor. Bu ileti 15 dakikadan uzun süredir görüntüleniyorsa, Nextcloud günlük kayıtlarına bakın.",
    "Face recognition:" : "Yüz tanıma:",
    "Queued files" : "İşlem sırasındaki dosyalar",
    "Last classification: " : "Son sınıflandırma:",
    "Object recognition is working." : "Nesne tanıma çalışıyor.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Nesne tanıma sırasında bir sorun çıktı. Lütfen Nextcloud günlük kayıtlarına bakın.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Nesne tanıma ile ilgili durum raporları bekleniyor. Bu ileti 15 dakikadan uzun süredir görüntüleniyorsa, Nextcloud günlük kayıtlarına bakın.",
    "Object recognition:" : "Nesne tanıma:",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "Yüz tanıma kullanılsın (fotoğrafları, fotoğraflar uygulamasında görünen kişilere göre gruplandırır)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "Görevin bir kez çalıştırılmasında işlenecek dosya sayısı. Bir görev 5 dakikada bir çalışır. Normal çalışma için ~500 ya da üzeri, WASM kipinde ~50 önerilir",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Nesne tanıma kullanılsın (yemek, otomobil, manzara gibi)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "Görevin bir kez çalıştırılmasında işlenecek dosya sayısı. Bir görev 5 dakikada bir çalışır. Normal çalışma için ~100 ya da üzeri, WASM kipinde ~20 önerilir",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Yer tanıma kullanılsın (Eyfel kulesi, Boğaziçi köprüsü gibi)",
    "Audio tagging" : "Ses etiketleme",
    "Audio recognition is working." : "Ses tanıma çalışıyor.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Ses tanıma sırasında bir sorun çıktı. Lütfen Nextcloud günlük kayıtlarına bakın.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Ses tanıma ile ilgili durum raporları bekleniyor. Bu ileti 15 dakikadan uzun süredir görüntüleniyorsa, Nextcloud günlük kayıtlarına bakın.",
    "Music genre recognition:" : "Müzik türü tanıma:",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Müzik türü tanıma kullanılsın (pop, rock, folk, metal gibi)",
    "Video tagging" : "Görüntü etiketleme",
    "Video recognition is working." : "Görüntü tanıma çalışıyor.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Görüntü tanıma sırasında bir sorun çıktı. Lütfen Nextcloud günlük kayıtlarına bakın.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Görüntü tanıma ile ilgili durum raporları bekleniyor. Bu ileti 15 dakikadan uzun süredir görüntüleniyorsa, Nextcloud günlük kayıtlarına bakın.",
    "Video recognition:" : "Görüntü tanıma:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "İnsan hareketi tanıma kullanılsın (bilek güreşi, basketbol dribling, hula hup gibi)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "Görevin bir kez çalıştırılmasında işlenecek dosya sayısı. Bir görev 5 dakikada bir çalışır. Normal çalışma için ~20 ya da üzeri, WASM kipinde ~5 önerilir",
    "Reset" : "Sıfırla",
    "Click the button below to remove all tags from all files that have been classified so far." : "Şimdiye kadar sınıflandırılmış tüm dosyalardaki tüm etiketleri kaldırmak için aşağıdaki düğmeye tıklayın.",
    "Reset tags for classified files" : "Sınıflandırılmış dosyalardan etiketleri kaldır",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Şimdiye kadar sınıflandırılmış tüm dosyalardaki tüm yüz tanımalarını kaldırmak için aşağıdaki düğmeye tıklayın.",
    "Reset faces for classified files" : "Sınıflandırılmış dosyalardan tanınan yüzleri kaldır",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Bu Nextcloud kopyasındaki tüm dosyaları yeniden taramak ve bunları sınıflandırma sırasına eklemek için aşağıdaki düğmeye tıklayın.",
    "Rescan all files" : "Tüm dosyaları yeniden tara",
    "Terminal commands" : "Uçbirim komutları",
    "To trigger a full classification run manually, run the following command on the server terminal." : "Tam bir sınıflandırmayı el ile başlatmak için sunucu uçbiriminde şu komutu yürütün.",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Sınıflandırma işlerini yürütmeye yönelik tüm modelleri indirmek için sunucu uçbiriminde şu komutu yürütün.",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Tanıma uygulaması tarafından daha önce sınıflandırılmış tüm dosyaların etiketlerini şu komutla sıfırlayabilirsiniz:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Daha önce tanınarak sınıflandırılmış tüm dosyaların etiketlerini şu komutla silebilirsiniz:",
    "CPU cores" : "İşlemci çekirdeği sayısı",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used." : "Varsayılan olarak, sisteminizin yükünü önemli ölçüde artırabilecek şekilde, var olan tüm işlemci çekirdekleri kullanılır. Bunu önlemek için kullanılacak işlemci çekirdeği sayısını sınırlayabilirsiniz.",
    "Number of CPU Cores (0 for no limit)" : "Kullanılacak işlemci çekirdeği sayısı (0 sınır yok)",
    "Tensorflow WASM mode" : "Tensorflow WASM kipi",
    "Checking CPU" : "İşlemci denetleniyor",
    "Could not check whether your machine supports native TensorFlow operation." : "Aygıtınızın yerel TensorFlow işlemini destekleyip desteklemediği denetlenemedi.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Bilgisayarınız yerel TensorFlow işlemini destekliyor. WASM kipine gerek duymayacaksınız.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Bilgisayarınız yerel TensorFlow işlemini desteklemediğinden otomatik olarak WASM kipi etkinleştirildi:",
    "Enable WASM mode" : "WASM kipi kullanılsın",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Node.js denetleniyor",
    "Node.js {version} binary was installed successfully." : "Node.js {version} binary dosyası kuruldu.",
    "Checking libtensorflow" : "libtensorflow denetleniyor",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Libtensorflow node.js içine yüklenemedi. Libtensorflow uygulamasını el ile kurmayı ya da WASM kipinde çalıştırmauı deneyebilirsiniz.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow Node.js içine yüklendi.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Birlikte verilen Node.js binary dosyası herhangi bir nedenle sisteminizde çalışmıyorsa, özel bir node.js binary dosyasının yolunu ayarlayabilirsiniz. Şu anda Node v14.17 ve daha yeni v14 sürümleri destekleniyor.",
    "Your server does not support AVX instructions" : "Sunucunuz AVX komutlarını desteklemiyor",
    "Your server does not have an x86 64-bit CPU" : "Sunucunuzun işlemcisi x86 64 bit değil",
    "Your server uses musl libc" : "Sunucunuz musl linc kullanıyor",
    "Failed to load settings" : "Ayarlar yüklenemedi",
    "Failed to save settings" : "Ayarlar kaydedilemedi",
    "never" : "asla",
    "{time} ago" : "{time} önce",
    "Cat" : "Kedi",
    "Animal" : "Hayvan",
    "Wildlife" : "Vahşi yaşam",
    "Nature" : "Doğa",
    "Puma" : "Puma",
    "Leopard" : "Leopar",
    "Lion" : "Aslan",
    "Wild cat" : "Vahşi kedi",
    "Cheetah" : "Çita",
    "Seashore" : "Deniz kıyısı",
    "Beach" : "Plaj",
    "Water" : "Su",
    "Lakeside" : "Göl kıyısı",
    "Flower" : "Çiçek",
    "Plant" : "Bitki",
    "Window" : "Pencere",
    "Architecture" : "Mimari",
    "Stairs" : "Merdiven",
    "Building" : "Bina",
    "Field" : "Arazi",
    "Farm" : "Çiftlik",
    "Landscape" : "Manzara",
    "Portrait" : "Portre",
    "People" : "Kişiler",
    "Fashion" : "Moda",
    "Ship" : "Gemi",
    "Vehicle" : "Araç",
    "Grasshopper" : "Çekirge",
    "Insect" : "Böcek",
    "Fish" : "Balık",
    "Shark" : "Köpek balığı",
    "Chicken" : "Tavuk",
    "Bird" : "Kuş",
    "Ostrich" : "Devekuşu",
    "Owl" : "Baykuş",
    "Salamander" : "Semender",
    "Frog" : "Kurbağa",
    "Turtle" : "Kaplumbağa",
    "Reptile" : "Sürüngen",
    "Lizard" : "Kertenkele",
    "Chameleon" : "Bukalemun",
    "Crocodile" : "Timsahgil",
    "Alligator" : "Timsah",
    "Scorpion" : "Akrep",
    "Spider" : "Örümcek",
    "Duck" : "Ördek",
    "Worm" : "Solucan",
    "Shell" : "İstiridye",
    "Snail" : "Salyangoz",
    "Crab" : "Yengeç",
    "Lobster" : "Istakoz",
    "Cooking" : "Yemek pişirme",
    "Penguin" : "Penguen",
    "Whale" : "Balina",
    "Dog" : "Köpek",
    "Wolf" : "Kurt",
    "Fox" : "Tilki",
    "Bear" : "Ayı",
    "Beetle" : "Kabuklu böcek",
    "Butterfly" : "Kelebek",
    "Rabbit" : "Tavşan",
    "Hippo" : "Su aygırı",
    "Cow" : "İnek",
    "Buffalo" : "Bufalo",
    "Sheep" : "Koyun",
    "Ape" : "Goril",
    "Monkey" : "Maymun",
    "Lemur" : "Lemur",
    "Elephant" : "Fil",
    "Panda" : "Panda",
    "Instrument" : "Enstruman",
    "Music" : "Müzik",
    "Aircraft" : "Uçak",
    "Airport" : "Hava alanı",
    "Tractor" : "Traktör",
    "Weapon" : "Silah",
    "Backpack" : "Sırt çantası",
    "Shop" : "Dükkan",
    "Office" : "Ofis",
    "Outdoor" : "Açık hava",
    "Living" : "Yaşam",
    "Tower" : "Kule",
    "Drinks" : "İçki",
    "Beverage" : "Alkollü içki",
    "Food" : "Yemek",
    "Shelter" : "Barınak",
    "Furniture" : "Mobilya",
    "Book" : "Kitap",
    "Train" : "Tren",
    "Butcher" : "Kasap",
    "Car" : "Otomobil",
    "Historic" : "Tarihi",
    "Boat" : "Bot",
    "Electronics" : "Elektronik",
    "Indoor" : "Kapalı mekan",
    "Church" : "Kilise",
    "Shoe" : "Ayakkabı",
    "Candle" : "Kandil",
    "Coffee" : "Kahve",
    "Keyboard" : "Klavye",
    "Computer" : "Bilgisayar",
    "Helmet" : "Kask",
    "Wall" : "Duvar",
    "Clock" : "Saat",
    "Dining" : "Akşam yemeği",
    "Kitchen" : "Mutfak",
    "Snow" : "Kar",
    "Dome" : "Kubbe",
    "Screen" : "Ekran",
    "Flag" : "Bayrak",
    "Truck" : "Kamyon",
    "Store" : "Mağaza",
    "Tool" : "Araç",
    "Pumpkin" : "Bal kabağı",
    "Vegetables" : "Sebze",
    "Photography" : "Fotoğrafçılık",
    "Library" : "Kitaplık",
    "Display" : "Sergi",
    "Bag" : "Çanta",
    "Cup" : "Kupa",
    "Rocks" : "Kayalar",
    "Bus" : "Otobüs",
    "Bowl" : "Kase",
    "Monitor" : "Ekran",
    "Bike" : "Bisiklet",
    "Scooter" : "Skutır",
    "Camping" : "Kampçılık",
    "Cart" : "Araba",
    "Piggy bank" : "Kumbara",
    "Bottle" : "Şişe",
    "Plate" : "Tabak",
    "Camera" : "Kamera",
    "Camper" : "Kampçı",
    "Barbecue" : "Mangal",
    "Basket" : "Sepet",
    "Diving" : "Dalma",
    "Snowmobile" : "Kar aracı",
    "Bridge" : "Köprü",
    "Couch" : "Koltuk",
    "Theater" : "Tiyatro",
    "Spoon" : "Kaşık",
    "Comic" : "Karikatür",
    "Soup" : "Çorba",
    "Dessert" : "Tatlı",
    "Bakery" : "Fırın",
    "Fruit" : "Meyve",
    "Pasta" : "Makarna",
    "Meat" : "Et",
    "Pizza" : "Pizza",
    "Wine" : "Şarap",
    "Alpine" : "Alp",
    "Mountains" : "Dağlar",
    "Sand" : "Kum",
    "Wool" : "Yün",
    "Glass" : "Cam",
    "Moment" : "An",
    "Info" : "Bilgiler",
    "Document" : "Belge",
    "Puzzle" : "Yap boz",
    "Heritage" : "Miras",
    "Safe" : "Kasa",
    "Bucket" : "Buket",
    "Baby" : "Bebek",
    "Cradle" : "Beşik",
    "Patio" : "Veranda",
    "Mountain" : "Dağ",
    "Radio telescope" : "Radyo teleskop",
    "Theme park" : "Tema parkı",
    "Festival" : "Festival",
    "Event" : "Etkinlik",
    "Monument" : "Anıt",
    "Balloon" : "Balon",
    "Crib" : "Ahır",
    "Fan" : "Vantilatör",
    "Gas station" : "Yakıt istasyonu",
    "Wood" : "Ahşap",
    "Bench" : "Tezgah",
    "Parking" : "Park yeri",
    "Traffic" : "Trafik",
    "Public transport" : "Toplu taşıma",
    "Umbrella" : "Şemsiye",
    "Stage" : "Sahne",
    "Toy" : "Oyuncak",
    "Vase" : "Vazo",
    "Mailbox" : "Posta kutusu",
    "Sign" : "İşaret",
    "Gallery" : "Galeri",
    "Park" : "Park"
},
"nplurals=2; plural=(n > 1);");
