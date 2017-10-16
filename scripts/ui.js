

$(function(){
	$("#worldMap").on('click','.zoneSelectButton',function(){
		if(my.hp<=0||paused===true){return;}   
		var text = $(this).text();
		var selectedZone = '';
		var selectedSubzone = 0;
		if(text.indexOf("1")!==-1){
			selectedZone = text.replace(' 1', '');
			selectedSubzone = 1;
		}else if(text.indexOf("2")!==-1){
			selectedZone = text.replace(' 2', '');
			selectedSubzone = 2;
		}else if(text.indexOf("3")!==-1){
			selectedZone = text.replace(' 3', '');
			selectedSubzone = 3;
		}else if(text.indexOf("4")!==-1){
			selectedZone = text.replace(' 4', '');
			selectedSubzone = 4;
		}else{
			selectedSubzone = 0;
			selectedZone = text;
		}
		var zig = myZone()+" "+mySubzone();
		if(selectedZone===myZone() && selectedSubzone===mySubzone()){
			if(selectedSubzone!==0){
				Error(("You are already located in "+ zig +"!"));
			}else{
				Error(("You are already located in "+myZone()+"!"));
			}
			return;
		}
		if(selectedZone===""){
			Error("Select a zone first!");
			return;
		}
		travelZone(selectedZone, selectedSubzone);
		$NG.zoneSelectButton.css({"background-position":"-5px -85px"});
	}).on('mouseenter','.zoneSelectButton',function(){
		var foo = this.textContent;
		foo = foo.replace(' 1', '');
		foo = foo.replace(' 2', '');
		foo = foo.replace(' 3', '');
		foo = foo.replace(' 4', '');
		positionMap(foo);
	});
});
$('#window1').on('mousedown','.talentButton',function(){
	activeTalent=$(this).attr('id');
	setTimeout(function(){
		save.my();
	},1000);
}).on('mouseenter','.talentButton',function(){
	activeTalent=$(this).attr('id');
	reportTalent();
}).on('click','#talent1',function(){
	if(my.job==="Warrior"){
		if(my.level<3){ return; }
	}
	if(talentsRemaining()>0&&my.talent1<20){
		my.talent1++;
		if(my.job==="Paladin"&&my.talent1>=20){
			setEquipValues();
		}
		if(my.job==="Bard"){
			setEquipValues();
			highestElement = setHighestElement();
		}
		CStat();
		updateTalentNotify();
	}
	if(my.job==="Wizard"){
		updateIcebolt();
	}
}).on('click','#talent2',function(){
	if(my.talent1>0&&my.level>11){
		if(talentsRemaining()>0&&my.talent2<20){
			my.talent2++;
			if(my.job==="Bard"||my.job==="Ranger"){
				g.drawMyHp();
			}
			if(my.job==="Cleric"){
				g.drawMyHp();
				setEquipValues();
			}
			CStat();
			updateTalentNotify();
		}
	}
}).on('click','#talent3',function(){
	if(my.talent1>0&&my.talent2>0&&my.level>23){
		if(talentsRemaining()>0&&my.talent3<20){
			my.talent3++;
			if(my.job==="Paladin"){
				setEquipValues();
				highestElement = setHighestElement();		
			}
			CStat();
			updateTalentNotify();
		}
	}
}).on('click','#talent4',function(){
	if(my.talent1>0&&my.talent2>0&&my.talent3>0&&my.level>35){
		if(talentsRemaining()>0&&my.talent4<20){
			my.talent4++;
			CStat();
			updateTalentNotify();
		}
	}
}).on('click','#talent5',function(){
	if(talentsRemaining()>0&&my.talent5<20){
		my.talent5++;
		CStat();
		updateTalentNotify();
	}
}).on('click','#talent6',function(){
	if(my.talent5>0&&my.level>11){
		if(talentsRemaining()>0&&my.talent6<20){
			my.talent6++;
			CStat();
			updateTalentNotify();
		}
	}
}).on('click','#talent7',function(){
	if(my.talent5>0&&my.talent6>0&&my.level>23){
		if(talentsRemaining()>0&&my.talent7<20){
			my.talent7++;
			CStat();
			updateTalentNotify();
		}
	}
}).on('click','#talent8',function(){
	if(my.talent5>0&&my.talent6>0&&my.talent7>0&&my.level>35){
		if(talentsRemaining()>0&&my.talent8<20){
			my.talent8++;
			if(my.job==="Paladin"){
				setEquipValues();
			}
			CStat();
			updateTalentNotify();
		}
	}
}).on('click','#talent9',function(){
	if(talentsRemaining()>0&&my.talent9<20){
		my.talent9++;
		CStat();
		updateTalentNotify();
	}
}).on('click','#talent10',function(){
	if(my.talent9>0&&my.level>11){
		if(talentsRemaining()>0&&my.talent10<20){
			my.talent10++;
			CStat();
			updateTalentNotify();
		}
	}
	if(my.job==="Wizard"){
		updateIcebolt();
	}
}).on('click','#talent11',function(){
	if(my.talent9>0&&my.talent10>0&&my.level>23){
		if(talentsRemaining()>0&&my.talent11<20){
			my.talent11++;
			CStat();
			updateTalentNotify();
		}
	}
	if(my.job==="Rogue"){
		setEquipValues();
		highestElement = setHighestElement();
	}
}).on('click','#talent12',function(){
	if(my.talent9>0&&my.talent10>0&&my.talent11>0&&my.level>35){
		if(talentsRemaining()>0&&my.talent12<20){
			my.talent12++;
			CStat();
			updateTalentNotify();
		}
	}
});
function talentsRemaining(){
	var x=my.level-1-(my.talent1+my.talent2+my.talent3+my.talent4+my.talent5+my.talent6+my.talent7+my.talent8+my.talent9+my.talent10+my.talent11+my.talent12);
	for(var i=0;i<=2;i++){
		if(P.Q[i].Crushbone>=4){
			x++;
		}
		if(P.Q[i].EstateofUnrest>=4){
			x++;
		}
		if(P.Q[i].CazicThule>=4){
			x++;
		}
		if(P.Q[i].NagafensLair>=5){
			x++;
		}
	}
	return x;
}
function maxTalents(){
	for(var i=1;i<=12;i++){
		my['talent'+i]=20;
	}
	CStat();	
	if(my.job==="Wizard"){
		updateIcebolt();
	}
}
var war = {},
	mnk = {},
	rog = {};
war.tn = [
	'',
	"Kick",
	"Pummel",
	"Bulwark",
	"Shockwave",
	"Slam",
	"Hemorrhage",
	"Absorb Spell",
	"Intrepid Might",
	"Avenging Strike",
	"Enrage",
	"Subjugate",
	"Decisive Blow"
];
war.tal = [
	'',
	"Improve Kick's damage and its interrupt rate",
	"Improve Pummel by using a shield to increase its damage",
	"Improve Bulwark's damage reduction",
	"Improve Shockwave's damage using a special technique with your shield",
	"Convert Slam to hit 3 targets",
	"Improve Hemorrhage's damage",
	"Convert Absorb Spell to Reflect. Reflect causes spell damage on all enemies based on monster spell damage.",
	"Improve Intrepid Might's damage",
	"Improve Avenging Strike's damage",
	"After Using Enrage, your next physical attack's damage is amplified",
	"Improve Subjugate's damage",
	"Improve Decisive Blow's damage"
];
mnk.tn = [
	'',
	"Eagle Strike",
	"Stone Fist Reversal",
	"Inner Peace",
	"Chakra Blast",
	"Windmill Kick",
	"Cheetah Strike",
	"Flying Kick",
	"Dragon Strike",
	"Tiger Strike",
	"Crane Kick",
	"Ancestral Flurry",
	"Intimidation"
];
mnk.tal = [
	'',
	"Improve Eagle Strike's damage",
	"Improve Stone Fist Reversal's damage",
	"Reduce damage taken while Inner Peace is active",
	"Improve Chakra Blast's damage",
	"Improve Windmill Kick's damage",
	"Improve Cheetah Strike's damage",
	"Improve Flying Kick's damage and all elemental damage",
	"Improve Dragon Strike's damage",
	"Improve Tiger Strike's damage",
	"Improve Crane Kick's damage",
	"Improve Ancestral Flurry's damage",
	"Feared targets received amplified physical damage"
];
rog.tn = [
	'',
	"Lacerate",
	"Evade",
	"Sonic Strike",
	"Mirage Strike",
	"Shadow Strike",
	"Backstab",
	"Cold Blood",
	"Stagger Shot",
	"Hyper Strike",
	"Illusive Mist",
	"Widow Strike",
	"Prowling Gash"
];
rog.tal = [
	'',
	"Improve Lacerate's damage",
	"Improve all damage while Evade is active",
	"Improve Sonic Strike's damage",
	"Improve Mirage Strike's damage",
	"Improve Shadow Strike's damage",
	"Improve Backstab's damage",
	"Reduce Cold Blood's Cooldown",
	"Improve Stagger Shot's damage",
	"Improve Hyper Strike's skill haste bonus",
	"Increase all damage while in illusive form",
	"Improve Widow Strike's damage",
	"Improve Prowling Gash's damage",
];
pal.tn = [
	'',
	"Slam",
	"Lay Hands",
	"Greater Healing",
	"Valor",
	"Rebuke",
	"Vengeance",
	"Ardent Judgment",
	"Divine Providence",
	"Purge",
	"Holy Might",
	"Yaulp",
	"Flash of Light"
];
pal.tal = [
	'',
	"Improve Slam's damage",
	"Reduce Lay Hands's cooldown",
	"Improve Greater Healing's healing power",
	"Improve Valor's armor and health bonuses",
	"Improve Rebuke's damage",
	"Improve Vengeance's damage",
	"Improve Ardent Judgment's damage",
	"Improve Divine Providence's power",
	"Improve Purge's damage",
	"Improve Holy Might's damage",
	"Improve Yaulp's damage",
	"Flash of light strikes your target with arcane damage"
];
sk.tn = [
	'',
	"Crescent Cleave",
	"Death Strike",
	"Resist Cold",
	"Shadow Vortex",
	"Slam",
	"Life Tap",
	"Harm Touch",
	"Dooming Darkness",
	"Gasping Frenzy",
	"Summon Dead",
	"Fear",
	"Heat Blood"
];
sk.tal = [
	'',
	"Improve Crescent Cleave's damage",
	"Improve Death Strike's damage",
	"Add a banshee aura to Resist Cold, causing damage to anyone that strikes you.",
	"Improve Shadow Vortex's damage reduction",
	"Improve Slam's damage",
	"Improve Life Tap's damage",
	"Improve Harm Touch's damage",
	"Improve Dooming Darkness's damage",
	"Improve Gasping Frenzy's damage",
	"Improve your minion's damage",
	"Improve damage on feared targets",
	"Improve Heat Blood's damage"
];
rng.tn = [
	'',
	"Kick",
	"Thistlecoat",
	"Snare",
	"Warder\'s Rift",
	"Counter Shot",
	"Trueshot Arrow",
	"Faerie Flame",
	"Ignite",
	"Rapid Shot",
	"Feet Like Cat",
	"Spirit of the Wolf",
	"Volley Shot"
];
rng.tal = [
	'',
	"Improve Kick's damage and its interrupt rate",
	"Adds a Health Bonus to Thistlecoat",
	"Converts auto attack into a rapid flurry of hits",
	"Reduce the damage mitigation of Warder's Rift for your own attacks.",
	"Improve Counter Shot damage",
	"Improve Trueshot Arrow's damage",
	"Improve Faerie Flame's Damage",
	"Improve Ignite's damage",
	"Improve Rapid Shot's damage",
	"Feet Like Cat will also add skill haste",
	"Improve Spirit of the Wolf by adding a lightning strike chance to your arrows",
	"Improve Volley Shot's damage"
];
brd.tn = [
	'',
	"Chant of Battle",
	"Hymn of Restoration",
	"Anthem De Arms",
	"Euphonic Hymn",
	"Chords of Dissonance",
	"Elemental Rhythms",
	"Chords of Clarity",
	"Desperate Dirge",
	"Song of the Sirens",
	"Boastful Bellow",
	"Consonant Chain",
	"Shield of Songs",
];
brd.tal = [
	'',
	"Chant of Battle adds physical damage",
	"Improve Hymn of Restoration's healing power and your maximum health",
	"Improve Anthem De Arms's haste and add attack power",
	"Improve Euphonic Hymn's physical damage enhancement",
	"Improve Chords of Dissonance's damage",
	"Improve Elemental Rhythms's resistances",
	"Improve Chords of Clarity's mana regeneration",
	"Improve Desperate Dirge's damage",
	"Improve Song of the Sirens's charmed pet damage",
	"Improve Boastful Bellow's damage",
	"Improve Consonant Chain's slow power",
	"Improve Shield of Songs's shield health"
];
dru.tn = [
	'',
	"Drones of Doom",
	"Greater Healing",
	"Engulfing Roots",
	"Skin Like Nature",
	"Tornado",
	"Earthquake",
	"Hurricane",
	"Sylvan Creep",
	"Starfire",
	"Drifting Death",
	"Lightning Blast",
	"Volcano"
];
dru.tal = [
	'',
	"Improve Drones of Doom's damage",
	"Improve Greater Healing",
	"Add Poison Effect To Rooted Mobs",
	"Improve Skin Like Nature's Health Bonus",
	"Improve Tornado's damage",
	"Improve Earthquake's damage",
	"Improve Hurricane's damage",
	"Improve Sylvan Creep's damage",
	"Improve Starfire's damage",
	"Improve Drifting Death's damage",
	"Improve Lightning Blast's damage",
	"Improve Volcano's damage"
];
clr.tn = [
	'',
	"Smite",
	"Resolution",
	"Binding Earth",
	"Holy Wrath",
	"Sound of Force",
	"Martyr\'s Blessing",
	"Armor of Faith",
	"Guardian Angel",
	"Expel Corruption",
	"Searing Revelation",
	"Mark of Judgement",
	"Benediction"
];
clr.tal = [
	'',
	"Improve Smite's damage",
	"Improve Resolution by adding casting haste and health",
	"Add holy damage over time to Binding Earth",
	"Improve Holy Wrath's damage",
	"Improve Sound of Force's damage. Converts auto attack into a rapid flurry of hits",
	"Martyr's Blessing enhances all damage inflicted and received while the skill is active",
	"Improve Armor of Faith's armor bonus and add an attack haste effect.",
	"Improve Guardian Angel's shield strength",
	"Improve Expel Corruption's damage",
	"Add damage component to Searing Revelation",
	"Add Holy Nova explosion to Mark of Judgement",
	"Improve Benediction by adding explosive holy damage"
];
shm.tn = [
	'',
	"Frost Strike",
	"Togor\'s Insects",
	"Enstill",
	"Glacial Impact",
	"Scourge",
	"Poison Nova",
	"Affliction",
	"Devouring Plague",
	"Call of the Ancients",
	"Guardian Spirit",
	"Spirit of the Wolf",
	"Reclaim Blood"
];
shm.tal = [
	'',
	"Improve Frost Strike's damage",
	"Improve Togor's Insects by adding poison damage while the effect is active",
	"Improve Enstill by adding arcane damage while the effect is active",
	"Improve Glacial Impact's damage",
	"Improve Scourge's damage",
	"Improve Poison Nova's damage",
	"Improve Affliction's damage",
	"Improve Devouring Plague's damage",
	"Improve Call of the Ancients's buff power",
	"Improve Guardian Spirit's health and damage",
	"Improve Spirit of the Wolf's attack bonus",
	"Improve Reclaim Blood's healing power"
];
nec.tn = [
	'',
	"Drain Soul",
	"Ignite Blood",
	"Bond of Death",
	"Howling Terror",
	"Invoke Death",
	"Augment Death",
	"Corpse Explosion",
	"Detonate Soul",
	"Bone Spirit",
	"Cascading Darkness",
	"Invoke Fear",
	"Asystole"
];
nec.tal = [
	'',
	"Improve Drain Soul's damage",
	"Improve Ignite Blood's damage",
	"Improve Bond of Death's damage",
	"Improve Howling Terror by adding cold damage over time to all feared targets",
	"Improve Invoke Death by adding health and damage to your pet",
	"Improve Augment Death's damage and healing",
	"Improve Corpse Explosion's damage",
	"Improve Detonate Soul's damage",
	"Improve Bone Spirit's damage",
	"Improve Cascading Darkness's damage",
	"Improve Invoke Fear by enhancing all damage on feared targets",
	"Improve Asystole's damage"
];
enc.tn = [
	'',
	"Chaos Flux",
	"Color Shift",
	"Discordant Barrier",
	"Mystic Rune",
	"Cajoling Whispers",
	"Shiftless Deeds",
	"Enchant Weapon",
	"Alacrity",
	"Gasping Embrace",
	"Mesmerize",
	"Gravity Flux",
	"Tashania"
];
enc.tal = [
	'',
	"Improve Chaos Flux's damage",
	"Improve Color Shift by adding arcane damage",
	"Improve Discordant Barrier's armor and health",
	"Improve Mystic Rune's shield power",
	"Improve charmed mob's damage",
	"Improve Shiftless Deeds by adding cold damage over time",
	"Improve Enchant Weapon's damage",
	"Improve Alacrity by adding additional hits to auto attack",
	"Improve Gasping Embrace's damage",
	"Convert Mesmerize into Jubilee, a dazzling explosion that inflicts arcane damage. Jubilee does not mesmerize.",
	"Improve Gravity Flux's damage",
	"Improve Tashania by adding arcane damage over time"
];
mag.tn = [
	'',
	"Lava Bolt",
	"Shield of Lava",
	"Firestorm",
	"Armageddon",
	"Summon Elemental",
	"Burnout",
	"Reclaim Elements",
	"Elemental Fury",
	"Phantom Plate",
	"Frozen Orb",
	"Elemental Armor",
	"Psionic Storm"
];
mag.tal = [
	'',
	"Improve Lava Bolt's damage",
	"Improve Shield of Lava's damage",
	"Improve Firestorm's damage",
	"Improve Armageddon's damage",
	"Improve summoned elementals' health and damage",
	"Improve Burnout's damage and healing",
	"Improve Reclaim Elements's healing",
	"Improve Elemental Fury's damage",
	"Improve Phantom Plate's armor and health bonus",
	"Improve Frozen Orb's damage",
	"Improve Elemental Armor's resistances",
	"Improve Psionic Storm's damage"
];
wiz.tn = [
	'',
	"Charged Bolts",
	"Arcane Missiles",
	"Chain Lightning",
	"Mirror Images",
	"Ice Bolt",
	"Deep Freeze",
	"Glacial Spike",
	"Ice Comet",
	"Vizier\'s Shielding",
	"Fireball",
	"Harness Ether",
	"Meteor"
];
wiz.tal = [
	'',
	"Improve Charged Bolts' damage",
	"Improve Arcane Missiles' damage",
	"Improve Chain Lightning's damage",
	"Improve Mirror Images' damage",
	"Improve Ice Bolt's damage",
	"Improve Deep Freeze's damage",
	"Improve Glacial Spike's damage",
	"Improve Ice Comet's damage",
	"Improve Vizier\'s Shielding's armor and health",
	"Improve Fireball's damage",
	"Improve Harness Ether's damage amplification",
	"Improve Meteor's damage"
];
var lvlReq12 = "<p class='red'>Required Level: 12</p>",
lvlReq24 = "<p class='red'>Required Level: 24</p>",
lvlReq36 = "<p class='red'>Required Level: 36</p>";
g.warriorTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+war.tn[1]+'</p>';
		var m=war.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
			if(my.job==="Warrior"&&my.level<3){
				a+='<p class="red">Level 3 Required</p>';
			}
		}else{
			var t=talent1();
			var chance = t*3;
			if(chance>60){ chance=60; }
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*2+' percent'+
			'<br>Interrupt Chance: +'+chance+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Drain Mana<br><br>'+
		'+1 Pummel Talent<br>'+
		'+1 Bulwark Talent<br>'+
		'+1 Shockwave Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+war.tn[2]+'</p>';
		var m=war.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.6)+' percent of shield\'s armor value</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Riposte While Invincible<br><br>'+
		'+1 Kick Talent<br>'+
		'+1 Bulwark Talent<br>'+
		'+1 Shockwave Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+war.tn[3]+'</p>';
		var m=war.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage Reduction: +'+t+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+5 to Bulwark Duration<br><br>'+
		'+1 Kick Talent<br>'+
		'+1 Pummel Talent<br>'+
		'+2 Shockwave Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+war.tn[4]+'</p>';
		var m=war.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.75)+' percent of shield\'s armor value</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Shockwave Double Hits<br><br>'+
		'+2 Kick Talent<br>'+
		'+2 Pummel Talent<br>'+
		'+2 Bulwark Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+war.tn[5]+'</p>';
		var m=war.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.25)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'A Small Shockwave Hits All Targets<br><br>'+
		'+1 Hemorrhage Talent<br>'+
		'+1 Absorb Spell Talent<br>'+
		'+1 Intrepid Might Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+war.tn[6]+'</p>';
		var m=war.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.1)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hemorrhage Hits 3 Targets<br><br>'+
		'+1 Slam Talent<br>'+
		'+1 Absorb Spell Talent<br>'+
		'+1 Intrepid Might Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+war.tn[7]+'</p>';
		var m=war.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*20+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Half Absorb Spell Cooldown<br><br>'+
		'+1 Slam Talent<br>'+
		'+1 Hemorrhage Talent<br>'+
		'+2 Intrepid Might Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+war.tn[8]+'</p>';
		var m=war.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.7)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+5 Auto Attacks<br><br>'+
		'+2 Slam Talent<br>'+
		'+2 Hemorrhage Talent<br>'+
		'+2 Absorb Spell Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+war.tn[9]+'</p>';
		var m=war.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+5 Percent Damage Bonus<br><br>'+
		'+1 Enrage Talent<br>'+
		'+1 Subjugate Talent<br>'+
		'+1 Decisive Blow Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+war.tn[10]+'</p>';
		var m=war.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage Amplification: +'+t*10+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Enrage Triggers Frenzy<br><br>'+
		'+1 Avenging Strike Talent<br>'+
		'+1 Subjugate Talent<br>'+
		'+1 Decisive Blow Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+war.tn[11]+'</p>';
		var m=war.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.4)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'8% Chance Hemorrhage Damage Activates Subjugate<br><br>'+
		'+1 Avenging Strike Talent<br>'+
		'+1 Enrage Talent<br>'+
		'+2 Decisive Blow Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+war.tn[12]+'</p>';
		var m=war.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.8)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Decisive Blow Double-Hits With Arcane Damage<br><br>'+
		'+2 Avenging Strike Talent<br>'+
		'+2 Enrage Talent<br>'+
		'+2 Subjugate Talent';
	}
	return a;
}
g.monkTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+mnk.tn[1]+'</p>';
		var m=mnk.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*5+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Stun Target For 3 Seconds<br><br>'+
		'+1 Stone Fist Reversal Talent<br>'+
		'+1 Inner Peace Talent<br>'+
		'+1 Chakra Blast Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+mnk.tn[2]+'</p>';
		var m=mnk.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.6)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Magical Attacks Also Countered<br><br>'+
		'+1 Eagle Strike Talent<br>'+
		'+1 Inner Peace Talent<br>'+
		'+1 Chakra Blast Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+mnk.tn[3]+'</p>';
		var m=mnk.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage Reduction: +'+fix(t*1.6)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Fear Duration Doubled<br>'+
		'Cooldown Reduced 15 Seconds<br><br>'+
		'+1 Eagle Strike Talent<br>'+
		'+1 Stone Fist Reversal Talent<br>'+
		'+2 Chakra Blast Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+mnk.tn[4]+'</p>';
		var m=mnk.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.9)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Arcane Chi Blast On All Targets<br><br>'+
		'+2 Eagle Strike Talent<br>'+
		'+2 Stone Fist Reversal Talent<br>'+
		'+2 Inner Peace Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+mnk.tn[5]+'</p>';
		var m=mnk.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.25)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Wave of Frost Strikes All Targets<br><br>'+
		'+1 Cheetah Strike Talent<br>'+
		'+1 Flying Kick Talent<br>'+
		'+1 Dragon Strike Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+mnk.tn[6]+'</p>';
		var m=mnk.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*2+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Cone of Lightning Attack<br><br>'+
		'+1 Windmill Kick Talent<br>'+
		'+1 Flying Kick Talent<br>'+
		'+1 Dragon Strike Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+mnk.tn[7]+'</p>';
		var m=mnk.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.8)+' percent'+
			'<br>Elemental Damage: +'+fix(t*1.5)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Fire, Cold, and Lightning Strikes Hit Your Target<br><br>'+
		'+1 Windmill Kick Talent<br>'+
		'+1 Cheetah Strike Talent<br>'+
		'+2 Dragon Strike Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+mnk.tn[8]+'</p>';
		var m=mnk.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*7.3)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+30 All Resists<br><br>'+
		'+2 Windmill Kick Talent<br>'+
		'+2 Cheetah Strike Talent<br>'+
		'+2 Flying Kick Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+mnk.tn[9]+'</p>';
		var m=mnk.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+5 Percent Damage<br><br>'+
		'+1 Crane Kick Talent<br>'+
		'+1 Ancestral Flurry Talent<br>'+
		'+1 Intimidation Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+mnk.tn[10]+'</p>';
		var m=mnk.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.5)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Kick Target Twice<br><br>'+
		'+1 Tiger Strike Talent<br>'+
		'+1 Ancestral Flurry Talent<br>'+
		'+1 Intimidation Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+mnk.tn[11]+'</p>';
		var m=mnk.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.8)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Immune to Iron Maiden and Thorns<br><br>'+
		'+1 Tiger Strike Talent<br>'+
		'+1 Crane Kick Talent<br>'+
		'+2 Intimidation Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+mnk.tn[12]+'</p>';
		var m=mnk.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage Amplified: +'+fix(t*1.2)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Immune to Fear<br><br>'+
		'+2 Tiger Strike Talent<br>'+
		'+2 Crane Kick Talent<br>'+
		'+2 Ancestral Flurry Talent';
	}
	return a;
}
g.rogueTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+rog.tn[1]+'</p>';
		var m=rog.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.3)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Leech 20% of Lacerate Damage, But Add a 12-Second Cooldown<br><br>'+
		'+1 Evade Talent<br>'+
		'+1 Sonic Strike Talent<br>'+
		'+1 Mirage Strike Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+rog.tn[2]+'</p>';
		var m=rog.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.25)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Evade Lasts Full Duration<br><br>'+
		'+1 Lacerate Talent<br>'+
		'+1 Sonic Strike Talent<br>'+
		'+1 Mirage Strike Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+rog.tn[3]+'</p>';
		var m=rog.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.8)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Chaos Flux<br><br>'+
		'+1 Lacerate Talent<br>'+
		'+1 Evade Talent<br>'+
		'+2 Mirage Strike Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+rog.tn[4]+'</p>';
		var m=rog.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.3)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Reduce Cooldown By 2 Seconds<br><br>'+
		'+2 Lacerate Talent<br>'+
		'+2 Evade Talent<br>'+
		'+2 Sonic Strike Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+rog.tn[5]+'</p>';
		var m=rog.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+5 Percent Damage Bonus<br><br>'+
		'+1 Backstab Talent<br>'+
		'+1 Cold Blood Talent<br>'+
		'+1 Stagger Shot Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+rog.tn[6]+'</p>';
		var m=rog.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.75)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Backstab Double Hits<br><br>'+
		'+1 Shadow Strike Talent<br>'+
		'+1 Cold Blood Talent<br>'+
		'+1 Stagger Shot Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+rog.tn[7]+'</p>';
		var m=rog.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Cooldown Reduced: +'+fix(t*.75)+' seconds</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'5% Chance to Assassinate<br><br>'+
		'+1 Shadow Strike Talent<br>'+
		'+1 Backstab Talent<br>'+
		'+2 Stagger Shot Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+rog.tn[8]+'</p>';
		var m=rog.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.3)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Causes Snare Effect<br><br>'+
		'+2 Shadow Strike Talent<br>'+
		'+2 Backstab Talent<br>'+
		'+2 Cold Blood Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+rog.tn[9]+'</p>';
		var m=rog.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Skill Haste Bonus: +'+fix(t*.666)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		"Increase Dodge Chance By 8%<br><br>"+
		'+1 Illusive Mist Talent<br>'+
		'+1 Widow Strike Talent<br>'+
		'+1 Prowling Gash Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+rog.tn[10]+'</p>';
		var m=rog.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.2)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Flash Powder Ignites, Striking 3 Targets With Fire Damage<br><br>'+
		'+1 Hyper Strike Talent<br>'+
		'+1 Widow Strike Talent<br>'+
		'+1 Prowling Gash Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+rog.tn[11]+'</p>';
		var m=rog.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*7.25)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Enchant Weapons With Poison Damage<br><br>'+
		'+1 Hyper Strike Talent<br>'+
		'+1 Illusive Mist Talent<br>'+
		'+2 Prowling Gash Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+rog.tn[12]+'</p>';
		var m=rog.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.3)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Reduce Cooldown to 12 Seconds<br>'+
		'Double The Number Of Hits<br><br>'+
		'+2 Hyper Strike Talent<br>'+
		'+2 Illusive Mist Talent<br>'+
		'+2 Widow Strike Talent';
	}
	return a;
}
g.paladinTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+pal.tn[1]+'</p>';
		var m=pal.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.3)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+50 Fear Resistance<br><br>'+
		'+1 Lay Hands Talent<br>'+
		'+1 Greater Healing Talent<br>'+
		'+1 Valor Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+pal.tn[2]+'</p>';
		var m=pal.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Cooldown: -'+fix(t*5)+' seconds</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Counter-Attack Physical Damage For 20 Seconds<br><br>'+
		'+1 Slam Talent<br>'+
		'+1 Greater Healing Talent<br>'+
		'+1 Valor Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+pal.tn[3]+'</p>';
		var m=pal.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Healing: +'+fix(t*1.35)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Enchant Weapons With Arcane Damage<br><br>'+
		'+1 Slam Talent<br>'+
		'+1 Lay Hands Talent<br>'+
		'+2 Valor Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+pal.tn[4]+'</p>';
		var m=pal.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Health: +'+fix(t*10.75)+' percent<br>'+
			'<br>Armor: +'+fix(t*5.1)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Parry, Dodge, and Riposte Trigger Repudiation<br><br>'+
		'+2 Slam Talent<br>'+
		'+2 Lay Hands Talent<br>'+
		'+2 Greater Healing Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+pal.tn[5]+'</p>';
		var m=pal.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.75)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Lightning Strikes 5 Targets<br><br>'+
		'+1 Vengeance Talent<br>'+
		'+1 Ardent Judgment Talent<br>'+
		'+1 Divine Providence Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+pal.tn[6]+'</p>';
		var m=pal.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.2)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'A Beam of Holy Light Strikes All Targets<br><br>'+
		'+1 Rebuke Talent<br>'+
		'+1 Ardent Judgment Talent<br>'+
		'+1 Divine Providence Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+pal.tn[7]+'</p>';
		var m=pal.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.5)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Blind Targets Take Additional 30% damage<br><br>'+
		'+1 Rebuke Talent<br>'+
		'+1 Vengeance Talent<br>'+
		'+2 Divine Providence Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+pal.tn[8]+'</p>';
		var m=pal.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Poison Resist: +'+fix(t*2.6)+' percent'+
			'<br>Lightning Resist: +'+fix(t*2.6)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+20% Skill Haste<br><br>'+
		'+2 Rebuke Talent<br>'+
		'+2 Vengeance Talent<br>'+
		'+2 Ardent Judgment Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+pal.tn[9]+'</p>';
		var m=pal.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*1+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+5 Percent Damage Bonus<br><br>'+
		'+1 Holy Might Talent<br>'+
		'+1 Yaulp Talent<br>'+
		'+1 Flash of Light Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+pal.tn[10]+'</p>';
		var m=pal.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.5)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+40 Percent Damage Bonus On Stunned Targets<br><br>'+
		'+1 Purge Talent<br>'+
		'+1 Yaulp Talent<br>'+
		'+1 Flash of Light Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+pal.tn[11]+'</p>';
		var m=pal.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Yaulp Creates a Magical Shield That Absorbs Health<br><br>'+
		'+1 Purge Talent<br>'+
		'+1 Holy Might Talent<br>'+
		'+2 Flash of Light Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+pal.tn[12]+'</p>';
		var m=pal.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: '+fix(t*6.9)+' percent of attack power</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits 3 Targets<br>'+
		'Cooldown Reduced 30 Seconds<br><br>'+
		'+2 Purge Talent<br>'+
		'+2 Holy Might Talent<br>'+
		'+2 Yaulp Talent';
	}
	return a;
}
g.shadowKnightTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+sk.tn[1]+'</p>';
		var m=sk.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+5 Percent Damage<br><br>'+
		'+1 Death Strike Talent<br>'+
		'+1 Resist Cold Talent<br>'+
		'+1 Shadow Vortex Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+sk.tn[2]+'</p>';
		var m=sk.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.8)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Causes Bleed Effect<br><br>'+
		'+1 Crescent Cleave Talent<br>'+
		'+1 Resist Cold Talent<br>'+
		'+1 Shadow Vortex Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+sk.tn[3]+'</p>';
		var m=sk.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Thorns: +'+fix(t*1.7)+' damage</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'All Physical Damage Slows Target<br>'+
		'Resistant to Cold Effects<br><br>'+
		'+1 Crescent Cleave Talent<br>'+
		'+1 Death Strike Talent<br>'+
		'+2 Shadow Vortex Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+sk.tn[4]+'</p>';
		var m=sk.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage Reduction: +'+fix(t*.4)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'8% Chance Physical Damage Negated<br><br>'+
		'+2 Crescent Cleave Talent<br>'+
		'+2 Death Strike Talent<br>'+
		'+2 Resist Cold Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+sk.tn[5]+'</p>';
		var m=sk.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.5)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+ 50 Stun Reduction<br><br>'+
		'+1 Life Tap Talent<br>'+
		'+1 Harm Touch Talent<br>'+
		'+1 Dooming Darkness Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+sk.tn[6]+'</p>';
		var m=sk.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.75)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Reduce Cooldown By 10 Seconds<br><br>'+
		'+1 Slam Talent<br>'+
		'+1 Harm Touch Talent<br>'+
		'+1 Dooming Darkness Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+sk.tn[7]+'</p>';
		var m=sk.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Cooldown Reduced By 40 Seconds<br>'+
		'Hits 3 Targets<br><br>'+
		'+1 Slam Talent<br>'+
		'+1 Life Tap Talent<br>'+
		'+2 Dooming Darkness Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+sk.tn[8]+'</p>';
		var m=sk.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.6)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits All Targets<br><br>'+
		'+2 Slam Talent<br>'+
		'+2 Life Tap Talent<br>'+
		'+2 Harm Touch Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+sk.tn[9]+'</p>';
		var m=sk.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.6)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Doubles Pet Health<br><br>'+
		'+1 Summon Dead Talent<br>'+
		'+1 Fear Talent<br>'+
		'+1 Heat Blood Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+sk.tn[10]+'</p>';
		var m=sk.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Pet Damage: +'+fix(t*6.6)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'35% Chance Pet Mimes Your Physical Attacks<br><br>'+
		'+1 Gasping Frenzy Talent<br>'+
		'+1 Fear Talent<br>'+
		'+1 Heat Blood Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+sk.tn[11]+'</p>';
		var m=sk.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*.85)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Reduce Strengthen Dead Cooldown By 45 Seconds<br><br>'+
		'+1 Gasping Frenzy Talent<br>'+
		'+1 Summon Dead Talent<br>'+
		'+2 Heat Blood Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+sk.tn[12]+'</p>';
		var m=sk.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.7)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Boiling Mobs Take 15% More Damage<br><br>'+
		'+2 Gasping Frenzy Talent<br>'+
		'+2 Summon Dead Talent<br>'+
		'+2 Fear Talent';
	}
	return a;
}
g.rangerTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+rng.tn[1]+'</p>';
		var m=rng.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			var chance = t*3;
			if(chance>60){ chance=60; }
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.4)+' percent'+
			'<br>Interrupt Chance: +'+chance+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'50% Chance To Disarm Target, Reducing Next Attack By 75%<br><br>'+
		'+1 Thistlecoat Talent<br>'+
		'+1 Snare Talent<br>'+
		'+1 Warder\'s Rift Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+rng.tn[2]+'</p>';
		var m=rng.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Health: +'+fix(t*1.42)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'75% Chance To Reflect Damage<br><br>'+
		'+1 Kick Talent<br>'+
		'+1 Snare Talent<br>'+
		'+1 Warder\'s Rift Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+rng.tn[3]+'</p>';
		var m=rng.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Auto Attack: +'+M.ceil(t/5.8)+' hits</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+12 Percent Parry and Riposte<br><br>'+
		'+1 Kick Talent<br>'+
		'+1 Thistlecoat Talent<br>'+
		'+2 Warder\'s Rift Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+rng.tn[4]+'</p>';
		var m=rng.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Reduce Mitigation: +'+fix(t*1.25)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Successful Parry Triggers Regen<br><br>'+
		'+2 Kick Talent<br>'+
		'+2 Thistlecoat Talent<br>'+
		'+2 Snare Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+rng.tn[5]+'</p>';
		var m=rng.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.5)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Stuns Target For 1.5 Seconds<br><br>'+
		'+1 Trueshot Arrow Talent<br>'+
		'+1 Faerie Flame Talent<br>'+
		'+1 Ignite Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+rng.tn[6]+'</p>';
		var m=rng.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.1)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Ignore Target Defenses<br><br>'+
		'+1 Counter Shot Talent<br>'+
		'+1 Faerie Flame Talent<br>'+
		'+1 Ignite Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+rng.tn[7]+'</p>';
		var m=rng.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.1)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Trueshot Arrow Fires Third Arrow That Hits 3 Targets<br><br>'+
		'+1 Counter Shot Talent<br>'+
		'+1 Trueshot Arrow Talent<br>'+
		'+2 Ignite Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+rng.tn[8]+'</p>';
		var m=rng.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.2)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'30% Chance Arrows Cause Explosive Damage<br><br>'+
		'+2 Counter Shot Talent<br>'+
		'+2 Trueshot Arrow Talent<br>'+
		'+2 Faerie Flame Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+rng.tn[9]+'</p>';
		var m=rng.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+5 Percent Damage Bonus<br><br>'+
		'+1 Feet Like Cat Talent<br>'+
		'+1 Spirit of the Wolf Talent<br>'+
		'+1 Volley Shot Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+rng.tn[10]+'</p>';
		var m=rng.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Skill Haste: +'+fix(t*.75)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Increase Number Of Volley Shot Arrows By 50%<br><br>'+
		'+1 Rapid Shot Talent<br>'+
		'+1 Spirit of the Wolf Talent<br>'+
		'+1 Volley Shot Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+rng.tn[11]+'</p>';
		var m=rng.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Lightning Chance: +'+fix(t*1.2)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+12 Percent To Dual Wield And Double Attack<br><br>'+
		'+1 Rapid Shot Talent<br>'+
		'+1 Feet Like Cat Talent<br>'+
		'+2 Volley Shot Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+rng.tn[12]+'</p>';
		var m=rng.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.33)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Rapid Shot Fires Extra Shot<br><br>'+
		'+2 Rapid Shot Talent<br>'+
		'+2 Feet Like Cat Talent<br>'+
		'+2 Spirit of the Wolf Talent';
	}
	return a;
}
g.bardTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+brd.tn[1]+'</p>';
		var m=brd.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.5)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Enchant Your Weapons With An Arcane Melody<br><br>'+
		'+1 Hymn of Restoration Talent<br>'+
		'+1 Anthem De Arms Talent<br>'+
		'+1 Euphonic Hymn Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+brd.tn[2]+'</p>';
		var m=brd.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Healing: +'+fix(t*1.35)+' percent'+
			'<br>Maximum Health: +'+fix(t*1.55)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'15% Chance Weapons Channel Arcane Energy<br><br>'+
		'+1 Chant of Battle Talent<br>'+
		'+1 Anthem De Arms Talent<br>'+
		'+1 Euphonic Hymn Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+brd.tn[3]+'</p>';
		var m=brd.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Haste: +'+fix(t*1.15)+' percent'+
			'<br>Attack Power: +'+fix(t*1.68)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'15% chance to Frenzy when you take damage<br><br>'+
		'+1 Chant of Battle Talent<br>'+
		'+1 Hymn of Restoration Talent<br>'+
		'+2 Euphonic Hymn Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+brd.tn[4]+'</p>';
		var m=brd.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.75)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'8% Chance Weapons Cast Sonic Disruption<br><br>'+
		'+2 Chant of Battle Talent<br>'+
		'+2 Hymn of Restoration Talent<br>'+
		'+2 Anthem De Arms Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+brd.tn[5]+'</p>';
		var m=brd.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.7)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Double Song Duration<br><br>'+
		'+1 Elemental Rhythms Talent<br>'+
		'+1 Chords of Clarity Talent<br>'+
		'+1 Desperate Dirge Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+brd.tn[6]+'</p>';
		var m=brd.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Resistances: +'+fix(t*2.3)+'</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Boost Max Resistances to 340<br><br>'+
		'+1 Chords of Dissonance Talent<br>'+
		'+1 Chords of Clarity Talent<br>'+
		'+1 Desperate Dirge Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+brd.tn[7]+'</p>';
		var m=brd.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Mana regeneration: +'+fix(t*5.3)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Song Damage Has A 15% Chance To Stun<br><br>'+
		'+1 Chords of Dissonance Talent<br>'+
		'+1 Elemental Rhythms Talent<br>'+
		'+2 Desperate Dirge Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+brd.tn[8]+'</p>';
		var m=brd.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.6)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Song Damage Has A 8% Chance To Restore Health<br><br>'+
		'+2 Chords of Dissonance Talent<br>'+
		'+2 Elemental Rhythms Talent<br>'+
		'+2 Chords of Clarity Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+brd.tn[9]+'</p>';
		var m=brd.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Pet Damage: +'+fix(t*12.8)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Charmed Minions Cause Bleed Damage<br><br>'+
		'+1 Boastful Bellow Talent<br>'+
		'+1 Consonant Chain Talent<br>'+
		'+1 Shield of Songs Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+brd.tn[10]+'</p>';
		var m=brd.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.75)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Charmed Pets Use Frenzy<br><br>'+
		'+1 Song of the Sirens Talent<br>'+
		'+1 Consonant Chain Talent<br>'+
		'+1 Shield of Songs Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+brd.tn[11]+'</p>';
		var m=brd.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Slow: +'+fix(t*1.2)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Consonant Chain Poisons Target While Active<br><br>'+
		'+1 Song of the Sirens Talent<br>'+
		'+1 Boastful Bellow Talent<br>'+
		'+2 Shield of Songs Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+brd.tn[12]+'</p>';
		var m=brd.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Shield Health: +'+fix(t*3.15)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+10% Chance Pet Covers Damage<br><br>'+
		'+2 Song of the Sirens Talent<br>'+
		'+2 Boastful Bellow Talent<br>'+
		'+2 Consonant Chain Talent';
	}
	return a;
}
g.druidTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+dru.tn[1]+'</p>';
		var m=dru.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.2)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Reduce Affected Mobs\' Damage By 10%<br><br>'+
		'+1 Greater Healing Talent<br>'+
		'+1 Engulfing Roots Talent<br>'+
		'+1 Skin Like Nature Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+dru.tn[2]+'</p>';
		var m=dru.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Healing: +'+fix(t*1.25)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Add Regen Effect<br><br>'+
		'+1 Drones of Doom Talent<br>'+
		'+1 Engulfing Roots Talent<br>'+
		'+1 Skin Like Nature Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+dru.tn[3]+'</p>';
		var m=dru.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.5)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Roots Affect Flying Mobs<br><br>'+
		'+1 Drones of Doom Talent<br>'+
		'+1 Greater Healing Talent<br>'+
		'+2 Skin Like Nature Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+dru.tn[4]+'</p>';
		var m=dru.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Health: +'+fix(t*9.5)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+Lightning, Cold, and Fire Absorb Bonus<br><br>'+
		'+2 Drones of Doom Talent<br>'+
		'+2 Greater Healing Talent<br>'+
		'+2 Engulfing Roots Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+dru.tn[5]+'</p>';
		var m=dru.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Remove Tornado\'s Cooldown<br><br>'+
		'+1 Earthquake Talent<br>'+
		'+1 Hurricane Talent<br>'+
		'+1 Sylvan Creep Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+dru.tn[6]+'</p>';
		var m=dru.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.75)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'8% Chance to Stun Targets<br>'+
		'Cooldown Reduced 12 Seconds<br><br>'+
		'+1 Tornado Talent<br>'+
		'+1 Hurricane Talent<br>'+
		'+1 Sylvan Creep Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+dru.tn[7]+'</p>';
		var m=dru.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.15)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'12% Chance To Freeze Targets<br><br>'+
		'+1 Tornado Talent<br>'+
		'+1 Earthquake Talent<br>'+
		'+2 Sylvan Creep Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+dru.tn[8]+'</p>';
		var m=dru.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.7)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Cooldown Reduced to 30<br><br>'+
		'+2 Tornado Talent<br>'+
		'+2 Earthquake Talent<br>'+
		'+2 Hurricane Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+dru.tn[9]+'</p>';
		var m=dru.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*2+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+10 Percent Damage Bonus<br><br>'+
		'+1 Drifting Death Talent<br>'+
		'+1 Lightning Blast Talent<br>'+
		'+1 Volcano Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+dru.tn[10]+'</p>';
		var m=dru.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.5)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Ignore Resists Of Affected Mobs<br><br>'+
		'+1 Starfire Talent<br>'+
		'+1 Lightning Blast Talent<br>'+
		'+1 Volcano Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+dru.tn[11]+'</p>';
		var m=dru.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.8)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Stuns All Targets<br><br>'+
		'+1 Starfire Talent<br>'+
		'+1 Drifting Death Talent<br>'+
		'+2 Volcano Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+dru.tn[12]+'</p>';
		var m=dru.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.2)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Volcano Summons Thunderstorm<br>'+
		'Reduce Cooldown to 30<br><br>'+
		'+2 Starfire Talent<br>'+
		'+2 Drifting Death Talent<br>'+
		'+2 Lightning Blast Talent';
	}
	return a;
}
g.clericTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+clr.tn[1]+'</p>';
		var m=clr.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*2+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+10 Percent Damage Bonus<br><br>'+
		'+1 Resolution Talent<br>'+
		'+1 Binding Earth Talent<br>'+
		'+1 Holy Wrath Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+clr.tn[2]+'</p>';
		var m=clr.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Health: +'+fix(t*12.5)+' percent'+
			'<br>Casting Haste: +'+fix(t*1.4)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Miracle Saves You From Death. Cannot Happen More Than Once Every 5 Minutes.<br><br>'+
		'+1 Smite Talent<br>'+
		'+1 Binding Earth Talent<br>'+
		'+1 Holy Wrath Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+clr.tn[3]+'</p>';
		var m=clr.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.85)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Holy Wrath Cooldown Reduced to 24 Seconds<br><br>'+
		'+1 Smite Talent<br>'+
		'+1 Resolution Talent<br>'+
		'+2 Holy Wrath Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+clr.tn[4]+'</p>';
		var m=clr.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*9.5)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits 3 Targets<br><br>'+
		'+2 Smite Talent<br>'+
		'+2 Resolution Talent<br>'+
		'+2 Binding Earth Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+clr.tn[5]+'</p>';
		var m=clr.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*8.4)+' percent'+
			'<br>Auto Attack: +'+M.ceil(t/4)+' hits</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'15% Chance Auto Attack Triggers Divine Justice<br><br>'+
		'+1 Martyr\'s Blessing Talent<br>'+
		'+1 Armor of Faith Talent<br>'+
		'+1 Guardian Angel Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+clr.tn[6]+'</p>';
		var m=clr.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*12.5)+' percent'+
			'<br>Damage Received: +'+fix(t*6.3)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Ignore Barrier and Sanctuary Effects<br><br>'+
		'+1 Sound of Force Talent<br>'+
		'+1 Armor of Faith Talent<br>'+
		'+1 Guardian Angel Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+clr.tn[7]+'</p>';
		var m=clr.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Haste: +'+fix(t*1.6)+' percent'+
			'<br>Armor: +'+fix(t*11.3)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'8% Chance Auto Attack Triggers Fist of the Heavens<br><br>'+
		'+1 Sound of Force Talent<br>'+
		'+1 Martyr\'s Blessing Talent<br>'+
		'+2 Guardian Angel Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+clr.tn[8]+'</p>';
		var m=clr.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Absorbs: +'+fix(t*2.25)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'22% Chance Auto Attack Triggers Vicar\'s Wrath While Shield Is Active<br><br>'+
		'+2 Sound of Force Talent<br>'+
		'+2 Martyr\'s Blessing Talent<br>'+
		'+2 Armor of Faith Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+clr.tn[9]+'</p>';
		var m=clr.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.2)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits 3 Targets<br><br>'+
		'+1 Searing Revelation Talent<br>'+
		'+1 Mark of Judgement Talent<br>'+
		'+1 Benediction Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+clr.tn[10]+'</p>';
		var m=clr.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*7.78)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'24% Chance Mobs Act Confused<br><br>'+
		'+1 Expel Corruption Talent<br>'+
		'+1 Mark of Judgement Talent<br>'+
		'+1 Benediction Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+clr.tn[11]+'</p>';
		var m=clr.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.2)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Cooldown Reduced to 20<br><br>'+
		'+1 Expel Corruption Talent<br>'+
		'+1 Searing Revelation Talent<br>'+
		'+2 Benediction Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+clr.tn[12]+'</p>';
		var m=clr.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*9.5)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Spells Always Benefit From Mark of Judgement Status Effects<br><br>'+
		'+2 Expel Corruption Talent<br>'+
		'+2 Searing Revelation Talent<br>'+
		'+2 Mark of Judgement Talent';
	}
	return a;
}
g.shamanTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+shm.tn[1]+'</p>';
		var m=shm.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*2+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+10 Percent Damage Bonus<br><br>'+
		'+1 Togor\'s Insects Talent<br>'+
		'+1 Enstill Talent<br>'+
		'+1 Glacial Impact Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+shm.tn[2]+'</p>';
		var m=shm.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.3)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits All Targets<br><br>'+
		'+1 Frost Strike Talent<br>'+
		'+1 Enstill Talent<br>'+
		'+1 Glacial Impact Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+shm.tn[3]+'</p>';
		var m=shm.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.7)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Root Recovers Health and Mana From Slain Targets<br><br>'+
		'+1 Frost Strike Talent<br>'+
		'+1 Togor\'s Insects Talent<br>'+
		'+2 Glacial Impact Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+shm.tn[4]+'</p>';
		var m=shm.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.5)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits 3 Targets<br><br>'+
		'+2 Frost Strike Talent<br>'+
		'+2 Togor\'s Insects Talent<br>'+
		'+2 Enstill Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+shm.tn[5]+'</p>';
		var m=shm.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.5)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Counter Fear With Glacial Impact<br><br>'+
		'+1 Poison Nova Talent<br>'+
		'+1 Affliction Talent<br>'+
		'+1 Devouring Plague Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+shm.tn[6]+'</p>';
		var m=shm.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.2)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Adds Additional Poison Damage Over Time<br><br>'+
		'+1 Scourge Talent<br>'+
		'+1 Affliction Talent<br>'+
		'+1 Devouring Plague Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+shm.tn[7]+'</p>';
		var m=shm.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.2)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits 3 Targets<br><br>'+
		'+1 Scourge Talent<br>'+
		'+1 Poison Nova Talent<br>'+
		'+2 Devouring Plague Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+shm.tn[8]+'</p>';
		var m=shm.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.8)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Devouring Plague Steals Mana<br><br>'+
		'+2 Scourge Talent<br>'+
		'+2 Poison Nova Talent<br>'+
		'+2 Affliction Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+shm.tn[9]+'</p>';
		var m=shm.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Buff Enhancement: +'+fix(t*2.6)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+42 Percent Attack Haste<br><br>'+
		'+1 Guardian Spirit Talent<br>'+
		'+1 Spirit of the Wolf Talent<br>'+
		'+1 Reclaim Blood Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+shm.tn[10]+'</p>';
		var m=shm.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Health: +'+fix(t*14.7)+' percent'+
			'<br>Damage: +'+fix(t*8.6)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'7% Chance To Maul Victims<br><br>'+
		'+1 Call of the Ancients Talent<br>'+
		'+1 Spirit of the Wolf Talent<br>'+
		'+1 Reclaim Blood Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+shm.tn[11]+'</p>';
		var m=shm.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Attack Power Bonus: +'+fix(t*5.8)+' percent'+
			'<br>Auto Attack: +'+M.ceil(t/5.8)+' hits</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Pet Attacks Hit Twice<br><br>'+
		'+1 Call of the Ancients Talent<br>'+
		'+1 Guardian Spirit Talent<br>'+
		'+2 Reclaim Blood Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+shm.tn[12]+'</p>';
		var m=shm.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Healing Power: +'+fix(t*2.4)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Bloodlust Effect<br><br>'+
		'+2 Call of the Ancients Talent<br>'+
		'+2 Guardian Spirit Talent<br>'+
		'+2 Spirit of the Wolf Talent';
	}
	return a;
}
g.necromancerTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+nec.tn[1]+'</p>';
		var m=nec.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*2.8)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'45-Second Bleed Effect<br><br>'+
		'+1 Ignite Blood Talent<br>'+
		'+1 Bond of Death Talent<br>'+
		'+1 Howling Terror Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+nec.tn[2]+'</p>';
		var m=nec.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.7)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hit All Targets<br><br>'+
		'+1 Drain Soul Talent<br>'+
		'+1 Bond of Death Talent<br>'+
		'+1 Howling Terror Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+nec.tn[3]+'</p>';
		var m=nec.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*3.6)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits 3 Targets<br><br>'+
		'+1 Drain Soul Talent<br>'+
		'+1 Ignite Blood Talent<br>'+
		'+2 Howling Terror Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+nec.tn[4]+'</p>';
		var m=nec.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.4)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Bone Spirit Converted To Explosive Fireball Attack<br>'+
		'Immune to Fear<br><br>'+
		'+2 Drain Soul Talent<br>'+
		'+2 Ignite Blood Talent<br>'+
		'+2 Bond of Death Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+nec.tn[5]+'</p>';
		var m=nec.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Health: +'+fix(t*16.3)+' percent'+
			'<br>Damage: +'+fix(t*4.7)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Bone Spirit Revives Your Pet<br>'+
		'Pet Learns Bash<br><br>'+
		'+1 Augment Death Talent<br>'+
		'+1 Corpse Explosion Talent<br>'+
		'+1 Detonate Soul Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+nec.tn[6]+'</p>';
		var m=nec.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.5)+' percent'+
			'<br>Healing: +'+fix(t*2.25)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Pet Cleaves Targets<br><br>'+
		'+1 Invoke Death Talent<br>'+
		'+1 Corpse Explosion Talent<br>'+
		'+1 Detonate Soul Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+nec.tn[7]+'</p>';
		var m=nec.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.7)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Poison Damage Has 24% Chance To Activate Corpse Explosion<br><br>'+
		'+1 Invoke Death Talent<br>'+
		'+1 Augment Death Talent<br>'+
		'+2 Detonate Soul Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+nec.tn[8]+'</p>';
		var m=nec.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*7.8)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+7 Percent Pet Taunt Rate<br>'+
		'Explosion Chills All Targets<br><br>'+
		'+2 Invoke Death Talent<br>'+
		'+2 Augment Death Talent<br>'+
		'+2 Corpse Explosion Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+nec.tn[9]+'</p>';
		var m=nec.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*2+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+10 Percent Damage Bonus<br><br>'+
		'+1 Cascading Darkness Talent<br>'+
		'+1 Invoke Fear Talent<br>'+
		'+1 Asystole Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+nec.tn[10]+'</p>';
		var m=nec.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.8)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Boost Mana Regeneration By 60%<br><br>'+
		'+1 Bone Spirit Talent<br>'+
		'+1 Invoke Fear Talent<br>'+
		'+1 Asystole Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+nec.tn[11]+'</p>';
		var m=nec.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*1.33)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'20% Chance To Counter Physical Damage With Bone Spirit<br><br>'+
		'+1 Bone Spirit Talent<br>'+
		'+1 Cascading Darkness Talent<br>'+
		'+2 Asystole Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+nec.tn[12]+'</p>';
		var m=nec.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.2)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'15% Bonus To All Magic Damage While Shields Are Active<br>'+
		'Diamond Skin Does Not Expire<br>'+
		'Diamond Skin Cooldown Reduced to 60 Seconds<br><br>'+
		'+2 Bone Spirit Talent<br>'+
		'+2 Cascading Darkness Talent<br>'+
		'+2 Invoke Fear Talent';
	}
	return a;
}
g.enchanterTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+enc.tn[1]+'</p>';
		var m=enc.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*2+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+10 Percent Damage Bonus<br><br>'+
		'+1 Color Shift Talent<br>'+
		'+1 Discordant Barrier Talent<br>'+
		'+1 Mystic Rune Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+enc.tn[2]+'</p>';
		var m=enc.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*8.7)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'35% Chance Of Whirl Till You Hurl, Increasing Stun Duration by 60%<br><br>'+
		'+1 Chaos Flux Talent<br>'+
		'+1 Discordant Barrier Talent<br>'+
		'+1 Mystic Rune Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+enc.tn[3]+'</p>';
		var m=enc.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Armor: +'+fix(t*6.8)+' percent'+
			'<br>Health: +'+fix(t*8.3)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+15 Percent Damage Reduction<br><br>'+
		'+1 Chaos Flux Talent<br>'+
		'+1 Color Shift Talent<br>'+
		'+2 Mystic Rune Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+enc.tn[4]+'</p>';
		var m=enc.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Shield Health: +'+fix(t*2.1)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'While Shields Are Active Damage Is Increased By 20%<br><br>'+
		'+2 Chaos Flux Talent<br>'+
		'+2 Color Shift Talent<br>'+
		'+2 Discordant Barrier Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+enc.tn[5]+'</p>';
		var m=enc.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Pet Damage: +'+fix(t*13.5)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+16 Percent Pet Taunt Rate<br><br>'+
		'+1 Shiftless Deeds Talent<br>'+
		'+1 Enchant Weapon Talent<br>'+
		'+1 Alacrity Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+enc.tn[6]+'</p>';
		var m=enc.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.6)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits 3 Targets<br><br>'+
		'+1 Cajoling Whispers Talent<br>'+
		'+1 Enchant Weapon Talent<br>'+
		'+1 Alacrity Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+enc.tn[7]+'</p>';
		var m=enc.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.2)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Enchant Weapon Double Hits With Random Elemental Type<br><br>'+
		'+1 Cajoling Whispers Talent<br>'+
		'+1 Shiftless Deeds Talent<br>'+
		'+2 Alacrity Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+enc.tn[8]+'</p>';
		var m=enc.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Auto Attack: +'+M.ceil(t/4)+' hits</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Charmed Pets Rapidly Regenerate<br>'+
		'Charm Never Breaks<br><br>'+
		'+2 Cajoling Whispers Talent<br>'+
		'+2 Shiftless Deeds Talent<br>'+
		'+2 Enchant Weapon Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+enc.tn[9]+'</p>';
		var m=enc.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.9)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits 3 Targets<br><br>'+
		'+1 Mesmerize Talent<br>'+
		'+1 Gravity Flux Talent<br>'+
		'+1 Tashania Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+enc.tn[10]+'</p>';
		var m=enc.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*18.5)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+35 Percent Casting Haste<br><br>'+
		'+1 Gasping Embrace Talent<br>'+
		'+1 Gravity Flux Talent<br>'+
		'+1 Tashania Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+enc.tn[11]+'</p>';
		var m=enc.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.3)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Psychic Beam Melts Target Upon Spell Completion<br>'+
		'Cooldown Reduced to 12 Seconds<br><br>'+
		'+1 Gasping Embrace Talent<br>'+
		'+1 Mesmerize Talent<br>'+
		'+2 Tashania Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+enc.tn[12]+'</p>';
		var m=enc.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.8)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Magic Ignores Sanctuary<br><br>'+
		'+2 Gasping Embrace Talent<br>'+
		'+2 Mesmerize Talent<br>'+
		'+2 Gravity Flux Talent';
	}
	return a;
}
g.magicianTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+mag.tn[1]+'</p>';
		var m=mag.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*2+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+10 Percent Damage Bonus<br><br>'+
		'+1 Shield of Lava Talent<br>'+
		'+1 Firestorm Talent<br>'+
		'+1 Armageddon Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+mag.tn[2]+'</p>';
		var m=mag.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*12.8)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Burning Aura<br><br>'+
		'+1 Lava Bolt Talent<br>'+
		'+1 Firestorm Talent<br>'+
		'+1 Armageddon Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+mag.tn[3]+'</p>';
		var m=mag.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.3)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Double The Number of Hits<br><br>'+
		'+1 Lava Bolt Talent<br>'+
		'+1 Shield of Lava Talent<br>'+
		'+2 Armageddon Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+mag.tn[4]+'</p>';
		var m=mag.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.4)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'All Fire Damage Penetrates Resistances<br><br>'+
		'+2 Lava Bolt Talent<br>'+
		'+2 Shield of Lava Talent<br>'+
		'+2 Firestorm Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+mag.tn[5]+'</p>';
		var m=mag.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Health: +'+fix(t*13.1)+' percent'+
			'<br>Damage: +'+fix(t*6.2)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Lava Bolt Revives Your Pet<br><br>'+
		'+1 Burnout Talent<br>'+
		'+1 Reclaim Elements Talent<br>'+
		'+1 Elemental Fury Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+mag.tn[6]+'</p>';
		var m=mag.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.8)+' percent'+
			'<br>Healing: +'+fix(t*2.65)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Pet Hits 3 Targets<br><br>'+
		'+1 Summon Elemental Talent<br>'+
		'+1 Reclaim Elements Talent<br>'+
		'+1 Elemental Fury Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+mag.tn[7]+'</p>';
		var m=mag.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Healing: +'+fix(t*2.2)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Enhance All Healing By 12%<br><br>'+
		'+1 Summon Elemental Talent<br>'+
		'+1 Burnout Talent<br>'+
		'+2 Elemental Fury Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+mag.tn[8]+'</p>';
		var m=mag.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*7.3)+' damage</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Reduce Elemental Fury\'s Cooldown to 20 Seconds<br><br>'+
		'+2 Summon Elemental Talent<br>'+
		'+2 Burnout Talent<br>'+
		'+2 Reclaim Elements Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+mag.tn[9]+'</p>';
		var m=mag.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Armor: +'+fix(t*11.1)+' percent'+
			'<br>Health: +'+fix(t*9.7)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+65 Percent Mana Regeneration<br><br>'+
		'+1 Frozen Orb Talent<br>'+
		'+1 Elemental Armor Talent<br>'+
		'+1 Psionic Storm Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+mag.tn[10]+'</p>';
		var m=mag.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.8)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Freezes Targets<br><br>'+
		'+1 Phantom Plate Talent<br>'+
		'+1 Elemental Armor Talent<br>'+
		'+1 Psionic Storm Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+mag.tn[11]+'</p>';
		var m=mag.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Resistances: +'+fix(t*3.3)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+35 Percent Casting Haste<br><br>'+
		'+1 Phantom Plate Talent<br>'+
		'+1 Frozen Orb Talent<br>'+
		'+2 Psionic Storm Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+mag.tn[12]+'</p>';
		var m=mag.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.1)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits 3 Targets<br><br>'+
		'+2 Phantom Plate Talent<br>'+
		'+2 Frozen Orb Talent<br>'+
		'+2 Elemental Armor Talent';
	}
	return a;
}
g.wizardTalentTooltips=function(){
	var a='';
	if(activeTalent==="talent1"){
		a='<p class="green">'+wiz.tn[1]+'</p>';
		var m=wiz.tal[1];
		if(my.talent1===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent1();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.2)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Convert Ice Bolt To Static Bolt<br><br>'+
		'+1 Arcane Missiles Talent<br>'+
		'+1 Chain Lightning Talent<br>'+
		'+1 Mirror Images Talent';
	}else if(activeTalent==="talent2"){
		a='<p class="green">'+wiz.tn[2]+'</p>';
		var m=wiz.tal[2];
		if(my.talent2===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent2();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.9)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Perfect Channeling<br><br>'+
		'+1 Charged Bolts Talent<br>'+
		'+1 Chain Lightning Talent<br>'+
		'+1 Mirror Images Talent';
	}else if(activeTalent==="talent3"){
		a='<p class="green">'+wiz.tn[3]+'</p>';
		var m=wiz.tal[3];
		if(my.talent3===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent3();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.3)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Reduce Mirror Images and Lightning Spells\' Cooldowns By 50%<br><br>'+
		'+1 Charged Bolts Talent<br>'+
		'+1 Arcane Missiles Talent<br>'+
		'+2 Mirror Images Talent';
	}else if(activeTalent==="talent4"){
		a='<p class="green">'+wiz.tn[4]+'</p>';
		var m=wiz.tal[4];
		if(my.talent4===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent4();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*.8)+' percent of damage</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Enhance Lightning Damage By 15%<br><br>'+
		'+2 Charged Bolts Talent<br>'+
		'+2 Arcane Missiles Talent<br>'+
		'+2 Chain Lightning Talent';
	}else if(activeTalent==="talent5"){
		a='<p class="green">'+wiz.tn[5]+'</p>';
		var m=wiz.tal[5];
		if(my.talent5===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent5();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+t*2+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+10% Damage Bonus to Ice Bolt<br><br>'+
		'+1 Deep Freeze Talent<br>'+
		'+1 Glacial Spike Talent<br>'+
		'+1 Ice Comet Talent';
	}else if(activeTalent==="talent6"){
		a='<p class="green">'+wiz.tn[6]+'</p>';
		var m=wiz.tal[6];
		if(my.talent6===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent6();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.5)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Hits 3 Targets<br><br>'+
		'+1 Ice Bolt Talent<br>'+
		'+1 Glacial Spike Talent<br>'+
		'+1 Ice Comet Talent';
	}else if(activeTalent==="talent7"){
		a='<p class="green">'+wiz.tn[7]+'</p>';
		var m=wiz.tal[7];
		if(my.talent7===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent7();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.3)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Reduce Damage-Based Cold Spells\' Cooldowns By 50%<br><br>'+
		'+1 Ice Bolt Talent<br>'+
		'+1 Deep Freeze Talent<br>'+
		'+2 Ice Comet Talent';
	}else if(activeTalent==="talent8"){
		a='<p class="green">'+wiz.tn[8]+'</p>';
		var m=wiz.tal[8];
		if(my.talent8===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent8();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.5)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Enhance Cold Damage By 15%<br><br>'+
		'+2 Ice Bolt Talent<br>'+
		'+2 Deep Freeze Talent<br>'+
		'+2 Glacial Spike Talent';
	}else if(activeTalent==="talent9"){
		a='<p class="green">'+wiz.tn[9]+'</p>';
		var m=wiz.tal[9];
		if(my.talent9===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent9();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Armor: +'+fix(t*6.1)+' percent'+
			'<br>Health: +'+fix(t*11.3)+' percent</p>';
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'+35 Percent Casting Haste<br><br>'+
		'+1 Fireball Talent<br>'+
		'+1 Harness Ether Talent<br>'+
		'+1 Meteor Talent';
	}else if(activeTalent==="talent10"){
		a='<p class="green">'+wiz.tn[10]+'</p>';
		var m=wiz.tal[10];
		if(my.talent10===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent10();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*5.9)+' percent</p>';
		}
		if(my.level<12){
			a+=lvlReq12;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Convert Ice Bolt To Fire Bolt<br>'+
		'Reduce Counterspell and Fire Spells\' Cooldowns By 50%<br><br>'+
		'+1 Vizier\'s Shielding Talent<br>'+
		'+1 Harness Ether Talent<br>'+
		'+1 Meteor Talent';
	}else if(activeTalent==="talent11"){
		a='<p class="green">'+wiz.tn[11]+'</p>';
		var m=wiz.tal[11];
		if(my.talent11===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent11();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*4.1)+' percent</p>';
		}
		if(my.level<24){
			a+=lvlReq24;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'While Effect Is Active, All Mana Gained Is Doubled<br><br>'+
		'+1 Vizier\'s Shielding Talent<br>'+
		'+1 Fireball Talent<br>'+
		'+2 Meteor Talent';
	}else if(activeTalent==="talent12"){
		a='<p class="green">'+wiz.tn[12]+'</p>';
		var m=wiz.tal[12];
		if(my.talent12===0){
			a+='<p class="red">'+m+'</p>';
		}else{
			var t=talent12();
			a+='<p>'+m+'</p>'+
			'<p>Current Skill Level: '+t+
			'<br>Damage: +'+fix(t*6.7)+' percent</p>';
		}
		if(my.level<36){
			a+=lvlReq36;
		}
		a+='<p class="green">Skill Level 20 Bonus:</p>'+
		'Enhance Fire Damage By 15%<br><br>'+
		'+2 Vizier\'s Shielding Talent<br>'+
		'+2 Fireball Talent<br>'+
		'+2 Harness Ether Talent';
	}
	return a;
}
function reportTalent(){
	var a ='';
	var z = noSpaceClass.charAt(0).toLowerCase() + noSpaceClass.slice(1);
	a = g[z+"TalentTooltips"]();
	D.getElementById('LPtalents').innerHTML=a;
	if(my.job==="Warrior"){
		if(my.talent1>0){ bgp("talent2","-512px 0"); }
		if(my.talent2>0){ bgp("talent3","-1024px 0"); }
		if(my.talent3>0){ bgp("talent4","-448px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-384px 0"); }
		if(my.talent6>0){ bgp("talent7","-704px 0"); }
		if(my.talent7>0){ bgp("talent8","-1088px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-832px 0"); }
		if(my.talent10>0){ bgp("talent11","-576px 0"); }
		if(my.talent11>0){ bgp("talent12","-640px 0"); }
	}
	if(my.job==="Monk"){
		if(my.talent1>0){ bgp("talent2","-960px 0"); }
		if(my.talent2>0){ bgp("talent3","-1088px 0"); }
		if(my.talent3>0){ bgp("talent4","-768px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-320px 0"); }
		if(my.talent6>0){ bgp("talent7","-704px 0"); }
		if(my.talent7>0){ bgp("talent8","-448px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-512px 0"); }
		if(my.talent10>0){ bgp("talent11","-640px 0"); }
		if(my.talent11>0){ bgp("talent12","-1024px 0"); }
	}else if(my.job==="Rogue"){
		if(my.talent1>0){ bgp("talent2","-832px 0"); }
		if(my.talent2>0){ bgp("talent3","-256px 0"); }
		if(my.talent3>0){ bgp("talent4","-448px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-576px 0"); }
		if(my.talent6>0){ bgp("talent7","-896px 0"); }
		if(my.talent7>0){ bgp("talent8","-640px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-1024px 0"); }
		if(my.talent10>0){ bgp("talent11","-384px 0"); } 
		if(my.talent11>0){ bgp("talent12","-768px 0"); } 
	}else if(my.job==="Paladin"){
		if(my.talent1>0){ bgp("talent2","-448px 0"); }
		if(my.talent2>0){ bgp("talent3","-512px 0"); }
		if(my.talent3>0){ bgp("talent4","-960px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-384px 0"); }
		if(my.talent6>0){ bgp("talent7","-704px 0"); }
		if(my.talent7>0){ bgp("talent8","-1088px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-576px 0"); }
		if(my.talent10>0){ bgp("talent11","-768px 0"); } 
		if(my.talent11>0){ bgp("talent12","-896px 0"); } 
	}else if(my.job==="Shadow Knight"){
		if(my.talent1>0){ bgp("talent2","-320px 0"); }
		if(my.talent2>0){ bgp("talent3","-128px -64px"); }
		if(my.talent3>0){ bgp("talent4","-960px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-512px 0"); }
		if(my.talent6>0){ bgp("talent7","-448px 0"); }
		if(my.talent7>0){ bgp("talent8","-576px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-1024px 0"); }
		if(my.talent10>0){ bgp("talent11","-768px 0"); } 
		if(my.talent11>0){ bgp("talent12","-640px 0"); } 
	}else if(my.job==="Ranger"){
		if(my.talent1>0){ bgp("talent2","-896px 0"); }
		if(my.talent2>0){ bgp("talent3","-704px 0"); }
		if(my.talent3>0){ bgp("talent4","-768px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-384px 0"); }
		if(my.talent6>0){ bgp("talent7","-576px 0"); }
		if(my.talent7>0){ bgp("talent8","-640px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-960px 0"); }
		if(my.talent10>0){ bgp("talent11","-1088px 0"); } 
		if(my.talent11>0){ bgp("talent12","-448px 0"); } 
	}else if(my.job==="Bard"){
		if(my.talent1>0){ bgp("talent2","-384px 0"); }
		if(my.talent2>0){ bgp("talent3","-896px 0"); }
		if(my.talent3>0){ bgp("talent4","-960px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-576px 0"); }
		if(my.talent6>0){ bgp("talent7","-832px 0"); }
		if(my.talent7>0){ bgp("talent8","-1088px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-512px 0"); }
		if(my.talent10>0){ bgp("talent11","-704px 0"); } 
		if(my.talent11>0){ bgp("talent12","-1024px 0"); } 
	}else if(my.job==="Druid"){
		if(my.talent1>0){ bgp("talent2","-320px 0"); }
		if(my.talent2>0){ bgp("talent3","-448px 0"); }
		if(my.talent3>0){ bgp("talent4","-896px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-640px 0"); }
		if(my.talent6>0){ bgp("talent7","-704px 0"); }
		if(my.talent7>0){ bgp("talent8","-768px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-512px 0"); }
		if(my.talent10>0){ bgp("talent11","-576px 0"); } 
		if(my.talent11>0){ bgp("talent12","-832px 0"); } 
	}else if(my.job==="Cleric"){
		if(my.talent1>0){ bgp("talent2","-896px 0"); }
		if(my.talent2>0){ bgp("talent3","-384px 0"); }
		if(my.talent3>0){ bgp("talent4","-704px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-576px 0"); }
		if(my.talent6>0){ bgp("talent7","-960px 0"); }
		if(my.talent7>0){ bgp("talent8","-640px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-512px 0"); }
		if(my.talent10>0){ bgp("talent11","-768px 0"); } 
		if(my.talent11>0){ bgp("talent12","-832px 0"); } 
	}else if(my.job==="Shaman"){
		if(my.talent1>0){ bgp("talent2","-384px 0"); }
		if(my.talent2>0){ bgp("talent3","-512px 0"); }
		if(my.talent3>0){ bgp("talent4","-768px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-576px 0"); }
		if(my.talent6>0){ bgp("talent7","-640px 0"); }
		if(my.talent7>0){ bgp("talent8","-832px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-960px 0"); }
		if(my.talent10>0){ bgp("talent11","-1024px 0"); } 
		if(my.talent11>0){ bgp("talent12","-704px 0"); } 
	}else if(my.job==="Necromancer"){
		if(my.talent1>0){ bgp("talent2","-576px 0"); }
		if(my.talent2>0){ bgp("talent3","-704px 0"); }
		if(my.talent3>0){ bgp("talent4","-960px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-512px 0"); }
		if(my.talent6>0){ bgp("talent7","-640px 0"); }
		if(my.talent7>0){ bgp("talent8","-896px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-256px 0"); }
		if(my.talent10>0){ bgp("talent11","-320px 0"); } 
		if(my.talent11>0){ bgp("talent12","-832px 0"); } 
	}else if(my.job==="Enchanter"){
		if(my.talent1>0){ bgp("talent2","-384px 0"); }
		if(my.talent2>0){ bgp("talent3","-896px 0"); }
		if(my.talent3>0){ bgp("talent4","-704px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-512px 0"); }
		if(my.talent6>0){ bgp("talent7","-960px 0"); }
		if(my.talent7>0){ bgp("talent8","-576px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-448px 0"); }
		if(my.talent10>0){ bgp("talent11","-640px 0"); } 
		if(my.talent11>0){ bgp("talent12","-768px 0"); } 
	}else if(my.job==="Magician"){
		if(my.talent1>0){ bgp("talent2","-896px 0"); }
		if(my.talent2>0){ bgp("talent3","-256px 0"); }
		if(my.talent3>0){ bgp("talent4","-704px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-384px 0"); }
		if(my.talent6>0){ bgp("talent7","-576px 0"); }
		if(my.talent7>0){ bgp("talent8","-640px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-320px 0"); }
		if(my.talent10>0){ bgp("talent11","-1024px 0"); } 
		if(my.talent11>0){ bgp("talent12","-512px 0"); } 
	}else if(my.job==="Wizard"){
		if(my.talent1>0){ bgp("talent2","-384px 0"); }
		if(my.talent2>0){ bgp("talent3","-576px 0"); }
		if(my.talent3>0){ bgp("talent4","-1024px 0"); }
		
		if(my.talent5>0){ bgp("talent6","-512px 0"); }
		if(my.talent6>0){ bgp("talent7","-640px 0"); }
		if(my.talent7>0){ bgp("talent8","-768px 0"); }
		
		if(my.talent9>0){ bgp("talent10","-448px 0"); }
		if(my.talent10>0){ bgp("talent11","-896px 0"); } 
		if(my.talent11>0){ bgp("talent12","-960px 0"); } 
	}
}
function updateTalentNotify(){
	if(talentsRemaining()<=0){
		T.set(D.getElementById('talentNotify'), {
			opacity:0
		});
	}
	talentNotifyStatus=false;
}
function CStat(){
	if(talentNotifyStatus===true){
		showTalents();
		updateTalentNotify();
	}
	var _m = my;
	if(statTab==="Main"){
		function altTip(){
			if(_m.job==="Bard"){
				return "singing-based songs";
			}else{
				return "alteration-based spells";
			}
		}
		function evoTip(){
			if(_m.job==="Bard"){
				return "percussion-based songs";
			}else{
				return "evocation-based spells";
			}
		}
		function conTip(){
			if(_m.job==="Bard"){
				return "wind-based songs";
			}else{
				return "conjuration-based spells";
			}
		}
		function abjTip(){
			if(_m.job==="Bard"){
				return "string-based songs";
			}else{
				return "abjuration-based spells";
			}
		}
		function chaTip(){
			if(_m.job==="Bard"){
				return "Improves the damage/effects of brass-based songs";
			}else{
				return "Increases your ability to channel spells without suffering knockback";
			}
		}
		function nextLevelValue(){
			if(_m.level===99){
				return 0;
			}else{
				return (nextLevel()-_m.exp)
			}
		}
		var a = "<table id='charStats1'>"+
			"<tr><td width='180px'>"+_m.title+" "+_m.name+" "+_m.lastName+"</td><td width='95px'>&nbsp;</td></tr>"+
				"<tr><td>"+_m.gender+" "+_m.race+" "+_m.job+"</td><td>&nbsp;</td></tr>"+
				"<tr><td>Level:</td><td>"+_m.level+"</td></tr>"+
				"<tr><td>Next Level:</td><td>"+nextLevelValue()+"</td></tr>"+
				"<tr><td>Total Experience:</td><td>"+_m.exp+"</td></tr>"+
				"<tr><td>Attack:</td><td>"+attackFunct()+"</td></tr>"+
				"<tr><td>Armor:</td><td>"+armorFunct()+"</td></tr>"+
				"<tr><td>Armor vs Target:</td><td>"+zArmorPerc()+"</td></tr>"+
				"<tr><td>Gold:</td><td>"+_m.gold+"</td></tr>"+
				"<tr><td>Health:</td><td><span id='myhp'>"+_m.hp+"</span> / <span>"+_m.maxHp+"</span></td></tr>"+
				"<tr><td>"+zManaType()+"</td><td><span id='mymp'>"+_m.mp+"</span> / <span>"+g.maxMpFunct()+"</span></td></tr>"+
				"<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
				"<tr><td style='color:#ffd700'>Attributes</td><td>&nbsp;</td></tr>"+
				"<tr><td title='Makes melee attacks stronger'>Strength:</td><td>"+strTotal()+"</td></tr>"+
				"<tr><td title='Increases your maximum health'>Stamina:</td><td>"+staTotal()+"</td></tr>"+
				"<tr><td title='Increases physical mitigation, dodge, parry, and riposte'>Agility:</td><td>"+agiTotal()+"</td></tr>"+
				"<tr><td title='Increases crit chance, crit damage, weapon proc chance, and hit chance'>Dexterity:</td><td>"+dexTotal()+"</td></tr>"+
				"<tr><td title='Increases maximum mana for wisdom-based casters, magic mitigation, and healing power'>Wisdom:</td><td>"+wisTotal()+"</td></tr>"+
				"<tr><td title='Increases maximum mana for intelligence-based casters, spell damage, and makes you learn skills faster'>Intelligence:</td><td>"+intTotal()+"</td></tr>"+
				"<tr><td title='Increases item sale value, bard song damage, and affects various enchanter/bard skills'>Charisma:</td><td>"+chaTotal()+"</td></tr>"+
			"</table><table id='charStats2'>"+
				"<tr><td width='180px' style='color:#ffd700'>Skills</td><td width='63px'>&nbsp;</td></tr>"+
				"<tr><td title='Improves damage from one-hand slashing weapons'>One-hand Slashing:</td><td>"+oneHandSlashTotal()+"</td></tr>"+
				"<tr><td title='Improves damage from two-hand slashing weapons'>Two-hand Slashing:</td><td>"+twoHandSlashTotal()+"</td></tr>"+
				"<tr><td title='Improves damage from one-hand blunt weapons'>One-hand Blunt:</td><td>"+oneHandBluntTotal()+"</td></tr>"+
				"<tr><td title='Improves damage from two-hand blunt weapons'>Two-hand Blunt:</td><td>"+twoHandBluntTotal()+"</td></tr>"+
				"<tr><td title='Improves damage from piercing weapons'>Piercing:</td><td>"+piercingTotal()+"</td></tr>"+
				"<tr><td title='Improves damage from hand-to-hand combat'>Hand to Hand:</td><td>"+handToHandTotal()+"</td></tr>"+
				"<tr><td title='Improves all melee damage'>Offense:</td><td>"+offenseTotal()+"</td></tr>"+
				"<tr><td title='Increases the chance of auto attacking with your off-hand'>Dual Wield:</td><td>"+dualWieldTotal()+"</td></tr>"+
				"<tr><td title='Increases the chance of double attacking with your auto attack'>Double Attack:</td><td>"+doubleAttackTotal()+"</td></tr>"+
				"<tr><td title='Improves your armor against melee attacks'>Defense:</td><td>"+defenseTotal()+"</td></tr>"+
				"<tr><td title='Improves your chance of dodging physical attacks'>Dodge:</td><td>"+dodgeTotal()+"</td></tr>"+
				"<tr><td title='Improves your chance of parrying physical attacks'>"+zParryType()+"</td><td>"+parryTotal()+"</td></tr>"+
				"<tr><td title='Improves your chance of riposting physical attacks'>Riposte:</td><td>"+riposteTotal()+"</td></tr>"+
				"<tr><td title='Improves the damage/effects of "+altTip()+"'>"+zAltType()+"</td><td>"+alterationTotal()+"</td></tr>"+
				"<tr><td title='Improves the damage/effects of "+evoTip()+"'>"+zEvoType()+"</td><td>"+evocationTotal()+"</td></tr>"+
				"<tr><td title='Improves the damage/effects of "+conTip()+"'>"+zConjType()+"</td><td>"+conjurationTotal()+"</td></tr>"+
				"<tr><td title='Improves the damage/effects of "+abjTip()+"'>"+zAbjType()+"</td><td>"+abjurationTotal()+"</td></tr>"+
				"<tr><td title='"+chaTip()+"'>"+zChanType()+"</td><td>"+channelingTotal()+"</td></tr></table>";
	}else if(statTab==="Offensive"){
		var a = "<table id='charStats1'>"+
				"<tr><td width='180px' style='color:#ffd700'>Offensive Stats</td><td width='95px'>&nbsp;</td></tr>"+
				"<tr><td title='Chance that your melee attacks will hit your target'>Hit Chance:</td><td>"+(100-g.mobDodgeChance(TGT))+"%</td></tr>"+
				"<tr><td title='Increases your auto attack speed and reduces your weapon delay values'>Attack Haste:</td><td>"+zAttackHaste(true)+" | "+zAttackHaste(false)+"%</td></tr>"+
				"<tr><td title='Reduces your global skill cooldown time'>Skill Haste:</td><td>"+zSkillHaste(true)+" | "+zSkillHaste(false)+"%</td></tr>"+
				"<tr><td title='Reduces the casting time of your spells'>Casting Haste:</td><td>"+zCastHaste(true)+" | "+zCastHaste(false)+"%</td></tr>"+
				"<tr><td title='Increases your critical hit chance'>Critical Chance:</td><td>"+(criticalChance(true).toFixed(1))+" | "+((criticalChance()*100).toFixed(1))+"%</td></tr>"+
				"<tr><td title='Increases your critical hit damage'>Critical Damage:</td><td>"+fix(g.criticalDamage()*100)+"%</td></tr>"+
				"<tr><td title='Increases your reflected damage against melee attacks'>Thorns:</td><td>"+g.thornsEquip+"</td></tr>"+
				"<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
				"<tr><td style='color:#ffd700'>Enhanced Damage</td><td>&nbsp;</td></tr>"+
				"<tr><td title='Increases all melee damage'>Physical:</td><td>"+g.enhancePhysicalEquip+"</td></tr>"+
				"<tr><td title='Increases all poison damage'>Poison:</td><td>"+(g.enhancePoisonEquip+g.enhanceAllEquip)+"</td></tr>"+
				"<tr><td title='Increases all arcane damage'>Arcane:</td><td>"+(g.enhanceMagicEquip+g.enhanceAllEquip)+"</td></tr>"+
				"<tr><td title='Increases all lightning damage'>Lightning:</td><td>"+(g.enhanceLightningEquip+g.enhanceAllEquip)+"</td></tr>"+
				"<tr><td title='Increases all cold damage'>Cold:</td><td>"+(g.enhanceColdEquip+g.enhanceAllEquip)+"</td></tr>"+
				"<tr><td title='Increases all fire damage'>Fire:</td><td>"+(g.enhanceFireEquip+g.enhanceAllEquip)+"</td></tr>"+
			"</table><table id='charStats2'>"+
				"<tr><td width='180px' style='color:#ffd700'>Swordsmanship</td><td width='63px'>&nbsp;</td></tr>"+
				"<tr><td title='The chance of attacking with your off-hand weapon'>Dual Wield Chance:</td><td>"+dualWieldChance().toFixed(1)+"%</td></tr>"+
				"<tr><td title='The chance of double attacking with your auto attack'>Double Attack Chance:</td><td>"+doubleAttackChance().toFixed(1)+"%</td></tr>"+
				"<tr><td title='The chance of parrying a physical attack. Parry restarts your auto attack'>Parry Chance:</td><td>"+parryChance().toFixed(1)+"%</td></tr>"+
				"<tr><td title='The chance of riposting a physical attack'>Riposte Chance:</td><td>"+riposteChance().toFixed(1)+"%</td></tr>"+
				"<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
				"<tr><td width='180px' style='color:#ffd700'>Added Melee Damage</td><td width='63px'>&nbsp;</td></tr>"+
				"<tr><td title='Physical damage added to each melee attack'>Physical Damage:</td><td>"+g.physicalDamageEquip+"</td></tr>"+
				"<tr><td title='Poison damage added to each melee attack'>Poison Damage:</td><td>"+g.poisonDamageEquip+"</td></tr>"+
				"<tr><td title='Arcane damage added to each melee attack'>Arcane Damage:</td><td>"+g.magicDamageEquip+"</td></tr>"+
				"<tr><td title='Lightning damage added to each melee attack'>Lightning Damage:</td><td>"+g.lightningDamageEquip+"</td></tr>"+
				"<tr><td title='Cold damage added to each melee attack'>Cold Damage:</td><td>"+g.coldDamageEquip+"</td></tr>"+
				"<tr><td title='Fire damage added to each melee attack'>Fire Damage:</td><td>"+g.fireDamageEquip+"</td></tr></table>";
	}else if(statTab==="Defensive"){
		var pr = poisonTotal();
		var mr = magicTotal();
		var lr = lightningTotal();
		var cr = coldTotal();
		var fr = fireTotal();
		var a = "<table id='charStats1'>"+
				"<tr><td width='180px' style='color:#ffd700'>Resistances</td><td width='95px'>&nbsp;</td></tr>"+
				"<tr><td title='Resistance against poison attacks'>Resist Poison:</td><td>"+pr+" | "+M.round((pr/400)*100)+"%</td></tr>"+
				"<tr><td title='Resistance against arcane attacks'>Resist Arcane:</td><td>"+mr+" | "+M.round((mr/400)*100)+"%</td></tr>"+
				"<tr><td title='Resistance against lightning attacks'>Resist Lightning:</td><td>"+lr+" | "+M.round((lr/400)*100)+"%</td></tr>"+
				"<tr><td title='Resistance against cold attacks'>Resist Cold:</td><td>"+cr+" | "+M.round((cr/400)*100)+"%</td></tr>"+
				"<tr><td title='Resistance against fire attacks'>Resist Fire:</td><td>"+fr+" | "+M.round((fr/400)*100)+"%</td></tr>"+
				"<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
				"<tr><td style='color:#ffd700'>Absorption</td><td>&nbsp;</td></tr>"+
				"<tr><td title='Health absorbed from each poison attack'>Poison:</td><td>"+g.absorbPoisonEquip+"%</td></tr>"+
				"<tr><td title='Health absorbed from each arcane attack'>Arcane:</td><td>"+g.absorbMagicEquip+"%</td></tr>"+
				"<tr><td title='Health absorbed from each lightning attack'>Lightning:</td><td>"+g.absorbLightningEquip+"%</td></tr>"+
				"<tr><td title='Health absorbed from each cold attack'>Cold:</td><td>"+g.absorbColdEquip+"%</td></tr>"+
				"<tr><td title='Health absorbed from each fire attack'>Fire:</td><td>"+g.absorbFireEquip+"%</td></tr>"+
			"</table><table id='charStats2'>"+
				"<tr><td width='180px' style='color:#ffd700'>Defensive Stats</td><td width='63px'>&nbsp;</td></tr>"+
				"<tr><td title='The chance of using your shield to block a physical or magical attack'>Shield Block Chance:</td><td>"+~~(shieldBlockChance*100)+"%</td></tr>"+
				"<tr><td title='The chance of dodging a physical attack'>Dodge Chance:</td><td>"+dodgeChance().toFixed(1)+"%</td></tr>"+ 
				"<tr><td title='The maximum amount that is randomly subtracted from physical attacks'>Physical Reduction:</td><td>"+physicalMitigation()+"</td></tr>"+
				"<tr><td title='The maximum amount that is randomly subtracted from magical attacks'>Magical Reduction:</td><td>"+magicMitigation()+"</td></tr>"+
				"<tr><td title='Your life leech rating'>Life Leech Rating:</td><td>"+~~(g.leechEquip*100)+"</td></tr>"+
				"<tr><td title='Your mana leech rating'>Mana Leech Rating:</td><td>"+~~(g.wraithEquip)+"</td></tr>"+
				"<tr><td title='Health absorbed from each slain mob'>Health Per Kill:</td><td>"+g.hpKillEquip+"</td></tr>"+
				"<tr><td title='Mana absorbed from each slain mob'>Mana Per Kill:</td><td>"+g.mpKillEquip+"</td></tr>"+ 
				"<tr><td title='Health regeneration per tick'>Health Regeneration:</td><td>"+g.hpRegenEquip+"</td></tr>"+
				"<tr><td title='Mana regeneration per tick'>Mana Regeneration:</td><td>"+g.mpRegenEquip+"</td></tr>"+ 
				"<tr><td title='Your run speed affects your chance to successfully run from battle'>Run Speed:</td><td>"+g.runSpeedEquip+"%</td></tr>"+
				"<tr><td title='Reduces the duration of fear'>Fear Reduction:</td><td>"+g.fearEquip+"%</td></tr>"+
				"<tr><td title='Reduces the duration of stun'>Stun Reduction:</td><td>"+g.stunEquip+"%</td></tr>"+
				"<tr><td title='Reduces the duration of chill'>Chill Reduction:</td><td>"+g.chillEquip+"%</td></tr>"+
				"<tr><td title='Reduces the duration of silence'>Silence Reduction:</td><td>"+g.silenceEquip+"%</td></tr></table>";
	}else if(statTab==="Talents"){
		var	a=	'<div id="LPtalents"></div>'+
				'<div id="RPtalents">'+
					'<div id="talentsLeft">Talent Points Remaining: '+talentsRemaining()+'</div>'+
					'<div id="talentTree1"></div>'+
					'<div id="talentTree2"></div>'+
					'<div id="talentTree3"></div>'+
					'<div id="talent1" class="talentButton strongShadow">'+
						_m.talent1+
					'</div>'+
					'<div id="talent2" class="talentButton strongShadow">'+
						_m.talent2+
					'</div>'+
					'<div id="talent3" class="talentButton strongShadow">'+
						_m.talent3+
					'</div>'+
					'<div id="talent4" class="talentButton strongShadow">'+
						_m.talent4+
					'</div>'+
					'<div id="talent5" class="talentButton strongShadow">'+
						_m.talent5+
					'</div>'+
					'<div id="talent6" class="talentButton strongShadow">'+
						_m.talent6+
					'</div>'+
					'<div id="talent7" class="talentButton strongShadow">'+
						_m.talent7+
					'</div>'+
					'<div id="talent8" class="talentButton strongShadow">'+
						_m.talent8+
					'</div>'+
					'<div id="talent9" class="talentButton strongShadow">'+
						_m.talent9+
					'</div>'+
					'<div id="talent10" class="talentButton strongShadow">'+
						_m.talent10+
					'</div>'+
					'<div id="talent11" class="talentButton strongShadow">'+
						_m.talent11+
					'</div>'+
					'<div id="talent12" class="talentButton strongShadow">'+
						_m.talent12+
					'</div>'+
				'</div>';
	}else if(statTab==="Conquests"){
		var a = "<table id='charStats1'>"+
				"<tr><td width='180px' style='color:#ffd700'>History</td><td width='95px'>&nbsp;</td></tr>"+
				"<tr><td>Days Played:</td><td>"+daysPlayed()+"</td></tr>"+
				"<tr><td>Hours Played:</td><td>"+hoursPlayed()+"</td></tr>"+
				"<tr><td>Minutes Played:</td><td>"+minutesPlayed()+"</td></tr>"+
				"<tr><td title='Total mobs slain'>Kills:</td><td>"+_m.mobsSlain+"</td></tr>"+
				"<tr><td title='Your total deaths'>Deaths:</td><td>"+_m.deaths+"</td></tr>"+
				"<tr><td title='Total champion mobs slain'>Champion Kills:</td><td>"+_m.championsSlain+"</td></tr>"+
				"<tr><td title='Total rare mobs slain'>Rare Kills:</td><td>"+_m.raresSlain+"</td></tr>"+
				"<tr><td title='Total bosses slain'>Bosses Kills:</td><td>"+_m.epicQuests+"</td></tr>"+
				"<tr><td title='Total successful escapes from battle'>Escapes:</td><td>"+_m.escapes+"</td></tr>"+
				"<tr><td>Total Gold Found:</td><td>"+_m.totalGold+"</td></tr>"+
				"<tr><td>Magic Items Found:</td><td>"+_m.magicFound+"</td></tr>"+
				"<tr><td>Rare Items Found:</td><td>"+_m.raresFound+"</td></tr>"+
				"<tr><td>Unique Items Found:</td><td>"+_m.uniquesFound+"</td></tr>"+
				"<tr><td>Set Items Found:</td><td>"+_m.setFound+"</td></tr>"+
				"<tr><td>Equipment Upgrades:</td><td>"+_m.upgrades+"</td></tr>"+
				"<tr><td>Quests Completed:</td><td>"+_m.quests+"</td></tr>"+
			"</table><table id='charStats2'>"+
				"<tr><td width='180px' style='color:#ffd700'>Combo Ratings</td><td width='63px'>&nbsp;</td></tr>"+
				"<tr><td title='Highest rated combo in any zone'>Highest Rated Combo:</td><td>"+_m.comboOverall+"</td></tr>";
				if(_m.comboMistmoore>0){
					a+="<tr><td title='Highest rated combo in Fahlnir Citadel'>Fahlnir Citadel:</td><td>"+_m.comboMistmoore+"</td></tr>";
				}
				if(_m.comboLowerGuk>0){
					a+="<tr><td title='Highest rated combo in Kordata Ruins'>Kordata Ruins:</td><td>"+_m.comboLowerGuk+"</td></tr>";
				}
				if(_m.comboCazicThule>0){
					a+="<tr><td title='Highest rated combo in Temple of Prenssor'>Temple of Prenssor:</td><td>"+_m.comboCazicThule+"</td></tr>";
				}
				if(_m.comboKedgeKeep>0){
					a+='<tr><td title="Highest rated combo in Viston\'s Redoubt">Viston\'s Redoubt:</td><td>'+_m.comboKedgeKeep+'</td></tr>';
				}
				if(_m.comboPermafrost>0){
					a+="<tr><td title='Highest rated combo in Galeblast Fortress'>Galeblast Fortress:</td><td>"+_m.comboPermafrost+"</td></tr>";
				}
				if(_m.comboSolB>0){
					a+="<tr><td title='Highest rated combo in Ashenflow Peak'>Ashenflow Peak:</td><td>"+_m.comboSolB+"</td></tr>";
				}
				if(_m.comboPlaneofHate>0){
					a+="<tr><td title='Highest rated combo in Dire Sanctum'>Dire Sanctum:</td><td>"+_m.comboPlaneofHate+"</td></tr>";
				}
				if(_m.comboPlaneofFear>0){
					a+="<tr><td title='Highest rated combo in Nimgaul'>Nimgaul:</td><td>"+_m.comboPlaneofFear+"</td></tr>";
				}
				a+="<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
				"<tr><td style='color:#ffd700'>Providence</td><td>&nbsp;</td></tr>"+
				"<tr><td title='Increases the amount of gold found'>Gold Gain:</td><td>"+g.goldFindEquip+"%</td></tr>"+
				"<tr><td title='Increases the amount of experience gained from mobs'>Exp Gain:</td><td>"+g.expFindEquip+"%</td></tr>"+
				"<tr><td title='Increases your chance of finding rare treasure'>Magic Find:</td><td>"+g.lightRadiusEquip+"</td></tr>"+
			"</table>";
	}
	NG.statContent.innerHTML=a;
	if(statTab==="Talents"){ reportTalent(); }
	function zArmorPerc(){
		var z;
		if(mobsFound()===false){
			if(Mstr>0){
				var foo = (( armorFunct() * 2)/Mstr).toFixed(1);
				if(foo>80){ foo=80; }
				z = foo+"%";
			}else{
				z = "---";
			}
		}else{
			if(!mob[TGT].name){
				z = "---";
			}else{
				var foo = (( armorFunct() * 2)/mobStrength(TGT)).toFixed(1);
				if(foo>80){ foo=80; }
				z = foo+"%";
			}
		}
		return z;
	}
	function zManaType(){
		var z="Mana:";
		if(_m.job==="Rogue"){ z="Technique Points:"; }
		if(_m.job==="Monk"){ z="Spirit:"; }
		if(_m.job==="Warrior"){ z="Fury Points:"; }
		return z;
	}
	function zAttackHaste(display){
		var foo = M.round(attackHaste(display)*-100);
		return foo;
	}
	function zSkillHaste(display){
		var foo = M.round(50-((phyGlobalTotal(display)/1500)*100) ) ;
		return foo;
	}
	function zCastHaste(display){
		var foo = M.round(50-((castSpeedTotal(1500, display)/1500)*100) );
		return foo;
	}
	function zParryType(){
		var z;
		if(_m.job!=="Monk"){ 
			z="Parry:"; 
		}else{ 
			z="Block:"; 
		}
		return z;
	}
	function zAltType(){
		var z;
		if(_m.job!=="Bard"){ 
			z="Alteration:"; 
		}else{ 
			z="Singing:"; 
		}
		return z;
	}
	function zEvoType(){
		var z;
		if(_m.job!=="Bard"){ 
			z="Evocation:"; 
		}else{ 
			z="Percussion:"; 
		}
		return z;
	}
	function zConjType(){
		var z;
		if(_m.job!=="Bard"){ 
			z="Conjuration:"; 
		}else{ 
			z="Wind:"; 
		}
		return z;
	}
	function zAbjType(){
		var z;
		if(_m.job!=="Bard"){ 
			z="Abjuration:"; 
		}else{ 
			z="String:"; 
		}
		return z;
	}
	function zChanType(){
		var z;
		if(_m.job!=="Bard"){ 
			z="Channeling:"; 
		}else{ 
			z="Brass:"; 
		}
		return z;
	}
}

$("#gameView").on('click', '#inventoryGold, #bankGold', function(){
	if(cityStatus===true||GLB.ks>=6){
		var e = D.getElementById('goldInputWrap');
		var e2 = D.getElementById('goldInput');
		if(e.style.display==="none"){
			// open input
			var def,e3,e4;
			
			if($(this).attr('id')==="inventoryGold"){
				if(my.gold<=0){
					return;
				}
				def = $("#inventoryGoldAmount").text()*1;
				goldTransferMode="deposit";
				e3 = $("#inventoryWindow");
				e4 = $("#inventoryGold");
			}else{
				if(GLB.gold<=0){
					return;
				}
				def = 0;
				goldTransferMode="withdrawal";
				e3 = $("#bank");
				e4 = $("#bankGold");
			}
			var x1 = parseInt(e3.css('left'),10);
			var x2 = parseInt(e4.css('left'),10);
			var y1 = parseInt(e3.css('top'),10);
			var y2 = parseInt(e4.css('top'),10);
			var mouseGoldX = x1 + x2 + 50;
			var mouseGoldY = y1 + y2 - 27;
			if(mouseGoldY<0){
				mouseGoldY=0;
			}
			
			e2.value=0;
			e.style.display="block";
			e.style.left = mouseGoldX+"px";
			e.style.top = mouseGoldY+"px";
			
			
			$("#goldInput").val(def).focus().select();
		}else{
			// close input
			e.style.display="none";
			goldTransferMode='';
		}
	}else{
		QMsg("You can only deposit gold in town.");
	}
});
function writeAllGold(amount){ // character gold | bank gold
	var a = amount.split("|");
	my.gold = a[0]*1;
	GLB.gold = a[1]*1;
	$("#inventoryGoldAmount").text(my.gold);
	$("#cityGold").html("<div id='goldIcon' class='goldIcon'></div> "+my.gold);
	$("#bankGoldAmount").text(GLB.gold);
}
$("#goldInput").on('change keyup keydown blur', function(){
	var e = D.getElementById('goldInput');
	var amount = parseInt(e.value, 10);
	if(goldTransferMode==="deposit"){
		if(amount>my.gold){
			e.value=my.gold;
		}
	}else{
		if(amount>GLB.gold){
			e.value=GLB.gold;
		}
	}
});
$("#goldInput").on('keypress', function(evt){
  var theEvent = evt;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }	
});
$("#gameView").on('click', '.transferGold', function(){
	D.getElementById('goldInputWrap').style.display="none";
	var amount = parseInt(D.getElementById('goldInput').value, 10);
	if(amount>0){
		if(goldTransferMode==="deposit"){
			if(amount<=my.gold){
				g.lockScreen(true);
				$.ajax({
					url: 'php/town1.php',
					data:{
						run:"depositGold",
						amount:amount,
						name:my.name
					}
				}).done(function(data){
					if(data!='no'){
						writeAllGold(data);
						playAudio('buyitem');
					}
					g.unlockScreen();
				}).fail(function(){
					failToCommunicate();
				});
			}
		}else{
			if(amount<=GLB.gold){
				g.lockScreen(true);
				$.ajax({
					url: 'php/town1.php',
					data:{
						run:"withdrawGold",
						amount:amount,
						name:my.name
					}
				}).done(function(data){
					if(data!='no'){
						writeAllGold(data);
						playAudio('buyitem');
					}
					g.unlockScreen();
				}).fail(function(){
					failToCommunicate();
				});
			}
		}
	}
	goldTransferMode='';
});
function setCrystals(){
	$.ajax({
		url: 'php/town1.php',
		data:{
			run:"setCrystals"
		}
	}).done(function(data){
		$("#cityCrystalAmount").text(data);
	});
}


var chatMode=false,
chatTimer=0,
maxChat=0,
spamMeter=0,
spamBan=false,
spamDuration=60000;

function cRem(target, e){
	stage[target].removeChild(e);
}
function cacheAdd(s2, target, x, y, scaleX, scaleY, regCenter, first){
	var e = new C.Bitmap(s2)
	if(scaleX===undefined){ scaleX = 1; }
	if(scaleY===undefined){ scaleY = 1; }
	if(regCenter===true){
		var halfW = e.image.width/2;
		var halfH = e.image.height/2;
		e.set({x:x+halfW, y:y+halfH, scaleX:scaleX, scaleY:scaleY, regX:halfW, regY:halfH});
	}else{
		e.set({x:x, y:y, scaleX:scaleX, scaleY:scaleY});
	}
	if(first===true){
		stage[target].addChildAt(e, 0);
	}else{
		stage[target].addChild(e);
	}
	return e;
}
function img(img, w, h){
    if(w===undefined){ w = 25; }
    if(h===undefined){ h = 25; }
    s1 = new C.Bitmap("images1/"+img+".png");
    s1.cache(0, 0, w, h);
    return s1.cacheCanvas;
}
function can(img, target, x, y, w, h, regCenter, first){ 
	var e = new C.Bitmap("images1/"+img+".png");
	var imgW = e.image.width;
	var imgH = e.image.height;
	var scaleX = w/imgW;
	var scaleY = h/imgH;
	if(regCenter===undefined){ 
		e.setTransform(x, y, scaleX, scaleY, 0, 0, 0, 0, 0);
	}else{
		var halfW = imgW/2;
		var halfH = imgH/2;
		e.setTransform(x+halfW, y+halfH, scaleX, scaleY, 0, 0, 0, halfW, halfH);
	}
	if(!first){
		stage[target].addChild(e);
	}else{
		stage[target].addChildAt(e, 0);
	}
	return e;
}
function equipSound(){
	if(dragged[0].itemSlot==="ring"||
	dragged[0].itemSlot==="neck"||
	dragged[0].type==="trinket"){
		playAudio('equipRing');
	}else if(dragged[0].itemSlot==="weapons"){
		playAudio('equipWeapon');
	}else if(dragged[0].itemSlot==="shield"){
		playAudio('equipShield');
	}else if(dragged[0].type==="plate"){
		playAudio('equipPlate');
	}else if(dragged[0].type==="chain"){
		playAudio('equipChain');
	}else{
		playAudio('equipLeather');
	}
}
var btn = {
	d:{
		chaosflux:false,
        toggleattackId:false,
        gaspingembrace:false,
        cajolingwhispers:false,
        colorshift:false,
        mesmerize:false,
        discordantbarrier:false,
        shiftlessdeeds:false,
        enchantweapon:false,
        adorninggrace:false,
        alacrity:false,
        gravityflux:false,
        mysticrune:false,
        tashania:false,
        clarity:false,
        enthrall:false,
        chargedbolts:false,
        frostnova:false,
        magicmissiles:false,
        fireball:false,
        deepfreeze:false,
        chainlightning:false,
        glacialspike:false,
        iceblock:false,
        icecomet:false,
        counterspell:false,
        harnessEther:false,
        meteor:false,
        mirrorimages:false,
        icebolt:false,
        viziersshielding:false,
        firestorm:false,
        frozenorb:false,
        burnout:false,
        manashield:false,
        psionicstorm:false,
        reclaimelements:false,
        elementalfury:false,
        armageddon:false,
        stasisfield:false,
        alteredstate:false,
        lavabolt:false,
        earthelemental:false,
        airelemental:false,
        fireelemental:false,
        frostelemental:false,
        shieldoflava:false,
        phantomplate:false,
        elementalarmor:false,
        cascadingdarkness:false,
        invokefear:false,
        drainsoul:false,
        feigndeath:false,
        augmentdeath:false,
        igniteblood:false,
        corpseexplosion:false,
        bondofdeath:false,
        diamondskin:false,
        asystole:false,
        detonatesoul:false,
        howlingterror:false,
        bonespirit:false,
        archshielding:false,
        feigndeath:false,
        invokedeath:false,
        scourge:false,
        shmhealing:false,
        togorsinsects:false,
        cannibalize:false,
        enstill:false,
        poisonnova:false,
        affliction:false,
        reclaimblood:false,
        glacialimpact:false,
        devouringplague:false,
        froststrike:false,
        calloftheancients:false,
        guardianspirit:false,
        shmsow:false,
        talismanofaltuna:false,
        smite:false,
        soundofforce:false,
        superiorhealing:false,
        bindingearth:false,
        expelcorruption:false,
        searingrevelation:false,
        martyrsblessing:false,
        guardianangel:false,
        holywrath:false,
        markofjudgement:false,
        benediction:false,
        resolution:false,
        armoroffaith:false,
        divinesanctuary:false,
        symbolofnaltron:false,
        dronesofdoom:false,
        druhealing:false,
        engulfingroots:false,
        driftingdeath:false,
        lightningblast:false,
        earthquake:false,
        hurricane:false,
        sylvangrasp:false,
        volcano:false,
        tornado:false,
        starfire:false,
        skinlikenature:false,
        shieldofspikes:false,
        chloroplast:false,
        drusow:false,
        chordsofdissonance:false,
        chantofbattle:false,
        accelerando:false,
        hymnofrestoration:false,
        songofthesirens:false,
        elementalrhythms:false,
        lucidlullaby:false,
        consonantchain:false,
        dissension:false,
        chorusofclarity:false,
        anthemdearms:false,
        euphonichymn:false,
        shieldofsongs:false,
        desperatedirge:false,
        boastfulbellow:false,
        rangerkickId:false,
        rapidshotId:false,
        countershotId:false,
        trueshotarrowId:false,
        volleyshotId:false,
        lighthealingId:false,
        faerieflameId:false,
        igniteId:false,
        snareId:false,
        wardersrift:false,
        weaponshieldId:false,
        shieldofbramblesId:false,
        thistlecoatId:false,
        feetlikecatId:false,
        rangersowId:false,
        rangertrackId:false,
        shdslamId:false,
        crescentcleaveId:false,
        deathstrikeId:false,
        gaspingfrenzyId:false,
        harmtouchId:false,
        resistcoldId:false,
        addmonsterId:false,
        shdlifetapId:false,
        doomingdarknessId:false,
        heatbloodId:false,
        strengthendeadId:false,
        shdfearId:false,
        siphonstrengthId:false,
        shdfeigndeathId:false,
        shadowvortexId:false,
        shdfeigndeathId:false,
        vampiricembraceId:false,
        summondeadId:false,
        palslamId:false,
        rebukeId:false,
        purgeId:false,
        vengeanceId:false,
        layhandsId:false,
        greaterhealingId:false,
        holymightId:false,
        palrootId:false,
        ardentjudgment:false,
        yaulpId:false,
        cleanseId:false,
        flashoflightId:false,
        valorId:false,
        spiritarmorId:false,
        divineprovidenceId:false,
        symbolofryltanId:false,
        tigerstrikeId:false,
        eaglestrikeId:false,
        cheetahstrikeId:false,
        cobrastrikeId:false,
        dragonstrikeId:false,
        cranekickId:false,
        windmillkickId:false,
        ancestralflurryId:false,
        flyingkickId:false,
        chakrablastId:false,
        feigndeathId:false,
        mendId:false,
        stonefistsId:false,
        intimidationId:false,
        innerpeaceId:false,
        shadowstrikeId:false,
        sonicstrikeId:false,
        hyperstrikeId:false,
        widowstrikeId:false,
        miragestrikeId:false,
        lacerateId:false,
        backstabId:false,
        staggershotId:false,
        lobotomizeId:false,
        prowlinggashId:false,
        evadeId:false,
        coldbloodId:false,
        flashpowderId:false,
        illusivemistId:false,
        ancientwillId:false,
        warriorkickId:false,
        slamId:false,
        avengingstrikeId:false,
        hemorrhageId:false,
        shockwaveId:false,
        pummelId:false,
        subjugateId:false,
        decisiveblowId:false,
        absorbspellId:false,
        frenziedrampageId:false,
        enrageId:false,
        furiousscornId:false,
        triageId:false,
        bulwarkId:false,
		intrepidmightId:false,
		secondwindId:false,
		divineaegisId:false,
		ancestralrampageId:false,
		tunaresglowId:false,
		karanasinfusionId:false,
		sanguinetormentId:false,
		granitevisageId:false,
		shortcircuitId:false,
		runId:false,
		toggleattackId:false,
		addmonsterId:false
	},
	cd:{
		chaosflux:false,
        toggleattackId:false,
        gaspingembrace:false,
        cajolingwhispers:false,
        colorshift:false,
        mesmerize:false,
        discordantbarrier:false,
        shiftlessdeeds:false,
        enchantweapon:false,
        adorninggrace:false,
        alacrity:false,
        gravityflux:false,
        mysticrune:false,
        tashania:false,
        clarity:false,
        enthrall:false,
        chargedbolts:false,
        frostnova:false,
        magicmissiles:false,
        fireball:false,
        deepfreeze:false,
        chainlightning:false,
        glacialspike:false,
        iceblock:false,
        icecomet:false,
        counterspell:false,
        harnessEther:false,
        meteor:false,
        mirrorimages:false,
        icebolt:false,
        viziersshielding:false,
        firestorm:false,
        frozenorb:false,
        burnout:false,
        manashield:false,
        psionicstorm:false,
        reclaimelements:false,
        elementalfury:false,
        armageddon:false,
        stasisfield:false,
        alteredstate:false,
        lavabolt:false,
        earthelemental:false,
        airelemental:false,
        fireelemental:false,
        frostelemental:false,
        shieldoflava:false,
        phantomplate:false,
        elementalarmor:false,
        cascadingdarkness:false,
        invokefear:false,
        drainsoul:false,
        feigndeath:false,
        augmentdeath:false,
        igniteblood:false,
        corpseexplosion:false,
        bondofdeath:false,
        diamondskin:false,
        asystole:false,
        detonatesoul:false,
        howlingterror:false,
        bonespirit:false,
        archshielding:false,
        feigndeath:false,
        invokedeath:false,
        scourge:false,
        shmhealing:false,
        togorsinsects:false,
        cannibalize:false,
        enstill:false,
        poisonnova:false,
        affliction:false,
        reclaimblood:false,
        glacialimpact:false,
        devouringplague:false,
        froststrike:false,
        calloftheancients:false,
        guardianspirit:false,
        shmsow:false,
        talismanofaltuna:false,
        smite:false,
        soundofforce:false,
        superiorhealing:false,
        bindingearth:false,
        expelcorruption:false,
        searingrevelation:false,
        martyrsblessing:false,
        guardianangel:false,
        holywrath:false,
        markofjudgement:false,
        benediction:false,
        resolution:false,
        armoroffaith:false,
        divinesanctuary:false,
        symbolofnaltron:false,
        dronesofdoom:false,
        druhealing:false,
        engulfingroots:false,
        driftingdeath:false,
        lightningblast:false,
        earthquake:false,
        hurricane:false,
        sylvangrasp:false,
        volcano:false,
        tornado:false,
        starfire:false,
        skinlikenature:false,
        shieldofspikes:false,
        chloroplast:false,
        drusow:false,
        chordsofdissonance:false,
        chantofbattle:false,
        accelerando:false,
        hymnofrestoration:false,
        songofthesirens:false,
        elementalrhythms:false,
        lucidlullaby:false,
        consonantchain:false,
        dissension:false,
        chorusofclarity:false,
        anthemdearms:false,
        euphonichymn:false,
        shieldofsongs:false,
        desperatedirge:false,
        boastfulbellow:false,
        rangerkickId:false,
        rapidshotId:false,
        countershotId:false,
        trueshotarrowId:false,
        volleyshotId:false,
        lighthealingId:false,
        faerieflameId:false,
        igniteId:false,
        snareId:false,
        wardersrift:false,
        weaponshieldId:false,
        shieldofbramblesId:false,
        thistlecoatId:false,
        feetlikecatId:false,
        rangersowId:false,
        rangertrackId:false,
        shdslamId:false,
        crescentcleaveId:false,
        deathstrikeId:false,
        gaspingfrenzyId:false,
        harmtouchId:false,
        resistcoldId:false,
        addmonsterId:false,
        shdlifetapId:false,
        doomingdarknessId:false,
        heatbloodId:false,
        strengthendeadId:false,
        shdfearId:false,
        siphonstrengthId:false,
        shdfeigndeathId:false,
        shadowvortexId:false,
        shdfeigndeathId:false,
        vampiricembraceId:false,
        summondeadId:false,
        palslamId:false,
        rebukeId:false,
        purgeId:false,
        vengeanceId:false,
        layhandsId:false,
        greaterhealingId:false,
        holymightId:false,
        palrootId:false,
        ardentjudgment:false,
        yaulpId:false,
        cleanseId:false,
        flashoflightId:false,
        valorId:false,
        spiritarmorId:false,
        divineprovidenceId:false,
        symbolofryltanId:false,
        tigerstrikeId:false,
        eaglestrikeId:false,
        cheetahstrikeId:false,
        cobrastrikeId:false,
        dragonstrikeId:false,
        cranekickId:false,
        windmillkickId:false,
        ancestralflurryId:false,
        flyingkickId:false,
        chakrablastId:false,
        feigndeathId:false,
        mendId:false,
        stonefistsId:false,
        intimidationId:false,
        innerpeaceId:false,
        shadowstrikeId:false,
        sonicstrikeId:false,
        hyperstrikeId:false,
        widowstrikeId:false,
        miragestrikeId:false,
        lacerateId:false,
        backstabId:false,
        staggershotId:false,
        lobotomizeId:false,
        prowlinggashId:false,
        evadeId:false,
        coldbloodId:false,
        flashpowderId:false,
        illusivemistId:false,
        ancientwillId:false,
        warriorkickId:false,
        slamId:false,
        avengingstrikeId:false,
        hemorrhageId:false,
        shockwaveId:false,
        pummelId:false,
        subjugateId:false,
        decisiveblowId:false,
        absorbspellId:false,
        frenziedrampageId:false,
        enrageId:false,
        furiousscornId:false,
        triageId:false,
        bulwarkId:false,
		intrepidmightId:false
	},
	o:{
        chordsofdissonance:false,
        chantofbattle:false,
        accelerando:false,
        hymnofrestoration:false,
        songofthesirens:false,
        elementalrhythms:false,
        lucidlullaby:false,
        consonantchain:false,
        dissension:false,
        chorusofclarity:false,
        anthemdearms:false,
        euphonichymn:false,
        shieldofsongs:false,
        desperatedirge:false,
        boastfulbellow:false
	}
}

$(document).ready(function(){
	$("#window3").on('click','#roguehideId',function(){
		hideRogue();
	}).on('click','#rangertrackId',function(){
		rangerTrack();
	}).on('click','#thistlecoatId',function(){
		thistlecoat();
	}).on('click','#feetlikecatId',function(){
		feetLikeCat();
	}).on('click','#shieldofbramblesId',function(){
		shieldOfBrambles();
	}).on('click','#rangersowId',function(){
		spiritOfTheWolf();
	}).on('click','#valorId',function(){
		valor();
	}).on('click','#spiritarmorId',function(){
		spiritArmor();
	}).on('click','#divineprovidenceId',function(){
		divineProvidence();
	}).on('click','#symbolofryltanId',function(){
		symbolOfRyltan();
	}).on('click','#summondeadId',function(){
		summonDead();
	}).on('click','#vampiricembraceId',function(){
		vampiricEmbrace();
	}).on('click','#resistcoldId',function(){
		resistCold();
	}).on('click','#resolution',function(){
		resolution();
	}).on('click','#armoroffaith',function(){
		armorOfFaith();
	}).on('click','#divinesanctuary',function(){
		divineSanctuary();
	}).on('click','#symbolofnaltron',function(){
		symbolOfNaltron();
	}).on('click','#skinlikenature',function(){
		skinLikeNature();
	}).on('click','#shieldofspikes',function(){
		shieldOfSpikes();
	}).on('click','#drusow',function(){
		druSow();
	}).on('click','#chloroplast',function(){
		chloroplast();
	}).on('click','#calloftheancients',function(){
		callOfTheAncients();
	}).on('click','#shmsow',function(){
		shmSow();
	}).on('click','#guardianspirit',function(){
		guardianSpirit();
	}).on('click','#talismanofaltuna',function(){
		talismanOfAltuna();
	}).on('click','#invokedeath',function(){
		invokeDeath();
	}).on('click','#archshielding',function(){
		archShielding();
	}).on('click','#discordantbarrier',function(){
		discordantBarrier();
	}).on('click','#enchantweapon',function(){
		enchantWeapon();
	}).on('click','#adorninggrace',function(){
		adorningGrace();
	}).on('click','#clarity',function(){
		clarity();
	}).on('click','#earthelemental',function(){
		earthElemental();
	}).on('click','#airelemental',function(){
		airElemental();
	}).on('click','#fireelemental',function(){
		fireElemental();
	}).on('click','#frostelemental',function(){
		frostElemental();
	}).on('click','#shieldoflava',function(){
		shieldOfLava();
	}).on('click','#phantomplate',function(){
		phantomPlate();
	}).on('click','#elementalarmor',function(){
		elementalArmor();
	}).on('click','#viziersshielding',function(){
		viziersShielding();
	}).on('click','#warriorkickId',function(){
		warriorKick();
	}).on('click','#slamId',function(){
		slam();
	}).on('click','#avengingstrikeId',function(){
		avengingStrike();
	}).on('click','#hemorrhageId',function(){
		hemorrhage();
	}).on('click','#shockwaveId',function(){
		shockwave();
	}).on('click','#pummelId',function(){
		pummel();
	}).on('click','#subjugateId',function(){
		subjugate();
	}).on('click','#decisiveblowId',function(){
		decisiveBlow();
	}).on('click','#absorbspellId',function(){
		absorbSpell();
	}).on('click','#frenziedrampageId',function(){
		frenziedRampage();
	}).on('click','#enrageId',function(){
		enrage();
	}).on('click','#furiousscornId',function(){
		furiousScorn();
	}).on('click','#triageId',function(){
		triage();
	}).on('click','#bulwarkId',function(){
		bulwark();
	}).on('click','#intrepidmightId',function(){
		intrepidMight();
	}).on('click','#tigerstrikeId',function(){
		tigerStrike();
	}).on('click','#eaglestrikeId',function(){
		eagleStrike();
	}).on('click','#cheetahstrikeId',function(){
		cheetahStrike();
	}).on('click','#cobrastrikeId',function(){
		cobraStrike();
	}).on('click','#dragonstrikeId',function(){
		dragonStrike();
	}).on('click','#cranekickId',function(){
		craneKick();
	}).on('click','#windmillkickId',function(){
		windmillKick();
	}).on('click','#ancestralflurryId',function(){
		ancestralFlurry();
	}).on('click','#flyingkickId',function(){
		flyingKick();
	}).on('click','#chakrablastId',function(){
		chakraBlast();
	}).on('click','#feigndeathId',function(){
		feignDeath();
	}).on('click','#mendId',function(){
		mend();
	}).on('click','#stonefistsId',function(){
		stoneFists();
	}).on('click','#intimidationId',function(){
		intimidation();
	}).on('click','#innerpeaceId',function(){
		innerPeace();
	}).on('click','#shadowstrikeId',function(){
		shadowStrike();
	}).on('click','#sonicstrikeId',function(){
		sonicStrike();
	}).on('click','#hyperstrikeId',function(){
		hyperStrike();
	}).on('click','#widowstrikeId',function(){
		widowStrike();
	}).on('click','#miragestrikeId',function(){
		mirageStrike();
	}).on('click','#lacerateId',function(){
		lacerate();
	}).on('click','#backstabId',function(){
		backstab();
	}).on('click','#staggershotId',function(){
		staggerShot();
	}).on('click','#lobotomizeId',function(){
		lobotomize();
	}).on('click','#prowlinggashId',function(){
		prowlingGash();
	}).on('click','#evadeId',function(){
		evade();
	}).on('click','#coldbloodId',function(){
		coldBlood();
	}).on('click','#flashpowderId',function(){
		flashPowder();
	}).on('click','#illusivemistId',function(){
		illusiveMist();
	}).on('click','#ancientwillId',function(){
		ancientWill();
	}).on('click','#palslamId',function(){
		palSlam();
	}).on('click','#rebukeId',function(){
		rebuke();
	}).on('click','#purgeId',function(){
		purge();
	}).on('click','#vengeanceId',function(){
		vengeance();
	}).on('click','#layhandsId',function(){
		layHands();
	}).on('click','#greaterhealingId',function(){
		greaterHealing();
	}).on('click','#holymightId',function(){
		holyMight();
	}).on('click','#palrootId',function(){
		palRoot();
	}).on('click','#ardentjudgment',function(){
		ardentJudgment();
	}).on('click','#yaulpId',function(){
		yaulp();
	}).on('click','#flashoflightId',function(){
		flashOfLight();
	}).on('click','#cleanseId',function(){
		cleanse();
	}).on('click','#rangerkickId',function(){
		rangerKick();
	}).on('click','#rapidshotId',function(){
		rapidShot();
	}).on('click','#countershotId',function(){
		counterShot();
	}).on('click','#trueshotarrowId',function(){
		trueshotArrow();
	}).on('click','#volleyshotId',function(){
		volleyShot();
	}).on('click','#lighthealingId',function(){
		lightHealing();
	}).on('click','#wardersrift',function(){
		wardersRift();
	}).on('click','#igniteId',function(){
		ignite();
	}).on('click','#snareId',function(){
		snare();
	}).on('click','#faerieflameId',function(){
		faerieFlame();
	}).on('click','#weaponshieldId',function(){
		weaponShield();
	}).on('click','#shdslamId',function(){
		shdSlam();
	}).on('click','#crescentcleaveId',function(){
		crescentCleave();
	}).on('click','#deathstrikeId',function(){
		deathStrike();
	}).on('click','#gaspingfrenzyId',function(){
		gaspingFrenzy();
	}).on('click','#harmtouchId',function(){
		harmTouch();
	}).on('click','#shdlifetapId',function(){
		shdLifeTap();
	}).on('click','#doomingdarknessId',function(){
		doomingDarkness();
	}).on('click','#heatbloodId',function(){
		heatBlood();
	}).on('click','#strengthendeadId',function(){
		strengthenDead();
	}).on('click','#shdfearId',function(){
		shdFear();
	}).on('click','#siphonstrengthId',function(){
		siphonStrength();
	}).on('click','#shdfeigndeathId',function(){
		shdFeignDeath();
	}).on('click','#shadowvortexId',function(){
		shadowVortex();
	}).on('click','#chordsofdissonance',function(){
		chordsOfDissonance();
	}).on('click','#chantofbattle',function(){
		chantOfBattle();
	}).on('click','#accelerando',function(){
		accelerando();
	}).on('click','#hymnofrestoration',function(){
		hymnOfRestoration();
	}).on('click','#anthemdearms',function(){
		anthemDeArms();
	}).on('click','#boastfulbellow',function(){
		boastfulBellow();
	}).on('click','#elementalrhythms',function(){
		elementalRhythms();
	}).on('click','#lucidlullaby',function(){
		lucidLullaby();
	}).on('click','#consonantchain',function(){
		consonantChain();
	}).on('click','#innerpeaceId',function(){
		innerPeace();
	}).on('click','#dissension',function(){
		dissension();
	}).on('click','#chorusofclarity',function(){
		chorusOfClarity();
	}).on('click','#songofthesirens',function(){
		songOfTheSirens();
	}).on('click','#euphonichymn',function(){
		euphonicHymn();
	}).on('click','#shieldofsongs',function(){
		shieldOfSongs();
	}).on('click','#desperatedirge',function(){
		desperateDirge();
	}).on('click','#smite',function(){
		smite();
	}).on('click','#soundofforce',function(){
		soundOfForce();
	}).on('click','#superiorhealing',function(){
		superiorHealing();
	}).on('click','#bindingearth',function(){
		bindingEarth();
	}).on('click','#expelcorruption',function(){
		expelCorruption();
	}).on('click','#searingrevelation',function(){
		searingRevelation();
	}).on('click','#martyrsblessing',function(){
		martyrsBlessing();
	}).on('click','#guardianangel',function(){
		guardianAngel();
	}).on('click','#holywrath',function(){
		holyWrath();
	}).on('click','#markofjudgement',function(){
		markOfJudgement();
	}).on('click','#benediction',function(){
		benediction();
	}).on('click','#starfire',function(){
		starfire();
	}).on('click','#dronesofdoom',function(){
		dronesOfDoom();
	}).on('click','#druhealing',function(){
		druHealing();
	}).on('click','#tornado',function(){
		tornado();
	}).on('click','#engulfingroots',function(){
		engulfingRoots();
	}).on('click','#driftingdeath',function(){
		driftingDeath();
	}).on('click','#lightningblast',function(){
		lightningBlast();
	}).on('click','#earthquake',function(){
		earthquake();
	}).on('click','#hurricane',function(){
		hurricane();
	}).on('click','#sylvangrasp',function(){
		sylvanGrasp();
	}).on('click','#volcano',function(){
		volcano();
	}).on('click','#froststrike',function(){
		frostStrike();
	}).on('click','#scourge',function(){
		scourge();
	}).on('click','#shmhealing',function(){
		shmHealing();
	}).on('click','#togorsinsects',function(){
		togorsInsects();
	}).on('click','#cannibalize',function(){
		cannibalize();
	}).on('click','#enstill',function(){
		enstill();
	}).on('click','#poisonnova',function(){
		poisonNova();
	}).on('click','#affliction',function(){
		affliction();
	}).on('click','#reclaimblood',function(){
		reclaimBlood();
	}).on('click','#glacialimpact',function(){
		glacialImpact();
	}).on('click','#devouringplague',function(){
		devouringPlague();
	}).on('click','#bonespirit',function(){
		boneSpirit();
	}).on('click','#cascadingdarkness',function(){
		cascadingDarkness();
	}).on('click','#invokefear',function(){
		invokeFear();
	}).on('click','#drainsoul',function(){
		drainSoul();
	}).on('click','#feigndeath',function(){
		necFeignDeath();
	}).on('click','#augmentdeath',function(){
		augmentDeath();
	}).on('click','#igniteblood',function(){
		igniteBlood();
	}).on('click','#corpseexplosion',function(){
		corpseExplosion();
	}).on('click','#bondofdeath',function(){
		bondOfDeath();
	}).on('click','#diamondskin',function(){
		diamondSkin();
	}).on('click','#asystole',function(){
		asystole();
	}).on('click','#detonatesoul',function(){
		detonateSoul();
	}).on('click','#howlingterror',function(){
		howlingTerror();
	}).on('click','#chaosflux',function(){
		chaosFlux();
	}).on('click','#gaspingembrace',function(){
		gaspingEmbrace();
	}).on('click','#cajolingwhispers',function(){
		cajolingWhispers();
	}).on('click','#colorshift',function(){
		colorShift();
	}).on('click','#mesmerize',function(){
		mesmerize();
	}).on('click','#shiftlessdeeds',function(){
		shiftlessDeeds();
	}).on('click','#alacrity',function(){
		alacrity();
	}).on('click','#gravityflux',function(){
		gravityFlux();
	}).on('click','#mysticrune',function(){
		mysticRune();
	}).on('click','#tashania',function(){
		tashania();
	}).on('click','#enthrall',function(){
		enthrall();
	}).on('click','#lavabolt',function(){
		lavaBolt();
	}).on('click','#firestorm',function(){
		firestorm();
	}).on('click','#frozenorb',function(){
		frozenOrb();
	}).on('click','#burnout',function(){
		burnout();
	}).on('click','#manashield',function(){
		manaShield();
	}).on('click','#psionicstorm',function(){
		psionicStorm();
	}).on('click','#reclaimelements',function(){
		reclaimElements();
	}).on('click','#elementalfury',function(){
		elementalFury();
	}).on('click','#armageddon',function(){
		armageddon();
	}).on('click','#stasisfield',function(){
		stasisField();
	}).on('click','#alteredstate',function(){
		alteredState();
	}).on('click','#icebolt',function(){
		iceBolt();
	}).on('click','#chargedbolts',function(){
		chargedBolts();
	}).on('click','#frostnova',function(){
		frostNova();
	}).on('click','#magicmissiles',function(){
		magicMissiles();
	}).on('click','#fireball',function(){
		fireball();
	}).on('click','#deepfreeze',function(){
		deepFreeze();
	}).on('click','#chainlightning',function(){
		chainLightning();
	}).on('click','#glacialspike',function(){
		glacialSpike();
	}).on('click','#iceblock',function(){
		iceBlock();
	}).on('click','#icecomet',function(){
		iceComet();
	}).on('click','#counterspell',function(){
		counterspell();
	}).on('click','#harnessEther',function(){
		harnessEther();
	}).on('click','#meteor',function(){
		meteor();
	}).on('click','#mirrorimages',function(){
		mirrorImages();
	});
	//combat bar
	$("#gameView").on('click','#addmonsterId',function(){
		addMonster();
	}).on('click','#runId',function(){
		run();
	}).on('click','#toggleattackId',function(){
		toggleAutoAttackStatus();
	}).on('click','#secondwindId',function(){
		secondWind();
	}).on('click','#divineaegisId',function(){
		divineAegis();
	}).on('click','#ancestralrampageId',function(){
		ancestralRampage();
	}).on('click','#tunaresglowId',function(){
		tunaresGlow();
	}).on('click','#karanasinfusionId',function(){
		karanasInfusion();
	}).on('click','#sanguinetormentId',function(){
		sanguineTorment();
	}).on('click','#granitevisageId',function(){
		graniteVisage();
	}).on('click','#shortcircuitId',function(){
		shortCircuit();
	}).on('click','#togglepetattackId',function(){
		togglePetAutoAttackStatus();
	}).on('click','#halflinghideId',function(){
		hideRacial();
	});
});
function zoneAmbushOdds(){
	var foo=300; // 21 min
	// mid zones - 11
	var x=myZone();
	if(x==="Kordata Marshlands"||x==="Greenthorn Cavern" ||x==="Riven Grotto"||x==="Lanfeld Outpost"){
		foo = 225; // 15.9 min
		if(my.level<4){ foo=100; }
	}
	// high zones - 16
	if(x==="Braxxen's Bastille" ||x==="Arcturin's Crypt"||x==="Galeblast Fortress"){
		foo = 190; // 13.43 min
		if(my.level<8){ foo=40; }
	}
	// high zones - 16
	if(x==="Fahlnir Citadel"||x==="Temple of Prenssor"){
		foo = 165; // 11.898 min
		if(my.level<20){ foo=20; }
	}
	// end game - 3
	if(x==="Viston's Redoubt"||x==="Ashenflow Peak"||x==="Kordata Ruins"||x==="Dire Sanctum"||x==="Nimgaul"){
		foo = 140; // 9.898 min
		if(my.level<35){ foo=10; }
	}
	return foo;
}
function charToggle(){
	var e = D.getElementById("charsheetId");
	if(charSheetToggle===1){
		charSheetToggle=0;
		CStat();
		e.className="buttonsManageOff";
		e.style.backgroundPosition = "0 -40px";
		$("#window1").css("display","block");
		if(travelStatus===0){ travelToggle(); }
		if(parseInt($("#options").css("top"),10)>=0){ optionsToggle(); }
		return;
	}else{
		e.className="buttonsManage";
		e.style.backgroundPosition = "0 0";
		$("#window1").css("display","none");
		charSheetToggle=1;
	}
}
function bankToggle(){
	if(cityStatus===true||GLB.ks>=6){
		cityMenuClick();
		if(!merchantMode){
				if($("#bank").css("display")==="none"){
					$("#bankContainer").empty();
					$.ajax({
						url: 'php/loadData1.php',
						data:{
							run: "loadBank"
						}
					}).done(function(data){
						var gold = data.gold * 1;
						$('#bankGoldAmount').text(gold);
						GLB.gold = gold;
						maxBankSlots = data.totalBankSlots * 1;
						if(maxBankSlots<1080){
							$("#addBankSlots").css('display','block');
						}
						data.bank.forEach(function(bank, i){
							P.bank[i].name = bank.name;
							if (bank.name){
								console.log('slot: ', i, bank.name);
							}
							var o = JSON.parse(bank.json);
							for (var key in o){
								P.bank[i][key] = o[key];
							}
						});
						
						renderBank(maxBankSlots);
					}).fail(function(){
						QMsg("Server Error. Cannot load bank.");
					});
					$("#bank").css("display","block");
					goldTransferMode='';
				}else{
					$("#bank,#goldInputWrap").css("display","none");
					$("#bankContainer").empty();
					cancelDragging();
				}
		}else{
			Error("You must exit the Merchant before visiting the bank!");
		}
	}
}
function optionsToggle(){
	var x = $("#options");
	var y = D.getElementById("optionsId");
	if(x.css("top")==="-900px"){
		writeOptionsHtml();
		y.className="buttonsManageOff";
		y.style.backgroundPosition = "-120px -40px";
		x.css("top",10);
		if(travelStatus===0){ travelToggle(); }
		if(charSheetToggle===0){ charToggle(); }
		if(inventoryToggle===0){ inventory(); }
		if($("#bank").css("display")==="block"){ bankToggle(); }
	}else{
		y.className="buttonsManage";
		y.style.backgroundPosition = "-120px 0";
		x.css("top",-900);
		$("#options").empty();
	}
}
function questToggle(){
	var x=D.getElementById("questId");
	if(questJournalBlock===1){
		questJournalBlock=0;
		x.className="buttonsManageOff";
		x.style.backgroundPosition = "-240px -40px";
		QupdateJournal();
		$("#questJournal").css("display","block");
		if(parseInt($("#options").css("top"),10)>=0){ optionsToggle(); }
		T.set('#questNotify', {
			opacity:0
		});
	}else{
		x.className="buttonsManage";
		x.style.backgroundPosition = "-240px 0";
		$("#questJournal").css("display","none");
		questJournalBlock=1;
	}
}
function DA(x){ // dAdj
	var adj=0;
	if(g.difficulty===2){ 
		x+=25; 
		if(x<75){
			adj = ~~((75-x)/2);
		}
		x+=adj;
	}
	if(g.difficulty===3){ 
		x+=40;
		if(x<94){
			adj = ~~((94-x)/2);
		}
		x+=adj;
	}
	return x;
}
function writeMapHtml(){
    var x=g.difficulty-1;
    var z='<div id="zoneSelect" class="strongShadow staggeredGrey">'+
		'<div id="mapActWrap">'+
          '<div id="act1" class="zoneSelectHeader">I</div>';
          if(P.Q[x].Crushbone>=4){  
            z+='<div id="act2" class="zoneSelectHeader">II</div>';
          }
          if(P.Q[x].EstateofUnrest>=4){
            z+='<div id="act3" class="zoneSelectHeader">III</div>';
          }
          if(P.Q[x].CazicThule>=4){
            z+='<div id="act4" class="zoneSelectHeader">IV</div>';
          }
		z+='</div>';
      //act1
	if(viewingAct===1){
		z+='<div id="edenburg" class="zoneSelectButton">Edenburg</div>'+
		'<div id="greaterFaydark" class="zoneSelectButton">Salubrin Forest</div>';
		if(P.Q[x].GreaterFaydark>=4){
			z+='<div id="lesserFaydark" class="zoneSelectButton">Tendolin Meadows</div>';
			if(P.Q[x].LesserFaydark>=2){
				z+='<div id="blackburrow1" class="zoneSelectButton">Greenthorn Cavern 1</div>';
				if(P.Q[x].Blackburrow>=2){
				  z+='<div id="blackburrow2" class="zoneSelectButton">Greenthorn Cavern 2</div>';
				}
				if(P.Q[x].Blackburrow>=3){
				  z+='<div id="blackburrow3" class="zoneSelectButton">Greenthorn Cavern 3</div>';
				}
				if(P.Q[x].Blackburrow>=4){
					z+='<div id="befallen1" class="zoneSelectButton">Riven Grotto 1</div>';
					if(P.Q[x].Befallen>=2){
					  z+='<div id="befallen2" class="zoneSelectButton">Riven Grotto 2</div>';
					}
					if(P.Q[x].Befallen>=3){
					  z+='<div id="befallen3" class="zoneSelectButton">Riven Grotto 3</div>';
					}
					if(P.Q[x].Befallen>=4){
						z+='<div id="crushbone1" class="zoneSelectButton">Lanfeld Outpost 1</div>';
						if(P.Q[x].Crushbone>=2){
						  z+='<div id="crushbone2" class="zoneSelectButton">Lanfeld Outpost 2</div>';
						}
						if(P.Q[x].Crushbone>=3){
						  z+='<div id="crushbone3" class="zoneSelectButton">Lanfeld Outpost 3</div>';
						}
					}
				}
			}
		}
	}
	//act2
	if(viewingAct===2){
		if(P.Q[x].Crushbone>=4){
		  z+='<div id="surefallGlade" class="zoneSelectButton">Aspen Grove</div>';
		  if(P.Q[x].Najena>=1){
			z+='<div id="najena1" class="zoneSelectButton">Braxxen\'s Bastille 1</div>';
		  }
		  if(P.Q[x].Najena>=2){
			z+='<div id="najena2" class="zoneSelectButton">Braxxen\'s Bastille 2</div>';
		  }
		  if(P.Q[x].Najena>=3){
			z+='<div id="najena3" class="zoneSelectButton">Braxxen\'s Bastille 3</div>';
		  }
			if(P.Q[x].Najena>=4){
			  z+='<div id="upperGuk1" class="zoneSelectButton">Kordata Marshlands 1</div>';
			  if(P.Q[x].UpperGuk>=2){
				z+='<div id="upperGuk2" class="zoneSelectButton">Kordata Marshlands 2</div>';
			  }
			  if(P.Q[x].UpperGuk>=3){
				z+='<div id="upperGuk3" class="zoneSelectButton">Kordata Marshlands 3</div>';
			  }
			  if(P.Q[x].UpperGuk>=4){
				  z+='<div id="unrest1" class="zoneSelectButton">Arcturin\'s Crypt 1</div>';
				  if(P.Q[x].EstateofUnrest>=2){
					z+='<div id="unrest2" class="zoneSelectButton">Arcturin\'s Crypt 2</div>';
				  }
				  if(P.Q[x].EstateofUnrest>=3){
					z+='<div id="unrest3" class="zoneSelectButton">Arcturin\'s Crypt 3</div>';
				  }
			  }
			}
		}
	}
	//act3
	if(viewingAct===3){
		if(P.Q[x].EstateofUnrest>=4){
			z+='<div id="artremia" class="zoneSelectButton">Artremia</div>';
			if(P.Q[x].CastleMistmoore>=1){
				z+='<div id="castleMistmoore1" class="zoneSelectButton">Fahlnir Citadel 1</div>';
			}
			if(P.Q[x].CastleMistmoore>=2){
				z+='<div id="castleMistmoore2" class="zoneSelectButton">Fahlnir Citadel 2</div>';
			}
			if(P.Q[x].CastleMistmoore>=3){
				z+='<div id="castleMistmoore3" class="zoneSelectButton">Fahlnir Citadel 3</div>';
			}
		  if(P.Q[x].CastleMistmoore>=4){
			  z+='<div id="lowerGuk1" class="zoneSelectButton">Kordata Ruins 1</div>';
			  if(P.Q[x].LowerGuk>=2){
				z+='<div id="lowerGuk2" class="zoneSelectButton">Kordata Ruins 2</div>';
			  }
			  if(P.Q[x].LowerGuk>=3){
				z+='<div id="lowerGuk3" class="zoneSelectButton">Kordata Ruins 3</div>';
			  }
			  if(P.Q[x].LowerGuk>=4){
				  z+='<div id="cazic1" class="zoneSelectButton">Temple of Prenssor 1</div>';
				  if(P.Q[x].CazicThule>=2){
					z+='<div id="cazic2" class="zoneSelectButton">Temple of Prenssor 2</div>';
				  }
				  if(P.Q[x].CazicThule>=3){
					z+='<div id="cazic3" class="zoneSelectButton">Temple of Prenssor 3</div>';
				  }
			  }
		  }
		}
	}
	//act4
	if(viewingAct===4){
		if(P.Q[x].CazicThule>=4){
			z+='<div id="fenwoven" class="zoneSelectButton">Fenwoven</div>';
			if(P.Q[x].KedgeKeep>=1){
				z+='<div id="kedge1" class="zoneSelectButton">Viston\'s Redoubt 1</div>';
			}
			if(P.Q[x].KedgeKeep>=2){
				z+='<div id="kedge2" class="zoneSelectButton">Viston\'s Redoubt 2</div>';
			}
			if(P.Q[x].KedgeKeep>=3){
				z+='<div id="kedge3" class="zoneSelectButton">Viston\'s Redoubt 3</div>';
			}
			if(P.Q[x].KedgeKeep>=4){
				z+='<div id="kedge4" class="zoneSelectButton">Viston\'s Redoubt 4</div>';
			}
			if(P.Q[x].KedgeKeep>=5){
				z+='<div id="permafrost1" class="zoneSelectButton">Galeblast Fortress 1</div>';
				if(P.Q[x].PermafrostKeep>=2){
				z+='<div id="permafrost2" class="zoneSelectButton">Galeblast Fortress 2</div>';
				}
				if(P.Q[x].PermafrostKeep>=3){
				z+='<div id="permafrost3" class="zoneSelectButton">Galeblast Fortress 3</div>';
				}
				if(P.Q[x].PermafrostKeep>=4){
				z+='<div id="permafrost4" class="zoneSelectButton">Galeblast Fortress 4</div>';
				}
				if(P.Q[x].PermafrostKeep>=5){
					z+='<div id="solb1" class="zoneSelectButton">Ashenflow Peak 1</div>';
					if(P.Q[x].NagafensLair>=2){
						z+='<div id="solb2" class="zoneSelectButton">Ashenflow Peak 2</div>';
					}
					if(P.Q[x].NagafensLair>=3){
						z+='<div id="solb3" class="zoneSelectButton">Ashenflow Peak 3</div>';
					}
					if(P.Q[x].NagafensLair>=4){
						z+='<div id="solb4" class="zoneSelectButton">Ashenflow Peak 4</div>';
					}
					if(P.Q[x].NagafensLair>=5){
						z+='<div id="planeofhate" class="zoneSelectButton">Dire Sanctum</div>';
					}
					if(P.Q[x].PlaneofHate>=2){
						z+='<div id="planeoffear" class="zoneSelectButton">Nimgaul</div>';
					}
				}
			}
		}
	}
	z+='</div>';
	D.getElementById('zoneSelectWrap').innerHTML=z;
	$("#act"+viewingAct).addClass('viewingAct');
	if($("#NGmap").length===0){
		var map = D.createElement('div');
		map.style.position='absolute';
		map.style.top='0px';
		map.style.left='-5px';
		map.style.width='1280px';
		map.style.height='720px';
		map.id = 'NGmap';
		map.style.background = "url('//i.imgur.com/d1iYz2W.jpg')";
		$("#travelMap").prepend(map);
		var marker = D.createElement('div');
		marker.style.top='0px';
		marker.id = "zoneMarker";
		$("#NGmap").append(marker);
	}
}
function travelToggle(){
	if(g.view==="Game"){
		if(my.hp<=0){return;}
		if(mobsFound()===true){
			QMsg("This menu is disabled during combat.");
			return;
		}
		var e = D.getElementById("travelId");
		if(travelStatus===1){
			e.className="buttonsManageOff";
			e.style.backgroundPosition = "-80px -40px";
			$("#worldMap").css("top",0);
			travelStatus=0;
			writeMapHtml();
			initNG();
			initNG2();
			positionMap();
			T.set('#mapNotify', {
				opacity:0
			});
		}else{
			e.className="buttonsManage";
			e.style.backgroundPosition = "-80px 0";
			$("#worldMap").css("top",-900);
			travelStatus=1;
		}
	}
}
function writeGearHtml(){
	var z="";
	z+='<li id="helmetBG" class="equipmentBG helmet">HELMET'+
			'<img id="helmet" src="" class="equipment">'+
		'</li>'+
		'<li id="neckBG" class="equipmentBG neck">NECK'+
			'<img id="neck" src="" class="equipment">'+
		'</li>'+
		'<li id="ring1BG" class="equipmentBG ring1">RING1'+
			'<img id="ring1" src="" class="equipment">'+
		'</li>'+
		'<li id="ring2BG" class="equipmentBG ring2">RING2'+
			'<img id="ring2" src="" class="equipment">'+
		'</li>'+
		'<li id="shouldersBG" class="equipmentBG shoulders">SHOULDERS'+
			'<img id="shoulders" src="" class="equipment">'+
		'</li>'+
		'<li id="backBG" class="equipmentBG back">BACK'+
			'<img id="back" src="" class="equipment">'+
		'</li>'+
		'<li id="chestBG" class="equipmentBG chest">CHEST'+
			'<img id="chest" src="" class="equipment">'+
		'</li>'+
		'<li id="bracersBG" class="equipmentBG bracers">BRACERS'+
			'<img id="bracers" src="" class="equipment">'+
		'</li>'+
		'<li id="glovesBG" class="equipmentBG gloves">GLOVES'+
			'<img id="gloves" src="" class="equipment">'+
		'</li>'+
		'<li id="beltBG" class="equipmentBG belt">BELT'+
			'<img id="belt" src="" class="equipment">'+
		'</li>'+
		'<li id="legsBG" class="equipmentBG legs">LEGS'+
			'<img id="legs" src="" class="equipment">'+
		'</li>'+
		'<li id="bootsBG" class="equipmentBG boots">BOOTS'+
			'<img id="boots" src="" class="equipment">'+
		'</li>'+
		'<li id="weapon1BG" class="equipmentBG weapon1">PRIMARY'+
			'<img id="weapon1" src="" class="equipment">'+
		'</li>'+
		'<li id="weapon2BG" class="equipmentBG weapon2">SECONDARY'+
			'<img id="weapon2" src="" class="equipment">'+
		'</li>'+
		'<li id="rangeBG" class="equipmentBG range">RANGE'+
			'<img id="range" src="" class="equipment">'+
		'</li>';
	D.getElementById('gearContainer').innerHTML=z;
	D.getElementById('inventoryGoldAmount').textContent=my.gold;
	var foo="";
	for(var i=0;i<=23;i++){
		foo +=	"<li class='inventoryBG' id='inv"+i+"BG'>ITEM"+
					"<img src='images1/blank.png' id='inv"+i+"' class='inventory'>"+
				"</li>";
	}
	D.getElementById('inventoryContainer').innerHTML=foo;
	initNG2();
	updateEquipment();
	updateInventory();
}
function inventory(){
	var e = $("#destroyItem");
	if(GLB.ks>=7){
		e.text("Sell");
	}else{
		e.text("Destroy");
	}
	var e = D.getElementById("inventoryId");
	if(inventoryToggle===1){
		writeGearHtml();
		e.className="buttonsManageOff";
		e.style.backgroundPosition = "-40px -40px";
		$("#inventoryWindow").css("display","block");
		inventoryToggle=0;
		if(travelStatus===0){ travelToggle(); }
		if(parseInt($("#options").css("top"),10)>=0){ optionsToggle(); }
		T.set('#itemNotify', {
			opacity:0
		});
	}else{
		e.className="buttonsManage";
		e.style.backgroundPosition = "-40px 0";
		$("#inventoryWindow,#goldInputWrap").css("display","none");
		cancelDragging();
		inventoryToggle=1;
		D.getElementById('gearContainer').innerHTML='';
		D.getElementById('inventoryContainer').innerHTML='';
		goldTransferMode='';
	}
}
function writeOptionsHtml(){
	var z="";
	z+=	'<div id="optionsTable">'+
			'<div id="optionHeader" class="strongShadow winHeader">Options</div>'+
			'<table id="optionSettingWrap" class="strongShadow" width="100%">'+
				'<tr>'+
					'<td class="optionLeft">'+
						'<div id="tooltipStatus" class="optionButtonWrap">'+GLB.tooltipMode+'</div>'+
					'</td>'+
					'<td class="optionRight">'+
						'Tooltip Status: Choose between Long, Short, and Off. Long tooltips show full explanations of each skill.'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="optionLeft">'+
						'<div id="normalFilter" class="optionButtonWrap lootFilter">'+Lmy.normalFilter+'</div>'+
					'</td>'+
					'<td class="optionRight">'+
						'Normal Item Filter : Set your <b>normal item</b> filter by quality.'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="optionLeft">'+
						'<div id="magicFilter" class="optionButtonWrap lootFilter">'+Lmy.magicFilter+'</div>'+
					'</td>'+
					'<td class="optionRight">'+
						'Magic Item Filter : Set your <b>'+magical("magic item")+'</b> filter by quality.'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="optionLeft">'+
						'<div id="rareFilter" class="optionButtonWrap lootFilter">'+Lmy.rareFilter+'</div>'+
					'</td>'+
					'<td class="optionRight">'+
						'Rare Item Filter : Set your <b>'+rare("rare item")+'</b> filter by quality.'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="optionLeft">'+
						'<div id="uniqueFilter" class="optionButtonWrap lootFilter">'+Lmy.uniqueFilter+'</div>'+
					'</td>'+
					'<td class="optionRight">'+
						'Unique Item Filter : Set your <b>'+unique("unique item")+'</b> filter by quality.'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="optionLeft">'+
						'<div id="setFilter" class="optionButtonWrap lootFilter">'+Lmy.setFilter+'</div>'+
					'</td>'+
					'<td class="optionRight">'+
						'Set Item Filter : Set your <b>'+set("set item")+'</b> filter by quality.'+
					'</td>'+
				'</tr>';
				if(isMobile===false){
					z+='<tr>'+
						'<td class="optionLeft">'+
							'<div id="showCombatLog" class="optionButtonWrap">'+GLB.showCombatLog+'</div>'+
						'</td>'+
						'<td class="optionRight">'+
							'Show Combat Log: Show or hide the combat log. Performance will improve while off.'+
						'</td>'+
					'</tr>'+
					'<tr>'+
						'<td class="optionLeft">'+
							'<div id="spamFilter" class="optionButtonWrap">'+GLB.chatMyHit+'</div>'+
						'</td>'+
						'<td class="optionRight">'+
							'Combat Spam: Enable or Disable your own damage messages.'+
						'</td>'+
					'</tr>';
				}
				z+='<tr>'+
					'<td class="optionLeft">'+
						'<div id="weatherStatus" class="optionButtonWrap">'+GLB.videoSetting+'</div>'+
					'</td>'+
					'<td class="optionRight">'+
						'Video Settings: Use video settings that work best on your device.'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="optionLeft">'+
						'<div id="autoAttackOption" class="optionButtonWrap">'+Lmy.autoAttackOption+'</div>'+
					'</td>'+
					'<td class="optionRight">'+
						'Auto Attack: Automatically begin your auto attack when entering battle or when using melee skills.'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="optionLeft">'+
						'<div id="hideMenu" class="optionButtonWrap">'+GLB.hideMenu+'</div>'+
					'</td>'+
					'<td class="optionRight">'+
						'Auto Hide Menu: Set whether the menu automatically fades out.'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="optionLeft">'+
						'<div id="fastDestroy" class="optionButtonWrap">'+GLB.fastDestroy+'</div>'+
					'</td>'+
					'<td class="optionRight">'+
						'Fast Destroy: Destroys items in one click. If turned off it takes two clicks.'+
					'</td>'+
				'</tr>';
				if(isMobile===false){
					z+='<tr>'+
						'<td class="optionLeft">'+
							'<div id="debugMode" class="optionButtonWrap">'+GLB.debugMode+'</div>'+
						'</td>'+
						'<td class="optionRight">'+
							'Debug Mode: Enable debug messages to help report bugs in the game.'+
						'</td>'+
					'</tr>'+
					'<tr>'+
						'<td class="optionLeft2">'+
							'<div id="audioUp" class="audioAdjust">▲</div>'+
							'<div id="audioDown" class="audioAdjust">▼</div>'+
						'</td>'+
						'<td class="optionRight">Audio Volume: <span id="soundStatus">'+GLB.soundStatus+'</span></td>'+
					'</tr>'+
					'<tr>'+
						'<td class="optionLeft2">'+
							'<div id="audioUp2" class="audioAdjust">▲</div>'+
							'<div id="audioDown2" class="audioAdjust">▼</div>'+
						'</td>'+
						'<td class="optionRight">Music Volume: <span id="musicStatus">'+GLB.musicStatus+'</span></td>'+
					'</tr>';
				}
			z+='</table>'+
			'<div id="hotkeys" class="strongShadow">Hotkeys</div>'+
			'<table id="hotkeyTable" width="100%" style="padding:10px">'+
				'<tr>'+
					'<td class="controlLeft">'+
						'1-0'+
					'</td>'+
					'<td class="controlRight">'+
						'Row 1 Buttons'+
					'</td>'+
					'<td class="controlLeft">'+
						'SHIFT+1-0'+
					'</td>'+
					'<td class="controlRight">'+
						'Row 2 Buttons'+
					'</td>'+
					'<td class="controlLeft">'+
						'ESC'+
					'</td>'+
					'<td width="18%" class="controlRight">'+
						'Pause'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="controlLeft">'+
						'SPACE BAR'+
					'</td>'+
					'<td class="controlRight">'+
						'Cancel Spell / Close Windows'+
					'</td>'+
					'<td class="controlLeft">'+
						'SPACE BAR'+
					'</td>'+
					'<td class="controlRight">'+
						'Clear All Windows'+
					'</td>'+
					'<td class="controlLeft">'+
						'B'+
					'</td>'+
					'<td class="controlRight">'+
						'Bank'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="controlLeft">'+
						'G'+
					'</td>'+
					'<td class="controlRight">'+
						'Inventory'+
					'</td>'+
					'<td class="controlLeft">'+
						'C'+
					'</td>'+
					'<td class="controlRight">'+
						'Character Sheet'+
					'</td>'+
					'<td class="controlLeft">'+
						'X'+
					'</td>'+
					'<td class="controlRight">'+
						'Options'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="controlLeft">'+
						'TAB'+
					'</td>'+
					'<td class="controlRight">'+
						'Next Target'+
					'</td>'+
					'<td class="controlLeft">'+
						'SHIFT+TAB'+
					'</td>'+
					'<td class="controlRight">'+
						'Previous Target'+
					'</td>'+
					'<td class="controlLeft">'+
						'SHIFT+R'+
					'</td>'+
					'<td class="controlRight">'+
						'Run'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="controlLeft">'+
						'A'+
					'</td>'+
					'<td class="controlRight">'+
						'Toggle Attack'+
					'</td>'+
					'<td class="controlLeft">'+
						'SHIFT+A'+
					'</td>'+
					'<td class="controlRight">'+
						'Set Pet Target'+
					'</td>'+
					'<td class="controlLeft">'+
						'D'+
					'</td>'+
					'<td class="controlRight">'+
						'Pull Next Monster'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="controlLeft">'+
						'S'+
					'</td>'+
					'<td width="18%" class="controlRight">'+
						'Use Racial Skill'+
					'</td>'+
					'<td class="controlLeft">'+
						'M or Z'+
					'</td>'+
					'<td class="controlRight">'+
						'Show Map'+
					'</td>'+
					'<td class="controlLeft">'+
						'T'+
					'</td>'+
					'<td class="controlRight">'+
						'Show Talents'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="controlLeft">'+
						'CTRL+Left Click'+
					'</td>'+
					'<td width="18%" class="controlRight">'+
						'Fast Sell at Merchant'+
					'</td>'+
					'<td class="controlLeft">'+
						'Q'+
					'</td>'+
					'<td class="controlRight">'+
						'Quest Journal'+
					'</td>'+
					'<td class="controlLeft">'+
						'Hold SHIFT'+
					'</td>'+
					'<td class="controlRight">'+
						'Compare Equipped Item'+
					'</td>'+
				'</tr>'+
			'</table>'+
		'</div>';
	D.getElementById('options').innerHTML=z;
}
function camp(){
	if(g.view==="Game"){
		if(my.hardcoreMode==='true' && my.hp<=0){
		}else{
			if(mobsFound()===true){
				Error(("You cannot camp during a battle!"));
				return;
			}
		}
		window.onbeforeunload = null;
		campStatus=true;
		QMsg("Saving Game... Please Wait");
		saveButtonPositions();
		saveGame();
	}
}

//click targeting
$(document).ready(function(){
	$("#mobPic0,#mobPic1,#mobPic2,#mobPic3,#mobPic4").on('click',function(){
		if(paused===true){ return; }
		if(confuseStatus===true){
			Chat("You cannot change targets while confused.");
			return;
		}
		if(g.blindStatus===0){
			Chat("You cannot change targets while lost in a Globe of Darkness.");
			return;
		}
		var drawHp=false;
		var oldTGT=TGT;
		var foo=this.id;
		var kek=parseInt(foo.slice(-1));
		TGT=kek;
		if(mobsFound()===false){
			if(kek===2){
				myAttack.kill();
				myAttack2.kill();
				myAttack = T.delayedCall(0, getDamage);
				myAttack2 = T.delayedCall(0, getDamage2);
				autoAttackTimer(0);
				attackOn(true);
				return;
			}
		}
		if(TGT===oldTGT){
			drawHp=true;
			if(my.job==="Warrior"){
				avengingStrike();
			}else if(my.job==="Monk"){
				tigerStrike();
			}else if(my.job==="Rogue"){
				shadowStrike();
			}else if(my.job==="Paladin"){
				purge();
			}else if(my.job==="Shadow Knight"){
				crescentCleave();
			}else if(my.job==="Ranger"){
				rapidShot();
			}else if(my.job==="Bard"){
				chordsOfDissonance();
			}else if(my.job==="Druid"){
				starfire();
			}else if(my.job==="Cleric"){
				smite();
			}else if(my.job==="Shaman"){
				frostStrike();
			}else if(my.job==="Necromancer"){
				boneSpirit();
			}else if(my.job==="Enchanter"){
				chaosFlux();
			}else if(my.job==="Magician"){
				lavaBolt();
			}else if(my.job==="Wizard"){
				iceBolt();
			}
		}
		if(mob[TGT].name===""){
			TGT=oldTGT;
			return;
		}
		updateTargetedMob(drawHp);
	});
});
//tab targeting
function tabTarget(){ //auto triggering
	var x=countMobs();
	if(x===0){return;}
	if(g.blindStatus===0){ Chat("You cannot change targets while lost in a Globe of Darkness."); return; }
	if(confuseStatus===true){ return; }
	TGT++;
	if(TGT>4){ TGT=0; }
	if(mob[TGT].name){
		updateTargetedMob();
	}else{
		targetNextMob();
	}
}
//call when there are multiple monsters - acts as a tab
function targetNextMob(){
	var x=countMobs();
	if(x===0){return;}
	TGT++;
	if(TGT>4){ TGT=0; }
	if(x===1){
		if(mob[TGT].name){
			updateTargetedMob();
		}else{
			targetNextMob();
		}
	}else{
		if(mob[TGT].name&&!mob[TGT].charmStatus){
			updateTargetedMob();
		}else{
			targetNextMob();
		}
	}
}
function targetLastMob(){
	var x=countMobs();
	if(x<1){return;}
	TGT--;
	if(TGT<0){ TGT=4; }
	if(x===1){
		if(mob[TGT].name){
			updateTargetedMob();
		}else{
			targetLastMob();
		}
	}else{
		if(mob[TGT].name&&!mob[TGT].charmStatus){
			updateTargetedMob();
		}else{
			targetLastMob();
		}
	}
}

function updateTargetedMob(drawHp){
	CStat();
	for(var i=0;i<=4;i++){
		if(i!==TGT){
			MOBNAME[i].style.color='#00FA9A';
			MOBSHADOW[i].src="//i.imgur.com/7bn79bN.png";
		}
	}
	if(g.autoAttackStatus===0){
		MOBNAME[TGT].style.color="#f33";
		MOBSHADOW[TGT].src="//i.imgur.com/fnHtalN.png";
	}else{
		MOBNAME[TGT].style.color="#ff0";
	}
	NG.mobName.textContent=mob[TGT].name;
	NG.mobLevel.textContent=mob[TGT].level;
	hideMobIcons();
	D.getElementById("mobIcons"+TGT).style.display="block";
	var c1="ui-draggable";
	if(mob[TGT].rare===0){
		NG.mobBar.className=c1;
		NG.mobPlate.src = "images1/rarePlate.png";
		NG.mobPlate.className = "nameplateGold";
	}else if(mob[TGT].rare===2){
		NG.mobBar.className=c1;
		NG.mobPlate.src = "images1/championPlate.png";
		NG.mobPlate.className = "nameplateBlue";
	}else if(mob[TGT].rare===3){
		NG.mobBar.className=c1;
		NG.mobPlate.src = "images1/bossPlate.png";
		NG.mobPlate.className = "nameplateRed";
	}else if(mob[TGT].rare===1){
		NG.mobBar.className=c1;
		NG.mobPlate.src = "images1/normalPlate.png";
		NG.mobPlate.className = "nameplateBlack";
	}
	NG.mobTraits.innerHTML=mob[TGT].traits;
	if(!drawHp){
		g.drawMonsterHp(TGT, true);
	}
	if(my.job==="Warrior"){ checkDecisiveBlow(); }
}
function updateCitySlot(Slot){
	$("#inv"+Slot).attr("src","//"+itemSprite);
	if(P.item[Slot]!==undefined){
		if(P.item[Slot].name){
			$("#inv"+Slot).css({"left":P.item[Slot].xPos,"top":P.item[Slot].yPos});
		}else{
			$("#inv"+Slot).attr("src","images1/blank.png");
		}
	}
}
$(window).on('blur',function(){
	ttTimer.kill();
	NG.tooltip.style.visibility = "hidden";
});
$(window).on('focus',function(){
	checkSessionActive();
});
function setDragFlash(that){
	function flashThis(that,toggleStatus){
		if(toggleStatus===true){
			that.style.border="2px solid #f00";
			toggleStatus = false;
			flashingBorderTimer = T.delayedCall(.15, function(){ 
				flashThis(that,toggleStatus); 
			});
		}else{
			that.style.border="2px solid #900";
			toggleStatus = true;
			flashingBorderTimer = T.delayedCall(.15, function(){ 
				flashThis(that,toggleStatus); 
			});
		}
	}
	var toggleStatus = true;
	flashingBorderTimer.kill();
	flashThis(that,toggleStatus);
}
function dropOk(){
	if(itemSwapCount>0){
		return false;
	}
	var _drID = dragID;
	var _dpID = dropID;
	var x = $("#"+_drID);
	var y = $("#"+_dpID);
	var swap = false;
	var eqD = P.eq[dragSlot];
	var eqd = P.eq[dropSlot];
	var itD = P.item[dragSlot];
	var itd = P.item[dropSlot];
	if(y.hasClass("bank")){ //droppable is bank slot
		swap = false;
		if(x.hasClass("inventory")||
		dragID.indexOf("bank")===0){ 
			swap = true; 
		}
	}else if(y.hasClass("inventory")){ // droppable is inv slot
		if(x.hasClass("equipment")){//from equipment to inv
			if(_drID==="helmet"){
				if(itd.itemSlot==="helmet"){ swap = true; }
			}
			if(_drID==="neck"){
				if(itd.itemSlot==="neck"){ swap = true; }
			}
			if(_drID==="ring1"||_drID==="ring2"){
				if(itd.itemSlot==="ring"){ swap = true; }
			}
			if(_drID==="shoulders"){
				if(itd.itemSlot==="shoulders"){ swap = true; }
			}
			if(_drID==="back"){
				if(itd.itemSlot==="back"){ swap = true; }
			}
			if(_drID==="chest"){
				if(itd.itemSlot==="chest"){ swap = true; }
			}
			if(_drID==="bracers"){
				if(itd.itemSlot==="bracers"){ swap = true; }
			}
			if(_drID==="gloves"){
				if(itd.itemSlot==="gloves"){ swap = true; }
			}
			if(_drID==="belt"){
				if(itd.itemSlot==="belt"){ swap = true; }
			}
			if(_drID==="legs"){
				if(itd.itemSlot==="legs"){ swap = true; }
			}
			if(_drID==="boots"){
				if(itd.itemSlot==="boots"){ swap = true; }
			}
			if(eqD.itemSlot==="shield"&&(itd.type==="slashed"||itd.type==="crushed"||itd.type==="pierced")){ swap = true; }
			if(eqD.itemSlot==="weapons"&&itd.itemSlot===""){ swap = true; }
			if(eqD.itemSlot==="shield"&&itd.itemSlot==="shield"){ swap = true; } //swap in a shield
			if(eqD.itemSlot==="shield"&&itd.itemSlot===""){ swap = true; }
			if(eqD.itemSlot==="range"&&itd.itemSlot===""){ swap = true; }
			if((eqD.type==="smashed"||eqD.type==="staff"||eqD.type==="cleaved")&&(itd.type==="smashed"||itd.type==="staff"||itd.type==="cleaved")){ swap = true; }
			if((eqD.type==="crushed"||eqD.type==="pierced"||eqD.type==="slashed")&&itd.itemSlot==="shield"&&_drID==="weapon2"){ swap = true; }
			if(eqD.type==="range"&&itd.type==="range"){ swap = true; }
			if(_drID==="weapon1"&&(itd.type==="slashed"||itd.type==="crushed"||itd.type==="pierced")){ swap = true; }
			if(_drID==="weapon1"&&!P.eq[13].name&&itd.itemSlot==="weapons"){ swap = true; } //can equip any weapon if 2h is clear
			if(_drID==="weapon2"&&(eqD.type==="slashed"||eqD.type==="crushed"||eqD.type==="pierced")
				&& (itd.type==="slashed"||itd.type==="crushed"||itd.type==="pierced")){ swap = true; } //can equip any weapon if 2h is clear
			//NO WAY
			if((eqD.type==="crushed"||eqD.type==="pierced"||eqD.type==="slashed")&&itd.type==="shield"&&_drID==="weapon1"){ swap = false; }
			if(my.dualWield<1&&eqD.itemSlot==="shield"&&itd.itemSlot!=="shield"){ swap = false; } //cannot drag non-shield to shield
		}
		if(!itd.name){ swap = true; }
		if(x.hasClass("inventory")){ swap = true; } // drag inv to inv empty slot
		if(x.hasClass("bank")){ swap = true; }
	}else if(y.hasClass("equipment")){ // droppable is equipment slot
		if(_dpID==="helmet"){
			if( x.hasClass("inventory")&&itD.itemSlot==="helmet"){ swap = true; }
		}
		if(_dpID==="neck"){
			if( x.hasClass("inventory")&&itD.itemSlot==="neck"){ swap = true; }
		}
		if(_dpID==="ring1"||_dpID==="ring2"){
			if( x.hasClass("inventory")&&itD.itemSlot==="ring"){ swap = true; }
			if( x.hasClass("equipment")&&eqD.itemSlot==="ring"){ swap = true; }
		}
		if(_dpID==="shoulders"){
			if( x.hasClass("inventory")&&itD.itemSlot==="shoulders"){ swap = true; }
		}
		if(_dpID==="back"){
			if( x.hasClass("inventory")&&itD.itemSlot==="back"){ swap = true; }
		}
		if(_dpID==="chest"){
			if( x.hasClass("inventory")&&itD.itemSlot==="chest"){ swap = true; }
		}
		if(_dpID==="bracers"){
			if( x.hasClass("inventory")&&itD.itemSlot==="bracers"){ swap = true; }
		}
		if(_dpID==="gloves"){
			if( x.hasClass("inventory")&&itD.itemSlot==="gloves"){ swap = true; }
		}
		if(_dpID==="belt"){
			if( x.hasClass("inventory")&&itD.itemSlot==="belt"){ swap = true; }
		}
		if(_dpID==="legs"){
			if( x.hasClass("inventory")&&itD.itemSlot==="legs"){ swap = true; }
		}
		if(_dpID==="boots"){
			if( x.hasClass("inventory")&&itD.itemSlot==="boots"){ swap = true; }
		}
		if(_dpID==="weapon1"){ //inv to weapon
			if( x.hasClass("inventory")&&itD.itemSlot==="weapons"){ swap = true; } //drag weapon to weapon
			if( x.hasClass("equipment")&&eqD.itemSlot==="weapons"){
				swap = true;
				if(eqD.itemSlot==="shield"){ swap = false; }
			} //swap weapons
			if(x.hasClass("inventory")){
				if((itD.type==="cleaved"||itD.type==="smashed"||itD.type==="staff")&&!P.eq[13].name){ swap = true; }
				if((itD.type==="cleaved"||itD.type==="smashed"||itD.type==="staff")&&P.eq[13].name){ swap = false; }
			}
		}
		if(_dpID==="weapon2"){
			if(x.hasClass("inventory")&&itD.itemSlot==="weapons"&&my.dualWield>=1){ swap = true; }
			if(x.hasClass("inventory")&&itD.itemSlot==="shield"){ swap = true; }
			if(x.hasClass("equipment")&&eqD.itemSlot==="weapons"&&my.dualWield>=1){ swap = true; } //drag shields and other weapons to weapon2
			if(eqd.itemSlot==="shield"){ swap = false; }
			if(eqd.itemSlot==="shield"&&itD.itemSlot==="shield"){ swap = true; } //swap in a shield
			if((itD.type==="slashed"||itD.type==="crushed"||itD.type==="pierced")&&eqd.itemSlot==="shield"){ swap = true; }
			//false no matter what
			if(x.hasClass("equipment")&&(eqD.type==="smashed"||eqD.type==="staff"||eqD.type==="cleaved")){ swap = false; }
			if(itD.type==="smashed"||itD.type==="staff"||itD.type==="cleaved"){ swap = false; }
			if(itD.itemSlot==="shield"&&(P.eq[12].type==="smashed"||"staff"===P.eq[12].type||P.eq[12].type==="cleaved")){ swap = false; }
			if(itD.itemSlot==="weapons"){
				if(P.eq[12].type==="smashed"||"staff"===P.eq[12].type||P.eq[12].type==="cleaved"){ swap = false; }
				if(itD.type==="smashed"||itD.type==="staff"||itD.type==="cleaved"){
					swap = false;
				}
			}
			if(my.dualWield<1&&P.eq[13].itemSlot==="shield"&&itD.itemSlot!=="shield"){ swap = false; }
		}
		if(_dpID==="range"){
			if( x.hasClass("inventory")&&itD.itemSlot==="range"){ swap = true; }
		}
		if(itD.req > my.level){ return "level"; }
	}
	return swap;
}
function swapItems(){
	//  removed
	if(buyMode===true||merchantMode===true||(classDrag==="inventory"&&dragSlot>23)){
		cancelDragging();
		cityMenuClick();
		QMsg("You cannot sort items while shopping at the merchant.");
		return;
	}
	//set the drops and swap1
	cacheClassDrag = classDrag;
	cacheClassDrop = classDrop;
	cacheDragSlot = dragSlot;
	cacheDropSlot = dropSlot;
	cacheDragID = dragID;
	cacheDropID = dropID;
	if(classDrop==="inventory"){
		for(var x in dragged[0]){
			dragged[1][x] = P.item[dropSlot][x];
		}
		for(var x in dragged[0]){
			P.item[dropSlot][x] = dragged[0][x];
		}
	}
	if(classDrop==="equipment"){
		for(var x in dragged[0]){
			dragged[1][x] = P.eq[dropSlot][x]
		}
		for(var x in dragged[0]){
			P.eq[dropSlot][x] = dragged[0][x];
		}
	}
	if(classDrop==="bank"){
		for(var x in dragged[0]){
			dragged[1][x] = P.bank[dropSlot][x]
		}
		for(var x in dragged[0]){
			P.bank[dropSlot][x] = dragged[0][x];
		}
	}
	//swap2
	if(classDrag==="inventory"){
		for(var x in dragged[0]){
			P.item[dragSlot][x] = dragged[1][x];
		}
	}
	if(classDrag==="equipment"){
		for(var x in dragged[0]){
			P.eq[dragSlot][x] = dragged[1][x];
		}
	}
	if(classDrag==="bank"){
		for(var x in dragged[0]){
			P.bank[dragSlot][x] = dragged[1][x];
		}
	}
	//resolve empty slot/punch/shield/range issues
	if(P.eq[12].type===""){
		P.eq[12].type = "punched";
		updatePunchDamage();
	}
	if(P.eq[13].type===""&&dualWieldTotal()>=1){
		P.eq[13].type = "punched";
		updatePunchDamage();
	}
	if(P.eq[14].damage<1){ P.eq[14].damage = 1; }
	if(P.eq[14].delay<1||P.eq[14].delay > 30000){ P.eq[14].delay = 30000; }
	// save items
	function convertType(x){
		if(x==='equipment'){
			x = 'eq';
		}else if(x==='inventory'){
			x = 'item';
		}
		return x;
	}
	var itemDragType = convertType(classDrag);
	var itemDropType = convertType(classDrop);
	NG.ttItem.style.display='none';
	save.itemSwap(itemDragType, dragSlot, itemDropType, dropSlot);
}
function updateInvDrag(Slot){
	var e = document.getElementById('inv'+Slot);
	if(e!==null){
		if(P.item[Slot].name){
			e.src = "//"+itemSprite;
			e.style.left = P.item[Slot].xPos+'px';
			e.style.top = P.item[Slot].yPos+'px';
		}else{
			e.src = "images1/blank.png";
		}
	}
}
function updateInvDrop(Slot){
	var e = document.getElementById('inv'+Slot);
	if(e!==null){
		if(P.item[Slot].name){
			e.src = "//"+itemSprite;
			e.style.left = P.item[Slot].xPos+'px';
			e.style.top = P.item[Slot].yPos+'px';
		}else{
			e.src = "images1/blank.png";
		}
	}
}
function updateEqDrag(id,Slot){
	var e = document.getElementById(id);
	if(e!==null){
		if(P.eq[Slot].name){
			e.src = "//"+itemSprite;
			e.style.left = P.eq[Slot].xPos+'px';
			e.style.top = P.eq[Slot].yPos+'px';
		}else{
			e.src = "images1/blank.png";
		}
	}
}
function updateEqDrop(id,Slot){
	var e = document.getElementById(id);
	if(e!==null){
		if(P.eq[Slot].name){
			e.src = "//"+itemSprite;
			e.style.left = P.eq[Slot].xPos+'px';
			e.style.top = P.eq[Slot].yPos+'px';
		}else{
			e.src = "images1/blank.png";
		}
	}
}
function updateBankDrag(Slot){
	var e = document.getElementById("bank"+Slot);
	if(e!==null){
		if(P.bank[Slot].name){
			e.src = "//"+itemSprite;
			e.style.left = P.bank[Slot].xPos+'px';
			e.style.top = P.bank[Slot].yPos+'px';
		}else{
			e.src = "images1/blank.png";
		}
	}
}
function updateBankDrop(Slot){
	var e = document.getElementById("bank"+Slot);
	if(e!==null){
		if(P.bank[Slot].name){
			e.src = "//"+itemSprite;
			e.style.left = P.bank[Slot].xPos+'px';
			e.style.top = P.bank[Slot].yPos+'px';
		}else{
			e.src = "images1/blank.png";
		}
	}
}
function finishItemSwap(){
	if(cacheClassDrag==="equipment"){ 
		updateEqDrag(cacheDragID,cacheDragSlot); 
	}
	if(cacheClassDrag==="inventory"){ 
		updateInvDrag(cacheDragSlot); 
	}
	if(cacheClassDrag==="bank"){ 
		updateBankDrag(cacheDragSlot); 
	}
	if(cacheClassDrop==="equipment"){ 
		updateEqDrop(cacheDropID,cacheDropSlot); 
	}
	if(cacheClassDrop==="inventory"){ 
		updateInvDrop(cacheDropSlot); 
	}
	if(cacheClassDrop==="bank"){ 
		updateBankDrop(cacheDropSlot); 
	}
	if(cacheClassDrag==='equipment' ||
	cacheClassDrop==='equipment'){
		setEquipValues();
		g.maxHpFunct();
		g.maxMpFunct();
		g.drawMyHp();
		g.drawMyMp();
		loadWeaponSlashes();
		loadProcImage();
		highestElement = setHighestElement();
		setMinimumWeaponSpeed();
		normalizedDamage();
		dualWieldBonus = setDualWieldBonus();
		shieldBlockChance = setShieldBlockChance();
		CStat();
	}
	refreshTooltipDrop($("#"+cacheDragID));
}
//click and click
function upgradeMsgUpdate(){
	function upgradeCost(){
		var x = P.item[dragSlot].upgrade+1;
		var type = "armor";
		if(P.item[dragSlot].itemSlot==="weapons" ||
		P.item[dragSlot].type==="offhand"){
			type = "weapon";
		}
		var G = 25;
		if(x===2){
			G = 50;
		}else if(x===3){
			G = 100;
		}else if(x===4){
			G = 200;
		}else if(x===5){
			G = 400;
		}else if(x===6){
			G = 750;
		}else if(x===7){
			G = 1250;
		}else if(x===8){
			G = 2000;
		}else if(x===9){
			G = 3000;
		}else if(x===10){
			G = 5000;
		}
		if(type==="weapon"){
			G*=2;
		}
		return G;
	}
	cost = upgradeCost();
	itemUpgradeMode=true;
	var x = P.item[dragSlot].upgrade;
	var risk = "Success is guaranteed!"
	if(x===10){ 
		risk = "This item is fully upgraded! Congratulations!"; 
	}
	$("#upgradeConfirm2").html("Attempt to upgrade "+logItemName(P.item[dragSlot].name,P.item[dragSlot].rarity)+" for "+cost+" gold?<br><br>"+risk);
}
$(function(){
	$("#gameView").on('click','#destroyItem',function(){
		playAudio('button_2');
		if(dragID===""){
			Error("You must select an item to destroy.");
			return;
		}
		if(GLB.ks<=6){
			if(GLB.fastDestroy==="Off"){
				if(this.textContent==="Destroy"){
					this.textContent = "CONFIRM?";
					return;
				}
			}
		}
		if( $("#"+dragID).hasClass("inventory")===true ){
			destroyItem();
			if(GLB.ks>=7){
				this.textContent = "Sell";
			}else{
				this.textContent = "Destroy";
			}
		}else{
			Error("You can only destroy items in your inventory.");
			cancelDragging();
		}
	});
});
function destroyItem(){
	cancelDragging();
	if(GLB.ks>=7){
		function writeGold(){
			my.gold+=kek;
			if(my.gold>999999999){ my.gold=999999999; }
			$('#cityGold').html("<div id='goldIcon' class='goldIcon'></div> "+my.gold);
			$('#inventoryGoldAmount').text(my.gold);
			CStat();
		}
		var kek = itemSellValue(dragSlot);
		playAudio("buyitem");
		var baz = logItemName(P.item[dragSlot].name,P.item[dragSlot].rarity);
		Chat(('You sold '+baz+' for '+kek+' gold.'),5);
		$.ajax({
			url: 'php/town1.php',
			data:{
				run:"sellItem",
				cost:kek,
				name:my.name
			}
		}).done(function(data){
			writeGold();
		});
	}
	Chat("You destroyed "+logItemName(P.item[dragSlot].name,P.item[dragSlot].rarity)+".");
	for(var x=0, len=g.key.length; x<len;x++){
		P.item[dragSlot][g.key[x]] = g.val[x];
	}
	updateInvDrag(dragSlot);
	save.item(dragSlot);
	NG.ttItem.style.display='none';
}
function destroyAllItems(){
	Chat("You destroyed everything! You monster!");
	for(var i=0;i<=23;i++){
		for(var x=0, len=g.key.length; x<len;x++){
			P.item[i][g.key[x]] = g.val[x];
			save.item(i);
		}
	}
	updateInventory();
}
function resurrectMe(){
	$("#deathScreen").css("display","none");
	setCurtainColor('#ffff99');
	spellCurtain.alpha = .7;
	T.to(spellCurtain, 3, {
		alpha:0,
		ease:ez.Qin
	});
	$("#mobBar").css("visibility","hidden");
	if(my.job==="Warrior"||my.job==="Monk"||my.job==="Rogue"){ my.mp=0; }
	g.maxHpFunct();
	g.maxMpFunct();
	my.hp=~~(my.maxHp/2);
	my.mp=0;
	g.drawMyHp();
	g.drawMyMp();
	Mname="";
	NG.mobTraits.innerHTML="";
	for(var i=0;i<=4;i++){
		mob[i].name=""; 
		mob[i].ID=0;
		mob[i].attackStatus=1;
		hideMob(i);
		MOBNAME[i].innerHTML='';
	}
	drawExpBar();
	//reset dot ticks
	QMsg("You have been resurrected!");
	QMsg("You lost "+g.lostGold+" gold.");
	Chat("You lost "+g.lostGold+" gold.",2);
	if(g.lostExp>0){
		QMsg("You lost "+g.lostExp+" experience!");
		Chat("You lost "+g.lostExp+" experience!", 2);
	}
	CStat();
	myHpTick.restart();
	myMpTick.restart();
	resetBosses();
	stopMusic();
	if(g.showPortal){
		makePortal();
	}
}
function checkZoneCombo(){
	var Z = myZone();
	var cr = comboRating;
	if(Z==="Galeblast Fortress"){
		if(cr > my.comboPermafrost){
			my.comboPermafrost = cr;
		}
	}
	if(Z==="Viston's Redoubt"){
		if(cr > my.comboKedgeKeep){
			my.comboKedgeKeep = cr;
		}
	}
	if(Z==="Ashenflow Peak"){
		if(cr > my.comboSolB){
			my.comboSolB = cr;
		}
	}
	if(Z==="Fahlnir Citadel"){
		if(cr > my.comboMistmoore){
			my.comboMistmoore = cr;
		}
	}
	if(Z==="Kordata Ruins"){
		if(cr > my.comboLowerGuk){
			my.comboLowerGuk = cr;
		}
	}
	if(Z==="Temple of Prenssor"){
		if(cr > my.comboCazicThule){
			my.comboCazicThule = cr;
		}
	}
	if(Z==="Dire Sanctum"){
		if(cr > my.comboPlaneofHate){
			my.comboPlaneofHate = cr;
		}
	}
	if(Z==="Nimgaul"){
		if(cr > my.comboPlaneofFear){
			my.comboPlaneofFear = cr;
		}
	}
	if(cr > my.comboOverall){
		my.comboOverall = cr;
	}
}
function positionMap(x, d){
	if(!d){ d = 1; }
	if(x===undefined){ 
		x = myZone(); 
		d = 0;
	}
	var a = [0];
	var b = [];
	if(x==="Edenburg"){ 
		a=[5]; 
	}
	if(x==="Salubrin Forest"){ 
		a=[30]; 
		b=[360, 200];
	}
	if(x==="Tendolin Meadows"){ 
		a=[50]; 
		b=[300, 310];
	}
	if(x==="Greenthorn Cavern"){ 
		a=[70]; 
		b=[360, 430];
	}
	if(x==="Riven Grotto"){ 
		a=[100]; 
		b=[450, 480];
	}
	if(x==="Lanfeld Outpost"){ 
		a=[150]; 
		b=[500, 560];
	}
	
	if(x==="Aspen Grove"){ 
		a=[180]; 
	}
	if(x==="Braxxen's Bastille"){ 
		a=[220]; 
		b=[565, 760];
	}
	if(x==="Kordata Marshlands"){ 
		a=[200]; 
		b=[455, 670];
	}
	if(x==="Arcturin's Crypt"){ 
		a=[250]; 
		b=[460, 830];
	}
	
	if(x==="Artremia"){ 
		a=[300]; 
	}
	if(x==="Fahlnir Citadel"){ 
		a=[290]; 
		b=[360, 990];
	}
	if(x==="Kordata Ruins"){ 
		a=[220]; 
		b=[340, 740];
	}
	if(x==="Temple of Prenssor"){ 
		a=[200]; 
		b=[240, 660];
	}
	
	if(x==="Fenwoven"){ 
		a=[320]; 
	}
	if(x==="Viston's Redoubt"){ 
		a=[335]; 
		b=[265, 1095];
	}
	if(x==="Galeblast Fortress"){ 
		a=[342]; 
		b=[130, 1040];
	}
	if(x==="Ashenflow Peak"){ 
		a=[350]; 
		b=[80, 1130];
	}
	if(x==="Dire Sanctum"){ 
		a=[355]; 
		b=[40, 1135];
	}
	if(x==="Nimgaul"){ 
		a=[355]; 
		b=[20, 1150];
	}
	var showZoneName = false;
	var e1 = D.getElementById('zoneMarker');
	showZoneName = true;
	if(x==="Edenburg"||
	x==="Aspen Grove"||
	x==="Artremia"||
	x==="Fenwoven"){
		e1.innerHTML = '';
		showZoneName = false;
	}
	if(x===e1.textContent){
		showZoneName = false;
	}
	if(showZoneName===true){
		e1.innerHTML = '';
		var aniZone = spanify(x);
		e1.innerHTML = aniZone;
		T.staggerFromTo('.aniSpan', .35, {
			opacity:0
			},{
			force3D:"auto",
			ease:ez.lin,
			opacity:1
		}, .02);
		T.staggerTo('.aniSpan', .1, {
			delay:.35,
			color:'#ffd700',
			textShadow:'0 0 15px #ffd700, 0 0 8px #ffd700, 0 0 4px #ffd700, 0 0 2px #ffd700,0 0 1px #ffd700',
			force3D:"auto",
			ease:ez.Qin,
			onComplete:function(){
				T.to((this.target), .1, {
					force3D:"auto",
					color:'#333311',
					textShadow:'1px 0 #aa6, 0 1px #aa6, -1px 0 #aa6, 0 -1px #aa6'
				});
			}
		}, .03);
		e1.style.top = b[0]+'px';
		e1.style.left = b[1]+'px';
	}
	T.to('#NGmap', 1.5, {
		left:a[0]*-1
	});
}
function supportsAudio(){ // maybe this will be useful later. Safari sucks. I don't know
    var a = D.createElement('audio');
    return !!(a.canPlayType&&a.canPlayType('audio/mpeg;').replace(/no/, ''));
}

$("#gameView").on('mouseenter','.buttons, .NCbuttons, .nonglobal, .allskill',function(){
	var ind=$("#window3a li:visible").index($(this))+1;
	var specialKey='<div id="tooltipButton">Hotkey: [ ';
	if(ind>=11){
		specialKey+="Shift ";
		ind-=10;
	}
	if(ind===10){ 
		ind=0; 
	}
	ind=ind+'';
	var id = this.id;
	if(id==="addmonsterId"){
		ind = "D";
	}else if(id==="toggleattackId"){
		ind = "A";
	}else if(id==="runId"){
		specialKey+="Shift ";
		ind = "S";
	}else if(id==="halflinghideId"||
		id==="secondwindId"||
		id==="divineaegisId"||
		id==="ancestralrampageId"||
		id==="tunaresglowId"||
		id==="karanasinfusionId"||
		id==="sanguinetormentId"||
		id==="granitevisageId"||
		id==="shortcircuitId"){
		ind = "S";
	}
	hotkeyTimer.kill();
	hotkeyTimer = T.delayedCall(.25, function(){
		var txt=NG.tooltipmsg.innerHTML;
		NG.tooltipmsg.innerHTML=yellow(specialKey+ind+" ]</div>")+txt;
	});
});
$(document).on('keyup',function(e){
	if(inputFocus===false){
		if(g.view==="Game"||g.view==="Intro"){
			if(e.keyCode===32){
				cancelMySpell();
				return false;
			}
		}
		if(g.view==="Game"&&!goldTransferMode){
			if((e.keyCode>=49&&e.keyCode<=57) ||
				e.keyCode===48){
				if(castingSpell===0){ return false; }
				var w = $("#window3a li:visible");
				if(!e.shiftKey&&!e.ctrlKey){
					if(e.keyCode===49){
						var z = w.eq(0).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===50){
						var z = w.eq(1).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===51){
						var z = w.eq(2).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===52){
						var z = w.eq(3).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===53){
						var z = w.eq(4).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===54){
						var z = w.eq(5).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===55){
						var z = w.eq(6).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===56){
						var z = w.eq(7).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===57){
						var z = w.eq(8).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===48){
						var z = w.eq(9).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}
				}else if(e.shiftKey){
					if(e.keyCode===49){
						var z = w.eq(10).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===50){
						var z = w.eq(11).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===51){
						var z = w.eq(12).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===52){
						var z = w.eq(13).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===53){
						var z = w.eq(14).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===54){
						var z = w.eq(15).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===55){
						var z = w.eq(16).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===56){
						var z = w.eq(17).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===57){
						var z = w.eq(18).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}else if(e.keyCode===48){
						var z = w.eq(19).attr("id");
						g[JOB.SkillMap](z);
						return false;
					}
				}
			}
			if(NG.ttItem.style.display==='block'){
				refreshTooltipDrop(hoverID);
			}
		}
	}
});
$(document).on('keydown',function(e){
	if(g.view==="Game"){
		if(inputFocus===false){
			if(e.shiftKey&&!e.CtrlKey){
				if(NG.ttItem.style.display==='block'){
					if(hoverClass==='inventory'||hoverClass==="bank"){
						if(hoverType==="helmet"){
							refreshTooltipDrop($("#helmet"), true);
						}else if(hoverType==="neck"){
							refreshTooltipDrop($("#neck"), true);
						}else if(hoverType==="ring"){
							refreshTooltipDrop($("#ring1"), true);
						}else if(hoverType==="shoulders"){
							refreshTooltipDrop($("#shoulders"), true);
						}else if(hoverType==="back"){
							refreshTooltipDrop($("#back"), true);
						}else if(hoverType==="chest"){
							refreshTooltipDrop($("#chest"), true);
						}else if(hoverType==="bracers"){
							refreshTooltipDrop($("#bracers"), true);
						}else if(hoverType==="gloves"){
							refreshTooltipDrop($("#gloves"), true);
						}else if(hoverType==="belt"){
							refreshTooltipDrop($("#belt"), true);
						}else if(hoverType==="legs"){
							refreshTooltipDrop($("#legs"), true);
						}else if(hoverType==="boots"){
							refreshTooltipDrop($("#boots"), true);
						}else if(hoverType==="weapons"){
							refreshTooltipDrop($("#weapon1"), true);
						}else if(hoverType==="shield"){
							refreshTooltipDrop($("#weapon2"), true);
						}else if(hoverType==="range"){
							refreshTooltipDrop($("#range"), true);
						}
					}
				}
			}
			if(e.keyCode===81){
				if(!nameFocus){
					questToggle();
				}
			}
			if(e.ctrlKey&&e.keyCode===65){
				if(!nameFocus){
					return false;
				}
			}
			if(e.keyCode===68){
				if(g.view==="Game"){
					if(!nameFocus){
						addMonster();
					}
				}
			}
			if(e.ctrlKey&&e.keyCode===65&&attackStatus!==0){
				if(!nameFocus){
					return false;
				}
			}
			if(!e.shiftKey&&!e.ctrlKey&&e.keyCode===65){
				if(!nameFocus){
					toggleAutoAttackStatus();
				}
			}
			if(e.shiftKey&&e.keyCode===65){
				if(!nameFocus){
					togglePetAutoAttackStatus();
				}
			}
			if(e.ctrlKey&&e.keyCode===87){ return false; }
			if(e.ctrlKey&&e.keyCode===49){ return false; }
			if(e.ctrlKey&&e.keyCode===50){ return false; }
			if(e.ctrlKey&&e.keyCode===51){ return false; }
			if(e.ctrlKey&&e.keyCode===52){ return false; }
			if(e.ctrlKey&&e.keyCode===53){ return false; }
			if(e.shiftKey&&e.keyCode===82){
				if(!nameFocus){
					run();
					return false;
				}
			}
			if(!e.shiftKey&&e.keyCode===82){
				if(!nameFocus){
					if(chatReply!==''){
						if(inputFocus===false){
							inputFocus = true;
							$("#chatLog").css('bottom',26);
							$("#chatInput").css('display','block').focus();
						}
						$("#chatInput").val("/w "+chatReply+" ").focus();
					}
					return false;
				}
			}
			if(e.keyCode===83){
				if(!nameFocus){
					executeRacialSkill();
					return false;
				}
			}
			if(!e.shiftKey&&e.keyCode===9){
				if(countMobs()===0){return false; }
				if(g.blindStatus===0){
					Chat("You cannot change targets while lost in a Globe of Darkness.");
					return false;
				}
				if(confuseStatus===true){ return false; }
				targetNextMob();
				return false;
			}
			if(e.shiftKey&&e.keyCode===9){
				if(countMobs()===0){return false;}
				if(g.blindStatus===0){
					Chat("You cannot change targets while lost in a Globe of Darkness.");
					return false;
				}
				if(confuseStatus===true){ return false; }
				targetLastMob();
				return false;
			}
			if(nameFocus===false){
				if(e.keyCode===88){
					optionsToggle();
				}
				if(e.keyCode===67){
					charToggle();
				}
				if(e.keyCode===73||e.keyCode===71||e.keyCode===70||e.keyCode===69){
					inventory();
				}
				if(e.keyCode===66||e.keyCode===86){
					bankToggle();
				}
				if(e.keyCode===77||e.keyCode===90){
					travelToggle();
				}
				if(e.keyCode===84){
					showTalents(true);
				}
			}
		}
	}
	if(e.keyCode===27){
		if(!inputFocus){
			if(paused===false){
				pauseGame();
			}else{
				unpauseGame();
			}
		}
	}
	//console.info(e.keyCode);
	if(e.keyCode===32){
		// prevent page scroll
		if(inputFocus===false){
			return false;
		}
	}
	if(e.ctrlKey){
		if(e.keyCode>=54&&e.keyCode<=56){
			// prevent browser hotkey for tabbing
			return false;
		}
	}
});
//cancel spell
$(document).ready(function(){
	$("#spellbardiv").on('click',function(){
		if(enteredWorld===false){ return; }
		cancelMySpell();
	});
});
//tooltips
function updateOptions(){
}

$(function(){
	$("#options").on('click','.lootFilter',function(){
		playAudio('button_2');
		var id = this.id;
		var e = $(this);
		var v = this.textContent;
		if(v==="None"){
			var x = "Normal";
			Lmy[id] = x;
			e.html(x);
		}else if(v==="Normal"){
			var x = "Exceptional";
			Lmy[id] = x;
			e.html(x);
		}else if(v==="Exceptional"){
			var x = "All";
			Lmy[id] = x;
			e.html(x);
		}else{
			var x = "None";
			Lmy[id] = x;
			e.html(x);
		}
		save.Lmy();
	}).on('click','#weatherStatus',function(){
		playAudio('button_2');
		var kek = $("#weatherStatus");
		if(kek.html()==="High"){
			GLB.videoSetting = "Medium";
			kek.html("Medium");
		}else if(kek.html()==="Medium"){
			GLB.videoSetting = "Low";
			kek.html("Low");
		}else if(kek.html()==="Low"){
			GLB.videoSetting = "High";
			kek.html("High");
		}
		save.GLB();
	}).on('click','#autoAttackOption',function(){
		playAudio('button_2');
		var kek = $("#autoAttackOption");
		if(kek.html()==="On"){
			Lmy.autoAttackOption = "Off";
			kek.html("Off");
		}else{
			Lmy.autoAttackOption = "On";
			kek.html("On");
		}
		save.GLB();
	}).on('click','#spamFilter',function(){
		playAudio('button_2');
		var kek = $("#spamFilter");
		if(kek.html()==="On"){
			GLB.chatMyHit = "Off";
			kek.html("Off");
		}else{
			GLB.chatMyHit = "On";
			kek.html("On");
		}
		save.GLB();
	}).on('click','#showCombatLog',function(){
		playAudio('button_2');
		var kek = $("#showCombatLog");
		if(kek.html()==="On"){
			GLB.showCombatLog = "Off";
			kek.html("Off");
			$("#chatId, #combatId").css('display','none');
		}else{
			GLB.showCombatLog = "On";
			kek.html("On");
			$("#chatId, #combatId").css('display','block');
		}
		save.GLB();
	}).on('click','#debugMode',function(){
		playAudio('button_2');
		var kek = $("#debugMode");
		if(kek.html()==="On"){
			GLB.debugMode = "Off";
			kek.html("Off");
		}else{
			GLB.debugMode = "On";
			kek.html("On");
		}
		save.GLB();
	}).on('click','#audioUp',function(){
		GLB.soundStatus += 10;
		if(GLB.soundStatus > 100){ GLB.soundStatus = 100; }
		$("#soundStatus").html(GLB.soundStatus);
		save.GLB();
		playAudio('button_2');
	}).on('click','#audioDown',function(){
		GLB.soundStatus -= 10;
		if(GLB.soundStatus <= 0){ GLB.soundStatus = 0; }
		$("#soundStatus").html(GLB.soundStatus);
		save.GLB();
		playAudio('button_2');
	}).on('click','#audioUp2',function(){
		GLB.musicStatus += 10;
		if(GLB.musicStatus > 100){ GLB.musicStatus = 100; }
		var x = GLB.musicStatus;
		D.getElementById('bgmusic').volume = (M.round(((.5*(x/100))*1)*100)/100);
		D.getElementById('bgamb1').volume = (M.round(((.2*(x/100))*1)*100)/100);
		D.getElementById('bgamb2').volume = (M.round(((.2*(x/100))*1)*100)/100);
		$("#musicStatus").html(x);
		save.GLB();
		playAudio('button_2');
	}).on('click','#audioDown2',function(){
		GLB.musicStatus -= 10;
		if(GLB.musicStatus <= 0){ GLB.musicStatus = 0; }
		var x = GLB.musicStatus;
		D.getElementById('bgmusic').volume = (M.round(((.5*(x/100))*1)*100)/100);
		D.getElementById('bgamb1').volume = (M.round(((.2*(x/100))*1)*100)/100);
		D.getElementById('bgamb2').volume = (M.round(((.2*(x/100))*1)*100)/100);
		$("#musicStatus").html(x);
		save.GLB();
		playAudio('button_2');
	}).on('click','#tooltipStatus',function(){
		playAudio('button_2');
		if(GLB.tooltipMode==="Long"){
			GLB.tooltipMode="Short";
			$("#tooltipStatus").html("Short");
			$("#tooltipmsg").css("display","none");
		}else if(GLB.tooltipMode==="Short"){
			GLB.tooltipMode="Off";
			$("#tooltipStatus").html("Off");
			$("#tooltipmsg").css("display","none");
		}else if(GLB.tooltipMode==="Off"){
			GLB.tooltipMode="Long";
			$("#tooltipStatus").html("Long");
			$("#tooltipmsg").css("display","block");
		}
		save.GLB();
	}).on('click','#hideMenu',function(){
		playAudio('button_2');
		if(GLB.hideMenu==="Off"){
			$("#hideMenu").html("On");
			GLB.hideMenu="On";
			T.to(D.getElementById('window5Id'), 1, {
				delay:5,
				opacity:0
			});
		}else{
			$("#hideMenu").html("Off");
			GLB.hideMenu="Off";
			T.set(D.getElementById('window5Id'), {
				opacity:1
			});
		}
		save.GLB();
	}).on('click','#fastDestroy',function(){
		playAudio('button_2');
		var kek = $("#fastDestroy");
		if(kek.text()==="On"){
			GLB.fastDestroy = "Off";
			kek.html("Off");
		}else{
			GLB.fastDestroy = "On";
			kek.html("On");
		}
		save.GLB();
	});
});

function displayTooltip(pId){
	if(GLB.tooltipMode!=="Off"){
		var e = D.getElementById(pId);
		// set x
		var halfParentWidth, adjustX, x;
		if(pId==="mobDetails"){
			halfParentWidth = e.parentNode.offsetWidth/2;
			adjustX = halfParentWidth-150;
			x = e.parentNode.offsetLeft + adjustX;
		}else{
			halfParentWidth = e.offsetWidth/2;
			adjustX = halfParentWidth-150;
			x = e.offsetLeft + adjustX;
		}
		if(x<30){ 
			x=30; 
		}else if(x>950){ 
			x=950; 
		}
		// set y
		var y = e.offsetTop;
		if(pId==="mobDetails"){
			y = e.parentNode.offsetTop;
		}
		var ttHeight = NG.tooltip.offsetHeight;
		if(y>340){
			y-=(10+ttHeight);
		}else{
			var parentHeight = 0;
			if(pId==="myhpbardiv"){
				parentHeight = 96;
			}else if(pId==="mobBar"){
				parentHeight = 50;
			}else{
				parentHeight = e.offsetHeight;
			}
			y += (parentHeight+10);
		}
		if(pId==="window6"){
			x = 60;
			y = 325;
		}
		NG.tooltip.style.cssText = "top:"+y+"px; left:"+x+"px; visibility: visible;";
	}
}
function pauseGame(){
	if(g.view==="Game"){
		T.pauseAll();
		paused=true;
		D.getElementById('paused').style.display='block';
		if(travelStatus===0){ travelToggle(); }
	}
}
function unpauseGame(){
	if(g.view==="Game"){
		T.resumeAll();
		paused=false;
		D.getElementById('paused').style.display='none';
	}
}
function showTalents(show){
	statTab="Talents";
	$(".statButton").css({
		backgroundPosition:"0 0"
	});
	$('#talentStat').css({
		backgroundPosition:"0 100%"
	});
	if(show){
		charToggle();
	}
}
function Error(foo,fg){
	var H1 = D.createElement('span');
	H1.className = 'error';
	H1.innerHTML=foo+"<br>";
	if(fg){
		H1.style.color = fg;
	}
	NG.errorMsg.appendChild(H1);
	T.delayedCall(2.5, function(){
		Remove(H1);
	});
}
//tooltip behavior
$(document).ready(function(){
	$(document).on({
		mouseenter:function(e){
			hoverItemStatus = true;
			mouseTTX = e.pageX-$NG.gameView.offset().left;
			mouseTTY = e.pageY;
			refreshTooltipDrop($(this));
		},
		mouseleave:function(){
			hoverItemStatus = false;
			NG.ttItem.style.display='none';
		}
	}, ".equipment,.inventory,.bank,.city");
	$("#gameView").on('mouseenter','#window2zoneday,#window3,#window6',function(){
		NG.ttItem.style.display='none';
	});
	$("#gameView").on('mouseenter','.buttons, .NCbuttons',function(e){
		NG.tooltip.style.visibility="hidden";
		var x=this.parentNode.parentNode.id;
		ttTimer.kill();
		ttTimer = T.delayedCall(1, function(){ 
			displayTooltip(x);
		});
	})
	$NG.window3.on('mouseleave',function(){
		ttTimer.kill();
		NG.tooltip.style.visibility = "hidden";
	}).on('mouseenter','.spacers',function(){
		ttTimer.kill();
		NG.tooltip.style.visibility = "hidden";
	})
	$("#window6").on('mouseleave', function(){
		ttTimer.kill();
		NG.tooltip.style.visibility = "hidden";
	});
	$("#gameView").on('mouseenter','.buffIcons, .mobBuffIcons0, .mobBuffIcons1, .mobBuffIcons2, .mobBuffIcons3',function(e){
		NG.tooltipname.innerHTML = $(this).data("Name");
		NG.tooltipmsg.style.display = "none";
		var x=this.parentNode.parentNode.id;
		displayTooltip(x);
	}).on('mouseleave','.buffIcons,.mobBuffIcons0,.mobBuffIcons1,.mobBuffIcons2,.mobBuffIcons3',function(){
		hideMobTooltip();
	});
});
function refreshTooltipDrop(that, bypass){
	if(hoverItemStatus){
		if(that===undefined){ 
			return;
			var that = $("#"+dropID); 
		}
		if(!bypass){
			hoverID = that;
		}
		var showIt = false;
		dropSlot = that.parent().index();
		if(dropSlot!==-1){
			if(that.hasClass("inventory")&&P.item[dropSlot].name){
				refreshTooltip(that);
				showIt = true;
				hoverClass = 'inventory';
			}
			if(that.hasClass("equipment")&&P.eq[dropSlot].name){
				refreshTooltip(that);
				showIt = true;
				hoverClass = 'equipment';
			}
			if(that.hasClass("bank")){
				var Slot = dropSlot + (activeBankTab * 90);
				if(P.bank[Slot].name){
					refreshTooltip(that);
					showIt = true;
					hoverClass = 'bank';
				}
			}
			if(that.hasClass("city")){
				dropSlot = (that.parent().index()+24);
				if(P.item[dropSlot].name){
					refreshTooltip(that);
					showIt = true;
				}
				hoverClass = 'inventory';
			}
		}
		if(showIt===true){
			if((mouseTTX)<640){
				NG.ttItem.style.left='800px';
			}else{
				NG.ttItem.style.left='160px';
			}
			NG.ttItem.style.display='block';
			NG.ttItem.style.top=~~((768-$NG.ttItem.height())/2)+'px';
		}
		if(!$("#ttItemName").text()){ 
			NG.ttItem.style.display='none'; 
		}
	}
}
function refreshTooltip(that){
	if(that===undefined){
		var that = $("#"+dropID);
	}
	dropSlot = that.parent().index();
	if(that.hasClass("inventory")){	
		showTooltip(that,"item"); 
	}
	if(that.hasClass("equipment")){ 
		showTooltip(that,"eq"); 
	}
	if(that.hasClass("bank")){
		dropSlot = dropSlot + (activeBankTab * 90);
		showTooltip(that,"bank"); 
	}
	if(that.hasClass("city")){
		dropSlot = ((that.parent().index())+24) ;
		showTooltip(that,"item");
	}
	if(!$("#ttItemName").text()){
		NG.ttItem.style.display='none';
	}
}
function logItemName(foo,bar){
	if(bar===0){ 
		return '<span class="white">'+foo+'</span>';
	}else if(bar===1){ 
		return '<span class="magical">'+foo+'</span>';
	}else if(bar===2){ 
		return '<span class="rare">'+foo+'</span>';
	}else if(bar===3){ 
		return '<span class="unique">'+foo+'</span>';
	}else if(bar===4){
		return '<span class="set">'+foo+'</span>';
	}
}

//animations
function animateParticlesDown(color){
	if(GLB.videoSetting!=="High"){ return; }
	var s2 = img(color+"particle50");
	var d2=.1;
	if(isMobile){
		d2=.15;
	}
	var ez1=ez.Qout;
	var ez2=ez.Qin;
	function doit(){
		if(my.job!=="Bard"){
			if(castingSpell){
				return;
			}
		}else{
			if(!bardSingStatus){
				return;
			}
		}
		var p2 = cacheAdd(s2, 6, 357, 550);
		T.to(p2, 1,{
			y:968,
			scaleX:.5,
			scaleY:.5,
			ease:ez2,
			onComplete:function(){
				cRem(6, p2);
			}
		});
		var p1 = cacheAdd(s2, 6, 897, 550);
		T.to(p1,1,{
			y:968,
			scaleX:.5,
			scaleY:.5,
			ease:ez2,
			onComplete:function(){
				cRem(6, p1);
			}
		});
		T.delayedCall(d2, doit);
	}
	var p3 = can(color+"Light3", 6, 170, 363, 0, 0, true);
	p3.image.onload = function(){
		T.to(p3, .1, {
			startAt: {
				scaleX:1,
				scaleY:1,
			},
			scaleX:.9,
			scaleY:.9,
			repeat:-1,
			yoyo:true,
			onUpdate: function(){
				if(my.job!=="Bard" && castingSpell || 
				my.job === 'Bard' && !bardSingStatus){
					T.to(p3, .2, {
						scaleX:0,
						scaleY:0,
						ease:ez1,
						onComplete:function(){
							cRem(6, p3);
						}
					});
					T.to(p4, .2, {
						scaleX:0,
						scaleY:0,
						ease:ez1,
						onComplete:function(){
							cRem(6, p4);
						}
					});
				}
			}
		});	
	}
	var p4 = can(color+"Light3", 6, 710, 363, 0, 0, true);
	p4.image.onload = function(){
		T.to(p4, .5, {
			startAt: {
				scaleX:1,
				scaleY:1,
			},
			scaleX:.9,
			scaleY:.9,
			repeat:-1,
			yoyo:true
		});
	}
	doit();
}
function animateParticlesUp(color){
	if(GLB.videoSetting!=="High"){ return; }
	var s2 = img(color+"particle50");
	var d2=.1;
	if(isMobile){
		d2=.15;
	}
	var ez1=ez.Qout;
	var ez2=ez.Qin;
	function doit(){
		if(my.job!=="Bard"){
			if(castingSpell){
				return;
			}
		}else{
			if(!bardSingStatus){
				return;
			}
		}
		var ranX = ~~(M.random()*(6)-3);
		var ranX2 = ranX*7;
		var x1 = (345+ranX2+10);
		var p2 = cacheAdd(s2, 6, 357, 550);
		T.to(p2,1.25,{
			y:-90,
			x:x1,
			scaleX:.5,
			scaleY:.5,
			ease:ez2,
			onComplete:function(){
				cRem(6, p2);
			}
		});
		var x2 = (885+ranX2+10);
		var p1 = cacheAdd(s2, 6, 897, 550);
		T.to(p1,1.25,{
			y:-90,
			x:x2,
			scaleX:.5,
			scaleY:.5,
			ease:ez2,
			onComplete:function(){
				cRem(6, p1);
			}
		});
		T.delayedCall(d2, doit);
	}
	var p3 = can(color+"Light3", 6, 170, 363, 0, 0, true);
	p3.image.onload = function(){
		T.to(p3, .25, {
			startAt: {
				scaleX:1,
				scaleY:1,
			},
			scaleX:.9,
			scaleY:.9,
			repeat:-1,
			yoyo:true,
			onUpdate: function(){
				if(my.job!=="Bard" && castingSpell || 
				my.job === 'Bard' && !bardSingStatus){
					T.to(p3, .2, {
						scaleX:0,
						scaleY:0,
						ease:ez1,
						onComplete:function(){
							cRem(6, p3);
						}
					});
					T.to(p4, .2, {
						scaleX:0,
						scaleY:0,
						ease:ez1,
						onComplete:function(){
							cRem(6, p4);
						}
					});
				}
			}
		});	
	}
	var p4 = can(color+"Light3", 6, 710, 363, 0, 0, true);
	p4.image.onload = function(){
		T.to(p4, .25, {
			startAt: {
				scaleX:1,
				scaleY:1,
			},
			scaleX:.9,
			scaleY:.9,
			repeat:-1,
			yoyo:true
		});
	}
	doit();
}


function lore(msg, x1){
	var e9 = D.getElementById('loreMsg');
	loreTimer.kill();
	if(msg){
		loreMsg = msg.split("<br><br>");
	}
	if(g.view==="Game"){
		if(loreMsg[0]===undefined){
			$("#lore").css('display','none');
			$("#loreMsg, #introText").html('');
			T.set('#loreClick', {bottom:10});
			if(myZone()==="Salubrin Forest"&&my.difficulty===1&&my.exp===0&&my.level===1){
				showTutorial();
			}
		}else{
			if(x1===undefined){
				// set portrait if undefined
				var x1 = 0;
				var _z = myZone();
				if(_z==="Aspen Grove"||
				_z==="Braxxen's Bastille"||
				_z==="Kordata Marshlands"||
				_z==="Arcturin's Crypt"){
					x1 = -96;
				}else if(_z==="Artremia"||
				_z==="Fahlnir Citadel"||
				_z==="Kordata Ruins"||
				_z==="Temple of Prenssor"){
					x1 = -192;
				}else if(_z==="Fenwoven"||
				_z==="Viston's Redoubt"||
				_z==="Galeblast Fortress"||
				_z==="Ashenflow Peak"||
				_z==="Dire Sanctum"||
				_z==="Nimgaul"){
					x1 = -288;
				}
			}
			var m2 = loreMsg[0].replace(/<\/span>/g, "");
			var a1 = m2.split(" ");
			for(var i=0, len=a1.length; i<len;i++){
				if(a1[i]==="<span"){ delete a1[i]; }
			}
			var m2 = a1.join(" ");
			var a2 = m2.split("class='gold'>");
			var m2 = a2.join("");
			e9.innerHTML = m2;
			D.getElementById('lorePortrait').style.backgroundPosition = x1+"px 0";
			if($("#lore").css('display')==="none"){
				$("#lore").css('display','block');
			}
			T.to('#loreClick', .5, {
				startAt:{
					bottom:10
				},
				bottom:15, 
				repeat:-1, 
				yoyo:true
			});
		}
	}else if(g.view==="Intro"){
		if(loreMsg[0]===undefined){
			D.getElementById('introText').style.display='none';
			D.getElementById('introClick').style.display='none';
			$("#loreMsg, #introText").html('');
			var _z = myZone();
			if(_z==="Edenburg"){
				T.set('#loreClick', {bottom:10});
				// INTRO
				T.to(canWorldMap, 3, {
					scaleX:2.5,
					scaleY:2.5,
					x:1320,
					y:230,
					ease:ez.lin
				});
				T.to('#intro', 3, {
					alpha:0,
					onComplete:function(){
						T.set('#intro', {display:'none'});
						D.getElementById('gameView').style.display='block';
						T.fromTo('#gameView', 1, {
							opacity:0
							},{
							opacity:1
						});
						g.view = "Game";
					}
				});
			}
		}else{
			D.getElementById('introText').style.display='block';
			D.getElementById('introText').innerHTML = loreMsg[0];
			T.to('#introClick', .5, {
				startAt:{
					bottom:140
				},
				bottom:145, 
				repeat:-1, 
				yoyo:true
			});
			T.to('#loreClick', .5, {
				startAt:{
					bottom:10
				},
				bottom:15, 
				repeat:-1, 
				yoyo:true
			});
		}
	}
}
function makePortal(){
	var npc = "Miranda";
	var _z = myZone();
	if(_z==="Aspen Grove" ||
	_z==="Braxxen's Bastille" ||
	_z==="Kordata Marshlands" ||
	_z==="Arcturin's Crypt"){
		npc = "Rendo";
	}else if(_z==="Artremia" ||
	_z==="Fahlnir Citadel" ||
	_z==="Kordata Ruins" ||
	_z==="Temple of Prenssor"){
		npc = "Valeska";
	}else if(_z==="Fenwoven" ||
	_z==="Viston's Redoubt" ||
	_z==="Galeblast Fortress" ||
	_z==="Ashenflow Peak" ||
	_z==="Dire Sanctum" ||
	_z==="Nimgaul"){
		npc = "Arwen";
	}
	Chat(npc + " creates a magic portal to your quest's destination.");
	var interval = .01;
	var d = 2;
	if(isMobile===true){ 
		interval = .15; 
		d = 1;
	}
	var ez1 = ez.Qout;
	function doit(){
		var angle = M.random()*360;
		var x1 = circX(630, 130, angle);
		var y1 = circY(470, 130, angle);
		var p1 = can('whiteparticle50', 7, x1, y1, 25, 25);
		p1.image.onload = function(){
			T.to(p1, d, {
				startAt:{
					alpha:0
				},
				ease:ez1,
				alpha:1
			});
			T.to(p1, d, {
				x:640,
				y:480,
				scaleX:.1,
				scaleY:.1,
				ease:ez1,
				onComplete:function(){
					cRem(7, p1);
				}
			});
		}
		if(portalStatus===true){
			T.delayedCall(interval, doit);
		}
	}
	townPortal = IMG(480, 320, 320, 320, 'portal');
	townPortal.style.opacity = 0;
	townPortal.id = "townPortal";
	NG.gameView.appendChild(townPortal);
	portalStatus = true;
	T.to(townPortal, 3.5, {
		rotation:360,
		repeat:-1,
		ease:ez.lin
	});
	T.fromTo(townPortal, 1, {
		scale:0
		},{
		scale:1,
		ease:ez.Bout,
		onComplete:function(){
			T.to(townPortal, 3, {
				scale:.9,
				yoyo:true,
				repeat:-1,
				ease:ez.lin
			});
		}
	});
	doit();
	T.to(townPortal, 1.25, {
		opacity:1
	});
	g.showPortal=false;
}
function travelNextZone(){
	var z = '';
	var sz = 0;
	var _z = myZone();
	var _sz = mySubzone();
	// act 1
	if(_z==="Edenburg"){
		z = "Salubrin Forest";
	}else if(_z==="Salubrin Forest"){
		z = "Tendolin Meadows";
	}else if(_z==="Tendolin Meadows"){
		z = "Greenthorn Cavern";
		sz = 1;
	}else if(_z==="Greenthorn Cavern"){
		z = "Greenthorn Cavern";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			z = "Riven Grotto";
			sz = 1;
		}
	}else if(_z==="Riven Grotto"){
		z = "Riven Grotto";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			z = "Lanfeld Outpost";
			sz = 1;
		}
	}else if(_z==="Lanfeld Outpost"){
		z = "Lanfeld Outpost";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			z = "Aspen Grove";
			sz = 0;
		}
	// act 2
	}else if(_z==="Aspen Grove"){
		z = "Braxxen's Bastille";
		sz = 1;
	}else if(_z==="Braxxen's Bastille"){
		z = "Braxxen's Bastille";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			z = "Kordata Marshlands";
			sz = 1;
		}
	}else if(_z==="Kordata Marshlands"){
		z = "Kordata Marshlands";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			z = "Arcturin's Crypt";
			sz = 1;
		}
	}else if(_z==="Arcturin's Crypt"){
		z = "Arcturin's Crypt";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			z = "Artremia";
			sz = 0;
		}
	// act 3
	}else if(_z==="Artremia"){
		z = "Fahlnir Citadel";
		sz = 1;
	}else if(_z==="Fahlnir Citadel"){
		z = "Fahlnir Citadel";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			z = "Kordata Ruins";
			sz = 1;
		}
	}else if(_z==="Kordata Ruins"){
		z = "Kordata Ruins";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			z = "Temple of Prenssor";
			sz = 1;
		}
	}else if(_z==="Temple of Prenssor"){
		z = "Temple of Prenssor";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			z = "Fenwoven";
			sz = 0;
		}
	// act 4
	}else if(_z==="Fenwoven"){
		z = "Viston's Redoubt";
		sz = 1;
	}else if(_z==="Viston's Redoubt"){
		z = "Viston's Redoubt";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			sz = 4;
		}else if(_sz===4){
			z = "Galeblast Fortress";
			sz = 1;
		}
	}else if(_z==="Galeblast Fortress"){
		z = "Galeblast Fortress";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			sz = 4;
		}else if(_sz===4){
			z = "Ashenflow Peak";
			sz = 1;
		}
	}else if(_z==="Ashenflow Peak"){
		z = "Ashenflow Peak";
		if(_sz===1){
			sz = 2;
		}else if(_sz===2){
			sz = 3;
		}else if(_sz===3){
			sz = 4;
		}else if(_sz===4){
			z = "Dire Sanctum";
			sz = 0;
		}
	}else if(_z==="Dire Sanctum"){
		z = "Nimgaul";
		sz = 0;
	}
	travelZone(z, sz);
}
$("#gameView").on('click', '#townPortal', function(){
	if(countMobs()>0){
		QMsg("You must leave combat first!");
	}else{
		travelNextZone();
	}
});

function displayCooldownTime(t){
	if(t>60){
		t=M.ceil(t/60)+'m';
	}
	return t;
}
function timerTick(z,t,id){
	if(typeof timers[id]==='object'){
		timers[id].kill();
	}
	if(t<1){
		D.getElementById(id).textContent='';
	}else{
		if(t%1===0){
			D.getElementById(id).textContent=displayCooldownTime(t);
			timers[id] = T.delayedCall(1, function(){
				timerTick(z,--t,id);
			});
		}else{
			var rem=(t%1);
			var disp=M.ceil(t/1);
			D.getElementById(id).textContent=displayCooldownTime(disp);
			t-=rem;
			timers[id] = T.delayedCall(rem, function(){
				timerTick(z,t,id);
			});
		}
	}
}

$(document).ready(function(){
	$("#gameView").on('click','#myName',function(){
		if(my.level>=20){ //CHANGE
			if(!my.lastName){
				$("#lastNameWrap").css("display","block");
				$("#lastName").val("").focus();
				nameFocus=true;
			}
		}else{
			Error("You cannot change your surname until level 20.");
		}
	});
	$("#window2zoneday,#buffWindow").on('click',function(e){
		var cleared = clearMyWindows();
		if(e.target===this&&cityStatus===false&&mobsFound()===false&&cleared===false){
			addMonster();
		}
	});
	$("#gameView").on('focus','#lastName',function(){
		nameFocus=true;
	}).on('blur','#lastName',function(){
		nameFocus=false;
	});
});
$('#worldMap').on('click','.zoneSelectHeader',function(){
	var that = $(this);
	var x = that.html();
	if(x==='I'){
		viewingAct=1;
	}else if(x==='II'){
		viewingAct=2;
	}else if(x==="III"){
		viewingAct=3;
	}else if(x==="IV"){
		viewingAct=4;
	}
	writeMapHtml();
});
$("#lore").on('click', function(){
	if(loreMsg.length>0){
		loreMsg.shift();
		lore();
	}
});
$("#introText").on('click', function(){
	if(loreMsg.length>0){
		loreMsg.shift();
		lore();
	}
});
$("#paused").on('click', function(){
	unpauseGame();
});
$(function(){
	$('html').on('contextmenu', function(e){
		if(!dev){
			e.preventDefault();
		}
	});
	$("#gameView").on('click', '.winHeader', function(){
		var x = this.id;
		if(!g.draggingWindows){
			if(x==='bankHeader'){
				bankToggle();
			}else if(x==='statHeader'){
				charToggle();
			}else if(x==='invHeader'){
				inventory();
			}else if(x==="questHeader"){
				questToggle();
			}else if(x==="optionHeader"){
				optionsToggle();
			}else if(x==="battleReportHead"){
				hideBattleReport();
			}
		}
	});
});

function debugReportElements(){
	if(GLB.debugMode==="On"){
		Chat("Elements - DOM: "+$("*").length+
			" Canvas1: "+stage[5].getNumChildren()+
			" Canvas2: "+stage[6].getNumChildren()+
			" Canvas3: "+stage[7].getNumChildren(),2);
	}
}
var audioAssets = [],
audioAssetsNumber = 0;
function initAudio(){
    for(var i=0;i<=49;i++){
        audioAssets[i] = '';
    }
}
function audioNum(){
    if(audioAssetsNumber>49){
        audioAssetsNumber = 0;
    }
    return audioAssetsNumber++;
}
function flexTime(val, d){
	if(d===undefined){ d=.25; }
	if(val===undefined){ val=0; }
	GTS.kill();
	GTS = T.to(timescale, d, {
		startAt:{
			rate:val
		},
		rate:1,
		onUpdate:function(){
			T.globalTimeScale(timescale.rate);
		}
	});
}
function loadAudio(sound){
    var found = false;
    for(var i=0, len=audioAssets.length; i<len; i++){
		if(audioAssets[i].nodeName==="AUDIO"){
			if(audioAssets[i].src.indexOf(sound) !== -1){
				found = true; // found it - don't load it
				continue;
			}
		}
    }
    if(found===false){ // didn't find it - load using next audio slot
		var x = audioNum();
		audioAssets[x]=D.createElement('audio');
		audioAssets[x].src=soundLocation+sound+"."+audioExt;
    }
}
initAudio();


scriptsLoaded=true;