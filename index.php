<?php
session_start();
$_SESSION['referPath'] = '/classic';
include($_SERVER['DOCUMENT_ROOT'] . "/includes/head.html");
if($_SERVER["SERVER_NAME"] === "localhost"){
	error_reporting(E_ALL);
	ini_set('display_errors', true);
}
require('php/values.php');
if(!empty($_SESSION['account'])){
	// nothing
}else{
	unset($_SESSION['email']);
	unset($_SESSION['account']);
	unset($_SESSION['customerId']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Nevergrind | Web Browser RPG | Free Online Game</title>
	<meta name="keywords" content="web, online, browser, free, game, rpg">
	<meta name="description" content="Nevergrind is a free web browser RPG created by Neverworks Games. Select from 12 races, 14 classes, and 12 talents as you fight your way to level 99!">
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes">
	<meta name="google-signin-client_id" content="1015425037202-g5ri6qnj14b8vrk33lnu130ver9f43ef.apps.googleusercontent.com">
	<meta name="google-site-verification" content="iC9l4midOGIXERCwagfpkef9ifunV-aZd_zlUUOPjIU" />
	<link rel='stylesheet' type='text/css' href="/classic/css/global.css">
	<?php
	$version = '2-0-15';
	?>
	<script>
		patchVersion='<?php echo $version ?>';
	</script>
	<link rel='stylesheet' type='text/css' href="/classic/css/nevergrind.<?php
		echo $_SERVER["SERVER_NAME"] === "localhost" ? '' : 'min.'; ?>css?v=<?php echo $version;
	?>">
	<link rel="stylesheet" href="/classic/css/font-awesome.min.css">
	<?php
		if (empty($_SESSION['account'])){
			require $_SERVER['DOCUMENT_ROOT'] . "/includes/loginCss.html";
		}
	?>
</head>

<body id="curtain">
	<div id="window2">
		<div id="lockOverlay"></div>
		<div id="intro">
			<canvas id="cWin4" width="1280" height="720"></canvas>
			<div id="introText" class="strongShadow noSelect"></div>
			<div id="introClick"></div>
			<div id="introText2" class="blackOutline3 noSelect"></div>
			<div id="credits" class="blackOutline3">
				<div id="creditTitle"></div>
				<div id="creditName"></div>
			</div>
		</div>
		<div id="gameView">
				<header id="currencyIndicator" class="strongShadow">
				<?php
				if (!empty($_SESSION['account'])){
					echo '<a id="manage-account" title="Manage Account" href="/account/?back=/" class="btn "> '. ucfirst($_SESSION['account']) .'</a>';
				}
				
				echo '<div class="modePanel">
					<a href="//twitch.tv/maelfyn" target="_blank">
						<i class="fa fa-twitch text-primary pointer"></i>
					</a>
					<a href="//youtube.com/c/Maelfyn" target="_blank">
						<i class="fa fa-youtube text-primary pointer"></i>
					</a>
					<a href="//discord.gg/n2gp8rC" target="_blank">
						<i class="fa fa-discord text-primary pointer"></i>
					</a>
					<a href="//www.facebook.com/maelfyn" target="_blank">
						<i class="fa fa-facebook text-primary pointer"></i>
					</a>
					<a href="//twitter.com/maelfyn" target="_blank">
						<i class="fa fa-twitter text-primary pointer"></i>
					</a>'; 
				echo '</div>';
				?>
				</header>;
			<div id="loadingmessage" class="strongShadow"></div>
			<div id="paused" class="strongShadow">PAUSED<br>Press ESC to Resume</div>
			<div id="lore">
				<div id="lorePortrait"></div>
				<div id="loreMsg" class='noSelect'></div>
				<div id="loreClick"></div>
			</div>
			<div id="combatId">
				<div id="combatLogWrap">
					<div id="combatLog" class='chatLogs'></div>
				</div>
			</div>
			<div id="chatId">
				<div id="chatLogWrap">
					<div id="chatLog" class='chatLogs'></div>
					<input type='text' id="chatInput" maxlength="240" autocomplete="off"></input>
				</div>
			</div>
			<div id="tooltip">
				<div id="tooltipname" class="strongShadow"></div>
				<div id="tooltipmsg"></div>
			</div>

			<div id="window3" class="strongShadow noSelect">
				<ul id="window3a" class='noSelect'></ul>
				<div id="myexpbarbg" class="barbg">
					<div id="myexpbarId"></div>
					<div id="myexpbarvalue" class="strongShadow"></div>
				</div>
			</div>
			<div id="window6" class="strongShadow noSelect">
				<ul id="window6a">
					<li class="buttons allskill" id="addmonsterId"></li>
					<li class="buttons allskill" id="toggleattackId"></li>
					<li class="buttons allskill" id="runId"></li>
				</ul>
			</div>

			<div id="curtainfade" class="strongShadow">
				<div id="loadingwait">Loading... Please Wait</div>
				<div id="bgWrap">
					<div id='bglogowrap'></div>
					<img id='bglogo' src="/classic/images1/ng_logo_532x428.png" alt="Nevergrind Logo" title="Nevergrind">
				</div>
			</div>
			<canvas id="spellcurtain" width="1280" height="720"></canvas>
			<div id="spellblind"></div>
			
			<div id="characterSelectScreen">
				<img style="position: absolute; bottom: 0; left: 0; width: 140px" 
				src="/classic/images1/neverworks.png">
				<?php
				if (!empty($_SESSION['account'])){
					echo '<div id="leftPaneBG">
						<a id="showCrystalWrap" target="_blank" href="/store/">
							<div id="showCrystals" class="strongShadow2 NGgradient">
								<i class="crystals crystals2 pointer"></i>
								Buy Crystals
							</div>
						</a>
						<div id="createcharacter" class="strongShadow NGgradient">Create Character</div>
						<div id="deletecharacter" class="strongShadow NGgradient">Delete Character</div>
						<div id="characterSlotPanel" class="strongShadow" >
							<div id="characterslot1"></div>
							<div id="characterslot2"></div>
							<div id="characterslot3"></div>
							<div id="characterslot4"></div>
							<div id="characterslot5"></div>
							<div id="characterslot6"></div>
							<div id="characterslot7"></div>
							<div id="characterslot8"></div>
							<div id="characterslot9"></div>
							<div id="characterslot10"></div>
							<div id="characterslot11"></div>
							<div id="characterslot12"></div>
							<div id="characterslot13"></div>
							<div id="characterslot14"></div>
							<div id="characterslot15"></div>
							<div id="characterslot16"></div>
						</div>
						<div id="logout" class="strongShadow"></div>
					</div>';
				}
				?>
				
				<div id="deletecharfade"></div>
				<div id="deletecharconfirm" class="strongShadow" >
					<div id="deleteconfirmmsg"></div>
					<div class="strongShadow NGgradient" id="deleteConfirm">Ok</div>
					<div class="strongShadow NGgradient" id="deleteCancel">Cancel</div>
				</div>
				<div id="rightPaneBG">
					<nav id="nglogo" class="strongShadow">
						<h1>
							<div>Nevergrind | Web-Based Browser RPG</div>
							<div>a free online game</div>
							<div>by <a href="https://www.linkedin.com/company/neverworks-games-llc">Neverworks Games</a></div>
						</h1>
						<img id="nevergrind" src="/classic/images1/ng_logo_532x428.png" alt="Nevergrind Logo" title="Nevergrind">

						<a href="/forums" title="Nevergrind Forums">Forums</a> |
						<a href="//discord.gg/n2gp8rC" title="Join the Nevergrind Discord Server">Discord Server</a> |
						<a href="/leaderboards/" class="links" title="Nevergrind Leaderboards">Leaderboards</a> | 
						<a href="/nevergrounds/" class="links" title="Character Profiles, Items, and More">Nevergrounds</a> | 
						<a href="//nevergrind.com/wiki" class="links" title="Nevergrind Wiki">Wiki</a> | 
						<a href="//nevergrind.com/blog" class="links" title="Browser Game Development News and Articles">Blog</a>
						
						<!--hr class="fancyHR">
						<marquee class="red">Season 2 of Nevergrind coming soon... date to be decided</marquee-->
						
						<hr class="fancyHR">
						<div>Other Games I Made:</div>
						<a href="/games/firmament-wars" title="Firmament Wars | Risk-Like Multiplayer Grand Strategy Browser Game" class="links">Firmament Wars</a>
						
						<hr class="fancyHR">
						
						<div>In Development:</div>
						<div>
							<a href="//nevergrind.com/ng2-test-server/">Nevergrind 2<br>Cooperative Multiplayer RPG<br>Coming to multiple platforms!</a>
						</div>
						
					</nav>
				</div>
				
				<div id="enterWorldWrap">
					<div id="zoneIndicator" class="strongShadow"></div>
					<div id='enterworld' class='strongShadow NGgradient'>
						Play Nevergrind
					</div>
					<div id="radioDifficulty">
						<div id="normalLabel" class='strongShadow'>Normal</div>
						<div id="nightmareLabel" class='strongShadow'>Nightmare</div>
						<div id="hellLabel" class='strongShadow'>Hell</div>
					</div>
				</div>
	<?php
	if (empty($_SESSION['account'])){
		require $_SERVER['DOCUMENT_ROOT'] . "/includes/loginModal.php";
		require $_SERVER['DOCUMENT_ROOT'] . "/includes/loginRefer.php";
	}
	?>
			</div>

			<div id="createWindowId">
				<div id="ccBg">
					<div id="entername">
						<div class="strongShadow">Character Name</div>
						<input type="text" id="charnameinput" class="strongShadow" maxlength="16">
					</div>
					<div id="creationInfo" class="strongShadow"></div>
					<div id="createcancelId">
						<div id="createbuttonId" class="okCancelStats strongShadow">Create</div>
						<div id="cancelbuttonId" class="okCancelStats strongShadow">Cancel</div>
						<?php
							echo '
							<div id="createCharacterCost">If your account has sufficient Never Crystals, you will be automatically charged when adding additional character slots to your account. Accounts start with two character slots.</div>
							<div id="createCharCrystalIcon" class="strongShadow crystalIcon">150</div>
							';
						?>
					</div>
					<div id="raceBox">
						<div align="center" class="strongShadow">Select Your Race</div>
						<div id="humanId" class="raceClassButtonsOff racelist strongShadow">Human</div>
						<div id="eruditeId" class="raceClassButtonsOff racelist strongShadow">Erudite</div>
						<div id="barbarianId" class="raceClassButtonsOff racelist strongShadow">Barbarian</div>
						<div id="highelfId" class="raceClassButtonsOff racelist strongShadow">High Elf</div>
						<div id="woodelfId" class="raceClassButtonsOff racelist strongShadow">Wood Elf</div>
						<div id="darkelfId" class="raceClassButtonsOff racelist strongShadow">Dark Elf</div>
						<div id="halfelfId" class="raceClassButtonsOff racelist strongShadow">Half Elf</div>
						<div id="dwarfId" class="raceClassButtonsOff racelist strongShadow">Dwarf</div>
						<div id="gnomeId" class="raceClassButtonsOff racelist strongShadow">Gnome</div>
						<div id="halflingId" class="raceClassButtonsOff racelist strongShadow">Halfling</div>
						<div id="trollId" class="raceClassButtonsOff racelist strongShadow">Troll</div>
						<div id="ogreId" class="raceClassButtonsOff racelist strongShadow">Ogre</div>
					</div>
					<div id="classBox">
						<div id="classBoxFoot"></div>
						<div id="classHeader" align="center" class="strongShadow">Select Your Class</div>
						<div id="warriorId" class="raceClassButtonsOff joblist strongShadow">Warrior</div>
						<div id="monkId" class="raceClassButtonsOff joblist strongShadow">Monk</div>
						<div id="rogueId" class="raceClassButtonsOff joblist strongShadow">Rogue</div>
						<div id="paladinId" class="raceClassButtonsOff joblist strongShadow">Paladin</div>
						<div id="rangerId" class="raceClassButtonsOff joblist strongShadow">Ranger</div>
						<div id="skId" class="raceClassButtonsOff joblist strongShadow">Shadow Knight</div>
						<div id="bardId" class="raceClassButtonsOff joblist strongShadow">Bard</div>
						<div id="clericId" class="raceClassButtonsOff joblist strongShadow">Cleric</div>
						<div id="druidId" class="raceClassButtonsOff joblist strongShadow">Druid</div>
						<div id="shamanId" class="raceClassButtonsOff joblist strongShadow">Shaman</div>
						<div id="necromancerId" class="raceClassButtonsOff joblist strongShadow">Necromancer</div>
						<div id="enchanterId" class="raceClassButtonsOff joblist strongShadow">Enchanter</div>
						<div id="magicianId" class="raceClassButtonsOff joblist strongShadow">Magician</div>
						<div id="wizardId" class="raceClassButtonsOff joblist strongShadow">Wizard</div>
					</div>
					<div id="genderDiv">
						<div align="center" class="strongShadow">Select Your Gender</div>
						<div id="maleId" class="genderButtonsOff strongShadow">Male</div>
						<div id="femaleId" class="genderButtonsOff strongShadow">Female</div>
					</div>
					<div id="modeDiv"><div align="center" class="strongShadow">Select Your Mode</div>
						<div id="normalId" class="modeButtonsOff strongShadow ccActive">Normal</div>
						<div id="hardcoreId" class="modeButtonsOff strongShadow ccDisabled">Hardcore</div>
					</div>					
					<div id="statBox">
						<div align="center" class="strongShadow">Starting Attributes</div>
						<div id="statgeneratewindow">
							STR: <span class="blackfont" id="ccSTR"></span><span class="green" id="ccStr"></span><br>
							STA: <span class="blackfont" id="ccSTA"></span><span class="green" id="ccSta"></span><br>
							AGI: <span class="blackfont" id="ccAGI"></span><span class="green" id="ccAgi"></span> <br>
							DEX: <span class="blackfont" id="ccDEX"></span><span class="green" id="ccDex"></span><br>
							WIS: <span class="blackfont" id="ccWIS"></span><span class="green" id="ccWis"></span><br>
							INT: <span class="blackfont" id="ccINT"></span><span class="green" id="ccInt"></span><br>
							CHA: <span class="blackfont" id="ccCHA"></span><span class="green" id="ccCha"></span>
						</div>
					</div>
				</div>
			</div>

			<div id="eWin"></div>
			<canvas id="cWin" width="1280" height="720"></canvas>
			<div id="eWin2"></div>
			<canvas id="cWin2" width="1280" height="720"></canvas>
			<div id="eWin3"></div>
			<canvas id="cWin3" width="1280" height="720"></canvas>
			<div id="deathScreen" class="blackOutline3"></div>
			<audio id="bgmusic" autoplay preload="auto"></audio>
			<audio id="bgamb1" autoplay preload="auto"></audio>
			<audio id="bgamb2" autoplay preload="auto"></audio>
			<div id="spellbardiv" class="strongShadow">
				<div id="spellbarbg" class="barbg">
					<canvas id="spellbarId" width="125" height="14"></canvas>
					<div id='spellbarlabel'>CASTING</div>
				</div>
			</div>

			<div id="cityWrap"></div>


			<div id="battleReport" class="strongShadow">
				<div id="battleReportHead" class="winHeader">
					Battle Statistics
				</div>
				<div id="battleReportContent"></div>
			</div>
			<div id="QindicatorWrap" class="strongShadow">
				<div id="QindicatorHead"></div>
				<div id="QindicatorContent"></div>
			</div>

			<div id="window2scrollsky"></div>
			<img id="window2zoneday" src="/classic/images1/blank.png" alt="Blank image placeholder">
				<!-- Travel Window -->


			<div id="worldMap" class='noSelect'>
				<div id="zoneSelectWrap"></div>
				<div id="travelMap"></div>
			</div>

			<div id="options" class='noSelect'>
			</div>			
			
			<div id="myhpbardiv" class="strongShadow">
				<div id="myhpbarbg" class="barbg">
					<canvas id="myhpbarId" width="192" height="14"></canvas>
				</div>
				<div id="mympbarbg" class="barbg">
					<canvas id="mympbarId" width="192" height="14"></canvas>
				</div>	
				<div id="buffWindow"></div>
			</div>
			<div id="lastNameWrap">
				Enter Last Name:<br>
				<input id="lastName" class="strongShadow" type="text" maxlength="16">
				<div id="lastNameOK" class="strongShadow NGgradient">Ok</div>
				<div id="lastNameCancel" class="strongShadow NGgradient">Cancel</div>
			</div>

			<div id="pethpbardiv" class="strongShadow">
				<div id="pethpbarbg" class='barbg'>
					<canvas id="pethpbarId" width="192" height="14"></canvas>
				</div>
			</div>


			<div id="mobBar" class="nameplateBlack">
				<div id="mobName" class="strongShadow"></div>
				<div id="mobLevel" class="strongShadow"></div>
				<div id="monsterhpbarbg" class="barbg">
					<canvas id="monsterhpbarId" width="300" height="24"></canvas>
				</div>
				<img id="mobPlate" src="/classic/images1/blank.png" alt="Blank image placeholder">
				<div id="mobDetails">
					<div id="mobTraits" class="strongShadow"></div>
					<div id="mobIcons0" class="mobIcons"></div>
					<div id="mobIcons1" class="mobIcons"></div>
					<div id="mobIcons2" class="mobIcons"></div>
					<div id="mobIcons3" class="mobIcons"></div>
					<div id="mobIcons4" class="mobIcons"></div>
				</div>
			</div>

			<div id="mob2">
				<img id="mobShadow2" class="shadows" src="/classic/images1/blank.png" alt="Blank image placeholder">
				<div id="mobName2" class="strongShadow"></div>
				<canvas id="mobPic2" width="1280" height="720"></canvas>
			</div>
			<div id="mob1">
				<img id="mobShadow1" class="shadows" src="/classic/images1/blank.png" alt="Blank image placeholder">
				<div id="mobName1" class="strongShadow"></div>
				<canvas id="mobPic1"></canvas>
			</div>
			<div id="mob4">
				<img id="mobShadow4" class="shadows" src="/classic/images1/blank.png" alt="Blank image placeholder">
				<div id="mobName4" class="strongShadow"></div>
				<canvas id="mobPic4"></canvas>
			</div>
			<div id="mob0">
				<img id="mobShadow0" class="shadows" src="/classic/images1/blank.png" alt="Blank image placeholder">
				<div id="mobName0" class="strongShadow"></div>
				<canvas id="mobPic0"></canvas>
			</div><
			<div id="mob3">
				<img id="mobShadow3" class="shadows" src="/classic/images1/blank.png" alt="Blank image placeholder">
				<div id="mobName3" class="strongShadow"></div>
				<canvas id="mobPic3"></canvas>
			</div>


			<div id="mob5">
				<img id="petShadow" class="shadows" src="/classic/images1/blank.png" alt="Blank image placeholder">
				<div id="petName" class="strongShadow"></div>
				<img id="petImage" src="/classic/images1/blank.png" alt="Blank image placeholder">
			</div>

			<div id="window1" class="strongShadow noSelect">
				<div id="statHeader" class="winHeader">
					Character Statistics
				</div>
				<div id="statTabs">
					<div id="mainStat" class="statButton">Main</div>
					<div id="offenseStat" class="statButton">Offensive</div>
					<div id="defenseStat" class="statButton">Defensive</div>
					<div id="talentStat" class="statButton">Talents</div>
					<div id="conquestStat" class="statButton">Conquests</div>
				</div>
				<div id="statContent"></div>
			</div>
			<div id="bank">
				<div class="strongShadow winHeader" id="bankHeader">Bank</div>
				<div id="bankGold" class="goldIndicator strongShadow">
					<div id="bankGoldIcon" class="goldIcon"></div>
					<div id="bankGoldAmount"></div>
				</div>
				<div id='addBankSlots' class='strongShadow'>
					<div id="bankCost" class="crystalIcon" title="Adds Nine Bank Slots"></div>
					40: Expand Bank
				</div>
				<div id="bankTabWrap">
					<div class='bankTab bankTabActive'>I</div>
					<div class='bankTab bankTabDisabled'>II</div>
					<div class='bankTab bankTabDisabled'>III</div>
					<div class='bankTab bankTabDisabled'>IV</div>
					<div class='bankTab bankTabDisabled'>V</div>
					<div class='bankTab bankTabDisabled'>VI</div>
					<div class='bankTab bankTabDisabled'>VII</div>
					<div class='bankTab bankTabDisabled'>VIII</div>
					<div class='bankTab bankTabDisabled'>IX</div>
					<div class='bankTab bankTabDisabled'>X</div>
					<div class='bankTab bankTabDisabled'>XI</div>
					<div class='bankTab bankTabDisabled'>XII</div>
				</div>
				<ul id="bankContainer"></ul>
			</div>
			<!-- inventory window -->
			<div id="ttItem" class="strongShadow">
				<div id="ttItemName">&nbsp;</div>
				<div id="ttItemMsg">&nbsp;</div>
			</div>
			<div id="questJournal" class="strongShadow staggeredGrey noSelect">
				<div id="questHeader" class="strongShadow winHeader">Quest Journal</div>
				<div id="questJournalContent">
				</div>
				<div id="questJournalContent2">
				</div>
			</div>
			<div id="inventoryWindow" class='noSelect'>
				<div class="strongShadow winHeader" id="invHeader">Equipment & Inventory</div>
				<ul id="gearContainer"></ul>
				<div id="destroyItem" class="strongShadow">Destroy</div>
				<ul id="inventoryContainer"></ul>
				<div id="inventoryGold" class="goldIndicator strongShadow">
					<div id="inventoryGoldIcon" class="goldIcon"></div>
					<div id="inventoryGoldAmount"></div>
				</div>
			</div>

			<div id="window5Id" class='noSelect'>
				<div id="talentNotify"></div>
				<div id="itemNotify"></div>
				<div id="mapNotify"></div>
				<div id="questNotify"></div>
				<div id="charsheetId" class="buttonsManage" title="(C) Character Stats"></div>
				<div id="inventoryId" class="buttonsManage" title="(I or E) Inventory & Equipment"></div>
				<div id="travelId" class="buttonsManage" title="(M) Map"></div>
				<div id="questId" class="buttonsManage" title="(Q) Quests"></div>
				<div id="optionsId" class="buttonsManage" title="(X) Options"></div>
				<div id="campId" class="buttonsManage" title="Camp"></div>
			</div>
			<img class="hide" src="/classic/images1/neverworks.png" alt="Neverworks Logo" title="Neverworks">
			
			<div id="errorMsg" class="strongShadow">
				<noscript>In order to play NeverGrind, you must enable JavaScript!</noscript>
			</div>
			<div id="goldInputWrap">
				<div id="inventoryGoldOk" class="transferGold strongShadow">Ok</div>
				<input id="goldInput" type="number" class="goldInput strongShadow" value="0">
			</div>
		</div> <!-- gameView -->
	</div><!-- window 2 -->

	<script src='/classic/scripts/libs/all-libs.min.js'></script>
	<script src='//cdn1.kongregate.com/javascripts/kongregate_api.js'></script>
	
<?php
require $_SERVER['DOCUMENT_ROOT'] . "/includes/loginJs.php";
?>
<script src="//apis.google.com/js/platform.js?onload=loginRenderButton" async defer></script>

<?php
require $_SERVER['DOCUMENT_ROOT'] . "/includes/ga.html";
if (empty($_SESSION['account'])){
	require $_SERVER['DOCUMENT_ROOT'] . "/includes/loginKong.html";
}
?>
	
	<script>
	(function(d){
		if(location.host==='localhost'){
			var _scriptLoader = [
				'functions4',
				'core',
				'battle',
				'skills',
				'monsters',
				'quests',
				'town',
				'items',
				'ui'
			];
		}else{
			var _scriptLoader = [
				'nevergrind.min'
			];
		}
		if (location.hash !== ""){
			var _scriptLoader = [
				'nevergrind.min'
			];
		}
		var target = d.getElementsByTagName('script')[0];
		for(var i=0, len=_scriptLoader.length; i<len; i++){
			var x=d.createElement('script');
			x.src = '/classic/scripts/'+_scriptLoader[i]+'.js?v=' + patchVersion;
			x.async=false;
			target.parentNode.appendChild(x);
		}
	})(document);
	</script>
</body>
</html>
