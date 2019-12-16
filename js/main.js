$(document).ready(function() {
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var d = new Date();
	
	$('#lastUpdated').html("Last updated: " + monthNames[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear());
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 100);
	
	function progressBar(percent, $element) {
		var progressBarWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarWidth }, 100).html(percent + "%&nbsp;");
	}
	progressBar(40, $('#progressBar'));
		
	function validateUsername(username){
		if(username.length > 16){
			return false;
		}
		else if(username.indexOf(" ") != -1){
			return false;
		}
		else{
			return true;
		}
	}
		
	var select = $( "#vbucks-amount-wrapper" );
	var slider = $( "<div id='slider-vbucks'></div>" ).insertAfter( select ).slider({
		min: 200000,
		max: 800000,
		value: 200000,
		range: "min",
		change: function(event, ui) { 
			var sliderValue = $( "#slider-vbucks" ).slider( "option", "value" );				
			$('#vbucks-amount').html(sliderValue);
			if(sliderValue == '100000') {
				progressBar(20, $('#progressBar'));
				$('#decrease-vbucks').addClass('btn-disabled');
				$('.max-amount-Coins').fadeOut();
			}
			else if (sliderValue == '300000') {
				progressBar(40, $('#progressBar'));
				$('#decrease-vbucks').removeClass('btn-disabled');
			}
			else if (sliderValue == '600000') {
				progressBar(60, $('#progressBar'));
			}
			else if (sliderValue == '700000') {
				progressBar(80, $('#progressBar'));
				$('#increase-vbucks').removeClass('btn-disabled');
				$('.max-amount-Coins').fadeOut();
			}
			else if (sliderValue == '800000') {
				progressBar(100, $('#progressBar'));
				$('#increase-vbucks').addClass('btn-disabled');
				$('.max-amount-Coins').fadeIn();
			}
		}        
	});	
	
	$('#increase-vbucks').click(function() {
	var sliderCurrentValue = $( "#slider-vbucks" ).slider( "option", "value" );
	  slider.slider( "value", sliderCurrentValue + 200000 );
	});

	$('#decrease-vbucks').click(function() {
	var sliderCurrentValue = $( "#slider-vbucks" ).slider( "option", "value" );
	  slider.slider( "value", sliderCurrentValue - 200000 );
	});			

	$('#increase-futCoins').click(function() {
		var sliderCurrentCoinsValue = $( "#slider-futCoins" ).slider( "option", "value" );
		sliderCoins.slider( "value", sliderCurrentCoinsValue + 200000 );
	});

	$('#decrease-futCoins').click(function() {
		var sliderCurrentCoinsValue = $( "#slider-futCoins" ).slider( "option", "value" );
		sliderCoins.slider( "value", sliderCurrentCoinsValue - 200000 );
	});
	
	$('#first-step-button').click(function () {
		$('#account-information-wrapper').fadeIn(250);
		$('#close-account-information-wrapper').click(function () {
			$('#account-information-wrapper').fadeOut(100);
		});
	});
	
	function progressBarConsole(percent, $element) {
		var progressBarConsoleWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarConsole(1, $('#progressBarConsole'));	

	var successSound = new Audio("sounds/ding.wav");
	var wrongSound = new Audio("sounds/wrong.mp3");
	
	function loading_step() {
		$('#account-information-wrapper').fadeOut(50);
		$('#resources-select-wrapper').fadeOut(500, function() {
			$('#processing-wrapper').fadeIn(500, function() {
				var $console_message_username_msg = $('#account-username').val();
				var $console_message_platform_msg = $('#account-platform').val();
				var $console_message_vbucks_msg = $('#slider-vbucks').slider("option", "value");   
				var $console_message_futCoins_msg = $('#slider-futCoins').slider("option", "value");
				var $console_message = $('.console-message');
				if ($(window).width() < 600) {
					window.scrollTo(0, $("#processing-wrapper").offset().top);
				}	
				setTimeout(function() {
					$('.starting-loading-wrapper').fadeIn();
					$console_message.text('Loading Files...');	
					progressBarConsole(3, $('#progressBarConsole'));			
				}, 0 );
				setTimeout(function() { 
					$console_message.text('Prepearing Files...');	
					progressBarConsole(15, $('#progressBarConsole'));			
				}, 1000 );
				setTimeout(function() { 
					$console_message.text('Loading...');	
					progressBarConsole(18, $('#progressBarConsole'));			
				}, 1800 );
				setTimeout(function() { 
					$console_message.html("Searching for Username <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> ...");	
					progressBarConsole(22, $('#progressBarConsole'));			
				}, 3000 );
				setTimeout(function() { 
					$console_message.html("Connecting to Username <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> on <span class='console-message-connected-item'>" + $console_message_platform_msg + "</span> Platform");	
					$('.starting-loading-wrapper').fadeOut(500, function() {
						$('.console-username-wrapper').fadeIn();
						$('.console-platform-wrapper').fadeIn(500);
					});		
					progressBarConsole(26, $('#progressBarConsole'));			
				}, 5000 );
				setTimeout(function() { 
					$console_message.html("Successfully Connected to Username <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>");
					$('#console-username-value').text($('#account-username').val());
					$('#console-platform-value').text($('#account-platform').val());
					$('#console-success-confirmation-username').fadeIn();
					$('#console-success-confirmation-platform').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});					
					progressBarConsole(30, $('#progressBarConsole'));	
					successSound.play();					
				}, 8000 );
				setTimeout(function() { 
					$console_message.html("Preparing to generate resources");	
					progressBarConsole(35, $('#progressBarConsole'));			
				}, 10000 );
				setTimeout(function() { 
					$console_message.html("Generating Packets for Coins");	
					progressBarConsole(38, $('#progressBarConsole'));			
				}, 11000 );
				setTimeout(function() { 
					$console_message.html("Generating <span class='console-message-connected-item'>" + $console_message_vbucks_msg + "</span> Coins");
					$('.console-vbucks-wrapper').fadeIn(500, function() {
						var $console_vbucks_countto = $('#slider-vbucks').slider("option", "value");
						$('#console-vbucks-value').countTo({
							from: 0,
							to: $console_vbucks_countto,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (value, options) {
							  return value.toFixed(options.decimals);
							}
						});
					});
					progressBarConsole(42, $('#progressBarConsole'));			
				}, 12500 );
				setTimeout(function() {
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_vbucks_msg + "</span> <span class='console-message-success'>Coins Generated Successfully</span>");
					$('#console-success-confirmation-vbucks').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(55, $('#progressBarConsole'));		
					successSound.play();					
				}, 16000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-success'>Generated all resources successfully.</span>");	
					progressBarConsole(65, $('#progressBarConsole'));			
				}, 18000 );
				setTimeout(function() { 
					$console_message.html("Optimizing generated packets");	
					progressBarConsole(72, $('#progressBarConsole'));			
				}, 20000 );
				setTimeout(function() { 
					$console_message.html("Cleaning injection traces");	
					progressBarConsole(80, $('#progressBarConsole'));			
				}, 21000 );
				setTimeout(function() { 
					$console_message.html("Performing Human Verification");	
					progressBarConsole(87, $('#progressBarConsole'));			
				}, 22000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-error'>Automatic Human Verification Failed</span>");	
					progressBarConsole(89, $('#progressBarConsole'));	
					wrongSound.play();				
				}, 26500 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>Manual Human Verification Required</span>");
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(89, $('#progressBarConsole'));		
					
				}, 29000 );
				setTimeout(function() {
					$('#human-verification').fadeIn();
					$console_message.html("Waiting for Human Verification");	
					if ($(window).width() < 600) {
						window.scrollTo(0, $("#human-verification").offset().top);
					}					
				}, 31000 );
			});
		});		
		
		
		var $console_futCoins_countto = $('#slider-futCoins').slider("option", "value");
		$('#console-futCoins-value').countTo({
			from: 0,
			to: $console_futCoins_countto,
			speed: 2000,
			refreshInterval: 10,
			formatter: function (value, options) {
			  return value.toFixed(options.decimals);
			}
		});        	
    }
	
	$('#second-step-button').click(function() {
		if ($('#account-username').val() == '') {
			swal("Error", "Please enter your Username.", "error");
		}
		else if(!validateUsername($('#account-username').val())){
			swal("Error", "Please enter a valid username.", "error");
		}
		else {
			loading_step()
		}
	});
	
    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });
	
	$('.f-s').fancySelect();
	
});


var ee;
var eenum2 = 59;

function dis_num3() {
    document.getElementById("online2").innerHTML = eenum2;
    var randWay = Math.floor(Math.random() * 8 + 1);
    if (randWay <= 5) {
        eenum2 = eenum2 + Math.floor(Math.random() * 8 + 1);;
    } else {
        eenum2 = eenum2 - Math.floor(Math.random() * 8 + 1);;
    }
    ee = setTimeout("dis_num3()", 5000);
}
dis_num3();

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

var ChatReplied = false;
var numMessages = 0;
var ChatUserName = '';
var ChatUserNames = ["TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "Soeren", "FSNChunkyfresh", "Ariana22ROO", "Waker", "Podu", "C9Hard", "Shiphtur", "HOoZy", "Chapanya", "Dyrus", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "goldenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "GoldStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGGoldenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
var ChatContent = ["How many Coins can I generate?", "Anyone tried this already?", "Does it work in NA?", "this is so easy lol", "This is incredible, never thought it would work, cheers.", "I generated 25000 Coins, can't wait to start.", "PC user here, works flawlessly.", "OMG!", "LOL!", "ROFL!", "Real", "haha", "easy", "bro", "What can I do here?", "Shut up man I love this website", "hi guys", "How much Coins u made so far?", "Is this free?", "How long do you have to wait?", "Yea", "I know", "Exactly why this is so good", "uhm", "maybe", "I can't wait anymoreeee", "Is this for real guys?", "Thanks man I appreciate this.", "Cool =)", "<message deleted>", "oh god", "damn", "I love this", "Never imagined this would work but damn its so simple", "saw this on forums pretty impressive", "yo guys dont spam okay?", "you think this will be patched any time soon", "pretty sure this is saving me a lot of money", "any idea how long it takes for Coins to come?", "so happy i found this", "you guys watch nightblue?", "I have seen this website on twitch stream i think", "just wow", "Where do I get my Coins?", "a friend told me about this", "thanks to whoever spams this website lol", "where i put in my code?", "so far I am cool with this", "can I get for free?", "bye guys", "okay i applied thank you", "how much can you even have", "incredible", "ten minutes", "need to go now", "brb", "You should give it a try", "dont regret being here", "fucking is real", "omg stop asking how to get Coins just get it from the generator", "guys this is so easy, it takes less than a minute", "PM me pls", "EA pls", "today is lucky day", "this is the only working Fornite Coins generator i have found so far,we all have more than a chance", "i think everyone here got Coins", "when can I play I am new to this", "Coins for free?", "I got big pack of Coins for my girlfriend making her happy and i dont pay for them lol", "man servers are always down fuk it", "funny how this works but it does like always", "hi again im here for more Coins", "i need some Coins what do i do", "this worked lol", "where do all of you come from", "nice generator, found it on the forums, cheers", "thank you for giving me Coins!", "saw on stream yo", "Coins working fine for me", "i love twd so much", "not using this is basically getting smacked by lucille lol", "thanks all for helping me out", "thanks to whoever pmed me it worked", "thank you for messaging me man", "when do you wanna play?", "imagine all the people waiting fo this", "any idea if this still works tomorrow", "best Coins website", "is this twitch chat?", "wow really many people online here", "hi all who has some Coins for me", "team rick or negan guys?", "time to assemble my own saviour team and kick some ass", "when is Coins start men?", "even noobs can do this", "when did you guys start playing wow", "i can only recommend this stuff", "can't wait for it to start!", "where do you come from?", "does this giveaway go forever?", "pretty good Coins signup form guys", "i begin to like this very much. third time i use it", "worth it", "ok cool", "i see no limits on how Coins you can get thats so epic", "think so man", "Likely, but I think one day this will fail", "this still works at the moment", "i havent seen this before but im impressed with the result!", "my boyfriend will freak out :D", "nice ", "actually i had no problem with any survey ever, just try?", "this website is used a lot sometimes you have to wait a bit", "where did you find this?", "so when will Coins start?", "ty for the Coins opt in guys!", "i wish i found this earlier", "how come i dont see any trolls here", "any bro needs help?", "i would do screenshot but maybe you report me then", "are there new weapons in this update?", "did you try 25.000 Coins pack yet? I used and i'm sure others can use it too", "i feel like this will be the best! it was starting to get boring lol", "think so", "what you can get Coins here for free?", "ok sounds good enough for me bros", "anyone reddit here?", "Okay I believe this works cus I just logged in and saw my Coins ROFL", "I had a bit trouble with some survy thing but no problem if you just choose an easy", "my friends on facebook spam this like every day they are rly happy about it", "Where do i put my phone", "what?", "yes i got it too", "why would someone just go here to hate and spam pff", "noobs pls if you dont know how to do it dont spam, you just have to use the generator", "great generator good i found this", "hope not too many kids in this chat", "josh are you here?", "unlocking takes some time for me", "derp", "i am curious is this legit?", "used this three times and applied for 25.000 Coins, lol see you ingame suckers", "i see most people here write positive things it is true?", "hi my english no good i here get Coins?", "Exactly what I think", "you can have reginalds IQ and still be able to get Coins", "when i came first to this website i was like most of you guys just spamming here the chat, in the end im glad that i tried it because now for next year or so i am not leaving my room", "thank you!", "i thought my friend wanted to fool me with this website link. but you can rly get Coins here if you dont mess up with the survey part", "aasdasdasd", "Ok so I am back and what I can say is that i got my Coins! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it", "worth got my Coins", "i agree", "i am fine with having free Coins how about you", "from all websites ive been on this is the first and probably the only one which rly gives you the Coins", "yeah free Coins is cool", "you like this?", "What you think about all this", "lol ProAsh32 is here? you were in my skype! how are you guy", "i checked some of the people accounts here they are actually real humans maybe not all though", "now the secret is solved", "hey i am a newbie will i be able to play?", "can i do this with my nexus phone?", "...^^", "fucking hilarious some people", "Coins here I come", "wow 10 minutes ago this was empty now all people here wtf", "i dont rly like how they killed glenn D:", "i can imagine that", "okay", "not sure if i understood? its all free right?", "I would be so sad if this did not work because it took a while, thankfully it worked then", "uhm", "fucking helll! got my Coins!.", "yayy", "i usually choose the first offer in the list because its normally the easiest one", "i think some offers easier in countries like USA", "if you chose an offer make sure to finish it complete or you will not sign up for Coins guys!"];
var ChatAntiBot = ["i don't think anyone here is a bot", "yeah m8 were all bots?", "yeah we're all bots Kappa", "bot? i'm here for spamming this shit lol", "they have anti bot protection...", "sure bot, 0101010110 lmao", "no, we're not bots Kappa, or are we?! lol", "oh no, im a bot, thanks for letting me know"];
var ChatAntiFake = ["Eh, if you wanna miss out on those sweet free Coins, you do you", "Come on now, don't start spreading lies", "Why are you here then?", "Lol, sure bud", "Why did I manage to get so many free Coins then?", "I know why you'd think that, but give it a chance, you won't be disappointed"]
var ChatAntiSpam = ["Hahaha get the fuck out of here with this shit", "look at this rando coming here to spam, this is for grown ups buddy lol", "HAHAHAHA yeah screw those spammers!"];
var ChatAnswer = ["Is this your first time here?", "Do you need help?", "Eh, don't waste time in this chat, the conversations aren't that interesting", "Uh?"];


$(document).ready(function() {
    ChatStart();
	if(getCookie("banned-fn")){
		ChatLog("You are currently banned from the chat");	
	}
	else{
		ChatLog("Welcome to the chatroom, posting links or spamming will result in a kick.");
	}
    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
    $('#livechatInputChat')['keypress'](function(_0xaa63xc) {
        if (_0xaa63xc['keyCode'] == 13) {
            $('#livechatButtonChat')['click']();
        };
    });
    $('#livechatButtonChat')['click'](function() {
        if (ChatUserName == '') {
            $('#livechatContainerChatUserName')['fadeIn'](250);
            $('.livechatOverlaySmall').fadeIn(200);
        } else {
			$msg = $('#livechatInputChat')['val']();
			
			if(numMessages >= 6){
				if(getCookie("banned-fn") == false || getCookie("banned-fn") == null){	
					ChatLog("You have been banned from the chat for spamming for the next 2 minutes");	
					setCookie("banned-fn", true, 0.001388);
					numMessages = 0;
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiSpam[Random(0,ChatAntiSpam['length'])]);
					}, rng(5000, 8500));
				}
			}
			
			if(getCookie("banned-fn") == false || getCookie("banned-fn") == null){
				numMessages += 1;
				
				ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
				$('#livechatInputChat')['val']('');
				if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'])], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'])]);
					}, rng(8000, 9300));
				}
				else if($msg.indexOf("fake") >= 0 || $msg.indexOf("scam") >= 0){
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'])], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiFake[rng(0, ChatAntiFake['length'])]);
					}, rng(4000, 9300));
				}
				else if (!ChatReplied) {
					setTimeout(function() {
						if(getCookie("banned-fn") == false || getCookie("banned-fn") == null){
							ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAnswer[Random(0,ChatAnswer['length'])]);}
						}, rng(7000, 11000));
					ChatReplied = true;
				}
			}

        };
    });
    $('#livechatButtonChatUserName')['click'](function() {
        ChatUserName = $('#livechatInputChatUserName')['val']();
        $('#livechatContainerChatUserName')['fadeOut'](250, function() {
            $('.livechatOverlaySmall').fadeOut(200, function() {
                $('#livechatButtonChat')['click']();
            });
        });
    });


});

Date.prototype.getFullMinutes = function() {
    if (this.getMinutes() < 10) {
        return '0' + this.getMinutes();
    }
    return this.getMinutes();
};

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
$(function() {

    $('#livechatInputComment').focus(function() {
        $('#livechatContainerAdditional').slideDown(500);
    });
});

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
    if (_0xaa63x5 == '' || _0xaa63x6 == '') {
        return;
    };
	var ChatDate = new Date();
    $('<div class=\"livechatChatEntry\"><span class=\"livechatEntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"livechatEntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
    $('<div class=\"livechatChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatStart() {
    var _0xaa63x8 = function() {
        setTimeout(function() {
            var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
            var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
            var _0xaa63x0 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];	
			
			if(Random(0,5) == 4){
				ChatAddEntry(_0xaa63x9, "@" + _0xaa63x0 + " " + _0xaa63xa);
			}
			else{
				ChatAddEntry(_0xaa63x9, _0xaa63xa);
			}
			numMessages -= 1;
			if(numMessages < 0){
				numMessages = 0;
			}
			
            _0xaa63x8();
        }, Random(600, 11000));
    };
    _0xaa63x8();
};