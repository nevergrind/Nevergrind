
if(location.pathname.indexOf("nevergrounds")===-1){
	nevergrounds = false;
}else{
	nevergrounds = true;
}

var g = {
    oldExp: 0,
    lostGold: 0,
    lostExp: 0,
    view: "Main",
    difficulty: 1,
    subjugateStatus: 1,
    autoAttackStatus: 1,
    amplifyDamageStatus: false,
    coldBloodBonus: 0,
    gaspingFrenzyStatus: false,
    petAlive: false,
    blindStatus: 1,
    speed: .5,
    showPortal: false,
    lastDrop: '',
    draggingWindows: false,
    familiarName: ''
}
g.hardcoreDeathStatus = false;
var monsterID = 0,
    mob = [];

var my;
function initMob() {
    tlMob = [];
    tlMobSh = [];
    mobEnvenomTimer = [];
    mobEngulfingDarknessTimer = [];
    mobStaticFieldTimer = [];
    mobBlizzardTimer = [];
    mobConflagrationTimer = [];
    mobsEnvenomTimer = [];
    mobsEngulfingDarknessTimer = [];
    mobsStaticFieldTimer = [];
    mobsBlizzardTimer = [];
    mobsConflagrationTimer = [];
    mobFearTimers = [];
    mobGlobeOfDarknessTimers = [];
    mobMindNumbTimers = [];
    mobWeakenTimers = [];
    mobYawnTimers = [];
    MthornsTimers = [];
    MlavaTimers = [];
    MenrageTimers = [];
    MflurryTimers = [];
    MamplifyMagicTimers = [];
    MsanctuaryTimers = [];
    MbarrierTimers = [];
    MironMaidenTimers = [];
    mobsSilenceTimer = [];
    for (var i = 0; i <= 5; i++) {
        mob[i] = {
            name: "",
            level: 0,
            maxHp: 0,
            hp: 0,
            xp: 0,
            str: 0,
            def: 0,
            intel: 0,
            tc: 0,
            gold: 0,
            item1: "",
            item2: "",
            skill1: "",
            skill2: "",
            skill3: "",
            skill4: "",
            poison: 0,
            magic: 0,
            lightning: 0,
            fire: 0,
            cold: 0,
            image: "",
            mp: 20,
            envenomTicks: 0,
            engulfingDarknessTicks: 0,
            staticFieldTicks: 0,
            blizzardTicks: 0,
            conflagrationTicks: 0,
            castFreq: 0,
            harmTouch: false,
            rune: false,
            runeHp: 0,
            skeleton: false,
            elemental: false,
            thorns: false,
            lavaShield: false,
            resolution: false,
            resolutionStatus: false,
            weaken: false,
            attackNow: false,
            imageWidth: 0,
            speed: 0,
            castSpeed: 0,
            rare: 1,
            dotDamage: 0,
            castingStatus: false,
            attack: TDC(),
            doubleAttack: false,
            rootStatus: 0,
            snareStatus: false,
            blindStatus: false,
            stunStatus: false,
            fearStatus: false,
            dazeStatus: false,
            dazeTimer: TDC(),
            hemorrhageTickCount: 0,
            hemorrhageTickDamage: 0,
            hemorrhageInterval: TDC(),
            furiousScorn: 0,
            lacerate: 0,
            widowStrikeDamage: 0,
            widowStrikeTickCount: 0,
            widowStrikeInterval: TDC(),
            afflictionTickInterval: TDC(),
            chillStatus: false,
            riftStatus: false,
            faerieFlameTick: 0,
            igniteBloodTickInterval: TDC(),
            cascadingDarknessTickInterval: TDC(),
            faerieFlameTickCount: 0,
            faerieFlameTickInterval: TDC(),
            scourgeTickInterval: TDC(),
            doomingDarknessTickCount: 0,
            doomingDarknessTick: 0,
            doomingDarknessInterval: TDC(),
            siphonStrength: 0,
            heatBloodTickCount: 0,
            heatBloodTick: 0,
            heatBloodInterval: TDC(),
            thornsActive: 1,
            lavaShieldActive: 1,
            resolutionActive: 1,
            dotActive: TDC(),
            thornsTimer: TDC(),
            lavaShieldTimer: TDC(),
            spellActive: TDC(),
            stunTimer: TDC(),
            blindTimer: TDC(),
            fearTimer: TDC(),
            rootTimer: TDC(),
            sleepStatus: false,
            sleepTimer: TDC(),
            consonantChain: 0,
            slowTimer: TDC(),
            euphonicHymn: 0,
            euphonicHymnTimer: TDC(),
            petDot: false,
            charmStatus: false,
            wolf: true,
            fearAnimate: TDC(),
            silenceStatus: false,
            silenced: false,
            animateStun: TDC(),
            enrageStatus: false,
            enrageTimer: TDC(),
            flurryStatus: false,
            flurryTimer: TDC(),
            ampMagicStatus: false,
            ampMagicTimer: TDC(),
            sanctuaryStatus: false,
            sanctuaryTimer: TDC(),
            barrierStatus: false,
            barrierTimer: TDC(),
            drainStatus: false,
            ironMaidenStatus: false,
            ironMaidenTimer: TDC(),
            fleeStatus: 0,
            fleeNow: false,
            coldTimer: TDC(),
            enrage: false,
            flurry: false,
            ampMagic: false,
            sanctuary: false,
            barrier: false,
            ironMaiden: false,
            layHands: false,
            martyr: false,
            martyrTiming: TDC(),
            silenceTimer: TDC(),
            dronesOfDoomTick: 0,
            dronesOfDoomTickCount: 0,
            dronesOfDoomTickInterval: TDC(),
            sylvanCreepInterval: TDC(),
            driftingDeathTick: 0,
            driftingDeathTickCount: 0,
            driftingDeathInterval: 0,
            scourgeTick: 0,
            scourgeTickCount: 0,
            scourgeInterval: 0,
            scourgeStatus: false,
            slowStatus: false,
            togorsInsectsTimeout: TDC(),
            regenStatus: true,
            afflictionTick: 0,
            afflictionTickCount: 0,
            afflictionInterval: 0,
            afflictionStatus: false,
            frozenStatus: false,
            frozenTimer: TDC(),
            shiftlessDeedsTimeout: TDC(),
            devouringPlagueTick: 0,
            devouringPlagueTickCount: 0,
            devouringPlagueInterval: TDC(),
            cascadingDarknessTick: 0,
            cascadingDarknessTickCount: 0,
            cascadingDarknessInterval: 0,
            igniteBloodTick: 0,
            igniteBloodTickCount: 0,
            igniteBloodInterval: 0,
            bondOfDeathTick: 0,
            bondOfDeathTickCount: 0,
            bondOfDeathInterval: TDC(),
            asystoleTickInterval: TDC(),
            gaspingEmbraceTickInterval: TDC(),
            driftingDeathTickInterval: TDC(),
            asystoleTick: 0,
            asystoleTickCount: 0,
            asystoleInterval: 0,
            asystoleStatus: false,
            ImageBaseY: 0,
            ImageBaseX: 0,
            shiftlessStatus: 0,
            gaspingEmbraceTick: 0,
            gaspingEmbraceTickCount: 0,
            gaspingEmbraceInterval: 0,
            gaspingEmbraceStatus: false,
            fallingStatus: false,
            shatterStatus: false,
            stasisFieldStatus: false,
            traits: "",
            ID: 0,
            shreddingAura: false,
            tashaniaStatus: false,
            attackStatus: 1
        };
        tlMob[i] = TM();
        tlMobSh[i] = TM();
        mobEnvenomTimer[i] = TDC();
        mobEngulfingDarknessTimer[i] = TDC();
        mobStaticFieldTimer[i] = TDC();
        mobBlizzardTimer[i] = TDC();
        mobConflagrationTimer[i] = TDC();
        mobsEnvenomTimer[i] = TDC();
        mobsEngulfingDarknessTimer[i] = TDC();
        mobsStaticFieldTimer[i] = TDC();
        mobsBlizzardTimer[i] = TDC();
        mobsConflagrationTimer[i] = TDC();
        mobFearTimers[i] = TDC();
        mobGlobeOfDarknessTimers[i] = TDC();
        mobMindNumbTimers[i] = TDC();
        mobWeakenTimers[i] = TDC();
        mobYawnTimers[i] = TDC();
        MthornsTimers[i] = TDC();
        MlavaTimers[i] = TDC();
        MenrageTimers[i] = TDC();
        MflurryTimers[i] = TDC();
        MamplifyMagicTimers[i] = TDC();
        MsanctuaryTimers[i] = TDC();
        MbarrierTimers[i] = TDC();
        MironMaidenTimers[i] = TDC();
        mobsSilenceTimer[i] = TDC();
    }
}
initMob();
function TM() {
    return new TimelineMax({
        repeat: 0,
        repeatDelay: 1
    });
}

function TDC() {
    return new TweenMax.delayedCall(0, '');
}
// equip values
var strBuff = 0,
    staBuff = 0,
    intelBuff = 0,
    wisBuff = 0,
    dexBuff = 0,
    agiBuff = 0,
    chaBuff = 0,
    maxHpBuff = 0,
    maxMpBuff = 0,
    attackPowerBuff = 0,
    armorBuff = 0,
    hasteBuff = 0,
    svpoisonBuff = 0,
    svmagicBuff = 0,
    svlightningBuff = 0,
    svcoldBuff = 0,
    svfireBuff = 0,
    cooldownDurationBuff = 0,
    spellHasteBuff = 0,
    phyMitBuff = 0,
    magMitBuff = 0,
    attackStatus = 1,
    familiar = [],
    familiarId = 0,
    hoverItemStatus = false,
    Cstr = 10,
    Csta = 10,
    Cwis = 0,
    Cint = 0,
    Cdex = 0,
    Ccha = 0,
    Cagi = 0,
    Gstr = 5,
    Gsta = 5,
    meditateStatus = false,
    newSlotNumber = 1,
    cajolingWhispersTicking = TDC(),
    mySingingSword = false,
    mySingingSwordTimer = TDC(),
    myFrenzy = false,
    myFrenzyTimer = TDC(),
    myCounter = false,
    invincibleTimer = TDC(),
    enteredWorldOnce = false,
    nameFocus = false,
    trainSkill = "",
    cost = 0,
    flashingCityBorder = TDC(),
    ambushCooldown = false,
    monsterFound = false,
    enteredWorld = false,
    weatherStatus = 0,
    weatherStatusMessage = 0,
    flashingBorderTimer = TDC(),
    dropClass = "",
    dropID = "",
    dragID = "",
    dragSlot = 0,
    dropSlot = 0,
    dropHtml = "",
    dragClass = "",
    dragHtml = "",
    runTimer = TDC(),
    runTimer2 = TDC(),
    myBashTimer = TDC(),
    runBonus = 0,
    animateMobNameTimeout0 = 0,
    animateMobNameTimeout1 = 0,
    animateMobNameTimeout2 = 0,
    animateMobNameTimeout3 = 0,
    checkZoneTrigger = 0,
    toggleAttackBorder = false,
    ambushStatus = 1,
    cobraStrikeBonus = 1,
    stoneFistStatus = 1,
    innerPeaceStatus = 1,
    myAttack = TDC(),
    myAttack2 = TDC(),
    toggleAttack = 1,
    spellCooldown = 0,
    toggleNameFlash = false,
    myHpTick = 0,
    myMpTick = 0,
    doubletimer1 = TDC(),
    doubletimer2 = TDC(),
    refreshSkill = 0,
    refreshGlobal = 0;
function fix(foo){
	foo=(foo+0).toFixed(1);
	if(foo[foo.length-1]==0){
		foo=foo.split("");
		foo.pop();
		foo.pop();
		foo=foo.join("");
		return foo;
	}else{
		foo=foo-0;
		return foo.toFixed(1);
	}
}
function green(s) {
    return "<span class='green'>" + s + "</span>";
}

function red(s) {
    return "<span class='redfont'>" + s + "</span>";
}

function red2(s) {
    return "<span class='red'>" + s + "</span>";
}

function yellow(s) {
    return "<span class='yellow'>" + s + "</span>";
}

function gold(s) {
    return "<span class='gold'>" + s + "</span>";
}

function blue1(s) {
    return "<span class='blue1'>" + s + "</span>";
}

function blue2(s) {
    return "<span class='blue2'>" + s + "</span>";
}

function blue3(s) {
    return "<span class='blue3'>" + s + "</span>";
}

function darkgreen(s) {
    return "<span class='darkgreen'>" + s + "</span>";
}

function green3(s) {
    return "<span class='green3'>" + s + "</span>";
}

function magenta(s) {
    return "<span class='magenta'>" + s + "</span>";
}

function grey(s) {
    return "<span class='grey'>" + s + "</span>";
}

function normal(foo){
	return '<span class="normal">'+foo+'</span>';
}
function magical(foo){
	return '<span class="magical">'+foo+'</span>';
}
function rare(foo){
	return '<span class="rare">'+foo+'</span>';
}
function unique(foo){
	return '<span class="unique">'+foo+'</span>';
}
function set(foo){
	return '<span class="set">'+foo+'</span>';
}
function legendary(foo){
	return '<span class="legendary">'+foo+'</span>';
}
function showTooltip(that,z){
	var x="#4169e1";
	var S = dropSlot;
	if(!nevergrounds){
		var Z = P[z][S];
	}else{
		var Z = P['eq'][S];
	}
	var J = my.job;
	if(Z.rarity===0){ 
		NG.ttItemName.innerHTML = normal(Z.name); 
	}else if(Z.rarity===1){ 
		NG.ttItemName.innerHTML = magical(Z.name); 
	}else if(Z.rarity===2){ 
		NG.ttItemName.innerHTML = rare(Z.name); 
	}else if(Z.rarity===3){ 
		NG.ttItemName.innerHTML = unique(Z.name); 
	}else if(Z.rarity===4){ 
		NG.ttItemName.innerHTML = set(Z.name); 
	}else if(Z.rarity===5){ 
		NG.ttItemName.innerHTML = legendary(Z.name); 
	}
	var foo = "<div id='itemIcon'><div id='itemIconImg'></div></div>";
	if(!nevergrounds){
		if(z==="item"){
			if(S>23){
				var kek = itemSellValue((that.parent().index())+24);
				foo += ("Cost: "+kek+" Gold<br><br>").fontcolor("#00aa00");
			}
			if(S<=23&&cityStatus===true){
				var kek = itemSellValue(that.parent().index());
				foo += ("Sale Value: "+kek+" Gold<br><br>").fontcolor("#00aa00");
			}
		}
	}
	if(Z.quality===1){ 
		foo += "<span class='exceptionalItem'>Exceptional Quality</span><br>"; 
	}
	if(Z.quality===2){ 
		foo += "<span class='eliteItem'>Elite Quality</span><br>"; 
	}
	if(Z.req){
		if(Z.req>my.level){ 
			foo += ("Required Level: "+Z.req+"<br><br>").fontcolor("#ff0000"); 
		}else{ 
			foo += ("Required Level: "+Z.req+"<br><br>").fontcolor("#ffffff"); 
		}
	}
	if(!nevergrounds){
		foo += itemType(z, S)+"<br>";
	}else{
		foo += itemType('eq', S)+"<br>";
	}
	hoverType = Z.itemSlot;
	if(Z.type==="shield"){
		foo += ~~(setShieldBlockChance(Z.yPos)*100)+"% Block Rate<br>";
	}
	if(Z.type==="cloth"){
		foo += "Cloth Armor<br>";
	}
	if(Z.type==="leather"){
		if((J==="Necromancer"&&!Z.weight)||
		(J==="Enchanter"&&!Z.weight)||
		(J==="Magician"&&!Z.weight)||
		(J==="Wizard"&&!Z.weight)){
			var bar = yellow("Leather Armor<br>");
		}else{
			var bar = "Leather Armor<br>";
		}
		foo += bar;
	}
	if(Z.type==="chain"){
		if(J==="Necromancer"||
		J==="Enchanter"||
		J==="Magician"||
		J==="Wizard"||
		(J==="Monk"&&!Z.weight)||
		(J==="Druid"&&!Z.weight)){
			var bar = yellow("Chain Armor<br>");
		}else{
			var bar = "Chain Armor<br>";
		}
		foo += bar;
	}
	if(Z.type==="plate"){
		if(J==="Druid"||
		J==="Monk"||
		J==="Necromancer"||
		J==="Enchanter"||
		J==="Magician"||
		J==="Wizard"||
		(J==="Rogue"&&!Z.weight)||
		(J==="Ranger"&&!Z.weight)||
		(J==="Shaman"&&!Z.weight)){
			var bar = yellow("Plate Armor<br>");
		}else{
			var bar = "Plate Armor<br>";
		}
		foo += bar;
	}
	if(Z.type==="slashed"){
		if(my.oneHandSlash>=1){
			foo += "One-Hand Slashing<br>Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
		}else{
			foo += yellow("One-Hand Slashing")+"<br>Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
		}
	}
	if(Z.type==="cleaved"){
		if(my.twoHandSlash>=1){
			foo += "Two-Hand Slashing<br>Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
		}else{
			foo += yellow("Two-Hand Slashing")+"<br>Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
		}
	}
	if(Z.type==="crushed"){
		if(my.oneHandBlunt>=1){
			foo += "One-Hand Blunt<br>Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
		}else{
			foo += yellow("One-Hand Blunt")+"<br>Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
		}
	}
	if(Z.type==="smashed"||Z.type==="staff"){
		if(my.twoHandBlunt>=1){
			foo += "Two-Hand Blunt<br>Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
		}else{
			foo += yellow("Two-Hand Blunt")+"<br>Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
		}
	}
	if(Z.type==="pierced"){
		if(my.piercing>=1){
			foo += "Piercing<br>Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
		}else{
			foo += yellow("Piercing")+"<br>Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
		}
	}
	if(Z.type==="range"){
		foo += "Damage: "+Z.damage+" Delay: "+(Z.delay/100).toPrecision(2)+"<br>";
	}
	foo += "<br>";
	if(Z.armor){
		foo += ("+"+Z.armor+" Armor<br>").fontcolor(x);
	}
	if(Z.rarity===2){
		if(Z.enhancedArmor){ 
			foo += ("+"+Z.enhancedArmor+"% Enhanced Armor<br>").fontcolor(x); 
		}
		if(Z.ias){ 
			foo += ("+"+Z.ias+"% Increased Attack Speed<br>").fontcolor(x); 
		}
	}
	if(Z.weight){ foo += ("Reduced Weight<br>").fontcolor(x); }
	if(Z.hp){ foo += ("+"+Z.hp+" Maximum Health<br>").fontcolor(x); }
	if(Z.mp){ foo += ("+"+Z.mp+" Maximum Mana<br>").fontcolor(x); }
	if(Z.str>0){ foo += ("+"+Z.str+" Strength<br>").fontcolor(x); }
	if(Z.str<0){ foo += (Z.str+" Strength<br>").fontcolor(x); }
	if(Z.sta){ foo += ("+"+Z.sta+" Stamina<br>").fontcolor(x); }
	if(Z.agi){ foo += ("+"+Z.agi+" Agility<br>").fontcolor(x); }
	if(Z.dex){ foo += ("+"+Z.dex+" Dexterity<br>").fontcolor(x); }
	if(Z.intel){ foo += ("+"+Z.intel+" Intelligence<br>").fontcolor(x); }
	if(Z.wis){ foo += ("+"+Z.wis+" Wisdom<br>").fontcolor(x); }
	if(Z.cha>0){ foo += ("+"+Z.cha+" Charisma<br>").fontcolor(x); }
	if(Z.cha<0){ foo += (Z.cha+" Charisma<br>").fontcolor(x); }
	if(Z.allStats){ foo += ("+"+Z.allStats+" All Attributes<br>").fontcolor(x); }
	if(Z.hpRegen){ foo += ("+"+Z.hpRegen+" Health Per Tick<br>").fontcolor(x); }
	if(Z.mpRegen){ foo += ("+"+Z.mpRegen+" Mana Per Tick<br>").fontcolor(x); }
	if(Z.attack){ foo += ("+"+Z.attack+" Attack<br>").fontcolor(x); }
	if(Z.oneHandSlash){ foo += ("+"+Z.oneHandSlash+" One-Hand Slashing<br>").fontcolor(x); }
	if(Z.twoHandSlash){ foo += ("+"+Z.twoHandSlash+" Two-Hand Slashing<br>").fontcolor(x); }
	if(Z.oneHandBlunt){ foo += ("+"+Z.oneHandBlunt+" One-Hand Blunt<br>").fontcolor(x); }
	if(Z.twoHandBlunt){ foo += ("+"+Z.twoHandBlunt+" Two-Hand Blunt<br>").fontcolor(x); }
	if(Z.piercing){ foo += ("+"+Z.piercing+" Piercing<br>").fontcolor(x); }
	if(Z.handtohand){ foo += ("+"+Z.handtohand+" Hand to Hand<br>").fontcolor(x); }
	if(Z.offense){ foo += ("+"+Z.offense+" Offense<br>").fontcolor(x); }
	if(Z.dualWield){ foo += ("+"+Z.dualWield+" Dual Wield<br>").fontcolor(x); }
	if(Z.doubleAttack){ foo += ("+"+Z.doubleAttack+" Double Attack<br>").fontcolor(x); }
	if(Z.defense){ foo += ("+"+Z.defense+" Defense<br>").fontcolor(x); }
	if(Z.dodge&&J!=="Monk"){ foo += ("+"+Z.dodge+" Dodge<br>").fontcolor(x); }
	if(Z.dodge&&J==="Monk"){ foo += ("+"+Z.dodge+" Block<br>").fontcolor(x); }
	if(Z.parry){ foo += ("+"+Z.parry+" Parry<br>").fontcolor(x); }
	if(Z.riposte){ foo += ("+"+Z.riposte+" Riposte<br>").fontcolor(x); }

	if(Z.alteration&&J!=="Bard"){ foo += ("+"+Z.alteration+" Alteration<br>").fontcolor(x); }
	if(Z.abjuration&&J!=="Bard"){ foo += ("+"+Z.abjuration+" Abjuration<br>").fontcolor(x); }
	if(Z.evocation&&J!=="Bard"){ foo += ("+"+Z.evocation+" Evocation<br>").fontcolor(x); }
	if(Z.conjuration&&J!=="Bard"){ foo += ("+"+Z.conjuration+" Conjuration<br>").fontcolor(x); }
	if(Z.channeling&&J!=="Bard"){ foo += ("+"+Z.channeling+" Channeling<br>").fontcolor(x); }

	if(Z.alteration&&J==="Bard"){ foo += ("+"+Z.alteration+" Singing<br>").fontcolor(x); }
	if(Z.evocation&&J==="Bard"){ foo += ("+"+Z.evocation+" Percussion<br>").fontcolor(x); }
	if(Z.conjuration&&J==="Bard"){ foo += ("+"+Z.conjuration+" Wind<br>").fontcolor(x); }
	if(Z.abjuration&&J==="Bard"){ foo += ("+"+Z.abjuration+" String<br>").fontcolor(x); }
	if(Z.channeling&&J==="Bard"){ foo += ("+"+Z.channeling+" Brass<br>").fontcolor(x); }

	if(Z.allSkills){ foo += ("+"+Z.allSkills+" All Skills<br>").fontcolor(x); }
	if(Z.critChance){ foo += ("+"+Z.critChance+" Critical Chance<br>").fontcolor(x); }
	if(Z.critDamage){ foo += ("+"+Z.critDamage+"% Critical Damage<br>").fontcolor(x); }
	if(Z.phyMit){ foo += ("+"+Z.phyMit+" Maximum Physical Reduction<br>").fontcolor(x); }
	if(Z.magMit){ foo += ("+"+Z.magMit+" Maximum Magic Reduction<br>").fontcolor(x); }
	if(Z.resistPoison){ foo += ("+"+Z.resistPoison+" Resist Poison<br>").fontcolor(x); }
	if(Z.resistMagic){ foo += ("+"+Z.resistMagic+" Resist Arcane<br>").fontcolor(x); }
	if(Z.resistLightning){ foo += ("+"+Z.resistLightning+" Resist Lightning<br>").fontcolor(x); }
	if(Z.resistCold){ foo += ("+"+Z.resistCold+" Resist Cold<br>").fontcolor(x); }
	if(Z.resistFire){ foo += ("+"+Z.resistFire+" Resist Fire<br>").fontcolor(x); }
	if(Z.allResist){ foo += ("+"+Z.allResist+" All Resistances<br>").fontcolor(x); }
	if(Z.goldFind){ foo += ("+"+Z.goldFind+"% Gold Gain<br>").fontcolor(x); }
	if(Z.expFind){ foo += ("+"+Z.expFind+"% Exp Gain<br>").fontcolor(x); }
	if(Z.lightRadius>0){ foo += ("+"+Z.lightRadius+" Magic Find<br>").fontcolor(x); }
	if(Z.thorns){ foo += ("+"+Z.thorns+" Thorn Damage<br>").fontcolor(x); }
	if(Z.absorbPoison&&
		Z.absorbMagic&&
		Z.absorbLightning&&
		Z.absorbCold&&
		Z.absorbFire){
			foo += ("Absorb "+Z.absorbPoison+"% of All Magic Damage<br>").fontcolor(x);
	}else{
		if(Z.absorbPoison){ foo += ("Absorb "+Z.absorbPoison+"% of Poison Damage<br>").fontcolor(x); }
		if(Z.absorbMagic){ foo += ("Absorb "+Z.absorbMagic+"% of Arcane Damage<br>").fontcolor(x); }
		if(Z.absorbLightning){ foo += ("Absorb "+Z.absorbLightning+"% of Lightning Damage<br>").fontcolor(x); }
		if(Z.absorbCold){ foo += ("Absorb "+Z.absorbCold+"% of Cold Damage<br>").fontcolor(x); }
		if(Z.absorbFire){ foo += ("Absorb "+Z.absorbFire+"% of Fire Damage<br>").fontcolor(x); }
	}
	if(Z.hpKill){ foo += ("+"+Z.hpKill+" Health Per Kill<br>").fontcolor(x); }
	if(Z.mpKill){ foo += ("+"+Z.mpKill+" Mana Per Kill<br>").fontcolor(x); }
	if(Z.physicalDamage){ foo += ("+"+Z.physicalDamage+" Physical Damage<br>").fontcolor(x); }
	if(Z.poisonDamage){ foo += ("+"+Z.poisonDamage+" Poison Damage<br>").fontcolor(x); }
	if(Z.magicDamage){ foo += ("+"+Z.magicDamage+" Arcane Damage<br>").fontcolor(x); }
	if(Z.lightningDamage){ foo += ("+"+Z.lightningDamage+" Lightning Damage<br>").fontcolor(x); }
	if(Z.coldDamage){ foo += ("+"+Z.coldDamage+" Cold Damage<br>").fontcolor(x); }
	if(Z.fireDamage){ foo += ("+"+Z.fireDamage+" Fire Damage<br>").fontcolor(x); }
	if(Z.enhancePhysical){ foo += ("+"+Z.enhancePhysical+"% Physical Damage<br>").fontcolor(x); }
	if(Z.enhancePoison){ foo += ("+"+Z.enhancePoison+"% Poison Damage<br>").fontcolor(x); }
	if(Z.enhanceMagic){ foo += ("+"+Z.enhanceMagic+"% Arcane Damage<br>").fontcolor(x); }
	if(Z.enhanceLightning){ foo += ("+"+Z.enhanceLightning+"% Lightning Damage<br>").fontcolor(x); }
	if(Z.enhanceCold){ foo += ("+"+Z.enhanceCold+"% Cold Damage<br>").fontcolor(x); }
	if(Z.enhanceFire){ foo += ("+"+Z.enhanceFire+"% Fire Damage<br>").fontcolor(x); }
	if(Z.enhanceAll){ foo += ("+"+Z.enhanceAll+"% All Magical Damage<br>").fontcolor(x); }
	if(Z.fear&&
		Z.stun&&
		Z.cold&&
		Z.silence){
		foo += ("-"+Z.fear+"% All Status Effect Durations<br>").fontcolor(x);
	}else{
		if(Z.fear){ foo += ("-"+Z.fear+"% Fear Duration<br>").fontcolor(x); }
		if(Z.stun){ foo += ("-"+Z.stun+"% Stun Duration<br>").fontcolor(x); }
		if(Z.cold){ foo += ("-"+Z.cold+"% Chill Duration<br>").fontcolor(x); }
		if(Z.silence){ foo += ("-"+Z.silence+"% Silence Duration<br>").fontcolor(x); }
	}
	if(Z.leech){ foo += ("+"+Z.leech+" Life Leech<br>").fontcolor(x); }
	if(Z.wraith){ foo += ("+"+Z.wraith+" Mana Leech<br>").fontcolor(x); }
	if(Z.runSpeed){ foo += ("+"+Z.runSpeed+"% Run Speed<br>").fontcolor(x); }
	if(Z.haste){
		var bar = (Z.haste/10)*-1;
		foo += ("Attack Haste +"+bar+"<br>").fontcolor(x);
	}
	if(Z.globalHaste){
		var bar = (Z.globalHaste/10)*-1;
		foo += ("Skill Haste +"+bar+"<br>").fontcolor(x);
	}
	if(Z.castingHaste){
		var bar = (Z.castingHaste/10)*-1;
		foo += ("Casting Haste +"+bar+"<br>").fontcolor(x);
	}
	if(Z.upgrade>0){
		foo += ("<br>Upgrade Status: "+Z.upgrade+"/10<br>");
	}
	if(Z.proc){
		foo += (("<br>"+Z.proc+"<br>").fontcolor("#fff5aa"));
	}
	if(Z.flavorText){
		foo += '<div class="flavorText">'+Z.flavorText+'</div>';
	}
	if(Z.rarity===4){
		foo += "<div class='setTip'>"+setTip(Z)+"</div>";
		foo += "<div class='setList'>"+setList(Z)+"</div>";
	}
	NG.ttItemMsg.innerHTML = foo;
	document.getElementById('itemIconImg').style.backgroundPosition = Z.xPos + "px " + Z.yPos + 'px';
}
//equip skill buffs
function hpEquipTotal() {
    var foo = 0;
    if (Set.Golem >= 3) {
        foo += 50;
    }
    if (Set.Duke >= 3) {
        foo += 80;
    }
    if (Set.Augur >= 2) {
        foo += 60;
    }
    if (Set.Baron >= 2) {
        foo += 75;
    }
    if (Set.Mendicant >= 4) {
        foo += 120;
    }
    if (Set.Satyr >= 4) {
        foo += 125;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].hp;
    }
    return foo;
}

function mpEquipTotal() {
    var foo = 0;
    if (Set.Vagrant >= 3) {
        foo += 35;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].mp;
    }
    return foo;
}

function strEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].str;
    }
    if (Set.Minotaur >= 3) {
        foo += 30;
    }
    if (Set.Warlord >= 3) {
        foo += 60;
    }
    return foo;
}

function staEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].sta;
    }
    if (Set.Malefactor >= 2) {
        foo += 35;
    }
    return foo;
}

function agiEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].agi;
    }
    if (Set.Bloodletter >= 5) {
        foo += 60;
    }
    if (Set.Assassin >= 5) {
        foo += 100;
    }
    return foo;
}

function dexEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].dex;
    }
    if (Set.Warlord >= 2) {
        foo += 45;
    }
    if (Set.Warder >= 5) {
        foo += 100;
    }
    return foo;
}

function intelEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].intel;
    }
    if (Set.Augur >= 4) {
        foo += 40;
    }
    if (Set.Satyr >= 3) {
        foo += 45;
    }
    if (Set.Warlock >= 5) {
        foo += 100;
    }
    return foo;
}

function wisEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].wis;
    }
    if (Set.Bishop >= 2) {
        foo += 12;
    }
    if (Set.Crusader >= 2) {
        foo += 50;
    }
    if (Set.HighPriest >= 2) {
        foo += 55;
    }
    return foo;
}

function chaEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].cha;
    }
    if (Set.Virtuoso >= 6) {
        foo += 150;
    }
    return foo;
}

function allStatsEquipTotal() {
    var foo = 0;
    if (Set.Sage >= 4) {
        foo += 25;
    }
    if (Set.Willow >= 5) {
        foo += 20;
    }
    if (Set.Virtuoso >= 2) {
        foo += 20;
    }
    if (Set.Phantasmist >= 6) {
        foo += 60;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].allStats;
    }
    return foo;
}

function hpRegenEquipTotal() {
    var foo = 0;
    if (Set.Sage >= 2) {
        foo += 4;
    }
    if (Set.Guardian >= 3) {
        foo += 13;
    }
    if (Set.Mendicant >= 5) {
        foo += 10;
    }
    if (Set.Grandmaster >= 4) {
        foo += 25;
    }
    if (Set.Hierophant >= 3) {
        foo += 24;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].hpRegen;
    }
    if (my.race == "Troll") {
        foo += (my.maxHp * .01);
    }
    if (my.gender === "female") {
        foo += M.ceil(my.level / 30);
    }
    if (skinLikeNatureStatus === true) {
        foo += (my.level / 12) + 1;
    }
    if (phantomPlateStatus === true) {
        foo += (my.level / 10) + 2;
    }
	var enh = 0;
	if (Set.Oracle >= 6) {
		enh += .75;
	}
	foo = (foo * (1 + enh));
    return M.round(foo);
}

function mpRegenEquipTotal() {
    var foo = 0;
    if (Set.Bishop >= 3) {
        foo += 4;
    }
    if (Set.Wraith >= 2) {
        foo += 7;
    }
    if (Set.Crusader >= 3) {
        foo += 14;
    }
    if (Set.Virtuoso >= 4) {
        foo += 20;
    }
    if (Set.ArchMage >= 4) {
        foo += 20;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].mpRegen;
    }
	var enh = 0;
	if (Set.Oracle >= 6) {
		enh += .75;
	}
	foo = (foo * (1 + enh));
    return foo;
}

function armorEquipTotal() {
    var x = 0;
    for (var i = 0; i <= 14; i++) {
        x += P.eq[i].armor;
    }
    return x;
}

function attackEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].attack;
    }
    return foo;
}

function oneHandSlashEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].oneHandSlash;
    }
    return foo;
}

function twoHandSlashEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].twoHandSlash;
    }
    return foo;
}

function oneHandBluntEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].oneHandBlunt;
    }
    return foo;
}

function twoHandBluntEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].twoHandBlunt;
    }
    return foo;
}

function piercingEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].piercing;
    }
    return foo;
}

function handtohandEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].handtohand;
    }
    if (Set.Vagabond >= 3) {
        foo += 15;
    }
    return foo;
}

function offenseEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].offense;
    }
    if (Set.Samurai >= 2) {
        foo += 6;
    }
    if (Set.GraveLord >= 2) {
        foo += 12;
    }
    return foo;
}

function dualWieldEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].dualWield;
    }
    if (Set.Bloodletter >= 3) {
        foo += 10;
    }
    return foo;
}

function doubleAttackEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].doubleAttack;
    }
    if (Set.Friar >= 3) {
        foo += 20;
    }
    return foo;
}

function defenseEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].defense;
    }
    if (Set.Golem >= 2) {
        foo += 5;
    }
    if (Set.Guardian >= 2) {
        foo += 10;
    }
    return foo;
}

function dodgeEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].dodge;
    }
    return foo;
}

function parryEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].parry;
    }
    return foo;
}

function riposteEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].riposte;
    }
    if (Set.Friar >= 4) {
        foo += 25;
    }
    if (Set.Warder >= 2) {
        foo += 20;
    }
    return foo;
}

function alterationEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].alteration;
    }
    if (Set.Orator >= 2) {
        foo += 6;
    }
    if (Set.Venova >= 6) {
        foo += 50;
    }
    return foo;
}

function evocationEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].evocation;
    }
    if (Set.Malefactor >= 3) {
        foo += 10;
    }
    if (Set.Sorcerer >= 3) {
        foo += 20;
    }
    return foo;
}

function conjurationEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].conjuration;
    }
    if (Set.Magnate >= 4) {
        foo += 20;
    }
    if (Set.Wraith >= 5) {
        foo += 15;
    }
    if (Set.Summoner >= 6) {
        foo += 50;
    }
    if (Set.ArchMage >= 3) {
        foo += 20;
    }
    return foo;
}

function abjurationEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].abjuration;
    }
    return foo;
}

function channelingEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].channeling;
    }
    return foo;
}

function allSkillsEquipTotal() {
    var foo = 0;
    if (Set.Emissary >= 4) {
        foo += 7;
    }
    if (Set.Baron >= 3) {
        foo += 2;
    }
    if (Set.Willow >= 3) {
        foo += 2;
    }
    if (Set.Wraith >= 6) {
        foo += 25;
    }
    if (Set.Grandmaster >= 2) {
        foo += 5;
    }
    if (Set.Crusader >= 6) {
        foo += 35;
    }
    if (Set.Warlock >= 2) {
        foo += 4;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].allSkills;
    }
    return foo;
}

function critChanceEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].critChance;
    }
    if (Set.Wyvern >= 4) {
        foo += 15;
    }
    if (Set.Augur >= 6) {
        foo += 40;
    }
    if (Set.Martyr >= 4) {
        foo += 15;
    }
    if (Set.Assassin >= 6) {
        foo += 55;
    }
    if (Set.HighPriest >= 5) {
        foo += 45;
    }
    if (Set.Sorcerer >= 4) {
        foo += 35;
    }
    return foo;
}

function critDamageEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].critDamage;
    }
    if (Set.Vagabond >= 2) {
        foo += 8;
    }
    if (Set.Augur >= 5) {
        foo += 25;
    }
    if (Set.Daimyo >= 6) {
        foo += 60;
    }
    if (Set.Summoner >= 2) {
        foo += 12;
    }
    if (Set.Warlord >= 6) {
        foo += 80;
    }
    return foo;
}

function phyMitEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].phyMit;
    }
    if (Set.Golem >= 4) {
        foo += 25;
    }
    if (Set.Satyr >= 2) {
        foo += 15;
    }
    if (Set.Assassin >= 3) {
        foo += 24;
    }
    return foo;
}

function magMitEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].magMit;
    }
    if (Set.Duke >= 5) {
        foo += 15;
    }
    if (Set.Assassin >= 2) {
        foo += 15;
    }
    if (Set.Phantasmist >= 3) {
        foo += 32;
    }
    return foo;
}

function resistPoisonEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].resistPoison;
    }
    if (Set.Chancellor >= 2) {
        foo += 35;
    }
    return foo;
}

function resistMagicEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].resistMagic;
    }
    if (Set.Venova >= 5) {
        foo += 60;
    }
    return foo;
}

function resistLightningEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].resistLightning;
    }
    return foo;
}

function resistColdEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].resistCold;
    }
    if (Set.Mendicant >= 2) {
        foo += 75;
    }
    return foo;
}

function resistFireEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].resistFire;
    }
    if (Set.Wyvern >= 3) {
        foo += 50;
    }
    return foo;
}

function allResistEquipTotal() {
    var foo = 0;
    if (Set.Miner >= 3) {
        foo += 25;
    }
    if (Set.Bishop >= 4) {
        foo += 30;
    }
    if (Set.Emissary >= 2) {
        foo += 12;
    }
    if (Set.Guardian >= 4) {
        foo += 15;
    }
    if (Set.Satyr >= 5) {
        foo += 32;
    }
    if (Set.Assassin >= 4) {
        foo += 35;
    }
    if (Set.Hierophant >= 2) {
        foo += 20;
    }
    if (Set.Warlock >= 4) {
        foo += 35;
    }
    if (Set.ArchMage >= 5) {
        foo += 45;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].allResist;
    }
    if (g.difficulty === 2) {
        foo -= 30;
    }
    if (g.difficulty === 3) {
        foo -= 75;
    }
    if (my.job === "Monk") {
        if (my.talent8 >= 20) {
            foo += 30;
        }
    }
    return foo;
}

function goldFindEquipTotal() {
    var foo = 0;
    if (Set.Daimyo >= 3) {
        foo += 25;
    }
    if (Set.Virtuoso >= 3) {
        foo += 40;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].goldFind;
    }
    return foo;
}

function expFindEquipTotal() {
    var foo = 0;
    if (Set.Emissary >= 3) {
        foo += 15;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].expFind;
    }
    return foo;
}

function thornsEquipTotal() {
    var foo = 0;
    if (Set.Vagrant >= 2) {
        foo += 12;
    }
    if (Set.Daimyo >= 4) {
        foo += 25;
    }
    if (Set.Hierophant >= 4) {
        foo += 150;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].thorns;
    }
    return foo;
}

function absorbPoisonEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].absorbPoison;
    }
    if (Set.Hierophant >= 5) {
        foo += 10;
    }
    if (foo > 50) {
        foo = 50;
    }
    return foo;
}

function absorbMagicEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].absorbMagic;
    }
    if (Set.Crusader >= 4) {
        foo += 15;
    }
    if (Set.Hierophant >= 5) {
        foo += 10;
    }
    if (Set.Phantasmist >= 4) {
        foo += 25;
    }
    if (foo > 50) {
        foo = 50;
    }
    return foo;
}

function absorbLightningEquipTotal() {
    var foo = 0;
    if (Set.Daimyo >= 2) {
        foo += 8;
    }
    if (Set.Hierophant >= 5) {
        foo += 10;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].absorbLightning;
    }
    if (my.job === "Druid") {
        if (my.talent4 >= 20) {
            foo += 15;
        }
    }
    if (foo > 50) {
        foo = 50;
    }
    return foo;
}

function absorbColdEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].absorbCold;
    }
    if (Set.GraveLord >= 3) {
        foo += 12;
    }
    if (Set.Hierophant >= 5) {
        foo += 10;
    }
    if (Set.Sorcerer >= 2) {
        foo += 10;
    }
    if (my.job === "Druid") {
        if (my.talent4 >= 20) {
            foo += 15;
        }
    }
    if (foo > 50) {
        foo = 50;
    }
    return foo;
}

function absorbFireEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].absorbFire;
    }
    if (Set.Warder >= 4) {
        foo += 25;
    }
    if (Set.Hierophant >= 5) {
        foo += 10;
    }
    if (Set.ArchMage >= 2) {
        foo += 10;
    }
    if (my.job === "Druid") {
        if (my.talent4 >= 20) {
            foo += 15;
        }
    }
    if (foo > 50) {
        foo = 50;
    }
    return foo;
}

function physicalDamageEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].physicalDamage;
    }
    return foo;
}

function poisonDamageEquipTotal() {
    var foo = 0;
    if (Set.Bloodletter >= 4) {
        foo += 75;
    }
    if (Set.GraveLord >= 6) {
        foo += 315;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].poisonDamage;
    }
    if (my.job === "Rogue") {
        if (my.talent11 >= 20) {
            foo += ~~(attackFunct() / 12);
        }
    }
    return foo;
}

function magicDamageEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].magicDamage;
    }
    if (my.job === "Paladin") {
        if (my.talent3 >= 20) {
            foo += ~~(attackFunct() / 18);
        }
    }
    if (my.job === "Bard" && chantOfBattleStatus) {
        if (my.talent1 >= 20) {
            foo += ~~(attackFunct() / 20);
        }
    }
    return foo;
}

function lightningDamageEquipTotal() {
    var foo = 0;
    if (Set.Samurai >= 3) {
        foo += 24;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].lightningDamage;
    }
    return foo;
}

function coldDamageEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].coldDamage;
    }
    return foo;
}

function fireDamageEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].fireDamage;
    }
    return foo;
}

function enhancePhysicalEquipTotal() {
    var foo = 0;
    if (Set.Minotaur >= 4) {
        foo += 12;
    }
    if (Set.Baron >= 6) {
        foo += 15;
    }
    if (Set.Grandmaster >= 5) {
        foo += 15;
    }
    if (Set.Warder >= 3) {
        foo += 10;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].enhancePhysical;
    }
    return foo;
}

function enhancePoisonEquipTotal() {
    var foo = 0;
    if (Set.Chancellor >= 4) {
        foo += 12;
    }
    if (Set.Mendicant >= 6) {
        foo += 30;
    }
    if (Set.Oracle >= 4) {
        foo += 20;
    }
	if (Set.Warlock >= 6) {
		foo += ~~(attackEquipTotal()*.4);
	}
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].enhancePoison;
    }
    return foo;
}

function enhanceMagicEquipTotal() {
    var foo = 0;
    if (Set.Orator >= 4) {
        foo += 12;
    }
    if (Set.Duke >= 6) {
        foo += 30;
    }
    if (Set.Satyr >= 6) {
        foo += 30;
    }
    if (Set.Virtuoso >= 5) {
        foo += 30;
		if (Set.Virtuoso >= 6) {
			foo += ~~(expFindEquipTotal()*.3);
		}
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].enhanceMagic;
    }
    return foo;
}

function enhanceLightningEquipTotal() {
    var foo = 0;
    if (Set.Magnate >= 3) {
        foo += 5;
    }
    if (Set.Summoner >= 5) {
        foo += 12;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].enhanceLightning;
    }
    return foo;
}

function enhanceColdEquipTotal() {
    var foo = 0;
    if (Set.Summoner >= 3) {
        foo += 10;
    }
    if (Set.Oracle >= 4) {
        foo += 20;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].enhanceCold;
    }
    return foo;
}

function enhanceFireEquipTotal() {
    var foo = 0;
    if (Set.Wyvern >= 2) {
        foo += 4;
    }
    if (Set.Vagrant >= 4) {
        foo += 12;
    }
    if (Set.Willow >= 2) {
        foo += 5;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].enhanceFire;
    }
    return foo;
}

function enhanceAllEquipTotal() {
    var foo = 0;
    if (Set.Malefactor >= 6) {
        foo += 20;
    }
    if (Set.Baron >= 6) {
        foo += 15;
    }
    if (Set.HighPriest >= 6) {
        foo += 30;
    }
    if (Set.Warlock >= 6) {
        foo += 30;
    }
    if (Set.Sorcerer >= 5) {
        foo += 20;
    }
    if (Set.Hierophant >= 6) {
        foo += ~~(thornsEquipTotal()*.16);
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].enhanceAll;
    }
    return foo;
}

function hpKillEquipTotal() {
    var foo = 0;
    if (Set.Martyr >= 3) {
        foo += 10;
    }
    if (Set.Bloodletter >= 2) {
        foo += 12;
    }
    if (Set.Oracle >= 2) {
        foo += 20;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].hpKill;
    }
    return foo;
}

function mpKillEquipTotal() {
    var foo = 0;
    if (Set.Sage >= 3) {
        foo += 7;
    }
    if (Set.Wraith >= 3) {
        foo += 15;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].mpKill;
    }
    return foo;
}

function lightRadiusEquipTotal() {
    var foo = 0;
    if (Set.Venova >= 3) {
        foo += 15;
    }
    if (Set.Grandmaster >= 3) {
        foo += 40;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].lightRadius;
    }
    return foo;
}

function runSpeedEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].runSpeed;
    }
    return foo;
}

function hasteEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].haste;
    }
    if (Set.Vagabond >= 4) {
        foo -= 150;
    }
    if (Set.Baron >= 4) {
        foo -= 150;
    }
    if (Set.Friar >= 6) {
        foo -= 500;
    }
    if (Set.Warlord >= 5) {
        foo -= 400;
    }
    if (Set.GraveLord >= 5) {
        foo -= 400;
    }
    return foo;
}

function globalHasteEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].globalHaste;
    }
    if (Set.Samurai >= 4) {
        foo -= 150;
    }
    if (Set.Duke >= 4) {
        foo -= 150;
    }
    if (Set.Daimyo >= 5) {
        foo -= 250;
    }
    if (Set.Friar >= 5) {
        foo -= 250;
    }
    if (Set.Warder >= 6) {
        foo -= 500;
    }
    return foo;
}

function castingHasteEquipTotal() {
    var foo = 0;
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].castingHaste;
    }
    if (Set.Magnate >= 2) {
        foo -= 80;
    }
    if (Set.Venova >= 4) {
        foo -= 150;
    }
    if (Set.Baron >= 5) {
        foo -= 200;
    }
    if (Set.Mendicant >= 3) {
        foo -= 150;
    }
    if (Set.Willow >= 6) {
        foo -= 500;
    }
    if (Set.Wraith >= 4) {
        foo -= 200;
    }
    if (Set.Summoner >= 4) {
        foo -= 240;
    }
    if (Set.Malefactor >= 5) {
        foo -= 210;
    }
    if (Set.Phantasmist >= 5) {
        foo -= 500;
    }
    if (Set.Sorcerer >= 6) {
        foo -= 600;
    }
    return foo;
}

function fearEquipTotal() {
    var foo = 0;
    if (Set.Chancellor >= 3) {
        foo += 30;
    }
    if (Set.Duke >= 2) {
        foo += 40;
    }
    if (Set.Guardian >= 6) {
        foo += 75;
    }
    if (Set.Willow >= 4) {
        foo += 15;
    }
    if (Set.Crusader >= 5) {
        foo += 80;
    }
    if (Set.HighPriest >= 3) {
        foo += 70;
    }
    if (my.job === "Bard") {
        if (P.eq[13].name === "March of Vithe") {
            foo += 125;
        }
    }
    if (my.job === "Paladin") {
        if (my.talent1 >= 20) {
            foo += 50;
        }
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].fear;
    }
    if (g.difficulty === 2) {
        foo -= 20;
    }
    if (g.difficulty === 3) {
        foo -= 50;
    }
    if (foo > 75) {
        foo = 75;
    }
    return foo;
}

function stunEquipTotal() {
    var foo = 0;
    if (Set.Orator >= 3) {
        foo += 25;
    }
    if (Set.Guardian >= 6) {
        foo += 75;
    }
    if (Set.Willow >= 4) {
        foo += 15;
    }
    if (Set.Crusader >= 5) {
        foo += 80;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].stun;
    }
    if (my.job === "Shadow Knight") {
        if (my.talent5 >= 20) {
            foo += 50;
        }
    }
    if (g.difficulty === 2) {
        foo -= 20;
    }
    if (g.difficulty === 3) {
        foo -= 50;
    }
    if (foo > 75) {
        foo = 75;
    }
    return foo;
}

function chillEquipTotal() {
    var foo = 0;
    if (Set.Guardian >= 6) {
        foo += 75;
    }
    if (Set.Willow >= 4) {
        foo += 15;
    }
    if (Set.Crusader >= 5) {
        foo += 80;
    }
    if (Set.Oracle >= 3) {
        foo += 90;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].cold;
    }
    if (g.difficulty === 2) {
        foo -= 20;
    }
    if (g.difficulty === 3) {
        foo -= 50;
    }
    if (foo > 75) {
        foo = 75;
    }
    return foo;
}

function silenceEquipTotal() {
    var foo = 0;
    if (Set.Venova >= 2) {
        foo += 25;
    }
    if (Set.Malefactor >= 4) {
        foo += 40;
    }
    if (Set.Guardian >= 6) {
        foo += 75;
    }
    if (Set.Willow >= 4) {
        foo += 15;
    }
    if (Set.Crusader >= 5) {
        foo += 80;
    }
    if (Set.Phantasmist >= 2) {
        foo += 45;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].silence;
    }
    if (g.difficulty === 2) {
        foo -= 20;
    }
    if (g.difficulty === 3) {
        foo -= 50;
    }
    if (foo > 75) {
        foo = 75;
    }
    return foo;
}
function leechEquipTotal() {
    var foo = 0;
    if (Set.Miner >= 2) {
        foo += 6;
    }
    if (Set.Guardian >= 5) {
        foo += 7;
    }
    if (Set.Bloodletter >= 6) {
        foo += 40;
    }
    if (Set.Grandmaster >= 6) {
        foo += 50;
    }
    if (Set.GraveLord >= 4) {
        foo += 24;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].leech;
    }
    return foo / 100;
}

function wraithEquipTotal() {
    var foo = 0;
    if (Set.Miner >= 2) {
        foo += 6;
    }
    if (Set.Augur >= 3) {
        foo += 8;
    }
    for (var i = 0; i <= 14; i++) {
        foo += P.eq[i].wraith;
    }
    return foo;
}

function checkSetItems() {
    for (var key in Set) {
        Set[key] = 0;
    }
    var s = 0;
    if (P.eq[s].rarity === 4) { // helm
        var N = P.eq[s].name;
        if (N === "Minotaur's Horns") {
            Set.Minotaur++;
        }
        if (N === "Samurai's Devotion") {
            Set.Samurai++;
        }
        if (N === "Sage's Vision") {
            Set.Sage++;
        }
        if (N === "Orator's Shout") {
            Set.Orator++;
        }
        if (N === "Guardian's Merlon") {
            Set.Guardian++;
        }
        if (N === "Duke's Adoration") {
            Set.Duke++;
        }
        if (N === "Augur's Skull") {
            Set.Augur++;
        }
        if (N === "Venova's Halo") {
            Set.Venova++;
        }
        if (N === "Daimyo's Enso") {
            Set.Daimyo++;
        }
        if (N === "Willow's Flare") {
            Set.Willow++;
        }
        if (N === "Satyr's Turban") {
            Set.Satyr++;
        }
        if (N === "Malefactor's Terminal") {
            Set.Malefactor++;
        }
        if (N === "Phantasmist's Acumen") {
            Set.Phantasmist++;
        }
        if (N === "Warlock's Doom") {
            Set.Warlock++;
        }
        if (N === "High Priest's Abstention") {
            Set.HighPriest++;
        }
        if (N === "Grave Lord's Deceit") {
            Set.GraveLord++;
        }
        if (N === "Grandmaster's Symmetry") {
            Set.Grandmaster++;
        }
        if (N === "Warlord's Scowl") {
            Set.Warlord++;
        }
    }
    s++;
    if (P.eq[s].rarity === 4) { // neck
        var N = P.eq[s].name;
        if (N === "Miner's Memento") {
            Set.Miner++;
        }
        if (N === "Martyr's Manifesto") {
            Set.Martyr++;
        }
        if (N === "Chancellor's Remorse") {
            Set.Chancellor++;
        }
        if (N === "Magnate's Token") {
            Set.Magnate++;
        }
        if (N === "Wyvern's Scale") {
            Set.Wyvern++;
        }
        if (N === "Duke's Laurel") {
            Set.Duke++;
        }
        if (N === "Baron's Cadenza") {
            Set.Baron++;
        }
        if (N === "Bloodletter's Vial") {
            Set.Bloodletter++;
        }
        if (N === "Mendicant's Agimat") {
            Set.Mendicant++;
        }
        if (N === "Satyr's Opulence") {
            Set.Satyr++;
        }
        if (N === "Sorcerer's Zodiac") {
            Set.Sorcerer++;
        }
        if (N === "Oracle's Sibyl") {
            Set.Oracle++;
        }
        if (N === "High Priest's Mastery") {
            Set.HighPriest++;
        }
        if (N === "Warder's Zephyr") {
            Set.Warder++;
        }
        if (N === "Crusader's Cathexis") {
            Set.Crusader++;
        }
        if (N === "Assassin's Guile") {
            Set.Assassin++;
        }
    }
    s++;
    var minerShard = 0;
    var minerGlimmer = 0;
    var celestial = 0;
    var vagabond = 0;
    var fallen = 0;
    var magnate = 0;
    var lurid = 0;
    var venova = 0;
    var daimio1 = 0;
    var bloodletter1 = 0;
    var mephitic = 0;
    var willow1 = 0;
    var condemned = 0;
    var occult = 0;
    var hierophant = 0;
    var archmage = 0;
    var sorcerer = 0;
    var warlock1 = 0;
    var highpriest1 = 0;
    var gravelord = 0;
    var crusader = 0;
    var assassin = 0;

    function ringCheck(s) {
        var N = P.eq[s].name;
        if (N === "Vagabond's Seal") {
            vagabond = 1;
        }
        if (N === "Miner's Shard") {
            minerShard = 1;
        }
        if (N === "Miner's Glimmer") {
            minerGlimmer = 1;
        }
        if (N === "Bishop's Faith") {
            celestial = 1;
        }
        if (N === "Samurai's Fidelity") {
            fallen = 1;
        }
        if (N === "Magnate's Curio") {
            magnate = 1;
        }
        if (N === "Augur's Pustule") {
            lurid = 1;
        }
        if (N === "Venova's Eternity") {
            venova = 1;
        }
        if (N === "Daimyo's Miyabi") {
            daimio1 = 1;
        }
        if (N === "Bloodletter's Clot") {
            bloodletter1 = 1;
        }
        if (N === "Mendicant's Clover") {
            mephitic = 1;
        }
        if (N === "Willow's Seed") {
            willow1 = 1;
        }
        if (N === "Wraith's Lesion") {
            condemned = 1;
        }
        if (N === "Summoner's Gyre") {
            occult = 1;
        }
        if (N === "Hierophant's Holocaust") {
            hierophant = 1;
        }
        if (N === "High Priest's Piety") {
            highpriest1 = 1;
        }
        if (N === "Arch Mage's Periapt") {
            archmage = 1;
        }
        if (N === "Sorcerer's Pulsar") {
            sorcerer = 1;
        }
        if (N === "Warlock's Carnage") {
            warlock1 = 1;
        }
        if (N === "Grave Lord's Perfidy") {
            gravelord = 1;
        }
        if (N === "Crusader's Allegiance") {
            crusader = 1;
        }
        if (N === "Assassin's Helix") {
            assassin = 1;
        }
    }
    if (P.eq[s].rarity === 4) { // ring
        ringCheck(s);
    }
    s++;
    if (P.eq[s].rarity === 4) { // ring
        ringCheck(s);
    }
    if (minerShard) {
        Set.Miner++;
    }
    if (vagabond) {
        Set.Vagabond++;
    }
    if (minerGlimmer) {
        Set.Miner++;
    }
    if (celestial) {
        Set.Bishop++;
    }
    if (fallen) {
        Set.Samurai++;
    }
    if (magnate) {
        Set.Magnate++;
    }
    if (lurid) {
        Set.Augur++;
    }
    if (venova) {
        Set.Venova++;
    }
    if (daimio1) {
        Set.Daimyo++;
    }
    if (bloodletter1) {
        Set.Bloodletter++;
    }
    if (mephitic) {
        Set.Mendicant++;
    }
    if (willow1) {
        Set.Willow++;
    }
    if (condemned) {
        Set.Wraith++;
    }
    if (occult) {
        Set.Summoner++;
    }
    if (hierophant) {
        Set.Hierophant++;
    }
    if (highpriest1) {
        Set.HighPriest++;
    }
    if (warlock1) {
        Set.Warlock++;
    }
    if (archmage) {
        Set.ArchMage++;
    }
    if (sorcerer) {
        Set.Sorcerer++;
    }
    if (gravelord) {
        Set.GraveLord++;
    }
    if (crusader) {
        Set.Crusader++;
    }
    if (assassin) {
        Set.Assassin++;
    }
    s++;
    if (P.eq[s].rarity === 4) { // shoulders
        var N = P.eq[s].name;
        if (N === "Golem's Shelf") {
            Set.Golem++;
        }
        if (N === "Minotaur's Sprawl") {
            Set.Minotaur++;
        }
        if (N === "Vagrant's Timber") {
            Set.Vagrant++;
        }
        if (N === "Guardian's Bastion") {
            Set.Guardian++;
        }
        if (N === "Duke's Proclamation") {
            Set.Duke++;
        }
        if (N === "Mendicant's Albatross") {
            Set.Mendicant++;
        }
        if (N === "Willow's Frost") {
            Set.Willow++;
        }
        if (N === "Summoner's Residue") {
            Set.Summoner++;
        }
        if (N === "Arch Mage's Debacle") {
            Set.ArchMage++;
        }
        if (N === "Hierophant's Blizzard") {
            Set.Hierophant++;
        }
        if (N === "Oracle's Ailment") {
            Set.Oracle++;
        }
        if (N === "Virtuoso's Orotund") {
            Set.Virtuoso++;
        }
        if (N === "Crusader's Fervor") {
            Set.Crusader++;
        }
        if (N === "Warlord's Disdain") {
            Set.Warlord++;
        }
    }
    s++;
    if (P.eq[s].rarity === 4) { // cloak
        var N = P.eq[s].name;
        if (N === "Samurai's Ardor") {
            Set.Samurai++;
        }
        if (N === "Vagrant's Copse") {
            Set.Vagrant++;
        }
        if (N === "Wyvern's Wing") {
            Set.Wyvern++;
        }
        if (N === "Duke's Ascension") {
            Set.Duke++;
        }
        if (N === "Venova's Wings") {
            Set.Venova++;
        }
        if (N === "Daimyo's Wabi") {
            Set.Daimyo++;
        }
        if (N === "Wraith's Pall") {
            Set.Wraith++;
        }
        if (N === "Hierophant's Cyclone") {
            Set.Hierophant++;
        }
        if (N === "Grave Lord's Treachery") {
            Set.GraveLord++;
        }
        if (N === "Grandmaster's Peace") {
            Set.Grandmaster++;
        }
        if (N === "Phantasmist's Catharsis") {
            Set.Phantasmist++;
        }
        if (N === "Warlock's Demise") {
            Set.Warlock++;
        }
        if (N === "Assassin's Slander") {
            Set.Assassin++;
        }
    }
    s++;
    if (P.eq[s].rarity === 4) { // chest
        var N = P.eq[s].name;
        if (N === "Golem's Ore") {
            Set.Golem++;
        }
        if (N === "Samurai's Duty") {
            Set.Samurai++;
        }
        if (N === "Chancellor's Ceremony") {
            Set.Chancellor++;
        }
        if (N === "Orator's Whisper") {
            Set.Orator++;
        }
        if (N === "Guardian's Fortress") {
            Set.Guardian++;
        }
        if (N === "Venova's Silks") {
            Set.Venova++;
        }
        if (N === "Bloodletter's Spleen") {
            Set.Bloodletter++;
        }
        if (N === "Friar's Sacrifice") {
            Set.Friar++;
        }
        if (N === "Wraith's Husk") {
            Set.Wraith++;
        }
        if (N === "Satyr's Delusion") {
            Set.Satyr++;
        }
        if (N === "Summoner's Furnace") {
            Set.Summoner++;
        }
        if (N === "Sorcerer's Nebula") {
            Set.Sorcerer++;
        }
        if (N === "Warlock's Abomination") {
            Set.Warlock++;
        }
        if (N === "High Priest's Reverence") {
            Set.HighPriest++;
        }
        if (N === "Virtuoso's Bombast") {
            Set.Virtuoso++;
        }
        if (N === "Grave Lord's Cozen") {
            Set.GraveLord++;
        }
        if (N === "Assassin's Deception") {
            Set.Assassin++;
        }
        if (N === "Warlord's Blitzkrieg") {
            Set.Warlord++;
        }
    }
    s++;
    if (P.eq[s].rarity === 4) { // bracer
        var N = P.eq[s].name;
        if (N === "Martyr's Agony") {
            Set.Martyr++;
        }
        if (N === "Emissary's Dispute") {
            Set.Emissary++;
        }
        if (N === "Orator's Entreat") {
            Set.Orator++;
        }
        if (N === "Guardian's Parapet") {
            Set.Guardian++;
        }
        if (N === "Baron's Coda") {
            Set.Baron++;
        }
        if (N === "Daimyo's Honne") {
            Set.Daimyo++;
        }
        if (N === "Bloodletter's Serum") {
            Set.Bloodletter++;
        }
        if (N === "Friar's Candor") {
            Set.Friar++;
        }
        if (N === "Summoner's Cinder") {
            Set.Summoner++;
        }
        if (N === "Arch Mage's Squall") {
            Set.ArchMage++;
        }
        if (N === "Phantasmist's Sagacity") {
            Set.Phantasmist++;
        }
        if (N === "High Priest's Humility") {
            Set.HighPriest++;
        }
        if (N === "Warder's Reclaim") {
            Set.Warder++;
        }
        if (N === "Crusader's Fealty") {
            Set.Crusader++;
        }
        if (N === "Warlord's Defiance") {
            Set.Warlord++;
        }
    }
    s++;
    if (P.eq[s].rarity === 4) { // gloves
        var N = P.eq[s].name;
        if (N === "Sage's Acumen") {
            Set.Sage++;
        }
        if (N === "Vagabond's Survey") {
            Set.Vagabond++;
        }
        if (N === "Duke's Amity") {
            Set.Duke++;
        }
        if (N === "Baron's Sonata") {
            Set.Baron++;
        }
        if (N === "Friar's Epiphany") {
            Set.Friar++;
        }
        if (N === "Wraith's Flesh") {
            Set.Wraith++;
        }
        if (N === "Satyr's Satin") {
            Set.Satyr++;
        }
        if (N === "Malefactor's Ballast") {
            Set.Malefactor++;
        }
        if (N === "Arch Mage's Calamity") {
            Set.ArchMage++;
        }
        if (N === "Phantasmist's Serendipity") {
            Set.Phantasmist++;
        }
        if (N === "Oracle's Contagion") {
            Set.Oracle++;
        }
        if (N === "Virtuoso's Conceit") {
            Set.Virtuoso++;
        }
        if (N === "Assassin's Hoax") {
            Set.Assassin++;
        }
        if (N === "Warlord's Derision") {
            Set.Warlord++;
        }
    }
    s++;
    if (P.eq[s].rarity === 4) { // belt
        var N = P.eq[s].name;
        if (N === "Martyr's Ideal") {
            Set.Martyr++;
        }
        if (N === "Bishop's Purity") {
            Set.Bishop++;
        }
        if (N === "Sage's Clamp") {
            Set.Sage++;
        }
        if (N === "Vagabond's Cinch") {
            Set.Vagabond++;
        }
        if (N === "Orator's Desire") {
            Set.Orator++;
        }
        if (N === "Guardian's Moat") {
            Set.Guardian++;
        }
        if (N === "Bloodletter's Marrow") {
            Set.Bloodletter++;
        }
        if (N === "Friar's Gift") {
            Set.Friar++;
        }
        if (N === "Wraith's Lust") {
            Set.Wraith++;
        }
        if (N === "Malefactor's Fuse") {
            Set.Malefactor++;
        }
        if (N === "Sorcerer's Equinox") {
            Set.Sorcerer++;
        }
        if (N === "Phantasmist's Insight") {
            Set.Phantasmist++;
        }
        if (N === "High Priest's Constraint") {
            Set.HighPriest++;
        }
        if (N === "Virtuoso's Plangent") {
            Set.Virtuoso++;
        }
        if (N === "Grandmaster's Affinity") {
            Set.Grandmaster++;
        }
        if (N === "Assassin's Subversion") {
            Set.Assassin++;
        }
    }
    s++;
    if (P.eq[s].rarity === 4) { // legs
        var N = P.eq[s].name;
        if (N === "Emissary's Poise") {
            Set.Emissary++;
        }
        if (N === "Bishop's Merit") {
            Set.Bishop++;
        }
        if (N === "Chancellor's Qualm") {
            Set.Chancellor++;
        }
        if (N === "Wyvern's Tail") {
            Set.Wyvern++;
        }
        if (N === "Duke's Rule") {
            Set.Duke++;
        }
        if (N === "Augur's Rancor") {
            Set.Augur++;
        }
        if (N === "Baron's Tenor") {
            Set.Baron++;
        }
        if (N === "Friar's Penance") {
            Set.Friar++;
        }
        if (N === "Willow's Gust") {
            Set.Willow++;
        }
        if (N === "Golem's Crust") {
            Set.Golem++;
        }
        if (N === "Sorcerer's Quasar") {
            Set.Sorcerer++;
        }
        if (N === "Oracle's Malady") {
            Set.Oracle++;
        }
        if (N === "Hierophant's Cataclysm") {
            Set.Hierophant++;
        }
        if (N === "Grave Lord's Chicane") {
            Set.GraveLord++;
        }
        if (N === "Grandmaster's Consonance") {
            Set.Grandmaster++;
        }
        if (N === "Warlord's Ferocity") {
            Set.Warlord++;
        }
    }
    s++;
    if (P.eq[s].rarity === 4) { // boots
        var N = P.eq[s].name;
        if (N === "Minotaur's Hooves") {
            Set.Minotaur++;
        }
        if (N === "Emissary's Finesse") {
            Set.Emissary++;
        }
        if (N === "Vagabond's Voyage") {
            Set.Vagabond++;
        }
        if (N === "Augur's Sludge") {
            Set.Augur++;
        }
        if (N === "Baron's Rhythm") {
            Set.Baron++;
        }
        if (N === "Mendicant's Horseshoe") {
            Set.Mendicant++;
        }
        if (N === "Friar's Grace") {
            Set.Friar++;
        }
        if (N === "Willow's Mildew") {
            Set.Willow++;
        }
        if (N === "Malefactor's Resistor") {
            Set.Malefactor++;
        }
        if (N === "Warlock's Nightmare") {
            Set.Warlock++;
        }
        if (N === "Hierophant's Cascade") {
            Set.Hierophant++;
        }
        if (N === "Warder's Preserve") {
            Set.Warder++;
        }
        if (N === "Crusader's Vehemence") {
            Set.Crusader++;
        }
        if (N === "Grandmaster's Balance") {
            Set.Grandmaster++;
        }
    }
    s++;
    var minotaur = 0;
    var golem = 0;
    var tragic = 0;
    var vagrant = 0;
    var baron = 0;
    var daimio2 = 0;
    var bloodletter2 = 0;
    var willow2 = 0;
    var venerable = 0;
    var arcane = 0;
    var warder1 = 0;
    var warder2 = 0;
	var warlock2 = 0;

    function weaponCheck(s) {
        var N = P.eq[s].name;
        if (N === "Minotaur's Gore") {
            minotaur = 1;
        }
        if (N === "Golem's Crag") {
            golem = 1;
        }
        if (N === "Martyr's Shiv") {
            tragic = 1;
        }
        if (N === "Vagrant's Branch") {
            vagrant = 1;
        }
        if (N === "Baron's Glissando") {
            baron = 1;
        }
        if (N === "Daimyo's Giri") {
            daimio2 = 1;
        }
        if (N === "Bloodletter's Lancet") {
            bloodletter2 = 1;
        }
        if (N === "Willow's Calamity") {
            willow2 = 1;
        }
        if (N === "Satyr's Artifice") {
            venerable = 1;
        }
        if (N === "Malefactor's Coil") {
            arcane = 1;
        }
        if (N === "Warder's Hailrend") {
            warder1 = 1;
        }
        if (N === "Warder's Magmahew") {
            warder2 = 1;
        }
        if (N === "Warlock's Nemesis") {
            warlock2 = 1;
        }
    }
    if (P.eq[s].rarity === 4) { // RH
        weaponCheck(s);
        var N = P.eq[s].name;
        if (N === "Venova's Martel") {
            Set.Venova++;
        }
        if (N === "Bishop's Justice") {
            Set.Bishop++;
        }
        if (N === "Sage's Wit") {
            Set.Sage++;
        }
        if (N === "Augur's Harvester") {
            Set.Augur++;
        }
        if (N === "Summoner's Conduit") {
            Set.Summoner++;
        }
        if (N === "Arch Mage's Catastrophe") {
            Set.ArchMage++;
        }
        if (N === "Grave Lord's Crescent") {
            Set.GraveLord++;
        }
    }
    s++;
    if (P.eq[s].rarity === 4) { // LH
        weaponCheck(s);
        var N = P.eq[s].name;
        if (N === "Vagrant's Slab") {
            Set.Vagrant++;
        }
        if (N === "Chancellor's Bias") {
            Set.Chancellor++;
        }
        if (N === "Magnate's Sapphire") {
            Set.Magnate++;
        }
        if (N === "Wyvern's Eye") {
            Set.Wyvern++;
        }
        if (N === "Guardian's Wall") {
            Set.Guardian++;
        }
        if (N === "Mendicant's Effigy") {
            Set.Mendicant++;
        }
        if (N === "Satyr's Chalice") {
            Set.Satyr++;
        }
        if (N === "Malefactor's Yttrium") {
            Set.Malefactor++;
        }
        if (N === "Sorcerer's Pleiades") {
            Set.Sorcerer++;
        }
        if (N === "Phantasmist's Kismet") {
            Set.Phantasmist++;
        }
        if (N === "Oracle's Fetish") {
            Set.Oracle++;
        }
        if (N === "Hierophant's Cloudburst") {
            Set.Hierophant++;
        }
        if (N === "Virtuoso's Resonance") {
            Set.Virtuoso++;
        }
        if (N === "Crusader's Aegis") {
            Set.Crusader++;
        }
    }
    if (minotaur) {
        Set.Minotaur++;
    }
    if (golem) {
        Set.Golem++;
    }
    if (tragic) {
        Set.Martyr++;
    }
    if (vagrant) {
        Set.Vagrant++;
    }
    if (baron) {
        Set.Baron++;
    }
    if (daimio2) {
        Set.Daimyo++;
    }
    if (bloodletter2) {
        Set.Bloodletter++;
    }
    if (willow2) {
        Set.Willow++;
    }
    if (venerable) {
        Set.Satyr++;
    }
    if (arcane) {
        Set.Malefactor++;
    }
    if (warder1) {
        Set.Warder++;
    }
    if (warder2) {
        Set.Warder++;
    }
	if(warlock2){
		Set.Warlock++;
	}
    s++;
    if (P.eq[s].rarity === 4) { // range
        var N = P.eq[s].name;
        if (N === "Emissary's Craft") {
            Set.Emissary++;
        }
        if (N === "Magnate's Lamp") {
            Set.Magnate++;
        }
        if (N === "Augur's Enmity") {
            Set.Augur++;
        }
        if (N === "Daimyo's Yugen") {
            Set.Daimyo++;
        }
        if (N === "Venova's Ascent") {
            Set.Venova++;
        }
        if (N === "Mendicant's Sarimanok") {
            Set.Mendicant++;
        }
        if (N === "Wraith's Envy") {
            Set.Wraith++;
        }
        if (N === "Summoner's Ember") {
            Set.Summoner++;
        }
        if (N === "Arch Mage's Mojo") {
            Set.ArchMage++;
        }
        if (N === "Oracle's Presage") {
            Set.Oracle++;
        }
        if (N === "Virtuoso's Fanfare") {
            Set.Virtuoso++;
        }
        if (N === "Warder's Tempest") {
            Set.Warder++;
        }
        if (N === "Grandmaster's Comity") {
            Set.Grandmaster++;
        }
    }
}
var Set = {
    Miner: 0,
    Minotaur: 0,
    Golem: 0,
    Martyr: 0,
    Bishop: 0,
    Samurai: 0,
    Emissary: 0,
    Sage: 0,
    Vagabond: 0,
    Vagrant: 0,
    Chancellor: 0,
    Magnate: 0,
    Orator: 0,
    Wyvern: 0,
    Guardian: 0,
    Duke: 0,
    Augur: 0,
    Venova: 0,
    Baron: 0,
    Daimyo: 0,
    Bloodletter: 0,
    Mendicant: 0,
    Friar: 0,
    Willow: 0,
    Wraith: 0,
    Satyr: 0,
    Summoner: 0,
    Malefactor: 0,
    Warlord: 0,
    Assassin: 0,
    Grandmaster: 0,
    Crusader: 0,
    GraveLord: 0,
    Warder: 0,
    Virtuoso: 0,
    Hierophant: 0,
    HighPriest: 0,
    Oracle: 0,
    Warlock: 0,
    Phantasmist: 0,
    ArchMage: 0,
    Sorcerer: 0
}

function setEquipValues() {
    if (g.view === "Game") {
        checkSetItems();
        g.hpEquip = hpEquipTotal();
        g.mpEquip = mpEquipTotal();
        g.strEquip = strEquipTotal();
        g.staEquip = staEquipTotal();
        g.agiEquip = agiEquipTotal();
        g.dexEquip = dexEquipTotal();
        g.intelEquip = intelEquipTotal();
        g.wisEquip = wisEquipTotal();
        g.chaEquip = chaEquipTotal();
        g.allStatsEquip = allStatsEquipTotal();
        g.hpRegenEquip = hpRegenEquipTotal();
        g.mpRegenEquip = mpRegenEquipTotal();
        g.armorEquip = armorEquipTotal();
        g.attackEquip = attackEquipTotal();
        g.oneHandSlashEquip = oneHandSlashEquipTotal();
        g.twoHandSlashEquip = twoHandSlashEquipTotal();
        g.oneHandBluntEquip = oneHandBluntEquipTotal();
        g.twoHandBluntEquip = twoHandBluntEquipTotal();
        g.piercingEquip = piercingEquipTotal();
        g.handtohandEquip = handtohandEquipTotal();
        g.offenseEquip = offenseEquipTotal();
        g.dualWieldEquip = dualWieldEquipTotal();
        g.doubleAttackEquip = doubleAttackEquipTotal();
        g.defenseEquip = defenseEquipTotal();
        g.dodgeEquip = dodgeEquipTotal();
        g.parryEquip = parryEquipTotal();
        g.riposteEquip = riposteEquipTotal();
        g.alterationEquip = alterationEquipTotal();
        g.evocationEquip = evocationEquipTotal();
        g.conjurationEquip = conjurationEquipTotal();
        g.abjurationEquip = abjurationEquipTotal();
        g.channelingEquip = channelingEquipTotal();
        g.allSkillsEquip = allSkillsEquipTotal();
        g.critChanceEquip = critChanceEquipTotal();
        g.critDamageEquip = critDamageEquipTotal();
        g.phyMitEquip = phyMitEquipTotal();
        g.magMitEquip = magMitEquipTotal();
        g.resistPoisonEquip = resistPoisonEquipTotal();
        g.resistMagicEquip = resistMagicEquipTotal();
        g.resistLightningEquip = resistLightningEquipTotal();
        g.resistColdEquip = resistColdEquipTotal();
        g.resistFireEquip = resistFireEquipTotal();
        g.allResistEquip = allResistEquipTotal();
        g.goldFindEquip = goldFindEquipTotal();
        g.expFindEquip = expFindEquipTotal();
        g.thornsEquip = thornsEquipTotal();
        g.absorbPoisonEquip = absorbPoisonEquipTotal();
        g.absorbMagicEquip = absorbMagicEquipTotal();
        g.absorbLightningEquip = absorbLightningEquipTotal();
        g.absorbColdEquip = absorbColdEquipTotal();
        g.absorbFireEquip = absorbFireEquipTotal();
        g.hpKillEquip = hpKillEquipTotal();
        g.mpKillEquip = mpKillEquipTotal();
        g.physicalDamageEquip = physicalDamageEquipTotal();
        g.poisonDamageEquip = poisonDamageEquipTotal();
        g.magicDamageEquip = magicDamageEquipTotal();
        g.lightningDamageEquip = lightningDamageEquipTotal();
        g.coldDamageEquip = coldDamageEquipTotal();
        g.fireDamageEquip = fireDamageEquipTotal();
        g.enhancePhysicalEquip = enhancePhysicalEquipTotal();
        g.enhancePoisonEquip = enhancePoisonEquipTotal();
        g.enhanceMagicEquip = enhanceMagicEquipTotal();
        g.enhanceLightningEquip = enhanceLightningEquipTotal();
        g.enhanceColdEquip = enhanceColdEquipTotal();
        g.enhanceFireEquip = enhanceFireEquipTotal();
        g.enhanceAllEquip = enhanceAllEquipTotal();
        g.lightRadiusEquip = lightRadiusEquipTotal();
        g.runSpeedEquip = runSpeedEquipTotal();
        g.hasteEquip = hasteEquipTotal();
        g.globalHasteEquip = globalHasteEquipTotal();
        g.castingHasteEquip = castingHasteEquipTotal();
        g.fearEquip = fearEquipTotal();
        g.stunEquip = stunEquipTotal();
        g.chillEquip = chillEquipTotal();
        g.silenceEquip = silenceEquipTotal();
        g.leechEquip = leechEquipTotal();
        g.wraithEquip = wraithEquipTotal();
    }
    if (g.view === "Game") {
		if(!nevergrounds){
			CStat();
		}
    }
}
setEquipValues();
function armorPenalty() {
    var bar = 1;
    if (my.job === "Ranger" || my.job === "Shaman" || my.job === "Rogue") {
        if (P.eq[0].type === "plate" && P.eq[0].weight === 0) {
            bar += .05;
        }
        if (P.eq[4].type === "plate" && P.eq[4].weight === 0) {
            bar += .03;
        }
        if (P.eq[6].type === "plate" && P.eq[6].weight === 0) {
            bar += .05;
        }
        if (P.eq[7].type === "plate" && P.eq[7].weight === 0) {
            bar += .02;
        }
        if (P.eq[8].type === "plate" && P.eq[8].weight === 0) {
            bar += .02;
        }
        if (P.eq[9].type === "plate" && P.eq[9].weight === 0) {
            bar += .02;
        }
        if (P.eq[10].type === "plate" && P.eq[10].weight === 0) {
            bar += .03;
        }
        if (P.eq[11].type === "plate" && P.eq[11].weight === 0) {
            bar += .02;
        }
    } else if (my.job === "Monk" || my.job === "Druid") {
        if (P.eq[0].type === "chain" && P.eq[0].weight === 0) {
            bar += .05;
        }
        if (P.eq[4].type === "chain" && P.eq[4].weight === 0) {
            bar += .03;
        }
        if (P.eq[6].type === "chain" && P.eq[6].weight === 0) {
            bar += .05;
        }
        if (P.eq[7].type === "chain" && P.eq[7].weight === 0) {
            bar += .02;
        }
        if (P.eq[8].type === "chain" && P.eq[8].weight === 0) {
            bar += .02;
        }
        if (P.eq[9].type === "chain" && P.eq[9].weight === 0) {
            bar += .02;
        }
        if (P.eq[10].type === "chain" && P.eq[10].weight === 0) {
            bar += .03;
        }
        if (P.eq[11].type === "chain" && P.eq[11].weight === 0) {
            bar += .02;
        }
        // plate
        if (P.eq[0].type === "plate") {
            bar += .11;
            if (P.eq[0].weight === 1) {
                bar -= .06;
            }
        }
        if (P.eq[4].type === "plate") {
            bar += .07;
            if (P.eq[4].weight === 1) {
                bar -= .04;
            }
        }
        if (P.eq[6].type === "plate") {
            bar += .11;
            if (P.eq[6].weight === 1) {
                bar -= .06;
            }
        }
        if (P.eq[7].type === "plate") {
            bar += .05;
            if (P.eq[7].weight === 1) {
                bar -= .03;
            }
        }
        if (P.eq[8].type === "plate") {
            bar += .05;
            if (P.eq[8].weight === 1) {
                bar -= .03;
            }
        }
        if (P.eq[9].type === "plate") {
            bar += .05;
            if (P.eq[9].weight === 1) {
                bar -= .03;
            }
        }
        if (P.eq[10].type === "plate") {
            bar += .07;
            if (P.eq[10].weight === 1) {
                bar -= .04;
            }
        }
        if (P.eq[11].type === "plate") {
            bar += .05;
            if (P.eq[11].weight === 1) {
                bar -= .03;
            }
        }
    } else if (my.job === "Necromancer" || my.job === "Enchanter" || my.job === "Magician" || my.job === "Wizard") {
        if (P.eq[0].type === "leather" && P.eq[0].weight === 0) {
            bar += .05;
        }
        if (P.eq[4].type === "leather" && P.eq[4].weight === 0) {
            bar += .03;
        }
        if (P.eq[6].type === "leather" && P.eq[6].weight === 0) {
            bar += .05;
        }
        if (P.eq[7].type === "leather" && P.eq[7].weight === 0) {
            bar += .02;
        }
        if (P.eq[8].type === "leather" && P.eq[8].weight === 0) {
            bar += .02;
        }
        if (P.eq[9].type === "leather" && P.eq[9].weight === 0) {
            bar += .02;
        }
        if (P.eq[10].type === "leather" && P.eq[10].weight === 0) {
            bar += .03;
        }
        if (P.eq[11].type === "leather" && P.eq[11].weight === 0) {
            bar += .02;
        }
        //chain
        if (P.eq[0].type === "chain") {
            bar += .11;
            if (P.eq[0].weight === 1) {
                bar -= .06;
            }
        }
        if (P.eq[4].type === "chain") {
            bar += .07;
            if (P.eq[4].weight === 1) {
                bar -= .04;
            }
        }
        if (P.eq[6].type === "chain") {
            bar += .11;
            if (P.eq[6].weight === 1) {
                bar -= .06;
            }
        }
        if (P.eq[7].type === "chain") {
            bar += .05;
            if (P.eq[7].weight === 1) {
                bar -= .03;
            }
        }
        if (P.eq[8].type === "chain") {
            bar += .05;
            if (P.eq[8].weight === 1) {
                bar -= .03;
            }
        }
        if (P.eq[9].type === "chain") {
            bar += .05;
            if (P.eq[9].weight === 1) {
                bar -= .03;
            }
        }
        if (P.eq[10].type === "chain") {
            bar += .07;
            if (P.eq[10].weight === 1) {
                bar -= .04;
            }
        }
        if (P.eq[11].type === "chain") {
            bar += .05;
            if (P.eq[11].weight === 1) {
                bar -= .03;
            }
        }
        // plate
        if (P.eq[0].type === "plate") {
            bar += .18;
            if (P.eq[0].weight === 1) {
                bar -= .07;
            }
        }
        if (P.eq[4].type === "plate") {
            bar += .12;
            if (P.eq[4].weight === 1) {
                bar -= .05;
            }
        }
        if (P.eq[6].type === "plate") {
            bar += .18;
            if (P.eq[6].weight === 1) {
                bar -= .07;
            }
        }
        if (P.eq[7].type === "plate") {
            bar += .09;
            if (P.eq[7].weight === 1) {
                bar -= .04;
            }
        }
        if (P.eq[8].type === "plate") {
            bar += .09;
            if (P.eq[8].weight === 1) {
                bar -= .04;
            }
        }
        if (P.eq[9].type === "plate") {
            bar += .09;
            if (P.eq[9].weight === 1) {
                bar -= .04;
            }
        }
        if (P.eq[10].type === "plate") {
            bar += .12;
            if (P.eq[10].weight === 1) {
                bar -= .05;
            }
        }
        if (P.eq[11].type === "plate") {
            bar += .09;
            if (P.eq[11].weight === 1) {
                bar -= .04;
            }
        }
    }
    return bar;
}

function min70(x) {
    x = x - 70;
    if (x < 0) {
        x = 0;
    }
    return x;
}

function checkCrit() {
    if (M.random() < criticalChance()) {
        return true;
    } else {
        return false;
    }
}

function convertCritValue(x) {
    var foo = 0;
    var ber = 0;
    if (x > .3 && x <= .8) {
        foo = .3;
        ber = x - foo;
        ber = ber * .5;
        foo = foo + ber;
    } else if (x > .8 && x <= 1.3) {
        foo = .55;
        ber = x - foo;
        ber = ber * .2;
        foo = foo + ber;
    } else if (x > 1.3) {
        foo = .65;
        ber = x - foo;
        ber = ber * .1;
        foo = foo + ber;
    } else {
        foo = x;
    }
    if (foo > .8) {
        foo = .8;
    } //80% crit cap
    return foo;
}
//armor value
function armorFunct() {
    var equipped = g.armorEquip;
    var foo = false;
    for (var i = 0; i <= 4; i++) {
        if (mob[i].conflagrationTicks > 0) {
            foo = true;
        }
    }
    if (foo === true) {
        equipped *= .25;
    }
    var myArmor = ((defenseTotal() * 3.5) + (equipped)) + armorBuff;
    if (my.job === "Monk") {
        myArmor = ((defenseTotal() * 3.5) + (equipped * 1.5)) + armorBuff;
    }
    if (myArmor < 1) {
        myArmor = 1;
    }
    return M.round(myArmor);
}
//armor % vs mob's str
function armorPercent(Slot) {
    var armorReduction = (1 - ((armorFunct() * 2) / mobStrength(Slot)) / 100);
    return armorReduction;
}
//armor vs same level mob - used for stat page
function armorPercentSelf() {
    var x = (((armorFunct() * 2) / ((1 + (my.level * 2.2)) + (my.level / 20))) / 100);
    x = (x * 1000) / 10;
    if (my.name === "") {
        x = "";
        return x;
    }
    if (x > 80) {
        x = 80;
    }
    return M.round(x);
}

function attackFunct() {
    var x = 0;
	var e1 = P.eq[12];
    if (e1.type === "slashed") {
        x = (oneHandSlashTotal() * 2.5);
    } else if (e1.type === "cleaved") {
        x = (twoHandSlashTotal() * 2.5);
    } else if (e1.type === "pierced") {
        x = (piercingTotal() * 2.5);
    } else if (e1.type === "punched") {
        x = (handToHandTotal() * 2.5);
    } else if (e1.type === "crushed") {
        x = (oneHandBluntTotal() * 2.5);
    } else {
        x = (twoHandBluntTotal() * 2.5);
    }
    x = (x + (offenseTotal() * 1.5) + (min70(strTotal()) * 2.2) + g.attackEquip + attackPowerBuff);
    //%
    if (Set.Minotaur >= 2) {
        x += 15;
    }
    if (Set.Friar >= 2) {
        x += 50;
    }
    if (Set.HighPriest >= 4) {
        x += 150;
    }
    if (Set.Warlock >= 3) {
        x += 125;
    }
    var atkEnh = 0;
    if (sowStatus === true) {
        atkEnh += 15;
        if (my.job === "Shaman") {
            if (my.talent11 >= 1) {
                atkEnh += (15 * ((talent11() * 5.8) / 100));
            }
        }
    }
    if (my.job === "Bard") {
        if (anthemDeArmsStatus === true) {
            atkEnh += (talent3() * 1.68);
        }
    }
	if(Set.Crusader >= 6){
		if(symbolOfRyltanStatus){
			atkEnh += 30;
		}
	}
    x = (x + (x * (atkEnh / 100)));
    return M.round(x);
}
g.maxHpFunct = function() {
    var x = my.level;
    var x1 = my.job;
    var foo = (((((staTotal()) * JOB.hpTier) * (x / 50)) + (x * 13) + 20)) + g.hpEquip + maxHpBuff;
    if (x1 === "Ranger") {
        if (thistlecoatStatus === true) {
            foo = (foo * (1 + ((talent2() / 100) * 1.42)));
        }
    }
    if (x1 === "Bard") {
        foo = (foo * (1 + (talent2() * 1.55) / 100));
    }
    if (Set.Warlord >= 4) {
        foo += 300;
    }
	// boost max hp%
	var enh = 0;
    if (Set.Hierophant >= 6) {
        enh += .3;
    }
    if (Set.ArchMage >= 6) {
        enh += .15;
    }
    foo = ~~(foo*(1+enh));
    my.maxHp = foo;
    return foo;
}
g.maxMpFunct = function() {
    var x = 100;
    var x1 = my.level;
    var x2 = g.mpEquip;
    var x3 = JOB.mpClass;
    var x4 = JOB.mpTier;
    if (x3 === "intCaster") {
        x = M.ceil((((((intTotal()) * x4) * (x1 / 50)) + (x1 * 13) + 15)) + x2 + 125);
    } else if (x3 === "intHybrid") {
        x = M.ceil((((((intTotal()) * x4) * (x1 / 50)) + ((x1 - 8) * 13) + 15)) + x2 + 75);
    } else if (x3 === "wisCaster") {
        x = M.ceil((((((wisTotal()) * x4) * (x1 / 50)) + (x1 * 13) + 15)) + x2 + 125);
    } else if (x3 === "wisHybrid") {
        x = M.ceil((((((wisTotal()) * x4) * (x1 / 50)) + ((x1 - 8) * 13) + 15)) + x2 + 75);
    }
    if (JOB.jobType === "hybrid") {
        if (x1 <= 8) {
            x = 0;
        }
    }
	if(JOB.mpClass!=='melee'){
		var enh = 0;
		if (Set.ArchMage >= 6) {
			enh += .15;
		}
		x = ~~(x*(1+enh));
	}
    return x;
}

function strTotal() {
    var foo = my.str + g.strEquip + strBuff + g.allStatsEquip;
    if (foo < 1) {
        foo = 1;
    }
    return foo;
}

function staTotal() {
    var foo = my.sta + g.staEquip + staBuff + g.allStatsEquip;
    if (foo < 1) {
        foo = 1;
    }
    return foo;
}

function agiTotal() {
    var foo = my.agi + g.agiEquip + agiBuff + g.allStatsEquip;
    if (foo < 1) {
        foo = 1;
    }
    return foo;
}

function dexTotal() {
    var foo = my.dex + g.dexEquip + dexBuff + g.allStatsEquip;
    if (foo < 1) {
        foo = 1;
    }
    return foo;
}

function wisTotal() {
    var foo = my.wis + g.wisEquip + wisBuff + g.allStatsEquip;
    if (foo < 1) {
        foo = 1;
    }
    return foo;
}

function intTotal() {
    var foo = my.intel + g.intelEquip + intelBuff + g.allStatsEquip;
    if (foo < 1) {
        foo = 1;
    }
    return foo;
}

function chaTotal() {
    var foo = my.cha + g.chaEquip + chaBuff + g.allStatsEquip;
    if (foo < 1) {
        foo = 1;
    }
    return foo;
}

function poisonTotal() {
    var foo = my.svpoison + g.resistPoisonEquip + svpoisonBuff + g.allResistEquip;
    if (foo > 0) {
        if (
            (mob[0].name && mob[0].convictionAura === true) ||
            (mob[1].name && mob[1].convictionAura === true) ||
            (mob[2].name && mob[2].convictionAura === true) ||
            (mob[3].name && mob[3].convictionAura === true) ||
            (mob[4].name && mob[4].convictionAura === true)
        ) {
            foo = foo * .5;
        }
    }
    if (foo > 300) {
        foo = 300;
    }
    if (divineAegisStatus) {
        foo = 350;
    }
    return M.round(foo);
}

function magicTotal() {
    var foo = my.svmagic + g.resistMagicEquip + svmagicBuff + g.allResistEquip;
    if (foo > 0) {
        if (
            (mob[0].name && mob[0].convictionAura === true) ||
            (mob[1].name && mob[1].convictionAura === true) ||
            (mob[2].name && mob[2].convictionAura === true) ||
            (mob[3].name && mob[3].convictionAura === true) ||
            (mob[4].name && mob[4].convictionAura === true)
        ) {
            foo = foo * .5;
        }
    }
    var max = 300;
    if (my.job === "Bard") {
        if (my.talent6 >= 20) {
            max = 340;
        }
    }
    if (foo > max) {
        foo = max;
    }
    if (divineAegisStatus) {
        foo = 350;
    }
    return M.round(foo);
}

function lightningTotal() {
    var foo = my.svlightning + g.resistLightningEquip + svlightningBuff + g.allResistEquip;
    if (foo > 0) {
        if (
            (mob[0].name && mob[0].convictionAura === true) ||
            (mob[1].name && mob[1].convictionAura === true) ||
            (mob[2].name && mob[2].convictionAura === true) ||
            (mob[3].name && mob[3].convictionAura === true) ||
            (mob[4].name && mob[4].convictionAura === true)
        ) {
            foo = foo * .5;
        }
    }
    var max = 300;
    if (my.job === "Bard") {
        if (my.talent6 >= 20) {
            max = 340;
        }
    }
    if (foo > max) {
        foo = max;
    }
    if (divineAegisStatus) {
        foo = 350;
    }
    return M.round(foo);
}

function coldTotal() {
    var foo = my.svcold + g.resistColdEquip + svcoldBuff + g.allResistEquip;
    if (foo > 0) {
        if (
            (mob[0].name && mob[0].convictionAura === true) ||
            (mob[1].name && mob[1].convictionAura === true) ||
            (mob[2].name && mob[2].convictionAura === true) ||
            (mob[3].name && mob[3].convictionAura === true) ||
            (mob[4].name && mob[4].convictionAura === true)
        ) {
            foo = foo * .5;
        }
    }
    var max = 300;
    if (my.job === "Bard") {
        if (my.talent6 >= 20) {
            max = 340;
        }
    }
    if (foo > max) {
        foo = max;
    }
    if (divineAegisStatus) {
        foo = 350;
    }
    return M.round(foo);
}

function fireTotal() {
    var foo = my.svfire + g.resistFireEquip + svfireBuff + g.allResistEquip;
    if (foo > 0) {
        if (
            (mob[0].name && mob[0].convictionAura === true) ||
            (mob[1].name && mob[1].convictionAura === true) ||
            (mob[2].name && mob[2].convictionAura === true) ||
            (mob[3].name && mob[3].convictionAura === true) ||
            (mob[4].name && mob[4].convictionAura === true)
        ) {
            foo = foo * .5;
        }
    }
    var max = 300;
    if (my.job === "Bard") {
        if (my.talent6 >= 20) {
            max = 340;
        }
    }
    if (foo > max) {
        foo = max;
    }
    if (divineAegisStatus) {
        foo = 350;
    }
    return M.round(foo);
}
//buffs start at 0; haste starts at 1 (meaning normal rate)
function convertHasteValue(x) {
    var foo = 0;
    var ber = 0;
    if (x < -.3 && x >= -.8) {
        foo = -.3;
        ber = x - foo;
        ber = ber * .5;
        foo = foo + ber;
    } else if (x < -.8 && x >= -1.3) {
        foo = -.55;
        ber = x + .8;
        ber = ber * .2;
        foo = foo + ber;
    } else if (x < -1.3) {
        foo = -.65;
        ber = x + 1.3;
        ber = ber * .1;
        foo = foo + ber;
    } else {
        foo = x;
    }
    if (foo < -.8) {
        foo = -.8;
    } //80% haste cap
    return foo;
}

function totalHaste1() {
    var qq = attackHaste();
    var foo = P.eq[12].delay * (qq + 1);
    if (foo < minimumWeaponSpeed) {
        foo = minimumWeaponSpeed;
    } // min weapon speed
    if (yaulpStatus === true) {
        foo = 500;
    }
    return foo;
}

function totalHaste2() {
    var qq = attackHaste();
    var foo = P.eq[13].delay * (qq + 1);
    if (foo < minimumWeaponSpeed) {
        foo = minimumWeaponSpeed;
    } // min weapon speed
    if (yaulpStatus === true) {
        foo = 500;
    }
    return foo;
}

function attackHaste(display) {
    var qq = (hasteBuff + g.hasteEquip) / 1000; // starts at zero; goes negative to provide haste
	if(alacrityStatus===true){
		qq -= .4;
	}
    if (my.job === "Cleric") {
        if (armorOfFaithStatus === true) {
            qq -= (talent7() * 1.6 / 100);
        }
    }
    if (my.job === "Shaman") {
        if (callOfTheAncientsStatus === true) {
            qq -= (talent9() * 1.75 / 100);
        }
    }
    if (mySingingSword === true && my.job === "Bard") {
        qq = ~~(qq * 1.5);
    } //enh
    if (chillStatus === true) {
        qq = qq / 2;
    } //red
    if (display) {
        return qq;
    } else {
        qq = convertHasteValue(qq);
        return qq;
    }
}

function phyGlobalTotal(display) {
    var qq = (cooldownDurationBuff + g.globalHasteEquip) / 1000;
    if (my.job === "Paladin") {
        if (my.talent8 >= 20) {
            qq -= .2;
        }
    } else if (my.job === "Ranger") {
        if (my.talent10 >= 20) {
            qq -= ((talent10() * .75) / 100);
        }
    }
    if (!display) {
        qq = convertHasteValue(qq);
    }
    var foo = (1500 * g.speed) * (qq + 1);
    foo = foo * armorPenalty();
    var enh = 100;
    var zug;
    for (var i = 0; i <= 4; i++) {
        if (mob[i].name && mob[i].concussiveAura == true) {
            if (mob[i].charmStatus === false) {
                zug = 1;
                continue;
            }
        }
    }
    if (zug) {
        enh += 30;
    }
    if (chillStatus === true) {
        enh += 30;
    }
    if (enh > 150) {
        enh = 150;
    }
    foo = foo * (enh / 100);
    return foo;
}

function castSpeedTotal(spellSpeed, display) {
    spellSpeed *= g.speed;
    var qq = (spellHasteBuff + g.castingHasteEquip) / 1000;
    if (bloodlustStatus === true) {
        spellSpeed = spellSpeed * .4;
    }
    if (my.job === "Cleric") {
        if (my.talent2 >= 1) {
            qq -= ((talent2() * 1.4) / 100);
        }
        if (markOfJudgementStatus === true) {
            spellSpeed = spellSpeed / 2;
        }
    } else if (my.job === "Enchanter") {
        if (my.talent10 >= 20) {
            qq -= .35;
        }
    } else if (my.job === "Magician") {
        if (my.talent11 >= 20) {
            qq -= .35;
        }
    } else if (my.job === "Wizard") {
        if (my.talent9 >= 20) {
            qq -= .35;
        }
    }
    if (!display) {
        qq = convertHasteValue(qq);
    }
    var foo = spellSpeed * (qq + 1);
    var bar = armorPenalty();
    foo = foo * armorPenalty();
    var zug = false;
    for (var i = 0; i <= 4; i++) {
        if (mob[i].name && mob[i].disruptionAura == true) {
            if (mob[i].charmStatus === false) {
                zug = true;
                continue;
            }
        }
    }
    if (zug == true) {
        foo = foo * 1.3;
    }
    return foo;
}

function criticalChance(display) {
    var foo = g.critChanceEquip / 100;
    foo += .05 + ((min70(dexTotal())) / 800);
	if(eagleStrikeStatus){
		foo += .5;
	}
    if (!display) {
        foo = convertCritValue(foo) + g.coldBloodBonus;
        return foo;
    } else {
        return (foo * 100);
    }
}
g.criticalDamage = function() {
        var foo = 50;
        foo += (dexTotal() / 25) + g.critDamageEquip + 0;
        return foo / 100;
    }
    //incoming damage calculations for physical and magic
function physicalMitigation() {
    var phyMit = M.round((min70(agiTotal())) / 9);
    phyMit += phyMitBuff + g.phyMitEquip;
    return phyMit;
}

function magicMitigation() {
    var magMit = M.round((min70(wisTotal())) / 11);
    magMit += magMitBuff + g.magMitEquip;
    return magMit;
}
//skill calculation functions
function oneHandSlashTotal() {
    var foo = my.oneHandSlash;
    if (foo > 0) {
        foo += g.oneHandSlashEquip + g.allSkillsEquip;
    }
    return foo;
}

function twoHandSlashTotal() {
    var foo = my.twoHandSlash;
    if (foo > 0) {
        foo += g.twoHandSlashEquip + g.allSkillsEquip;
    }
    return foo;
}

function oneHandBluntTotal() {
    var foo = my.oneHandBlunt;
    if (foo > 0) {
        foo += g.oneHandBluntEquip + g.allSkillsEquip;
    }
    return foo;
}

function twoHandBluntTotal() {
    var foo = my.twoHandBlunt;
    if (foo > 0) {
        foo += g.twoHandBluntEquip + g.allSkillsEquip;
    }
    return foo;
}

function piercingTotal() {
    var foo = my.piercing;
    if (foo > 0) {
        foo += g.piercingEquip + g.allSkillsEquip;
        if (Set.Martyr >= 2) {
            foo += 6;
        }
    }
    return foo;
}

function handToHandTotal() {
    var foo = my.handtohand;
    if (foo > 0) {
        foo += g.handtohandEquip + g.allSkillsEquip;
    }
    return foo;
}

function offenseTotal() {
    var foo = my.offense;
    if (foo > 0) {
        foo += g.offenseEquip + g.allSkillsEquip;
    }
    return foo;
}

function dualWieldTotal() {
    var foo = my.dualWield;
    if (foo > 0) {
        foo += g.dualWieldEquip + g.allSkillsEquip;
    }
    return foo;
}

function doubleAttackTotal() {
    var foo = my.doubleAttack;
    if (foo > 0) {
        foo += g.doubleAttackEquip + g.allSkillsEquip;
    }
    return foo;
}

function defenseTotal() {
    var foo = my.defense;
    if (foo > 0) {
        foo += g.defenseEquip + g.allSkillsEquip;
    }
    var zug = false;
    for (var i = 0; i <= 4; i++) {
        if (mob[i].name && mob[i].shreddingAura === true) {
            if (mob[i].charmStatus === false) {
                zug = true;
                continue;
            }
        }
    }
    if (zug == true) {
        foo = ~~(foo * .2);
    }
    return foo;
}

function dodgeTotal() {
    var foo = my.dodge;
    if (foo > 0) {
        foo += g.dodgeEquip + g.allSkillsEquip;
    }
    return foo;
}

function parryTotal() {
    var foo = my.parry;
    if (foo > 0) {
        foo += g.parryEquip + g.allSkillsEquip;
    }
    return foo;
}

function riposteTotal() {
    var foo = my.riposte;
    if (foo > 0) {
        foo += g.riposteEquip + g.allSkillsEquip;
    }
    return foo;
}

function alterationTotal() {
    var foo = my.alteration;
    if (foo > 0) {
        foo += g.alterationEquip + g.allSkillsEquip;
    }
    return foo;
}

function evocationTotal() {
    var foo = my.evocation;
    if (foo > 0) {
        foo += g.evocationEquip + g.allSkillsEquip;
    }
    return foo;
}

function conjurationTotal() {
    var foo = my.conjuration;
    if (foo > 0) {
        foo += g.conjurationEquip + g.allSkillsEquip;
    }
    return foo;
}

function abjurationTotal() {
    var foo = my.abjuration;
    if (foo > 0) {
        foo += g.abjurationEquip + g.allSkillsEquip;
    }
    return foo;
}

function channelingTotal() {
    var foo = my.channeling;
    if (foo > 0) {
        foo += g.channelingEquip + g.allSkillsEquip;
    }
    return foo;
}

function setTip(item) {
    var s = '';
    var D = "<div>";
    var d = "</div>";
    var t = "<div class='setTitle'>";
    var n = item.name;
    if (n.indexOf("Miner") === 0) {
        var x = Set.Miner;
        if (x >= 2) {
            s += D + "+6 Life Leech" + d;
            s += D + "+6 Mana Leech" + d;
        }
        if (x >= 3) {
            s += D + "+25% All Resists" + d;
        }
        s += t + "Miner's Infamy" + d;
    } else if (n.indexOf("Minotaur") === 0) {
        var x = Set.Minotaur;
        if (x >= 2) {
            s += D + "+15 Attack" + d;
        }
        if (x >= 3) {
            s += D + "+30 Strength" + d;
        }
        if (x >= 4) {
            s += D + "+12% Physical Damage" + d;
        }
        s += t + "Minotaur's Assault" + d;
    } else if (n.indexOf("Golem") === 0) {
        var x = Set.Golem;
        if (x >= 2) {
            s += D + "+5 Defense" + d;
        }
        if (x >= 3) {
            s += D + "+50 Maximum Health" + d;
        }
        if (x >= 4) {
            s += D + "+25 Maximum Physical Reduction" + d;
        }
        s += t + "Golem's Avarice" + d;
    } else if (n.indexOf("Martyr") === 0) {
        var x = Set.Martyr;
        if (x >= 2) {
            s += D + "+6 Piercing" + d;
        }
        if (x >= 3) {
            s += D + "+10 Health Per Kill" + d;
        }
        if (x >= 4) {
            s += D + "+15 Critical Chance" + d;
        }
        s += t + "Martyr's Sacrifice" + d;
    } else if (n.indexOf("Bishop") === 0) {
        var x = Set.Bishop;
        if (x >= 2) {
            s += D + "+12 Wisdom" + d;
        }
        if (x >= 3) {
            s += D + "+4 Mana Per Tick" + d;
        }
        if (x >= 4) {
            s += D + "+30 All Resistances" + d;
        }
        s += t + "Bishop's Virtue" + d;
    } else if (n.indexOf("Samurai") === 0) {
        var x = Set.Samurai;
        if (x >= 2) {
            s += D + "+6 Offense" + d;
        }
        if (x >= 3) {
            s += D + "+24 Lightning Damage" + d;
        }
        if (x >= 4) {
            s += D + "Skill Haste +15" + d;
        }
        s += t + "Samurai's Honor" + d;
    } else if (n.indexOf("Emissary") === 0) {
        var x = Set.Emissary;
        if (x >= 2) {
            s += D + "+12 All Resistances" + d;
        }
        if (x >= 3) {
            s += D + "+15 Exp Gain" + d;
        }
        if (x >= 4) {
            s += D + "+7 All Skills" + d;
        }
        s += t + "Emissary's Judgment" + d;
    } else if (n.indexOf("Sage") === 0) {
        var x = Set.Sage;
        if (x >= 2) {
            s += D + "+4 Health Per Tick" + d;
        }
        if (x >= 3) {
            s += D + "+7 Mana Per Kill" + d;
        }
        if (x >= 4) {
            s += D + "+25 All Attributes" + d;
        }
        s += t + "Eternal Sage" + d;
    } else if (n.indexOf("Vagabond") === 0) {
        var x = Set.Vagabond;
        if (x >= 2) {
            s += D + "+8% Critical Damage" + d;
        }
        if (x >= 3) {
            s += D + "+15 Hand to Hand" + d;
        }
        if (x >= 4) {
            s += D + "Attack Haste +15" + d;
        }
        s += t + "Vagabond's Fate" + d;
    } else if (n.indexOf("Vagrant") === 0) {
        var x = Set.Vagrant;
        if (x >= 2) {
            s += D + "+12 Thorn Damage" + d;
        }
        if (x >= 3) {
            s += D + "+35 Maximum Mana" + d;
        }
        if (x >= 4) {
            s += D + "+12% Fire Damage" + d;
        }
        s += t + "Vagrant's Weald" + d;
    } else if (n.indexOf("Chancellor") === 0) {
        var x = Set.Chancellor;
        if (x >= 2) {
            s += D + "+35 Resist Poison" + d;
        }
        if (x >= 3) {
            s += D + "-30% Fear Duration" + d;
        }
        if (x >= 4) {
            s += D + "+12% Poison Damage" + d;
        }
        s += t + "Chancellor's Vestige" + d;
    } else if (n.indexOf("Magnate") === 0) {
        var x = Set.Magnate;
        if (x >= 2) {
            s += D + "Casting Haste +8" + d;
        }
        if (x >= 3) {
            s += D + "+5% Lightning Damage" + d;
        }
        if (x >= 4) {
            s += D + "+20 Conjuration" + d;
        }
        s += t + "Magnate's Relic" + d;
    } else if (n.indexOf("Orator") === 0) {
        var x = Set.Orator;
        if (x >= 2) {
            s += D + "+6 Alteration" + d;
        }
        if (x >= 3) {
            s += D + "-25% Stun Duration" + d;
        }
        if (x >= 4) {
            s += D + "+12% Arcane Damage" + d;
        }
        s += t + "Orator's Passion" + d;
    } else if (n.indexOf("Wyvern") === 0) {
        var x = Set.Wyvern;
        if (x >= 2) {
            s += D + "+4% Fire Damage" + d;
        }
        if (x >= 3) {
            s += D + "+50 Resist Fire" + d;
        }
        if (x >= 4) {
            s += D + "+15 Critical Chance" + d;
        }
        s += t + "Wyvern's Heart" + d;
    } else if (n.indexOf("Guardian") === 0) {
        var x = Set.Guardian;
        if (x >= 2) {
            s += D + "+10 Defense" + d;
        }
        if (x >= 3) {
            s += D + "+13 Health Per Tick" + d;
        }
        if (x >= 4) {
            s += D + "+15 All Resistances" + d;
        }
        if (x >= 5) {
            s += D + "+7 Life Leech" + d;
        }
        if (x >= 6) {
            s += D + "-75% All Status Effect Durations" + d;
            s += D + "Pummel:" + d;
            s += D + "Hits 5 Times" + d;
        }
        s += t + "Stalwart Guardian" + d;
    } else if (n.indexOf("Duke") === 0) {
        var x = Set.Duke;
        if (x >= 2) {
            s += D + "-40% Fear Duration" + d;
        }
        if (x >= 3) {
            s += D + "+80 Maximum Health" + d;
        }
        if (x >= 4) {
            s += D + "Skill Haste +15" + d;
        }
        if (x >= 5) {
            s += D + "+15 Maximum Magic Reduction" + d;
        }
        if (x >= 6) {
            s += D + "+30% Arcane Damage" + d;
            s += D + "Yaulp:" + d;
            s += D + "Duration Increased 4 Seconds" + d;
        }
        s += t + "Duke of Prentia" + d;
    } else if (n.indexOf("Augur") === 0) {
        var x = Set.Augur;
        if (x >= 2) {
            s += D + "+60 Maximum Health" + d;
        }
        if (x >= 3) {
            s += D + "+8 Mana Leech" + d;
        }
        if (x >= 4) {
            s += D + "+40 Intelligence" + d;
        }
        if (x >= 5) {
            s += D + "+25% Critical Damage" + d;
        }
        if (x >= 6) {
            s += D + "+40 Critical Chance" + d;
            s += D + "Harm Touch:" + d;
            s += D + "Cooldown Reduced 40 Seconds" + d;
        }
        s += t + "Lurid Augur" + d;
    } else if (n.indexOf("Venova") === 0) {
        var x = Set.Venova;
        if (x >= 2) {
            s += D + "-25% Silence Duration" + d;
        }
        if (x >= 3) {
            s += D + "+15 Magic Find" + d;
        }
        if (x >= 4) {
            s += D + "Casting Haste +15" + d;
        }
        if (x >= 5) {
            s += D + "+60 Resist Arcane" + d;
        }
        if (x >= 6) {
            s += D + "+50 Alteration" + d;
            s += D + "Guardian Angel:" + d;
            s += D + "Angel Casts Expel Corruption" + d;
        }
        s += t + "Venova's Will" + d;
    } else if (n.indexOf("Baron") === 0) {
        var x = Set.Baron;
        if (x >= 2) {
            s += D + "+75 Maximum Health" + d;
        }
        if (x >= 3) {
            s += D + "+2 All Skills" + d;
        }
        if (x >= 4) {
            s += D + "Attack Haste +15" + d;
        }
        if (x >= 5) {
            s += D + "Casting Haste +20" + d;
        }
        if (x >= 6) {
            s += D + "+15% All Damage" + d;
            s += D + "Consonant Chain:" + d;
            s += D + "All Damage Enhanced 15% On Chained Mobs" + d;
        }
        s += t + "Baron's Symphony" + d;
    } else if (n.indexOf("Daimyo") === 0) {
        var x = Set.Daimyo;
        if (x >= 2) {
            s += D + "Absorb 8% of Lightning Damage" + d;
        }
        if (x >= 3) {
            s += D + "+25% Gold Gain" + d;
        }
        if (x >= 4) {
            s += D + "+25 Thorn Damage" + d;
        }
        if (x >= 5) {
            s += D + "Skill Haste +25" + d;
        }
        if (x >= 6) {
            s += D + "+60% Critical Damage" + d;
            s += D + "Trueshot Arrow:" + d;
            s += D + "Cooldown Reduced 6 Seconds" + d;
        }
        s += t + "Daimyo's Decree" + d;
    } else if (n.indexOf("Bloodletter") === 0) {
        var x = Set.Bloodletter;
        if (x >= 2) {
            s += D + "+12 Health Per Kill" + d;
        }
        if (x >= 3) {
            s += D + "+10 Dual Wield" + d;
        }
        if (x >= 4) {
            s += D + "+75 Poison Damage" + d;
        }
        if (x >= 5) {
            s += D + "+60 Agility" + d;
        }
        if (x >= 6) {
            s += D + "+40 Life Leech" + d;
            s += D + "Mirage Strike:" + d;
            s += D + "Reduce Cooldown 3 Seconds" + d;
        }
        s += t + "Bloodletter's Pact" + d;
    } else if (n.indexOf("Mendicant") === 0) {
        var x = Set.Mendicant;
        if (x >= 2) {
            s += D + "+75 Resist Cold" + d;
        }
        if (x >= 3) {
            s += D + "Casting Haste +15" + d;
        }
        if (x >= 4) {
            s += D + "+120 Maximum Health" + d;
        }
        if (x >= 5) {
            s += D + "+10 Health Per Tick" + d;
        }
        if (x >= 6) {
            s += D + "+30% Poison Damage" + d;
            s += D + "Glacial Impact:" + d;
            s += D + "Freezes Target For 5 Additional Seconds" + d;
        }
        s += t + "Mephitic Mendicant" + d;
    } else if (n.indexOf("Friar") === 0) {
        var x = Set.Friar;
        if (x >= 2) {
            s += D + "+50 Attack" + d;
        }
        if (x >= 3) {
            s += D + "+20 Double Attack" + d;
        }
        if (x >= 4) {
            s += D + "+25 Riposte" + d;
        }
        if (x >= 5) {
            s += D + "Skill Haste +25" + d;
        }
        if (x >= 6) {
            s += D + "Attack Haste +50" + d;
            s += D + "Windmill Kick:" + d;
            s += D + "Cooldown Reduced 13 Seconds" + d;
        }
        s += t + "Solemn Friar" + d;
    } else if (n.indexOf("Willow") === 0) {
        var x = Set.Willow;
        if (x >= 2) {
            s += D + "+5% Fire Damage" + d;
        }
        if (x >= 3) {
            s += D + "+2 All Skills" + d;
        }
        if (x >= 4) {
            s += D + "-15% All Status Effect Durations" + d;
        }
        if (x >= 5) {
            s += D + "+20 All Attributes" + d;
        }
        if (x >= 6) {
            s += D + "Casting Haste +50" + d;
            s += D + "Root:" + d;
            s += D + "Rooted Targets Take 30% Additional Damage" + d;
        }
        s += t + "Willow's Heart" + d;
    } else if (n.indexOf("Wraith") === 0) {
        var x = Set.Wraith;
        if (x >= 2) {
            s += D + "+7 Mana Per Tick" + d;
        }
        if (x >= 3) {
            s += D + "+15 Mana Per Kill" + d;
        }
        if (x >= 4) {
            s += D + "Casting Haste +20" + d;
        }
        if (x >= 5) {
            s += D + "+15 Conjuration" + d;
        }
        if (x >= 6) {
            s += D + "+25 All Skills" + d;
            s += D + "Drain Soul:" + d;
            s += D + "Cooldown Reduced 6 Seconds" + d;
        }
        s += t + "Condemned Wraith" + d;
    } else if (n.indexOf("Satyr") === 0) {
        var x = Set.Satyr;
        if (x >= 2) {
            s += D + "+15 Maximum Physical Reduction" + d;
        }
        if (x >= 3) {
            s += D + "+45 Intelligence" + d;
        }
        if (x >= 4) {
            s += D + "+125 Maximum Health" + d;
        }
        if (x >= 5) {
            s += D + "+32 All Resistances" + d;
        }
        if (x >= 6) {
            s += D + "+30% Arcane Damage" + d;
            s += D + "Mystic Rune:" + d;
            s += D + "Cooldown Reduced 10 Seconds" + d;
        }
        s += t + "Venerable Satyr" + d;
    } else if (n.indexOf("Summoner") === 0) {
        var x = Set.Summoner;
        if (x >= 2) {
            s += D + "+12% Critical Damage" + d;
        }
        if (x >= 3) {
            s += D + "+10% Cold Damage" + d;
        }
        if (x >= 4) {
            s += D + "Casting Haste +24" + d;
        }
        if (x >= 5) {
            s += D + "+12% Lightning Damage" + d;
        }
        if (x >= 6) {
            s += D + "+50 Conjuration" + d;
            s += D + "Psionic Storm:" + d;
            s += D + "Cooldown Reduced 13 Seconds" + d;
        }
        s += t + "Occult Summoner" + d;
    } else if (n.indexOf("Malefactor") === 0) {
        var x = Set.Malefactor;
        if (x >= 2) {
            s += D + "+35 Stamina" + d;
        }
        if (x >= 3) {
            s += D + "+10 Evocation" + d;
        }
        if (x >= 4) {
            s += D + "-40% Silence Duration" + d;
        }
        if (x >= 5) {
            s += D + "Casting Haste +21" + d;
        }
        if (x >= 6) {
            s += D + "+20% All Magical Damage" + d;
            s += D + "Chain Lightning:" + d;
            s += D + "Damage Enhanced 50%" + d;
        }
        s += t + "Arcane Malefactor" + d;
    } else if (n.indexOf("Warlord") === 0) {
        var x = Set.Warlord;
        if (x >= 2) {
            s += D + "+45 Dexterity" + d;
        }
        if (x >= 3) {
            s += D + "+60 Strength" + d;
        }
        if (x >= 4) {
            s += D + "+300 Maximum Health" + d;
        }
        if (x >= 5) {
            s += D + "Attack Haste +40" + d;
        }
        if (x >= 6) {
            s += D + "+80% Critical Damage" + d;
            s += D + "Intrepid Might:" + d;
            s += D + "Invincibility Duration Doubled" + d;
        }
        s += t + "Mighty Warlord" + d;
    } else if (n.indexOf("Assassin") === 0) {
        var x = Set.Assassin;
        if (x >= 2) {
            s += D + "+15 Maximum Magic Reduction" + d;
        }
        if (x >= 3) {
            s += D + "+24 Maximum Physical Reduction" + d;
        }
        if (x >= 4) {
            s += D + "+35 All Resistances" + d;
        }
        if (x >= 5) {
            s += D + "+100 Agility" + d;
        }
        if (x >= 6) {
            s += D + "+55 Critical Chance" + d;
            s += D + "Sonic Strike:" + d;
            s += D + "Stuns All Targets" + d;
        }
        s += t + "Deadly Assassin" + d;
    } else if (n.indexOf("Grandmaster") === 0) {
        var x = Set.Grandmaster;
        if (x >= 2) {
            s += D + "+5 All Skills" + d;
        }
        if (x >= 3) {
            s += D + "+40 Magic Find" + d;
        }
        if (x >= 4) {
            s += D + "+25 Health Per Tick" + d;
        }
        if (x >= 5) {
            s += D + "+15% Physical Damage" + d;
        }
        if (x >= 6) {
            s += D + "+50 Life Leech" + d;
            s += D + "Flying Kick:" + d;
            s += D + "Stuns Target" + d;
        }
        s += t + "Honored Grandmaster" + d;
    } else if (n.indexOf("Crusader") === 0) {
        var x = Set.Crusader;
        if (x >= 2) {
            s += D + "+50 Wisdom" + d;
        }
        if (x >= 3) {
            s += D + "+14 Mana Per Tick" + d;
        }
        if (x >= 4) {
            s += D + "Absorb 15% of Arcane Damage" + d;
        }
        if (x >= 5) {
            s += D + "-80% All Status Effect Durations" + d;
        }
        if (x >= 6) {
            s += D + "+35 All Skills" + d;
            s += D + "Symbol of Marshan:" + d;
            s += D + "Buffs Attack 30%" + d;
        }
        s += t + "Righteous Crusader" + d;
    } else if (n.indexOf("Grave Lord") === 0) {
        var x = Set.GraveLord;
        if (x >= 2) {
            s += D + "+12 Offense" + d;
        }
        if (x >= 3) {
            s += D + "Absorb 12% of Cold Damage" + d;
        }
        if (x >= 4) {
            s += D + "+24 Life Leech" + d;
        }
        if (x >= 5) {
            s += D + "Attack Haste +40" + d;
        }
        if (x >= 6) {
            s += D + "+315 Poison Damage" + d;
            s += D + "Slam:" + d;
            s += D + "Double Swing" + d;
        }
        s += t + "Infernal Grave Lord" + d;
    } else if (n.indexOf("Warder") === 0) {
        var x = Set.Warder;
        if (x >= 2) {
            s += D + "+20 Riposte" + d;
        }
        if (x >= 3) {
            s += D + "+10% Physical Damage" + d;
        }
        if (x >= 4) {
            s += D + "Absorb 25% of Fire Damage" + d;
        }
        if (x >= 5) {
            s += D + "+100 Dexterity" + d;
        }
        if (x >= 6) {
            s += D + "Skill Haste +50" + d;
            s += D + "Blade Shield:" + d;
            s += D + "Parry and Riposte Magic Attacks" + d;
        }
        s += t + "Deft Warder" + d;
    } else if (n.indexOf("Virtuoso") === 0) {
        var x = Set.Virtuoso;
        if (x >= 2) {
            s += D + "+20 All Attributes" + d;
        }
        if (x >= 3) {
            s += D + "+40% Gold Gain" + d;
        }
        if (x >= 4) {
            s += D + "+20 Mana Per Tick" + d;
        }
        if (x >= 5) {
            s += D + "+30% Arcane Damage" + d;
        }
        if (x >= 6) {
            s += D + "+150 Charisma" + d;
            s += D + "Great Leader:" + d;
            s += D + "+Exp Find Enhances Arcane Damage 30%" + d;
        }
        s += t + "Adroit Virtuoso" + d;
    } else if (n.indexOf("Hierophant") === 0) {
        var x = Set.Hierophant;
        if (x >= 2) {
            s += D + "+20 All Resistances" + d;
        }
        if (x >= 3) {
            s += D + "+24 Health Per Tick" + d;
        }
        if (x >= 4) {
            s += D + "+150 Thorn Damage" + d;
        }
        if (x >= 5) {
            s += D + "Absorb 10% of All Damage" + d;
        }
        if (x >= 6) {
            s += D + "+30% Maximum Health" + d;
            s += D + "Treant Form:" + d;
            s += D + "+Thorns Enhances All Damage 16%" + d;
        }
        s += t + "Floruit Hierophant" + d;
    } else if (n.indexOf("High Priest") === 0) {
        var x = Set.HighPriest;
        if (x >= 2) {
            s += D + "+55 Wisdom" + d;
        }
        if (x >= 3) {
            s += D + "-70% Fear Duration" + d;
        }
        if (x >= 4) {
            s += D + "+150 Attack" + d;
        }
        if (x >= 5) {
            s += D + "+45 Critical Chance" + d;
        }
        if (x >= 6) {
            s += D + "+30% All Magical Damage" + d;
            s += D + "The Prophet:" + d;
            s += D + "+Attack Reduces Mob Resists 50%" + d;
        }
        s += t + "Extolled High Priest" + d;
    } else if (n.indexOf("Oracle") === 0) {
        var x = Set.Oracle;
        if (x >= 2) {
            s += D + "+20 Health Per Kill" + d;
        }
        if (x >= 3) {
            s += D + "-90% Cold Duration" + d;
        }
        if (x >= 4) {
            s += D + "+20% Poison Damage" + d;
        }
        if (x >= 5) {
            s += D + "+30% Cold Damage" + d;
        }
        if (x >= 6) {
            s += D + "+30% All Healing Power" + d;
            s += D + "The Cannibal:" + d;
            s += D + "+HP Kill Increases All Regeneration 75%" + d;
        }
        s += t + "Mystical Oracle" + d;
    } else if (n.indexOf("Warlock") === 0) {
        var x = Set.Warlock;
        if (x >= 2) {
            s += D + "+4 All Skills" + d;
        }
        if (x >= 3) {
            s += D + "+125 Attack" + d;
        }
        if (x >= 4) {
            s += D + "+35 All Resistances" + d;
        }
        if (x >= 5) {
            s += D + "+100 Intelligence" + d;
        }
        if (x >= 6) {
            s += D + "+30% All Magical Damage" + d;
            s += D + "Ringwraith:" + d;
            s += D + "Attack Enhances All Poison Damage 40%" + d;
        }
        s += t + "Profane Warlock" + d;
    } else if (n.indexOf("Phantasmist") === 0) {
        var x = Set.Phantasmist;
        if (x >= 2) {
            s += D + "-45% Silence Duration" + d;
        }
        if (x >= 3) {
            s += D + "+32 Maximum Magic Reduction" + d;
        }
        if (x >= 4) {
            s += D + "Absorb 25% of Arcane Damage" + d;
        }
        if (x >= 5) {
            s += D + "Casting Haste +50" + d;
        }
        if (x >= 6) {
            s += D + "+60 All Attributes" + d;
            s += D + "Apparition:" + d;
            s += D + "Physical Damage Reduced 25%" + d;
        }
        s += t + "Candescent Phantasmist" + d;
    } else if (n.indexOf("Arch Mage") === 0) {
        var x = Set.ArchMage;
        if (x >= 2) {
            s += D + "Absorb 10% of Fire Damage" + d;
        }
        if (x >= 3) {
            s += D + "+20 Conjuration" + d;
        }
        if (x >= 4) {
            s += D + "+20 Mana Per Tick" + d;
        }
        if (x >= 5) {
            s += D + "+45 All Resistances" + d;
        }
        if (x >= 6) {
            s += D + "+15% Maximum Mana and Health" + d;
            s += D + "Conviction Aura:" + d;
            s += D + "Lowers Mobs' Resists" + d;
        }
        s += t + "Recondite Arch Mage" + d;
    } else if (n.indexOf("Sorcerer") === 0) {
        var x = Set.Sorcerer;
        if (x >= 2) {
            s += D + "Absorb 10% of Cold Damage" + d;
        }
        if (x >= 3) {
            s += D + "+20 Evocation" + d;
        }
        if (x >= 4) {
            s += D + "+35 Critical Chance" + d;
        }
        if (x >= 5) {
            s += D + "+20% All Damage" + d;
        }
        if (x >= 6) {
            s += D + "Casting Haste +60" + d;
            s += D + "Offhand Mastery:" + d;
            s += D + "20% Shield Block" + d;
        }
        s += t + "Cosmic Sorcerer" + d;
    }
    return s;
}

function itemType(type, Slot){
	var foo='';
	if(type==="eq"){ foo=P['eq'][Slot]; }
	if(type==="item"){ foo=P['item'][Slot]; }
	if(type==="bank"){ foo=P['bank'][Slot]; }
	if(foo.itemSlot==="neck"){
		return "Necklace";
	}else if(foo.itemSlot==="ring"){
		return "Ring";
	}else if(foo.itemSlot==="helmet"){
		return "Helmet";
	}else if(foo.itemSlot==="shoulders"){
		return "Shoulders";
	}else if(foo.itemSlot==="back"){
		return "Back";
	}else if(foo.itemSlot==="chest"){
		return "Chest";
	}else if(foo.itemSlot==="bracers"){
		return "Bracers";
	}else if(foo.itemSlot==="gloves"){
		return "Gloves";
	}else if(foo.itemSlot==="belt"){
		return "Belt";
	}else if(foo.itemSlot==="legs"){
		return "Legs";
	}else if(foo.itemSlot==="boots"){
		return "Boots";
	}else if(foo.itemSlot==="weapons"){
		return "Weapon";
	}else if(foo.itemSlot==="shield"){
		if(foo.type==="shield"){
			return "Shield";
		}else{
			return "Spellcaster Off-Hand";
		}
	}else if(foo.itemSlot==="range"){
		if(foo.type==="range"){
			return "Bow";
		}else{
			return "Trinket";
		}
	}
}
function setList(item) {
    var s = '';
    var S = '';
    function str(setName, itemName, Slot1, Slot2) {
        var item = setName + itemName;
        if (Slot2 === undefined) {
            if (P.eq[Slot1].name === item) {
                return "<div>" + green(item) + "</div>";
            } else {
                return "<div>" + red(item) + "</div>";
            }
        } else {
            if (P.eq[Slot1].name === item ||
                P.eq[Slot2].name === item) {
                return "<div>" + green(item) + "</div>";
            } else {
                return "<div>" + red(item) + "</div>";
            }
        }
    }
    var n = item.name;
    if (n.indexOf("Miner") === 0) {
        S = "Miner's ";
        s += str(S, "Memento", 1);
        s += str(S, "Shard", 2, 3);
        s += str(S, "Glimmer", 2, 3);
    } else if (n.indexOf("Minotaur") === 0) {
        S = "Minotaur's ";
        s += str(S, "Gore", 12, 13);
        s += str(S, "Horns", 0);
        s += str(S, "Hooves", 11);
        s += str(S, "Sprawl", 4);
    } else if (n.indexOf("Golem") === 0) {
        S = "Golem's ";
        s += str(S, "Crag", 12, 13);
        s += str(S, "Ore", 6);
        s += str(S, "Shelf", 4);
        s += str(S, "Crust", 10);
    } else if (n.indexOf("Martyr") === 0) {
        S = "Martyr's ";
        s += str(S, "Manifesto", 1);
        s += str(S, "Shiv", 12, 13);
        s += str(S, "Agony", 7);
        s += str(S, "Ideal", 9);
    } else if (n.indexOf("Bishop") === 0) {
        S = "Bishop's ";
        s += str(S, "Justice", 12);
        s += str(S, "Purity", 9);
        s += str(S, "Merit", 10);
        s += str(S, "Faith", 2, 3);
    } else if (n.indexOf("Samurai") === 0) {
        S = "Samurai's ";
        s += str(S, "Devotion", 0);
        s += str(S, "Duty", 6);
        s += str(S, "Ardor", 5);
        s += str(S, "Fidelity", 2, 3);
    } else if (n.indexOf("Emissary") === 0) {
        S = "Emissary's ";
        s += str(S, "Craft", 14);
        s += str(S, "Finesse", 11);
        s += str(S, "Poise", 10);
        s += str(S, "Dispute", 7);
    } else if (n.indexOf("Sage") === 0) {
        S = "Sage's ";
        s += str(S, "Acumen", 8);
        s += str(S, "Vision", 0);
        s += str(S, "Wit", 12, 13);
        s += str(S, "Clamp", 9);
    } else if (n.indexOf("Vagabond") === 0) {
        S = "Vagabond's ";
        s += str(S, "Seal", 2, 3);
        s += str(S, "Cinch", 9);
        s += str(S, "Survey", 8);
        s += str(S, "Voyage", 11);
    } else if (n.indexOf("Vagrant") === 0) {
        S = "Vagrant's ";
        s += str(S, "Timber", 4);
        s += str(S, "Copse", 5);
        s += str(S, "Slab", 13);
        s += str(S, "Branch", 12, 13);
    } else if (n.indexOf("Chancellor") === 0) {
        S = "Chancellor's ";
        s += str(S, "Ceremony", 6);
        s += str(S, "Remorse", 1);
        s += str(S, "Qualm", 10);
        s += str(S, "Bias", 13);
    } else if (n.indexOf("Magnate") === 0) {
        S = "Magnate's ";
        s += str(S, "Lamp", 14);
        s += str(S, "Curio", 2, 3);
        s += str(S, "Token", 1);
        s += str(S, "Sapphire", 13);
    } else if (n.indexOf("Orator") === 0) {
        S = "Orator's ";
        s += str(S, "Desire", 9);
        s += str(S, "Whisper", 6);
        s += str(S, "Shout", 0);
        s += str(S, "Entreat", 7);
    } else if (n.indexOf("Wyvern") === 0) {
        S = "Wyvern's ";
        s += str(S, "Scale", 1);
        s += str(S, "Wing", 5);
        s += str(S, "Tail", 10);
        s += str(S, "Eye", 13);
    } else if (n.indexOf("Guardian") === 0) {
        S = "Guardian's ";
        s += str(S, "Fortress", 6);
        s += str(S, "Parapet", 7);
        s += str(S, "Bastion", 4);
        s += str(S, "Wall", 13);
        s += str(S, "Moat", 9);
        s += str(S, "Merlon", 0);
    } else if (n.indexOf("Duke") === 0) {
        S = "Duke's ";
        s += str(S, "Laurel", 1);
        s += str(S, "Adoration", 0);
        s += str(S, "Ascension", 5);
        s += str(S, "Amity", 8);
        s += str(S, "Proclamation", 4);
        s += str(S, "Rule", 10);
    } else if (n.indexOf("Augur") === 0) {
        S = "Augur's ";
        s += str(S, "Skull", 0);
        s += str(S, "Harvester", 12);
        s += str(S, "Pustule", 2, 3);
        s += str(S, "Sludge", 11);
        s += str(S, "Enmity", 14);
        s += str(S, "Rancor", 10);
    } else if (n.indexOf("Venova") === 0) {
        S = "Venova's ";
        s += str(S, "Halo", 0);
        s += str(S, "Martel", 12);
        s += str(S, "Wings", 5);
        s += str(S, "Eternity", 2, 3);
        s += str(S, "Ascent", 14);
        s += str(S, "Silks", 6);
    } else if (n.indexOf("Baron") === 0) {
        S = "Baron's ";
        s += str(S, "Rhythm", 11);
        s += str(S, "Coda", 7);
        s += str(S, "Cadenza", 1);
        s += str(S, "Tenor", 10);
        s += str(S, "Sonata", 8);
        s += str(S, "Glissando", 12, 13);
    } else if (n.indexOf("Daimyo") === 0) {
        S = "Daimyo's ";
        s += str(S, "Enso", 0);
        s += str(S, "Honne", 7);
        s += str(S, "Giri", 12, 13);
        s += str(S, "Wabi", 5);
        s += str(S, "Miyabi", 2, 3);
        s += str(S, "Yugen", 14);
    } else if (n.indexOf("Bloodletter") === 0) {
        S = "Bloodletter's ";
        s += str(S, "Lancet", 12, 13);
        s += str(S, "Clot", 2, 3);
        s += str(S, "Vial", 1);
        s += str(S, "Marrow", 9);
        s += str(S, "Spleen", 6);
        s += str(S, "Serum", 7);
    } else if (n.indexOf("Mendicant") === 0) {
        S = "Mendicant's ";
        s += str(S, "Effigy", 13);
        s += str(S, "Clover", 2, 3);
        s += str(S, "Horseshoe", 11);
        s += str(S, "Albatross", 4);
        s += str(S, "Agimat", 1);
        s += str(S, "Sarimanok", 14);
    } else if (n.indexOf("Friar") === 0) {
        S = "Friar's ";
        s += str(S, "Penance", 10);
        s += str(S, "Candor", 7);
        s += str(S, "Gift", 9);
        s += str(S, "Sacrifice", 6);
        s += str(S, "Epiphany", 8);
        s += str(S, "Grace", 11);
    } else if (n.indexOf("Willow") === 0) {
        S = "Willow's ";
        s += str(S, "Gust", 10);
        s += str(S, "Calamity", 12, 13);
        s += str(S, "Seed", 2, 3);
        s += str(S, "Mildew", 11);
        s += str(S, "Frost", 4);
        s += str(S, "Flare", 0);
    } else if (n.indexOf("Wraith") === 0) {
        S = "Wraith's ";
        s += str(S, "Lust", 9);
        s += str(S, "Envy", 14);
        s += str(S, "Lesion", 2, 3);
        s += str(S, "Pall", 5);
        s += str(S, "Flesh", 8);
        s += str(S, "Husk", 6);
    } else if (n.indexOf("Satyr") === 0) {
        S = "Satyr's ";
        s += str(S, "Chalice", 13);
        s += str(S, "Artifice", 12, 13);
        s += str(S, "Turban", 0);
        s += str(S, "Satin", 8);
        s += str(S, "Opulence", 1);
        s += str(S, "Delusion", 6);
    } else if (n.indexOf("Summoner") === 0) {
        S = "Summoner's ";
        s += str(S, "Ember", 14);
        s += str(S, "Residue", 4);
        s += str(S, "Cinder", 7);
        s += str(S, "Furnace", 6);
        s += str(S, "Conduit", 12);
        s += str(S, "Gyre", 2, 3);
    } else if (n.indexOf("Malefactor") === 0) {
        S = "Malefactor's ";
        s += str(S, "Ballast", 8);
        s += str(S, "Fuse", 9);
        s += str(S, "Coil", 12, 13);
        s += str(S, "Resistor", 11);
        s += str(S, "Yttrium", 13);
        s += str(S, "Terminal", 0);
    } else if (n.indexOf("Warlord") === 0) {
        S = "Warlord's ";
        s += str(S, "Scowl", 0);
        s += str(S, "Disdain", 4);
        s += str(S, "Blitzkrieg", 6);
        s += str(S, "Defiance", 7);
        s += str(S, "Derision", 8);
        s += str(S, "Ferocity", 10);
    } else if (n.indexOf("Assassin") === 0) {
        S = "Assassin's ";
        s += str(S, "Guile", 1);
        s += str(S, "Helix", 2, 3);
        s += str(S, "Slander", 5);
        s += str(S, "Deception", 6);
        s += str(S, "Hoax", 8);
        s += str(S, "Subversion", 9);
    } else if (n.indexOf("Grandmaster") === 0) {
        S = "Grandmaster's ";
        s += str(S, "Symmetry", 0);
        s += str(S, "Peace", 5);
        s += str(S, "Affinity", 9);
        s += str(S, "Consonance", 10);
        s += str(S, "Balance", 11);
        s += str(S, "Comity", 14);
    } else if (n.indexOf("Crusader") === 0) {
        S = "Crusader's ";
        s += str(S, "Cathexis", 1);
        s += str(S, "Allegiance", 2, 3);
        s += str(S, "Fervor", 4);
        s += str(S, "Fealty", 7);
        s += str(S, "Vehemence", 11);
        s += str(S, "Aegis", 13);
    } else if (n.indexOf("Grave Lord") === 0) {
        S = "Grave Lord's ";
        s += str(S, "Deceit", 0);
        s += str(S, "Perfidy", 2, 3);
        s += str(S, "Treachery", 5);
        s += str(S, "Cozen", 6);
        s += str(S, "Chicane", 10);
        s += str(S, "Crescent", 12);
    } else if (n.indexOf("Warder") === 0) {
        S = "Warder's ";
        s += str(S, "Zephyr", 1);
        s += str(S, "Reclaim", 7);
        s += str(S, "Preserve", 11);
        s += str(S, "Hailrend", 12, 13);
        s += str(S, "Magmahew", 12, 13);
        s += str(S, "Tempest", 14);
    } else if (n.indexOf("Virtuoso") === 0) {
        S = "Virtuoso's ";
        s += str(S, "Orotund", 4);
        s += str(S, "Bombast", 6);
        s += str(S, "Conceit", 8);
        s += str(S, "Plangent", 9);
        s += str(S, "Resonance", 13);
        s += str(S, "Fanfare", 14);
    } else if (n.indexOf("Hierophant") === 0) {
        S = "Hierophant's ";
        s += str(S, "Holocaust", 2, 3);
        s += str(S, "Blizzard", 4);
        s += str(S, "Cyclone", 5);
        s += str(S, "Cataclysm", 10);
        s += str(S, "Cascade", 11);
        s += str(S, "Cloudburst", 13);
    } else if (n.indexOf("High Priest") === 0) {
        S = "High Priest's ";
        s += str(S, "Abstention", 0);
        s += str(S, "Mastery", 1);
        s += str(S, "Piety", 2, 3);
        s += str(S, "Reverence", 6);
        s += str(S, "Humility", 7);
        s += str(S, "Constraint", 9);
    } else if (n.indexOf("Oracle") === 0) {
        S = "Oracle's ";
        s += str(S, "Sibyl", 1);
        s += str(S, "Ailment", 4);
        s += str(S, "Contagion", 8);
        s += str(S, "Malady", 10);
        s += str(S, "Fetish", 13);
        s += str(S, "Presage", 14);
    } else if (n.indexOf("Warlock") === 0) {
        S = "Warlock's ";
        s += str(S, "Doom", 0);
        s += str(S, "Carnage", 2, 3);
        s += str(S, "Demise", 5);
        s += str(S, "Abomination", 6);
        s += str(S, "Nightmare", 11);
        s += str(S, "Nemesis", 12, 13);
    } else if (n.indexOf("Phantasmist") === 0) {
        S = "Phantasmist's ";
        s += str(S, "Acumen", 0);
        s += str(S, "Catharsis", 5);
        s += str(S, "Sagacity", 7);
        s += str(S, "Serendipity", 8);
        s += str(S, "Insight", 9);
        s += str(S, "Kismet", 13);
    } else if (n.indexOf("Arch Mage") === 0) {
        S = "Arch Mage's ";
        s += str(S, "Periapt", 2, 3);
        s += str(S, "Debacle", 4);
        s += str(S, "Squall", 7);
        s += str(S, "Calamity", 8);
        s += str(S, "Catastrophe", 12);
        s += str(S, "Mojo", 14);
    } else if (n.indexOf("Sorcerer") === 0) {
        S = "Sorcerer's ";
        s += str(S, "Zodiac", 1);
        s += str(S, "Pulsar", 2, 3);
        s += str(S, "Nebula", 6);
        s += str(S, "Equinox", 9);
        s += str(S, "Quasar", 10);
        s += str(S, "Pleiades", 13);
    }
    return s;
}

function dodgeChance(){
	if(my.dodge>0){
		var x = (3+(dodgeTotal()/25))*(1+(min70(agiTotal())/330));
		if(my.job==="Rogue"){
			if(my.talent9>=20){ 
				x+=8; 
			}
		}
		return x;
	}else{
		return 0;
	}
}
function parryChance(){
	if(my.parry>0){
		var foo = (3+dualWieldBonus+(parryTotal()/25))*(1+(min70(agiTotal())/330));
		if(my.job==="Ranger"){
			if(my.talent3>=20){
				foo+=12;
			}
		}
		return foo;
	}else{
		return 0;
	}
}
function riposteChance(){
	if(my.riposte>0){
		var foo = (3+dualWieldBonus+(riposteTotal()/25))*(1+(min70(agiTotal())/330));
		if(my.job==="Ranger"){
			if(my.talent3>=20){
				foo+=12;
			}
		}
		return foo;
	}else{
		return 0;
	}
}
function setShieldBlockChance(ttyPos) {
    var x = 0;
    if (P.eq[13].type === 'shield' || ttyPos !== undefined) {
        if (ttyPos !== undefined) {
            var z = ttyPos;
        } else {
            var z = P.eq[13].yPos;
        }
        x = .1;
        if (z === -64) {
            x = .12;
        }
        if (z === -128) {
            x = .14;
        }
        if (z === -192) {
            x = .16;
        }
        if (z === -256) {
            x = .18;
        }
        if (z === -320) {
            x = .20;
        }
        if (z === -384) {
            x = .22;
        }
        if (z === -448) {
            x = .24;
        }
    }
    if (Set.Sorcerer >= 6) {
        x = .2;
    }
    return x;
}

function setDualWieldBonus() {
    var x = 0;
    if (my.dualWield > 0) {
        var i = P.eq[12].type;
        if (i === "smashed" || i === "crushed") {
            x = 0;
        } else {
            x = 5;
        }
    }
    return x;
}

function dualWieldChance(){
	if(my.dualWield>0){
		var foo = 1+(dualWieldTotal()*.27);
		if(my.job==="Ranger"){
			if(my.talent11>=20){
				foo+=12;
			}
		}
		if(foo>100){
			foo = 100;
		}
		return foo;
	}else{
		return 0;
	}
}
function doubleAttackChance(){
	if(my.doubleAttack>0){
		var foo = 1+(doubleAttackTotal()*.16);
		if(my.job==="Ranger"){
			if(my.talent11>=20){
				foo+=12;
			}
		}
		if(foo>100){
			foo = 100;
		}
		return foo;
	}else{
		return 0;
	}
}

function hpTier() {
    var hpTier = 4.5;
    if (my.job === "Paladin" ||
        my.job === "Shadow Knight" ||
        my.job === "Ranger" ||
        my.job === "Bard" ||
        my.job === "Monk") {
        hpTier = 3.8;
    } else if (my.job === "Cleric" ||
        my.job === "Shaman" ||
        my.job === "Druid" ||
        my.job === "Rogue") {
        hpTier = 2.5;
    } else if (my.job === "Necromancer" ||
        my.job === "Enchanter" ||
        my.job === "Magician" ||
        my.job === "Wizard") {
        hpTier = 2;
    }
    return hpTier;
}

function mpTier() {
    var jobMpMod = 2;
    if (my.job === "Cleric" || my.job === "Shaman" || my.job === "Druid") {
        jobMpMod = 3.8;
    } else if (my.job === "Necromancer" || my.job === "Enchanter" || my.job === "Magician" || my.job === "Wizard") {
        jobMpMod = 4.5;
    }
    return jobMpMod;
}
// CTRL+H class matches like this
function mpClass() {
    var foo = "melee";
    if (my.job === "Necromancer" ||
        my.job === "Enchanter" ||
        my.job === "Magician" ||
        my.job === "Wizard" ||
        my.job === "Bard") {
        foo = "intCaster";
    } else if (my.job === "Shadow Knight") {
        foo = "intHybrid";
    } else if (my.job === "Druid" ||
        my.job === "Cleric" ||
        my.job === "Shaman") {
        foo = "wisCaster";
    } else if (my.job === "Ranger" ||
        my.job === "Paladin") {
        foo = "wisHybrid";
    }
    return foo;
}
// CTRL+H class matches like this
function jobType() {
    var foo = "melee";
    if (my.job === "Ranger" || my.job === "Shadow Knight" || my.job === "Paladin") {
        foo = "hybrid";
    }
    if (my.job === "Druid" || my.job === "Cleric" || my.job === "Shaman") {
        foo = "healer";
    }
    if (my.job === "Necromancer" || my.job === "Enchanter" || my.job === "Magician" || my.job === "Wizard") {
        foo = "caster";
    }
    return foo;
}

function talent1(){
	var a=my.talent1;
	if(a>0){
		if(my.talent2>=20){ a++; }
		if(my.talent3>=20){ a++; }
		if(my.talent4>=20){ a+=2; }
	}
	return a;
}
function talent2(){
	var a=my.talent2;
	if(a>0){
		if(my.talent1>=20){ a++; }
		if(my.talent3>=20){ a++; }
		if(my.talent4>=20){ a+=2; }
	}
	return a;
}
function talent3(){
	var a=my.talent3;
	if(a>0){
		if(my.talent1>=20){ a++; }
		if(my.talent2>=20){ a++; }
		if(my.talent4>=20){ a+=2; }
	}
	return a;
}
function talent4(){
	var a=my.talent4;
	if(a>0){
		if(my.talent1>=20){ a++; }
		if(my.talent2>=20){ a++; }
		if(my.talent3>=20){ a+=2; }
	}
	return a;
}
function talent5(){
	var a=my.talent5;
	if(a>0){
		if(my.talent6>=20){ a++; }
		if(my.talent7>=20){ a++; }
		if(my.talent8>=20){ a+=2; }
	}
	return a;
}
function talent6(){
	var a=my.talent6;
	if(a>0){
		if(my.talent5>=20){ a++; }
		if(my.talent7>=20){ a++; }
		if(my.talent8>=20){ a+=2; }
	}
	return a;
}
function talent7(){
	var a=my.talent7;
	if(a>0){
		if(my.talent5>=20){ a++; }
		if(my.talent6>=20){ a++; }
		if(my.talent8>=20){ a+=2; }
	}
	return a;
}
function talent8(){
	var a=my.talent8;
	if(a>0){
		if(my.talent5>=20){ a++; }
		if(my.talent6>=20){ a++; }
		if(my.talent7>=20){ a+=2; }
	}
	return a;
}
function talent9(){
	var a=my.talent9;
	if(a>0){
		if(my.talent10>=20){ a++; }
		if(my.talent11>=20){ a++; }
		if(my.talent12>=20){ a+=2; }
	}
	return a;
}
function talent10(){
	var a=my.talent10;
	if(a>0){
		if(my.talent9>=20){ a++; }
		if(my.talent11>=20){ a++; }
		if(my.talent12>=20){ a+=2; }
	}
	return a;
}
function talent11(){
	var a=my.talent11;
	if(a>0){
		if(my.talent9>=20){ a++; }
		if(my.talent10>=20){ a++; }
		if(my.talent12>=20){ a+=2; }
	}
	return a;
}
function talent12(){
	var a=my.talent12;
	if(a>0){
		if(my.talent9>=20){ a++; }
		if(my.talent10>=20){ a++; }
		if(my.talent11>=20){ a+=2; }
	}
	return a;
}