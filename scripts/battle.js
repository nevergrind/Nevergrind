//battle.js
function run(){
	if(my.hp<=0||paused===true){ return; }
	if(attackStatus===1){ 
		Chat("There's nothing to run away from!");
		return; 
	}
	if(attackStatus===0&&mobsFound()===false){
		escapedFromBattle();
		return;
	}
	if(castingSpell===0){
		Error("You cannot run while casting a spell!");
		return;
	}
	if(cityStatus===true||dev){
		escapedFromBattle();
		return;
	}
	if(mob[2].rare===3){
		Error(("You cannot run from "+mob[2].name+"!"));
		return;
	}
	if(my.race!=="Halfling"){
		if(bashStatus===0){
			Error(("You are stunned!"));
			return;
		}
		if(fearStatus===0){
			Error(("You are stunned!"));
			return;
		}
		if(rootStatus===0){ 
			Error(("You are rooted!")); 
			return; 
		}
	}
	if(btn.d.runId===true){return;}
	function finishRun(){
		if(mobsFound()===false){ return; }
		if(my.race!=="Halfling"){
			if(bashStatus===0){ Chat(("You cannot run while stunned!")); return;}
			if(fearStatus===0){ Chat(("You cannot run while feared!")); return;}
			if(rootStatus===0){ Chat(("You cannot run while rooted!")); return; }
		}
		if(escapeChance() > M.random()*200){
			Chat(("You manage to escape this time!"));
			if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
			escapedFromBattle();
			return;
		}else{
		// failure
			runBonus += 10;
			var Slot = selectHighestMob();
			Chat(mob[Slot].name+" blocks your path!");
		}
	}
	function skillReady(){
		runTimer2.kill();
		setD('runId', false);
		BGP('runId', "-100% -200%");
		return;
	}
	beginGlobalCooldown();
	var runCooldown = 6000;
	if(mob[0].engulfingDarknessTicks!==0||mob[1].engulfingDarknessTicks!==0||mob[2].engulfingDarknessTicks!==0||mob[3].engulfingDarknessTicks!==0){
		runCooldown=runCooldown*2;
	}
    setD('runId', true);
    BGP('runId', "-100% -300%");
	if(my.race!=="Halfling"){
		runTimer2.kill();
		runTimer2 = T.to('', runCooldown/1000, {repeat:-1, onRepeat:skillReady});
	}else{
		runTimer2.kill();
		runCooldown-=1;
		runTimer2 = T.to('', runCooldown/1000, {repeat:-1, onRepeat:skillReady});
	}
	timerTick(D.getElementById('runId'),runCooldown/1000,'runId');
	Chat("You attempt to run for your life.");
	runTimer = T.delayedCall(3, finishRun);
}
function selectHighestMob(){
	var max = 0;
	var Slot = 0;
	for(var i=0;i<=4;i++){
		if(mob[i].name&&mob[i].level>max){
			Slot = i;
			max = mob[i].level;
		}
	}
	return Slot;
}
function escapeChance(){
	var qux = selectHighestMob();
	if(mob[qux].level <= my.level){ var foo = M.round(35+((my.level-mob[qux].level)*2)); } //
	if(mob[qux].level > my.level){ var foo = M.round(35-((mob[qux].level-my.level)*5)); } //15-35% range
	if(mob[qux].level-5 >= my.level){ var foo = 15; } // minimum chance if mob > 5 levels
	if(foo > 75){ foo = 75; } // max run chance without buffs
	//agi helps run chance
	foo=(foo+(M.round(min70(agiTotal()))/8)); //23.125% @ 255
	if(foo>=100){ foo=100; }
	//some skills help run chance
	if(mob[qux].snareStatus===true||
	mob[qux].chillStatus===true||
	mob[qux].rootStatus>0||
	mob[qux].doomingDarknessTickCount>0||
	mob[qux].cascadingDarknessTickCount>0){ foo+=4; }
	if(sowStatus===true){ foo+=8; }
	if(accelerandoStatus===true){ foo+=10; }
	var levelAssist = M.round(25- (my.level/2) );
	foo += levelAssist;
	var zug = false;
	for(var i=0;i<=4;i++){
		if(mob[i].name&&mob[i].ensnaringAura==true){ zug = true; continue; }
	}
	if(zug==true){ foo=foo*.66; }
	//failed run attempts aids escape chance
	foo += runBonus;
	foo += g.runSpeedEquip;
	return foo;
}
function escapedFromBattle(){
    setD('addmonsterId', true);
    BGP('addmonsterId', "0 -300%");
	addMonsterTimer.kill();
	addMonsterTimer = T.delayedCall(3, resetAddMonster);
	timerTick(D.getElementById('addmonsterId'),3,'addmonsterId');
	//success
	resetBosses();
	NG.mobTraits.innerHTML="";
	castingSpell=1;
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
	ambushStatus = 1;
	petAttack.kill()
	myAttack.kill();
	myAttack2.kill();
	monsterConfuseCooldown.kill();
	Mname="";
	for(var i=0;i<=4;i++){
		mob[i].attackStatus=1;
	}
	runBonus = 0;
	//monks
	ancestralFlurryTimeout.kill();
	//rangers
	rapidShotDelay.kill();
	//bards
	if(bardSingStatus===true){ bardSinging(); }
	if( (my.job==="Bard"||my.job==="Enchanter")&&petName!==""){
		songOfTheSirensTicking.kill();
		mob[charmSlot].charmStatus = false;
		petName = "";
		$("#pethpbardiv").css('display','none');
	}
	//mob shit
	for (var i=0;i<=4;i++){
		mob[i].doomingDarknessInterval.kill();
		mob[i].heatBloodInterval.kill();
		mob[i].slowTimer.kill();
		mob[i].consonantChain = 0;
		mob[i].euphonicHymn = 0;
		mob[i].martyr=false;
		mob[i].togorsInsectsTimeout.kill();
		mob[i].slowStatus=false;
		mob[i].regenStatus=true;
		mob[i].attack.kill();
		mob[i].spellActive.kill();
		mob[i].thornsTimer.kill();
		mob[i].thornsActive=1;
		mob[i].lavaShieldActive=1;
		mob[i].runeHp=0;
		mob[i].rare=1;
		mob[i].castingStatus=false;
		mob[i].widowStrikeInterval.kill();
		mob[i].widowStrikeTickCount=0;
		mob[i].hemorrhageInterval.kill();
		mob[i].furiousScorn=0;
		mob[i].faerieFlameTickInterval.kill();
		mob[i].snareStatus=false;
		mob[i].dazeTimer.kill();
		mob[i].dazeStatus=false;
		$(".freezeIcon"+i).remove();
		mob[i].shatterStatus=false;
		mob[i].frozenStatus=false;
		mob[i].name="";
		mob[i].ID=0;
		$("#fearIcon"+i).remove();
		$("#iceIcon"+i).remove();
		$("#rootIcon"+i+",#rootBuffIcon"+i).remove();
		stopMob(i);
		MOBNAME[i].style.color='#00fa9a';
		MOBNAME[i].innerHTML='';
		mob[i].riftStatus=false;
		$("#orbIcon"+i).remove();
		hideMob(i);
	}
	//General bullshit
	tlSpellbar.kill();
	NG.spellbardiv.style.display="none";
	castingSpell = 1; 
	castingGlobal = 1;
	$("#mobBar").css("visibility","hidden");
	attackStatus=1;
	my.escapes+=1;
	clearMobIcons();
	reportBattleStats();
	save.my(); 
	if(g.showPortal){
		makePortal();
	}
}
function hideMob(Slot, death){
	T.killTweensOf(MOB[Slot]);
	T.killChildTweensOf(MOB[Slot]);
	if(Slot===undefined){ 
		Slot = TGT; 
	}
	mob[Slot].attack.kill();
	if(death===true){
		tint(2, 'lightning', .5);
	}
	T.to(MOB[Slot], .5, {
		opacity:0,
		ease:ez.cout,
		onComplete:function(){
			stage[Slot].removeAllChildren();
			MOB[Slot].style.display='none';
		}
	});
}
function monsterKilledMe(){
	if(my.job==="Cleric"&&my.talent2>=20&&miracleStatus===false){
		resoluteMiracle();
		return;
	}
	runTimer.kill();
	stunCooldown.kill();
	myHpTick.kill();
	myMpTick.kill();
	doubletimer2.kill();
	doubletimer1.kill();
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
	//racial resets
	humanRacial.kill();
	secondWindStatus=false;
	eruditeRacial.kill();
	barbarianRacial.kill();
	ancestralRampageStatus=false;
	woodElfRacial.kill();
	woodElfRacial.kill();
	darkElfRacial.kill(); sanguineTormentStatus=false;
	gnomeRacial.kill(); shortCircuitStatus=false;
	dwarfRacial.kill(); graniteVisageStatus=false;
	myCounter=false;
	//reset rogue things
	hyperStrikeValue=0;
	hyperStrikeTimeout.kill();
	hyperStrikeCount=0;
	illusiveMistStatus=1;
	//reset warrior things
	triageTickCount=0; triageInterval.kill();
	frenziedRampageHasteStatus=false;
	if(my.job==="Warrior"){
		bulwarkTimeout.kill();
		bulwarkExpire();
	}
	//monks
	ancestralFlurryTimeout.kill();
	eagleStrikeStatus=false;
	cheetahStrikeTimeout.kill();
	cheetahStrikeStatus=false;
	//ranger things
	rapidShotDelay.kill();
	thistlecoatTimeout.kill();
	thistlecoatStatus=false;
	feetLikeCatTimeout.kill();
	feetLikeCatStatus=false;
	spiritOfTheWolfTimeout.kill();
	feetLikeCatStatus=false;
	//paladin stuff
	yaulpTimeout.kill();
	yaulpStatus=false;
	valorTimeout.kill();
	valorStatus=false;
	spiritArmorTimeout.kill();
	spiritArmorStatus=false;
	divineProvidenceStatus=false;
	symbolOfRyltanTimeout.kill();
	symbolOfRyltanStatus=false;
	//sk stuff
	if(siphonStrengthStatus===true){ siphonStrengthTimeout.kill(); siphonStrengthStatus=false;  }
	if(shadowVortexStatus===true){ shadowVortexTimeout.kill(); shadowVortexStatus=false; }
	if(resistColdStatus===true){ resistColdTimeout.kill(); resistColdStatus=false; }
	//pet shit
	if(g.petAlive===true){ slainPet(); petHp = 0;}
	//bard stuff - clear song start no matter what - clear repeat song ticks if active
	chantOfBattleTimeout.kill();
	chantOfBattleTicking.kill();
	chordsOfDissonanceTimeout.kill();
	chordsOfDissonanceTicking.kill();
	accelerandoTimeout.kill();
	accelerandoTicking.kill();
	hymnOfRestorationTimeout.kill();
	hymnOfRestorationTicking.kill();
	anthemDeArmsTimeout.kill();
	anthemDeArmsTicking.kill();
	boastfulBellowTimeout.kill();
	elementalRhythmsTimeout.kill();
	elementalRhythmsTicking.kill();
	consonantChainTimeout.kill();
	songOfTheSirensTimeout.kill();
	dissensionTimeout.kill();
	chorusOfClarityTimeout.kill();
	chorusOfClarityTicking.kill();
	euphonicHymnTimeout.kill();
	shieldOfSongsTimeout.kill();
	desperateDirgeTimeout.kill();
	desperateDirgeTicking.kill();
	songOfTheSirensTicking.kill();
	//bard repeats
	chantOfBattleTicking.kill();
	chantOfBattleStatus=false;
	chantOfBattleArmor=0;
	chantOfBattleStr=0;
	chantOfBattleDex=0;
	chordsOfDissonanceStatus=false;
	chordsOfDissonanceTimeout.kill();
	accelerandoTicking.kill();
	accelerandoStatus=false;
	hymnOfRestorationTicking.kill();
	hymnOfRestorationStatus=false;
	anthemDeArmsTicking.kill();
	anthemDeArmsStatus=false;
	anthemDeArmsStr=0;
	anthemDeArmsHaste=0;
	elementalRhythmsTicking.kill();
	elementalRhythmsStatus=false;
	elementalRhythmsMagic = 0;
	elementalRhythmsLightning = 0;
	elementalRhythmsCold = 0;
	elementalRhythmsFire = 0;
	chorusOfClarityStatus = false;
	desperateDirgeStatus=false;
	desperateDirgeTimeout.kill();
	//druid shit
	skinLikeNatureStatus=false;
	//cleric shit
	resolutionTimeout.kill();
	resolutionStatus=false;
	armorOfFaithTimeout.kill();
	armorOfFaithStatus=false;
	divineSanctuaryTimeout.kill();
	divineSanctuaryStatus=false;
	markOfJudgementStatus=false;
	markOfJudgementTiming.kill();
	symbolOfNaltronTimeout.kill();
	symbolOfNaltronStatus=false;
	//shaman shit
	callOfTheAncientsStatus=false;
	reclaimBloodInterval.kill();
	talismanOfAltunaTimeout.kill();
	talismanOfAltunaStatus=false;
	bloodlustStatus=false;
	//necro shit
	archShieldingTimeout.kill();
	archShieldingStatus=false;
	//enc shit
	alacrityStatus=false;
	discordantBarrierTimeout.kill();
	discordantBarrierStatus=false;
	adorningGraceTimeout.kill();
	adorningGraceStatus=false;
	enchantWeaponStatus=false;
	//mag shit
	phantomPlateTimeout.kill();
	phantomPlateStatus=false;
	spiritArmorTimeout.kill();
	elementalArmorStatus=false;
	manaShieldTimeout.kill();
	manaShieldStatus=false;
	//wiz shit
	viziersShieldingStatus=false;
	mirrorImageStatus = 0;
	mob[charmSlot].charmStatus = false;
	petName = "";
	$("#pethpbardiv").css('display','none');
	//mob resets
	stunCooldown.kill();
	bashStatus=1;
	monsterMindNumbCooldown.kill();
	mindNumbActive = 1;
	monsterWeakenCooldown.kill();
	weakenActive = 1;
	monsterYawnCooldown.kill();
	yawnActive=1;
	monsterRootCooldown.kill();
	rootStatus=1;
    setD('runId', false);
    BGP('runId', "-100% -200%");
	monsterFearCooldown.kill();
	fearStatus=1;
	T.set(D.getElementById('spellblind'), {opacity:0, background:'transparent'});
	monsterBlindCooldown.kill();
	g.blindStatus=1;
	monsterConfuseCooldownComplete.kill();
	confuseStatus=false;
	monsterConfuseCooldown.kill();
	blizzardStatus=1;
	silenceStatus=false;
	//reset dot ticks
	for(var i=0;i<=4;i++){
		mob[i].widowStrikeInterval.kill();
		mob[i].widowStrikeTickCount=0;
		mob[i].lacerate=0;
		mob[i].hemorrhageInterval.kill();
		mob[i].furiousScorn=0;
		mob[i].faerieFlameTickInterval.kill();
		mob[i].snareStatus=false;
		mob[i].blindStatus = false;
		mob[i].dazeTimer.kill();
		mob[i].dazeStatus=false;
		mob[i].doomingDarknessInterval.kill();
		mob[i].heatBloodInterval.kill();
		mob[i].slowTimer.kill();
		mob[i].consonantChain = 0;
		mob[i].euphonicHymn = 0;
		mob[i].martyr=false;
		mob[i].togorsInsectsTimeout.kill();
		mob[i].slowStatus=false;
		mob[i].regenStatus=true;
		mob[i].attack.kill();
		mob[i].thornsTimer.kill();
		mob[i].spellActive.kill();
		mob[i].dotActive.kill();
		mob[i].castingStatus=false;
		mob[i].thornsActive=1;
		mob[i].lavaShieldActive=1;
		mob[i].runeHp=0;
		mob[i].envenomTicks = 0;
		mob[i].engulfingDarknessTicks = 0;
		mob[i].staticFieldTicks = 0;
		mob[i].blizzardTicks = 0;
		mob[i].conflagrationTicks = 0;
		mob[i].rare=1;
		mob[i].shatterStatus = false;
		mob[i].silenced = false;
		mob[i].frozenStatus = false;
		mob[i].name="";
		mob[i].ID=0;
		$("#fearIcon"+i).remove();
		$(".freezeIcon"+i).remove();
		$("#iceIcon"+i).remove();
		$("#orbIcon"+i).remove();
		$("#boastfulIcon"+i).remove();
		mob[i].riftStatus=false;
	}
	$("#hurricaneImage,#hurricaneImage2").stop(true,true).remove();
	chilledTimer.kill();
	chillStatus=false;
	//other shit
	attackStatus=1;
	$(".buffIcons").remove();
	clearBuffTimers();
	clearMobIcons();
	//racials
	humanRacial.kill();
	secondWindStatus=false;
	ancestralRampageStatus=false;
	eruditeRacial.kill();
	woodElfRacial.kill();
	woodElfRacial.kill();
	alacrityTimeout.kill();
	sanguineTormentStatus=false;
	graniteVisageStatus=false;
	shortCircuitStatus=false;
	//reset all buffs to be sure - we can probably use this method instead
	strBuff=0;
	staBuff=0;
	intelBuff=0;
	wisBuff=0;
	dexBuff=0;
	agiBuff=0;
	chaBuff=0;
	maxHpBuff=0;
	maxMpBuff=0;
	attackPowerBuff=0;
	armorBuff=0;
	svpoisonBuff=0;
	svmagicBuff=0;
	svlightningBuff=0;
	svcoldBuff=0;
	svfireBuff=0;
	cooldownDurationBuff = 0;
	spellHasteBuff=0;
	hasteBuff=0;
	phyMitBuff = 0;
	magMitBuff = 0;
	highestElement = setHighestElement();
	setMinimumWeaponSpeed();
	if(enteredWorld===true){
		CStat();
		NG.spellbardiv.style.display="none";
		tlSpellbar.kill();
		castingSpell = 1;
		castingGlobal = 1;
		for(var i=0;i<=4;i++){
			MOBNAME[i].style.color='#00FA9A';
			MOBNAME[i].innerHTML='';
		}
		if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
		setCurtainColor("#b22222");
		T.to(spellCurtain, .1, {
			alpha:.7
		});
		var string =
			'<span class="deathCapital">Y</span>OU <span class="deathCapital">H</span>AVE <span class="deathCapital">D</span>IED'+
			'<br><div id="battleReportOK"><span class="deathCapital">R</span>ESURRECT</div> ';
		if(my.hardcoreMode==='true'){
			string =
			'<span class="deathCapital">Y</span>OUR <span class="deathCapital">D</span>EEDS <span class="deathCapital">W</span>ILL'+
			'<br>'+
			'<span class="deathCapital">B</span>E <span class="deathCapital">R</span>EMEMBERED';
			my.deaths+=1;
			T.pauseAll();
			window.onbeforeunload = null;
		}else{
			//gold penalty
			var z=0;
			var lvl = my.level;
			if(lvl>=1&&lvl<10){ z=M.ceil(my.gold*.05); }
			if(lvl>=10&&lvl<20){ z=M.ceil(my.gold*.1); }
			if(lvl>=20&&lvl<30){ z=M.ceil(my.gold*.15); }
			if(lvl>=30){ z=M.ceil(my.gold*.2); }
			if(z>((g.difficulty*lvl)*100)){ z=((g.difficulty*lvl)*100); }
			//exp penalty
			var lastLevel = nextLevel(lvl-1);
			var expSpan = nextLevel() - lastLevel;
			var expPenalty = 0;
			if(lvl>=6){
				expPenalty = ~~(expSpan*(.2*(lvl/98)));
			}	
			var expThisLevel = my.exp - lastLevel;
			if(expPenalty > expThisLevel){
				expPenalty = expThisLevel;
			}
			g.lostExp = expPenalty;
			g.lostGold = z;
			g.oldExp = my.exp;
			if(expPenalty>0&&lvl>=6){
				$.ajax({
					url: '/classic/php/game1.php',
					data:{
						run: "updateExpGold", // death
						lastName: my.lastName,
						title: my.title,
						level: my.level,
						job: my.job,
						race: my.race,
						exp: expPenalty*-1,
						gold: z*-1,
						name: my.name
					}
				}).done(function(data){
					my.exp -= expPenalty;
					my.gold -= z;
				}).fail(function(data){
					failToCommunicate();
				});
			}
			my.deaths+=1;
			saveGame();
		}
		$("#deathScreen").html(string).css("display","block");
		var zit = "death_mb";
		if(my.gender==="Female"){
			zit = "death_fl";
		}
		playAudio(zit);
		if($("#worldMap").css("display")==="block"){
			travelToggle();
		}
		T.delayedCall(.1, function(){
			g.drawMyHp();
		});
		save.my();
		if(my.hardcoreMode==='true'){
			g.hardcoreDeathStatus = true;
		}
	}
	setEquipValues();
}
function levelUpPierce(){
	var x = my.piercing;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Rogue"){
		if(x>=400){
			return false;
		}
	}else if(z==="Necromancer"||
	z==="Wizard"||
	z==="Magician"||
	z==="Enchanter"){
		if(x>=150){
			return false;
		}
	}else{
		if(x>=360){
			return false;
		}
	}
	my.piercing+=1;
	CStat();
	Chat(("Your piercing has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUp1hb(){
	var x = my.oneHandBlunt;
	var z = my.job;
	if(x >= my.level*5){ return false; }
	if(z==="Necromancer"||z==="Wizard"||z==="Magician"||z==="Enchanter"){
		if(x>=150){
			return false;
		}
	}else if(z==="Monk"||z==="Rogue"){
		if(x>=400){
			return false;
		}
	}else if(z==="Druid"||z==="Cleric"){
		if(x>=300){
			return false;
		}
	}else{
		if(x>=360){ 
			return false;
		}
	}
	my.oneHandBlunt+=1;
	CStat();
	Chat(("Your one-hand blunt has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUp2hb(){
	var x = my.twoHandBlunt;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Necromancer"||z==="Wizard"||z==="Magician"||z==="Enchanter"){
		if(x>=150){
			return false;
		}
	}else if(z==="Monk"){
		if(x>=400){
			return false;
		}
	}else if(z==="Druid"||z==="Cleric"){
		if(x>=300){
			return false;
		}
	}else{
		if(x>=360){
			return false;
		}
	}
	my.twoHandBlunt+=1;
	CStat();
	Chat("Your two-hand blunt has increased! ("+(x+1)+")",4);
	return true;
}
function levelUp1hs(){
	var x = my.oneHandSlash;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Druid"){
		if(x>=300){
			return false;
		}
	}else if(z==="Rogue"){
		if(x>=400){
			return false;
		}
	}else{
		if(x>=360){
			return false;
		}
	}
	my.oneHandSlash+=1;
	CStat();
	Chat(("Your one-hand slashing has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUp2hs(){
	var x = my.twoHandSlash;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(x>=360){
		return false;
	}
	my.twoHandSlash+=1;
	CStat();
	Chat(("Your two-hand slashing has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUpH2h(){
	var x = my.handtohand;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z!=="Monk"){
		if(x>=100){
			return false;
		}
	}else{
		if(x>=400){
			return false;
		}
	}
	my.handtohand+=1;
	updatePunchDamage();
	CStat();
	Chat(("Your hand to hand has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUpDefense(){
	var x = my.defense;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Warrior"){
		if(x>=240){
			return false;
		}
	}else if(z==="Monk"){
		if(x>=230){
			return false;
		}
	}else if(z==="Paladin"||z==="Shadow Knight"){
		if(x>=210){
			return false;
		}
	}else if(z==="Ranger"||z==="Rogue"||z==="Cleric"||z==="Druid"||z==="Shaman"||z==="Bard"){
		if(x>=200){
			return false;
		}
	}else{
		if(x>=150){
			return false;
		}
	}
	my.defense+=1;
	CStat();
	Chat(("Your defense has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUpOffense(){
	var x = my.offense;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Monk"||z==="Rogue"){
		if(x>=240){
			return false;
		}
	}else if(z==="Warrior"||z==="Ranger"){
		if(x>=220){
			return false;
		}
	}else if(z==="Paladin"||z==="Shadow Knight"||z==="Bard"||z==="Cleric"||z==="Shaman"||z==="Druid"){
		if(x>=200){
			return false;
		}
	}else{
		if(x>=150){
			return false;
		}
	}
	my.offense+=1;
	CStat();
	Chat(("Your offense has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUpDualWield(){
	var x = my.dualWield;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Monk"){
		if(x>=250){
			return false;
		}
	}else{
		if(x>=210){
			return false;
		}
	}
	my.dualWield+=1;
	CStat();
	Chat(("Your dual wield has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUpDoubleAttack(){
	var x = my.doubleAttack;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Warrior"||z==="Ranger"){
		if(x>=220){
			return false;
		}
	}else if(z==="Monk"||z==="Rogue"){
		if(x>=240){
			return false;
		}
	}else{
		if(x>=200){
			return false;
		}
	}
	my.doubleAttack+=1;
	CStat();
	Chat(("Your double attack has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUpDodge(){
	var x = my.dodge;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Monk"){
		if(x>=200){
			return false;
		}
	}else if(z==="Rogue"){
		if(x>=175){
			return false;
		}
	}else if(z==="Ranger"||z==="Warrior"){
		if(x>=140){
			return false;
		}
	}else if(z==="Paladin"||z==="Shadow Knight"||z==="Bard"){
		if(x>=125){
			return false;
		}
	}else{
		if(x===75){
			return false;
		}
	}
	my.dodge+=1;
	CStat();
	Chat(("Your dodge has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUpParry(){
	var x = my.parry;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Ranger"){
		if(x>=185){
			return false;
		}
	}else if(z==="Paladin"||z==="Shadow Knight"){
		if(x>=175){
			return false;
		}
	}else if(z==="Bard"){
		if(x>=75){
			return false;
		}
	}else{
		if(x>=200){
			return false;
		}
	}
	my.parry+=1;
	CStat();
	if(z!=="Monk"){ 
		Chat(("Your parry has increased! ("+(x+1)+")"),4); 
	}else{
		Chat(("Your block has increased! ("+(x+1)+")"),4); 
	}
	return true;
}
function levelUpRiposte(){
	var x = my.riposte;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Paladin"||z==="Shadow Knight"){
		if(x>=175){
			return false;
		}
	}else if(z==="Ranger"){
		if(x>=150){
			return false;
		}
	}else if(z==="Bard"){
		if(x>=75){
			return false;
		}
	}else{
		if(x>=200){
			return false;
		}
	}
	my.riposte+=1;
	CStat();
	Chat(("Your riposte has increased! ("+(x+1)+")"),4);
	return true;
}
function levelUpAlteration(){
	var x = my.alteration;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Cleric"||z==="Shaman"||z==="Enchanter"){
		if(x>=400){
			return false;
		}
	}else if(z==="Bard"){
		if(x>=390){ 
			return false; 
		}
	}else if(z==="Necromancer"||z==="Magician"||z==="Wizard"){
		if(x>=380){
			return false;
		}
	}else if(z==="Druid"){
		if(x>=375){
			return false;
		}
	}else{
		if(x>=350){
			return false;
		}
	}
	my.alteration+=1;
	CStat();
	if(z!=="Bard"){ 
		Chat(("Your alteration has increased! ("+(x+1)+")"),4); 
	}else{ 
		Chat(("Your singing has increased! ("+(x+1)+")"),4); 
	}
	return true;
}
function levelUpAbjuration(){
	var x = my.abjuration;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(JOB.jobType==="hybrid"){
		if(x>=350){
			return false;
		}
	}else if(z==="Bard"){
		if(x>=390){ 
			return false; 
		}
	}else if(z==="Wizard"||z==="Necromancer"||z==="Magician"){
		if(x>=390){
			return false;
		}
	}else if(z==="Druid"){
		if(x>=375){
			return false;
		}
	}else{
		if(x>=400){
			return false;
		}
	}
	my.abjuration+=1;
	CStat();
	if(z!=="Bard"){ 
		Chat(("Your abjuration has increased! ("+(x+1)+")"),4); 
	}else{ 
		Chat(("Your string instrument skill has increased! ("+(x+1)+")"),4); 
	}
	return true;
}
function levelUpConjuration(){
	var x = my.conjuration;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Necromancer"||z==="Magician"){
		if(x>=400){
			return false;
		}
	}else if(z==="Bard"){
		if(x>=390){
			return false; 
		}
	}else if(z==="Enchanter"||z==="Wizard"){
		if(x>=380){
			return false;
		}
	}else if(z==="Shaman"||z==="Druid"){
		if(x>=375){
			return false;
		}
	}else{
		if(x>=350){
			return false;
		}	
	}
	my.conjuration+=1;
	CStat();
	if(z!=="Bard"){ 
		Chat(("Your conjuration has increased! ("+(x+1)+")"),4); 
	}else{ 
		Chat(("Your wind instrument skill has increased! ("+(x+1)+")"),4); 
	}
	return true;
}
function levelUpEvocation(){
	var x = my.evocation;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Wizard"){
		if(x>=400){
			return false;
		}
	}else if(z==="Bard"){
		if(x>=390){ 
			return false; 
		}
	}else if(z==="Enchanter"||z==="Necromancer"||z==="Magician"){
		if(x>=380){
			return false;
		}
	}else if(z==="Shaman"||z==="Druid"){
		if(x>=375){
			return false;
		}
	}else{
		if(x>=350){
			return false;
		}
	}
	my.evocation+=1;
	CStat();
	if(z!=="Bard"){ 
		Chat(("Your evocation has increased! ("+(x+1)+")"),4); 
	}else{ 
		Chat(("Your percussion instrument skill has increased! ("+(x+1)+")"),4); 
	}
	return true;
}
function levelUpChanneling(){
	var x = my.channeling;
	var z = my.job;
	if(x < 1){ return false; }
	if(x >= my.level*5){ return false; }
	if(z==="Bard"){
		if(x>=390){
			return false; 
		}
	}else if(z==="Shaman"||z==="Druid"||z==="Cleric"){
		if(x>=380){
			return false;
		}
	}else if(z==="Ranger"||z==="Paladin"||z==="Shadow Knight"){
		if(x>=350){
			return false;
		}
	}else{
		if(x>=400){
			return false;
		}
	}
	my.channeling+=1;
	CStat();
	if(z!=="Bard"){
		Chat(("Your channeling has increased! ("+(x+1)+")"),4); 
	}else{ 
		Chat(("Your brass instrument skill has increased! ("+(x+1)+")"),4); 
	}
	return true;
}
function maxAllSkills(){
	if(dev){
		for(var i=0;i<=400;i++){
			levelUpPierce();
			levelUp1hb();
			levelUp2hb();
			levelUp1hs();
			levelUp2hs();
			levelUpH2h();
			levelUpDefense();
			levelUpOffense();
			levelUpDualWield();
			levelUpDoubleAttack();
			levelUpDodge();
			levelUpParry();
			levelUpRiposte();
			levelUpAlteration();
			levelUpAbjuration();
			levelUpConjuration();
			levelUpEvocation();
			levelUpChanneling();
		}
	}
}

function getDamage(){
	myAttack.kill();
	if(attackStatus===1){ return; }
	if(castingSpell===0||
	mob[TGT].charmStatus===true||
	g.autoAttackStatus===1||
	currentSpell==="Ice Block"){
		if(myFrenzy===false){
			myAttack = T.delayedCall(.1, getDamage);
			autoAttackTimer(.1);
		}else{
			myAttack = T.delayedCall(.1, getDamage);
			autoAttackTimer(.1);
		}
		return;
	}
	if(attackStatus===0&&g.autoAttackStatus===0){
		if(P.eq[12].type==="slashed"){
			if(skillLevelUp() > my.oneHandSlash){
				levelUp1hs();
			}
		}else if(P.eq[12].type==="crushed"){
			if(skillLevelUp() > my.oneHandBlunt){
				levelUp1hb();
			}
		}else if(P.eq[12].type==="cleaved"){
			if(skillLevelUp() > my.twoHandSlash){
				levelUp2hs();
			}
		}else if(P.eq[12].type==="smashed"||"staff"===P.eq[12].type){
			if(skillLevelUp() > my.twoHandBlunt){
				levelUp2hb();
			}
		}else if(P.eq[12].type==="pierced"){
			if(skillLevelUp() > my.piercing){
				levelUpPierce();
			}
		}else if(P.eq[12].type==="punched"){
			if(skillLevelUp() > my.handtohand){
				levelUpH2h();
			}
		}
		if(my.offense < my.level*5){
			if(skillLevelUp() > my.offense){
				levelUpOffense();
			}
		}
		if(my.doubleAttack < my.level*5){
			if(skillLevelUp() > my.doubleAttack){
				levelUpDoubleAttack();
			}
		}
	}
	calculateAutoAttackDamage(true);
	if(my.job==="Cleric"){
		if(my.talent5>=1){
			var hits = M.ceil(talent5()/4);
			function doit(hits){
				if(hits>0){
					calculateAutoAttackDamage(true);
					T.delayedCall(.15, function(){
						doit(--hits);
					});
				}
			}
			doit(hits);
		}
	}else if(my.job==="Shaman"){
		if(my.talent11>=1){
			var hits = M.ceil(talent11()/5.8);
			function doit(hits){
				if(hits>0){
					calculateAutoAttackDamage(true);
					T.delayedCall(.15, function(){
						doit(--hits);
					});
				}				
			}
			doit(hits);
		}
	}else if(my.job==="Enchanter"){
		if(my.talent8>=1){
			var hits = M.ceil(talent8()/4);
			function doit(hits){
				if(hits>0){
					calculateAutoAttackDamage(true);
					T.delayedCall(.15, function(){
						doit(--hits);
					});
				}				
			}
			doit(hits);
		}
	}else if(my.job==="Ranger"){
		if(my.talent3>=1){
			var hits = M.ceil(talent3()/5.8);
			function doit(hits){
				if(hits>0){
					calculateAutoAttackDamage(true);
					T.delayedCall(.15, function(){
						doit(--hits);
					});
				}				
			}
			doit(hits);
		}
	}else if(my.job==="Warrior"){
		if(my.talent8>=20){
			var hits = 5;
			function doit(hits){
				if(hits>0){
					calculateAutoAttackDamage(true);
					T.delayedCall(.15, function(){
						doit(--hits);
					});
				}				
			}
			doit(hits);
		}
	}
	if(P.eq[12].proc!==""){
		if(g.autoAttackStatus===0){
			if(mob[TGT].name){
				var procAdd = (min70(dexTotal())/8);
				if(procAdd > 50){
					procAdd = 50;
				}
				var procVal = M.random()*400+procAdd;
				if(procVal > 380){
					checkProc(12);
				}
			}
		}
	}
	// check double attack
	if(my.doubleAttack >= 1){
		if(M.random()*100 < doubleAttackChance()){
			doubletimer1 = T.delayedCall(.25, function(){ calculateAutoAttackDamage(true,0,true); });
		}
	}
	if(attackStatus!==0){return;}
	if(myFrenzy===false){
		var d=totalHaste1()/1000;
		myAttack = T.delayedCall(d, getDamage);
		autoAttackTimer(d);
	}else{
		var d=frenzyRate/1000;
		myAttack = T.delayedCall(d, getDamage);
		autoAttackTimer(d);
	}
}
function getDamage2(){
	myAttack2.kill();
	if(attackStatus===1){ return; }
	if(
		mob[TGT].charmStatus===true||
		castingSpell===0||
		g.autoAttackStatus===1||
		P.eq[12].type==="cleaved"||
		P.eq[12].type==="smashed"||
		P.eq[12].type==="staff"||
		P.eq[13].itemSlot==="shield"
	){
		if(myFrenzy===false){
			myAttack2 = T.delayedCall(.1, getDamage2);
		}else{
			myAttack2 = T.delayedCall(.1, getDamage2);
		}
		return;
	}
	if(attackStatus===0){
		if(skillLevelUp() > my.dualWield){
			levelUpDualWield();
		}
	}
	if(M.random()*100 < dualWieldChance()){
		if(attackStatus===0&&g.autoAttackStatus===0){
			if(P.eq[13].type==="slashed"){
				if(skillLevelUp() > my.oneHandSlash){
					levelUp1hs();
				}
			}else if(P.eq[13].type==="crushed"){
				if(skillLevelUp() > my.oneHandBlunt){
					levelUp1hb();
				}
			}else if(P.eq[13].type==="pierced"){
				if(skillLevelUp() > my.piercing){
					levelUpPierce();
				}
			}else if(P.eq[13].type==="punched"){
				if(skillLevelUp() > my.handtohand){
					levelUpH2h();
				}
			}
		}
		calculateAutoAttackDamage(false);
		if(P.eq[13].proc!==""){
			if(g.autoAttackStatus===0){
				if(mob[TGT].name){
					var procAdd = (min70(dexTotal())/8);
					if(procAdd > 50){
						procAdd = 50;
					}
					var procVal = M.random()*400+procAdd;
					if(procVal > 380){
						checkProc(13);
					}
				}
			}
		}
		//check double attack
		if(my.doubleAttack >= 1){
			if(M.random()*100 < doubleAttackChance()){
				doubletimer2 = T.delayedCall(.25, function(){ calculateAutoAttackDamage(false,0,true); });
			}
		}
	}
	if(attackStatus!==0){return;}
	if(myFrenzy===false){
		myAttack2 = T.delayedCall(totalHaste2()/1000, getDamage2);
	}else{
		myAttack2 = T.delayedCall(frenzyRate/1000, getDamage2);
	}
}
function summonWolfFamiliar(name, maxDam, minDam){
	if(!name){
		name = "Grovecaller";
	}
	g.familiarName = name;
	if(!maxDam){
		maxDam = 255;
	}
	if(!minDam){
		minDam = 125;
	}
	animateDot(TGT,"white");
	Chat(my.name+' summons a familiar of the '+name+'.',3);
	playAudio("spellCastAbjure");
	familiarId++;
	familiar[familiarId] = $('<img id="mistwalkerId'+familiarId+'">').css({
		position:"absolute",
		bottom:50,
		left:-50,
		opacity:0,
		width:400
	}).attr("src","/classic/images1/a white wolf.png")
	.appendTo($NG.eWin2);
	T.to(familiar[familiarId], .5, {
		opacity:1
	});
	function gogogo(count, familiarId){
		if(count<=5){
			if(mobsFound()===false){
				T.delayedCall(.5, gogogo, [count, familiarId]);
			}else{
				var damage=~~(M.random()*maxDam)+minDam;
				g.petPhysical(damage, TGT, "physical", true);
				if(M.random()>.6){
					T.delayedCall(.1, function(){
						var damage=~~(M.random()*maxDam)+minDam;
						g.petPhysical(damage, TGT, "physical", true);
					});
				}
				playAudio("wolf_att2");
				T.delayedCall(1.5, gogogo, [++count, familiarId]);
				T.to(familiar[familiarId], .25, {
					startAt:{
						rotationY:0
					},
					left: (MOB[TGT].offsetLeft), 
					onComplete:function(){
						T.to(this.target, 1, {
							startAt:{
								rotationY:180
							},
							left:-50, 
							onComplete:function(){
								T.set(this.target, {
									rotationY:0
								});
							}
						});
					}
				});
			}
		}else{
			T.to(familiar[familiarId], .5, {
				opacity:0,
				onComplete:function(){
					familiar[familiarId].remove();
				}
			});
		}
	}
	T.delayedCall((M.random()*.25+.5), gogogo, [0, familiarId]);
}
function checkProc(Slot){
	var c = false;
	var p = true;
	var N = P.eq[Slot].name;
	if(P.eq[Slot].rarity===5){
		if(N==="Falzitherin's Claw"){
			animateDot(TGT,"green");
			Chat(mob[TGT].name+" is blasted by noxious vapors.",3);
			procDot(TGT, minMax(195, .9), "Noxious Vapors", "poison", 9, 1000, "spellCastDot");
		}else if(N==="Seething Myrmidon's Gavel"){
			particleBurst(TGT,"orange");
			g.myMagicDamage("fire", 787, TGT, c, " is struck by a sudden burst of flames", p);
		}else if(N==="Plankton Laced Greatsword"){
			playAudio('novaice');
			animateNova('frostNova');
			for(var i=0;i<=4;i++){
				if(mob[i].name){
					var dam = minMax(458, .85);
					var hit=g.myMagicDamage('cold', dam, i, checkCrit(), "Vile Plankton");
					if(hit!==undefined){
						chillTarget(i,7000,-288);
					}
				}
			}
		}else if(N==="Jysin's Blade of the Darkwind"){
			summonWolfFamiliar("Darkwind", 367, 231);
		}else if(N==="Sword of Truth"){
			particleBurst(TGT,"teal");
			stunTarget(TGT, 3000, -32);
			g.myMagicDamage("lightning", ~~(M.random()*375+275), TGT, c, " is blasted by crackling ether", p);
		}else if(N==="Indocolite Revenant Thresher"){
			particleBurst(TGT,"purple");
			g.myMagicDamage("poison", ~~(M.random()*111+499), TGT, c, " is crushed by despondence", p);
			mob[TGT].snareStatus = true;
		}else if(N==="Grove Walker's Scimitar"){
			animateDot(TGT,"green");
			Chat(mob[TGT].name+" is blasted by fungal spores.",3);
			procDot(TGT, minMax(211, .85), "Fungal Spores", "poison", 9, 1000, "spellCastDot");
		}else if(N==="Odious Spear of Fate"){
			animateDot(TGT,"purple");
			Chat(mob[TGT].name+" is beset by a plague.",3);
			procDot(TGT, minMax(176, .8), "Odious Plague", "poison", 13, 1000, "spellCastDot");
		}else if(N==="Painmurder Mallet"){
			particleBurst(TGT,"magenta");
			g.myMagicDamage("magic", 777, TGT, c, " is blasted by psychic energy", p);
		}else if(N==="Executioner's Thunderclap"){
			particleBurst(TGT,"yellow");
			stunTarget(TGT, 2100, -32);
			g.myMagicDamage("lightning", minMax(555, .5), TGT, c, " is zapped by a ripple of static", p);
		}else if(N==="Megnemon's Glacial Crook"){
			g.glacialSpikeFinish(true);
		}else if(N==="Carbilloth's Rainbow Ire"){
			var color = "green";
			var mType = "poison";
			var z1 = M.random()*100;
			if(z1>.8){
				color = "magenta";
				mType = "magic";
			}else if(z1>.6){
				color = "orange";
				mType = "fire";
			}else if(z1>.4){
				color = "yellow";
				mType = "lightning";
			}else if(z1>.2){
				color = "teal";
				mType = "cold";
			}
			particleBurst(TGT,color);
			g.myMagicDamage(mType, minMax(999, .66), TGT, c, " is blasted by rainbow hues", p);
		}else if(N==="Heart of Burning Embers"){
			particleBurst(TGT,"orange");
			g.myMagicDamage("fire", 520, TGT, c, " is blasted by a pyroclastic flow", p);
			procDot(TGT, minMax(162, .75), "Pyroclastic Flow", "fire", 6, 1000, "spellDoneFlames");
			animateDot(TGT,"orange");
		}else if(N==="Sanctified Gavel of Pharmakos"){
			animateDot(TGT,"white");
			addMobBuffIcon("Kelpie Haze",TGT,"snareIcon",0,-32);
			mob[TGT].snareStatus=true;
		}
	}else if(P.eq[Slot].rarity===4){
		if(N==="Hallowed Gavel of Pharmakos"){
		}else if(N==="Satyr's Artifice"){
			particleBurst(TGT,"magenta");
			g.myMagicDamage("magic", 505, TGT, c, " is struck by a crackling litany", p);
		}else if(N==="Bloodletter's Lancet"){
			particleBurst(TGT,"red");
			g.myMagicDamage("magic", 45, TGT, c, "'s blood is siphoned", p);
			g.popupHeal(45);
		}else if(N==="Daimyo's Giri"){
			particleBurst(TGT,"red");
			g.myMagicDamage("fire", ~~(M.random()*50+270), TGT, c, " is struck by a sudden burst of flames", p);
		}else if(N==="Baron's Glissando"){
			particleBurst(TGT,"magenta");
			stunTarget(TGT, 2500, -32);
			g.myMagicDamage("magic", ~~(M.random()*175+175), TGT, c, " is barraged by a sonic force", p);
		}else if(N==="Venova's Martel"){
			animateDot(TGT,"white");
			Chat(mob[TGT].name+" is engulfed in the wrath of holy light.",3);
			procDot(TGT, minMax(165, .8), "Primal Corruption", "magic", 7, 1000, "spellDoneFlames");
		}else if(N==="Augur's Harvester"){
			bleedTarget(TGT, 12, 1000);
			particleBurst(TGT,"red");
			g.myMagicDamage("fire", minMax(333, .5), TGT, c, "'s wounds sizzle", p);
		}else if(N==="Warder's Hailrend"){
			particleBurst(TGT,"teal");
			animateLightningBlast(TGT)
			g.myMagicDamage("cold", 255, TGT, c, " is blasted by a hailstorm", p);
			g.myMagicDamage("lightning", minMax(410, .25), TGT, c, " is struck by lightning");
		}else if(N==="Warder's Magmahew"){
			particleBurst(TGT,"red");
			g.myMagicDamage("fire", 341, TGT, c, " is charred by searing magma", p);
			stunTarget(TGT, 2400, -32);
		}
	}else{
		if(N==="Short Sword of the Ykesha"||
		N==="Short Sword of the Crokyn"||
		N==="Ykeshan Broad Axe"||
		N==="Crokyn Broad Axe"){
			particleBurst(TGT,"magenta");
			g.myMagicDamage("magic", 150, TGT, c, " is struck by the force of Crokyn", p);
		} else if(N==="Ebony Blade"||
		N==="Spriggan's Blade"){
			g.myMagicDamage("magic", M.ceil(10+my.level), TGT, c, " is entangled in roots", p);
			if(checkRootImmune(TGT)===true){
				Chat((mob[TGT].name+" is immune to Root."),1);
				return;
			}
			if(statusResist(TGT)===true){
				Chat((mob[TGT].name+" resisted Root."),1);
				return;
			}
			Chat((mob[TGT].name+" is rooted."),3);
			stopMob(TGT);
			mob[TGT].rootStatus=3;
			$("#rootIcon"+TGT+",#rootBuffIcon"+TGT).remove();
			animateRoot(TGT, true);
			addMobBuffIcon("Root",TGT,"rootBuffIcon",0,0,0,"root");
		} else if(N==="Crystalline Scimitar"
		||N==="Iceshard Scimitar"){
			particleBurst(TGT,"blue");
			g.myMagicDamage("cold", 44, TGT, c, " is blasted by frost", p);
		} else if(N==="Ghoulbane"||
		N==="Soulgrinder"){
			if(checkUndead(TGT)===true){
			particleBurst(TGT,"magenta");
				g.myMagicDamage("magic", 150, TGT, c, " is blasted by holy power", p);
			}
		} else if(N==="Bladed Thulian Claws"||N==="Bladed Prenssor Claws"){
			particleBurst(TGT,"red");
			g.myMagicDamage("fire", 75, TGT, c, "'s flesh blisters", p);
		} else if(N==="Screaming Mace"||
		N==="Howling Mace"){
			particleBurst(TGT,"magenta");
			g.myMagicDamage("magic", 38, TGT, c, " is struck by a lupine blast", p);
		} else if(N==="Cold Iron Morning Star"){
			particleBurst(TGT,"blue");
			g.myMagicDamage("cold", 33, TGT, c, " is struck by the frigid north", p);
		} else if(N==="Stormeye"){
			particleBurst(TGT,"yellow");
			g.myMagicDamage("lightning", 179, TGT, c, " is thunderstruck", p);
		} else if(N==="The Jade Tan Do"||
		N==="The Witch Doctor"){
			particleBurst(TGT,"green");
			g.myMagicDamage("poison", 22, TGT, c, "'s flesh rots", p);
		} else if(N==="Sacrificial Dagger"){
			particleBurst(TGT,"magenta");
			Chat(("Sacrificial blood restores your mind.").fontcolor("#1e90ff"));
			g.popupMana(14);
		} else if(N==="Trident of the Seven Seas"||
		N==="Trident of Edenburg"){
			particleBurst(TGT,"yellow");
			g.myMagicDamage("lightning", 109, TGT, c, " is struck by a thunderbolt", p);
		} else if(N==="Serrated Bone Dirk"||
		N==="Serrated Bone Cinquedeas"){
			particleBurst(TGT,"magenta");
			g.myMagicDamage("magic", 22, TGT, c, "'s life force is drained", p);
			g.popupHeal(22);
		} else if(N==="Gigantic Zweihander"||
		N==="Gigantic Frostreaper"){
			particleBurst(TGT,"blue");
			g.myMagicDamage("cold", 143, TGT, c, " is struck by the arctic winds of Fenwoven", p);
		} else if(N==="Lamentation Blade"){
			particleBurst(TGT,"magenta");
			g.myMagicDamage("magic", 195, TGT, c, " is struck by death and despair", p);
		} else if(N==="Blighthammer"){
			particleBurst(TGT,"green");
			g.myMagicDamage("poison", 175, TGT, c, " is wrought by a deathly plague", p);
		} else if(N==="Mroon's Toy"){
			particleBurst(TGT,"yellow");
			var Slot=TGT;
			for(var i=0;i<=5;i++){
				g.myMagicDamage("lightning", M.ceil(M.random()*50)+1, Slot, c, " is pummeled by a hail of lightning", p);
			}
		} else if(N==="The Salamander"){
			particleBurst(TGT,"red");
			var Slot=TGT;
			for(var i=0;i<=2;i++){
				g.myMagicDamage("fire", M.ceil(M.random()*40)+80, Slot, c, " is singed by a hydra bolt", p);
			}
		//exceptional
		}else if(N==="Kreizenn's Flame"||
		N==="Clastocaust's Flame"){
			particleBurst(TGT,"orange");
			g.myMagicDamage("fire", 100, TGT, c, " skin erupts in flame", p);
		}else if(N==="Scimitar of the Mistwalker"||
		N==="Scimitar of the Grovecaller"){
			summonWolfFamiliar();
		}else if(N==="Fluxbladed Axe"){
			particleBurst(TGT,"magenta");
			g.myMagicDamage("magic", 150, TGT, c, " is struck by fluxing strands of chaos", p);
		}else if(N==="Hexfire"||
		N==="Hydraclash"){
			function doit1(){
				particleBurst(TGT,"orange","explode"+ ~~(M.random()*(3)+1)); 
				g.myMagicDamage("fire", ~~(M.random()*25)+85, TGT, c, " is struck by a hydra bolt", p);
			}
			doit1();
			T.delayedCall(.5, doit1);
			T.delayedCall(1, doit1);
		}else if(N==="Baezil's Vortex"||
		N==="Rathmonan's Vortex"){
			animateNova('lightningNova');
			playAudio("novaelec");
			for(var i=0;i<=4;i++){
				if(mob[i].name){
					g.myMagicDamage("lightning", ~~(M.random()*75)+75, i, c, " is struck by a lightning nova", p);
				}
			}
		}else if(N==="Moonfall"){
			animateMeteor(true);
			T.delayedCall(2.5, function(){
				for(var i=0;i<=4;i++){
					if(mob[i].name){
						g.myMagicDamage("fire", ~~(M.random()*100+400), i, c, " is struck by a meteor", p);
					}
				}
			});
		}else if(N==="Truesight Hammer"){
			particleBurst(TGT,"purple");
			var d=133;
			if(mob[TGT].name.indexOf(" pet")!==-1){ d=d*5; }
			g.myMagicDamage("magic", d, TGT, c, " is slammed by holy light", p);
		}else if(N==="Earthshaker"){
			screenShake(4,4,2,50);
			playAudio("earthquakeloop2",0,500);
			for(var i=0;i<=4;i++){
				if(mob[i].name){
					g.myMagicDamage("physical",~~(M.random()*50+175), i, checkCrit(), "Tremor", true);
					interruptTarget(i);
				}
			}
		}else if(N==="Dawnfire, Morning Star of Light"||
		N==="Venova's Dawn"){
			particleBurst(TGT,"purple");
			var d=195;
			if(checkUndead(TGT)===true){
				d=d*3;
			}
			g.myMagicDamage("magic", d, TGT, c, " is slammed by holy light", p);
		}else if(N==="Gold Plated Koshigatana"){
			particleBurst(TGT,"purple");
			var d=175;
			if(mob[TGT].name.indexOf(" pet")!==-1){ d=d*5; }
			g.myMagicDamage("magic", d, TGT, c, " is slammed by holy light", p);
		}else if(N==="Soul Leech, Dark Sword of Blood"||
		N==="Dark Sword of Tolloth"){
			particleBurst(TGT,"purple");
			g.myMagicDamage("magic", 75, TGT, c, "'s life is drained", p);
			g.popupHeal(75);
		}else if(N==="Bladestorm, Katana of Steel Sleet"||
		N==="Emperor's Katana of Resolve"){
			function doit2(){
				animateDebuff("yellow");
				for(var i=0;i<=4;i++){
					if(mob[i].name){
						g.myMagicDamage("magic", ~~(M.random()*100+250), i, c, "'s skin shreds as swords rain down", p);
					}
				}
			}
			doit2();
			T.delayedCall(2, doit2);
			T.delayedCall(4, doit2);
		}else if(N==="Blight, Hammer of the Scourge"||
		N==="Blight, Hammer of Vedria"){
			animateDot(TGT,"green");
			Chat(mob[TGT].name+' sweats and shivers, looking feverish.',3);
			procDot(TGT, minMax(75,.9), "Scourge", "magic", 8, 1000);
		}else if(N==="Barbarian Spiritist's Hammer"){
			particleBurst(TGT,"blue");
			g.myMagicDamage("cold", ~~(M.random()*20)+421, TGT, c, " staggers as spirits of frost impact", p);
		}else if(N==="Gallantine's Gleaming Bastard Sword"){
			particleBurst(TGT,"yellow","holybolt");
			interruptTarget(TGT);
			g.myMagicDamage("magic", ~~(M.random()*25)+275, TGT, c, " is jolted by gleaming light", p);
		}else if(N==="Nature Walker's Scimitar"||
		N==="Nature Covenant's Scimitar"){
			animateDot(TGT,"yellow");
			Chat(mob[TGT].name+" is gripped by nature's wrath.",3);
			procDot(TGT, minMax(55,.8), "Wrath of Nature", "lightning", 6, 1000);
		}else if(N==="Claw of Phara Dar"||
		N==="Claw of Szarthax"||
		N==="Claw of Darafar"){
			animateHyperStrike();
			myAttack.kill();
			var d=frenzyRate/1000;
			myAttack = T.delayedCall(d, getDamage);
			myAttack2.kill();
			myAttack2 = T.delayedCall(d, getDamage2);
			autoAttackTimer(d);
			myFrenzy=true;
			myFrenzyTimer.kill();
			myFrenzyTimer = T.delayedCall(2, function(){
				myFrenzy=false;
			});
		}else if(N==="Singing Short Sword"||
		N==="Harmonic Short Sword"){
			if(my.job==="Bard"){
				animateInnerPeace();
				mySingingSword=true;
				mySingingSwordTimer.kill();
				mySingingSwordTimer = T.delayedCall(12, function(){
					mySingingSword=false;
				});
			}
		}else if(N==="Earthcaller"||
		N==="Artremian Blade"){
			animateDot(TGT,"green");
			Chat(mob[TGT].name+" is consumed by the embracing earth.",3);
			procDot(TGT, minMax(35,.8), "Earthcall", "magic", 9, 1000);
		}else if(N==="Smoldering Cudgel"||
		N==="Singed Cudgel"){
			particleBurst(TGT,"orange");
			g.myMagicDamage("fire", ~~(M.random()*25)+454, TGT, c, " is singed by blazing fire", p);
		}else if(N==="Star of the Guardian"){
			animateCleanse();
			shieldHp+=1;
		}else if(N==="Celestial Fists"||
		N==="Fists of Qiromir"){
			animateHyperStrike();
			myAttack.kill();
			var d=frenzyRate/1000;
			myAttack = T.delayedCall(d, getDamage);
			myAttack2.kill();
			myAttack2 = T.delayedCall(d, getDamage2);
			autoAttackTimer(d);
			myFrenzy=true;
			myFrenzyTimer.kill();
			myFrenzyTimer = T.delayedCall(2.5, function(){
				myFrenzy=false;
			});
		}else if(N==="Scythe of the Shadowed Soul"||
		N==="Scythe of the Reaper"||
		N==="Waking Nightmare"){
			animateDot(TGT,"purple");
			Chat(mob[TGT].name+" is gripped by shadows of fear and terror.",3);
			procDot(TGT, minMax(75,.9), "Torment of Shadows", "magic", 9, 1000);
		}else if(N==="Razor Fang of Xygoz"||
		N==="Razor Fang of Sartuz"){
			animateHealing('yellow');
			Chat(my.name+" is surrounded by an aura of nature.",3);
			var proc=uniqueId();
			addBuffIcon("Blessing of Nature", "blessingOfNatureIcon"+proc, 6000, -32);
			function doit3(count,proc){
				if(my.hp<=0){
					removeIcon("blessingOfNatureIcon"+proc);
					return;
				}
				count++;
				g.popupHeal(17);
				if(count<6){
					T.delayedCall(1, function(){
						doit3(count,proc);
					});
				}else{
					removeIcon("blessingOfNatureIcon"+proc);
				}
			}
			var count=0;
			doit3(count,proc);
		}else if(N==="Spear of Fate"||
		N==="Spear of the Ancients"){
			animateDot(TGT,"purple");
			Chat(mob[TGT].name+" is consumed by the raging spirits of the land.",3);
			procDot(TGT, 12, "Curse of the Spirits", "magic", 12, 1000);
		}else if(N==="Nightfall"){
			var Slot=TGT;
			playAudio("spellDoneHeal");
			spellDamage = ~~(M.random()*40)+560;
			Chat((mob[Slot].name+" is engulfed in darkness."),3);
			var damage = M.ceil(spellDamage/20);
			mob[Slot].doomingDarknessTickCount=1;
			mob[Slot].doomingDarknessTick=damage;
			mob[Slot].doomingDarknessInterval.kill();
			mob[Slot].doomingDarknessInterval = T.to('', 1, {repeat:-1, onRepeat:function(){
				doomingDarknessTick("magic", Slot);
			}});
			addMobBuffIcon("Dooming Darkness",Slot,"doomingDarknessIcon",20000,-32);
			animateDot(Slot,'magenta');


		}else if(N==="Palladius' Axe of Slaughter"||
		N==="Wenerva's Axe of Slaughter"){
			particleBurst(TGT,"white","hammer");
			mob[TGT].runeHp=0;
			$("#MruneIcon"+TGT).remove();
			g.myMagicDamage("magic", ~~(M.random()*40+350), TGT, c, " is shattered by divine force", p);
		}else if(N==="Curse of Ghalentus"||N==="Innoruuk's Curse"){
			animateDot(TGT,"purple");
			Chat(mob[TGT].name+"'s soul is consumed.",3);
			procDot(TGT, minMax(75,.8), "Soul Consumption", "magic", 8, 1000);
		}else if(N==="Fiery Defender"){
			particleBurst(TGT,"orange");
			stunTarget(TGT, 2500, -32);
			g.myMagicDamage("fire", ~~(M.random()*20)+235, TGT, c, " is burnt by the wrath of the heavens", p);
		}else if(N==="Jagged Blade of War"||
		N==="Serrated Blade of War"){
			particleBurst(TGT,"red");
			g.myMagicDamage("fire", 375, TGT, c, "'s soul is consumed by the fury of Accostine", p);
		}else if(N==="Flamebellow"||
		N==="Flamebelcher"){
			playAudio("poisonnova");
			animateNova('fireNova',false);
			for(var i=0;i<=4;i++){
				if(mob[i].name){
					g.myMagicDamage("fire", ~~(M.random()*50)+375, i, c, " is burned by a wall of fire", p);
				}
			}
		}else if(N==="Staff of the Four"||
		N==="Ornate Prism Staff"){
			animateAncientWill();
			shieldHp=355;
			//mana regen
			var proc=uniqueId();
			addBuffIcon("Ornate Prism Staff", "barrierOfForceIcon"+proc, 6000, -32);
			function doit4(count,proc){
				if(my.hp<=0){
					removeIcon("barrierOfForceIcon"+proc);
					return;
				}
				count++;
				g.popupMana(21);
				if(count<6){
					T.delayedCall(1, function(){
						doit4(count,proc);
					});
				}
			}
			doit4(0,proc);
		}else if(N==="Staff of the Serpent"||
		N==="Staff of Sentoth"){
			animateHyperStrike();
			myAttack.kill();
			var d=frenzyRate/1000;
			myAttack = T.delayedCall(d, getDamage);
			myAttack2.kill();
			myAttack2 = T.delayedCall(d, getDamage2);
			autoAttackTimer(d);
			myFrenzy=true;
			myFrenzyTimer.kill();
			myFrenzyTimer = T.delayedCall(4, function(){
				myFrenzy=false;
			});
		}else if(N==="Hierophant's Crook"){
			function doit5(){
				screenShake(4,4,2,50);
				playAudio("earthquakeloop2",0,500);
				for(var i=0;i<=4;i++){
					if(mob[i].name){
						g.myMagicDamage("physical",~~(M.random()*75+215), i, checkCrit(), "Tremor", true);
						interruptTarget(i);
					}
				}
			}
			doit5();
			T.delayedCall(2.5, doit5);
			T.delayedCall(5, doit5);
		}else if(N==="Shatterfrost"){
			var Slot = TGT;
			if(mob[Slot].name!==""){
				var freezeDuration=2000;
				freezeDuration*=freezeReduction();
				g.myMagicDamage("cold", ~~(M.random()*25)+310, TGT, c, " is slammed by a hail of ice", p);
				encaseTarget(Slot, freezeDuration,-256);
			}
		}else if(N==="Earth Shifter"){
			screenShake(6,8,4,50);
			playAudio("earthquakeloop2",0,500);
			var hits = ~~(M.random()*4)+3;
			for(var i=0;i<hits;i++){
				var Slot = selectRandomTarget();
				g.myMagicDamage("physical",~~(M.random()*100+375), Slot, checkCrit(), "Tremor");
				interruptTarget(Slot);
			}
		}else if(N==="The Cranium Basher"){
			animateDot(TGT,"yellow");
			Chat(my.name+" is cursed by amplify damage.",3);
			g.amplifyDamageStatus=true;
		}else if(N==="Blackstar, Mace of Night"||
		N==="Blackstar Mace of Slagnon"){
			animateHealing('yellow');
			Chat(my.name+" is surrounded by the blessing of the Blackstar.",3);
			g.popupHeal(~~(M.random()*50)+75);
		}else if(N==="Hammer of the Dragonborn"){
			animateDot(TGT,"orange");
			Chat(mob[TGT].name+" is engulfed in corrupted dragon's breath.",3);
			procDot(TGT, minMax(175, .8), "Primal Corruption", "fire", 5, 1000, "spellDoneFlames");
		}
	}
}
function regenHealth(heal, name, duration, sprite, interval, stacks, racial, mana){
	if(mana===undefined){
		mana = false;
	}
	if(mana===true){
		if(my.job==="Warrior"||
		my.job==="Rogue"||
		my.job==="Monk"){
			return;
		}
	}
	if(heal===undefined){
		heal = 1;
	}
	if(duration===undefined){
		duration = 1;
	}
	if(sprite===undefined){
		sprite = 0;
	}
	if(interval===undefined){
		interval = 1;
	}
	if(stacks===undefined){
		stacks = false;
	}
	var type = name.replace(/ /g, '')+"Icon";
	if(stacks){
		type = name.replace(/ /g, '')+uniqueId()+"Icon";
	}
	if(typeof timers[type]==='object'){
		if(stacks===false){
			timers[type].kill();
		}
	}else{
		timers[type] = TDC();
	}
	if(racial!=="bypass"){
		var d = duration*1000;
		if(racial===undefined){
			addBuffIcon(name, type, d, sprite);
		}else{
			addBuffRaceIcon(name, type, d, sprite)
		}
	}
	function do1(count){
		if(my.hp<=0){
			removeIcon(type);
		}else{
			count++;
			if(!mana){
				g.popupHeal(heal);
			}else{
				g.popupMana(heal);
			}
			if(count<duration){
				timers[type] = T.delayedCall(1, function(){
					do1(count);
				});
			}
		}
	}
	do1(0);
}
var uniqueNum = 0;
function uniqueId(){
	uniqueNum++;
	if(uniqueNum>999999999){
		uniqueNum=0;
	}
	return uniqueNum;
}
function interruptTarget(Slot){
	if(mob[Slot].castingStatus===true){
		mob[Slot].spellActive.kill();
		mob[Slot].castingStatus=false;
		Chat((mob[Slot].name+"'s spell has been interrupted."));
	}
}
function partAdj(x){
	if(isMobile===true){
		return ~~(x*.3);
	}else{
		return x;
	}
}
function circX(cx, r, angle){
    return cx + r * (M.cos(angle * Math.PI/180));
}
function circY(cx, r, angle){
    return cx + r * (M.sin(angle * Math.PI/180));
}
function particleBurst(Slot,color,sound,total,spread,d){
	if(Slot===undefined){ Slot=TGT; }
	if(!color){ color="white"; }
	if(total===undefined){ total=partAdj(50); }
	if(!spread){ spread = 800; }
	if(!d){ d = .5; }
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX-12;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY-12;
	var c1 = img(color+"particle50");
	var ez1 = Quad.easeOut;
	function doit(count){
		var p1 = cacheAdd(c1, 5, cX, cY, 1, 1, true);
		if(M.random()>.5){
			var x = cX + M.random()*spread-spread/2;
			var y = cY + M.random()*spread/2-spread/4;
		}else{
			var angle = M.random()*360;
			var x = circX(cX, spread/2, angle);
			var y = circY(cY, spread/4, angle);
		}
		T.to(p1, d, {
			x: x,
			y: y,
			scaleX: 0,
			scaleY: 0,
			ease:ez1,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<total){ doit(++count); }
	}
	doit(0);
	if(!sound){
		playAudio("spellDoneBoom");
	}else if(sound!=="blank"){
		playAudio(sound);
	}
}
g.mobDodgeChance = function(Slot){
	var miss=mob[Slot].level*1.25;
	var hit=min70(dexTotal());
	miss=miss-hit;
	if(miss>30){ miss=30; }
	if(miss<5){ miss=5; }
	return miss;
}
function calculateAutoAttackDamage(identifyRightHand, gaspingFrenzyCounter, doubleAttack){
	if(mob[TGT].name===""||g.autoAttackStatus===1||bashStatus===0||fearStatus===0){return;}
	var Slot = TGT;
	var type = P.eq[12].type;
	var job = my.job;
	if(identifyRightHand===true){
		if(type==="smashed"||"staff"===type||type==="cleaved"){
			var damage = minMax((1+attackFunct()/4500)*(P.eq[12].damage*10),.5);
			if(innerPeaceStatus===0){ 
				g.drawMyMp(10);
			}
		}else{
			var damage = minMax((1+attackFunct()/4500)*(P.eq[12].damage*10),.2);
			if(innerPeaceStatus===0){ 
				g.drawMyMp(5);
			}
		}
	}else{
		if(type==="cleaved"||type==="smashed"||"staff"===type){
			return;
		}else{
			var damage = minMax((1+attackFunct()/4500)*(P.eq[13].damage*10),.2);
			if(innerPeaceStatus===0){ 
				g.drawMyMp(5);
			}
		}
	}
	if(gaspingFrenzyCounter>0){
		if(GLB.videoSetting==="High"){ animateGaspingFrenzy(Slot); }
		animateAutoAttack(Slot, identifyRightHand);
		g.myPhysicalDamage(damage, Slot, "Gasping Frenzy");
		if(my.level>8){
			g.popupMana(M.ceil(damage/20));
			g.drawMyMp();
		}
	}else{
		var flay=false;
		if(!doubleAttack&&identifyRightHand===true){ // primary hand, single attack only bonus
			if(job==="Cleric"){
				if(my.talent5>=1){
					flay=true;
				}
			}else if(job==="Shaman"){
				if(my.talent11>=1){
					flay=true;
				}			
			}else if(job==="Ranger"){
				if(my.talent3>=1){
					flay=true;
				}
			}else if(job==="Warrior"){
				if(my.talent8>=20){
					flay=true;
				}
			}
		}
		if(flay===true){
			var kek=selectFlayTarget();
			animateAutoAttack(kek, identifyRightHand);
			var skillName='You '+P.eq[12].type;
			if(identifyRightHand===false){
				skillName='You '+P.eq[13].type;
			}
			g.myPhysicalDamage(damage, kek, skillName); 
		}else{
			animateAutoAttack(Slot, identifyRightHand);
			var skillName='You '+P.eq[12].type;
			if(identifyRightHand===false){
				skillName='You '+P.eq[13].type;
			}
			g.myPhysicalDamage(damage, Slot, skillName);
		}			
	}
	// DPS TP generation
	if(job==="Monk"){ getTpRegen(); }
	// SK frenzy strike
	if(g.gaspingFrenzyStatus===true){
		g.gaspingFrenzyStatus=false;
		var gaspingFrenzyCounter = 800;
		var newMax = my.maxHp;
		var _ratio = my.hp/newMax;
		if(_ratio < .8){ gaspingFrenzyCounter=1200; }
		if(_ratio< .6){ gaspingFrenzyCounter=1800; }
		if(_ratio < .4){ gaspingFrenzyCounter=2600; }
		if(_ratio < .2){ gaspingFrenzyCounter=3800; }
	}
	if(gaspingFrenzyCounter>0){
		gaspingFrenzyCounter-=200;
		T.delayedCall(.2, function(){ 
			calculateAutoAttackDamage(true, gaspingFrenzyCounter);
		});
	}
}
function mobStrength(Slot){
	var foo = mob[Slot].str;
	var damEnh =0;
	if(mob[Slot].enrage){ damEnh=40; }
	if(mob[Slot].siphonStrength){ damEnh=-12; }
	if(mob[Slot].furiousScorn){ damEnh=-15; } //15%
	if(mob[Slot].weaken){ damEnh=-20; } //20%
	if(mob[Slot].scourgeStatus){ damEnh=-12; } //12%
	if(mob[Slot].asystoleStatus){ damEnh=-8; } //8%
	if(mob[Slot].gaspingEmbraceStatus){ damEnh=-12; } //12%
	if(damEnh<-25){ damEnh=-25; }
	foo = foo*(1+(damEnh/100));
	return M.round(foo);
}

g.WarriorPhyEnh=function(skillName, Slot, tt){
  var damEnh =0;
  if(skillName==="Kick"){
    damEnh+=talent1()*2;
  }else if(skillName==="Pummel"){
    damEnh+=((talent2()*2.6)/100)*P.eq[13].armor;
  }else if(skillName==="Shockwave"){
    damEnh+=((talent4()*1.75)/100)*P.eq[13].armor;
  }else if(skillName==="Slam"){
    damEnh+=talent5()*1.25;
  }else if(skillName==="Hemorrhage"){
    damEnh+=talent6()*2.1;
  }else if(skillName==="Intrepid Might"){
    damEnh+=talent8()*2.7;
  }else if(skillName==="Avenging Strike"){
    var b=talent9()*1;
    if(my.talent9>=20){ b+=5; }
    damEnh+=b;
  }else if(skillName==="Subjugate"){
    damEnh+=talent11()*2.4;
  }else if(skillName==="Decisive Blow"){
    damEnh+=talent12()*1.8;
  }
  if(tt===undefined){
    if(warAmpDamage===true){
      damEnh+=talent10()*10;
      warAmpDamage=false;
    }
  }
  return damEnh;
}   
g.RoguePhyEnh=function(skillName, Slot, tt){
  var damEnh =0;
  if(skillName==="Lacerate"){
	damEnh+=talent1()*3.3;
  }else if(skillName==="Sonic Strike"){
	damEnh+=talent3()*2.8;
	if(my.talent3>=20&&tt===undefined){
	  var Slot = TGT;
	  animateSmite(Slot);
	  function chaosFluxHit(){
		var damage2 = M.round(mob[Slot].maxHp*.1);
		calculateSpellDamage3(damage2, Slot);
		function doneFalling(){ 
		  mob[Slot].fallingStatus=false; 
		}
		T.delayedCall(1.4, doneFalling);
	  }
	  var dam = minMax(3+(attackFunct()/7), .8)
	  mob[Slot].fallingStatus=true;
	  animateFlux(Slot);
	  T.delayedCall(1.4, chaosFluxHit);
	  addMobBuffIcon("Gravity Flux",Slot,"fallingIcon",1400,-128);
	  g.myMagicDamage("magic", dam, Slot, checkCrit(), "Chaos Flux");
	}
  }else if(skillName==="Mirage Strike"){
	damEnh+=talent4()*3.3;
  }else if(skillName==="Shadow Strike"){
	var b=talent5();
	if(my.talent5>=20){ b+=5; }
	damEnh+=b;
  }else if(skillName==="Backstab"){
	damEnh+=talent6()*1.75;
  }else if(skillName==="Stagger Shot"){
	damEnh+=talent7()*6.3;
	if(my.talent8>=20&&tt===undefined){
		snareTarget(Slot, true)
	}
  }else if(skillName==="Prowlish Gash"){
	damEnh+=talent12()*3.3;
  }
  if(illusiveMistStatus===0&&my.talent10>=20){
	damEnh+=talent10()*1.2;
  }
  return damEnh;
} 
g.MonkPhyEnh=function(skillName, Slot, tt){
  var damEnh =0;
  if(skillName==="Eagle Strike"){
    damEnh+=talent1()*5;
  }else if(skillName==="Stone Fist Reversal"){
    damEnh+=talent2()*6.6;
  }else if("Chakra Blast"===skillName){
    damEnh+=talent4()*1.9;
  }else if(skillName==="Windmill Kick"){
    damEnh+=talent5()*2.25;
  }else if(skillName==="Cheetah Strike"){
    damEnh+=talent6()*2;
  }else if(skillName==="Flying Kick"){
    damEnh+=talent7()*1.8;
  }else if(skillName==="Tiger Strike"){
    var b=talent9()*1;
    if(my.talent9>=20){ 
      b+=5; 
    }
    damEnh+=b;
  }else if(skillName==="Crane Kick"){
    damEnh+=talent10()*2.5;
  }else if(skillName==="Ancestral Flurry"){
    damEnh+=talent11()*1.8;
  }
  if(mob[Slot].fearStatus===true){
    if(my.talent12>=20&&tt===undefined){
      damEnh+=talent12()*1.2;
    }
  }
  return damEnh;
}
g.PaladinPhyEnh=function(skillName, Slot, tt){
  var damEnh =0;
  if(skillName==="Slam"){
    damEnh+=talent1()*1.75;
  }else if(skillName==="Purge"){
    var b=talent9();
    if(my.talent9>=20){ 
      b+=5; 
    }
    damEnh+=b;
    if(checkUndead(Slot)===true&&tt===undefined){
      damEnh+=50;
    }
  }else if(skillName==="Rebuke"){
    damEnh+=talent5()*2.75;
  }else if("Vengeance"===skillName){
    damEnh+=talent6()*2.2;
    if(mob[Slot].attackNow===true&&tt===undefined){
      damEnh+=50;
    }
  }
  if(tt===undefined){
    if(my.talent10>=20){
      if(mob[Slot].stunStatus===true){
        damEnh+=40;
      }
    }
    if(my.talent7>=20){
      if(mob[Slot].blindStatus===true){
        damEnh+=30;
      }
    }
  }
  if(yaulpStatus===true){ 
    damEnh+=yaulpBonus;
  }
  return damEnh;
}    
g.ShadowKnightPhyEnh=function(skillName, Slot, tt, damage){
  var damEnh =0;
  if(skillName==="Crescent Cleave"){
    var b=talent1();
    if(my.talent1>=20){ 
      b+=5; 
    }
    damEnh+=b;
  }else if(skillName==="Death Strike"){
    damEnh+=talent2()*1.8;
    if(my.talent2>=20&&tt===undefined){
      bleedTarget(Slot, 12, 1000)
    }
  }else if(skillName==="Slam"){
    damEnh+=talent5()*2.5;
  }else if(skillName==="Gasping Frenzy"){
    damEnh+=talent9()*1.6;
  }else if(skillName==="Harm Touch"){
	  damEnh+=talent7()*5;
  }
  if(tt===undefined){
    if(my.talent12>=20){
      if(mob[Slot].heatBloodTickCount>0){
        damEnh+=15;
      }
      if(shadowVortexBonus>0){ 
        damEnh+=shadowVortexBonus; 
      }
    }
    if(mob[Slot].fearStatus===true){
      damEnh+=talent11()*.85;
    }
    if(my.talent3>=20){
      chillTarget(Slot,3000,-32);
    }
    if(skillName==="Death Strike"){
      g.popupHeal(M.ceil(damage/9));
    }
  }
  return damEnh;
}    
g.RangerPhyEnh=function(skillName, Slot, tt){
  var damEnh =0;
  if(skillName==="Kick"){
    damEnh+=talent1()*1.8;
  }else if("Counter Shot"===skillName){
    damEnh+=talent5()*1.5;
  }else if(skillName==="Trueshot Arrow"){
    damEnh+=talent6()*2.1;
    if(empowerTrueshot>500){ 
       empowerTrueshot=500; 
    }
	damEnh+=empowerTrueshot;
  }else if(skillName==="Rapid Shot"){
    var b=talent9();
    if(my.talent9>=20){ 
      b+=5; 
    }
    damEnh+=b;
  }else if(skillName==="Volley Shot"){
    damEnh+=talent12()*1.33;
  }
  if(mob[Slot].faerieFlameTickCount>0&&tt===undefined){ 
    damEnh+=15; 
  }
  return damEnh;
}    
g.BardPhyEnh=function(skillName, Slot, tt){
  var damEnh =0;
  if(chantOfBattleStatus===true){
    damEnh+=talent1()*3.5;
  }
  if(tt===undefined){
    if(my.talent2>=20){
      if(M.random()>.85){
        animateBenediction(Slot, true);
        playAudio('handofgod');
        var dam = minMax(attackFunct()/4.2,.8);
        T.delayedCall(.15, function(){
          g.myMagicDamage("magic", dam, Slot, checkCrit(), "Wistful Tidings");
        });
      }
    }
    if(mob[Slot].euphonicHymn>0){
      damEnh+=40+(talent4()*4.75);
    }
    if(my.talent4>=20){
      if(M.random()>.92){
        animateSonicStrike(Slot);
        playAudio('flshhit4');
        var dam = M.ceil(attackFunct()/3, .8);
        T.delayedCall(.15, function(){
          g.myMagicDamage("magic", dam, Slot, checkCrit(), "Sonic Disruption");
        });
        stunTarget(Slot, 1000, -32, 0, "Sonic Disruption");
      }
    }
    if(mySingingSword===true){ 
      damEnh+=(20+(talent4()*5.25));
    }
	if(Set.Baron>=6){
		if(mob[Slot].consonantChain>0){
			damEnh+=15;
		}
	}
  }
  return damEnh;
}   
g.DruidPhyEnh=function(){
  return 0;
}    
g.ClericPhyEnh=function(skillName, Slot, tt){
  var damEnh =0;
  if(tt===undefined){
    if(my.talent5>=20){
      if(M.random()>.85){
        animateRepudiation(Slot);
        playAudio('dirge');
        var dam = minMax(attackFunct()/3.4, .8);
        T.delayedCall(.25, function(){
          g.myMagicDamage("magic", dam, Slot, checkCrit(), "Divine Justice");
        });
      }
    }
    if(my.talent7>=20){
      if(M.random()>.92){
        animateExpelCorruption(Slot);
        playAudio('bolthammercast');
        var dam = minMax(attackFunct()/2.3, .8);
        T.delayedCall(.15, function(){
          g.myMagicDamage("magic", dam, Slot, checkCrit(), "elemental");
          stunTarget(Slot, 750, -480, 0, "Fist of the Heavens");
        });
      }
    }
    if(my.talent8>=20){
      if(shieldHp>0){
        if(M.random()>.67){
          animateFlyingKick(Slot);
          playAudio('handofgodbolt');
          var dam = minMax(attackFunct()/1.25, .75);
          T.delayedCall(.15, function(){
			g.myMagicDamage("magic", dam, Slot, checkCrit(), "Vicar's Wrath");
          });
        }
      }
    }
    if(mob[Slot].martyr===true){
      damEnh+=(talent6()*12.5);
    }
  }
  return damEnh;
}    
g.ShamanPhyEnh=function(skillName, Slot, tt){
  var damEnh =0;
	if(bloodlustStatus===true){ 
    damEnh+=60; 
  }
  return damEnh;
}  
g.NecromancerPhyEnh=function(skillName, Slot, tt){
  var damEnh =0;
  if(my.talent12>=20){
    if(shieldHp>0){
      damEnh+=15;
    }
  }
  if(mob[Slot].fearStatus===true&&tt===undefined){
    damEnh+=talent11()*1.33;
  }
  return damEnh;
}    
g.EnchanterPhyEnh=function(skillName, Slot, tt){
	var damEnh =0;
	if(my.talent4>=20){
		if(shieldHp>0){
			damEnh+=20;
		}
	}
	if(enchantWeaponStatus===true){ charmEnchantStrike(); }
	return damEnh;
} 
g.MagicianPhyEnh=function(){
  return 0;
}
g.WizardPhyEnh=function(){
  return 0;
}
g.mobDefense = function(Slot){
	var foo = mob[Slot].def;
	if(mob[Slot].resolutionStatus===true){ foo -= 5; }
	if(mob[Slot].lacerate>0){ foo += mob[Slot].lacerate; } //10 max
	if(mob[Slot].shadowVortex>0){ foo += mob[Slot].shadowVortex; } //10
	if(mob[Slot].scourgeStatus===true){ foo += 12; }
	if(mob[Slot].asystoleStatus===true){ foo += 24; }
	if(mob[Slot].barrier){ 
		if(my.job==="Cleric"&&my.talent6>=20){
		}else{
			foo -= 67; 
		}
	}
	if(my.job==="Ranger"){
		if(my.talent6>=20&&foo>100){
			foo=100;
		}
	}
	if(foo < 33){ foo = 33; }
	return foo/100;
}
function TTphy(max, percent, skillName, number, type, tt){
	if(!type){ type=false; }
	var min = max*percent;	
	var a=[];
	if(number!==true){
		a[0]="<span class='green'>"+g.myPhysicalDamage(min, 0, skillName, false, type, tt || 1)+"</span>";
		a[1]="<span class='green'>"+g.myPhysicalDamage(max, 0, skillName, false, type, tt || 2)+"</span>";
	}else{
		a[0]=g.myPhysicalDamage(min, 0, skillName, false, type, tt || 1);
		a[1]=g.myPhysicalDamage(max, 0, skillName, false, type, tt || 2);
	}
	return a;
}
//type: bow, range
g.myPhysicalDamage = function(damage, Slot, skillName, crit, type, tt){
	if(tt===undefined){
		if(mob[Slot].name===""||mob[Slot].charmStatus===true){ return; }
		if(g.gaspingFrenzyStatus===false){
			if(skillName==="Subjugate"||
				skillName==="Shockwave"||
				skillName==="Harm Touch"){
			}else{
				var dodge=M.random()*100;
				if(dodge<g.mobDodgeChance(Slot)){
					Chat(mob[Slot].name+" dodged your attack.");
					g.popupMsg("MISS",Slot);
					if(my.job==="Warrior"&&my.level>=9){
						g.subjugateStatus=0;
						clearSubjugate.kill();
						clearSubjugate = T.delayedCall(8, subjugateReady);
						g.checkWarriorSkills();
					}
					if(mob[Slot].attackStatus===1){ attackOn(true); }
					return;
				}
				if(g.blindStatus===0){
					if(M.random()*2>1){
						Chat((my.name+" is blinded by darkness."));
						g.popupMsg("MISS",Slot);
						if(my.job==="Warrior"&&my.level>=9){
							g.subjugateStatus=0;
							clearSubjugate.kill();
							clearSubjugate = T.delayedCall(8, subjugateReady);
							g.checkWarriorSkills();
						}
						return;
					}
				}
			}
		}
		if(g.autoAttackStatus===1){
			if(Lmy.autoAttackOption==="On"){
				toggleAutoAttackStatus(); 
			}
		}
		//degrade root
		g.updateRootStatus(Slot);
		//crit chance
		if(!crit){
			var crit=checkCrit();
		}
		if(my.job==="Rogue"){
			if(g.coldBloodBonus===1){
				if(skillName.indexOf("You ")!==0){
					T.delayedCall(.01, function(){ 
						g.coldBloodBonus=0; 
					}); 
					$("#coldBloodIcon").remove();
					g.popupHeal(M.ceil( minMax( ((agiTotal() )/3),.8) ));
					assassinateStatus=true;
					crit=true;
				}
			}
		}
		if(crit===true){
			damage=(damage + damage*(g.criticalDamage()));
			if(my.job==="Monk"){ my.mp+=3; }
		}
	}
	//%increases
	var damEnh = g.enhancePhysicalEquip;
	if(type==="bow"){
		damEnh+=bowBonus;
	}else{
		if(skillName.indexOf("You ")!==0){
			damEnh+=weaponBonus;
		}
	}
	if(tt===undefined){
		if(g.amplifyDamageStatus===true){
			damEnh+=100;
			g.amplifyDamageStatus=false;
		}
		if(hideStatus===0){
			if(my.job==="Rogue"){
				damEnh+=60;
				if(my.race==="Halfling"){
					damEnh+=30;
				}
			}
		}
		if(evadeStatus===true){
			if(my.job==="Rogue"){
				damEnh+=60;
				if(my.talent2<20){
					evadeStatus=false;
				}
			}else{
				damEnh+=90;
				evadeStatus=false;
			}
			evadeBash();
		}
		if(Set.Willow>=6){
			if(mob[Slot].rootStatus>0){
				damEnh+=30;
			}
		}
		if(mob[Slot].frozenStatus===true){
			var b = 0;
			if(mob[Slot].shatterStatus===true){
				T.to('#iceIcon'+Slot, .5, {
					opacity:0,
					onComplete:function(){
						$(this).remove();
					}
				});
				T.to(bmp[Slot], 1, {
					easel:{
						tint:"#08f",
						tintAmount:0
					}
				});
				b = 75;
				mob[Slot].frozenTimer.kill();
				mob[Slot].frozenStatus=false;
				mob[Slot].shatterStatus=false;
			}
			damage = M.round(damage*1.25+b);
			damEnh+=(25+b);
			if(g.autoAttackStatus===1&&Lmy.autoAttackOption==="On"){ 
				toggleAutoAttackStatus(); 
			}
		}
	}
	if(my.race==="Barbarian"){
		if(ancestralRampageStatus===true){ damEnh+=100; }
	}
	if(secondWindStatus===true){
		damEnh += 25;
	}
	//talents physical
	var skillLeech=0;
	if (tt === undefined){
		damEnh += g[JOB.PhyEnh](skillName, Slot, tt, damage);
	}
	damage = (damage+(damage*(damEnh/100)));
	//mob defense adjustment
	if(tt===undefined){
		damage = (damage*(g.mobDefense(Slot) ) );
	}
	//damage negation
	if(mob[Slot].stasisFieldStatus===true){
		if(tt===undefined){
			damage = 0;
			g.slotDamage(damage, Slot);
			return damage;
		}
	}	
	if(type==="bow"){
		if(my.talent8>=20&&tt===undefined){
			if(M.random()>.7){
				animateCorpseExplosion(Slot, true);
				playAudio('explode'+M.ceil(M.random()*3));
				for(var i=0;i<=4;i++){
					if((i+1===Slot)||i===Slot||(i-1===Slot)){
						if(mob[i].name!==""){
							var dam = minMax(attackFunct()/7,.8);
							g.myMagicDamage("fire", dam, i, false, "elemental");		
						}
					}		
				}
			}
		}
		if(my.talent11>=1&&sowStatus===true&&tt===undefined){
			if(M.random()<((talent11()*1.2)/100)){
				playAudio('lightning2');
				if(mob[Slot].name!==""){
					animateLightningBlast(Slot)
					g.myMagicDamage("lightning", minMax(M.ceil(attackFunct()/5), .5), Slot, false, "elemental");
				}
			}
		}
	}
	//elemental damage
	var eDmg = 0;
	if(tt===undefined){
		if(g.poisonDamageEquip>0){
			var Pboost = 1+(g.enhanceAllEquip+g.enhancePoisonEquip)/100;
			var poisonDamage = M.round(M.random()*(Pboost*(g.poisonDamageEquip))*(mob[Slot].poison/100));
			eDmg+=poisonDamage;
		}
		var x9 = magicDamageEquipTotal();
		if(x9>0){
			var Mboost = 1+(g.enhanceAllEquip+g.enhanceMagicEquip)/100;
			var magicDamage = M.round(M.random()*(Mboost*x9)*(mob[Slot].magic/100));
			eDmg+= magicDamage;
		}
		if(g.lightningDamageEquip>0){
			var Lboost = 1+(g.enhanceAllEquip+g.enhanceLightningEquip)/100;
			var lightningDamage = M.round(M.random()*(Lboost*g.lightningDamageEquip)*(mob[Slot].lightning/100));
			eDmg+= lightningDamage;
		}
		if(g.coldDamageEquip>0){
			var Cboost = 1+(g.enhanceAllEquip+g.enhanceColdEquip)/100;
			var coldDamage = M.round(M.random()*(Cboost*g.coldDamageEquip)*(mob[Slot].cold/100));
			eDmg+=coldDamage;
		}
		if(g.fireDamageEquip>0){
			var Fboost = 1+(g.enhanceAllEquip+g.enhanceFireEquip)/100;
			var fireDamage = M.round(M.random()*(Fboost*g.fireDamageEquip)*(mob[Slot].fire/100));
			eDmg+=fireDamage;
		}
		if(eDmg>0){
			if(eDmg<1){ eDmg=1; }
			if(my.job==="Monk"){
				var damEnh = 0;
				damEnh += talent7()*1.5;
				eDmg = M.round(eDmg+(eDmg*(damEnh/100)));
			}
			slotElementalDamage(eDmg, Slot, highestElement);
		}
	}
	//physical bonus
	if(g.physicalDamageEquip>0){
		if(tt===undefined){
			damage = damage + (M.random()*g.physicalDamageEquip)*(g.mobDefense(Slot));
		}else if(tt===2){
			damage = damage + g.physicalDamageEquip;
		}else{
			damage++;
		}
	}
	if(tt===undefined){
		var damRed=0;
		if(mob[Slot].level>my.level){
			damRed += mob[Slot].level-my.level;
		}
		//%decreases
		if(mob[Slot].riftStatus===true){
			damRed += wardersRiftReduction() - (talent4()*1.25);
		}
		if(damRed>75){ damRed = 75; }
		damage = (damage-(damage*(damRed/100)));
		if(damage < 1){ damage = M.ceil(M.random()*my.level/10); }
		//all done
		if(skillName==="Decisive Blow"){
			if(my.talent12>=20){
				g.myMagicDamage("magic", damage, Slot, false, "Champion's Rage");
			}
		}
		if(my.job==="Rogue"){
			if(skillName==="Lacerate"){
				if(my.talent1>=20){
					var zog = ~~(damage*.2);
					skillLeech+=zog;
				}
			}
			if(my.talent7>=20&&assassinateStatus===true){
				assassinateStatus=false;
				if(M.random()>.95&&mob[Slot].rare!==3){
					damage = mob[Slot].hp;
				}
			}
		}
	}
	damage = M.ceil(damage);
	if(tt){ return M.ceil(damage); }
	//commit damage
	if(mob[Slot].runeHp>0){
		mob[Slot].runeHp-=damage;
		if(mob[Slot].runeHp<=0){ 
			$("#MruneIcon"+Slot).remove(); 
		}
		playAudio("blockBlunt");
	}else{
		mob[Slot].hp-=damage;
	}
	if(GLB.chatMyHit==="On"){
		if(mob[Slot].name!==''&&skillName!==undefined){
			if(skillName==='You '+P.eq[12].type||skillName==='You '+P.eq[13].type){
				if("staff"===P.eq[12].type){
					Chat("You smashed "+mob[Slot].name+" for "+damage+" damage.");
				}else{
					Chat(skillName+" "+mob[Slot].name+" for "+damage+" damage.");
				}
			}else{
				Chat(skillName+" hits "+mob[Slot].name+" for "+damage+" damage.");
			}
		}
	}
	if(my.job==="Shadow Knight"){
		if(my.talent10>=20&&g.petAlive===true){
			if(M.random()>.65){
				var foo=(petStrTotal()/2);
				var petsDamage=M.ceil(foo+ M.random()*foo);
				g.petPhysical(petsDamage, Slot);
			}
		}
	}
	if(g.leechEquip>0||skillLeech>0){
		g.popupHeal((damage*g.leechRatio)*(g.leechEquip)+skillLeech);
	}
	if(g.wraithEquip>0){
		if(my.job==="Warrior"||my.job==="Monk"||my.job==="Rogue"){
			//nothing
		}else{
			g.popupMana((g.wraithRatio*damage)*(g.wraithEquip/100));
		}
	}
	if(crit===false){
		g.slotDamage(damage, Slot);
	}else{
		g.slotDamageCrit(damage, Slot);
	}
	if(mob[Slot].attackStatus===1){
		attackOn(true);
	}
	g.drawMonsterHp(Slot);
	g.checkForDeadMonsters();
	//attack effects - bad
	if(mob[Slot].sleepStatus===true){
		mob[Slot].sleepStatus=false;
		$("#sleepIcon"+Slot).remove();
	}
	//attack effects - good
	if(my.race==="Dark Elf"){
		if(sanguineTormentStatus===true){
			g.popupHeal(M.ceil(damage/8));
		}
	}else if(my.job==="Shadow Knight"){
		if(vampiricEmbraceStatus===true){
			var drainChance = M.random()*100;
			if(drainChance>80){
				g.popupHeal(M.ceil(damage/8));
			}
		}
	}else if(my.job==="Monk"){
		if(cobraStrikeBonus===0){
			g.popupHeal(M.ceil(damage/25));
		}
		if("Chakra Blast"===skillName){
			g.popupHeal(M.ceil(damage*.75));
			if(my.talent4>=20){
				for(var i=0;i<=4;i++){
					if(mob[i].name){
						var dam = damage*3.4;
						g.myMagicDamage('magic', dam, i, checkCrit(), "Chi Blast");
					}
				}
			}
		}
	}else if(my.job==="Ranger"){
		if("Counter Shot"===skillName){
			if(my.level>8){
				g.popupMana(M.ceil(damage/18));
			}
			interruptTarget(Slot);
		}
	}else if(my.job==="Paladin"){
		if("Vengeance"===skillName){
			if(my.level>8){
				g.popupMana(M.ceil(damage/17));
			}
		}
	}
	//these skills cannot be reflected/damage shielded
	if(type==="bow"||
		skillName==="Shockwave"||
		type==="range"){
		return damage; 
	}
	//thorns
	if(mob[Slot].thornsActive===0){
		if(my.job==="Monk"&&my.talent11>=20){
			//nothing
		}else{
			Chat(("You are pierced by thorns for "+M.ceil(mob[Slot].level/10)+" damage."),3);
			var dam2=M.ceil(mob[Slot].level/10);
			my.hp-=dam2;
			battleDamageTaken+=dam2;
			if(my.hp<=0){
				Chat(("You have been slain by a shield of thorns!").fontcolor("#ff0000"));
				monsterKilledMe();
			}
		}
	}
	//lavashield
	if(mob[Slot].lavaShieldActive===0){
		if(my.job==="Monk"&&my.talent11>=20){
			//nothing
		}else{
			Chat(("You are burned by lava for "+M.ceil(mob[Slot].level/6)+" damage."),3);
			var dam1=M.ceil(mob[Slot].level/6);
			my.hp-=dam1
			battleDamageTaken+=dam1;
			if(my.hp<=0){
				Chat(("You have been slain by a shield of lava!").fontcolor("#ff0000"));
				monsterKilledMe();
			}
		}
	}
	//reflect
	if(mob[Slot].ironMaiden===true){
		if(my.job==="Monk"&&my.talent11>=20){
			//nothing
		}else{
			var imDamage = M.ceil(mob[Slot].intel*.2);
			Chat(("Iron Maiden reflects "+imDamage+" damage."),3);
			my.hp-=imDamage;
			battleDamageTaken+=imDamage;
			CStat();
			g.drawMyHp();
			if(my.hp<=0){
				Chat(("You have been slain by Iron Maiden!").fontcolor("#ff0000"));
				monsterKilledMe();
			}
		}
	}
	return damage;
}

g.WarriorMagEnh=function(){
  return 0;
}
g.MonkMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Dragon Strike"){
    damEnh+=talent8()*7.3;
  }
  return damEnh;
}      
g.RogueMagEnh=function(){
  return 0;
}    
g.PaladinMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Holy Might"){
    damEnh+=talent10()*4.5;
  }else if(spellName==="Ardent Judgment"){
    if(checkUndead(Slot)===true&&tt!==true){
      damEnh+=50;
    }
    damEnh+=talent7()*3.5;
  }
  if(tt!==true){
    if(my.talent10>=20){
      if(mob[Slot].stunStatus===true){
        damEnh+=40;
      }
    }
    if(my.talent7>=20){
      if(mob[Slot].blindStatus===true){
        damEnh+=30;
      }
    }
  }
  if(yaulpStatus===true){ 
    damEnh+=yaulpBonus; 
  }
  return damEnh;
}    
g.ShadowKnightMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Life Tap"){
    damEnh+=talent6()*1.75;
  }
  if(tt!==true){
    if(mob[Slot].fearStatus===true){
      damEnh+=talent11()*.85;
    }
    if(my.talent12>=20){
      if(mob[Slot].heatBloodTickCount>0){
        damEnh+=15;
      }
    }
  }
  return damEnh;
}        
g.RangerMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Ignite"){
    damEnh+=talent8()*4.2;
  }
  if(indoorStatus===false){	
    damEnh+=20;
  }
  if(mob[Slot].faerieFlameTickCount>0&&tt!==true){ 
    damEnh+=15; 
  }
  return damEnh;
}    
g.BardMagEnh=function(spellName, Slot, mType, tt){
	var damEnh =0;
	if(spellName==="Chords of Dissonance"){
		damEnh+=talent5()*4.7;
	}else if(spellName==="Desperate Dirge"){
		damEnh+=talent8()*3.6;
	}else if(spellName==="Brusco's Boastful Bellow"){
		damEnh+=talent10()*4.75;
	}
	if(tt!==true){
		if(Set.Baron>=6){
			if(mob[Slot].consonantChain>0){
				damEnh+=15;
			}
		}
	}
	return damEnh;
}    
g.DruidMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Starfire"){
    var b=talent9()*2;
    if(my.talent9>=20){ 
      b+=10; 
    }
    damEnh+=b;
  }else if(spellName==="Lightning Blast"){
    damEnh+=talent11()*6.8;
  }
  if(indoorStatus===false){	
    damEnh+=20;
  }
  return damEnh;
}    
g.ClericMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Smite"){
    var b=talent1()*2;
    if(my.talent1>=20){ 
      b+=10; 
    }
    damEnh+=b;
  }else if(spellName==="Holy Wrath"){
    damEnh+=talent4()*9.5;
  }else if(spellName==="Sound of Force"){
    damEnh+=talent5()*8.4;
  }else if(spellName==="Expel Corruption"){
    damEnh+=talent9()*6.2;
    if(checkUndead(Slot)===true&&tt!==true){
      damEnh+=50;
    }
  }
  if(markOfJudgementStatus===true){
    damEnh+=75;
  }
  if(mob[Slot].martyr===true&&tt!==true){
    damEnh+=(talent6()*12.5);
    damEnh+=30;
  }
  return damEnh;
}    
g.ShamanMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Frost Strike"){
    var b=talent1()*2;
    if(my.talent1>=20){ b+=10; }
    damEnh+=b;
  }else if(spellName==="Glacial Impact"){
    damEnh+=talent4()*5.5;
  }else if(spellName==="Poison Nova"){
    damEnh+=talent6()*6.2;
  }
  if(mob[Slot].afflictionStatus===true&&tt!==true){ 
    damEnh+=10; 
  }
  if(bloodlustStatus===true){ 
    damEnh+=60; 
  }
  return damEnh;
}    
g.NecromancerMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Bone Spirit"){
    var b=talent9()*2;
    if(my.talent9>=20){ b+=10; }
    damEnh+=b;
  }else if(spellName==="Fireball"){
    var b=talent9()*2;
    if(my.talent9>=20){ 
      b+=10; 
    }
    damEnh+=b;
  }else if(spellName==="Drain Soul"){
    damEnh+=talent1()*2.8;
  }else if(spellName==="Corpse Explosion"){
    damEnh+=talent7()*5.7;
  }else if(spellName==="Detonate Soul"){
    damEnh+=talent7()*7.8;
  }
  if(my.talent12>=20){
    if(shieldHp>0){
      damEnh+=15;
    }
  }
  if(tt!==true){
    if(my.talent7>=20){
      if(mType==="poison"&&M.random()>.76){
        activateCorpseExplosion();
      }
    }
    if(mob[Slot].fearStatus===true){
      damEnh+=talent11()*1.33;
    }
  }
  return damEnh;
}    
g.EnchanterMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Chaos Flux"){
    var b=talent1()*2;
    if(my.talent1>=20){ b+=10; }
    damEnh+=b;
  }else if(spellName==="Gravity Flux"){
    damEnh+=talent11()*6.3;
  }
  if(my.talent4>=20){
    if(shieldHp>0){
      damEnh+=20;
    }
  }
  if(mob[Slot].tashaniaStatus===true&&tt!==true){ 
    damEnh+=(abjurationTotal()/20); 
  }
  return damEnh;
}    
g.MagicianMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Lava Bolt"){
    var b=talent1()*2;
    if(my.talent1>=20){ b+=10; }
    damEnh+=b;
  }else if(spellName==="Firestorm"){
    damEnh+=talent3()*6.3;
  }else if(spellName==="Armageddon"){
    damEnh+=talent4()*5.4;
  }else if(spellName==="Frozen Orb"){
    damEnh+=talent10()*4.8;
  }else if(spellName==="Psionic Storm"){
    damEnh+=talent12()*6.1;
  }else if(spellName==="Elemental Lightning"){
    damEnh+=talent8()*7.3;
  }else if(spellName==="Elemental Glacier"){
    damEnh+=talent8()*7.3;
  }else if(spellName==="Elemental Inferno"){
    damEnh+=talent8()*7.3;
  }
  return damEnh;
}    
g.WizardMagEnh=function(spellName, Slot, mType, tt){
  var damEnh =0;
  if(spellName==="Charged Bolts"){
    damEnh+=talent1()*4.2;
  }else if(spellName==="Arcane Missiles"){
    damEnh+=talent2()*4.9;
  }else if(spellName==="Chain Lightning"){
    damEnh+=talent3()*6.3;
	if(Set.Malefactor>=6){
		damEnh += 50;
	}
  }else if(spellName==="Ice Bolt"){
    var b=talent5()*2;
    if(my.talent5>=20){ b+=10; }
    damEnh+=b;
  }else if(spellName==="Deep Freeze"){
    damEnh+=talent6()*4.5;
  }else if(spellName==="Glacial Spike"){
    damEnh+=talent7()*5.3;
  }else if(spellName==="Ice Comet"){
    damEnh+=talent8()*6.5;
  }else if(spellName==="Fireball"){
    damEnh+=talent10()*5.9;
  }else if(spellName==="Meteor"){
    damEnh+=talent12()*6.7;
  }
  if(my.talent4>=20){
    if(mType==="lightning"){
      damEnh+=15;
    }
  }
  if(my.talent8>=20){
    if(mType==="cold"){
      damEnh+=15;
    }
  }
  if(my.talent12>=20){
    if(mType==="fire"){
      damEnh+=15;
    }
  }
  if(harnessEtherStatus===true){
    if(tt!==true&&spellName!=='elemental'){
      damEnh+=~~(100+(conjurationTotal()/2));
      damEnh+=talent11()*4.1;
      harnessEtherStatus=false;
      $("#harnessEtherIcon").remove();
    }
  }
  return damEnh;
}
function TTmag(max, percent, mType, skillName){
	var min = max*percent;
	var a=[];
	a[0]="<span class='green'>"+g.myMagicDamage(mType, min, 0, false, skillName, false, true)+"</span>";
	a[1]="<span class='green'>"+g.myMagicDamage(mType, max, 0, false, skillName, false, true)+"</span>";
	return a;
}
g.myMagicDamage = function(mType, damage, Slot, crit, spellName, proc, tt){
	if(tt!==true){
		if(mob[Slot].name===""||mob[Slot].charmStatus===true){ 
			return; 
		}
		if(crit===true){
			damage=(damage + damage*(g.criticalDamage()));
		}
		var ignore=false;
		if(my.job==="Druid"){
			if(my.talent10>=20&&mob[Slot].driftingDeathTickCount>0){
				ignore=true;
			}
		}
		//damage negation
		if(mob[Slot].stasisFieldStatus===true){
			damage = 0;
			g.slotDamage(damage, Slot);
			return;
		}
		if(ignore===false&&mType!=="physical"){
			var r1 = mob[Slot][mType];
			if (Set.ArchMage >= 6) {
				r1 += 45;
			}
			if (Set.HighPriest >= 6) {
				r1 += (r1 + 100)/2;
			}
			if(my.job==="Magician"){
				if(my.talent4>=20){
					if(mType==='fire'){
						if(r1 < 100){
							r1 = (r1 + 100)/2;
						}
					}
				}
			}
			// mob resists
			damage=damage*(r1/100);
		}
	}
	if(M.random()>.25){
		if(spellName==="Earthquake"||spellName==="Hurricane"||spellName==="elemental"){
			//nothing
		}else{
			g.updateRootStatus(Slot); 
		}
	}
	//%increases
	var damEnh =0;
	if(proc!==true){
		damEnh+=g.enhanceAllEquip;
		damEnh+=g['enhance'+mType[0].toUpperCase() + mType.slice(1)+'Equip'];
	}
	if(my.race==="Barbarian"){
		if(ancestralRampageStatus===true){ damEnh+=100; }
	}
	if(secondWindStatus===true){
		damEnh += 25;
	}
	if(tt!==true){
		if(g.amplifyDamageStatus===true){
			damEnh+=100;
			g.amplifyDamageStatus=false;
		}
		if(mob[Slot].frozenStatus===true){
			var shatterBonus = 0;
			if(mob[Slot].shatterStatus===true){
				T.to('#iceIcon'+Slot, .5, {
					opacity:0,
					onComplete:function(){
						$("#iceIcon"+Slot).remove();
						T.to(bmp[Slot], 1, {
							easel:{
								tint:"#08f",
								tintAmount:0
							}
						});
					}
				});
				shatterBonus = 75;
				mob[Slot].frozenTimer.kill();
				mob[Slot].frozenStatus=false;
				mob[Slot].shatterStatus=false;
			}
			damEnh+=(25+shatterBonus);
			if(g.autoAttackStatus===1&&Lmy.autoAttackOption==="On"){ 
				toggleAutoAttackStatus(); 
			}
		}
		if(Set.Willow>=6){
			if(mob[Slot].rootStatus>0){
				damEnh+=30;
			}
		}
	}
	//talents magic
	damEnh += g[JOB.MagEnh](spellName, Slot, mType, tt);
	if(my.job!=="Bard"){
		damEnh+=(min70(intTotal())/6);
	}else{
		damEnh+=(min70(chaTotal())/6);
	}
	damage = (damage+(damage*(damEnh/100)));
	if(tt!==true){
		//%decreases
		var damRed=0;
		if(mob[Slot].level>my.level){
			damRed += mob[Slot].level-my.level;
		}
		if(my.job==="Ranger"){
			if(mob[Slot].riftStatus===true){
				damRed += wardersRiftReduction() - (talent4()*1.25);
			}
		}
		if(damRed>75){ damRed = 75; }
		if(mob[Slot].sanctuary===true){ 
			if(my.job==="Cleric"&&my.talent6>=20){
			}else if(my.job==="Enchanter"&&my.talent12>=20){
			}else{
			damRed=75; 
			}
		}
		damage = ~~(damage-(damage*(damRed/100)));
	}
	if(tt===true){ return M.ceil(damage); }
	if(damage < 1){ damage = 1; }
	//rune check
	damage = ~~(1+damage);
	//commit
	if(mob[Slot].runeHp>0){
		mob[Slot].runeHp-= damage;
		if(mob[Slot].runeHp<=0){ $("#MruneIcon"+Slot).remove(); }
		playAudio("blockBlunt");
	}else{
		mob[Slot].hp-= damage;
		if(proc===true){
			Chat(mob[Slot].name + spellName + " for "+damage+" damage.", 4);
		}
		tint(Slot, mType, .1);
		if(spellName==="Arcane Missiles"&&mob[Slot].hp<=0){ magicMissileAbsorb(Slot); }
	}
	if(GLB.chatMyHit==="On"){
		if(proc!==true){
			if(mob[Slot].name!==''&&spellName!==undefined){
				if("elemental"===spellName){
					// nothing
				}else if("falling"===spellName){
					Chat(mob[Slot].name+" falls for "+damage+" damage.");
				}else{
					Chat(spellName+" hits "+mob[Slot].name+" for "+damage+" "+mType+" damage.", 4);
				}
			}
		}
	}
	if(g.leechEquip>0){
		g.popupHeal((damage*g.leechRatio)*(g.leechEquip));
	}
	if(g.wraithEquip>0){
		if(my.job==="Warrior"||my.job==="Monk"||my.job==="Rogue"){
			//nothing
		}else{
			g.popupMana((g.wraithRatio*damage)*(g.wraithEquip/100));
		}
	}
	if(crit===false||crit===undefined){
		if(spellName!=="elemental"){
			slotMagicDamage(damage, Slot,mType);
		}else{
			slotElementalDamage(damage, Slot, mType);
		}
	}else{
		slotMagicDamageCrit(damage, Slot,mType);
	}
	if(mob[Slot].attackStatus===1){
		attackOn(false);
	}
	g.drawMonsterHp(Slot);
	g.checkForDeadMonsters();
	//attack effects - bad
	if(mob[Slot].sleepStatus===true){
		mob[Slot].sleepStatus=false;
		$("#sleepIcon"+Slot).remove();
	}
	if("Burst of Flame"===spellName){ return M.round(damage); }
	//attack effects - good
	if(my.race==="Dark Elf"){
		if(sanguineTormentStatus===true){
			g.popupHeal(M.ceil(damage/16));
		}
	}
	if(my.job==="Shadow Knight"){
		if(vampiricEmbraceStatus===true){
			var drainChance = M.random()*100;
			if(drainChance>80){
				g.popupHeal(M.ceil(damage/8));
			}
		}
	}
	if(my.race==="Gnome"){
		if(shortCircuitStatus===true){
			var regenMpTick=M.ceil(damage/18);
			g.popupMana(regenMpTick);
		}
	}
	return M.round(damage);
}

g.WarriorDotEnh=function(spellName, Slot, mType, tt){
  var damEnh = 0;
  if(spellName==="Hemorrhage"){
    damEnh+=talent6()*2.1;
  }
  return damEnh;
} 
g.MonkDotEnh=function(){
  return 0;
}
g.RogueDotEnh=function(spellName, Slot, mType, tt){
  var damEnh = 0;
  if(spellName==="Widow Strike"){
    damEnh+=talent11()*7.25;
  }
  return damEnh;
}
g.PaladinDotEnh=function(spellName, Slot, mType, tt){
  var damEnh = 0;
  if(tt!==true){
    if(my.talent10>=20){
      if(mob[Slot].stunStatus===true){
        damEnh+=40;
      }
    }
    if(my.talent7>=20){
      if(mob[Slot].blindStatus===true){
        damEnh+=30;
      }
    }
  }
  if(yaulpStatus===true){ 
    damEnh+=yaulpBonus; 
  }
  return damEnh;
}    
g.ShadowKnightDotEnh=function(spellName, Slot, mType, tt){
  var damEnh = 0;
  if(spellName==="Dooming Darkness"){
    damEnh+=talent8()*3.6;
  }else if(spellName==="Heat Blood"){
    damEnh+=talent12()*5.7;
  }
  if(tt!==true){
    if(mob[Slot].fearStatus===true){
      damEnh+=talent11()*.85;
    }
    if(my.talent12>=20){
      if(mob[Slot].heatBloodTickCount>0){
        damEnh+=15;
      }
    }
  }
  return damEnh;
}    
g.RangerDotEnh=function(spellName, Slot, mType, tt){
  var damEnh = 0;
  if(spellName==="Faerie Flame"){
    damEnh+=talent7()*3.1;
  }
  if(indoorStatus===false){	
    damEnh+=20;
  }
  if(mob[Slot].faerieFlameTickCount>0&&tt!==true){ 
    damEnh+=15; 
  }
  return damEnh;
}    
g.BardDotEnh=function(){
  return 0;
}
g.DruidDotEnh=function(spellName, Slot, mType, tt){
  var damEnh = 0;
  if(spellName==="Drones of Doom"){
    damEnh+=talent1()*6.2;
  }else if(spellName==="Drifting Death"){
    damEnh+=talent10()*2.5;
  }else if(spellName==="Volcano"){
    damEnh+=talent12()*6.2;
  }else if(spellName==="Earthquake"&&!tt){
	screenShake(1,4,4,100);
  }
  if(indoorStatus===false){	
    damEnh+=20;
  }
  return damEnh;
}    
g.ClericDotEnh=function(spellName, Slot, mType, tt){
  var damEnh = 0;
  if(mob[Slot].martyr===true&&tt!==true){
    damEnh+=(talent6()*12.5);
    damEnh+=30;
  }
  return damEnh;
}    
g.ShamanDotEnh=function(spellName, Slot, mType, tt){
  var damEnh = 0;
  if(spellName==="Scourge"){
    damEnh+=talent5()*6.5;
  }else if(spellName==="Affliction"){
    damEnh+=talent7()*4.2;
  }else if(spellName==="Devouring Plague"){
    damEnh+=talent8()*4.8;
  }
  if(mob[Slot].afflictionStatus===true&&tt!==true){ 
    damEnh+=10; 
  }
  if(bloodlustStatus===true){ 
    damEnh+=60; 
  }
  return damEnh;
}    
g.NecromancerDotEnh=function(spellName, Slot, mType, tt){
  var damEnh = 0;
  if(spellName==="Cascading Darkness"){
    damEnh+=talent10()*5.8;
  }else if(spellName==="Ignite Blood"){
    damEnh+=talent2()*4.7;
  }else if(spellName==="Bond of Death"){
    damEnh+=talent3()*3.6;
  }else if(spellName==="Asystole"){
    damEnh+=talent12()*5.2;
  }
  if(tt!==true){
    if(mob[Slot].fearStatus===true){
      damEnh+=talent11()*1.33;
    }
    if(my.talent7>=20){
      if(mType==="poison"&&M.random()>.76){
        activateCorpseExplosion();
      }
    }
  }
  if(my.talent12>=20){
    if(shieldHp>0){
      damEnh+=15;
    }
  }
  return damEnh;
}    
g.EnchanterDotEnh=function(spellName, Slot, mType, tt){
  var damEnh = 0;
  if(spellName==="Gasping Embrace"){
    damEnh+=talent9()*5.9;
  }
  if(my.talent4>=20){
    if(shieldHp>0){
      damEnh+=20;
    }
  }
  if(mob[Slot].tashaniaStatus===true&&tt!==true){ 
    damEnh+=(abjurationTotal()/20); 
  }
  return damEnh;
}
g.MagicianDotEnh=function(){
  return 0;
}
g.WizardDotEnh=function(){
  return 0;
}
function TTdot(max, percent, mType, skillName){
	var min = max*percent;
	var a=[];
	a[0]="<span class='green'>"+g.myDotDamage(min, 0, mType, skillName, true)+"</span>";
	a[1]="<span class='green'>"+g.myDotDamage(max, 0, mType, skillName, true)+"</span>";
	return a;
}
g.myDotDamage = function(damage, Slot, mType, spellName, tt){
	if(tt!==true){
		if(mob[Slot].name===""){ return; }
		//damage negation
		if(mob[Slot].stasisFieldStatus===true){
			damage = 0;
			g.slotDamage(damage, Slot);
			return;
		}
		if(mType!=="physical"){
			var r1 = mob[Slot][mType];
			if (Set.ArchMage >= 6) {
				r1 += 45;
			}
			if (Set.HighPriest >= 6) {
				r1 += (r1 + 100)/2;
			}
			// mob resists
			damage=damage*(r1/100);
		}
		var crit=false;
		if(checkCrit()===true){
			crit=true;
			damage+=(damage*(g.criticalDamage()));
		}
	}
	//%increases
	var damEnh =0;
	damEnh+=g.enhanceAllEquip;
	damEnh += g['enhance'+mType[0].toUpperCase() + mType.slice(1)+'Equip'];
	if(my.race==="Barbarian"){
		if(ancestralRampageStatus===true){ damEnh+=100; }
	}
	if(secondWindStatus===true){
		damEnh += 25;
	}
	if(tt!==true){
		if(Set.Willow>=6){
			if(mob[Slot].rootStatus>0){
				damEnh+=30;
			}
		}
	}
	//talents dot
	damEnh += g[JOB.DotEnh](spellName, Slot, mType, tt);
	if(mType!=="physical"){
		damEnh+=(min70(intTotal())/6);
	}
	damage = (damage+(damage*(damEnh/100)));
	//%decreases
	if(tt!==true){
		var damRed=0;
		if(mob[Slot].level>my.level){
			damRed += mob[Slot].level-my.level;
		}
		if(my.job==="Ranger"){
			if(mob[Slot].riftStatus===true){
				damRed += wardersRiftReduction() - (talent4()*1.25);
			}
		}
		if(damRed>75){ damRed = 75; }
		if(mob[Slot].sanctuary===true){ 
			if(my.job==="Cleric"&&my.talent6>=20){
			}else if(my.job==="Enchanter"&&my.talent12>=20){
			}else{
			damRed=75; 
			}
		}
		damage = (damage-(damage*(damRed/100)));
	}
	damage=M.ceil(damage);
	if(tt===true){ 
		return damage;
	}
	if(damage < 1){ damage = 1; }
	if(g.leechEquip>0){
		g.popupHeal((damage*g.leechRatio)*(g.leechEquip));
	}
	if(g.wraithEquip>0){
		if(my.job==="Warrior"||my.job==="Monk"||my.job==="Rogue"){
			//nothing
		}else{
			g.popupMana((g.wraithRatio*damage)*(g.wraithEquip/100));
		}
	}
	//rune check
	if(mob[Slot].runeHp>0){
		mob[Slot].runeHp-=damage;
		if(mob[Slot].runeHp<=0){ $("#MruneIcon"+Slot).remove(); }
	}else{
		mob[Slot].hp-=damage;
	}
	g.popupDotDamage(damage,Slot,mType,crit);
	tint(Slot, mType, .033);
	if(my.job==="Shaman"){
		if(spellName==="Devouring Plague"){
			g.popupHeal(damage*.3,true);
			if(my.talent8>=20){
				g.popupMana(damage*.1);
				mob[Slot].mp-=1;
				if(mob[Slot].mp=0){ 
					mob[Slot].mp=0; 
				}
			}
		}
	}
	if(my.job==="Necromancer"){
		if(spellName==="Bond of Death"){
			g.popupHeal(damage,true);
		}
	}
	if(mob[Slot].attackStatus===1){
		attackOn(false);
	}
	g.drawMonsterHp(Slot);
	g.checkForDeadMonsters();
	//attack effects - bad
	if(mob[Slot].sleepStatus===true){
		mob[Slot].sleepStatus=false;
		$("#sleepIcon"+Slot).remove();
	}
	if(my.race==="Dark Elf"){
		if(sanguineTormentStatus===true){
			g.popupHeal(M.ceil(damage/16));
		}
	}
	if(my.race==="Gnome"){
		if(shortCircuitStatus===true){
			var regenMpTick=M.ceil(damage/18);
			g.popupMana(regenMpTick);
		}
	}
	return damage;
}

function animateAutoAttack(Slot, identifyRightHand){
	if(mob[Slot].attackStatus===1||
	mob[Slot].name===""||
	mob[Slot].charmStatus===true){
		return;
	}
	if(my.dualWield===0){
		if(identifyRightHand===false){
			return;
		}
	}
	var cX=0;
	if(identifyRightHand===true){
		cX = ( MOB[Slot].offsetLeft + mob[Slot].cX + 100);
	}else{
		cX = ( MOB[Slot].offsetLeft + mob[Slot].cX - 100);
	}
	var cY = (MOB[Slot].offsetTop+mob[Slot].cY-100);
	if(identifyRightHand===true){
		if(P.eq[12].type==="slashed"||
		P.eq[12].type==="cleaved"||
		P.eq[12].type==="crushed"||
		P.eq[12].type==="smashed"||
		P.eq[12].type==="staff"){
			if(P.eq[12].yPos===-192&&P.eq[12].xPos===-576){
				animateClaw(cX, cY);
			}else{
				animateSlash(cX, cY);
			}
			if(P.eq[12].type==="smashed"||
			P.eq[12].type==="staff"){ 
				playAudio("kickHit"); 
			}else{
				playAudio("weapon"+P.eq[12].type);
			}
		}else if(P.eq[12].type==="pierced"){
			animatePierce(cX, cY+M.random()*60-30);
			playAudio("weaponslashed"); 
		}else if(P.eq[12].type==="punched"){
			animatePunch(cX-100+M.random()*10+5, cY+(M.random()*30+35));
			playAudio("weapon"+P.eq[12].type);
		}
	}else{
		if(P.eq[13].type==="slashed"||P.eq[13].type==="crushed"){
			if(P.eq[13].yPos===-192&&P.eq[13].xPos===-576){
				animateClawL(cX, cY);
			}else{
				animateSlashL(cX, cY);
			}
			if(P.eq[13].type==="smashed"||P.eq[13].type==="staff"){ 
				playAudio("kickHit"); 
			}else{
				playAudio("weapon"+P.eq[13].type);
			}
		}else if(P.eq[13].type==="pierced"){
			animatePierceL(cX, cY+M.random()*60-30);
			playAudio("weaponslashed"); 
		}else if(P.eq[13].type==="punched"){
			animatePunchL(cX+M.random()*10+15, cY+(M.random()*30+35));
			playAudio("weapon"+P.eq[13].type);
		}
	}
}
function animateClaw(cX, cY){
	if(GLB.videoSetting!=="High"){return;}
	var s2 = img(P.eq[12].type, 200, 200);
	var e1 = cacheAdd(s2, 5, cX, cY, 0, 0);
	T.to(e1,.125,{
		x:cX-200,
		scaleY:1,
		scaleX:1,
		ease:ez.sin
	});
	T.to(e1,.125,{
		scaleY:0,
		scaleX:0,
		y:cY+200,
		ease:ez.sout,
		delay:.125,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var e2 = cacheAdd(s2, 5, cX, cY-25, 0, 0);
	T.to(e2,.125,{
		x:cX-200,
		scaleY:1,
		scaleX:1,
		ease:ez.sin
	});
	T.to(e2,.125,{
		scaleY:0,
		scaleX:0,
		y:cY+175,
		ease:ez.sout,
		delay:.125,
		onComplete:function(){
			cRem(5, e2);
		}
	});
	var e3 = cacheAdd(s2, 5, cX, cY+25, 0, 0);
	T.to(e3,.125,{
		x:cX-200,
		scaleY:1,
		scaleX:1,
		ease:ez.sin
	});
	T.to(e3,.125,{
		scaleY:0,
		scaleX:0,
		y:cY+225,
		ease:ez.sout,
		delay:.125,
		onComplete:function(){
			cRem(5, e3);
		}
	});
}
function animateClawL(cX, cY){
	if(GLB.videoSetting!=="High"){return;}
	var s2 = img(P.eq[13].type+"L", 200, 200);
	var e1 = cacheAdd(s2, 5, cX, cY, 0, 0);
	T.to(e1,.125,{
		scaleX:1,
		scaleY:1,
		ease:ez.sin
	});
	T.to(e1,.125,{
		scaleX:0,
		scaleY:0,
		x:cX+200,
		y:cY+200,
		ease:ez.sout,
		delay:.125,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var e2 = cacheAdd(s2, 5, cX, cY-25, 0, 0);
	T.to(e2,.125,{
		scaleX:1,
		scaleY:1,
		ease:ez.sin
	});
	T.to(e2,.125,{
		scaleX:0,
		scaleY:0,
		x:cX+200,
		y:cY+175,
		ease:ez.sout,
		delay:.125,
		onComplete:function(){
			cRem(5, e2);
		}
	});
	var e3 = cacheAdd(s2, 5, cX, cY+25, 0, 0);
	T.to(e3,.125,{
		scaleX:1,
		scaleY:1,
		ease:ez.sin
	});
	T.to(e3,.125,{
		scaleY:0,
		scaleX:0,
		x:cX+200,
		y:cY+225,
		ease:ez.sout,
		delay:.125,
		onComplete:function(){
			cRem(5, e3);
		}
	});
}
function animateSlash(cX, cY){
	if(GLB.videoSetting!=="High"){return;}
	var img1=P.eq[12].type;
	if(P.eq[12].type==="staff"){
		img1="smashed";
	}
	var p1 = can(img1, 5, cX, cY, 0, 0);
	p1.image.onload = function(){
		T.to(p1,.125,{
			x:cX-200,
			scaleX:1,
			scaleY:1,
			ease:ez.sin
		});
		T.to(p1,.125,{
			scaleX:0,
			scaleY:0,
			y:cY+200,
			ease:ez.sout,
			delay:.125,
			onComplete:function(){
				cRem(5, p1);
			}
		});
	}
}
function animateSlashL(cX, cY){
	if(GLB.videoSetting!=="High"){return;}
	var p1 = can(P.eq[13].type+"L", 5, cX, cY, 0, 0);
	p1.image.onload = function(){
		T.to(p1,.125,{
			scaleX:1,
			scaleY:1,
			ease:ez.sin
		});
		T.to(p1,.125,{
			scaleX:.25,
			scaleY:.25,
			x:cX+200,
			y:cY+200,
			ease:ez.sout,
			delay:.125,
			onComplete:function(){
				cRem(5, p1);
			}
		});
	}
}
function animatePierce(cX, cY){
	if(GLB.videoSetting!=="High"){return;}
	var p1 = can(P.eq[12].type, 5, cX, cY, 0, 200);
	p1.image.onload = function(){
		T.to(p1,.1,{
			x:cX-200,
			scaleX:1
		});
		T.to(p1, .1, {
			scaleX:.25,
			ease:ez.Qin,
			delay:.1,
			onComplete:function(){
				cRem(5, p1);
			}
		});
	}
}
function animatePierceL(cX, cY){
	if(GLB.videoSetting!=="High"){return;}
	var p1 = can(P.eq[13].type+"L", 5, cX, cY, 0, 200);
	p1.image.onload = function(){
		T.to(p1,.1,{
			scaleX:1
		});
		T.to(p1,.1,{
			x:cX+150,
			scaleX:.25,
			ease:ez.Qin,
			delay:.1,
			onComplete:function(){
				cRem(5, p1);
			}
		});
	}
}
function animatePunch(cX, cY){
	if(GLB.videoSetting!=="High"){return;}
	var p1 = can(P.eq[12].type, 5, cX, cY, 60, 60, true);
	p1.image.onload = function(){
		T.to(p1, .1, {
			scaleX:1.6, 
			scaleY:1.6, 
			rotation:90,
			ease:ez.sin,
			onComplete:function(){
				T.to(p1, .2, {
					scaleX:0,
					scaleY:0,
					rotation:180,
					ease:ez.sout,
					onComplete:function(){
						cRem(5, p1);
					}
				});
			}
		});
	}
}
function animatePunchL(cX, cY){
	if(GLB.videoSetting!=="High"){return;}
	var p1 = can(P.eq[13].type, 5, cX, cY, 60, 60, true);
	p1.image.onload = function(){
		T.to(p1, .1, {
			scaleX:1.6, 
			scaleY:1.6, 
			rotation:90,
			onComplete:function(){
				T.to(p1, .2, {
					scaleX:0,
					scaleY:0,
					rotation:180,
					onComplete:function(){
						cRem(5, p1);
					}
				});
			}
		});
	}
}


function activateCorpseExplosion(){
	corpseExplosionStatus=true;
	function corpseExplosionExpire(){
		corpseExplosionStatus=false;
		g.checkNecromancerSkills();
	}
	corpseExplosionTimeout.kill();
	corpseExplosionTimeout = T.delayedCall(5, corpseExplosionExpire);
	g.checkNecromancerSkills();
}
function comboRatingValue(Slot){
	var x=0;
	x += mob[Slot].maxHp/100;
	if(mob[Slot].rare===0){
		x*=1.25;
	}else if(mob[Slot].rare===2){
		x*=1.5;
	}else if(mob[Slot].rare===3){
		x/=9;
	}
	if(my.difficulty===1){
		x*=2;
	}else if(my.difficulty===2){
		x*=3;
	}
	return ~~x;
}
g.checkForDeadMonsters = function(){
	// clear monster specific variables and continue to attackOff() for battle
	var somethingDied = 0;
	for(var i=0;i<=4;i++){
		if(mob[i].hp<=0&&mob[i].name){
			mob[i].attackStatus=1;
			if(g.autoAttackStatus===1){ var attackButtonStatus = false; }
			if(mob[i].rare===2){ my.championsSlain+=1; }
			if(mob[i].mobMartyr===true){
				mob[i].mobMartyr=false;
				Chat((mob[i].name+" heals all allies!"), 1);
				physicalDamage((mob[i].str*3),i,"uses Martyr's Sacrifice and hits");
				for(var k=0;k<=4;k++){
					if(mob[k].name&&i!==k){
						mob[k].hp+= (mob[i].str*15);
						g.popupHealSlot(mob[i].str*15,1);
					}
				}
			}
			if(mob[i].fireEnchanted){
				mob[i].fireEnchanted=false;
				magicalDamage((mob[i].intel*2),i,"Fiery Explosion","fire");
			}
			if(mob[i].coldEnchanted){
				mob[i].coldEnchanted=false;
				magicalDamage((mob[i].intel*2),i,"Glacial Shatter","cold");
			}
			if(mob[i].lightningEnchanted){
				mob[i].lightningEnchanted=false;
				magicalDamage((mob[i].intel*2),i,"Static Discharge","lightning");
			}
			if(mob[i].poisonEnchanted){
				mob[i].poisonEnchanted=false;
				magicalDamage((mob[i].intel*2),i,"Poison Nova","poison");
			}
			mob[i].attack.kill();
			mob[i].thornsTimer.kill();
			mob[i].spellActive.kill();
			monsterConfuseCooldown.kill();
			mob[i].widowStrikeInterval.kill();
			mob[i].hemorrhageInterval.kill();
			mob[i].thornsActive=1;
			mob[i].lavaShieldActive=1;
			mob[i].furiousScorn=0;
			mob[i].lacerate=0;
			mob[i].castingStatus=false;
			somethingDied=1;
			chainCounter+=1;
			comboRating+=comboRatingValue(i);
			mob[i].snareStatus=false;
			mob[i].faerieFlameTickInterval.kill();
			mob[i].dazeTimer.kill();
			mob[i].dazeStatus=false;
			mob[i].doomingDarknessInterval.kill();
			mob[i].heatBloodInterval.kill();
			mob[i].martyr=false;
			mob[i].togorsInsectsTimeout.kill();
			mob[i].slowStatus=false;
			mob[i].regenStatus=true;
			mob[i].afflictionStatus=false;
			$("#detonateSoul"+i).remove();
			mob[i].riftStatus=false;
			T.to('#orbIcon'+i, .5, {
				opacity:0,
				onComplete:function(){
					$("#orbIcon"+i).remove();
				}
			});
			$(".freezeIcon"+i).remove();
			if(my.job==="Necromancer"){
				activateCorpseExplosion();
			}
			if(my.job==="Warrior"){
				frenziedRampageStatus=0;
				g.checkWarriorSkills();
				frenziedRampageTimeout.kill();
				frenziedRampageTimeout = T.delayedCall(5, frenziedRampageExpire);
			}
			cleanupMobSkills(i);
		}
	}
	if(somethingDied>0){
		if(my.job==="Necromancer"){
			g.checkNecromancerSkills();
		}
		attackOff();
		hideMobTooltip();
	}
}
function hideMobTooltip(){
	NG.tooltip.style.visibility = "hidden";
	if(GLB.tooltipMode==="Long"){
		NG.tooltipmsg.style.display = "block";
	}
}
function killAllMonsters(){
	for(var i=0;i<=4;i++){
		mob[i].attack.kill();
	}
}
function playEnding(){
	window.onbeforeunload = null;
	playMusic("Heroic Demise (2013 - With Choir)");
	var w4 = new C.Bitmap('/classic/backgrounds/nimgaul.jpg');
	stage[8].addChild(w4);
	w4.image.onload = function(){
		var e = w4.getBounds();
		w4.cache(e.x,e.y,e.width,e.height);
		T.set(w4, {
			easel:{
				colorize:'#fab660',
				colorizeAmount:.9
			}
		});
		var s1 = checkTitle();
		s1 = s1.toUpperCase();
		var str = "CONGRATULATIONS!<br><br>"+
				"YOU HAVE DEFEATED NALATOS!<br><br>"+
				"YOU SHALL NOW BE KNOWN AS<br>"+
				s1+" "+my.name.toUpperCase();
		if(diff()===0){
			str+="<br><br>YOUR ADVENTURES CONTINUE IN NIGHTMARE";
		}else if(diff()===1){
			str+="<br><br>YOUR ADVENTURES CONTINUE IN HELL";
		}else if(diff()===2){
			str+="<br><br>YOU HAVE MASTERED NEVERGRIND<br>PLAYING AS THE "+my.job.toUpperCase()+"!";
		}
		str+="<br><br><button id='resetGame'>OK</button>";
		D.getElementById('introText2').innerHTML=str;
	}
}
function bossExplosion(total){
	function doit(count){
		playAudio("explode"+ ~~(M.random()*(3)+1));
		particleBurst(2,'white',0,60,M.random()*2000+1000,3);
		if(++count<total){
			T.delayedCall(.25, doit, [count]);
		}
	}
	doit(0);
}
function killBoss(){
	screenShake(100, 4, 2, 5);
	killAllMonsters();
	bmpTint[2].lightning.alpha=0;
	T.set(bmpTint[2]['lightning'],{
		easel:{
			tint:'#fff',
			tintAmount:1
		}
	});
	var s1 = new Audio();
	s1.src = "/classic/sound1/explode1."+audioExt;
	var s2 = new Audio();
	s2.src = "/classic/sound1/explode2."+audioExt;
	var s3 = new Audio();
	s3.src = "/classic/sound1/explode3."+audioExt;
	var p1 = new Image();
	p1.src = 'images1/tremorFG.png';
	var p2 = new Image();
	p2.src = 'images1/tremorBG.png';
	D.getElementById('intro').style.display='none';
	D.getElementById('intro').style.opacity=0;
	bossExplosion(26);
	playEnding();
	T.to(bmpTint[2].lightning, 7, {
		alpha:1,
		onComplete:function(){
			screenShake(2, 100, 50, 1);
			animateBossExplodeSonicRing(10);
			playAudio("cazic_die");
			flashScreen("#fff", 1, 1);
			MOB[2].style.visibility='hidden';
			particleBurst(2, 'white', 0, 300, 2000, 5);
			T.delayedCall(.25, function(){
				particleBurst(2, 'white', 0, 300, 2000, 4.75);
			});
			T.delayedCall(.5, function(){
				particleBurst(2, 'white', 0, 300, 2000, 4.5);
			});
			T.delayedCall(2, function(){
				T.to('#gameView', 5, {
					opacity:0,
					onComplete:function(){
						D.getElementById('gameView').style.display='none';
						D.getElementById('intro').style.display='block';
						T.to('#intro', 1, {
							delay:1,
							opacity:1
						});
					}
				});
			});
		}
	});
}
function attackOff(){
	if(attackStatus!==0){return;}
	var lastMobSlain = 0;
	var checkQuest = D.getElementById('QindicatorHead').textContent!=="" ? true : false;
	for(var i=0;i<=4;i++){
		if(mob[i].hp<=0&&mob[i].name){ // check multiple deaths
			lastMobSlain=i;
			if(checkQuest===true){
				Qprogress(i);
				save.quests();
			}
			playAudio(mob[i].audio3);
			var ranX = M.ceil(M.random()*60-30);
			var ranY = M.ceil(M.random()*40-20);
			if(mob[i].charmStatus===false){ Chat(("You have slain "+mob[i].name+"!")); }
			if(mob[i].charmStatus===true){ slainPet(); }
			var x1 = MOB[i].offsetLeft;
			var y1 = MOB[i].offsetTop;
			var xWidth = mob[i].imageWidth;
			var xHeight = mob[i].imageHeight;
			// death animation picture and font
			stopMob(i);
			if(i===2&&
				P.Q[diff()].PlaneofFear===2&&
				mob[i].name==="Nalatos, God of Chaos"){
					killBoss();
					g.view="Ending";
			}else{
				hideMob(i, true);
			}
			// loot and exp rewards
			var goldFound = 0;
			if(mob[i].gold){
				goldFound = M.round(mob[i].gold+(mob[i].gold*(g.goldFindEquip/100)));
				if(goldFound>0){ 
					Chat(("You have found "+ goldFound +" gold."),5); 
					my.gold=M.ceil(my.gold+goldFound);
					my.totalGold+=M.ceil(goldFound);
				}
			}
			my.mobsSlain+=1;
			if(mob[i].rare===0){ 
				my.raresSlain+=1; 
			}
			$("#mobIcons"+i).empty();
			if(g.hpKillEquip>0){
				hpKillAbsorb();
			}
			if(g.mpKillEquip>0&&(my.job!=="Warrior"&&my.job!=="Monk"&&my.job!=="Rogue")){
				mpKillAbsorb();
			}
			if(my.job==="Shaman"){
				if(my.talent3>=20){
					if(mob[i].rootStatus>0){
						var max = minMax((alterationTotal()-50)/8, .75);
						g.popupHeal(max);
						g.popupMana(max);
					}
				}
			}
			if(cityStatus===false){
				// determine drop loot amount
				if(mob[i].rare===0){
					getLoot(i);
				}else if(mob[i].rare===1&&M.random()<.111){
					getLoot(i);
				}else if(mob[i].rare===2){
					getLoot(i);
					getLoot(i);
				}else if(mob[i].rare===3){
					var drops=3+~~(M.random()*3); // 4-6 since loop starts at 0
					if(mob[i].name==="Revenant Viston"||
					mob[i].name==="Falzitherin"||
					mob[i].name==="Chief Grimden"||
					mob[i].name==="Arcturin, the Lich King"||
					mob[i].name==="Sentoth, Lord of Rapture"||
					mob[i].name==="Vixen Sarmina"){
						drops-=1;
					}
					for(var j=0;j<=drops;j++){
						getLoot(i);
					}
				}
			}
			mob[i].name="";
			mob[i].rare=1;
			mob[i].rootStatus=0;
			if(detonateSoulStatus===true){
				var regenMpTick=M.ceil(mob[i].maxHp/50);
				g.popupMana(regenMpTick);
			}
			//exp mod
			var x = my.level;
			var y = mob[i].level;
			var lvlDiff = x - y;
			var earned = 1;
			if(lvlDiff > 30){
				earned = 0;
			}else if(lvlDiff > 20){
				earned = .2;
			}else if(lvlDiff > 15){
				earned = .4;
			}else if(lvlDiff > 10){
				earned = .6;
			}else if(lvlDiff > 5){
				earned = .8;
			}else if(lvlDiff > 2){
				earned = .9;
			}else{
				earned = 1;
			}
			// figure out exp bonuses
			var percentBonus = 1;
			var chainPercentBonus = 0;
			var expBonus = 0;
			var mobExp = mob[i].xp;
			if (chainCounter>1){
				//bonus exp only here
				if (my.level - mob[i].level < 30){
					var chainBonus = chainCounter;
					// more than 150% bonus exp is not possible
					if(chainBonus>100){ chainBonus=100; }
					chainPercentBonus = chainBonus/66.66;
					percentBonus += chainPercentBonus;
				}
			}
			if(my.race==="Halfling"){ 
				percentBonus += .05; 
			}
			percentBonus += g.expFindEquip/100;
			g.oldExp = my.exp;
			// reduce
			mob[i].xp = (mob[i].xp * earned);
			// popup bonus
			expBonus = M.round(chainPercentBonus * mob[i].xp);
			popupCombo(i,chainCounter,expBonus);
			// enhance
			if (x === 99 || earned === 0){
				mob[i].xp = 0;
			} else {
				mob[i].xp = M.round(mob[i].xp * percentBonus);
			}
			$.ajax({
				url: '/classic/php/game1.php',
				data:{
					run: "updateExpGold", // add exp
					lastName: my.lastName,
					title: my.title,
					level: x,
					job: my.job,
					race: my.race,
					mobExp: mobExp,
					Slot: i,
					exp: mob[i].xp,
					gold: goldFound,
					name: my.name
				}
			}).done(function(data){
				var x = data*1;
				if (x){
					my.exp += x;
					if(my.exp>103835784){
						my.exp=103835784;
					}
					Chat("You have earned "+x+" experience!",2);
					battleExperienceTotal+= x;
					checkLevelUp();
					drawExpBar();
				}
			}).fail(function(data){
				failToCommunicate();
			});
		}
	}
	if(my.gold>999999999){ my.gold=999999999; }
	$('#inventoryGoldAmount').text(my.gold);
	CStat();
	my.title=checkTitle();
	QupdateJournal(undefined, mySubzone(), true);
	// retarget automatically, attack, and break function
	if(countMobs()>0){
		attackStatus=0;
		if(mob[TGT].name===""){ 
			setD('addmonsterId', true);
			BGP('addmonsterId', "0 -300%");
			addMonsterTimer.kill();
			addMonsterTimer = T.delayedCall(.5, resetAddMonster);
			timerTick(D.getElementById('addmonsterId'),.5,'addmonsterId');
			targetNextMob();
			QMsg("Combo Rating: "+getComboRating()+"!", 0, 0, 1500);
		}
		return;
	}
	// if no monsters are found finish the function and return to non-combat panel
	rapidShotDelay.kill();
	castingSpell = 1;
	castingGlobal = 1;
	Mname="";
	for(var i=0;i<=4;i++){
		mob[i].attackStatus=1;
		mob[i].name="";
		mob[i].ID=0;
		mob[i].hp=0;
	}
	monsterConfuseCooldown.kill();
	myAttack.kill();
	myAttack2.kill();
	petAttack.kill()
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
	$NG.mobBar.css("visibility","hidden").attr("class","nameplateBlack");
	NG.mobName.textContent=mob[TGT].name;
	NG.mobLevel.textContent=mob[TGT].level;
	NG.mobTraits.innerHTML="";
	attackStatus=1;
	clearMobIcons();
	cancelMySpell(true);
	reportBattleStats();
	setD('addmonsterId', true);
    BGP('addmonsterId', "0 -300%");
	addMonsterTimer.kill();
	addMonsterTimer = T.delayedCall(2, resetAddMonster);
	timerTick(D.getElementById('addmonsterId'),2,'addmonsterId');
	save.my();
	if(g.showPortal){
		makePortal();
	}
	if(g.lastDrop){
		var x=g.lastDrop;
		var z=g.lastDrop.replace(/ /g, '_');
		z = z.replace(/'/g, '%27');
		g.lastDrop='';
		T.delayedCall(1.5, function(){
			Chat("While you're resting, check out <a target='_blank' href='https://nevergrind.com/wiki/index.php?title="+z+"'>"+x+"</a> on the wiki.");
		});
	}
}
function timeBonus(){
	var x = chainCounter*8 / ((new Date()-battleStart)/1000);
	if(x>2){ 
		x=2;
	}
	return x;
}
function getComboRating(){
	return ~~(comboRating+(comboRating*timeBonus()));
}
function reportBattleStats(){
	//battle report
	battleDuration = (new Date()-battleStart)/1000;
	battleDps = (battleDamageTotal/battleDuration).toFixed(1);
	comboRating = getComboRating();
	var combatString = ("Chain Combo: "+chainCounter).fontcolor("#ffff00");
	combatString+=("<br>Combo Rating: "+comboRating+"").fontcolor("#ffff00");
	combatString+=("<br>Time Bonus: "+fix(timeBonus()*100)+"%").fontcolor("#ffff00");
	combatString+=("<br>Experience Earned: "+battleExperienceTotal+"").fontcolor("#ffff00");
	combatString+=("<br><br>Hits: "+totalHits+"<br>Total Damage: "+battleDamageTotal).fontcolor("#ffffdd");
	combatString+=("<br>DPS: "+battleDps+'<br>').fontcolor("#ee4444");
	if(battlePhysicalTotal){ 
		combatString+=("<br>Physical Damage: "+battlePhysicalTotal+' -  '+((battlePhysicalTotal/battleDamageTotal)*100).toFixed(1)+'%').fontcolor("#ffffdd"); 
	}
	if(battlePoisonTotal){ 
		combatString+=("<br>Poison Damage: "+battlePoisonTotal+' -  '+((battlePoisonTotal/battleDamageTotal)*100).toFixed(1)+'%').fontcolor("#00ff00"); 
	}
	if(battleMagicTotal){ 
		combatString+=("<br>Arcane Damage: "+battleMagicTotal+' -  '+((battleMagicTotal/battleDamageTotal)*100).toFixed(1)+'%').fontcolor("#ff00ff"); 
	}
	if(battleLightningTotal){ 
		combatString+=("<br>Lightning Damage: "+battleLightningTotal+' -  '+((battleLightningTotal/battleDamageTotal)*100).toFixed(1)+'%').fontcolor("#ffff00"); 
	}
	if(battleColdTotal){ 
		combatString+=("<br>Cold Damage: "+battleColdTotal+' -  '+((battleColdTotal/battleDamageTotal)*100).toFixed(1)+'%').fontcolor("#0088ff"); 
	}
	if(battleFireTotal){ 
		combatString+=("<br>Fire Damage: "+battleFireTotal+' -  '+((battleFireTotal/battleDamageTotal)*100).toFixed(1)+'%').fontcolor("#ff0000"); 
	}
	if(battlePetDamage){ 
		combatString+=("<br>Pet Damage: "+battlePetDamage+' -  '+((battlePetDamage/battleDamageTotal)*100).toFixed(1)+'%').fontcolor("#ffffdd"); 
	}
	if(battleDSDamage){ 
		combatString+=("<br>Damage Shield Damage: "+battleDSDamage+' -  '+((battleDSDamage/battleDamageTotal)*100).toFixed(1)+'%').fontcolor("#ffffdd"); 
	}
	if(battleDamageTaken){
		combatString+=("<br><br>Damage Received: "+battleDamageTaken).fontcolor("#ffffdd")+
		('<br>DRS: '+(battleDamageTaken/battleDuration).toFixed(1)).fontcolor("#ee4444"); 
	}
	if(g.view==="Game"){
		D.getElementById('battleReportContent').innerHTML=combatString;
		if(battleDamageTotal>0){
			T.killDelayedCallsTo('#battleReport');
			T.to('#battleReport', .5, {
				delay:2,
				scale:1,
				opacity:1,
				visibility:'visible', 
				ease:ez.Bout
			});
		}
	}
	if(bardSingStatus===true){ bardSinging(); }
	checkZoneCombo();
	$.ajax({
		url: '/classic/php/game1.php',
		data:{
			run: "updateCombo",
			rating: comboRating,
			name:my.name
			
		}
	}).fail(function(data){
		failToCommunicate();
	});
}
function hpKillAbsorb(){
	g.popupHeal(M.ceil(g.hpKillEquip));
}
function mpKillAbsorb(){
	var regenMpTick=g.mpKillEquip;
	g.popupMana(M.ceil(regenMpTick));
}
function cleanupMobSkills(Slot){
	mob[Slot].skill1="";
	mob[Slot].skill2="";
	mob[Slot].skill3="";
	mob[Slot].skill4="";
	mob[Slot].harmTouch=1;
	mob[Slot].rune=1;
	mob[Slot].skeleton=1;
	mob[Slot].wolf=1;
	mob[Slot].elemental=1;
	mob[Slot].thorns=1;
	mob[Slot].lavaShield=1;
	mob[Slot].resolution=1;
	mob[Slot].enrageStatus=false;
	mob[Slot].ironMaidenStatus=false;
	mob[Slot].flurryStatus=false;
	mob[Slot].ampMagicStatus=false;
	mob[Slot].sanctuaryStatus=false;
	mob[Slot].barrierStatus=false;
	mob[Slot].drainStatus=false;
	mob[Slot].silenceStatus=false;
}

// Determine monster damage
function mobDamage(Slot, fleeFlag2){
	var o = mob[Slot];
	if(o.stunStatus===true||
		o.fearStatus===true||
		o.sleepStatus===true||
		o.frozenStatus===true||
		o.stasisFieldStatus===true
		||o.fallingStatus===true||
		evadeStatus===true||
		cityStatus===true){
		mob[Slot].attack = T.delayedCall(.1, function(){
			mobDamage(Slot);
		});
		return;
	}
	if(o.hp<=0||my.hp<=0||o.attackStatus===1){ return; }
	g.checkForDeadMonsters();
	mob[Slot].attack.kill();
	//trigger single-use skills
	var zag = countMobs();
	if(o.charmStatus===false){
		if(zag<5){
			if(o.summoner===true){
				if(o.wolf===0){ 
					monsterSummonWolf(Slot); 
					return; 
				}else if(o.skeleton===0){ 
					monsterSummonSkeleton(Slot); 
					return; 
				}else if(o.elemental===0){ 
					monsterSummonElemental(Slot); 
					return; 
				}else{
					monsterSummonSkeleton(Slot); 
					return; 
				}
			}else{
				if(o.wolf===0){ 
					monsterSummonWolf(Slot); 
					return; 
				}
				if(o.skeleton===0){
					monsterSummonSkeleton(Slot); 
					return; 
				}
				if(o.elemental===0){ 
					monsterSummonElemental(Slot); 
					return; 
				}
			}
		}
		if(o.harmTouch===0){ 
			monsterHarmTouch(Slot); 
			return; 
		}
		if(o.silenceStatus===true){
			if(castingSpell===0&&invincibleStatus===false){
				monsterSilence(Slot);
				return;
			}
		}
	}
	if(o.rune===0){ monsterRune(Slot); return; }
	if(o.thorns===0){ monsterThorns(Slot); return;}
	if(o.lavaShield===0){ monsterLavaShield(Slot); return; }
	if(o.resolution===0){ monsterResolution(Slot); return; }
	if(o.enrageStatus===true&&o.flurry===false&&o.rootStatus<=0){
		var skillCheck = M.random()*100;
		if(skillCheck > 70){
			monsterEnrage(Slot);
			return;
		}
	}
	if(o.flurryStatus===true&&o.rootStatus<=0||
		(my.job==="Bard"&&my.talent10>=20&&o.charmStatus===true)){
		var skillCheck = M.random()*100;
		if(o.flurry===false){
			if(o.name==="Vixen Sarmina"){ skillCheck=100; }
			if(skillCheck > 70){
				monsterFlurry(Slot);
				return;
			}
		}
	}
	if(o.ampMagicStatus===true&&o.flurry===false){
		var skillCheck = M.random()*100;
		if(skillCheck > 70){
			monsterAmpMagic(Slot);
			return;
		}
	}
	if(o.sanctuaryStatus===true&&o.flurry===false&&TGT===Slot){
		var skillCheck = M.random()*100;
		if(skillCheck > 70){
			monsterSanctuary(Slot);
			return;
		}
	}
	if(o.layHands===true){
		if(o.hp/o.maxHp<.25){
			if(M.random()>.75){
				monsterLayHands(Slot);
				return;
			}
		}
	}
	if(o.ironMaidenStatus===true&&o.flurry===false&&TGT===Slot){
		preload(['images1/ironMaidenIcon.png']);
		var skillCheck = M.random()*100;
		if(o.name==="Sanctum Guardian Ghalentus"){ skillCheck=100; }
		if(skillCheck > 70){
			monsterIronMaiden(Slot);
			return;
		}
	}
	if(o.barrierStatus===true&&o.flurry===false&&TGT===Slot){
		var skillCheck = M.random()*100;
		if(skillCheck > 70){
			monsterBarrier(Slot);
			return;
		}
	}
	//Check for skill chance
	var tl=TM();
	var MonsterSkillChance = M.ceil(M.random()*o.castFreq); 
	// Default 1 in 10 chance of using 2nd skill
	//charm attack
	if(o.charmStatus===true||(my.job==="Cleric"&&my.talent10>=20&&M.random()>.76)){
		if(TGT===charmSlot&&my.job!=="Cleric"){
			resumeMonsterAttack(Slot);
			return;
		}
		if(o.dazeStatus===true){
			var blindChance = M.ceil(M.random()*7);
			if(3 > blindChance){
				Chat(o.name+" is blinded by darkness.");
				resumeMonsterAttack(Slot);
				return;
			}
		}
		var targetCharm = false;
		if(MonsterSkillChance===o.castFreq&&my.job!=="Cleric"){
			monsterSkillCheck(Slot, targetPet, targetCharm);
			return;
		}
		if(my.job==="Cleric"){
			charmSlot=Slot;
		}
		var leftReset = 152+(Slot*244)-(o.imageWidth/2);
		if(charmSlot < TGT){
			T.set(canvas[Slot], {
				rotationY:180
			});
			tl.to(MOB[Slot], .2, {left:"+=30"})
			.to(MOB[Slot], .2, {left:"+=35", bottom:"-=20"})
			.to(MOB[Slot], .2, {left:"-=20"})
			.to(MOB[Slot], .2, {left:leftReset,bottom:floorB});
		}else{
			T.set(canvas[Slot], {
				rotationY:0
			});
			tl.to(MOB[Slot], .2, {left:"-=30"})
			.to(MOB[Slot], .2, {left:"-=35", bottom:"-=20"})
			.to(MOB[Slot], .2, {left:"+=20"})
			.to(MOB[Slot], .2, {left:leftReset,bottom:floorB});
		}
		resumeMonsterAttack(Slot);
		T.delayedCall(.5, function(){
			charmMobHit(Slot);
		});
		enchanterMultiHit(Slot);
		return;
	}
	//pet absorb chance
	if(g.petAlive===true){
		var petAbsorbChance = M.random()*100;
		if(petRootStatus===true){ petAbsorbChance-=15; }
		var petAbsorbStatus = false;
		var necAbs = 50;
		if(my.talent8>=20){ necAbs=43; }
		if(my.job==="Shadow Knight"&&petAbsorbChance>75){ petAbsorbStatus=true; }
		if(my.job==="Necromancer"&&petAbsorbChance>50){ petAbsorbStatus=true; }
		if(my.job==="Magician"&&petAbsorbChance>necAbs){ petAbsorbStatus=true; }
		if(my.job==="Shaman"&&petAbsorbChance>85){ petAbsorbStatus=true; }
		if(o.rootStatus>0){ petAbsorbStatus=true; }
		if(petHp<=0){ petAbsorbStatus=false; }
		var targetPet = false;
		if(petAbsorbStatus===true){
			var targetPet = true;
			// cast spell
			if(MonsterSkillChance===o.castFreq){
				if(o.rootStatus<=0){
					stopMob(Slot);
				}
				monsterSkillCheck(Slot, targetPet, targetCharm);
				return;
			}
			// normal attack
			var xWidth = petWidth/2;
			var leftReset = 152+(Slot*244)-(o.imageWidth/2);
			resetMobAttack(Slot);
			if(o.rootStatus>0&&o.castingStatus===false){
				if( (MOB[5].offsetLeft+xWidth) > (130 + (Slot*320)) ){
					tl.to(MOB[Slot], .2, {left:"+=5"})
					.to(MOB[Slot], .2, {left:"+=5", bottom:"-=5"})
					.to(MOB[Slot], .2, {left:"-=5"})
					.to(MOB[Slot], .2, {left:leftReset,bottom:floorB});
				}else{
					tl.to(MOB[Slot], .2, {left:"-=5"})
					.to(MOB[Slot], .2, {left:"-=5", bottom:"-=5"})
					.to(MOB[Slot], .2, {left:"+=5"})
					.to(MOB[Slot], .2, {left:leftReset,bottom:floorB});
				}
			}else{
				if( (MOB[5].offsetLeft+xWidth) > (130 + (Slot*320)) ){
					tl.to(MOB[Slot], .2, {left:"+=35"})
					.to(MOB[Slot], .2, {left:"+=25", bottom:"-=20"})
					.to(MOB[Slot], .2, {left:"-=25"})
					.to(MOB[Slot], .2, {left:leftReset,bottom:floorB});
				}else{
					tl.to(MOB[Slot], .2, {left:"-=35"})
					.to(MOB[Slot], .2, {left:"-=25", bottom:"-=20"})
					.to(MOB[Slot], .2, {left:"+=25"})
					.to(MOB[Slot], .2, {left:leftReset,bottom:floorB});
				}
			}
			function mobHitsMyPet(){
				var o3 = mob[Slot];
				if(petName===""||!o3.name){ return; }
				var monsterDamage=M.ceil( (M.random()*mobStrength(Slot))*(1-(((petDef)/4)/100) ) );
				monsterDamage+=M.ceil( monsterDamage*( (o3.level*.75) / 100 ) );
				if(monsterDamage<o3.level*.3){ monsterDamage=M.ceil(o3.level*.3); }
				monsterDamage=damagePet(monsterDamage);
				petHp-=monsterDamage;
				Chat((o3.name+" hits "+petName+" for "+monsterDamage+" damage."));
				g.drawMyHp();
				if(petImage==="a fire elemental pet"){ petFlameShield(Slot); }
				if(M.random()>.8){
					if(my.job==="Magician"){ playAudio("elem_hit3"); }
					if(my.job==="Necromancer"||my.job==="Shadow Knight"){ playAudio("skeleton_hit"); }
					if(my.job==="Shaman"){ playAudio("wolf_hit2"); }
				}
				if(petHp<=0&&g.petAlive===true){ slainPet(); }
			}
			T.delayedCall(.5, mobHitsMyPet);
			resumeMonsterAttack(Slot);
			return;
		}
	}
	// charm pet absorb
	if(my.job==="Bard"||my.job==="Enchanter"){
		if(petName !== ""&&mob[charmSlot].hp > 0){
			var petAbsorbChance = M.random()*100;
			var petAbsorbStatus = false;
			var goy=0;
			if(my.job==="Bard"){
				if(my.talent12>=20){
					goy=10;
				}
			}else{
				if(my.talent5>=20){
					goy=16;
				}
			}
			// charmed pet absorb chance
			if(petAbsorbChance > 50-goy){ petAbsorbStatus = true; }
			if(petAbsorbStatus===true){
				var targetCharm = true;
				if(MonsterSkillChance===o.castFreq){
					if(o.rootStatus<=0){
						stopMob(Slot);
					}
					monsterSkillCheck(Slot, targetPet, targetCharm);
					return;
				}
				var monsterDamage=M.ceil( (M.random()*mobStrength(Slot))*(g.mobDefense(charmSlot) ) );
				monsterDamage+=M.ceil( monsterDamage*( (o.level*.75) / 100 ) );
				// Mlvl bonuses
				var leftReset = 152+(Slot*244)-(o.imageWidth/2);
				resetMobAttack(Slot);
				if(o.doubleAttack===false){
					if(charmSlot > Slot){
						tl.to(MOB[Slot], .2, {left:"+=30"})
						.to(MOB[Slot], .2, {left:"+=35", bottom:"-=20"})
						.to(MOB[Slot], .2, {left:"-=20"})
						.to(MOB[Slot], .2, {left:leftReset,bottom:floorB});
					}else{
						tl.to(MOB[Slot], .2, {left:"-=30"})
						.to(MOB[Slot], .2, {left:"-=35", bottom:"-=20"})
						.to(MOB[Slot], .2, {left:"+=20"})
						.to(MOB[Slot], .2, {left:leftReset,bottom:floorB});
					}
				}
				if(monsterDamage<o.level*.3){ monsterDamage=M.ceil(o.level*.3); }
				mob[charmSlot].hp-=monsterDamage;
				Chat((o.name+" hits "+petName+" for "+monsterDamage+" damage."));
				g.drawMyHp();
				g.slotDamage(monsterDamage, charmSlot);
				g.checkForDeadMonsters();
				resumeMonsterAttack(Slot);
				if(mob[charmSlot].sleepStatus===true){
					mob[charmSlot].sleepStatus=false;
					$("#sleepIcon"+charmSlot).remove();
					mobDamage(charmSlot);
				}
				return;
			}
		}
	}
	if(o.rootStatus>0){ MonsterSkillChance=o.castFreq; }
	// if equal to Mfreq, use skill if not flurried/silenced or in a double attack sequence
	if(MonsterSkillChance===o.castFreq){
		monsterSkillCheck(Slot, targetPet, targetCharm);
		return;
	}
	function mobHits(){
		var o2 = mob[Slot];
		if(o2.stunStatus===true||
		o2.fearStatus===true||
		o2.sleepStatus===true||
		o2.frozenStatus===true||
		o2.stasisFieldStatus===true){ 
			return; 
		}
		if(o2.hp<=0||my.hp<=0||attackStatus!==0){ return; }
		var mStr = mobStrength(Slot);
		var monsterDamage = M.ceil( (M.random()*mStr + mStr/6 ) );
		if(o2.enrage===true){ monsterDamage += M.ceil(o2.level/2);	}
		//dodge chance
		if(my.dodge>=1){
			if(skillLevelUp() > my.dodge){
				levelUpDodge();
			}
			if(M.random()*100 < dodgeChance()&&fearStatus===1&&bashStatus===1){
				Chat((o2.name+" tries to hit you, but you dodged!"));
				if(my.job==="Paladin"){
					if(my.talent4>=20){
						repudiation(Slot);
					}
				}
				return;
			}
		}
		if(fearStatus===1&&bashStatus===1){
			//block chance
			if(shieldBlockChance){
				if(M.random() < shieldBlockChance){
					playAudio("shldblk");
					Chat("Your shield blocks the attack!");
					return;
				}
			}
			//parry chance
			if(my.parry>=1){
				if(skillLevelUp() > my.parry){
					levelUpParry();
				}
				if(M.random()*100 < parryChance()&&fearStatus===1&&bashStatus===1){
					if(my.job==="Monk"){
						Chat("You block the attack!");
					}else{
						Chat("You parry the attack!");
					}
					// ranger trueshot arrow
					if(my.job==="Ranger"&&my.level>=6){
						var chance = 10;
						if(o2.snareStatus===true){ chance+=7; }
						if(sowStatus===true){ chance+=7; }
						if(chance>M.random()*100){
							empowerTrueshot+=50;
						}
						if(my.talent4>=20){
							regenHealth(9, "Strands of Ether", 6, -64, 1, true);
						}
					}
					if(P.eq[12].type==="slashed"||P.eq[12].type==="pierced"||P.eq[12].type==="cleaved"){ 
						playAudio("blockSword"); 
					}else{ 
						playAudio("blockBlunt"); 
					}
					myAttack.kill();
					myAttack = T.delayedCall(.25, getDamage);
					autoAttackTimer(.25);
					if(my.job==="Paladin"){
						if(my.talent4>=20){
							repudiation(Slot);
						}
					}
					return;
				}
			}
			//riposte chance
			if(my.riposte>=1){
				if(skillLevelUp() > my.riposte){
					levelUpRiposte();
				}
				if(M.random()*100 < riposteChance()||weaponShieldStatus===true){
					executeRiposte(Slot);
					return;
				}
			}
		}
		if(o2.fallingStatus===true){ return; }
		if(o2.drainStatus===true){
			var goy=.8;
			if(o2.name==="Vixen Sarmina"){
				goy=.5;
			}
			if(M.random()>goy){
				monsterDrain(Slot);
			}
		}
		if(o2.rootStatus>0&&o2.silenceStatus===true){
		}else{
			physicalDamage(monsterDamage,Slot,"hits");
		}
	}
	// animate monster
	if(o.name){
		resetMobAttack(Slot);
		if(o.rootStatus<=0){
			var leftReset = 152+(Slot*244)-(o.imageWidth/2);
			var randomY = 145+M.round(M.random()*30-70);
			var randomLeft1 = M.round(leftReset + M.random()*100-50); //1st attack step
			var randomLeft2 = M.round(leftReset + M.random()*60-30); //2nd attack step
			flipMob(Slot);
			tlMob[Slot] = TM();
			tlMob[Slot].to(MOB[Slot],.5,{
				bezier:{
					curviness:3,
					values:[
						{
							left:randomLeft1, 
							bottom:71,
							scale:1.1
						},{
							left:randomLeft2,
							bottom:62,
							scale:1.2
						}
					]
				},
				force3D:"auto",
				onComplete:function(){
					flipMob(Slot);
					mobHits();
				}
			}).to(MOB[Slot],.4,{
				left:leftReset,
				bottom:floorB,
				ease:ez.Qinout,
				force3D:"auto",
				scale:1
			});
		}
		resumeMonsterAttack(Slot);
	}
}
function charmMobHit(Slot){
	if(!mob[charmSlot].name||!mob[TGT].name||mob[TGT].charmStatus===true){ return; }
	var monsterDamage=M.ceil(M.random()*mobStrength(Slot));
	g.petPhysical(monsterDamage, TGT,"hits");
}
function enchanterMultiHit(Slot){
	if(my.job==="Enchanter"){
		if(my.talent8>0&&alacrityStatus===true){
			function doit5(count, total){
				if(count<total){
					charmMobHit(Slot);
					T.delayedCall(.05, function(){
						doit5(++count, total);
					});
				}
			}
			doit5(0, M.ceil(my.talent8/4));
		}
	}

}
function resetMobAttack(Slot){
	mob[Slot].attackNow = true;
	T.delayedCall(.5, function(){
		mob[Slot].attackNow = false;
	});
}
function flipMob(Slot){
	T.set(canvas[Slot], {
		rotationY:~~(M.random()*2)*180
	});
}
function mobAttackSpeed(Slot){
	var foo = (mob[Slot].speed + slowAmount(Slot));
	if(foo < 500){ foo = 500; }
	return foo;
}
function slowAmount(Slot){
	var slowMod = 0;
	var o = mob[Slot];
	slowMod += o.consonantChain;
	if(o.snareStatus===true || o.chillStatus===true){ slowMod += 1000; }
	var a=alterationTotal();
	if(o.slowStatus===true){ slowMod += 2000; }
	if(o.shiftlessStatus===true){ slowMod += 1500; }
	var zug = false;
	for(var i=0;i<=4;i++){
		if(mob[i].name&&mob[i].zealousAura==true){
			zug = true;
			continue;
		}
	}
	if(zug==true&&o.charmStatus===false){ slowMod-=500; }
	if(o.charmStatus===true){
		if(alacrityStatus===true){ slowMod-=1200; }
		if(anthemDeArmsStatus===true){ slowMod-=1000; }
	}
	if(o.flurry===true){ slowMod = -2500; }
	if(slowMod < -2500){ slowMod = -2500; }
	if(slowMod > 3000){ slowMod = 3000; }
	return slowMod;
}
function resumeMonsterAttack(Slot){
	var x = M.random()*100;
	var d2 = mob[Slot].level*.8;
	if(mob[Slot].doubleAttack===false){
		if((mob[Slot].level > 5)&&(d2 > x)){
			if(mob[Slot].charmStatus===true){
				//cLog("Charmed pet attacks with delay: "+100);
			}
			mob[Slot].doubleAttack=true;
			mobResumeAttackTimer(Slot, 0, 100);
		}else{
			if(mob[Slot].charmStatus===true){
				//cLog("Charmed pet attacks with delay: "+mobAttackSpeed(Slot));
			}
			mobResumeAttackTimer(Slot, 0, mobAttackSpeed(Slot));
		}
	}else{
		if(mob[Slot].charmStatus===true){
			cLog("Charmed pet double attacks with delay: "+mobAttackSpeed(Slot));
		}
		mob[Slot].doubleAttack=false;
		mobResumeAttackTimer(Slot, 0, mobAttackSpeed(Slot));
	}
}
function monsterDrain(Slot){
	var healAmount = (mob[Slot].level*5 + M.random()*mob[Slot].level);
	if(mob[Slot].ampMagicStatus===true){ healAmount=(healAmount+(healAmount*.5)); }
	mob[Slot].hp += ~~healAmount;
	g.popupHealSlot(~~healAmount,Slot);
	if(mob[Slot].hp>mob[Slot].maxHp){ mob[Slot].hp=mob[Slot].maxHp; }
	g.drawMonsterHp(Slot);
	Chat((mob[Slot].name+" drains the life force from your blood!"));
	for(var i=0;i<=9;i++){
		animateDrain(Slot);
	}
}
function animateDrain(Slot){
	var p1 = can('yellowparticle50', 6, 640, 720, 25, 25);
	var x1 = (MOB[Slot].offsetLeft+mob[Slot].cX-12);
	var y1 = (MOB[Slot].offsetTop+mob[Slot].cY-12);
	p1.image.onload = function(){
		T.to(p1, .5, {
			x:x1,
			y:y1,
			onComplete:function(){
				cRem(6, p1);
			}
		});
	}
}
function executeRiposte(Slot){
	var I = P.eq[12].type;
	function goSound(){
		if(I==="slashed"||I==="pierced"||I==="cleaved"){ 
			playAudio("blockSword"); 
		}else{ 
			playAudio("blockBlunt"); 
		}
	}
	var riposteDamage = M.round( ( (M.random()*(P.eq[12].damage*10) + M.random()*(my.level/3) )*(attackFunct()/1500) ) + M.random()*7);
	//2h min bonus
	if(I==="cleaved"||I==="smashed"||"staff"===I){
		if(riposteDamage < (my.level/2.6) ){
			riposteDamage = M.ceil(my.level/2.6);
		}
	}
	//check critical hit
	if(checkCrit()===false){
		//rune active
		if(mob[Slot].runeHp>0){
			mob[Slot].runeHp-=riposteDamage;
			g.slotDamage(riposteDamage,Slot);
			goSound();
		}else{
			Chat(("You riposte for "+riposteDamage+" damage."));
			mob[Slot].hp-=riposteDamage;
			g.slotDamage(riposteDamage,Slot);
			goSound();
		}
	}else{
		var critDamage = M.ceil(riposteDamage+riposteDamage*(g.criticalDamage()));
		//rune active
		if(mob[Slot].runeHp>0){
			mob[Slot].runeHp-=critDamage;
			g.slotDamageCrit(critDamage,Slot);
			goSound();
		}else{
			Chat(("You riposte for "+(critDamage+" ")+"damage."));
			mob[Slot].hp-=critDamage;
			g.slotDamageCrit(critDamage,Slot);
			goSound();
		}
	}
	if(my.job==="Paladin"){
		if(my.talent4>=20){
			repudiation(Slot);
		}
	}
	var identifyRightHand=true;
	if(my.job==="Monk"){ getTpRegen(); }
	g.drawMonsterHp(Slot);
	g.checkForDeadMonsters();
	animateAutoAttack(Slot, identifyRightHand);
}

function physicalDamage(monsterDamage,Slot,skill){
	var o = mob[Slot];
	if(o.name===""){ return false; }
	var savedName = o.name;
	monsterDamage = M.round(monsterDamage*armorPercent(Slot));
	// cleric martyr blessing
	if(o.martyr===true){
		g.popupMana(M.ceil(monsterDamage/2.5));
	}
	//damage negation
	if(my.job==="Shadow Knight"){
		if(my.talent4>=20){
			if(M.random()>.92){
				Chat(o.name+"'s attack is negated by a vortex of shadows.");
				playAudio("fade");
				return false;
			}
		}
	}
	if(weaponShieldStatus===true){
		executeRiposte(Slot);
		return false;
	}
	if(stoneFistStatus===0){
		var dam = minMax((attackFunct()/9),.7);
		if(GLB.videoSetting==="High"){ animateAncestralFlurry(Slot) }
		playAudio("flshhit"+ ~~(M.random()*5+3));
		g.myPhysicalDamage(dam, Slot, "Stone Fist Reversal");
		return false;
	}
	if(evadeStatus===true){
		Chat("You are nowhere to be found.");
		return false;
	}
	if(invincibleStatus===true){
		if(my.job==="Warrior"){
			Chat(("You deflect your opponent's attack."));
			if(my.talent2>=20&&fearStatus===1&&bashStatus===1){ executeRiposte(TGT); }
		}
		if(my.job==="Monk"&&stoneFistStatus===1){ Chat(("Your glowing aura protects you from your opponent's attack.")); }
		if(my.job==="Rogue"){ Chat(("Your shadow absorbs the attack.")); }
		if(my.job==="Paladin"){
			repudiation(Slot);
		}
		if(my.job==="Wizard"){ Chat(("You are protected by a barrier of permafrost.")); }
		return false;
	}
	if(illusiveMistStatus===0){
		monsterDamage=M.ceil(monsterDamage*.5);
	}
	//rogue illusion absorb
	if(mirageStrikeStatus>0){
		if(o.stunStatus===true||
		o.fearStatus===true||
		o.sleepStatus===true||
		o.frozenStatus===true||
		o.stasisFieldStatus===true){
			return false;
		}
		mirageStrikeStatus-=1;
		if(mirageStrikeStatus<=0){ $("#mirageStrikeIcon").remove(); }
		$("#mirageStrikeCount").html(mirageStrikeStatus);
		Chat(("Your mirage absorbs the blow."));
		return false;
	}
	//wizard illusion absorb
	if(mirrorImageStatus>0){
		if(o.stunStatus===true||
		o.fearStatus===true||
		o.sleepStatus===true||
		o.frozenStatus===true||
		o.stasisFieldStatus===true){
			return false;
		}
		mirrorImageStatus-=1;
		if(mirrorImageStatus<=0){ $("#mirrorImagesIcon").remove(); }
		$("#mirrorImagesCount").html(mirrorImageStatus);
		Chat(("Your mirror image absorbs the blow."));
		return false;
	}
	//paladin/cleric blind
	if(o.dazeStatus===true){
		if(3 > M.random()*10){
			Chat(o.name+" is disoriented by blazing light.");
			return false;
		}
	}
	//root stops attacks
	if(o.rootStatus>0){ return false; }
	//%increase
	var damEnh =0;
	if(CLR.martyr===true){
		damEnh+=(talent6()*6.3);
	}
	monsterDamage = ~~(monsterDamage+(monsterDamage*(damEnh/100)));	
	//%reduction - damRed is integer that gets divided by 100 after adding up all reductions
	var damRed = 0;
	if(innerPeaceStatus===0){
		if(my.talent3>=20){ damRed+=(talent3()*1.6); }
	}
	if(graniteVisageStatus===true){ damRed+=50; }
	if(secondWindStatus===true){
		damRed += 25;
	}
	if (Set.Phantasmist >= 6) {
		damRed += 25;
	}
	if(bulwarkStatus===true){ damRed+=(40+talent3()); }
	if(o.phased===true){ damRed+=25; }
	if(my.job==="Ranger"){
		if(o.riftStatus===true){
			damRed += wardersRiftReduction();
		}else{
			if(my.talent4>=1){
				if(M.random()*100 < talent4()*1.45){
					var orbFound=false;
					for(var i=0;i<=4;i++){
						if(mob[i].riftStatus===true){
							orbFound=true;
						}
					}
					if(orbFound===true){
						damRed += 30+conjurationTotal()/5;
					}
				}
			}
		}
	}
	if(o.dronesOfDoomTickCount>0){
		if(my.talent1>=20){
			damRed+=10;
		}
	}
	if(my.job==="Enchanter"){
		if(my.talent3>=20&&discordantBarrierStatus===true){
			damRed+=15;
		}
	}
	if(manaShieldStatus===true){
		damRed=75;
		my.mp -= ~~(monsterDamage*.25);
		g.drawMyMp();
	}
	if(damRed>75){ damRed = 75; }
	monsterDamage = ~~(monsterDamage-(monsterDamage*(damRed/100)));
	//mitigation
	monsterDamage -= M.round(M.random()*physicalMitigation());
	if(monsterDamage<1){ monsterDamage = 1; }
	if(monsterDamage<o.level*.3){ monsterDamage += M.ceil(o.level*.3 + M.random()*(4)); }
	if(o.level<10&&monsterDamage>o.level+5){ monsterDamage = o.level+5; }
	//shielding
	if(alteredStateStatus===true){
		var healAmount=monsterDamage*2;
		g.popupHeal(healAmount);
	}
	if(shieldHp>0){
		playAudio("blockBlunt");
		function reportShield(){
			if(my.job==="Cleric"){
				Chat(("Your guardian angel absorbs the blow."));
				if(shieldHp<=0){ $("#guardianAngelIcon").remove(); }
			}
			if(my.job==="Necromancer"){
				Chat(("Your diamond skin absorbs the blow."));
				if(shieldHp<=0){ $("#diamondSkinIcon").remove(); }
			}
			if(my.job==="Enchanter"){
				Chat(("Your mystic rune absorbs the blow."));
				if(shieldHp<=0){ $("#shieldHpIcon").remove(); }
			}
			if(my.job==="Paladin"){
				Chat("Your protective bubble absorbs the blow.");
				if(shieldHp<=0){ $("#yaulpShieldIcon").remove(); }
			}
			if(my.job==="Bard"){
				Chat("Your shield of songs absorbs the blow.");
				if(shieldHp<=0){ $("#shieldOfSongsIcon").remove(); }
			}
		}
		shieldHp-=monsterDamage;
		reportShield();
		if(o.poisonEnchanted===true){
			var eDmg = M.ceil(M.random()*(monsterDamage/4));
			shieldHp-=eDmg;
			reportShield();
		}
		if(o.lightningEnchanted===true){
			var eDmg = M.ceil(M.random()*(monsterDamage/4));
			shieldHp-=eDmg;
			reportShield();
		}
		if(o.coldEnchanted===true){
			var eDmg = M.ceil(M.random()*(monsterDamage/4));
			shieldHp-=eDmg;
			reportShield();
		}
		if(o.fireEnchanted===true){
			var eDmg = M.ceil(M.random()*(monsterDamage/4));
			shieldHp-=eDmg;
			reportShield();
		}
		var zig = true;
	}else{
		checkSpellKnockback(Slot);
		battleDamageTaken+=monsterDamage;
		my.hp-=monsterDamage;
		playAudio("flshhit1");
		var eDmg=0;
		if(o.poisonEnchanted===true){
			eDmg = M.ceil(M.random()*(monsterDamage/4));
			my.hp-=eDmg;
			Chat((o.name+ " hits YOU for "+eDmg+" poison damage."),1);
		}
		if(o.lightningEnchanted===true){
			eDmg = M.ceil(M.random()*(monsterDamage/4));
			my.hp-=eDmg;
			Chat((o.name+ " hits YOU for "+eDmg+" lightning damage."),1);
		}
		if(o.coldEnchanted===true){
			eDmg = M.ceil(M.random()*(monsterDamage/4));
			my.hp-=eDmg;
			Chat((o.name+ " hits YOU for "+eDmg+" cold damage."),1);
		}
		if(o.fireEnchanted===true){
			eDmg = M.ceil(M.random()*(monsterDamage/4));
			my.hp-=eDmg;
			Chat((o.name+ " hits YOU for "+eDmg+" fire damage."),1);
		}
		if(eDmg){
			battleDamageTaken+=eDmg;
		}
		CStat();
		Chat((o.name+" "+skill+" YOU for "+monsterDamage+" damage."),1);
		var zig = true;
		if(my.job==="Bard"){
			if(my.talent3>=20&&M.random()>.85){
				triggerFrenzy(4000);
			}
		}
	}
	if(o.vampiric===true){
		mob[Slot].hp+=(M.ceil(5+monsterDamage/3));
	}
	if(myCounter===true){
		executeRiposte(Slot);
	}
	g.drawMyHp();
	if(o.lamprey===true){
		if(my.job==="Warrior"||my.job==="Monk"||my.job==="Rogue"){
		}else{
			my.mp-=(M.ceil(monsterDamage/6));
			g.drawMyMp();
		}
	}
	g.drawMonsterHp(Slot);
	if(my.defense < my.level*5){
		if(skillLevelUp() > my.defense){
			levelUpDefense();
		}
	}
	var DSdamage=g.thornsEquip;
	if(my.job==="Ranger"){
		if(my.level>=3){
			var refreshCounterShot = M.ceil(M.random()*(100));
			if(o.snareStatus===true){ refreshCounterShot+=7; }
			if(sowStatus===true){ refreshCounterShot+=7; }
			if(refreshCounterShot>85){
				counterShotStatus=true;
				g.checkRangerSkills();
			}
		}
		if(my.talent2>=20){
			if(M.random()>.75){
				DSdamage += monsterDamage;
				playAudio('TigerA');
			}
		}
		if(shieldOfBramblesStatus===true){
			DSdamage += M.ceil(abjurationTotal()*.04);
		}
		if(thistlecoatStatus===true){
			DSdamage += M.ceil(abjurationTotal()*.0125);
		}
	}
	if(my.job==="Necromancer"){
		if(my.talent11>=20){
			if(M.random()>.8){
				g.boneSpiritFinish(Slot);
			}
		}
	}
	if(shieldOfSpikesStatus===true){
		DSdamage += M.ceil(abjurationTotal()*.11);
	}
	if(shieldOfLavaStatus===true){
		DSdamage += M.ceil( (abjurationTotal()*.18)*(1+(talent2()*12.8)/100) );
	}
	if(my.job==="Shadow Knight"){
		DSdamage+=M.ceil(talent3()*1.7);
	}
	if(DSdamage>0){
		mob[Slot].hp-=DSdamage;
		slotMagicDamage(DSdamage,Slot,'damageShield');
		g.checkForDeadMonsters();
	}
	if(my.job==="Warrior"){ 
		getFuryRegen(monsterDamage); 
	}
	if(my.hp<=0){
		Chat(("You have been slain by "+savedName+"!"),1);
		monsterKilledMe();
	}
	return zig; // you were hit or you weren't. true means hit
}

function magicalDamage(monsterDamage,Slot,spell,mType){
	var o = mob[Slot];
	if(o.name===""){ return; }
	// cleric martyr blessing
	if(o.martyr===true){
		g.popupMana(M.ceil(monsterDamage/2.5));
	}
	if(stoneFistStatus===0){
		if(my.talent2>=20){
			var dam = minMax((attackFunct()/9),.7);
			if(GLB.videoSetting==="High"){ animateAncestralFlurry(Slot) }
			playAudio("flshhit"+ ~~(M.random()*(5)+3));
			g.myPhysicalDamage(dam, Slot, "Stone Fist Reversal");
			return false;
		}
	}
	//damage negation
	if(evadeStatus===true){
		Chat("You are nowhere to be found.");
		return;
	}
	if(invincibleStatus===true){
		if(my.job==="Warrior"){
			Chat(("You deflect your opponent's attack."));
			if(my.talent2>=20&&fearStatus===1&&bashStatus===1){ executeRiposte(TGT); }
		}
		if(my.job==="Monk"){ Chat(("Your glowing aura protects you from your opponent's attack.")); }
		if(my.job==="Rogue"){ Chat(("Your shadow absorbs the attack.")); }
		if(my.job==="Paladin"){
			var dam = minMax((attackFunct()/8),.7);
			animateRepudiation(Slot);
			playAudio("holybolt");
			T.delayedCall(.25, function(){
				g.myPhysicalDamage(dam, Slot, "Repudiation");
			});
		}
		if(my.job==="Wizard"){ Chat(("You are protected by a barrier of permafrost.")); }
		return;
	}
	if(illusiveMistStatus===0){
		monsterDamage=M.ceil(monsterDamage*.5);
	}
	//rogue illusion absorb
	if(mirageStrikeStatus>0){
		if(o.stunStatus===true||
		o.fearStatus===true||
		o.sleepStatus===true||
		o.frozenStatus===true||
		o.stasisFieldStatus===true){
			return;
		}
		mirageStrikeStatus-=1;
		if(mirageStrikeStatus<=0){ $("#mirageStrikeIcon").remove(); }
		$("#mirageStrikeCount").html(mirageStrikeStatus);
		Chat(("Your mirage absorbs "+spell+"."));
		return;
	}
	//wizard illusion absorb
	if(mirrorImageStatus>0){
		if(o.stunStatus===true||
		o.fearStatus===true||
		o.sleepStatus===true||
		o.frozenStatus===true||
		o.stasisFieldStatus===true){
			return;
		}
		mirrorImageStatus-=1;
		if(mirrorImageStatus<=0){ $("#mirrorImagesIcon").remove(); }
		$("#mirrorImagesCount").html(mirrorImageStatus);
		Chat(("Your mirror image absorbs the blow."));
		return;
	}
	//mitigation
	monsterDamage -= M.round(M.random()*(magicMitigation()));
	if(monsterDamage<1){ monsterDamage = 1; }
	//warrior absorb
	if(absorbSpellStatus===0){
		absorbSpellStatus=1;
		$("#absorbSpellIcon, #spellAbsorbImage").remove();
		if(my.talent7===0){
			g.popupHeal(M.ceil(monsterDamage*1.2));
			Chat(("You consume "+spell+" and burn with rage."),3);
		}else{
			playAudio("spellDoneBoom");
			var bonus = (talent7()*30)/100;
			for(var i=0;i<=4;i++){
				if(i>=0){
					if(mob[i].name){
						spellDamage = M.ceil(monsterDamage*bonus);
						var range = (M.random()*(10)+90)/100;
						spellDamage = spellDamage*range;
						g.myMagicDamage(mType.toLowerCase(), spellDamage, i, checkCrit(), "Reflect");
					}
				}
			}
		}
		getFuryRegen(monsterDamage*3);
		return;
	}
	//block chance
	if(fearStatus===1&&bashStatus===1){
		if(shieldBlockChance){
			if(M.random() < shieldBlockChance){
				playAudio("shldblk");
				Chat("Your shield blocks the attack!");
				return;
			}
		}
		if(Set.Warder>=6){
			//parry chance
			if(my.parry>=1){
				if(skillLevelUp() > my.parry){
					levelUpParry();
				}
				if(M.random()*100 < parryChance()&&fearStatus===1&&bashStatus===1){
					if(my.job==="Monk"){
						Chat("You block the attack!");
					}else{
						Chat("You parry the attack!");
					}
					// ranger trueshot arrow
					if(my.job==="Ranger"){
						var chance = 10;
						if(o.snareStatus===true){ chance+=7; }
						if(sowStatus===true){ chance+=7; }
						if(chance>M.random()*100){
							empowerTrueshot+=50;
						}
						if(my.talent4>=20){
							regenHealth(9, "Strands of Ether", 6, -64, 1, true);
						}
					}
					playAudio("blockSword"); 
					myAttack.kill();
					myAttack = T.delayedCall(.25, getDamage);
					autoAttackTimer(.25);
					return;
				}
			}
			//riposte chance
			if(my.riposte>=1){
				if(skillLevelUp() > my.riposte){
					levelUpRiposte();
				}
				if(M.random()*100 < riposteChance()||weaponShieldStatus===true){
					executeRiposte(Slot);
					return;
				}
			}
		}
	}
	//%increase
	var damEnh =0;
	if(CLR.martyr===true){
		damEnh+=(talent6()*6.3);
	}
	monsterDamage = ~~(monsterDamage+(monsterDamage*(damEnh/100)));	
	//%reduction
	var damRed = 0;
	if(innerPeaceStatus===0){
		if(my.talent3>=20){ damRed+=(talent3()*1.6); }
	}
	if(graniteVisageStatus===true){ damRed+=50; }
	if(secondWindStatus===true){
		damRed += 25;
	}
	if(bulwarkStatus===true){ damRed+=(40+talent3()); }
	if(o.phased===true){ damRed+=25; }
	if(my.job==="Ranger"){
		if(o.riftStatus===true){
			damRed += wardersRiftReduction();
		}else{
			if(my.talent4>=1){
				if(M.random()*100 < talent4()*1.45){
					var orbFound=false;
					for(var i=0;i<=4;i++){
						if(mob[i].riftStatus===true){
							orbFound=true;
						}
					}
					if(orbFound===true){
						damRed += 30+conjurationTotal()/5;
					}
				}
			}
		}
	}
	if(o.dronesOfDoomTickCount>0){
		if(my.talent1>=20){
			damRed+=10;
		}
	}
	if(my.job==="Enchanter"){
		if(my.talent3>=20&&discordantBarrierStatus===true){
			damRed+=15;
		}
	}
	if(manaShieldStatus===true){
		damRed=75;
		my.mp -= ~~(monsterDamage*.25);
		g.drawMyMp();
	}
	if(damRed>75){ damRed = 75; }
	monsterDamage = ~~(monsterDamage-(monsterDamage*(damRed/100)));
	if(alteredStateStatus===true){
		var healAmount=monsterDamage*2;
		g.popupHeal(healAmount);
	}
	//cleric shielding
	if(shieldHp>0){
		playAudio("blockBlunt");
		shieldHp-=monsterDamage;
		if(my.job==="Cleric"){
			Chat(("Your guardian angel absorbs the blow."));
			if(shieldHp<=0){ $("#guardianAngelIcon").remove(); }
		}
		if(my.job==="Necromancer"){
			Chat(("Your diamond skin absorbs the blow."));
			if(shieldHp<=0){ $("#diamondSkinIcon").remove(); }
		}
		if(my.job==="Enchanter"){
			Chat(("Your mystic rune absorbs the blow."));
			if(shieldHp<=0){ $("#shieldHpIcon").remove(); }
		}
		if(my.job==="Paladin"){
			Chat("Your protective bubble absorbs the blow.");
			if(shieldHp<=0){ $("#yaulpShieldIcon").remove(); }
		}
		if(my.job==="Bard"){
			Chat("Your shield of songs absorbs the blow.");
			if(shieldHp<=0){ $("#shieldOfSongsIcon").remove(); }
		}
		return;
	}else{
		my.hp-=monsterDamage;
		battleDamageTaken+=monsterDamage;
		CStat();
		if(spell==="Ice Shard"){
			var skillName = "Chilled";
			var buffId = "mobChilledIcon";
			var duration = (15000*((100-g.chillEquip)/100));
			var spriteX = -736;
			mobChilledTimer.kill();
			mobChilledTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
			mobBuffIcon(skillName,buffId,duration,spriteX);
			chillStatus=true;
			chilledTimer.kill();
			chilledTimer = T.delayedCall(duration/1000, mobChillExpire);
			CStat();
		}
		if(spell==="Energy Bolt"){
			if(M.random()>.5){
				Chat(("Your spell has been interrupted by a static discharge!"));
				tlSpellbar.kill();
				NG.spellbardiv.style.display="none";
				castingSpell = 1;
			}
		}
		Chat((o.name + " casts "+spell+" on YOU for "+ monsterDamage + " damage."),1);
	}
	if(o.vampiric){
		mob[Slot].hp+=(M.ceil(monsterDamage/2));
	}
	g.drawMyHp();
	if(o.lamprey){
		if(my.job==="Warrior"||my.job==="Monk"||my.job==="Rogue"){
		}else{
			my.mp-=(M.ceil(monsterDamage/6));
			g.drawMyMp();
		}
	}
	g.drawMonsterHp(Slot);
	checkMyDeathBySkill(Slot);
	if(mType==="Poison"){
		if(g.absorbPoisonEquip>0){
			g.popupHeal(M.ceil((g.absorbPoisonEquip/100)*monsterDamage));
		}
	}else if(mType==="Magic"){
		if(g.absorbMagicEquip>0){
			g.popupHeal(M.ceil((g.absorbMagicEquip/100)*monsterDamage));
		}
	}else if(mType==="Lightning"){
		if(g.absorbLightningEquip>0){
			g.popupHeal(M.ceil((g.absorbLightningEquip/100)*monsterDamage));
		}
	}else if(mType==="Cold"){
		if(g.absorbColdEquip>0){
			g.popupHeal(M.ceil((g.absorbColdEquip/100)*monsterDamage));
		}
	}else if(mType==="Fire"){
		if(g.absorbFireEquip>0){
			g.popupHeal(M.ceil((g.absorbFireEquip/100)*monsterDamage));
		}
	}
	if(my.job==="Warrior"){ getFuryRegen(monsterDamage); }
}
function magicalDotTick(monsterDamage,Slot,spellTicks,tickMessage,mType){
	var o = mob[Slot];
	if(my.hp<0){ return; }
	// cleric martyr blessing
	if(o.martyr===true){
		g.popupMana(M.ceil(monsterDamage/2.5));
	}
	//damage negation
	if(evadeStatus===true){
		Chat("Your location has been revealed!");
		evadeStatus=false;
	}
	if(invincibleStatus===true){
		if(my.job==="Warrior"){
			Chat(("You deflect your opponent's attack."));
			if(my.talent2>=20&&fearStatus===1&&bashStatus===1){ executeRiposte(TGT); }
		}
		if(my.job==="Monk"){ Chat(("Your glowing aura protects you from your opponent's attack.")); }
		if(my.job==="Rogue"){ Chat(("Your shadow absorbs the attack.")); }
		if(my.job==="Paladin"){
			var dam = minMax((attackFunct()/8),.7);
			animateRepudiation(Slot);
			playAudio("holybolt");
			T.delayedCall(.25, function(){
				g.myPhysicalDamage(dam, Slot, "Repudiation");
			});
		}
		if(my.job==="Wizard"){ Chat(("You are protected by a barrier of permafrost.")); }
		return;
	}
	//%decreases
	if(illusiveMistStatus===0){
		monsterDamage=M.ceil(monsterDamage*.5);
	}
	//%increase
	var damEnh =0;
	if(CLR.martyr===true){
		damEnh+=(talent6()*6.3);
	}
	monsterDamage = ~~(monsterDamage+(monsterDamage*(damEnh/100)));	
	//%reduction
	var damRed = 0;
	if(innerPeaceStatus===0){
		if(my.talent3>=20){ damRed+=(talent3()*1.6); }
	}
	if(graniteVisageStatus===true){ damRed+=50; }
	if(secondWindStatus===true){
		damRed += 25;
	}
	if(bulwarkStatus===true){ damRed+=(40+talent3()); }
	if(o.phased===true){ damRed+=25; }
	if(my.job==="Ranger"){
		if(o.riftStatus===true){
			damRed += wardersRiftReduction();
		}else{
			if(my.talent4>=1){
				if(M.random()*100 < talent4()*1.45){
					var orbFound=false;
					for(var i=0;i<=4;i++){
						if(mob[i].riftStatus===true){
							orbFound=true;
						}
					}
					if(orbFound===true){
						damRed += 30+conjurationTotal()/5;
					}
				}
			}
		}
	}
	if(o.dronesOfDoomTickCount>0){
		if(my.talent1>=20){
			damRed+=10;
		}
	}
	if(my.job==="Enchanter"){
		if(my.talent3>=20&&discordantBarrierStatus===true){
			damRed+=15;
		}
	}
	if(manaShieldStatus===true){
		damRed=75;
		my.mp -= ~~(monsterDamage*.25);
		g.drawMyMp();
	}
	if(damRed>75){ damRed = 75; }
	monsterDamage = ~~(monsterDamage-(monsterDamage*(damRed/100)));
	if(monsterDamage<1){ monsterDamage = 1; }
	//shielding
	if(alteredStateStatus===true){
		var healAmount=monsterDamage*2;
		g.popupHeal(healAmount);
	}
	if(shieldHp>0){
		shieldHp-=monsterDamage;
		if(my.job==="Cleric"){
			Chat(("Your guardian angel absorbs the blow."));
			if(shieldHp<=0){ $("#guardianAngelIcon").remove(); }
		}
		if(my.job==="Necromancer"){
			Chat(("Your diamond skin absorbs the blow."));
			if(shieldHp<=0){ $("#diamondSkinIcon").remove(); }
		}
		if(my.job==="Enchanter"){
			Chat(("Your mystic rune absorbs the blow."));
			if(shieldHp<=0){ $("#shieldHpIcon").remove(); }
		}
		if(my.job==="Paladin"){
			Chat("Your protective bubble absorbs the blow.");
			if(shieldHp<=0){ $("#yaulpShieldIcon").remove(); }
		}
		if(my.job==="Bard"){
			Chat("Your shield of songs absorbs the blow.");
			if(shieldHp<=0){ $("#shieldOfSongsIcon").remove(); }
		}
		return;
	}else{
		if(tickMessage===3){
			if(M.random()>.85){
				Chat(("Your spell has been interrupted by a static discharge!"));
				tlSpellbar.kill();
				NG.spellbardiv.style.display="none";
				castingSpell = 1;
			}
		}
		my.hp-=monsterDamage;
		battleDamageTaken+=monsterDamage;
		CStat();
	}
	//tick message
	if(tickMessage===1){ Chat(("Envenom poisons YOU for "+monsterDamage+" damage."),1); }
	if(tickMessage===2){ Chat(("Engulfing Darkness strangles YOU for "+monsterDamage+" damage."),1); }
	if(tickMessage===3){ Chat(("Static Field electrocutes YOU for "+monsterDamage+" damage."),1);	 }
	if(tickMessage===4){ Chat(("Blizzard storms down on YOU for "+monsterDamage+" damage."),1); }
	if(tickMessage===5){ Chat(("Conflagration scorches YOU for "+monsterDamage+" damage."),1); }
	if(o.vampiric){
		mob[Slot].hp+=(M.ceil(monsterDamage/2));
	}
	g.drawMyHp();
	if(o.lamprey){
		if(my.job==="Warrior"||my.job==="Monk"||my.job==="Rogue"){
		}else{
			my.mp-=(M.ceil(monsterDamage/6));
			g.drawMyMp();
		}
	}
	g.drawMonsterHp(Slot);
	checkMyDeathByDot(Slot);
	if(mType==="Poison"){
		if(g.absorbPoisonEquip>0){
			g.popupHeal(M.ceil((g.absorbPoisonEquip/100)*monsterDamage));
		}
	}else if(mType==="Magic"){
		if(g.absorbMagicEquip>0){
			g.popupHeal(M.ceil((g.absorbMagicEquip/100)*monsterDamage));
		}
	}else if(mType==="Lightning"){
		if(g.absorbLightningEquip>0){
			g.popupHeal(M.ceil((g.absorbLightningEquip/100)*monsterDamage));
		}
	}else if(mType==="Cold"){
		if(g.absorbColdEquip>0){
			g.popupHeal(M.ceil((g.absorbColdEquip/100)*monsterDamage));
		}
	}else if(mType==="Fire"){
		if(g.absorbFireEquip>0){
			g.popupHeal(M.ceil((g.absorbFireEquip/100)*monsterDamage));
		}
	}
	if(my.job==="Warrior"){ getFuryRegen(monsterDamage); }
}
function mobChillExpire(){ chillStatus=false; }
//mob finishes casting DoT but does no damage
function mobDotLands(monsterDamage,Slot,spell){
	var o = mob[Slot];
	//rogue illusion absorb
	if(mirageStrikeStatus>0){
		if(o.stunStatus===true||
		o.fearStatus===true||
		o.sleepStatus===true||
		o.frozenStatus===true||
		o.stasisFieldStatus===true){
			return;
		}
		mirageStrikeStatus-=1;
		if(mirageStrikeStatus<=0){ $("#mirageStrikeIcon").remove(); }
		$("#mirageStrikeCount").html(mirageStrikeStatus);
		Chat(("Your mirage absorbs "+spell+"."));
		mob[Slot].envenomTicks = 0;
		mob[Slot].engulfingDarknessTicks = 0;
		mob[Slot].staticFieldTicks = 0;
		mob[Slot].blizzardTicks = 0;
		mob[Slot].conflagrationTicks = 0;
		mob[Slot].dotDamage=0;
		mob[Slot].dotActive.kill();
		return;
	}
	//wizard illusion absorb
	if(mirrorImageStatus>0){
		if(o.stunStatus===true||
		o.fearStatus===true||
		o.sleepStatus===true||
		o.frozenStatus===true||
		o.stasisFieldStatus===true){
			return;
		}
		mirrorImageStatus-=1;
		if(mirrorImageStatus<=0){ $("#mirrorImagesIcon").remove(); }
		$("#mirrorImagesCount").html(mirrorImageStatus);
		Chat(("Your mirror image absorbs the blow."));
		mob[Slot].envenomTicks = 0;
		mob[Slot].engulfingDarknessTicks = 0;
		mob[Slot].staticFieldTicks = 0;
		mob[Slot].blizzardTicks = 0;
		mob[Slot].conflagrationTicks = 0;
		mob[Slot].dotDamage=0;
		mob[Slot].dotActive.kill();
		return;
	}
	if(absorbSpellStatus===0){
		absorbSpellStatus=1;
		$("#absorbSpellIcon,#spellAbsorbImage").remove();
		var newDamage = M.ceil(monsterDamage*4);
		getFuryRegen(monsterDamage*3);

		if(my.talent7===0){
			g.popupHeal(newDamage);
			Chat(("You consume "+spell+" and burn with rage."),3);
		}else{
			playAudio("spellDoneBoom");
			var bonus = (talent7()*30)/100;
			for(var i=0;i<=4;i++){
				if(i>=0){
					if(mob[i].name){
						spellDamage = M.ceil(monsterDamage*bonus);
						var range = (M.random()*(10)+90)/100;
						spellDamage = spellDamage*range;
						g.myMagicDamage(mType.toLowerCase(), spellDamage, i, checkCrit(), "Reflect");
					}
				}
			}
		}
		mob[Slot].envenomTicks = 0;
		mob[Slot].engulfingDarknessTicks = 0;
		mob[Slot].staticFieldTicks = 0;
		mob[Slot].blizzardTicks = 0;
		mob[Slot].conflagrationTicks = 0;
		mob[Slot].dotDamage=0;
		mob[Slot].dotActive.kill();
		return;
	}
	if(my.job==="Warrior"){ getFuryRegen(monsterDamage); }
}


// MONSTER SKILL FUNCTION
function monsterSkillCheck(Slot, targetPet, targetCharm){
	function reset(){
		T.delayedCall(.033, function(){ 
			monsterSkillCheck(Slot, targetPet, targetCharm); 
		});
	}
	stopMob(Slot);
	var foo = ~~(M.random()*(4)+1);
	var mobSkill = mob[Slot]['skill'+foo];
	if(mobSkill==="kick"||
		mobSkill==="bash"||
		mobSkill==="backstab"||
		mobSkill==="shadow kick"){
		if(mob[Slot].rootStatus<=0){
			if(mobSkill==="kick"){
				monsterKick(Slot, targetPet, targetCharm);
				return;
			}else if(mobSkill==="bash"){
				monsterBash(Slot, targetPet, targetCharm);
				return;
			}else if(mobSkill==="backstab"){
				monsterBackstab(Slot, targetPet, targetCharm);
				return;
			}else if(mobSkill==="shadow kick"){
				monsterShadowKick(Slot, targetPet, targetCharm);
				return;
			}
		}else{
			reset();
			return;
		}
	}
	
	if(mob[Slot].silenced===false &&
		mob[Slot].flurry===false){
		// mob spells
		if(mobSkill==="poison cloud"){
			MpoisonCloud(Slot, targetPet, targetCharm);
		}else if(mobSkill==="smite"){
			monsterSmite(Slot, targetPet, targetCharm);
		}else if(mobSkill==="energy bolt"){
			monsterEnergyBolt(Slot, targetPet, targetCharm);
		}else if(mobSkill==="ice shard"){
			monsterIceShard(Slot, targetPet, targetCharm);
		}else if(mobSkill==="fireball"){
			Mfireball(Slot, targetPet, targetCharm);
		}else if(mobSkill==="fear"){
			if(fearStatus===0||mob[Slot].level<20){
				reset();
				return;
			}
			if(targetCharm===true&&mob[charmSlot].fearStatus===true){
				reset();
				return;
			}
			monsterFear(Slot, targetPet, targetCharm);
		}else if(mobSkill==="blind"){
			if(g.blindStatus===0&&targetPet===false&&targetCharm===false){
				reset();
				return;
			}
			monsterBlind(Slot, targetPet, targetCharm);
		}else if(mobSkill==="root"){
			if(rootStatus===0){
				reset();
				return;
			}
			if(targetCharm===true||targetCharm===false){
				reset();
				return;
			}
			monsterRoot(Slot, targetPet, targetCharm);
		}else if(mobSkill==="yawn"){
			if(yawnActive===0&&targetPet===false&&targetCharm===false){
				reset();
				return;
			}
			monsterYawn(Slot, targetPet, targetCharm);
		}else if(mobSkill==="weaken"){
			if(weakenActive===0&&targetPet===false&&targetCharm===false){
				reset();
				return;
			}
			monsterWeaken(Slot, targetPet, targetCharm);
		}else if(mobSkill==="mind drain"){
			monsterMindDrain(Slot, targetPet, targetCharm);
		}else if(mobSkill==="confuse"){
			if(confuseStatus===true){
				reset();
				return;
			}
			monsterConfuse(Slot, targetPet, targetCharm);
		}else if(mobSkill==="mind numb"){
			if(mindNumbActive===0&&targetPet===false&&targetCharm===false){
				reset();
				return;
			}
			monsterMindNumb(Slot, targetPet, targetCharm);
		}else if(mobSkill==="heal"){
			var healTarget=-1;
			if(mob[Slot].hp/mob[Slot].maxHp<.65){
				healTarget=Slot;
			}else{
				if(mob[Slot].charmStatus===false){
					for(var i=0;i<=4;i++){
						if(mob[i].name&&i!==Slot){
							if(mob[i].hp/mob[i].maxHp<.45){
								healTarget=i;
							}
						}
					}
				}
			}
			if(healTarget===-1){
				reset();
				return;
			}
			monsterHeal(Slot, healTarget);
		}else if(mobSkill==="envenom"){
			if(mob[Slot].envenomTicks>0){
				reset();
				return;
			}
			monsterEnvenom(Slot, targetPet, targetCharm);
		}else if(mobSkill==="engulfing darkness"){
			if(mob[Slot].engulfingDarknessTicks>0){
				reset();
				return;
			}
			monsterEngulfingDarkness(Slot, targetPet, targetCharm);
		}else if(mobSkill==="static field"){
			if(mob[Slot].staticFieldTicks>0){
				reset();
				return;
			}
			monsterStaticField(Slot, targetPet, targetCharm);
		}else if(mobSkill==="blizzard"){
			if(mob[Slot].blizzardTicks>0){
				reset();
				return;
			}
			monsterBlizzard(Slot, targetPet, targetCharm);
		}else if(mobSkill==="conflagration"){
			if(mob[Slot].conflagrationTicks>0){
				reset();
				return;
			}
			monsterConflagration(Slot, targetPet, targetCharm);
		}
	}else{
		reset();
	}
}

// Search and consider a battle
function battle(){
	if(hideStatus===0&&((my.job==="Monk"&&my.race!=="Halfling")||my.job==="Necromancer"||my.job==="Shadow Knight")){
		hideStatus=1;
		Chat("You stop feigning your death.");
		if(my.job==="Monk"){
			BGP('feigndeathId', "-1300% 0");
		}else if(my.job==="Shadow Knight"){
			BGP('shdfeigndeathId', "-1400% 0");
		}else if(my.job==="Necromancer"){
			BGP('feigndeath', "-700% 0");
		}
	}
	if(btn.d.addmonsterId===true){return;}
	if(cityStatus===true){
		if(D.getElementById('goldInputWrap').style.display==="none"){
			Chat("You can't fight battles in a city.");
		}
		return;
	}
	hideBattleReport();
	// clear pictures and names if not in battle
	for(var i=0;i<=4;i++){
		MOB[i].style.display='none';
		MOB[i].style.opacity=0;
		stage[i].removeAllChildren();
		canvas[i].style.top = "0px;"
		canvas[i].style.left = "0px";
		MOBNAME[i].style.color='#00FA9A';
		MOBNAME[i].innerHTML='';
	}
	setD('addmonsterId', true);
	BGP('addmonsterId', "0% -300%");
	addMonsterTimer.kill();
	addMonsterTimer = T.delayedCall(.5, resetAddMonster);
	timerTick(D.getElementById('addmonsterId'),.5,'addmonsterId');
	//ambush chance on mob check
	if((hideStatus===1&&ambushStatus===1&&my.level>9&&mySubzone()!==4)){
		var bar = (ambushChance);
		var zil = M.random()*bar;
		if(zil<1){
			ambushStatus=0; // activate ambush
		}
	}
	if(mobsFound()===false){
		battleExperienceTotal=0;
		resetBosses();
		runBonus=0;
		Mname="";
		for(var i=0;i<=4;i++){
			mob[i].hp=0;
			mob[i].name='';
		}
		$NG.mobBar.css("visibility","hidden");
		D.getElementById('mobName').textContent=mob[TGT].name;
		NG.mobLevel.textContent=mob[TGT].level;
		NG.mobTraits.innerHTML="";
	}
	getMonster();
	if(monsterFound===true&&Mname!==""){
		NG.mobBar.style.visibility="visible";
		D.getElementById('mobName').textContent=mob[TGT].name;
		NG.mobLevel.textContent=mob[TGT].level;
		NG.mobTraits.innerHTML="";
		clearMobIcons();
		NG['mobIcons'+newSlotNumber].style.display="block";
		if(mob[TGT].rare===0){
			NG.mobBar.className="ui-draggable";
			NG.mobPlate.src = "/classic/images1/rarePlate.png";
			NG.mobPlate.className = "nameplateGold";
		}else if(mob[TGT].rare==2){
			NG.mobBar.className="ui-draggable";
			NG.mobPlate.src = "/classic/images1/championPlate.png";
			NG.mobPlate.className = "nameplateBlue";
		}else if(mob[TGT].rare==3){
			NG.mobBar.className="ui-draggable";
			NG.mobPlate.src = "/classic/images1/bossPlate.png";
			NG.mobPlate.className = "nameplateRed";
		}else if(mob[TGT].rare===1){
			NG.mobBar.className="ui-draggable";
			NG.mobPlate.src = "/classic/images1/normalPlate.png";
			NG.mobPlate.className = "nameplateBlack";
		}
		NG.mobTraits.innerHTML=mob[newSlotNumber].traits;
		T.set(monsterHpBar1, {
			scaleX:1
		});
		g.drawMonsterHp(2,true);
		// Ambushed upon consideration of mob
		if(hideStatus===1&&Mrare!==3){
			if(ambushStatus===0&&my.level>19&&mob[TGT].attackStatus===1&&cityStatus===false&&enteredWorld===true){ 
				triggerAmbush();
			}
		}
	}
	CStat();
	QupdateJournal(undefined, mySubzone(), true);
	debugReportElements();
	if(loreMsg.length>0){
		while(loreMsg.length>0){
			loreMsg.shift();
		}
		lore();
	}
}
function triggerAmbush(mute){
	T.delayedCall(.75, function(){
		attackOn(false);
		mob[TGT].attackStatus=0;
		ambushStatus=1;
		if(!mute){
			QMsg("Ambush!");
		}
		Chat(("You have been ambushed by "+Mname+"!"),1);
		mob[TGT].attack = T.delayedCall(.75, function(){ 
			mobDamage(TGT); 
		});
		tabTarget();
	});
}
function delayedMonsterTimer(total){
	if(!total){
		total = 1;
	}
	for(var i=0;i<total;i++){
		delayAdd[i].kill();
		delayAdd[i]=T.delayedCall((.511*(i+1)), function(){ 
			addMonster(false,0,0); 
		});
	}
	
}
function addMonster(fleeFlag,Slot,adds){
	if(fearStatus===true
		||bashStatus===true
		||my.hp<=0||paused===true){ 
			return; 
		}
	if(mobsFound()===false&&adds===undefined){
		resetBattleReport();
		battle();
		return;
	}
	var foo=countMobs();
	if(btn.d.addmonsterId===true||mobsFound()===false||foo===0||foo>=5){
		if(adds>=0){ 
			delayAdd[adds] = T.delayedCall(.511, function(){ addMonster(false,0,adds); }); 
		}
		return;
	}
	if(fleeFlag===true){ Chat((mob[Slot].name+" returns to the battle with help from an ally.")); }
    setD('addmonsterId', true);
    BGP('addmonsterId', "0 -300%");
	addMonsterTimer.kill();
	addMonsterTimer = T.delayedCall(.5, resetAddMonster);
	timerTick(D.getElementById('addmonsterId'),.5,'addmonsterId');
	// load random monster and make them appear in a new slot - addmonsterstatus makes it process additional code in getMonster()
	getMonster();
	if(monsterFound===true){
		var Slot = newSlotNumber;
		// new monster slot is named and monster attack is started
		mob[Slot].name=Mname;
		mobResumeAttackTimer(Slot, 0, 1000);
	}
}
function mobResumeAttackTimer(Slot, time, duration){
	var o = mob[Slot];
	if(o.stunStatus===true||
	o.fearStatus===true||
	o.sleepStatus===true||
	o.frozenStatus===true||
	o.stasisFieldStatus===true||
	o.fallingStatus===true||
	evadeStatus===true){
		mob[Slot].attack = T.delayedCall(.1, function(){
			mobResumeAttackTimer(Slot, time, duration);
		});
		return;
	}
	if(time<duration){
		time+=100;
		mob[Slot].attack = T.delayedCall(.1, function(){
			mobResumeAttackTimer(Slot, time, duration);
		});
	}else{
		mobDamage(Slot);
	}
}

function attackOn(melee, petStart){
	if(countMobs()===0){ return; }
	for(var i=0;i<=4;i++){
		if(mob[i].name!==''){
			mob[i].attackStatus=0;
		}
	}
	mob[TGT].attack.kill();
	mob[TGT].attack = T.delayedCall(.25, function(){ 
		mobDamage(TGT);
	});
	if(!petStart){
		if(g.petAlive===true){
			petTarget=TGT;
			togglePetAutoAttackStatus();
		}
	}
	//handle travel button stuff if window is up
	if(travelStatus===0){ 
		var e = D.getElementById("travelId");
		e.className="buttonsManage";
		e.style.backgroundPosition = "-80px 0";
	}
	D.getElementById('worldMap').style.top='-900px';
	travelStatus=1;
	if(melee){
		if(hideStatus===0&&(my.job==="Rogue"||my.race==="Halfling")){ //my ambush
			var Slot = TGT;
			stunTarget(Slot, 5000, -32, 0, "Ambush");
			playAudio("bash");
		}
	}
	T.delayedCall(.1, function(){
		hideStatus=1;
	});
	$("#halflinghideId").css({backgroundPosition:"0 0"});
	$("#roguehideId").css({backgroundPosition:"-200% -100%"});
	T.to(spellCurtain, .1, {
		alpha:0,
		ease:ez.Qin
	});
	CStat();
	if(my.job==="Warrior"){ 
		checkDecisiveBlow(); 
	}
	if(Lmy.autoAttackOption==="On"&&g.autoAttackStatus===1){
		toggleAutoAttackStatus();
	}
}

$(function(){
	$NG.gameView.on('mouseenter','#addmonsterId',function(){
		if(mobsFound()===false){
			NG.tooltipname.innerHTML = "Pull Next Monster";
			NG.tooltipmsg.innerHTML = "Pull a monster to battle. Use while in combat to build chain combos that reward extra gold, experience, and magic find.";
		}else{
			NG.tooltipname.innerHTML = "Pull Random Monster";
			NG.tooltipmsg.innerHTML = "Pull an additional random monster to build combo bonuses. Combo bonuses yield greater experience and treasure.";
		}
	});
	$NG.gameView.on('mouseenter','#runId',function(){
		var foo = (escapeChance()/2).toPrecision(3);
		var d = 6;
		if(my.race==="Halfling"){
			d=5;
		}
		foo = (foo+"%").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Run";
		NG.tooltipmsg.innerHTML = "Cooldown: "+red(d)+" Seconds<BR><BR>You have a "+foo+" chance to successfully run from battle. Failed run attempts increase your escape chance on successive attempts.";
	});
	$NG.gameView.on('mouseenter','#toggleattackId',function(){
		var a=TTphy( (1+attackFunct()/4500)*(P.eq[12].damage*10), .2, "attack", undefined, undefined, true); 
		var b=TTphy( (1+attackFunct()/4500)*(P.eq[13].damage*10), .2, "attack", undefined, undefined, true); 
		var c=TTphy( (1+attackFunct()/4500)*(P.eq[12].damage*10), .5, "attack", undefined, undefined, true); 
		var DAchance = (doubleAttackChance()).toPrecision(3);
		DAchance = (DAchance+"%").fontcolor("#00ff00");
		var DWchance = (dualWieldChance()).toPrecision(3);
		DWchance = (DWchance+"%").fontcolor("#00ff00");
		var weapon1 = (totalHaste1()/1000).toPrecision(2);
		var speed1 = (weapon1+"").fontcolor("#00ff00");
		var weapon2 = (totalHaste2()/1000).toPrecision(2);
		var speed2 = (weapon2+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Auto Attack";
		var s='';
		s += "Toggle your auto attacks on or off.<br><br>";
		if(P.eq[12].type==="cleaved"||
		P.eq[12].type==="smashed"||
		"staff"===P.eq[12].type){
			s+= "Primary Speed: "+speed1+" seconds<br>Primary Damage: "+c[0]+" to "+c[1];
		}else{
			s+= "Primary Speed: "+speed1+" seconds<br>Primary Damage: "+a[0]+" to "+a[1];
		}
		if(P.eq[13].type==="punched"||
		P.eq[13].type==="slashed"||
		P.eq[13].type==="crushed"||
		P.eq[13].type==="pierced"){
			s+= "<br>Secondary Speed: "+speed2+" seconds<br>Secondary Damage: "+b[0]+" to "+b[1];
		}
		if(my.doubleAttack>=1||my.dualWield>=1){
			s+="<br><br>";
			if(my.doubleAttack>=1){
				s += "Double Attack Chance: "+DAchance+"<br>";
			}
			if(my.dualWield>=1){
				s += "Dual Wield Chance: "+DWchance;
			}
		}
		if(my.job==="Bard"){
			if(my.talent2>=20){
				var d=TTmag( attackFunct()/4.2, .8, "magic", "Wistful Tidings");
				s+= "<BR><BR>Wistful Tidings has a "+green("15%")+" chance to strike your target for "+d[0]+" to "+d[1]+" arcane damage.";
			}
			if(my.talent4>=20){
				var a=TTmag( attackFunct()/3, .8, "magic", "Sonic Disruption");
				s+= "<BR><BR>Sonic Disruption has a "+green("8%")+" chance to strike your target for "+a[0]+" to "+a[1]+" arcane damage and stun your target for "+green("1")+" second.";
			}
		}
		if(my.job==="Cleric"){
			if(my.talent5>=20){
				var e=TTmag( attackFunct()/3.4, .8, "magic", "Divine Justice");
				s+= "<BR><BR>Divine Justice has a "+green("15%")+" chance to strike your target for "+e[0]+" to "+e[1]+" arcane damage.";
			}
			if(my.talent8>=20){	
				var f=TTmag( attackFunct()/1.25, .75, "magic", "Vicar's Wrath");
				s+= "<BR><BR>Vicar's Wrath has a "+green("22%")+" chance to strike your target for "+f[0]+" to "+f[1]+" arcane damage if a shield is active.";
			}
		}
		NG.tooltipmsg.innerHTML=s;
	});
	$NG.window3.on('mouseenter','#togglepetattackId',function(){
		NG.tooltipname.innerHTML = "Set Pet Target";
		NG.tooltipmsg.innerHTML = "Set your pet's target.";
	});
	$(".statButton").on('click',function(){
		var foo = $(this).text();
		statTab=foo;
		$(".statButton").css({
			backgroundPosition:"0 0"
		});
		$(this).css({
			backgroundPosition:"0 100%"
		});
		CStat();
	});
});

text = [];
textNum = 0;
function getText(){
	textNum++;
	if(textNum>=40){
		textNum = 0;
	}
	return textNum;
}
function initText(){
	for(var i=0;i<=40;i++){		
		text[i] = new C.Text("", "24px Arial", "#fff");
		text[i].textAlign = "center";
		text[i].shadow = new C.Shadow("#000", 1, 1, 0);
		stage[5].addChild(text[i]);
	}
}
initText();
function setText(S, msg, color, font, y1, x1){
	text[S].set({x:x1, y:y1, font:font+'px Arial', color:color, text:msg, alpha:1});
}
g.damageShieldIncrement = function(damage){
	battleDSDamage+=damage;
}
g.physicalIncrement = function(damage){
	battlePhysicalTotal+=damage;
	totalHits++;
	battleDamageTotal+=damage;
}
g.poisonIncrement = function(damage){
	battlePoisonTotal+=damage;
	totalHits++;
	battleDamageTotal+=damage;
}
g.magicIncrement = function(damage){
	battleMagicTotal+=damage;
	totalHits++;
	battleDamageTotal+=damage;
}
g.lightningIncrement = function(damage){
	battleLightningTotal+=damage;
	totalHits++;
	battleDamageTotal+=damage;
}
g.coldIncrement = function(damage){
	battleColdTotal+=damage;
	totalHits++;
	battleDamageTotal+=damage;
}
g.fireIncrement = function(damage){
	battleFireTotal+=damage;
	totalHits++;
	battleDamageTotal+=damage;
}
// popups
function popupPetDamage(damage,Slot,mType){
	var topAdjust = (MOB[Slot].offsetTop+(mob[Slot].cY));
	if(topAdjust<100){ topAdjust=100; }
	var leftAdjust = ( MOB[Slot].offsetLeft + mob[Slot].cX);
	battlePetDamage+=damage;
	battleDamageTotal+=damage;
	totalHits++;
	if(GLB.videoSetting!=="Low"){
		var S = getText();
		setText(S, damage, "#fff", 18, topAdjust, leftAdjust);
		T.to(text[S], .2, {
			startAt:{
				scaleX:2,
				scaleY:2
			},
			scaleX:1,
			scaleY:1,
			ease:ez.lin
		});
		T.to(text[S],.4,{
			y:"-="+30,
			repeat:1,
			yoyo:true,
			onComplete:function(){
				text[S].text='';
			}
		});
		T.to(text[S],.8,{
			x:'+='+(M.random()*(200)-100)
		});
		T.to(text[S], .4, {
			delay:.4,
			alpha:0
		});
	}
}
function slotElementalDamage(damage,Slot,mType){
	var topAdjust = (MOB[Slot].offsetTop+(mob[Slot].cY));
	if(topAdjust<100){ topAdjust=100; }
	var leftAdjust = ( MOB[Slot].offsetLeft + mob[Slot].cX);
	g[mType+'Increment'](damage);
	if(GLB.videoSetting!=="Low"){
		var y1 = M.random()*(250)+150;
		if(mType==="poison"){
			particleBurst(Slot, "green", "blank", 1, y1, .6);
		}else if(mType==="magic"){
			particleBurst(Slot, "magenta", "blank", 1, y1, .6);
		}else if(mType==="lightning"){
			particleBurst(Slot, "yellow", "blank", 1, y1, .6);
		}else if(mType==="cold"){
			particleBurst(Slot, "aqua", "blank", 1, y1, .6);
		}else if(mType==="fire"){
			particleBurst(Slot, "orange", "blank", 1, y1, .6);
		}
		var S = getText();
		setText(S, damage, "#fff", 18, topAdjust, leftAdjust);
		T.to(text[S], .2, {
			startAt:{
				scaleX:2,
				scaleY:2
			},
			scaleX:1,
			scaleY:1,
			ease:ez.lin
		});
		T.to(text[S],.4,{
			y:"-="+30,
			repeat:1,
			yoyo:true,
			onComplete:function(){
				text[S].text='';
			}
		});
		T.to(text[S],.8,{
			x:'+='+(M.random()*(200)-100)
		});
		T.to(text[S], .4, {
			delay:.4,
			alpha:0
		});
	}
}
g.popupMsg = function(msg, Slot){ // dodge etc
	var topAdjust = (MOB[Slot].offsetTop+(mob[Slot].cY/2));
	if(topAdjust<100){ topAdjust=100; }
	var leftAdjust = ( MOB[Slot].offsetLeft + mob[Slot].cX);
	if(GLB.videoSetting!=="Low"){
		var S = getText();
		setText(S, msg, "#fff", 24, topAdjust, leftAdjust);
		T.to(text[S], .2, {
			startAt:{
				scaleX:2,
				scaleY:2
			},
			scaleX:1,
			scaleY:1,
			ease:ez.lin
		});
		T.to(text[S],.4,{
			y:"-="+60,
			repeat:1,
			yoyo:true,
			onComplete:function(){
				text[S].text='';
			}
		});
		T.to(text[S],.8,{
			x:'+='+(M.random()*(200)-100)
		});
		T.to(text[S], .4, {
			delay:.4,
			alpha:0
		});
	}
}
g.slotDamage = function(damage,Slot,crip,mobvsmob){
	var topAdjust = (MOB[Slot].offsetTop+(mob[Slot].cY/2));
	if(topAdjust<100){ topAdjust=100; }
	var leftAdjust = ( MOB[Slot].offsetLeft + mob[Slot].cX);
	if(mobvsmob===undefined){
		totalHits++;
		battlePhysicalTotal+=damage;
		battleDamageTotal+=damage;
	}
	playAudio("flshhit1");
	if(M.random()>.8){
		if(mob[Slot].audio2==="blankAudio"){
			playAudio("gethit"+M.ceil(M.random()*(4))+"m");
		}else{
			playAudio(mob[Slot].audio2);
		}
	}
	if(GLB.videoSetting!=="Low"){
		if(crip===true){
			var S = getText();
			animateFlyingBlood(Slot, ~~(M.random()*(2)+1));
			setText(S, damage, "#f22", 24, topAdjust, leftAdjust);
		}else{
			var S = getText();
			setText(S, damage, "#fff", 24, topAdjust, leftAdjust);
		}
		T.to(text[S], .2, {
			startAt:{
				scaleX:2,
				scaleY:2,
			},
			scaleX:1,
			scaleY:1,
			ease:ez.lin
		});
		T.to(text[S],.4,{
			y:"-="+60,
			repeat:1,
			yoyo:true,
			onComplete:function(){
				text[S].text='';
			}
		});
		T.to(text[S],.8,{
			x:'+='+(M.random()*(200)-100)
		});
		T.to(text[S], .4, {
			delay:.4,
			alpha:0
		});
	}
}

g.slotDamageCrit = function(damage,Slot){
	var topAdjust = (MOB[Slot].offsetTop+(mob[Slot].cY/2));
	if(topAdjust<100){ topAdjust=100; }
	var leftAdjust = ( MOB[Slot].offsetLeft + mob[Slot].cX);
	totalHits++;
	battlePhysicalTotal+=damage;
	battleDamageTotal+=damage;
	playAudio("flshhit2");
	if(GLB.videoSetting!=="Low"){
		var S = getText();
		animateFlyingBlood(Slot, ~~(M.random()*(2)+1));
		setText(S, damage, "#ff2", 24, topAdjust, leftAdjust);
		animateBloodDrop(Slot);
		T.to(text[S], .2, {
			startAt:{
				scaleX:2,
				scaleY:2
			},
			scaleX:1,
			scaleY:1,
			ease:ez.lin
		});
		T.to(text[S],.5,{
			y:"-="+60,
			repeat:1,
			ease:ez.xout,
			yoyo:true,
			onComplete:function(){
				text[S].text='';
			}
		});
		T.to(text[S],.8,{
			x:'+='+(M.random()*(200)-100)
		});
		T.to(text[S], .5, {
			delay:.4,
			alpha:0
		});
	}
}
function slotMagicDamage(damage,Slot,mType){
	var topAdjust = (MOB[Slot].offsetTop+(mob[Slot].cY/2));
	if(topAdjust<100){ topAdjust=100; }
	var leftAdjust = ( MOB[Slot].offsetLeft + mob[Slot].cX);
	g[mType+'Increment'](damage);
	if(GLB.videoSetting!=="Low"){
		var S = getText();
		setText(S, damage, "#fff", 24, topAdjust, leftAdjust);
		T.to(text[S], .2, {
			startAt:{
				scaleX:2,
				scaleY:2
			},
			scaleX:1,
			scaleY:1,
			ease:ez.lin
		});
		T.to(text[S],.4,{
			y:"-="+50,
			repeat:1,
			yoyo:true,
			onComplete:function(){
				text[S].text='';
			}
		});
		T.to(text[S],.8,{
			x:'+='+(M.random()*(200)-100)
		});
		T.to(text[S], .4, {
			delay:.4,
			alpha:0
		});
	}
}
function slotMagicDamageCrit(damage,Slot,mType){
	var topAdjust = (MOB[Slot].offsetTop+(mob[Slot].cY/2));
	if(topAdjust<100){ topAdjust=100; }
	var leftAdjust = ( MOB[Slot].offsetLeft + mob[Slot].cX);
	g[mType+'Increment'](damage);
	if(GLB.videoSetting!=="Low"){
		var S = getText();
		setText(S, damage, "#ff2", 24, topAdjust, leftAdjust);
		T.to(text[S], .2, {
			startAt:{
				scaleX:6,
				scaleY:6
			},
			scaleX:1,
			scaleY:1,
			ease:ez.lin
		});
		T.to(text[S],.4,{
			y:"-="+50,
			repeat:1,
			yoyo:true,
			onComplete:function(){
				text[S].text='';
			}
		});
		T.to(text[S],.8,{
			x:'+='+(M.random()*(200)-100)
		});
		T.to(text[S], .4, {
			delay:.4,
			alpha:0
		});
	}
}
g.popupDotDamage = function(damage,Slot,mType,crit){
	var topAdjust = (MOB[Slot].offsetTop+(mob[Slot].cY/2));
	if(topAdjust<100){ topAdjust=100; }
	var leftAdjust = ( MOB[Slot].offsetLeft + mob[Slot].cX);
	g[mType+'Increment'](damage);
	if(GLB.videoSetting!=="Low"){
		if(crit===false){
			var S = getText();
			setText(S, damage, "#fff", 24, topAdjust, leftAdjust);
			T.to(text[S],.7,{
				y:"-="+100,
				onComplete:function(){
					text[S].text='';
				}
			});
		}else{
			var S = getText();
			setText(S, damage, "#ff2", 24, topAdjust, leftAdjust);
			T.to(text[S], .7, {
				y:"-="+100,
				onComplete:function(){
					text[S].text='';
				}
			});
		}
		T.to(text[S], .2, {
			delay:.5,
			alpha:0
		});
	}
}
function popupCombo(Slot,counter,amount){
	var topAdjust = (MOB[Slot].offsetTop+(mob[Slot].cY/2));
	if(topAdjust<100){ topAdjust=100; }
	var leftAdjust = ( MOB[Slot].offsetLeft + mob[Slot].cX);
	if(GLB.videoSetting!=="Low"){
		var S = getText();
		setText(S, counter +"x CHAIN COMBO!", "#FFD700", 16, topAdjust, leftAdjust);
		T.to(text[S], 1.75, {
			y:"-="+100,
			onComplete:function(){
				text[S].text='';
			}
		});
		if(amount>0){
			T.delayedCall(.6, function(){
				var S2 = getText();
				setText(S2, "+"+amount+" BONUS EXP!", "#FFD700", 16, topAdjust, leftAdjust);
				T.to(text[S2],1.75,{
					y:"-="+100,
					onComplete:function(){
						text[S2].text='';
					}
				});
			});
		}
	}
}
g.popupHealSlot = function(healAmount,Slot){
	if(Slot!==5){
		var leftAdjust = ( MOB[Slot].offsetLeft + mob[Slot].cX);
		var topAdjust = (MOB[Slot].offsetTop+(mob[Slot].cY/2));
	}else{
		var leftAdjust = M.ceil(MOB[Slot].offsetLeft + ( (petWidth )/2));
		var bottomAdjust = (MOB[Slot].offsetTop+(petHeight/2) );
	}
	if(topAdjust<100){ topAdjust=100; }
	if(GLB.videoSetting!=="Low"){
		var S = getText();
		setText(S, healAmount, "#ffff66", 24, topAdjust, leftAdjust);
		T.to(text[S],1.75,{
			y:"-="+150,
			onComplete:function(){
				text[S].text='';
			}
		});
	}
}
g.popupHeal = function(healAmount,bypass){
	if(bypass!==true){
		var enh=0;
		if(my.job==="Magician"){
			if(my.talent7>=20){
				enh+=12;
			}
		}
		if (Set.Oracle >= 6) {
			enh += 30;
		}
		var zod=(min70(wisTotal())/6.6);
		if(zod>0){ enh+=zod; }
		healAmount = ~~(healAmount*(1+(enh/100)));
	}
	var zug = false;
	for(var i=0;i<=4;i++){
		if(mob[i].name&&mob[i].cripplingAura==true){
			zug = true;
			continue;
		}
	}
	if(zug===true){ healAmount=(healAmount*.5); }
	if(healAmount<1){
		healAmount=1;
	}else{
		healAmount=~~healAmount;
	}
	my.hp+=healAmount;
	battleHealTotal+=healAmount;
	g.drawMyHp();
}

g.popupMana = function(manaAmount){
	if(manaAmount<1){
		manaAmount=1;
	}else{
		manaAmount=~~manaAmount;
	}	
	if(harnessEtherStatus===true){ 
		manaAmount=manaAmount*2.5; 
	}
	if(manaShieldStatus===true){ 
		manaAmount*=2.8; 
	}
	manaAmount=M.round(manaAmount);
	var foo=g.maxMpFunct();
	my.mp += manaAmount;
	battleManaTotal+=manaAmount;
	if(my.mp>foo){ my.mp=foo; }
	g.drawMyMp();
}
function autoAttackTimer(d){
	timerTick(D.getElementById('toggleattackId'),d,'toggleattackId');
}
function toggleAutoAttackStatus(){
	if(paused===true){ return; }
	if(attackStatus===1){ 
		targetRequired();
		return; 
	}
	if(g.autoAttackStatus===0){
		D.getElementById('mobName'+TGT).style.color="#ff0";
		D.getElementById('mobShadow'+TGT).src="/classic/images1/mobShadow.png";
		g.autoAttackStatus=1;
		autoAttackTimer(0);
	}else{
		D.getElementById('mobName'+TGT).style.color="#ff3333";
		D.getElementById('mobShadow'+TGT).src="/classic/images1/mobShadowRed.png";
		g.autoAttackStatus=0;
		myAttack.kill();
		myAttack2.kill();
		if(mob[TGT].attackStatus===1){
			attackOn(true);
			myAttack = T.delayedCall(0, getDamage);
			myAttack2 = T.delayedCall(0, getDamage2);
			autoAttackTimer(0);
		}else{
			myAttack = T.delayedCall(totalHaste1()/1000, getDamage);
			myAttack2 = T.delayedCall(totalHaste2()/1000, getDamage2);
			autoAttackTimer(totalHaste1()/1000);
		}
	}
}
function togglePetAutoAttackStatus(){
	if(paused===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(g.petAlive===true){
		petAttack.kill()
		petTarget = TGT;
		Chat(petName+' says, "Attacking '+mob[petTarget].name+', Master."');
		if(mob[TGT].attackStatus===1){
			attackOn(true, true);
			petDamage();
		}else{
			attackOn(true, true);
			petAttack = T.delayedCall(petSpeed/2000, petDamage);
		}
	}
}

function removeIcon(buffId){
	$("#"+buffId).remove();
}
function removeMobIcon(buffId,Slot){
	$("#"+buffId+Slot).remove();
}
function buffTimeSolid(duration){
	duration -= 8000;
	if(duration<0){ duration = 0; }
	return duration;
}

function addBuffRaceIcon(skillName,buffId,duration,spriteX){
	var newBuff2 = $('<img>').css({
			width:32,
			height:64,
			top:0,
			left:spriteX,
			position:"absolute"
		}).attr("src", "/classic/images1/sprite"+my.race+"2.png");
	var newBuff1 = $('<div>').css({
			width:32,
			height:32,
			overflow:"hidden",
			position:"relative",
			cssFloat:"left",
			margin:0,
			padding:0,
			zIndex:75
		}).attr("id",buffId)
		.addClass("buffIcons")
		.data("Name",skillName)
		.append(newBuff2)
		.appendTo("#buffWindow");		
	var solid = buffTimeSolid(duration);
	T.delayedCall(solid/1000, function(){
		var flash = (duration-solid)/1000;
		T.to(newBuff1, .5, {
			opacity:.3,
			repeat:-1,
			yoyo:true,
			ease:ez.lin
		});
		T.delayedCall(flash, function(){
			newBuff1.remove();
		});
	});
}
function addBuffIcon(skillName,buffId,duration,spriteX,spriteY){ //buff myself
	rem(buffId); // add .remove() on death & camp
	if(!spriteY){ spriteY = 0; }
	var newBuff2 = $('<img>').css({
			width:576,
			height:128,
			top:spriteY,
			left:spriteX,
			position:"absolute"
		}).attr("src", "/classic/images1/sprite"+my.job+"3.png");
	var newBuff1 = $('<div>').css({
			width:32,
			height:32,
			overflow:"hidden",
			position:"relative",
			cssFloat:"left",
			margin:0,
			padding:0,
			zIndex:75
		}).attr("id",buffId)
		.addClass("buffIcons")
		.data("Name",skillName)
		.append(newBuff2)
		.appendTo("#buffWindow");
	if(duration>0){
		var solid = buffTimeSolid(duration);
		T.delayedCall(solid/1000, function(){
			var flash = duration-solid;
			T.to(newBuff1, .5, {
				opacity:.3,
				repeat:-1,
				yoyo:true,
				ease:ez.lin
			});
			T.delayedCall(flash/1000, function(){
				newBuff1.remove();
			});
		});
	}
}
function rem(id){
	var e = document.getElementById(id);
	if(e!==null){
		e.parentNode.removeChild(e)
	}
}
function addMobBuffIcon(skillName,Slot,buffId,duration,spriteX,spriteY,proc,stack){ //I debuff mob
	if(!stack){
		rem(buffId+Slot); // add .remove() on death & camp
	}
	if(!spriteY){ spriteY = 0; }
	if(!proc){ proc = false; }
	var img='';
	var w1 = 576;
	var h1 = 128;
	if(spriteX===9999){
		img = "/classic/images1/spriteGnome2.png";
		spriteX=0;
		var w1 = 32;
		var h1 = 64;
	}else{
		img = "/classic/images1/sprite"+my.job+"3.png";
	}
	var newBuff2 = $('<img>').css({
			width:w1,
			height:h1,
			top:spriteY,
			left:spriteX,
			position:"absolute"
	}).attr("src",img);
	if(proc){
		var newBuff2 = $('<img>').css({
			width:32,
			height:32,
			top:0,
			left:0,
			position:"absolute"
		}).attr("src","/classic/images1/"+proc+"Icon.png");
	}
	var newBuff1 = $('<div>').css({
		width:32,
		height:32,
		overflow:"hidden",
		position:"relative",
		cssFloat:"left",
		margin:0,
		padding:0,
		zIndex:75
	}).attr("id",buffId+Slot)
	.addClass("mobBuffIcons"+Slot)
	.data("Name",skillName)
	.append(newBuff2)
	.appendTo("#mobIcons"+Slot);
	if(duration>0){
		T.delayedCall(duration/1000, function(){
			newBuff1.remove();
		});
	}
}
function mobBuffIcon(skillName,buffId,duration,spriteX){ //mob hits me
	rem(buffId);
	var newBuff2 = $('<img>').css({
			width:800,
			height:32,
			top:0,
			left:spriteX,
			margin:0,
			padding:0,
			position:"absolute"
		}).attr("src","/classic/images1/spriteMobs2.png");
	var newBuff1 = $('<div>').css({
		width:32,
		height:32,
		overflow:"hidden",
		position:"relative",
		cssFloat:"left",
		margin:0,
		padding:0,
		zIndex:75
	}).attr("id",buffId)
	.addClass("buffIcons")
	.data("Name",skillName)
	.append(newBuff2)
	.appendTo("#buffWindow");
	var solid = buffTimeSolid(duration);
	T.delayedCall(solid/1000, function(){
		var flash = duration-solid;
		T.to(newBuff1, .5, {
			opacity:.3,
			repeat:-1,
			yoyo:true,
			ease:ez.lin
		});
		T.delayedCall(flash/1000, function(){
			newBuff1.remove();
		});
	});
}
function mobSelfBuffIcon(skillName,buffId,duration,spriteX,Slot){ //mob self buffs
	rem(buffId); // overwrite if exists
	var foo = $('<img>').css({
			width:800,
			height:32,
			top:0,
			left:spriteX,
			position:"absolute"
		}).attr("src","/classic/images1/spriteMobs2.png");
	var bar = $('<div>').css({
		width:32,
		height:32,
		overflow:"hidden",
		position:"relative",
		cssFloat:"left",
		margin:0,
		padding:0,
		zIndex:75
	}).attr("id",buffId)
	.addClass("mobBuffIcons"+Slot)
	.data("Name",skillName)
	.append(foo)
	.appendTo("#mobIcons"+Slot);
	if(duration>0){
		var solid = buffTimeSolid(duration); // why is this removing my buff?
		T.delayedCall(solid/1000, function(){
			var flash = duration-solid;
			T.to(bar, .5, {
				opacity:.3,
				repeat:-1,
				yoyo:true,
				ease:ez.lin
			});
			T.delayedCall(flash/1000, function(){
				bar.remove();
			});
		});
	}
}
function clearBuffTimers(){
	//mob stuff
	for (var i=0;i<=4;i++){
		mobEnvenomTimer[i].kill();
		mobEngulfingDarknessTimer[i].kill();
		mobStaticFieldTimer[i].kill();
		mobBlizzardTimer[i].kill();
		mobConflagrationTimer[i].kill();
		mobsEnvenomTimer[i].kill();
		mobsEngulfingDarknessTimer[i].kill();
		mobsStaticFieldTimer[i].kill();
		mobsBlizzardTimer[i].kill();
		mobsConflagrationTimer[i].kill();
		mobFearTimers[i].kill();
		mobGlobeOfDarknessTimers[i].kill();
		mobMindNumbTimers[i].kill();
		mobWeakenTimers[i].kill();
		mobYawnTimers[i].kill();
		MthornsTimers[i].kill();
		MlavaTimers[i].kill();
		MenrageTimers[i].kill();
		MflurryTimers[i].kill();
		MamplifyMagicTimers[i].kill();
		MsanctuaryTimers[i].kill();
		MbarrierTimers[i].kill();
		MironMaidenTimers[i].kill();
		mobsSilenceTimer[i].kill();
	}
	//player stuff
	frenziedRampageIconTimer.kill();//war
	armorOfFaithIconTimer.kill();
	divineSanctuaryIconTimer.kill();
	symbolOfNaltronIconTimer.kill();
	skinLikeNatureIconTimer.kill(); //dru
	shieldOfSpikesIconTimer.kill();
	spiritOfTheWolfIconTimer.kill();
	chloroplastIconTimer.kill();
	callOfTheAncientsIconTimer.kill(); //shm
	talismanOfAltunaIconTimer.kill();
	hpbuffIconTimer.kill();
	hasteIconTimer.kill();
	damageShieldIconTimer.kill();
	resistIconTimer.kill();
	enchantWeaponIconTimer.kill();
	adorningGraceIconTimer.kill();
	clarityIconTimer.kill();
	mirrorImagesIconTimer.kill();
	yaulpIconTimer.kill();
	symbolOfRyltanIconTimer.kill();
	spiritArmorIconTimer.kill();
	siphonStrengthSelfIconTimer.kill();
	shadowVortexSelfIconTimer.kill();
	vampiricEmbraceIconTimer.kill();
	feetLikeCatIconTimer.kill();
	thistlecoatIconTimer.kill();
	accelerandoIconTimer.kill();
	//racials
	if(secondWindStatus===true){ secondWindStatus=false; }
	if(divineAegisStatus===true){ divineAegisStatus=false; }
	barbarianRacial.kill(); ancestralRampageStatus=false;
	if(karanasInfusionStatus===true){ woodElfRacial.kill(); }
	if(sanguineTormentStatus===true){ darkElfRacial.kill(); sanguineTormentStatus=false; }
	if(shortCircuitStatus===true){ gnomeRacial.kill(); shortCircuitStatus=false; }
	dwarfRacial.kill(); 
	graniteVisageStatus=false;
	//mob shit
	mobBashTimer.kill();
	mobFearTimer.kill();
	mobGlobeOfDarknessTimer.kill();
	mobRootTimer.kill();
	mobConfuseTimer.kill();
	mobMindNumbTimer.kill();
	mobWeakenTimer.kill();
	mobYawnTimer.kill();
	mobChilledTimer.kill();
	mobSilenceTimer.kill();
}