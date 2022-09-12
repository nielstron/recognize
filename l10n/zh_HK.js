OC.L10N.register(
    "recognize",
    {
    "Recognize" : "識別",
    "Smart media tagging for Nextcloud" : "Nextcloud 的智能媒體標記",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js, which comes bundled with this app." : "此應用程式會瀏覽您的媒體收藏並添加合適的標籤，自動對您的照片和音樂進行分類。\n\n* 📷 👪 從聯絡人照片中識別人臉\n* 📷 🏔 識別動物、風景、食物、車輛、建築物和其他物體\n* 📷 🗼 識別地標和紀念碑\n* 👂 🎵 識別音樂流派\n* ⚡ 通過 Nextcloud 的協作標籤進行標記，允許您的任何應用程式訪問\n* 👂 使用音頻播放器應用程式收聽您標記的音樂\n* 📷 使用照片應用查看您標記的照片\n\n安裝後，您可以在管理設置中啟用標記。\n\n系統要求：\n-  PHP 7.4 及以上\n- “協作標籤”應用程式已啟用\n- 對於本機速度：\n     - 處理器：x86 64bit（支持 AVX 指令）\n     - 帶有 glibc 的系統（通常是 Linux 上的標準；Alpine linux 和 FreeBSD 不是這樣的系統）\n- 對於亞原生速度（使用 JavaScript 模式）\n     - 處理器：x86 64bit、arm64、armv7l（不需要 AVX）\n     - 帶有 glibc 或 musl 的系統（包括 Alpine linux）\n- 約 4GB 的可用 RAM（如果您將其關閉，請確保您有一些可用的交換）\n\n該應用程式不會向雲提供商或類似服務發送任何敏感數據。所有處理都在你的 Nextcloud 機器上完成，使用運行在 Node.js 中的 Tensorflow.js，它與這個應用程式捆綁在一起。",
    "Status" : "狀態",
    "Image tagging" : "自動標籤",
    "Audio tagging" : "語音標籤",
    "Video tagging" : "視像標籤",
    "Reset" : "重設",
    "Manual operation" : "人手操作",
    "CPU cores" : "CPU核心",
    "Tensorflow plain mode" : "TensorFlow 普通模式",
    "Node.js path" : "Node.js 途徑",
    "Failed to load settings" : "載入設定失敗",
    "Failed to save settings" : "設定儲存失敗",
    "Face recognition" : "人臉識別",
    "Cat" : "貓",
    "Animal" : "動物",
    "Wildlife" : "野生動物",
    "Puma" : "美洲獅",
    "Leopard" : "豹",
    "Lion" : "獅子",
    "Wild cat" : "山貓",
    "Cheetah" : "獵豹",
    "Seashore" : "海濱",
    "Beach" : "海灘",
    "Water" : "水",
    "Lakeside" : "湖邊",
    "Flower" : "花",
    "Plant" : "植物",
    "Nature" : "大自然",
    "Window" : "窗",
    "Architecture" : "建築學",
    "Stairs" : "樓梯",
    "Building" : "建築物",
    "Field" : "田",
    "Farm" : "農務 ",
    "Landscape" : "風景模式",
    "Portrait" : "縱向模式",
    "Fashion" : "時裝",
    "People" : "人物",
    "Ship" : "船",
    "Vehicle" : "車輛",
    "Grasshopper" : "蚱蜢",
    "Insect" : "昆蟲",
    "Fish" : "魚",
    "Shark" : "鯊魚",
    "Chicken" : "雞",
    "Bird" : "雀鳥",
    "Ostrich" : "鴕鳥",
    "Owl" : "貓頭鷹",
    "Salamander" : "蠑螈",
    "Frog" : "青蛙",
    "Turtle" : "龜",
    "Reptile" : "爬虫類",
    "Lizard" : "蜥蜴",
    "Chameleon" : "變色龍",
    "Crocodile" : "鱷魚",
    "Alligator" : "短吻鱷",
    "Scorpion" : "蠍",
    "Spider" : "蜘蛛",
    "Duck" : "鴨子",
    "Worm" : "蠕蟲",
    "Shell" : "殼",
    "Snail" : "蝸牛",
    "Crab" : "蟹",
    "Lobster" : "龍蝦",
    "Cooking" : "烹飪",
    "Penguin" : "企鵝",
    "Whale" : "鯨魚",
    "Dog" : "狗",
    "Wolf" : "狼",
    "Fox" : "狐狸",
    "Bear" : "熊",
    "Beetle" : "甲蟲",
    "Butterfly" : "蝴蝶",
    "Rabbit" : "兔子",
    "Hippo" : "河馬",
    "Cow" : "母牛",
    "Buffalo" : "水牛",
    "Sheep" : "羊",
    "Ape" : "猿",
    "Monkey" : "猴子",
    "Lemur" : "狐猴",
    "Elephant" : "大象",
    "Panda" : "熊貓",
    "Instrument" : "器械",
    "Music" : "音樂",
    "Aircraft" : "飛機",
    "Airport" : "飛機場",
    "Tractor" : "拖拉機",
    "Weapon" : "武器",
    "Backpack" : "背包",
    "Shop" : "商店",
    "Office" : "Nextcloud Office",
    "Outdoor" : "戶外",
    "Living" : "生活",
    "Tower" : "塔",
    "Drinks" : "酒精飲料",
    "Beverage" : "飲料",
    "Shelter" : "收容所",
    "Furniture" : "傢俱",
    "Book" : "書",
    "Train" : "火車",
    "Butcher" : "肉販",
    "Car" : "車子",
    "Historic" : "有歷史意義的",
    "Boat" : "艇",
    "Electronics" : "電子",
    "Indoor" : "室內的",
    "Church" : "教堂",
    "Shoe" : "鞋",
    "Candle" : "蠟燭",
    "Coffee" : "咖啡",
    "Keyboard" : "鍵盤",
    "Computer" : "桌上電腦",
    "Helmet" : "頭盔",
    "Wall" : "牆壁",
    "Clock" : "時鐘",
    "Dining" : "用飯",
    "Kitchen" : "廚房",
    "Snow" : "雪",
    "Dome" : "穹頂",
    "Screen" : "螢幕顯示",
    "Flag" : "旗",
    "Truck" : "貨車",
    "Store" : "百貨商店",
    "Tool" : "工具",
    "Pumpkin" : "南瓜",
    "Vegetables" : "蔬菜",
    "Photography" : "攝影",
    "Library" : "圖書館",
    "Display" : "顯示",
    "Bag" : "袋子",
    "Cup" : "杯子",
    "Rocks" : "石塊",
    "Bus" : "巴士",
    "Bowl" : "碗",
    "Monitor" : "螢幕",
    "Bike" : "單車",
    "Scooter" : "小型摩托車",
    "Camping" : "露營",
    "Cart" : "手推車",
    "Piggy bank" : "撲滿",
    "Bottle" : "瓶子",
    "Plate" : "碟",
    "Food" : "食物",
    "Camera" : "相機",
    "Camper" : "宿營拖車",
    "Barbecue" : "BBQ",
    "Basket" : "籃子",
    "Diving" : "潛水",
    "Snowmobile" : "摩托雪橇",
    "Bridge" : "橋",
    "Couch" : "梳化",
    "Theater" : "戲劇",
    "Spoon" : "匙羹",
    "Comic" : "漫畫",
    "Soup" : "湯",
    "Dessert" : "甜品",
    "Bakery" : "麵包店",
    "Fruit" : "生果",
    "Pasta" : "義大利粉",
    "Meat" : "肉",
    "Pizza" : "披薩",
    "Wine" : "葡萄酒",
    "Alpine" : "高山",
    "Mountain" : "山",
    "Sand" : "沙",
    "Wool" : "羊毛",
    "Glass" : "玻璃",
    "Moment" : "時刻",
    "Info" : "資訊",
    "Document" : "文件",
    "Puzzle" : "智力遊戲",
    "Heritage" : "遺產",
    "Safe" : "保險箱",
    "Bucket" : "水桶",
    "Baby" : "BB",
    "Cradle" : "搖籃",
    "Patio" : "平臺",
    "Radio telescope" : "無線電望遠鏡",
    "Theme park" : "主題公園",
    "Festival" : "節日",
    "Event" : "活動",
    "Monument" : "紀念碑",
    "Balloon" : "氣球",
    "Crib" : "嬰兒床",
    "Fan" : "扇子",
    "Gas station" : "油站",
    "Wood" : "木頭",
    "Bench" : "長凳",
    "Parking" : "停車場",
    "Traffic" : "交通",
    "Public transport" : "公共交通",
    "Umbrella" : "雨遮",
    "Stage" : "舞台",
    "Toy" : "玩具",
    "Vase" : "花瓶",
    "Mailbox" : "郵箱",
    "Sign" : "簽署",
    "Gallery" : "相簿",
    "Park" : "公園"
},
"nplurals=1; plural=0;");
