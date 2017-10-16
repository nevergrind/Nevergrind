// quests.js

function Qcolor(msg,qux){
	var Ldiff = my.level-qux;
	var bar;
	if(my.level>=1&&my.level<20){
		if(qux<my.level-10){ bar = "grey"; }
		if(qux>=my.level-10&&qux<my.level-4){ bar = "darkgreen"; }
		if(qux>=my.level-4&&qux<my.level-2){ bar = "lightBlue"; }
		if(qux>=my.level-2&&qux<my.level){ bar = "blue4"; }
		if(qux==my.level){ bar = "white"; }
		if(qux>my.level&&qux<=my.level+2){ bar = "yellow2"; }
		if(qux>my.level+2){ bar = "red2"; qux = "?";}
	}else{
		if(qux<(M.round(my.level*.4)) ){ bar = "grey"; }
		if(qux>=(M.round(my.level*.4))&&qux<my.level*.6 ){ bar = "darkgreen"; }
		if(qux>=(M.round(my.level*.6))&&qux<my.level*.8 ){ bar = "lightBlue"; }
		if(qux>=my.level*.8&&qux<my.level ){ bar = "blue4"; }
		if(qux==my.level){ bar = "white"; }
		if(qux>my.level&&qux<=my.level+2 ){ bar = "yellow2"; }
		if(qux>my.level+2 ){ bar = "red2"; qux = "?";}
	}
	msg = "<span class='"+bar+" mouse'>"+msg+"</span>";
	qux = (qux+'').fontcolor(bar);
	return msg;
}
$("#questJournal").on('click','.QT',function(){
	var quest=$(this).text();
	var subzone=$(this).data('subzone');
	quest=quest.replace("- ","");
	QupdateJournal(quest,subzone);
});
QL = {
	edenburg1:false,
	salubrin1:false,
	salubrin3:false,
	tendolin1:false,
	greenthorn1:false,
	greenthorn2:false,
	greenthorn3:false,
	grotto1:false,
	grotto2:false,
	grotto3:false,
	lanfeld1:false,
	lanfeld2:false,
	lanfeld3:false,
	aspen1:false,
	braxxen1:false,
	braxxen2:false,
	braxxen3:false,
	marshlands1:false,
	marshlands2:false,
	marshlands3:false,
	arcturin1:false,
	arcturin1:false,
	arcturin1:false,
	artremia1:false,
	fahnlir1:false,
	fahnlir2:false,
	fahnlir3:false,
	ruins1:false,
	ruins2:false,
	ruins3:false,
	temple1:false,
	temple2:false,
	temple3:false,
	fenwoven1:false,
	viston1:false,
	viston2:false,
	viston3:false,
	viston4:false,
	galeblast1:false,
	galeblast2:false,
	galeblast3:false,
	galeblast4:false,
	ashenflow1:false,
	ashenflow2:false,
	ashenflow3:false,
	ashenflow4:false,
	dire1:false,
	nimgaul1:false
};
function flashQuest(ind){
	setTimeout(function(){
		var e = document.getElementById('qind' + ind);
		if(e !== null){
			TweenMax.fromTo(e, .35, {
				color:"#fc0"
			}, {
				color:"#fff", 
				repeat:20, 
				yoyo: true, 
				onComplete: function(){ 
					TweenMax.to(e, .5, {
						color: "#fff"
					}); 
				} 
			});
		}
	}, 0);
}
function QupdateJournal(c,sz,bypass){ //update journal via function call or click event
	if(!bypass){
		if(questJournalBlock===1){ return; }
	}
	T.set('#QindicatorWrap', {opacity:1});
	var d=8000;
	var R="#ff0000";
	var Ir="#cccc52";
	var Iu="#a59263";
	var Y="#ffff00";
	var y="#ffd700";
	var G="#ffffff";
	var x=g.difficulty-1;
	var s1="";
	var s2="";
	var z="";
	var q="";
	var QH='';
	var QP='';
	var Z1 = myZone();
	var SZ = mySubzone();
	qmsg = '';
	var m1 = '';
	var dAdj=0;
	if(g.difficulty===2){ dAdj=25; }
	if(g.difficulty===3){ dAdj=44; }
	var Done=false;
	function QHead(questName, sz){
		if(!sz||sz===mySubzone()*1){
			QH=questName;
		}
	}
	function QI(msg, sz){
		if(!sz||sz===mySubzone()*1){
			QP+=msg;
		}
		return msg;
	}
	if(P.Q[x].GreaterFaydark<4){
		z="Salubrin Forest";
		q="Orcish Marauders";
		if(P.Q[x].GreaterFaydark<=1){ s1+="<div class='questZones'>"+z+"</div><div class='QT'>"+Qcolor(q,DADJ(2+dAdj))+"</div>"; }
		if(P.Q[x].GreaterFaydark===2){ s1+="<div class='questZones'>"+z+"</div><div class='QT'>"+Qcolor(q,DADJ(3+dAdj))+"</div>"; }
		if(P.Q[x].GreaterFaydark===3){ s1+="<div class='questZones'>"+z+"</div><div class='QT'>"+Qcolor(q,DADJ(4+dAdj))+"</div>"; }
		if(((Z1===z||Z1==="Edenburg")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].GreaterFaydark<2){
				QHead(q);
				var wc1 = "Clicking";
				var wc2 = "click";
				if(isMobile===true){ 
					wc1 = "Tapping"; 
					wc2 = "tap";
				}
				if(P.Q[x].GreaterFaydark===0){
					m1 = gold("Miranda: ")+"Hail and well met, "+my.name+". My name is Miranda Crossheart, Commander of the Edenburg Recruit Detachment. So you are here to make something of yourself here in Vandamor, eh?<br><br>"+
					"My job is to ensure that even an ordinary "+my.race.toLowerCase()+" like yourself succeeds in that task. There is plenty of busy work around here that doesn't include carrying around a clipboard.<br><br>"+
					"The best way to learn how to swim is by jumping into a river, so here's your first mission!<br><br>"+
					"Our scouts have reported that a group of orc marauders are terrorizing the perimeter of the city. Proceed to "+gold("Salubrin Forest")+" and eliminate the orcs! Be sure to test out all of your skills in combat so you know what you're doing.";
					if(!QL.edenburg1&&(Z1===z&&SZ===0||Z1==="Edenburg")){ 
						QL.edenburg1 = 1;
						lore(m1); 
					}
					if(Z1==="Edenburg"){
						makePortal();
					}
					P.Q[x].GreaterFaydark=1;
					save.quests();
				}else{
					m1 = gold("Miranda: ")+"Alright, "+my.name+". Time to warm up by killing off these worthless orc vermin. I hope you remember something useful from our weeks of intense combat training.<br><br>"+
					"If things don't go your way, you can always run back to Edenburg with your tail between your legs. Or you could make Edenburg proud and crush these pesky orcs. The choice is yours!";
					if(!QL.salubrin1&&(Z1===z&&SZ===0||Z1==="Edenburg")){ 
						QL.salubrin1 = 1;
						lore(m1); 
					}
				}
				s2= m1 + "<br><br>Slay four "+"orc pawns".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].GF1+"/4 orc pawns slain</i>");
			}
			if(P.Q[x].GreaterFaydark===3){
				QHead(q);
				m1 = gold("Miranda: ")+"By the Light of Venova, maybe I'm not wasting my time with you after all, "+my.name+". You sent those orcs runnin' to the hills!<br><br>"+
				"That's some fine work for a recruit that just learned how to put their diapers on. Most of my recruits come limping back with excuses, so this is refreshing. Demonstrate that you can finish the job and pursue these orcs to their rallying point.<br><br>"+
				"Our intel reports indicate that these orcs are from Lanfeld Outpost, commanded by Chief Grimden. I am truly amazed that a pack of dim-witted orcs managed to lumber their way here from Lanfeld Outpost.<br><br>"+
				"Orcs aren't exactly known for their expeditionary activities. Something out of the ordinary is going on here. This is the most aggressive orc incursion in centuries, but what does it mean?<br><br>"+
				"Search and destroy the remaining orcs in Salubrin Forest. From there we'll plan our counter-attack on Lanfeld Outpost.";
				if(!QL.salubrin3&&(Z1===z&&SZ===0||Z1==="Edenburg")){ 
					QL.salubrin3 = 1;
					lore(m1); 
				}
				s2= m1 + "<br><br>Slay 10 "+"orcs".fontcolor(y)+".<br><br>";
				s2+=QI('<i id="qind1">'+P.Q[x].GF1+"/10 orcs slain</i><br><br>");
				"Reward: "+"Rare Weapon".fontcolor(Ir);
			}
			Done=true; 
		}
	}
	if(P.Q[x].LesserFaydark<2
		&&P.Q[x].GreaterFaydark>=4){
		z="Tendolin Meadows";
		q="Pixie Problems";
		if(P.Q[x].LesserFaydark<=1){ s1+="<div class='questZones'>"+z+"</div><div class='QT'>"+Qcolor(q,DADJ(4+dAdj))+"</div>"; }
		if(((Z1===z||Z1==="Edenburg")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].LesserFaydark<2){
				QHead(q);
				P.Q[x].LesserFaydark=1;
				m1 = gold("Miranda: ")+"Well done, "+my.name+". That was commendable work for such an ordinary "+my.race.toLowerCase()+" like yourself. I knew the indoc sergeants were wrong about you! I suspected there was at least a remote chance you would amount to something.<br><br>";
				if(my.deaths===0){
					m1+="It looks like you haven't died so far. Great job! The problem with success is that you get rewarded with more work to do, so here's your next mission!<br><br>"
				}else{
					m1+="It looks like you have died "+my.deaths+" time so far. You might want to be more careful out there. Nevertheless, here is your next mission.<br><br>";
				}
				m1+="Our latest intel reports that a spy network of pixies are working with the orcs. They found Lanfeld insignia left behind at their hiding spots.<br><br>"+
				"I suspect they are supplying information to the orcs which would explain the recent ambushes on traveling merchants. Scout out "+gold("Tendolin Meadows")+" and eliminate the pixies at once.";
				if(!QL.tendolin1&&(Z1===z&&SZ===0||Z1==="Edenburg")){ 
					QL.tendolin1 = 1;
					lore(m1); 
				}
				s2= m1 + "<br><br>Slay 10 "+"pixie tricksters".fontcolor(y)+" and 5 "+"pixie pranksters".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].LF1+"/10 pixie tricksters slain</i><br>");
				s2+=QI("<i id='qind2'>"+P.Q[x].LF2+"/5 pixie pranksters slain</i>");
			}
			Done=true; 
		}
	}
	if(P.Q[x].Blackburrow<4
		&&P.Q[x].LesserFaydark>=2){
		z="Greenthorn Cavern";
		q="Viceroy's Ledge";
		if(P.Q[x].Blackburrow<=1){ s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(8+dAdj))+"</div>"; }
		if(P.Q[x].Blackburrow===2){ s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(10+dAdj))+"</div>";}
		if(P.Q[x].Blackburrow===3){ s1+="<div class='questZones'>"+z+" 3</div><div class='QT'>"+Qcolor(q,DADJ(12+dAdj))+"</div>"; }
		if(((Z1===z||Z1==="Edenburg")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].Blackburrow<2){
				QHead(q,1);
				P.Q[x].Blackburrow=1;
				m1=gold("Miranda: ")+"Alright, "+my.name+", you've done a fine job securing Edenburg's perimeter. Let's proceed toward Lanfeld Outpost and execute our counter-attack. The only way there from here is through Greenthorn Cavern.<br><br>"+
				"Hostile gnolls inhabit the cavern, so making your way through in one piece won't be easy. The first part is simple. Scout out "+gold("Greenthorn Cavern")+" and eliminate the gnolls guarding the entrance.";
				if(!QL.greenthorn1&&(Z1===z&&SZ===1||Z1==="Edenburg")){ 
					QL.greenthorn1 = 1;
					lore(m1); 
				}
				s2= m1+"<br><br>Slay 8 "+"gnoll pups".fontcolor(y)+", 6 "+"scrawny gnolls".fontcolor(y)+", and 4 "+"gnoll scouts".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].BB1+"/8 gnoll pups slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].BB2+"/6 scrawny gnolls slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].BB3+"/4 gnoll scouts slain</i><br>",1);
			}
			if(P.Q[x].Blackburrow===2){
				QHead(q,2);
				m1=gold("Miranda: ")+"Stellar work, but there's no time to rest now, "+my.name+". Continue to the bridge where Furrpaw Barxen performs combat training.<br><br>"+
				"The gnolls you'll encounter there are a cut above the hapless whelps you handled at the entrance of the cavern, so don't expect a walk through the park this time.";
				if(!QL.greenthorn2&&(Z1===z&&SZ===2||Z1==="Edenburg")){ 
					QL.greenthorn2 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 8 "+"gnoll shamans".fontcolor(y)+", 8 "+"patrolling gnolls".fontcolor(y)+", 6 "+"gnoll sergeants".fontcolor(y)+", and "+"Furrpaw Barxen".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].BB1+"/8 gnoll shamans slain</i><br>",2);
				s2+=QI("<i id='qind2'>"+P.Q[x].BB2+"/8 patrolling gnolls slain</i><br>",2);
				s2+=QI("<i id='qind3'>"+P.Q[x].BB3+"/6 gnoll sergeants slain</i><br>",2);
				if(P.Q[x].BB4===0){
					s2+=QI("Slay Furrpaw Barxen",2);
				}else{
					s2+=QI("Furrpaw Barxen slain",2);
				}
			}
			if(P.Q[x].Blackburrow===3){
				QHead(q,3);
				m1=gold("Miranda: ")+"Okay, "+my.name+", you're in for a real challenge this time. Viceroy Tanaden's command ledge blocks the exit to the cavern, so you will have to eliminate his guards and Tanaden to proceed further.<br><br>"+
				"His cadre of guards, tacticians, and commanders are no pushovers, so I wouldn't be surprised to hear of your untimely demise. Don't disappoint me, "+my.name+". I just told my commanding officer that you're no ordinary "+my.race.toLowerCase()+". Don't prove me wrong.";
				if(!QL.greenthorn3&&(Z1===z&&SZ===3||Z1==="Edenburg")){ 
					QL.greenthorn3 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 12 "+"elite gnoll guards".fontcolor(y)+", 8 "+"gnoll tacticians".fontcolor(y)+", 4 "+"gnoll commanders".fontcolor(y)+", and "+"Viceroy Tanaden".fontcolor(y)+" himself.<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].BB1+"/12 elite gnoll guards slain</i><br>",3);
				s2+=QI("<i id='qind2'>"+P.Q[x].BB2+"/8 gnoll tacticians slain</i><br>",3);
				s2+=QI("<i id='qind3'>"+P.Q[x].BB3+"/4 gnoll commanders slain</i><br>",3);
				if(P.Q[x].BB4===0){
					s2+=QI("Slay Viceroy Tanaden",3);
				}else{
					s2+=QI("Viceroy Tanaden slain",3);
				}
			}
			Done=true; 
		}
	}
	if(P.Q[x].Befallen<4
		&&P.Q[x].Blackburrow>=4){
		z="Riven Grotto";
		q="Under the River";
		if(P.Q[x].Befallen<=1){ s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(13+dAdj))+"</div>"; }
		if(P.Q[x].Befallen===2){	s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(15+dAdj))+"</div>"; }
		if(P.Q[x].Befallen===3){ s1+="<div class='questZones'>"+z+" 3</div><div class='QT'>"+Qcolor(q,DADJ(16+dAdj))+"</div>"; }
		if(((Z1===z||Z1==="Edenburg")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].Befallen<2){
				QHead(q,1);
				P.Q[x].Befallen=1;
				m1=gold("Miranda: ")+"Outstanding, "+my.name+"! I'd almost wager you have some talent for this line of business.<br><br>";
				if(talentsRemaining()>0){
					m1+="Speaking of talents, I see that you have some talent points to allocate. Open the Talent Tab on the Character Statistics Window to train your skills. You get a new skill point each time you level up, so don't forget!<br><br>";
				}else{
					m1+="Speaking of talents, I see that you allocated your talent points, so it seems you already know what you're doing. You're one of the sharpest recruits to come through our detachment in a while.<br><br>";
				}
				m1+="Now, in order to exact revenge at Lanfeld Outpost there's one last obstacle in our way: the Holomir River. Did you bring a bridge with you? If not you're going to have to use the underground passage in "+gold("Riven Grotto")+".<br><br>"+
				"In any case, I'm sure a scrappy "+my.race.toLowerCase()+" like yourself would prefer the adventurous route. The good news is you get to crack some skulls as the grotto is packed to the brim with undead and practitioners of forbidden magic.<br><br>"+
				"The entrance is lightly guarded by necromancer initiates and their pets. Deal with them first and then you can continue through the grotto.";
				if(!QL.grotto1&&(Z1===z&&SZ===1||Z1==="Edenburg")){ 
					QL.grotto1 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 6 "+"necro neophytes".fontcolor(y)+", 6 "+"necro initiates".fontcolor(y)+", and 6 "+"dread bones".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].BF1+"/6 necro neophytes slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].BF2+"/6 necro initiates slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].BF3+"/6 dread bones slain</i><br>",1);
			}
			if(P.Q[x].Befallen===2){
				QHead(q,2);
				m1=gold("Miranda: ")+"Did you see how scared they were, "+my.name+"? You really reformed those dregs. I'm proud of you. I don't think I could have done it better myself. That'll teach them to dabble in forbidden magic. These outcasts have no respect for the law!<br><br>"+
				"Take care to show them no mercy as their blasphemy threatens the foundation of Edenburg. Proceed to their central chamber where Dark Priest Nymda leads their ritualistic ceremonies to their dark lord.<br><br>"+
				"Be prepared to face a varied assortment of undead horrors which have been re-animated using their ghastly techniques. As an added bonus, once they are eliminated we can make our way to the exit.";
				if(!QL.grotto2&&(Z1===z&&SZ===2||Z1==="Edenburg")){ 
					QL.grotto2 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 8 "+"ice boned skeletons".fontcolor(y)+", 8 "+"necro acolytes".fontcolor(y)+", 5 "+"ghouls".fontcolor(y)+", and "+"Dark Priest Nymda".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].BF1+"/8 ice boned skeletons slain</i><br>",2);
				s2+=QI("<i id='qind1'>"+P.Q[x].BF2+"/8 necro acolytes slain</i><br>",2);
				s2+=QI("<i id='qind1'>"+P.Q[x].BF3+"/5 ghouls slain</i><br>",2);
				if(P.Q[x].BF4===0){
					s2+=QI("Slay Dark Priest Nymda",2);
				}else{
					s2+=QI("Dark Priest Nymda slain",2);
				}
			}
			if(P.Q[x].Befallen===3){
				QHead(q,3);
				m1=gold("Miranda: ")+"You've managed to reach the surface, but it appears to be an ambush! It seems that the Black Seer knew you were coming and positioned his undead army surrounding the exit. You must eliminate his entourage and then kill the Black Seer.<br><br>"+
				"Be wary that he is a powerful wizard so take heed when you battle him. Use all measures available to shut down his magical abilities. Many skills have the ability to stun or interrupt your target. Use them wisely to ensure victory!";
				if(!QL.grotto3&&(Z1===z&&SZ===3||Z1==="Edenburg")){ 
					QL.grotto3 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 9 "+"elf skeletons".fontcolor(y)+", 7 "+"burnt zombie".fontcolor(y)+", 7 "+"dread corpses".fontcolor(y)+", and "+"The Black Seer".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].BF1+"/9 elf skeletons slain</i><br>",3);
				s2+=QI("<i id='qind2'>"+P.Q[x].BF2+"/7 burnt zombies slain</i><br>",3);
				s2+=QI("<i id='qind3'>"+P.Q[x].BF3+"/7 dread corpses slain</i><br>",3);
				if(P.Q[x].BF4===0){
					s2+=QI("Slay The Black Seer",3);
				}else{
					s2+=QI("The Black Seer slain",3);
				}
			}
			Done=true; 
		}
	}
	if(P.Q[x].Crushbone<5&&!P.Q[x].repeatCB
		&&P.Q[x].Befallen>=4){
		z="Lanfeld Outpost";
		q="Grimden's Gambit";
		if(P.Q[x].Crushbone<=1){ s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(17+dAdj))+"</div>"; }
		if(P.Q[x].Crushbone===2){	s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(18+dAdj))+"</div>"; }
		if(P.Q[x].Crushbone===3){ s1+="<div class='questZones'>"+z+" 3</div><div class='QT'>"+Qcolor(q,DADJ(20+dAdj))+"</div>"; }
		if(P.Q[x].Crushbone===4){ 
			s1+="<div class='questZones'>"+z+" 3 (repeatable)</div><div class='QT'>"+Qcolor(q,DADJ(20+dAdj))+"</div>"; 
		}
		if(((Z1===z||Z1==="Edenburg")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].Crushbone<2){
				QHead(q,1);
				P.Q[x].Crushbone=1;
				m1=gold("Miranda: ")+"At last you have made it to Lanfeld Outpost. It's time to give Chief Grimden a taste of his own medicine. Grimden has something up his sleeve. I just don't trust him.<br><br>"+
				"Their recent hostility is unusual, even for orcs. Proceed to the entrance where you will find low-ranking orcs guarding the perimeter. Give them a taste of their own medicine!.";
				if(!QL.lanfeld1&&(Z1===z&&SZ===1||Z1==="Edenburg")){ 
					QL.lanfeld1 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 8 "+"orc pawns".fontcolor(y)+", 4 "+"orc centurions".fontcolor(y)+", and 4 "+"orc slavers".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].CB1+"/8 orc pawns slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].CB2+"/4 orc centurions slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].CB3+"/4 orc slavers slain</i><br>",1);
			}
			if(P.Q[x].Crushbone===2){
				QHead(q,2);
				m1=gold("Miranda: ")+"You are within striking distance of Chief Grimden. His post lies at the top of Lanfeld hill. A well-trained phalanx of orc guards block your way to the top of the hill. Strike them down and make haste for Grimden's command post!";
				if(!QL.lanfeld2&&(Z1===z&&SZ===2||Z1==="Edenburg")){ 
					QL.lanfeld2 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 7 "+"orc oracles".fontcolor(y)+", 7 "+"orc legionnaires".fontcolor(y)+", 7 "+"orc lookouts".fontcolor(y)+", and the "+"orc warlord".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].CB1+"/7 orc oracles slain</i><br>",2);
				s2+=QI("<i id='qind2'>"+P.Q[x].CB2+"/7 orc legionnaires slain</i><br>",2);
				s2+=QI("<i id='qind3'>"+P.Q[x].CB3+"/7 orc lookouts slain</i><br>",2);
				if(P.Q[x].CB4===0){
					s2+=QI("Slay the orc warlord",2);
				}else{
					s2+=QI("The orc warlord has been slain",2);
				}
			}
			if(P.Q[x].Crushbone>=3){
				QHead(q,3);
				m1=gold("Miranda: ")+"Phenomenal work, "+my.name+"! You have reached Grimden's command post! He is closely guarded by his most trusted orcs, including the royal guard and his emissaries. Eliminate them and then kill Chief Grimden. Edenburg will tremble in fear no longer.";
				if(!QL.lanfeld3&&P.Q[x].Crushbone===3&&(Z1===z&&SZ===3||Z1==="Edenburg")){ 
					QL.lanfeld3 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 10 "+"orc scoutsmen".fontcolor(y)+", 8 "+"orc royal guards".fontcolor(y)+", 6 "+"orc emissaries".fontcolor(y)+",  and "+"Chief Grimden".fontcolor(y)+". <br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].CB1+"/10 orc scoutsmen slain</i><br>",3);
				s2+=QI("<i id='qind2'>"+P.Q[x].CB2+"/8 orc royal guards slain</i><br>",3);
				s2+=QI("<i id='qind3'>"+P.Q[x].CB3+"/6 orc emissaries slain</i><br>",3);
				if(P.Q[x].CB5===0){
					s2+=QI("Slay Chief Grimden",3);
				}else{
					s2+=QI("Chief Grimden slain",3);
				}
			}
			Done=true; 
		}
	}
	//act2
	if(P.Q[x].Najena<4
		&&P.Q[x].Crushbone>=4){
		z="Braxxen's Bastille";
		q="Vigilante Justice";
		if(P.Q[x].Najena<=1){ s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(21+dAdj))+"</div>"; }
		if(P.Q[x].Najena===2){ s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(22+dAdj))+"</div>"; }
		if(P.Q[x].Najena===3){ s1+="<div class='questZones'>"+z+" 3</div><div class='QT'>"+Qcolor(q,DADJ(24+dAdj))+"</div>"; }
		if(((Z1===z||Z1==="Aspen Grove")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].Najena<2){
				QHead(q,1);
				if(P.Q[x].Najena===0){
					m1=gold("Rendo: ")+"Oh, my goodness! A visitor? Here in Aspen Grove. This is unexpected. Hardly anyone comes to visit here these days. Well, I mean, I have people that visit. Just not often from strangers.<br><br>"+
					"What brings you to Aspen Grove? The booming tourism industry? The exotic flora and fauna? What? Oh! Miranda Crossheart sent you to me? Heh! Well! That is something!<br><br>"+
					"Oh, my manners, I haven't even introduced myself. I am Rendo Surefoot of Rinara's Preservation Guild. We are simple folk that study the planet's life force! Are you here to talk about the life force?!<br><br>"+
					"Er? Wait, what is this?! An Idol of Chaos?! Oh Rinara above, the elders were right, again. They sensed a disturbance in the life force and this must be related. Of course! It's all starting to make sense now.<br><br>"+
					"This isn't any ordinary Idol. This is an artifact enchanted by Nalatos, the God of Chaos, himself. This signifies his return to Vandamor.<br><br>"+
					"He must physically remain in his realm, but he selects agents to sow his seeds of chaos throughout the land and empowers them with these Idols. The Idols fill their owner full of strength and malice. Perfect traits to perform Nalatos's dirty work!<br><br>"+
					"We should probably do something about all of this! Well, you should. I am going to stay right here where it's safe.<br><br>"+
					"Nalatos could have given an Idol to almost anyone. Our best bet is investigating any unusual activity. In fact there have been some strange happenings over at Arcturin's Crypt.<br><br>"+
					"Arcturin is known to many as a famous war hero. Sadly he was raised from the dead and seen raising other undead under his command. Quite tragic. My halfling instincts tell me that he was given an Idol, too!<br><br>"+
					"There's only one way to find out. You'll need to cross a mountain passage blocked by Braxxen's Bastille, a compound where Braxxen's motley henchmen run their black operations. That's a very dangerous place though. Do you think you can make it through?!";
					if(!QL.aspen1&&(Z1===z&&SZ===1||Z1==="Aspen Grove")){ 
						QL.aspen1 = 1;
						lore(m1); 
					}
					if(Z1==="Aspen Grove"){
						makePortal();
					}
					P.Q[x].Najena=1;
				}else{
					m1=gold("Rendo: ")+"Braxxen will hire anyone with a heart full of evil. Her henchmen are known for every brand of jackbooted thuggery you can think of! Slavery, torture, organ harvesting, and even magical experiments.<br><br>"+
					"It's dreadful. Just last week Aspen Grove's mayor had his cousin go missing. Officials have been too scared to investigate due to fear of retaliation.<br><br>"+
					"I think you are quite brave to go there at all. Anurans, skeletons, and goblins crowd the entrance. Good luck!";
					if(!QL.braxxen1&&(Z1===z&&SZ===1||Z1==="Aspen Grove")){ 
						QL.braxxen1 = 1;
						lore(m1); 
					}
				}
				s2=m1+"<br><br>Slay 10 "+"goblin warriors".fontcolor(y)+", 6 "+"greater skeletons".fontcolor(y)+", 4 "+"anuran guards".fontcolor(y)+", and "+"Grippywor".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].NJ1+"/10 goblin warriors slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].NJ2+"/6 greater skeletons slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].NJ3+"/4 anuran guards slain</i><br>",1);
				if(P.Q[x].NJ4===0){
					s2+=QI("Slay Grippywor",1);
				}else{
					s2+=QI("Grippywor slain",1);
				}
			}
			if(P.Q[x].Najena===2){
				QHead(q,2);
				m1=gold("Rendo: ")+"Yikes! I think you have their attention now! Braxxen's enforcers now block your path in the central torture chamber! Please take great care that you don't end up another of Braxxen's missing victims...";
				if(!QL.braxxen2&&(Z1===z&&SZ===2||Z1==="Aspen Grove")){ 
					QL.braxxen2 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 10 "+"goblin officers".fontcolor(y)+", 8 "+"necromancers".fontcolor(y)+", 6 "+"anuran torturers".fontcolor(y)+", and "+"Munin".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].NJ1+"/10 goblin officers slain</i><br>",2);
				s2+=QI("<i id='qind2'>"+P.Q[x].NJ2+"/8 necromancers slain</i><br>",2);
				s2+=QI("<i id='qind3'>"+P.Q[x].NJ3+"/6 anuran torturers slain</i><br>",2);
				if(P.Q[x].NJ4===0){
					s2+=QI("Slay Munin",2);
				}else{
					s2+=QI("Munin slain",2);
				}
			}
			if(P.Q[x].Najena===3){
				QHead(q,3);
				m1=gold("Rendo: ")+"Braxxen has sealed off the exit along with the help from her inner circle. She is assisted by goblin captains, cephalids, and her most skilled summoners. Such odds seem rather overwhelming! Are you sure you want to go to Arcturin's Crypt that badly?<br><br>"+
				"Maybe it would be better to just retire to a simple life fishing off the shore of Aspen Grove? Recovering all of these Idols would be great, but it's so dangerous! Do you think you were chosen by the Gods to complete this mission? You're going to need a divine intervention.<br><br>"+
				"I mean, I'm not trying to discourage you, but life is short, you know? I've never heard any prophecy about a "+my.race.toLowerCase()+" "+my.job.toLowerCase()+" single-handedly saving the world from Nalatos's shadowy return to Vandamor. That sounds absurd. But, hey, give it a go if you insist.";
				if(!QL.braxxen3&&(Z1===z&&SZ===3||Z1==="Aspen Grove")){ 
					QL.braxxen3 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 10 "+"magicians".fontcolor(y)+", 8 "+"cephalid subverters".fontcolor(y)+", 8 "+"goblin captains".fontcolor(y)+", "+"Burzina".fontcolor(y)+", and "+"Braxxen".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].NJ1+"/10 magicians slain</i><br>",3);
				s2+=QI("<i id='qind2'>"+P.Q[x].NJ2+"/8 cephalid subverters slain</i><br>",3);
				s2+=QI("<i id='qind3'>"+P.Q[x].NJ3+"/8 goblin captains slain</i><br>",3);
				if(P.Q[x].NJ4<2){
					s2+=QI("<i id='qind4'>Slay Burzina</i><br>",3);
				}else{
					s2+=QI("<i id='qind4'>Burzina slain</i><br>",3);
				}
				if(P.Q[x].NJ5<2){
					s2+=QI("<i id='qind5'>Slay Braxxen</i>",3);
				}else{
					s2+=QI("<i id='qind5'>Braxxen slain</i>",3);
				}
			}
			Done=true; 
		}
	}
	if(P.Q[x].UpperGuk<4
		&&P.Q[x].Najena>=4){
		z="Kordata Marshlands";
		q="Anuran Keymaster";
		if(P.Q[x].UpperGuk<=1){ s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(25+dAdj))+"</div>"; }
		if(P.Q[x].UpperGuk===2){	s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(26+dAdj))+"</div>"; }
		if(P.Q[x].UpperGuk===3){ s1+="<div class='questZones'>"+z+" 3</div><div class='QT'>"+Qcolor(q,DADJ(28+dAdj))+"</div>"; }
		if(((Z1===z||Z1==="Aspen Grove")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].UpperGuk<2){
				QHead(q,1);
				P.Q[x].UpperGuk=1;
				m1=gold("Rendo: ")+my.name+", I can't tell if it's luck or skill. One of these days, your luck will run out, so I hope it's skill! You punched your way through Braxxen's Bastille like it was nothing. You gave her a good rump bouncin' she'll never soon forget.<br><br>"+
				"The path is clear to Arcturin's crypt, but the gate is locked and we'll need a key to gain access. The only key I know of is held by the Prince Kerpple in Kortada Marshlands. Head northwest and defeat the anuran minions blocking your path.";
				if(!QL.marshlands1&&(Z1===z&&SZ===1||Z1==="Aspen Grove")){ 
					QL.marshlands1 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 9 "+"anuran sur warriors".fontcolor(y)+", 6 "+"anuran sur knights".fontcolor(y)+", and 6 "+"anuran sur shamans".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].UG1+"/9 anuran sur warriors slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].UG2+"/6 anuran sur knights slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].UG3+"/6 anuran sur shamans slain</i><br>",1);
			}
			if(P.Q[x].UpperGuk===2){
				QHead(q,2);
				m1=gold("Rendo: ")+"Yippie! You really stuck it to those amphibians! So what's it like to be such a powerful adventurer? Say, did you have a mysterious childhood? Maybe you're the hero we're looking for after all.<br><br>"+
				"You know, I always dreamed of traveling the world, collecting artifacts, and slaying monsters, but I don't think it was my destiny. My talents are more along the lines of collecting obscure information about lost keys and ancient artifacts.<br><br>"+
				"Well, we all play our roles, I suppose! Now, now, now, back to the matter at hand! Your job is not yet finished, "+my.name+". Continue further northwest and you'll encounter the anuran shamans and priests along with their fungus men lackeys.";
				if(!QL.marshlands2&&(Z1===z&&SZ===2||Z1==="Aspen Grove")){ 
					QL.marshlands2 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 8 "+"fungus breeders".fontcolor(y)+", 8 "+"anuran tir shamans".fontcolor(y)+", 6 "+"anuran priests".fontcolor(y)+", and the "+"anuran warden".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].UG1+"/8 fungus breeders slain</i><br>",2);
				s2+=QI("<i id='qind2'>"+P.Q[x].UG2+"/8 anuran tir shamans slain</i><br>",2);
				s2+=QI("<i id='qind3'>"+P.Q[x].UG3+"/6 anuran priests slain</i><br>",2);
				if(P.Q[x].UG4===0){
					s2+=QI("Slay the anuran warden",2);
				}else{
					s2+=QI("Anuran warden slain",2);
				}
			}
			if(P.Q[x].UpperGuk===3){
				QHead(q,3);
				m1=gold("Rendo: ")+"Impressive work, brave "+my.race.toLowerCase()+"! I don't think I've ever seen a "+my.job.toLowerCase()+" fight like that before. Where did you receive your training? Did you learn to fight like that in Edenburg or does it all come naturally? You will need those skills to retrieve the key from Prince Kerpple. I have total confidence in you this time!";
				if(!QL.marshlands3&&(Z1===z&&SZ===3||Z1==="Aspen Grove")){ 
					QL.marshlands3 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 12 "+"anuran tonta knights".fontcolor(y)+", 8 "+"anuran summoner".fontcolor(y)+", 8 "+"anuran fal shamans".fontcolor(y)+", and "+"Prince Kerpple".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].UG1+"/12 anuran tonta knights slain</i><br>",3);
				s2+=QI("<i id='qind2'>"+P.Q[x].UG2+"/8 anuran summoners slain</i><br>",3);
				s2+=QI("<i id='qind3'>"+P.Q[x].UG3+"/8 anuran fal shamans slain</i><br>",3);
				if(P.Q[x].UG4===0){
					s2+=QI("Slay Prince Kerpple",3);
				}else{
					s2+=QI("Prince Kerpple slain",3);
				}
			}
			Done=true; 
		}
	}
	if(P.Q[x].EstateofUnrest<5&& !P.Q[x].repeatER
		&&P.Q[x].UpperGuk>=4){
		z="Arcturin's Crypt";
		q="Laid to Rest";
		if(P.Q[x].EstateofUnrest<=1){ s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(29+dAdj))+"</div>"; }
		if(P.Q[x].EstateofUnrest===2){ s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(30+dAdj))+"</div>"; }
		if(P.Q[x].EstateofUnrest===3){ s1+="<div class='questZones'>"+z+" 3</div><div class='QT'>"+Qcolor(q,DADJ(31+dAdj))+"</div>"; }
		if(P.Q[x].EstateofUnrest===4&& !P.Q[x].repeatER){ 
			s1+="<div class='questZones'>"+z+" 3 (repeatable)</div><div class='QT'>"+Qcolor(q,DADJ(31+dAdj))+"</div>"; 
		}
		if(((Z1===z||Z1==="Aspen Grove")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].EstateofUnrest<2){
				QHead(q,1);
				P.Q[x].EstateofUnrest=1;
				m1=gold("Rendo: ")+"Ha, ha! Yes, I knew you could do it! And now we can unlock the crypt. The crypt was locked up once all of the crazy undead started marching around.<br><br>"+
				"Methinks you are a bit crazy to consider going in there, but it seems you always end up okay no matter the odds. You will be greeted by beetles, zombies, and mummies at the entrance. But be prepared for anything in the crypt! Good luck, "+my.name+".";
				if(!QL.arcturin1&&(Z1===z&&SZ===1||Z1==="Aspen Grove")){ 
					QL.arcturin1 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 8 "+"death beetles".fontcolor(y)+", 6 "+"tormented dead".fontcolor(y)+", and 4 "+"lumbering mummies".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].ER1+"/8 death beetles slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].ER2+"/6 tormented dead slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].ER3+"/4 lumbering mummies slain</i><br>",1);
			}
			if(P.Q[x].EstateofUnrest===2){
				QHead(q,2);
				m1=gold("Rendo: ")+"Wow! You took care of that so quickly. That looked easy. Did you know I can see everything you're doing? I have a magic spell that allows me to remotely view your activity.<br><br>"+
				"That might sound a little creepy. Maybe I should have told you about that in advance! It's only to keep tabs on what you're doing. Honestly, how else would I know what you're up to?<br><br>"+
				"And how do you think I knew where the Idol of Chaos was? Amazing, eh!? I am the all-seeing Rendo! Bow before me!<br><br>"+
				"Ahem, so, you're going to have to slay the Arch Duke of Artremia. He's the guardian of Arcturin's tomb. Nobody goes in or out without his permission. So get hoppin'!";
				if(!QL.arcturin2&&(Z1===z&&SZ===2||Z1==="Aspen Grove")){ 
					QL.arcturin2 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 10 "+"dry bone skeletons".fontcolor(y)+", 8 "+"crazed ghouls".fontcolor(y)+", 6 "+"nymphs".fontcolor(y)+", and the "+"Arch Duke of Artremia".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].ER1+"/10 dry bone skeletons slain</i><br>",2);
				s2+=QI("<i id='qind2'>"+P.Q[x].ER2+"/8 crazed ghouls slain</i><br>",2);
				s2+=QI("<i id='qind3'>"+P.Q[x].ER3+"/6 nymphs slain</i><br>",2);
				if(P.Q[x].ER4===0){
					s2+=QI("Slay the Arch Duke of Artremia",2);
				}else{
					s2+=QI("Arch Duke of Artremia slain",2);
				}
			}
			if(P.Q[x].EstateofUnrest>=3){
				QHead(q,3);
				m1=gold("Rendo: ")+"Oh good Rinara above, you actually gained access to Arcturin's tomb! Be prepared for anything down there. There's no telling what kind of undead horrors Arcturin has animated for his amusement down there.<br><br>"+
				"Be sure to sharpen your weapons. You do know you can upgrade your weapons and armor in any city, right? It costs some gold, but it's a good investment!";
				if(!QL.arcturin3&&P.Q[x].EstateofUnrest===3&&(Z1===z&&SZ===3||Z1==="Aspen Grove")){ 
					QL.arcturin3 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 8 "+"mortuary fungi".fontcolor(y)+", 8 "+"dusty werewolves".fontcolor(y)+", 5 "+"cephalid subverters".fontcolor(y)+", 5 "+"festering hags".fontcolor(y)+", and "+"Arcturin, the Lich King".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].ER1+"/8 mortuary fungi slain</i><br>",3);
				s2+=QI("<i id='qind2'>"+P.Q[x].ER2+"/8 dusty werewolves slain</i><br>",3);
				s2+=QI("<i id='qind3'>"+P.Q[x].ER3+"/5 cephalid subverters slain</i><br>",3);
				s2+=QI("<i id='qind4'>"+P.Q[x].ER4+"/5 festering hags slain</i><br>",3);
				if(P.Q[x].ER5===0){
					s2+=QI("Slay Arcturin, the Lich King",3);
				}else{
					s2+=QI("Arcturin, the Lich King slain",3);
				}
			}
			Done=true; 
		}
	}
	//act3
	if(!P.Q[x].repeatCm3 && ((P.Q[x].CastleMistmoore<4
		&&P.Q[x].EstateofUnrest>=4) || P.Q[x].CastleMistmoore>3)){
		z="Fahlnir Citadel";
		q="Tribal Warfare";
		if(P.Q[x].CastleMistmoore<=1){
			s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(32+dAdj))+"</div>";
		}
		if(P.Q[x].CastleMistmoore===2){
			s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(34+dAdj))+"</div>";
		}
		if(P.Q[x].CastleMistmoore===3){
			s1+="<div class='questZones'>"+z+" 3</div><div class='QT'>"+Qcolor(q,DADJ(35+dAdj))+"</div>";
		}else if(P.Q[x].CastleMistmoore>3&& !P.Q[x].repeatCm3){
			s1+="<div class='questZones'>"+z+" (repeatable)</div><div class='QT'>"+Qcolor(q,DADJ(35+dAdj))+"</div>";
		}
		if(((Z1===z||Z1==="Artremia")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].CastleMistmoore<2){
				QHead(q,1);
				if(P.Q[x].CastleMistmoore===0){
					P.Q[x].CastleMistmoore=1;
					m1=gold("Valeska: ")+"Welcome to Artremia, capital city of the wood elves, "+my.name+". I am Valeska Windcrest, Chief Archivist at the Druidic Temple of DEITY studies. It is a pleasure to meet you, "+my.name+".<br><br>"+
					"Rendo raved about your prowess on the battlefield. I'm glad he sent you my way, as we have our own share of concerns here in Artremia. Rumors about the Idols of Chaos have been confirmed, as you now possess two of them!<br><br>"+
					"I did some research on this topic and it appears that Nalatos can only empower three at once or it will drain his powers too much. It seems even Gods have their limits. That means only one idol remains, and I suspect that I know where it is.<br><br>"+
					"But first, I have a request. Our people have been under siege by the dark elves of "+gold("Fahlnir Citadel")+". They are led by Countess Varnia, a powerful necromancer.<br><br>"+
					"She commands a well organized army of dark elves committed to wiping Artremia off the map. If you put an end to their schemes, I promise to help you with your quest.";
					if(!QL.artremia1&&(Z1===z&&SZ===1||Z1==="Artremia")){ 
						QL.artremia1 = 1;
						lore(m1); 
					}
					if(Z1==="Artremia"){
						makePortal();
					}
				}else{
					m1=gold("Valeska: ")+"You can start by scouting out "+gold("Fahlnir Citadel")+". At the entrance you will find a group of dark elf trainees preparing to attack our city. They are led by Lieutenant Xagorn. Ormir's blessings upon you, "+my.name+"!";
					if(!QL.fahnlir1&&(Z1===z&&SZ===1||Z1==="Artremia")){ 
						QL.fahnlir1 = 1;
						lore(m1); 
					}
				}
				s2=m1+"<br><br>Slay 8 "+"pledge familiars".fontcolor(y)+", 7 "+"initiate familiars".fontcolor(y)+", 6 "+"gnoll scouts".fontcolor(y)+", and "+"Lieutenant Xagorn".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].CM1+"/8 pledge familiars slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].CM2+"/7 initiate familiars slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].CM3+"/6 glyphed familiars slain</i><br>",1);
				if(P.Q[x].CM4===0){
					s2+=QI("Slay Lieutenant Xagorn",1);
				}else{
					s2+=QI("Lieutenant Xagorn slain",1);
				}
			}
			if(P.Q[x].CastleMistmoore===2){
				QHead(q,2);
				m1=gold("Valeska: ")+"Astonishing work, "+my.name+". Rendo was right about you. I've never seen a "+my.job.toLowerCase()+" fight the way you do. Lieutenant Xagorn scarcely stood a chance against you. Our Fallen Leaf Militia should study your tactics.<br><br>"+
				"We can barely defend our city's perimeter these days. So few take city defense seriously and our people have grown weak with complacency. Our people are obsessed with abstract thinking to the point where we rationalize our own extinction.<br><br>"+
				"Personally, I believe it is destroying our culture, but our leadership won't make any reforms. We are in quite a mess even without the dark elves preying upon us. If they don't destroy us, the wood elves surely will!<br><br>"+
				"Enough of my soliloquy. Continue with your mission by attacking deeper in the citadel. You will encounter Dragoon Reklyn, the famed officer in charge of all melee training. Take care when confronting him. He is a respected veteran in combat.";
				if(!QL.fahnlir2&&(Z1===z&&SZ===2||Z1==="Artremia")){ 
					QL.fahnlir2 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 8 "+"glyphed guards".fontcolor(y)+", 6 "+"glyphed sentries".fontcolor(y)+", 6 "+"glyphed custodians".fontcolor(y)+", 4 "+"negotiators".fontcolor(y)+", and "+"Dragoon Reklyn".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].CM1+"/8 glyphed guards slain</i><br>",2);
				s2+=QI("<i id='qind2'>"+P.Q[x].CM2+"/6 glyphed sentries slain</i><br>",2);
				s2+=QI("<i id='qind3'>"+P.Q[x].CM3+"/6 glyphed custodians slain</i><br>",2);
				s2+=QI("<i id='qind4'>"+P.Q[x].CM4+"/4 negotiators slain</i><br>",2);
				if(P.Q[x].CM5===0){
					s2+=QI("Slay Dragoon Reklyn",2);
				}else{
					s2+=QI("Dragoon Reklyn slain",2);
				}
			}
			if(P.Q[x].CastleMistmoore===3 || (P.Q[x].CastleMistmoore>3&& !P.Q[x].repeatCm3)){
				QHead(q,3);
				m1=gold("Valeska: ")+"Well done! Yet another quest where you made it look so easy. This final leg of the mission is the most deadly. You will have to confront Countess Varnia and her bodyguard, Zigruben, a powerful shadow knight. The wood elves of Artremia are counting on you, "+my.name+".";
				if(!QL.fahnlir3&&P.Q[x].CastleMistmoore===3&&(Z1===z&&SZ===3||Z1==="Artremia")){ 
					QL.fahnlir3 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 7 "+"deathly harbingers".fontcolor(y)+", 7 "+"dark ritualists".fontcolor(y)+", 7 "+"shadowy sages".fontcolor(y)+", 7 "+"leering gargoyles".fontcolor(y)+", "+"Countess Varnia".fontcolor(y)+" and "+"Zigruben".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].CM1+"/7 deathly harbingers slain</i><br>",3);
				s2+=QI("<i id='qind2'>"+P.Q[x].CM2+"/7 dark ritualists slain</i><br>",3);
				s2+=QI("<i id='qind3'>"+P.Q[x].CM3+"/7 shadowy sages slain</i><br>",3);
				s2+=QI("<i id='qind4'>"+P.Q[x].CM4+"/7 leering gargoyles slain</i><br>",3);
				if(P.Q[x].CM5<2){
					s2+=QI("<i id='qind5'>Slay Countess Varnia</i><br>",3);
				}else{
					s2+=QI("<i id='qind5'>Countess Varnia slain</i><br>",3);
				}
				if(P.Q[x].CM6<2){
					s2+=QI("<i id='qind6'>Slay Zigruben</i>",3);
				}else{
					s2+=QI("<i id='qind6'>Zigruben slain</i>",3);
				}
			}
			Done=true; 
		}
	}
	if(!P.Q[x].repeatLg3 && ((P.Q[x].LowerGuk<4
		&&P.Q[x].CastleMistmoore>=4) || P.Q[x].LowerGuk>3)){
		z="Kordata Ruins";
		q="Mired in Ruins";
		if(P.Q[x].LowerGuk<=1){ s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(36+dAdj))+"</div>"; }
		if(P.Q[x].LowerGuk===2){	s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(37+dAdj))+"</div>"; }
		if(P.Q[x].LowerGuk===3){ 
			s1+="<div class='questZones'>"+z+" 3</div><div class='QT' data-subzone='3'>"+Qcolor(q,DADJ(38+dAdj))+"</div>"; 
		}else if(P.Q[x].LowerGuk>3&& !P.Q[x].repeatLg3){
			s1+="<div class='questZones'>"+z+" 3 (repeatable)</div><div class='QT' data-subzone='3'>"+Qcolor(q,DADJ(38+dAdj))+"</div>";
		}
		if(((Z1===z||Z1==="Artremia")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].LowerGuk<2){
				QHead(q,1);
				P.Q[x].LowerGuk=1;
				m1=gold("Valeska: ")+my.name+", on the behalf of all wood elves, I thank you for eliminating the threat of Countess Varnia. Finally our people can live in peace. And now, as promised, I can help you with your quest.<br><br>"+
				"Our scouts have reported that Sentoth, the Lord of Rapture, has returned to the Temple of Pressor. The lizardmen there worship him as a deity, though he is only a demi-God, not a true deity.<br><br>"+
				"Little is known about his true nature or where he originates from, but it is clear that he is back to lead their blood fervor. They have been terrorizing nearby towns and using their captors in repulsive sacrificial rituals. Truly revolting and unspeakable horrors, ugh!<br><br>"+
				"I informed Rendo and, indeed, he was able to confirm with remote viewing that Sentoth possesses an Idol Of Chaos. Your only obstacle is the anuran army at the "+gold("Kordata Ruins")+". They control the swamps between here and the Temple of Prenssor.<br><br>"+
				"You will have to fight your way there. Begin at the entrance of the ruins. Beware that the anuran assassin is known to guard the entrance from anyone that dares to invade their territory. Don't be surprised if he brings heavy support.";
				if(!QL.ruins1&&(Z1===z&&SZ===1||Z1==="Artremia")){ 
					QL.ruins1 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 10 "+"anuran tir knights".fontcolor(y)+", 8 "+"lem anuran wizards".fontcolor(y)+", 6 "+"amn anuran wizards".fontcolor(y)+", the "+"anuran assassin".fontcolor(y)+", and the "+"anuran supplier".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].LG1+"/10 anuran tir knights slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].LG2+"/8 lem anuran wizards slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].LG3+"/6 amn anuran wizards slain</i><br>",1);
				if(P.Q[x].LG4<2){
					s2+=QI("<i id='qind4'>Slay the anuran assassin</i><br>",1);
				}else{
					s2+=QI("<i id='qind4'>Anuran assassin slain</i><br>",1);
				}
				if(P.Q[x].LG5<2){
					s2+=QI("<i id='qind5'>Slay the anuran supplier</i>",1);
				}else{
					s2+=QI("<i id='qind5'>Anuran supplier slain</i>",1);
				}
			}
			if(P.Q[x].LowerGuk===2){
				QHead(q,2);
				m1=gold("Valeska: ")+"Nice work, "+my.name+". You have made solid progress into anuran territory. They are a militaristic order known for their discipline. They have a detailed ranking system assigned to each anuran, which indicates their strength in battle.<br><br>"+
				"Proceed further and you will encounter much tougher anurans. The frenzied anuran and the anuran sentinel control the central territory. You will have to eliminate them before you can advance any further.";
				if(!QL.ruins2&&(Z1===z&&SZ===2||Z1==="Artremia")){ 
					QL.ruins2 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 8 "+"pul anuran knights".fontcolor(y)+", 8 "+"dol anuran wizards".fontcolor(y)+", 6 "+"vex anuran wizards".fontcolor(y)+", 6 "+"ber anuran knights".fontcolor(y)+", the "+"frenzied anuran".fontcolor(y)+", and the "+"anuran sentinel".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].LG1+"/8 pul anuran knights slain</i><br>",2);
				s2+=QI("<i id='qind2'>"+P.Q[x].LG2+"/8 dol anuran wizards slain</i><br>",2);
				s2+=QI("<i id='qind3'>"+P.Q[x].LG3+"/6 vex anuran wizards slain</i><br>",2);
				s2+=QI("<i id='qind4'>"+P.Q[x].LG4+"/6 ber anuran knights slain</i><br>",2);
				if(P.Q[x].LG5<2){
					s2+=QI("<i id='qind5'>Slay the frenzied anuran</i><br>",2);
				}else{
					s2+=QI("<i id='qind5'>Frenzied anuran slain</i><br>",2);
				}
				if(P.Q[x].LG6<2){
					s2+=QI("<i id='qind6'>Slay the anuran sentinel</i>",2);
				}else{
					s2+=QI("<i id='qind6'>Anuran sentinel slain</i>",2);
				}
			}
			if(P.Q[x].LowerGuk===3 || (P.Q[x].LowerGuk>3&& !P.Q[x].repeatLg3)){
				QHead(q,3);
				m1=gold("Valeska: ")+"Splendid! You are drawing near to the Temple of Prenssor. Only King Froaki and his personal arch magi stand in your way. Of course you will have to defeat their henchmen first, which is no small task either.<br><br>"+
				"The arch magi uses vicious magic spells. Have you been collecting armor with good resistances on them? It's a good idea to hang on to armor with strong resistances. In some fights, high resists are more important than armor.<br><br>"+
				"I have heard that some armor can even absorb magic damage! I've never seen it myself, but that's amazing if it's true.";
				if(!QL.ruins3&&P.Q[x].LowerGuk===3&&(Z1===z&&SZ===3||Z1==="Artremia")){ 
					QL.ruins3 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 12 "+"mal anuran knights".fontcolor(y)+", 10 "+"zod anuran wizards".fontcolor(y)+", 8 "+"zod anuran knights".fontcolor(y)+", "+"King Froaki".fontcolor(y)+" and the "+"anuran arch magus".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].LG1+"/12 mal anuran knights slain</i><br>",3);
				s2+=QI("<i id='qind2'>"+P.Q[x].LG2+"/10 zod anuran wizards slain</i><br>",3);
				s2+=QI("<i id='qind3'>"+P.Q[x].LG3+"/8 zod anuran knights slain</i><br>",3);
				if(P.Q[x].LG4<2){
					s2+=QI("<i id='qind4'>Slay King Froaki</i><br>",3);
				}else{
					s2+=QI("<i id='qind4'>King Froaki slain</i><br>",3);
				}
				if(P.Q[x].LG5<2){
					s2+=QI("<i id='qind5'>Slay the anuran arch magus</i>",3);
				}else{
					s2+=QI("<i id='qind5'>Anuran arch magus slain</i>",3);
				}
			}
			Done=true; 
		}
	}
	if(!P.Q[x].repeatCt3 && P.Q[x].LowerGuk>=4){
		z="Temple of Prenssor";
		q="Omen of the Serpent Lord";
		if(P.Q[x].CazicThule<=1){ s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(39+dAdj))+"</div>"; }
		if(P.Q[x].CazicThule===2){ s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(40+dAdj))+"</div>"; }
		if(P.Q[x].CazicThule===3){
			s1+="<div class='questZones'>"+z+" 3</div><div class='QT'>"+Qcolor(q,DADJ(41+dAdj))+"</div>";
		}else if(P.Q[x].CazicThule>3&& !P.Q[x].repeatCt3){
			s1+="<div class='questZones'>"+z+" 3 (repeatable)</div><div class='QT'>"+Qcolor(q,DADJ(41+dAdj))+"</div>";
		}
		if(((Z1===z||Z1==="Artremia")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].CazicThule<2){
				QHead(q,1);
				P.Q[x].CazicThule=1;
				m1=gold("Valeska: ")+"That is quite a trail of destruction you left in your wake! Those anurans didn't know what hit them. Now it's time to attack the "+gold("Temple of Prenssor")+". The courtyard is defended by Soprenti the Anointed and his adjuncts. Make haste and slay them at once.";
				if(!QL.temple1&&(Z1===z&&SZ===1||Z1==="Artremia")){ 
					QL.temple1 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 8 "+"lizard disciples".fontcolor(y)+", 6 "+"lizard pages".fontcolor(y)+", 4 "+"lizard defenders".fontcolor(y)+", and "+"Soprenti the Anointed".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].CT1+"/8 lizard disciples slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].CT2+"/6 lizard pages slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].CT3+"/4 lizard defenders slain</i><br>",1);
				if(P.Q[x].CT4===0){
					s2+=QI("Slay Soprenti the Anointed",1);
				}else{
					s2+=QI("Soprenti the Anointed slain",1);
				}
			}
			if(P.Q[x].CazicThule===2){
				QHead(q,2);
				m1=gold("Valeska: ")+"You're sure to have Sentoth's attention at this point. You have intruded on his territory and he won't be pleased. Nonetheless, continue toward the temple's altar.<br><br>"+
				"You will find a bridge guarded by Merszas the Divine and Sartuth the Possessed, a deadly team of lizardmen. Once you eliminate them you may proceed to the sacrificial altar.";
				if(!QL.temple2&&(Z1===z&&SZ===2||Z1==="Artremia")){ 
					QL.temple2 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 10 "+"lizard heralds".fontcolor(y)+", 8 "+"lizard protectors".fontcolor(y)+", 6 "+"lizard justicars".fontcolor(y)+", "+"Sartuth the Possessed".fontcolor(y)+", and "+"Merszas the Divine".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].CT1+"/10 lizard heralds slain</i><br>",2);
				s2+=QI("<i id='qind2'>"+P.Q[x].CT2+"/8 lizard protectors slain</i><br>",2);
				s2+=QI("<i id='qind3'>"+P.Q[x].CT3+"/6 lizard justicars slain</i><br>",2);
				if(P.Q[x].CT4<2){
					s2+=QI("<i id='qind4'>Slay Sartuth the Possessed</i><br>",2);
				}else{
					s2+=QI("<i id='qind4'>Sartuth the Possessed slain</i><br>",2);
				}
				if(P.Q[x].CT5<2){
					s2+=QI("<i id='qind5'>Slay Merszas the Divine</i>",2);
				}else{
					s2+=QI("<i id='qind5'>Merszas the Divine slain</i>",2);
				}
			}
			if(P.Q[x].CazicThule===3|| (P.Q[x].CazicThule>3&& !P.Q[x].repeatCt3)){
				QHead(q,3);
				m1=gold("Valeska: ")+"You have made it to the altar. This is it! The chance to collect all three Idols of Chaos! Sentoth's elite lizardmen will be at the altar ready to defend against your assault. Be prepared to fight Sentoth, the toughest encounter thus far.";
				if(!QL.temple3&&P.Q[x].CazicThule===3&&(Z1===z&&SZ===3||Z1==="Artremia")){ 
					QL.temple3 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 10 "+"lizard zealots".fontcolor(y)+", 10 "+"lizard crusaders".fontcolor(y)+", 8 "+"lizard champions".fontcolor(y)+", and the "+"Sentoth, Lord of Rapture".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].CT1+"/10 lizard zealots slain</i><br>",3);
				s2+=QI("<i id='qind2'>"+P.Q[x].CT2+"/10 lizard crusaders slain</i><br>",3);
				s2+=QI("<i id='qind3'>"+P.Q[x].CT3+"/8 lizard champions slain</i><br>",3);
				if(P.Q[x].CT4===0){
					s2+=QI("Slay Sentoth, Lord of Rapture",3);
				}else{
					s2+=QI("Sentoth, Lord of Rapture slain",3);
				}
			}
			Done=true; 
		}
	}
	//act4
	if(((P.Q[x].KedgeKeep<=5
		&&P.Q[x].CazicThule>=4) || P.Q[x].KedgeKeep>3)){
		z="Viston's Redoubt";
		q="A Dark Undertaking";
		if(P.Q[x].KedgeKeep<=1){ 
			s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(42+dAdj))+"</div>"; 
		}
		if(P.Q[x].KedgeKeep===2){	
			s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(43+dAdj))+"</div>"; 
		}
		if(P.Q[x].KedgeKeep===3){
			s1+="<div class='questZones'>"+z+" 3</div><div class='QT' data-subzone='3'>"+Qcolor(q,DADJ(43+dAdj))+"</div>";
		}else if(P.Q[x].KedgeKeep>3&& !P.Q[x].repeatKk3){
			s1+="<div class='questZones'>"+z+" 3 (repeatable)</div><div class='QT' data-subzone='3'>"+Qcolor(q,DADJ(43+dAdj))+"</div>";
		}
		if(P.Q[x].KedgeKeep===4){
			s1+="<div class='questZones'>"+z+" 4</div><div class='QT' data-subzone='4'>"+Qcolor(q,DADJ(44+dAdj))+"</div>";
		}
		if(P.Q[x].KedgeKeep===5&&!P.Q[x].repeatKk4){
			s1+="<div class='questZones'>"+z+" 4 (repeatable)</div><div class='QT' data-subzone='4'>"+Qcolor(q,DADJ(44+dAdj))+"</div>";
		}
		if(((Z1===z||Z1==="Fenwoven")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].KedgeKeep<2){
				QHead(q,1);
				if(P.Q[x].KedgeKeep===0){
					P.Q[x].KedgeKeep=1;
					m1=gold("Arwen: ")+"Good day, "+my.name+". I am Arwen, the Village Shaman of Fenwoven. I have heard at length about your remarkable effort to collect the Idols of Chaos from Edenburg to Artremia. And now you stand here before me in our humble village. It is an honor to serve you, however I can.<br><br>"+
					"First and foremost, it is a great achievement to collect the Idols of Chaos. The Idols are spiritual artifacts enchanted with Nalatos's power. Over time they will lose their enchantment, allowing him to spread his chaotic influence once again.<br><br>"+
					"And here's what most do not realize: the enchanted Idols are also keys to unlock a portal to Nimgaul, the astral plane where Nalatos dwells.<br><br>"+
					"The Shamans of Fenwoven are adept at sensing these astral disturbances, which are clearly coming from the depths of Ashenflow Peak. This is bad news as it is well guarded by legendary dragons and their minions.<br><br>"+
					"Galeblast Fortress is the only way to access the subterranean caves of Ashenflow Peak, but you must acquire a key from Revenant Viston. Little is known about him except that he commands a faction of vampires at "+gold("Viston's Redoubt")+".";
					if(!QL.fenwoven1&&(Z1===z&&SZ===1||Z1==="Fenwoven")){ 
						QL.fenwoven1 = 1;
						lore(m1); 
					}
					if(Z1==="Fenwoven"){
						makePortal();
					}
				}else{
					m1=gold("Arwen: ")+"Sari Portentia and her minions guard the entrance to the redoubt. Destroy her and her minions to clear a path to Viston's inner sanctum.";
					if(!QL.viston1&&(Z1===z&&SZ===1||Z1==="Fenwoven")){ 
						QL.viston1 = 1;
						lore(m1); 
					}
				}
				s2=m1+"<br><br>Slay 8 "+"peering gargoyles".fontcolor(y)+", 8 "+"fettered defilers".fontcolor(y)+", 8 "+"dread werewolves".fontcolor(y)+", and "+"Sari Portentia".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].KK1+"/8 peering gargoyles slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].KK2+"/8 fettered defilers slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].KK3+"/8 dread werewolf slain</i><br>",1);
				if(P.Q[x].KK4===0){
					s2+=QI("Slay Sari Portentia",1);
				}else{
					s2+=QI("Sari Portentia slain",1);
				}
			}
			if(P.Q[x].KedgeKeep===2){
				QHead(q,2);
				m1=gold("Arwen: ")+"You've made your way inside Viston's Redoubt. Well done! Now to eliminate the minions who guard the way to his sanctuary.<br><br>"+
				"Shardok is his enchanted gargoyle sentinel that alerts him of any intruders into his redoubt. You will have to eliminate him to proceed any further.";
					if(!QL.viston2&&(Z1===z&&SZ===2||Z1==="Fenwoven")){ 
						QL.viston2 = 1;
						lore(m1); 
					}
				s2=m1+"<br><br>Slay 8 "+"brooding imps".fontcolor(y)+", 8 "+"manacled spoilers".fontcolor(y)+", 5 "+"lusting werewolves".fontcolor(y)+", 5 "+"bloodthirsty bats".fontcolor(y)+" and "+"Shardok".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].KK1+"/8 brooding imps slain</i><br>",2);
				s2+=QI("<i id='qind2'>"+P.Q[x].KK2+"/8 manacled spoilers slain</i><br>",2);
				s2+=QI("<i id='qind3'>"+P.Q[x].KK3+"/5 lusting werewolves slain</i><br>",2);
				s2+=QI("<i id='qind4'>"+P.Q[x].KK4+"/5 bloodthirsty bats slain</i><br>",2);
				if(P.Q[x].KK5===0){
					s2+=QI("Slay Shardok",2);
				}else{
					s2+=QI("Shardok slain",2);
				}
			}
			if(!P.Q[x].repeatKk3){
				if(P.Q[x].KedgeKeep===3
					|| ( P.Q[x].KedgeKeep>=4&&sz===3 )
					|| ( P.Q[x].KedgeKeep>=4&&(c===undefined&&mySubzone()===3)) 
				){
					QHead(q,3);
					m1=gold("Arwen: ")+"Viston is likely readying his forces and is aware of your intrusion into his redoubt. Korman Valen and Artun Desmoni will be guarding the steps to his altar. Fight through their minions and eliminate this duo to proceed.";
					if(!QL.viston3&&P.Q[x].KedgeKeep===3&&(Z1===z&&SZ===3||Z1==="Fenwoven")){ 
						QL.viston3 = 1;
						lore(m1); 
					}
					s2=m1+"<br><br>Slay 10 "+"pained seethers".fontcolor(y)+", 10 "+"soul destroyers".fontcolor(y)+", 8 "+"vampire bats".fontcolor(y)+", "+"Artun Desmoni".fontcolor(y)+" and  "+"Korman Valen".fontcolor(y)+".<br><br>";
					s2+=QI("<i id='qind1'>"+P.Q[x].KK1+"/10 pained seethers slain</i><br>",3);
					s2+=QI("<i id='qind2'>"+P.Q[x].KK2+"/10 soul destroyers slain</i><br>",3);
					s2+=QI("<i id='qind3'>"+P.Q[x].KK3+"/8 vampire bats slain</i><br>",3);
					if(P.Q[x].KK4<2){
						s2+=QI("<i id='qind4'>Slay Artun Desmoni</i><br>",3);
					}else{
						s2+=QI("<i id='qind4'>Artun Desmoni slain</i><br>",3);
					}
					if(P.Q[x].KK5<2){
						s2+=QI("<i id='qind5'>Slay Korman Valen</i>",3);
					}else{
						s2+=QI("<i id='qind5'>Korman Valen slain</i>",3);
					}
				}
			}
			if(!P.Q[x].repeatKk4){
				if(P.Q[x].KedgeKeep===4&& P.Q[x].repeatKk3
					||P.Q[x].KedgeKeep>=4&&sz===4 
					||P.Q[x].KedgeKeep>=4&&(sz===4&&c===undefined) 
				){
					QHead(q,4);
					m1=gold("Arwen: ")+"You have cleared the way to Viston's altar. Here is guarded by sinew punishers and his elite blood guardians. If you manage to clear them you will have a shot at Revenant Viston and access to Galeblast Fortress! Good luck, "+my.name+". We are all counting on you!";
					if(!QL.viston4&&P.Q[x].KedgeKeep===4&&(Z1===z&&SZ===4||Z1==="Fenwoven")){ 
						QL.viston4 = 1;
						lore(m1); 
					}
					s2=m1+"<br><br>Slay 18 "+"sinew punishers".fontcolor(y)+", 12 "+"Blood Guardians".fontcolor(y)+", and "+"Revenant Viston".fontcolor(y)+".<br><br>";
					s2+=QI("<i id='qind1'>"+P.Q[x].KK6+"/18 sinew punishers slain</i><br>",4);
					s2+=QI("<i id='qind2'>"+P.Q[x].KK7+"/12 Blood Guardians slain</i><br>",4);
					if(P.Q[x].KK8<=1){
						s2+=QI("Slay Revenant Viston",4);
					}else{
						s2+=QI("Revenant Viston slain",4);
					}
				}
			}
			Done=true; 
		}
	}
	if(P.Q[x].PermafrostKeep<=5
		&&P.Q[x].KedgeKeep>=5){
		z="Galeblast Fortress";
		q="Frozen Fortress";
		if(P.Q[x].PermafrostKeep<=1){ s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(45+dAdj))+"</div>"; }
		if(P.Q[x].PermafrostKeep===2){ s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(46+dAdj))+"</div>"; }
		if(P.Q[x].PermafrostKeep===3){ s1+="<div class='questZones'>"+z+" 3</div><div class='QT'>"+Qcolor(q,DADJ(46+dAdj))+"</div>"; }
		if(P.Q[x].PermafrostKeep===4){ 
			s1+="<div class='questZones'>"+z+" 4</div><div class='QT'>"+Qcolor(q,DADJ(47+dAdj))+"</div>"; 
		}else if(P.Q[x].PermafrostKeep===5){ 
			s1+="<div class='questZones'>"+z+" 4 (repeatable)</div><div class='QT'>"+Qcolor(q,DADJ(47+dAdj))+"</div>"; 
		}
		if(((Z1===z||Z1==="Fenwoven")&&c===undefined)||c===q&&Done===false){
			if(P.Q[x].PermafrostKeep<2){
				QHead(q,1);
				P.Q[x].PermafrostKeep=1;
				var lowerClass=my.job.toLowerCase();
				m1=gold("Arwen: ")+"A horde of fierce ice goblins now stand in your way. An ice goblin keymaster holds the key to access the next section of Galeblast Fortress. You'll have to defeat him and his minions to proceed.<br><br>"+
				"Do you think Nalatos could have made this journey any more arduous? He obviously didn't want anyone messing with his portal. I guess he wasn't counting on Edenburg's finest rising to the challenge!";
				if(!QL.galeblast1&&(Z1===z&&SZ===1||Z1==="Fenwoven")){ 
					QL.galeblast1 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 8 "+"ice goblins".fontcolor(y)+", 6 "+"goblin evokers".fontcolor(y)+", 6 "+"dire wolves".fontcolor(y)+", and the "+"ice goblin keymaster".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].PK1+"/8 ice goblins slain</i><br>",1);
				s2+=QI("<i id='qind2'>"+P.Q[x].PK2+"/6 goblin evokers slain</i><br>",1);
				s2+=QI("<i id='qind3'>"+P.Q[x].PK3+"/6 dire wolves slain</i><br>",1);
				if(P.Q[x].PK4===0){
					s2+=QI("Slay the ice goblin keymaster",1);
				}else{
					s2+=QI("Ice goblin keymaster slain",1);
				}
			}
			if(P.Q[x].PermafrostKeep===2){
				QHead(q,2);
				m1=gold("Arwen: ")+"You're making great progress, "+my.name+". Just keep charging forward and you'll find the portal in due time. The next area is patrolled by goblin elites and spellcasters. A goblin excavator holds the key to the next area. Defeat him and we're one step closer!";
				if(!QL.galeblast2&&(Z1===z&&SZ===2||Z1==="Fenwoven")){ 
					QL.galeblast2 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 7 "+"goblin wizards".fontcolor(y)+", 7 "+"elite goblin guards".fontcolor(y)+", 7 "+"goblin preachers".fontcolor(y)+", and the "+"goblin excavator".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].PK1+"/7 goblin wizards slain</i><br>",2);
				s2+=QI("<i id='qind2'>"+P.Q[x].PK2+"/7 elite goblin guards slain</i><br>",2);
				s2+=QI("<i id='qind3'>"+P.Q[x].PK3+"/7 goblin preachers slain</i><br>",2);
				if(P.Q[x].PK4===0){
					s2+=QI("Slay the goblin excavator",2);
				}else{
					s2+=QI("Goblin excavator slain",2);
				}
			}
			if(P.Q[x].PermafrostKeep===3){
				QHead(q,3);
				m1=gold("Arwen: ")+"You have reached the ice goblins' royal lair. Magnate Dinbopp and Pontiff Krindletin command an elite force of goblins here. Also, be on the lookout for ice giants. The ice giants are Matron Maelentia's personal guardians.";
				if(!QL.galeblast3&&(Z1===z&&SZ===3||Z1==="Fenwoven")){ 
					QL.galeblast3 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 10 "+"goblin sages".fontcolor(y)+", 10 "+"elite honor guards".fontcolor(y)+", 10 "+"ice giant youths".fontcolor(y)+", "+"Pontiff Krindletin".fontcolor(y)+", and  "+"Magnate Dinbopp".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].PK1+"/10 goblin sages slain</i><br>",3);
				s2+=QI("<i id='qind2'>"+P.Q[x].PK2+"/10 elite honor guards slain</i><br>",3);
				s2+=QI("<i id='qind3'>"+P.Q[x].PK3+"/5 ice giant youths slain</i><br>",3);
				if(P.Q[x].PK4<2){
					s2+=QI("<i id='qind4'>Slay Pontiff Krindletin</i><br>",3);
				}else{
					s2+=QI("<i id='qind4'>Pontiff Krindletin slain</i><br>",3);
				}
				if(P.Q[x].PK5<2){
					s2+=QI("<i id='qind5'>Slay Magnate Dinbopp</i>",3);
				}else{
					s2+=QI("<i id='qind5'>Magnate Dinbopp slain</i>",3);
				}
			}
			if(P.Q[x].PermafrostKeep>=4){
				QHead(q,4);
				m1=gold("Arwen: ")+"Unbelievable! You have done what none have done before. You have reached the lair of Matron Maelentia, the great ice dragon. She is guarded by ice giants, so you must defeat them first.<br><br>"+
				"Dragons' roars may cause you to run in fear, so I suggest finding armor that protects you from fear effects. Armor with cold resistance will also mitigate her powerful ice breath attacks.";
				if(!QL.galeblast4&&P.Q[x].PermafrostKeep===4&&(Z1===z&&SZ===4||Z1==="Fenwoven")){ 
					QL.galeblast4 = 1;
					lore(m1); 
				}
				s2=m1+"<br><br>Slay 4 "+"ice giant champions".fontcolor(y)+", 4 "+"ice giant warders".fontcolor(y)+", 4 "+"ice giant preservers".fontcolor(y)+", 3 "+"ice giants".fontcolor(y)+", 2 "+"ice giant magi".fontcolor(y)+", 2 "+"ice giant priests".fontcolor(y)+", "+"Margrave Kalgresh the Usurper".fontcolor(y)+", "+"Vizier Kongumen Divorn".fontcolor(y)+", and "+"Matron Maelentia".fontcolor(y)+".<br><br>";
				s2+=QI("<i id='qind1'>"+P.Q[x].PK1+"/4 ice giant champions slain</i><br>",4);
				s2+=QI("<i id='qind2'>"+P.Q[x].PK2+"/4 ice giant warders slain</i><br>",4);
				s2+=QI("<i id='qind3'>"+P.Q[x].PK3+"/4 ice giant preservers slain</i><br>",4);
				s2+=QI("<i id='qind4'>"+P.Q[x].PK4+"/3 ice giants slain</i><br>",4);
				s2+=QI("<i id='qind5'>"+P.Q[x].PK5+"/2 ice giant magi slain</i><br>",4);
				s2+=QI("<i id='qind6'>"+P.Q[x].PK6+"/2 ice giant priests slain</i><br>",4);
				if(P.Q[x].PK7<=1){
					s2+=QI("<i id='qind7'>Slay Margrave Kalgresh the Usurper</i><br>",4);
				}else{
					s2+=QI("<i id='qind7'>Margrave Kalgresh the Usurper slain</i><br>",4);
				}
				if(P.Q[x].PK8<=1){
					s2+=QI("<i id='qind8'>Slay Vizier Kongumen Divorn</i><br>",4);
				}else{
					s2+=QI("<i id='qind8'>Vizier Kongumen Divorn slain</i><br>",4);
				}
				if(P.Q[x].PK9===0){
					s2+=QI("Slay Matron Maelentia",4);
				}else{
					s2+=QI("Matron Maelentia slain",4);
				}
			}
			Done=true; 
		}
	}
	if(P.Q[x].PermafrostKeep>=5 && P.Q[x].NagafensLair<=5){
		if(!P.Q[x].repeatNl3 || !P.Q[x].repeatNl4){
			z="Ashenflow Peak";
			q="Volcanic Siege";
			if(P.Q[x].NagafensLair<=1){ s1+="<div class='questZones'>"+z+" 1</div><div class='QT'>"+Qcolor(q,DADJ(47+dAdj))+"</div>"; }
			if(P.Q[x].NagafensLair===2){	s1+="<div class='questZones'>"+z+" 2</div><div class='QT'>"+Qcolor(q,DADJ(48+dAdj))+"</div>"; }
			if(P.Q[x].NagafensLair===3){
				s1+="<div class='questZones'>"+z+" 3</div><div class='QT' data-subzone='3'>"+Qcolor(q,DADJ(49+dAdj))+"</div>";
			}else if(P.Q[x].NagafensLair>3&& !P.Q[x].repeatNl3){
				s1+="<div class='questZones'>"+z+" 3 (repeatable)</div><div class='QT' data-subzone='3'>"+Qcolor(q,DADJ(49+dAdj))+"</div>";
			}
			if(P.Q[x].NagafensLair===4){ 
				s1+="<div class='questZones'>"+z+" 4</div><div class='QT' data-subzone='4'>"+Qcolor(q,DADJ(50+dAdj))+"</div>"; 
			}else if(P.Q[x].NagafensLair===5){ 
				s1+="<div class='questZones'>"+z+" 4 (repeatable)</div><div class='QT' data-subzone='4'>"+Qcolor(q,DADJ(50+dAdj))+"</div>"; 
			}
			if(((Z1===z||Z1==="Fenwoven")&&c===undefined)||c===q&&Done===false){
				if(P.Q[x].NagafensLair<2){
					QHead(q,1);
					P.Q[x].NagafensLair=1;
					m1=gold("Arwen: ")+"The tunnels below ashenflow are guarded by a faction of kobolds! Eliminate them and then defeat the ashenflow kobold king. He is accompanied by a kobold noble, an enchanter with deadly mind magic.";
					if(!QL.ashenflow1&&(Z1===z&&SZ===1||Z1==="Fenwoven")){ 
						QL.ashenflow1 = 1;
						lore(m1); 
					}
					s2=m1+"<br><br>Slay 8 "+"greater kobolds".fontcolor(y)+", 8 "+"greater kobold shamans".fontcolor(y)+", 5 "+"ashenflow kobolds".fontcolor(y)+", 5 "+"ashenflow kobold shamans".fontcolor(y)+", the "+"kobold noble".fontcolor(y)+", and the "+"ashenflow kobold king".fontcolor(y)+".<br><br>";
					s2+=QI("<i id='qind1'>"+P.Q[x].NL1+"/8 greater kobolds slain</i><br>",1);
					s2+=QI("<i id='qind2'>"+P.Q[x].NL2+"/8 greater kobold shamans slain</i><br>",1);
					s2+=QI("<i id='qind3'>"+P.Q[x].NL3+"/5 ashenflow kobolds slain</i><br>",1);
					s2+=QI("<i id='qind4'>"+P.Q[x].NL4+"/5 ashenflow kobold shamans slain</i><br>",1);
					if(P.Q[x].NL5<2){
						s2+=QI("<i id='qind5'>Slay the kobold noble</i><br>",1);
					}else{
						s2+=QI("<i id='qind5'>Kobold noble slain</i><br>",1);
					}
					if(P.Q[x].NL6<2){
						s2+=QI("<i id='qind6'>Slay the ashenflow kobold king</i>",1);
					}else{
						s2+=QI("<i id='qind6'>Ashenflow kobold king slain</i>",1);
					}
				}
				if(P.Q[x].NagafensLair===2){
					QHead(q,2);
					m1=gold("Arwen: ")+"Be careful of the magma flows prevalent throughout the cavern. This portion of the cavern is infested with bugs, bats, spiders, and other nasty creatures. It looks like you'll have to do some exterminating here. Be on the lookout for the stone and noxious spiders which are particularly deadly!";
					if(!QL.ashenflow2&&(Z1===z&&SZ===2||Z1==="Fenwoven")){ 
						QL.ashenflow2 = 1;
						lore(m1); 
					}
					s2=m1+"<br><br>Slay 10 "+"sonic bats".fontcolor(y)+", 8 "+"lava beetles".fontcolor(y)+", 8 "+"lava duct crawlers".fontcolor(y)+", the "+"noxious spider".fontcolor(y)+" and the "+"stone spider".fontcolor(y)+".<br><br>";
					s2+=QI("<i id='qind1'>"+P.Q[x].NL1+"/10 sonic bats slain</i><br>",2);
					s2+=QI("<i id='qind2'>"+P.Q[x].NL2+"/8 lava beetles slain</i><br>",2);
					s2+=QI("<i id='qind3'>"+P.Q[x].NL3+"/8 lava duct crawlers slain</i><br>",2);
					if(P.Q[x].NL4<2){
						s2+=QI("<i id='qind4'>Slay the noxious spider</i><br>",2);
					}else{
						s2+=QI("<i id='qind4'>Noxious spider slain</i><br>",2);
					}
					if(P.Q[x].NL5<2){
						s2+=QI("<i id='qind5'>Slay the stone spider</i>",2);
					}else{
						s2+=QI("<i id='qind5'>Stone spider slain</i>",2);
					}
				}
				if(P.Q[x].NagafensLair===3
				|| ( (P.Q[x].NagafensLair>=4&& !P.Q[x].repeatNl3) && sz===3)
				|| ( (P.Q[x].NagafensLair>=4&& !P.Q[x].repeatNl3) && (sz===undefined&&mySubzone()===3))			
				){
					QHead(q,3); 
					m1=gold("Arwen: ")+"That last section was pretty disgusting! I can't stand bugs or spiders. That's why I choose to live in the frigid north where I don't see nasty critters like that!<br><br>"+
					"It looks like this next area is full of imps and lava elementals. Far less disgusting, I'd say. The tunnel to Highlord Szarthax's lair is guarded by General Ovext, a powerful imp with deadly fire magic.";
					if(!QL.ashenflow3&&P.Q[x].NagafensLair===3&&(Z1===z&&SZ===3||Z1==="Fenwoven")){ 
						QL.ashenflow3 = 1;
						lore(m1); 
					}
					s2=m1+"<br><br>Slay 10 "+"lava guardians".fontcolor(y)+", 15 "+"imp protectors".fontcolor(y)+", and "+"General Ovext".fontcolor(y)+".<br><br>";
					s2+=QI("<i id='qind1'>"+P.Q[x].NL1+"/10 lava guardians slain</i><br>",3);
					s2+=QI("<i id='qind2'>"+P.Q[x].NL2+"/15 imp protectors slain</i><br>",3);
					if(P.Q[x].NL3===0){
						s2+=QI("Slay General Ovext",3);
					}else{
						s2+=QI("General Ovext slain",3);
					}
				}
				if(P.Q[x].NagafensLair>=4&&sz===4 
				||P.Q[x].NagafensLair>=4&&(mySubzone()===4&&sz===undefined) ){
					QHead(q,4);
					m1=gold("Arwen: ")+"I can't believe it! Look how far you have come in your journey. You now stand in the lair of Highlord Szarthax, the most fearsome dragon in all of Vandamor.<br><br>"+
					"The good news is you have some experience fighting dragons, so you should know what to expect. The bad news is he is well guarded by his own coterie of merciless fire giants. Good luck, "+my.name+"!";
					if(!QL.ashenflow4&&P.Q[x].NagafensLair===4&&(Z1===z&&SZ===4||Z1==="Fenwoven")){ 
						QL.ashenflow4 = 1;
						lore(m1); 
					}
					s2=m1+"<br><br>Slay 12 "+"fire giant warriors".fontcolor(y)+", 8 "+"fire giant wizards".fontcolor(y)+", "+"King Argentus".fontcolor(y)+", "+"Duke Carthenage".fontcolor(y)+", "+"Battle Mage Turento".fontcolor(y)+", and "+"Highlord Szarthax".fontcolor(y)+".<br><br>";
					s2+=QI("<i id='qind1'>"+P.Q[x].NL7+"/12 fire giant warriors slain</i><br>",4);
					s2+=QI("<i id='qind2'>"+P.Q[x].NL8+"/8 fire giant wizards slain</i><br>",4);
					if(P.Q[x].NL9<=1){
						s2+=QI("<i id='qind3'>Slay King Argentus</i><br>",4);
					}else{
						s2+=QI("<i id='qind3'>King Argentus slain</i><br>",4);
					}
					if(P.Q[x].NL10<=1){
						s2+=QI("<i id='qind4'>Slay Duke Carthenage</i><br>",4);
					}else{
						s2+=QI("<i id='qind4'>Duke Carthenage slain</i><br>",4);
					}
					if(P.Q[x].NL11<=1){
						s2+=QI("<i id='qind5'>Slay Battle Mage Turento</i><br>",4);
					}else{
						s2+=QI("<i id='qind5'>Battle Mage Turento slain</i><br>",4);
					}
					if(P.Q[x].NL12===0){
						s2+=QI("Slay Highlord Szarthax",4);
					}else{
						s2+=QI("Highlord Szarthax slain",4);
					}
				}
				Done=true; 
			}
		}
	}
	if(P.Q[x].PlaneofHate<=2
		&&P.Q[x].NagafensLair>=5){
		z="Dire Sanctum";
		q="Forgotten City";
		if(P.Q[x].PlaneofHate<2){ 
			s1+="<div class='questZones'>"+z+"</div><div class='QT'>"+Qcolor(q,DADJ(52+dAdj))+"</div>"; 
		}else if(P.Q[x].PlaneofHate>=2){ 
			s1+="<div class='questZones'>"+z+" (repeatable)</div><div class='QT'>"+Qcolor(q,DADJ(52+dAdj))+"</div>"; 
		}
		if(Done===false){
			if(((Z1===z||Z1==="Fenwoven")&&c===undefined)||c===q){
				if(P.Q[x].PlaneofHate<=2){
					QHead(q);
					m1=gold("Arwen: ")+"According to my ancient tomes, this place is called Dire Sanctum, a long forgotten city buried beneath an ancient eruption from Ashenflow Peak. It is believed Gods anchor their astral planes here due to its seclusion. You are the first mortal to venture there in many centuries.<br><br>"+
					"Nonetheless it is heavily guarded in case an intruder is brave enough to venture near. I know not what lies in wait for you down there. I can only offer platitudes.<br><br>"+
					"Seek out the portal and eliminate anything or anyone that blocks your path. The extraordinary resistance you are facing shows that they do not want you meddling with the portal.";
					if(!QL.dire1&&P.Q[x].PlaneofHate<=1&&(Z1===z&&SZ===0||Z1==="Fenwoven")){ 
						QL.dire1 = 1;
						lore(m1); 
					}
					s2=m1+"<br><br>Slay all denizens in the Dire Sanctum including "+"Vixen Sarmina".fontcolor(y)+" and "+"Sanctum Guardian Ghalentus".fontcolor(y)+".<br><br>";
					s2+=QI("<i id='qind1'>"+P.Q[x].PH1+"/4 toiling drudges slain</i><br>");
					s2+=QI("<i id='qind2'>"+P.Q[x].PH2+"/4 slavering corpses slain</i><br>");
					s2+=QI("<i id='qind3'>"+P.Q[x].PH3+"/4 fetid vagabonds slain</i><br>");
					s2+=QI("<i id='qind4'>"+P.Q[x].PH4+"/4 impulse servants slain</i><br>");
					s2+=QI("<i id='qind5'>"+P.Q[x].PH5+"/4 servants of corruption slain</i><br>");
					s2+=QI("<i id='qind6'>"+P.Q[x].PH6+"/4 embalmed vagrants slain</i><br>");
					if(P.Q[x].PH12===0){
						s2+=QI("<i id='qind7'>Slay Vixen Sarmina</i><br><br>");
					}else{
						s2+=QI("<i id='qind7'>Vixen Sarmina slain</i><br><br>");
					}
					s2+=QI("<i id='qind8'>"+P.Q[x].PH7+"/5 ghastly indulgers slain</i><br>");
					s2+=QI("<i id='qind8'>"+P.Q[x].PH8+"/5 infected rodents slain</i><br>");
					s2+=QI("<i id='qind9'>"+P.Q[x].PH9+"/5 flittering menaces slain</i><br>");
					s2+=QI("<i id='qind10'>"+P.Q[x].PH10+"/5 hallowed harbingers slain</i><br>");
					s2+=QI("<i id='qind11'>"+P.Q[x].PH11+"/5 cephalid sorcerers slain</i><br>");
					if(P.Q[x].PH13===0){
						s2+=QI("Slay Sanctum Guardian Ghalentus<br><br>");
					}else{
						s2+=QI("Sanctum Guardian Ghalentus slain<br><br>");
					}
				}
				Done=true; 
			}
		}
	}
	if(P.Q[x].PlaneofFear<=2
		&&P.Q[x].PlaneofHate>=2){
		z="Nimgaul";
		q="Order Through Chaos";
		if(P.Q[x].PlaneofFear<2){ 
			s1+="<div class='questZones'>"+z+"</div><div class='QT'>"+Qcolor(q,DADJ(54+dAdj))+"</div>"; 
		}else if(P.Q[x].PlaneofFear>=2){ 
			s1+="<div class='questZones'>"+z+" (repeatable)</div><div class='QT'>"+Qcolor(q,DADJ(54+dAdj))+"</div>"; 
		}
		if(Done===false){
			if(((Z1===z||Z1==="Fenwoven")&&c===undefined)||c===q){
				if(P.Q[x].PlaneofFear<=2){
					QHead(q);
					m1=gold("Arwen: ")+"Not much is known about Nimgaul, "+my.name+". You are the first mortal to ever walk there. The most that is known about Nimgaul is that Nalatos and his minions are within.<br><br>"+
					"The most that I was able to learn from the Fenwoven library is that Nalatos has a dragon named Falzitherin that patrols the plane. Falzitherin uses deadly poison magic, so you can make good use of poison resistance armor against him.<br><br>"+
					"Once you eliminate all of his minions you may confront Nalatos. Defeat him and Vandamor shall be free from his wicked schemes.";
					if(!QL.nimgaul1&&P.Q[x].PlaneofFear<=1&&(Z1===z&&SZ===0||Z1==="Fenwoven")){ 
						QL.nimgaul1 = 1;
						lore(m1); 
					}
					s2=m1+"<br><br>Slay all denizens of Nimgaul including "+"Falzitherin".fontcolor(y)+" and "+"Nalatos, God of Chaos".fontcolor(y)+".<br><br>";
					s2+=QI("<i id='qind1'>"+(P.Q[x].PF1+"/3 wailing banshees slain</i><br>").fontcolor(G));
					s2+=QI("<i id='qind2'>"+(P.Q[x].PF2+"/3 festering dregs slain</i><br>").fontcolor(G));
					s2+=QI("<i id='qind3'>"+(P.Q[x].PF3+"/3 lurid nymphs slain</i><br>").fontcolor(G));
					s2+=QI("<i id='qind4'>"+(P.Q[x].PF4+"/3 peering menaces slain</i><br>").fontcolor(G));
					if(P.Q[x].PF18===0){
						s2+=QI("<i id='qind5'>"+"Slay Guardian of Misery</i><br><br>".fontcolor(G));
					}else{
						s2+=QI("<i id='qind5'>"+"Guardian of Misery slain</i><br><br>".fontcolor(G));
					}
					s2+=QI("<i id='qind6'>"+P.Q[x].PF5+"/3 accursed slatterns slain</i><br>");
					s2+=QI("<i id='qind7'>"+P.Q[x].PF6+"/3 brooding fungus slain</i><br>");
					s2+=QI("<i id='qind8'>"+P.Q[x].PF7+"/3 cursed marionettes slain</i><br>");
					s2+=QI("<i id='qind9'>"+P.Q[x].PF8+"/3 tremulant imps slain</i><br>");
					if(P.Q[x].PF21===0){
						s2+=QI("<i id='qind10'>Slay Falzitherin</i><br><br>");
					}else{
						s2+=QI("<i id='qind10'>Falzitherin slain</i><br><br>");
					}
					s2+=QI("<i id='qind11'>"+P.Q[x].PF9+"/3 deranged gorillas slain</i><br>");
					s2+=QI("<i id='qind12'>"+P.Q[x].PF10+"/3 boreal spiders slain</i><br>");
					s2+=QI("<i id='qind13'>"+P.Q[x].PF11+"/3 cephalid enticer slain</i><br>");
					if(P.Q[x].PF19===0){
						s2+=QI("<i id='qind14'>Slay Guardian of Strife</i><br><br>");
					}else{
						s2+=QI("<i id='qind14'>Guardian of Strife slain</i><br><br>");
					}
					s2+=QI("<i id='qind15'>"+P.Q[x].PF12+"/3 panicked anurans slain</i><br>");
					s2+=QI("<i id='qind16'>"+P.Q[x].PF13+"/3 chaos punishers slain</i><br>");
					s2+=QI("<i id='qind17'>"+P.Q[x].PF14+"/3 chaos enforcers slain</i><br>");
					if(P.Q[x].PF20===0){
						s2+=QI("<i id='qind18'>Slay Guardian of Ruin</i><br><br>");
					}else{
						s2+=QI("<i id='qind18'>Guardian of Ruin slain</i><br><br>");
					}
					s2+=QI("<i id='qind19'>"+P.Q[x].PF15+"/3 pustulant vessels slain</i><br>");
					s2+=QI("<i id='qind20'>"+P.Q[x].PF16+"/3 shrieking wisps slain</i><br>");
					s2+=QI("<i id='qind21'>"+P.Q[x].PF17+"/3 sorrow slitherers slain</i><br>");
					if(P.Q[x].PF22===0){
						s2+=QI("Slay Nalatos, God of Chaos");
					}else{
						s2+=QI("Nalatos, God of Chaos slain");
					}
				}
				Done=true; 
			}
		}
	}
	if(c===undefined){
		var e5 = D.getElementById('QindicatorHead');
		e5.textContent=QH;
		var e6 = D.getElementById('QindicatorContent');
		e6.innerHTML=QP; 
	}
	D.getElementById('questJournalContent').innerHTML=s1;
	D.getElementById('questJournalContent2').innerHTML=s2;
	var currentQuest = $("#QindicatorHead").html();
	if(currentQuest!==''){
		var zone = myZone();
		var currentSubzone = mySubzone();
		if(currentSubzone!==''){
			zone +=' '+currentSubzone;		
		}
		var newHeight=0;
		$('.questZones').each(function(){
			var foo=this.textContent;
			if(foo.indexOf(zone)!==-1){
				this.nextSibling.style.backgroundColor='#002a5a';
				T.to(this.nextSibling, .75, {
					backgroundColor:'#004aaa',
					repeat:-1,
					yoyo:true
				});
				newHeight=this.offsetTop;
			}
		});
		if(!c){
			T.delayedCall(0, function(){
				D.getElementById('questJournalContent').scrollTop = newHeight;
			});
		}
	}
}
function Qprogress(Slot){ //indicate progress was made
	var Y="#ffff00";
	var d=8000;
	var d2=10000;
	var dAdj=0;
	if(g.difficulty===2){ dAdj=25; }
	if(g.difficulty===3){ dAdj=44; }
	var x=(g.difficulty-1);
	var weapon = "slashed";
	if(my.job==="Monk"||my.job==="Necromancer"||my.job==="Enchanter"||my.job==="Magician"||my.job==="Wizard"){ weapon="staff"; }
	if(my.job==="Rogue"){ weapon="pierced"; }
	if(my.job==="Shaman"||my.job==="Druid"||my.job==="Cleric"){ weapon="crushed"; }
	if(my.job==="Paladin"||my.job==="Shadow Knight"){ weapon="cleaved"; }
	var armor = "plate";
	if(my.job==="Monk"||my.job==="Druid"){ armor="leather"; }
	if(my.job==="Ranger"||my.job==="Shaman"||my.job==="Rogue"){ armor="chain"; }
	if(my.job==="Necromancer"||my.job==="Enchanter"||my.job==="Magician"||my.job==="Wizard"){ armor="cloth"; }
	var mz = myZone();
	if(mz==="Fahlnir Citadel"){//Qdungeon allSkills
		if(P.Q[x].CastleMistmoore<2){
			if(mob[Slot].name==="a pledge familiar"&&P.Q[x].CM1<8){
				P.Q[x].CM1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an initiate familiar"&&P.Q[x].CM2<7){
				P.Q[x].CM2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a glyphed familiar"&&P.Q[x].CM3<6){
				P.Q[x].CM3++;
				flashQuest(3);
			}
			if(P.Q[x].CM1>=8&&P.Q[x].CM2>=7&&P.Q[x].CM3>=6&&mob[Slot].name==="Lieutenant Xagorn"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].CastleMistmoore=2;
				P.Q[x].CM1=0;
				P.Q[x].CM2=0;
				P.Q[x].CM3=0;
				return;
			}
		}
		if(P.Q[x].CastleMistmoore===2){
			if(mob[Slot].name==="a glyphed guard"&&P.Q[x].CM1<8){
				P.Q[x].CM1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a glyphed sentry"&&P.Q[x].CM2<6){
				P.Q[x].CM2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a glyphed custodian"&&P.Q[x].CM3<6){
				P.Q[x].CM3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="a negotiator"&&P.Q[x].CM4<4){
				P.Q[x].CM4++;
				flashQuest(4);
			}
			if(P.Q[x].CM1>=8&&P.Q[x].CM2>=6&&P.Q[x].CM3>=6&&P.Q[x].CM4>=4&&mob[Slot].name==="Dragoon Reklyn"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].CastleMistmoore=3;
				P.Q[x].CM1=0;
				P.Q[x].CM2=0;
				P.Q[x].CM3=0;
				P.Q[x].CM4=0;
				return;
			}
		}
		if(P.Q[x].CastleMistmoore===3 || (P.Q[x].CastleMistmoore>3&& !P.Q[x].repeatCm3)){
			if(mob[Slot].name==="a deathly harbinger"&&P.Q[x].CM1<7){
				P.Q[x].CM1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a dark ritualist"&&P.Q[x].CM2<7){
				P.Q[x].CM2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a shadowy sage"&&P.Q[x].CM3<7){
				P.Q[x].CM3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="a leering gargoyle"&&P.Q[x].CM4<7){
				P.Q[x].CM4++;
				flashQuest(4);
			}
			if(mob[Slot].name==="Countess Varnia"&&P.Q[x].CM5<2){
				P.Q[x].CM5=2;
				flashQuest(5);
			}
			if(mob[Slot].name==="Zigruben"&&P.Q[x].CM6<2){
				P.Q[x].CM6=2;
				flashQuest(6);
			}
			if(P.Q[x].CM1>=7&&P.Q[x].CM2>=7&&P.Q[x].CM3>=7&&P.Q[x].CM4>=7&&P.Q[x].CM5>=2&&P.Q[x].CM6>=2&& !P.Q[x].repeatCm3){
				playAudio("endquest");
				my.quests++;
				QMsg("Quest Completed!");
				P.Q[x].CastleMistmoore=4;
				setEquipValues();
				P.Q[x].repeatCm3 = 1;
				return;
			}
		}
	}
	if(mz==="Lanfeld Outpost"){//Qdungeon 20 hp
		if(P.Q[x].Crushbone<2){
			if(mob[Slot].name==="an orc pawn"&&P.Q[x].CB1<8){
				P.Q[x].CB1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an orc centurion"&&P.Q[x].CB2<4){
				P.Q[x].CB2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an orc slaver"&&P.Q[x].CB3<4){
				P.Q[x].CB3++;
				flashQuest(3);
			}
			if(P.Q[x].CB1>=8&&P.Q[x].CB2>=4&&P.Q[x].CB3>=4){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].Crushbone=2;
				P.Q[x].CB1=0;
				P.Q[x].CB2=0;
				P.Q[x].CB3=0;
				return;
			}
		}
		if(P.Q[x].Crushbone===2){
			if(mob[Slot].name==="an orc oracle"&&P.Q[x].CB1<7){
				P.Q[x].CB1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an orc legionnaire"&&P.Q[x].CB2<7){
				P.Q[x].CB2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an orc lookout"&&P.Q[x].CB3<7){
				P.Q[x].CB3++;
				flashQuest(3);
			}
			if(P.Q[x].CB1>=7&&P.Q[x].CB2>=7&&P.Q[x].CB3>=7&&mob[Slot].name==="an orc warlord"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].Crushbone=3;
				P.Q[x].CB1=0;
				P.Q[x].CB2=0;
				P.Q[x].CB3=0;
				return;
			}
		}
		if(P.Q[x].Crushbone>=3){
			if(mob[Slot].name==="an orc scoutsman"&&P.Q[x].CB1<10){
				P.Q[x].CB1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an orc royal guard"&&P.Q[x].CB2<8){
				P.Q[x].CB2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an orc emissary"&&P.Q[x].CB3<6){
				P.Q[x].CB3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="Chief Grimden"){
				P.Q[x].CB5=2;
				my.epicQuests++;
			}
			if(P.Q[x].CB1>=10&&P.Q[x].CB2>=8&&P.Q[x].CB3>=6&&P.Q[x].CB5>=2){
				playAudio("endquest");
				my.quests++;
				QMsg("Quest Completed!");
				if(P.Q[x].Crushbone===3){
					var a="Permanent +1 Talent Point".fontcolor("#dd7711");
					QMsg("Quest Reward: "+a,0,0,8000);
					lore("Chief Grimden was driven to madness by the Idol of Chaos. We must investigate this matter further. I hereby relieve you of your duties to the Edenburg Training Detachment for a special duty.<br><br>Inquire about the Idols of Chaos at "+gold("Aspen Grove")+". Speak to Rendo Surefoot, a quirky, yet resourceful halfling reknowned for his occult knowledge. Good luck on your mission, "+my.name+".");
				}
				stopMusic();
				P.Q[x].Crushbone++;
				P.Q[x].repeatCB=1;
				setEquipValues();
				return;
			}
		}
	}
	if(mz==="Arcturin's Crypt"){//Qdungeon MR10
		if(P.Q[x].EstateofUnrest<2){
			if(mob[Slot].name==="a death beetle"&&P.Q[x].ER1<8){
				P.Q[x].ER1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a tormented dead"&&P.Q[x].ER2<6){
				P.Q[x].ER2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a lumbering mummy"&&P.Q[x].ER3<4){
				P.Q[x].ER3++;
				flashQuest(3);
			}
			if(P.Q[x].ER1>=8&&P.Q[x].ER2>=6&&P.Q[x].ER3>=4){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].EstateofUnrest=2;
				P.Q[x].ER1=0;
				P.Q[x].ER2=0;
				P.Q[x].ER3=0;
				return;
			}
		}
		if(P.Q[x].EstateofUnrest===2){
			if(mob[Slot].name==="a dry bone skeleton"&&P.Q[x].ER1<10){
				P.Q[x].ER1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a crazed ghoul"&&P.Q[x].ER2<8){
				P.Q[x].ER2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a nymph"&&P.Q[x].ER3<6){
				P.Q[x].ER3++;
				flashQuest(3);
			}
			if(P.Q[x].ER1>=10&&P.Q[x].ER2>=8&&P.Q[x].ER3>=6&&mob[Slot].name==="Arch Duke of Artremia"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].EstateofUnrest=3;
				P.Q[x].ER1=0;
				P.Q[x].ER2=0;
				P.Q[x].ER3=0;
				return;
			}
		}
		if(P.Q[x].EstateofUnrest>=3){
			if(mob[Slot].name==="a mortuary fungus"&&P.Q[x].ER1<8){
				P.Q[x].ER1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a dusty werewolf"&&P.Q[x].ER2<8){
				P.Q[x].ER2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a cephalid subverter"&&P.Q[x].ER3<5){
				P.Q[x].ER3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="a festering hag"&&P.Q[x].ER4<5){
				P.Q[x].ER4++;
				flashQuest(4);
			}
			if(P.Q[x].ER1>=8&&P.Q[x].ER2>=8&&P.Q[x].ER3>=5&&P.Q[x].ER4>=5&&mob[Slot].name==="Arcturin, the Lich King"){
				playAudio("endquest");
				my.quests++;
				my.epicQuests++;
				QMsg("Quest Completed!");
				if(P.Q[x].EstateofUnrest===3){
					var a="Permanent +1 Talent Point".fontcolor("#dd7711");
					QMsg("Quest Reward: "+a,0,0,8000);
					lore("My halfling instincts are never wrong! Once again you have found another Idol of Chaos. I happen to know that Nalatos cannot enchant more than three idols at once or it will spread his powers too thin.<br><br>I am not aware of any other suspicious activity in Vandamor. Perhaps it would be worth investigating in nearby "+gold("Artremia")+". Valeska Windcrest is a resourceful wood elf who may be able to assist you. If she doesn't have any useful information, she'll know someone who will.");
				}
				stopMusic();
				P.Q[x].EstateofUnrest++;
				P.Q[x].repeatER = 1;
				setEquipValues();
				return;
			}
		}
	}
	if(mz==="Salubrin Forest"){//noobquest
		if(P.Q[x].GreaterFaydark<2){
			if(mob[Slot].name==="an orc pawn"){
				P.Q[x].GF1++;
				if(P.Q[x].GF1<4){
					flashQuest(1);
				}else{
					playAudio("endquest");
					QMsg("Quest Completed!");
					my.quests++;
					P.Q[x].GreaterFaydark=3;
					P.Q[x].GF1=0;
					return;
				}
			}
		}
		if(P.Q[x].GreaterFaydark===3){
			if(mob[Slot].image==="an orc"){
				P.Q[x].GF1++;
				if(P.Q[x].GF1<10){
					flashQuest(1);
				}else{
					playAudio("endquest");
					QMsg("Quest Completed!<br>");
					my.quests++;
					P.Q[x].GreaterFaydark=4;
					QMsg("You received a reward from the Soldiers of Rinara!",0,0,d);
					getLoot(5,"weapons",weapon,2);
					T.delayedCall(d2/1000, QMsg, 
						["Use the Map [M] to travel to other zones and find quests. Zones are unlocked as your level increases.",0,1,d]
					);
					return;
				}
			}
		}
	}
	if(mz==="Viston's Redoubt"){
		if(P.Q[x].KedgeKeep<2){
			if(mob[Slot].name==="a peering gargoyle"&&P.Q[x].KK1<8){
				P.Q[x].KK1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a fettered defiler"&&P.Q[x].KK2<8){
				P.Q[x].KK2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a dread werewolf"&&P.Q[x].KK3<8){
				P.Q[x].KK3++;
				flashQuest(3);
			}
			if(P.Q[x].KK1>=8&&P.Q[x].KK2>=8&&P.Q[x].KK3>=8&&mob[Slot].name==="Sari Portentia"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].KedgeKeep=2;
				P.Q[x].KK1=0;
				P.Q[x].KK2=0;
				P.Q[x].KK3=0;
				return;
			}
		}
		if(P.Q[x].KedgeKeep===2){
			if(mob[Slot].name==="a brooding imp"&&P.Q[x].KK1<8){
				P.Q[x].KK1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a manacled spoiler"&&P.Q[x].KK2<8){
				P.Q[x].KK2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a lusting werewolf"&&P.Q[x].KK3<5){
				P.Q[x].KK3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="a bloodthirsty bat"&&P.Q[x].KK4<5){
				P.Q[x].KK4++;
				flashQuest(4);
			}
			if(P.Q[x].KK1>=8&&P.Q[x].KK2>=8&&P.Q[x].KK3>=5&&P.Q[x].KK4>=5&&mob[Slot].name==="Shardok"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].KedgeKeep=3;
				P.Q[x].KK1=0;
				P.Q[x].KK2=0;
				P.Q[x].KK3=0;
				P.Q[x].KK4=0;
				return;
			}
		}
		if(P.Q[x].KedgeKeep===3|| (P.Q[x].KedgeKeep>3&& !P.Q[x].repeatKk3)){
			if(mob[Slot].name==="a pained seether"&&P.Q[x].KK1<10){
				P.Q[x].KK1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a soul destroyer"&&P.Q[x].KK2<10){
				P.Q[x].KK2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a vampire bat"&&P.Q[x].KK3<8){
				P.Q[x].KK3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="Artun Desmoni"&&P.Q[x].KK4<2){
				P.Q[x].KK4=2;
				flashQuest(4);
			}
			if(mob[Slot].name==="Korman Valen"&&P.Q[x].KK5<2){
				P.Q[x].KK5=2;
				flashQuest(5);
			}
			if(P.Q[x].KK1>=10&&P.Q[x].KK2>=10&&P.Q[x].KK3>=8&&P.Q[x].KK4>=2&&P.Q[x].KK5>=2 && !P.Q[x].repeatKk3){
				playAudio("endquest");
				my.quests++;
				P.Q[x].KK1=0;
				P.Q[x].KK2=0;
				P.Q[x].KK3=0;
				P.Q[x].KK4=0;
				P.Q[x].KK5=0;
				QMsg("Quest Completed!");
				P.Q[x].KedgeKeep=4;
				setEquipValues();
				P.Q[x].repeatKk3 = 1;
				return;
			}
		}
		if(P.Q[x].KedgeKeep>=4){
			if(mob[Slot].name==="a sinew punisher"&&P.Q[x].KK6<18){
				P.Q[x].KK6++;
				flashQuest(1);
			}
			if(mob[Slot].name==="Blood Guardian"&&P.Q[x].KK7<12){
				P.Q[x].KK7++;
				flashQuest(2);
			}
			if(P.Q[x].KK6>=18&&P.Q[x].KK7>=12&&mob[Slot].name==="Revenant Viston"){
				playAudio("endquest");
				if(P.Q[x].KedgeKeep===4){
					P.Q[x].KedgeKeep=5;
					my.quests++;
				}else{
					P.Q[x].KedgeKeep++;
				}
				P.Q[x].KK8=2;
				P.Q[x].repeatKk4 = 1; 
				QMsg("Quest Completed!");
				P.Q[x].KedgeKeep++;
				my.epicQuests++;
				stopMusic();
				return;
			}
		}
	}
	if(mz==="Tendolin Meadows"){
		if(P.Q[x].LesserFaydark<2){
			if(mob[Slot].name==="a pixie trickster"||mob[Slot].name==="a pixie prankster"){
				if(mob[Slot].name==="a pixie trickster"&&P.Q[x].LF1<10){
					P.Q[x].LF1++;
					flashQuest(1);
				}
				if(mob[Slot].name==="a pixie prankster"&&P.Q[x].LF2<5){
					P.Q[x].LF2++;
					flashQuest(2);
				}
				if(P.Q[x].LF1>=10&&P.Q[x].LF2>=5&&P.Q[x].LesserFaydark<2){
					playAudio("endquest");
					QMsg("Quest Completed!");
					my.quests++;
					P.Q[x].LesserFaydark=2;
					QMsg("You received a reward from Miranda Crossheart!",0,0,d);
					getLoot(5,"weapons",0,2);
					return;
				}
			}
		}
	}
	if(mz==="Riven Grotto"){//Qdungeon allStats
		if(P.Q[x].Befallen<2){
			if(mob[Slot].name==="a necro neophyte"&&P.Q[x].BF1<6){
				P.Q[x].BF1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a necro initiate"&&P.Q[x].BF2<6){
				P.Q[x].BF2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a dread bone"&&P.Q[x].BF3<6){
				P.Q[x].BF3++;
				flashQuest(3);
			}
			if(P.Q[x].BF1>=6&&P.Q[x].BF2>=6&&P.Q[x].BF3>=6){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].Befallen=2;
				P.Q[x].BF1=0;
				P.Q[x].BF2=0;
				P.Q[x].BF3=0;
				return;
			}
		}
		if(P.Q[x].Befallen===2){
			if(mob[Slot].name==="an ice boned skeleton"&&P.Q[x].BF1<8){
				P.Q[x].BF1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a necro acolyte"&&P.Q[x].BF2<8){
				P.Q[x].BF2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a ghoul"&&P.Q[x].BF3<5){
				P.Q[x].BF3++;
				flashQuest(3);
			}
			if(P.Q[x].BF1>=8&&P.Q[x].BF2>=8&&P.Q[x].BF3>=5&&mob[Slot].name==="Dark Priest Nymda"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].Befallen=3;
				P.Q[x].BF1=0;
				P.Q[x].BF2=0;
				P.Q[x].BF3=0;
				return;
			}
		}
		if(P.Q[x].Befallen===3){
			if(mob[Slot].name==="an elf skeleton"&&P.Q[x].BF1<9){
				P.Q[x].BF1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a burnt zombie"&&P.Q[x].BF2<7){
				P.Q[x].BF2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a dread corpse"&&P.Q[x].BF3<7){
				P.Q[x].BF3++;
				flashQuest(3);
			}
			if(P.Q[x].BF1>=9&&P.Q[x].BF2>=7&&P.Q[x].BF3>=7&&mob[Slot].name==="The Black Seer"){
				playAudio("endquest");
				my.quests++;
				P.Q[x].Befallen=4;
				QMsg("Quest Completed!");
				setEquipValues();
				return;
			}
		}
	}
	if(mz==="Greenthorn Cavern"){//Qdungeon allSkill
		if(P.Q[x].Blackburrow<2){
			if(mob[Slot].name==="a gnoll pup"&&P.Q[x].BB1<8){
				P.Q[x].BB1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a scrawny gnoll"&&P.Q[x].BB2<6){
				P.Q[x].BB2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a gnoll scout"&&P.Q[x].BB3<4){
				P.Q[x].BB3++;
				flashQuest(3);
			}
			if(P.Q[x].BB1>=8&&P.Q[x].BB2>=6&&P.Q[x].BB3>=4){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].Blackburrow=2;
				P.Q[x].BB1=0;
				P.Q[x].BB2=0;
				P.Q[x].BB3=0;
				return;
			}
		}
		if(P.Q[x].Blackburrow===2){
			if(mob[Slot].name==="a gnoll shaman"&&P.Q[x].BB1<8){
				P.Q[x].BB1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a patrolling gnoll"&&P.Q[x].BB2<8){
				P.Q[x].BB2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a gnoll sergeant"&&P.Q[x].BB3<6){
				P.Q[x].BB3++;
				flashQuest(3);
			}
			if(P.Q[x].BB1>=8&&P.Q[x].BB2>=8&&P.Q[x].BB3>=6&&mob[Slot].name==="Furrpaw Barxen"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].Blackburrow=3;
				P.Q[x].BB1=0;
				P.Q[x].BB2=0;
				P.Q[x].BB3=0;
				return;
			}
		}
		if(P.Q[x].Blackburrow===3){
			if(mob[Slot].name==="an elite gnoll guard"&&P.Q[x].BB1<12){
				P.Q[x].BB1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a gnoll tactician"&&P.Q[x].BB2<8){
				P.Q[x].BB2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a gnoll commander"&&P.Q[x].BB3<4){
				P.Q[x].BB3++;
				flashQuest(3);
			}
			if(P.Q[x].BB1>=12&&P.Q[x].BB2>=8&&P.Q[x].BB3>=4&&mob[Slot].name==="Viceroy Tanaden"){
				playAudio("endquest");
				my.quests++;
				P.Q[x].Blackburrow=4;
				QMsg("Quest Completed!");
				setEquipValues();
				return;
			}
		}
	}
	if(mz==="Temple of Prenssor"){//Qdungeon 30PR
		if(P.Q[x].CazicThule<2){
			if(mob[Slot].name==="a lizard disciple"&&P.Q[x].CT1<8){
				P.Q[x].CT1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a lizard page"&&P.Q[x].CT2<6){
				P.Q[x].CT2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a lizard defender"&&P.Q[x].CT3<4){
				P.Q[x].CT3++;
				flashQuest(3);
			}
			if(P.Q[x].CT1>=8&&P.Q[x].CT2>=6&&P.Q[x].CT3>=4&&mob[Slot].name==="Soprenti the Anointed"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].CazicThule=2;
				P.Q[x].CT1=0;
				P.Q[x].CT2=0;
				P.Q[x].CT3=0;
				return;
			}
		}
		if(P.Q[x].CazicThule===2){
			if(mob[Slot].name==="a lizard herald"&&P.Q[x].CT1<10){
				P.Q[x].CT1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a lizard protector"&&P.Q[x].CT2<8){
				P.Q[x].CT2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a lizard justicar"&&P.Q[x].CT3<6){
				P.Q[x].CT3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="Sartuth the Possessed"&&P.Q[x].CT4<2){
				P.Q[x].CT4=2;
				flashQuest(4);
			}
			if(mob[Slot].name==="Merszas the Divine"&&P.Q[x].CT5<2){
				P.Q[x].CT5=2;
				flashQuest(5);
			}
			if(P.Q[x].CT1>=10&&P.Q[x].CT2>=8&&P.Q[x].CT3>=6&&P.Q[x].CT4>=2&&P.Q[x].CT5>=2){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].CazicThule=3;
				P.Q[x].CT1=0;
				P.Q[x].CT2=0;
				P.Q[x].CT3=0;
				P.Q[x].CT4=0;
				P.Q[x].CT5=0;
				return;
			}
		}
		if(P.Q[x].CazicThule===3|| (P.Q[x].CazicThule>3&& !P.Q[x].repeatCt3)){
			if(mob[Slot].name==="a lizard zealot"&&P.Q[x].CT1<10){
				P.Q[x].CT1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a lizard crusader"&&P.Q[x].CT2<10){
				P.Q[x].CT2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a lizard champion"&&P.Q[x].CT3<8){
				P.Q[x].CT3++;
				flashQuest(3);
			}
			if(P.Q[x].CT1>=10&&P.Q[x].CT2>=10&&P.Q[x].CT3>=8&&mob[Slot].name==="Sentoth, Lord of Rapture"){
				playAudio("endquest");
				my.quests++;
				my.epicQuests++;
				QMsg("Quest Completed!");
				P.Q[x].repeatCt3 = 1;
				if(P.Q[x].CazicThule===3){
					var a="Permanent +1 Talent Point".fontcolor("#dd7711");
					QMsg("Quest Reward: "+a,0,0,8000);
					lore(my.name+", I don't believe it! Surely you have been anointed by the Gods. Despite the odds you have triumphed once again. You have collected all of the Idols of Chaos, denying Nalatos's influence in our world.<br><br>Head north to Fenwoven, where a wise shaman named Arwen lives. Only he will know what to do with the Idols of Chaos. The Barbarian race have unique knowledge about this due to their proximity to Ashenflow Peak in their homeland.");
				}
				stopMusic();
				P.Q[x].CazicThule++;
				setEquipValues();
				return;
			}
		}
	}
	if(mz==="Kordata Ruins"){//Qdungeon allSkill
		if(P.Q[x].LowerGuk<2){
			if(mob[Slot].name==="an anuran tir knight"&&P.Q[x].LG1<10){
				P.Q[x].LG1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a lem anuran wizard"&&P.Q[x].LG2<8){
				P.Q[x].LG2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an amn anuran wizard"&&P.Q[x].LG3<6){
				P.Q[x].LG3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="an anuran assassin"&&P.Q[x].LG4<2){
				P.Q[x].LG4=2;
				flashQuest(4);
			}
			if(mob[Slot].name==="an anuran supplier"&&P.Q[x].LG5<2){
				P.Q[x].LG5=2;
				flashQuest(5);
			}
			if(P.Q[x].LG1>=10&&P.Q[x].LG2>=8&&P.Q[x].LG3>=6&&P.Q[x].LG4>=2&&P.Q[x].LG5>=2){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].LowerGuk=2;
				P.Q[x].LG1=0;
				P.Q[x].LG2=0;
				P.Q[x].LG3=0;
				P.Q[x].LG4=0;
				P.Q[x].LG5=0;
				return;
			}
		}
		if(P.Q[x].LowerGuk===2){
			if(mob[Slot].name==="a pul anuran knight"&&P.Q[x].LG1<8){
				P.Q[x].LG1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a dol anuran wizard"&&P.Q[x].LG2<8){
				P.Q[x].LG2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a vex anuran wizard"&&P.Q[x].LG3<6){
				P.Q[x].LG3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="a ber anuran knight"&&P.Q[x].LG4<6){
				P.Q[x].LG4++;
				flashQuest(4);
			}
			if(mob[Slot].name==="a frenzied anuran"&&P.Q[x].LG5<2){
				P.Q[x].LG5=2;
				flashQuest(5);
			}
			if(mob[Slot].name==="an anuran sentinel"&&P.Q[x].LG6<2){
				P.Q[x].LG6=2;
				flashQuest(6);
			}
			if(P.Q[x].LG1>=8&&P.Q[x].LG2>=8&&P.Q[x].LG3>=6&&P.Q[x].LG4>=6&&P.Q[x].LG5>=2&&P.Q[x].LG6>=2){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].LowerGuk=3;
				P.Q[x].LG1=0;
				P.Q[x].LG2=0;
				P.Q[x].LG3=0;
				P.Q[x].LG4=0;
				P.Q[x].LG5=0;
				P.Q[x].LG6=0;
				return;
			}
		}
		if(P.Q[x].LowerGuk===3 || (P.Q[x].LowerGuk>3&& !P.Q[x].repeatLg3)){
			if(mob[Slot].name==="a mal anuran knight"&&P.Q[x].LG1<12){
				P.Q[x].LG1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a zod anuran wizard"&&P.Q[x].LG2<10){
				P.Q[x].LG2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a zod anuran knight"&&P.Q[x].LG3<8){
				P.Q[x].LG3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="King Froaki"&&P.Q[x].LG4<2){
				P.Q[x].LG4=2;
				flashQuest(4);
			}
			if(mob[Slot].name==="the anuran arch magus"&&P.Q[x].LG5<2){
				P.Q[x].LG5=2;
				flashQuest(5);
			}
			if(P.Q[x].LG1>=12&&P.Q[x].LG2>=10&&P.Q[x].LG3>=8&&P.Q[x].LG4>=2&&P.Q[x].LG5>=2&& !P.Q[x].repeatLg3){
				playAudio("endquest");
				my.quests++;
				P.Q[x].LowerGuk=4;
				QMsg("Quest Completed!");
				setEquipValues();
				P.Q[x].repeatLg3 = 1;
				return;
			}
		}
	}
	if(mz==="Ashenflow Peak"){//Qdungeon 30FR
		if(P.Q[x].NagafensLair<2){
			if(mob[Slot].name==="a greater kobold"&&P.Q[x].NL1<8){
				P.Q[x].NL1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a greater kobold shaman"&&P.Q[x].NL2<8){
				P.Q[x].NL2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an ashenflow kobold"&&P.Q[x].NL3<5){
				P.Q[x].NL3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="an ashenflow kobold shaman"&&P.Q[x].NL4<5){
				P.Q[x].NL4++;
				flashQuest(4);
			}
			if(mob[Slot].name==="a kobold noble"&&P.Q[x].NL5<2){
				P.Q[x].NL5=2;
				flashQuest(5);
			}
			if(mob[Slot].name==="an ashenflow kobold king"&&P.Q[x].NL6<2){
				P.Q[x].NL6=2;
				flashQuest(6);
			}
			if(P.Q[x].NL1>=8&&P.Q[x].NL2>=8&&P.Q[x].NL3>=5&&P.Q[x].NL4>=5&&P.Q[x].NL5>=2&&P.Q[x].NL6>=2){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].NagafensLair=2;
				P.Q[x].NL1=0;
				P.Q[x].NL2=0;
				P.Q[x].NL3=0;
				P.Q[x].NL4=0;
				P.Q[x].NL5=0;
				P.Q[x].NL6=0;
				return;
			}
		}
		if(P.Q[x].NagafensLair===2){
			if(mob[Slot].name==="a sonic bat"&&P.Q[x].NL1<10){
				P.Q[x].NL1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a lava beetle"&&P.Q[x].NL2<8){
				P.Q[x].NL2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a lava duct crawler"&&P.Q[x].NL3<8){
				P.Q[x].NL3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="a noxious spider"&&P.Q[x].NL4<2){
				P.Q[x].NL4=2;
				flashQuest(4);
			}
			if(mob[Slot].name==="a stone spider"&&P.Q[x].NL5<2){
				P.Q[x].NL5=2;
				flashQuest(5);
			}
			if(P.Q[x].NL1>=10&&P.Q[x].NL2>=8&&P.Q[x].NL3>=8&&P.Q[x].NL4>=2&&P.Q[x].NL5>=2){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].NagafensLair=3;
				P.Q[x].NL1=0;
				P.Q[x].NL2=0;
				P.Q[x].NL3=0;
				P.Q[x].NL4=0;
				P.Q[x].NL5=0;
				return;
			}
		}
		if(P.Q[x].NagafensLair===3 || (P.Q[x].NagafensLair>3&& !P.Q[x].repeatNl3)){
			if(mob[Slot].name==="a lava guardian"&&P.Q[x].NL1<10){
				P.Q[x].NL1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an imp protector"&&P.Q[x].NL2<15){
				P.Q[x].NL2++;
				flashQuest(2);
			}
			if(P.Q[x].NL1>=10&&P.Q[x].NL2>=15&&mob[Slot].name==="General Ovext"){
				playAudio("endquest");
				my.quests++;
				P.Q[x].NL1=0;
				P.Q[x].NL2=0;
				QMsg("Quest Completed!");
				if(P.Q[x].NagafensLair<4){
					P.Q[x].NagafensLair=4;
				}
				setEquipValues();
				P.Q[x].repeatNl3 = 1;
				return;
			}
		}
		if(P.Q[x].NagafensLair>=4){
			if(mob[Slot].name==="a fire giant warrior"&&P.Q[x].NL7<12){
				P.Q[x].NL7++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a fire giant wizard"&&P.Q[x].NL8<8){
				P.Q[x].NL8++;
				flashQuest(2);
			}
			if(mob[Slot].name==="King Argentus"&&P.Q[x].NL9<2){
				P.Q[x].NL9=2;
				flashQuest(3);
			}
			if(mob[Slot].name==="Duke Carthenage"&&P.Q[x].NL10<2){
				P.Q[x].NL10=2;
				flashQuest(4);
			}
			if(mob[Slot].name==="Battle Mage Turento"&&P.Q[x].NL11<2){
				P.Q[x].NL11=2;
				flashQuest(5);
			}
			if(mob[Slot].name==="Highlord Szarthax"&&P.Q[x].NL12<1){
				P.Q[x].NL12=2;
				my.epicQuests++;
				stopMusic();
			}
			if(P.Q[x].NL7>=12&&P.Q[x].NL8>=8&&P.Q[x].NL9>=2&&P.Q[x].NL10>=2&&P.Q[x].NL11>=2&&P.Q[x].NL12>=1&&!P.Q[x].repeatNl4&&mob[Slot].name==="Highlord Szarthax"){
				playAudio("endquest");
				if(P.Q[x].NagafensLair===4){ 
					my.quests++; 
					lore("Amazing! You fell Highlord Szarthax, the most fearsome dragon in all of Vandamor. It looks like the portal isn't here, but there's a secret tunnel at the back of his lair.<br><br>It looks like this tunnel leads to a long forgotten city, now called "+gold("Dire Sanctum")+", that was buried beneath the volcano. Quite a hiding spot for a well guarded dimensional portal! The portal must be inside.");
				}
				QMsg("Quest Completed!");
				if(P.Q[x].NagafensLair===4){
					var a="Permanent +1 Talent Point".fontcolor("#dd7711");
					QMsg("Quest Reward: "+a,0,0,8000);
				}
				P.Q[x].NagafensLair++;
				P.Q[x].repeatNl4 = 1;
				return;
			}
		}
	}
	if(mz==="Braxxen's Bastille"){//Qdungeon allStats
		if(P.Q[x].Najena<2){
			if(mob[Slot].name==="a goblin warrior"&&P.Q[x].NJ1<10){
				P.Q[x].NJ1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a greater skeleton"&&P.Q[x].NJ2<6){
				P.Q[x].NJ2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an anuran guard"&&P.Q[x].NJ3<4){
				P.Q[x].NJ3++;
				flashQuest(3);
			}
			if(P.Q[x].NJ1>=10&&P.Q[x].NJ2>=6&&P.Q[x].NJ3>=4&&mob[Slot].name==="Grippywor"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].Najena=2;
				P.Q[x].NJ1=0;
				P.Q[x].NJ2=0;
				P.Q[x].NJ3=0;
				return;
			}
		}
		if(P.Q[x].Najena===2){
			if(mob[Slot].name==="a goblin officer"&&P.Q[x].NJ1<10){
				P.Q[x].NJ1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a necromancer"&&P.Q[x].NJ2<8){
				P.Q[x].NJ2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an anuran torturer"&&P.Q[x].NJ3<6){
				P.Q[x].NJ3++;
				flashQuest(3);
			}
			if(P.Q[x].NJ1>=10&&P.Q[x].NJ2>=8&&P.Q[x].NJ3>=6&&mob[Slot].name==="Munin"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].Najena=3;
				P.Q[x].NJ1=0;
				P.Q[x].NJ2=0;
				P.Q[x].NJ3=0;
				return;
			}
		}
		if(P.Q[x].Najena===3){
			if(mob[Slot].name==="a magician"&&P.Q[x].NJ1<10){
				P.Q[x].NJ1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a cephalid subverter"&&P.Q[x].NJ2<8){
				P.Q[x].NJ2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a goblin captain"&&P.Q[x].NJ3<8){
				P.Q[x].NJ3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="Burzina"){
				P.Q[x].NJ4=2;
				flashQuest(4);
			}
			if(mob[Slot].name==="Braxxen"){
				P.Q[x].NJ5=2;
				flashQuest(5);
			}
			if(P.Q[x].NJ1>=10&&P.Q[x].NJ2>=8&&P.Q[x].NJ3>=8&&P.Q[x].NJ4>=2&&P.Q[x].NJ5>=2){
				playAudio("endquest");
				my.quests++;
				P.Q[x].Najena=4;
				QMsg("Quest Completed!");
				setEquipValues();
				return;
			}
		}
	}
	if(mz==="Galeblast Fortress"){//Qdungeon 30CR
		if(P.Q[x].PermafrostKeep<2){
			if(mob[Slot].name==="an ice goblin"&&P.Q[x].PK1<8){
				P.Q[x].PK1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a goblin evoker"&&P.Q[x].PK2<6){
				P.Q[x].PK2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a dire wolf"&&P.Q[x].PK3<6){
				P.Q[x].PK3++;
				flashQuest(3);
			}
			if(P.Q[x].PK1>=8&&P.Q[x].PK2>=6&&P.Q[x].PK3>=6&&mob[Slot].name==="an ice goblin keymaster"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].PermafrostKeep=2;
				P.Q[x].PK1=0;
				P.Q[x].PK2=0;
				P.Q[x].PK3=0;
				return;
			}
		}
		if(P.Q[x].PermafrostKeep===2){
			if(mob[Slot].name==="a goblin wizard"&&P.Q[x].PK1<7){
				P.Q[x].PK1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an elite goblin guard"&&P.Q[x].PK2<7){
				P.Q[x].PK2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a goblin preacher"&&P.Q[x].PK3<7){
				P.Q[x].PK3++;
				flashQuest(3);
			}
			if(P.Q[x].PK1>=7&&P.Q[x].PK2>=7&&P.Q[x].PK3>=7&&mob[Slot].name==="a goblin excavator"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].PermafrostKeep=3;
				P.Q[x].PK1=0;
				P.Q[x].PK2=0;
				P.Q[x].PK3=0;
				return;
			}
		}
		if(P.Q[x].PermafrostKeep===3){
			if(mob[Slot].name==="a goblin sage"&&P.Q[x].PK1<10){
				P.Q[x].PK1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an elite honor guard"&&P.Q[x].PK2<10){
				P.Q[x].PK2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an ice giant youth"&&P.Q[x].PK3<5){
				P.Q[x].PK3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="Pontiff Krindletin"&&P.Q[x].PK4<2){
				P.Q[x].PK4=2;
				flashQuest(4);
			}
			if(mob[Slot].name==="Magnate Dinbopp"&&P.Q[x].PK5<2){
				P.Q[x].PK5=2;
				flashQuest(5);
			}
			if(P.Q[x].PK1>=10&&P.Q[x].PK2>=10&&P.Q[x].PK3>=5&&P.Q[x].PK4>=2&&P.Q[x].PK5>=2){
				playAudio("endquest");
				my.quests++;
				if(P.Q[x].PermafrostKeep<4){
					P.Q[x].PermafrostKeep=4;
				}
				P.Q[x].PK1=0;
				P.Q[x].PK2=0;
				P.Q[x].PK3=0;
				P.Q[x].PK4=0;
				P.Q[x].PK5=0;
				QMsg("Quest Completed!");
				setEquipValues();
				return;
			}
		}
		if(P.Q[x].PermafrostKeep>=4){
			if(mob[Slot].name==="an ice giant champion"&&P.Q[x].PK1<4){
				P.Q[x].PK1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an ice giant warder"&&P.Q[x].PK2<4){
				P.Q[x].PK2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an ice giant preserver"&&P.Q[x].PK3<4){
				P.Q[x].PK3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="an ice giant"&&P.Q[x].PK4<3){
				P.Q[x].PK4++;
				flashQuest(4);
			}
			if(mob[Slot].name==="an ice giant magus"&&P.Q[x].PK5<2){
				P.Q[x].PK5++;
				flashQuest(5);
			}
			if(mob[Slot].name==="an ice giant priest"&&P.Q[x].PK6<2){
				P.Q[x].PK6++;
				flashQuest(6);
			}
			if(mob[Slot].name==="Margrave Kalgresh the Usurper"){
				P.Q[x].PK7=2;
				flashQuest(7);
			}
			if(mob[Slot].name==="Vizier Kongumen Divorn"){
				P.Q[x].PK8=2;
				flashQuest(8);
			}
			if(P.Q[x].PK1>=4&&P.Q[x].PK2>=4&&P.Q[x].PK3>=4&&P.Q[x].PK4>=3&&P.Q[x].PK5>=2&&P.Q[x].PK6>=2&&P.Q[x].PK7>=2&&P.Q[x].PK8>=2&&mob[Slot].name==="Matron Maelentia"){
				playAudio("endquest");
				P.Q[x].PK9=2;
				QMsg("Quest Completed!");
				if(P.Q[x].PermafrostKeep===4){
					P.Q[x].PermafrostKeep=5;
					my.quests++;
					lore("Blizzards of Shendova, you have triumphed against Matron Maelentia! The underground caverns of Ashenflow Peak are now accessible.<br><br>Make your way toward the lair of Highlord Szarthax, the deadly fire dragon.");
				}else{
					P.Q[x].PermafrostKeep++;
				}
				P.Q[x].repeatPk4=1; 
				my.epicQuests++;
				stopMusic();
				return;
			}
		}
	}
	if(mz==="Nimgaul"){
		if(P.Q[x].PlaneofFear<=2){
			if(mob[Slot].name==="a wailing banshee"&&P.Q[x].PF1<3){
				P.Q[x].PF1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a festering dreg"&&P.Q[x].PF2<3){
				P.Q[x].PF2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a lurid nymph"&&P.Q[x].PF3<3){
				P.Q[x].PF3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="a peering menace"&&P.Q[x].PF4<3){
				P.Q[x].PF4++;
				flashQuest(4);
			}
			if(mob[Slot].name==="an accursed slattern"&&P.Q[x].PF5<3){
				P.Q[x].PF5++;
				flashQuest(5);
			}
			if(mob[Slot].name==="a brooding fungus"&&P.Q[x].PF6<3){
				P.Q[x].PF6++;
				flashQuest(6);
			}
			if(mob[Slot].name==="a cursed marionette"&&P.Q[x].PF7<3){
				P.Q[x].PF7++;
				flashQuest(7);
			}
			if(mob[Slot].name==="a tremulant imp"&&P.Q[x].PF8<3){
				P.Q[x].PF8++;
				flashQuest(8);
			}
			if(mob[Slot].name==="a deranged gorilla"&&P.Q[x].PF9<3){
				P.Q[x].PF9++;
				flashQuest(9);
			}
			if(mob[Slot].name==="a boreal spider"&&P.Q[x].PF10<3){
				P.Q[x].PF10++;
				flashQuest(10);
			}
			if(mob[Slot].name==="a cephalid enticer"&&P.Q[x].PF11<3){
				P.Q[x].PF11++;
				flashQuest(11);
			}
			if(mob[Slot].name==="a panicked anuran"&&P.Q[x].PF12<3){
				P.Q[x].PF12++;
				flashQuest(12);
			}
			if(mob[Slot].name==="a chaos punisher"&&P.Q[x].PF13<3){
				P.Q[x].PF13++;
				flashQuest(13);
			}
			if(mob[Slot].name==="a chaos enforcer"&&P.Q[x].PF14<3){
				P.Q[x].PF14++;
				flashQuest(14);
			}
			if(mob[Slot].name==="a pustulant vessel"&&P.Q[x].PF15<3){
				P.Q[x].PF15++;
				flashQuest(15);
			}
			if(mob[Slot].name==="a shrieking wisp"&&P.Q[x].PF16<3){
				P.Q[x].PF16++;
				flashQuest(16);
			}
			if(mob[Slot].name==="a sorrow slitherer"&&P.Q[x].PF17<3){
				P.Q[x].PF17++;
				flashQuest(17);
			}
			if(mob[Slot].name==="Guardian of Misery"){
				P.Q[x].PF18=2;
				flashQuest(18);
			}
			if(mob[Slot].name==="Guardian of Strife"){
				P.Q[x].PF19=2;
				flashQuest(19);
			}
			if(mob[Slot].name==="Guardian of Ruin"){
				P.Q[x].PF20=2;
				flashQuest(20);
			}
			if(mob[Slot].name==="Falzitherin"){
				P.Q[x].PF21=2;
				flashQuest(21);
				my.epicQuests++;
				stopMusic();
			}
			if(mob[Slot].name==="Nalatos, God of Chaos"){
				P.Q[x].PF22=2;
				my.epicQuests++;
				stopMusic();
			}
			if(P.Q[x].PF1>=3&&P.Q[x].PF2>=3&&P.Q[x].PF3>=3&&P.Q[x].PF4>=3&&P.Q[x].PF5>=3&&P.Q[x].PF6>=3&&P.Q[x].PF7>=3&&P.Q[x].PF8>=3&&P.Q[x].PF9>=3&&P.Q[x].PF10>=3&&P.Q[x].PF11>=3
				&&P.Q[x].PF12>=3&&P.Q[x].PF13>=3&&P.Q[x].PF14>=3&&P.Q[x].PF15>=3&&P.Q[x].PF16>=3&&P.Q[x].PF17>=3&&P.Q[x].PF18>=1&&P.Q[x].PF19>=1&&P.Q[x].PF20>=1&&P.Q[x].PF21>=1&&P.Q[x].PF22>=1&&mob[Slot].name==="Nalatos, God of Chaos"){
				playAudio("endquest");
				if(P.Q[x].PlaneofFear<2){
					P.Q[x].PlaneofFear=2;
					my.quests++;
				}else{
					P.Q[x].PlaneofFear++;
				}
				QMsg("Quest Completed!");
				return;
			}
		}
	}
	if(mz==="Dire Sanctum"){
		if(P.Q[x].PlaneofHate<=2){
			if(mob[Slot].name==="a toiling drudge"&&P.Q[x].PH1<4){
				P.Q[x].PH1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="a slavering corpse"&&P.Q[x].PH2<4){
				P.Q[x].PH2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="a fetid vagabond"&&P.Q[x].PH3<4){
				P.Q[x].PH3++;
				flashQuest(3);
			}
			if(mob[Slot].name==="an impulse servant"&&P.Q[x].PH4<4){
				P.Q[x].PH4++;
				flashQuest(4);
			}
			if(mob[Slot].name==="a servant of corruption"&&P.Q[x].PH5<4){
				P.Q[x].PH5++;
				flashQuest(5);
			}
			if(mob[Slot].name==="an embalmed vagrant"&&P.Q[x].PH6<4){
				P.Q[x].PH6++;
				flashQuest(6);
			}
			if(mob[Slot].name==="a ghastly indulger"&&P.Q[x].PH7<5){
				P.Q[x].PH7++;
				flashQuest(7);
			}
			if(mob[Slot].name==="an infected rodent"&&P.Q[x].PH8<5){
				P.Q[x].PH8++;
				flashQuest(8);
			}
			if(mob[Slot].name==="a flittering menace"&&P.Q[x].PH9<5){
				P.Q[x].PH9++;
				flashQuest(9);
			}
			if(mob[Slot].name==="a hallowed harbinger"&&P.Q[x].PH10<5){
				P.Q[x].PH10++;
				flashQuest(10);
			}
			if(mob[Slot].name==="a cephalid sorcerer"&&P.Q[x].PH11<5){
				P.Q[x].PH11++;
				flashQuest(11);
			}
			if(mob[Slot].name==="Vixen Sarmina"&&P.Q[x].PH12<1){
				P.Q[x].PH12=2;
				flashQuest(12);
				my.epicQuests++;
				stopMusic();
			}
			if(mob[Slot].name==="Sanctum Guardian Ghalentus"&&P.Q[x].PH13<1){
				P.Q[x].PH13=2;
				my.epicQuests++;
				stopMusic();
			}
			if(P.Q[x].PH1>=4&&P.Q[x].PH2>=4&&P.Q[x].PH3>=4&&P.Q[x].PH4>=4&&P.Q[x].PH5>=4&&P.Q[x].PH6>=4&&P.Q[x].PH7>=5&&P.Q[x].PH8>=5&&P.Q[x].PH9>=5&&P.Q[x].PH10>=5&&P.Q[x].PH11>=5
				&&P.Q[x].PH12>=1&&P.Q[x].PH13>=1&&mob[Slot].name==="Sanctum Guardian Ghalentus"){
				playAudio("endquest");
				if(P.Q[x].PlaneofHate<2){
					P.Q[x].PlaneofHate=2;
					my.quests++;
					lore("By the Gods, you have done it! With Ghalentus out of the way, the portal has been left unguarded! Use your Idols of Chaos to cross over to Nimgaul, the astral plane of Chaos.");
				}else{
					P.Q[x].PlaneofHate++;
				}
				QMsg("Quest Completed!");
				return;
			}
		}
	}
	if(mz==="Kordata Marshlands"){//Qdungeon allStats
		if(P.Q[x].UpperGuk<2){
			if(mob[Slot].name==="an anuran sur warrior"&&P.Q[x].UG1<9){
				P.Q[x].UG1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an anuran sur knight"&&P.Q[x].UG2<6){
				P.Q[x].UG2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an anuran sur shaman"&&P.Q[x].UG3<6){
				P.Q[x].UG3++;
				flashQuest(3);
			}
			if(P.Q[x].UG1>=9&&P.Q[x].UG2>=6&&P.Q[x].UG3>=6){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].UpperGuk=2;
				P.Q[x].UG1=0;
				P.Q[x].UG2=0;
				P.Q[x].UG3=0;
				return;
			}
		}
		if(P.Q[x].UpperGuk===2){
			if(mob[Slot].name==="a fungus breeder"&&P.Q[x].UG1<8){
				P.Q[x].UG1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an anuran tir shaman"&&P.Q[x].UG2<8){
				P.Q[x].UG2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an anuran priest"&&P.Q[x].UG3<6){
				P.Q[x].UG3++;
				flashQuest(3);
			}
			if(P.Q[x].UG1>=8&&P.Q[x].UG2>=8&&P.Q[x].UG3>=6&&mob[Slot].name==="the anuran warden"){
				playAudio("endquest");
				QMsg("Quest Completed!");
				my.quests++;
				P.Q[x].UpperGuk=3;
				P.Q[x].UG1=0;
				P.Q[x].UG2=0;
				P.Q[x].UG3=0;
				return;
			}
		}
		if(P.Q[x].UpperGuk===3){
			if(mob[Slot].name==="an anuran tonta knight"&&P.Q[x].UG1<12){
				P.Q[x].UG1++;
				flashQuest(1);
			}
			if(mob[Slot].name==="an anuran summoner"&&P.Q[x].UG2<8){
				P.Q[x].UG2++;
				flashQuest(2);
			}
			if(mob[Slot].name==="an anuran fal shaman"&&P.Q[x].UG3<8){
				P.Q[x].UG3++;
				flashQuest(3);
			}
			if(P.Q[x].UG1>=12&&P.Q[x].UG2>=8&&P.Q[x].UG3>=8&&mob[Slot].name==="Prince Kerpple"){
				playAudio("endquest");
				my.quests++;
				P.Q[x].UpperGuk=4;
				QMsg("Quest Completed!");
				setEquipValues();
				return;
			}
		}
	}
}