//skills.js
function spanify(x){
	x=x.split("");
	var string='';
	for(var i=0, len=x.length;i<len;i++){
		string+="<span class='aniSpan'>"+x[i]+"</span>";
	}
	return string;
}
function bgp(e, p){
	D.getElementById(e).style.backgroundPosition=p;
}
function BGP(e, p){
	NG[e].style.backgroundPosition=p;
}
function setO(id, O){
  btn['o'][id]=O;
}
function setD(id, D){
  btn['d'][id]=D;
}
function setCD(id, CD){
  btn['cd'][id]=CD;
}
function setBtn(id, D, CD){
  btn['d'][id]=D;
  btn['cd'][id]=CD;
}
g.WarriorDoneCD=function(){
	if( btn.cd.warriorkickId===true ){
    setBtn('warriorkickId', false, false);
    BGP('warriorkickId', "-300% 0");
	}
	if( btn.cd.slamId===true ){
    setBtn('slamId', false, false);
    BGP('slamId', "-400% 0");
	}
	setBtn('avengingstrikeId', false, false);
	BGP('avengingstrikeId', "-500% 0");
	if( btn.cd.hemorrhageId===true ){
    setBtn('hemorrhageId', false, false);
    BGP('hemorrhageId', "-600% 0");
	}
	if( btn.cd.shockwaveId===true ){
    setBtn('shockwaveId', false, false);
    BGP('shockwaveId', "-700% 0");
	}
	if( btn.cd.pummelId===true ){
    setBtn('pummelId', false, false);
    BGP('pummelId', "-800% 0");
	}
	if( btn.cd.subjugateId===true ){
    setBtn('subjugateId', false, false);
    BGP('subjugateId', "-900% 0");
	}
	if( btn.cd.decisiveblowId===true ){
    setBtn('decisiveblowId', false, false);
    BGP('decisiveblowId', "-1000% 0");
	}
	if( btn.cd.absorbspellId===true ){
    setBtn('absorbspellId', false, false);
    BGP('absorbspellId', "-1100% 0");
	}
	if( btn.cd.frenziedrampageId===true ){
    setBtn('frenziedrampageId', false, false);
    BGP('frenziedrampageId', "-1200% 0");
	}
	if( btn.cd.enrageId===true ){
    setBtn('enrageId', false, false);
    BGP('enrageId', "-1300% 0");
	}
	if( btn.cd.furiousscornId===true ){
    setBtn('furiousscornId', false, false);
    BGP('furiousscornId', "-1400% 0");
	}
	if( btn.cd.triageId===true ){
    setBtn('triageId', false, false);
    BGP('triageId', "-1500% 0");
	}
	if( btn.cd.bulwarkId===true ){
    setBtn('bulwarkId', false, false);
    BGP('bulwarkId', "-1600% 0");
	}
}
g.WarriorCooldowns=function(){
	if( btn.d.warriorkickId===false ){
    setBtn('warriorkickId', true, true);
    BGP('warriorkickId', "-300% -200%");
	}
	if( btn.d.slamId===false ){
    setBtn('slamId', true, true);
    BGP('slamId', "-400% -200%");
	}
  setBtn('avengingstrikeId', true, true);
  BGP('avengingstrikeId', "-500% -200%");
	if( btn.d.hemorrhageId===false ){
    setBtn('hemorrhageId', true, true);
    BGP('hemorrhageId', "-600% -200%");
	}
	if( btn.d.shockwaveId===false ){
    setBtn('shockwaveId', true, true);
    BGP('shockwaveId', "-700% -200%");
	}
	if( NG.pummelId.style.backgroundPosition==="-512px 0"){
    setBtn('pummelId', true, true);
    BGP('pummelId', "-800% -200%");
	} else if(NG.pummelId.style.backgroundPosition==="-512px -192px"){
    setBtn('pummelId', true, true);
    BGP('pummelId', "-800% -300%");
	}
	if(NG.subjugateId.style.backgroundPosition==="-576px 0"){
    setBtn('subjugateId', true, true);
    BGP('subjugateId', "-900% -200%");
	}else if(NG.subjugateId.style.backgroundPosition==="-576px -192px"){
    setBtn('subjugateId', true, true);
    BGP('subjugateId', "-900% -300%");
	}
	if(NG.decisiveblowId.style.backgroundPosition==="-640px 0"){
    setBtn('decisiveblowId', true, true);
    BGP('decisiveblowId', "-1000% -200%");
	} else if(NG.decisiveblowId.style.backgroundPosition==="-640px -192px"){
    setBtn('decisiveblowId', true, true);
    BGP('decisiveblowId', "-1000% -300%");
	}
	if( btn.d.absorbspellId===false ){
    setBtn('absorbspellId', true, true);
    BGP('absorbspellId', "-1100% -200%");
	}
	if( btn.d.frenziedrampageId===false ){
    setBtn('frenziedrampageId', true, true);
    BGP('frenziedrampageId', "-1200% -200%");
	}
	if( btn.d.enrageId===false ){
    setBtn('enrageId', true, true);
    BGP('enrageId', "-1300% -200%");
	}
	if( btn.d.furiousscornId===false ){
    setBtn('furiousscornId', true, true);
    BGP('furiousscornId', "-1400% -200%");
	}
	if( btn.d.triageId===false ){
    setBtn('triageId', true, true);
    BGP('triageId', "-1500% -200%");
	}
	if( btn.d.bulwarkId===false ){
    setBtn('bulwarkId', true, true);
    BGP('bulwarkId', "-1600% -200%");
	}
}

g.checkWarriorSkills=function(){
	if(fearStatus===0||bashStatus===0){ return; }
	if(my.mp<10&&btn.d.slamId===false){
		BGP('slamId', "-400% -300%");
	}
	if(my.mp>=10&&btn.d.slamId===false){
		BGP('slamId', "-400% 0");
	}
	if(my.mp<15&&btn.d.hemorrhageId===false){
		BGP('hemorrhageId', "-600% -300%");
	}
	if(my.mp>=15&&btn.d.hemorrhageId===false){
		BGP('hemorrhageId', "-600% 0");
	}
	if(my.mp<15&&btn.d.shockwaveId===false){
		BGP('shockwaveId', "-700% -300%");
	}
	if(my.mp>=15&&btn.d.shockwaveId===false){
		BGP('shockwaveId', "-700% 0");
	}
	if( btn.d.pummelId===false ){
		if(my.mp<10||pummelStatus===1){
			BGP('pummelId', "-800% -300%");
		}
		if(my.mp>=10&&pummelStatus===0){
			BGP('pummelId', "-800% 0");
		}
	}
	if(my.mp<5||g.subjugateStatus===1){
		if(btn.d.subjugateId===false){
			BGP('subjugateId', "-900% -300%");
		}
	}
	if(my.mp>=5&&g.subjugateStatus===0){
		if(btn.d.subjugateId===false){
			BGP('subjugateId', "-900% 0");
		}
	}
	if(my.mp<15&&btn.d.absorbspellId===false){
		BGP('absorbspellId', "-1100% -300%");
	}
	if(my.mp>=15&&btn.d.absorbspellId===false){
		BGP('absorbspellId', "-1100% 0");
	}
	if(my.mp<25||frenziedRampageStatus===1){
		BGP('frenziedrampageId', "-1200% -300%");
	}
	if(my.mp>=25&&frenziedRampageStatus===0){
		BGP('frenziedrampageId', "-1200% 0");
	}
	if(my.mp<20&&btn.d.furiousscornId===false){
		BGP('furiousscornId', "-1400% -300%");
	}
	if(my.mp>=20&&btn.d.furiousscornId===false){
		BGP('furiousscornId', "-1400% 0");
	}
	if(my.mp<25&&btn.d.triageId===false){
		BGP('triageId', "-1500% -300%");
	}
	if(my.mp>=25&&btn.d.triageId===false){
		BGP('triageId', "-1500% 0");
	}
	if(my.mp<15&&btn.d.bulwarkId===false){
		BGP('bulwarkId', "-1600% -300%");
	}
	if(my.mp>=15&&btn.d.bulwarkId===false){
		BGP('bulwarkId', "-1600% 0");
	}
	checkIntrepidMight();
	checkDecisiveBlow();
}
function checkDecisiveBlow(){
	var foo=mob[TGT].hp/mob[TGT].maxHp;
	if(foo<=.4){
		decisiveBlowStatus=0;
	}else{
		decisiveBlowStatus=1;
	}
  if(btn.d.decisiveblowId===false){
    if(my.mp>=15&&decisiveBlowStatus===0){
      BGP('decisiveblowId', '-1000% 0');
    }else{
      BGP('decisiveblowId', '-1000% -300%');
    }
  }
}


g.RogueDoneCD=function(){
  setBtn('shadowstrikeId', false, false);
  BGP('shadowstrikeId', "-300% 0");
	if( btn.cd.sonicstrikeId===true ){
    setBtn('sonicstrikeId', false, false);
    BGP('sonicstrikeId', "-400% 0");
	}
	if( btn.cd.hyperstrikeId===true ){
    setBtn('hyperstrikeId', false, false);
    BGP('hyperstrikeId', "-500% 0");
	}
	if( btn.cd.widowstrikeId===true ){
    setBtn('widowstrikeId', false, false);
    BGP('widowstrikeId', "-600% 0");
	}
	if( btn.cd.miragestrikeId===true ){
    setBtn('miragestrikeId', false, false);
    BGP('miragestrikeId', "-700% 0");
	}
	if(btn.cd.lacerateId===true){
    setBtn('lacerateId', false, false);
    BGP('lacerateId', "-800% 0");
	}
	if( btn.cd.backstabId===true ){
    setBtn('backstabId', false, false);
    BGP('backstabId', "-900% 0");
	}
	if( btn.cd.staggershotId===true ){
    setBtn('staggershotId', false, false);
    BGP('staggershotId', "-1000% 0");
	}
	if( btn.cd.lobotomizeId===true ){
    setBtn('lobotomizeId', false, false);
    BGP('lobotomizeId', "-1100% 0");
	}
	if( btn.cd.prowlinggashId===true ){
    setBtn('prowlinggashId', false, false);
    BGP('prowlinggashId', "-1200% 0");
	}
	if( btn.cd.evadeId===true ){
    setBtn('evadeId', false, false);
    BGP('evadeId', "-1300% 0");
	}
	if( btn.cd.coldbloodId===true ){
    setBtn('coldbloodId', false, false);
    BGP('coldbloodId', "-1400% 0");
	}
	if( btn.cd.flashpowderId===true ){
    setBtn('flashpowderId', false, false);
    BGP('flashpowderId', "-1500% 0");
	}
	if( btn.cd.illusivemistId===true ){
    setBtn('illusivemistId', false, false);
    BGP('illusivemistId', "-1600% 0");
	}
}
g.RogueCooldowns=function(){
  setBtn('shadowstrikeId', true, true);
  BGP('shadowstrikeId', "-300% -200%");
	if( btn.d.sonicstrikeId===false ){
    setBtn('sonicstrikeId', true, true);
    BGP('sonicstrikeId', "-400% -200%");
	}
	if( btn.d.hyperstrikeId===false ){
    setBtn('hyperstrikeId', true, true);
    BGP('hyperstrikeId', "-500% -200%");
	}
	if( btn.d.widowstrikeId===false ){
    setBtn('widowstrikeId', true, true);
    BGP('widowstrikeId', "-600% -200%");
	}
	if( btn.d.miragestrikeId===false ){
    setBtn('miragestrikeId', true, true);
    BGP('miragestrikeId', "-700% -200%");
	}
	if( btn.d.lacerateId===false ){
    setBtn('lacerateId', true, true);
    BGP('lacerateId', "-800% -200%");
	}
	if( btn.d.backstabId===false ){
    setBtn('backstabId', true, true);
    BGP('backstabId', "-900% -200%");
	}
	if( btn.d.staggershotId===false ){
    setBtn('staggershotId', true, true);
    BGP('staggershotId', "-1000% -200%");
	}
	if( btn.d.lobotomizeId===false ){
    setBtn('lobotomizeId', true, true);
    BGP('lobotomizeId', "-1100% -200%");
	}
	if( btn.d.prowlinggashId===false ){
    setBtn('prowlinggashId', true, true);
    BGP('prowlinggashId', "-1200% -200%");
	}
	if( btn.d.evadeId===false ){
    setBtn('evadeId', true, true);
    BGP('evadeId', "-1300% -200%");
	}
	if( btn.d.coldbloodId===false ){
    setBtn('coldbloodId', true, true);
    BGP('coldbloodId', "-1400% -200%");
	}
	if( btn.d.flashpowderId===false ){
    setBtn('flashpowderId', true, true);
    BGP('flashpowderId', "-1500% -200%");
	}
	if( btn.d.illusivemistId===false ){
    setBtn('illusivemistId', true, true);
    BGP('illusivemistId', "-1600% -200%");
	}
}
//rogue skills
g.checkRogueSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Rogue"){ return; }
	if(btn.cd.shadowstrikeId===false){
    BGP('shadowstrikeId', "-300% 0");
	}
	if(btn.cd.sonicstrikeId===false&&btn.d.sonicstrikeId===false){
    BGP('sonicstrikeId', "-400% 0");
	}
	if(btn.cd.hyperstrikeId===false){
    BGP('hyperstrikeId', "-500% 0");
	}
	if(btn.cd.widowstrikeId===false){
    BGP('widowstrikeId', "-600% 0");
	}
	if(btn.cd.miragestrikeId===false&&btn.d.miragestrikeId===false){
    BGP('miragestrikeId', "-700% 0");
	}
	if(btn.d.lacerateId===false){
		if(my.mp<20){
      BGP('lacerateId', "-800% -300%");
		}else{
      BGP('lacerateId', "-800% 0");
		}
	}
	if(btn.d.backstabId===false){
		if(my.mp<20){
      BGP('backstabId', "-900% -300%");
		}else{
      BGP('backstabId', "-900% 0");
		}
	}
	if(btn.d.staggershotId===false){
		if(my.mp<20){
      BGP('staggershotId', "-1000% -300%");
		}else{
      BGP('staggershotId', "-1000% 0");
		}
	}
	if(btn.d.lobotomizeId===false){
		if(my.mp<20){
      BGP('lobotomizeId', "-1100% -300%");
		}else{
      BGP('lobotomizeId', "-1100% 0");
		}
	}
	if(btn.d.prowlinggashId===false){
		if(my.mp<20){
      BGP('prowlinggashId', "-1200% -300%");
		}else{
      BGP('prowlinggashId', "-1200% 0");
		}
	}
	if(btn.d.evadeId===false){
    BGP('evadeId', "-1300% 0");
	}
	if(btn.d.coldbloodId===false){
    BGP('coldbloodId', "-1400% 0");
	}
	if(btn.d.flashpowderId===false){
    BGP('flashpowderId', "-1500% 0");
	}
	if(btn.d.illusivemistId===false){
    BGP('illusivemistId', "-1600% 0");
	}
	if(btn.d.ancientwillId===false){
		if(ancientWillStatus===false){
      BGP('ancientwillId', "-1700% -300%");
		}
		if((bashStatus===0||fearStatus===0||rootStatus===0)&&ancientWillStatus===true){
      BGP('ancientwillId', "-1700% 0");
		}
	}
}


g.MonkDoneCD=function(){
  setBtn('tigerstrikeId', false, false);
  BGP('tigerstrikeId', "-300% 0");
	if( btn.cd.eaglestrikeId===true ){
    setBtn('eaglestrikeId', false, false);
    BGP('eaglestrikeId', "-400% 0");
	}
	if( btn.cd.cheetahstrikeId===true ){
    setBtn('cheetahstrikeId', false, false);
    BGP('cheetahstrikeId', "-500% 0");
	}
	if( btn.cd.cobrastrikeId===true ){
    setBtn('cobrastrikeId', false, false);
    BGP('cobrastrikeId', "-600% 0");
	}
	if( btn.cd.dragonstrikeId===true ){
    setBtn('dragonstrikeId', false, false);
    BGP('dragonstrikeId', "-700% 0");
	}
	if( btn.cd.cranekickId===true ){
    setBtn('cranekickId', false, false);
    BGP('cranekickId', "-800% 0");
	}
	if( btn.cd.windmillkickId===true ){
    setBtn('windmillkickId', false, false);
    BGP('windmillkickId', "-900% 0");
	}
	if( btn.cd.ancestralflurryId===true ){
    setBtn('ancestralflurryId', false, false);
    BGP('ancestralflurryId', "-1000% 0");
	}
	if( btn.cd.flyingkickId===true ){
    setBtn('flyingkickId', false, false);
    BGP('flyingkickId', "-1100% 0");
	}
	if( btn.cd.chakrablastId===true ){
    setBtn('chakrablastId', false, false);
    BGP('chakrablastId', "-1200% 0");
	}
	if( btn.cd.feigndeathId===true ){
    setBtn('feigndeathId', false, false);
    BGP('feigndeathId', "-1300% 0");
	}
	if( btn.cd.mendId===true ){
    setBtn('mendId', false, false);
    BGP('mendId', "-1400% 0");
	}
	if( btn.cd.stonefistsId===true ){
    setBtn('stonefistsId', false, false);
    BGP('stonefistsId', "-1500% 0");
	}
	if( btn.cd.intimidationId===true ){
    setBtn('intimidationId', false, false);
    BGP('intimidationId', "-1600% 0");
	}
	if( btn.cd.innerpeaceId===true ){
    setBtn('innerpeaceId', false, false);
    BGP('innerpeaceId', "-1700% 0");
	}
}
g.MonkCooldowns=function(){
  setBtn('tigerstrikeId', true, true);
  BGP('tigerstrikeId', "-300% -200%");
	if( btn.d.eaglestrikeId===false ){
    setBtn('eaglestrikeId', true, true);
    BGP('eaglestrikeId', "-400% -200%");
	}
	if( btn.d.cheetahstrikeId===false ){
    setBtn('cheetahstrikeId', true, true);
    BGP('cheetahstrikeId', "-500% -200%");
	}
	if( btn.d.cobrastrikeId===false ){
    setBtn('cobrastrikeId', true, true);
    BGP('cobrastrikeId', "-600% -200%");
	}
	if( btn.d.dragonstrikeId===false ){
    setBtn('dragonstrikeId', true, true);
    BGP('dragonstrikeId', "-700% -200%");
	}
	if( btn.d.cranekickId===false ){
    setBtn('cranekickId', true, true);
    BGP('cranekickId', "-800% -200%");
	}
	if( btn.d.windmillkickId===false ){
    setBtn('windmillkickId', true, true);
    BGP('windmillkickId', "-900% -200%");
	}
	if( btn.d.ancestralflurryId===false ){
    setBtn('ancestralflurryId', true, true);
    BGP('ancestralflurryId', "-1000% -200%");
	}
	if( btn.d.flyingkickId===false ){
    setBtn('flyingkickId', true, true);
    BGP('flyingkickId', "-1100% -200%");
	}
	if( btn.d.chakrablastId===false ){
    setBtn('chakrablastId', true, true);
    BGP('chakrablastId', "-1200% -200%");
	}
	if( btn.d.feigndeathId===false ){
    setBtn('feigndeathId', true, true);
    BGP('feigndeathId', "-1300% -200%");
	}
	if( btn.d.mendId===false ){
    setBtn('mendId', true, true);
    BGP('mendId', "-1400% -200%");
	}
	if( btn.d.stonefistsId===false ){
    setBtn('stonefistsId', true, true);
    BGP('stonefistsId', "-1500% -200%");
	}
	if( btn.d.intimidationId===false ){
    setBtn('intimidationId', true, true);
    BGP('intimidationId', "-1600% -200%");
	}
	if( btn.d.innerpeaceId===false ){
    setBtn('innerpeaceId', true, true);
    BGP('innerpeaceId', "-1700% -200%");
	}
}
//monk skills
g.checkMonkSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Monk"){ return; }
	if(btn.d.tigerstrikeId===false){
    BGP('tigerstrikeId', "-300% 0");
	}
	if(btn.d.eaglestrikeId===false){
        BGP('eaglestrikeId', "-400% 0");
	}
	if(btn.d.cheetahstrikeId===false){
        BGP('cheetahstrikeId', "-500% 0");
	}
	if(btn.d.cobrastrikeId===false){
        BGP('cobrastrikeId', "-600% 0");
	}
	if(btn.d.dragonstrikeId===false){
        BGP('dragonstrikeId', "-700% 0");
	}
	if(btn.d.cranekickId===false){
		if(my.mp<20){ 
        BGP('cranekickId', "-800% -300%");
    }else{ 
        BGP('cranekickId', "-800% 0");
    }
	}
	if(btn.d.windmillkickId===false){
		if(my.mp<25){ 
        BGP('windmillkickId', "-900% -300%");
    }else{ 
        BGP('windmillkickId', "-900% 0");
    }
	}
	if(btn.d.ancestralflurryId===false){
		if(my.mp<24){ 
        BGP('ancestralflurryId', "-1000% -300%");
    }else{ 
        BGP('ancestralflurryId', "-1000% 0");
    }
	}
	if(btn.d.chakrablastId===false){
		if(my.mp<35){ 
        BGP('chakrablastId', "-1200% -300%"); 
    }else{ 
        BGP('chakrablastId', "-1200% 0");
    }
	}
	if(btn.d.flyingkickId===false){
		if(my.mp<25){ 
        BGP('flyingkickId', "-1100% -300%"); 
    }else{ 
        BGP('flyingkickId', "-1100% 0");
    }
	}
}



g.PaladinDoneCD=function(){
	if( btn.cd.palslamId===true ){
    setBtn('palslamId', false, false);
    BGP('palslamId', "-300% 0");
	}
	if( btn.cd.rebukeId===true ){
    setBtn('rebukeId', false, false);
    BGP('rebukeId', "-400% 0");
	}
  setBtn('purgeId', false, false);
  BGP('purgeId', "-500% 0");
	if( btn.cd.vengeanceId===true ){
    setBtn('vengeanceId', false, false);
    BGP('vengeanceId', "-600% 0");
	}
	if( btn.cd.layhandsId===true ){
    setBtn('layhandsId', false, false);
    BGP('layhandsId', "-700% 0");
	}
	if( btn.cd.greaterhealingId===true ){
    setBtn('greaterhealingId', false, false);
    BGP('greaterhealingId', "-800% 0");
	}
	if( btn.cd.holymightId===true ){
    setBtn('holymightId', false, false);
    BGP('holymightId', "-900% 0");
	}
	if( btn.cd.palrootId===true ){
    setBtn('palrootId', false, false);
    BGP('palrootId', "-1000% 0");
	}
	if( btn.cd.ardentjudgment===true ){
    setBtn('ardentjudgment', false, false);
    BGP('ardentjudgment', "-1100% 0");
	}
	if( btn.cd.yaulpId===true ){
    setBtn('yaulpId', false, false);
    BGP('yaulpId', "-1200% 0");
	}
	if( btn.cd.cleanseId===true ){
    setBtn('cleanseId', false, false);
    BGP('cleanseId', "-1300% 0");
	}
	if( btn.cd.flashoflightId===true ){
    setBtn('flashoflightId', false, false);
    BGP('flashoflightId', "-1400% 0");
	}
}
g.PaladinCooldowns=function(){
	if( btn.d.palslamId===false ){
    setBtn('palslamId', true, true);
    BGP('palslamId', "-300% -200%");
	}
	if( btn.d.rebukeId===false ){
    setBtn('rebukeId', true, true);
    BGP('rebukeId', "-400% -200%");
	}
    setBtn('purgeId', true, true);
    BGP('purgeId', "-500% -200%");
	if( btn.d.vengeanceId===false ){
    setBtn('vengeanceId', true, true);
    BGP('vengeanceId', "-600% -200%");
	}
	if( btn.d.layhandsId===false ){
    setBtn('layhandsId', true, true);
    BGP('layhandsId', "-700% -200%");
	}
	if( btn.d.greaterhealingId===false ){
    setBtn('greaterhealingId', true, true);
    BGP('greaterhealingId', "-800% -200%");
	}
	if( btn.d.holymightId===false ){
    setBtn('holymightId', true, true);
    BGP('holymightId', "-900% -200%");
	}
	if( btn.d.palrootId===false ){
    setBtn('palrootId', true, true);
    BGP('palrootId', "-1000% -200%");
	}
	if( btn.d.ardentjudgment===false ){
    setBtn('ardentjudgment', true, true);
    BGP('ardentjudgment', "-1100% -200%");
	}
	if( btn.d.yaulpId===false ){
    setBtn('yaulpId', true, true);
    BGP('yaulpId', "-1200% -200%");
	}
	if( btn.d.cleanseId===false ){
    setBtn('cleanseId', true, true);
    BGP('cleanseId', "-1300% -200%");
	}
	if( btn.d.flashoflightId===false ){
    setBtn('flashoflightId', true, true);
    BGP('flashoflightId', "-1400% -200%");
	}
}
var pal = {
	cost : {
		greaterHealing:90,
		holyMight:35,
		root:50,
		ardentJudgment:60,
		yaulp:35,
		cleanse:75,
		flashOfLight:30,
		valor:100,
		spiritArmor:120,
		divineProvidence:60,
		symbolOfRyltan:135
	}
};
g.checkPaladinSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Paladin"){ return; }
	if(btn.d.greaterhealingId===false){
		if(my.mp<pal.cost.greaterHealing){ 
      BGP('greaterhealingId', "-800% -300%");
		}else{ 
      BGP('greaterhealingId', "-800% 0%");
		}
	}
	if(btn.d.holymightId===false){
		if(my.mp<pal.cost.holyMight){ 
      BGP('holymightId', "-900% -300%");
		}else{ 
      BGP('holymightId', "-900% 0%"); 
		}
	}
	if(btn.d.ardentjudgment===false){
		if(my.mp<pal.cost.ardentJudgment){ 
      BGP('ardentjudgment', "-1100% -300%");
		}else{ 
      BGP('ardentjudgment', "-1100% 0%");
		}
	}
	if(btn.d.yaulpId===false){
		if(my.mp<pal.cost.yaulp){  
      BGP('yaulpId', "-1200% -300%");
		}else{ 
      BGP('yaulpId', "-1200% 0%");
		}
	}
	if(btn.d.cleanseId===false){
		if(my.mp<pal.cost.cleanse){ 
      BGP('cleanseId', "-1300% -300%");
		}else{ 
      BGP('cleanseId', "-1300% 0%");
		}
	}
	if(btn.d.flashoflightId===false){
		if(my.mp<pal.cost.flashOfLight){ 
      BGP('flashoflightId', "-1400% -300%");
		}else{ 
      BGP('flashoflightId', "-1400% 0%");
		}
	}
	if(btn.d.palrootId===false){
		if(my.mp<pal.cost.root){ 
      BGP('palrootId', "-1000% -300%");
		}else{ 
      BGP('palrootId', "-1000% 0%");
		}
	}
	if(btn.d.valorId===false){
		if(my.mp<pal.cost.valor){ 
      BGP('valorId', "-1500% -300%");
		}else{ 
      BGP('valorId', "-1500% 0%");
		}
	}
	if(btn.d.spiritarmorId===false){
		if(my.mp<pal.cost.spiritArmor){ 
      BGP('spiritarmorId', "-1600% -300%");
		}else{ 
      BGP('spiritarmorId', "-1600% 0%");
		}
	}
	if(btn.d.divineprovidenceId===false){
		if(my.mp<pal.cost.divineProvidence){ 
      BGP('divineprovidenceId', "-1700% -300%");
		}else{ 
      BGP('divineprovidenceId', "-1700% 0%");
		}
	}
	if(btn.d.symbolofryltanId===false){
		if(my.mp<pal.cost.symbolOfRyltan){ 
      BGP('symbolofryltanId', "-200% -300%");
		}else{ 
      BGP('symbolofryltanId', "-200% -100%");
		}
	}
}


g.ShadowKnightDoneCD=function(){
	if( btn.cd.shdslamId===true ){
    setBtn('shdslamId', false, false);
    BGP('shdslamId', "-300% 0");
	}
  setBtn('crescentcleaveId', false, false);
  BGP('crescentcleaveId', "-400% 0");
	if( btn.cd.deathstrikeId===true ){
    setBtn('deathstrikeId', false, false);
    BGP('deathstrikeId', "-500% 0");
	}
	if( btn.cd.gaspingfrenzyId===true ){
    setBtn('gaspingfrenzyId', false, false);
    BGP('gaspingfrenzyId', "-600% 0");
	}
	if( btn.cd.harmtouchId===true ){
    setBtn('harmtouchId', false, false);
    BGP('harmtouchId', "-700% 0");
	}
	if( btn.cd.shdlifetapId===true ){
    setBtn('shdlifetapId', false, false);
    BGP('shdlifetapId', "-800% 0");
	}
	if( btn.cd.doomingdarknessId===true ){
    setBtn('doomingdarknessId', false, false);
    BGP('doomingdarknessId', "-900% 0");
	}
	if( btn.cd.heatbloodId===true ){
    setBtn('heatbloodId', false, false);
    BGP('heatbloodId', "-1000% 0");
	}
	if( btn.cd.strengthendeadId===true ){
    setBtn('strengthendeadId', false, false);
    BGP('strengthendeadId', "-1100% 0");
	}
	if( btn.cd.shdfearId===true ){
    setBtn('shdfearId', false, false);
    BGP('shdfearId', "-1200% 0");
	}
	if( btn.cd.siphonstrengthId===true ){
    setBtn('siphonstrengthId', false, false);
    BGP('siphonstrengthId', "-1300% 0");
	}
	if( btn.cd.shdfeigndeathId===true ){
    setBtn('shdfeigndeathId', false, false);
    BGP('shdfeigndeathId', "-1400% 0");
	}
	if( btn.cd.shadowvortexId===true ){
    setBtn('shadowvortexId', false, false);
    BGP('shadowvortexId', "-1500% 0");
	}
}
g.ShadowKnightCooldowns=function(){
	if( btn.d.shdslamId===false ){
    setBtn('shdslamId', true, true);
    BGP('shdslamId', "-300% -200%");
	}
  setBtn('crescentcleaveId', true, true);
  BGP('crescentcleaveId', "-400% -200%");
	if( btn.d.deathstrikeId===false ){
    setBtn('deathstrikeId', true, true);
    BGP('deathstrikeId', "-500% -200%");
	}
	if( btn.d.gaspingfrenzyId===false ){
    setBtn('gaspingfrenzyId', true, true);
    BGP('gaspingfrenzyId', "-600% -200%");
	}
	if( btn.d.harmtouchId===false ){
    setBtn('harmtouchId', true, true);
    BGP('harmtouchId', "-700% -200%");
	}
	if( btn.d.shdlifetapId===false ){
    setBtn('shdlifetapId', true, true);
    BGP('shdlifetapId', "-800% -200%");
	}
	if( btn.d.doomingdarknessId===false ){
    setBtn('doomingdarknessId', true, true);
    BGP('doomingdarknessId', "-900% -200%");
	}
	if( btn.d.heatbloodId===false ){
    setBtn('heatbloodId', true, true);
    BGP('heatbloodId', "-1000% -200%");
	}
	if( btn.d.strengthendeadId===false ){
    setBtn('strengthendeadId', true, true);
    BGP('strengthendeadId', "-1100% -200%");
	}
	if( btn.d.shdfearId===false ){
    setBtn('shdfearId', true, true);
    BGP('shdfearId', "-1200% -200%");
	}
	if( btn.d.siphonstrengthId===false ){
    setBtn('siphonstrengthId', true, true);
    BGP('siphonstrengthId', "-1300% -200%");
	}
	if( btn.d.shdfeigndeathId===false ){
    setBtn('shdfeigndeathId', true, true);
    BGP('shdfeigndeathId', "-1400% -200%");
	}
	if( btn.d.shadowvortexId===false ){
    setBtn('shadowvortexId', true, true);
    BGP('shadowvortexId', "-1500% -200%");
	}
}
var sk = {
	cost : {
		summonDead:100,
		lifeTap:90,
		doomingDarkness:30,
		fear:75,
		siphonStrength:30,
		heatBlood:40,
		vampiricEmbrace:75,
		resistCold:50,
		feignDeath:35,
		shadowVortex:30
	}
};
g.checkShadowKnightSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Shadow Knight"){ return; }
	if(g.petAlive===false){
		if(btn.d.summondeadId===false){
			if(my.mp<sk.cost.summonDead){ 
          BGP('summondeadId', "-1600% -300%");
			}
			if(my.mp>=sk.cost.summonDead||g.petAlive===true){ 
          BGP('summondeadId', "-1600% 0%");
			}
		}
	}
	if(btn.d.shdlifetapId===false){
		if(my.mp<sk.cost.lifeTap){ 
          BGP('shdlifetapId', "-800% -300%");
		}else{ 
          BGP('shdlifetapId', "-800% 0%");
		}
	}
	if(btn.d.doomingdarknessId===false){
		if(my.mp<sk.cost.doomingDarkness){ 
          BGP('doomingdarknessId', "-900% -300%");
		}else{ 
          BGP('doomingdarknessId', "-900% 0%"); 
		}
	}
	if(btn.d.heatbloodId===false){
		if(my.mp<sk.cost.heatBlood){ 
          BGP('heatbloodId', "-1000% -300%");
		}else{ 
          BGP('heatbloodId', "-1000% 0%");
		}
	}
	if(btn.d.shdfearId===false){
		if(my.mp<sk.cost.fear){ 
          BGP('shdfearId', "-1200% -300%"); 
		}else{ 
          BGP('shdfearId', "-1200% 0%");
		}
	}
	if(btn.d.siphonstrengthId===false){
		if(my.mp<sk.cost.siphonStrength){ 
          BGP('siphonstrengthId', "-1300% -300%");
		}else{ 
          BGP('siphonstrengthId', "-1300% 0%");
		}
	}
	if(btn.d.shdfeigndeathId===false){
		if(my.mp<sk.cost.feignDeath){  
          BGP('shdfeigndeathId', "-1400% -300%");
		}else{ 
          BGP('shdfeigndeathId', "-1400% 0%");
		}
	}
	if(btn.d.shadowvortexId===false){
		if(my.mp<sk.cost.shadowVortex){ 
          BGP('shadowvortexId', "-1500% -300%");
		}else{ 
          BGP('shadowvortexId', "-1500% 0%");
		}
	}
	if(btn.d.vampiricembraceId===false){
		if(my.mp<sk.cost.vampiricEmbrace){ 
          BGP('vampiricembraceId', "-1700% -300%"); 
		}else{  
          BGP('vampiricembraceId', "-1700% 0%");
		}
	}
	if(btn.d.resistcoldId===false){
		if(my.mp<sk.cost.resistCold){ 
          BGP('resistcoldId', "-200% -300%");
		}else{ 
          BGP('resistcoldId', "-200% -100%");
		}
	}
}


g.RangerDoneCD=function(){
	if(btn.cd.rangerkickId===true ){
    setBtn('rangerkickId', false, false);
    BGP('rangerkickId', "-300% 0");
	}
	setBtn('rapidshotId', false, false);
	BGP('rapidshotId', "-400% 0");
	if(btn.cd.countershotId===true ){
    setBtn('countershotId', false, false);
    BGP('countershotId', "-500% 0");
	}
	if( btn.cd.trueshotarrowId===true ){
    setBtn('trueshotarrowId', false, false);
    BGP('trueshotarrowId', "-600% 0");
	}
	if( btn.cd.volleyshotId===true ){
    setBtn('volleyshotId', false, false);
    BGP('volleyshotId', "-700% 0");
	}
	if( btn.cd.lighthealingId===true ){
    setBtn('lighthealingId', false, false);
    BGP('lighthealingId', "-800% 0");
	}
	if( btn.cd.faerieflameId===true ){
    setBtn('faerieflameId', false, false);
    BGP('faerieflameId', "-900% 0");
	}
	if( btn.cd.igniteId===true ){
    setBtn('igniteId', false, false);
    BGP('igniteId', "-1000% 0");
	}
	if( btn.cd.snareId===true ){
    setBtn('snareId', false, false);
    BGP('snareId', "-1100% 0");
	}
	if( btn.cd.wardersrift===true ){
    setBtn('wardersrift', false, false);
    BGP('wardersrift', "-1200% 0");
	}
	if( btn.cd.weaponshieldId===true ){
    setBtn('weaponshieldId', false, false);
    BGP('weaponshieldId', "-1300% 0");
	}
}
g.RangerCooldowns=function(){
	setBtn('rapidshotId', true, true);
	BGP('rapidshotId', "-400% -200%");
	if( btn.d.rangerkickId===false ){
		setBtn('rangerkickId', true, true);
		BGP('rangerkickId', "-300% -200%");
	}
	if( btn.d.trueshotarrowId===false ){
		setBtn('trueshotarrowId', true, true);
		BGP('trueshotarrowId', "-600% -200%");
	}
	if( btn.d.volleyshotId===false ){
		setBtn('volleyshotId', true, true);
		BGP('volleyshotId', "-700% -200%");
	}
	if( btn.d.lighthealingId===false ){
		setBtn('lighthealingId', true, true);
		BGP('lighthealingId', "-800% -200%");
	}
	if( btn.d.faerieflameId===false ){
		setBtn('faerieflameId', true, true);
		BGP('faerieflameId', "-900% -200%");
	}
	if( btn.d.igniteId===false ){
		setBtn('igniteId', true, true);
		BGP('igniteId', "-1000% -200%");
	}
	if( btn.d.snareId===false ){
		setBtn('snareId', true, true);
		BGP('snareId', "-1100% -200%");
	}
	if( btn.d.wardersrift===false ){
		setBtn('wardersrift', true, true);
		BGP('wardersrift', "-1200% -200%");
	}
	if( btn.d.weaponshieldId===false ){
		setBtn('weaponshieldId', true, true);
		BGP('weaponshieldId', "-1300% -200%");
	}
}
var rng = {
	cost : {
		lightHealing:90,
		faerieFlame:50,
		ignite:40,
		thistlecoat:80,
		snare:35,
		feetLikeCat:40,
		shieldOfBrambles:60,
		wardersRift:90,
		spiritOfTheWolf:50
	}
};
g.checkRangerSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Ranger"){ return; }
	if(btn.cd.rapidshotId===false){
		setBtn('rapidshotId', false, false);
		BGP('rapidshotId', "-400% 0%");
	}
	if( btn.d.rangerkickId===false ){
		setBtn('rangerkickId', false, false);
		BGP('rangerkickId', "-300% 0%");
	}
	if( btn.d.trueshotarrowId===false ){
		setBtn('trueshotarrowId', false, false);
		BGP('trueshotarrowId', "-600% 0%");
	}
	if( btn.d.volleyshotId===false ){
		setBtn('volleyshotId', false, false);
		BGP('volleyshotId', "-700% 0%");
	}
	if(counterShotStatus===false){ 
        BGP('countershotId', "-500% -300%");
	}else{ 
        BGP('countershotId', "-500% 0%");
	}
	if(btn.d.lighthealingId===false){
		if(my.mp<rng.cost.lightHealing){ 
        BGP('lighthealingId', "-800% -300%");
		}else{ 
        BGP('lighthealingId', "-800% 0%");
		}
	}
	if(btn.d.wardersrift===false){
		if(my.mp<rng.cost.wardersRift){ 
        BGP('wardersrift', "-1200% -300%");
		}else{ 
        BGP('wardersrift', "-1200% 0%");
		}
	}
	if(btn.d.igniteId===false){
		if(my.mp<rng.cost.ignite){ 
        BGP('igniteId', "-1000% -300%");
		}else{ 
        BGP('igniteId', "-1000% 0%");
		}
	}
	if(btn.d.faerieflameId===false){
		if(my.mp<rng.cost.faerieFlame){ 
        BGP('faerieflameId', "-900% -300%");
		}else{ 
        BGP('faerieflameId', "-900% 0%");
		}
	}
	if(btn.d.snareId===false){
		if(my.mp<rng.cost.snare){ 
        BGP('snareId', "-1100% -300%");
		}else{ 
        BGP('snareId', "-1100% 0%");
		}
	}
	if(btn.d.shieldofbramblesId===false){
		if(my.mp<rng.cost.shieldOfBrambles){ 
        BGP('shieldofbramblesId', "-1600% -300%"); 
		}else{ 
        BGP('shieldofbramblesId', "-1600% 0%");
		}
	}
	if(btn.d.thistlecoatId===false){
		if(my.mp<rng.cost.thistlecoat){ 
        BGP('thistlecoatId', "-1400% -300%");
		}else{ 
        BGP('thistlecoatId', "-1400% 0%");
		}
	}
	if(btn.d.feetlikecatId===false){
		if(my.mp<rng.cost.feetLikeCat){ 
        BGP('feetlikecatId', "-1500% -300%");
		}else{ 
        BGP('feetlikecatId', "-1500% 0%");
		}
	}
	if(btn.d.rangersowId===false){
		if(my.mp<rng.cost.spiritOfTheWolf){ 
        BGP('rangersowId', "-1700% -300%");
		}else{  
        BGP('rangersowId', "-1700% 0%");
		}
	}
}


g.BardDoneCD=function(){
	if( btn.cd.chordsofdissonance===true ){
    setBtn('chordsofdissonance', false, false);
    BGP('chordsofdissonance', "-300% 0");
	}
	if( btn.cd.chantofbattle===true ){
    setBtn('chantofbattle', false, false);
    BGP('chantofbattle', "-400% 0");
	}
	if( btn.cd.accelerando===true ){
    setBtn('accelerando', false, false);
    BGP('accelerando', "-500% 0");
	}
	if( btn.cd.hymnofrestoration===true ){
    setBtn('hymnofrestoration', false, false);
    BGP('hymnofrestoration', "-600% 0");
	}
	if( btn.cd.songofthesirens===true ){
    setBtn('songofthesirens', false, false);
    BGP('songofthesirens', "-700% 0");
	}
	if( btn.cd.boastfulbellow===true ){
    setBtn('boastfulbellow', false, false);
    BGP('boastfulbellow', "-800% 0");
	}
	if( btn.cd.elementalrhythms===true ){
    setBtn('elementalrhythms', false, false);
    BGP('elementalrhythms', "-900% 0");
	}
	if( btn.cd.lucidlullaby===true ){
    setBtn('lucidlullaby', false, false);
    BGP('lucidlullaby', "-1000% 0");
	}
	if( btn.cd.consonantchain===true ){
    setBtn('consonantchain', false, false);
    BGP('consonantchain', "-1100% 0");
	}
	if( btn.cd.dissension===true ){
    setBtn('dissension', false, false);
    BGP('dissension', "-1200% 0");
	}
	if( btn.cd.chorusofclarity===true ){
    setBtn('chorusofclarity', false, false);
    BGP('chorusofclarity', "-1300% 0");
	}
	if( btn.cd.anthemdearms===true ){
    setBtn('anthemdearms', false, false);
    BGP('anthemdearms', "-1400% 0");
	}
	if( btn.cd.euphonichymn===true ){
    setBtn('euphonichymn', false, false);
    BGP('euphonichymn', "-1500% 0");
	}
	if( btn.cd.shieldofsongs===true ){
    setBtn('shieldofsongs', false, false);
    BGP('shieldofsongs', "-1600% 0");
	}
	if( btn.cd.desperatedirge===true ){
    setBtn('desperatedirge', false, false);
    BGP('desperatedirge', "-1700% 0");
	}
}
g.BardCooldowns=function(){
	if( btn.d.chordsofdissonance===false ){
    setBtn('chordsofdissonance', true, true);
    BGP('chordsofdissonance', "-300% -200%");
	}
	if( btn.d.chantofbattle===false ){
    setBtn('chantofbattle', true, true);
    BGP('chantofbattle', "-400% -200%");
	}
	if( btn.d.accelerando===false ){
    setBtn('accelerando', true, true);
    BGP('accelerando', "-500% -200%");
	}
	if( btn.d.hymnofrestoration===false ){
    setBtn('hymnofrestoration', true, true);
    BGP('hymnofrestoration', "-600% -200%");
	}
	if( btn.d.songofthesirens===false ){
    setBtn('songofthesirens', true, true);
    BGP('songofthesirens', "-700% -200%");
	}
	if( btn.d.boastfulbellow===false ){
    setBtn('boastfulbellow', true, true);
    BGP('boastfulbellow', "-800% -200%");
	}
	if( btn.d.elementalrhythms===false ){
    setBtn('elementalrhythms', true, true);
    BGP('elementalrhythms', "-900% -200%");
	}
	if( btn.d.lucidlullaby===false ){
    setBtn('lucidlullaby', true, true);
    BGP('lucidlullaby', "-1000% -200%");
	}
	if( btn.d.consonantchain===false ){
    setBtn('consonantchain', true, true);
    BGP('consonantchain', "-1100% -200%");
	}
	if( btn.d.dissension===false ){
    setBtn('dissension', true, true);
    BGP('dissension', "-1200% -200%");
	}
	if( btn.d.chorusofclarity===false ){
    setBtn('chorusofclarity', true, true);
    BGP('chorusofclarity', "-1300% -200%");
	}
	if( btn.d.anthemdearms===false ){
    setBtn('anthemdearms', true, true);
    BGP('anthemdearms', "-1400% -200%");
	}
	if( btn.d.euphonichymn===false ){
    setBtn('euphonichymn', true, true);
    BGP('euphonichymn', "-1500% -200%");
	}
	if( btn.d.shieldofsongs===false ){
    setBtn('shieldofsongs', true, true);
    BGP('shieldofsongs', "-1600% -200%");
	}
	if( btn.d.desperatedirge===false ){
    setBtn('desperatedirge', true, true);
    BGP('desperatedirge', "-1700% -200%");
	}
}
//bard skills
var brd = {
	cost : {
		chordsOfDissonance:40,
		hymnOfRestoration:30,
		songOfTheSirens:60,
		boastfulBellow:40,
		lucidLullaby:70,
		consonantChain:25,
		dissension:70,
		euphonicHymn:40,
		shieldOfSongs:120,
		desperateDirge:75
	}
};
g.checkBardSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Bard"){ return; }
	if(bardSingStatus===false){
		if(my.mp<brd.cost.chordsOfDissonance){
      setO('chordsofdissonance', true);
      BGP('chordsofdissonance', "-300% -300%");
		}else{
      setO('chordsofdissonance', false);
      BGP('chordsofdissonance', "-300% 0%");
		}
		if(my.mp<brd.cost.songOfTheSirens){
      setO('songofthesirens', true);
      BGP('songofthesirens', "-700% -300%");
		}else{
      setO('songofthesirens', false);
      BGP('songofthesirens', "-700% 0%");
		}
		if(my.mp<brd.cost.hymnOfRestoration){
      setO('hymnofrestoration', true);
      BGP('hymnofrestoration', "-600% -300%");
		}else{
      setO('hymnofrestoration', false);
      BGP('hymnofrestoration', "-600% 0%");
		}
		if(my.mp<brd.cost.boastfulBellow){
      setO('boastfulbellow', true);
      BGP('boastfulbellow', "-800% -300%");
		}else{
      setO('boastfulbellow', false);
      BGP('boastfulbellow', "-800% 0%");
		}
		if(my.mp<brd.cost.lucidLullaby){
      setO('lucidlullaby', true);
      BGP('lucidlullaby', "-1000% -300%");
		}else{
      setO('lucidlullaby', false);
      BGP('lucidlullaby', "-1000% 0%");
		}
		if(my.mp<brd.cost.euphonicHymn){
      setO('euphonichymn', true);
      BGP('euphonichymn', "-1500% -300%");
		}else{
      setO('euphonichymn', false);
      BGP('euphonichymn', "-1500% 0%");
		}
		if(my.mp<brd.cost.consonantChain){
      setO('consonantchain', true);
      BGP('consonantchain', "-1100% -300%");
		}else{
      setO('consonantchain', false);
      BGP('consonantchain', "-1100% 0%");
		}
		if(my.mp<brd.cost.dissension){
      setO('dissension', true);
      BGP('dissension', "-1200% -300%");
		}else{
      setO('dissension', false);
      BGP('dissension', "-1200% 0%");
		}
		if(my.mp<brd.cost.shieldOfSongs){
      setO('shieldofsongs', true);
      BGP('shieldofsongs', "-1600% -300%");
		}else{
      setO('shieldofsongs', false);
      BGP('shieldofsongs', "-1600% 0%");
		}
		if(my.mp<brd.cost.desperateDirge){
      setO('desperatedirge', true);
      BGP('desperatedirge', "-1700% -300%");
		}else{
      setO('desperatedirge', false);
      BGP('desperatedirge', "-1700% 0%");
		}
	}
}


function bardSinging(){
	if(bardSingStatus===true){
		referenceDate2=0;
		bardSingStatus=false;
		currentSpell="";
		tlSpellbar.kill();
		NG.spellbardiv.style.display="none";
		chantOfBattleTimeout.kill();
		chordsOfDissonanceTimeout.kill();
		accelerandoTimeout.kill();
		hymnOfRestorationTimeout.kill();
		anthemDeArmsTimeout.kill();
		boastfulBellowTimeout.kill();
		elementalRhythmsTimeout.kill();
		consonantChainTimeout.kill();
		lucidLullabyTimeout.kill();
		dissensionTimeout.kill();
		chorusOfClarityTimeout.kill();
		euphonicHymnTimeout.kill();
		shieldOfSongsTimeout.kill();
		desperateDirgeTimeout.kill();
		songOfTheSirensTimeout.kill();
		if( btn.o.chordsofdissonance===false ){
			BGP('chordsofdissonance', "-300% 0");
		}
		if( btn.o.chantofbattle===false ){
			BGP('chantofbattle', "-400% 0");
		}
		if( btn.o.accelerando===false ){
			BGP('accelerando', "-500% 0");
		}
		if( btn.o.hymnofrestoration===false ){
			BGP('hymnofrestoration', "-600% 0");
		}
		if( btn.o.songofthesirens===false ){
			BGP('songofthesirens', "-700% 0");
		}
		if( btn.o.boastfulbellow===false ){
			BGP('boastfulbellow', "-800% 0");
		}
		if( btn.o.elementalrhythms===false ){
			BGP('elementalrhythms', "-900% 0");
		}
		if( btn.o.lucidlullaby===false ){
			BGP('lucidlullaby', "-1000% 0");
		}
		if( btn.o.consonantchain===false ){
			BGP('consonantchain', "-1100% 0");
		}
		if( btn.o.dissension===false ){
			BGP('dissension', "-1200% 0");
		}
		if( btn.o.chorusofclarity===false ){
			BGP('chorusofclarity', "-1300% 0");
		}
		if( btn.o.anthemdearms===false ){
			BGP('anthemdearms', "-1400% 0");
		}
		if( btn.o.euphonichymn===false ){
			BGP('euphonichymn', "-1500% 0");
		}
		if( btn.o.shieldofsongs===false ){
			BGP('shieldofsongs', "-1600% 0");
		}
		if( btn.o.desperatedirge===false){
			BGP('desperatedirge', "-1700% 0");
		}
	}else{
		if(checkBashFear()===true){ return; }
		bardSingStatus=true;
		if( btn.o.chordsofdissonance===false ){
			BGP('chordsofdissonance', "-300% -100%");
		}
		if( btn.o.chantofbattle===false ){
			BGP('chantofbattle', "-400% -100%");
		}
		if( btn.o.accelerando===false ){
			BGP('accelerando', "-500% -100%");
		}
		if( btn.o.hymnofrestoration===false ){
			BGP('hymnofrestoration', "-600% -100%");
		}
		if( btn.o.songofthesirens===false ){
			BGP('songofthesirens', "-700% -100%");
		}
		if( btn.o.boastfulbellow===false ){
			BGP('boastfulbellow', "-800% -100%");
		}
		if( btn.o.elementalrhythms===false ){
			BGP('elementalrhythms', "-900% -100%");
		}
		if( btn.o.lucidlullaby===false ){
			BGP('lucidlullaby', "-1000% -100%");
		}
		if( btn.o.consonantchain===false ){
			BGP('consonantchain', "-1100% -100%");
		}
		if( btn.o.dissension===false ){
			BGP('dissension', "-1200% -100%");
		}
		if( btn.o.chorusofclarity===false ){
			BGP('chorusofclarity', "-1300% -100%");
		}
		if( btn.o.anthemdearms===false ){
			BGP('anthemdearms', "-1400% -100%");
		}
		if( btn.o.euphonichymn===false ){
			BGP('euphonichymn', "-1500% -100%");
		}
		if( btn.o.shieldofsongs===false ){
			BGP('shieldofsongs', "-1600% -100%");
		}
		if( btn.o.desperatedirge===false){
			BGP('desperatedirge', "-1700% -100%");
		}
	}
}



g.DruidDoneCD=function(){
  setBtn('starfire', false, false);
  BGP('starfire', "-300% 0");
	if( btn.cd.dronesofdoom===true ){
    setBtn('dronesofdoom', false, false);
    BGP('dronesofdoom', "-400% 0");
	}
	if( btn.cd.druhealing===true ){
    setBtn('druhealing', false, false);
    BGP('druhealing', "-500% 0");
	}
	if( btn.cd.tornado===true ){
    setBtn('tornado', false, false);
    BGP('tornado', "-600% 0");
	}
	if( btn.cd.engulfingroots===true ){
    setBtn('engulfingroots', false, false);
    BGP('engulfingroots', "-700% 0");
	}
	if( btn.cd.driftingdeath===true ){
    setBtn('driftingdeath', false, false);
    BGP('driftingdeath', "-800% 0");
	}
	if( btn.cd.lightningblast===true ){
    setBtn('lightningblast', false, false);
    BGP('lightningblast', "-900% 0");
	}
	if( btn.cd.earthquake===true ){
    setBtn('earthquake', false, false);
    BGP('earthquake', "-1000% 0");
	}
	if( btn.cd.hurricane===true ){
    setBtn('hurricane', false, false);
    BGP('hurricane', "-1100% 0");
	}
	if( btn.cd.sylvangrasp===true ){
    setBtn('sylvangrasp', false, false);
    BGP('sylvangrasp', "-1200% 0");
	}
	if( btn.cd.volcano===true ){
    setBtn('volcano', false, false);
    BGP('volcano', "-1300% 0");
	}
}
g.DruidCooldowns=function(){
  setBtn('starfire', true, true);
  BGP('starfire', "-300% -200%");
	if( btn.d.dronesofdoom===false ){
    setBtn('dronesofdoom', true, true);
    BGP('dronesofdoom', "-400% -200%");
	}
	if( btn.d.druhealing===false ){
    setBtn('druhealing', true, true);
    BGP('druhealing', "-500% -200%");
	}
	if( btn.d.tornado===false ){
    setBtn('tornado', true, true);
    BGP('tornado', "-600% -200%");
	}
	if( btn.d.engulfingroots===false ){
    setBtn('engulfingroots', true, true);
    BGP('engulfingroots', "-700% -200%");
	}
	if( btn.d.driftingdeath===false ){
    setBtn('driftingdeath', true, true);
    BGP('driftingdeath', "-800% -200%");
	}
	if( btn.d.lightningblast===false ){
    setBtn('lightningblast', true, true);
    BGP('lightningblast', "-900% -200%");
	}
	if( btn.d.earthquake===false ){
    setBtn('earthquake', true, true);
    BGP('earthquake', "-1000% -200%");
	}
	if( btn.d.hurricane===false ){
    setBtn('hurricane', true, true);
    BGP('hurricane', "-1100% -200%");
	}
	if( btn.d.sylvangrasp===false ){
    setBtn('sylvangrasp', true, true);
    BGP('sylvangrasp', "-1200% -200%");
	}
	if( btn.d.volcano===false ){
    setBtn('volcano', true, true);
    BGP('volcano', "-1300% -200%");
	}
}
//druid skills
var dru = {
	cost : {
		dronesOfDoom:25,
		greaterHealing:80,
		skinLikeNature:110,
		engulfingRoots:40,
		shieldOfSpikes:75,
		driftingDeath:40,
		spiritOfTheWolf:50,
		chloroplast:75,
		sylvanGrasp:80
	}
};
g.checkDruidSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Druid"){ return; }
	if(btn.d.dronesofdoom===false){
		if(my.mp<dru.cost.dronesOfDoom){ 
        BGP('dronesofdoom', "-400% -300%");
    }else{ 
        BGP('dronesofdoom', "-400% 0%");
    }
	}
	if(btn.d.druhealing===false){
		if(my.mp<dru.cost.greaterHealing){ 
        BGP('druhealing', "-500% -300%");
    }else{ 
        BGP('druhealing', "-500% 0%");
    }
	}
	if(btn.d.skinlikenature===false){
		if(my.mp<dru.cost.skinLikeNature){ 
        BGP('skinlikenature', "-1400% -300%");
    }else{  
        BGP('skinlikenature', "-1400% 0%");
    }
	}
	if(btn.d.engulfingroots===false){
		if(my.mp<dru.cost.engulfingRoots){ 
        BGP('engulfingroots', "-700% -300%");
    }else{ 
        BGP('engulfingroots', "-700% 0%");
    }
	}
	if(btn.d.shieldofspikes===false){
		if(my.mp<dru.cost.shieldOfSpikes){ 
        BGP('shieldofspikes', "-1500% -300%");
    }else{ 
        BGP('shieldofspikes', "-1500% 0%");
    }
	}
	if(btn.d.driftingdeath===false){
		if(my.mp<dru.cost.driftingDeath){ 
        BGP('driftingdeath', "-800% -300%");
    }else{ 
        BGP('driftingdeath', "-800% 0%");
    }
	}
	if(btn.d.sylvangrasp===false){
		if(my.mp<dru.cost.sylvanGrasp){ 
        BGP('sylvangrasp', "-1200% -300%");
    }else{  
        BGP('sylvangrasp', "-1200% 0%");
    }
	}
	if(btn.d.chloroplast===false){
		if(my.mp<dru.cost.chloroplast){ 
        BGP('chloroplast', "-1700% -300%"); 
    }else{ 
        BGP('chloroplast', "-1700% 0%");
    }
	}
	if(btn.d.drusow===false){
		if(my.mp<dru.cost.spiritOfTheWolf){ 
        BGP('drusow', "-1600% -300%");
    }else{ 
        BGP('drusow', "-1600% 0%");
    }
	}
}



g.ClericDoneCD=function(){
  setBtn('smite', false, false);
  BGP('smite', "-300% 0");
	if( btn.cd.soundofforce===true ){
    setBtn('soundofforce', false, false);
    BGP('soundofforce', "-400% 0");
	}
	if( btn.cd.superiorhealing===true ){
    setBtn('superiorhealing', false, false);
    BGP('superiorhealing', "-500% 0");
	}
	if( btn.cd.bindingearth===true ){
    setBtn('bindingearth', false, false);
    BGP('bindingearth', "-600% 0");
	}
	if( btn.cd.expelcorruption===true ){
    setBtn('expelcorruption', false, false);
    BGP('expelcorruption', "-700% 0");
	}
	if( btn.cd.searingrevelation===true ){
    setBtn('searingrevelation', false, false);
    BGP('searingrevelation', "-800% 0");
	}
	if( btn.cd.martyrsblessing===true ){
    setBtn('martyrsblessing', false, false);
    BGP('martyrsblessing', "-900% 0");
	}
	if( btn.cd.guardianangel===true ){
    setBtn('guardianangel', false, false);
    BGP('guardianangel', "-1000% 0");
	}
	if( btn.cd.holywrath===true ){
    setBtn('holywrath', false, false);
    BGP('holywrath', "-1100% 0");
	}
	if( btn.cd.markofjudgement===true ){
    setBtn('markofjudgement', false, false);
    BGP('markofjudgement', "-1200% 0");
	}
	if( btn.cd.benediction===true ){
    setBtn('benediction', false, false);
    BGP('benediction', "-1300% 0");
	}
}
g.ClericCooldowns=function(){
  setBtn('smite', true, true);
  BGP('smite', "-300% -200%");
	if( btn.d.soundofforce===false ){
    setBtn('soundofforce', true, true);
    BGP('soundofforce', "-400% -200%");
	}
	if( btn.d.superiorhealing===false ){
    setBtn('superiorhealing', true, true);
    BGP('superiorhealing', "-500% -200%");
	}
	if( btn.d.bindingearth===false ){
    setBtn('bindingearth', true, true);
    BGP('bindingearth', "-600% -200%");
	}
	if( btn.d.expelcorruption===false ){
    setBtn('expelcorruption', true, true);
    BGP('expelcorruption', "-700% -200%");
	}
	if( btn.d.searingrevelation===false ){
    setBtn('searingrevelation', true, true);
    BGP('searingrevelation', "-800% -200%");
	}
	if( btn.d.martyrsblessing===false ){
    setBtn('martyrsblessing', true, true);
    BGP('martyrsblessing', "-900% -200%");
	}
	if( btn.d.guardianangel===false ){
    setBtn('guardianangel', true, true);
    BGP('guardianangel', "-1000% -200%");
	}
	if( btn.d.holywrath===false ){
    setBtn('holywrath', true, true);
    BGP('holywrath', "-1100% -200%");
	}
	if( btn.d.markofjudgement===false ){
    setBtn('markofjudgement', true, true);
    BGP('markofjudgement', "-1200% -200%");
	}
	if( btn.d.benediction===false ){
    setBtn('benediction', true, true);
    BGP('benediction', "-1300% -200%");
	}
}
//cleric skills
var clr = {
	cost : {
		soundOfForce:30,
		superiorHealing:80,
		resolution:100,
		bindingEarth:50,
		expelCorruption:60,
		armorOfFaith:120,
		divineSanctuary:60,
		guardianAngel:45,
		holyWrath:50,
		symbolOfNaltron:135
	}
};
g.checkClericSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Cleric"){ return; }
	if(btn.d.soundofforce===false){
		if(my.mp<clr.cost.soundOfForce){ 
        BGP('soundofforce', "-400% -300%");
    }else{ 
        BGP('soundofforce', "-400% 0%");
    }
	}
	if(btn.d.superiorhealing===false){
		if(my.mp<clr.cost.superiorHealing){ 
        BGP('superiorhealing', "-500% -300%");
    }else{ 
        BGP('superiorhealing', "-500% 0%");  
    }
	}
	if(btn.d.resolution===false){
		if(my.mp<clr.cost.resolution){ 
        BGP('resolution', "-1400% -300%");
    }else{ 
        BGP('resolution', "-1400% 0%");
    }
	}
	if(btn.d.bindingearth===false){
		if(my.mp<clr.cost.bindingEarth){ 
        BGP('bindingearth', "-600% -300%");
    }else{ 
        BGP('bindingearth', "-600% 0%"); 
    }
	}
	if(btn.d.expelcorruption===false){
		if(my.mp<clr.cost.expelCorruption){ 
        BGP('expelcorruption', "-700% -300%");
    }else{  
        BGP('expelcorruption', "-700% 0%");
    }
	}
	if(btn.d.armoroffaith===false){
		if(my.mp<clr.cost.armorOfFaith){ 
        BGP('armoroffaith', "-1500% -300%");
    }else{ 
        BGP('armoroffaith', "-1500% 0%");
    }
	}
	if(btn.d.divinesanctuary===false){
		if(my.mp<clr.cost.divineSanctuary){ 
        BGP('divinesanctuary', "-1600% -300%");
    }else{ 
        BGP('divinesanctuary', "-1600% 0%");
    }
	}
	if(btn.d.guardianangel===false){
		if(my.mp<clr.cost.guardianAngel){ 
        BGP('guardianangel', "-1000% -300%");
		}else{ 
        BGP('guardianangel', "-1000% 0%");
		}
	}
	if(btn.d.holywrath===false){
		if(my.mp<clr.cost.holyWrath){ 
        BGP('holywrath', "-1100% -300%");
    }else{ 
        BGP('holywrath', "-1100% 0%");
    }
	}
	if(btn.d.symbolofnaltron===false){
		if(my.mp<clr.cost.symbolOfNaltron){ 
        BGP('symbolofnaltron', "-1700% -300%");
    }else{  
        BGP('symbolofnaltron', "-1700% 0%");
    }
	}
}



g.ShamanDoneCD=function(){
  setBtn('froststrike', false, false);
  BGP('froststrike', "-300% 0%");
	if( btn.cd.scourge===true ){
    setBtn('scourge', false, false);
    BGP('scourge', "-400% 0%");
	}
	if( btn.cd.shmhealing===true ){
    setBtn('shmhealing', false, false);
    BGP('shmhealing', "-500% 0%");
	}
	if( btn.cd.togorsinsects===true ){
    setBtn('togorsinsects', false, false);
    BGP('togorsinsects', "-600% 0%");
	}
	if( btn.cd.cannibalize===true ){
    setBtn('cannibalize', false, false);
    BGP('cannibalize', "-700% 0%");
	}
	if( btn.cd.enstill===true ){
    setBtn('enstill', false, false);
    BGP('enstill', "-800% 0%");
	}
	if( btn.cd.poisonnova===true ){
    setBtn('poisonnova', false, false);
    BGP('poisonnova', "-900% 0%");
	}
	if( btn.cd.affliction===true ){
    setBtn('affliction', false, false);
    BGP('affliction', "-1000% 0%");
	}
	if( btn.cd.reclaimblood===true ){
    setBtn('reclaimblood', false, false);
    BGP('reclaimblood', "-1100% 0%");
	}
	if( btn.cd.glacialimpact===true ){
    setBtn('glacialimpact', false, false);
    BGP('glacialimpact', "-1200% 0%");
	}
	if( btn.cd.devouringplague===true ){
    setBtn('devouringplague', false, false);
    BGP('devouringplague', "-1300% 0%");
	}
}
g.ShamanCooldowns=function(){
  setBtn('froststrike', true, true);
  BGP('froststrike', "-300% -200%");
	if( btn.d.scourge===false ){
    setBtn('scourge', true, true);
    BGP('scourge', "-400% -200%");
	}
	if( btn.d.shmhealing===false ){
    setBtn('shmhealing', true, true);
    BGP('shmhealing', "-500% -200%");
	}
	if( btn.d.togorsinsects===false ){
    setBtn('togorsinsects', true, true);
    BGP('togorsinsects', "-600% -200%");
	}
	if( btn.d.cannibalize===false ){
    setBtn('cannibalize', true, true);
    BGP('cannibalize', "-700% -200%");
	}
	if( btn.d.enstill===false ){
    setBtn('enstill', true, true);
    BGP('enstill', "-800% -200%");
	}
	if( btn.d.poisonnova===false ){
    setBtn('poisonnova', true, true);
    BGP('poisonnova', "-900% -200%");
	}
	if( btn.d.affliction===false ){
    setBtn('affliction', true, true);
    BGP('affliction', "-1000% -200%");
	}
	if( btn.d.reclaimblood===false ){
    setBtn('reclaimblood', true, true);
    BGP('reclaimblood', "-1100% -200%");
	}
	if( btn.d.glacialimpact===false ){
    setBtn('glacialimpact', true, true);
    BGP('glacialimpact', "-1200% -200%");
	}
	if( btn.d.devouringplague===false ){
    setBtn('devouringplague', true, true);
    BGP('devouringplague', "-1300% -200%");
	}
}
//shaman skills
var shm = {
	cost : {
		scourge:25,
		greaterHealing:80,
		callOfTheAncients:100,
		guardianSpirit:125,
		togorsInsects:60,
		poisonNova:40,
		spiritOfTheWolf:50,
		affliction:40,
		reclaimBlood:70,
		glacialImpact:45,
		talismanOfAltuna:140,
		devouringPlague:80,
		enstill:50
	}
};
g.checkShamanSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Shaman"){ return; }
	if(btn.d.scourge===false){
		if(my.mp<shm.cost.scourge){ 
        BGP('scourge', "-400% -300%");
    }else{ 
        BGP('scourge', "-400% 0%");
    }
	}
	if(btn.d.shmhealing===false){
		if(my.mp<shm.cost.greaterHealing){ 
        BGP('shmhealing', "-500% -300%");
    }else{ 
        BGP('shmhealing', "-500% 0%");
    }
	}
	if(btn.d.togorsinsects===false){
		if(my.mp<shm.cost.togorsInsects){  
        BGP('togorsinsects', "-600% -300%");
    }else{ 
        BGP('togorsinsects', "-600% 0%");
    }
	}
	if(btn.d.enstill===false){
		if(my.mp<shm.cost.enstill){ 
        BGP('enstill', "-800% -300%");
    }else{ 
        BGP('enstill', "-800% 0%");
    }
	}
	if(btn.d.poisonnova===false){
		if(my.mp<shm.cost.poisonNova){ 
        BGP('poisonnova', "-900% -300%");
    }else{ 
        BGP('poisonnova', "-900% 0%");
    }
	}
	if(btn.d.affliction===false){
		if(my.mp<shm.cost.affliction){ 
        BGP('affliction', "-1000% -300%");
    }else{ 
        BGP('affliction', "-1000% 0%");
    }
	}
	if(btn.d.reclaimblood===false){
		if(my.mp<shm.cost.reclaimBlood){ 
        BGP('reclaimblood', "-1100% -300%");
    }else{ 
        BGP('reclaimblood', "-1100% 0%");
    }
	}
	if(btn.d.glacialimpact===false){
		if(my.mp<shm.cost.glacialImpact){ 
        BGP('glacialimpact', "-1200% -300%");
    }else{ 
        BGP('glacialimpact', "-1200% 0%");
    }
	}
	if(btn.d.devouringplague===false){
		if(my.mp<shm.cost.devouringPlague){ 
        BGP('devouringplague', "-1300% -300%");
    }else{ 
        BGP('devouringplague', "-1300% 0%");
    }
	}
	if(btn.d.calloftheancients===false){
		if(my.mp<shm.cost.callOfTheAncients){ 
        BGP('calloftheancients', "-1400% -300%");
		}else{ 
        BGP('calloftheancients', "-1400% 0%");
		}
	}
	if(g.petAlive===false){
		if(btn.d.guardianspirit===false){
			if(my.mp<shm.cost.guardianSpirit){ 
        BGP('guardianspirit', "-1500% -300%"); 
      }else{ 
        BGP('guardianspirit', "-1500% 0%"); 
      }
		}
	}
	if(btn.d.shmsow===false){
		if(my.mp<shm.cost.spiritOfTheWolf){  
        BGP('shmsow', "-1600% -300%");
    }else{ 
        BGP('shmsow', "-1600% 0%");
    }
	}
	if(btn.d.talismanofaltuna===false){
		if(my.mp<shm.cost.talismanOfAltuna){ 
        BGP('talismanofaltuna', "-1700% -300%");
    }else{ 
        BGP('talismanofaltuna', "-1700% 0%");
    }
	}
}



g.NecromancerDoneCD=function(){
  setBtn('bonespirit', false, false);
  BGP('bonespirit', "-300% 0%");
	if( btn.cd.cascadingdarkness===true ){
    setBtn('cascadingdarkness', false, false);
    BGP('cascadingdarkness', "-400% 0%");
	}
	if( btn.cd.invokefear===true ){
    setBtn('invokefear', false, false);
    BGP('invokefear', "-500% 0%");
	}
	if( btn.cd.drainsoul===true ){
    setBtn('drainsoul', false, false);
    BGP('drainsoul', "-600% 0%");
	}
	if( btn.cd.feigndeath===true ){
    setBtn('feigndeath', false, false);
    BGP('feigndeath', "-700% 0%");
	}
	if( btn.cd.augmentdeath===true ){
    setBtn('augmentdeath', false, false);
    BGP('augmentdeath', "-800% 0%");
	}
	if( btn.cd.igniteblood===true ){
    setBtn('igniteblood', false, false);
    BGP('igniteblood', "-900% 0%");
	}
	if( btn.cd.corpseexplosion===true ){
    setBtn('corpseexplosion', false, false);
    BGP('corpseexplosion', "-1000% 0%");
	}
	if( btn.cd.bondofdeath===true ){
    setBtn('bondofdeath', false, false);
    BGP('bondofdeath', "-1100% 0%");
	}
	if( btn.cd.diamondskin===true ){
    setBtn('diamondskin', false, false);
    BGP('diamondskin', "-1200% 0%");
	}
	if( btn.cd.asystole===true ){
    setBtn('asystole', false, false);
    BGP('asystole', "-1300% 0%");
	}
	if( btn.cd.detonatesoul===true ){
    setBtn('detonatesoul', false, false);
    BGP('detonatesoul', "-1400% 0%");
	}
	if( btn.cd.howlingterror===true ){
    setBtn('howlingterror', false, false);
    BGP('howlingterror', "-1500% 0%");
	}
}
g.NecromancerCooldowns=function(){
  setBtn('bonespirit', true, true);
  BGP('bonespirit', "-300% -200%");
	if( btn.d.cascadingdarkness===false ){
    setBtn('cascadingdarkness', true, true);
    BGP('cascadingdarkness', "-400% -200%");
	}
	if( btn.d.invokefear===false ){
    setBtn('invokefear', true, true);
    BGP('invokefear', "-500% -200%");
	}
	if( btn.d.drainsoul===false ){
    setBtn('drainsoul', true, true);
    BGP('drainsoul', "-600% -200%");
	}
	if( btn.d.feigndeath===false ){
    setBtn('feigndeath', true, true);
    BGP('feigndeath', "-700% -200%");
	}
	if( btn.d.augmentdeath===false ){
    setBtn('augmentdeath', true, true);
    BGP('augmentdeath', "-800% -200%");
	}
	if( btn.d.igniteblood===false ){
    setBtn('igniteblood', true, true);
    BGP('igniteblood', "-900% -200%");
	}
	if( btn.d.corpseexplosion===false ){
    setBtn('corpseexplosion', true, true);
    BGP('corpseexplosion', "-1000% -200%");
	}
	if( btn.d.bondofdeath===false ){
    setBtn('bondofdeath', true, true);
    BGP('bondofdeath', "-1100% -200%");
	}
	if( btn.d.diamondskin===false ){
    setBtn('diamondskin', true, true);
    BGP('diamondskin', "-1200% -200%");
	}
	if( btn.d.asystole===false ){
    setBtn('asystole', true, true);
    BGP('asystole', "-1300% -200%");
	}
	if( btn.d.detonatesoul===false ){
    setBtn('detonatesoul', true, true);
    BGP('detonatesoul', "-1400% -200%");
	}
	if( btn.d.howlingterror===false ){
    setBtn('howlingterror', true, true);
    BGP('howlingterror', "-1500% -200%");
	}
}
//necromancer skills
var nec = {
	cost : {
		invokeDeath:100,
		cascadingDarkness:25,
		invokeFear:75,
		drainSoul:90,
		archShielding:120,
		feignDeath:35,
		augmentDeath:50,
		igniteBlood:35,
		corpseExplosion:25,
		bondOfDeath:65,
		diamondSkin:140,
		howlingTerror:60,
		detonateSoul:35
	}
};
g.checkNecromancerSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Necromancer"){ return; }
	if(btn.d.cascadingdarkness===false){
		if(my.mp<nec.cost.cascadingDarkness){ 
          BGP('cascadingdarkness', "-400% -300%");
    }else{ 
          BGP('cascadingdarkness', "-400% 0%");
    }
	}
  BGP('corpseexplosion', "-1000% -300%");
	if(corpseExplosionStatus===true){
		if(my.mp<nec.cost.corpseExplosion){
			//?
		}else{
          BGP('corpseexplosion', "-1000% 0%");
		}
	}
	if(btn.d.invokefear===false){
		if(my.mp<nec.cost.invokeFear){ 
          BGP('invokefear', "-500% -300%");
    }else{  
          BGP('invokefear', "-500% 0%");
    }
	}
	if(btn.d.drainsoul===false){
		if(my.mp<nec.cost.drainSoul){ 
          BGP('drainsoul', "-600% -300%");
    }else{ 
          BGP('drainsoul', "-600% 0%");
    }
	}
	if(btn.d.archshielding===false){
		if(my.mp<nec.cost.archShielding){ 
          BGP('archshielding', "-1700% -300%");
    }else{  
          BGP('archshielding', "-1700% 0%");
    }
	}
	if(btn.d.feigndeath===false){
		if(my.mp<nec.cost.feignDeath){ 
          BGP('feigndeath', "-700% -300%");
    }else{ 
          BGP('feigndeath', "-700% 0%"); 
    }
	}
	if(btn.d.igniteblood===false){
		if(my.mp<nec.cost.igniteBlood){ 
          BGP('igniteblood', "-900% -300%");
    }else{ 
          BGP('igniteblood', "-900% 0%");  
    }
	}
	if(btn.d.bondofdeath===false){
		if(my.mp<nec.cost.bondOfDeath){ 
          BGP('bondofdeath', "-1100% -300%");
    }else{ 
          BGP('bondofdeath', "-1100% 0%");
    }
	}
	if(btn.d.detonatesoul===false){
		if(my.mp<nec.cost.detonateSoul){ 
          BGP('detonatesoul', "-1400% -300%");
    }else{  
          BGP('detonatesoul', "-1400% 0%");
    }
	}
	if(btn.d.howlingterror===false){
		if(my.mp<nec.cost.howlingTerror){ 
          BGP('howlingterror', "-1500% -300%");
    }else{ 
          BGP('howlingterror', "-1500% 0%");
    }
	}
	if(g.petAlive===false){
		if(btn.d.invokedeath===false){
			if(my.mp<nec.cost.invokeDeath){ 
          BGP('invokedeath', "-1600% -300%");
      }
			if(my.mp>=nec.cost.invokeDeath||g.petAlive===true){ 
          BGP('invokedeath', "-1600% 0%");
      }
		}
	}
}



g.EnchanterDoneCD=function(){
  setBtn('chaosflux', false, false);
  BGP('chaosflux', "-300% 0%");
	if( btn.cd.gaspingembrace===true ){
    setBtn('gaspingembrace', false, false);
    BGP('gaspingembrace', "-400% 0%");
	}
	if( btn.cd.cajolingwhispers===true ){
    setBtn('cajolingwhispers', false, false);
    BGP('cajolingwhispers', "-500% 0%");
	}
	if( btn.cd.colorshift===true ){
    setBtn('colorshift', false, false);
    BGP('colorshift', "-600% 0%");
	}
	if( btn.cd.mesmerize===true ){
    setBtn('mesmerize', false, false);
    BGP('mesmerize', "-700% 0%");
	}
	if( btn.cd.shiftlessdeeds===true ){
    setBtn('shiftlessdeeds', false, false);
    BGP('shiftlessdeeds', "-800% 0%");
	}
	if( btn.cd.alacrity===true ){
    setBtn('alacrity', false, false);
    BGP('alacrity', "-900% 0%");
	}
	if( btn.cd.gravityflux===true ){
    setBtn('gravityflux', false, false);
    BGP('gravityflux', "-1000% 0%");
	}
	if( btn.cd.mysticrune===true ){
    setBtn('mysticrune', false, false);
    BGP('mysticrune', "-1100% 0%");
	}
	if( btn.cd.tashania===true ){
    setBtn('tashania', false, false);
    BGP('tashania', "-1200% 0%");
	}
	if( btn.cd.enthrall===true ){
    setBtn('enthrall', false, false);
    BGP('enthrall', "-1300% 0%");
	}
}
g.EnchanterCooldowns=function(){
  setBtn('chaosflux', true, true);
  BGP('chaosflux', "-300% -200%");
	if( btn.d.gaspingembrace===false ){
    setBtn('gaspingembrace', true, true);
    BGP('gaspingembrace', "-400% -200%");
	}
	if( btn.d.cajolingwhispers===false ){
    setBtn('cajolingwhispers', true, true);
    BGP('cajolingwhispers', "-500% -200%");
	}
	if( btn.d.colorshift===false ){
    setBtn('colorshift', true, true);
    BGP('colorshift', "-600% -200%");
	}
	if( btn.d.mesmerize===false ){
    setBtn('mesmerize', true, true);
    BGP('mesmerize', "-700% -200%");
	}
	if( btn.d.shiftlessdeeds===false ){
    setBtn('shiftlessdeeds', true, true);
    BGP('shiftlessdeeds', "-800% -200%");
	}
	if( btn.d.alacrity===false ){
    setBtn('alacrity', true, true);
    BGP('alacrity', "-900% -200%");
	}
	if( btn.d.gravityflux===false ){
    setBtn('gravityflux', true, true);
    BGP('gravityflux', "-1000% -200%");
	}
	if( btn.d.mysticrune===false ){
    setBtn('mysticrune', true, true);
    BGP('mysticrune', "-1100% -200%");
	}
	if( btn.d.tashania===false ){
    setBtn('tashania', true, true);
    BGP('tashania', "-1200% -200%");
	}
	if( btn.d.enthrall===false ){
    setBtn('enthrall', true, true);
    BGP('enthrall', "-1300% -200%");
	}
}
//enchanter skills
var enc = {
	cost : {
		gaspingEmbrace:25,
		cajolingWhispers:60,
		colorShift:35,
		mesmerize:30,
		discordantBarrier:120,
		shiftlessDeeds:65,
		enchantWeapon:80,
		adorningGrace:60,
		alacrity:60,
		gravityFlux:50,
		mysticRune:95,
		tashania:25,
		enthrall:40,
		clarity:50
	}
};
g.checkEnchanterSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Enchanter"){ return; }
	if(btn.d.gaspingembrace===false){
		if(my.mp<enc.cost.gaspingEmbrace){ 
        BGP('gaspingembrace', "-400% -300%");  
    }else{ 
        BGP('gaspingembrace', "-400% 0%");  
    }
	}
	if(btn.d.cajolingwhispers===false){
		if(my.mp<enc.cost.cajolingWhispers){ 
        BGP('cajolingwhispers', "-500% -300%");  
    }else{ 
        BGP('cajolingwhispers', "-500% 0%");  
    }
	}
	if(btn.d.colorshift===false){
		if(my.mp<enc.cost.colorShift){ 
        BGP('colorshift', "-600% -300%");  
    }else{ 
        BGP('colorshift', "-600% 0%");  
    }
	}
	if(btn.d.mesmerize===false){
		if(my.mp<enc.cost.mesmerize){  
        BGP('mesmerize', "-700% -300%");  
    }else{ 
        BGP('mesmerize', "-700% 0%");  
    }
	}
	if(btn.d.discordantbarrier===false){
		if(my.mp<enc.cost.discordantBarrier){ 
        BGP('discordantbarrier', "-1400% -300%");  
    }else{  
        BGP('discordantbarrier', "-1400% 0%");  
    }
	}
	if(btn.d.shiftlessdeeds===false){
		if(my.mp<enc.cost.shiftlessDeeds){ 
        BGP('shiftlessdeeds', "-800% -300%");  
    }else{ 
        BGP('shiftlessdeeds', "-800% 0%");  
    }
	}
	if(btn.d.enchantweapon===false){
		if(my.mp<enc.cost.enchantWeapon){ 
        BGP('enchantweapon', "-1500% -300%");  
    }else{ 
        BGP('enchantweapon', "-1500% 0%");  
    }
	}
	if(btn.d.adorninggrace===false){
		if(my.mp<enc.cost.adorningGrace){  
        BGP('adorninggrace', "-1600% -300%");  
    }else{ 
        BGP('adorninggrace', "-1600% 0%");  
    }
	}
	if(btn.d.alacrity===false){
		if(my.mp<enc.cost.alacrity){ 
        BGP('alacrity', "-900% -300%");  
    }else{ 
        BGP('alacrity', "-900% 0%");  
    }
	}
	if(btn.d.gravityflux===false){
		if(my.mp<enc.cost.gravityFlux){ 
        BGP('gravityflux', "-1000% -300%");  
    }else{ 
        BGP('gravityflux', "-1000% 0%");  
    }
	}
	if(btn.d.mysticrune===false){
		if(my.mp<enc.cost.mysticRune){ 
        BGP('mysticrune', "-1100% -300%");  
    }else{ 
        BGP('mysticrune', "-1100% 0%");  
    }
	}
	if(btn.d.tashania===false){
		if(my.mp<enc.cost.tashania){ 
        BGP('tashania', "-1200% -300%");  
    }else{ 
        BGP('tashania', "-1200% 0%");  
    }
	}
	if(btn.d.clarity===false){
		if(my.mp<enc.cost.clarity){ 
        BGP('clarity', "-1700% -300%");  
    }else{ 
        BGP('clarity', "-1700% 0%");  
    }
	}
	if(btn.d.enthrall===false){
		if(my.mp<enc.cost.enthrall){ 
        BGP('enthrall', "-1300% -300%");  
    }else{ 
        BGP('enthrall', "-1300% 0%");  
    }
	}
}



g.MagicianDoneCD=function(){
  setBtn('lavabolt', false, false);
  BGP('lavabolt', "-300% 0%");
	if( btn.cd.firestorm===true ){
    setBtn('firestorm', false, false);
    BGP('firestorm', "-400% 0%");
	}
	if( btn.cd.frozenorb===true ){
    setBtn('frozenorb', false, false);
    BGP('frozenorb', "-500% 0%");
	}
	if( btn.cd.burnout===true ){
    setBtn('burnout', false, false);
    BGP('burnout', "-600% 0%");
	}
	if( btn.cd.manashield===true ){
    setBtn('manashield', false, false);
    BGP('manashield', "-700% 0%");
	}
	if( btn.cd.psionicstorm===true ){
    setBtn('psionicstorm', false, false);
    BGP('psionicstorm', "-800% 0%");
	}
	if( btn.cd.reclaimelements===true ){
    setBtn('reclaimelements', false, false);
    BGP('reclaimelements', "-900% 0%");
	}
	if( btn.cd.elementalfury===true ){
    setBtn('elementalfury', false, false);
    BGP('elementalfury', "-1000% 0%");
	}
	if( btn.cd.armageddon===true ){
    setBtn('armageddon', false, false);
    BGP('armageddon', "-1100% 0%");
	}
	if( btn.cd.stasisfield===true ){
    setBtn('stasisfield', false, false);
    BGP('stasisfield', "-1200% 0%");
	}
	if( btn.cd.alteredstate===true ){
    setBtn('alteredstate', false, false);
    BGP('alteredstate', "-1300% 0%");
	}
}
g.MagicianCooldowns=function(){
  setBtn('lavabolt', true, true);
  BGP('lavabolt', "-300% -200%");
	if( btn.d.firestorm===false ){
    setBtn('firestorm', true, true);
    BGP('firestorm', "-400% -200%");
	}
	if( btn.d.frozenorb===false ){
    setBtn('frozenorb', true, true);
    BGP('frozenorb', "-500% -200%");
	}
	if( btn.d.burnout===false ){
    setBtn('burnout', true, true);
    BGP('burnout', "-600% -200%");
	}
	if( btn.d.manashield===false ){
    setBtn('manashield', true, true);
    BGP('manashield', "-700% -200%");
	}
	if( btn.d.psionicstorm===false ){
    setBtn('psionicstorm', true, true);
    BGP('psionicstorm', "-800% -200%");
	}
	if( btn.d.reclaimelements===false ){
    setBtn('reclaimelements', true, true);
    BGP('reclaimelements', "-900% -200%");
	}
	if( btn.d.elementalfury===false ){
    setBtn('elementalfury', true, true);
    BGP('elementalfury', "-1000% -200%");
	}
	if( btn.d.armageddon===false ){
    setBtn('armageddon', true, true);
    BGP('armageddon', "-1100% -200%");
	}
	if( btn.d.stasisfield===false ){
    setBtn('stasisfield', true, true);
    BGP('stasisfield', "-1200% -200%");
	}
	if( btn.d.alteredstate===false ){
    setBtn('alteredstate', true, true);
    BGP('alteredstate', "-1300% -200%");
	}
}
//magician skills
var mag = {
	cost : {
		elemental:100,
		shieldOfLava:80,
		firestorm:25,
		phantomPlate:120,
		frozenOrb:40,
		elementalArmor:75,
		psionicStorm:45,
		reclaimElements:90,
		stasisField:60,
		armageddon:60
	}
};
g.checkMagicianSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Magician"){ return; }
	if(petImage!=="an earth elemental pet"){
		if(my.mp<mag.cost.elemental){
        BGP('earthelemental', "-200% -300%");
		}else{
        BGP('earthelemental', "-1700% 0%");
		}
	}
	if(petImage!=="an air elemental pet"){
		if(my.mp<mag.cost.elemental){
        BGP('airelemental', "-200% -300%");
		}else{
        BGP('airelemental', "-1700% -100%");
		}
	}
	if(petImage!=="a fire elemental pet"){
		if(my.mp<mag.cost.elemental){
        BGP('fireelemental', "-200% -300%");
		}else{
        BGP('fireelemental', "-1700% -200%");
		}
	}
	if(petImage!=="a frost elemental pet"){
		if(my.mp<mag.cost.elemental){
        BGP('frostelemental', "-200% -300%");
		}else{
        BGP('frostelemental', "-1700% -300%");
		}
	}
	if(btn.d.shieldoflava===false){
		if(my.mp<mag.cost.shieldOfLava){ 
        BGP('shieldoflava', "-1400% -300%"); 
    }else{ 
        BGP('shieldoflava', "-1400% 0%");
    }
	}
	if(btn.d.firestorm===false){
		if(my.mp<mag.cost.firestorm){ 
        BGP('firestorm', "-400% -300%");
    }else{ 
        BGP('firestorm', "-400% 0%");
    }
	}
	if(btn.d.phantomplate===false){
		if(my.mp<mag.cost.phantomPlate){ 
        BGP('phantomplate', "-1500% -300%");
    }else{ 
        BGP('phantomplate', "-1500% 0%");
    }
	}
	if(btn.d.frozenorb===false){
		if(my.mp<mag.cost.frozenOrb){ 
        BGP('frozenorb', "-500% -300%");
    }else{ 
        BGP('frozenorb', "-500% 0%");
    }
	}
	if(btn.d.elementalarmor===false){
		if(my.mp<mag.cost.elementalArmor){ 
        BGP('elementalarmor', "-1600% -300%");
    }else{ 
        BGP('elementalarmor', "-1600% 0%");
    }
	}
	if(btn.d.psionicstorm===false){
		if(my.mp<mag.cost.psionicStorm){ 
        BGP('psionicstorm', "-800% -300%");
    }else{ 
        BGP('psionicstorm', "-800% 0%");
    }
	}
	if(btn.d.reclaimelements===false){
		if(my.mp<mag.cost.reclaimElements){ 
        BGP('reclaimelements', "-900% -300%");
    }else{ 
        BGP('reclaimelements', "-900% 0%");
    }
	}
	if(btn.d.armageddon===false){
		if(my.mp<mag.cost.armageddon){ 
        BGP('armageddon', "-1100% -300%");
    }else{ 
        BGP('armageddon', "-1100% 0%");
    }
	}
	if(btn.d.stasisfield===false){
		if(my.mp<mag.cost.stasisField){ 
        BGP('stasisfield', "-1200% -300%");
    }else{ 
        BGP('stasisfield', "-1200% 0%");
    }
	}
}



g.WizardDoneCD=function(){
  setBtn('icebolt', false, false);
  BGP('icebolt', "-300% 0%");
	if( btn.cd.chargedbolts===true ){
    setBtn('chargedbolts', false, false);
    BGP('chargedbolts', "-400% 0%");
	}
	if( btn.cd.frostnova===true ){
    setBtn('frostnova', false, false);
    BGP('frostnova', "-500% 0%");
	}
	if( btn.cd.magicmissiles===true ){
    setBtn('magicmissiles', false, false);
    BGP('magicmissiles', "-600% 0%");
	}
	if( btn.cd.fireball===true ){
    setBtn('fireball', false, false);
    BGP('fireball', "-700% 0%");
	}
	if( btn.cd.deepfreeze===true ){
    setBtn('deepfreeze', false, false);
    BGP('deepfreeze', "-800% 0%");
	}
	if( btn.cd.chainlightning===true ){
    setBtn('chainlightning', false, false);
    BGP('chainlightning', "-900% 0%");
	}
	if( btn.cd.glacialspike===true ){
    setBtn('glacialspike', false, false);
    BGP('glacialspike', "-1000% 0%");
	}
	if( btn.cd.iceblock===true ){
    setBtn('iceblock', false, false);
    BGP('iceblock', "-1100% 0%");
	}
	if( btn.cd.icecomet===true ){
    setBtn('icecomet', false, false);
    BGP('icecomet', "-1200% 0%");
	}
	if( btn.cd.counterspell===true ){
    setBtn('counterspell', false, false);
    BGP('counterspell', "-1300% 0%");
	}
	if( btn.cd.harnessEther===true ){
    setBtn('harnessEther', false, false);
    BGP('harnessEther', "-1400% 0%");
	}
	if( btn.cd.meteor===true ){
    setBtn('meteor', false, false);
    BGP('meteor', "-1500% 0%");
	}
	if( btn.cd.mirrorimages===true ){
    setBtn('mirrorimages', false, false);
    BGP('mirrorimages', "-1600% 0%");
	}
}
g.WizardCooldowns=function(){
  setBtn('icebolt', true, true);
  BGP('icebolt', "-300% -200%");
	if( btn.d.chargedbolts===false ){
    setBtn('chargedbolts', true, true);
    BGP('chargedbolts', "-400% -200%");
	}
	if( btn.d.frostnova===false ){
    setBtn('frostnova', true, true);
    BGP('frostnova', "-500% -200%");
	}
	if( btn.d.magicmissiles===false ){
    setBtn('magicmissiles', true, true);
    BGP('magicmissiles', "-600% -200%");
	}
	if( btn.d.fireball===false ){
    setBtn('fireball', true, true);
    BGP('fireball', "-700% -200%");
	}
	if( btn.d.deepfreeze===false ){
    setBtn('deepfreeze', true, true);
    BGP('deepfreeze', "-800% -200%");
	}
	if( btn.d.chainlightning===false ){
    setBtn('chainlightning', true, true);
    BGP('chainlightning', "-900% -200%");
	}
	if( btn.d.glacialspike===false ){
    setBtn('glacialspike', true, true);
    BGP('glacialspike', "-1000% -200%");
	}
	if( btn.d.iceblock===false ){
    setBtn('iceblock', true, true);
    BGP('iceblock', "-1100% -200%");
	}
	if( btn.d.icecomet===false ){
    setBtn('icecomet', true, true);
    BGP('icecomet', "-1200% -200%");
	}
	if( btn.d.counterspell===false ){
    setBtn('counterspell', true, true);
    BGP('counterspell', "-1300% -200%");
	}
	if( btn.d.harnessEther===false ){
    setBtn('harnessEther', true, true);
    BGP('harnessEther', "-1400% -200%");
	}
	if( btn.d.meteor===false ){
    setBtn('meteor', true, true);
    BGP('meteor', "-1500% -200%");
	}
	if( btn.d.mirrorimages===false ){
    setBtn('mirrorimages', true, true);
    BGP('mirrorimages', "-1600% -200%");
	}
}
//wizard skills
var wiz = {
	cost : {
		chargedBolts:25,
		frostNova:25,
		magicMissiles:20,
		viziersShielding:110,
		fireball:40,
		deepFreeze:50,
		chainLightning:30,
		glacialSpike:40,
		counterspell:20,
		harnessEther:30
	}
};
g.checkWizardSkills=function(){
	if(fearStatus===0||bashStatus===0||my.job!=="Wizard"){ return; }
	if(btn.d.chargedbolts===false){
		if(my.mp<wiz.cost.chargedBolts){ 
        BGP('chargedbolts', "-400% -300%");
    }else{ 
        BGP('chargedbolts', "-400% 0%"); 
    }
	}
	if(btn.d.frostnova===false){
		if(my.mp<wiz.cost.frostNova){ 
        BGP('frostnova', "-500% -300%");
    }else{ 
        BGP('frostnova', "-500% 0%"); 
    }
	}
	if(btn.d.magicmissiles===false){
		if(my.mp<wiz.cost.magicMissiles){ 
        BGP('magicmissiles', "-600% -300%");
    }else{ 
        BGP('magicmissiles', "-600% 0%"); 
    }
	}
	if(btn.d.viziersshielding===false){
		if(my.mp<wiz.cost.viziersShielding){ 
        BGP('viziersshielding', "-1700% -300%");
    }else{ 
        BGP('viziersshielding', "-1700% 0%"); 
    }
	}
	if(btn.d.fireball===false){
		if(my.mp<wiz.cost.fireball){  
        BGP('fireball', "-700% -300%");
    }else{ 
        BGP('fireball', "-700% 0%"); 
    }
	}
	if(btn.d.deepfreeze===false){
		if(my.mp<wiz.cost.deepFreeze){ 
        BGP('deepfreeze', "-800% -300%");
    }else{ 
        BGP('deepfreeze', "-800% 0%"); 
    }
	}
	if(btn.d.chainlightning===false){
		if(my.mp<wiz.cost.chainLightning){ 
        BGP('chainlightning', "-900% -300%");
    }else{ 
        BGP('chainlightning', "-900% 0%"); 
    }
	}
	if(btn.d.glacialspike===false){
		if(my.mp<wiz.cost.glacialSpike){ 
        BGP('glacialspike', "-1000% -300%");
    }else{ 
        BGP('glacialspike', "-1000% 0%"); 
    }
	}
	if(btn.d.counterspell===false){
		if(my.mp<wiz.cost.counterspell){ 
        BGP('counterspell', "-1300% -300%");
    }else{ 
        BGP('counterspell', "-1300% 0%"); 
    }
	}
	if(btn.d.harnessEther===false){
		if(my.mp<wiz.cost.harnessEther){ 
        BGP('harnessEther', "-1400% -300%");
    }else{ 
        BGP('harnessEther', "-1400% 0%"); 
    }
	}
}

function targetRequired(){
	addMonster();
}
function warriorKickReady(){
	if(D.getElementById('warriorkickId').textContent!==''){return;}
	if(castingGlobal==0){return;}
	if(bashStatus===0||fearStatus===0){ return; }
    setD('warriorkickId', false);
    BGP('warriorkickId', "-300% 0");
	g.checkWarriorSkills();
	refreshKick.kill();
}
function warriorKickTimer(){
	refreshKick = T.to('', .1, {repeat:-1, onRepeat:warriorKickReady});
}
function warriorKick(){
	if(btn.d.warriorkickId===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('warriorkickId', true);
    BGP('warriorkickId', "-300% -100%");
	T.delayedCall(8, warriorKickTimer);
	timerTick(D.getElementById('warriorkickId'),8000/1000,'warriorkickId');
	beginGlobalCooldown();
	var dam = minMax((attackFunct()/6)*(1+P.eq[11].armor/80),.7);
	var Slot = TGT;
	var success = 40+(talent1()*3);
	if(M.random()*100<success){
		interruptTarget(Slot);
	}
	if(GLB.videoSetting==="High"){ animateKick(Slot); }
	g.myPhysicalDamage(dam, Slot, "Kick");
	if(my.talent1>=20){
		mob[Slot].mp-=1;
		if(mob[Slot].mp<0){ mob[Slot].mp=0; }
	}
}
$(function(){
	$NG.window3.on('mouseenter','#warriorkickId',function(){
		var CD = "8".fontcolor("#ff0000");
		var inter = 40+(my.talent1*3);
		if(inter>100){ inter=100; }
		var a=TTphy((attackFunct()/6)*(1+P.eq[11].armor/80), .7, "Kick");
		NG.tooltipname.innerHTML = "Kick";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Deliver a swift kick causing "+a[0]+" to "+a[1]+" physical damage. Your boots' armor value affects Kick's damage.<br><br>"+
		"Effect: "+inter+"% chance to interrupt your target's spell.";
	});
});
function remove(e){ //GS object
	x=e.target
	try{
		x.parentNode.removeChild(x);
	}catch(err){
		//Chat(err.message, 2);
	}
}
function Remove(e){ //element
	try{
		e.parentNode.removeChild(e);
	}catch(err){
		//Chat(err.message, 2);
	}
}
function animateFlyingBlood(Slot, total){
	function doit(){
		var p4 = can('bloodSpray', 7, x2, y2, 25, 25, true);
		var goX = x2+M.random()*630-315;
		var goY = M.random()*55+653;
		T.to(p4, .2, {
			y:goY,
			x:goX
		});
		T.to(p4, 8+(M.random()*(6)), {
			scaleX:6,
			scaleY:2,
			alpha:0,
			onComplete:function(){
				cRem(7, p4);
			}
		});
	}
	if(GLB.videoSetting==="High"){ 
		if(Slot===undefined){ Slot = TGT; }
		if(!total){ total = 1; }
		var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
		var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-50);
		for(var i=0;i<total;i++){
			doit();
		}
	}
}
function animatePoisonDrop(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var goX = M.random()*(100)-50;
	var goY = M.random()*(15)+658;
	var p4 = can('poisonSpray', 7, x2, y2, 25, 25, true);
	T.to(p4, .3, {
		y:goY,
		x:x2+goX,
		ease:ez.sin,
		onComplete:function(){
			T.to(p4, 6+M.random()*(9), {
				scaleX:3,
				scaleY:1.5,
				alpha:0,
				onComplete:function(){
					cRem(7, p4);
				}
			});
		}
	});
}
function animateBloodDrop(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var goX = M.random()*(100)-50;
	var goY = M.random()*(15)+658;
	var p4 = can('bloodSpray', 7, x2, y2, 25, 25, true);
	T.to(p4, .3, {
		y:goY,
		x:x2+goX,
		ease:ez.sin,
		onComplete:function(){
			T.to(p4, 6+M.random()*(9), {
				scaleX:6,
				scaleY:2,
				alpha:0,
				onComplete:function(){
					cRem(7, p4);
				}
			});
		}
	});
}
function IMG(x,y,w,h,img){
	var H1=D.createElement('img');
	H1.style.cssText = "position:absolute; left:"+x+"px; top:"+y+"px; width:"+w+"px; height:"+h+"px;";
	H1.src="/images1/"+img+".png";
	return H1;
}
function DIV(x,y,w,h){
	var H1=D.createElement('div');
	H1.style.cssText = "position:absolute; left:"+x+"px; top:"+y+"px; width:"+w+"px; height:"+h+"px; overflow: hidden;";
	return H1;
}
function animateKick(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+200);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY+200);
	var e1 = can('kick', 5, x2, y2, 0, 0);
	T.to(e1, .125, {
		scaleX:1,
		scaleY:1,
		x:x2-225,
		y:y2-225,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .125, {
				alpha:.25,
				x:"-=125",
				y:"-=125",
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
}
function slamReady(){
	if(D.getElementById('slamId').textContent!==''){return;}
	if(castingGlobal==0){return;} 
	if(bashStatus===0||fearStatus===0){ return; }
    setD('slamId', false);
    BGP('slamId', "-400% 0%");
	g.checkWarriorSkills();
	refreshSlam.kill();
}
function slamTimer(){
	refreshSlam = T.to('', .1, {repeat:-1, onRepeat:slamReady});
}
function dauntlessReduction(){
	if(g.difficulty===1){
		return .8;
	}else if(g.difficulty===2){
		return .66;
	}else{
		return .5;
	}
}
function freezeReduction(){
	if(g.difficulty===1){
		return 1;
	}else if(g.difficulty===2){
		return .8;
	}else{
		return .6;
	}
}
function stunTarget(Slot, d, spriteX, spriteY, skillName){
	if(mob[Slot].name===""){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	if(!spriteY){ spriteY=0; }
	if(!skillName){ skillName="Stun"; }
	stopMob(Slot);
	setMobOpacity(Slot);
	mob[Slot].stunStatus=true;
	if(mob[Slot].dauntless){ d*=dauntlessReduction(); }
	mob[Slot].stunTimer.kill();
	mob[Slot].stunTimer = T.delayedCall(d/1000, function(){
		mob[Slot].stunStatus=false;
	});
	Chat((mob[Slot].name+" has been stunned."));
	interruptTarget(Slot);
	animateStun(Slot, d, 0, true);
	if(spriteX<0){
		addMobBuffIcon(skillName,Slot,"stunIcon",d,spriteX,spriteY);
	}else{
		mobSelfBuffIcon(skillName,"mobBashIcon"+Slot,d,0,Slot);
	}
}
function slam(){
	if(my.mp<10||btn.d.slamId===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('slamId', true);
    BGP('slamId', "-400% -100%");
	T.delayedCall(12, slamTimer);
	beginGlobalCooldown();
	var skillName = "Slam";
	g.drawMyMp(-10);
	timerTick(D.getElementById('slamId'),12000/1000,'slamId');
	// slam effect - restart according monster slot
	if(my.talent5===0){
		var Slot=TGT;
		if(GLB.videoSetting==="High"){ animateSlam(Slot); }
		var dam = minMax((attackFunct()/4)*(1+P.eq[13].armor/80),.8);
		var hit=g.myPhysicalDamage(dam, Slot, skillName);
		if(hit!==undefined){
			stunTarget(Slot, 3500, -128);
			pummelStatus=0;
			clearPummel.kill()
			clearPummel = T.delayedCall(6, pummelReady);
			playAudio("shldblk");
		}
	}else{
		var Slot=TGT;
		for(var i=Slot-1;i<=Slot+1;i++){
			if(i>=0){
				if(mob[i].name){
					if(GLB.videoSetting==="High"){ animateSlam(i); }
					var dam = minMax((attackFunct()/4)*(1+P.eq[13].armor/80),.8);
					var hit=g.myPhysicalDamage(dam, i, skillName);
					if(hit!==undefined){
						stunTarget(i, 3500, -128);
						pummelStatus=0;
						clearPummel.kill()
						clearPummel = T.delayedCall(6, pummelReady);
						playAudio("shldblk");
					}
				}
			}
		}
	}
	if(my.talent5>=20){
		executeShockwave(false);
	}
}
function animateSlam(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-200);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-200);
	function doit(count){
		var e1 = can('slam', 5, x2, y2, 400, 400, true);
		T.to(e1, .25, {
			alpha:0,
			scaleY:.25,
			scaleX:.25,
			ease:ez.sout,
			onComplete:function(){
				cRem(5, e1);
			}
		});
		count++;
		if(count<3){ 
			T.delayedCall(.05, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
}
$(function(){
	$NG.window3.on('mouseenter','#slamId',function(){
		var MP = "10".fontcolor("#00ff00");
		var CD = "12".fontcolor("#ff0000");
		var value1 = "3.5".fontcolor("#00ff00");
		var a=TTphy( (attackFunct()/4)*(1+P.eq[13].armor/80), .8, "Slam");
		NG.tooltipname.innerHTML = "Slam";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Fury<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Slams knocks your target to the ground causing "+a[0]+" to "+a[1]+" physical damage. Your shield's armor value affects Slam's damage.<br><br>"+
		"Effect: Stuns your target for "+value1+" seconds.";
	});
});
function avengingRegen(foo){
	if(my.hp<=0){ return; }
	var healAmount = M.ceil(my.maxHp/200);
	g.popupHeal(healAmount);
	foo++;
	if(foo<6){
		avengingTimer.kill();
		avengingTimer = T.delayedCall(1, function(){ 
			avengingRegen(foo);
		});
	}
}
function avengingStrike(){
	if(btn.d.avengingstrikeId===true){ return; }
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	beginGlobalCooldown();
	var skillName = "Avenging Strike";
	var dam = minMax((attackFunct()/16),.5);
	if(my.mp>80){
		var count = 0;
		avengingTimer.kill();
		avengingTimer = T.delayedCall(1, function(){ 
			avengingRegen(count);
		});
		g.drawMyMp(-25);
		g.checkWarriorSkills();
		var buffId = "avengingStrikeIcon";
		var duration = 6000;
		var spriteX = -160;
		avengingStrikeIconTimer.kill();
		avengingStrikeIconTimer = T.delayedCall(duration/1000, function(){ 
			removeIcon(buffId); 
		});
		addBuffIcon(skillName,buffId,duration,spriteX);
	}
	if(GLB.videoSetting==="High"){ animateAvengingStrike(TGT); }
	g.myPhysicalDamage(dam, TGT, skillName);
}
function animateAvengingStrike(Slot){
	var x2 = MOB[Slot].offsetLeft+mob[Slot].cX+100;
	var y2 = MOB[Slot].offsetTop+mob[Slot].cY-100;
	var e1 = can('punchedRed', 5, x2, y2, 0, 0);
	T.to(e1, .12, {
		scaleX:1,
		scaleY:1,
		x:x2-200,
		ease:ez.Qin
	});
	T.to(e1, .12, {
		delay:.12,
		scaleX:0,
		scaleY:0,
		y:y2+200,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#avengingstrikeId',function(){
		var MP = "25".fontcolor("#00ff00");
		var foo = (M.ceil(my.maxHp/200)+"").fontcolor("#00ff00");
		var a=TTphy( (attackFunct()/16), .5, "Avenging Strike");
		NG.tooltipname.innerHTML = "Avenging Strike";
		NG.tooltipmsg.innerHTML = "Avenging Strike hits your target for "+a[0]+" to "+a[1]+" weapon damage.<br><br>"+
		"Effect: If you have more than 80 Fury, Avenging Strike will cost "+MP+" Fury and you will regenerate "+foo+" health every second for 6 seconds.";
	});
});

function startHemorrhage(Slot, damage){
	mob[Slot].hemorrhageTickCount=0;
	mob[Slot].hemorrhageTickDamage=damage;
	mob[Slot].hemorrhageInterval.kill();
	mob[Slot].hemorrhageInterval = T.to('', 1, {repeat:-1, onRepeat:function(){
		hemorrhageTick(Slot);
	}});
	addMobBuffIcon("Hemorrhage",Slot,"hemorrhageIcon",24000,-192);
	if(GLB.videoSetting==="High"){ animateHemorrhage(Slot); }
}
function hemorrhageTick(Slot){
	if(mob[Slot].name===""){
		mob[Slot].hemorrhageInterval.kill();
		mob[Slot].hemorrhageTickCount=0;
		return;
	}
	if(GLB.videoSetting==="High"){ animateBloodDrop(Slot); }
	g.myDotDamage(mob[Slot].hemorrhageTickDamage, Slot, "physical", "Hemorrhage");
	mob[Slot].hemorrhageTickCount+=1;
	mob[Slot].hemorrhageTickDamage = M.ceil(mob[Slot].hemorrhageTickDamage * 1.02);
	if(my.talent11>=20){
		if(M.random()>.92){
			g.subjugateStatus=0;
			clearSubjugate.kill();
			clearSubjugate = T.delayedCall(8, subjugateReady);
			g.checkWarriorSkills();
		}
	}
	if(mob[Slot].hemorrhageTickCount===24){
		mob[Slot].hemorrhageInterval.kill();
		mob[Slot].hemorrhageTickCount=0;
		g.subjugateStatus=0;
		clearSubjugate.kill();
		clearSubjugate = T.delayedCall(8, subjugateReady);
		g.checkWarriorSkills();
	}
}
function hemorrhage(){
	if(my.mp<15||btn.d.hemorrhageId===true||my.level<17){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	beginGlobalCooldown();
	if(g.autoAttackStatus===1&&Lmy.autoAttackOption==="On"){ toggleAutoAttackStatus(); }
	var Slot = TGT;
	if(my.talent6>=20){
		for(var i=Slot-1;i<=Slot+1;i++){
			if(i>=0){
				if(mob[i].name){
					Chat((mob[i].name+" begins bleeding from an open wound."));
					var dam = minMax(attackFunct()/12+5,.9);
					startHemorrhage(i, dam);
				}
			}
		}
	}else{
		var dam = minMax(attackFunct()/12+5,.9);
		Chat((mob[Slot].name+" begins bleeding from an open wound."));
		startHemorrhage(Slot, dam);
	}
	g.drawMyMp(-15);
	g.checkWarriorSkills();
	//thorns
	if(mob[Slot].thornsActive===0){
		Chat(("You are pierced by thorns for "+M.ceil(mob[Slot].level/10)+" damage."),3);
		var dam2=M.ceil(mob[Slot].level/10);
		my.hp-=dam2;
		battleDamageTaken+=dam2;
		if(my.hp<=0){
			Chat(("You have been slain by a shield of thorns!").fontcolor("ff0000"));
			monsterKilledMe();
		}
	}
	//lavashield
	if(mob[Slot].lavaShieldActive===0){
		Chat(("You are burned by lava for "+M.ceil(mob[Slot].level/6)+" damage."),3);
		var dam1=M.ceil(mob[Slot].level/6);
		my.hp-=dam1;
		battleDamageTaken+=dam1;
		if(my.hp<=0){
			Chat(("You have been slain by a shield of lava!").fontcolor("ff0000"));
			monsterKilledMe();
		}
	}
	playAudio("slice");
}
$(function(){
	$NG.window3.on('mouseenter','#hemorrhageId',function(){
		var MP = "15".fontcolor("#00ff00");
		var value1 = "2%".fontcolor("#00ff00");
		var a=[];
		var target="your target";
		if(my.talent6>=20){
			target="three targets";
		}
		a[0]= '<span class="green">'+~~((attackFunct()/12+5)*.9)+'</span>';
		a[1]= '<span class="green">'+~~(attackFunct()/12+5)+'</span>';
		NG.tooltipname.innerHTML = "Hemorrhage";
		var s="Cost: "+MP+" Fury<br><br>"+
		"Hemorrhage causes "+target+" to bleed for "+a[0]+" to "+a[1]+" physical damage every second for 24 seconds. Damage increases by "+value1+" each tick.<br><br>";
		if(my.talent11>=20){
			s+='Hemorrhage ticks have an '+green("8%")+' chance to activate Subjugate';
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
function animateHemorrhage(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var e1 = can('hemorrhage', 5, x2, y2, 0, 0);
	T.to(e1, .1, {
		scaleX:1,
		scaleY:1,
		y:y2-200,
		ease:ez.lin
	});
	T.to(e1, .4, {
		delay:.1,
		alpha:0,
		y:"+="+5,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	animateFlyingBlood(Slot, 20);
}

function shockwaveReady(){
	if(D.getElementById('shockwaveId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('shockwaveId', false);
    BGP('shockwaveId', "-700% 0%");
	g.checkWarriorSkills();
	refreshshockwave.kill();
}
function shockwaveTimer(){
	refreshshockwave = T.to('', .1, {repeat:-1, onRepeat:shockwaveReady});
}
$(function(){
	$NG.window3.on('mouseenter','#shockwaveId',function(){
		var MP = "12".fontcolor("#00ff00");
		var CD = "24".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/3.5)*(1+P.eq[13].armor/50), .8, "Shockwave");
		NG.tooltipname.innerHTML = "Shockwave";
		var s="Cost: "+MP+" Fury<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Unleash a sonic wave causing "+a[0]+" to "+a[1]+" physical damage on all targets. Your shield's armor value affects Shockwave's damage.<br><br>"+
		"Effect: Stuns all targets for 3.5 seconds."+
		"<BR><BR>Special: Shockwave cannot be dodged.";
		NG.tooltipmsg.innerHTML = s
	});
});
function executeShockwave(stun){
	flashScreen("#1616fd",.3,.5);
	var skillName = "Shockwave";
	animateNova('blueNova',false,12);
	playAudio("tremor");
	for(var i=0;i<=4;i++){
		if(mob[i].name!==""){
			var dam = minMax((attackFunct()/3.5)*(1+P.eq[13].armor/50),.8);
			var hit=g.myPhysicalDamage(dam, i, skillName,0,'range');
			if(hit!==undefined&&stun===true){
				stunTarget(i, 3500, -224);
			}
		}
	}
}
function shockwave(){
	if(my.mp<15||btn.d.shockwaveId===true||my.level<38){ return;}
	if(checkBashFear()===true){ return; }
    setD('shockwaveId', true);
    BGP('shockwaveId', "-700% -100%");
	T.delayedCall(24, shockwaveTimer);
	timerTick(D.getElementById('shockwaveId'),24000/1000,'shockwaveId');
	beginGlobalCooldown();
	g.drawMyMp(-15);
	// slam effect - restart according monster slot
	pummelStatus=0;
	clearPummel.kill()
	clearPummel = T.delayedCall(6, pummelReady);
	executeShockwave(true);
	if(my.talent4>=20){
		T.delayedCall(.5, function(){
			executeShockwave(false);
		});
	}
}

function animateNova(img,pet){
	if(GLB.videoSetting!=="High"){ return; }
	if(!img){ img="fireNova"; }
	if(pet===true){
		var x1=(MOB[5].offsetLeft+(petWidth/2));
		var y1=670;
		var sx=4;
		var sy=1.75;
	}else{
		var x1=640;
		var y1=788;
		var sx=5;
		var sy=5;
	}
	function doit(count){
		var p4 = can(img, 7, x1-200, y1-50, 0, 0, true);
		T.to(p4, .5, {
			scaleX:sx,
			scaleY:sy,
			alpha:0,
			onComplete:function(){
				cRem(7, p4);
			}
		});
		count++;
		if(count<8){ 
			T.delayedCall(.03, function(){ 
				doit(count)
			}); 
		}
	}
	doit(0);
}

function pummelReady(){
	if(D.getElementById('pummelId').textContent!==''){return;}
	pummelStatus=1;
	g.checkWarriorSkills();
	clearPummel.kill();
}
function pummelReadyCooldown(){
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
	$NG.pummelId.removeClass("disabled");
    setD('pummelId', false);
	g.checkWarriorSkills();
	refreshpummel.kill();
}
function pummelTimer(){
	refreshpummel = T.to('', .1, {repeat:-1, onRepeat:pummelReadyCooldown});
}
function pummel(){
	if(my.mp<10||pummelStatus===1||btn.d.pummelId===true||my.level<7){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('pummelId', true);
    BGP('pummelId', "-800% -100%");
	timerTick(D.getElementById('pummelId'),6000/1000,'pummelId');
	T.delayedCall(6, pummelTimer);
	beginGlobalCooldown();
	clearPummel.kill()
	var skillName = "Pummel";
	g.drawMyMp(-10);
	pummelStatus=1;
	startInvincible(2000);
	var hits = 1;
    if(Set.Guardian>=6){ hits = 5; }
	function doit(count){
		if(GLB.videoSetting==="High"){ animateBurst(TGT); }
		var dam = minMax((attackFunct()/10),.8);
		g.myPhysicalDamage(dam, TGT, skillName);
		playAudio("flshhit6");
		count++;
		if(count<hits){
			T.delayedCall(.2, function(){
				doit(count);
			});
		}
	}
	doit(0);
}
$(function(){
	$NG.window3.on('mouseenter','#pummelId',function(){
		var MP = "10".fontcolor("#00ff00");
		var CD = "6".fontcolor("#ff0000");
		var hits = '';
		if(Set.Guardian>=6){ hits = "five times "; }
		var a=TTphy( (attackFunct()/10), .8, "Pummel");
		NG.tooltipname.innerHTML = "Pummel";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Fury<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Pummel your target "+hits+"for "+a[0]+" to "+a[1]+" physical damage. Pummel is activated by stunning your target.<br><br>"+
		"Effect: Makes you invincible for 2 seconds.";
	});
});

function subjugateReady(){
	g.subjugateStatus=1;
	g.checkWarriorSkills();
	clearSubjugate.kill();
	return;
}
function subjugate(){
	if(my.mp<5||g.subjugateStatus===1||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	clearSubjugate.kill();
	var skillName = "Subjugate";
	var missing = 1+( Math.abs(1-(my.hp/my.maxHp)) );
	var dam = minMax((attackFunct()/5*missing),.8);
	g.drawMyMp(-5);
	g.subjugateStatus=1;
	if(GLB.videoSetting==="High"){ animateSubjugate(TGT); }
	g.myPhysicalDamage(dam, TGT, skillName);
	playAudio("flshhit5");
	g.checkWarriorSkills();
}
function animateSubjugate(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+150);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-150);
	var e1 = can('subjugate', 5, x2, y2, 0, 0);
	T.to(e1, .125, {
		scaleX:1.5,
		scaleY:1.5,
		x:x2-300,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, 2, {
				startAt:{
					alpha:.2
				},
				alpha:0,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
	var e2 = can('subjugate', 5, x2, y2, 0, 0);
	T.to(e2, .125, {
		scaleX:1.5,
		scaleY:1.5,
		x:x2-300,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e2, .125, {
				y:y2+300,
				scaleX:0,
				scaleY:0,
				onComplete:function(){
					cRem(5, e2);
				}
			});
		}
	});
	T.delayedCall(.1, animateTremor, [x2-150, 600]);
}
$(function(){
	$NG.window3.on('mouseenter','#subjugateId',function(){
		var MP = "5".fontcolor("#00ff00");
		var missing = 1+( Math.abs(1-(my.hp/my.maxHp)) );
		var dam = minMax((attackFunct()/5*missing),1);
		var a=TTphy( dam, .8, "Subjugate");
		NG.tooltipname.innerHTML = "Subjugate";
		var s = "Cost: "+MP+" Fury<br><br>"+
		"Subjugate your target for "+a[0]+" to "+a[1]+" physical damage. Subjugate increases its damage as your health value decreases. Subjugate is activated for 8 seconds when a mob dodges your physical attack or when hemorrhage stops ticking.";
		s+='<BR><BR>Special: Subjugate cannot be dodged.';
		NG.tooltipmsg.innerHTML = s;
	});
});

function decisiveBlowReady(){
	if(D.getElementById('decisiveblowId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('decisiveblowId', false);
    BGP('decisiveblowId', "-1000% 0%");
	refreshdecisiveblow.kill();
	checkDecisiveBlow();
}
function decisiveBlowTimer(){
	refreshdecisiveblow = T.to('', .1, {repeat:-1, onRepeat:decisiveBlowReady});
}
function decisiveBlow(){
	if(my.mp<15||
	decisiveBlowStatus===1||
	btn.d.decisiveblowId===true||
	my.level<15){ 
		return;
	}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('decisiveblowId', true);
    BGP('decisiveblowId', "-1000% -100%");
	var d = 5000;
	T.delayedCall(d/1000, decisiveBlowTimer);
	timerTick(D.getElementById('decisiveblowId'),d/1000,'decisiveblowId');
	beginGlobalCooldown();
	var skillName = "Decisive Blow";
	var dam = minMax((attackFunct()/2.5),.8);
	g.drawMyMp(-15);
	if(GLB.videoSetting==="High"){ animateDecisiveBlow(TGT); }
	g.myPhysicalDamage(dam, TGT, skillName);
	playAudio("flshhit3");
}
function animateDecisiveBlow(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+150);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-150);
	var e1 = can('decisiveBlow', 5, x2, y2, 0, 0);
	T.to(e1, .15, {
		scaleX:1.5,
		scaleY:1.5,
		x:x2-300,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, 2, {
				startAt:{
					alpha:.2
				},
				alpha:0,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
	var e2 = can('decisiveBlow', 5, x2, y2, 0, 0);
	T.to(e2, .1, {
		scaleX:1.5,
		scaleY:1.5,
		x:x2-300,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e2, .1, {
				y:y2+300,
				scaleX:0,
				scaleY:0,
				onComplete:function(){
					cRem(5, e2);
				}
			});
		}
	});
	function tremor(count){
		T.delayedCall(.1, animateTremor, [x2-150, 600]);
		count++;
		if(count<5){ 
			T.delayedCall(.05, function(){ 
				tremor(count); 
			}); 
		}
	}
	tremor(0);
}

$(function(){
	$NG.window3.on('mouseenter','#decisiveblowId',function(){
		var MP = "15".fontcolor("#00ff00");
		var CD = "5".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/2.5), .8, "Decisive Blow");
		NG.tooltipname.innerHTML = "Decisive Blow";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Fury<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Decisively strike your target for "+a[0]+" to "+a[1]+" physical damage. Decisive Blow is activated when your current target is below 40% health.";
	});
});

function absorbSpellExpire(){
	absorbSpellStatus=1;
	g.checkWarriorSkills();
}
function absorbSpellReady(){
	if(D.getElementById('absorbspellId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('absorbspellId', false);
    BGP('absorbspellId', "-1100% 0%");
	g.checkWarriorSkills();
	refreshAbsorbSpell.kill();
}
function absorbSpellTimer(){
	refreshAbsorbSpell = T.to('', .1, {repeat:-1, onRepeat:absorbSpellReady});
}
function absorbSpell(){
	if(my.mp<15||btn.d.absorbspellId===true||my.level<20){ return;}
	if(checkBashFear()===true){ return; }
    setD('absorbspellId', true);
    BGP('absorbspellId', "-1100% -100%");
	var d=24000;
	if(my.talent7>=20){ d=12000; }
	T.delayedCall(d/1000, absorbSpellTimer);
	timerTick(D.getElementById('absorbspellId'),d/1000,'absorbspellId');
	T.delayedCall(3, absorbSpellExpire);
	g.drawMyMp(-15);
	beginGlobalCooldown();
	var skillName = "Absorb Spell";
	if(my.talent7>0){ skillName="Reflect"; }
	absorbSpellStatus=0;
	Chat(("You are encased in a translucent shell."),3);
	var buffId = "absorbSpellIcon";
	var duration = 3000;
	var spriteX = -352;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	if(GLB.videoSetting==="High"){ animateAbsorbSpell(); }
	playAudio("energyshield");
}

function animateAbsorbSpell(){
	var H1 = IMG(110, 50, 1060, 1060, 'absorbSpell'); 
	H1.id='spellAbsorbImage';
	NG.eWin.appendChild(H1);
	T.to(H1, 3, {
		rotation:1800,
		force3D:"auto",
		ease:ez.lin
	});
	T.to(H1, 1, {
		opacity:.8,
		force3D:"auto",
		ease:ez.cout,
		onComplete:function(){
			T.to(H1, 2, {
				opacity:0,
				force3D:"auto",
				ease:ez.xin,
				onComplete:function(){
					Remove(H1);
				}
			});
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#absorbspellId',function(){
		var MP = "15".fontcolor("#00ff00");
		var d='24';
		if(my.talent7>=20){ d='12'; }
		var n="Absorb Spell";
		if(my.talent7>0){ n="Reflect"; }
		var CD = d.fontcolor("#ff0000");
		NG.tooltipname.innerHTML = n;
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Fury<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"For three seconds you can negate the next spell cast on you and convert its damage to health and fury.";
	});
});

function frenziedRampageExpire(){
	frenziedRampageStatus=1;
	g.checkWarriorSkills();
}
function frenziedRampageDone(){
	hasteBuff += 500;
	frenziedRampageHasteStatus=false;
	CStat();
}
function frenziedRampageReady(){
	if(D.getElementById('frenziedrampageId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('frenziedrampageId', false);
	g.checkWarriorSkills();
	refreshfrenziedRampage.kill();
}
function frenziedRampageTimer(){
	refreshfrenziedRampage = T.to('', .1, {repeat:-1, onRepeat:frenziedRampageReady});
}
function frenziedRampage(){
	if(my.mp<25||frenziedRampageStatus===1||my.level<32){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('frenziedrampageId', true);
	T.delayedCall(phyGlobalTotal()/1000, frenziedRampageTimer);
	beginGlobalCooldown();
	frenziedRampageStatus=1;
	var skillName = "Frenzied Rampage";
	g.drawMyMp(-25);
	var dam = minMax((attackFunct()/16),.8);
	if(frenziedRampageHasteStatus===true){ hasteBuff += 500; }
	hasteBuff -= 500;
	frenziedRampageHasteStatus = true;
	frenziedRampageDuration.kill();
	frenziedRampageDuration = T.delayedCall(8, frenziedRampageDone);
	g.myPhysicalDamage(dam, TGT, skillName);
	startInvincible(1500);
	var skillName = "Frenzied Rampage";
	var buffId = "frenziedRampageIcon";
	var duration = 8000;
	var spriteX = -384;
	frenziedRampageIconTimer.kill();
	frenziedRampageIconTimer = T.delayedCall(duration/1000, function(){ 
		removeIcon(buffId); 
	});
	addBuffIcon(skillName,buffId,duration,spriteX);
	if(GLB.videoSetting==="High"){ animateRampage(); }
	CStat();
	playAudio("warriorShout");
}
function animateRampage(){
	flashScreen("#f00",.3,3);
	function Pgo(interval){
		var X1 = M.random()*(640)-320;
		var Y1 = M.random()*(200)+149;
		if(X1<0){
			var X2 = -960;
		}else{
			var X2 = 960;
		}
		if(Y1<249){
			var Y2 = -200;
		}else{
			var Y2 = 700;
		}
		var p1 = can('redparticle50', 5, X1, Y1, 1280, 200);
		p1.alpha=.1;
		T.to(p1, 1.5, {
			y:Y2,
			x:X2,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(interval<20){ 
			T.delayedCall(interval/1000, function(){
				Pgo(++interval);
			});
		}
	}
	Pgo(10);
}
$(function(){
	$NG.window3.on('mouseenter','#frenziedrampageId',function(){
		var MP = "25".fontcolor("#00ff00");
		var a=TTphy( (attackFunct()/16), .8, "Frenzied Rampage");
		var multiplier2 = "50%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Frenzied Rampage";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Fury<br><br>"+
		"Frenzied Rampage hits your target for "+a[0]+" to "+a[1]+" physical damage. Frenzied Rampage is activated when any mob dies.<br><br>"+
		"Effect: Makes you invincible for 1.5 seconds and adds "+multiplier2+" haste for 8 seconds.";
	});
});

function furiousScorn(){
	if(my.mp<20||btn.d.furiousscornId===true||my.level<11){return;}
	if(checkBashFear()===true){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	beginGlobalCooldown();
	g.drawMyMp(-20);
	Chat(("You belittle your foes with Furious Scorn."),3);
	for(var i=0;i<=4;i++){
		if(mob[i].name){
			mob[i].furiousScorn = 15; //15% str debuff
			var buffId = "furiousScornIcon";
			var duration = 0;
			var spriteX = -448;
			addMobBuffIcon("Furious Scorn",i,buffId,duration,spriteX);
		}
	}
	g.checkWarriorSkills();
	if(GLB.videoSetting==="High"){ animateDebuff(); }
	playAudio("warCry");
}
function animateDebuff(color){
	if(!color){
		color = "blue";
	}
	for(var i=0;i<40;i++){
		var X1 = (M.random()*(1280));
		var Y1 = (M.random()*(50)+400);
		var sX = (M.random()*(20)+5);
		var Y2;
		if(sX<10){
			Y2 = 515;
		} else if(sX>=10&&sX<15){
			Y2 = 540;
		} else if(sX>=15&&sX<20){
			Y2 = 580;
		}else{
			Y2 = 615;
		}
		if(sX<15){
			var p1 = can(color+"particle50", 7, X1, Y1, sX, sX);
			debuffPart(p1, 7, .2, Y2);
		}else{
			var p1 = can(color+"particle50", 5, X1, Y1, sX, sX);
			debuffPart(p1, 5, .4, Y2);
		}
	}
}
function debuffPart(e, plane, scale, Y2){
	T.to(e, M.random()*(1)+.5, {
		y:Y2,
		scaleX:scale,
		scaleY:scale,
		onComplete:function(){
			cRem(plane, e);
		}
	});
	
}
$(function(){
	$NG.window3.on('mouseenter','#furiousscornId',function(){
		var MP = "20".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Furious Scorn";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Fury<br><br>"+
		"Furious Scorn discourages your opponents and debuffs their strength by "+green("15%")+".";
	});
});

function enrageReady(){
	if(D.getElementById('enrageId').textContent!==''){return;}
	if(castingSpell===0){return;}
	if(castingGlobal===0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('enrageId', false);
    BGP('enrageId', "-1300% 0%");
	g.checkWarriorSkills();
	refreshenrage.kill();
}
function enrageTimer(){
	refreshenrage = T.to('', .1, {repeat:-1, onRepeat:enrageReady});
}
function enrage(){
	if(btn.d.enrageId===true||my.level<5){ return; }
	if(checkBashFear()===true){ return; }
    setD('enrageId', true);
    BGP('enrageId', "-1300% -100%");
	T.delayedCall(30, enrageTimer);
	timerTick(D.getElementById('enrageId'),30000/1000,'enrageId');
	g.drawMyMp(40);
	Chat(("You unleash a torrent of unbridled anger."),3);
	g.checkWarriorSkills();
	flashScreen("#f00",.4,5);
	playAudio("warriorShout");
	if(my.talent10>0){ warAmpDamage=true; }
	if(my.talent10>=20){
		triggerFrenzy(4000);
	}
}
function triggerFrenzy(duration){
	var d=frenzyRate/1000;
	myAttack.kill();
	myAttack = T.delayedCall(d, getDamage);
	myAttack2.kill();
	myAttack2 = T.delayedCall(d, getDamage2);
	autoAttackTimer(d);
	myFrenzyTimer.kill();
	myFrenzy=true;
	myFrenzyTimer = T.delayedCall(duration/1000, function(){
		myFrenzy=false;
	});
}
$(function(){
	$NG.window3.on('mouseenter','#enrageId',function(){
		var CD = "30".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Enrage";
		var s="Cooldown: "+CD+" Seconds<br><br>"+
		"Enrage instantly generates 40 Fury.";
		if(my.talent10>=1){
			s+="<BR><BR>After using enrage your next attack is amplified by "+green(talent10()*10)+" percent.";
		}
		if(my.talent10>=20){
			s+="<BR><BR>Effect: Enrage triggers frenzy.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});


$(function(){
	$NG.window3.on('mouseenter','#triageId',function(){
		var foo = "25".fontcolor("#00ff00");
		var CD = "60".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Triage";
		NG.tooltipmsg.innerHTML = "Cost: "+foo+" Fury<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"A surge of adrenaline heals your wounds for a varying percentage of your maximum health every second for 15 seconds. The percentage healed increases as your current health value decreases.";
	});
});
function triageTick(){
	var newMax = my.maxHp;
	var x = my.hp/newMax;
	if(x>.8){ g.popupHeal(M.ceil(newMax*.01)); }
	if(x>.6&&x<=.8){ g.popupHeal(M.ceil(newMax*.02)); }
	if(x>.4&&x<=.6){ g.popupHeal(M.ceil(newMax*.03)); }
	if(x>.2&&x<=.4){ g.popupHeal(M.ceil(newMax*.05)); }
	if(x<=.2){ g.popupHeal(M.ceil(newMax*.06)); }
	triageTickCount+=1;
	if(triageTickCount===15){ triageInterval.kill(); }
}
function triageReady(){
	if(D.getElementById('triageId').textContent!==''){return;}
	if(castingSpell===0){return;}
	if(castingGlobal===0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('triageId', false);
    BGP('triageId', "-1500% 0%");
	g.checkWarriorSkills();
	refreshtriage.kill();
}
function triageTimer(){
	refreshtriage = T.to('', .1, {repeat:-1, onRepeat:triageReady});
}
function triage(){
	if(my.mp<25||btn.d.triageId===true||my.level<13){return;}
	if(checkBashFear()===true){ return; }
    setD('triageId', true);
    BGP('triageId', "-1500% -100%");
	T.delayedCall(60, triageTimer);
	timerTick(D.getElementById('triageId'),60000/1000,'triageId');
	g.drawMyMp(-25);
	beginGlobalCooldown();
	triageTickCount=0;
	triageInterval = T.to('', 1, {repeat:-1, onRepeat:triageTick});
	Chat(("A surge of adrenaline heals your wounds."),3);
	g.checkWarriorSkills();
	var skillName = "Triage";
	var buffId = "triageIcon";
	var duration = 15000;
	var spriteX = -480;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateHealing("yellow");
	playAudio("spellCastHeal2");
}

function bulwarkExpire(){
	bulwarkStatus=false;
	CStat();
}
function bulwarkReady(){
	if(D.getElementById('bulwarkId').textContent!==''){return;}
	if(castingSpell===0){return;}
	if(castingGlobal===0){return;}
	if(bashStatus===0||fearStatus===0){ return; }
    setD('bulwarkId', false);
    BGP('bulwarkId', "-1600% 0%");
	g.checkWarriorSkills();
	refreshbulwark.kill();
}
function bulwarkTimer(){
	refreshbulwark = T.to('', .1, {repeat:-1, onRepeat:bulwarkReady});
}
function bulwark(){
	if(my.mp<15||btn.d.bulwarkId===true||my.level<28){return;}
	if(checkBashFear()===true){ return; }
    setD('bulwarkId', true);
    BGP('bulwarkId', "-1600% -100%");
	T.delayedCall(60, bulwarkTimer);
	timerTick(D.getElementById('bulwarkId'),60000/1000,'bulwarkId');
	g.drawMyMp(-15);
	beginGlobalCooldown();
	Chat(("You are surrounded by an impregnable wall."),3);
	var d=15000;
	if(my.talent3>=20){ d+=5000; }
	bulwarkTimeout = T.delayedCall(d/1000, bulwarkExpire);
	bulwarkStatus=true;
	var skillName = "Bulwark";
	var buffId = "bulwarkIcon";
	var duration = d;
	var spriteX = -512;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	if(GLB.videoSetting==="High"){ animateBulwark(); }
	playAudio("spellDoneBuff");
}
function animateBulwark(){
	flashScreen("#00f",.3,2);
	var e1 = can('bulwark', 5, 418, 227, 444, 500, true);
	T.to(e1, 3, {
		y:667,
		alpha:0,
		scaleX:.5,
		scaleY:.5,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	animateBuffRings();
}
$(function(){
	$NG.window3.on('mouseenter','#bulwarkId',function(){
		var foo = "15".fontcolor("#00ff00");
		var value= 40+talent3();
		var d2=15;
		if(my.talent3>=20){ d2=20; }
		var d="<span color='green'>"+value+"%</span>";
		var CD = "60".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Bulwark";
		NG.tooltipmsg.innerHTML = "Cost: "+foo+" Fury<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Assume a defensive position for "+d2+" seconds. Bulwark reduces all damage by "+d+".";
	});
});
function intrepidMightActive(){
	return fearStatus===0||rootStatus===0||bashStatus===0;
}
function checkIntrepidMight(){
	if(my.job==="Warrior"){
		if(my.level>=24){
			if(btn.d.intrepidmightId===true){
				BGP('intrepidmightId', "-1700% -100%");
			}else{
				if(intrepidMightActive()){
					BGP('intrepidmightId', "-1700% 0%");
				}else{
					BGP('intrepidmightId', "-1700% -300%");
				}
			}
		}
	}
}
function intrepidMightReady(){
	if(D.getElementById('intrepidmightId').textContent!==''){return;}
	refreshintrepidMight.kill();
    setD('intrepidmightId', false);
	checkIntrepidMight();
}
function intrepidMightTimer(){
	refreshintrepidMight = T.to('', .1, {repeat:-1, onRepeat:intrepidMightReady});
}
function intrepidMight(){
	if(my.hp<=0||paused===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(fearStatus===1&&rootStatus===1&&bashStatus===1){ return; }
	if(!intrepidMightActive()||btn.d.intrepidmightId===true||my.level<24){return;}
    setD('intrepidmightId', true);
	T.delayedCall(12, intrepidMightTimer);
	timerTick(D.getElementById('intrepidmightId'),12,'intrepidmightId');
	Chat(("Your indomitable might unleashes!"),3);
	//break fear
	fearStatus=1;
	monsterFearCooldown.kill();
	//enable run
	if(rootStatus===0){
		setD('runId', false);
		BGP('runId', "-100% -200%");
		monsterRootCooldown.kill();
	}
	rootStatus=1;
	//break stun
	stunCooldown.kill();
	bashStatus=1;
	$("#mobBashIcon,#mobFearIcon,#mobRootIcon").remove();
	lockoutTimer1.kill();
	globalCooldownEnd2();
	g.checkWarriorSkills();
	var skillName = "Intrepid Might";
	var dam = minMax((attackFunct()/7),.8);
	if(GLB.videoSetting==="High"){ animateIntrepidMight(TGT); }
	g.myPhysicalDamage(dam, TGT, skillName);
	startInvincible(1000);
	if( btn.d.enrageId===false){
		setCD('enrageId', false);
		BGP('enrageId', "-1300% 0%");
	}
	if( btn.d.triageId===false ){
		setCD('triageId', false);
		BGP('triageId', "-1500% 0%");
	}
	if( btn.d.bulwarkId===false){
		setCD('bulwarkId', false);
		BGP('bulwarkId', "-1600% 0%");
	}
	playAudio("flshhit4");
	checkIntrepidMight();
}
function animateIntrepidMight(Slot){
	flashScreen("#fff",.3,.5);
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	T.delayedCall(.1, animateTremor, [x2, 1000]);
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+150);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-150);
	var e1 = can('intrepidMight', 5, x2, y2, 0, 0);
	T.to(e1, .15, {
		scaleX:1.5,
		scaleY:1.5,
		x:x2-300,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, 2, {
				startAt:{
					alpha:.2
				},
				alpha:0,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});	
	var e2 = can('intrepidMight', 5, x2, y2, 0, 0);
	T.to(e2, .1, {
		scaleX:1.5,
		scaleY:1.5,
		x:x2-300,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e2, .1, {
				y:y2+300,
				scaleX:0,
				scaleY:0,
				onComplete:function(){
					cRem(5, e2);
				}
			});
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#intrepidmightId',function(){
		var CD = "12".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/7), .8, "Intrepid Might");
		NG.tooltipname.innerHTML = "Intrepid Might";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Fearlessly strike your target for "+a[0]+" to "+a[1]+" physical damage. Intrepid Might can only be used while stunned, feared, or rooted.<br><br>"+
		"Effect: Makes you invincible for 1 second. Breaks stun, fear, and root";
	});
});

function shadowStrike(){
	if(btn.d.shadowstrikeId===true){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	beginGlobalCooldown();
	if(GLB.videoSetting==="High"){ animateShadowStrike(TGT); }
	g.drawMyMp(20);
	var dam = 2+minMax((attackFunct()/16),.5);
	g.myPhysicalDamage(dam, TGT, "Shadow Strike");
	startInvincible(100);
}
function animateShadowStrike(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+100);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-100);
	var e1 = can('shadowStrike', 5, x2, y2, 0, 0);
	T.to(e1, .125, {
		scaleX:1,
		scaleY:1,
		x:x2-200,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .125, {
				scaleX:0,
				scaleY:0,
				y:y2+200,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#shadowstrikeId',function(){
		var MP = green("20");
		var a=TTphy( (attackFunct()/16), .5, "Shadow Strike");
		NG.tooltipname.innerHTML = "Shadow Strike";
		NG.tooltipmsg.innerHTML = "Generate: "+MP+" Technique Points<br><br>"+
		"Shadow Strike your target for "+a[0]+" to "+a[1]+" physical damage.<br><br>"+
		"Effect: Makes you invincible for .1 seconds.";
	});
});

function lacerateReady(){
	if(D.getElementById('lacerateId').textContent!==''){return;}
	if(castingSpell===0){return;}
	if(castingGlobal===0){return;}
	if(bashStatus===0||fearStatus===0){ return; }
	setD('lacerateId', false);
	BGP('lacerateId', "-800% 0%");
	refreshlacerate.kill();
	g.checkRogueSkills();
}
function lacerateTimer(){
	refreshlacerate = T.to('', .1, {repeat:-1, onRepeat:lacerateReady});
}
function lacerate(){
	if(my.mp<20||btn.d.lacerateId===true||my.level<2){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(my.talent1>=20){
		setD('lacerateId', true);
		BGP('lacerateId', "-800% -100%");
		T.delayedCall(12, lacerateTimer);
		timerTick(D.getElementById('lacerateId'),12000/1000,'lacerateId');
	}
	beginGlobalCooldown();
	var saveMp = my.mp;
	g.drawMyMp(-my.mp);
	var skillName = "Lacerate";
	var foo = 0;
	if(mob[TGT].lacerate>0){ foo = 20; }
	var multi=((saveMp+foo)/100)+1;
	var dam = minMax((attackFunct()/10+min70(agiTotal()/6))*multi,.8);
	Chat((mob[TGT].name+"'s armor is thrashed."),3);
	var Slot = TGT;
	var zig = M.ceil(mob[Slot].def*(saveMp/200));
	if(GLB.videoSetting==="High"){ animateLacerate(Slot); }
	var hit=g.myPhysicalDamage(dam, Slot, skillName);
	if(hit!==undefined){
		if(zig > mob[Slot].lacerate){
			mob[Slot].lacerate = M.ceil(saveMp/10);
		}
		addMobBuffIcon("Lacerate",Slot,"lacerateIcon",0,-256);
		bleedTarget(TGT, saveMp/5, 1000);
	}
	playAudio("slice");
}
function animateLacerate(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+100);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-100);
	var e1 = can('lacerate', 5, x2, y2, 0, 0);
	T.to(e1, .125, {
		scaleX:1,
		scaleY:1,
		x:x2-200,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .15, {
				scaleX:0,
				scaleY:0,
				y:y2+200,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});	
	var e2 = can('lacerate', 5, x2-40, y2, 0, 0);
	T.to(e2, .125, {
		scaleY:1,
		scaleX:1,
		x:x2-240,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e2, .15, {
				scaleX:0,
				scaleY:0,
				y:y2+200,
				onComplete:function(){
					cRem(5, e2);
				}
			});
		}
	});	
	var e3 = can('lacerate', 5, x2+40, y2, 0, 0);
	T.to(e3, .125, {
		scaleX:1,
		scaleY:1,
		x:x2-160,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e3, .125, {
				scaleX:0,
				scaleY:0,
				y:y2+200,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
	for(var i=0;i<=(~~(M.random()*(3)+2));i++){
		animateBloodDrop(Slot);
	}
}

$(function(){
	$NG.window3.on('mouseenter','#lacerateId',function(){
		var MP = "All".fontcolor("#00ff00");
		var dur = my.mp/5;
		var foo = 0;
		if(mob[TGT].lacerate>0){ foo = 20; }
		var multi=((my.mp+foo)/100)+1;
		var a=TTphy( (attackFunct()/10+min70(agiTotal()/6))*multi, .8, "Lacerate");
		var value1 = "2%".fontcolor("#00ff00");
		var value2 = "10%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Lacerate";
		var s="Cost: "+MP+" Technique Points<br>";
		var CD=green("12");
		if(my.talent1>=20){ s+="Cooldown: "+CD+" Seconds<br>"; }
		s+="<br>Lacerate your target for "+a[0]+" to "+a[1]+" physical damage. The damage multiplier varies based on your TP value. Target bleeds for "+green("4-20")+" seconds based on combo points.<br><br>"+
		"Effect: Increases physical damage by "+value1+" to "+value2+". Your finishers will benefit from a passive 20-point technique point bonus on all lacerated targets";
		if(my.talent1>=20){
			s+="<br><br>Effect: Leech 20% of Lacerate damage.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});

function evadeReady(){
	if(D.getElementById('evadeId').textContent!==''){return;}
	if(castingGlobal==0){return;}
	if(bashStatus===0||fearStatus===0){ return; }
    setD('evadeId', false);
    BGP('evadeId', "-1300% 0%");
	refreshevade.kill();
}
function evadeTimer(){
	refreshevade = T.to('', .1, {repeat:-1, onRepeat:evadeReady});
}
function evade(){
	if(btn.d.evadeId===true||my.level<3){return;}
	if(checkBashFear()===true){ return; }
    setD('evadeId', true);
    BGP('evadeId', "-1300% -100%");
	T.delayedCall(40, evadeTimer);
	timerTick(D.getElementById('evadeId'),40000/1000,'evadeId');
	Chat(("You vanish into your surroundings."),3);
	g.drawMyMp(40);
	addBuffIcon("Evade","evadeIcon",5000,-416);
	playAudio("fade");
	evadeStatus=true;
	function doit2(){
		evadeStatus=false;
	}
	T.delayedCall(5, doit2);
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
	animateEvade();
}
function animateEvade(color){
	if(!color){
		color = "black";
	}
	
	flashScreen("#000",.7,2);
	function doit(count){
		var X1 = M.random()*(640)-320;
		if(X1<0){
			var X2 = -960;
		}else{
			var X2 = 960;
		}
		var p1 = can(color+'particle50', 5, X1, 360, 1280, 200);
		p1.alpha=.1;
		T.to(p1, 1.5, {
			y:-100,
			x:X2,
			alpha:0,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<30){ 
			T.delayedCall(.02, function(){ 
				doit(++count); 
			}); 
		}
	}
	if(GLB.videoSetting==="High"){ doit(0); }
}
function evadeBash(){
	$("#evadeIcon").remove();
	var Slot = TGT;
	stunTarget(Slot, 5000, -416);
	playAudio("bash");
}
$(function(){
	$NG.window3.on('mouseenter','#evadeId',function(){
		var CD = "40".fontcolor("#ff0000");
		var foo = "60%".fontcolor("00ff00");
		var minimum = ( M.ceil(35+((weaponSkillCheck()/4.4)/4))+"").fontcolor("#00ff00");
		var multiplier = (M.ceil(((weaponSkillCheck()/4.4)/2)/10)*100+"%").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Evade";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Disappear from combat for five seconds. If you attack while evading, you will ambush your target and stun them for five seconds and inflict an additional "+foo+" damage.<br><br>"+
		"Effect: Evade makes mobs unable to target you. DoTs will still hit you and cancel Evade.";
	});
});

function sonicStrikeReady(){
	if(D.getElementById('sonicstrikeId').textContent!==''){return;}
	if(castingSpell===0){return;}
	if(castingGlobal===0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('sonicstrikeId', false);
    BGP('sonicstrikeId', "-400% 0%");
	refreshSonicStrike.kill();
}
function sonicStrikeTimer(){
	refreshSonicStrike = T.to('', .1, {repeat:-1, onRepeat:sonicStrikeReady});
}
function sonicStrike(){
	if(btn.d.sonicstrikeId===true||my.level<5){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('sonicstrikeId', true);
    BGP('sonicstrikeId', "-400% -100%");
	T.delayedCall(15, sonicStrikeTimer);
	timerTick(D.getElementById('sonicstrikeId'),15000/1000,'sonicstrikeId');
	beginGlobalCooldown();
	var skillName = "Sonic Strike";
	if(Set.Assassin >= 6){
		for(var i=0;i<=4;i++){
			stunTarget(i, 3500, -128);
		}
	}
	var dam = minMax((attackFunct()/7),.7);
	Chat((mob[TGT].name+" is disrupted by a sonic wave."),3);
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animateSonicStrike(Slot); }
	g.myPhysicalDamage(dam, TGT, skillName);
	interruptTarget(Slot);
	g.drawMyMp(20);
}
function animateSonicStrike(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-75);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-75);
	animateBurst(Slot);
	var p3 = can('tremorFG', 5, x2+75, y2+75, 0, 0);
	T.to(p3, .8, {
		y:y2+50,
		x:x2-425,
		scaleX:2.5,
		scaleY:.5,
		alpha:0,
		onComplete:function(){
			cRem(5, p3);
		}
	});
	var p4 = can('tremorBG', 7, x2+75, y2+75, 0, 0);
	T.to(p4, .8, {
		y:y2+50,
		x:x2-425,
		scaleX:2.5,
		scaleY:.5,
		alpha:0,
		onComplete:function(){
			cRem(7, p4);
		}
	});
}
function animateBossExplodeSonicRing(total){
	var x2 = (MOB[2].offsetLeft+mob[2].cX);
	var y2 = (MOB[2].offsetTop+mob[2].cY);
	function doit(count){
		var p3 = can('tremorFG', 5, x2-200, y2-50, 0, 0, true);
		T.to(p3, 3, {
			scaleX:8,
			scaleY:2,
			alpha:0,
			onComplete:function(){
				cRem(5, p3);
			}
		});
		var p4 = can('tremorBG', 7, x2-200, y2-50, 0, 0, true);
		T.to(p4, 3, {
			scaleX:8,
			scaleY:2,
			alpha:0,
			onComplete:function(){
				cRem(7, p4);
			}
		});
		if(count<total){
			T.delayedCall(.016, doit, [++count]);
		}
	}
	doit(0);
}
$(function(){
	$NG.window3.on('mouseenter','#sonicstrikeId',function(){
		var MP = "20".fontcolor("#00ff00");
		var CD = "15".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/7), .7, "Sonic Strike");
		NG.tooltipname.innerHTML = "Sonic Strike";
		NG.tooltipmsg.innerHTML = "Generate: "+MP+" Technique Points<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Sonic Strike hits for "+a[0]+" to "+a[1]+" physical damage.<br><br>"+
		"Effect: Causes a sonic wave that disrupts your target's spell.";
	});
});

function backstabReady(){
	if(D.getElementById('backstabId').textContent!==''){return;}
	if(castingSpell===0){return;}
	if(castingGlobal===0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('backstabId', false);
    BGP('backstabId', "-900% 0%");
	refreshbackstab.kill();
	g.checkRogueSkills();
}
function backstabTimer(){
	refreshbackstab = T.to('', .1, {repeat:-1, onRepeat:backstabReady});
}
function backstab(){
	if(my.mp<20||btn.d.backstabId===true||my.level<7){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('backstabId', true);
    BGP('backstabId', "-900% -100%");
	T.delayedCall(15, backstabTimer);
	timerTick(D.getElementById('backstabId'),15000/1000,'backstabId');
	beginGlobalCooldown();
	var Slot = TGT;
	var savedMp = my.mp;
	g.drawMyMp(-savedMp);
	function doit(){
		if(!mob[Slot].name){ return; }
		var skillName = "Backstab";
		var foo = 0;
		if(mob[Slot].lacerate>0){ foo = 20; }
		if(P.eq[12].type==="pierced"){ foo += 20; }
		var multi=((savedMp+foo)/100)+1;
		var dam = minMax((attackFunct()/2+min70(agiTotal()/2))*multi,.8);
		if(GLB.videoSetting==="High"){ animateBackstab(Slot); }
		g.myPhysicalDamage(dam, Slot, skillName);
		playAudio("flshhit3");
	}
	doit();
	if(my.talent6>=20){
		T.delayedCall(.5, function(){
			doit();
		});
	}
}
function animateBackstab(Slot){
	if(!mob[Slot].name){ return; }
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	animateBurst(Slot, 400, 'burstRed');
	for(var i=0;i<=6;i++){
		animateBloodDrop(Slot);
	}
}
$(function(){
	$NG.window3.on('mouseenter','#backstabId',function(){
		var MP = "All".fontcolor("#00ff00");
		var CD = "15".fontcolor("#ff0000");
		var foo = 0;
		if(mob[TGT].lacerate>0){ foo = 20; }
		if(P.eq[12].type==="pierced"){ foo += 20; }
		var multi=((my.mp+foo)/100)+1;
		var a=TTphy( (attackFunct()/2+min70(agiTotal()/2))*multi, .8, "Backstab");
		NG.tooltipname.innerHTML = "Backstab";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Technique Points<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Backstab your target for "+a[0]+" to "+a[1]+" physical damage. The minimum damage and multiplier varies based on your TP value. Agility affects your minimum damage. If you have a piercing weapon in your main hand, all finishers will benefit from a passive 20-point technique point bonus.";
	});
});

function coldBloodReady(){
	if(D.getElementById('coldbloodId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
	$NG.coldbloodId.removeClass("disabled").css({backgroundPosition:"-1400% 0"});
    setD('coldbloodId', false);
    BGP('coldbloodId', "-1400% 0%");
	refreshColdBlood.kill();
}
function coldBloodTimer(){
	refreshColdBlood = T.to('', .1, {repeat:-1, onRepeat:coldBloodReady});
}
function coldBlood(){
	if(btn.d.coldbloodId===true||my.level<9){return;}
	if(checkBashFear()===true){ return; }
    setD('coldbloodId', true);
    BGP('coldbloodId', "-1400% -100%");
	var d = (60000-((talent7()*.75)*1000));
	T.delayedCall(d/1000, coldBloodTimer);
	timerTick(D.getElementById('coldbloodId'),d/1000,'coldbloodId');
	Chat(("Your weapons glimmer with darkness."),3);
	g.coldBloodBonus=1;
	addBuffIcon("Cold Blood","coldBloodIcon",0,-448);
	if(GLB.videoSetting==="High"){ animateColdBlood(); }
	playAudio("chillblood");
}
function animateColdBlood(){
	var H1 = IMG(968, 307, 320, 320, 'coldBlood'); 
	NG.eWin.appendChild(H1);
	var x2 = (MOB[TGT].offsetLeft+mob[TGT].cX-160);
	var y2 = (MOB[TGT].offsetTop+mob[TGT].cY-160);
	function doIt(x2,y2){
		T.to(H1, .1, {
			startAt:{
				rotation:~~(M.random()*(360))
			},
			rotation:(M.random()*(360)),
			ease:ez.lin
		});
		if(g.coldBloodBonus===1){
			var x2 = (MOB[TGT].offsetLeft+mob[TGT].cX-160);
			var y2 = (MOB[TGT].offsetTop+mob[TGT].cY-160);
			T.delayedCall(.1, function(){ 
				doIt(x2,y2);
			});
		}else{
			T.to(H1, .33, {
				force3D:"auto",
				opacity:0,top:307+160,left:968+160,width:0,height:0,
				onComplete:function(){
					Remove(H1);
				}
			});
		}
	}
	doIt(x2,y2);

}
$(function(){
	$NG.window3.on('mouseenter','#coldbloodId',function(){
		var CD = "60".fontcolor("#ff0000");
		var minimum = "100%".fontcolor("#00ff00");
		var minDam = ( M.ceil( ((agiTotal() )/3) )+"").fontcolor("#00ff00");
		var maxDam = ( M.ceil( ((agiTotal() )/3)+my.level/3 )+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Cold Blood";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Your next skill-based attack has a "+minimum+" chance of a critical hit and you absorb "+minDam+" to "+maxDam+" health.";
	});
});

function flashPowderReady(){
	if(D.getElementById('flashpowderId').textContent!==''){return;}
	if(castingGlobal==0){return;}
	if(bashStatus===0||fearStatus===0){ return; }
    setD('flashpowderId', false);
    BGP('flashpowderId', "-1500% 0%");
	refreshflashPowder.kill();
}
function flashPowderTimer(){
	refreshflashPowder = T.to('', .1, {repeat:-1, onRepeat:flashPowderReady});
}
function flashPowder(){
	if(btn.d.flashpowderId===true||my.level<11){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
    setD('flashpowderId', true);
    BGP('flashpowderId', "-1500% -100%");
	T.delayedCall(15, flashPowderTimer);
	timerTick(D.getElementById('flashpowderId'),15000/1000,'flashpowderId');
	Chat((mob[TGT].name + " is completely blinded by a burst of flash powder."),3);
	var Slot = TGT;
	if(my.talent10>=20){
		var atk = attackFunct();
		animateFireball(TGT, true);
		playAudio("spellDoneBoom");
		for(var i=0;i<=4;i++){
			if(i+1===Slot||i===Slot||i-1===Slot){
				if(mob[i].name){
					var dam = minMax( (atk/1.3), .75);
					g.myMagicDamage("fire", dam, i, checkCrit(), " is ignited by burning flash powder");
					interruptTarget(i);
					var sleepDuration = M.random()*(25000)+25000;
					if(mob[i].level > my.level){
						sleepDuration -= (M.pow((mob[i].level - my.level),1.25));
					}
					if(mob[i].rare===3){ sleepDuration=1500; }
					sleepTarget(i, sleepDuration, "Flash Powder", -480);
					animateBlind(i, sleepDuration);
				}
			}
		}
	}else{
		interruptTarget(Slot);
		var sleepDuration = M.random()*(25000)+25000;
		if(mob[Slot].level > my.level){
			sleepDuration -= (M.pow((mob[Slot].level - my.level),1.25));
		}
		if(mob[Slot].rare===3){ sleepDuration=1500; }
		sleepTarget(Slot, sleepDuration, "Flash Powder", -480);
		animateBlind(Slot, sleepDuration);
	}
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
	playAudio("cloak");
}
function sleepTarget(Slot, d, spellName, spriteX){
	interruptTarget(Slot);
	stopMob(Slot);
	setMobOpacity(Slot);
	mob[Slot].sleepStatus=true;
	mob[Slot].sleepTimer.kill();
	mob[Slot].sleepTimer = T.delayedCall(d/1000, function(){
		mob[Slot].sleepStatus=false;
	});
	addMobBuffIcon(spellName,Slot,"sleepIcon",d,spriteX);
}
$(function(){
	$NG.window3.on('mouseenter','#flashpowderId',function(){
		var CD = "15".fontcolor("#ff0000");
		var minimum = ( M.ceil(1+((weaponSkillCheck()/4.4)/3))+"").fontcolor("#00ff00");
		var multiplier = "50%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Flash Powder";
		var a=TTmag( (attackFunct()/1.3), .75, "fire", "Flash Powder");
		var s= "Cooldown: "+CD+" Seconds<br><br>"+
		"Blind your target by throwing flash powder in their eyes. They lose track of you, but if you attack them again the effect will wear off.";
		if(my.talent10>=20){ s+="<br><br>Flash powder ignites for "+a[0]+" to "+a[1]+" fire damage."; }
		NG.tooltipmsg.innerHTML = s;
	});
});

function hyperStrike(){
	if(btn.d.hyperstrikeId===true||my.level<13){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(hyperStrikeValue<0){ cooldownDurationBuff-=hyperStrikeValue; }
	hyperStrikeValue= -300-M.round((talent9()*.666)*10);
	cooldownDurationBuff+=hyperStrikeValue;
	beginGlobalCooldown();
	var dam = minMax((attackFunct()/24),.7);
	if(GLB.videoSetting==="High"){ animateHyperStrike(); }
	g.myPhysicalDamage(dam, TGT, 'Hyper Strike');
	Chat(("You feel your pulse quicken."),3);
	var d = 30000;
	hyperStrikeTimeout.kill(); 
	hyperStrikeTimeout = T.delayedCall(d/1000, function(){ 
		hyperStrikeExpire(); 
	});
	var spriteX = -160;
	hasteIconTimer.kill();
	hasteIconTimer = T.delayedCall(d/1000, function(){ 
		removeIcon("hasteIcon"); 
	});
	addBuffIcon("Hyper Strike","hasteIcon",d,spriteX);
	playAudio("quickness",0,1000,.7);
	CStat();
	g.drawMyMp(20);
}
function animateHyperStrike(){
	flashScreen("#fff",.3,1);
	function Pgo(interval){
		var X1 = M.random()*(640)-320;
		if(X1<0){
			var X2 = -960;
		}else{
			var X2 = 960;
		}
		var p1 = can('whiteparticle50', 5, X1, 560, 1280, 200);
		p1.alpha=.1;
		T.to(p1, 1.5, {
			x:X2,
			y:1000,
			scaleY:0,
			alpha:0,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(interval<30){ 
			T.delayedCall(.012, function(){ 
				Pgo(++interval);
			}); 
		}
	}
	Pgo(10);
}
$(function(){
	$NG.window3.on('mouseenter','#hyperstrikeId',function(){
		var MP = "20".fontcolor("#00ff00");
		var a=TTphy( (attackFunct()/24), .7, "Hyper Strike");
		var minimum = "30%".fontcolor("#00ff00");
		var duration = "30".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Hyper Strike";
		NG.tooltipmsg.innerHTML = "Generate: "+MP+" Technique Points<br><br>"+
		"Hyper Strike hits for "+a[0]+" to "+a[1]+" physical damage.<br><br>"+
		"Effect: Buffs your skill haste "+minimum+" for "+duration+" seconds.";
	});
});
function hyperStrikeExpire(){
	cooldownDurationBuff-=hyperStrikeValue;
	hyperStrikeValue = 0;
	hyperStrikeTimeout.kill();
	CStat();
}

function illusiveMistReset(){
	illusiveMistStatus=1;
}
function illusiveMistReady(){
	if(D.getElementById('illusivemistId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('illusivemistId', false);
    BGP('illusivemistId', "-1600% 0%");
	refreshillusiveMist.kill();
}
function illusiveMistTimer(){
	refreshillusiveMist = T.to('', .1, {repeat:-1, onRepeat:illusiveMistReady});
}
function illusiveMist(){
	if(btn.d.illusivemistId===true||my.level<15){return;}
	if(checkBashFear()===true){ return; }
    setD('illusivemistId', true);
    BGP('illusivemistId', "-1600% -100%");
	T.delayedCall(24, illusiveMistTimer);
	timerTick(D.getElementById('illusivemistId'),24000/1000,'illusivemistId');
	T.delayedCall(12, illusiveMistReset);
	Chat(("You dissipate into an ethereal mist."),3);
	illusiveMistStatus=0;
	var skillName = "Illusive Mist";
	var buffId = "illusiveMistIcon";
	var duration = 12000;
	var spriteX = -512;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	if(GLB.videoSetting==="High"){ animateIllusiveMist(); }
	playAudio("fade");
}
function animateIllusiveMist(){
	function Pgo(interval){
		var X1 = M.random()*(640)-320;
		var Y1 = 500;
		var X2 = M.random()*(1280);
		var p1 = can('purpleparticle50', 5, X1, Y1, 1280, 300);
		p1.alpha=.1;
		T.to(p1, 1, {
			x:X2,
			y:250,
			alpha:0,
			scaleX:.25,
			scaleY:.25,
			alpha:0,
			ease:ez.Qin,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(interval<40){ 
			T.delayedCall(interval/1000, function(){ 
				Pgo(++interval);
			}); 
		}
	}
	Pgo(10);
}
$(function(){
	$NG.window3.on('mouseenter','#illusivemistId',function(){
		var MP = "12".fontcolor("#00ff00");
		var CD = "24".fontcolor("#ff0000");
		var multiplier = "50%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Illusive Mist";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Your outline shifts making you difficult to attack. All damage is reduced by "+multiplier+" for "+MP+" seconds.";
	});
});

function staggerShotReady(){
	if(D.getElementById('staggershotId').textContent!==''){return;}
	if(castingSpell===0){return;}
	if(castingGlobal===0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('staggershotId', false);
    BGP('staggershotId', "-1000% 0%");
	refreshstaggerShot.kill();
	g.checkRogueSkills();
}
function staggerShotTimer(){
	refreshstaggerShot = T.to('', .1, {repeat:-1, onRepeat:staggerShotReady});
}
function staggerShot(){
	if(my.mp<20||btn.d.staggershotId===true||my.level<17){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('staggershotId', true);
    BGP('staggershotId', "-1000% -100%");
	T.delayedCall(25, staggerShotTimer);
	timerTick(D.getElementById('staggershotId'),25000/1000,'staggershotId');
	beginGlobalCooldown();
	var skillName = "Stagger Shot";
	var foo = 0;
	if(mob[TGT].lacerate>0){ foo = 20; }
	var multi=((my.mp+foo)/100+min70(agiTotal()/4))+1;
	var dam = minMax((attackFunct()/10)*multi,.7);
	var stunDuration = (my.mp*50)+1500;
	g.drawMyMp(-my.mp);
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animateLineNova(Slot); }
	var hit=g.myPhysicalDamage(dam, TGT, skillName);
	if(hit!==undefined){
		stunTarget(Slot, stunDuration, -320);
		playAudio("flshhit4");
	}
}
function animateLineNova(Slot, img){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-200);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-200);
	if(!img){
		img = "lineNovaWhite";
	}
	function doit(count){
		var e1 = can(img, 5, x2, y2, 400, 400, true);
		T.to(e1, .15, {
			alpha:0,
			scaleX:.25,
			scaleY:.25,
			ease:ez.sout,
			onComplete:function(){
				cRem(5, e1);
			}
		});
		count++;
		if(count<3){ 
			T.delayedCall(.05, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
}
$(function(){
	$NG.window3.on('mouseenter','#staggershotId',function(){
		var MP = "All".fontcolor("#00ff00");
		var CD = "25".fontcolor("#ff0000");
		var foo = 0;
		if(mob[TGT].lacerate>0){ foo = 20; }
		var multi=((my.mp+foo)/100+min70(agiTotal()/4))+1;
		var a=TTphy( (attackFunct()/10)*multi, .7, "Stagger Shot");
		var value2 = ((my.mp*50)+1500)/1000;
		var value1 = (value2+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Stagger Shot";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Technique Points<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Stagger Shot your target for "+a[0]+" to "+a[1]+" physical damage. The minimum damage and stun duration varies based on your TP value.<br><br>"+
		"Effect: Stun your target for "+value1+" seconds.";
	});
});

function hideRogue(){
	if(checkBashFear()===true||mobsFound()===true){ return; }
	if(hideStatus===1){
		$("#roguehideId").css({backgroundPosition:"-200% -300%"});
		Chat(("You disappear into the shadows."),3);
		setCurtainColor("#001");
		T.to(spellCurtain, 1, {
			alpha:.5,
			ease:ez.Qin
		});
		hideStatus=0;
	}else{
		$("#roguehideId").css({backgroundPosition:"-200% -100%"});
		Chat(("You emerge from the shadows."),3);
		T.to(spellCurtain, .5, {
			alpha:0,
			ease:ez.Qin
		});
		hideStatus=1;
	}
}
$(function(){
	$NG.window3.on('mouseenter','#roguehideId',function(){
		var bon = 60;
		if(my.race==="Halfling"){
			bon+=30;
		}
		NG.tooltipname.innerHTML = "Hide";
		NG.tooltipmsg.innerHTML = "Attacking while hidden will increase your initial attacks' damage by "+green(bon+"%")+" and stun your target for 5 seconds.";
	});
});

function widowStrike(){
	if(btn.d.widowstrikeId===true||my.level<20){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	beginGlobalCooldown();
	if(g.autoAttackStatus===1&&Lmy.autoAttackOption==="On"){ toggleAutoAttackStatus(); }
	var skillName = "Venom Strike";
	var Slot = TGT;
	g.drawMyMp(20);
	Chat((mob[TGT].name+" is inflicted by a venomous plague."),3);
	// standard 1h calculation
	var damage = minMax(~~(attackFunct()/16),.9);
	mob[Slot].widowStrikeTickCount=0;
	mob[Slot].widowStrikeDamage=damage;
	mob[Slot].widowStrikeInterval.kill();
	mob[Slot].widowStrikeInterval = T.to('', 1, {repeat:-1, onRepeat:function(){
		widowStrikeTick(Slot);
	}});
	//thorns
	if(mob[Slot].thornsActive===0){
		Chat(("You are pierced by thorns for "+M.ceil(mob[Slot].level/10)+" damage."),3);
		var dam2=M.ceil(mob[Slot].level/10);
		my.hp-=dam2;
		battleDamageTaken+=dam2;
		if(my.hp<=0){
			Chat(("You have been slain by a shield of thorns!").fontcolor("ff0000"));
			monsterKilledMe();
		}
	}
	//lavashield
	if(mob[Slot].lavaShieldActive===0){
		Chat(("You are burned by lava for "+M.ceil(mob[Slot].level/6)+" damage."),3);
		var dam1=M.ceil(mob[Slot].level/6);
		my.hp-=dam1;
		battleDamageTaken+=dam1;
		if(my.hp<=0){
			Chat(("You have been slain by a shield of lava!").fontcolor("ff0000"));
			monsterKilledMe();
		}
	}
	addMobBuffIcon("Widow Strike",Slot,"widowStrikeIcon",24000,-192);
	if(GLB.videoSetting==="High"){ animateWidowStrike(Slot); }
	playAudio("stab");
}
function widowStrikeTick(Slot){
	if(mob[Slot].name===""){
		mob[Slot].widowStrikeInterval.kill();
		mob[Slot].widowStrikeTickCount=0;
		return;
	}
	if(GLB.videoSetting==="High"){ animatePoisonDrop(Slot); }
	g.myDotDamage(mob[Slot].widowStrikeDamage, Slot, "poison", "Widow Strike");
	mob[Slot].widowStrikeTickCount+=1;
	if(mob[Slot].widowStrikeTickCount===24){
		mob[Slot].widowStrikeInterval.kill();
		mob[Slot].widowStrikeTickCount=0;
	}
}
function animateWidowStrike(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+100);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-100);
	var e1 = can('widowStrike', 5, x2, y2, 0, 0);
	T.to(e1, .1, {
		scaleX:1,
		scaleY:1,
		x:x2-200,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .3, {
				scaleX:0,
				scaleY:0,
				x:x2-200,
				y:y2+200,
				alpha:0,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
	animateFlyingPoison(Slot, 8);
}
function flipImg(e, chance){
	if(chance===undefined){ chance=.5; }
	if(M.random()<chance){
		e.scaleX = e.scaleX*-1;
	}
}
function animateFlyingPoison(Slot, total){
	if(Slot===undefined){ Slot = TGT; }
	if(mob[Slot].name===''){ return; }
	if(!total){ total = 1; }
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-50);
	for(var i=0;i<total;i++){
		var p4 = can('poisonSpray', 7, x2, y2, 25, 25, true);
		flipImg(p4);
		var goX = x2+M.random()*(420);
		var goY = M.random()*(55)+663;
		T.to(p4, .2, {
			y:goY,
			x:goX
		});
		fadePoison(p4);
	}
}
function fadePoison(e){
	var val = 3;
	if(e.scaleX<0){
		val = -3;
	}
	T.to(e, 8+(M.random()*(6)), {
		scaleX:val,
		scaleY:1.5,
		alpha:0,
		onComplete:function(){
			cRem(7, e);
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#widowstrikeId',function(){
		var MP = "20".fontcolor("#00ff00");
		var a=TTdot( ~~(attackFunct()/16), .9, "poison", "Widow Strike");
		NG.tooltipname.innerHTML = "Widow Strike";
		NG.tooltipmsg.innerHTML = "Generate: "+MP+" Technique Points<br><br>"+
		"Widow Strike inflicts "+a[0]+" to "+a[1]+" poison damage every second for 24 seconds. Damage is based on your weapon skill and your weapon's damage.<br><br>"+
		"Effect: Prevents all passive regeneration effects.";
	});
});

function lobotomizeReady(){
	if(D.getElementById('lobotomizeId').textContent!==''){return;}
	if(castingSpell===0){return;}
	if(castingGlobal===0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('lobotomizeId', false);
    BGP('lobotomizeId', "-1100% 0%");
	refreshlobotomize.kill();
	g.checkRogueSkills();
}
function lobotomizeTimer(){
	refreshlobotomize = T.to('', .1, {repeat:-1, onRepeat:lobotomizeReady});
}
function lobotomize(){
	if(my.mp<20||btn.d.lobotomizeId===true||my.level<24){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('lobotomizeId', true);
    BGP('lobotomizeId', "-1100% -100%");
	T.delayedCall(22, lobotomizeTimer);
	timerTick(D.getElementById('lobotomizeId'),22000/1000,'lobotomizeId');
	beginGlobalCooldown();
	var skillName = "Lobotomize";
	var foo = 0;
	if(mob[TGT].lacerate>0){ foo = 20; }
	var multi=((my.mp+foo)/100+min70(agiTotal()/5))+1;
	var dam = minMax((attackFunct()/7)*multi,.8);
	var silenceDuration = 2000+(my.mp*50);
	if(mob[TGT].dauntless){ silenceDuration*=dauntlessReduction(); }
	g.drawMyMp(-my.mp);
	Chat((mob[TGT].name+" is beset by a torpid haze."),3);
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animateRings(Slot, 6); }
	var hit=g.myPhysicalDamage(dam, TGT, skillName);
	if(hit!==undefined){
		silenceTarget(Slot, silenceDuration, -352);
	}
	playAudio("handofgod");
}
function animateRings(Slot, total){
	if(!total){ total = 1; }
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var xHeight = mob[Slot].imageHeight;
	var y2 = (MOB[Slot].offsetTop+xHeight);
	var xWidth = mob[Slot].imageWidth/2+40;
	//execute
	function doIt(count){
		var p5 = can('tremorFG', 5, x2-xWidth, y2-50, xWidth*2, 50);
		T.to(p5, .5, {
			y:y2-250,
			onComplete:function(){
				cRem(5, p5);
			}
		});
		var p4 = can('tremorBG', 7, x2-xWidth, y2-50, xWidth*2, 50);
		T.to(p4, .5, {
			y:y2-250,
			onComplete:function(){
				cRem(7, p4);
			}
		});
		count++;
		if(count<total){ 
			T.delayedCall(.05, function(){ 
				doIt(count);
			}) 
		}
	}
	doIt(0);
}
$(function(){
	$NG.window3.on('mouseenter','#lobotomizeId',function(){
		var MP = "All".fontcolor("#00ff00");
		var CD = "22".fontcolor("#ff0000");
		var foo = 0;
		if(mob[TGT].lacerate>0){ foo = 20; }
		var multi=((my.mp+foo)/100+min70(agiTotal()/5))+1;		
		var a=TTphy( (attackFunct()/7)*multi, .8, "Lobotomize");
		var value1 = (2000+(my.mp*50))/1000+"".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Lobotomize";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Technique Points<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Lobotomize your target for "+a[0]+" to "+a[1]+" physical damage. The minimum damage and silence duration varies based on your TP value.<br><br>"+
		"Effect: Silences your target for "+value1+" seconds.";
	});
});

function ancientWillReady(){
	if(D.getElementById('ancientwillId').textContent!==''){return;}
	if(castingGlobal==0){return;}
    setD('ancientwillId', false);
    BGP('ancientwillId', "-1700% 0%");
	refreshancientwill.kill();
	ancientWillStatus=false;
	g.checkRogueSkills();
}
function ancientWillTimer2(){
	refreshancientwill = T.to('', .1, {repeat:-1, onRepeat:ancientWillReady});
}
function ancientWill(){
	if(fearStatus===1&&rootStatus===1&&bashStatus===1||paused===true){ return; }
	if(btn.d.ancientwillId===true||my.level<28){return;}
    setD('ancientwillId', true);
    BGP('ancientwillId', "-1700% -100%");
	ancientWillStatus=true;
	ancientWillTimer.kill();
	ancientWillTimer = T.delayedCall(20, ancientWillTimer2);
	timerTick(D.getElementById('ancientwillId'),20000/1000,'ancientwillId');
	Chat(("An ancient force animates your spirit."),3);
	if(fearStatus===0||rootStatus===0||bashStatus===0){
		mirageStrikeStatus+=2;
		if(mirageStrikeStatus > 5){ mirageStrikeStatus=5; }
		addBuffIcon("Mirage Strike","mirageStrikeIcon",0,-224);
		var newBuff1 = $('<div>').css({
				width:32,
				height:32,
				color:"#0f0",
				position:"absolute",
				fontSize:14,
				top:22,
				left:2,
				padding:0,
				background:"transparent",
				zIndex:76
			}).attr("id","mirageStrikeCount")
			.addClass("blackOutline3")
			.appendTo("#mirageStrikeIcon")
			.html(mirageStrikeStatus);
		g.drawMyMp(40);
	}
	//break fear
	fearStatus=1;
	monsterFearCooldown.kill();
	//enable run
	if(rootStatus===0){
		setD('runId', false);
		BGP('runId', "-100% -200%");
		monsterRootCooldown.kill();
	}
	rootStatus=1;
	//break stun
	stunCooldown.kill();
	bashStatus=1;
	$("#mobBashIcon,#mobFearIcon,#mobRootIcon").remove();
	lockoutTimer1.kill();
	globalCooldownEnd2();
	g.checkRogueSkills();
	if(GLB.videoSetting==="High"){ animateAncientWill(); }
	playAudio("cobra");
}
function animateAncientWill(){
	flashScreen("#ffa",.3,1);
	function doIt(count){
		var size = (M.random()*(20)+5);
		var x = M.random()*(1290);
		var y = M.random()*(50)+497;
		var p1 = can('yellowparticle50', 5, x, y, size, size);
		T.to(p1, .5, {
			scaleX:0,
			scaleY:0,
			x:"+="+(size/2),
			y:"+="+(50+(size/2)),
			ease:ez.Qin,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<40){ 
			T.delayedCall(.025, function(){ 
				doIt(++count);
			}); 
		}
	}
	doIt(0);
}
$(function(){
	$NG.window3.on('mouseenter','#ancientwillId',function(){
		var CD = "20".fontcolor("#ff0000");
		var minimum = ( M.ceil(1+((weaponSkillCheck()/4.4)/3))+"").fontcolor("#00ff00");
		var multiplier = "50%".fontcolor("#00ff00");
		var value1 = "40".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Ancient Will";
		NG.tooltipmsg.innerHTML = "Generate: "+value1+" Technique Points<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"You are possessed by an ancient presence that breaks you from fear, stun, and root effects. In your moment of desperation you are shielded by two mirages.<br><br>"+
		"Ancient Will is activated when you are affected by stun, fear, or root.";
	});
});

function mirageStrikeReady(){
	if(D.getElementById('miragestrikeId').textContent!==''){return;}
	if(castingSpell===0){return;}
	if(castingGlobal===0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('miragestrikeId', false);
    BGP('miragestrikeId', "-700% 0%");
	refreshmirageStrike.kill();
}
function mirageStrikeTimer(){
	refreshmirageStrike = T.to('', .1, {repeat:-1, onRepeat:mirageStrikeReady});
}
function mirageStrike(){
	if(btn.d.miragestrikeId===true||my.level<32){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('miragestrikeId', true);
    BGP('miragestrikeId', "-700% -100%");
	var d = 15000;
	if(my.talent4>=20){ d-=2000; }
	if(Set.Bloodletter>=6){ d-=3000; }
	T.delayedCall(d/1000, mirageStrikeTimer);
	timerTick(D.getElementById('miragestrikeId'),d/1000,'miragestrikeId');
	beginGlobalCooldown();
	var skillName = "Mirage Strike";
	var dam = minMax((attackFunct()/4),.8);
	mirageStrikeStatus+=2;
	if(mirageStrikeStatus > 5){ mirageStrikeStatus=5; }
	var Slot=TGT;
	if(GLB.videoSetting==="High"){ 
		animateMirageStrike(Slot);
		for(var i=1;i<=mirageStrikeStatus;i++){
			animateMirageStrike2(Slot);
		}
	}
	g.myPhysicalDamage(dam, Slot, skillName);
	Chat("Mirror images appear to defend you.",3);
	var buffId = "mirageStrikeIcon";
	var duration = 0;
	var spriteX = -224;
	addBuffIcon(skillName,buffId,duration,spriteX);
	var newBuff1 = $('<div>').css({
			width:32,
			height:32,
			color:"#0f0",
			position:"absolute",
			fontSize:14,
			top:22,
			left:2,
			padding:0,
			background:"transparent",
			zIndex:76
		}).attr("id","mirageStrikeCount")
		.addClass("blackOutline3")
		.appendTo("#mirageStrikeIcon")
		.html(mirageStrikeStatus);
	playAudio("summon");
	g.drawMyMp(20);
}
function animateMirageStrike(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+100);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-100);
	var e1 = can('mirageStrike', 5, x2, y2, 0, 0);
	T.to(e1, .1, {
		scaleY:1,
		scaleX:1,
		x:x2-200,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .1, {
				scaleX:0,
				scaleY:0,
				y:y2+200,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
}
function animateMirageStrike2(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+100);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-100);
	var x3 = M.random()*(600)-300;
	var y3 = M.random()*(100)-50;
	var e1 = can('mirageStrike', 5, x2+x3, y2+y3, 0, 0);
	T.to(e1, .1, {
		scaleX:1,
		scaleY:1,
		x:x2-200+x3,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .1, {
				scaleX:0,
				scaleY:0,
				y:y2+200+y3,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#miragestrikeId',function(){
		var MP = "20".fontcolor("#00ff00");
		var CD = green("15");
		if(my.talent4>=20){ green("13"); }
		var a=TTphy( (attackFunct()/4), .8, "Mirage Strike");
		NG.tooltipname.innerHTML = "Mirage Strike";
		NG.tooltipmsg.innerHTML = "Generate: "+MP+" Technique Points<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Mirage Strike hits for "+a[0]+" to "+a[1]+" physical damage.<br><br>"+
		"Effect: Create two mirages that act as decoys in combat. You can have up to five mirages at once. Mirages can absorb physical, magical, and dot-based damage.";
	});
});

$(function(){
	$NG.window3.on('mouseenter','#prowlinggashId',function(){
		var MP = "All".fontcolor("#00ff00");
		var cooldown = green("30");
		if(my.talent12>=20){green("12");}
		var foo = 0;
		if(mob[TGT].lacerate>0){ foo = 20; }
		var hits=(((my.mp+foo)/20)*1.25);
		if(my.talent12>=20){ hits=M.round(hits*2); }
		hits=~~(hits);
		if(hits===0){ hits=''; }
		hits=green(hits);
		var multi=((my.mp+foo)/100)+1;		
		var a=TTphy( (attackFunct()/8+min70(agiTotal()/3))*multi, .5, "Prowling Gash");
		NG.tooltipname.innerHTML = "Prowling Gash";
		NG.tooltipmsg.innerHTML = "Cooldown: "+cooldown+" Seconds<br>"+
		"Cost: "+MP+" Technique Points<br><br>"+
		"Unleash a cone of "+hits+" physical attacks for "+a[0]+" to "+a[1]+" physical damage. The damage varies based on your TP value.";
	});
});
function prowlingGashReady(){
	if(D.getElementById('prowlinggashId').textContent!==''){return;}
	if(castingSpell===0){return;}
	if(castingGlobal===0){return;}
	if(bashStatus===0||fearStatus===0){ return; }
    setD('prowlinggashId', false);
    BGP('prowlinggashId', "-1200% 0%");
	refreshprowlingGash.kill();
	g.checkRogueSkills();
}
function prowlingGashTimer(){
	refreshprowlingGash = T.to('', .1, {repeat:-1, onRepeat:prowlingGashReady});
}
function prowlingGash(){
	if(my.mp<20||btn.d.prowlinggashId===true||my.level<38){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('prowlinggashId', true);
    BGP('prowlinggashId', "-1200% -100%");
	var d = 30000;
	if(my.talent12>=20){d=12000;}
	T.delayedCall(d/1000, prowlingGashTimer);
	timerTick(D.getElementById('prowlinggashId'),d/1000,'prowlinggashId');
	beginGlobalCooldown();
	var foo = 0;
	if(mob[TGT].lacerate>0){ foo = 20; }
	var savedMP=my.mp;
	var hits=(((my.mp+foo)/20)*1.25);
	g.drawMyMp(-savedMP);
	if(my.talent12>=20){ hits=hits*2; }
	hits=~~(hits);
	function doit(count){
		if(countMobs()===0){ return; }
		var Slot = selectFlayTarget();
		playAudio("slice");
		if(GLB.videoSetting==="High"){ animateProwlingGash(Slot); }
		var multi=((savedMP+foo)/100)+1;
		var dam = minMax((attackFunct()/8+min70(agiTotal()/3))*multi,.5);
		g.myPhysicalDamage(dam, Slot, 'Prowling Gash');
		if(count<hits){
			T.delayedCall(.125, function(){
				doit(++count);
			});
		}
	}
	doit(1);
}
function animateProwlingGash(Slot){
	if(!mob[Slot].name){ return; }
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+200);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-200);
	var e1 = can('prowlingGash', 5, x2, y2, 0, 0);
	T.to(e1, .1, {
		scaleX:2,
		scaleY:2,
		x:x2-400,
		ease:ez.Qin,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var e2 = can('prowlingGash', 5, x2, y2, 0, 0);
	T.to(e2, .1, {
		scaleX:2,
		scaleY:2,
		x:x2-400,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e2, 1, {
				startAt:{
					alpha:.2
				},
				alpha:0,
				onComplete:function(){
					cRem(5, e2);
				}
			});
		}
	});
}

function tigerStrike(){
	if(btn.d.tigerstrikeId===true){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	beginGlobalCooldown();
	for(var i=(TGT-1);i<=(TGT+1);i++){
		if(i>=0){
			if(mob[i].name){
				var dam = minMax((attackFunct()/16),.5);
				if(GLB.videoSetting==="High"){ animateTigerStrike(i); }
				g.myPhysicalDamage(dam, i, 'Tiger Strike');
			}
		}
	}
	g.drawMyMp(5);

}
function animateTigerStrike(Slot){
	function doIt(count){
		var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+100);
		var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-(150-(count*50)));
		var e1 = can('tigerStrike', 5, x2, y2, 0, 0);
		T.to(e1, .125, {
			x:x2-200,
			scaleX:1,
			scaleY:1,
			ease:ez.Qin,
			onComplete:function(){
				T.to(e1, .125, {
					y:y2+200,
					scaleX:0,
					scaleY:0,
					onComplete:function(){
						cRem(5, e1);
					}
				});
			}
		});
		count++;
		if(count<3){ 
			T.delayedCall(.025, function(){ 
				doIt(count);
			}); 
		}
	}
	doIt(0);
}
$(function(){
	$NG.window3.on('mouseenter','#tigerstrikeId',function(){
		var MP = "5".fontcolor("#00ff00");
		var a=TTphy( (attackFunct()/16), .5, "Tiger Strike");
		NG.tooltipname.innerHTML = "Tiger Strike";
		NG.tooltipmsg.innerHTML = "Generate: "+MP+" Spirit<br><br>"+
		"Tiger Strike your target and adjacent targets for "+a[0]+" to "+a[1]+" physical damage.";
	});
});

function craneKick(){
	if(my.mp<20||btn.d.cranekickId===true||my.level<2){ return; }
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	beginGlobalCooldown();
	var currentMana=my.mp;
	var Slot=TGT;
	function doit(){
		playAudio("flshhit5");
		for(var i=(Slot-1);i<=(Slot+1);i++){
			if(i>=0&&i<=4){
				if(mob[i].name){
					if(GLB.videoSetting==="High"){ animateCraneKick(i); }
					var multi = 1+(currentMana/200);
					var dam = minMax( ((attackFunct()/9)*(1+P.eq[11].armor/80))*multi,.7);
					g.myPhysicalDamage(dam, i, "Crane Kick");
				}
			}
		}
	}
	doit();
	function doit2(){
		if(GLB.videoSetting==="High"){ animateCraneKick(Slot); }
		var multi = 1+(currentMana/200);
		var dam = minMax( ((attackFunct()/9)*(1+P.eq[11].armor/80))*multi,.7);
		g.myPhysicalDamage(dam, Slot, "Crane Kick");
	}
	if(my.talent10>=20){
		T.delayedCall(.5, function(){
			doit2();
		});
	}	
	g.drawMyMp(-20);

}
function animateCraneKick(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-150);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY+150);
	var e1 = can('craneKick', 5, x2, y2, 0, 0);
	T.to(e1, .15, {
		scaleY:1.5,
		scaleX:1.5,
		y:y2-300,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .1, {
				scaleX:0,
				scaleY:0,
				x:x2+300,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#cranekickId',function(){
		var MP = "20".fontcolor("#00ff00");
		var multi = 1+(my.mp/200);
		var a=TTphy( ((attackFunct()/9)*(1+P.eq[11].armor/80))*multi, .7, "Crane Kick");
		NG.tooltipname.innerHTML = "Crane Kick";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Spirit<br><br>"+
		"Crane Kick hits your target and adjacent targets causing "+a[0]+" to "+a[1]+" physical damage. Damage increases with your current spirit value. Your boots' armor value affects Crane Kick's damage.";
	});
});


function feignDeathReady(){
	if(D.getElementById('feigndeathId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
	setD('feigndeathId', false);
	BGP('feigndeathId', "-1300% 0%");
	g.checkMonkSkills();
	refreshfeignDeath.kill();
}
function feignDeathTimer(){
	refreshfeignDeath = T.to('', .1, {repeat:-1, onRepeat:feignDeathReady});
}
function feignDeath(){
	if(my.level<5){ return; }
	if(btn.d.feigndeathId===true){return;}
	if(checkBashFear()===true){ return; }
	if(mobsFound()===true){
		setD('feigndeathId', true);
		BGP('feigndeathId', "-1300% -100%");
		T.delayedCall(15, feignDeathTimer);
		timerTick(D.getElementById('feigndeathId'),15000/1000,'feigndeathId');
		if(M.random() > .55){
			Chat("You fall to the ground. Convinced of your death, the enemy leaves the battle.");
			hideStatus=0;
			escapedFromBattle();
			return;
		}else{
			Chat("You fall to the ground, but nobody is fooled this time.");
		}
	}else{
		if(hideStatus===0){ return; }
		BGP('feigndeathId', "-1300% -100%");
		Chat("You feign your death.");
		hideStatus=0;
	}
	var zit = "death_mb";
	if(my.gender==="Female"){
		zit = "death_fl";
	}
	playAudio(zit);
}
$(function(){
	$NG.window3.on('mouseenter','#feigndeathId',function(){
		var CD = "15".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Feign Death";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Slow your heartbeat to a crawl and fall to the ground. Some opponents may be convinced you are actually dead. While feigning your death, you cannot be ambushed.";
	});
});

function resetCritBonus(){
	eagleStrikeStatus=false;
	CStat();
}
function eagleStrikeReady(){
	if(D.getElementById('eaglestrikeId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
	$NG.eaglestrikeId.removeClass("disabled").css({backgroundPosition:"-400% 0"});
    setD('eaglestrikeId', false);
    BGP('eaglestrikeId', "-400% 0%");
	g.checkMonkSkills();
	refresheagleStrike.kill();
	return;
}
function eagleStrikeTimer(){
	refresheagleStrike = T.to('', .1, {repeat:-1, onRepeat:eagleStrikeReady});
}
function eagleStrike(){
	if(btn.d.eaglestrikeId===true||my.level<3){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('eaglestrikeId', true);
    BGP('eaglestrikeId', "-400% -100%");
	T.delayedCall(12, eagleStrikeTimer);
	timerTick(D.getElementById('eaglestrikeId'),12000/1000,'eaglestrikeId');
	beginGlobalCooldown();
	var Slot=TGT;
	var skillName = "Eagle Strike";
	var dam = minMax((attackFunct()/10),.9);
	if(GLB.videoSetting==="High"){ 
		animateEagleStrike(Slot); 
	}
	var hit=g.myPhysicalDamage(dam, Slot, skillName);
	if(my.talent1>=20){
		if(hit!==undefined){
			playAudio("flshhit3");
			stunTarget(Slot, 3000, '-128px');
		}
	}
	g.drawMyMp(5);
	eagleStrikeStatus=true;
	T.delayedCall(4, resetCritBonus);
	CStat();
	var buffId = "eagleStrikeIcon";
	var duration = 4000;
	var spriteX = -128;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function animateEagleStrike(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var e1 = can('whiteLight3', 5, x2-200, y2-720, 400, 400, true);
	e1.alpha = .2;
	T.to(e1, .5, {
		y:y2-175,
		ease:ez.xout,
		onComplete:function(){
			T.to(e1, .25, {
				scaleX:0,
				scaleY:0,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
	var p4 = can('eagleStrike', 5, x2-60, y2-352, 0, 0, true);
	T.to(p4, .5, {
		scaleX:1,
		scaleY:1,
		y:"+="+100,
		ease:ez.xout,
		onComplete:function(){
			T.to(p4, .25, {
				scaleX:0,
				scaleY:0,
				onComplete:function(){
					cRem(5, p4);
				}
			});
		}
	});
	animateBurst(Slot);
}
$(function(){
	$NG.window3.on('mouseenter','#eaglestrikeId',function(){
		var MP = "5".fontcolor("#00ff00");
		var CD = "12".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/10), .9, "Eagle Strike");
		var value1 = "50%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Eagle Strike";
		var s="Generate: "+MP+" Spirit<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Eagle Strike your target for "+a[0]+" to "+a[1]+" physical damage.<br><br>"+
		"Effect: Your critical hit rate is increased by "+value1+" for 4 seconds.";
		if(my.talent1>=20){ s+="<br><br>Effect: Stun target for "+green("3")+" seconds."; }
		NG.tooltipmsg.innerHTML = s;
	});
});


function windmillKickReady(){
	if(D.getElementById('windmillkickId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('windmillkickId', false);
    BGP('windmillkickId', "-900% 0%");
	g.checkMonkSkills();
	refreshwindmillKick.kill();
}
function windmillKickTimer(){
	refreshwindmillKick = T.to('', .1, {repeat:-1, onRepeat:windmillKickReady});
}
function windmillKick(){
	if(my.mp<25||btn.d.windmillkickId===true||my.level<7){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	var d = 25000;
	if(Set.Friar>=6){ d -= 13000; }
    setD('windmillkickId', true);
    BGP('windmillkickId', "-900% -100%");
	T.delayedCall(d/1000, windmillKickTimer);
	timerTick(D.getElementById('windmillkickId'),d/1000,'windmillkickId');
	beginGlobalCooldown();
	var skillName = "Windmill Kick";
	var dam = minMax((attackFunct()/2.5)*(1+P.eq[11].armor/60),.8);
	var Slot = TGT;
	mob[Slot].spellActive.kill();
	interruptTarget(Slot);
	if(GLB.videoSetting==="High"){ animateWindmillKick(Slot); }
	g.myPhysicalDamage(dam, Slot, skillName);
	g.drawMyMp(-25);
	playAudio("flshhit4");
	startInvincible(1000);
	if(my.talent5>=20){
		playAudio('novaice');
		animateNova('frostNova');
		for(var i=0;i<=4;i++){
			if(mob[i].name){
				var dam = minMax(attackFunct()/3, .85);
				var hit=g.myMagicDamage('cold', dam, i, checkCrit(), "Wave of Frost");
				if(hit!==undefined){
					chillTarget(i,7000,-288);
				}
			}
		}
	}
}
function animateWindmillKick(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-150);
	var y2 = 670;
	var p4 = can('windmillKick', 7, x2-600, y2, 1500, 0);
	p4.alpha = .3;
	T.to(p4, .2, {
		scaleY:3.5,
		y:y2-900,
		ease:ez.Qin,
		onComplete:function(){
			T.to(p4, .5, {
				alpha:0,
				scaleX:10.5,
				scaleY:1,
				x:x2-900,
				onComplete:function(){
					cRem(7, p4);
				}
			});
		}
	});
	var p3 = can('windmillKick', 5, x2, y2, 300, 0);
	T.to(p3, .2, {
		scaleY:3.5,
		y:y2-900,
		ease:ez.Qin,
		onComplete:function(){
			T.to(p3, .5, {
				alpha:0,
				scaleY:1,
				onComplete:function(){
					cRem(5, p3);
				}
			});
		}
	});
	
	T.delayedCall(.15, animateTremor, [x2+150, 600, 5]);
}
$(function(){
	$NG.window3.on('mouseenter','#windmillkickId',function(){
		var MP = "25".fontcolor("#00ff00");
		var CD = 25;
		if(Set.Friar>=6){ CD -= 13; }
		var a=TTphy( (attackFunct()/2.5)*(1+P.eq[11].armor/60), .8, "Windmill Kick");
		var b=TTmag( (attackFunct()/3), .85, "cold", "Wave of Frost");
		NG.tooltipname.innerHTML = "Windmill Kick";
		var s="Cost: "+MP+" Spirit<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Windmill Kick hits your target causing "+a[0]+" to "+a[1]+" physical damage. Your boots' armor value affects Windmill Kick's damage.<br><br>";
		if(my.talent5>=20){
			s+= "A Wave of Frost hits your target for "+b[0]+" to "+b[1]+" cold damage, slowing all targets for seven seconds.<br><br>";
		}
		s+= "Effect: Casting targets are interrupted and makes you invincible for 1 second.";
		NG.tooltipmsg.innerHTML = s;
	});
});

function mendReady(){
	if(D.getElementById('mendId').textContent!==''){return;}
	if(castingGlobal==0){return;} 
	if(bashStatus===0||fearStatus===0){ return; }
    setD('mendId', false);
    BGP('mendId', "-1400% 0%");
	g.checkMonkSkills();
	refreshmend.kill();
}
function mendTimer(){
	refreshmend = T.to('', .1, {repeat:-1, onRepeat:mendReady});
}
function mend(){
	if(btn.d.mendId===true||my.level<11){return;}
	if(checkBashFear()===true){ return; }
    setD('mendId', true);
    BGP('mendId', "-1400% -100%");
	T.delayedCall(30, mendTimer);
	timerTick(D.getElementById('mendId'),30000/1000,'mendId');
	var healAmount=M.round(my.maxHp*.25);
	g.popupHeal(healAmount);
	Chat(("You mend your wounds."),3);
	animateHealing('yellow');
	playAudio("spellCastHeal3");
}
$(function(){
	$NG.window3.on('mouseenter','#mendId',function(){
		var CD = "30".fontcolor("#ff0000");
		var MP = "25%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Mend";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Mend your wounds and recover "+MP+" of your maximum health value.";
	});
});


function resetSpeedBonus(){
	hasteBuff+=333;
	cheetahStrikeStatus=false;
	CStat();
}
function cheetahStrikeReady(){
	if(D.getElementById('cheetahstrikeId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('cheetahstrikeId', false);
    BGP('cheetahstrikeId', "-500% 0%");
	g.checkMonkSkills();
	refreshcheetahStrike.kill();
}
function cheetahStrikeTimer(){
	refreshcheetahStrike = T.to('', .1, {repeat:-1, onRepeat:cheetahStrikeReady});
}
function cheetahStrike(){
	if(btn.d.cheetahstrikeId===true||my.level<17){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('cheetahstrikeId', true);
    BGP('cheetahstrikeId', "-500% -100%");
	T.delayedCall(30, cheetahStrikeTimer);
	timerTick(D.getElementById('cheetahstrikeId'),30000/1000,'cheetahstrikeId');
	beginGlobalCooldown();
	var skillName = "Cheetah Strike";
	var dam = minMax((attackFunct()/10),.8);
	if(GLB.videoSetting==="High"){ animateCheetahStrike(TGT); }
	g.myPhysicalDamage(dam, TGT, skillName);
	g.drawMyMp(5);
	if(cheetahStrikeStatus===true){ 
		cheetahStrikeTimeout.kill(); 
		hasteBuff+=333; 
	}
	cheetahStrikeStatus=true;
	hasteBuff -= 333;
	cheetahStrikeTimeout.kill(); 
	cheetahStrikeTimeout = T.delayedCall(12, resetSpeedBonus);
	var buffId = "hasteIcon";
	var duration = 12000;
	var spriteX = -160;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	playAudio("quickness",0,1000,.7);
	CStat();
	var Slot=TGT;
	if(my.talent6>=20){
		playAudio("lightning2");
		for(var i=0;i<=4;i++){
			if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
				if(GLB.videoSetting==="High"){ animateLightningBlast(i); }
				var dam = minMax(attackFunct()/1.5, .6);
				g.myMagicDamage('lightning', dam, i, checkCrit(), "Thunderbolt");
			}
		}
	}
}
function animateCheetahStrike(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var p3 = can('whiteLight3', 7, x2-1280, y2-720, 2560, 994);
	p3.alpha = .1;
	T.to(p3, .5, {
		y:y2-636,
		x:x2-1280,
		ease:ez.xout,
		onComplete:function(){
			cRem(7, p3);
		}
	});
	var p4 = can('cheetahStrike', 5, x2-75, y2-300, 0, 0, true);
	T.to(p4, .5, {
		y:"+="+100,
		scaleX:1,
		scaleY:1,
		ease:ez.xout,
		onComplete:function(){
			T.to(p4, .25, {
				scaleX:0,
				scaleY:0,
				onComplete:function(){
					cRem(5, p4);
				}
			});
		}
	});
	animateBurst(Slot);
}
$(function(){
	$NG.window3.on('mouseenter','#cheetahstrikeId',function(){
		var MP = "5".fontcolor("#00ff00");
		var CD = "30".fontcolor("#ff0000");
		var haste = "33%".fontcolor("#00ff00");
		var a=TTphy( (attackFunct()/10), .8, "Cheetah Strike");
		var b=TTmag( attackFunct()/1.5, .6, "lightning", "Thunderbolt");
		NG.tooltipname.innerHTML = "Cheetah Strike";
		var s ="Generate: "+MP+" Spirit<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Cheetah Strike your target for "+a[0]+" to "+a[1]+" physical damage.<br><br>";
		if(my.talent6>=20){
			s+= "A Thunderbolt hits three targets for "+b[0]+" to "+b[1]+" lightning damage.<br><br>";
		}
		s+="Effect: Buff your haste by "+haste+" for 12 seconds.";
		
		NG.tooltipmsg.innerHTML = s;
	});
});


function ancestralFlurryReady(){
	if(D.getElementById('ancestralflurryId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('ancestralflurryId', false);
    BGP('ancestralflurryId', "-1000% 0%");
	g.checkMonkSkills();
	refreshancestralFlurry.kill();
}
function ancestralFlurryTimer(){
	refreshancestralFlurry = T.to('', .1, {repeat:-1, onRepeat:ancestralFlurryReady});
}
function ancestralFlurry(){
	if(my.mp<24||btn.d.ancestralflurryId===true||my.level<32){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('ancestralflurryId', true);
    BGP('ancestralflurryId', "-1000% -100%");
	T.delayedCall(35, ancestralFlurryTimer);
	timerTick(D.getElementById('ancestralflurryId'),35000/1000,'ancestralflurryId');
	beginGlobalCooldown();
	var skillName = "Ancestral Flurry";
	var atk=attackFunct();
	for (var i=180;i<=2160;i+=180){
		ancestralFlurryTimeout = T.delayedCall(i/1000, function(){
			if(mob[TGT].name){
				playAudio("flshhit"+ ~~(M.random()*(3)+5));
				if(GLB.videoSetting==="High"){ animateAncestralFlurry(TGT); }
				var dam = minMax((atk/14),.5);
				g.myPhysicalDamage(dam, TGT, skillName);
			}
		});
	}
	g.drawMyMp(-24);
	startInvincible(2160);
}
function animateAncestralFlurry(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-25);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-25);
	var ranX = (M.random()*(120)-60)
	var ranY = (M.random()*(80)-40);
	var x3 = ranX+x2;
	var y3 = ranY+y2;
	var e2 = can('smoke', 5, x3, y3, 0, 0, true);
	e2.alpha=.2;
	T.to(e2, .5, {
		delay:.2,
		alpha:0,
		scaleX:6,
		scaleY:6,
		onComplete:function(){
			cRem(5, e2);
		}
	});
	var e3 = can('ancestralFlurry', 5, x3, y3, 0, 0, true);
	T.to(e3, .125, {
		scaleY:2,
		scaleX:2,
		onComplete:function(){
			cRem(5, e3);
		}
	});
	var e1 = can('ancestralFlurry2', 5, x3, y3, 0, 0, true);
	T.to(e1, .033, {
		scaleX:2,
		scaleY:2,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#ancestralflurryId',function(){
		var MP = "24".fontcolor("#00ff00");
		var CD = "35".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/14), .5, "Ancestral Flurry");
		NG.tooltipname.innerHTML = "Ancestral Flurry";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Spirit<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Unleash a 12-hit combo on your target. Each strike hits for "+a[0]+" to "+a[1]+" physical damage.<br><br>"+
		"Effect: You are invincible for the duration of the flurry.";
	});
});


function stoneFistsReady(){
	if(D.getElementById('stonefistsId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('stonefistsId', false);
    BGP('stonefistsId', "-1500% 0%");
	g.checkMonkSkills();
	refreshstoneFists.kill();
}
function stoneFistsTimer(){
	refreshstoneFists = T.to('', .1, {repeat:-1, onRepeat:stoneFistsReady});
}
function stoneFists(){
	if(btn.d.stonefistsId===true||my.level<9){return;}
	if(checkBashFear()===true){ return; }
    setD('stonefistsId', true);
    BGP('stonefistsId', "-1500% -100%");
	T.delayedCall(20, stoneFistsTimer);
	timerTick(D.getElementById('stonefistsId'),20000/1000,'stonefistsId');
	Chat(("You assume a defensive stance, ready to counterattack."),3);
	function doit(){ stoneFistStatus=1; }
	stoneFistStatus=0;
	T.delayedCall(3, doit);
	if(GLB.videoSetting==="High"){ animateStoneFists(); }
}
function animateStoneFists(){
	flashScreen("#f22222",.3,1);
	function doIt(count){
		var size = (M.random()*(50)+25);
		var x1 = (M.random()*(200)-100+320);
		var x2 = (M.random()*(200)-100+960);
		var y1 = (M.random()*(80)-40+440);
		var y2 = (M.random()*(80)-40+440);
		var p2 = can('redparticle50', 5, x1, 720, size, size);
		T.to(p2, 1, {
			x:(x1+(size/2)),
			y:(y1+25+(size/2)),
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(5, p2);
			}
		});
		var p1 = can('redparticle50', 5, x2, 720, size, size);
		T.to(p1, 1.2, {
			x:(x2+(size/2)),
			y:(y2+25+(size/2)),
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<25){ 
			T.delayedCall(.1, function(){ 
				doIt(++count);
			}); 
		}
	}
	doIt(0);
}
$(function(){
	$NG.window3.on('mouseenter','#stonefistsId',function(){
		var CD = "20".fontcolor("#ff0000");
		var multiplier = (M.round(my.level/1.5)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Stone Fist Reversal";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Assume a defensive stance for three seconds. All physical attacks are countered for its duration.";
	});
});


function resetCobraStrikeBonus(){
	cobraStrikeBonus=1;
}
function cobraStrikeReady(){
	if(D.getElementById('cobrastrikeId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('cobrastrikeId', false);
    BGP('cobrastrikeId', "-600% 0%");
	g.checkMonkSkills();
	refreshcobraStrike.kill();
}
function cobraStrikeTimer(){
	refreshcobraStrike = T.to('', .1, {repeat:-1, onRepeat:cobraStrikeReady});
}
function cobraStrike(){
	if(btn.d.cobrastrikeId===true||my.level<20){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('cobrastrikeId', true);
    BGP('cobrastrikeId', "-600% -100%");
	T.delayedCall(20, cobraStrikeTimer);
	timerTick(D.getElementById('cobrastrikeId'),20000/1000,'cobrastrikeId');
	beginGlobalCooldown();
	var skillName = "Cobra Strike";
	var dam = minMax((attackFunct()/20),.5);
	if(GLB.videoSetting==="High"){ animateCobraStrike(TGT); }
	g.myPhysicalDamage(dam, TGT, skillName);
	g.drawMyMp(5);
	cobraStrikeBonus=0;
	T.delayedCall(15, resetCobraStrikeBonus);
	var buffId = "cobraStrikeIcon";
	var duration = 15000;
	var spriteX = -192;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function animateCobraStrike(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var p2 = can('whiteLight3', 7, x2-1280, y2-720, 2560, 994);
	p2.alpha = .1;
	T.to(p2, .5, {
		y:y2-619,
		x:x2-1280,
		ease:ez.xout,
		onComplete:function(){
			cRem(7, p2);
		}
	});
	var p4 = can('cobraStrike', 5, x2-70, y2-307, 0, 0, true);
	T.to(p4, .5, {
		y:"+="+100,
		scaleX:1,
		scaleY:1,
		ease:ez.xout,
		onComplete:function(){
			T.to(p4, .25, {
				scaleX:0,
				scaleY:0,
				onComplete:function(){
					cRem(5, p4);
				}
			});
		}
	});
	animateBurst(Slot);
}
function animateBurst(Slot, size, img){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-100);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-100);
	if(!size){ size = 250; }
	if(!img){ img = 'burst'; }
	var e1 = can(img, 5, x2, y2, 0, 0, true);
	T.to(e1, .125, {
		scaleX:size/200,
		scaleY:size/200,
		alpha:0,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#cobrastrikeId',function(){
		var MP = "5".fontcolor("#00ff00");
		var CD = "20".fontcolor("#ff0000");
		var minimum2 = "4%".fontcolor("#00ff00");
		var a=TTphy( (attackFunct()/20), .5, "Cobra Strike");
		NG.tooltipname.innerHTML = "Cobra Strike";
		NG.tooltipmsg.innerHTML = "Generate: "+MP+" Spirit<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Cobra Strike your target for "+a[0]+" to "+a[1]+" physical damage.<br><br>"+
		"Effect: "+minimum2+" of physical damage inflicted is converted to health.";
	});
});

function chakraBlastReady(){
	if(D.getElementById('chakrablastId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('chakrablastId', false);
    BGP('chakrablastId', "-1200% 0%");
	g.checkMonkSkills();
	refreshchakraBlast.kill();
}
function chakraBlastTimer(){
	refreshchakraBlast = T.to('', .1, {repeat:-1, onRepeat:chakraBlastReady});
}
function chakraBlast(){
	if(my.mp<35||btn.d.chakrablastId===true||my.level<24){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('chakrablastId', true);
    BGP('chakrablastId', "-1200% -100%");
	T.delayedCall(30, chakraBlastTimer);
	timerTick(D.getElementById('chakrablastId'),30000/1000,'chakrablastId');
	beginGlobalCooldown();
	var skillName = "Chakra Blast";
	var dam = minMax((attackFunct()/5),.8);
	if(GLB.videoSetting==="High"){ animateChakraBlast(TGT); }
	g.myPhysicalDamage(dam, TGT, skillName,0,'range');
	g.drawMyMp(-35);
	playAudio("handofgod");
	startInvincible(1000);
}
function animateChakraBlast(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var e1 = can('chakraBlast', 5, x2, 530, 0, 0);
	T.to(e1, .25, {
		scaleY:2,
		scaleX:2,
		y:405,
		x:x2-300,
		alpha:.25,
		onComplete:function(){
			T.to(e1, 1.2, {
				alpha:0,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
	var e2 = can('chakraBlast', 5, x2, 530, 0, 0);
	T.to(e2, .2, {
		scaleY:2,
		scaleX:2,
		y:405,
		x:x2-300,
		alpha:0,
		onComplete:function(){
			cRem(5, e2);
		}
	});
	function doIt(count){
		var size = (M.random()*(20)+5);
		var x = (M.random()*(500)-250+x2);
		var y = (M.random()*(200)-100+y2);
		if(x>x2){
			var x3 = x*1.01+12;
		}else{
			var x3 = x*.99+12;
		}
		var p1 = can('greenparticle50', 5, x, y, 25, 25);
		T.to(p1, .75, {
			scaleX:0,
			scaleY:0,
			x:x3,
			y:y+37,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<40){ 
			T.delayedCall(.015, function(){ 
				doIt(++count);
			}); 
		}
	}
	doIt(0);
}
$(function(){
	$NG.window3.on('mouseenter','#chakrablastId',function(){
		var MP = "35".fontcolor("#00ff00");
		var CD = "30".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/5), .8, "Chakra Blast",true);
		var b=TTmag( a[1]*3.4, .8, "magic", "Chi Blast");
		var multiplier2 = "75%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Chakra Blast";
		var s="Cost: "+MP+" Spirit<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Chakra Blast your target for "+green(a[0])+" to "+green(a[1])+" physical damage. You are healed for "+multiplier2+" of the inflicted damage value.<br><br>";
		if(my.talent4>=20){
			s+= "A potent Chi Blast strikes all targets for "+b[0]+" to "+b[1]+" arcane damage<br><br>";
		}
		s+="Effect: Makes you invincible for 1 second.";
		NG.tooltipmsg.innerHTML = s;
	});
});

function intimidationReady(){
	if(D.getElementById('intimidationId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('intimidationId', false);
    BGP('intimidationId', "-1600% 0%");
	g.checkMonkSkills();
	refreshintimidation.kill();
}
function intimidationTimer(){
	refreshintimidation = T.to('', .1, {repeat:-1, onRepeat:intimidationReady});
}
function intimidation(){
	if(btn.d.intimidationId===true||my.level<13){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('intimidationId', true);
    BGP('intimidationId', "-1600% -100%");
	T.delayedCall(45, intimidationTimer);
	timerTick(D.getElementById('intimidationId'),45000/1000,'intimidationId');
	var Slot = TGT;
	var fearDuration = M.random()*8000+12000;
	if(my.talent3>=20){
		fearDuration*=2;
	}
	if(mob[Slot].dauntless){ fearDuration*=dauntlessReduction(); }
	if(fearDuration < 3000){ fearDuration = 3000; }
	fearTarget(Slot, fearDuration, -512, "Your imposing aura strikes fear into "+mob[Slot].name);
	playAudio("spellCastEvoke2");
}
$(function(){
	$NG.window3.on('mouseenter','#intimidationId',function(){
		var CD = "45".fontcolor("#ff0000");
		var minimum = ( M.ceil( 8+((weaponSkillCheck()/4.4)/7) )+"").fontcolor("#00ff00");
		var multiplier = "140%".fontcolor("#00ff00");
		var d='12-20';
		if(my.talent3>=20){
			d='24-40';
		}
		NG.tooltipname.innerHTML = "Intimidation";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Reveal your indomitable spirit and strike fear into your opponent.<br><br>"+
		"Effect: Fear your target for "+green(d)+" seconds.";
	});
});

function flyingKickReady(){
	if(D.getElementById('flyingkickId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('flyingkickId', false);
    BGP('flyingkickId', "-1100% 0%");
	g.checkMonkSkills();
	refreshflyingKick.kill();
}
function flyingKickTimer(){
	refreshflyingKick = T.to('', .1, {repeat:-1, onRepeat:flyingKickReady});
}
function flyingKick(){
	if(my.mp<25||btn.d.flyingkickId===true||my.level<28){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('flyingkickId', true);
    BGP('flyingkickId', "-1100% -100%");
	T.delayedCall(24, flyingKickTimer);
	timerTick(D.getElementById('flyingkickId'),24000/1000,'flyingkickId');
	beginGlobalCooldown();
	var skillName = "Flying Kick";
	var dam = minMax((attackFunct()/1.2)*(1+P.eq[11].armor/40),.8);
	animateFlyingKick(TGT);
	g.myPhysicalDamage(dam, TGT, skillName);
	g.drawMyMp(-25);
	playAudio("flshhit3");
	startInvincible(1000);
	if(Set.Grandmaster >= 6){
		stunTarget(TGT, 6500, -352);
	}
	var Slot = TGT;
	if(my.talent7>=20){
		playAudio("sanctuary");
		chillTarget(Slot,3000,-352);
		var dam = minMax(attackFunct()/4,.9);
		g.myMagicDamage('cold', dam, Slot, checkCrit(), "Ice Bolt");
		var dam = minMax(attackFunct()/2.6,.7);
		g.myMagicDamage('fire', dam, Slot, checkCrit(), "Fire Bolt");
		var dam = minMax(attackFunct()/2,.3);
		g.myMagicDamage('lightning', dam, Slot, checkCrit(), "Static Bolt");
	}
}
function animateFlyingKick(Slot){
	if(GLB.videoSetting!=="High"){ return; }
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var p4 = can('flyingKick', 5, x2+150, y2+150, 0, 0);
	T.to(p4, .15, {
		scaleX:1.5,
		scaleY:1.5,
		y:y2-150,
		x:x2-150,
		onComplete:function(){
			T.to(p4, .25, {
				alpha:0,
				ease:ez.lin,
				onComplete:function(){
					cRem(5, p4);
				}
			});
		}
	});
	var p3 = can('lineNova', 7, x2-200, y2-200, 400, 400, true);
	T.to(p3, .15, {
		alpha:.3,
		scaleX:1.25,
		scaleY:1.25,
		onComplete:function(){
			T.to(p3, .45, {
				alpha:0,
				scaleX:2,
				scaleY:2,
				ease:ez.lin,
				onComplete:function(){
					cRem(7, p3);
				}
			});
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#flyingkickId',function(){
		var MP = "25".fontcolor("#00ff00");
		var CD = "24".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/1.2)*(1+P.eq[11].armor/40), .8, "Flying Kick");
		var b=TTmag( attackFunct()/4, .9, "cold", "Ice Bolt");
		var c=TTmag( attackFunct()/2.6, .7, "fire", "Fire Bolt");
		var d=TTmag( attackFunct()/2, .3, "lightning", "Static Bolt");
		NG.tooltipname.innerHTML = "Flying Kick";
		var s="Cost: "+MP+" Spirit<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Perform a Flying Kick on your target causing "+a[0]+" to "+a[1]+" physical damage. Your boots' armor value affects Flying Kick's damage.<br><br>";
		if(my.talent7>=20){
			s+= "An Ice Bolt hits your target for "+b[0]+" to "+b[1]+" cold damage.<br>";
			s+= "A Fire Bolt hits your target for "+c[0]+" to "+c[1]+" fire damage.<br>";
			s+= "A Static Bolt hits your target for "+d[0]+" to "+d[1]+" lightning damage.<br><br>";
		}
		s+="Effect: Makes you invincible for 1 second.";
		NG.tooltipmsg.innerHTML = s;
	});
});


function dragonStrikeReady(){
	if(D.getElementById('dragonstrikeId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('dragonstrikeId', false);
    BGP('dragonstrikeId', "-700% 0%");
	g.checkMonkSkills();
	refreshdragonStrike.kill();
}
function dragonStrikeTimer(){
	refreshdragonStrike = T.to('', .1, {repeat:-1, onRepeat:dragonStrikeReady});
}

$(function(){
	$NG.window3.on('mouseenter','#dragonstrikeId',function(){
		var MP = "12".fontcolor("#00ff00");
		var CD = "20".fontcolor("#ff0000");
		var a=TTmag( (attackFunct()/10), .8, "fire", "Dragon Strike");
		NG.tooltipname.innerHTML = "Dragon Strike";
		NG.tooltipmsg.innerHTML = "Generate: "+MP+" Spirit<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Deliver a flaming uppercut on your current target for "+a[0]+" to "+a[1]+" fire damage. Hits your primary target three times and hits adjacent targets once.<br><br>"+
		"Effect: Makes you invincible for 1 second.";
	});
});

function dragonStrike(){
	if(btn.d.dragonstrikeId===true||my.level<38){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('dragonstrikeId', true);
    BGP('dragonstrikeId', "-700% -100%");
	T.delayedCall(20, dragonStrikeTimer);
	timerTick(D.getElementById('dragonstrikeId'),20000/1000,'dragonstrikeId');
	beginGlobalCooldown();
	var skillName = "Dragon Strike";
	var Slot = TGT;
	g.drawMyMp(12);
	if(GLB.videoSetting==="High"){ 
		animateDragonStrike(Slot); 
	}
	var dam = minMax((attackFunct()/10),.8);
	g.myMagicDamage("fire", dam, Slot, checkCrit(), skillName);
	var dam = minMax((attackFunct()/10),.8);
	g.myMagicDamage("fire", dam, Slot, checkCrit(), skillName);
	var dam = minMax((attackFunct()/10),.8);	
	g.myMagicDamage("fire", dam, Slot, checkCrit(), skillName);
	var LT=Slot-1;
	var RT=Slot+1;
	if(LT>=0){
		if(mob[LT].name!==""){
			var dam = minMax((attackFunct()/10),.8);
			g.myMagicDamage("fire", dam, LT, checkCrit(), skillName);
		}
	}
	if(RT<=4){
		if(mob[RT].name!==""){
			var dam = minMax((attackFunct()/10),.8);
			g.myMagicDamage("fire", dam, RT, checkCrit(), skillName);
		}
	}
	startInvincible(1000);
	playAudio("drakesat");
}
function animateDragonStrike(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var p2 = can('whiteLight3', 5, x2-1280, y2-720, 2560, 994);
	p2.alpha = .2;
	T.to(p2, .5, {
		y:y2-601,
		x:x2-1280,
		ease:ez.xout,
		onComplete:function(){
			cRem(5, p2);
		}
	});
	var p4 = can('dragonStrike', 5, x2-65, y2-326, 0, 0, true);
	T.to(p4, .5, {
		scaleX:1,
		scaleY:1,
		y:"+="+100,
		ease:ez.xout,
		onComplete:function(){
			T.to(p4, .25, {
				scaleX:0,
				scaleY:0,
				onComplete:function(){
					cRem(5, p4);
				}
			});
		}
	});
	animateBurst(Slot, 250, 'burstRed');
}

function resetinnerPeaceBonus(){
	innerPeaceStatus=1;
}
function innerPeaceReady(){
	if(D.getElementById('innerpeaceId').textContent!==''){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('innerpeaceId', false);
    BGP('innerpeaceId', "-1700% 0%");
	g.checkMonkSkills();
	refreshinnerPeace.kill();
}
function innerPeaceTimer(){
	refreshinnerPeace = T.to('', .1, {repeat:-1, onRepeat:innerPeaceReady});
}
function innerPeace(){
	if(btn.d.innerpeaceId===true||my.level<15){return;}
	if(checkBashFear()===true){ return; }
    setD('innerpeaceId', true);
    BGP('innerpeaceId', "-1700% -100%");
	var d = 75000;
	if(my.talent3>=20){ d=60000; }
	T.delayedCall(d/1000, innerPeaceTimer);
	timerTick(D.getElementById('innerpeaceId'),d/1000,'innerpeaceId');
	innerPeaceStatus=0;
	T.delayedCall(10, resetinnerPeaceBonus);
	Chat(("Your spirit embraces a tranquil resolve."),3);
	var skillName = "Inner Peace";
	var buffId = "innerPeaceIcon";
	var duration = 10000;
	var spriteX = -544;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	if(GLB.videoSetting==="High"){
		animateInnerPeace();
	}
	playAudio("holylight");
}
function animateInnerPeace(){
	var e1 = can('whiteRays', 5, -384, -384, 2560, 2560, true);
	T.to(e1,1.5,{
		alpha:0,
		ease:ez.Qin
	});
	var s1 = M.random()*(45)+45;
	var z1 = s1+120;
	var s2 = M.random()*(22);
	var z2 = s2+60;
	T.set(e1,{rotation:s1});
	T.to(e1,1.5,{
		rotation:z1,
		ease:ez.lin,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var e2 = can('whiteRays', 5, -384, -384, 2560, 2560, true);
	T.to(e2,1.5,{
		alpha:0,
		ease:ez.Qin
	});
	T.set(e2,{rotation:s2});
	T.to(e2,1.5,{
		rotation:z2,
		ease:ez.lin,
		onComplete:function(){
			cRem(5, e2);
		}
	});
	var e5 = can('whiteLight3', 5, 440, 442, 400, 400, true);
	T.to(e5, 1.25,{
		scaleX:0,
		scaleY:0,
		alpha:0
	});
}

$(function(){
	$NG.window3.on('mouseenter','#innerpeaceId',function(){
		var MP = "5".fontcolor("#00ff00");
		var CD = "75".fontcolor("#ff0000");
		if(my.talent3>=20){ CD=green("60"); }
		var minimum = ( M.ceil( 8+((weaponSkillCheck()/4.4)/7) )+"").fontcolor("#00ff00");
		var multiplier = "140%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Inner Peace";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Effect: Auto attacks generate an additional "+MP+" spirit for 10 seconds.";
	});
});


function palSlamReady(){
	if(D.getElementById('palslamId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('palslamId', false);
    BGP('palslamId', "-300% 0%");
	refreshpalSlam.kill();
}
function palSlamTimer(){
	refreshpalSlam = T.to('', .1, {repeat:-1, onRepeat:palSlamReady});
}
$(function(){
	$NG.window3.on('mouseenter','#palslamId',function(){
		var CD = "12".fontcolor("#ff0000");
		var value1 = "3.5".fontcolor("#00ff00");
		var a=TTphy( (attackFunct()/4)*(1+P.eq[13].armor/80), .7, "Slam");
		NG.tooltipname.innerHTML = "Slam";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Slam your target for "+a[0]+" to "+a[1]+" physical damage. Your shield's armor value increases damage.<br><br>"+
		"Effect: Stuns your target for "+value1+" seconds.";
	});
});
function palSlam(){
	if(btn.d.palslamId===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('palslamId', true);
    BGP('palslamId', "-300% -100%");
	T.delayedCall(12, palSlamTimer);
	timerTick(D.getElementById('palslamId'),12000/1000,'palslamId');
	beginGlobalCooldown();
	var skillName = "Slam";
	var dam = minMax((attackFunct()/4)*(1+P.eq[13].armor/80),.7);
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animateSlam(Slot); }
	var hit=g.myPhysicalDamage(dam, Slot, skillName);
	if(hit!==undefined){
		stunTarget(Slot, 3500, -96);
		playAudio("shldblk");
	}
}
function repudiation(Slot){
	var dam = minMax((attackFunct()/5),.8);
	animateRepudiation(Slot);
	playAudio("holybolt");
	T.delayedCall(.25, function(){
		g.myPhysicalDamage(dam, Slot, 'Repudiation',0,'range');
	});
}
function rebukeReady(){
	if(D.getElementById('rebukeId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('rebukeId', false);
    BGP('rebukeId', "-400% 0%");
	refreshrebuke.kill();
}
function rebukeTimer(){
	refreshrebuke = T.to('', .1, {repeat:-1, onRepeat:rebukeReady});
}
function rebuke(){
	if(btn.d.rebukeId===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('rebukeId', true);
    BGP('rebukeId', "-400% -100%");
	T.delayedCall(8, rebukeTimer);
	timerTick(D.getElementById('rebukeId'),8000/1000,'rebukeId');
	beginGlobalCooldown();
	var skillName = "Rebuke";
	var dam = minMax((attackFunct()/9), .8);
	if(GLB.videoSetting==="High"){ animateRebuke(TGT); }
	g.myPhysicalDamage(dam, TGT, skillName);
	startInvincible(1000);
	var Slot=TGT;
	if(my.talent5>=20){
		if(GLB.videoSetting==="High"){ animateLightningBlast(TGT); }
		var dam = minMax(attackFunct()/2.2,.75);
		g.myMagicDamage('lightning', dam, TGT, checkCrit(), "Thunderbolt");
		playAudio("lightning2");
		for(var i=0;i<=3;i++){
			var Slot = selectRandomTarget();
			if(mob[Slot].name){
				if(GLB.videoSetting==="High"){ animateLightningBlast(Slot); }
				var dam = minMax(attackFunct()/2.2,.75);
				g.myMagicDamage('lightning', dam, Slot, checkCrit(), "Thunderbolt");
			}
		}
	}
}
$(function(){
	$NG.window3.on('mouseenter','#rebukeId',function(){
		var CD = "8".fontcolor("#ff0000");
		var Slot = TGT;
		var a=TTphy( (attackFunct()/9), .8, "Rebuke");
		var b=TTmag( (attackFunct()/2.2), .75, "lightning", "Thunderbolt");
		NG.tooltipname.innerHTML = "Rebuke";
		var s="Cooldown: "+CD+" Seconds<br><br>"+
		"Rebuke your target for "+a[0]+" to "+a[1]+" physical damage.<br><br>";
		if(my.talent5>=20){
			s+="A Thunderbolt hits five targets for "+b[0]+" to "+b[1]+" lightning damage.<br><br>";
		}
		s+="Effect: Makes you invincible for 1 second. If attacked while invincible, you will automatically counter-attack with Repudiate.";
		NG.tooltipmsg.innerHTML = s;
	});
});
function animateRebuke(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+100);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-100);
	var e2 = can('rebuke', 5, x2, y2, 0, 0);
	T.to(e2, .1, {
		scaleX:1,
		scaleY:1,
		x:x2-200,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e2, .1, {
				scaleX:0,
				scaleY:0,
				y:y2+200,
				onComplete:function(){
					cRem(5, e2);
				}
			});
		}
	});
	var e1 = can('rebuke', 5, x2, y2, 0, 0);
	T.to(e1, .1, {
		scaleX:1,
		scaleY:1,
		x:x2-200,
		alpha:.2,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .5, {
				alpha:0,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
}
function animateRepudiation(Slot){
	if(GLB.videoSetting!=="High"){ return; }
	var x3 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y3 = (MOB[Slot].offsetTop+mob[Slot].cY-60);	
	var e1 = can('retribution', 5, x3-100, y3-565, 200, 0);
	T.to(e1,.15,{
		scaleY:1.5,
		ease:ez.sin
	});
	T.to(e1,.15,{
		delay:.125,
		scaleY:0,
		y:MOB[Slot].offsetTop+mob[Slot].cY-30,
		ease:ez.sout,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	function doit(count){
		var finalX = x3 + (M.random()*(1000)-500);
		var finalY = M.random()*(70)+640;
		var p1 = can('yellowparticle50', 7, x3, y3, 12, 12);
		var t=M.random()*(1)+.5;
		T.to(p1, t, {
			y:finalY,
			ease:ez.bout
		});
		T.to(p1, t, {
			x:finalX
		});	
		T.to(p1,M.random()*(1)+3,{
			delay:1.5,
			ease:ez.qin,
			x:"+="+6,
			y:"+="+6,
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(7, p1);
			}
		});
		if(count<12){ doit(++count); }
	}
	T.delayedCall(.25, function(){ 
		doit(0);
	});
}

function purgeReady(){
	if(D.getElementById('purgeId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('purgeId', false);
    BGP('purgeId', "-500% 0%");
	refreshpurge.kill();
}
function purgeTimer(){
	refreshpurge = T.to('', .1, {repeat:-1, onRepeat:purgeReady});
}
function purge(){
	if(btn.d.purgeId===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	beginGlobalCooldown();
	var skillName = "Purge";
	var dam = minMax((attackFunct()/16),.5);
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animatePurge(Slot); }
	g.myPhysicalDamage(dam, TGT, skillName);
}
function animatePurge(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX+100);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-100);
	var e1 = can('purge', 5, x2, y2, 0, 0);
	T.to(e1, .12, {
		scaleX:1,
		scaleY:1,
		x:x2-200,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .12, {
				scaleX:0,
				scaleY:0,
				y:y2+200,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
}
$(function(){
	$NG.window3.on('mouseenter','#purgeId',function(){
		var CD = "12".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/16), .5, "Purge");
		NG.tooltipname.innerHTML = "Purge";
		NG.tooltipmsg.innerHTML = "Purge your target for "+a[0]+" to "+a[1]+" weapon damage. Purge's damage is increased on undead targets.";
	});
});
function vengeanceReady(){
	if(D.getElementById('vengeanceId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('vengeanceId', false);
    BGP('vengeanceId', "-600% 0%");
	refreshvengeance.kill();
}
function vengeanceTimer(){
	refreshvengeance = T.to('', .1, {repeat:-1, onRepeat:vengeanceReady});
}
function vengeance(){
	if(btn.d.vengeanceId===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('vengeanceId', true);
    BGP('vengeanceId', "-600% -100%");
	T.delayedCall(16, vengeanceTimer);
	timerTick(D.getElementById('vengeanceId'),16000/1000,'vengeanceId');
	beginGlobalCooldown();
	var dam = 0;
	var newMax = my.maxHp;
	var kek=my.hp/newMax;
	if(kek > .8){ 
		dam = minMax((attackFunct()/5),.8); 
	}else if(kek > .6){ 
		dam = minMax((attackFunct()/4),.8); 
	}else if(kek > .4){ 
		dam = minMax((attackFunct()/3),.8); 
	}else if(kek > .2){ 
		dam = minMax((attackFunct()/2),.8); 
	}else if(kek > 0){ 
		dam = minMax((attackFunct()),.8); 
	}
	var Slot=TGT;
	if(GLB.videoSetting==="High"){ animateVengeance(Slot); }
	var hit=g.myPhysicalDamage(dam, Slot, "Vengeance");
	if(hit!==undefined){
		if(mob[Slot].attackNow===true){	
			stunTarget(Slot, 1000, -192);
		}
	}
	playAudio("zeal");
	if(my.talent6>=20){
		playAudio("handofgod");
		if(GLB.videoSetting==="High"){ animateBenediction(TGT, true); }
		var dam = minMax(attackFunct()/1.3, .4);
		g.myMagicDamage('magic', dam, TGT, checkCrit(), "Holy Bolt");
		for(var i=0;i<=11;i++){
			(function(){
				T.delayedCall(M.random()*12, function(){
					var Slot = selectRandomTarget();
					if(Slot!==undefined){
						playAudio("handofgod");
						if(GLB.videoSetting==="High"){ animateBenediction(Slot, true); }
						var dam = minMax(attackFunct()/1.3, .4);
						g.myMagicDamage('magic', dam, Slot, checkCrit(), "Holy Bolt");
					}
				});
			})();
		}
	}
}
$(function(){
	$NG.window3.on('mouseenter','#vengeanceId',function(){
		var CD = "16".fontcolor("#ff0000");
		var kek=my.hp/my.maxHp;
		var foo;
		if(kek > .8){ 
			foo = (attackFunct()/5);
		}else if(kek > .6){ 
			foo = (attackFunct()/4);
		}else if(kek > .4){ 
			foo = (attackFunct()/3);
		}else if(kek > .2){ 
			foo = (attackFunct()/2);
		}else if(kek > 0){ 
			foo = (attackFunct());
		}
		var a=TTphy( foo, .8, "Vengeance");
		var b=TTmag( attackFunct()/1.3, .4, "magic", "Holy Bolt");
		NG.tooltipname.innerHTML = "Vengeance";
		var s="Cooldown: "+CD+" Seconds<br><br>"+
		"Strikes your target for "+a[0]+" to "+a[1]+" physical damage. Vengeance's damage is increased as your health gets lower.<br><br>";
		if(my.talent5>=20){
			s+= "A divine hail of twelve Holy Bolts hits random targets for "+b[0]+" to "+b[1]+" arcane damage.<br><br>";
		}
		s+="Effect: Absorbs mana based on your damage inflicted.<br><br>"+
		"Effect: Vengeance stuns your target if you interrupt your target's physical attack.";
		NG.tooltipmsg.innerHTML = s;
	});
});
function animateVengeance(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var e1 = can('vengeance', 5, x2+100, y2-100, 0, 0);
	T.to(e1, .12, {
		scaleX:1,
		scaleY:1,
		x:x2-100,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .12, {
				scaleX:0,
				scaleY:0,
				y:y2+100,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	}); 
	var e2 = can('vengeanceL', 5, x2-100, y2-100, 0, 0);
	T.to(e2, .12, {
		scaleX:1,
		scaleY:1,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e2, .12, {
				scaleX:0,
				scaleY:0,
				x:x2+100,
				y:y2+100,
				onComplete:function(){
					cRem(5, e2);
				}
			});
		}
	});
	var e3 = can('lineNovaPink', 5, x2-200, y2-200, 300, 300, true);
	e3.alpha=.5;
	T.to(e3, .12, {
		scaleX:1,
		scaleY:1,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e3, .25, {
				alpha:0,
				scaleX:1.25,
				scaleY:1.25,
				onComplete:function(){
					cRem(5, e3);
				}
			});
		}
	});
}


function layHandsReady(){
	if(D.getElementById('layhandsId').textContent!==''){return;}
	if(castingSpell==0){return;}
    setD('layhandsId', false);
    BGP('layhandsId', "-700% 0%");
	g.checkPaladinSkills();
	refreshlayHands.kill();
}
function layHandsTimer(){
	refreshlayHands = T.to('', .1, {repeat:-1, onRepeat:layHandsReady});
}
function layHands(){
	if(my.hp<=0||paused===true){ return; }
	if(btn.d.layhandsId===true){ return;}
    setD('layhandsId', true);
    BGP('layhandsId', "-700% -100%");
	var d=300000-(talent2()*5000);
	T.delayedCall(d/1000, layHandsTimer);
	timerTick(D.getElementById('layhandsId'),d/1000,'layhandsId');
	Chat(("Your hands shimmer with holy light."),3);
	playAudio("spellDoneBuff");
	var healAmount = minMax(my.maxHp * .7,.9);
	g.popupHeal(healAmount);
	g.checkPaladinSkills();
	if(GLB.videoSetting==="High"){ animateLayHands(); }
	if(my.talent2>=20){
		myCounter=true;
		T.delayedCall(20, function(){
			myCounter=false;
		});
		addBuffIcon("Divine Retaliation","layHandsId",20000,-224);
	}
}
function TTheal(max, percent){
	var enh=0;
	if(my.job==="Magician"){
		if(my.talent7>=20){
			enh+=12;
		}
	}
	var zod=(min70(wisTotal())/6.6);
	if(zod>0){ enh+=zod; }
	max = (max*(1+(enh/100)));
	var min = max*percent;	
	var a=[];
	a[0]="<span class='green'>"+~~min+"</span>";
	a[1]="<span class='green'>"+~~max+"</span>";
	return a;
}
function animateLayHands(){
	flashScreen("#ff7",.3,2);
	function doIt(count){
		var x = (M.random()*(426)+M.random()*(426)+M.random()*(426));
		var y = 0;
		var ranY = (M.random()*(350)+150);
		var p1 = can('yellowparticle50', 5, x, y, 15, 15);
		T.to(p1, M.random()*(.5)+1, {
			scaleX:0,
			scaleY:0,
			y:ranY,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<50){ 
			T.delayedCall(.033, function(){ 
				doIt(++count);
			}); 
		}
	}
	doIt(0);
}
$(function(){
	$NG.window3.on('mouseenter','#layhandsId',function(){
		var CD = (300000-(talent2()*5000))/1000;
		var a=TTheal(my.maxHp * .7, .9);
		NG.tooltipname.innerHTML = "Lay Hands";
		var s="Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Lay Hands to recover "+a[0]+" to "+a[1]+" health. Lay Hands can be used while feared or stunned.";
		if(my.talent2>=20){
			s+="<BR><BR>Effect: Lay Hands activates Divine Retaliation, riposting all physical attacks for 20 seconds.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});

function checkSpellKnockback(Slot){
	if(castingSpell===0&&shieldHp <=0){
		if(my.job!=="Bard"){
			if(my.channeling < my.level*5){ levelUpChanneling();}
		}
		if(my.job==="Wizard"&&my.talent2>=20){
			//nothing
		}else{
			var knock = mob[Slot].level*10;
			if(knock>500){ knock=500; }
			if(M.random()*(knock)>channelingTotal()){
				var t1 = tlSpellbar.progress();
				var t2;
				if(currentSpell==="Arcane Missiles"){
					// nothing
				}else{
					t2 = t1-.02;
					if(t2<0){ t2=0; }
				}
				tlSpellbar.progress(t2);
			}
		}
	}
}
function animateCastBar(chSpell){
	tlSpellbar = TM();
	tlSpellbar.to(mySpellBar, spellCastTime/1000, {
		startAt:{
			scaleX:0
		},
		scaleX:1,
		ease:ez.lin,
		onComplete:function(){
			var finish=true;
			if(my.job==="Bard"){
				finish=true; 
			}else if(castingSpell===0){
				finish=true;
			}
			if(finish===true){
				NG.spellbardiv.style.display="none";
				if(my.job!=="Bard"){
					g[chSpell+"Finish"]();
				}
			}
		}
	});
}
function greaterHealingReady(){
	if(D.getElementById('greaterhealingId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('greaterhealingId', false);
    BGP('greaterhealingId', "-800% 0%");
	g.checkPaladinSkills();
	refreshgreaterHealing.kill();
}
function greaterHealingTimer(){
	refreshgreaterHealing = T.to('', .1, {repeat:-1, onRepeat:greaterHealingReady});
}
function greaterHealing(){
	if(btn.d.greaterhealingId===true||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = pal.cost.greaterHealing;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Greater Healing";
	spellCastTime = castSpeedTotal(2000);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("blue");
	animateCastBar("greaterHealing");
	playAudio("spellCastHeal",0,spellCastTime);
}
g.greaterHealingFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	animateHealing('blue');
    setD('greaterhealingId', true);
    BGP('greaterhealingId', "-800% -100%");
	T.delayedCall(20, greaterHealingTimer);
	timerTick(D.getElementById('greaterhealingId'),20000/1000,'greaterhealingId');
	var healAmount = minMax((alterationTotal()*1.6)*(((talent3()*1.35)/100)+1),.9);
	g.popupHeal(healAmount);
	g.drawMyMp(-spellMpCost);
}
$(function(){
	$NG.window3.on('mouseenter','#greaterhealingId',function(){
		var spellType = "Alteration";
		var CD = "20".fontcolor("#ff0000");
		var a=TTheal( (alterationTotal()*1.6)*(((talent3()*1.35)/100)+1), .9);
		NG.tooltipname.innerHTML = "Greater Healing";
		NG.tooltipmsg.innerHTML = "Cost: "+green(pal.cost.greaterHealing)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Greater Healing heals for "+a[0]+" to "+a[1]+" hit points.";
	});
});

function holyMightReady(){
	if(D.getElementById('holymightId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('holymightId', false);
    BGP('holymightId', "-900% 0%");
	g.checkPaladinSkills();
	refreshholyMight.kill();
}
function holyMightTimer(){
	refreshholyMight = T.to('', .1, {repeat:-1, onRepeat:holyMightReady});
}
function holyMight(){
	if(btn.d.holymightId===true||my.level<11){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = pal.cost.holyMight;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Holy Might";
	spellCastTime = castSpeedTotal(1500);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("magenta");
	animateCastBar("holyMight");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#holymightId',function(){
		var spellType = "Evocation";
		var CD = "18".fontcolor("#ff0000");
		var a=TTmag( evocationTotal(), .9, "magic", "Holy Might");
		var stunTime = (4.5+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Holy Might";
		NG.tooltipmsg.innerHTML = "Cost: "+green(pal.cost.holyMight)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Second<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Holy Might hits your target for "+a[0]+" to "+a[1]+" arcane damage.<br><br>"+
		"Effect: Stuns your target for "+stunTime+" seconds.";
	});
});
g.holyMightFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneSlam");
    setD('holymightId', true);
    BGP('holymightId', "-900% -100%");
	T.delayedCall(18, holyMightTimer);
	timerTick(D.getElementById('holymightId'),18000/1000,'holymightId');
	var dam = minMax(evocationTotal(),.9);
	Chat((mob[TGT].name+" is struck by a sudden force."),3);
	stunTarget(TGT, 4500, -288);
	if(GLB.videoSetting==="High"){ animateLineNova(TGT, 'lineNovaMagenta'); }
	g.myMagicDamage("magic", dam, TGT, checkCrit(), "Holy Might");
	g.drawMyMp(-spellMpCost);
}

function palRootReady(){
	if(D.getElementById('palrootId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('palrootId', false);
    BGP('palrootId', "-1000% 0%");
	g.checkPaladinSkills();
	refreshpalRoot.kill();
}
function palRootTimer(){
	refreshpalRoot = T.to('', .1, {repeat:-1, onRepeat:palRootReady});
}
function palRoot(){
	if(btn.d.palrootId===true||my.level<19){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = pal.cost.root;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Root";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("green");
	animateCastBar("palRoot");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#palrootId',function(){
		var spellType = "Alteration";
		var CD = "8".fontcolor("#ff0000");
		var stunTime = 4500+"".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Root";
		NG.tooltipmsg.innerHTML = "Cost: "+green(pal.cost.root)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Roots your target in place. Rooted targets cannot melee you.";
	});
});
g.palRootFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
    setD('palrootId', true);
    BGP('palrootId', "-1000% -100%");
	T.delayedCall(8, palRootTimer);
	timerTick(D.getElementById('palrootId'),8000/1000,'palrootId');
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	if(checkRootImmune(Slot)===true){
		Chat((mob[TGT].name+" is immune to Root."),1);
		return;
	}
	if(statusResist(Slot)===true){
		Chat((mob[TGT].name+" resisted Root."),1);
		return;
	}
	Chat((mob[TGT].name+" is rooted."),3);
	var rootFlag = true;
	stopMob(Slot);
	mob[Slot].rootStatus=4;
	$("#rootIcon"+Slot+",#rootBuffIcon"+Slot).remove();
	animateRoot(Slot, rootFlag);
	var buffId = "rootBuffIcon";
	var duration = 0;
	var spriteX = -320;
	addMobBuffIcon("Root",Slot,buffId,duration,spriteX);
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
}

function ardentJudgmentReady(){
	if(D.getElementById('ardentjudgment').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
	$NG.ardentjudgment.removeClass("disabled").css({backgroundPosition:"-1100% 0"});
    setD('ardentjudgment', false);
    BGP('ardentjudgment', "-1100% 0%");
	refreshardentJudgment.kill();
}
function ardentJudgmentTimer(){
	refreshardentJudgment = T.to('', .1, {repeat:-1, onRepeat:ardentJudgmentReady});
}
function ardentJudgment(){
	if(btn.d.ardentjudgment===true||my.level<15){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = pal.cost.ardentJudgment;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Ardent Judgment";
	spellCastTime = castSpeedTotal(2000);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("magenta");
	animateCastBar("ardentJudgment");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#ardentjudgment',function(){
		var CD = "12".fontcolor("#ff0000");
		var spellType = "Evocation";
		var a=TTmag( evocationTotal()*2.7, .8, "magic", "Ardent Judgment");
		var value1 = "50%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Ardent Judgment";
		NG.tooltipmsg.innerHTML = "Cost: "+green(pal.cost.ardentJudgment)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Ardent Judgment hits your target for "+a[0]+" to "+a[1]+" arcane damage. Undead targets take an additional "+value1+" damage.";
	});
});
g.ardentJudgmentFinish=function(){
    setD('ardentjudgment', true);
    BGP('ardentjudgment', "-1100% -100%");
	T.delayedCall(12, ardentJudgmentTimer);
	timerTick(D.getElementById('ardentjudgment'),12000/1000,'ardentjudgment');
	if(endSpell()===false){ return; }
	playAudio("spellDoneFlames");
	g.drawMyMp(-spellMpCost);
	var dam = minMax(evocationTotal()*2.7,.8);
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animateArdentJudgment(Slot); }
	g.myMagicDamage("magic", dam, Slot, checkCrit(), "Ardent Judgment");
}
function animateArdentJudgment(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-100);
	var y2 = -25;
	var e1 = can('ardentJudgment', 5, x2, y2, 200, 0);
	T.to(e1, .15, {
		scaleY:725/600,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var e2 = can('ardentJudgment', 5, x2, y2, 200, 0);
	T.to(e2, .15, {
		scaleY:725/600,
		alpha:.2,
		onComplete:function(){
			T.to(e2, 1, {
				alpha:0,
				onComplete:function(){
					cRem(5, e2);
				}
			});
		}
	});
	T.delayedCall(.15, animateTremor, [x2+100, 800]);
}

function yaulpExpire(){
	yaulpStatus=false;
	CStat();
}
function yaulpReady(){
	if(D.getElementById('yaulpId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('yaulpId', false);
    BGP('yaulpId', "-1200% 0%");
	refreshyaulp.kill();
}
function yaulpTimer(){
	refreshyaulp = T.to('', .1, {repeat:-1, onRepeat:yaulpReady});
}
function yaulp(){
	if(btn.d.yaulpId===true||my.level<21){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = pal.cost.yaulp;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Yaulp";
	spellCastTime = castSpeedTotal(1000);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesUp("blue");
	animateCastBar("yaulp");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#yaulpId',function(){
		var spellType = "Alteration";
		var d = 8;
		if(Set.Duke>=6){ d=12; }
		var cd="30".fontcolor("#ff0000");
		var maximum =  M.ceil(alterationTotal()/7+wisTotal()/9+talent11());
		NG.tooltipname.innerHTML = "Yaulp";
		NG.tooltipmsg.innerHTML = "Cost: "+green(pal.cost.yaulp)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+cd+" Seconds<br><br>"+
		"Emit a mighty yaulp to boost your damage by "+green(maximum+"%")+" and unleash a frenzy of attacks for "+green(d)+" seconds.";
	});
});
g.yaulpFinish=function(){
    setD('yaulpId', true);
    BGP('yaulpId', "-1200% -100%");
	T.delayedCall(30, yaulpTimer);
	timerTick(D.getElementById('yaulpId'),30000/1000,'yaulpId');
	if(endSpell()===false){ return; }
	var d = 8000;
	if(Set.Duke>=6){ d+=4000; }
	playAudio("fanaticism");
	g.drawMyMp(-spellMpCost);
	Chat(("You feel a surge of divine power as you let forth a mighty yaulp."),3);
	yaulpTimeout.kill();
	yaulpTimeout = T.delayedCall(d/1000, yaulpExpire);
	yaulpBonus = M.ceil(alterationTotal()/7+wisTotal()/9)+talent11();
	myAttack.kill();
	myAttack2.kill();
	myAttack = T.delayedCall(0, getDamage);
	myAttack2 = T.delayedCall(0, getDamage2);
	autoAttackTimer(0);
	yaulpStatus=true;
	CStat();
	var buffId = "yaulpIcon";
	yaulpIconTimer.kill();
	yaulpIconTimer = T.delayedCall(d/1000, function(){ removeIcon(buffId); });
	addBuffIcon("Yaulp",buffId,d,-384);
	if(my.talent11>=20){
		var shd = M.ceil(armorFunct()/5);
		shieldHp=shd;
		removeIcon("yaulpShieldIcon");
		addBuffIcon("Protective Bubble","yaulpShieldIcon",0,-384);
	}
}

function cleanse(){
	if(btn.d.cleanseId===true||my.level<24){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = pal.cost.cleanse;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Fervent Prayer";
	spellCastTime = castSpeedTotal(1500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("white");
	animateCastBar("cleanse");
	playAudio("spellCastHeal",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#cleanseId',function(){
		var spellType = "Abjuration";
		NG.tooltipname.innerHTML = "Fervent Prayer";
		NG.tooltipmsg.innerHTML = "Cost: "+green(pal.cost.cleanse)+" Mana Points<br>"+
		"Cooldown: "+red("30")+" Seconds<br><br>"+
		"Cast Time: "+castTimeTT(1500)+" Second<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Fervent Prayer removes all damage-over-time spells and makes you invincible for five seconds.";
	});
});
function cleanseReady(){
	if(D.getElementById('cleanseId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('cleanseId', false);
    BGP('cleanseId', "-1300% 0%");
	refreshcleanse.kill();
}
function cleanseTimer(){
	refreshcleanse = T.to('', .1, {repeat:-1, onRepeat:cleanseReady});
}
g.cleanseFinish=function(){
	if(endSpell()===false){ return; }
    setD('cleanseId', true);
    BGP('cleanseId', "-1300% -100%");
	T.delayedCall(30, cleanseTimer);
	timerTick(D.getElementById('cleanseId'),30000/1000,'cleanseId');
	playAudio("cleansing");
	Chat("Your prayer provides divine protection.",3);
	startInvincible(5000);
	addBuffIcon("Fervent Prayer", "ferventPrayerIcon", 5000, -416);
	g.drawMyMp(-spellMpCost);
	for(var i=0;i<=4;i++){
		mob[i].dotActive.kill();
		mob[i].envenomTicks=0;
		mob[i].engulfingDarknessTicks=0;
		mob[i].staticFieldTicks=0;
		chilledTimer.kill();
		mob[i].blizzardTicks=0;
		chillStatus=false;
		mob[i].conflagrationTicks=0;
		$("#mobEnvenomIcon"+i).remove();
		$("#mobEngulfingDarknessIcon"+i).remove();
		$("#mobStaticFieldIcon"+i).remove();
		$("#mobBlizzardIcon"+i).remove();
		$("#mobConflagrationIcon"+i).remove();
	}
	$("#mobChilledIcon").remove();
	g.drawMyMp();
	CStat();
	if(GLB.videoSetting==="High"){ animateCleanse(); }
}
function animateCleanse(){
	animateHealing('white');
	animateBuffRings(0, 10);
}

function flashOfLightReady(){
	if(D.getElementById('flashoflightId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('flashoflightId', false);
    BGP('flashoflightId', "-1400% 0%");
	refreshflashOfLight.kill();
}
function flashOfLightTimer(){
	refreshflashOfLight = T.to('', .1, {repeat:-1, onRepeat:flashOfLightReady});
}
function flashOfLight(){
	if(btn.d.flashoflightId===true||my.level<32){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = pal.cost.flashOfLight;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Flash of Light";
	spellCastTime = castSpeedTotal(1500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("yellow");
	animateCastBar("flashOfLight");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#flashoflightId',function(){
		var spellType = "Conjuration";
		var CD = green("60");
		if(my.talent12>=20){
			CD=green("30");
		}
		var duration = "45".fontcolor("#00ff00");
		var a=TTmag( (attackFunct()*((talent12()*6.9)/100)), .85, "magic", "Blinding Justice");
		var target="your target";
		if(my.talent12>=20){ target="three targets"; }
		NG.tooltipname.innerHTML = "Flash of Light";
		var s="Cost: "+green(pal.cost.flashOfLight)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Blast your target's eyes with a flash of holy light that dazes them for 25 seconds. Dazed targets have a "+green("30%")+" chance to miss.";
		if(my.talent12>0){
			s+="<BR><BR>Blinding Justice hits "+target+" for "+a[0]+" to "+a[1]+" arcane damage.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.flashOfLightFinish=function(){
    setD('flashoflightId', true);
    BGP('flashoflightId', "-1400% -100%");
	var d=60000;
	if(my.talent12>=20){
		d=30000;
	}
	T.delayedCall(d/1000, flashOfLightTimer);
	timerTick(D.getElementById('flashoflightId'),d/1000,'flashoflightId');
	if(endSpell()===false){ return; }
	playAudio("spellCastHeal3");
	g.drawMyMp(-spellMpCost);
	Chat((mob[TGT].name+" is dazed by a flash of light."),3);
	var Slot = TGT;
	if(my.talent12<1){
		var blindDuration = 25000;
		if(mob[Slot].level > my.level){
			blindDuration -= (M.pow((mob[Slot].level - my.level),1.25));
		}
		blindTarget(Slot, blindDuration, -448);
		if(GLB.videoSetting==="High"){ animateSearingRevelation(Slot); }
	}else{
		for(var i=0;i<=4;i++){
			if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
				var blindDuration = 25000;
				if(mob[i].level > my.level){
					blindDuration -= (M.pow((mob[i].level - my.level),1.25));
				}
				var dam = minMax( (attackFunct()*((talent12()*6.9)/100)), .85);
				if(my.talent12>0){
					g.myMagicDamage('magic', dam, i, checkCrit(), "Blinding Justice");
				}
				blindTarget(i, blindDuration, -448);
				if(GLB.videoSetting==="High"){ animateSearingRevelation(i); }
			}
		}
	}
}
function blindTarget(Slot, duration, spriteX){
	if(mob[Slot].attackStatus===1){ attackOn(true); }
	mob[Slot].dazeStatus=true;
	mob[Slot].dazeTimer.kill();
	mob[Slot].dazeTimer = T.delayedCall(duration/1000, function(){ 
		flashOfLightExpire(Slot); 
	});
	addMobBuffIcon("Blind",Slot,"dazeIcon",duration,spriteX);
}

function valor(){
	if(btn.d.valorId===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = pal.cost.valor;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Valor";
	spellCastTime = castSpeedTotal(4000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("yellow");
	animateCastBar("valor");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#valorId',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var minimum = M.ceil((abjurationTotal()*.44)*((talent4()*5.1/100)+1));
		var maximum = M.ceil((abjurationTotal()*.6)*((talent4()*10.75/100)+1));
		NG.tooltipname.innerHTML = "Valor";
		NG.tooltipmsg.innerHTML = "Cost: "+green(pal.cost.valor)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(4000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs your hit points by "+green(maximum)+" and your armor by "+green(minimum)+" for "+duration+" minutes.";
	});
});
g.valorFinish=function(){
	if(endSpell()===false){ return; }
	animateBuff("yellow",'easeInBack', 5, 25, 120, 4);
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You feel valorous."),3);
	if(valorStatus===true){
		armorBuff-=valorArmorBoost;
		maxHpBuff-=valorHpBoost;
	}
	valorTimeout.kill(); 
	valorTimeout = T.delayedCall(3240, valorExpire);
	valorArmorBoost = M.ceil((abjurationTotal()*.44)*((talent4()*5.1/100)+1));
	valorHpBoost = M.ceil((abjurationTotal()*.6)*((talent4()*10.75/100)+1));
	maxHpBuff+=valorHpBoost;
	armorBuff+=valorArmorBoost;
	valorStatus=true;
	g.drawMyHp();
	CStat();
	var skillName = "Valor";
	var buffId = "valorIcon";
	var duration = 3240000;
	var spriteX = -480;
	hpbuffIconTimer.kill();
	hpbuffIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function valorExpire(){
	valorStatus=false;
	armorBuff-=valorArmorBoost;
	maxHpBuff-=valorHpBoost;
	CStat();
	g.drawMyHp();
}

function spiritArmor(){
	if(btn.d.spiritarmorId===true||my.level<17){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = pal.cost.spiritArmor;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Spirit Armor";
	spellCastTime = castSpeedTotal(6000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("blue");
	animateCastBar("spiritArmor");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#spiritarmorId',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.55)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Spirit Armor";
		NG.tooltipmsg.innerHTML = "Cost: "+green(pal.cost.spiritArmor)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(6000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs your armor by "+minimum+" for "+duration+" minutes.";
	});
});
g.spiritArmorFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("Translucent armor gathers around you."),3);
	if(spiritArmorStatus===true){ armorBuff-=spiritArmorArmorBoost; }
	spiritArmorTimeout.kill();
	spiritArmorTimeout = T.delayedCall(3240, spiritArmorExpire);
	spiritArmorArmorBoost = M.ceil(abjurationTotal()*.55);
	armorBuff+=spiritArmorArmorBoost;
	spiritArmorStatus=true;
	CStat();
	var skillName = "Spirit Armor";
	var buffId = "spiritArmorIcon";
	var duration = 3240000;
	var spriteX = -512;
	spiritArmorIconTimer.kill();
	spiritArmorIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff('blue','easeInBack', 5, 25, 150, 5);
}
function spiritArmorExpire(){
	spiritArmorStatus=false;
	armorBuff-=spiritArmorArmorBoost;
	CStat();
}

function divineProvidence(){
	if(btn.d.divineprovidenceId===true||my.level<28){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = pal.cost.divineProvidence;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Divine Providence";
	spellCastTime = castSpeedTotal(2500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("yellow");
	animateCastBar("divineProvidence");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#divineprovidenceId',function(){
		var spellType = "Abjuration";
		var duration = "36".fontcolor("#00ff00");
		var minimum = M.ceil((abjurationTotal()*.12)+talent8()*2.6);
		NG.tooltipname.innerHTML = "Divine Providence";
		NG.tooltipmsg.innerHTML = "Cost: "+green(pal.cost.divineProvidence)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs your poison and magic resistance by "+green(minimum)+" for "+duration+" minutes.";
	});
});
g.divineProvidenceFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You feel protected from poison and lightning."),3);
	if(divineProvidenceStatus===true){ 
		svpoisonBuff-=divineProvidencePoisonBoost; 
		svmagicBuff-=divineProvidenceMagicBoost; 
	}
	spiritArmorTimeout.kill(); 
	spiritArmorTimeout = T.delayedCall(2160, divineProvidenceExpire);
	divineProvidencePoisonBoost = M.ceil((abjurationTotal()*.12)+talent8()*2.6);
	divineProvidenceMagicBoost = M.ceil((abjurationTotal()*.12)+talent8()*2.6);
	svpoisonBuff+=divineProvidencePoisonBoost;
	svmagicBuff+=divineProvidenceMagicBoost;
	divineProvidenceStatus=true;
	CStat();
	var skillName = "Divine Providence";
	var buffId = "resistIcon";
	var duration = 2160000;
	var spriteX = -544;
	resistIconTimer.kill();
	resistIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff('white','easeInQuad', 5, 15, 120, 3);
}
function divineProvidenceExpire(){
	divineProvidenceStatus=false;
	svpoisonBuff-=divineProvidencePoisonBoost;
	svmagicBuff-=divineProvidenceMagicBoost;
	CStat();
}

function symbolOfRyltan(){
	if(btn.d.symbolofryltanId===true||my.level<38){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = pal.cost.symbolOfRyltan;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Symbol of Marshan";
	spellCastTime = castSpeedTotal(4000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("symbolOfRyltan");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#symbolofryltanId',function(){
		var DUR = "4".fontcolor("#00ff00");
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.7)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Symbol of Marshan";
		NG.tooltipmsg.innerHTML = "Cost: "+green(pal.cost.symbolOfRyltan)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(4000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs your hit points by "+minimum+" for "+duration+" minutes.";
	});
});
g.symbolOfRyltanFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("The Symbol of Marshan flashes before your eyes."),3);
	if(symbolOfRyltanStatus===true){ maxHpBuff-=symbolOfRyltanBoost; }
	symbolOfRyltanTimeout.kill(); 
	symbolOfRyltanTimeout = T.delayedCall(3240, symbolOfRyltanExpire);
	symbolOfRyltanBoost = M.ceil(abjurationTotal()*.7);
	maxHpBuff+=symbolOfRyltanBoost;
	symbolOfRyltanStatus=true;
	CStat();
	g.drawMyHp();
	var buffId = "symbolOfRyltanIcon";
	var duration = 3240000;
	symbolOfRyltanIconTimer.kill();
	symbolOfRyltanIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon("Symbol of Marshan",buffId,duration,-64,-32);
	animateBuff('teal','easeInQuad', 5, 25, 160, 5);
}
function symbolOfRyltanExpire(){
	symbolOfRyltanStatus=false;
	maxHpBuff-=symbolOfRyltanBoost;
	CStat();
	g.drawMyHp();
}


function rangerKickReady(){
	if(D.getElementById('rangerkickId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('rangerkickId', false);
    BGP('rangerkickId', "-300% 0%");
	refreshrangerKick.kill();
}
function rangerKickTimer(){
	refreshrangerKick = T.to('', .1, {repeat:-1, onRepeat:rangerKickReady});
}
$(function(){
	$NG.window3.on('mouseenter','#rangerkickId',function(){
		var CD = "8".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/6)*(1+P.eq[11].armor/80), .7, "Kick");
		var rate=40+my.talent1*3;
		if(rate>100){ rate=100; }
		NG.tooltipname.innerHTML = "Kick";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Kick hits your target and inflicts "+a[0]+" to "+a[1]+" physical damage. Your boots' armor value increases kick's damage.<br><br>"+
		"Effect: "+green(rate+"%")+" chance to interrupt your target's spell.";
	});
});
function rangerKick(){
	if(btn.d.rangerkickId===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('rangerkickId', true);
    BGP('rangerkickId', "-300% -100%");
	T.delayedCall(8, rangerKickTimer);
	timerTick(D.getElementById('rangerkickId'),8000/1000,'rangerkickId');
	beginGlobalCooldown();
	var Slot = TGT;
	var dam = minMax((attackFunct()/6)*(1+P.eq[11].armor/80),.7);
	var success = 40+(talent1()*3);
	if(M.random()*100<success){
		interruptTarget(Slot);
	}
	if(GLB.videoSetting==="High"){ animateKick(Slot); }
	g.myPhysicalDamage(dam, Slot, "Kick");
}

$(function(){
	$NG.window3.on('mouseenter','#rapidshotId',function(){
		var a=TTphy( (attackFunct()/16), .2, "Rapid Shot", 0, "bow");
		var b=TTmag( attackFunct()/7, .8, "fire", "elemental");
		NG.tooltipname.innerHTML = "Rapid Shot";
		var shots="three";
		if(my.talent12>=20){ shots="four"; }
		var s="Rapid Strike hits "+shots+" times for "+a[0]+" to "+a[1]+" physical bow damage.<br><br>";
		if(my.talent8>=20){ 
			s+="Your arrows have a "+green("30%")+" chance to inflict "+b[0]+" to "+b[1]+" fire damage.<br><br>"; 
		}
		s+="If no bow is equipped, magic arrows are fired instead.";
		NG.tooltipmsg.innerHTML = s;
	});
});
function rapidShotReady(){
	if(D.getElementById('rapidshotId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('rapidshotId', false);
    BGP('rapidshotId', "-400% 0%");
	g.checkRangerSkills();
	refreshrapidShot.kill();
}
function rapidShotTimer(){
	refreshrapidShot = T.to('', .1, {repeat:-1, onRepeat:rapidShotReady});
}
function rapidShot(){
	if(btn.d.rapidshotId===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	beginGlobalCooldown();
	var rapidShotCount=0;
	var shots = 3;
	if(my.talent12>=20){ shots = 4; }
	rapidShotExecute(0, shots);
}
function rapidShotExecute(count, max){
	if(count>=max||!mob[TGT].name){ return; }
	if(GLB.videoSetting==="High"){ animateRapidShot(TGT); }
	var dam = minMax((attackFunct()/16),.2);
	g.myPhysicalDamage(dam, TGT, "Rapid Shot",0,'bow');
	playAudio("arrow"+ ~~(M.random()*(3)+3));
	rapidShotDelay = T.delayedCall(.25, function(){ 
		rapidShotExecute(++count, max); 
	});
}
function animateRapidShot(Slot){
	var xWidth = mob[Slot].imageWidth/2;
	var xHeight = mob[Slot].imageHeight/2;
	var x2 = MOB[Slot].offsetLeft+mob[Slot].cX;
	var y2 = MOB[Slot].offsetTop+mob[Slot].cY;
	var ranX = x2+M.random()*(xWidth-(xWidth/2))-50;
	var ranY = y2+M.random()*(xHeight-(xHeight/2))-50;
	var e1 = can('rngSmoke', 5, ranX, ranY, 0, 0, true);
	T.to(e1,.15,{
		scaleX:1,
		scaleY:1
	});
	T.to(e1,1.2,{
		scaleX:3,
		scaleY:3,
		alpha:0,
		delay:.15,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var e2 = can('rngFire', 5, ranX-25, ranY-25, 50, 50, true);
	T.to(e2,.125,{
		scaleX:1,
		scaleY:1,
		alpha:0,
		onComplete:function(){
			cRem(5, e2);
		}
	});
	var e3 = can('rngFireOut', 5, ranX-25, ranY-25, 50, 50, true);
	T.to(e3,.15,{
		scaleX:1,
		scaleY:1,
		alpha:0,
		onComplete:function(){
			cRem(5, e3);
		}
	});
}

$(function(){
	$NG.window3.on('mouseenter','#countershotId',function(){
		var countershotChance = "15%".fontcolor("#00ff00");
		var a=TTphy( (attackFunct()/3), .8, "Counter Shot",0,'bow');
		var b=TTmag( attackFunct()/7, .8, "fire", "elemental");
		NG.tooltipname.innerHTML = "Counter Shot";
		var s="Physical damage received has a "+countershotChance+" chance to activate Counter Shot.<br><br>"+
		"Counter Shot hits for "+a[0]+" to "+a[1]+" physical bow damage. <br><br>";
		if(my.talent8>=20){ 
			s+="Your arrows have a "+green("30%")+" chance to inflict "+b[0]+" to "+b[1]+" fire damage.<br><br>"; 
		}
		s+="Effect: Interrupts your target's spell and absorbs mana.<br><br>";
		if(my.talent5>=20){ 
			s+="Effect: Stuns your target for 1.5 seconds.<br><br>";
		}		
		s+="If no bow is equipped, magic arrows are fired instead.";
		NG.tooltipmsg.innerHTML = s;
	});
});
function counterShot(){
	if(my.level<3){ return; }
	if(counterShotStatus===false){ return; }
	BGP('countershotId', "-500% -300%");
	var dam = minMax((attackFunct()/3),.8);
	counterShotStatus=false;
	var Slot=TGT;
	if(GLB.videoSetting==="High"){ animateCounterShot(Slot); }
	var hit=g.myPhysicalDamage(dam, Slot, "Counter Shot", 0, 'bow');
	if(my.talent5>=20){
		if(hit!==undefined){
			stunTarget(Slot, 1500, '-160px');
			playAudio("arrowhit");
		}
	}else{
		if(hit!==undefined){
			interruptTarget(Slot);
			playAudio("arrowhit");
		}
	}
}
function animateCounterShot(Slot){
	var x2 = MOB[Slot].offsetLeft+mob[Slot].cX-50;
	var y2 = MOB[Slot].offsetTop+mob[Slot].cY-50;
	var e1 = can('counterShot', 5, x2, y2, 100, 100, true);
	e1.alpha = .5;
	T.to(e1, .25, {
		scaleX:2,
		scaleY:2,
		alpha:0,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var e2 = can('counterShot', 5, x2, y2, 100, 100, true);
	e2.alpha = .5;
	T.to(e2, .25, {
		scaleX:.5,
		scaleY:.5,
		alpha:0,
		onComplete:function(){
			cRem(5, e2);
		}
	});
	var e3 = can('counterShot', 5, x2, y2, 100, 100, true);
	e3.alpha = .5;
	T.to(e3, .5, {
		scaleX:3,
		scaleY:3,
		alpha:.1,
		onComplete:function(){
			T.to(e3, 1.125, {
				scaleX:4,
				scaleY:4,
				alpha:0,
				onComplete:function(){
					cRem(5, e3);
				}
			});
		}
	});
}

function trueshotArrowReady(bypass){
	if(bypass===false){
		if(D.getElementById('trueshotarrowId').textContent!==''){return;}
	}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
	refreshtrueshotArrow.kill();
    setD('trueshotarrowId', false);
    BGP('trueshotarrowId', "-600% 0%");
	D.getElementById('trueshotarrowId').innerHTML='';
	g.checkRangerSkills();
}
function trueshotArrowTimer(){
	refreshtrueshotArrow = T.to('', .1, {repeat:-1, onRepeat:trueshotArrowReady});
}
$(function(){
	$NG.window3.on('mouseenter','#trueshotarrowId',function(){
		var CD = 30;
		if(Set.Daimyo>=6){ CD -= 6; }
		var a=TTphy( 5+(attackFunct()/2), .8, "Trueshot Arrow",0,'bow');
		var b=TTmag( attackFunct()/7, .8, "fire", "elemental");
		var value1 = 10;
		if(mob[TGT].snareStatus===true){ value1+=7; }
		if(sowStatus===true){ value1+=7; }
		NG.tooltipname.innerHTML = "Trueshot Arrow";
		var target="your target twice";
		if(my.talent7>=20){
			target="your target twice and a third arrow hits three targets";
		}
		var s="Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Trueshot Arrow hits "+target+" for "+a[0]+" to "+a[1]+" physical bow damage.<br><br>"+
		"A successful parry has a "+green(value1+"%")+" chance to amplify your next trueshot arrow by 50%.<br><br>";
		var goy=empowerTrueshot;
		if(empowerTrueshot>=500){
			goy=500;
		}
		s+="Current Amplification: "+green(goy+"%")+
		"<div id='ampWrap'><div id='ampBar'></div></div>";
		if(my.talent8>=20){ 
			s+="Your arrows have a "+green("30%")+" chance to inflict "+b[0]+" to "+b[1]+" fire damage.<br><br>"; 
		}
		s+="If no bow is equipped, magic arrows are fired instead.";
		NG.tooltipmsg.innerHTML = s;
		var goy = (goy/500)*100;
		D.getElementById('ampBar').style.width=goy+'%';
		T.to('#ampBar', .3, {
			backgroundColor:'#aa8a00', repeat:-1, yoyo:true
		});
	});
});
function trueshotArrow(){
	if(btn.d.trueshotarrowId===true||my.level<6){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('trueshotarrowId', true);
    BGP('trueshotarrowId', "-600% -100%");
	trueshotCD.kill();
	var d = 30000;
	if(Set.Daimyo>=6){ d -= 6000; }
	trueshotCD = T.delayedCall(d/1000, function(){ trueshotArrowTimer()});
	timerTick(D.getElementById('trueshotarrowId'),d/1000,'trueshotarrowId');
	beginGlobalCooldown();
	var skillName = "Trueshot Arrow";
	var Slot = TGT;
	function doit(){
		if(countMobs()<1){ return; }
		playAudio("spellDoneBoom");
		var count = 1;
		if(my.talent7>=20){ count++; }
		for(var i=0;i<=count;i++){
			if(GLB.videoSetting==="High"){ animateTrueshotArrow(Slot); }
			var dam = minMax(5+(attackFunct()/2),.8);
			g.myPhysicalDamage(dam, Slot, skillName, 0, "bow");
		}
		if(my.talent7>=20){
			if(Slot-1>=0){
				if(mob[Slot-1].name!==""){
					if(GLB.videoSetting==="High"){ animateTrueshotArrow(Slot-1); }
					var dam = minMax(5+(attackFunct()/2),.8);
					g.myPhysicalDamage(dam, Slot-1, skillName, 0, "bow");
				}
			}
			if(Slot+1<5){
				if(mob[Slot+1].name!==""){
					if(GLB.videoSetting==="High"){ animateTrueshotArrow(Slot+1); }
					var dam = minMax(5+(attackFunct()/2),.8);
					g.myPhysicalDamage(dam, Slot+1, skillName, 0, "bow");
				}
			}
		}
		empowerTrueshot=0;
	}
	playAudio("bowdraw");
	T.delayedCall(1.2, doit);
}
function animateTrueshotArrow(Slot){
	if(!mob[Slot].name){ return; }
	var xWidth = mob[Slot].imageWidth-80;
	var xHeight = mob[Slot].imageHeight-80;
	var x2 = MOB[Slot].offsetLeft+mob[Slot].cX;
	var y2 = MOB[Slot].offsetTop+mob[Slot].cY;
	var ranX = x2+M.random()*(xWidth-(xWidth/2));
	var ranY = y2+M.random()*(xHeight-(xHeight/2));
	var p1 = can('rngSmoke', 5, ranX, ranY, 25, 25, true);
	T.to(p1,.15,{
		scaleX:3,
		scaleY:3,
		alpha:0
	});
	T.to(p1,1.2,{
		scaleX:4,
		scaleY:4,
		alpha:0,
		delay:.15,
		onComplete:function(){
			cRem(5, p1);
		}
	});
	var p2 = can('rngFire', 5, ranX-50, ranY-50, 100, 100, true);
	T.to(p2, .25,{
		scaleX:3,
		scaleY:3,
		alpha:0,
		onComplete:function(){
			cRem(5, p2);
		}
	});
	var p3 = can('rngFireOut', 5, ranX-50, ranY-50, 100, 100, true);
	T.to(p3,.25,{
		scaleX:3,
		scaleY:3,
		alpha:0,
		onComplete:function(){
			cRem(5, p3);
		}
	});
	var p4 = can('lineNova', 5, x2-200, y2-200, 400, 400, true);
	p4.alpha = .4;
	T.to(p4,.5,{
		alpha:0,
		scaleX:1.25,
		scaleY:1.25,
		onComplete:function(){
			cRem(5, p4);
		}
	});
}

function volleyShotReady(){
	if(D.getElementById('volleyshotId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('volleyshotId', false);
    BGP('volleyshotId', "-700% 0%");
	g.checkRangerSkills();
	refreshvolleyShot.kill();
}
function volleyShotTimer(){
	refreshvolleyShot = T.to('', .1, {repeat:-1, onRepeat:volleyShotReady});
}
function volleyShot(){
	if(btn.d.volleyshotId===true||my.level<32){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('volleyshotId', true);
    BGP('volleyshotId', "-700% -100%");
	T.delayedCall(20, volleyShotTimer);
	timerTick(D.getElementById('volleyshotId'),20000/1000,'volleyshotId');
	beginGlobalCooldown();
	volleyShotCount = 0;
	var x = countMobs();
	var volleyShotTotalHits = 3;
	if(x===1){ volleyShotTotalHits=5; }
	if(x===2){ volleyShotTotalHits=7; }
	if(x===3){ volleyShotTotalHits=9; }
	if(x===4){ volleyShotTotalHits=12; }
	if(x===5){ volleyShotTotalHits=15; }
	if(sowStatus===true){ volleyShotTotalHits+=1; }
	for(var i=0;i<=4;i++){
		if(mob[i].snareStatus===true){ volleyShotTotalHits+=1; }
	}
	if(my.talent10>=20){
		volleyShotTotalHits=M.round(volleyShotTotalHits*1.5);
	}
	if(attackStatus===1){return;}
	volleyShotExecute(volleyShotTotalHits);
}
function volleyShotExecute(volleyShotTotalHits){
	if(volleyShotCount===volleyShotTotalHits){ return; }
	calculateVolleyDamage();
	volleyShotCount+=1;
	playAudio("arrow"+ ~~(M.random()*(3)+3));
	T.delayedCall(.1, function(){ 
		volleyShotExecute(volleyShotTotalHits); 
	});
}
function calculateVolleyDamage(){
	var Slot = selectRandomTarget();
	if(Slot===undefined){ return; }
	if(GLB.videoSetting==="High"){ animateVolleyShot(Slot); }
	T.delayedCall(.15, function(){
		var dam = minMax((attackFunct()/12),.6);
		g.myPhysicalDamage(dam, Slot, 'Volley Shot',0,'bow');
	});
}
$(function(){
	$NG.window3.on('mouseenter','#volleyshotId',function(){
		var CD = "20".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/12), .6, "Volley Shot",0,'bow');
		var b=TTmag( attackFunct()/7, .8, "fire", "elemental");
		var shotBonus = 0;
		if(sowStatus===true){ shotBonus = 1; }
		for (var i=0;i<=4;i++){
			if(mob[i].snareStatus===true){ shotBonus+=1; }
		}
		var bonus=1;
		if(my.talent10>=20){
			bonus=1.5;
		}
		var value1 = (M.round((5+shotBonus)*bonus)+"").fontcolor("#00ff00");
		var value2 = (M.round((7+shotBonus)*bonus)+"").fontcolor("#00ff00");
		var value3 = (M.round((9+shotBonus)*bonus)+"").fontcolor("#00ff00");
		var value4 = (M.round((12+shotBonus)*bonus)+"").fontcolor("#00ff00");
		var value5 = (M.round((15+shotBonus)*bonus)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Volley Shot";
		var s="Cooldown: "+CD+" Seconds<br><br>"+
		"Volley Shot hits random targets for "+a[0]+" to "+a[1]+" physical bow damage. More arrows are fired as the number of targets increases.<br><br>"+
		"1 target: "+value1+" shots<br>"+
		"2 target: "+value2+" shots<br>"+
		"3 target: "+value3+" shots<br>"+
		"4 target: "+value4+" shots<br>"+
		"5 target: "+value5+" shots<br><br>";
		if(my.talent8>=20){ 
			s+="Your arrows have a "+green("30%")+" chance to inflict "+b[0]+" to "+b[1]+" fire damage.<br><br>"; 
		}
		s+="If no bow is equipped, magic arrows are fired instead.";
		NG.tooltipmsg.innerHTML = s;
		
		
	});
});
function animateVolleyShot(Slot){
	var xWidth = mob[Slot].imageWidth/2;
	var xHeight = mob[Slot].imageHeight/2;
	var x2 = MOB[Slot].offsetLeft+mob[Slot].cX;
	var y2 = MOB[Slot].offsetTop+mob[Slot].cY;
	var ranX = x2+M.random()*(xWidth-(xWidth/2));
	var ranY = y2+M.random()*(xHeight-(xHeight/2));
	var e1 = can('arrow', 5, ranX-400, ranY-500, 50, 50);
	T.to(e1,.15,{
		x:ranX+25,
		y:ranY+25,
		ease:ez.lin,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	function doit(){
		var e2 = can('rngSmoke', 5, ranX-50, ranY-50, 0, 0, true);
		T.to(e2, .15, {
			scaleX:1,
			scaleY:1
		});
		T.to(e2, 1.2, {
			delay:.15,
			scaleX:3,
			scaleY:3,
			alpha:0,
			onComplete:function(){
				cRem(5, e2);
			}
		});
		var e3 = can('rngFire', 5, ranX-50, ranY-50, 50, 50, true);
		T.to(e3,.2,{
			scaleX:1,
			scaleY:1,
			alpha:0,
			onComplete:function(){
				cRem(5, e3);
			}
		});
	}
	T.delayedCall(.15, doit);
}
function lightHealingReady(){
	if(D.getElementById('lighthealingId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('lighthealingId', false);
    BGP('lighthealingId', "-800% 0%");
	g.checkRangerSkills();
	refreshlightHealing.kill();
}
function lightHealingTimer(){
	refreshlightHealing = T.to('', .1, {repeat:-1, onRepeat:lightHealingReady});
}
function lightHealing(){
	if(btn.d.lighthealingId===true||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = rng.cost.lightHealing;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Light Healing";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("teal");
	animateCastBar("lightHealing");
	playAudio("spellCastHeal",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#lighthealingId',function(){
		var spellType = "Alteration";
		var CD = "16".fontcolor("#ff0000");
		var a=TTheal( (alterationTotal()*1.4), .9);
		NG.tooltipname.innerHTML = "Light Healing";
		NG.tooltipmsg.innerHTML = "Cost: "+green(rng.cost.lightHealing)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Light Healing heals for "+a[0]+" to "+a[1]+" hit points.";
	});
});
g.lightHealingFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	animateHealing("teal");
    setD('lighthealingId', true);
    BGP('lighthealingId', "-800% -100%");
	T.delayedCall(16, lightHealingTimer);
	timerTick(D.getElementById('lighthealingId'),16000/1000,'lighthealingId');
	var healAmount = minMax((alterationTotal()*1.4),.9);
	g.popupHeal(healAmount);
	g.drawMyMp(-spellMpCost);
}

function wardersRiftReady(){
	if(D.getElementById('wardersrift').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('wardersrift', false);
    BGP('wardersrift', "-1200% 0%");
	refreshwardersRift.kill();
}
function wardersRiftTimer(){
	refreshwardersRift = T.to('', .1, {repeat:-1, onRepeat:wardersRiftReady});
}
$(function(){
	$NG.window3.on('mouseenter','#wardersrift',function(){
		var spellType = "Conjuration";
		var CD = "45".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Warder's Rift";
		NG.tooltipmsg.innerHTML = "Cost: "+green(rng.cost.wardersRift)+" Mana Points<br>"+
		"Cast Time: Instant<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Warder's Rift envelopes your target inside an umbral barrier. All damage between you and the target is reduced by "+green(fix(wardersRiftReduction())+"%")+" for "+green("35")+" seconds.";
	});
});
function wardersRiftReduction(){
	return (30+(conjurationTotal()/9));
	
}
function wardersRift(){
	if(btn.d.wardersrift===true||my.level<24){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	spellMpCost = rng.cost.wardersRift;
	if(my.mp<spellMpCost){ return; }
    setD('wardersrift', true);
    BGP('wardersrift', "-1200% -100%");
	T.delayedCall(45, wardersRiftTimer);
	timerTick(D.getElementById('wardersrift'),45000/1000,'wardersrift');
	var Slot = TGT;
	Chat((mob[Slot].name + " is trapped in a dark rift."),3);
	var stasisDuration = 35000;
	if(mob[Slot].level > my.level){
		stasisDuration -= (M.pow((mob[Slot].level - my.level),1.2));
	}
	if(stasisDuration < 15000){ stasisDuration = 15000; }
	mob[Slot].riftStatus = true;
	var id = mob[Slot].ID;
	blur(Slot, 12);
	T.delayedCall(stasisDuration/1000, function(){
		mob[Slot].riftStatus=false;
		if(id===mob[Slot].ID){
			blur(Slot, 0);
		}
		T.to('#orbIcon'+Slot, .5, {
			opacity:0,
			onComplete:function(){
				$("#orbIcon"+Slot).remove();
			}
		});
	});
	animateRift(stasisDuration,Slot);
	spellType = "conjuration";
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	var buffId = "stasisIcon";
	var duration = stasisDuration;
	var spriteX = -384;
	addMobBuffIcon("Warder's Rift",Slot,buffId,duration,spriteX);
	playAudio("novaelec");
}

function animateRift(riftDuration,Slot){
	if(mob[Slot].hp <= 0){ return; }
	var bottomAdjust = M.ceil(MOB[Slot].offsetTop + mob[Slot].cY);
	var leftAdjust = M.ceil( MOB[Slot].offsetLeft + mob[Slot].cX);
	var H1 = IMG(leftAdjust, bottomAdjust, 0, 0, 'orbIcon'); 
	H1.style.opacity=.75;
	H1.id='orbIcon'+Slot;
	NG.eWin2.appendChild(H1);
	if(GLB.videoSetting==="High"){
		T.to(H1, 1.2, {
			height:400, width:400, opacity:.75, top:bottomAdjust-200, left:leftAdjust-200,
			force3D:"auto",
			ease:ez.bout
		});
		T.to(H1, 40, {
			rotation:360,
			force3D:"auto",
			ease:ez.lin,
			repeat:-1
		});
	}
}
function igniteReady(){
	if(D.getElementById('igniteId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('igniteId', false);
    BGP('igniteId', "-1000% 0%");
	g.checkRangerSkills();
	refreshignite.kill();
}
function igniteTimer(){
	refreshignite = T.to('', .1, {repeat:-1, onRepeat:igniteReady});
}
function ignite(){
	if(btn.d.igniteId===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = rng.cost.ignite;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Ignite";
	spellCastTime = castSpeedTotal(1500);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("red");
	animateCastBar("ignite");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
function castTimeTT(d){
	var x = castSpeedTotal(d/1000).toFixed(2);
	var y = x[2];
	var z = x[3];
	if(y==="0"&&z==="0"){
		x = (x*1).toFixed(0);
	}else if(z==="0"){
		x = (x*1).toFixed(1);
	}
	return green(x);
}
$(function(){
	$NG.window3.on('mouseenter','#igniteId',function(){
		var spellType = "Evocation";
		var CD = "10".fontcolor("#ff0000");
		var a=TTmag( evocationTotal()*2.7, .85, "fire", "Ignite");
		NG.tooltipname.innerHTML = "Ignite";
		NG.tooltipmsg.innerHTML = "Cost: "+green(rng.cost.ignite)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Ignite hits your target for "+a[0]+" to "+a[1]+" fire damage.";
	});
});
g.igniteFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneFlames");
    setD('igniteId', true);
    BGP('igniteId', "-1000% -100%");
	T.delayedCall(10, igniteTimer);
	timerTick(D.getElementById('igniteId'),10000/1000,'igniteId');
	g.drawMyMp(-spellMpCost);
	var dam = minMax(evocationTotal()*2.7,.85);
	if(GLB.videoSetting==="High"){ animateStarfire(TGT); }
	g.myMagicDamage("fire", dam, TGT, checkCrit(), "Ignite");
}
function faerieFlameReady(){
	if(D.getElementById('faerieflameId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('faerieflameId', false);
    BGP('faerieflameId', "-900% 0%");
	g.checkRangerSkills();
	refreshfaerieFlame.kill();
}
function faerieFlameTimer(){
	refreshfaerieFlame = T.to('', .1, {repeat:-1, onRepeat:faerieFlameReady});
}
function faerieFlame(){
	if(btn.d.faerieflameId===true||my.level<11){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = rng.cost.faerieFlame;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Faerie Flame";
	spellCastTime = castSpeedTotal(2000);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("blue");
	animateCastBar("faerieFlame");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#faerieflameId',function(){
		var spellType = "Conjuration";
		var a=TTdot( 1+conjurationTotal()*.28, .9, "magic", "Faerie Flame");
		var value1 = "15%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Faerie Flame";
		NG.tooltipmsg.innerHTML = "Cost: "+green(rng.cost.faerieFlame)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Faerie Flame ticks for "+a[0]+" to "+a[1]+" arcane damage every second for 21 seconds.<br><br>"+
		"Effect: Increases all damage inflicted by "+value1+".";
	});
});
g.faerieFlameFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	var Slot = TGT;
	animateDot(Slot,'blue',125,50,35,250,ez.Qout,15,5,-150,1.2);
	g.drawMyMp(-spellMpCost);
	spellDamage = M.ceil(1+conjurationTotal()*.28);
	var mType="magic";
	Chat((mob[TGT].name+"'s outline is illuminated by faerie flames."),3);
	mob[Slot].faerieFlameTickCount=1;
	mob[Slot].faerieFlameTick=spellDamage;
	mob[Slot].faerieFlameTickInterval.kill();
	mob[Slot].faerieFlameTickInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		faerieFlameTick(mType, Slot); 
	}});
	var buffId = "faerieFlameIcon";
	var duration = 21000;
	var spriteX = -288;
	addMobBuffIcon("Faerie Flame",Slot,buffId,duration,spriteX);
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}

function faerieFlameTick(mType, Slot){
	if(mob[Slot].name===""){
		mob[Slot].faerieFlameTickInterval.kill();
		mob[Slot].faerieFlameTickCount=0;
	}
	g.myDotDamage(mob[Slot].faerieFlameTick, Slot,mType, "Faerie Flame");
	mob[Slot].faerieFlameTickCount+=1;
	if(mob[Slot].faerieFlameTickCount===22){
		mob[Slot].faerieFlameTickInterval.kill();
		mob[Slot].faerieFlameTickCount=0;
	}
}
function unlockQuests(){
	if(dev){
		for(var i=0;i<=2;i++){
			P.Q[i].GreaterFaydark=4;
			P.Q[i].LesserFaydark=2;
			P.Q[i].Blackburrow=4;
			P.Q[i].Befallen=4;
			P.Q[i].Crushbone=4;
			P.Q[i].Najena=4;
			P.Q[i].UpperGuk=4;
			P.Q[i].EstateofUnrest=4;
			P.Q[i].CastleMistmoore=4;
			P.Q[i].LowerGuk=4;
			P.Q[i].CazicThule=4;
			P.Q[i].KedgeKeep=5;
			P.Q[i].PermafrostKeep=5;
			P.Q[i].NagafensLair=5;
			P.Q[i].PlaneofHate=2;
			P.Q[i].PlaneofFear=2;
		}
	}
}
function snareReady(){
	if(D.getElementById('snareId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('snareId', false);
    BGP('snareId', "-1100% 0%");
	g.checkRangerSkills();
	refreshsnare.kill();
}
function snareTimer(){
	refreshsnare = T.to('', .1, {repeat:-1, onRepeat:snareReady});
}
function snare(){
	if(btn.d.snareId===true||my.level<17){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = rng.cost.snare;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Snare";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("green");
	animateCastBar("snare");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#snareId',function(){
		var spellType = "Alteration";
		var CD = "5".fontcolor("#ff0000");
		var value1 = "7%".fontcolor("#00ff00");
		var value2 = "33%".fontcolor("#00ff00");
		var value3 = "5%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Snare";
		NG.tooltipmsg.innerHTML = "Cost: "+green(rng.cost.snare)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Snare reduces your target's mobility and attack speed by "+value2+".<br><br>"+
		"Effects:<br>"+
		"Increases the numbers of arrows fired by Volley Shot by 1.<br>"+
		"Increases parry's chance to amplify your next Trueshot Arrow by "+value1+".<br>"+
		"Increases received physical damage's chance to activate Counter Shot by "+value3+".";
	});
});
g.snareFinish=function(){
	if(endSpell()===false){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	playAudio("spellDoneHeal");
    setD('snareId', true);
    BGP('snareId', "-1100% -100%");
	T.delayedCall(5, snareTimer);
	timerTick(D.getElementById('snareId'),5000/1000,'snareId');
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	snareTarget(Slot);
	addMobBuffIcon("Snare",Slot,"snareIcon",0,-352);
}
function snareTarget(Slot, bypass){
	if(!bypass){
		if(GLB.videoSetting==="High"){ 
			animateSnare(Slot); 
		}
	}
	if(statusResist(Slot)===true){
		Chat((mob[Slot].name+" resisted Snare."),1);
		return;
	}
	Chat((mob[Slot].name+" is ensnared."),3);
	mob[Slot].snareStatus=true;
}
function animateSnare(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY;
	var x2 = (cX-150);
	var y2 = 575;
	function doit(count){
		var ranX = M.random()*(200);
		var ranY = M.random()*(60);
		var p4 = can('snare', 7, x2+ranX, y2+ranY, 100, 100, true);
		p4.alpha = .3;
		T.to(p4, M.random()*(15)+5, {
			y:"+="+25,
			scaleX:6,
			scaleY:2,
			alpha:0,
			ease:ez.lin,
			onComplete:function(){
				cRem(7, p4);
			}
		});
		if(count<40){ 
			T.delayedCall(.01, function(){ 
				doit(++count);
			}); 
		}
	}
	doit(0);
}

function shieldOfBrambles(){
	if(btn.d.shieldofbramblesId===true||my.level<21){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = rng.cost.shieldOfBrambles;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Shield of Brambles";
	spellCastTime = castSpeedTotal(1500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("yellow");
	animateCastBar("shieldOfBrambles");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#shieldofbramblesId',function(){
		var DUR = "1.5".fontcolor("#00ff00");
		var spellType = "Abjuration";
		var duration = "15".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.04)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Shield of Brambles";
		NG.tooltipmsg.innerHTML = "Cost: "+green(rng.cost.shieldOfBrambles)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Shield of Brambles reflects "+minimum+" damage when hit by physical attacks for "+duration+" minutes.";
	});
});
g.shieldOfBramblesFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	animateBuff('yellow','easeInBack', 25, 11, 120, 3.5);
	g.drawMyMp(-spellMpCost);
	Chat(("You are covered in a veil of thorns."),3);
	shieldOfBramblesStatus=true;
	shieldOfBramblesTimeout.kill();
	shieldOfBramblesTimeout = T.delayedCall(420, shieldOfBramblesExpire);
	var skillName = "Shield of Brambles";
	var buffId = "damageShieldIcon";
	var duration = 900000;
	var spriteX = -512;
	damageShieldIconTimer.kill();
	damageShieldIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function shieldOfBramblesExpire(){
	shieldOfBramblesStatus=false;
}

function weaponShieldReady(){
	if(D.getElementById('weaponshieldId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('weaponshieldId', false);
    BGP('weaponshieldId', "-1300% 0%");
	g.checkRangerSkills();
	refreshweaponShield.kill();
}
function weaponShieldTimer(){
	refreshweaponShield = T.to('', .1, {repeat:-1, onRepeat:weaponShieldReady});
}
$(function(){
	$NG.window3.on('mouseenter','#weaponshieldId',function(){
		var CD = "40".fontcolor("#ff0000");
		var maximum = "10".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Weapon Shield";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Weapon Shield ripostes all physical attacks for "+maximum+" seconds.";
	});
});
function weaponShield(){
	if(btn.d.weaponshieldId===true||my.level<38){ return;}
	if(checkBashFear()===true){ return; }
    setD('weaponshieldId', true);
    BGP('weaponshieldId', "-1300% -100%");
	T.delayedCall(40, weaponShieldTimer);
	timerTick(D.getElementById('weaponshieldId'),40000/1000,'weaponshieldId');
	beginGlobalCooldown();
	Chat(("You deftly twirl your blades."));
	weaponShieldStatus=true;
	T.delayedCall(10, function(){
		weaponShieldStatus=false;
	});
	var skillName = "Weapon Shield";
	var buffId = "weaponShieldIcon";
	var duration = 10000;
	var spriteX = -416;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	if(GLB.videoSetting==="High"){ animateWeaponShield(); }
}
function animateWeaponShield(){
	animateBardLight('whiteLight3');
	animateBuffRings(0, 6);
}

function thistlecoat(){
	if(btn.d.thistlecoatId===true||my.level<15){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = rng.cost.thistlecoat;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Thistlecoat";
	spellCastTime = castSpeedTotal(2500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("thistlecoat");
	playAudio("spellCastAbjure",0,spellCastTime);
	g.drawMyHp();
}
$(function(){
	$NG.window3.on('mouseenter','#thistlecoatId',function(){
		var spellType = "Abjuration";
		var duration = "40".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.47)+"").fontcolor("#00ff00");
		var maximum = ( M.ceil(abjurationTotal()*.0125)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Thistlecoat";
		NG.tooltipmsg.innerHTML = "Cost: "+green(rng.cost.thistlecoat)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Thistlecoat buffs your armor by "+minimum+" and reflects "+maximum+" damage when hit by physical attacks for "+duration+" minutes.";
	});
});
g.thistlecoatFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	animateBuff('green','easeInBack', 5, 25, 120, 4);
	g.drawMyMp(-spellMpCost);
	Chat(("Your skin is strengthened by a veil of barbs."),3);
	if(thistlecoatStatus===true){ armorBuff-=thistlecoatArmorBoost; }
	thistlecoatTimeout.kill();
	thistlecoatTimeout = T.delayedCall(2400, thistlecoatExpire);
	thistlecoatArmorBoost = M.ceil(abjurationTotal()*.47);
	armorBuff+=thistlecoatArmorBoost;
	thistlecoatStatus=true;
	CStat();
	var skillName = "Thistlecoat";
	var buffId = "thistlecoatIcon";
	var duration = 2400000;
	var spriteX = -448;
	thistlecoatIconTimer.kill();
	thistlecoatIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function thistlecoatExpire(){
	thistlecoatStatus=false;
	armorBuff-=thistlecoatArmorBoost;
	CStat();
}

function feetLikeCat(){
	if(btn.d.feetlikecatId===true||my.level<19){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = rng.cost.feetLikeCat;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Feet Like Cat";
	spellCastTime = castSpeedTotal(2500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("yellow");
	animateCastBar("feetLikeCat");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#feetlikecatId',function(){
		var spellType = "Abjuration";
		var duration = "36".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.22)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Feet Like Cat";
		NG.tooltipmsg.innerHTML = "Cost: "+green(rng.cost.feetLikeCat)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Feet Like Cat buffs your agility by "+minimum+" for "+duration+" minutes.";
	});
});
g.feetLikeCatFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	animateBuff("yellow",'easeInBack', 5, 25, 0, 3);
	g.drawMyMp(-spellMpCost);
	Chat(("You feel more agile."),3);
	if(feetLikeCatStatus===true){ agiBuff-=feetLikeCatBonus; }
	feetLikeCatTimeout.kill();
	feetLikeCatTimeout = T.delayedCall(2160, feetLikeCatExpire);
	feetLikeCatBonus = M.ceil(abjurationTotal()*.22);
	agiBuff+=feetLikeCatBonus;
	feetLikeCatStatus=true;
	CStat();
	var skillName = "Feet Like Cat";
	var buffId = "feetLikeCatIcon";
	var duration = 2160000;
	var spriteX = -480;
	feetLikeCatIconTimer.kill();
	feetLikeCatIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function feetLikeCatExpire(){
	feetLikeCatStatus=false;
	agiBuff-=feetLikeCatBonus;
	CStat();
}

function spiritOfTheWolf(){
	if(btn.d.rangersowId===true||my.level<28){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = rng.cost.spiritOfTheWolf;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Spirit of the Wolf";
	spellCastTime = castSpeedTotal(3500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("spiritOfTheWolf");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#rangersowId',function(){
		var spellType = "Alteration";
		var duration = "30".fontcolor("#00ff00");
		var minimum = "7%".fontcolor("#00ff00");
		var value1 = "5%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Spirit of the Wolf";
		NG.tooltipmsg.innerHTML = "Cost: "+green(rng.cost.spiritOfTheWolf)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Spirit of the Wolf buffs your attack power by "+minimum+" and your mobility for "+duration+" minutes.<br><br>"+
		"Effects:<br>"+
		"Increases the numbers of arrows fired by Volley Shot by 1.<br>"+
		"Increases parry's chance to amplify your next Trueshot Arrow by "+minimum+".<br>"+
		"Increases received physical damage's chance to activate Counter Shot by "+value1+".";
	});
});
g.spiritOfTheWolfFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	animateBuff('teal','easeInSine', 5, 15, 100, 3);
	g.drawMyMp(-spellMpCost);
	Chat(("You are surrounded by a brief lupine aura."),3);
	spiritOfTheWolfTimeout.kill();
	spiritOfTheWolfTimeout = T.delayedCall(1800, spiritOfTheWolfExpire);
	sowStatus=true;
	CStat();
	var skillName = "Spirit of the Wolf";
	var buffId = "spiritOfTheWolfIcon";
	var duration = 1800000;
	var spriteX = -544;
	spiritOfTheWolfIconTimer.kill();
	spiritOfTheWolfIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function spiritOfTheWolfExpire(){
	sowStatus=false;
	CStat();
}


function shdSlamReady(){
	if(D.getElementById('shdslamId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('shdslamId', false);
    BGP('shdslamId', "-300% 0%");
	refreshshdSlam.kill();
}
function shdSlamTimer(){
	refreshshdSlam = T.to('', .1, {repeat:-1, onRepeat:shdSlamReady});
}
$(function(){
	$NG.window3.on('mouseenter','#shdslamId',function(){
		var CD = "15".fontcolor("#ff0000");
		var value1 = "2.5".fontcolor("#00ff00");
		var a=TTphy( (attackFunct()/4)*(1+P.eq[13].armor/80), .7, "Slam");
		NG.tooltipname.innerHTML = "Slam";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Slam inflicts "+a[0]+" to "+a[1]+" physical damage on your target. Your shield's armor value increases the damage.<br><br>"+
		"Effect: Stuns your target for "+value1+" seconds.";
	});
});
function shdSlam(){
	if(btn.d.shdslamId===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	function do1(){
		setD('shdslamId', true);
		BGP('shdslamId', "-300% -100%");
		T.delayedCall(15, shdSlamTimer);
		timerTick(D.getElementById('shdslamId'),15000/1000,'shdslamId');
	}
	if(Set.GraveLord>=6){
		graveLordSlam++;
		if(graveLordSlam%2===0){
			do1();
		}
	}else{
		do1();
	}
	beginGlobalCooldown();
	var dam = minMax((attackFunct()/4)*(1+P.eq[13].armor/80),.7);
	var Slot=TGT;
	var hit=g.myPhysicalDamage(dam, Slot, "Slam");
	if(hit!==undefined){
		stunTarget(Slot, 2500, -96);
		playAudio("shldblk");
	}
	if(GLB.videoSetting==="High"){ animateSlam(Slot); }
}
function crescentCleaveReady(){
	if(D.getElementById('crescentcleaveId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('crescentcleaveId', false);
    BGP('crescentcleaveId', "-400% 0%");
	refreshcrescentCleave.kill();
}
function crescentCleaveTimer(){
	refreshcrescentCleave = T.to('', .1, {repeat:-1, onRepeat:crescentCleaveReady});
}
$(function(){
	$NG.window3.on('mouseenter','#crescentcleaveId',function(){
		var CD = "8".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/16), .5, "Crescent Cleave");
		NG.tooltipname.innerHTML = "Crescent Cleave";
		NG.tooltipmsg.innerHTML = "Crescent Cleave hits your target and adjacent targets for "+a[0]+" to "+a[1]+" physical damage.";
	});
});
function crescentCleave(){
	if(btn.d.crescentcleaveId===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	beginGlobalCooldown();
	var Slot = TGT;
	for(var i=(Slot-1);i<=(Slot+1);i++){
		if(i>=0){
			if(mob[i].name!==""){
				var dam = minMax((attackFunct()/16),.5);
				if(GLB.videoSetting==="High"){ animateCrescentCleave(i); }
				g.myPhysicalDamage(dam, i, "Crescent Cleave");
			}
		}
	}
}

function animateCrescentCleave(Slot){
	var xWidth = mob[Slot].imageWidth+200;
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var e1 = can('crescentCleave', 5, x2-100, y2-100, xWidth, xWidth, true);
	e1.rotation = M.random()*(360);
	T.to(e1, .25, {
		rotation:"+=360",
		scaleX:e1.scaleX*.4,
		scaleY:e1.scaleY*.4,
		ease:ez.sout,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}

function deathStrikeReady(){
	if(D.getElementById('deathstrikeId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('deathstrikeId', false);
    BGP('deathstrikeId', "-500% 0%");
	refreshdeathStrike.kill();
}
function deathStrikeTimer(){
	refreshdeathStrike = T.to('', .1, {repeat:-1, onRepeat:deathStrikeReady});
}
$(function(){
	$NG.window3.on('mouseenter','#deathstrikeId',function(){
		var CD = "12".fontcolor("#ff0000");
		var a=TTphy( (attackFunct()/3.3), .7, "Death Strike");
		NG.tooltipname.innerHTML = "Death Strike";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Death Strike hits for "+a[0]+" to "+a[1]+" physical damage.<br><br>"+
		"Effect: Absorbs health based on damage inflicted.";
	});
});
function deathStrike(){
	if(btn.d.deathstrikeId===true||my.level<3){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('deathstrikeId', true);
    BGP('deathstrikeId', "-500% -100%");
	T.delayedCall(12, deathStrikeTimer);
	timerTick(D.getElementById('deathstrikeId'),12000/1000,'deathstrikeId');
	beginGlobalCooldown();
	var dam = minMax((attackFunct()/3.3),.7);
	deathStrikeStatus=true;
	if(GLB.videoSetting==="High"){ animateDeathStrike(TGT); }
	g.myPhysicalDamage(dam, TGT, "Death Strike");
	playAudio("slice");
}
function animateDeathStrike(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-50);
	function doit(count){
		var y3 = (y2+(count*20));
		var e1 = can('deathStrike', 5, x2, y3, 0, 0);
		T.to(e1, .25, {
			scaleX:1,
			scaleY:1,
			y:y3-200,
			ease:ez.sin,
			onComplete:function(){
				T.to(e1, .25, {
					alpha:0,
					y:"+="+20,
					onComplete:function(){
						cRem(5, e1);
					}
				});
			}
		});
		count++;
		if(count<5){ 
			T.delayedCall(.02, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
	if(GLB.videoSetting==="High"){
		animateFlyingBlood(Slot, 20);
	}
}

function gaspingFrenzyReady(){
	if(D.getElementById('gaspingfrenzyId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('gaspingfrenzyId', false);
    BGP('gaspingfrenzyId', "-600% 0%");
	refreshgaspingFrenzy.kill();
}
function gaspingFrenzyTimer(){
	refreshgaspingFrenzy = T.to('', .1, {repeat:-1, onRepeat:gaspingFrenzyReady});
}
$(function(){
	$NG.window3.on('mouseenter','#gaspingfrenzyId',function(){
		var a=TTphy( (1+attackFunct()/4500)*(P.eq[12].damage*10), .5, "Gasping Frenzy"); 
		var c=TTphy( (1+attackFunct()/4500)*(P.eq[12].damage*10), .2, "Gasping Frenzy"); 
		NG.tooltipname.innerHTML = "Gasping Frenzy";
		var s = "Cooldown: "+green("20")+" Seconds<br><br>";		
		if(P.eq[12].type==="cleaved"||
		P.eq[12].type==="smashed"||
		"staff"===P.eq[12].type){
			s+="Gasping Frenzy hits for "+a[0]+" to "+a[1]+" physical damage. The number of attacks varies based on your health value.<br><br>";
		}else{
			s+="Gasping Frenzy hits for "+c[0]+" to "+c[1]+" physical damage. The number of attacks varies based on your health value.<br><br>";		
		}
		s+="Below 100% health: "+green("3")+" attacks<br>"+
		"Below 80% health: "+green("5")+" attacks<br>"+
		"Below 60% health: "+green("8")+" attacks<br>"+
		"Below 40% health: "+green("12")+" attacks<br>"+
		"Below 20% health: "+green("18")+" attacks<br><br>"+
		"Effect: Absorbs mana based on damage inflicted.";
		NG.tooltipmsg.innerHTML = s;
	});
});
function gaspingFrenzy(){
	if(btn.d.gaspingfrenzyId===true||my.level<6){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
    setD('gaspingfrenzyId', true);
    BGP('gaspingfrenzyId', "-600% -100%");
	T.delayedCall(20, gaspingFrenzyTimer);
	timerTick(D.getElementById('gaspingfrenzyId'),20000/1000,'gaspingfrenzyId');
	beginGlobalCooldown();
	g.gaspingFrenzyStatus=true;
	myAttack.kill();
	myAttack = T.delayedCall(0, getDamage);
	autoAttackTimer(0);
}
function animateGaspingFrenzy(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	if(mob[Slot].name){
		animateTremor(x2, 600, 1, 'darkTremor');
	}
}

function harmTouchReady(){
	if(D.getElementById('harmtouchId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} 
	if(bashStatus===0||fearStatus===0){ return; }
    setD('harmtouchId', false);
    BGP('harmtouchId', "-700% 0%");
	refreshharmTouch.kill();
}
function harmTouchTimer(){
	refreshharmTouch = T.to('', .1, {repeat:-1, onRepeat:harmTouchReady});
}
$(function(){
	$NG.window3.on('mouseenter','#harmtouchId',function(){
		var CD = 120;
		var a=TTphy( 40+(attackFunct()*2.25), .9, "Harm Touch");
		var target="your target";
		if(my.talent7>=20){
			CD -= 40;
			target="three targets";
		}
		if(Set.Augur>=6){ CD -= 40; }
		NG.tooltipname.innerHTML = "Harm Touch";
		NG.tooltipmsg.innerHTML = "Cooldown: "+green(CD+" Seconds")+"<br><br>"+
		"Harm Touch hits "+target+" for "+a[0]+" to "+a[1]+" physical damage.";
	});
});
function harmTouch(){
	if(btn.d.harmtouchId===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
    setD('harmtouchId', true);
    BGP('harmtouchId', "-700% -100%");
	var d= 120000;
	if(my.talent7>=20){	d=80000; }
	if(Set.Augur>=6){ d -= 40000; }
	T.delayedCall(d/1000, harmTouchTimer);
	timerTick(D.getElementById('harmtouchId'),d/1000,'harmtouchId');
	beginGlobalCooldown();
	playAudio("spellDoneHarm");
	g.coldBloodBonus=-2;
	var Slot = TGT;
	if(my.talent7>=20){
		for(var i=0;i<=4;i++){
			if(Slot===i-1||Slot===i||Slot===i+1){
				if(mob[i].name){
					Chat((mob[i].name+" writhes in the grip of agony."),3);
					var dam = minMax(40+(attackFunct()*2.25),.9);
					if(GLB.videoSetting==="High"){ animateHarmTouch(i); }
					g.myPhysicalDamage(dam, i, "Harm Touch");
				}
			}
		}
	}else{
		var dam = minMax(40+(attackFunct()*2.25),.9);
		Chat((mob[Slot].name+" writhes in the grip of agony."),3);
		if(GLB.videoSetting==="High"){ animateHarmTouch(Slot); }
		g.myPhysicalDamage(dam, Slot, "Harm Touch");
	}
	g.coldBloodBonus=0;
}
function animateHarmTouch(Slot){
	flashScreen("#ff0000",.4,1);
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-50);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-50);
	function doit(count){
		var e1 = can('harmTouch', 5, x2-150, y2-150, 100, 100, true);
		T.to(e1, .25, {
			scaleY:1.5,
			scaleX:1.5,
			ease:ez.sout,
			onComplete:function(){
				cRem(5, e1);
			}
		});
		T.to(e1, .2, {
			alpha:0,
			ease:ez.lin
		});
		count++;
		if(count<6){ 
			T.delayedCall(.05, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
}
function killPet(){
	petHp=0;
	Chat((petName+" is dismissed."));
	$("#pethpbardiv").css('display','none');
	$NG.mob5.stop(true,true).animate({opacity:0},250,"easeOutQuad",function(){
		$(this).css('display','none');
	});
	g.petAlive=false;
	petImage="";
	petName="";
}
function summonDead(){
	if(btn.d.summondeadId===true||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	if(g.petAlive===true){
		killPet();
		playAudio("skeleton_die");
		BGP('summondeadId', "-1600% -100%");
		g.checkShadowKnightSkills();
		return;
	}
	spellMpCost = sk.cost.summonDead;
	if(my.mp<spellMpCost){ return; }
	if(g.petAlive===false){
		currentSpell = "Summon Dead";
		spellCastTime = castSpeedTotal(6000);
		spellType = "conjuration";
		if(startSpell()===false){ return; }
		animateParticlesUp("purple");
		animateCastBar("summonDead");
		playAudio("spellCastAbjure");
		preload(['/images1/a dark skeleton.png']);
	}
}
$(function(){
	$NG.window3.on('mouseenter','#summondeadId',function(){
		var spellType = "Conjuration";
		NG.tooltipname.innerHTML = "Summon Dead";
		NG.tooltipmsg.innerHTML = "Cost: "+green(sk.cost.summonDead)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(6000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Summon Dead conjures a skeleton warrior to fight by your side.";
	});
});
g.summonDeadFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellCastAbjure");
	castingSpell = 1;
	playAudio("skeleton_att");
	g.drawMyMp(-spellMpCost);
	Chat((my.name+" animates an undead servant."),3);
	petLevel=~~(my.level/2.2)+1;
	petWidth=160+M.ceil(petLevel/3);
	petHeight=(petWidth*2.096);
	petImage="a dark skeleton";
	petLastCast = petImage;
	petMaxHp=M.ceil(50+(petLevel*50));
	if(my.talent9>=20){
		petMaxHp=petMaxHp*2;
	}
	petHp=petMaxHp;
	createPetName();
	petStr=M.ceil(petLevel*2);
	petDef=M.ceil(petLevel*3);
	petPoison=100;
	petMagic=100;
	petLightning=100;
	petFire=100;
	petCold=100;
	petSkill1="kick"; petSkill2="kick"; petSkill3="kick"; petSkill4="kick";
	petCastingFrequency=10;
	g.petAlive=true;
	petSpeed=3000;
	petPosition=1;
	g.checkShadowKnightSkills();
	$("#pethpbardiv").css('display','block');
    BGP('summondeadId', "-1600% -100%");
	g.drawMyHp();
	$NG.petImage.attr("src","/images1/a dark skeleton.png").width(petWidth+"px");
	$NG.mob5.stop(true,true).height(petHeight).width(petWidth+"px")
		.css({"left":leftAdjust,"bottom":60,opacity:1,display:"block"});
	var leftAdjust = 190+((290-petWidth)/2);
	var nameWid=$("#petName").width();
	var ADJ=(petWidth/2)-(nameWid/2);
	$("#petName").css("left",ADJ);
}
function shdLifeTapReady(){
	if(D.getElementById('shdlifetapId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('shdlifetapId', false);
    BGP('shdlifetapId', "-800% 0%");
	g.checkShadowKnightSkills();
	refreshshdLifeTap.kill();
}
function shdLifeTapTimer(){
	refreshshdLifeTap = T.to('', .1, {repeat:-1, onRepeat:shdLifeTapReady});
}
function shdLifeTap(){
	if(btn.d.shdlifetapId===true||my.level<11){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = sk.cost.lifeTap;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Life Tap";
	spellCastTime = castSpeedTotal(2000);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("green");
	animateCastBar("shdLifeTap");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#shdlifetapId',function(){
		var spellType = "Evocation";
		var CD = green('40');
		if(my.talent6>=20){ CD = green("30"); }
		var a=TTmag( evocationTotal()*2, .9, "magic", "Life Tap");
		NG.tooltipname.innerHTML = "Life Tap";
		NG.tooltipmsg.innerHTML = "Cost: "+green(sk.cost.lifeTap)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Life Tap hits your target for "+a[0]+" to "+a[1]+" arcane damage and you absorb it as health.";
	});
});
g.shdLifeTapFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellCastAbjure");
	g.drawMyMp(-spellMpCost);
    setD('shdlifetapId', true);
    BGP('shdlifetapId', "-800% -100%");
	var d = 40000;
	if(my.talent6>=20){ d = 30000; }
	T.delayedCall(d/1000, shdLifeTapTimer);
	timerTick(D.getElementById('shdlifetapId'),d/1000,'shdlifetapId');
	spellDamage = minMax(evocationTotal()*2,.9);
	var mType="magic";
	Chat((my.name+' says, "Ah, I feel much better now."'));
	if(GLB.videoSetting==="High"){ animateShdLifeTap(TGT); }
	var foo = g.myMagicDamage("magic", spellDamage, TGT, false, "Life Tap");
	var healAmount = foo;
	g.popupHeal(healAmount,true);
}
function animateShdLifeTap(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var e1 = can('lifeTap', 5, x2-150, y2-100, 300, 300, true);
	T.to(e1, 1.2, {
		scaleX:.75,
		scaleY:.75,
		alpha:0,
		ease:ez.Qinout
	});
	T.to(e1, 1.2, {
		rotation:1440,
		ease:ez.lin,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}

function doomingDarkness(){
	if(btn.d.doomingdarknessId===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = sk.cost.doomingDarkness;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Dooming Darkness";
	spellCastTime = castSpeedTotal(2000);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("magenta");
	animateCastBar("doomingDarkness");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#doomingdarknessId',function(){
		var spellType = "Conjuration";
		var target="your target";
		var a=TTdot( 1+conjurationTotal()*.29, .9, "magic", "Dooming Darkness");
		var value1 = "15%".fontcolor("#00ff00");
		if(my.talent8>=20){
			target="all targets";
		}
		NG.tooltipname.innerHTML = "Dooming Darkness";
		NG.tooltipmsg.innerHTML = "Cost: "+green(sk.cost.doomingDarkness)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Dooming Darkness ticks for "+a[0]+" to "+a[1]+" arcane damage on "+target+" every second for 15 seconds.<br><br>"+
		"Effect: Reduces run speed of "+target+".";
	});
});
g.doomingDarknessFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	for(var i=0;i<=4;i++){
		if(i===TGT||(my.talent8>=20)){
			if(mob[i].name){
				spellDamage = minMax( 1+conjurationTotal()*.29, .9);
				Chat((mob[i].name+" is engulfed in darkness."),3);
				mob[i].doomingDarknessTickCount=1;
				mob[i].doomingDarknessTick=spellDamage;
				executeDoomingDarkness(i);
				animateDot(i,'magenta',150,50,15,100,ez.Qout,25,5,-50,.5);
			}
		}
	}
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}
function executeDoomingDarkness(Slot){
	mob[Slot].doomingDarknessInterval.kill();
	mob[Slot].doomingDarknessInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		doomingDarknessTick("magic", Slot); 
	}});
	addMobBuffIcon("Dooming Darkness",Slot,"doomingDarknessIcon",15000,-288);
}

function doomingDarknessTick(mType, Slot){
	if(mob[Slot].name===""){
		mob[Slot].doomingDarknessInterval.kill();
		mob[Slot].doomingDarknessTickCount=0;
		return;
	}
	g.myDotDamage(mob[Slot].doomingDarknessTick, Slot, mType, "Dooming Darkness");
	mob[Slot].doomingDarknessTickCount+=1;
	if(mob[Slot].doomingDarknessTickCount===16){ mob[Slot].doomingDarknessInterval.kill(); doomingDarknessTickCount=0; }
}


function heatBloodReady(){
	if(D.getElementById('heatbloodId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('heatbloodId', false);
    BGP('heatbloodId', "-1000% 0%");
	g.checkShadowKnightSkills();
	refreshheatBlood.kill();
}
function heatBloodTimer(){
	refreshheatBlood = T.to('', .1, {repeat:-1, onRepeat:heatBloodReady});
}
function heatBlood(){
	if(btn.d.heatbloodId===true||my.level<19){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = sk.cost.heatBlood;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Heat Blood";
	spellCastTime = castSpeedTotal(2000);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("red");
	animateCastBar("heatBlood");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#heatbloodId',function(){
		var spellType = "Alteration";
		var a=TTdot( alterationTotal()*.36, .9, "fire", "Heat Blood");
		NG.tooltipname.innerHTML = "Heat Blood";
		NG.tooltipmsg.innerHTML = "Cost: "+green(sk.cost.heatBlood)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Heat Blood ticks for "+a[0]+" to "+a[1]+" fire damage every second for 21 seconds.";
	});
});
g.heatBloodFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	g.drawMyMp(-spellMpCost);
	spellDamage = minMax(alterationTotal()*.36,.9);
	var mType="fire";
	g.drawMyHp();g.drawMyMp();
	Chat((mob[TGT].name+"'s blood simmers."),3);
	var Slot = TGT;
	mob[Slot].heatBloodTickCount=0;
	mob[Slot].heatBloodTick=spellDamage;
	mob[Slot].heatBloodInterval.kill();
	mob[Slot].heatBloodInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		heatBloodTick(mType, Slot);  
	}});
	var buffId = "heatBloodIcon";
	var duration = 21000;
	var spriteX = -320;
	addMobBuffIcon("Heat Blood",Slot,buffId,duration,spriteX);
	animateDot(Slot,'red',200,60,10,250,ez.cin,15,9,-100,.5);
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}

function heatBloodTick(mType, Slot){
	if(mob[Slot].name===""){ 
		mob[Slot].heatBloodInterval.kill(); 
		mob[Slot].heatBloodTickCount=0; 
		return;
	}
	g.myDotDamage(mob[Slot].heatBloodTick, Slot, mType, "Heat Blood");
	mob[Slot].heatBloodTickCount+=1;
	if(mob[Slot].heatBloodTickCount===21){ mob[Slot].heatBloodInterval.kill(); mob[Slot].heatBloodTickCount=0; }
}

function strengthenDeadReady(){
	if(D.getElementById('strengthendeadId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('strengthendeadId', false);
    BGP('strengthendeadId', "-1100% 0%");
	g.checkShadowKnightSkills();
	refreshstrengthenDead.kill();
}
function strengthenDeadTimer(){
	refreshstrengthenDead = T.to('', .1, {repeat:-1, onRepeat:strengthenDeadReady});
}
$(function(){
	$NG.window3.on('mouseenter','#strengthendeadId',function(){
		var CD = "90".fontcolor("#ff0000");
		if(my.talent11>=20){
			CD=green("45");
		}
		var duration = "30".fontcolor("#00ff00");
		var a=TTheal( (alterationTotal()*2), .9);
		NG.tooltipname.innerHTML = "Strengthen Dead";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Command your pet to enrage in a vicious frenzy for "+duration+" seconds. Your pet recovers "+a[0]+" to "+a[1]+" health.";
	});
});
function strengthenDead(){
	if(btn.d.strengthendeadId===true||my.level<24||paused===true){ return;}
	if(g.petAlive===false){ Chat(("Your companion is not here.")); return; }
    setD('strengthendeadId', true);
    BGP('strengthendeadId', "-1100% -100%");
	var d=90000;
	if(my.talent11>=20){
		d=45000;
	}
	T.delayedCall(d/1000, strengthenDeadTimer);
	timerTick(D.getElementById('strengthendeadId'),d/1000,'strengthendeadId');
	Chat((petName+"'s eyes gleam with madness."),3);
	petSpeedBuff=.5;
	var healAmount = minMax(conjurationTotal()*2.6,.9);
	petHp+= healAmount;
	g.drawMyHp();
	T.delayedCall(30, strengthenDeadExpire);
	g.popupHealSlot(healAmount,5);
	if(GLB.videoSetting==="High"){
		var x2 = (MOB[5].offsetLeft+(petWidth/2));
		var y2 = (MOB[5].offsetTop+(petHeight/2));
		var p4 = can('lineNovaRed', 7, x2-200, y2-200, 400, 400, true);
		var tl=TM();
		tl.to(p4, .15, {
			alpha:.7,
			width:1.25,
			height:1.25,
		}).to(p4, .45, {
			alpha:0,
			scaleX:2,
			scaleY:2,
			ease:ez.lin,
			onComplete:function(){
				cRem(7, p4);
			}
		});
	}
	playAudio("skeleton_att");
}
function strengthenDeadExpire(){
	petSpeedBuff=1;
}

function shdFearReady(){
	if(D.getElementById('shdfearId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('shdfearId', false);
    BGP('shdfearId', "-1200% 0%");
	g.checkShadowKnightSkills();
	refreshshdFear.kill();
}
function shdFearTimer(){
	refreshshdFear = T.to('', .1, {repeat:-1, onRepeat:shdFearReady});
}
function shdFear(){
	if(btn.d.shdfearId===true||my.level<15){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = sk.cost.fear;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Fear";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("purple");
	animateCastBar("shdFear");
	playAudio("spellDoneFlames",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#shdfearId',function(){
		var spellType = "Alteration";
		var CD = "45".fontcolor("#ff0000");
		var minimum = ( M.ceil(alterationTotal()*1.4)+"").fontcolor("#00ff00");
		var maximum = ( M.ceil((alterationTotal()*1.4)+(((wisTotal()-60)+(my.level/50))/3))+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Fear";
		NG.tooltipmsg.innerHTML = "Cost: "+green(sk.cost.fear)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Fear your target for a random duration. Feared targets cower before you and will not attack.";
	});
});
function myStatusResist(Slot){
	var foo=magicTotal()/4;
	if(foo>100){ foo=100; } //higher is better
	foo=foo/400; // 25% chance at best
	var qux=(mob[Slot].level-my.level); //mob bonus
	if(qux<=0){
		qux=0;
	}else{
		qux=qux*.02; //level diff bonus reduction 5 = .1; 10 = .2
	}
	foo-=qux;
	if(foo>.25){ foo=.25; }
	if(foo<.05){ foo=.05; }
	var kek=M.random()*(1);
	if(kek>foo){
		return false;
	}else{
		return true;
	}
}

function statusResist(Slot){
	var foo=mob[Slot].magic;
	if(foo>100){ foo=100; }
	foo=(foo/100)-.1; //.9 regular - .57 resistant - this is the best duration reduction
	var qux=(mob[Slot].level-my.level);
	if(qux<=0){
		qux=0;
	}else{
		qux=(M.pow(qux,2)/1000)*4; //level diff bonus reduction 5 = .05; 10 = .2
	}
	foo-=qux;
	if(foo<.1){ foo=.1; }
	foo=M.random()*foo;
	if(foo>.05){
		return false;
	}else{
		return true;
	}
}
function statusDurationReduction(Slot){
	var foo=mob[Slot].magic;
	if(foo>100){ foo=100; }
	foo=(foo/100)-.1; //.9 regular - .57 resistant - this is the best duration reduction
	var kek=1-foo;
	var qux=(mob[Slot].level-my.level);
	if(qux<=0){
		qux=0;
	}else{
		qux=(M.pow(qux,2)/1000)*4; //level diff bonus reduction 5 = .05; 10 = .2
	}
	foo-=qux;
	if(foo<.25){ foo=.25; }
	foo=M.random()*kek+foo;
	return foo;
}
g.shdFearFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellCastEvoke2");
	g.drawMyMp(-spellMpCost);
    setD('shdfearId', true);
    BGP('shdfearId', "-1200% -100%");
	T.delayedCall(45, shdFearTimer);
	timerTick(D.getElementById('shdfearId'),45000/1000,'shdfearId');
	var Slot = TGT;
	var fearDuration = (M.random()*(40000)+5000)*statusDurationReduction(Slot);
	if(mob[Slot].level > my.level){
		fearDuration -= (M.pow((mob[Slot].level - my.level),1.25));
	}
	if(fearDuration<10000){ fearDuration = 10000; }
	if(fearDuration>25000){ fearDuration = 25000; }
	fearTarget(Slot, fearDuration, -384);
}
function fearTarget(Slot, d, spriteX, skillName, msg){
	if(mob[Slot].name===""){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	if(!skillName){ skillName="Fear"; }
	if(!msg){ 
		Chat(mob[Slot].name+" looks very afraid.",3); 
	}else{
		Chat(msg,3); 
	}
	stopMob(Slot);
	setMobOpacity(Slot);
	mob[Slot].fearStatus=true;
	if(mob[Slot].dauntless){ d*=dauntlessReduction(); }
	mob[Slot].fearTimer.kill();
	mob[Slot].fearTimer = T.delayedCall(d/1000, function(){ mob[Slot].fearStatus = false; });
	interruptTarget(Slot);
	animateFear(Slot, d, true, .8, true);
	if(spriteX>0){
		addMobBuffIcon(skillName,Slot,"fearBuffIcon",d,spriteX);
	}else{
		mobSelfBuffIcon("Fear","mobFearIcon"+Slot,d,-32,Slot);
	}
}


function siphonStrength(){
	if(btn.d.siphonstrengthId===true||my.level<17){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = sk.cost.siphonStrength;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Siphon Strength";
	spellCastTime = castSpeedTotal(2500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesUp("orange");
	animateCastBar("siphonStrength");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#siphonstrengthId',function(){
		var spellType = "Alteration";
		var duration = "5".fontcolor("#00ff00");
		var minimum = ( M.ceil(alterationTotal()*.18)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Siphon Strength";
		NG.tooltipmsg.innerHTML = "Cost: "+green(sk.cost.siphonStrength)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Reduce your target's strength by "+green("12%")+" and buff your own strength by "+minimum+" for "+duration+" minutes.";
	});
});
g.siphonStrengthFinish=function(){
	if(endSpell()===false){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	playAudio("spellDoneHeal");
	g.drawMyMp(-spellMpCost);
	Chat((mob[TGT].name+" weakens."),3);
	if(siphonStrengthStatus===true){ strBuff-=siphonStrengthBonus; }
	siphonStrengthTimeout.kill(); 
	siphonStrengthTimeout = T.delayedCall(300, siphonStrengthExpire);
	siphonStrengthBonus = M.ceil(alterationTotal()*.18);
	strBuff+=siphonStrengthBonus;
	siphonStrengthStatus=true;
	var Slot = TGT;
	mob[Slot].siphonStrength=12;
	CStat();
	var buffId = "siphonStrengthIcon";
	var duration = 300000;
	var spriteX = -416;
	addMobBuffIcon("Siphon Strength",Slot,buffId,duration,spriteX);
	var skillName = "Siphon Strength";
	var buffId = "siphonStrengthSelfIcon";
	var duration = 300000;
	var spriteX = -416;
	siphonStrengthSelfIconTimer.kill();
	siphonStrengthSelfIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	if(GLB.videoSetting==="High"){ animateSiphonStrength(Slot); }
}
function animateSiphonStrength(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-3);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-3);
	flashScreen("#f80",.3,1);
	function doIt(count){
		var x = (M.random()*(320)+M.random()*(320)+M.random()*(320)+M.random()*(320));
		var y = 500;
		var ranY = (M.random()*(300)+100);
		var p1 = can('orangeparticle50', 5, x2, y2, 6, 6);
		T.to(p1, M.random()*(1)+.25, {
			scaleX:1,
			scaleY:1,
			x:x-13,
			y:720,
			ease:ez.Qin,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<40){ 
			doIt(++count);
		}
	}
	doIt(0);
}
function siphonStrengthExpire(){
	siphonStrengthStatus=false;
	strBuff-=siphonStrengthBonus;
	CStat();
}

function shdFeignDeathReady(){
	if(D.getElementById('shdfeigndeathId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('shdfeigndeathId', false);
    BGP('shdfeigndeathId', "-1400% 0%");
	g.checkShadowKnightSkills();
	refreshshdFeignDeath.kill();
}
function shdFeignDeathTimer(){
	refreshshdFeignDeath = T.to('', .1, {repeat:-1, onRepeat:shdFeignDeathReady});
}
function shdFeignDeath(){
	if(my.level<32){ return; }
	if(btn.d.shdfeigndeathId===true){return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = sk.cost.feignDeath;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Feign Death";
	spellCastTime = castSpeedTotal(1500);
	spellType = "abjuration";
	hideStatus=0;
	if(startSpell()===false){ return; }
	animateParticlesUp("purple");
	animateCastBar("shdFeignDeath");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#shdfeigndeathId',function(){
		var spellType = "Abjuration";
		var CD = "25".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Feign Death";
		NG.tooltipmsg.innerHTML = "Cost: "+green(sk.cost.feignDeath)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Surrounded yourself in the stench of death. All foes may believe you have died and leave the battle. When used outside of combat, mobs cannot ambush you.";
	});
});
g.shdFeignDeathFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneSlam");
	g.drawMyMp(-spellMpCost);
	T.delayedCall(25, shdFeignDeathTimer);
    setD('shdfeigndeathId', true);
    BGP('shdfeigndeathId', "-1400% -100%");
	timerTick(D.getElementById('shdfeigndeathId'),25000/1000,'shdfeigndeathId');
	if(mobsFound()===true){
		if(M.random() > .65){
			Chat("You fall to the ground. Convinced of your death, the enemy leaves the battle.",3);
			escapedFromBattle();
			return;
		}else{
			Chat("You fall to the ground, but nobody is fooled this time.",3);
		}
	}else{
		Chat("You feign your death.");
		if(hideStatus===0){ return; }
		BGP('shdfeigndeathId', "-1300% -100%");
		Chat("You feign your death.");
		hideStatus=0;
	}
	var zit = "death_mb";
	if(my.gender==="Female"){
		zit = "death_fl";
	}
	playAudio(zit);
}

function shadowVortex(){
	if(btn.d.shadowvortexId===true||my.level<21){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = sk.cost.shadowVortex;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Shadow Vortex";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesUp("purple");
	animateCastBar("shadowVortex");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#shadowvortexId',function(){
		var spellType = "Alteration";
		var duration = "3".fontcolor("#00ff00");
		var minimum = "10%".fontcolor("#00ff00");
		var maximum = "10%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Shadow Vortex";
		NG.tooltipmsg.innerHTML = "Cost: "+green(sk.cost.shadowVortex)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Your target takes "+maximum+" more physical damage and all physical damage taken is reduced by "+minimum+" for "+duration+" minutes.";
	});
});
g.shadowVortexFinish=function(){
	if(endSpell()===false){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	playAudio("spellDoneHeal");
	g.drawMyMp(-spellMpCost);
	Chat((mob[TGT].name+" is surrounded by a vortex of shadows."),3);
	shadowVortexTimeout.kill();
	shadowVortexTimeout = T.delayedCall(180, shadowVortexExpire);
	shadowVortexBonus = 10;
	shadowVortexStatus=true;
	var Slot = TGT;
	mob[Slot].shadowVortex=shadowVortexBonus;
	CStat();
	var buffId = "shadowVortexIcon";
	var duration = 180000;
	var spriteX = -480;
	addMobBuffIcon("Shadow Vortex",Slot,buffId,duration,spriteX);
	var skillName = "Shadow Vortex";
	var buffId = "shadowVortexSelfIcon";
	shadowVortexSelfIconTimer.kill();
	shadowVortexSelfIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	if(GLB.videoSetting==="High"){ animateShadowVortex(Slot); }
}
function animateShadowVortex(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-3);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-3);
	flashScreen("#800",.4,1.2);
	function doIt(count){
		var x = (M.random()*(320)+M.random()*(320)+M.random()*(320)+M.random()*(320));
		var y = 500;
		var ranY = (M.random()*(300)+100);
		var p1 = can('purpleparticle50', 5, x2, y2, 6, 6);
		T.to(p1, M.random()*(1)+.25, {
			x:x-13,
			y:720,
			ease:ez.Qin,
			scaleX:1,
			scaleY:1,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<50){ doIt(++count); }
	}
	doIt(0);
}
function shadowVortexExpire(){
	shadowVortexStatus=false;
	shadowVortexBonus = 0;
	CStat();
}

function vampiricEmbrace(){
	if(btn.d.vampiricembraceId===true||my.level<21){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = sk.cost.vampiricEmbrace;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Vampiric Embrace";
	spellCastTime = castSpeedTotal(3000);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("vampiricEmbrace");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#vampiricembraceId',function(){
		var spellType = "Alteration";
		var duration = "30".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Vampiric Embrace";
		NG.tooltipmsg.innerHTML = "Cost: "+green(sk.cost.vampiricEmbrace)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Vampiric Embrace gives physical and arcane damage a chance to drain health based on damage inflicted for "+duration+" minutes.";
	});
});
g.vampiricEmbraceFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHarm");
	g.drawMyMp(-spellMpCost);
	Chat(("Your hand begins to glow."),3);
	vampiricEmbraceTimeout.kill();
	vampiricEmbraceTimeout = T.delayedCall(1800, vampiricEmbraceExpire);
	vampiricEmbraceStatus=true;
	var skillName = "Vampiric Embrace";
	var buffId = "vampiricEmbraceIcon";
	var duration = 1800000;
	var spriteX = -544;
	vampiricEmbraceIconTimer.kill();
	vampiricEmbraceIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff('green','easeInBack', 5, 15, 120, 3);
}
function vampiricEmbraceExpire(){
	vampiricEmbraceStatus=false;
}

function resistCold(){
	if(btn.d.resistcoldId===true||my.level<28){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = sk.cost.resistCold;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Resist Cold";
	spellCastTime = castSpeedTotal(4500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("resistCold");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#resistcoldId',function(){
		var spellType = "Abjuration";
		var duration = "36".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.4)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Resist Cold";
		NG.tooltipmsg.innerHTML = "Cost: "+green(sk.cost.resistCold)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(4500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs your cold resistance by "+minimum+" for "+duration+" minutes.";
	});
});
g.resistColdFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You feel resistant to cold."),3);
	if(resistColdStatus===true){ svcoldBuff-=resistColdBoost; }
	resistColdTimeout.kill();
	resistColdTimeout = T.delayedCall(2160, resistColdExpire);
	resistColdBoost = M.ceil(abjurationTotal()*.4);
	svcoldBuff+=resistColdBoost;
	resistColdStatus=true;
	CStat();
	var skillName = "Resist Cold";
	var buffId = "resistIcon";
	var duration = 2160000;
	var spriteX = -64;
	var spriteY = -32;
	resistIconTimer.kill();
	resistIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX,spriteY);
	animateBuff('teal','easeInBack', 5, 19, 0, 3.5);
}
function resistColdExpire(){
	resistColdStatus=false;
	svcoldBuff-=resistColdBoost;
	CStat();
}

function chantOfBattleExpire(){
	armorBuff-=chantOfBattleArmor; chantOfBattleArmor=0;
	strBuff-=chantOfBattleStr; chantOfBattleStr=0;
	dexBuff-=chantOfBattleDex; chantOfBattleDex=0;
	chantOfBattleStatus=false;
	CStat();
	Chat(("Your battle fury fades."),3);
	highestElement = setHighestElement();
}
function chantOfBattle(){
	if(my.level<2){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Chant of Battle";
	spellType = "alteration";
	var tickCount = 3;
	if(accelerandoStatus===true){ tickCount+=3; }
	var maxTick = tickCount;
	chantOfBattleTicking.kill();
	Chat(("You begin singing "+currentSpell+"."),3);
	animateParticlesDown("blue");
	chantOfBattleTimeout.kill();
	var d=castSpeedTotal(2000);
	chantOfBattleTimeout = T.delayedCall(d/1000, function(){ chantOfBattleStart(tickCount, maxTick) });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#chantofbattle',function(){
		var spellType = "Singing";
		var duration = "3".fontcolor("#00ff00");
		if(accelerandoStatus===true){ duration = "6".fontcolor("#00ff00"); }
		var v1 = alterationTotal();
		var value1 = ( M.ceil(v1*.06)+"").fontcolor("#00ff00");
		var value2 = ( M.ceil(v1*.1)+"").fontcolor("#00ff00");
		var value3 = ( M.ceil(v1*.1)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Chant of Battle";
		var s="Spell Type: "+spellType+"<br><br>"+
		"Chant of Battle buffs your armor by "+value1+", your strength by "+value2+", and your dexterity by "+value3+" for "+duration+" verses every 6 seconds.";
		if(my.talent1>0){
			var v4= (talent1()*3.5).toFixed(1)
			s+="<BR><BR>All physical damage is enhanced "+green(v4+"%")+".";
		}
		if(my.talent1>=20){
			var x5 = ~~(attackFunct()/20);
			s+="<BR><BR>While Chant of Battle is active, it enchants your weapons with "+green(x5)+" arcane damage.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
function chantOfBattleStart(tickCount, maxTick){
	if(tickCount===1){
		chantOfBattleExpire();
		return;
	}
	if(tickCount===maxTick){
		checkSpellLevelUp();
		if(currentSpell==="Chant of Battle"){
			addBuffIcon("Chant of Battle", "chantOfBattleIcon", maxTick*6000, -128);
			playAudio("might");
		}
	}
	chantOfBattleStatus = true;
	armorBuff-=chantOfBattleArmor;
	strBuff-=chantOfBattleStr;
	dexBuff-=chantOfBattleDex;
	Chat(("You feel your pulse quicken."),3);
	highestElement = setHighestElement();
	if(GLB.videoSetting==="High"){ animateBardLight('blueLight3'); }
	var v1 = alterationTotal();
	chantOfBattleArmor = M.ceil(v1*.06);
	chantOfBattleStr = M.ceil(v1*.1);
	chantOfBattleDex = M.ceil(v1*.1);
	armorBuff+=chantOfBattleArmor;
	strBuff+=chantOfBattleStr;
	dexBuff+=chantOfBattleDex;
	CStat();
	if(currentSpell==="Chant of Battle"&&chantOfBattleStatus===true){
		chantOfBattleTicking = T.delayedCall(6, function(){ chantOfBattleStart(tickCount, maxTick); });
		bardSinging();
		return;
	}
	tickCount-=1;
	chantOfBattleTicking = T.delayedCall(6, function(){ chantOfBattleStart(tickCount, maxTick); });
}

function chordsOfDissonanceExpire(){
	chordsOfDissonanceStatus=false;
	for(var i=0;i<=4;i++){
		removeMobIcon("chordsOfDissonanceIcon",i);
	}
}
function chordsOfDissonance(){
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	spellMpCost = brd.cost.chordsOfDissonance;
	if(my.mp<spellMpCost){ return; }
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Chords of Dissonance";
	spellType = "abjuration";
	var tickCount = 6;
	if(accelerandoStatus===true){ tickCount+=3; }
	if(my.talent5>=20){ tickCount*=2; }
	var maxTick = tickCount;
	chordsOfDissonanceTicking.kill();
	Chat(("You begin playing "+currentSpell+"."),3);
	animateParticlesDown("purple");
	chordsOfDissonanceTimeout.kill();
	var d=castSpeedTotal(4000);
	chordsOfDissonanceTimeout = T.delayedCall(d/1000, function(){ chordsOfDissonanceStart(tickCount, maxTick); });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#chordsofdissonance',function(){
		var spellType = "String";
		var duration = 6;
		if(accelerandoStatus===true){ duration +=3; }
		if(my.talent5>=20){ duration *=2; }
		var a=TTmag( abjurationTotal()*0.54+5, .8, "magic", "Chords of Dissonance");
		NG.tooltipname.innerHTML = "Chords of Dissonance";
		NG.tooltipmsg.innerHTML = "Cost: "+green(brd.cost.chordsOfDissonance)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Chords of Dissonance ticks on all targets for "+a[0]+" to "+a[1]+" arcane damage for "+green(duration)+" verses every 3 seconds.";
	});
});
function chordsOfDissonanceStart(tickCount, maxTick){
	if(tickCount===1){
		chordsOfDissonanceExpire();
		return;
	}
	if(tickCount===maxTick){
		if(currentSpell==="Chords of Dissonance"){
			checkSpellLevelUp();
			g.drawMyMp(-spellMpCost);
			playAudio("dissonance");
			addBuffIcon("Chords of Dissonance","chordsOfDissonanceIcon",maxTick*3000,-96);
		}
	}
	chordsOfDissonanceStatus = true;
	for(var i=0;i<=4;i++){
		if(mob[i].name){
			if(mob[i].charmStatus===false){
				if(my.talent7>=20){
					if(M.random()>.85){
						stunTarget(i, 1500, -544, -32, "Chords of Dissonance");
					}
				}
				if(my.talent8>=20){
					if(M.random()>.92){
						animateHealing('yellow');
						Chat(my.name+" recovers health from an inspiring melody.",3);
						g.popupHeal(minMax(abjurationTotal()/10,.8));
					}
				}
				var songDamage = minMax(abjurationTotal()*0.54+5,.8);
				g.myMagicDamage("magic", songDamage, i, checkCrit(), "Chords of Dissonance");
			}
		}
	}
	if(currentSpell==="Chords of Dissonance"&&chordsOfDissonanceStatus===true){
		chordsOfDissonanceTicking = T.delayedCall(3, function(){ 
			chordsOfDissonanceStart(tickCount); 
		});
		bardSinging();
		return;
	}
	tickCount-=1;
	chordsOfDissonanceTicking = T.delayedCall(3, function(){ 
		chordsOfDissonanceStart(tickCount);
	});
}

function minMax(max, percent){
	var min = max*percent;
	var range = max-min;	
	return M.round(M.random()*(range)+min);
}
function accelerandoExpire(){
	accelerandoStatus=false;
	Chat(("You slow down."),3);
}
function accelerando(){
	if(my.level<3){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Accelerando";
	spellType = "evocation";
	var tickCount = 6;
	accelerandoTicking.kill();
	Chat(("You begin playing "+currentSpell+"."),3);
	animateParticlesDown("green");
	var d=castSpeedTotal(4000);
	accelerandoTimeout.kill(); 
	accelerandoTimeout = T.delayedCall(d/1000, function(){ accelerandoStart(tickCount) });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#accelerando',function(){
		var spellType = "Percussion";
		var duration = "6".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Accelerando";
		NG.tooltipmsg.innerHTML = "Spell Type: "+spellType+"<br><br>"+
		"Accelerando extends the number of verses in your songs for "+duration+" verses over 36 seconds."
	});
});
function accelerandoStart(tickCount){
	if(tickCount===0){
		accelerandoExpire();
		return;
	}
	if(tickCount===6){
		checkSpellLevelUp();
		if(currentSpell==="Accelerando"){
			var skillName = currentSpell;
			var buffId = "accelerandoIcon";
			var duration = tickCount*6000;
			var spriteX = -160;
			accelerandoIconTimer.kill();
			accelerandoIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
			addBuffIcon(skillName,buffId,duration,spriteX);
			playAudio("quickness",0,1000,.7);
		}
	}
	accelerandoStatus = true;
	Chat(("Your feet move faster."),3);
	if(GLB.videoSetting==="High"){ animateBardLight('greenLight3'); }
	if(currentSpell==="Accelerando"&&accelerandoStatus===true){
		accelerandoTicking = T.delayedCall(6, function(){ accelerandoStart(tickCount) });
		bardSinging();
		return;
	}
	tickCount-=1;
	accelerandoTicking = T.delayedCall(6, function(){ accelerandoStart(tickCount) });
}


function hymnOfRestorationExpire(){
	hymnOfRestorationStatus=false;
	Chat(("Your regenerative hymn ends."),3);
}
function hymnOfRestoration(){
	if(my.level<5){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	spellMpCost = brd.cost.hymnOfRestoration;
	if(my.mp<spellMpCost){ return; }
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Hymn of Restoration";
	spellType = "abjuration";
	var tickCount = 3;
	if(accelerandoStatus===true){ tickCount+=3; }
	var maxTick = tickCount;
	hymnOfRestorationTicking.kill();
	Chat(("You begin playing "+currentSpell+"."),3);
	animateParticlesDown("teal");
	var d=castSpeedTotal(4000);
	hymnOfRestorationTimeout.kill();
	hymnOfRestorationTimeout = T.delayedCall(d/1000, function(){ 
		hymnOfRestorationStart(tickCount, maxTick);
	});
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#hymnofrestoration',function(){
		var spellType = "String";
		var duration = "3".fontcolor("#00ff00");
		if(accelerandoStatus===true){ duration = "6".fontcolor("#00ff00"); }
		if(my.talent2>0){
			var v1=(talent2()*1.55).toFixed(1);		
		}
		var a=TTheal( (1+M.ceil((abjurationTotal()*0.35)*(1+(talent2()*1.35)/100))), 1);
		NG.tooltipname.innerHTML = "Hymn of Restoration";
		var s="Cost: "+green(brd.cost.hymnOfRestoration)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Hymn of Restoration restores "+a[1]+" hit points for "+duration+" verses every 6 seconds.";
		if(my.talent2>0){
			s+= "<BR><BR>Maximum health is increased "+green(v1+"%")+" while the hymn is active.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
function hymnOfRestorationStart(tickCount, maxTick){
	if(tickCount===1){
		hymnOfRestorationExpire();
		return;
	}
	if(tickCount===maxTick){
		var skillName = currentSpell;
		var buffId = "hymnOfRestorationIcon";
		var duration = tickCount*6000;
		var spriteX = -192;
		addBuffIcon(skillName,buffId,duration,spriteX);
		checkSpellLevelUp();
		g.drawMyMp(-spellMpCost);
		playAudio("prayer");
	}
	hymnOfRestorationStatus = true;
	var healAmount = 1+M.ceil((abjurationTotal()*0.35)*(1+(talent2()*1.35)/100));
	g.popupHeal(healAmount);
	g.drawMyHp();
	Chat(("Your wounds begin to heal."),3);
	animateHealing("teal",false,20);
	if(currentSpell==="Hymn of Restoration"&&hymnOfRestorationStatus===true){
		hymnOfRestorationTicking = T.delayedCall(6, function(){ 
			hymnOfRestorationStart(tickCount); 
		});
		bardSinging();
		return;
	}
	tickCount-=1;
	hymnOfRestorationTicking = T.delayedCall(6, function(){ hymnOfRestorationStart(tickCount) });
}


function anthemDeArmsExpire(){
	strBuff-=anthemDeArmsStr;
	anthemDeArmsStr = 0;
	hasteBuff-=anthemDeArmsHaste;
	anthemDeArmsHaste = 0;
	anthemDeArmsStatus=false;
	CStat();
	Chat(("Your surge of strength fades."),3);
}
function anthemDeArms(){
	if(my.level<24){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Anthem De Arms";
	spellType = "channeling";
	var tickCount = 3;
	if(accelerandoStatus===true){ tickCount+=3; }
	var maxTick = tickCount;
	anthemDeArmsTicking.kill();
	Chat(("You begin singing "+currentSpell+"."),3);
	animateParticlesDown("red");
	var d=castSpeedTotal(4000);
	anthemDeArmsTimeout.kill(); 
	anthemDeArmsTimeout = T.delayedCall(d/1000, function(){ anthemDeArmsStart(tickCount, maxTick) });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#anthemdearms',function(){
		var spellType = "Brass";
		var duration = "3".fontcolor("#00ff00");
		if(accelerandoStatus===true){ duration = "6".fontcolor("#00ff00"); }
		var value1 = ( M.ceil(channelingTotal()*.11)+"").fontcolor("#00ff00");
		var value3 = (Math.abs(M.ceil((channelingTotal()*-.85)-(talent3()*11.5))/10)).toFixed(1);
		var value2 = (value3+"%").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Anthem De Arms";
		var s="Spell Type: "+spellType+"<br><br>"+
		"Anthem De Arms creates an aura that buffs your strength by "+value1+" and your haste by "+value2+" for "+duration+" verses every 6 seconds. This aura's haste effect also affects any charmed allies.";
		if(my.talent3>0){
			var v4=(talent3()*1.68).toFixed(1);
			s+="<BR><BR>Anthem De Arms buffs your attack power by "+green(v4+"%")+" while active.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
function anthemDeArmsStart(tickCount, maxTick){
	if(tickCount===1){
		anthemDeArmsExpire();
		return;
	}
	if(tickCount===maxTick){
		checkSpellLevelUp();
		if(currentSpell==="Anthem De Arms"){
			var skillName = currentSpell;
			var buffId = "anthemDeArmsIcon";
			var duration = tickCount*6000;
			var spriteX = -448;
			addBuffIcon(skillName,buffId,duration,spriteX);
			playAudio("fanaticism");
		}
	}
	strBuff-=anthemDeArmsStr;
	hasteBuff-=anthemDeArmsHaste;
	anthemDeArmsStatus = true;
	anthemDeArmsStr = M.ceil(channelingTotal()*.11);
	anthemDeArmsHaste = M.ceil((channelingTotal()*-.85)-(talent3()*11.5));
	strBuff+=anthemDeArmsStr;
	hasteBuff+=anthemDeArmsHaste;
	CStat();
	Chat(("A burst of strength surges through your body."),3);
	if(GLB.videoSetting==="High"){ animateBardLight('redLight3'); }
	if(currentSpell==="Anthem De Arms"&&anthemDeArmsStatus===true){
		anthemDeArmsTicking = T.delayedCall(6, function(){ anthemDeArmsStart(tickCount) });
		bardSinging();
		return;
	}
	tickCount-=1;
	anthemDeArmsTicking = T.delayedCall(6, function(){ anthemDeArmsStart(tickCount) });
}

function boastfulBellow(){
	if(my.level<9){ return; }
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(currentSpell!==""){ bardSinging(); return;}
	spellMpCost = brd.cost.boastfulBellow;
	if(my.mp<spellMpCost){ return; }
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Brusco's Boastful Bellow";
	spellType = "evocation";
	var tickCount = 0;
	Chat(("You begin singing "+currentSpell+"."),3);
	animateParticlesDown("orange");
	var d=castSpeedTotal(4000);
	boastfulBellowTimeout.kill();
	boastfulBellowTimeout = T.delayedCall(d/1000, function(){ boastfulBellowStart(tickCount) });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#boastfulbellow',function(){
		var foo = "3".fontcolor("00ff00");
		if(accelerandoStatus===true){ foo = "4".fontcolor("00ff00"); }
		var spellType = "Percussion";
		var a=TTmag( evocationTotal()*1.6, .8, "magic", "Boastful Bellow");
		NG.tooltipname.innerHTML = "Boastful Bellow";
		NG.tooltipmsg.innerHTML = "Cost: "+green(brd.cost.boastfulBellow)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Boastful Bellow strikes your target for "+a[0]+" to "+a[1]+" arcane damage for "+foo+" verses every 6 seconds.<br><br>"+
		"Effect: Your target's spell is interrupted.";
	});
});
function boastfulBellowStart(tickCount){
	if(mob[TGT].charmStatus===true || attackStatus===1){ 
		bardSinging(); 
		return; 
	}
	function mobHit(){
		if(mob[Slot].name){
			var mType="magic";
			spellDamage = minMax(evocationTotal()*1.6,.8);
			Chat((mob[Slot].name+" reels in pain."),3);
			if(GLB.videoSetting==="High"){ animateBoastfulBellow(Slot); }
			count++;
			interruptTarget(Slot);
			if(count<=3&&mob[Slot].name){
				boastfulBellowTickTimeout.kill();
				boastfulBellowTickTimeout = T.delayedCall(6, mobHit);
				addMobBuffIcon("Boastful Bellow",Slot,"boastfulIcon",6000,-256);
			}
			calculateBardDamage(mType,Slot);
			playAudio("holybolt");
		}
	}
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	bardSinging();
	var count = 0;
	if(accelerandoStatus===true){ count = -1; }
	var Slot = TGT;
	mobHit();
}
function animateBoastfulBellow(Slot){
	var x2 = MOB[Slot].offsetLeft+mob[Slot].cX-50;
	var y2 = MOB[Slot].offsetTop+mob[Slot].cY-50;
	var p4 = can('rngSmoke', 5, x2, y2, 0, 0, true);
	T.to(p4, .15, {
		scaleX:1,
		scaleY:1,
		onComplete:function(){
			T.to(p4, 1.2, {
				scaleX:3,
				scaleY:3,
				alpha:0,
				onComplete:function(){
					cRem(5, p4);
				}
			});
		}
	});
	var p2 = can('lineNovaMagenta', 5, x2-150, y2-150, 100, 100, true);
	T.to(p2, .25, {
		scaleX:.75,
		scaleY:.75,
		alpha:0,
		onComplete:function(){
			cRem(5, p2);
		}
	});
	var p3 = can('lineNovaMagenta', 5, x2-150, y2-150, 100, 100, true);
	T.to(p3, .15, {
		scaleX:1,
		scaleY:1,
		alpha:.2,
		onComplete:function(){
			T.to(p3, 1.125, {
				scaleX:.75,
				scaleY:.75,
				alpha:0,
				onComplete:function(){
					cRem(5, p3);
				}
			});
		}
	});
}

function elementalRhythmsExpire(){
	svmagicBuff-=elementalRhythmsMagic;
	elementalRhythmsMagic = 0;
	svlightningBuff-=elementalRhythmsLightning;
	elementalRhythmsLightning = 0;
	svcoldBuff-=elementalRhythmsCold;
	elementalRhythmsCold = 0;
	svfireBuff-=elementalRhythmsFire;
	elementalRhythmsFire = 0;
	elementalRhythmsStatus=false;
	CStat();
	Chat(("The aura of protection fades."),3);
}
function elementalRhythms(){
	if(my.level<11){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Elemental Rhythms";
	spellType = "evocation";
	var tickCount = 4;
	if(elementalRhythmsStatus===true){ tickCount+=1; }
	var maxTick = tickCount;
	elementalRhythmsTicking.kill();
	Chat(("You begin playing "+currentSpell+"."),3);
	animateParticlesDown("purple");
	var d=castSpeedTotal(4000);
	elementalRhythmsTimeout.kill(); 
	elementalRhythmsTimeout = T.delayedCall(d/1000, function(){ elementalRhythmsStart(tickCount, maxTick); });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#elementalrhythms',function(){
		var spellType = "Percussion";
		var duration = "4".fontcolor("#00ff00");
		if(accelerandoStatus===true){ duration = "5".fontcolor("#00ff00"); }
		var value1 = ( M.ceil((evocationTotal()*.18)+(talent6()*2.3))+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Elemental Rhythms";
		NG.tooltipmsg.innerHTML = "Spell Type: "+spellType+"<br><br>"+
		"Elemental Rhythms buffs magic, lightning, cold, and fire resistance by "+value1+" for "+duration+" verses every 6 seconds."
	});
});
function elementalRhythmsStart(tickCount, maxTick){
	if(tickCount===1){
		elementalRhythmsExpire();
		return;
	}
	if(tickCount===maxTick){
		checkSpellLevelUp();
		if(currentSpell==="Elemental Rhythms"){
		var skillName = currentSpell;
		var buffId = "elementalRhythmsIcon";
		var duration = tickCount*6000;
		var spriteX = -288;
		addBuffIcon(skillName,buffId,duration,spriteX);}
		playAudio("sanctuary");
	}
	svmagicBuff-=elementalRhythmsMagic;
	svlightningBuff-=elementalRhythmsLightning;
	svcoldBuff-=elementalRhythmsCold;
	svfireBuff-=elementalRhythmsFire;
	elementalRhythmsStatus=true;
	var x=evocationTotal();
	var y=talent6();
	var v1 = M.ceil((x*.18)+(y*2.3));
	elementalRhythmsMagic = v1;
	elementalRhythmsLightning = v1;
	elementalRhythmsCold = v1;
	elementalRhythmsFire = v1;
	svmagicBuff+=elementalRhythmsMagic;
	svlightningBuff+=elementalRhythmsLightning;
	svcoldBuff+=elementalRhythmsCold;
	svfireBuff+=elementalRhythmsFire;
	CStat();
	Chat(("You feel an aura of elemental protection surrounding you."),3);
	if(GLB.videoSetting==="High"){ animateBardLight('purpleLight3'); }
	if(currentSpell==="Elemental Rhythms"&&elementalRhythmsStatus===true){
		elementalRhythmsTicking = T.delayedCall(6, function(){ elementalRhythmsStart(tickCount) });
		bardSinging();
		return;
	}
	tickCount-=1;
	elementalRhythmsTicking = T.delayedCall(6, function(){ elementalRhythmsStart(tickCount) });
}
function lucidLullaby(){
	if(my.level<13){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	spellMpCost = brd.cost.lucidLullaby;
	if(my.mp<spellMpCost){ return; }
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Lucid Lullaby";
	spellType = "conjuration";
	var tickCount = 0;
	Chat(("You begin playing "+currentSpell+"."),3);
	animateParticlesDown("yellow");
	var d=castSpeedTotal(4000);
	lucidLullabyTimeout.kill(); 
	lucidLullabyTimeout = T.delayedCall(d/1000, function(){ lucidLullabyStart(tickCount) });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#lucidlullaby',function(){
		var spellType = "Wind";
		NG.tooltipname.innerHTML = "Lucid Lullaby";
		NG.tooltipmsg.innerHTML = "Cost: "+green(brd.cost.lucidLullaby)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Lucid Lullaby puts all targets to sleep. Singing Lucid Lullaby automatically causes area effect damage songs to stop."
	});
});
function lucidLullabyStart(tickCount){
	playAudio("spellDoneBuff");
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	var levelDifference;
	chordsOfDissonanceTicking.kill();
	desperateDirgeTicking.kill();
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	for(var i=0;i<=4;i++){
		if(mob[i].name!==""&&mob[i].charmStatus===false){
			if(GLB.videoSetting==="High"){ animateLucidLullaby(i); }
			if(statusResist(i)===true||mob[i].rare===3){
				Chat((mob[i].name+" resisted Lucid Lullaby."),1);
			}else{
				var sleepDuration = (chaTotal() * 150) + M.random()*(chaTotal() * 75);
				sleepDuration += g.conjurationEquip*500;
				if(mob[i].level > my.level){
					sleepDuration -= (M.pow((mob[i].level - my.level),1.3));
				}
				Chat((mob[i].name + "'s head nods."),3);
				sleepTarget(i, sleepDuration, "Lucid Lullaby", -320)
				sleepAnimation(i);
			}
		}
	}
	bardSinging();
}
function animateLucidLullaby(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-12);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY-12);
	var c2 = img("yellowparticle50");
	function doit(count){
		var x3 = x2+(M.random()*(300)-150);
		var y3 = y2+(M.random()*(200)-100);
		var p1 = cacheAdd(c2, 5, x3, y3);
		T.to(p1, .9, {
			opacity:0
		});
		T.to(p1, 1.15, {
			x:"+="+11,
			y:y3+25,
			scaleX:.1,
			scaleY:.1,
			ease:ez.sin,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<25){ 
			T.delayedCall(.03, function(){ 
				doit(++count);
			}); 
		}
	}
	doit(0);
}

function consonantChainExpire(Slot){
	mob[Slot].consonantChain = 0;
	Chat(("The musical chains fade."),3);
}
function consonantChain(){
	if(my.level<15){ return; }
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(currentSpell!==""){ bardSinging(); return;}
	spellMpCost = brd.cost.consonantChain;
	if(my.mp<spellMpCost){ return; }
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Consonant Chain";
	spellType = "alteration";
	var tickCount = 0;
	Chat(("You begin singing "+currentSpell+"."),3);
	animateParticlesDown("orange");
	var d=castSpeedTotal(4000);
	consonantChainTimeout.kill(); 
	consonantChainTimeout = T.delayedCall(d/1000, function(){ consonantChainStart(tickCount) });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#consonantchain',function(){
		var spellType = "Singing";
		var duration = ( (9000+(chaTotal()*140))/1000).toFixed();
		duration = (duration+"").fontcolor("#00ff00");
		var value1 = (M.ceil((alterationTotal()*3)*(1+(talent11()*1.2)/100))/1000).toFixed(2);
		NG.tooltipname.innerHTML = "Consonant Chain";
		NG.tooltipmsg.innerHTML = "Cost: "+green(brd.cost.consonantChain)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Consonant Chain slows your target's attacks by "+green(value1)+" seconds for "+duration+" seconds.";
	});
});
function consonantChainStart(tickCount){
	playAudio("confuse");
	if(mob[TGT].charmStatus===true||attackStatus===1){ bardSinging(); return; }
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	if(statusResist(Slot)===true){
		Chat((mob[Slot].name+" resisted "+ currentSpell +"."),1);
	}else{
		mob[Slot].consonantChain = M.ceil((alterationTotal()*3)*(1+(talent11()*1.2)/100));
		var chainDuration = 9000+(chaTotal()*140);
		mob[Slot].slowTimer.kill();
		mob[Slot].slowTimer = T.delayedCall(chainDuration/1000, function(){ 
			consonantChainExpire(Slot); 
		});
		Chat((mob[Slot].name+" is surrounded by chains of music."),3);
		if(GLB.videoSetting==="High"){ animateCounterspell(Slot); }
		var buffId = "slowIcon";
		var duration = chainDuration;
		var spriteX = -352;
		addMobBuffIcon("Consonant Chain",Slot,buffId,duration,spriteX);
		if(my.talent11>=20){
			var ticks = ~~(chainDuration/3000)
			procDot(Slot, minMax(alterationTotal()/3, .9), "Venom Chains", "poison", ticks, 3000);
		}
	}
	bardSinging();
}
function dissension(){
	if(my.level<17){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	spellMpCost = brd.cost.dissension;
	if(my.mp<spellMpCost){ return; }
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Dissension";
	spellType = "channeling";
	var tickCount = 0;
	Chat(("You begin playing "+currentSpell+"."),3);
	animateParticlesDown("white");
	var d=castSpeedTotal(4000);
	dissensionTimeout.kill(); 
	dissensionTimeout = T.delayedCall(d/1000, function(){ dissensionStart(tickCount) });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#dissension',function(){
		var spellType = "Brass";
		var a=TTheal( 5+M.ceil(channelingTotal()*0.9), .9);
		NG.tooltipname.innerHTML = "Dissension";
		NG.tooltipmsg.innerHTML = "Cost: "+green(brd.cost.dissension)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Dissension mana drains all targets and converts it to health. You recover "+a[0]+" to "+a[1]+" hit points from each target."
	});
});
function dissensionStart(tickCount){
	playAudio("spellDoneHeal");
	if(mobsFound()===true){ 
		checkSpellLevelUp();
	}
	g.drawMyMp(-spellMpCost);
	var drainAmount = 0;
	for(var i=0;i<=4;i++){
		if(mob[i].name!==""){ 
			drainAmount += minMax(5+M.ceil(channelingTotal()*0.9), .9); 
		}
		if(mob[i].name!==""&&mob[i].charmStatus===false){
			mob[i].mp -= 7;
			if(mob[i].mp < 0){ mob[i].mp = 0; }
			Chat((mob[i].name+"'s mind is drained by a strident wail."),3);
			if(GLB.videoSetting==="High"){ animateDissension(i); }

		}
	}
	if(drainAmount){
		Chat("You feel replenished.",3);
		g.popupHeal(drainAmount);
	}
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	bardSinging();
}
function animateDissension(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var xHeight = mob[Slot].imageHeight;
	var y2 = MOB[Slot].offsetTop;
	var xWidth = mob[Slot].imageWidth/2+40;
	//execute
	function doIt(count){
		var p3 = can('drainFG', 5, x2-xWidth, y2-150, xWidth*2, 100);
		T.to(p3, (800+(count*100))/1000, {
			y:600,
			alpha:0,
			ease:ez.qout,
			onComplete:function(){
				cRem(5, p3);
			}
		});
		var p4 = can('drainBG', 7, x2-xWidth, y2-150, xWidth*2, 100);
		T.to(p4, (800+(count*100))/1000, {
			y:600,
			alpha:0,
			ease:ez.qout,
			onComplete:function(){
				cRem(7, p4);
			}
		});
		if(count<5){ 
			T.delayedCall(.1, function(){ 
				doIt(++count);
			}); 
		}
	}
	doIt(0);
	function gogo(count2){
		var x6 = (M.random()*(600)+340);
		var ranY = (M.random()*(250)+100);
		var p1 = can('tealparticle50', 5, x6, -25, 25, 25);
		T.to(p1, 1.2, {
			scaleX:0,
			scaleY:0,
			x:x6+12,
			y:ranY,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count2<20){ 
			T.delayedCall(.02, function(){ 
				gogo(++count2);
			}); 
		}
	}
	gogo(0);
	var p2 = can('tealLight3', 5, -640, -827, 2560, 1544);
	T.to(p2, 1.5, {
		alpha:0,
		onComplete:function(){
			cRem(5, p2);
		}
	});
}


function chorusOfClarityExpire(){
	chorusOfClarityStatus=false;
	Chat(("Your clarity of mind fades."),3);
}
function chorusOfClarity(){
	if(my.level<20){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Chorus of Clarity";
	spellType = "alteration";
	var tickCount = 3;
	if(accelerandoStatus===true){ tickCount+=3; }
	var maxTick = tickCount;
	chorusOfClarityTicking.kill();
	Chat(("You begin singing "+currentSpell+"."),3);
	animateParticlesDown("blue");
	var d=castSpeedTotal(4000);
	chorusOfClarityTimeout.kill(); 
	chorusOfClarityTimeout = T.delayedCall(d/1000, function(){ chorusOfClarityStart(tickCount, maxTick) });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#chorusofclarity',function(){
		var spellType = "Singing";
		var duration = "3".fontcolor("#00ff00");
		if(accelerandoStatus===true){ duration = "6".fontcolor("#00ff00"); }
		var value1 = ( M.ceil(alterationTotal()*.1)+"").fontcolor("#00ff00");
		var value2 = ( M.ceil(alterationTotal()*.15)+"").fontcolor("#00ff00");
		var value3 = ( M.ceil(alterationTotal()*.15)+"").fontcolor("#00ff00");
		var v4 = M.round((alterationTotal()/35)*(1+(talent7()*5.3)/100));
		NG.tooltipname.innerHTML = "Chorus of Clarity";
		NG.tooltipmsg.innerHTML = "Spell Type: "+spellType+"<br><br>"+
		"Chorus of Clarity increases your natural mana regeneration rate by "+green(v4)+" for "+duration+" verses every 6 seconds.";
	});
});
function chorusOfClarityStart(tickCount, maxTick){
	if(tickCount===1){
		chorusOfClarityExpire();
		return;
	}
	if(tickCount===maxTick){
		checkSpellLevelUp();
		if(currentSpell==="Chorus of Clarity"){
			var skillName = currentSpell;
			var buffId = "clarityIcon";
			var duration = tickCount*6000;
			var spriteX = -416;
			addBuffIcon(skillName,buffId,duration,spriteX);
			playAudio("clarity");
		}
	}
	chorusOfClarityStatus = true;
	Chat(("Your mind begins to clear."),3);
	if(GLB.videoSetting==="High"){ animateChorusOfClarity(); }
	if(currentSpell==="Chorus of Clarity"&&chorusOfClarityStatus===true){
		chorusOfClarityTicking = T.delayedCall(6, function(){ chorusOfClarityStart(tickCount) });
		bardSinging();
		return;
	}
	tickCount-=1;
	chorusOfClarityTicking = T.delayedCall(6, function(){ chorusOfClarityStart(tickCount) });
}
function animateChorusOfClarity(){
	function doit(count){
		var x = (M.random()*(640)+M.random()*(640));
		var y = 0;
		var ranY = (M.random()*(100)+50);
		var p1 = can('blueparticle50', 5, x, y, 25, 25);
		T.to(p1, 1.2, {
			scaleX:0,
			scaleY:0,
			x:x+12,
			y:ranY,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<15){ 
			T.delayedCall(.02, function(){ 
				doit(++count);
			}); 
		}
	}
	doit(0);
}

function euphonicHymnExpire(Slot){
	mob[Slot].euphonicHymn = 0;
	Chat(("The aural resonance fades."),3);
}
function euphonicHymn(){
	if(my.level<28){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	spellMpCost = brd.cost.euphonicHymn;
	if(my.mp<spellMpCost){ return; }
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Euphonic Hymn";
	spellType = "alteration";
	var tickCount = 0;
	Chat(("You begin singing "+currentSpell+"."),3);
	animateParticlesDown("orange");
	var d=castSpeedTotal(4000);
	euphonicHymnTimeout.kill(); 
	euphonicHymnTimeout = T.delayedCall(d/1000, function(){ euphonicHymnStart(tickCount) });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#euphonichymn',function(){
		var spellType = "Singing";
		var slowValue = ((alterationTotal()*6)/30.30).toFixed(1);
		slowValue = (slowValue+"%").fontcolor("#00ff00");
		var defValue = (talent4()*4.75)+40;
		var duration = ((9000+(chaTotal()*400))/1000).toFixed();
		duration = (duration+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Euphonic Hymn";
		NG.tooltipmsg.innerHTML = "Cost: "+green(brd.cost.euphonicHymn)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Euphonic Hymn enhances all physical damage on all targets by "+green(defValue+"%")+" for "+duration+" seconds.";
	});
});
function euphonicHymnStart(tickCount){
	playAudio("decrepify");
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	var drainAmount = 0;
	for(var i=0;i<=4;i++){
		if(mob[i].name!==""&&mob[i].charmStatus===false){
			if(statusResist(i)===true){
				Chat((mob[i].name+" resisted "+ currentSpell +"."),1);
			}else{
				mob[i].euphonicHymn = 40+(talent4()*4.75);
				var bindDuration = 9000+(chaTotal()*400);
				mob[i].euphonicHymnTimer.kill();
				mob[i].euphonicHymnTimer = T.delayedCall(bindDuration/1000, function(){
					euphonicHymnExpire(i);
				});
				Chat((mob[i].name+" is rendered vulnerable by a euphonic hymn."),3);
				if(GLB.videoSetting==="High"){ animateDebuff('yellow'); }
				addMobBuffIcon("Euphonic Hymn",i,"euphonicIcon",bindDuration,-480);
			}
		}
	}
	bardSinging();
}


$(function(){
	$NG.window3.on('mouseenter','#shieldofsongs',function(){
		var foo=M.ceil((channelingTotal()*.8)*(1+((talent12()*3.15)/100)));
		NG.tooltipname.innerHTML = "Shield of Songs";
		NG.tooltipmsg.innerHTML = "Cost: "+green(brd.cost.shieldOfSongs)+" Mana Points<br>"+
		"Spell Type: Brass<br><br>"+
		"Shield of Songs protects you with a magical barrier that absorbs "+green(foo)+" health.";
	});
});
function shieldOfSongs(){
	if(my.level<32){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	spellMpCost = brd.cost.shieldOfSongs;
	if(my.mp<spellMpCost){ return; }
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Shield of Songs";
	spellType = "channeling";
	Chat(("You begin singing "+currentSpell+"."),3);
	animateParticlesDown("yellow");
	var d=castSpeedTotal(4000);
	shieldOfSongsTimeout.kill(); 
	shieldOfSongsTimeout = T.delayedCall(d/1000, function(){ shieldOfSongsStart() });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
function shieldOfSongsStart(){
	checkSpellLevelUp();
	if(currentSpell==="Shield of Songs"){
		addBuffIcon("Shield of Songs","shieldOfSongsIcon",0,-512);
		g.drawMyMp(-spellMpCost);
		shieldHp = M.ceil((channelingTotal()*.8)*(1+((talent12()*3.15)/100)));
		playAudio("shieldofsongs");
		Chat(("You are surrounded by a shield of songs."),3);
		bardSinging();
		animateBardLight();
	}
}
function animateBardLight(img){
	if(GLB.videoSetting!=="High"){ return; }
	if(!img){
		img = "yellowLight3";
	}
	var e1 = can(img, 5, 50, 68, 2560, 1594);
	e1.alpha=.2;
	T.to(e1, .25, {
		x:-625,
		y:0,
		ease:ez.Qin,
		onComplete:function(){
			T.to(e1, .25, {
				x:-1300,
				y:200,
				alpha:0
			});
		}
	});
}
function desperateDirge(){
	if(my.level<38){ return; }
	if(checkBashFear()===true){ return; }
	if(currentSpell!==""){ bardSinging(); return;}
	spellMpCost = brd.cost.desperateDirge;
	if(my.mp<spellMpCost){ return; }
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Desperate Dirge";
	spellType = "abjuration";
	var tickCount = 6;
	if(accelerandoStatus===true){ tickCount+=3; }
	var maxTick = tickCount;
	desperateDirgeTicking.kill();
	Chat(("You begin playing "+currentSpell+"."),3);
	animateParticlesDown("purple");
	var d=castSpeedTotal(4000);
	desperateDirgeTimeout.kill(); 
	desperateDirgeTimeout = T.delayedCall(d/1000, function(){ 
		desperateDirgeStart(tickCount, maxTick) 
	});
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#desperatedirge',function(){
		var spellType = "String";
		var duration = "6".fontcolor("#00ff00");
		if(accelerandoStatus===true){ duration = "9".fontcolor("#00ff00"); }
		var a=TTmag( abjurationTotal()*2.5, .85, "magic", "Desperate Dirge");
		NG.tooltipname.innerHTML = "Desperate Dirge";
		NG.tooltipmsg.innerHTML = "Cost: "+green(brd.cost.desperateDirge)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Desperate Dirge ticks on all targets for "+a[0]+" to "+a[1]+" arcane damage for "+duration+" verses every 3 seconds.";
	});
});
function desperateDirgeStart(tickCount, maxTick){
	if(tickCount===0){
		desperateDirgeStatus=false;
		for(var i=0;i<=4;i++){
			if(mob[i].name&&mob[i].charmStatus===false){
				removeMobIcon("desperateDirgeIcon",i);
			}
		}
		return;
	}
	if(tickCount===maxTick){
		if(currentSpell==="Desperate Dirge"){
			checkSpellLevelUp();
			g.drawMyMp(-spellMpCost);
			playAudio("dirge");
			addBuffIcon("Desperate Dirge","desperateDirgeIcon",maxTick*3000,-544);
		}
	}
	desperateDirgeStatus = true;
	var mType="magic";
	var skillName = "Desperate Dirge";
	for(var i=0;i<=4;i++){
		if(mob[i].name&&mob[i].charmStatus===false){
			if(my.talent7>=20){
				if(M.random()>.95){
					stunTarget(i, 1250, -544, -32, "Desperate Dirge");
				}
			}
			var songDamage = minMax(abjurationTotal()*2.5,.85);
			g.myMagicDamage(mType, songDamage, i, checkCrit(), skillName);
		}
	}
	if(currentSpell==="Desperate Dirge"&&desperateDirgeStatus===true){
		desperateDirgeTicking = T.delayedCall(3, function(){ 
			desperateDirgeStart(tickCount, maxTick);
		});
		bardSinging();
		return;
	}
	tickCount-=1;
	desperateDirgeTicking = T.delayedCall(3, function(){ 
		desperateDirgeStart(tickCount, maxTick);
	});
}


function songOfTheSirens(){
	if(my.level<7){ return; }
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[charmSlot].charmStatus===true){
		songOfTheSirensTicking.kill();
		songOfTheSirensExpire(charmSlot);
		return;
	}
	if(currentSpell!==""){ bardSinging(); return;}
	spellMpCost = brd.cost.songOfTheSirens;
	if(my.mp<spellMpCost){ return; }
	if(currentSpell===""){ bardSinging(); }
	currentSpell = "Solon's Song of the Sirens";
	spellType = "conjuration";
	var tickCount = true;
	Chat(("You begin singing "+currentSpell+"."),3);
	animateParticlesDown("teal");
	var d=castSpeedTotal(4000);
	songOfTheSirensTimeout.kill(); 
	songOfTheSirensTimeout = T.delayedCall(d/1000, function(){ songOfTheSirensStart(tickCount) });
	referenceDate2 = new Date();
	spellCastTime = d;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	animateCastBar();
}
$(function(){
	$NG.window3.on('mouseenter','#songofthesirens',function(){
		var spellType = "Wind";
		var duration = "3".fontcolor("#00ff00");
		if(accelerandoStatus===true){ duration = "6".fontcolor("#00ff00"); }
		NG.tooltipname.innerHTML = "Song of the Sirens";
		NG.tooltipmsg.innerHTML = "Cost: "+green(brd.cost.songOfTheSirens)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Solon's Song of the Sirens charms your target. Charmed mobs can be released by clicking the mob's charm icon."
	});
});
function songOfTheSirensStart(tickCount){
	playAudio("spellDoneBuff");
	if(mob[TGT].attackStatus===1){
		attackOn(true);
	}
	if(tickCount===true && mobsFound()===true){
		tickCount = false;
		if(currentSpell==="Solon's Song of the Sirens"){
			checkSpellLevelUp();
			g.drawMyMp(-spellMpCost);
		}
	}
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animateSongOfTheSirens(Slot); }
	if(statusResist(Slot)===true||mob[Slot].rare===3){
		Chat((mob[Slot].name+" resisted "+ currentSpell +"."),1);
	}else{
		Chat((mob[Slot].name+ " is captivated by a haunting tune."),3);
		interruptTarget(Slot);
		mob[Slot].charmStatus = true;
		charmSlot = Slot;
		petName = mob[charmSlot].name;
		$("#pethpbardiv").css('display','block');
		if($("#petBarName").length===0){
			var e1=$('<div id="petBarName">').html(mob[charmSlot].level+" - "+petName);
			$("#pethpbardiv").append(e1);
		}else{
			$("#petBarName").html(mob[charmSlot].level+" - "+petName);
		}
		g.drawMyHp();
		var charismaValue = (chaTotal()-60);
		if(charismaValue < 10){ charismaValue = 10; }
		var charmDuration = (20000 + M.random()*(conjurationTotal()*100) +M.random()*((charismaValue)*600) + (charismaValue*1500))*statusDurationReduction(Slot);
		charmDuration += g.conjurationEquip*1000;
		if(mob[Slot].level > my.level){
			charmDuration -= (M.pow((mob[Slot].level - my.level),3.2));
		}
		if(charmDuration <= 8000){ charmDuration = 8000; }
		songOfTheSirensTicking.kill();
		songOfTheSirensTicking = T.delayedCall(charmDuration/1000, songOfTheSirensExpire);
		var buffId = "charmIcon";
		var duration = charmDuration;
		var spriteX = -224;
		addMobBuffIcon("Charmed",Slot,buffId,duration,spriteX);
	}
	bardSinging();
}
function songOfTheSirensExpire(Slot){
	if(Slot){
			$("#charmIcon"+Slot).stop(true,true).remove();
		}
	songOfTheSirensTicking.kill();
	mob[charmSlot].charmStatus = false;
	if(Slot){
		Chat("You release "+petName+" from your command.");
	}else{
		Chat((petName+" is no longer captivated."),3);
	}
	petName = "";
	$("#pethpbardiv").css('display','none');
}
function animateSongOfTheSirens(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX-25;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY-25;
	function doit(count){
		var ranX = (M.random()*(150)-75);
		var ranY = (M.random()*(60)-30);
		var e1 = can('heart', 5, cX+ranX, cY+ranY, 50, 50);
		T.to(e1, 1, {
			y:"+="+100,
			alpha:0,
			ease:ez.Qin,
			onComplete:function(){
				cRem(5, e1);
			}
		});
		count++;
		if(count<8){ 
			T.delayedCall(.05, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
}

function smiteReady(){
	if(D.getElementById('smite').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('smite', false);
    BGP('smite', "-300% 0%");
	g.checkClericSkills();
	smiteMight.kill();
}
function smiteTimer(){
	smiteMight = T.to('', .1, {repeat:-1, onRepeat:smiteReady});
}
function smite(){
	if(btn.d.smite===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	currentSpell = "Smite";
	spellCastTime = castSpeedTotal(3000);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("magenta");
	animateCastBar("smite");
	playAudio("spellCastEvoke2",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#smite',function(){
		var spellType = "Evocation";
		var a=TTmag( 3+(evocationTotal()*2.5), .8, "magic", "Smite");
		NG.tooltipname.innerHTML = "Smite";
		NG.tooltipmsg.innerHTML = "Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Smite hits your target for "+a[0]+" to "+a[1]+" arcane damage.";
	});
});
g.smiteFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneFlames");
	animateSmite(TGT);
	var dam = minMax(3+(evocationTotal()*2.5),.8);
	g.myMagicDamage("magic", dam, TGT, checkCrit(), "Smite");
}
function animateSmite(Slot, color){
	if(GLB.videoSetting!=="High"){ return; }
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY;
	if(!color){ 
		color="magenta"; 
	}
	function doit(count,rStep,countMax,stepInc,radius){
		rStep += stepInc; // particle spread
		x3 = radius * M.cos(rStep);
		y3 = radius * M.sin(rStep);
		var p1 = can(color+"particle50", 5, cX+x3, cY+y3, 25, 25);
		T.to(p1,.75,{
			scaleX:0,
			scaleY:0,
			x:cX+x3+11,
			y:cY+y3+11,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<countMax){
			doit(++count,rStep,countMax,stepInc,radius);
		}
	}
	doit(0,0,20,.315,120); // count,rStep,countMax,stepInc,radius
	doit(0,0,12,.52,90);
	doit(0,0,6,1.1,60);
	doit(0,0,4,1.3,30);
}


function soundOfForceReady(){
	if(D.getElementById('soundofforce').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('soundofforce', false);
    BGP('soundofforce', "-400% 0%");
	g.checkClericSkills();
	soundOfForceMight.kill();
}
function soundOfForceTimer(){
	soundOfForceMight = T.to('', .1, {repeat:-1, onRepeat:soundOfForceReady});
}
function soundOfForce(){
	if(btn.d.soundofforce===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = clr.cost.soundOfForce;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Sound of Force";
	spellCastTime = castSpeedTotal(1000);
	spellType = "evocation";
	playAudio("spellDoneSlam");
	if(GLB.videoSetting==="High"){ animateLineNova(TGT, 'lineNovaMagenta'); }
    setD('soundofforce', true);
    BGP('soundofforce', "-400% -100%");
	T.delayedCall(18, soundOfForceTimer);
	timerTick(D.getElementById('soundofforce'),18000/1000,'soundofforce');
	g.drawMyMp(-spellMpCost);
	var dam = minMax(evocationTotal()*1.8,.9);
	Chat((mob[TGT].name+" is struck by a sonic force."),3);
	stunTarget(TGT, 5500, -128);
	g.myMagicDamage("magic", dam, TGT, checkCrit(), "Sound of Force");
	beginGlobalCooldown();
	checkSpellLevelUp();
}
$(function(){
	$NG.window3.on('mouseenter','#soundofforce',function(){
		var spellType = "Evocation";
		var CD = "18".fontcolor("#ff0000");
		var a=TTmag( evocationTotal()*1.8, .9, "magic", "Sound of Force");
		var value1 = "5.5".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Sound of Force";
		var s="Cost: "+green(clr.cost.soundOfForce)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Sound of Force hits your target for "+a[0]+" to "+a[1]+" arcane damage<br><br>"+
		"Effect: Stuns your target for "+value1+" seconds.";
		NG.tooltipmsg.innerHTML = s;
	});
});

function superiorHealingReady(){
	if(D.getElementById('superiorhealing').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('superiorhealing', false);
    BGP('superiorhealing', "-500% 0%");
	g.checkClericSkills();
	refreshsuperiorHealing.kill();
}
function superiorHealingTimer(){
	refreshsuperiorHealing = T.to('', .1, {repeat:-1, onRepeat:superiorHealingReady});
}
function superiorHealing(){
	if(btn.d.superiorhealing===true||my.level<3){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = clr.cost.superiorHealing;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Superior Healing";
	spellCastTime = castSpeedTotal(2000);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("blue");
	animateCastBar("superiorHealing");
	playAudio("spellCastHeal",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#superiorhealing',function(){
		var spellType = "Alteration";
		var CD = "7".fontcolor("#ff0000");
		var a=TTheal( (alterationTotal()*2), .9);
		var value1 = ( M.ceil((alterationTotal()*1.6)+((wisTotal()-60)*(my.level/50)))+"").fontcolor("#00ff00");
		var value2 = ( M.ceil( (alterationTotal()*1.6)+((wisTotal()-60)*(my.level/50))+(3+(spellSkillCheck())/4.4) )+"").fontcolor("#00ff00");
		var zig;
		if(my.level>=28){
			zig = "Mark of Judgement";
		}else{
			zig = "(Level 28) Mark of Judgement";
		}
		NG.tooltipname.innerHTML = "Superior Healing";
		NG.tooltipmsg.innerHTML = "Cost: "+green(clr.cost.superiorHealing)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Superior Healing heals for "+a[0]+" to "+a[1]+" hit points.<br><br>"+
		"If "+zig+" is active, Superior Healing inflicts "+value1+" to "+value2+" arcane damage on all targets.";
	});
});
g.superiorHealingFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	animateHealing('blue');
    setD('superiorhealing', true);
    BGP('superiorhealing', "-500% -100%");
	T.delayedCall(7, superiorHealingTimer);
	timerTick(D.getElementById('superiorhealing'),7000/1000,'superiorhealing');
	g.drawMyMp(-spellMpCost);
	var healAmount = minMax( (alterationTotal()*2),.9);
	g.popupHeal(healAmount);
	if(markOfJudgementStatus===true||my.talent12>=20){
		for (var i=0;i<=4;i++){
			if(mob[i].name!==""){
				var damage = M.ceil( ((((wisTotal()-60)*((evocationTotal()/5)/50))) + (alterationTotal()*1.6) + M.random()*(3+(spellSkillCheck())/4.4)) );
				var mType="magic";
				var spellName = "Superior Healing";
				g.myMagicDamage(mType, damage,i,checkCrit(), spellName);
			}
		}
	}
}

function resolution(){
	if(btn.d.resolution===true||my.level<5){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = clr.cost.resolution;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Resolution";
	spellCastTime = castSpeedTotal(4000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("orange");
	animateCastBar("resolution");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#resolution',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.66)+"").fontcolor("#00ff00");
		var maximum = ( M.ceil( (abjurationTotal()*1.02)*((talent2()*12.5/100)+1) )+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Resolution";
		var s="Cost: "+green(clr.cost.resolution)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(4000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs your hit points by "+maximum+" and your armor by "+minimum+" for "+duration+" minutes.";
		if(my.talent2>0){
			var x=(talent2()*1.4).toFixed(1)+"%";
			s+= "<BR><BR>Casting haste is increased by "+green(x)+".";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.resolutionFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You feel resolute."),3);
	if(resolutionStatus===true){
		armorBuff-=resolutionArmorBoost;
		maxHpBuff-=resolutionHpBoost;
	}
	resolutionTimeout.kill();
	resolutionTimeout = T.delayedCall(3240, resolutionExpire); //3240000
	resolutionArmorBoost = M.ceil(abjurationTotal()*.66);
	resolutionHpBoost = M.ceil( (abjurationTotal()*1.02)*((talent2()*12.5/100)+1) );
	
	maxHpBuff+=resolutionHpBoost;
	armorBuff+=resolutionArmorBoost;
	resolutionStatus=true;
	CStat();
	g.drawMyHp();
	var skillName = "Resolution";
	var buffId = "hpbuffIcon";
	var duration = 3240000;
	var spriteX = -448;
	hpbuffIconTimer.kill();
	hpbuffIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff('orange','easeInBack', 5, 25, 120, 4);
}
function resolutionExpire(){
	resolutionStatus=false;
	armorBuff-=resolutionArmorBoost;
	maxHpBuff-=resolutionHpBoost;
	CStat();
	g.drawMyHp();
}
function resoluteMiracle(){
	miracleStatus=true;
	var d=300000;
	T.delayedCall(d/1000, function(){
		miracleStatus=false;
	});
	animateHealing('yellow');
	playAudio('spellDoneBuff');
	addBuffIcon("Miracle", "Miracle", d, -448);
	my.hp=g.maxHpFunct()*.4;
	Chat("You have been saved by a Miracle!",3);
	g.drawMyHp();
}

function bindingEarthReady(){
	if(D.getElementById('bindingearth').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('bindingearth', false);
    BGP('bindingearth', "-600% 0%");
	g.checkClericSkills();
	refreshbindingEarth.kill();
}
function bindingEarthTimer(){
	refreshbindingEarth = T.to('', .1, {repeat:-1, onRepeat:bindingEarthReady});
}
function bindingEarth(){
	if(btn.d.bindingearth===true||my.level<7){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = clr.cost.bindingEarth;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Binding Earth";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("green");
	animateCastBar("bindingEarth");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#bindingearth',function(){
		var spellType = "Alteration";
		var CD = "8".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Binding Earth";
		var s="Cost: "+green(clr.cost.bindingEarth)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Roots your target in place. Rooted targets cannot melee you.";
		if(my.talent3>0){
			var a=TTmag( (alterationTotal())*((talent3()*1.85)/100), .9, "magic", "elemental");
			s+="<BR><BR>Binding Earth inflicts "+a[0]+" to "+a[1]+" per second while active.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.bindingEarthFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
    setD('bindingearth', true);
    BGP('bindingearth', "-600% -100%");
	T.delayedCall(8, bindingEarthTimer);
	timerTick(D.getElementById('bindingearth'),8000/1000,'bindingearth');
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	if(checkRootImmune(Slot)===true){
		Chat((mob[TGT].name+" is immune to Binding Earth."),1);
		return;
	}
	if(statusResist(Slot)===true){
		Chat((mob[TGT].name+" resisted Binding Earth."),1);
		return;
	}
	Chat((mob[TGT].name+" is rooted."),3);
	var Slot = TGT;
	var rootFlag = true;
	stopMob(Slot);
	mob[Slot].rootStatus=5;
	$("#rootIcon"+Slot+",#rootBuffIcon"+Slot).remove();
	animateRoot(Slot, rootFlag);
	var buffId = "rootBuffIcon";
	var duration = 0;
	var spriteX = -192;
	addMobBuffIcon("Binding Earth",Slot,buffId,duration,spriteX);
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
}


function expelCorruptionReady(){
	if(D.getElementById('expelcorruption').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('expelcorruption', false);
    BGP('expelcorruption', "-700% 0%");
	g.checkClericSkills();
	refreshexpelCorruption.kill();
}
function expelCorruptionTimer(){
	refreshexpelCorruption = T.to('', .1, {repeat:-1, onRepeat:expelCorruptionReady});
}
function expelCorruption(){
	if(btn.d.expelcorruption===true||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = clr.cost.expelCorruption;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Expel Corruption";
	spellCastTime = castSpeedTotal(2500);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("yellow");
	animateCastBar("expelCorruption");
	playAudio("spellCastEvoke2",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#expelcorruption',function(){
		var spellType = "Evocation";
		var CD = "8".fontcolor("#ff0000");
		var a=TTmag( evocationTotal()*3.7, .85, "magic", "Expel Corruption");
		var target="your target";
		if(my.talent9>=20){ target="three targets"; }
		NG.tooltipname.innerHTML = "Expel Corruption";
		NG.tooltipmsg.innerHTML = "Cost: "+green(clr.cost.expelCorruption)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Expel Corruption hits "+target+" for "+a[0]+" to "+a[1]+" arcane damage. Undead targets take an additional "+green("50%")+" damage.";
	});
});
g.expelCorruptionFinish=function(bypass){
	if(!bypass){
		if(endSpell()===false){ return; }
	}
	playAudio("spellDoneFlames");
	if(!bypass){
		setD('expelcorruption', true);
		BGP('expelcorruption', "-700% -100%");
		T.delayedCall(8, expelCorruptionTimer);
		timerTick(D.getElementById('expelcorruption'),8000/1000,'expelcorruption');
		g.drawMyMp(-spellMpCost);
	}
	var Slot = TGT;
	//increase damage vs undead
	if(my.talent9>=20){
		for(var i=0;i<=4;i++){
			if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
			if(GLB.videoSetting==="High"){ animateExpelCorruption(i); }
				var dam = minMax(evocationTotal()*3.7, .85);
				g.myMagicDamage("magic", dam, i, checkCrit(), "Expel Corruption");
			}
		}
		
	}else{
		if(GLB.videoSetting==="High"){ animateExpelCorruption(Slot); }
		var dam = minMax(evocationTotal()*3.7, .85);
		g.myMagicDamage("magic", dam, Slot, checkCrit(), "Expel Corruption");
	}
}
function animateExpelCorruption(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-100);
	var e1 = can('expelCorruption', 5, x2, -100, 200, 0);
	T.to(e1, .15, {
		scaleY:1.59,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var e2 = can('expelCorruption', 5, x2, -100, 200, 0);
	T.to(e2, .15, {
		scaleY:1.59,
		alpha:.2
	});
	T.to(e2, 1.5, {
		alpha:0,
		ease:ez.lin,
		delay:.15,
		onComplete:function(){
			cRem(5, e2);
		}
	});
	T.delayedCall(.15, animateTremor, [x2+100, 800]);
}

function searingRevelationReady(){
	if(D.getElementById('searingrevelation').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('searingrevelation', false);
    BGP('searingrevelation', "-800% 0%");
	refreshsearingRevelation.kill();
}
function searingRevelationTimer(){
	refreshsearingRevelation = T.to('', .1, {repeat:-1, onRepeat:searingRevelationReady});
}
function searingRevelation(){
	if(btn.d.searingrevelation===true||my.level<11){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	currentSpell = "Searing Revelation";
	spellCastTime = castSpeedTotal(1500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("yellow");
	animateCastBar("searingRevelation");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#searingrevelation',function(){
		var spellType = "Conjuration";
		var CD = "20".fontcolor("#ff0000");
		var a=TTmag( alterationTotal()*2.1, .8, "magic", "Searing Revelation");
		var zig="(Level 28) Mark of Judgement";
		if(my.level>=28){
			zig = "Mark of Judgement";
		}
		NG.tooltipname.innerHTML = "Searing Revelation";
		var s= "Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Second<br><br>"+
		"Searing Revelation dazes your target for "+green("60")+" seconds. Dazed targets' physical attacks have a "+green("30%")+" chance to miss<br><br>"+
		"If "+zig+" is active, Searing Revelation inflicts "+a[0]+" to "+a[1]+" arcane damage.";
		if(my.talent10>=1){
			var b=TTmag( conjurationTotal()*(1+(talent10()*.389)), .8, "magic", "Searing Revelation");
			s+= "<BR><BR>Searing Revelation blasts your target for "+b[0]+" to "+b[1]+" arcane damage.";
			if(my.talent10>=20){
				s+="<BR><BR>Effect: Searing Revelation has a "+green("24%")+" chance to confuse your target.";
			}
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.searingRevelationFinish=function(){
	if(endSpell()===false){ return; }
    setD('searingrevelation', true);
    BGP('searingrevelation', "-800% -100%");
	T.delayedCall(20, searingRevelationTimer);
	timerTick(D.getElementById('searingrevelation'),20000/1000,'searingrevelation');
	playAudio("spellCastHeal3");
	if(GLB.videoSetting==="High"){ animateSearingRevelation(TGT); }
	var Slot = TGT;
	Chat((mob[Slot].name+" is dazed by blistering holy light."),3);
	var blindDuration = 60000;
	if(mob[Slot].level > my.level){
		blindDuration -= (M.pow((mob[Slot].level - my.level),1.25));
	}
	if(markOfJudgementStatus===true||my.talent12>=20){
		var dam = minMax(alterationTotal()*2.1, .8);
		g.myMagicDamage("magic", dam,Slot,checkCrit(), "Searing Revelation");
	}
	blindTarget(Slot, blindDuration, -256);
	if(my.talent10>=1){
		var dam = minMax(conjurationTotal()*(1+(talent10()*.389)), .8);
		T.delayedCall(.25, function(){
			g.myMagicDamage("magic", dam, Slot, checkCrit(), "Searing Revelation");
		});
	}
}
function animateSearingRevelation(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = -450;
	function doit(count){
		var y=y2+(90*count)+200;
		var e1 = can('yellowLight3', 5, x2-200, y, 1000, 1000, true);
		T.to(e1, (1000+(count*200))/1000, {
			alpha:0,
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(5, e1);
			}
		});
		if(count<5){ 
			T.delayedCall(.05, function(){ 
				doit(++count);
			}); 
		}
	}
	doit(0);
}

function martyrsBlessingReady(){
	if(D.getElementById('martyrsblessing').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('martyrsblessing', false);
    BGP('martyrsblessing', "-900% 0%");
	refreshmartyrsBlessing.kill();
}
function martyrsBlessingTimer(){
	refreshmartyrsBlessing = T.to('', .1, {repeat:-1, onRepeat:martyrsBlessingReady});
}
$(function(){
	$NG.window3.on('mouseenter','#martyrsblessing',function(){
		var spellType = "Conjuration";
		var CD = "30".fontcolor("#ff0000");
		var minimum = 30+(talent6()*12.5);
		var absorb = "40%".fontcolor("#00ff00");
		var duration = "10".fontcolor("#00ff00");
		var ouch = talent6()*6.3;
		NG.tooltipname.innerHTML = "Martyr's Blessing";
		var s="Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Increase all arcane damage on your target by "+green(minimum+'%')+"."
		if(my.talent6>=1){
			s+=" Damage received is increased by "+green(ouch+'%')+".";
		}
		s+=" Converts "+absorb+" of damage received into mana. Effect lasts for "+duration+" seconds.";
		NG.tooltipmsg.innerHTML = s;
	});
});
function martyrsBlessing(){
	if(btn.d.martyrsblessing===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	currentSpell = "Martyr's Blessing";
	spellType = "conjuration";
    setD('martyrsblessing', true);
    BGP('martyrsblessing', "-900% -100%");
	T.delayedCall(30, martyrsBlessingTimer);
	timerTick(D.getElementById('martyrsblessing'),30000/1000,'martyrsblessing');
	castingSpell = 1;
	checkSpellLevelUp();
	Chat((mob[TGT].name+" is beset by a martyr's will."),3);
	mob[TGT].martyr=true;
	CLR.martyr=true;
	mob[TGT].martyrTiming = T.delayedCall(10, function(){ 
		martyrsBlessingExpire(TGT); 
	});
	var skillName = "Martyr's Blessing";
	var buffId = "martyrsBlessingIcon";
	var duration = 10000;
	var spriteX = -288;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	if(GLB.videoSetting==="High"){ animateMartyrsBlessing(); }
	playAudio("redemption");
}
function martyrsBlessingExpire(Slot){
	mob[Slot].martyr=false;
	CLR.martyr=false;
}
function animateMartyrsBlessing(){
	var x2 = (MOB[TGT].offsetLeft+mob[TGT].cX-25);
	function doit(count){
		var rWidth = M.random()*(200)+300;
		var rHeight = 568+M.random()*(100)+50;
		var p4 = can('martyrsBlessing', 7, x2, 0, 50, 720);
		T.to(p4, 1.5, {
			alpha:0,
			scaleX:rWidth/300,
			scaleY:rHeight/497,
			x:x2-(rWidth/2),
			y:0,
			onComplete:function(){
				cRem(7, p4);
			}
		});
		var ranY = M.random()*(90)+630;
		var ranX = x2+M.random()*(400)-200;
		var p1 = can('yellowparticle50', 7, x2-9, -30, 7, 7);
		T.to(p1, 1.5, {
			y:ranY,
			ease:ez.bout
		});
		T.to(p1, 1.5, {
			x:ranX,
			ease:ez.sout
		});
		T.to(p1, M.random()*(12)+4, {
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(7, p1);
			}
		});
		count++;
		if(count<20){ 
			T.delayedCall(.08, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
	var e1 = can('yellowLight3', 5, x2-175, -300, 2560, 1544, true);
	T.to(e1, 3.5, {
		alpha:0,
		ease:ez.Qin,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}

function armorOfFaith(){
	if(btn.d.armoroffaith===true||my.level<15){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = clr.cost.armorOfFaith;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Armor of Faith";
	spellCastTime = castSpeedTotal(6000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("blue");
	animateCastBar("armorOfFaith");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#armoroffaith',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var maximum = ( M.ceil((abjurationTotal()*1.05)*(1+(talent7()*11.3)/100))+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Armor of Faith";
		var s="Cost: "+green(clr.cost.armorOfFaith)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(6000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs your armor by "+maximum+" for "+duration+" minutes.";
		if(my.talent7>0){
			var x=(talent7()*1.6).toFixed(1)+"%";
			s+= "<BR><BR>Buffs attack haste by "+green(x)+".";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.armorOfFaithFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You feel the favor of the gods upon you."),3);
	if(armorOfFaithStatus===true){ armorBuff-=armorOfFaithArmorBoost; }
	armorOfFaithTimeout.kill();
	armorOfFaithTimeout = T.delayedCall(3240, armorOfFaithExpire); //3240000
	armorOfFaithArmorBoost = M.ceil((abjurationTotal()*1.05)*(1+(talent7()*11.3)/100));
	armorBuff+=armorOfFaithArmorBoost;
	armorOfFaithStatus=true;
	CStat();
	var skillName = "Armor of Faith";
	var buffId = "armorOfFaithIcon";
	var duration = 3240000;
	var spriteX = -480;
	armorOfFaithIconTimer.kill();
	armorOfFaithIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff('blue','easeInBack', 5, 25, 120, 5);
}
function armorOfFaithExpire(){
	armorOfFaithStatus=false;
	armorBuff-=armorOfFaithArmorBoost;
	CStat();
}

function divineSanctuary(){
	if(btn.d.divinesanctuary===true||my.level<20){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = clr.cost.divineSanctuary;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Divine Sanctuary";
	spellCastTime = castSpeedTotal(3000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("yellow");
	animateCastBar("divineSanctuary");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#divinesanctuary',function(){
		var spellType = "Abjuration";
		var duration = "36".fontcolor("#00ff00");
		var maximum = ( M.ceil(abjurationTotal()*.3)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Divine Sanctuary";
		NG.tooltipmsg.innerHTML = "Cost: "+green(clr.cost.divineSanctuary)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs all resistances by "+maximum+" for "+duration+" minutes.";
	});
});
g.divineSanctuaryFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You are protected by a chromatic shell."),3);
	if(divineSanctuaryStatus===true){
		svpoisonBuff-=divineSanctuaryPoisonBoost;
		svmagicBuff-=divineSanctuaryMagicBoost;
		svlightningBuff-=divineSanctuaryLightningBoost;
		svcoldBuff-=divineSanctuaryColdBoost;
		svfireBuff-=divineSanctuaryFireBoost;
	}
	divineSanctuaryTimeout.kill();
	divineSanctuaryTimeout = T.delayedCall(2160, divineSanctuaryExpire);
	divineSanctuaryPoisonBoost = M.ceil(abjurationTotal()*.3);
	divineSanctuaryMagicBoost = M.ceil(abjurationTotal()*.3);
	divineSanctuaryLightningBoost = M.ceil(abjurationTotal()*.3);
	divineSanctuaryColdBoost = M.ceil(abjurationTotal()*.3);
	divineSanctuaryFireBoost = M.ceil(abjurationTotal()*.3);
	svpoisonBuff+=divineSanctuaryPoisonBoost;
	svmagicBuff+=divineSanctuaryMagicBoost;
	svlightningBuff+=divineSanctuaryLightningBoost;
	svcoldBuff+=divineSanctuaryColdBoost;
	svfireBuff+=divineSanctuaryFireBoost;
	divineSanctuaryStatus=true;
	CStat();
	var skillName = "Divine Sanctuary";
	var buffId = "divineSanctuaryIcon";
	var duration = 2160000;
	var spriteX = -512;
	divineSanctuaryIconTimer.kill();
	divineSanctuaryIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff("yellow",'easeInBack', 5, 25, 120, 3);
}
function divineSanctuaryExpire(){
	divineSanctuaryStatus=false;
	svpoisonBuff-=divineSanctuaryPoisonBoost;
	svmagicBuff-=divineSanctuaryMagicBoost;
	svlightningBuff-=divineSanctuaryLightningBoost;
	svcoldBuff-=divineSanctuaryColdBoost;
	svfireBuff-=divineSanctuaryFireBoost;
	CStat();
}

function symbolOfNaltron(){
	if(btn.d.symbolofnaltron===true||my.level<32){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = clr.cost.symbolOfNaltron;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Symbol of Yentus";
	spellCastTime = castSpeedTotal(4000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("symbolOfNaltron");
	playAudio("spellCastAbjure",0,spellCastTime);
}

$(function(){
	$NG.window3.on('mouseenter','#symbolofnaltron',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.95)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Symbol of Yentus";
		NG.tooltipmsg.innerHTML = "Cost: "+green(clr.cost.symbolOfNaltron)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs your hit points by "+minimum+" for "+duration+" minutes.";
	});
});
g.symbolOfNaltronFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("The Symbol of Yentus flashes before your eyes."),3);
	if(symbolOfNaltronStatus===true){ maxHpBuff-=symbolOfNaltronBoost; }
	symbolOfNaltronTimeout.kill();
	symbolOfNaltronTimeout = T.delayedCall(3240, symbolOfNaltronExpire);
	symbolOfNaltronBoost = M.ceil(abjurationTotal()*.95);
	maxHpBuff+=symbolOfNaltronBoost;
	symbolOfNaltronStatus=true;
	CStat();
	g.drawMyHp();
	var skillName = "Symbol of Yentus";
	var buffId = "symbolOfNaltronIcon";
	var duration = 3240000;
	var spriteX = -544;
	symbolOfNaltronIconTimer.kill();
	symbolOfNaltronIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff('teal','easeInBack', 5, 25, 150, 6);
}
function symbolOfNaltronExpire(){
	symbolOfNaltronStatus=false;
	maxHpBuff-=symbolOfNaltronBoost;
	CStat();
	g.drawMyHp();
}

function guardianAngelReady(){
	if(D.getElementById('guardianangel').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;}
    setD('guardianangel', false);
    BGP('guardianangel', "-1000% 0%");
	refreshguardianAngel.kill();
	g.checkClericSkills();
	guardianAngelStatus=true;
}
function guardianAngelTimer(){
	refreshguardianAngel = T.to('', .1, {repeat:-1, onRepeat:guardianAngelReady});
}
$(function(){
	$NG.window3.on('mouseenter','#guardianangel',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var CD = "30".fontcolor("#ff0000");
		var shieldAmount = ( M.ceil( ((abjurationTotal()*.8)*(1+(talent8()*2.25)/100) ))+"").fontcolor("#00ff00");
		var a=TTmag( alterationTotal()*1.7, .85, "magic", "Guardian Angel");
		var zig;
		if(my.level>=28){
			zig = "Mark of Judgement";
		}else{
			zig = "(Level 28) Mark of Judgement";
		}
		NG.tooltipname.innerHTML = "Guardian Angel";
		NG.tooltipmsg.innerHTML = "Cost: "+green(clr.cost.guardianAngel)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"A guardian angel intervenes on your behalf to shield you from all damage. Your guardian angel absorbs "+shieldAmount+" damage.<br><br>"+
		"Effect: Can be used while stunned or feared.<br><br>"+
		"If "+zig+" is active, all targets receive "+a[0]+" to "+a[1]+" arcane damage.";
	});
});
function guardianAngel(){
	if(my.hp<=0||paused===true){ return; }
	if(btn.d.guardianangel===true||my.level<17){ return;}
	spellMpCost = clr.cost.guardianAngel;
	if(my.mp<spellMpCost){ return; }
	g.drawMyMp(-spellMpCost);
    setD('guardianangel', true);
    BGP('guardianangel', "-1000% -100%");
	T.delayedCall(30, guardianAngelTimer);
	timerTick(D.getElementById('guardianangel'),30000/1000,'guardianangel');
	currentSpell = "Guardian Angel";
	spellType = "abjuration";
	Chat(("A guardian angel intervenes on your behalf."),3);
	if(Set.Venova>=6){ 
		function doit2(count){
			if(count<5){
				T.delayedCall(.25, function(){
					g.expelCorruptionFinish(true);
					doit2(++count);
				});
			}
			
		}
		T.delayedCall(1.25, function(){
			doit2(0);
		});
	}
	checkSpellLevelUp();
	shieldHp = M.ceil( ((abjurationTotal()*.8)*(1+(talent8()*2.25)/100) ));
	guardianAngelStatus=false;
	if(markOfJudgementStatus===true||my.talent12>=20){
		for (var i=0;i<=4;i++){
			if(mob[i].name!==""){
				var dam = minMax(alterationTotal()*1.7, .85);
				g.myMagicDamage("magic", dam,i,checkCrit(), "Guardian Angel");
			}
		}
	}
	removeIcon("guardianAngelIcon");
	addBuffIcon("Guardian Angel","guardianAngelIcon",0,-320);
	if(GLB.videoSetting==="High"){
		function doit(){
			animateGuardianAngel();
		}
		var d=0;
		for(var i=0;i<10;i++){
			T.delayedCall(d/1000, function(){
				doit();
			});
			d+=150;
		}
		animateBuffRings();
	}
	playAudio("spellDoneBuff");
}
function animateGuardianAngel(){
	flashScreen("#ff0",.3,2);
	var e1 = can('guardianAngel', 5, 415, 400, 0, 0, true);
	T.to(e1, 3, {
		alpha:0,
		scaleX:1,
		scaleY:1,
		ease:ez.cout,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}


function holyWrathReady(){
	if(D.getElementById('holywrath').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('holywrath', false);
    BGP('holywrath', "-1100% 0%");
	g.checkClericSkills();
	refreshholyWrath.kill();
}
function holyWrathTimer(){
	refreshholyWrath = T.to('', .1, {repeat:-1, onRepeat:holyWrathReady});
}
function holyWrath(){
	if(btn.d.holywrath===true||my.level<24){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = clr.cost.holyWrath;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Holy Wrath";
	spellCastTime = castSpeedTotal(1500);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("yellow");
	animateCastBar("holyWrath");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#holywrath',function(){
		var spellType = "Evocation";
		var CD = 40;
		if(my.talent3>=20){ CD=24; }
		var a=TTmag( evocationTotal()*3.1, .85, "magic", "Holy Wrath");
		var duration = "7.5".fontcolor("#00ff00");
		var target="your target";
		if(my.talent4>=20){ target="three targets"; }
		NG.tooltipname.innerHTML = "Holy Wrath";
		NG.tooltipmsg.innerHTML = "Cost: "+green(clr.cost.holyWrath)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+red(CD)+" Seconds<br><br>"+
		"Holy Wrath hits "+target+" for "+a[0]+" to "+a[1]+" arcane damage. Summoned pets take devastating damage.<br><br>"+
		"Effect: Stuns "+target+" for "+duration+" seconds.";
	});
});
g.holyWrathFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneSlam");
    setD('holywrath', true);
    BGP('holywrath', "-1100% -100%");
	var d=40000;
	if(my.talent3>=20){ d=24000; }
	T.delayedCall(d/1000, holyWrathTimer);
	timerTick(D.getElementById('holywrath'),d/1000,'holywrath');
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	if(my.talent4>=20){
		for(var i=0;i<=4;i++){
			if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
				if(GLB.videoSetting==="High"){ animateHolyWrath(i); }
				var dam = minMax(evocationTotal()*3.1, .85);
				if(mob[i].name.indexOf(" pet")!==-1){ dam=dam*6; }
				Chat((mob[i].name+" is struck by a sonic force."),3);
				stunTarget(i, 7500, -352);
				g.myMagicDamage("magic", dam, i, checkCrit(), "Holy Wrath");
			}
		}
	}else{
		if(GLB.videoSetting==="High"){ animateHolyWrath(Slot); }
		var dam = minMax(evocationTotal()*3.1, .85);
		if(mob[Slot].name.indexOf(" pet")!==-1){ dam=dam*6; }
		Chat((mob[Slot].name+" is struck by a sonic force."),3);
		stunTarget(Slot, 7500, -352);
		g.myMagicDamage("magic", dam, Slot, checkCrit(), "Holy Wrath");
	}
}
function animateHolyWrath(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	var p3 = can('holyMight', 5, x2-100, y2-100, 200, 200);
	T.to(p3, .25,{
		alpha:0,
		onComplete:function(){
			cRem(5, p3);
		}
	});
	var p4 = can('lineNova', 7, x2-200, y2-200, 400, 400);
	p4.alpha = 0;
	T.to(p4, .15,{
		alpha:.3,
		scaleX:1.25,
		scaleY:1.25,
		y:y2-250,
		x:x2-250,
		onComplete:function(){
			T.to(p4, .45,{
				alpha:0,
				scaleX:2,
				scaleY:2,
				y:y2-400,
				x:x2-400,
				ease:ez.lin,
				onComplete:function(){
					cRem(7, p4);
				}
			});
		}
	});
}


function markOfJudgementReady(){
	if(D.getElementById('markofjudgement').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('markofjudgement', false);
    BGP('markofjudgement', "-1200% 0%");
	refreshmarkOfJudgement.kill();
}
function markOfJudgementTimer(){
	refreshmarkOfJudgement = T.to('', .1, {repeat:-1, onRepeat:markOfJudgementReady});
}
function markOfJudgement(){
	if(btn.d.markofjudgement===true||my.level<28){ return;}
	if(checkBashFear()===true){ return; }
	currentSpell = "Mark of Judgement";
	spellCastTime = castSpeedTotal(1500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("yellow");
	animateCastBar("markOfJudgement");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#markofjudgement',function(){
		var spellType = "Conjuration";
		var CD = "30".fontcolor("#ff0000");
		if(my.talent11>=20){ CD=green("20"); }
		var duration = "6".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Mark of Judgement";
		var s="Cast Time: "+castTimeTT(1500)+" Second<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Mark of Judgement empowers all holy magic by "+green("75%")+" and reduces cast time by "+green("50%")+" for "+duration+" seconds.";
		if(my.talent11>0){
			var a=TTmag( conjurationTotal()*(1+(talent11()*.26)), .8, "magic", "Holy Nova");
			
			s+="<BR><BR>Holy Nova hits all targets for "+a[0]+" to "+a[1]+" arcane damage.";
		}
		s+="<BR><BR>Effect: While Mark of Judgement is active, Superior Healing, Searing Revelation, Guardian Angel, and Benediction will unleash a magical offensive attack.";
		NG.tooltipmsg.innerHTML = s;
	});
});
g.markOfJudgementFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	if(GLB.videoSetting==="High"){ animateMarkOfJudgement(); }
    setD('markofjudgement', true);
    BGP('markofjudgement', "-1200% -100%");
	var d=30000;
	if(my.talent11>=20){ d=20000; }
	T.delayedCall(d/1000, markOfJudgementTimer);
	timerTick(D.getElementById('markofjudgement'),d/1000,'markofjudgement');
	Chat(("You glimmer with the judgement of holy light."),3);
	var d = 6000;
	var buffId = "markOfJudgementIcon";
	markOfJudgementStatus=true;
	markOfJudgementTiming = T.delayedCall(d/1000, markOfJudgementExpire);
	T.delayedCall(d/1000, function(){ 
		removeIcon(buffId); 
	});
	addBuffIcon("Mark of Judgement",buffId,d,-384);
	if(my.talent11>=1){
		animateNova('lightningNova');
		animateNova('lightningNova');
		for(var i=0;i<=4;i++){
			if(mob[i].name!==""){
				var dam = minMax(conjurationTotal()*(1+(talent11()*.26)), .8);
				g.myMagicDamage("magic", dam, i, checkCrit(), "Holy Nova");	
			}
		}
	}
}
function animateMarkOfJudgement(){
	var c1 = img("yellowparticle50");
	function doIt(count){
		var x = (M.random()*(1380)-50);
		var y = (M.random()*425);
		var e1 = cacheAdd(c1, 5, x, y, .3, .3, true);
		T.to(e1, M.random()*(1)+1, {
			x:640,
			y:720,
			scaleX:1,
			scaleY:1,
			ease:ez.Qin,
			onComplete:function(){
				cRem(5, e1);
			}
		});
		count++;
		if(count<40){ doIt(count); }
	}
	doIt(0);
}

function markOfJudgementExpire(){
	markOfJudgementStatus=false;
}


function benedictionReady(){
	if(D.getElementById('benediction').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('benediction', false);
    BGP('benediction', "-1300% 0%");
	g.checkClericSkills();
	refreshbenediction.kill();
}
function benedictionTimer(){
	refreshbenediction = T.to('', .1, {repeat:-1, onRepeat:benedictionReady});
}
$(function(){
	$NG.window3.on('mouseenter','#benediction',function(){
		var spellType = "Conjuration";
		var duration = "1".fontcolor("#00ff00");
		var a=TTmag( conjurationTotal()*(1+(talent12()*.475)), .75, "magic", "Benediction");
		var duration1 = "7".fontcolor("#00ff00");
		var duration2 = "15".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Benediction";
		NG.tooltipmsg.innerHTML = "Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green("60")+" Seconds<br><br>"+
		"Benediction summons a blast of holy light, stunning all targets for "+duration1+" to "+duration2+" seconds.<br><br>"+
		"If Mark of Judgment is active, Benediction inflicts "+a[0]+" to "+a[1]+" arcane damage.";
	});
});
function benediction(){
	if(btn.d.benediction===true||my.level<38){ return;}
	if(checkBashFear()===true){ return; }
    setD('benediction', true);
    BGP('benediction', "-1300% -100%");
	T.delayedCall(60, benedictionTimer);
	timerTick(D.getElementById('benediction'),60000/1000,'benediction');
	currentSpell = "Benediction";
	spellType = "conjuration";
	Chat(("A pillar of light beams down from the heavens."),3);
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	playAudio("handofgod");
	// stun effect - restart according monster slot
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""){
			if(!mob[i].phased&&mob[i].name){ MOB[i].style.opacity=1; }
			var stunDuration=7000+M.random()*(8000);
			if(GLB.videoSetting==="High"){ animateBenediction(i); }
			stunTarget(i, stunDuration, -416);
			if(my.talent12>=1){
				var dam = minMax(conjurationTotal()*(1+(talent12()*.475)), .75);
				g.myMagicDamage("magic", dam, i, checkCrit(), "Benediction");
			}
		}
	}
	if(markOfJudgementStatus===true||my.talent12>=20){
		for (var i=0;i<=4;i++){
			if(mob[i].name!==""){
				var damage = M.ceil( ((((wisTotal()-60)*((conjurationTotal()/5)/50))) + (alterationTotal()*3.5) + M.random()*(3+(spellSkillCheck())/4.4)) );
				var mType="magic";
				var spellName = "Benediction";
				g.myMagicDamage(mType, damage,i,checkCrit(), spellName);
			}
		}
	}
}
function animateBenediction(Slot, disable){
	if(!mob[Slot].name){ return; }
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-200);
	var p5 = can('benediction', 5, x2, -100, 400, 0);
	T.to(p5, .15, {
		y:0,
		scaleY:675/497,
		onComplete:function(){
			cRem(5, p5);
		}
	});
	var p3 = can('benediction', 5, x2, -100, 400, 0);
	T.to(p3, .15, {
		y:0,
		scaleY:675/497,
		alpha:.2,
		onComplete:function(){
			T.to(p3, 1.5, {
				alpha:0,
				ease:ez.lin,
				onComplete:function(){
					cRem(5, p3);
				}
			});
		}
	});
	T.delayedCall(.15, animateTremor, [x2+200, 1200]);
	if(!disable){
		var p4 = can('benedictionFloor', 7, 0, 397, 1280, 400);
		T.to(p4, 3, {
			alpha:0,
			onComplete:function(){
				cRem(7, p4);
			}
		});
	}
}

function starfireReady(){
	if(D.getElementById('starfire').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('starfire', false);
    BGP('starfire', "-300% 0%");
	g.checkDruidSkills();
	refreshStarfire.kill();
}
function starfireTimer(){
	refreshStarfire = T.to('', .1, {repeat:-1, onRepeat:starfireReady});
}
function starfire(){
	if(btn.d.starfire===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	currentSpell = "Starfire";
	spellCastTime = castSpeedTotal(3000);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("red");
	animateCastBar("starfire");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#starfire',function(){
		var spellType = "Evocation";
		var a=TTmag( 3+evocationTotal()*2.7, .8, "fire", "Starfire");
		NG.tooltipname.innerHTML = "Starfire";
		NG.tooltipmsg.innerHTML = "Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Starfire hits your target for "+a[0]+" to "+a[1]+" fire damage.";
	});
});
g.starfireFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBoom");
	if(GLB.videoSetting==="High"){ animateStarfire(TGT); }
	var dam = minMax( 3+evocationTotal()*2.7, .8);
	g.myMagicDamage("fire", dam, TGT, checkCrit(), "Starfire");
}
function animateStarfire(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY;
	var x2 = (cX-100);
	var y2 = (cY-100);
	var e1 = can('ignite', 5, x2, y2, 200, 200, true);
	T.to(e1, .6, {
		scaleX:2,
		scaleY:2,
		alpha:0,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	particleBurst(Slot,'orange','blank');
}

function dronesOfDoomReady(){
	if(D.getElementById('dronesofdoom').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('dronesofdoom', false);
    BGP('dronesofdoom', "-400% 0%");
	g.checkDruidSkills();
	refreshdronesOfDoom.kill();
}
function dronesOfDoomTimer(){
	refreshdronesOfDoom = T.to('', .1, {repeat:-1, onRepeat:dronesOfDoomReady});
}
function dronesOfDoom(){
	if(btn.d.dronesofdoom===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = dru.cost.dronesOfDoom;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Drones of Doom";
	spellType = "conjuration";
	playAudio("spellDoneHeal");
	animateDot(TGT,"yellow",150,40,20,200,ez.Bin,15,3,-100,.9);
	g.drawMyMp(-spellMpCost);
	spellDamage = minMax(1+conjurationTotal()*.33, .9);
	Chat((mob[TGT].name+" is engulfed by a swarm."),3);
	var Slot = TGT;
	mob[Slot].dronesOfDoomTickCount=1;
	mob[Slot].dronesOfDoomTick=spellDamage;
	mob[Slot].dronesOfDoomTickInterval.kill();
	mob[Slot].dronesOfDoomTickInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		dronesOfDoomTick("magic", Slot); 
	}});
	addMobBuffIcon("Drones of Doom",Slot,"dronesOfDoomIcon",18000,-128);
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	beginGlobalCooldown();
	checkSpellLevelUp();
}
$(function(){
	$NG.window3.on('mouseenter','#dronesofdoom',function(){
		var spellType = "Conjuration";
		var a=TTdot( 1+conjurationTotal()*.33, .9, "magic", "Drones of Doom");
		var value1 = "15%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Drones of Doom";
		var s="Cost: "+green(dru.cost.dronesOfDoom)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Drones of Doom ticks for "+a[0]+" to "+a[1]+" arcane damage every second for 18 seconds.";
		if(my.talent1>=20){
			s+="<BR><BR>Affected mobs' damage is reduced by "+green("10%")+".";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});

function dronesOfDoomTick(mType, Slot){
	if(mob[Slot].name===""){ 
		mob[Slot].dronesOfDoomTickInterval.kill(); 
		mob[Slot].dronesOfDoomTickCount=0; 
		return;
	}
	g.myDotDamage(mob[Slot].dronesOfDoomTick, Slot, mType, "Drones of Doom");
	mob[Slot].dronesOfDoomTickCount+=1;
	if(mob[Slot].dronesOfDoomTickCount===19){ mob[Slot].dronesOfDoomTickInterval.kill(); mob[Slot].dronesOfDoomTickCount=0; }
}
function procDot(Slot, damage, name, type, ticks, interval, sound){
	if(!mob[Slot].name){ return; }
	var proc=uniqueId();
	addMobBuffIcon(name, Slot, name.replace(/ /g, '')+"Icon"+proc, 0, -32);	
	function tick(count,proc,damage){
		if(mob[Slot].name===""){ return; }
		g.myDotDamage(damage, Slot, type);
		count++;
		if(name==="Curse of the Spirits"){ 
			damage+=7; 
		}
		if(count===ticks){
			removeMobIcon(name.replace(/ /g, '')+"Icon"+proc, Slot);
		}else{
			T.delayedCall(interval/1000, function(){
				tick(count,proc,damage);
			});
		}
	}
	T.delayedCall(1, function(){
		tick(0,proc,damage);
	});
	if(!sound){
		playAudio("spellDoneHeal");
	}else{
		playAudio(sound);
	}
}
function bleedTarget(Slot, ticks, interval, spriteX){
	if(!mob[Slot].name){ return; }
	if(!spriteX){ spriteX=-32; }
	addMobBuffIcon("Bleed", Slot, "bleedIcon", ticks*interval, spriteX, -32);
	if(typeof timers.bleed==='object'){
		timers.bleed.kill();
	}else{
		timers.bleed = TDC();
	}
	var d = interval/1000;
	var multi = 3;
	var t = P.eq[12].type;
	if(t==="pierced"){
		multi = 17;
	}else if(t==="slashed"){
		multi = 13;
	}else if(t==="crushed"||
	t==="punched"){
		multi = 9;
	}else if(t==="cleaved"){
		multi = 4;
	}else{
		multi = 3;
	}
	var dam = M.ceil(P.eq[12].damage*multi);
	function tick(count){
		if(mob[Slot].name!==""){
			g.myDotDamage(M.ceil(dam), Slot, "physical");
			animateBloodDrop(Slot);
			count++;
			if(count < ticks){
				timers.bleed = T.delayedCall(d, function(){
					tick(count);
				});
			}
		}
	}
	timers.bleed = T.delayedCall(d, function(){
		tick(0);
	});
}

function druHealingReady(){
	if(D.getElementById('druhealing').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('druhealing', false);
    BGP('druhealing', "-500% 0%");
	g.checkDruidSkills();
	refreshdruHealing.kill();
}
function druHealingTimer(){
	refreshdruHealing = T.to('', .1, {repeat:-1, onRepeat:druHealingReady});
}
function druHealing(){
	if(btn.d.druhealing===true||my.level<3){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = dru.cost.greaterHealing;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Greater Healing";
	spellCastTime = castSpeedTotal(2000);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("teal");
	animateCastBar("druHealing");
	playAudio("spellCastHeal",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#druhealing',function(){
		var spellType = "Alteration";
		var CD = "6".fontcolor("#ff0000");
		var a=TTheal( (alterationTotal()*1.8)*(1+((talent2()*1.25)/100)), .9);
		var b=TTheal( ((alterationTotal()*1.8)*(1+((talent2()*1.25)/100)))/20, .9);
		NG.tooltipname.innerHTML = "Greater Healing";
		var s="Cost: "+green(dru.cost.greaterHealing)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Greater Healing heals for "+a[0]+" to "+a[1]+" hit points.";
		if(my.talent2>=20){
			s+="<BR><BR>Greater Healing leaves a regen effect healing "+b[0]+" to "+b[1]+" health every second over six seconds.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.druHealingFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	animateHealing("teal");
    setD('druhealing', true);
    BGP('druhealing', "-500% -100%");
	T.delayedCall(6, druHealingTimer);
	timerTick(D.getElementById('druhealing'),6000/1000,'druhealing');
	g.drawMyMp(-spellMpCost);
	var healAmount = minMax( (alterationTotal()*1.8)*(1+((talent2()*1.25)/100)), .9);
	g.popupHeal(healAmount);	
	if(my.talent2>=20){
		var heal2=M.ceil(healAmount/20);
		var proc=uniqueId();
		addBuffIcon("Rinara's Kiss", "tunaresKissIcon"+proc, 7000, -160);
		function doit3(count,proc){
			if(my.hp<=0){
				removeIcon("tunaresKissIcon"+proc);
				return;
			}
			count++;
			g.popupHeal(heal2);
			if(count<6){
				T.delayedCall(1, function(){
					doit3(count,proc);
				});
			}else{
				removeIcon("tunaresKissIcon"+proc);
			}
		}
		var count=0;
		T.delayedCall(1, function(){
			doit3(count,proc);
		});
	}
}

function skinLikeNature(){
	if(btn.d.skinlikenature===true||my.level<5){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = dru.cost.skinLikeNature;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Skin Like Nature";
	spellCastTime = castSpeedTotal(4500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("skinLikeNature");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#skinlikenature',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.35)+"").fontcolor("#00ff00");
		var maximum = ( M.ceil((abjurationTotal()*.6)*((talent4()*9.5/100)+1))+"").fontcolor("#00ff00");
		var value1 = ( (M.ceil(my.level/12)+1)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Skin Like Nature";
		NG.tooltipmsg.innerHTML = "Cost: "+green(dru.cost.skinLikeNature)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(4500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Skin Like Nature buffs your hit points by "+maximum+" and your armor by "+minimum+" for "+duration+" minutes.<br><br>"+
		"Effect: Buffs your passive health regeneration by "+value1+" per tick.";
	});
});
g.skinLikeNatureFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	animateBuff('green','easeInBack', 5, 25, 120, 4);
	g.drawMyMp(-spellMpCost);
	Chat(("Your skin shimmers with divine power."),3);
	if(skinLikeNatureStatus===true){
		maxHpBuff-=skinLikeNatureHpBoost;
		armorBuff-=skinLikeNatureArmorBoost;
	}
	skinLikeNatureTimeout.kill();
	skinLikeNatureTimeout = T.delayedCall(3240, skinLikeNatureExpire);
	skinLikeNatureArmorBoost = M.ceil(abjurationTotal()*.35);
	skinLikeNatureHpBoost = M.ceil((abjurationTotal()*.6)*((talent4()*9.5/100)+1));
	maxHpBuff+=skinLikeNatureHpBoost;
	armorBuff+=skinLikeNatureArmorBoost;
	skinLikeNatureStatus=true;
	CStat();
	g.drawMyHp();
	var skillName = "Skin Like Nature";
	var buffId = "skinLikeNatureIcon";
	var duration = 3240000;
	var spriteX = -448;
	skinLikeNatureIconTimer.kill();
	skinLikeNatureIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	setEquipValues();
}
function skinLikeNatureExpire(){
	skinLikeNatureStatus=false;
	armorBuff-=skinLikeNatureArmorBoost;
	maxHpBuff-=skinLikeNatureHpBoost;
	CStat();
	g.drawMyHp();
	setEquipValues();
}

function tornadoReady(){
	if(D.getElementById('tornado').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
	setD('tornado', false);
	BGP('tornado', "-600% 0%");
	g.checkDruidSkills();
	refreshtornado.kill();
}
function tornadoTimer(){
	refreshtornado = T.to('', .1, {repeat:-1, onRepeat:tornadoReady});
}
function tornado(){
	if(btn.d.tornado===true||my.level<7){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	currentSpell = "Tornado";
	spellType = "evocation";
	playAudio("windcast");
	if(my.talent5<20){
		setD('tornado', true);
		BGP('tornado', "-600% -100%");
		T.delayedCall(6, tornadoTimer);
		timerTick(D.getElementById('tornado'),6000/1000,'tornado');
	}
	var dam = minMax((evocationTotal()*1.6)*(1+((talent5()*3)/100))*(g.mobDefense(TGT) ), .8);
	executeTornado(TGT,dam,0);
	var delay=0;
	cache.tornado = img("tornado", 250, 373);
	while(M.random()>.25){
		delay+=100;
		var Slot = selectRandomTarget();
		var dam = minMax((evocationTotal()*.55)*(1+((talent5()*3)/100))*(g.mobDefense(Slot) ), .8); 
		executeTornado(Slot,dam,delay);
	}
	T.delayedCall(.5, function(){
		playAudio("windcast");
	});
	beginGlobalCooldown();
	checkSpellLevelUp();
}
$(function(){
	$NG.window3.on('mouseenter','#tornado',function(){
		var spellType = "Evocation";
		var CD = "6".fontcolor("#ff0000");
		var a=TTmag( (evocationTotal()*1.6)*(1+((talent5()*3)/100)), .8, "physical", "Tornado");
		var b=TTmag( (evocationTotal()*.55)*(1+((talent5()*3)/100)), .8, "physical", "Tornado");
		NG.tooltipname.innerHTML = "Tornado";
		var s="Spell Type: "+spellType;		
		if(my.talent5<20){
			s+="<br>Cooldown: "+CD+" Seconds";			
		}
		s+="<br><br>Tornado hits your target for "+a[0]+" to "+a[1]+" physical damage. <BR><BR>Secondary tornadoes have a chance to hit random targets for "+b[0]+" to "+b[1]+" physical damage.";
		NG.tooltipmsg.innerHTML = s;
	});
});
function executeTornado(Slot,dam,delay){
	if(mob[Slot].name===""){ return; }
	if(GLB.videoSetting==="High"){ 
		T.delayedCall(delay/1000, function(){
			animateTornado(Slot);
		});
	};
	T.delayedCall((500+delay)/1000, function(){
		g.myMagicDamage("physical", dam, Slot, checkCrit(), "Tornado");
	});
}
function animateTornado(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY;
	var e1 = cacheAdd(cache.tornado, 5, (M.random()*400+315), 480, 1, 1, true);
	flipImg(e1);
	T.to(e1, .5, {
		scaleX:e1.scaleX*.75, 
		scaleY:e1.scaleY*.75, 
		x:cX, 
		y:490,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}

function engulfingRootsReady(){
	if(D.getElementById('engulfingroots').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('engulfingroots', false);
    BGP('engulfingroots', "-700% 0%");
	g.checkDruidSkills();
	refreshengulfingRoots.kill();
}
function engulfingRootsTimer(){
	refreshengulfingRoots = T.to('', .1, {repeat:-1, onRepeat:engulfingRootsReady});
}
function engulfingRoots(){
	if(btn.d.engulfingroots===true||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = dru.cost.engulfingRoots;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Engulfing Roots";
	spellCastTime = castSpeedTotal(1000);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("green");
	animateCastBar("engulfingRoots");
	playAudio("spellCastAbjure",0,spellCastTime);
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
}
$(function(){
	$NG.window3.on('mouseenter','#engulfingroots',function(){
		var spellType = "Alteration";
		var a=TTmag( (alterationTotal()*1.6), .85, "physical", "Engulfing Roots");
		NG.tooltipname.innerHTML = "Engulfing Roots";
		var s="Cost: "+green(dru.cost.engulfingRoots)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+red(6)+" Seconds<br><br>"+
		"Engulfing Roots hits your target for "+a[0]+" to "+a[1]+" hit points. Your target is rooted, leaving them unable to physically attack you.";
		if(my.talent3>0){
			var b=TTmag( (alterationTotal()/6)*((talent3()*6.5)/100), .9, "poison", "elemental");
			s+="<BR><BR>Elemental damage strikes for "+b[0]+" to "+b[1]+" poison damage every second while rooted.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.engulfingRootsFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
    setD('engulfingroots', true);
    BGP('engulfingroots', "-700% -100%");
	T.delayedCall(6, engulfingRootsTimer);
	timerTick(D.getElementById('engulfingroots'),6000/1000,'engulfingroots');
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	if(checkRootImmune(Slot)===true){
		Chat((mob[Slot].name+" is immune to Engulfing Roots."),1);
		return;
	}
	if(statusResist(Slot)===true){
		Chat((mob[Slot].name+" resisted Engulfing Roots."),1);
		return;
	}
	Chat((mob[Slot].name+" is rooted."),3);
	var rootFlag = true;
	stopMob(Slot);
	mob[Slot].rootStatus=5;
	$("#rootIcon"+Slot+",#rootBuffIcon"+Slot).remove();
	animateRoot(Slot, rootFlag);
	var dam = minMax( (alterationTotal()*1.6)*(g.mobDefense(TGT) ), .85);
	g.myMagicDamage("physical", dam, TGT, checkCrit(), "Engulfing Roots");
	var buffId = "rootBuffIcon";
	addMobBuffIcon("Engulfing Roots",Slot,buffId,0,-224);
}


function shieldOfSpikes(){
	if(btn.d.shieldofspikes===true||my.level<11){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = dru.cost.shieldOfSpikes;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Shield of Spikes";
	spellCastTime = castSpeedTotal(1500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("shieldOfSpikes");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#shieldofspikes',function(){
		var spellType = "Abjuration";
		var duration = "15".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.11)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Shield of Spikes";
		NG.tooltipmsg.innerHTML = "Cost: "+green(dru.cost.shieldOfSpikes)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buff yourself with a shield of spikes for "+duration+" minutes. Shield of Spikes reflects "+minimum+" physical damage every time you take physical damage.";
	});
});
g.shieldOfSpikesFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	animateBuff("green",'easeInQuad', 25, 11, 120, 3);
	g.drawMyMp(-spellMpCost);
	Chat(("You are covered in a veil of thorns."),3);
	shieldOfSpikesStatus=true;
	shieldOfBramblesTimeout.kill();
	shieldOfBramblesTimeout = T.delayedCall(720, shieldOfSpikesExpire); // 12 min
	var skillName = "Shield of Spikes";
	var buffId = "shieldOfSpikesIcon";
	var duration = 900000;
	var spriteX = -480;
	shieldOfSpikesIconTimer.kill();
	shieldOfSpikesIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function shieldOfSpikesExpire(){
	shieldOfBramblesStatus=false;
}

function driftingDeathReady(){
	if(D.getElementById('driftingdeath').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('driftingdeath', false);
    BGP('driftingdeath', "-800% 0%");
	g.checkDruidSkills();
	refreshdriftingDeath.kill();
}
function driftingDeathTimer(){
	refreshdriftingDeath = T.to('', .1, {repeat:-1, onRepeat:driftingDeathReady});
}
function driftingDeath(){
	if(btn.d.driftingdeath===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = dru.cost.driftingDeath;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Drifting Death";
	spellCastTime = castSpeedTotal(1500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("driftingDeath");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#driftingdeath',function(){
		var spellType = "Conjuration";
		var a=TTdot( conjurationTotal()*.5, .9, "magic", "Drifting Death");
		NG.tooltipname.innerHTML = "Drifting Death";
		var s="Cost: "+green(dru.cost.driftingDeath)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Drifting Death engulfs all targets and ticks for "+a[0]+" to "+a[1]+" arcane damage every second for 24 seconds.";
		if(my.talent10>=20){
			s+="<BR><BR>Spells ignore all resists of mobs affected by Drifting Death.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.driftingDeathFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	g.drawMyMp(-spellMpCost);
	for(var i=0;i<=4;i++){
		if(mob[i].name){
			spellDamage = minMax(conjurationTotal()*.5, .9);
			Chat((mob[i].name+" is engulfed by a thousand stings."),3);
			mob[i].driftingDeathTickCount=1;
			mob[i].driftingDeathTick=spellDamage;
			mob[i].driftingDeathTickInterval.kill();
			driftingDeathTickDelay("magic",i);
			addMobBuffIcon("Drifting Death",i,"driftingDeathIcon",24000,-256);
			animateDot(i,'green',300,40,20,-300,ez.Qin,5,12,100,1.5);
		}
	}
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}
function driftingDeathTickDelay(mType,i){
	mob[i].driftingDeathTickInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		driftingDeathTick(mType, i); 
	}});
}
function driftingDeathTick(mType, Slot){
	if(mob[Slot].name===""){ 
		mob[Slot].driftingDeathTickInterval.kill();
		mob[Slot].driftingDeathTickCount=0; 
		return; 
	}
	g.myDotDamage(mob[Slot].driftingDeathTick, Slot, mType, "Drifting Death");
	mob[Slot].driftingDeathTickCount+=1;
	if(mob[Slot].driftingDeathTickCount===25){ mob[Slot].driftingDeathTickInterval.kill(); mob[Slot].driftingDeathTickCount=0;}
}

function druSow(){
	if(btn.d.drusow===true||my.level<15){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = dru.cost.spiritOfTheWolf;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Spirit of the Wolf";
	spellCastTime = castSpeedTotal(3500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("druSow");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#drusow',function(){
		var spellType = "Alteration";
		var duration = "30".fontcolor("#00ff00");
		var minimum = "15%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Spirit of the Wolf";
		NG.tooltipmsg.innerHTML = "Cost: "+green(dru.cost.spiritOfTheWolf)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Spirit of the Wolf buffs your attack power by "+minimum+" and your chance to run from battle for "+duration+" minutes.";
	});
});
g.druSowFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	animateBuff('teal','easeInSine', 5, 15, 100, 3);
	g.drawMyMp(-spellMpCost);
	Chat(("You are surrounded by a brief lupine aura."),3);
	spiritOfTheWolfTimeout.kill();
	spiritOfTheWolfTimeout = T.delayedCall(1800, druSowExpire);
	sowStatus=true;
	CStat();
	var skillName = "Spirit of the Wolf";
	var buffId = "spiritOfTheWolfIcon";
	var duration = 1800000;
	var spriteX = -512;
	spiritOfTheWolfIconTimer.kill();
	spiritOfTheWolfIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function druSowExpire(){
	sowStatus=false;
	CStat();
}

function lightningBlastReady(){
	if(D.getElementById('lightningblast').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('lightningblast', false);
    BGP('lightningblast', "-900% 0%");
	g.checkDruidSkills();
	refreshlightningBlast.kill();
}
function lightningBlastTimer(){
	refreshlightningBlast = T.to('', .1, {repeat:-1, onRepeat:lightningBlastReady});
}
function lightningBlast(){
	if(btn.d.lightningblast===true||my.level<17){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = 0;
	currentSpell = "Lightning Blast";
	spellCastTime = castSpeedTotal(2000);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("yellow");
	animateCastBar("lightningBlast");
	playAudio("spellCastEvoke2",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#lightningblast',function(){
		var spellType = "Evocation";
		var CD = "10".fontcolor("#ff0000");
		var a=TTmag( evocationTotal()*4, .4, "lightning", "Lightning Blast");
		NG.tooltipname.innerHTML = "Lightning Blast";
		var s="Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Lightning Blast hits all targets for "+a[0]+" to "+a[1]+" lightning damage.";
		if(my.talent11>=20){
			s+="<BR><BR>Effect: Lightning Blast stuns each target for a random duration.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.lightningBlastFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("lightning"+ ~~(M.random()*(3)+1));
    setD('lightningblast', true);
    BGP('lightningblast', "-900% -100%");
	T.delayedCall(10, lightningBlastTimer);
	timerTick(D.getElementById('lightningblast'),10000/1000,'lightningblast');
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""){
			var damage = minMax(evocationTotal()*4, .4);
			var mType="lightning";
			var spellName = "Lightning Blast";
			if(GLB.videoSetting==="High"){ animateLightningBlast(i); }
			g.myMagicDamage(mType, damage, i, checkCrit(), spellName);
			if(my.talent11>=20){
				stunTarget(i, (M.pow(M.random()*(1)+1,2)*1000), -288);
			}
		}
	}
}
function animateLightningBlast(Slot){
	if(!mob[Slot].name||GLB.videoSetting==="Low"){ return; }
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX;
	var x2 = (cX-175);
	var e1 = can('lightningBlast', 5, x2, 100, 350, 697, true);
	flipImg(e1);
	T.to(e1, .25, {
		alpha:.1,
		onComplete:function(){
			T.to(e1, 2.5, {
				alpha:0,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
}


function earthquakeReady(){
	if(D.getElementById('earthquake').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('earthquake', false);
    BGP('earthquake', "-1000% 0%");
	g.checkDruidSkills();
	refreshearthquake.kill();
}
function earthquakeTimer(){
	refreshearthquake = T.to('', .1, {repeat:-1, onRepeat:earthquakeReady});
}
function earthquake(){
	if(btn.d.earthquake===true||my.level<20){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = 0;
	currentSpell = "Earthquake";
	spellCastTime = castSpeedTotal(1500);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("orange");
	animateCastBar("earthquake");
	playAudio("spellDoneFlames",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#earthquake',function(){
		var spellType = "Evocation";
		var CD = "50".fontcolor("#ff0000");
		if(my.talent6>=20){
			CD=red("38");
		}
		var a=TTdot( ((evocationTotal()*.95)*(1+((talent6()*3.75)/100))), .7, "physical", "Earthquake");
		NG.tooltipname.innerHTML = "Earthquake";
		var s="Cast Time: "+castTimeTT(1500)+" Second<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Second<br><br>"+
		"Earthquake for "+a[0]+" to "+a[1]+" physical damage. Earthquake hits random targets 32 times.";
		if(my.talent6>=20){
			s+="<BR><BR>Earthquake has an "+green("8%")+" chance to stun for "+green("2.5")+" seconds.";
		}
		s+="<BR><BR>Effect: Interrupts the spellcaster when they take damage.";
		NG.tooltipmsg.innerHTML = s;
	});
});
g.earthquakeFinish=function(){
	if(endSpell()===false){ return; }
    setD('earthquake', true);
    BGP('earthquake', "-1000% -100%");
	var d=50000;
	if(my.talent6>=20){ d=38000; }
	T.delayedCall(d/1000, earthquakeTimer);
	timerTick(D.getElementById('earthquake'),d/1000,'earthquake');
	playAudio("earthquakeloop1",0,1500);
	function earthquakeTick(earthquakeTickCount){
		if(countMobs()>0){
			var Slot = selectRandomTarget();
			if(earthquakeTickCount%3===0){ playAudio("earthquakeloop1",0,1200); }
			if(earthquakeTickCount%5===0){ playAudio("earthquakeloop2",0,500); }
			if(mob[Slot].name!==""){
				var damage = minMax( ((evocationTotal()*.95)*(1+((talent6()*3.75)/100)))*(g.mobDefense(Slot) ) ,.7);
				interruptTarget(Slot);
				if(my.talent6>=20){
					if(M.random()>.92){
						stunTarget(Slot, 2500, -320);
					}
				}
				g.myDotDamage(damage, Slot, "physical", "Earthquake");
			}
		}
		earthquakeTickCount++;
		
		if(earthquakeTickCount <= 32){ 
			T.delayedCall(.333, function(){ earthquakeTick(earthquakeTickCount) }); 
		}
	}
	var earthquakeTickCount = 0;
	earthquakeTick(earthquakeTickCount);
}
function screenShake(count,d,d2,interval){ // 400ms increments, amount of shaking, half shake, speed of intervals
	var foo=0;
	function doit(count,d,d2,interval){
		var randomLeft = M.ceil(M.random()*(d)-d2);
		var randomTop = M.ceil(M.random()*(d)-d2);
		var randomLeft2 = M.ceil(M.random()*(d)-d2);
		var randomTop2 = M.ceil(M.random()*(d)-d2);
		var randomLeft3 = M.ceil(M.random()*(d)-d2);
		var randomTop3 = M.ceil(M.random()*(d)-d2);
		T.to(NG.gameView, interval/1000, {
			top:randomTop,left:randomLeft,
			onComplete:function(){
				T.to(NG.gameView, interval/1000, {
					top:randomTop3,left:randomLeft3,
					onComplete:function(){
						T.to(NG.gameView, interval/1000, {
							top:randomTop2,left:randomLeft2,
							onComplete:function(){
								T.to(NG.gameView, interval/1000,{
									top:0,
									left:0,
									onComplete:function(){
										foo++;
										if(foo<count){ 
											doit(count,d,d2,interval); 
										}
									}
								});
							}
						});
					}
				});
			}
		});
	}
	doit(count,d,d2,interval);
}


function chloroplast(){
	if(btn.d.chloroplast===true||my.level<24){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = dru.cost.chloroplast;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Chloroplast";
	spellCastTime = castSpeedTotal(3000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("chloroplast");
	playAudio("spellCastHeal",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#chloroplast',function(){
		var spellType = "Abjuration";
		var duration = "8".fontcolor("#00ff00");
		var a=M.ceil(alterationTotal()/16);
		NG.tooltipname.innerHTML = "Chloroplast";
		NG.tooltipmsg.innerHTML = "Cost: "+green(dru.cost.chloroplast)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Chloroplast regenerates "+green(a)+" health every 3 seconds for "+duration+" minutes.";
	});
});
g.chloroplastFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	animateBuff('green','easeInBack', 25, 11, 120, 6);
	g.drawMyMp(-spellMpCost);
	Chat(("You begin to regenerate."),3);
	chloroplastStatus=true;
	chloroplastTickCount=0;
	var healAmount = M.ceil(alterationTotal()/16);
	chloroplastInterval.kill();
	chloroplastInterval = T.to('', 3, {repeat:-1, onRepeat:function(){ 
		chloroplastTick(healAmount);
	}});
	var skillName = "Chloroplast";
	var buffId = "chloroplastIcon";
	var duration = 480000;
	var spriteX = -544;
	chloroplastIconTimer.kill();
	chloroplastIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function chloroplastTick(healAmount){
	chloroplastTickCount+=1;
	g.popupHeal(healAmount);
	g.drawMyHp();
	if(chloroplastTickCount===160){ // 8 minutes?
		chloroplastInterval.kill();
		chloroplastStatus=false;
	}
}


function hurricaneReady(){
	if(D.getElementById('hurricane').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('hurricane', false);
    BGP('hurricane', "-1100% 0%");
	g.checkDruidSkills();
	refreshhurricane.kill();
}
function hurricaneTimer(){
	refreshhurricane = T.to('', .1, {repeat:-1, onRepeat:hurricaneReady});
}
function hurricane(){
	if(btn.d.hurricane===true||my.level<28){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = 0;
	currentSpell = "Hurricane";
	spellCastTime = castSpeedTotal(1500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("blue");
	animateCastBar("hurricane");
	playAudio("spellCastEvoke2",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#hurricane',function(){
		var spellType = "Conjuration";
		var CD = "18".fontcolor("#ff0000");
		var a=TTdot( (conjurationTotal()*.3)*(1+((talent7()*4.15)/100)), .85, "cold", "Hurricane");
		var value1 = "33%".fontcolor("#00ff00");
		var value2 = "15".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Hurricane";
		var s="Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Hurricane hits all targets for "+a[0]+" to "+a[1]+" cold damage every second for "+value2+" seconds.";
		if(my.talent7>=20){
			s+="<BR><BR>Hurricane has a "+green("12%")+" chance to freeze your target for "+green("3.5")+" seconds.";
		}
		s+="<BR><BR>Effect: Reduces all targets' attack speed by "+value1+" and their run speed is reduced.";
		NG.tooltipmsg.innerHTML = s;
	});
});
function chillTarget(i,d,spriteX,bypass,name){
	if(mob[i].name===""){ return; }
	if(!name){
		name = "Chilled";
	}
	mob[i].coldTimer.kill();
	mob[i].coldTimer = T.delayedCall(d/1000, function(){
		mob[i].chillStatus=false;
	});
	mob[i].chillStatus=true;
	addMobBuffIcon(name,i,"slowIcon",d,spriteX);
	if(!bypass){
		tint(i, 'cold', d/1000);
	}
}
g.hurricaneFinish=function(){
	if(endSpell()===false){ return; }
	if(GLB.videoSetting==="High"){ animateHurricane(); }
    setD('hurricane', true);
    BGP('hurricane', "-1100% -100%");
	T.delayedCall(18, hurricaneTimer);
	timerTick(D.getElementById('hurricane'),18000/1000,'hurricane');
	function hurricaneTick(hurricaneTickCount){
		for (var i=0;i<=4;i++){
			if(mob[i].name!==""){
				playAudio('blue3')
				var damage = minMax( (conjurationTotal()*.3)*(1+((talent7()*4.15)/100)), .85);
				chillTarget(i,5000,-352);
				if(my.talent7>=20){
					if(M.random()>.88){
						freezeTarget(i, 3500, -352);
					}
				}
				g.myDotDamage(damage, i, "cold", "Hurricane");
			}
		}
		hurricaneTickCount += 1;
		if(hurricaneTickCount < 15){ 
			T.delayedCall(1, function(){ 
				hurricaneTick(hurricaneTickCount);
			}); 
		}
	}
	var hurricaneTickCount = 0;
	hurricaneTick(hurricaneTickCount);
}
function animateHurricane(){
	var H1 = IMG(0, 240, 3840, 597, 'hurricane');
	H1.style.opacity=0;
	var zag = H1.cloneNode();
	zag.id="hurricaneImage";
	NG.eWin3.appendChild(zag);
	T.to(zag,7.5,{
		left:-2580,
		force3D:"auto",
		ease:ez.lin,
		onComplete:function(){
			zag.style.left='0px';
			T.to(zag,7.5,{
				force3D:"auto",
				left:-2580,
				ease:ez.lin
			});
		}
	});
	T.to(zag,2,{
		opacity:1,
		ease:ez.lin
	});
	T.to(zag,1,{
		opacity:0,
		ease:ez.lin,
		delay:14,
		onComplete:function(){
			remove(this);
		}
	});
	var zig = H1.cloneNode();
	zig.id="hurricaneImage2";
	NG.eWin3.appendChild(zig);
	T.to(zig,15,{
		left:-2580,
		force3D:"auto",
		ease:ez.sinout
	});
	T.to(zig,2,{
		opacity:1,
		ease:ez.lin
	});
	T.to(zig,1,{
		opacity:0,
		ease:ez.lin,
		delay:14,
		onComplete:function(){
			remove(this);
		}
	});
}

function sylvanGraspReady(){
	if(D.getElementById('sylvangrasp').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('sylvangrasp', false);
    BGP('sylvangrasp', "-1200% 0%");
	g.checkDruidSkills();
	refreshsylvanGrasp.kill();
}
function sylvanGraspTimer(){
	refreshsylvanGrasp = T.to('', .1, {repeat:-1, onRepeat:sylvanGraspReady});
}
function sylvanGrasp(){
	if(btn.d.sylvangrasp===true||my.level<32){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = dru.cost.sylvanGrasp;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Sylvan Creep";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("green");
	animateCastBar("sylvanGrasp");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#sylvangrasp',function(){
		var spellType = "Alteration";
		var CD = "60".fontcolor("#ff0000");
		if(my.talent8>=20){ CD=green("30"); }
		var a=TTmag( ((alterationTotal()*1.5)*(1+((talent8()*6.7)/100)) ), .9, "physical", "Sylvan Creep");
		NG.tooltipname.innerHTML = "Sylvan Creep";
		var s="Cost: "+green(dru.cost.sylvanGrasp)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Sylvan Creep hits all targets for "+a[0]+" to "+a[1]+" physical damage. All targets are snared, reducing their attack speed and casting speed.";
		if(my.talent3>0){
			var b=TTmag( (alterationTotal()/6)*((talent3()*6.5)/100), .9, "poison", "elemental");
			s+="<BR><BR>Elemental damage strikes for "+b[0]+" to "+b[1]+" poison damage every second.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.sylvanGraspFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
    setD('sylvangrasp', true);
    BGP('sylvangrasp', "-1200% -100%");
	var d=60000;
	if(my.talent8>=20){d=30000;}
	T.delayedCall(d/1000, sylvanGraspTimer);
	timerTick(D.getElementById('sylvangrasp'),d/1000,'sylvangrasp');
	g.drawMyMp(-spellMpCost);
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""){
			snareTarget(i);
			damage = minMax( ((alterationTotal()*1.5)*(1+((talent8()*6.7)/100)) )*(g.mobDefense(i)), .85);
			var sName = "Sylvan Creep";
			g.myMagicDamage("physical", damage, i, checkCrit(), sName);
			addMobBuffIcon(sName,i,"snareBuffIcon",0,-384);
			if(my.talent3>=1){
				(function(){
					var Slot = i;
					mob[Slot].sylvanCreepInterval.kill();
					mob[Slot].sylvanCreepInterval = T.to('', 1, {
						repeat:-1, 
						onRepeat:function(){ 
							sylvanCreepTick("poison", Slot); 
						}
					});
				})();
			}
		}
	}
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}
function sylvanCreepTick(mType, Slot){
	if(mob[Slot].name===""){
		mob[Slot].sylvanCreepInterval.kill(); 
		mob[Slot].snareStatus = false;
	}else{
		var dam = minMax((alterationTotal()/6)*((talent3()*6.5)/100), .9);
		g.myDotDamage(dam, Slot, mType, "Sylvan Creep");
	}
}

function volcanoReady(){
	if(D.getElementById('volcano').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('volcano', false);
    BGP('volcano', "-1300% 0%");
	g.checkDruidSkills();
	refreshvolcano.kill();
}
function volcanoTimer(){
	refreshvolcano = T.to('', .1, {repeat:-1, onRepeat:volcanoReady});
}
function volcano(){
	if(btn.d.volcano===true||my.level<38){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = 0;
	currentSpell = "Volcano";
	spellCastTime = castSpeedTotal(3000);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("red");
	animateCastBar("volcano");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#volcano',function(){
		var spellType = "Evocation";
		var CD = "60".fontcolor("#ff0000");
		if(my.talent12>=20){
			CD = "30".fontcolor("#ff0000");
		}
		var a=TTdot( evocationTotal()*.18, .82, "fire", "Volcano");
		var b=TTmag( (evocationTotal()*3.5), .5, "lightning", "Thunder Storm");
		var value1 = "10".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Volcano";
		var s="Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Volcano hits your target for "+a[0]+" to "+a[1]+" fire damage 100 times over "+value1+" seconds.";
		if(my.talent12>=20){
			s+="<BR><BR>Effect: Volcano summons a violent thunderstorm that strikes random targets 35 times for "+b[0]+" to "+b[1]+" over a long duration. Multiple thunder storms can overlap.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
function summonThunderstorm(){
	function strike(count){
		var Slot = selectRandomTarget();
		if(Slot!==undefined){
			animateLightningBlast(Slot);
			playAudio('lightning'+ ~~(M.random()*(3)+1));
			var dam = minMax( (evocationTotal()*3.5), .5);
			g.myMagicDamage("lightning", dam, Slot, false, "Thunder Storm");
		}
		if(count<35){
			T.delayedCall((M.random()*(5.5)+.5), function(){
				strike(++count);
			});
		}
	}
	T.delayedCall(3, function(){
		strike(0);
	});
}
g.volcanoFinish=function(){
	if(endSpell()===false){ return; }
    setD('volcano', true);
    BGP('volcano', "-1300% -100%");
	var d=60000;
	if(my.talent12>=20){d=30000;}
	T.delayedCall(d/1000, volcanoTimer);
	timerTick(D.getElementById('volcano'),d/1000,'volcano');
	function volcanoTick(volcanoTickCount, Slot){
		if(mob[Slot].name!==""){
			var damage = minMax(evocationTotal()*.18,.82);
			if(GLB.videoSetting==="High"){ animateVolcano(Slot); }
			g.myDotDamage(damage, Slot, "fire", "Volcano");
			playAudio("explode"+ ~~(M.random()*(3)+1));
			
		}
		volcanoTickCount++;
		if(volcanoTickCount <= 100){ 
			T.delayedCall(.1, function(){ 
				volcanoTick(volcanoTickCount, Slot);
			}); 
		}
	}
	var Slot = TGT;
	var volcanoTickCount = 0;
	cache.boulder = img("boulder", 150, 150);
	cache.fissure = img("fissure", 600, 180);
	volcanoTick(volcanoTickCount, Slot);
	if(my.talent12>=20){
		summonThunderstorm();
	}
}
function animateVolcano(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var e2 = can('fissure', 7, x2-300, 668, 0, 0, true);
	T.to(e2,1,{
		scaleX:1.25,
		scaleY:1.25
	});
	T.to(e2,1.5,{
		scaleX:.5,
		scaleY:.5,
		alpha:0,
		delay:1,
		onComplete:function(){
			cRem(7, e2);
		}
	});
	var x3 = (x2-25+M.random()*(800)-400);
	var e1 = cacheAdd(cache.boulder, 5, x2-75, 720, 1, 1);
	T.to(e1, .3,{
		y:-160,
		x:x3,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}


function rangerTrackReady(){
	if(D.getElementById('rangertrackId').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('rangertrackId', false);
    BGP('rangertrackId', "-200% -100%");
	refreshrangerTrack.kill();
}
function rangerTrackTimer(){
	refreshrangerTrack = T.to('', .1, {repeat:-1, onRepeat:rangerTrackReady});
}
$(function(){
	$NG.window3.on('mouseenter','#rangertrackId',function(){
		var CD = "3".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Track";
		NG.tooltipmsg.innerHTML = "Cooldown: "+green("180")+" Seconds<br><br>"+
		"Attempt to track your quarry to find valued targets in the zone.";
	});
});
function rangerTrack(){
	if(btn.d.rangertrackId===true){ return;}
	if(btn.d.addmonsterId===true){return;}
	if(checkBashFear()===true){ return; }
    setD('rangertrackId', true);
    BGP('rangertrackId', "-200% -300%");
	T.delayedCall(180, rangerTrackTimer);
	timerTick(D.getElementById('rangertrackId'),180000/1000,'rangertrackId');
	rangerTrackStatus=true;
	addMonster();
}


function frostStrikeReady(){
	if(D.getElementById('froststrike').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('froststrike', false);
    BGP('froststrike', "-300% 0%");
	g.checkShamanSkills();
	refreshfrostStrike.kill();
}
function frostStrikeTimer(){
	refreshfrostStrike = T.to('', .1, {repeat:-1, onRepeat:frostStrikeReady});
}
function frostStrike(){
	if(btn.d.froststrike===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	currentSpell = "Frost Strike";
	spellCastTime = castSpeedTotal(3000);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("blue");
	animateCastBar("frostStrike");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#froststrike',function(){
		var spellType = "Evocation";
		var a=TTmag( 3+(evocationTotal()*2.1), .85, "cold", "Frost Strike");
		NG.tooltipname.innerHTML = "Frost Strike";
		NG.tooltipmsg.innerHTML = "Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Frost Strike hits your target for "+a[0]+" to "+a[1]+" cold damage.";
	});
});
g.frostStrikeFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneSlam");
	if(GLB.videoSetting==="High"){ animateFrostStrike(TGT); }
	var dam = minMax( 3+(evocationTotal()*2.1), .85);
	g.myMagicDamage("cold", dam, TGT, checkCrit(), "Frost Strike");
}
function animateFrostStrike(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY;
	var x2 = (cX-100);
	var y2 = (cY-100);
	var e1 = can('frostStrike', 5, x2, y2, 200, 200, true);
	T.to(e1, .8, {
		scaleY:2,
		scaleX:2,
		alpha:0,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	particleBurst(Slot,"teal");
}

function scourgeReady(){
	if(D.getElementById('scourge').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('scourge', false);
    BGP('scourge', "-400% 0%");
	g.checkShamanSkills();
	refreshscourge.kill();
}
function scourgeTimer(){
	refreshscourge = T.to('', .1, {repeat:-1, onRepeat:scourgeReady});
}
function scourge(){
	if(btn.d.scourge===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = shm.cost.scourge;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Scourge";
	spellType = "conjuration";
	playAudio("spellDoneHeal");
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	animateDot(Slot,'green',280,150,10,-250,ez.Qin,25,5,100,1.2);
	spellDamage = minMax(1+conjurationTotal()*.42,.9);
	var mType="poison";
	Chat((mob[Slot].name+" sweats and shivers, looking feverish."),3);
	// str/def effect
	var zig = my.level;
	if(zig>50){ zig = 50; }
	if(mob[Slot].scourgeStatus===false){
		mob[Slot].scourgeStatus=true;
	}
	mob[Slot].scourgeTickCount=1;
	mob[Slot].scourgeTick=spellDamage;
	mob[Slot].scourgeTickInterval.kill();
	mob[Slot].scourgeTickInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		scourgeTick(Slot, mType); 
	}});
	var buffId = "scourgeIcon";
	var duration = 18000;
	var spriteX = -128;
	addMobBuffIcon("Scourge",Slot,buffId,duration,spriteX);
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	beginGlobalCooldown();
	checkSpellLevelUp();
}
$(function(){
	$NG.window3.on('mouseenter','#scourge',function(){
		var spellType = "Conjuration";
		var CD = "5".fontcolor("#ff0000");
		var a=TTdot( 1+conjurationTotal()*.42, .9, "poison", "Scourge");
		var value1 = ( "12%").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Scourge";
		var s="Cost: "+green(shm.cost.scourge)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Scourge ticks for "+a[0]+" to "+a[1]+" poison damage every second for 18 seconds.<br><br>";
		s+="Effect: Decreases your target's physical damage and increases physical damage received by "+value1+".";
		NG.tooltipmsg.innerHTML = s;
	});
});
function scourgeTick(Slot,mType){
	if(mob[Slot].name===""){ 
		mob[Slot].scourgeTickInterval.kill(); 
		mob[Slot].scourgeTickCount=0; 
		mob[Slot].scourgeStatus=false; 
		return; 
	}
	g.myDotDamage(mob[Slot].scourgeTick, Slot, mType, "Scourge");
	mob[Slot].scourgeTickCount+=1;
	if(mob[Slot].scourgeTickCount===19){ 
		mob[Slot].scourgeTickInterval.kill(); 
		mob[Slot].scourgeTickCount=0; 
	}
}


function shmHealingReady(){
	if(D.getElementById('shmhealing').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('shmhealing', false);
    BGP('shmhealing', "-500% 0%");
	g.checkShamanSkills();
	refreshshmHealing.kill();
}
function shmHealingTimer(){
	refreshshmHealing = T.to('', .1, {repeat:-1, onRepeat:shmHealingReady});
}
function shmHealing(){
	if(btn.d.shmhealing===true||my.level<3){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = shm.cost.greaterHealing;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Greater Healing";
	spellCastTime = castSpeedTotal(2000);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("blue");
	animateCastBar("shmHealing");
	playAudio("spellCastHeal",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#shmhealing',function(){
		var spellType = "Alteration";
		var CD = "7".fontcolor("#ff0000");
		var a=TTheal( (alterationTotal()*1.8), .9);
		NG.tooltipname.innerHTML = "Greater Healing";
		NG.tooltipmsg.innerHTML = "Cost: "+green(shm.cost.greaterHealing)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Greater Healing heals for "+a[0]+" to "+a[1]+" hit points.";
	});
});
g.shmHealingFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	animateHealing('blue');
    setD('shmhealing', true);
    BGP('shmhealing', "-500% -100%");
	T.delayedCall(7, shmHealingTimer);
	timerTick(D.getElementById('shmhealing'),7000/1000,'shmhealing');
	var healAmount = minMax((alterationTotal()*1.8),.9);
	g.popupHeal(healAmount);	
	g.drawMyMp(-spellMpCost);
}
function animateHealing(color,orb,total){
	if(!color){ color='teal'; }
	if(orb===undefined){ 
		orb=true; 
		flashScreen(color,.2,1);
	}
	if(!total||total>60){ total=partAdj(60); }
	if(GLB.videoSetting!=="High"){ return; }
	var s2 = img(color+"particle50");
	function doIt(count){
		var spread=M.pow(M.random()*(24),2);
		if(M.random()>.5){
			var x = (640-spread);
		}else{
			var x = (640+spread);
		}
		var p1 = cacheAdd(s2, 5, x, 0);
		T.to(p1, M.random()*(1)+.5, {
			y: (M.random()*(200)+100),
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<total){ 
			T.delayedCall(.01, function(){ 
				doIt(++count);
			}); 
		}
	}
	doIt(0);
	if(orb===true){
		var e1 = can(color+"Light3", 5, 640, 720, 2560, 1544, true);
		T.to(e1, 1.5, {
			alpha:0,
			ease:ez.Qin,
			onComplete:function(){
				cRem(5, e1);
			}
		});
	}
}

function callOfTheAncients(){
	if(btn.d.calloftheancients===true||my.level<5){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = shm.cost.callOfTheAncients;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Call of the Ancients";
	spellCastTime = castSpeedTotal(3000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("purple");
	animateCastBar("callOfTheAncients");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#calloftheancients',function(){
		var spellType = "Abjuration";
		var duration = "24".fontcolor("#00ff00");
		var minimum = ( M.ceil( (1+abjurationTotal()*.15)*(1+(talent9()*.026)) )+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Call of the Ancients";
		var s="Cost: "+green(shm.cost.callOfTheAncients)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs your strength, stamina, agility, dexterity, and wisdom by "+minimum+" for "+duration+" minutes.";
		if(my.talent9>=20){
			s+="<BR><BR>While Call of the Ancients is active, your attack haste is enhanced by "+green("42%")+".";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.callOfTheAncientsFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You are strengthened by the might of your ancestors."),3);
	if(callOfTheAncientsStatus===true){
		strBuff-=callOfTheAncientsStr;
		staBuff-=callOfTheAncientsSta;
		agiBuff-=callOfTheAncientsAgi;
		dexBuff-=callOfTheAncientsDex;
		wisBuff-=callOfTheAncientsWis;
	}
	callOfTheAncientsTimeout.kill(); 
	callOfTheAncientsTimeout = T.delayedCall(1440, callOfTheAncientsExpire);
	var bonus = M.ceil( (1+abjurationTotal()*.15)*(1+(talent9()*.026)) );
	callOfTheAncientsStr = bonus
	callOfTheAncientsSta = bonus
	callOfTheAncientsAgi = bonus
	callOfTheAncientsDex = bonus
	callOfTheAncientsWis = bonus
	strBuff+=callOfTheAncientsStr;
	staBuff+=callOfTheAncientsSta;
	agiBuff+=callOfTheAncientsAgi;
	dexBuff+=callOfTheAncientsDex;
	wisBuff+=callOfTheAncientsWis;
	callOfTheAncientsStatus=true;
	g.drawMyHp();
	CStat();
	var buffId = "callOfTheAncientsIcon";
	var d = 1440000;
	callOfTheAncientsIconTimer.kill();
	callOfTheAncientsIconTimer = T.delayedCall(d/1000, function(){ removeIcon(buffId); });
	addBuffIcon("Call of the Ancients",buffId,d,-448);
	animateBuff('purple','easeInBack', 5, 25, 120, 4);
}
function animateBuff(color, easing, startSize, endSize, total, d){
	if(GLB.videoSetting!=="High"){ return; }
	if(!color){ color="blue"; }
	if(!easing){ easing="easeInBack"; }
	if(!startSize){ startSize=5; }
	startSize=25;
	if(!endSize){ endSize=5; }
	endSize=5;
	if(!total||total>80){ total=partAdj(80); }
	d=2.5;
	var s2 = img(color+"particle50"); // fix!
	var diff=M.ceil(endSize/2);
	var ez1=ez.Bin;
	var ez2=ez.Qout;
	function doIt(count){
		var x1=(M.random()*(1480)-100);
		var y1=(M.random()*(550)-100);
		var p1 = cacheAdd(s2, 6, x1, y1, .4, .4);
		var d2=M.random()*(d-(d/3))+d/3;
		T.to(p1, d2, {
			ease:ez2,
			bezier:{
				curviness:1.5,
				values:[
					{
						x:(320+(M.random()*640)),
						y:(668+(M.random()*150))
					},{
						x:640-diff,
						y:778-diff
					}
				]
			}
		});
		T.to(p1, d2, {
			ease:ez1,
			scaleX:1,
			scaleY:1,
			onComplete:function(){
				cRem(6, p1);
			}
		});
		if(count<total){ doIt(++count); }
	}
	doIt(0);
	var e1 = can(color+"Light3", 5, 640, 720, 2560, 1544, true);
	T.to(e1, 2, {
		scaleX:0,
		scaleY:0,
		alpha:0,
		ease:ez.Qin,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}
function callOfTheAncientsExpire(){
	callOfTheAncientsStatus=false;
	strBuff-=callOfTheAncientsStr;
	staBuff-=callOfTheAncientsSta;
	agiBuff-=callOfTheAncientsAgi;
	dexBuff-=callOfTheAncientsDex;
	wisBuff-=callOfTheAncientsWis;
	CStat();
	g.drawMyHp();
}


function togorsInsectsReady(){
	if(D.getElementById('togorsinsects').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('togorsinsects', false);
    BGP('togorsinsects', "-600% 0%");
	g.checkShamanSkills();
	refreshtogorsInsects.kill();
}
function togorsInsectsTimer(){
	refreshtogorsInsects = T.to('', .1, {repeat:-1, onRepeat:togorsInsectsReady});
}
function togorsInsects(){
	if(btn.d.togorsinsects===true||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = shm.cost.togorsInsects;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Togor's Insects";
	spellCastTime = castSpeedTotal(2500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesUp("white");
	animateCastBar("togorsInsects");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#togorsinsects',function(){
		var spellType = "Alteration";
		var CD = "20".fontcolor("#ff0000");
		var value1 = ( ((alterationTotal()/5)*42) /30.3).toFixed(1);
		var target="your target";
		if(my.talent2>=20){ target="all targets"; }
		value1 = (value1+"%").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Togor's Insects";
		var s="Cost: "+green(shm.cost.togorsInsects)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Togor's Insects slows the attack speed of "+target+" by two seconds for 60 seconds.";
		if(my.talent2>=1){
			var a=TTdot( (alterationTotal()*(1+(talent2()*.165)))/20, .9, "poison", "Togor's Pestilence");
			s+="<BR><BR>Togor's Pestilence plagues your target for "+a[0]+" to "+a[1]+" poison damage every seconds over 50 seconds.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
function executeTogorsEffect(Slot,buffId,d){
	mob[Slot].slowStatus=true;
	Chat((mob[Slot].name+" yawns."),3);
	mob[Slot].togorsInsectsTimeout.kill();
	mob[Slot].togorsInsectsTimeout = T.delayedCall(d/1000, function(){ 
		togorsInsectsExpire(Slot) 
	});
	addMobBuffIcon("Togor's Insects",Slot,buffId,d,-192);
}
g.togorsInsectsFinish=function(){
	if(endSpell()===false){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	playAudio("spellDoneHeal");
    setD('togorsinsects', true);
    BGP('togorsinsects', "-600% -100%");
	T.delayedCall(20, togorsInsectsTimer);
	timerTick(D.getElementById('togorsinsects'),20000/1000,'togorsinsects');
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	var buffId = "slowIcon";
	var d=60000;
	var dam = minMax( (alterationTotal()*(1+(talent2()*.165)))/20, .9);
	if(my.talent2>=20){
		for(var i=0;i<=4;i++){
			if(mob[i].name){
				if(GLB.videoSetting==="High"){ animateDot(i,"white"); }
				executeTogorsEffect(i,buffId,d);
				executeDot(i, dam, 50, 1000, "poison", "Togor's Pestilence", "togorsPestilence",-192, -32, true);
			}
		}
	}else{
		if(GLB.videoSetting==="High"){ animateDot(Slot,"white"); }
		executeTogorsEffect(Slot,buffId,d);
		if(my.talent2>=1){
			executeDot(Slot, dam, 50, 1000, "poison", "Togor's Pestilence", "togorsPestilence",-192, -32, true);
		}
	}
}
function executeDot(Slot, dam, ticks, interval, mType, spellName, buffId, spriteX, spriteY, stack){
	function doit(count){
		if(mob[Slot].name===""||count>ticks){
			return;
		}
		if(spellName==="Chill of Death"&&mob[Slot].fearStatus===false){
			removeMobIcon(buffId,i);
			return;
		}
		g.myDotDamage(dam, Slot, mType, spellName);
		T.delayedCall(interval/1000, function(){
			doit(++count);
		});
	}
	T.delayedCall(interval/1000, function(){
		doit(1);
	});
	var d=ticks*interval;
	if(buffId){
		if(!spriteY){ spriteY=0; }
		if(!stack){ stack=false; }
		addMobBuffIcon(spellName,Slot,buffId,d,spriteX,spriteY,false,stack);
	}
}
function animateDot(Slot, color, spread, total, interval, distance, easeType, startSize, endSize, startY, d){
	if(GLB.videoSetting!=="High"){ return; }
	if(startSize===undefined){ startSize=3; }
	if(endSize===undefined){ endSize=15; }
	if(startY===undefined){ startY=0; }
	if(!d){ d=.6; }
	var diff=M.ceil((endSize-startSize)/2);
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY+startY);
	function doit(count){
		var x3 = x2+(M.random()*(spread)-(spread/2));
		var y3 = y2+(M.random()*(spread)-(spread/2));
		var p1 = can(color+"particle50", 5, x3, y3, startSize, startSize);
		T.to(p1, d, {
			scaleX:endSize/25,
			scaleY:endSize/25,
			x:x3-diff,
			y:y3+distance,
			ease:easeType,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(++count<total){ 
			T.delayedCall(interval, function(){ 
				doit(count);
			}); 
		}
	}
	if(!spread){
		spread=200;
	}
	if(!total){
		total=30;
	}
	if(total>50){
		total=50;
	}
	if(!interval){
		interval=25;
	}
	interval = interval/1000;
	if(!distance){
		distance=12;
	}
	if(!easeType){
		easeType=ez.Qout;
	}
	doit(0);
}
function togorsInsectsExpire(Slot){
	mob[Slot].togorsInsectsTimeout.kill();
	mob[Slot].slowStatus=false;
}


function cannibalizeReady(){
	if(D.getElementById('cannibalize').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('cannibalize', false);
    BGP('cannibalize', "-700% 0%");
	g.checkShamanSkills();
	refreshcannibalize.kill();
}
function cannibalizeTimer(){
	refreshcannibalize = T.to('', .1, {repeat:-1, onRepeat:cannibalizeReady});
}
$(function(){
	$NG.window3.on('mouseenter','#cannibalize',function(){
		var CD = "45".fontcolor("#ff0000");
		var minimum = ( M.round(my.maxHp*.18)+"").fontcolor("#00ff00");
		var maximum = ( M.round(my.maxHp*.33)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Cannibalize";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Cannibalize sacrifices "+minimum+" health for "+maximum+" mana.";
	});
});
function cannibalize(){
	if(btn.d.cannibalize===true||my.level<11){return;}
	if(checkBashFear()===true){ return; }
	if(my.hp < M.round(my.maxHp*.18) ){ return; }
    setD('cannibalize', true);
    BGP('cannibalize', "-700% -100%");
	T.delayedCall(45, cannibalizeTimer);
	timerTick(D.getElementById('cannibalize'),45000/1000,'cannibalize');
	var healAmount=M.round(my.maxHp*.18);
	my.hp-=healAmount;
	if(my.hp<0){ my.hp = 1; }
	var mpAmount=M.round(my.maxHp*.33);
	my.mp+=mpAmount;
	g.drawMyHp();
	g.drawMyMp();
	Chat(("Your body aches as your mind clears."),3);
	beginGlobalCooldown();
	if(GLB.videoSetting==="High"){ animateCannibalize(); }
	playAudio("spellDoneSlam");
}
function animateCannibalize(){
	flashScreen("#b55555",.3,.6);
	var c3 = img("redparticle50");
	function doIt(count){
		var x = (M.random()*(320)+M.random()*(320)+M.random()*(320)+M.random()*(320));
		var ranY = (M.random()*(250)+197);
		var ranX = 0;
		if(x>640){
			ranX+=300;
		}else{
			ranX-=300;
		}
		var d = M.random()*(1500)+250;
		var e3 = cacheAdd(c3, 5, x, 720);
		T.to(e3, d/1000, {
			scaleX:.1,
			scaleY:.1,
			y:ranY,
			onComplete:function(){
				cRem(5, e3);
			}
		});
		T.to(e3, d/1000, {
			x:(x+8+ranX)
		});
		if(count<50){ 
			T.delayedCall(.015, function(){ 
				doIt(++count);
			}); 
		}
	}
	doIt(0);
	var c2 = img("redLight3", 400, 400);
	for(var i=0;i<=2;i++){
		var e1 = cacheAdd(c2, 5, 640, 720, 2560/400, 1544/400, true);
		tween.cannibalize(e1);
	}
}
tween.cannibalize = function(e1){
	T.to(e1, 2, {
		alpha:0,
		scaleX:0,
		scaleY:0,
		ease:ez.Qin,
		onComplete:function(){
			cRem(5, e1);
		}
	});
}


function poisonNovaReady(){
	if(D.getElementById('poisonnova').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('poisonnova', false);
    BGP('poisonnova', "-900% 0%");
	g.checkShamanSkills();
	refreshpoisonNova.kill();
}
function poisonNovaTimer(){
	refreshpoisonNova = T.to('', .1, {repeat:-1, onRepeat:poisonNovaReady});
}
function poisonNova(){
	if(btn.d.poisonnova===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = shm.cost.poisonNova;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Poison Nova";
	spellCastTime = castSpeedTotal(1500);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("green");
	animateCastBar("poisonNova");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#poisonnova',function(){
		var spellType = "Evocation";
		var CD = "6".fontcolor("#ff0000");
		var a=TTmag( evocationTotal()*2.4, .9, "poison", "Poison Nova");
		var b=TTdot( conjurationTotal()/3.3, .9, "poison", "Blighted Breath");
		NG.tooltipname.innerHTML = "Poison Nova";
		var s="Cost: "+green(shm.cost.poisonNova)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Second<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Poison Nova hits all targets for "+a[0]+" to "+a[1]+" poison damage.";
		if(my.talent6>=20){
			s+="<BR><BR>Poison Nova does an additional "+b[0]+" to "+b[1]+" poison damage every second over six seconds.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.poisonNovaFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("poisonnova");
	animateNova('poisonNova');
    setD('poisonnova', true);
    BGP('poisonnova', "-900% -100%");
	T.delayedCall(6, poisonNovaTimer);
	timerTick(D.getElementById('poisonnova'),6000/1000,'poisonnova');
	g.drawMyMp(-spellMpCost);
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""){
			if(my.talent6>=20){
				var dam=minMax(conjurationTotal()/3.3, .9);
				executeDot(i, dam, 6, 1000, "poison", "Blighted Breath", "blightedBreath", -288);
			}
			var dam = minMax(evocationTotal()*2.4,.9);
			g.myMagicDamage("poison", dam, i, checkCrit(), "Poison Nova");
		}
	}
}

function enstillReady(){
	if(D.getElementById('enstill').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('enstill', false);
    BGP('enstill', "-800% 0%");
	g.checkShamanSkills();
	refreshenstill.kill();
}
function enstillTimer(){
	refreshenstill = T.to('', .1, {repeat:-1, onRepeat:enstillReady});
}
function enstill(){
	if(btn.d.enstill===true||my.level<17){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = shm.cost.enstill;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Enstill";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("green");
	animateCastBar("enstill");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#enstill',function(){
		var spellType = "Alteration";
		var CD = "9".fontcolor("#ff0000");
		var a=TTdot( (alterationTotal()*(1+(talent3()*.235)))/20, .9, "poison", "elemental");
		var b=TTheal( (alterationTotal()-50)/8, .75);
		NG.tooltipname.innerHTML = "Enstill";
		var s="Cost: "+green(shm.cost.enstill)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Enstill roots your target, leaving them unable to physically attack you.";
		if(my.talent3>0){
			s+="<BR><BR>Enstill plagues your target for "+a[0]+" to "+a[1]+" poison damage every second that root is active.";
			if(my.talent3>=20){
				s+="<BR><BR>If root is active when a target is slain, you recover "+a[0]+" to "+a[1]+" health and mana.";
			}
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.enstillFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
    setD('enstill', true);
    BGP('enstill', "-800% -100%");
	T.delayedCall(9, enstillTimer);
	timerTick(D.getElementById('enstill'),9000/1000,'enstill');
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	if(checkRootImmune(Slot)===true){
		Chat((mob[TGT].name+" is immune to Enstill."),1);
		return;
	}
	if(statusResist(Slot)===true){
		Chat((mob[Slot].name+" resisted Enstill."),1);
		return;
	}
	Chat((mob[Slot].name+" is rooted."),3);
	var rootFlag = true;
	stopMob(Slot);
	mob[Slot].rootStatus=4;
	$("#rootIcon"+Slot+",#rootBuffIcon"+Slot).remove();
	animateRoot(Slot, rootFlag);
	var buffId = "rootBuffIcon";
	var duration = 0;
	var spriteX = -256;
	addMobBuffIcon("Enstill",Slot,buffId,duration,spriteX);
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
}

function shmSow(){
	if(btn.d.shmsow===true||my.level<15){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = shm.cost.spiritOfTheWolf;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Spirit of the Wolf";
	spellCastTime = castSpeedTotal(3500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("shmSow");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#shmsow',function(){
		var spellType = "Alteration";
		var duration = "40".fontcolor("#00ff00");
		var minimum = 15;
		if(my.talent11>0){
			minimum=15+(15*((talent11()*5.8)/100));
			minimum=minimum.toFixed(1);
		}
		NG.tooltipname.innerHTML = "Spirit of the Wolf";
		NG.tooltipmsg.innerHTML = "Cost: "+green(shm.cost.spiritOfTheWolf)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Buffs your attack power by "+green(minimum+"%")+" and your chance to run from battle for "+duration+" minutes.";
	});
});
g.shmSowFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	animateBuff('teal','easeInSine', 5, 15, 100, 3);
	g.drawMyMp(-spellMpCost);
	Chat(("You are surrounded by a brief lupine aura."),3);
	spiritOfTheWolfTimeout.kill();
	spiritOfTheWolfTimeout = T.delayedCall(2400, shmSowExpire);
	sowStatus=true;
	CStat();
	var buffId = "spiritOfTheWolfIcon";
	var d = 2400000;
	spiritOfTheWolfIconTimer.kill();
	spiritOfTheWolfIconTimer = T.delayedCall(d/1000, function(){ removeIcon(buffId); });
	addBuffIcon("Spirit of the Wolf",buffId,d,-512);
}
function shmSowExpire(){
	sowStatus=false;
	CStat();
}

function afflictionReady(){
	if(D.getElementById('affliction').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('affliction', false);
    BGP('affliction', "-1000% 0%");
	g.checkShamanSkills();
	refreshaffliction.kill();
}
function afflictionTimer(){
	refreshaffliction = T.to('', .1, {repeat:-1, onRepeat:afflictionReady});
}
function affliction(){
	if(btn.d.affliction===true||my.level<20){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = shm.cost.affliction;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Affliction";
	spellCastTime = castSpeedTotal(2500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("affliction");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#affliction',function(){
		var spellType = "Conjuration";
		var a=TTdot( conjurationTotal()*.53, .9, "poison", "Affliction");
		var value1 = ("10%").fontcolor("#00ff00");
		var target="your target";
		if(my.talent7>=20){
			target="three targets";
		}
		NG.tooltipname.innerHTML = "Affliction";
		NG.tooltipmsg.innerHTML = "Cost: "+green(shm.cost.affliction)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Affliction hits "+target+" and ticks for "+a[0]+" to "+a[1]+" poison damage every second for 24 seconds.<br><br>"+
		"Effect: Increases all arcane damage by "+value1+".";
	});
});
g.afflictionFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	var d = 24000;
	if(my.talent7>=20){
		for(var i=0;i<=4;i++){
			if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
				var Slot = i;
				if(mob[Slot].name){
					afflictionTarget(Slot,d);
				}
			}
		}
	}else{
		afflictionTarget(Slot,d);
	}
}
function afflictionTarget(Slot,d){
	animateDot(Slot,'green',300,50,20,100,ez.Qin,5,15,-50,1.1);
	spellDamage = minMax(conjurationTotal()*.53, .9);
	mob[Slot].afflictionTick=spellDamage;
	Chat((mob[Slot].name+"'s constitution is wracked by pestilence."),3);
	mob[Slot].afflictionTickCount=1;
	mob[Slot].afflictionStatus=true;
	mob[Slot].afflictionTickInterval.kill();
	mob[Slot].afflictionTickInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		afflictionTick(Slot, "poison"); 
	}});
	addMobBuffIcon("Affliction",Slot,"afflictionIcon",d,-320);
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}

function afflictionTick(Slot, mType){
	if(mob[Slot].name===""){ mob[Slot].afflictionTickInterval.kill(); mob[Slot].afflictionTickCount=0; mob[Slot].afflictionStatus=false; return; }
	g.myDotDamage(mob[Slot].afflictionTick, Slot, mType, "Affliction");
	mob[Slot].afflictionTickCount+=1;
	if(mob[Slot].afflictionTickCount===25){ mob[Slot].afflictionTickInterval.kill(); mob[Slot].afflictionTickCount=0; mob[Slot].afflictionStatus=false; }
}


function reclaimBloodReady(){
	if(D.getElementById('reclaimblood').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('reclaimblood', false);
    BGP('reclaimblood', "-1100% 0%");
	g.checkShamanSkills();
	refreshreclaimBlood.kill();
}
function reclaimBloodTimer(){
	refreshreclaimBlood = T.to('', .1, {repeat:-1, onRepeat:reclaimBloodReady});
}
function reclaimBlood(){
	if(btn.d.reclaimblood===true||my.level<24){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = shm.cost.reclaimBlood;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Reclaim Blood";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("red");
	animateCastBar("reclaimBlood");
	playAudio("spellCastHeal",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#reclaimblood',function(){
		var spellType = "Alteration";
		var CD = "45".fontcolor("#ff0000");
		var a=TTheal( (alterationTotal()/5.7)*(1+(talent12()*.024)), .9);
		var duration = "21".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Reclaim Blood";
		var s="Cost: "+green(shm.cost.reclaimBlood)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Reclaim Blood regenerates "+a[0]+" to "+a[1]+" health every 3 seconds for "+duration+" seconds.";
		if(my.talent12>=20){
			s+="<BR><BR>Effect: Reclaim Blood triggers Bloodlust. Bloodlust reduces all spellcasting time by "+green("60%")+" and enhances all physical damage by "+green("60%")+".";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.reclaimBloodFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	if(GLB.videoSetting==="High"){ animateReclaimBlood(TGT); }
    setD('reclaimblood', true);
    BGP('reclaimblood', "-1100% -100%");
	T.delayedCall(45, reclaimBloodTimer);
	timerTick(D.getElementById('reclaimblood'),45000/1000,'reclaimblood');
	g.drawMyMp(-spellMpCost);
	Chat(("You reclaim the lifeblood of fallen spirits."),3);
	reclaimBloodTickCount=0;
	var healAmount = minMax( (alterationTotal()/5.7)*(1+(talent12()*.024)), .9);
	reclaimBloodInterval.kill();
	reclaimBloodInterval = T.to('', 3, {repeat:-1, onRepeat:function(){ 
		reclaimBloodTick(healAmount); 
	}});
	var buffId = "reclaimBloodIcon";
	var d = 21000;
	addBuffIcon("Reclaim Blood",buffId,d,-352);
	if(my.talent12>=20){
		bloodlustStatus=true;
		var d=10000;
		addBuffIcon("Bloodlust","bloodlust",d,-352,-32);
		T.delayedCall(d/1000, function(){
			bloodlustStatus=false;
		});
	}
}
function animateReclaimBlood(Slot){
	for(var i=0;i<=50;i++){
		var X1 = ~~(M.random()*(1280));
		var Y2 = ~~(M.random()*(50)+300);
		var sX = ~~(M.random()*(20)+5);
		if(sX<10){
			Y1 = 510;
		} else if(sX>=10&&sX<15){
			Y1 = 530;
		} else if(sX>=15&&sX<20){
			Y1 = 560;
		}else{
			Y1 = 595;
		}
		if(sX<15){
			var p1 = can('redparticle50', 5, X1, Y1, 25, 25);
			T.to(p1,(M.random()*(2)+.5),{
				y:Y2,
				ease:ez.sinout,
				scaleX:0,
				scaleY:0,
				onComplete:function(){
					cRem(5, p1);
				}
			});
		}else{
			var p1 = can('redparticle50', 5, X1, Y1, 25, 25);
			T.to(p1,(M.random()*(2)+.5),{
				y:Y2,
				scaleX:0,
				scaleY:0,
				ease:ez.sinout,
				onComplete:function(){
					cRem(5, p1);
				}
			});
		}
	}
}
function reclaimBloodTick(healAmount){
	reclaimBloodTickCount+=1;
	g.popupHeal(healAmount);
	if(reclaimBloodTickCount===7){
		reclaimBloodInterval.kill();
	}
}

function talismanOfAltuna(){
	if(btn.d.talismanofaltuna===true||my.level<32){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = shm.cost.talismanOfAltuna;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Talisman of Trogmaar";
	spellCastTime = castSpeedTotal(3000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("talismanOfAltuna");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#talismanofaltuna',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.77)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Talisman of Trogmaar";
		NG.tooltipmsg.innerHTML = "Cost: "+green(shm.cost.talismanOfAltuna)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Talisman of Trogmaar buffs your hit points by "+minimum+" for "+duration+" minutes.";
	});
});
g.talismanOfAltunaFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	animateBuff('green','easeInBack', 5, 25, 150, 5);
	g.drawMyMp(-spellMpCost);
	Chat(("You feel tough."),3);
	if(talismanOfAltunaStatus===true){ maxHpBuff-=talismanOfAltunaBoost; }
	talismanOfAltunaTimeout.kill();
	talismanOfAltunaTimeout = T.delayedCall(3240, talismanOfAltunaExpire);
	talismanOfAltunaBoost = M.ceil(abjurationTotal()*.77);
	maxHpBuff+=talismanOfAltunaBoost;
	talismanOfAltunaStatus=true;
	CStat();
	g.drawMyHp();
	var skillName = "Talisman of Trogmaar";
	var buffId = "talismanOfAltunaIcon";
	var duration = 3240000;
	var spriteX = -544;
	talismanOfAltunaIconTimer.kill();
	talismanOfAltunaIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function talismanOfAltunaExpire(){
	talismanOfAltunaStatus=false;
	maxHpBuff-=talismanOfAltunaBoost;
	CStat();
	g.drawMyHp();
}


function glacialImpactReady(){
	if(D.getElementById('glacialimpact').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} 
	if(bashStatus===0||fearStatus===0){ return; }
	setD('glacialimpact', false);
	BGP('glacialimpact', "-1200% 0%");
	g.checkShamanSkills();
	glacialImpactMight.kill();
}
function glacialImpactTimer(){
	glacialImpactMight = T.to('', .1, {repeat:-1, onRepeat:glacialImpactReady});
}
function glacialImpact(){
	if(btn.d.glacialimpact===true||my.level<28){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = shm.cost.glacialImpact;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Glacial Impact";
	spellCastTime = castSpeedTotal(1500);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateCastBar("glacialImpact");
	animateParticlesDown("teal");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#glacialimpact',function(){
		var spellType = "Evocation";
		var CD = "20".fontcolor("#ff0000");
		var freezeD = 7;
		if(Set.Mendicant>=6){ freezeD += 5; }
		var a=TTmag( evocationTotal()*2.3, .9, "cold", "Glacial Impact");
		var value1 = "25%".fontcolor("#00ff00");
		var target="your target";
		if(my.talent4>=20){
			target="three targets";
		}
		NG.tooltipname.innerHTML = "Glacial Impact";
		NG.tooltipmsg.innerHTML = "Cost: "+green(shm.cost.glacialImpact)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Glacial Impact hits "+target+" for "+a[0]+" to "+a[1]+" cold damage<br><br>"+
		"Effect: Freezes your target in place for "+green(freezeD)+" seconds. Frozen targets take "+value1+" more damage.";
	});
});
g.glacialImpactFinish=function(Slot, shmProc){
	if(endSpell()===false&&!shmProc){ return; }
	playAudio("spellDoneSlam");
	if(!shmProc){
		var d=20000;
		if(my.talent7>=20){ d=10000; }
		setD('glacialimpact', true);
		BGP('glacialimpact', "-1200% -100%");
		T.delayedCall(d/1000, glacialImpactTimer);
		timerTick(D.getElementById('glacialimpact'),d/1000,'glacialimpact');
		g.drawMyMp(-spellMpCost);
	}
	if(Slot===undefined){
		Slot = TGT;
	}
	var freezeD=7000;
    if(Set.Mendicant>=6){ freezeD += 5000; }
	if(my.talent4>=20){
		for(var i=0;i<=4;i++){
			if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
				freezeTarget(i, freezeD, -384);
				var dam = minMax(evocationTotal()*2.3,.9);
				g.myMagicDamage("cold", dam, i, checkCrit(), "Glacial Impact");
			}
		}	
	}else{
		freezeTarget(Slot, freezeD, -384);
		var dam = minMax(evocationTotal()*2.3,.9);
		g.myMagicDamage("cold", dam, Slot, checkCrit(), "Glacial Impact");
	}
}


function devouringPlagueReady(){
	if(D.getElementById('devouringplague').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('devouringplague', false);
    BGP('devouringplague', "-1300% 0%");
	g.checkShamanSkills();
	refreshdevouringPlague.kill();
}
function devouringPlagueTimer(){
	refreshdevouringPlague = T.to('', .1, {repeat:-1, onRepeat:devouringPlagueReady});
}
function devouringPlague(){
	if(btn.d.devouringplague===true||my.level<38){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = shm.cost.devouringPlague;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Devouring Plague";
	spellCastTime = castSpeedTotal(1500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("purple");
	animateCastBar("devouringPlague");
	playAudio("spellDoneFlames",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#devouringplague',function(){
		var spellType = "Conjuration";
		var CD = "90".fontcolor("#ff0000");
		var a=TTdot( conjurationTotal()*.36, .9, "poison", "Devouring Plague");
		var value1 = "30%".fontcolor("#00ff00");		
		var v2='';
		if(my.talent8>=20){
			v2=" and "+green("10%")+" of the damage as mana";
		}
		NG.tooltipname.innerHTML = "Devouring Plague";
		NG.tooltipmsg.innerHTML = "Cost: "+green(shm.cost.devouringPlague)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Devouring Plague ticks for "+a[0]+" to "+a[1]+" poison damage every 3 seconds for 27 seconds. Devouring Plague spreads to adjacent targets.<br><br>"+
		"Effect: Absorb "+value1+" of the damage as health"+v2+".";
	});
});
g.devouringPlagueFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	animateDot(TGT,'purple',320,20,45,-180,ez.sin,7,12,100,.8);
    setD('devouringplague', true);
    BGP('devouringplague', "-1300% -100%");
	T.delayedCall(90, devouringPlagueTimer);
	timerTick(D.getElementById('devouringplague'),90000/1000,'devouringplague');
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	Chat((mob[Slot].name+" is infected with a voracious plague."),3);
	// str/def effect
	mob[Slot].devouringPlagueTickCount=1;
	for (var i=0;i<=4;i++){
		spellDamage = minMax(conjurationTotal()*.36, .9);
		mob[i].devouringPlagueTick=spellDamage;
	}
	mob[Slot].devouringPlagueInterval.kill();
	mob[Slot].devouringPlagueInterval = T.to('', 3, {repeat:-1, onRepeat:function(){ 
		devouringPlagueTick(Slot, "poison"); 
	}});
	addMobBuffIcon("Devouring Plague",Slot,"devouringPlagueIcon",24000,-416);
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}
function devouringPlagueTick(Slot, mType){
	if(mob[Slot].name===""){
		mob[Slot].devouringPlagueInterval.kill();
		mob[Slot].devouringPlagueTickCount=0;
		return;
	}
	animateDot(TGT,'purple',320,20,45,-180,ez.sin,7,12,100,.8);
	g.myDotDamage(mob[Slot].devouringPlagueTick, Slot, "poison", "Devouring Plague");
	mob[Slot].devouringPlagueTickCount+=1;
	var buffId = "devouringPlagueIcon";
	var d = 24000-(mob[Slot].devouringPlagueTickCount*3000-3000);
	//spread left
	if(Slot-1 > -1&&mob[Slot-1].devouringPlagueTickCount===0){
		if(mob[Slot-1].name!==""){
			mob[Slot-1].devouringPlagueTickCount= mob[Slot].devouringPlagueTickCount;
			mob[Slot-1].devouringPlagueInterval = T.to('', 3, {repeat:-1, onRepeat:function(){
				devouringPlagueTick(Slot-1, "poison");
			}});
		addMobBuffIcon("Devouring Plague",Slot-1,buffId,d,-416);
			if(mob[Slot-1].devouringPlagueTickCount===9){
				mob[Slot-1].devouringPlagueInterval.kill();
				mob[Slot-1].devouringPlagueTickCount=0;
			}
		}
	}
	//spread right
	if(Slot+1 < 5&&mob[Slot+1].devouringPlagueTickCount===0){
		if(mob[Slot+1].name!==""){
			mob[Slot+1].devouringPlagueTickCount=mob[Slot].devouringPlagueTickCount;
			mob[Slot+1].devouringPlagueInterval = T.to('', 3, {repeat:-1, onRepeat:function(){
				devouringPlagueTick(Slot+1, "poison");
			}});
		addMobBuffIcon("Devouring Plague",Slot+1,buffId,d,-416);
			if(mob[Slot+1].devouringPlagueTickCount===9){
				mob[Slot+1].devouringPlagueInterval.kill();
				mob[Slot+1].devouringPlagueTickCount=0;
			}
		}
	}
	if(mob[Slot].devouringPlagueTickCount===9){
		mob[Slot].devouringPlagueInterval.kill();
		mob[Slot].devouringPlagueTickCount=0;
	}
}

function guardianSpirit(){
	if(btn.d.guardianspirit===true||my.level<7){ return;}
	if(checkBashFear()===true){ return; }
	if(g.petAlive===true){
		killPet();
		BGP('guardianspirit', "-1500% 0%");
		g.checkShamanSkills();
		return;
	}
	spellMpCost = shm.cost.guardianSpirit;
	if(my.mp<spellMpCost){ return; }
	if(g.petAlive===false){
		currentSpell = "Guardian Spirit";
		spellCastTime = castSpeedTotal(4500);
		spellType = "conjuration";
		if(startSpell()===false){ return; }
		animateParticlesUp("teal");
		animateCastBar("guardianSpirit");
		playAudio("spellCastAbjure");
		preload(['/images1/a wolf.png']);
	}
}
$(function(){
	$NG.window3.on('mouseenter','#guardianspirit',function(){
		var spellType = "Conjuration";
		NG.tooltipname.innerHTML = "Guardian Spirit";
		NG.tooltipmsg.innerHTML = "Cost: "+green(shm.cost.guardianSpirit)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(4500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Summon a Guardian Spirit to fight by your side.";
	});
});
g.guardianSpiritFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	castingSpell = 1;
	g.drawMyMp(-spellMpCost);
	Chat(("You summon a Guardian Spirit."),3);
	petLevel=~~(my.level/1.7)+1;
	var levelVariation = ~~(M.random()*(petLevel*.15));
	petLevel-=levelVariation;
	petWidth=300+M.ceil(petLevel/3);
	petHeight=(petWidth*.7435);
	petImage="a wolf";
	petLastCast = petImage;
	petMaxHp=M.ceil( (50+(petLevel*45))*(1+(talent10()*.147)) );
	petHp=petMaxHp;
	createPetName();
	petStr=M.ceil(petLevel*2);
	petDef=M.ceil(petLevel*2);
	petPoison=100;
	petMagic=100;
	petLightning=100;
	petFire=100;
	petCold=100;
	petSkill1="kick"; petSkill2="kick"; petSkill3="kick"; petSkill4="kick";
	petCastingFrequency=10;
	g.petAlive=true;
	petSpeed=2600;
	petPosition=1;
	g.checkShamanSkills();
	$("#pethpbardiv").css('display','block');
	BGP('guardianspirit', "-1500% -100%");
	g.drawMyHp();
	var leftAdjust = 190+((290-petWidth)/2);
	$NG.petImage.attr("src","/images1/a wolf.png").width(petWidth);
	$NG.mob5.stop(true,true).height(petHeight).width(petWidth+"px")
		.css({"left":leftAdjust,"bottom":60,opacity:1,display:"block"});
	var nameWid=$("#petName").width();
	var ADJ=(petWidth/2)-(nameWid/2);
	$("#petName").css("left",ADJ);
}


function boneSpiritReady(){
	if(D.getElementById('bonespirit').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('bonespirit', false);
    BGP('bonespirit', "-300% 0%");
	g.checkNecromancerSkills();
	refreshboneSpirit.kill();
}
function boneSpiritTimer(){
	refreshboneSpirit = T.to('', .1, {repeat:-1, onRepeat:boneSpiritReady});
}
function boneSpirit(){
	if(btn.d.bonespirit===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	currentSpell = "Bone Spirit";
	spellType = "evocation";
	var d=3000;
	if(my.talent4>=20){ d=2500; }
	spellCastTime = castSpeedTotal(d);
	if(startSpell()===false){ return; }
	if(my.talent4<20){
		animateParticlesDown("purple");
	}else{
		animateParticlesDown("orange");
	}
	animateCastBar("boneSpirit");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#bonespirit',function(){
		var DUR = 3000;
		var name="Bone Spirit";
		var type="magic";
		var a=TTmag( 3+evocationTotal()*2.25, .8, "magic", "Bone Spirit");
		if(my.talent4>=20){ 
			DUR=2500;
			name="Fireball";
			type="fire";
			a=TTmag( 3+evocationTotal()*4.3, .8, "fire", "Fireball");
		}
		var spellType = "Evocation";
		NG.tooltipname.innerHTML = name;
		NG.tooltipmsg.innerHTML = "Cast Time: "+castTimeTT(DUR)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		name+" hits your target for "+a[0]+" to "+a[1]+" "+type+" damage.";
	});
});
g.boneSpiritFinish=function(Slot){
	if(Slot===undefined){
		if(endSpell()===false){ return; }
		Slot=TGT;
	}
	if(my.talent4<20){
		playAudio("bonespirit",0,1000);
		animateBoneSpirit(Slot);
		function boneSpiritHit(){
			playAudio("holybolt");
			g.myMagicDamage("magic", damage, Slot, checkCrit(), "Bone Spirit");
		}
		var damage = minMax( 3+evocationTotal()*2.25, .8);
		T.delayedCall(1.2, boneSpiritHit);
	}else{
		g.fireballFinish(true, Slot);
	}
	if(my.talent5>=20&&petName===""){
		g.invokeDeathFinish(true);
		petTarget=TGT;
		togglePetAutoAttackStatus();
	}
}
function animateBoneSpirit(Slot){
	if(GLB.videoSetting!=="High"||!mob[Slot].name){ return; }
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX-50;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY-50;
	var radius = 200;
	var c2 = img("boneSpirit", 200, 200);
	var e1 = cacheAdd(c2, 5, 540, 597);
	e1.alpha=.7;
	T.to(e1, 1.2, {
		y:cY,
		x:cX,
		scaleX:.5,
		scaleY:.5,
		ease:ez.Qin,
		onComplete:function(){
			particleBurst(Slot,'purple','blank');
			cRem(5, e1);
		}
	});
	function doit2(count){ // le ghost
		var e2 = cacheAdd(c2, 5, 540, 597, 1, 1, false, true);
		e2.set({
			x: e1.x, 
			y:e1.y, 
			scaleX:e1.scaleX, 
			scaleY:e1.scaleY, 
			alpha:e1.alpha
		});
		T.to(e2, 1.5, {
			alpha:0,
			onComplete:function(){
				cRem(5, e2);
			}
		});
		count++;
		if(count<6){
			T.delayedCall(.2, function(){ 
				doit2(count);
			});
		}
	}
	doit2(0);
}

function invokeDeath(){
	if(btn.d.invokedeath===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(g.petAlive===true){
		killPet();
		playAudio("skeleton_die");
		BGP('invokedeath', "-1600% 0%");
		g.checkNecromancerSkills();
		return;
	}
	spellMpCost = nec.cost.invokeDeath;
	if(my.mp<spellMpCost){ return; }
	if(g.petAlive===false){
		currentSpell = "Invoke Death";
		spellCastTime = castSpeedTotal(6000);
		spellType = "conjuration";
		if(startSpell()===false){ return; }
		playAudio("spellCastAbjure");
		animateParticlesUp("purple");
		animateCastBar("invokeDeath");
		preload(['/images1/a dark skeleton.png']);
	}
}
$(function(){
	$NG.window3.on('mouseenter','#invokedeath',function(){
		var spellType = "Conjuration";
		var minimum = ( M.ceil((3+evocationTotal()*1.8)+( ((intTotal())-70)/8) )+"").fontcolor("#00ff00");
		var maximum = ( M.ceil(((3+evocationTotal()*1.8)+( ((intTotal())-70)/8)+(spellSkillCheck()/4.4)/2) )+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Invoke Death";
		NG.tooltipmsg.innerHTML = "Cost: "+green(nec.cost.invokeDeath)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(6000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Invoke Death conjures a skeleton warrior to fight by your side.";
	});
});
g.invokeDeathFinish=function(proc){
	if(!proc){
		if(endSpell()===false){ return; }
		castingSpell = 1;
		g.drawMyMp(-spellMpCost);
	}
	playAudio("spellCastAbjure");
	playAudio("skeleton_att");
	Chat((my.name+" animates an undead servant."),3);
	petLevel=~~(my.level/1.2)+1;
	petWidth=175+M.ceil(petLevel/3);
	petHeight=(petWidth*2.096);
	petImage="a dark skeleton";
	petLastCast = petImage;
	petMaxHp=M.ceil( (50+(petLevel*50))*(1+(talent5()*.163)) );
	petHp=petMaxHp;
	createPetName();
	petStr=M.ceil(petLevel*2);
	petDef=M.ceil(petLevel*3);
	petPoison=100;
	petMagic=100;
	petLightning=100;
	petFire=100;
	petCold=100;
	petSkill1="kick"; petSkill2="kick"; petSkill3="kick"; petSkill4="kick";
	if(my.talent5>=20){
		petSkill1="bash"; petSkill2="bash"; petSkill3="bash"; petSkill4="bash";
	}
	petCastingFrequency=9;
	g.petAlive=true;
	petSpeed=2500;
	petPosition=1;
	g.checkNecromancerSkills();
	$("#pethpbardiv").css('display','block');
	BGP('invokedeath', "-1600% -100%");
	g.drawMyHp();
	var leftAdjust = 190+((290-petWidth)/2);
	$NG.petImage.attr("src","/images1/a dark skeleton.png").width(petWidth);
	$NG.mob5.stop(true,true).height(petHeight).width(petWidth)
		.css({"left":leftAdjust,"bottom":60,opacity:1,display:"block"});
	var nameWid=$("#petName").width();
	var ADJ=(petWidth/2)-(nameWid/2);
	$("#petName").css("left",ADJ);
}


function cascadingDarknessReady(){
	if(D.getElementById('cascadingdarkness').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('cascadingdarkness', false);
    BGP('cascadingdarkness', "-400% 0%");
	g.checkNecromancerSkills();
	refreshcascadingDarkness.kill();
}
function cascadingDarknessTimer(){
	refreshcascadingDarkness = T.to('', .1, {repeat:-1, onRepeat:cascadingDarknessReady});
}
function cascadingDarkness(){
	if(btn.d.cascadingdarkness===true||my.level<3){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = nec.cost.cascadingDarkness;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Cascading Darkness";
	spellType = "conjuration";
	playAudio("spellDoneHeal");
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	animateDot(Slot,'magenta',200, 60, 10, 150, ez.Bout, 25, 5, -50, 1);
	spellDamage = minMax(1+conjurationTotal()*.38,.9);
	var mType="magic";
	Chat((mob[Slot].name+" is engulfed in darkness."),3);
	mob[Slot].cascadingDarknessTickCount=1;
	mob[Slot].cascadingDarknessTick=spellDamage;
	mob[Slot].cascadingDarknessTickInterval.kill();
	mob[Slot].cascadingDarknessTickInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		cascadingDarknessTick(mType, Slot); 
	}});
	var buffId = "cascadingDarknessIcon";
	var duration = 18000;
	var spriteX = -128;
	addMobBuffIcon("Cascading Darkness",Slot,buffId,duration,spriteX);
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	beginGlobalCooldown();
	checkSpellLevelUp();
}
$(function(){
	$NG.window3.on('mouseenter','#cascadingdarkness',function(){
		var spellType = "Conjuration";
		var CD = "5".fontcolor("#ff0000");
		var a=TTdot( 1+conjurationTotal()*.38, .9, "magic", "Cascading Darkness");
		NG.tooltipname.innerHTML = "Cascading Darkness";
		NG.tooltipmsg.innerHTML = "Cost: "+green(nec.cost.cascadingDarkness)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Cascading Darkness ticks for "+a[0]+" to "+a[1]+" arcane damage every second for 18 seconds. Damage increases with each successive tick.";
	});
});
function cascadingDarknessTick(mType, Slot){
	if(mob[Slot].name===""){ 
		mob[Slot].cascadingDarknessTickInterval.kill(); 
		mob[Slot].cascadingDarknessTickCount=0; 
		return; 
	}
	g.myDotDamage(mob[Slot].cascadingDarknessTick, Slot, mType, "Cascading Darkness");
	mob[Slot].cascadingDarknessTickCount+=1;
	mob[Slot].cascadingDarknessTick = M.ceil(mob[Slot].cascadingDarknessTick*1.01);
	if(mob[Slot].cascadingDarknessTickCount===19){ mob[Slot].cascadingDarknessTickInterval.kill(); mob[Slot].cascadingDarknessTickCount=0;  }
}


$(function(){
	$NG.window3.on('mouseenter','#corpseexplosion',function(){
		var spellType = "Evocation";
		var a=TTmag( (evocationTotal()*2.4), .85, "physical", "Corpse Explosion");
		NG.tooltipname.innerHTML = "Corpse Explosion";
		NG.tooltipmsg.innerHTML = "Cost: "+green(nec.cost.corpseExplosion)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Corpse Explosion hits all targets for "+a[0]+" to "+a[1]+" physical damage. Corpse Explosion is activated for five seconds when you kill any mob.";
	});
});
function corpseExplosion(){
	if(my.level<17){ return; }
	if(corpseExplosionStatus===false){ return; }
	if(fearStatus===true||bashStatus===true){ return; }
	spellMpCost = nec.cost.corpseExplosion;
	if(my.mp<spellMpCost){ return; }
	corpseExplosionStatus=false;
	spellType = "evocation";
	g.drawMyMp(-spellMpCost);
	checkSpellLevelUp();
	beginGlobalCooldown();
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""){
			var damage = minMax( (evocationTotal()*2.4)*(g.mobDefense(i)), .85);
			var spellName = "Corpse Explosion";
			if(GLB.videoSetting==="High"){ animateCorpseExplosion(i); }
			playAudio("corpseexplode4");
			g.myMagicDamage("physical", damage, i, checkCrit(), spellName);
		}
	}
}
function animateCorpseExplosion(Slot, fire){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	if(!fire){
		var img1='corpseExplosion';
		var img2='red';
	}else{
		var img1='petExplosion';
		var img2='orange';
	}
	var e1 = can(img1, 5, x2-150, 580-68, 0, 0, true);
	T.to(e1, .4, {
		scaleY:4,
		scaleX:4,
		alpha:0,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var c2 = img(img2+"particle50");
	function doIt(count){
		var x = (M.random()*(500)-250+x2);
		var y = (M.random()*(200)-100+y2);
		if(x>x2){
			var x3 = x*1.01+12;
		}else{
			var x3 = x*.99+12;
		}
		var p2 = cacheAdd(c2, 5, x, y);
		T.to(p2, .75, {
			x:x3,
			y:y+37,
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(5, p2);
			}
		});
		if(count<30){ 
			T.delayedCall(.01, function(){ 
				doIt(++count);
			}); 
		}
	}
	if(!fire){ doIt(0); }
}

function invokeFearReady(){
	if(D.getElementById('invokefear').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('invokefear', false);
    BGP('invokefear', "-500% 0%");
	g.checkNecromancerSkills();
	refreshinvokeFear.kill();
}
function invokeFearTimer(){
	refreshinvokeFear = T.to('', .1, {repeat:-1, onRepeat:invokeFearReady});
}
function invokeFear(){
	if(btn.d.invokefear===true||my.level<5){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = nec.cost.invokeFear;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Invoke Fear";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("purple");
	animateCastBar("invokeFear");
	playAudio("spellDoneFlames",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#invokefear',function(){
		var spellType = "Alteration";
		var CD = "25".fontcolor("#ff0000");
		var a=TTdot( (alterationTotal()*(1+(talent4()*.27)))/20, .8, "cold", "Chill of Death");
		NG.tooltipname.innerHTML = "Invoke Fear";
		var s="Cost: "+green(nec.cost.invokeFear)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Fear your target for a random duration. Feared targets cower before you and will not attack.";
		if(my.talent4>0){
			s+="<BR><BR>Chill of Death hits your target for "+a[0]+" to "+a[1]+" cold damage every second until fear expires.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.invokeFearFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellCastEvoke2");
	g.drawMyMp(-spellMpCost);
    setD('invokefear', true);
    BGP('invokefear', "-500% -100%");
	T.delayedCall(25, invokeFearTimer);
	timerTick(D.getElementById('invokefear'),25000/1000,'invokefear');
	var Slot = TGT;
	var fearDuration = (M.random()*(40000)+5000)*statusDurationReduction(Slot);
	if(mob[Slot].level > my.level){
		fearDuration -= (M.pow((mob[Slot].level - my.level),1.25));
	}
	if(fearDuration<10000){ fearDuration = 10000; }
	if(fearDuration>25000){ fearDuration = 25000; }
	fearTarget(Slot, fearDuration, -160);
	if(my.talent4>=1){
		var max = M.ceil( (alterationTotal()*(1+(talent4()*.27)))/20 );
		executeDot(Slot, minMax(max,.8), 30, 1000, "cold", "Chill of Death", "chillOfDeath", -480);
	}
}

function drainSoulReady(){
	if(D.getElementById('drainsoul').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('drainsoul', false);
    BGP('drainsoul', "-600% 0%");
	g.checkNecromancerSkills();
	refreshdrainSoul.kill();
}
function drainSoulTimer(){
	refreshdrainSoul = T.to('', .1, {repeat:-1, onRepeat:drainSoulReady});
}
function drainSoul(){
	if(btn.d.drainsoul===true||my.level<7){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = nec.cost.drainSoul;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Drain Soul";
	spellCastTime = castSpeedTotal(1500);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("green");
	animateCastBar("drainSoul");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#drainsoul',function(){
		var spellType = "Evocation";
		var CD = 30;
		if(Set.Wraith>=6){ CD -= 6; };
		var a=TTmag( evocationTotal()*1.8, .9, "magic", "Drain Soul");
		NG.tooltipname.innerHTML = "Drain Soul";
		NG.tooltipmsg.innerHTML = "Cost: "+green(nec.cost.drainSoul)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Drain Soul hits your target for "+a[0]+" to "+a[1]+" arcane damage and it is absorbed as health.";
	});
});
g.drainSoulFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellCastAbjure");
	if(GLB.videoSetting==="High"){ animateShdLifeTap(TGT); }
	g.drawMyMp(-spellMpCost);
    setD('drainsoul', true);
    BGP('drainsoul', "-600% -100%");
	var d = 30000;
    if(Set.Wraith>=6){ d -= 6000; };
	T.delayedCall(d/1000, drainSoulTimer);
	timerTick(D.getElementById('drainsoul'),d/1000,'drainsoul');
	spellDamage = minMax(evocationTotal()*1.8,.9);
	Chat((my.name+' says, "Ah, I feel much better now."'));
	if(my.talent1>=20){
		bleedTarget(TGT, 45, 1000, -192);
	}
	var foo = g.myMagicDamage("magic", spellDamage, TGT, false, "Drain Soul");
	var healAmount = foo;
	g.popupHeal(healAmount,true);
}

function archShielding(){
	if(btn.d.archshielding===true||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = nec.cost.archShielding;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Arch Shielding";
	spellCastTime = castSpeedTotal(4000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("archShielding");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#archshielding',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var v1 = abjurationTotal();
		var minimum = ( M.ceil(v1*.1)+"").fontcolor("#00ff00");
		var value1 = (M.ceil(v1*.07)+"").fontcolor("#00ff00");
		var value2 = (M.ceil(v1*.4)+"").fontcolor("#00ff00");
		var value3 = (M.ceil(v1*.1)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Arch Shielding";
		NG.tooltipmsg.innerHTML = "Cost: "+green(nec.cost.archShielding)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(4000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Arch Shielding buffs your armor by "+value1+", your health by "+value2+", and your poison and magic resistance by "+value3+" for "+duration+" minutes.";
	});
});
g.archShieldingFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You feel protected by a vile presence."),3);
	if(archShieldingStatus===true){
		maxHpBuff-=archShieldingHpBoost;
		armorBuff-=archShieldingArmorBoost;
		svpoisonBuff-=archShieldingPoisonBoost;
		svmagicBuff-=archShieldingMagicBoost;
	}
	archShieldingTimeout.kill();
	archShieldingTimeout = T.delayedCall(3240, archShieldingExpire);
	var v1 = abjurationTotal();
	archShieldingArmorBoost = M.ceil(v1*.07);
	archShieldingHpBoost = M.ceil(v1*.4);
	archShieldingPoisonBoost = M.ceil(v1*.1);
	archShieldingMagicBoost = M.ceil(v1*.1);
	maxHpBuff+=archShieldingHpBoost;
	armorBuff+=archShieldingArmorBoost;
	svpoisonBuff+=archShieldingPoisonBoost;
	svmagicBuff+=archShieldingMagicBoost;
	archShieldingStatus=true;
	g.drawMyHp();
	CStat();
	var skillName = "Arch Shielding";
	var buffId = "hpbuffIcon";
	var duration = 3240000;
	var spriteX = -544;
	hpbuffIconTimer.kill();
	hpbuffIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff('green','easeInQuad', 5, 15, 120, 4);
}
function archShieldingExpire(){
	archShieldingStatus=false;
	maxHpBuff-=archShieldingHpBoost;
	armorBuff-=archShieldingArmorBoost;
	svpoisonBuff-=archShieldingPoisonBoost;
	svmagicBuff-=archShieldingMagicBoost;
	CStat();
	g.drawMyHp();
}

function necFeignDeathReady(){
	if(D.getElementById('feigndeath').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('feigndeath', false);
    BGP('feigndeath', "-700% 0%");
	g.checkNecromancerSkills();
	refreshnecFeignDeath.kill();
}
function necFeignDeathTimer(){
	refreshnecFeignDeath = T.to('', .1, {repeat:-1, onRepeat:necFeignDeathReady});
}
function necFeignDeath(){
	if(my.level<11){ return; }
	if(btn.d.feigndeath===true){return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = nec.cost.feignDeath;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Feign Death";
	spellCastTime = castSpeedTotal(1500);
	spellType = "abjuration";
	hideStatus=0;
	if(startSpell()===false){ return; }
	animateParticlesUp("purple");
	animateCastBar("necFeignDeath");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#feigndeath',function(){
		var spellType = "Abjuration";
		var CD = "25".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Feign Death";
		NG.tooltipmsg.innerHTML = "Cost: "+green(nec.cost.feignDeath)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Your heart stops and you fall to the ground. All targets may believe you have died and leave the battlefield. When used out of combat, you cannot be ambushed.";
	});
});
g.necFeignDeathFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneSlam");
	g.drawMyMp(-spellMpCost);
	T.delayedCall(25, necFeignDeathTimer);
	timerTick(D.getElementById('feigndeath'),25000/1000,'feigndeath');
    setD('feigndeath', true);
    BGP('feigndeath', "-700% -100%");
	if(mobsFound()===true){
		if(M.random() > .65){
			//success
			Chat(("You fall to the ground. Convinced of your death, all enemies leave the battle."),3);
			hideStatus=0;
			escapedFromBattle();
		}else{
			//failure
			Chat(("You fall to the ground, but nobody is fooled this time."),3);
		}
	}else{
		Chat("You feign your death.");
		if(hideStatus===0){ return; }
		BGP('feigndeath', "-700% -100%");
		Chat("You feign your death.");
		hideStatus=0;
	}
	var zit = "death_mb";
	if(my.gender==="Female"){
		zit = "death_fl";
	}
	playAudio(zit);
}


function augmentDeathReady(){
	if(D.getElementById('augmentdeath').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('augmentdeath', false);
    BGP('augmentdeath', "-800% 0%");
	g.checkNecromancerSkills();
	refreshaugmentDeath.kill();
}
function augmentDeathTimer(){
	refreshaugmentDeath = T.to('', .1, {repeat:-1, onRepeat:augmentDeathReady});
}
$(function(){
	$NG.window3.on('mouseenter','#augmentdeath',function(){
		var CD = "90".fontcolor("#ff0000");
		var value1 = "30".fontcolor("#00ff00");
		var value2 = (M.ceil( (conjurationTotal()*3.5)+M.random()*(my.level/6) )+"").fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*.15)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Augment Death";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Heal your pet for "+value2+" health and buff your pet's attack speed for "+value1+" seconds";
	});
});
function augmentDeath(){
	if(btn.d.augmentdeath===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	if(g.petAlive===false){
		Chat(("Your companion is not here."));
		return;
	}
    setD('augmentdeath', true);
    BGP('augmentdeath', "-800% -100%");
	T.delayedCall(90, augmentDeathTimer);
	timerTick(D.getElementById('augmentdeath'),90000/1000,'augmentdeath');
	Chat((petName+"'s eyes gleam with madness."),3);
	petSpeedBuff=.5;
	var healAmount = M.ceil( ((conjurationTotal()*3.5)+M.random()*(my.level/6))*(1+(talent6()*2.25)/100) )
	petHp+= healAmount;
	g.drawMyHp();
	T.delayedCall(30, augmentDeathExpire);
	g.popupHealSlot(healAmount,5);
	if(GLB.videoSetting==="High"){ animateAugmentDeath(); }
	playAudio("skeleton_att");
}
function animateAugmentDeath(){
	if(GLB.videoSetting==="High"){
		var x2 = (MOB[5].offsetLeft+(petWidth/2));
		var y2 = (MOB[5].offsetTop+(petHeight/2));
		var e1 = can('lineNovaRed', 5, x2-200, y2-200, 400, 400, true);
		T.to(e1, .15, {
			alpha:.7,
			scaleX:1.25,
			scaleY:1.25,
			onComplete:function(){
				T.to(e1, .45, {
					alpha:0,
					scaleX:2,
					scaleY:2,
					ease:ez.lin
				});
			}
		});
	}
}
function augmentDeathExpire(){
	petSpeedBuff=1;
}


function igniteBloodReady(){
	if(D.getElementById('igniteblood').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('igniteblood', false);
    BGP('igniteblood', "-900% 0%");
	g.checkNecromancerSkills();
	refreshigniteBlood.kill();
}
function igniteBloodTimer(){
	refreshigniteBlood = T.to('', .1, {repeat:-1, onRepeat:igniteBloodReady});
}
function igniteBlood(){
	if(btn.d.igniteblood===true||my.level<15){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1&&my.talent2<20){ targetRequired(); return; }
	spellMpCost = M.ceil(conjurationTotal()/5);
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Ignite Blood";
	spellCastTime = castSpeedTotal(2500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("red");
	animateCastBar("igniteBlood");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#igniteblood',function(){
		var MP = (M.ceil(conjurationTotal()/5)+"").fontcolor("#00ff00");
		var spellType = "Conjuration";
		var a=TTdot( conjurationTotal()*.64, .9, "fire", "Ignite Blood");
		var target="your target";
		if(my.talent2>=20){ target="all targets"; }
		NG.tooltipname.innerHTML = "Ignite Blood";
		NG.tooltipmsg.innerHTML = "Cost: "+MP+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Ignite Blood hits "+target+" and ticks for "+a[0]+" to "+a[1]+" fire damage every second for 24 seconds.";
	});
});
g.igniteBloodFinish=function(){
	var multi=false;
	if(my.talent2>=20){ multi=true; }
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	var Slot = TGT;
	var buffId = "igniteBloodIcon";
	g.drawMyMp(-spellMpCost);
	for(var i=0;i<=4;i++){
		if(mob[i].name){
			if(i===Slot||multi===true){
				animateDot(i,'red',150, 0, 10, -200, ez.sinout, 25, 3, 100);
				spellDamage = minMax(conjurationTotal()*.64,.9);
				Chat((mob[i].name+"'s blood ignites."),3);
				mob[i].igniteBloodTickCount=1;
				mob[i].igniteBloodTick=spellDamage;
				executeIgniteBlood("fire", i);
				addMobBuffIcon("Ignite Blood",i,buffId,24000,-288);
			}
		}
	}
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}
function executeIgniteBlood(mType, Slot){
	mob[Slot].igniteBloodTickInterval.kill();
	mob[Slot].igniteBloodTickInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		igniteBloodTick("fire", Slot); 
	}});
}
function igniteBloodTick(mType, Slot){
	if(mob[Slot].name===""){ 
		mob[Slot].igniteBloodTickInterval.kill(); 
		mob[Slot].igniteBloodTickCount=0; 
		return; 
	}
	g.myDotDamage(mob[Slot].igniteBloodTick, Slot, mType, "Ignite Blood");
	mob[Slot].igniteBloodTickCount+=1;
	if(mob[Slot].igniteBloodTickCount===25){ mob[Slot].igniteBloodTickInterval.kill(); mob[Slot].igniteBloodTickCount=0; }
}


function diamondSkinReady(){
	if(D.getElementById('diamondskin').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;}
    setD('diamondskin', false);
    BGP('diamondskin', "-1200% 0%");
	g.checkNecromancerSkills();
	refreshdiamondSkin.kill();
}
function diamondSkinTimer(){
	refreshdiamondSkin = T.to('', .1, {repeat:-1, onRepeat:diamondSkinReady});
}
$(function(){
	$NG.window3.on('mouseenter','#diamondskin',function(){
		var spellType = "Abjuration";
		var CD = red("120")+" Seconds";
		var duration = "24".fontcolor("#00ff00");
		var minimum = ( M.ceil(abjurationTotal()*1.25)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Diamond Skin";
		var fade="The barrier fades after "+green(9)+" seconds.";
		if(my.talent12>=20){
			fade='';
			CD=red("60")+" Seconds";
		}
		var s="Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+"<br><br>"+
		"Surround yourself with a diamond barrier that can absorb "+minimum+" damage."+fade;
		NG.tooltipmsg.innerHTML = s;
	});
});
function diamondSkin(){
	if(btn.d.diamondskin===true||my.level<24){ return;}
	if(checkBashFear()===true){ return; }
    setD('diamondskin', true);
    BGP('diamondskin', "-1200% -100%");
	var d=120000;
	if(my.talent12>=20){ d=60000; }
	T.delayedCall(d/1000, diamondSkinTimer);
	timerTick(D.getElementById('diamondskin'),d/1000,'diamondskin');
	beginGlobalCooldown();
	currentSpell = "Diamond Skin";
	spellType = "abjuration";
	checkSpellLevelUp();
	Chat(("Your skin becomes like a diamond."),3);
	shieldHp = M.ceil(abjurationTotal()*1.25);
	if(my.talent12<20){
		T.delayedCall(9, diamondSkinExpire);
		var duration = 9000;
		T.delayedCall(duration/1000, function(){ 
			removeIcon("diamondSkinIcon"); 
		});
	}else{
		var duration = 0;
	}
	addBuffIcon("Diamond Skin","diamondSkinIcon",duration,-384);
	if(GLB.videoSetting==="High"){ animateDiamondSkin(); }
	playAudio("spellDoneBuff");
}
function animateDiamondSkin(){
	flashScreen("#08f",.3,2);
	var e1 = can('diamondSkin', 5, 440, 397, 400, 400, true);
	T.to(e1, 3, {
		y:667,
		alpha:0,
		scaleX:.5,
		scaleY:.5,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	T.to(e1, 3, {
		scaleX:1.5,
		scaleY:1.5,
	});
	animateBuffRings();
}
function diamondSkinExpire(){
	shieldHp = 0;
	$("#diamondSkinIcon").remove();
}


function bondOfDeathReady(){
	if(D.getElementById('bondofdeath').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('bondofdeath', false);
    BGP('bondofdeath', "-1100% 0%");
	g.checkNecromancerSkills();
	refreshbondOfDeath.kill();
}
function bondOfDeathTimer(){
	refreshbondOfDeath = T.to('', .1, {repeat:-1, onRepeat:bondOfDeathReady});
}
function bondOfDeath(){
	if(btn.d.bondofdeath===true||my.level<20){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = nec.cost.bondOfDeath;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Bond of Death";
	spellCastTime = castSpeedTotal(2000);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesUp("yellow");
	animateCastBar("bondOfDeath");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#bondofdeath',function(){
		var spellType = "Alteration";
		var a=TTdot( alterationTotal()*.166, .9, "magic", "Bond of Death");
		var target="your target";
		if(my.talent3>=20){ target="three targets"; }
		NG.tooltipname.innerHTML = "Bond of Death";
		NG.tooltipmsg.innerHTML = "Cost: "+green(nec.cost.bondOfDeath)+" Mana Points<br>"+
		"Cooldown: "+red("30")+" Seconds<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Bond of Death hits "+target+" and ticks for "+a[0]+" to "+a[1]+" arcane damage every 3 seconds for one minute. You absorb all damage as health.";
	});
});
g.bondOfDeathFinish=function(){
	if(endSpell()===false){ return; }
    setD('bondofdeath', true);
    BGP('bondofdeath', "-1100% -100%");
	T.delayedCall(30, bondOfDeathTimer);
	timerTick(D.getElementById('bondofdeath'),30000/1000,'bondofdeath');
	playAudio("spellDoneHeal");
	var Slot = TGT;
	g.drawMyMp(-spellMpCost);
	var multi=false;
	if(my.talent3>=20){ multi=true; }
	for(var i=0;i<=4;i++){
		if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
			if(i===Slot||multi===true){
				animateDot(i,'yellow',150, 0, 10, 100, ez.cout);
				Chat((mob[i].name+"'s life force drains away."),3);
				mob[i].bondOfDeathTickCount=1;
				spellDamage = minMax(alterationTotal()*.166,.9);
				mob[i].bondOfDeathTick=spellDamage;
				executeBondOfDeath(i);
				addMobBuffIcon("Bond of Death",i,"bondOfDeathIcon",60000,-352);
			}
		}
	}
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}
function executeBondOfDeath(Slot){
	mob[Slot].bondOfDeathInterval.kill();
	mob[Slot].bondOfDeathInterval = T.to('', 3, {repeat:-1, onRepeat:function(){ 
		bondOfDeathTick("magic", Slot); 
	}});
}

function bondOfDeathTick(mType, Slot){
	if(mob[Slot].name===""){ 
		mob[Slot].bondOfDeathInterval.kill(); 
		mob[Slot].bondOfDeathTickCount=0; 
		return; 
	}
	g.myDotDamage(mob[Slot].bondOfDeathTick, Slot, mType, "Bond of Death");
	mob[Slot].bondOfDeathTickCount+=1;
	if(mob[Slot].bondOfDeathTickCount===21){ mob[Slot].bondOfDeathInterval.kill(); mob[Slot].bondOfDeathTickCount=0;  }
}


function asystoleReady(){
	if(D.getElementById('asystole').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('asystole', false);
    BGP('asystole', "-1300% 0%");
	g.checkNecromancerSkills();
	refreshasystole.kill();
}
function asystoleTimer(){
	refreshasystole = T.to('', .1, {repeat:-1, onRepeat:asystoleReady});
}
function asystole(){
	if(btn.d.asystole===true||my.level<28){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	currentSpell = "Asystole";
	spellCastTime = castSpeedTotal(2500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("asystole");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#asystole',function(){
		var spellType = "Conjuration";
		var a=TTdot( alterationTotal()*.466, .9, "poison", "Asystole");
		var value1 = ("8%").fontcolor("#00ff00");
		var value2 = ("24%").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Asystole";
		NG.tooltipmsg.innerHTML = "Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Asystole ticks for "+a[0]+" to "+a[1]+" poison damage every second for 30 seconds.<br><br>"+
		"Effect: Debuffs your target's physical damage by "+value1+" and increases their physical damage received by "+value2+".";
	});
});
g.asystoleFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	var Slot = TGT;
	animateDot(Slot,'green',250, 0, 10, 50, ez.Bout);
	spellDamage = minMax(alterationTotal()*.466,.9);
	var mType="poison";
	g.drawMyMp();
	Chat((mob[Slot].name+" clutches their chest."),3);
	var zig = my.level;
	if(zig>50){ zig = 50; }
	if(mob[Slot].asystoleStatus===false){
		mob[Slot].asystoleStatus=true;
	}
	mob[Slot].asystoleTickCount=1;
	mob[Slot].asystoleTick=spellDamage;
	mob[Slot].asystoleTickInterval.kill();
	mob[Slot].asystoleTickInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		asystoleTick(Slot,mType); 
	}});
	var buffId = "asystoleIcon";
	var duration = 30000;
	var spriteX = -416;
	addMobBuffIcon("Asystole",Slot,buffId,duration,spriteX);
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}
function asystoleTick(Slot,mType){
	if(mob[Slot].name===""){
		mob[Slot].asystoleTickInterval.kill();
		mob[Slot].asystoleTickCount=0;
		mob[Slot].asystoleStatus=false;
		return;
	}
	g.myDotDamage(mob[Slot].asystoleTick, Slot,mType, "Asystole");
	mob[Slot].asystoleTickCount+=1;
	if(mob[Slot].asystoleTickCount===31){
		mob[Slot].asystoleTickInterval.kill();
		mob[Slot].asystoleTickCount=0;
	}
}

function detonateSoulReady(){
	if(D.getElementById('detonatesoul').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('detonatesoul', false);
    BGP('detonatesoul', "-1400% 0%");
	g.checkNecromancerSkills();
	refreshdetonateSoul.kill();
}
function detonateSoulTimer(){
	refreshdetonateSoul = T.to('', .1, {repeat:-1, onRepeat:detonateSoulReady});
}
function detonateSoul(){
	if(btn.d.detonatesoul===true||my.level<32){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = nec.cost.detonateSoul;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Detonate Soul";
	spellType = "evocation";
	spellCastTime = castSpeedTotal(2000);
	if(startSpell()===false){ return; }
	animateParticlesDown("green");
	animateCastBar("detonateSoul");
	playAudio("spellDoneFlames",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#detonatesoul',function(){
		var spellType = "Evocation";
		var CD = "30".fontcolor("#ff0000");
		var a=TTmag( (evocationTotal()*3)*(1+((talent8()*7.8)/100)), .85, "magic", "Detonate Soul");
		NG.tooltipname.innerHTML = "Detonate Soul";
		var s="Cost: "+green(nec.cost.detonateSoul)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Detonate Soul hits your target after 5 seconds for "+a[0]+" to "+a[1]+" arcane damage.<br><br>"+
		"Effect: If you kill the mob before it detonates, you will harvest mana from your target's spirit.";
		if(my.talent8>=20){
			s+="<BR><BR>Detonate Soul chills all targets for 9 seconds.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.detonateSoulFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("confuse");
	var Slot = TGT;
	var sameMob=mob[Slot].ID;
	if(GLB.videoSetting==="High"){ 
		animateDetonateSoul(Slot, sameMob); 
	}
    setD('detonatesoul', true);
    BGP('detonatesoul', "-1400% -100%");
	T.delayedCall(30, detonateSoulTimer);
	timerTick(D.getElementById('detonatesoul'),30000/1000,'detonatesoul');
	g.drawMyMp(-spellMpCost);
	function detonateSoulHit(Slot){
		if(mob[Slot].ID===sameMob&&mob[Slot].name){
			playAudio("corpseexplodecast");
			if(my.talent8>=20){
				for(var i=0;i<=4;i++){
					if(mob[i].name){
						chillTarget(i,9000,-448);
					}
				}
			}
			g.myMagicDamage("magic", damage, Slot, checkCrit(), "Detonate Soul");
		}
		detonateSoulStatus=false;
	}
	var damage = minMax((evocationTotal()*3)*(1+((talent8()*7.8)/100)),.85);
	detonateSoulStatus=true;
	Chat(("A pulsing charge is affixed to "+mob[Slot].name+"'s soul."),3);
	detonateSoulTimeout.kill();
	detonateSoulTimeout = T.delayedCall(5, function(){
		detonateSoulHit(Slot);
	});
	addMobBuffIcon("Detonate Soul",Slot,"detonateSoulIcon",5000,-448);
}
function animateDetonateSoul(Slot, sameMob){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY;
	var size = 150;
	var H1 = IMG(cX-(size/2), cY-(size/2), size, size, 'asystole');
	H1.id='detonateSoul'+Slot;
	NG.eWin.appendChild(H1);
	// detonate start
	T.to(H1, 5, {
		force3D:"auto",
		width:8,
		height:8,
		left:cX-4,
		top:cY-4,
		onComplete:function(){
			Remove(H1);
			if(sameMob===mob[Slot].ID&&mob[Slot].name){
				particleBurst(Slot,'green','blank');
				animateSoulExplosion(Slot);
				flashScreen("#fff",.3,1);
			}
		}
	});
	T.to(H1, 5, {
		rotation:360*30,
		ease:ez.lin,
		onComplete:function(){
			T.set((this.target), {
				rotation:0
			});
		}
	});
	function goX(Slot, ttd){
		if(ttd>0){
			var x = MOB[Slot].offsetLeft+mob[Slot].cX;
			var w1 = parseInt(H1.style.width, 10);
			T.to(H1, .25, {
				left:x-(w1/2),
				ease:ez.lin
			});
			ttd-=250;
			T.delayedCall(.25, function(){
				goX(Slot, ttd);
			});
		}
	}
	goX(Slot, 5000);
}
function animateExplosion(Slot, img){
	if(Slot===undefined){
		Slot = TGT;
	}
	if(!img){
		img = "detonation";
	}
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var e1 = can(img, 5, x2-150, 490, 0, 0, true);
	T.to(e1, .2, {
		scaleY:2.66,
		scaleX:2.66,
		ease:ez.cout
	});
	T.to(e1, 1.3, {
		alpha:0,
		ease:ez.xout,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var e2 = can(img, 5, x2-150, 490, 0, 0, true);
	T.to(e2, 1, {
		scaleY:2.66,
		scaleX:2.66,
		alpha:0,
		ease:ez.cout,
		onComplete:function(){
			cRem(5, e2);
		}
	});
}
function animateSoulExplosion(Slot){
	if(mob[Slot].name===""){ return; }
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	animateExplosion(Slot);
	function doIt(count){
		var x = (M.random()*(500)-250+x2);
		var y = (M.random()*(200)-100+y2);
		if(x>x2){
			var x3 = x*1.01+12;
		}else{
			var x3 = x*.99+12;
		}
		var p1 = can('greenparticle50', 5, x, y, 25, 25);
		T.to(p1, .75, {
			x:x3,
			y:y+37,
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<30){ 
			T.delayedCall(.01, function(){ 
				doIt(++count);
			}); 
		}
	}
	doIt(0);
}


function howlingTerrorReady(){
	if(D.getElementById('howlingterror').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('howlingterror', false);
    BGP('howlingterror', "-1500% 0%");
	g.checkNecromancerSkills();
	refreshhowlingTerror.kill();
}
function howlingTerrorTimer(){
	refreshhowlingTerror = T.to('', .1, {repeat:-1, onRepeat:howlingTerrorReady});
}
$(function(){
	$NG.window3.on('mouseenter','#howlingterror',function(){
		var spellType = "Alteration";
		var CD = "90".fontcolor("#ff0000");
		var a=TTdot( (alterationTotal()*(1+(talent4()*.27)))/20, .8, "cold", "Chill of Death");
		NG.tooltipname.innerHTML = "Howling Terror";
		var s="Cost: "+green(nec.cost.howlingTerror)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Howling Terror fears all targets for a random duration.";
		if(my.talent4>0){
			s+="<BR><BR>Chill of Death hits all feared targets for "+a[0]+" to "+a[1]+" cold damage every second.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
function howlingTerror(){
	if(btn.d.howlingterror===true||my.level<38){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = nec.cost.howlingTerror;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Howling Terror";
	spellType = "alteration";
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	playAudio("spellCastEvoke2");
    setD('howlingterror', true);
    BGP('howlingterror', "-1500% -100%");
	T.delayedCall(90, howlingTerrorTimer);
	timerTick(D.getElementById('howlingterror'),90000/1000,'howlingterror');
	if(GLB.videoSetting==="High"){ 
		animateNova('howlingTerror'); 
	}
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""){
			var fearDuration = (M.random()*(28000)+3000)*statusDurationReduction(i);
			if(mob[i].level > my.level){
				fearDuration -= (M.pow((mob[i].level - my.level),1.25));
			}
			if(fearDuration<7000){ fearDuration = 7000; }
			if(fearDuration>20000){ fearDuration = 20000; }
			fearTarget(i, fearDuration, -480, mob[i].name+" runs in terror.");
			if(my.talent4>=1){
				var dam = minMax( (alterationTotal()*(1+(talent4()*.27)))/20, .8);
				executeDot(i, dam, 20, 1000, "cold", "Chill of Death", "chillOfDeath", -480, -32);
			}
		}
	}	
}

function chaosFluxReady(){
	if(D.getElementById('chaosflux').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('chaosflux', false);
    BGP('chaosflux', "-300% 0%");
	g.checkEnchanterSkills();
	refreshchaosFlux.kill();
}
function chaosFluxTimer(){
	refreshchaosFlux = T.to('', .1, {repeat:-1, onRepeat:chaosFluxReady});
}
function chaosFlux(){
	if(btn.d.chaosflux===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[TGT].charmStatus===true){
		Chat(("You cannot attack your charmed pet."),3);
		return;
	}
	currentSpell = "Chaos Flux";
	spellType = "evocation";
	spellCastTime = castSpeedTotal(3000);
	if(startSpell()===false){ return; }
	animateParticlesDown("magenta");
	animateCastBar("chaosFlux");
	playAudio("spellCastEvoke2",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#chaosflux',function(){
		var spellType = "Evocation";
		var a=TTmag( 3+evocationTotal()*2.1, .8, "magic", "Chaos Flux");
		NG.tooltipname.innerHTML = "Chaos Flux";
		NG.tooltipmsg.innerHTML = "Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Chaos Flux hits your target for "+a[0]+" to "+a[1]+" arcane damage.<br><br>"+
		"Effect: Interrupts your target's spell. There is a 25% chance that your target will be launched into the air and take falling damage upon landing.";
	});
});
g.chaosFluxFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneFlames");
	var Slot = TGT;
	animateSmite(Slot);
	function chaosFluxHit(){
		var damage2 = 0;
		var S = mob[Slot];
		if(S.rare===3){
			damage2 = M.round(S.maxHp*.025);
		}else if(S.rare===1){
			damage2 = M.round(S.maxHp*.1);
		}else{
			damage2 = M.round(S.maxHp*.066);
		}
		calculateSpellDamage3(damage2, Slot);
		function doneFalling(){ 
			mob[Slot].fallingStatus=false; 
		}
		T.delayedCall(1.4, doneFalling);
	}
	var damage = minMax(3+evocationTotal()*2.1, .8);
	var mType="magic";
	if(M.random()>.75){
		mob[Slot].fallingStatus=true;
		animateFlux(Slot);
		T.delayedCall(1.4, chaosFluxHit);
		addMobBuffIcon("Gravity Flux",Slot,"fallingIcon",1400,-96);
	}
	var spellName = "Chaos Flux";
	g.myMagicDamage(mType, damage, Slot, checkCrit(), spellName);
	interruptTarget(Slot);
}

function gaspingEmbraceReady(){
	if(D.getElementById('gaspingembrace').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('gaspingembrace', false);
    BGP('gaspingembrace', "-400% 0%");
	g.checkEnchanterSkills();
	refreshgaspingEmbrace.kill();
}
function gaspingEmbraceTimer(){
	refreshgaspingEmbrace = T.to('', .1, {repeat:-1, onRepeat:gaspingEmbraceReady});
}
function gaspingEmbrace(){
	if(btn.d.gaspingembrace===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[TGT].charmStatus===true){
		Chat(("You cannot attack your charmed pet."),3);
		return;
	}
	spellMpCost = enc.cost.gaspingEmbrace;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Gasping Embrace";
	spellCastTime = castSpeedTotal(2500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("magenta");
	animateCastBar("gaspingEmbrace");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#gaspingembrace',function(){
		var spellType = "Conjuration";
		var CD = "5".fontcolor("#ff0000");
		var a=TTdot(1+conjurationTotal()*.355, .9, "magic", "Gasping Embrace");
		var target="your target";
		if(my.talent9>=20){
			target="all targets";
		}
		NG.tooltipname.innerHTML = "Gasping Embrace";
		NG.tooltipmsg.innerHTML = "Cost: "+green(enc.cost.gaspingEmbrace)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Gasping Embrace hits "+target+" and ticks for "+a[0]+" to "+a[1]+" arcane damage every second for 21 seconds.<br><br>"+
		"Effect: Debuffs your target's strength by "+green("12%")+".";
	});
});
g.gaspingEmbraceFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	var multi = false;
	if(my.talent9>=20){ multi=true; }
	for(var i=0;i<=4;i++){
		if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
			if(i===Slot||multi===true){
				if(mob[i].charmStatus===false){
					animateDot(i,"magenta",250);
					spellDamage = minMax(1+conjurationTotal()*.355, .9);
					Chat((mob[i].name+" feels a shortness of breath."),3);
					mob[i].gaspingEmbraceStatus=true;
					mob[i].gaspingEmbraceTickCount=1;
					mob[i].gaspingEmbraceTick=spellDamage;
					executeGaspingEmbrace(i, "magic");
					addMobBuffIcon("Gasping Embrace",i,"gaspingEmbraceIcon",21000,-128);
				}
			}
		}
	}
	if(mob[TGT].attackStatus===1){ attackOn(true); }
}
function executeGaspingEmbrace(Slot, mType){
	mob[Slot].gaspingEmbraceTickInterval.kill();
	mob[Slot].gaspingEmbraceTickInterval = T.to('', 1, {repeat:-1, onRepeat:function(){ 
		gaspingEmbraceTick(mType, Slot); 
	}});
}
function gaspingEmbraceTick(mType, Slot){
	if(mob[Slot].name===""||mob[Slot].name===""){ 
		mob[Slot].gaspingEmbraceTickInterval.kill(); 
		mob[Slot].gaspingEmbraceTickCount=0; 
		mob[Slot].gaspingEmbraceStatus=false; 
		return; 
	}
	g.myDotDamage(mob[Slot].gaspingEmbraceTick, Slot, mType, "Gasping Embrace");
	mob[Slot].gaspingEmbraceTickCount+=1;
	if(mob[Slot].gaspingEmbraceTickCount===22){ mob[Slot].gaspingEmbraceTickInterval.kill(); mob[Slot].gaspingEmbraceTickCount=0;  }
}

function cajolingWhispersReady(){
	if(D.getElementById('cajolingwhispers').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('cajolingwhispers', false);
    BGP('cajolingwhispers', "-500% 0%");
	g.checkEnchanterSkills();
	refreshcajolingWhispers.kill();
}
function cajolingWhispersTimer(){
	refreshcajolingWhispers = T.to('', .1, {repeat:-1, onRepeat:cajolingWhispersReady});
}
function cajolingWhispers(){
	if(btn.d.cajolingwhispers===true||my.level<3){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[charmSlot].charmStatus===true){
		cajolingWhispersTicking.kill();
		cajolingWhispersExpire(charmSlot);
		return;
	}
	spellMpCost = enc.cost.cajolingWhispers;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Cajoling Whispers";
	spellCastTime = castSpeedTotal(1500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("purple");
	animateCastBar("cajolingWhispers");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#cajolingwhispers',function(){
		var spellType = "Alteration";
		var CD = "5".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Cajoling Whispers";
		NG.tooltipmsg.innerHTML = "Cost: "+green(enc.cost.cajolingWhispers)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Cajoling Whispers charms your target to fight by your side. Charmed mobs can be released by clicking the mob's charm icon.";
	});
});
g.cajolingWhispersFinish=function(){
	if(endSpell()===false){ return; }
	if(mob[TGT].attackStatus===1){
		attackOn(true);
	}
	playAudio("spellDoneBuff");
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animateCajolingWhispers(Slot); }
    setD('cajolingwhispers', true);
    BGP('cajolingwhispers', "-500% -100%");
	T.delayedCall(5, cajolingWhispersTimer);
	timerTick(D.getElementById('cajolingwhispers'),5000/1000,'cajolingwhispers');
	currentSpell = "Cajoling Whispers";
	g.drawMyMp(-spellMpCost);
	if(statusResist(Slot)===true||mob[Slot].rare===3){
		Chat((mob[Slot].name+" resisted "+ currentSpell +"."),1);
	}else{
		Chat((mob[Slot].name+ " has been charmed."),3);
		interruptTarget(Slot);
		mob[Slot].charmStatus = true;
		charmSlot = Slot;
		petName = mob[charmSlot].name;
		$("#pethpbardiv").css('display','block');
		if($("#petBarName").length===0){
			var e1=$('<div id="petBarName">').html(mob[charmSlot].level+" - "+petName);
			$("#pethpbardiv").append(e1);
		}else{
			$("#petBarName").html(mob[charmSlot].level+" - "+petName);
		}
		g.drawMyHp();
		var charismaValue = (chaTotal()-60);
		if(charismaValue < 10){ charismaValue = 10; }
		var charmDuration = (20000+M.random()*(conjurationTotal()*100) +M.random()*((charismaValue)*600) + (charismaValue*1500))*statusDurationReduction(Slot);
		charmDuration += g.alterationEquip*1000;
		if(mob[Slot].level > my.level){
			charmDuration -= (M.pow((mob[Slot].level - my.level),2.2));
		}
		if(charmDuration <= 8000){ charmDuration = 8000; }
		if(my.talent8<20){
			cajolingWhispersTicking.kill();
			cajolingWhispersTicking = T.delayedCall(charmDuration/1000, cajolingWhispersExpire);
		}else{
			charmDuration = 0;
		}
		addMobBuffIcon("Charmed",Slot,"charmIcon",charmDuration,-160);
	}
}
function animateCajolingWhispers(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX-25;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY-25;
	var c2 = img("heart", 50, 50);
	function doit(count){
		var ranX = (M.random()*150-75);
		var ranY = (M.random()*(60)-30);
		var e1 = cacheAdd(c2, 5, cX+ranX, cY+ranY);
		T.to(e1, 1, {
			y:"+="+100,
			alpha:0,
			ease:ez.Qin
		});
		count++;
		if(count<8){ 
			T.delayedCall(.05, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
}
function cajolingWhispersExpire(Slot){
	if(Slot){
		cajolingWhispersTicking.kill();
		$("#charmIcon"+Slot).stop(true,true).remove();
	}
	mob[charmSlot].charmStatus = false;
	if(Slot){
		Chat(("You release "+petName+" from your command."));
	}else{
		Chat((petName+" is no longer captivated."),3);
	}
	petName = "";
	$("#pethpbardiv").css('display','none');
}
$(".mobIcons").on('click','#charmIcon0,#charmIcon1,#charmIcon2,#charmIcon3,#charmIcon4',function(){
	if(my.job==="Enchanter"){
		cajolingWhispersExpire(TGT);
	}
	if(my.job==="Bard"){
		songOfTheSirensExpire(TGT)
	}
});

function colorShiftReady(){
	if(D.getElementById('colorshift').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('colorshift', false);
    BGP('colorshift', "-600% 0%");
	g.checkEnchanterSkills();
	refreshcolorShift.kill();
}
function colorShiftTimer(){
	refreshcolorShift = T.to('', .1, {repeat:-1, onRepeat:colorShiftReady});
}
function colorShift(){
	if(btn.d.colorshift===true||my.level<5){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = enc.cost.colorShift;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Color Shift";
	spellType = "alteration";
	playAudio("novaice");
	if(GLB.videoSetting==="High"){ animateNova('colorShift'); }
    setD('colorshift', true);
    BGP('colorshift', "-600% -100%");
	g.drawMyMp(-spellMpCost);
	T.delayedCall(20, colorShiftTimer);
	timerTick(D.getElementById('colorshift'),20000/1000,'colorshift');
	// stun effect - restart according monster slot
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""&&mob[i].charmStatus===false){
			if(statusResist(i)===true){
				Chat((mob[i].name+" resisted "+ currentSpell +"."),1);
			}else{
				var stunDuration=6000;
				if(my.talent2>=20 && M.random()>.65){
					stunDuration*=1.6;
					T.to(canvas[i], stunDuration/1000, {
						startAt:{
							rotationY:18000
						},
						rotationY:0
					});
					Chat(mob[i].name+" begins to spin.");
				}else{				
					Chat(mob[i].name+" is stunned by scintillating colors.");
				}
				stunTarget(i, stunDuration, -192);
				if(my.talent2>=1){
					var dam = minMax((alterationTotal())*(1+(talent2()*8.7)/100), .87);
					g.myMagicDamage("magic", dam, i, checkCrit(), "Color Shift");				
				}
			}
		}
	}
	beginGlobalCooldown();
	checkSpellLevelUp();
}
$(function(){
	$NG.window3.on('mouseenter','#colorshift',function(){
		var spellType = "Alteration";
		var CD = "20".fontcolor("#ff0000");
		var a=TTmag( (alterationTotal())*(1+(talent2()*8.7)/100), .87, "magic", "Color Shift");
		NG.tooltipname.innerHTML = "Color Shift";
		var s="Cost: "+green(enc.cost.colorShift)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Color Shift stuns all target for 6 seconds.";
		if(my.talent2>=1){
			s+="<BR><BR>Color Shift hits all targets for "+a[0]+" to "+a[1]+" arcane damage.";
		}
		if(my.talent2>=20){
			s+="<BR><BR>Effect: Color Shift has a "+green("35%")+" chance of Whirl Till You Hurl, which stuns your target for an additional "+green("3.6")+" seconds.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
function mesmerizeReady(){
	if(D.getElementById('mesmerize').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('mesmerize', false);
    BGP('mesmerize', "-700% 0%");
	g.checkEnchanterSkills();
	refreshmesmerize.kill();
}
function mesmerizeTimer(){
	refreshmesmerize = T.to('', .1, {repeat:-1, onRepeat:mesmerizeReady});
}
function mesmerize(){
	if(btn.d.mesmerize===true||my.level<7){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[TGT].charmStatus===true){
		Chat(("You cannot mesmerize your charmed pet."),3);
		return;
	}
	spellMpCost = enc.cost.mesmerize;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Mesmerize";
	spellCastTime = castSpeedTotal(2500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("purple");
	animateCastBar("mesmerize");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#mesmerize',function(){
		var spellType = "Conjuration";
		var CD = "6".fontcolor("#ff0000");
		var a=TTmag( (alterationTotal())*((talent10()*18.5)/100), .85, "magic", "Jubilee");
		// "+a[0]+" to "+a[1]+"
		if(my.talent10===0){
			var desc="Mesmerize your target for a random duration. Mesmerized targets will not attack until you attack them.";
			var name="Mesmerize";
		}else{
			var desc="Jubilee hits three targets for "+a[0]+" to "+a[1]+" arcane damage.";
			var name="Jubilee";
		}
		
		NG.tooltipname.innerHTML = name;
		var s="Cost: "+green(enc.cost.mesmerize)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>";
		s+=desc;
		NG.tooltipmsg.innerHTML = s;
	});
});
g.mesmerizeFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
    setD('mesmerize', true);
    BGP('mesmerize', "-700% -100%");
	T.delayedCall(6, mesmerizeTimer);
	timerTick(D.getElementById('mesmerize'),6000/1000,'mesmerize');
	var Slot = TGT;
	if(my.talent10<1){
		if(statusResist(Slot)===true||mob[Slot].rare===3){
			Chat((mob[Slot].name+" resisted "+ currentSpell +"."),1);
			return;
		}
		if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
		animateMesmerize(Slot);
		Chat((mob[Slot].name+" has been mesmerized."),3);
		var d = (5000+((chaTotal()-70)*450)+(M.random()*(chaTotal() *100)))*statusDurationReduction(Slot);
		d += g.conjurationEquip*500;
		if(mob[Slot].level > my.level){
			d -= (M.pow((mob[Slot].level - my.level),1.2));
		}
		if(d<15000){ d = 15000; }
		if(d>75000){ d = 75000; }
		sleepTarget(Slot, d, "Mesmerized", -224);
	}else{
		for(var i=0;i<=4;i++){
			if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
				animateJubilee(i);
				Chat((mob[i].name+" is blasted by a jubilee of light."),3);
				var d = 2500*statusDurationReduction(i);
				var dam = minMax((alterationTotal())*((talent10()*18.5)/100), .85);
				g.myMagicDamage("magic", dam, i, checkCrit(), "Jubilee");
				if(mob[i].name!==''){
					sleepTarget(i, d, "Mesmerized", -224);
				}
			}
		}	
	}
}
function animateMesmerize(Slot, size, color){
	if(GLB.videoSetting!=="High"){ return; }
	if(!size){ size=25; }
	var diff=(size-3)/2;
	if(!color){ color='white'; }
	var cY=MOB[Slot].offsetTop-(size/2);
	function animateLoop(count){
		var randomLeft = MOB[Slot].offsetLeft+((mob[Slot].imageWidth)/2)+M.random()*(200)-100-(size/2);
		var randomTop = cY+M.random()*(mob[Slot].cY)+10;
		var p1 = can(color+"particle50", 5, randomLeft, randomTop, size, size);
		var speed=M.random()*(2)+1;
		T.to(p1, speed, {
			scaleX:.1,
			scaleY:.1,
			x:randomLeft+diff,
			ease:ez.qin,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		T.to(p1, speed, {
			y:"+="+(M.random()*(mob[Slot].cY*2.5)+size),
			ease:ez.sin
		});
		count++;
		if(count <= 40){ animateLoop(count); }
	}
	animateLoop(0);
}

function animateJubilee(Slot, size, color){
	if(GLB.videoSetting!=="High"){ return; }
	if(!size){ size=50; }
	var diff=(size-3)/2;
	if(!color){ color='white'; }
	var cY=MOB[Slot].offsetTop-(size/2);
	function animateLoop(count){
		var randomLeft = MOB[Slot].offsetLeft+((mob[Slot].imageWidth)/2)+M.random()*(200)-100-(size/2);
		var randomTop = cY+M.random()*(mob[Slot].cY)+10;
		var p1 = can(color+"particle50", 5, randomLeft, randomTop, 25, 25);
		var speed=M.random()*(1.5)+.5;
		T.to(p1, speed, {
			x:randomLeft+diff,
			scaleX:.1,
			scaleY:.1,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		T.to(p1, speed, {
			y:"+="+(M.random()*(mob[Slot].cY*2.5)+size),
			ease:ez.Qin
		});
		if(count <= 60){ animateLoop(++count); }
	}
	animateLoop(0);
}
function discordantBarrier(){
	if(btn.d.discordantbarrier===true||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = enc.cost.discordantBarrier;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Discordant Barrier";
	spellCastTime = castSpeedTotal(4000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("discordantBarrier");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#discordantbarrier',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var v1 = abjurationTotal();
		var v2 = talent3();
		var value1 = ( M.ceil( (v1*.18)*((v2*6.8/100)+1) )+"").fontcolor("#00ff00");
		var value2 = ( M.ceil( (v1*.4)*((v2*8.3/100)+1) )+"").fontcolor("#00ff00");
		var value3 = ( M.ceil(v1*.3)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Discordant Barrier";
		NG.tooltipmsg.innerHTML = "Cost: "+green(enc.cost.discordantBarrier)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(4000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Discordant Barrier buffs your armor by "+value1+", your hit points by "+value2+", and your magic resistance by "+value3+" for "+duration+" minutes.";
	});
});
g.discordantBarrierFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You are encased by a translucent shield."),3);
	if(discordantBarrierStatus===true){
		maxHpBuff-=discordantBarrierHpBoost;
		armorBuff-=discordantBarrierArmorBoost;
		svmagicBuff-=discordantBarrierMagicBoost;
	}
	discordantBarrierTimeout.kill();
	discordantBarrierTimeout = T.delayedCall(3240, discordantBarrierExpire);
	var v1 = abjurationTotal();
	var v2 = talent3();
	discordantBarrierArmorBoost = M.ceil( (v1*.18)*((v2*6.8/100)+1) );
	discordantBarrierHpBoost = M.ceil( (v1*.4)*((v2*8.3/100)+1) );	
	discordantBarrierMagicBoost = M.ceil(v1*.3);
	maxHpBuff+=discordantBarrierHpBoost;
	armorBuff+=discordantBarrierArmorBoost;
	svmagicBuff+=discordantBarrierMagicBoost;
	discordantBarrierStatus=true;
	g.drawMyHp();
	CStat();
	var skillName = "Discordant Barrier";
	var buffId = "hpbuffIcon";
	var duration = 3240000;
	var spriteX = -448;
	hpbuffIconTimer.kill();
	hpbuffIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff("teal",'easeInBack', 5, 25, 120, 4);
}
function discordantBarrierExpire(){
	discordantBarrierStatus=false;
	maxHpBuff-=discordantBarrierHpBoost;
	armorBuff-=discordantBarrierArmorBoost;
	svmagicBuff-=discordantBarrierMagicBoost;
	CStat();
	g.drawMyHp();
}

function shiftlessDeedsReady(){
	if(D.getElementById('shiftlessdeeds').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('shiftlessdeeds', false);
    BGP('shiftlessdeeds', "-800% 0%");
	g.checkEnchanterSkills();
	refreshshiftlessDeeds.kill();
}
function shiftlessDeedsTimer(){
	refreshshiftlessDeeds = T.to('', .1, {repeat:-1, onRepeat:shiftlessDeedsReady});
}
function shiftlessDeeds(){
	if(btn.d.shiftlessdeeds===true||my.level<11){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[TGT].charmStatus===true){
		Chat(("You cannot slow your charmed pet."),3);
		return;
	}
	spellMpCost = enc.cost.shiftlessDeeds;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Shiftless Deeds";
	spellCastTime = castSpeedTotal(2500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("white");
	animateCastBar("shiftlessDeeds");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#shiftlessdeeds',function(){
		var spellType = "Alteration";
		var CD = "15".fontcolor("#ff0000");
		var target="your target's";
		if(my.talent6>=20){
			target="three targets";
		}
		var a=TTdot( (alterationTotal()/3.7)*((talent6()/24)), .9, "cold", "Shiftless Frost"); // "+a[0]+" to "+a[1]+"
		NG.tooltipname.innerHTML = "Shiftless Deeds";
		var s="Cost: "+green(enc.cost.shiftlessDeeds)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Shiftless Deeds slows "+target+"' attack speed by 1.5 seconds for 2 minutes.";
		if(my.talent6>=1){
			s+="<BR><BR>Shiftless Frost hits "+target+" and ticks for "+a[0]+" to "+a[1]+" cold damage every second for 35 seconds.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.shiftlessDeedsFinish=function(){
	if(endSpell()===false){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	playAudio("spellDoneHeal");
	var Slot = TGT;
    setD('shiftlessdeeds', true);
    BGP('shiftlessdeeds', "-800% -100%");
	T.delayedCall(15, shiftlessDeedsTimer);
	timerTick(D.getElementById('shiftlessdeeds'),15000/1000,'shiftlessdeeds');
	g.drawMyMp(-spellMpCost);
	if(statusResist(Slot)===true){
		Chat((mob[Slot].name+" resisted "+ currentSpell +"."),1);
	}else{
		var multi=false;
		if(my.talent6>=20){ multi=true; }
		for(var i=0;i<=4;i++){
			if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
				if(i===Slot||multi===true){
					if(mob[i].charmStatus===false){
						animateDot(i,"white",250,60,50,100,ez.Qinout);
						shiftlessTarget(i);
						if(my.talent6>=1){
							var max=M.ceil((alterationTotal()/3.7)*((talent6()/24)))			
							executeDot(i, minMax(max,.9), 35, 1000, "cold", "Shiftless Frost", "shiftlessFrost", -256, -32, true);
						}
					}
				}
			}
		}
	}
}
function shiftlessTarget(Slot){
	mob[Slot].shiftlessStatus=true;
	Chat((mob[Slot].name+" slows down."),3);
	mob[Slot].shiftlessDeedsTimeout.kill(); 
	mob[Slot].shiftlessDeedsTimeout = T.delayedCall(120, function(){ 
		shiftlessDeedsExpire(Slot); 
	});
	addMobBuffIcon("Shiftless Deeds",Slot,"slowIcon",120000,-256);
}
function shiftlessDeedsExpire(Slot){
	mob[Slot].shiftlessDeedsTimeout.kill();
	mob[Slot].shiftlessStatus=false;
}

function enchantWeapon(){
	if(btn.d.enchantweapon===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = enc.cost.enchantWeapon;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Enchant Weapon";
	spellCastTime = castSpeedTotal(3000);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("enchantWeapon");
	playAudio("spellCastAbjure",0,spellCastTime);
}

function charmEnchantStrike(){
	var max = M.ceil( (conjurationTotal()/2.4)*(1+(talent7()*6.2)/100) );	
	g.myMagicDamage("magic",minMax(max, .85),TGT,false,"Enchant Weapon");
	if(my.talent7>=20){
		var x=M.random()*(1);
		if(x>.75){
			var max = M.ceil( (conjurationTotal()/2.8)*(1+(talent7()*6.2)/100) );
			g.myMagicDamage("poison",minMax(max,.8),TGT,false,"Enchant Weapon");
		}else if(x>.5){
			var max = M.ceil( (conjurationTotal()/2)*(1+(talent7()*6.2)/100) );
			g.myMagicDamage("lightning",minMax(max,.25),TGT,false,"Enchant Weapon");
		}else if(x>.25){
			var max = M.ceil( (conjurationTotal()/3.3)*(1+(talent7()*6.2)/100) );
			g.myMagicDamage("cold",minMax(max,.9),TGT,false,"Enchant Weapon");
		}else{
			var max = M.ceil( (conjurationTotal()/2.5)*(1+(talent7()*6.2)/100) );
			g.myMagicDamage("fire",minMax(max,.6),TGT,false,"Enchant Weapon");
		}
	}
}
$(function(){
	$NG.window3.on('mouseenter','#enchantweapon',function(){
		var spellType = "Conjuration";
		var duration = "30".fontcolor("#00ff00");		
		var a=TTmag( M.ceil( (conjurationTotal()/2.4)*(1+(talent7()*6.2)/100) ), .85, "magic", "Enchant Weapon");
		NG.tooltipname.innerHTML = "Enchant Weapon";
		var s = "Cost: "+green(enc.cost.enchantWeapon)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Enchant Weapon enchants your weapon with "+a[0]+" to "+a[1]+" arcane damage for "+duration+" minutes.";
		if(my.talent7>=20){
			s+= "<BR><BR>A second random type of magical attack hits your target:";
			var b = TTmag( M.ceil( (conjurationTotal()/2.8)*(1+(talent7()*6.2)/100) ), .8, "poison", "Enchant Weapon");
			s+= "<br>"+b[0]+" to "+b[1]+" poison damage";
			var c = TTmag( M.ceil( (conjurationTotal()/2)*(1+(talent7()*6.2)/100) ), .25, "lightning", "Enchant Weapon");
			s+= "<br>"+c[0]+" to "+c[1]+" lightning damage";
			var d = TTmag( M.ceil( (conjurationTotal()/3.3)*(1+(talent7()*6.2)/100) ), .9, "cold", "Enchant Weapon");
			s+= "<br>"+d[0]+" to "+d[1]+" cold damage";
			var e = TTmag( M.ceil( (conjurationTotal()/2.5)*(1+(talent7()*6.2)/100) ), .6, "fire", "Enchant Weapon");
			s+= "<br>"+e[0]+" to "+e[1]+" fire damage";
		
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.enchantWeaponFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	animateBuff('teal','easeInBack', 5, 25, 150, 3);
	g.drawMyMp(-spellMpCost);
	Chat(("Your weapon shimmers with fluxing strands of chaos."),3);
	enchantWeaponStatus=true;
	enchantWeaponTimeout.kill(); 
	enchantWeaponTimeout = T.delayedCall(1800, enchantWeaponExpire);
	var skillName = "Enchant Weapon";
	var buffId = "enchantWeaponIcon";
	var duration = 1800000;
	var spriteX = -480;
	enchantWeaponIconTimer.kill();
	enchantWeaponIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
}
function enchantWeaponExpire(){
	enchantWeaponStatus=false;
}

function adorningGrace(){
	if(btn.d.adorninggrace===true||my.level<15){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = enc.cost.adorningGrace;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Adorning Grace";
	spellCastTime = castSpeedTotal(3500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("purple");
	animateCastBar("adorningGrace");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#adorninggrace',function(){
		var spellType = "Abjuration";
		var duration = "24".fontcolor("#00ff00");
		var v1 = abjurationTotal();
		var value1 = ( M.ceil(v1*.2)+"").fontcolor("#00ff00");
		var value2 = ( M.ceil(v1*.08)+"").fontcolor("#00ff00");
		var value3 = ( M.ceil(v1*.08)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Adorning Grace";
		NG.tooltipmsg.innerHTML = "Cost: "+green(enc.cost.adorningGrace)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Adorning Grace buffs your wisdom by "+value1+", your intelligence by "+value2+", and your charisma by "+value3+" for "+duration+" minutes.";
	});
});
g.adorningGraceFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You are adorned by an aura of radiant grace."),3);
	if(adorningGraceStatus===true){
		chaBuff-=adorningGraceCha;
		intelBuff-=adorningGraceIntel;
		wisBuff-=adorningGraceWis;
	}
	adorningGraceTimeout.kill();
	adorningGraceTimeout = T.delayedCall(1440, adorningGraceExpire);
	var v1 = abjurationTotal();
	adorningGraceCha = M.ceil(v1*.08);
	adorningGraceIntel = M.ceil(v1*.08);
	adorningGraceWis = M.ceil(v1*.2);
	chaBuff+=adorningGraceCha;
	intelBuff+=adorningGraceIntel;
	wisBuff+=adorningGraceWis;
	adorningGraceStatus=true;
	CStat();
	var skillName = "Adorning Grace";
	var buffId = "adorningGraceIcon";
	var duration = 1440000;
	var spriteX = -512;
	adorningGraceIconTimer.kill();
	adorningGraceIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff('purple','easeInBack', 5, 25, 120, 3);
}
function adorningGraceExpire(){
	adorningGraceStatus=false;
	chaBuff-=adorningGraceCha;
	intelBuff-=adorningGraceIntel;
	wisBuff-=adorningGraceWis;
	CStat();
}


function alacrityReady(){
	if(D.getElementById('alacrity').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('alacrity', false);
    BGP('alacrity', "-900% 0%");
	g.checkEnchanterSkills();
	refreshalacrity.kill();
}
function alacrityTimer(){
	refreshalacrity = T.to('', .1, {repeat:-1, onRepeat:alacrityReady});
}
function alacrity(){
	if(btn.d.alacrity===true||my.level<17){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = enc.cost.alacrity;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Alacrity";
	spellCastTime = castSpeedTotal(2500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("alacrity");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#alacrity',function(){
		var spellType = "Alteration";
		var minimum = "40%".fontcolor("#00ff00");
		var duration = "5".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Alacrity";
		NG.tooltipmsg.innerHTML = "Cost: "+green(enc.cost.alacrity)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Alacrity creates an aura that buffs your haste by "+minimum+" for "+duration+" minutes. This aura automatically affects charmed allies.";
	});
});
g.alacrityFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	Chat(("You feel much faster."),3);
	alacrityTimeout.kill();
	alacrityTimeout = T.delayedCall(300, function(){ 
		alacrityExpire(Slot) 
	});
	alacrityStatus=true;
	addBuffIcon("Alacrity","hasteIcon",300000,-288);
	animateBuff("teal",'easeInQuad', 25, 11, 120, 2);
	CStat();
}
function alacrityExpire(Slot){
	alacrityStatus=false;
	CStat();
}

function gravityFluxReady(){
	if(D.getElementById('gravityflux').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('gravityflux', false);
    BGP('gravityflux', "-1000% 0%");
	g.checkEnchanterSkills();
	refreshgravityFlux.kill();
}
function gravityFluxTimer(){
	refreshgravityFlux = T.to('', .1, {repeat:-1, onRepeat:gravityFluxReady});
}
function gravityFlux(){
	if(btn.d.gravityflux===true||my.level<20){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = enc.cost.gravityFlux;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Gravity Flux";
	spellType = "evocation";
	spellCastTime = castSpeedTotal(2000);
	if(startSpell()===false){ return; }
	animateParticlesDown("magenta");
	animateCastBar("gravityFlux");
	playAudio("spellCastEvoke2",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#gravityflux',function(){
		var spellType = "Evocation";
		var CD = "20".fontcolor("#ff0000");
		if(my.talent11>=20){
			CD=green("12");
		}
		var a=TTmag( evocationTotal()*2.7, .85, "magic", "Gravity Flux");
		NG.tooltipname.innerHTML = "Gravity Flux";
		NG.tooltipmsg.innerHTML = "Cost: "+green(enc.cost.gravityFlux)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Gravity Flux hits all targets for "+a[0]+" to "+a[1]+" arcane damage. All targets are launched up in the air and take falling damage upon landing.<br><br>"+
		"Effect: Interrupts all targets' spells.";
	});
});
g.gravityFluxFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneFlames");
    setD('gravityflux', true);
    BGP('gravityflux', "-1000% -100%");
	var d=20000;
	if(my.talent11>=20){ d=12000; }
	T.delayedCall(d/1000, gravityFluxTimer);
	timerTick(D.getElementById('gravityflux'),d/1000,'gravityflux');
	g.drawMyMp(-spellMpCost);
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""&&mob[i].charmStatus===false){
			var damage = minMax(evocationTotal()*2.7, .85);
			animateSmite(i);
			g.myMagicDamage("magic", damage, i, checkCrit(), "Gravity Flux");
			interruptTarget(i);
			mob[i].fallingStatus=true;
			animateFlux(i);
			addMobBuffIcon("Gravity Flux",i,"stunIcon",1400,-320);
			gravityFluxLand(i);
		}
	}
}
function animateFlux(i){
	if(mob[i].name===''){ return; }
	var tl1=TM();
	var tl2=TM();
	stopMob(i);
	if(!mob[i].phased){ 
		MOB[i].style.opacity=1;
		canvas[i].style.opacity=1;
	}else{
		MOB[i].style.opacity=1;
		canvas[i].style.opacity=.5;
	}
	tl1.to(MOB[i], .7, {
		bottom:1056, 
		force3D:"auto",ease:ez.qout
	}).to(MOB[i], .7, {
		bottom:floorB, 
		force3D:"auto",ease:ez.qin
	});
	tl2.to(MOBSHADOW[i], .7, {
		width:"60%",height:30,bottom:-890,
		force3D:"auto",
		ease:ez.qout
	}).to(MOBSHADOW[i], .7, {
		width:"100%",height:50,bottom:0,
		force3D:"auto",
		ease:ez.qin
	});
}
function gravityFluxLand(Slot){
	function gravityFluxHit(Slot){
		var damage2 = 0;
		var S = mob[Slot];
		if(S.rare===3){
			damage2 = M.round(S.maxHp*.025);
		}else if(S.rare===1){
			damage2 = M.round(S.maxHp*.1);
		}else{
			damage2 = M.round(S.maxHp*.066);
		}
		calculateSpellDamage3(damage2, Slot);
		function doneFalling(){ 
			mob[Slot].fallingStatus=false; 
		}
		T.delayedCall(1.4, doneFalling);
	}
	T.delayedCall(1.4, function(){
		gravityFluxHit(Slot);
		removeMobIcon("stunIcon",Slot);
	});
}

function animatePsychicBeam(Slot,total){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX-150);
	var y2 = 580-1200;
	function doit(count){
		if(mob[Slot].sleepStatus===true ||
			mob[Slot].charmStatus===true||
			mob[Slot].name===''){ return; }
		var p5 = can('windmillKick', 7, x2, y2, 300, 0);
		T.to(p5, .2, {
			scaleY:1300/200,
			ease:ez.Qin
		});
		T.to(p5, .2, {
			scaleY:0,
			alpha:0,
			y:560,
			delay:.2,
			onComplete:function(){
				cRem(7, p5);
			}
		});	
		var p4 = can('windmillKick', 7, x2-600, y2, 1500, 0);
		T.to(p4, .2, {
			scaleY:1300/200,
			ease:ez.Qin
		});
		T.to(p4, .75, {
			alpha:0,
			scaleX:2100/200,
			x:x2-900,
			delay:.2,
			onComplete:function(){
				cRem(7, p4);
			}
		});
		animateTremor();
		var max = M.ceil(evocationTotal()/8);
		g.myMagicDamage("magic", minMax(max, .2), Slot, false, "Psychic Beam");	
		if(count<total){
			T.delayedCall(.1, function(){
				doit(++count);
			});
		}
	}
	doit(0);
}

function mysticRuneReady(){
	if(D.getElementById('mysticrune').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;}
    setD('mysticrune', false);
    BGP('mysticrune', "-1100% 0%");
	g.checkEnchanterSkills();
	refreshmysticRune.kill();
}
function mysticRuneTimer(){
	refreshmysticRune = T.to('', .1, {repeat:-1, onRepeat:mysticRuneReady});
}
function mysticRune(){
	if(my.hp<=0||paused===true){ return; }
	if(btn.d.mysticrune===true||my.level<24){ return;}
	spellMpCost = enc.cost.mysticRune;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Mystic Rune";
	spellType = "abjuration";
	spellCastTime = castSpeedTotal(1500);
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("mysticRune");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#mysticrune',function(){
		var spellType = "Abjuration";
		var CD = 40;
		if(Set.Satyr>=6){ CD -= 10; }
		var minimum = ( M.ceil( (abjurationTotal()*1.1) *(1+(talent4()*2.1)/100) )+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Mystic Rune";
		NG.tooltipmsg.innerHTML = "Cost: "+green(enc.cost.mysticRune)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Mystic Rune surrounds you and absorbs "+minimum+" damage until it is depleted.";
	});
});
g.mysticRuneFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
    setD('mysticrune', true);
    BGP('mysticrune', "-1100% -100%");
	var d = 40000;
	 if(Set.Satyr>=6){ d -= 10000; }
	T.delayedCall(d/1000, mysticRuneTimer);
	timerTick(D.getElementById('mysticrune'),d/1000,'mysticrune');
	Chat(("A dark shimmer of runes surrounds you."),3);
	g.drawMyMp(-spellMpCost);
	shieldHp = M.ceil( (abjurationTotal()*1.1) *(1+(talent4()*2.1)/100) );
	var buffId = "shieldHpIcon";
	removeIcon(buffId);
	addBuffIcon("Mystic Rune",buffId,0,-352);
	if(GLB.videoSetting==="High"){ animateMysticRune(); }
}
function animateMysticRune(){
	flashScreen("#08f", .3, 2);
	var e1 = can('mysticRune', 5, 440, 297, 400, 400, true);
	T.to(e1, 3, {
		y:720,
		alpha:0, 
		rotation:1440,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	animateBuffRings();
}
function animateBuffRings(img, total){
	if(!img){
		img = 'buffRings';
	}
	if(!total){
		total = 5;
	}
	function goRings(count){
		var p1 = can(img, 6, 0, -60, 1280, 50);
		T.to(p1, .8, {
			y:720,
			ease:ez.sout,
			onComplete:function(){
				cRem(6, p1);
			}
		});
		count++;
		if(count<total){ 
			T.delayedCall(.1, function(){ 
				goRings(count);
			});
		}
	}
	goRings(0);
}
function tashaniaReady(){
	if(D.getElementById('tashania').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;}
    setD('tashania', false);
    BGP('tashania', "-1200% 0%");
	g.checkEnchanterSkills();
	refreshtashania.kill();
}
function tashaniaTimer(){
	refreshtashania = T.to('', .1, {repeat:-1, onRepeat:tashaniaReady});
}
function tashania(){
	if(btn.d.tashania===true||my.level<28){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = enc.cost.tashania;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Tashania";
	spellCastTime = castSpeedTotal(1500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("orange");
	animateCastBar("tashania");
	playAudio("spellCastDot",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#tashania',function(){
		var spellType = "Abjuration";
		var CD = "8".fontcolor("#00ff00");
		var value1 = (M.round(abjurationTotal()/20)+"%").fontcolor("#00ff00");
		var a=TTdot( (abjurationTotal()/2.1)*((talent12()/24)), .9, "magic", "Tashania's Bark");
		NG.tooltipname.innerHTML = "Tashania";
		var s="Cost: "+green(enc.cost.tashania)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Tashania increases arcane damage on all targets' by "+value1+".";
		if(my.talent12>=20){
			s+="<BR><BR>Tashania's Bark hits all targets and ticks for "+a[0]+" to "+a[1]+" arcane damage over "+green("20")+" seconds. Tashania's Bark can stack multiple times.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.tashaniaFinish=function(){
	if(endSpell()===false){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
    setD('tashania', true);
    BGP('tashania', "-1200% -100%");
	T.delayedCall(8, tashaniaTimer);
	timerTick(D.getElementById('tashania'),8000/1000,'tashania');
	playAudio("spellDoneHeal");
	g.drawMyMp(-spellMpCost);
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""){
			mob[i].tashaniaStatus=true;
			Chat((mob[i].name+" hears the barking of Tashania."),3);
			addMobBuffIcon("Tashania",i,"tashaniaIcon",0,-384);
			if(my.talent12>=1){
				var dam=minMax((abjurationTotal()/2.1)*((talent12()/24)), .9);
				executeDot(i, dam, 20, 1000, "magic", "Tashania's Bark", "tashaniasBark", -384, -32, true);
			}
		}
	}
	animateDebuff("orange");
}

function clarity(){
	if(checkBashFear()===true){ return; }
	if(btn.d.clarity===true||my.level<32){ return;}
	spellMpCost = enc.cost.clarity;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Clarity";
	spellType = "alteration";
	spellCastTime = castSpeedTotal(3000);
	if(startSpell()===false){ return; }
	animateParticlesUp("blue");
	animateCastBar("clarity");
}
$(function(){
	$NG.window3.on('mouseenter','#clarity',function(){
		var spellType = "Alteration";
		var duration = "30".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Clarity";
		NG.tooltipmsg.innerHTML = "Cost: "+green(enc.cost.clarity)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Clarity buffs your mana regeneration for "+duration+" minutes.";
	});
});
g.clarityFinish=function(){
	if(endSpell()===false){ return; }
	Chat(("A cool breeze slips through your mind."),3);
	g.drawMyMp(-spellMpCost);
	clarityTimeout.kill(); 
	clarityTimeout = T.delayedCall(1800, function(){ clarityExpire() });
	clarityStatus=true;
	var skillName = "Clarity";
	var buffId = "clarityIcon";
	var duration = 1800000;
	var spriteX = -544;
	clarityIconTimer.kill();
	clarityIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff('blue','easeInBack', 5, 25, 100, 6);
}
function clarityExpire(Slot){
	clarityStatus = false;
}


function enthrallReady(){
	if(D.getElementById('enthrall').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('enthrall', false);
    BGP('enthrall', "-1300% 0%");
	g.checkEnchanterSkills();
	refreshenthrall.kill();
}
function enthrallTimer(){
	refreshenthrall = T.to('', .1, {repeat:-1, onRepeat:enthrallReady});
}
function enthrall(){
	if(btn.d.enthrall===true||my.level<38){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = enc.cost.enthrall;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Enthrall";
	spellCastTime = castSpeedTotal(1500);
	spellType = "conjuration";
	if(startSpell()===false){ return; }
	animateParticlesDown("purple");
	animateCastBar("enthrall");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#enthrall',function(){
		var spellType = "Conjuration";
		var CD = "25".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Enthrall";
		NG.tooltipmsg.innerHTML = "Cost: "+green(enc.cost.enthrall)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(1500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Enthrall mesmerizes all targets for a random duration. Mesmerized targets will not attack until you attack them.";
	});
});
g.enthrallFinish=function(){
	if(endSpell()===false){ return; }
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
	playAudio("spellDoneBuff");
    setD('enthrall', true);
    BGP('enthrall', "-1300% -100%");
	T.delayedCall(25, enthrallTimer);
	timerTick(D.getElementById('enthrall'),25000/1000,'enthrall');
	g.drawMyMp(-spellMpCost);
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""&&mob[i].charmStatus===false){
			if(statusResist(i)===true||mob[i].rare===3){
				Chat((mob[i].name+" resisted "+ currentSpell +"."),1);
				continue;
			}else{
				Chat((mob[i].name+" has been enthralled."),3);
				var d = (2500+( ((chaTotal() -70)*380)+(M.random()*(chaTotal() *70))))*statusDurationReduction(i);
				d += g.conjurationEquip*600;
				if(mob[i].level > my.level){
					d -= (M.pow((mob[i].level - my.level),1.2));
				}
				if(d<11000){ d = 11000; }
				if(d>55000){ d = 55000; }
				if(!mob[i].phased&&mob[i].name){ MOB[i].style.opacity=1; }
				sleepTarget(i, d, "Mesmerized", -416);
				animateMesmerize(i);
			}
		}
	}
}
function lavaBoltReady(){
	if(D.getElementById('lavabolt').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('lavabolt', false);
    BGP('lavabolt', "-300% 0%");
	g.checkMagicianSkills();
	refreshlavaBolt.kill();
}
function lavaBoltTimer(){
	refreshlavaBolt = T.to('', .1, {repeat:-1, onRepeat:lavaBoltReady});
}
function lavaBolt(){
	if(btn.d.lavabolt===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	currentSpell = "Lava Bolt";
	spellType = "conjuration";
	spellCastTime = castSpeedTotal(3000);
	if(startSpell()===false){ return; }
	animateParticlesDown("red");
	animateCastBar("lavaBolt");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#lavabolt',function(){
		var spellType = "Conjuration";
		var a=TTmag( 3+conjurationTotal()*2.3, .8, "fire", "Lava Bolt");
		NG.tooltipname.innerHTML = "Lava Bolt";
		NG.tooltipmsg.innerHTML = "Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Lava Bolt hits your target for "+a[0]+" to "+a[1]+" fire damage.";
	});
});
g.lavaBoltFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBoom");
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animateLavaBolt(Slot); }
	var damage = minMax(3+conjurationTotal()*2.3,.8);
	g.myMagicDamage("fire", damage, Slot, checkCrit(), "Lava Bolt");
	if(my.talent5>=20&&petName===""){
		if(petLastCast==='a fire elemental'){
			g.fireElementalFinish(true);
		}else if(petLastCast==='an earth elemental'){
			g.earthElementalFinish(true);
		}else if(petLastCast==='an air elemental'){
			g.airElementalFinish(true);
		}else if(petLastCast==='a frost elemental'){
			g.frostElementalFinish(true);
		}
		petTarget=TGT;
		togglePetAutoAttackStatus();
	}
}
function animateLavaBolt(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY;
	var x2 = (cX-100);
	var y2 = (cY-100);
	var e1 = can('lavaBolt', 5, x2, y2, 200, 200, true);
	T.to(e1, .8, {
		scaleX:2,
		scaleY:2,
		alpha:0,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	particleBurst(Slot,'orange','blank');
}


function earthElemental(){
	if(btn.d.earthelemental===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(g.petAlive===true){
		killPet();
		playAudio("elem_die3");
		BGP('earthelemental', "-1700% 0");
		g.checkMagicianSkills();
		return;
	}
	spellMpCost = mag.cost.elemental;
	if(my.mp<spellMpCost){ return; }
	if(g.petAlive===false){
		currentSpell = "Earth Elemental";
		spellCastTime = castSpeedTotal(6000);
		spellType = "conjuration";
		if(startSpell()===false){ return; }
		animateParticlesUp("green");
		animateCastBar("earthElemental");
		playAudio("spellCastAbjure");
		preload(['/images1/an earth elemental.png']);
	}
}
$(function(){
	$NG.window3.on('mouseenter','#earthelemental',function(){
		var spellType = "Conjuration";
		NG.tooltipname.innerHTML = "Earth Elemental";
		NG.tooltipmsg.innerHTML = "Cost: "+green(mag.cost.elemental)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(6000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Summon an Earth Elemental to fight by your side. Earth Elementals have high health, good resistance against all elements, strong lightning resistance, strong defense, and cast snare.";
	});
});
g.earthElementalFinish=function(proc){
	if(!proc){
		if(endSpell()===false){ return; }
		castingSpell = 1;
		g.drawMyMp(-spellMpCost);
	}
	playAudio("elem_att3");
	Chat((my.name+" summons an Earth Elemental."),3);
	petLevel=~~(my.level/1.2)+1;
	petWidth=300+M.ceil(petLevel/3);
	petHeight=(petWidth*1.156);
	petImage="an earth elemental";
	petLastCast = petImage;
	petMaxHp=M.ceil( (50+(petLevel*55))*(1+(talent5()*.131)) );
	petHp=petMaxHp;
	createPetName();
	petStr=M.ceil(petLevel*2);
	petDef=M.ceil(petLevel*3);
	petPoison=150;
	petMagic=150;
	petLightning=300;
	petFire=150;
	petCold=150;
	petSkill1="snare"; petSkill2="snare"; petSkill3="snare"; petSkill4="snare"; 
	petCastingFrequency=5;
	g.petAlive=true;
	petSpeed=3000;
	petPosition=1;
	$("#pethpbardiv").css('display','block');
	BGP('earthelemental', "-200% -100%");
	g.drawMyHp();
	var leftAdjust = 190+((290-petWidth)/2);
	$NG.petImage.attr("src","/images1/an earth elemental.png").width(petWidth+"px");
	$NG.mob5.stop(true,true).height(petHeight).width(petWidth+"px")
		.css({"left":leftAdjust,"bottom":60,opacity:1,display:"block"});
	var nameWid=$("#petName").width();
	var ADJ=(petWidth/2)-(nameWid/2);
	$("#petName").css("left",ADJ);
}

function airElemental(){
	if(btn.d.airelemental===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(g.petAlive===true){
		killPet();
		playAudio("elem_die3");
		BGP('airelemental', "-1700% -100%");
		g.checkMagicianSkills();
		return;
	}
	spellMpCost = mag.cost.elemental;
	if(my.mp<spellMpCost){ return; }
	if(g.petAlive===false){
		currentSpell = "Air Elemental";
		spellCastTime = castSpeedTotal(6000);
		spellType = "conjuration";
		if(startSpell()===false){ return; }
		animateParticlesUp("white");
		animateCastBar("airElemental");
		playAudio("spellCastAbjure");
		preload(['/images1/an air elemental.png']);
	}
}
$(function(){
	$NG.window3.on('mouseenter','#airelemental',function(){
		var spellType = "Conjuration";
		NG.tooltipname.innerHTML = "Air Elemental";
		NG.tooltipmsg.innerHTML = "Cost: "+green(mag.cost.elemental)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(6000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Summon an Air Elemental to fight by your side. Air Elementals have medium health, good magic and lightning resistance, strong offense, increased attack speed, and bash their targets.";
	});
});
g.airElementalFinish=function(proc){
	if(!proc){
		if(endSpell()===false){ return; }
		castingSpell = 1;
		g.drawMyMp(-spellMpCost);
	}
	playAudio("elem_att3");
	Chat((my.name+" summons an Air Elemental."),3);
	petLevel=~~(my.level/1.2)+1;
	petWidth=300+M.ceil(petLevel/3);
	petHeight=(petWidth*1.13);
	petImage="an air elemental";
	petLastCast = petImage;
	petMaxHp=M.ceil( (50+(petLevel*45))*(1+(talent5()*.131)) );
	petHp=petMaxHp;
	createPetName();
	petStr=M.ceil(petLevel*3);
	petDef=M.ceil(petLevel*2);
	petPoison=100;
	petMagic=200;
	petLightning=200;
	petFire=100;
	petCold=100;
	petSkill1="bash"; petSkill2="bash"; petSkill3="bash"; petSkill4="bash"; petCastingFrequency=9;
	g.petAlive=true;
	petSpeed=2400;
	petPosition=1;
	$("#pethpbardiv").css('display','block');
	BGP('airelemental', "-200% -100%");
	g.drawMyHp();
	var leftAdjust = 190+((290-petWidth)/2);
	$NG.petImage.attr("src","/images1/an air elemental.png").width(petWidth+"px");
	$NG.mob5.stop(true,true).height(petHeight).width(petWidth+"px")
		.css({"left":leftAdjust,"bottom":60,opacity:1,display:"block"});
	var nameWid=$("#petName").width();
	var ADJ=(petWidth/2)-(nameWid/2);
	$("#petName").css("left",ADJ);
}

function fireElemental(){
	if(btn.d.fireelemental===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(g.petAlive===true){
		killPet();
		playAudio("elem_die3");
		BGP('fireelemental', "-1700% -200%");
		g.checkMagicianSkills();
		return;
	}
	spellMpCost = mag.cost.elemental;
	if(my.mp<spellMpCost){ return; }
	if(g.petAlive===false){
		currentSpell = "Fire Elemental";
		spellCastTime = castSpeedTotal(6000);
		spellType = "conjuration";
		if(startSpell()===false){ return; }
		animateParticlesUp("red");
		animateCastBar("fireElemental");
		playAudio("spellCastAbjure");
		preload(['/images1/a fire elemental.png']);
	}
}
$(function(){
	$NG.window3.on('mouseenter','#fireelemental',function(){
		var spellType = "Conjuration";
		NG.tooltipname.innerHTML = "Fire Elemental";
		NG.tooltipmsg.innerHTML = "Cost: "+green(mag.cost.elemental)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(6000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Summon an Fire Elemental to fight by your side. Fire Elementals have weak health, strong offense, strong fire resistance, increased attack speed, and cast burst of flame. They are covered in a shield of flames which reflects fire damage when physically attacked.";
	});
});
g.fireElementalFinish=function(proc){
	if(!proc){
		if(endSpell()===false){ return; }
		castingSpell = 1;
		g.drawMyMp(-spellMpCost);
	}
	playAudio("elem_att3");
	Chat((my.name+" summons a Fire Elemental."),3);
	petLevel=~~(my.level/1.2)+1;
	petWidth=300+M.ceil(petLevel/3);
	petHeight=(petWidth*1.12);
	petImage="a fire elemental";
	petLastCast = petImage;
	petMaxHp=M.ceil( (50+(petLevel*35))*(1+(talent5()*.131)) );
	petHp=petMaxHp;
	createPetName();
	petStr=M.ceil(petLevel*3);
	petDef=M.ceil(petLevel*2);
	petPoison=100;
	petMagic=100;
	petLightning=100;
	petFire=300;
	petCold=50;
	petSkill1="burstofflame"; petSkill2="burstofflame"; petSkill3="burstofflame"; petSkill4="burstofflame"; petCastingFrequency=7;
	g.petAlive=true;
	petSpeed=2200;
	petPosition=1;
	$("#pethpbardiv").css('display','block');
	BGP('fireelemental', "-200% -100%");
	g.drawMyHp();
	var leftAdjust = 190+((290-petWidth)/2);
	$NG.petImage.attr("src","/images1/a fire elemental.png").width(petWidth+"px");
	$NG.mob5.stop(true,true).height(petHeight).width(petWidth+"px")
		.css({"left":leftAdjust,"bottom":60,opacity:1,display:"block"});
	var nameWid=$("#petName").width();
	var ADJ=(petWidth/2)-(nameWid/2);
	$("#petName").css("left",ADJ);
}

function frostElemental(){
	if(btn.d.frostelemental===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	if(g.petAlive===true){
		killPet();
		playAudio("elem_die3");
		BGP('frostelemental', "-1700% -300%");
		g.checkMagicianSkills();
		return;
	}
	spellMpCost = mag.cost.elemental;
	if(my.mp<spellMpCost){ return; }
	if(g.petAlive===false){
		currentSpell = "Frost Elemental";
		spellCastTime = castSpeedTotal(6000);
		spellType = "conjuration";
		if(startSpell()===false){ return; }
		animateParticlesUp("teal");
		animateCastBar("frostElemental");
		playAudio("spellCastAbjure");
		preload(['/images1/a frost elemental.png']);
	}
}
$(function(){
	$NG.window3.on('mouseenter','#frostelemental',function(){
		var DUR = "6".fontcolor("#00ff00");
		var spellType = "Conjuration";
		NG.tooltipname.innerHTML = "Frost Elemental";
		NG.tooltipmsg.innerHTML = "Cost: "+green(mag.cost.elemental)+" Mana Points<br>"+
		"Cast Time: "+DUR+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Summon an Frost Elemental to fight by your side. Frost Elementals have strong health, strong cold resistance, strong defense, and cast freeze.";
	});
});
g.frostElementalFinish=function(proc){
	if(!proc){
		if(endSpell()===false){ return; }
		castingSpell = 1;
		g.drawMyMp(-spellMpCost);
	}
	playAudio("elem_att3");
	Chat((my.name+" summons a Frost Elemental."),3);
	petLevel=~~(my.level/1.2)+1;
	petWidth=300+M.ceil(petLevel/3);
	petHeight=(petWidth*1.2594);
	petImage="a frost elemental";
	petLastCast = petImage;
	petMaxHp=M.ceil( (50+(petLevel*55))*(1+(talent5()*.131)) );
	petHp=petMaxHp;
	createPetName();
	petStr=M.ceil(petLevel*2);
	petDef=M.ceil(petLevel*3);
	petPoison=100;
	petMagic=100;
	petLightning=100;
	petFire=50;
	petCold=300;
	petSkill1="freeze"; petSkill2="freeze"; petSkill3="freeze"; petSkill4="freeze"; petCastingFrequency=9;
	g.petAlive=true;
	petSpeed=3000;
	petPosition=1;
	$("#pethpbardiv").css("display","block");
	BGP('frostelemental', "-200% -100%");
	g.drawMyHp();
	var leftAdjust = 190+((290-petWidth)/2);
	$NG.petImage.attr("src","/images1/a frost elemental.png").width(petWidth+"px");
	$NG.mob5.stop(true,true).height(petHeight).width(petWidth+"px")
		.css({"left":leftAdjust,"bottom":60,opacity:1,display:"block"});
	var nameWid=$("#petName").width();
	var ADJ=(petWidth/2)-(nameWid/2);
	$("#petName").css("left",ADJ);
}


function shieldOfLava(){
	if(btn.d.shieldoflava===true||my.level<3){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = mag.cost.shieldOfLava;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Shield of Lava";
	spellCastTime = castSpeedTotal(2500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("red");
	animateCastBar("shieldOfLava");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#shieldoflava',function(){
		var spellType = "Abjuration";
		var duration = "15".fontcolor("#00ff00");
		var value1 = ( M.ceil(abjurationTotal()*.18)+"").fontcolor("#00ff00");
		var a=TTmag( abjurationTotal()/2.6, .8, "fire", "Magma Burst");
		NG.tooltipname.innerHTML = "Shield of Lava";
		var s="Cost: "+green(mag.cost.shieldOfLava)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"You are surrounded by a Shield of Lava, which reflects "+value1+" fire damage every time you are physically attacked for "+duration+" minutes.";
		if(my.talent2>=20){
			s+="<BR><BR>While Shield of Lava is active, Magma Burst hits all targets for "+a[0]+" to "+a[1]+" fire damage every "+green("4.2")+" seconds.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.shieldOfLavaFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You are enveloped by lava."),3);
	shieldOfLavaStatus=true;
	shieldOfBramblesTimeout.kill(); 
	shieldOfBramblesTimeout = T.delayedCall(900, shieldOfLavaExpire);
	var skillName = "Shield of Lava";
	var buffId = "damageShieldIcon";
	var duration = 900000;
	var spriteX = -448;
	damageShieldIconTimer.kill();
	damageShieldIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff('red','easeInBack', 15, 5, 120, 3);
}
function shieldOfLavaExpire(){
	shieldOfLavaStatus=false;
}

function firestormReady(){
	if(D.getElementById('firestorm').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('firestorm', false);
    BGP('firestorm', "-400% 0%");
	g.checkMagicianSkills();
	refreshfirestorm.kill();
}
function firestormTimer(){
	refreshfirestorm = T.to('', .1, {repeat:-1, onRepeat:firestormReady});
}
function firestorm(){
	if(btn.d.firestorm===true||my.level<5){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = mag.cost.firestorm;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Firestorm";
	spellCastTime = castSpeedTotal(2000);
	spellType = "evocation";
	playAudio("infernoloop",0,1000);
    setD('firestorm', true);
    BGP('firestorm', "-400% -100%");
	T.delayedCall(15, firestormTimer);
	timerTick(D.getElementById('firestorm'),15000/1000,'firestorm');
	g.drawMyMp(-spellMpCost);
	var damage = minMax(evocationTotal()*.7, .75);
	cacheFirestorm = img("petExplosion", 300, 135);
	if(GLB.videoSetting==="High"){ animateFirestorm(TGT); }
	g.myMagicDamage("fire", damage, TGT, checkCrit(), "Firestorm");
	var hits = 3+M.ceil(M.random()*(M.ceil(evocationTotal()/40)) );
	if(my.talent3>=20){
		hits=~~(hits*2);
	}
	var evoT = evocationTotal();
	var intT = intTotal();
	var spSk = spellSkillCheck();
	var anm = false;
	if(GLB.videoSetting==="High"){
		anm=true;
	}
	for (var i=0;i<=hits;i++){
		var Slot = selectRandomTarget();
		if(Slot!==undefined){
			var damage = M.ceil( (((evoT*.4)+( ((intT)-70)/5)) +M.random()*(spSk/8.4) ));
			if(anm===true){ 
				(function(S){
					T.delayedCall(.1, function(){
						animateFirestorm(S); 
					});
				})(Slot);
			}
			g.myMagicDamage("fire", damage, Slot, checkCrit(), "Firestorm");
		}
	}
	beginGlobalCooldown();
	checkSpellLevelUp();
}
$(function(){
	$NG.window3.on('mouseenter','#firestorm',function(){
		var spellType = "Evocation";
		var CD = "15".fontcolor("#ff0000");
		var a=TTmag( evocationTotal()*.7, .7, "fire", "Firestorm");
		var hits = 3+M.ceil(evocationTotal()/40);
		if(my.talent3>=20){
			hits=M.round(hits*2);
		}
		hits=green(hits);
		NG.tooltipname.innerHTML = "Firestorm";
		NG.tooltipmsg.innerHTML = "Cost: "+green(mag.cost.firestorm)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Firestorm hits your primary target and hits random targets up to "+hits+" additional times for "+a[0]+" to "+a[1]+" fire damage.";
	});
});
function animateFirestorm(Slot){
	function doit(count){
		var e1 = cacheAdd(cacheFirestorm, 5, (Slot*240)+(M.random()*(60)-30), 710-((count+1)*80), 1, 1, true, true);
		T.to(e1, .6, {
			startAt:{
				alpha:.6
			},
			scaleY:(1.6-(count/2)),
			scaleX:(1.6-(count/2)),
			alpha:0,
			onComplete:function(){
				cRem(5, e1);
			}
		});
		count++;
		if(count<2){ 
			T.delayedCall(.25, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
}


function phantomPlate(){
	if(btn.d.phantomplate===true||my.level<7){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = mag.cost.phantomPlate;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Phantom Plate";
	spellCastTime = castSpeedTotal(3500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("green");
	animateCastBar("phantomPlate");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#phantomplate',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var minimum = ( M.ceil((abjurationTotal()*.66)*(1+(talent9()*9.7)/100))+"").fontcolor("#00ff00");
		var value1 = ( M.ceil((abjurationTotal()*.12)*(1+(talent9()*11.1)/100))+"").fontcolor("#00ff00");
		var value2 = ( (M.ceil(my.level/10)+2)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Phantom Plate";
		NG.tooltipmsg.innerHTML = "Cost: "+green(mag.cost.phantomPlate)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Phantom Plate buffs your armor by "+value1+", your health by "+minimum+", and your health regeneration by "+value2+" for "+duration+" minutes.";
	});
});
g.phantomPlateFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You are covered in illusionary armor."),3);
	if(phantomPlateStatus===true){
		maxHpBuff-=phantomPlateHpBoost;
		armorBuff-=phantomPlateArmorBoost;
	}
	phantomPlateTimeout.kill();
	phantomPlateTimeout = T.delayedCall(3240, phantomPlateExpire);
	phantomPlateArmorBoost = M.ceil( (abjurationTotal()*.12)*(1+(talent9()*11.1)/100) );
	phantomPlateHpBoost = M.ceil( (abjurationTotal()*.66)*(1+(talent9()*9.7)/100) );
	maxHpBuff+=phantomPlateHpBoost;
	armorBuff+=phantomPlateArmorBoost;
	phantomPlateStatus=true;
	g.drawMyHp();
	CStat();
	var skillName = "Phantom Plate";
	var buffId = "hpbuffIcon";
	var duration = 3240000;
	var spriteX = -480;
	hpbuffIconTimer.kill();
	hpbuffIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	animateBuff("green",'easeInBack', 5, 25, 120, 4);
	setEquipValues();
}
function phantomPlateExpire(){
	phantomPlateStatus=false;
	maxHpBuff-=phantomPlateHpBoost;
	armorBuff-=phantomPlateArmorBoost;
	CStat();
	g.drawMyHp();
	setEquipValues();
}


function frozenOrbReady(){
	if(D.getElementById('frozenorb').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('frozenorb', false);
    BGP('frozenorb', "-500% 0%");
	g.checkMagicianSkills();
	refreshfrozenOrb.kill();
}
function frozenOrbTimer(){
	refreshfrozenOrb = T.to('', .1, {repeat:-1, onRepeat:frozenOrbReady});
}
function frozenOrb(){
	if(btn.d.frozenorb===true||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = mag.cost.frozenOrb;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Frozen Orb";
	spellCastTime = castSpeedTotal(2500);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("teal");
	animateCastBar("frozenOrb");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#frozenorb',function(){
		var spellType = "Evocation";
		var CD = "16".fontcolor("#ff0000");
		var a=TTmag( evocationTotal()*.2, .87, "cold", "Frozen Orb");
		var value1 = "33%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Frozen Orb";
		var s="Cost: "+green(mag.cost.frozenOrb)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Frozen Orb hits all targets "+green("10")+" times for "+a[0]+" to "+a[1]+" cold damage. Adjacent targets take diminished damage based on distance.";
		s+="<BR><BR>Effect: All targets' attack speed is reduced by "+value1+".";
		if(my.talent10>=20){
			s+="<BR><BR>Effect: All targets are frozen for "+green("3")+" seconds.";		
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.frozenOrbFinish=function(){
	if(endSpell()===false){ return; }
    setD('frozenorb', true);
    BGP('frozenorb', "-500% -100%");
	T.delayedCall(16, frozenOrbTimer);
	timerTick(D.getElementById('frozenorb'),16000/1000,'frozenorb');
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	function modifyOrbDamage(foo, bar){
		if(bar-1===Slot||bar+1===Slot){ foo = M.ceil(foo*.8); }
		if(bar-2===Slot||bar+2===Slot){ foo = M.ceil(foo*.6); }
		if(bar-3===Slot||bar+3===Slot){ foo = M.ceil(foo*.4); }
		if(bar-4===Slot||bar+4===Slot){ foo = M.ceil(foo*.2); }
		return foo;
	}
	function damageHit(){
		if(orbTickCount===10){ return; }
		playAudio("icespike"+ ~~(M.random()*(3)+1));
		var mType="cold";
		for(var i=0;i<=4;i++){
			if(mob[i].name!==""){
				var damage = minMax(evocationTotal()*.2,.87);
				damage = modifyOrbDamage(damage, i);
				chillTarget(i, 6000, -160);
				g.myMagicDamage(mType, damage, i, checkCrit(), "Frozen Orb");
			}
		}
		orbTickCount++;
		T.delayedCall(.1, damageHit);
	}
	var orbTickCount = 0;
	if(my.talent10>=20){
		for(var i=0;i<=4;i++){
			if(mob[i].name){
				freezeTarget(i, 3000, -160);
			}
		}
	}
	damageHit();
	if(GLB.videoSetting==="High"){ animateFrozenOrb(Slot); }
}
function animateFrozenOrb(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX-320;
	var e1 = can('frozenOrb', 5, cX, -640, 640, 640, true);
	T.to(e1, .75, {
		y:470,
		onComplete:function(){
			T.to(e1, 1, {
				y:540,
				alpha:0,
				ease:ez.lin
			});
		}
	});
	T.to(e1, 2, {
		rotation:-1800,
		ease:ez.cin,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var c2 = img("tealparticle50");
	function doit(count){
		x2 = (M.random()*1330-25);
		y2 = (M.random()*125+550);
		y3 = count*13;
		var p1 = cacheAdd(c2, 5, 628, y3);
		T.to(p1, 1.5, {
			x:x2,
			scaleX:.2,
			scaleY:.2,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		T.to(p1, 1.5, {
			y:y2,
			ease:ez.bout
		});
		if(count<40){ 
			T.delayedCall(.01, function(){
				doit(++count);
			}); 
		}
	}
	doit(0);
}

function burnoutReady(){
	if(D.getElementById('burnout').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('burnout', false);
    BGP('burnout', "-600% 0%");
	g.checkMagicianSkills();
	refreshburnout.kill();
}
function burnoutTimer(){
	refreshburnout = T.to('', .1, {repeat:-1, onRepeat:burnoutReady});
}
$(function(){
	$NG.window3.on('mouseenter','#burnout',function(){
		var CD = "35".fontcolor("#ff0000");
		var value1 = "60%".fontcolor("#00ff00");
		var duration = "25".fontcolor("#00ff00");
		var heal = M.ceil( (conjurationTotal()*5.2)+M.random()*(my.level/6) );
		NG.tooltipname.innerHTML = "Burnout";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Burnout boosts your pet's attack speed by "+value1+" for "+duration+" seconds and recovers "+green(heal)+" health.";
	});
});
function burnout(){
	if(btn.d.burnout===true||my.level<11||paused===true){ return;}
	if(g.petAlive===false){ Chat(("Your minion is not here.")); return; }
	if(castingGlobal==0){return;} 
	if(bashStatus===0||fearStatus===0){ return; }
    setD('burnout', true);
    BGP('burnout', "-600% -100%");
	T.delayedCall(35, burnoutTimer);
	timerTick(D.getElementById('burnout'),35000/1000,'burnout');
	Chat((petName+" goes berserk."),3);
	petSpeedBuff=.4;
	var healAmount = M.ceil( (conjurationTotal()*5.2)+M.random()*(my.level/6) );
	petHp+= healAmount;
	g.popupHealSlot(healAmount,5);
	g.drawMyHp();
	T.delayedCall(25, burnoutExpire);
	g.popupHealSlot(healAmount,4);
	if(GLB.videoSetting==="High"){ animateBurnout(); }
	playAudio("elem_att3");
}
function animateBurnout(){
	var x2 = MOB[5].offsetLeft+(petWidth/2);
	var y2 = MOB[5].offsetTop+(petHeight/2);
	function doit(count){
		var size = (M.random()*150+75);
		var x3 = x2+(M.random()*(300)-150)-(size/2);
		var y3 = y2+(M.random()*(100)-200);
		var p1 = can('fireparticle50', 6, x2-100, y3, size, size);
		T.to(p1, .6, {
			alpha:0,
			y:(y3+75),
			ease:ez.Qin,
			onComplete:function(){
				cRem(6, p1);
			}
		});
		count++;
		if(count<12){ 
			T.delayedCall(.01, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
	function doFlash(count2){
		var p2 = can('orangeLight3', 5, x2-1280, y2-827, 2560, 1544);
		T.to(p2, .8, {
			alpha:0,
			ease:ez.Qin,
			onComplete:function(){
				cRem(5, p2);
			}
		});
		count2++;
		if(count2<3){ doFlash(count2); }
	}
	doFlash(0);
}
function burnoutExpire(){
	petSpeedBuff=1;
}


function elementalArmor(){
	if(btn.d.elementalarmor===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = mag.cost.elementalArmor;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Elemental Armor";
	spellCastTime = castSpeedTotal(2500);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("orange");
	animateCastBar("elementalArmor");
	playAudio("spellCastAbjure",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#elementalarmor',function(){
		var spellType = "Abjuration";
		var duration = "36".fontcolor("#00ff00");
		var minimum = ( M.ceil((abjurationTotal()*.17)*(1+(talent11()*3.3)/100))+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Elemental Armor";
		var s="Cost: "+green(mag.cost.elementalArmor)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Elemental Armor buffs your cold and fire resistance by "+minimum+" for "+duration+" minutes.";
		if(my.talent11>=20){
			s+="<BR><BR>While Elemental Armor is active, your casting haste is enhanced by "+green("35%")+".";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.elementalArmorFinish=function(){
	if(endSpell()===false){ return; }
	g.drawMyMp(-spellMpCost);
	Chat(("You feel protected from fire and ice."),3);
	if(elementalArmorStatus===true){
		svcoldBuff-=elementalArmorColdBoost;
		svfireBuff-=elementalArmorFireBoost;
	}
	spiritArmorTimeout.kill();
	spiritArmorTimeout = T.delayedCall(2160, elementalArmorExpire);
	var goy= M.ceil( (abjurationTotal()*.17)*(1+(talent11()*3.3)/100) );
	elementalArmorColdBoost = goy;
	elementalArmorFireBoost = goy;
	svcoldBuff+=elementalArmorColdBoost;
	svfireBuff+=elementalArmorFireBoost;
	elementalArmorStatus=true;
	CStat();
	var buffId = "resistIcon";
	var duration = 2160000;
	resistIconTimer.kill();
	resistIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon("Elemental Armor",buffId,duration,-512);
	animateBuff('orange','easeInBack', 5, 25, 120, 3);
}
function elementalArmorExpire(){
	elementalArmorStatus=false;
	svcoldBuff-=elementalArmorColdBoost;
	svfireBuff-=elementalArmorFireBoost;
	CStat();
}

function manaShieldReady(){
	if(D.getElementById('manashield').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('manashield', false);
    BGP('manashield', "-700% 0%");
	g.checkMagicianSkills();
	refreshmanaShield.kill();
}
function manaShieldTimer(){
	refreshmanaShield = T.to('', .1, {repeat:-1, onRepeat:manaShieldReady});
}
$(function(){
	$NG.window3.on('mouseenter','#manashield',function(){
		var spellType = "Conjuration";
		var CD = "45".fontcolor("#ff0000");
		var duration = "16".fontcolor("#00ff00");
		var value1 = "75%".fontcolor("#00ff00");
		var value2 = "75%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Mana Shield";
		NG.tooltipmsg.innerHTML = "Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Mana Shield mitigates all damage by "+value1+". Damage taken also reduces your mana. Mana shield lasts for "+duration+" seconds.<br><br>"+
		"Effect: All mana gained is increased by 280%";
	});
});
function manaShield(){
	if(btn.d.manashield===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	spellType = "conjuration";
    setD('manashield', true);
    BGP('manashield', "-700% -100%");
	T.delayedCall(45, manaShieldTimer);
	timerTick(D.getElementById('manashield'),45000/1000,'manashield');
	beginGlobalCooldown();
	checkSpellLevelUp();
	g.drawMyMp();
	Chat(("You are shielded by an azure ether."),3);
	manaShieldStatus=true;
	manaShieldTimeout.kill();
	manaShieldTimeout = T.delayedCall(16, manaShieldExpire);
	var skillName = "Mana Shield";
	var buffId = "manaShieldIcon";
	var duration = 16000;
	var spriteX = -224;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	if(GLB.videoSetting==="High"){ animateManaShield(); }
	playAudio("energyshield");
}
function animateManaShield(){
	flashScreen("#08f",.3,2);
	var e1 = can('manaShield', 5, 440, 397, 400, 400, true);
	T.to(e1, 3, {
		y:797,
		alpha:0
	});
	T.to(e1, 1.5, {
		rotation:720,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	animateBuffRings();
}
function manaShieldExpire(){
	manaShieldStatus=false;
	Chat(("The ether fades."),3);
}


function psionicStormReady(){
	if(D.getElementById('psionicstorm').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('psionicstorm', false);
    BGP('psionicstorm', "-800% 0%");
	g.checkMagicianSkills();
	refreshpsionicStorm.kill();
}
function psionicStormTimer(){
	refreshpsionicStorm = T.to('', .1, {repeat:-1, onRepeat:psionicStormReady});
}
function psionicStorm(){
	if(btn.d.psionicstorm===true||my.level<17){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = mag.cost.psionicStorm;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Psionic Storm";
	spellCastTime = castSpeedTotal(2500);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("yellow");
	animateCastBar("psionicStorm");
	playAudio("spellCastEvoke2",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#psionicstorm',function(){
		var spellType = "Evocation";
		var CD = 25;
		if(Set.Summoner>=6){ CD -= 13; }
		var a=TTmag( evocationTotal()*1.5, .33, "lightning", "Psionic Storm");
		var target="your target";
		if(my.talent12>=20){
			target="three targets";
		}
		NG.tooltipname.innerHTML = "Psionic Storm";
		NG.tooltipmsg.innerHTML = "Cost: "+green(mag.cost.psionicStorm)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Psionic Storm hits "+target+" "+green("6")+" times for "+a[0]+" to "+a[1]+" lightning damage.";
	});
});
g.psionicStormFinish=function(){
	if(endSpell()===false){ return; }
    setD('psionicstorm', true);
    BGP('psionicstorm', "-800% -100%");
	var d = 25000;
	if(Set.Summoner>=6){ d -= 13000; }
	T.delayedCall(d/1000, psionicStormTimer);
	timerTick(D.getElementById('psionicstorm'),d/1000,'psionicstorm');
	var Slot = TGT;
	var loopCount = 0;
	g.drawMyMp(-spellMpCost);
	var multi=false;
	if(my.talent12>=20){ multi=true; }
	function castStorm(){
		if(multi){
			for(var i=0;i<=4;i++){
				if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
					var damage = minMax(evocationTotal()*1.5, .33);
					animatePsionicStorm(i);
					g.myMagicDamage("lightning", damage, i, checkCrit(), "Psionic Storm");
				}	
			}
		}else{
			var damage = minMax(evocationTotal()*1.5, .33);
			animatePsionicStorm(Slot);
			g.myMagicDamage("lightning", damage, Slot, checkCrit(), "Psionic Storm");
		}
		playAudio("zap"+ ~~(M.random()*(3)+1));	
		loopCount++;
		if(loopCount!==6){ 
			T.delayedCall(.25, castStorm); 
		}
	}
	castStorm();
}
function animatePsionicStorm(Slot){
	if(GLB.videoSetting!=="High"){ return; }
	var x2 = MOB[Slot].offsetLeft+mob[Slot].cX-75;
	var y2 = MOB[Slot].offsetTop+mob[Slot].cY-75;
	function doit(count){
		var x3 = x2 + (M.random()*(300)-150);
		var y3 = y2 + (M.random()*(200)-100);
		var img1 = "psionic"+(~~(M.random()*(4)+1));
		var e1 = can(img1, 5, x3, y3, 100, 100, true);
		T.to(e1, .5, {
			scaleX:0,
			scaleY:0,
			rotation:(M.random()*(180)-90),
			onComplete:function(){
				cRem(5, e1);
			
			}
		});
		if(count<12){ 
			T.delayedCall(.033, function(){ 
				doit(++count);
			}); 
		}
	}
	doit(0);
}

function reclaimElementsReady(){
	if(D.getElementById('reclaimelements').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('reclaimelements', false);
    BGP('reclaimelements', "-900% 0%");
	g.checkMagicianSkills();
	refreshreclaimElements.kill();
}
function reclaimElementsTimer(){
	refreshreclaimElements = T.to('', .1, {repeat:-1, onRepeat:reclaimElementsReady});
}
function reclaimElements(){
	if(btn.d.reclaimelements===true||my.level<20){ return;}
	if(checkBashFear()===true){ return; }
	if(g.petAlive===false){ Chat(("Your minion is not here.")); return; }
	spellMpCost = mag.cost.reclaimElements;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Reclaim Elements";
	spellCastTime = castSpeedTotal(2500);
	spellType = "alteration";
	if(startSpell()===false){ return; }
	animateParticlesDown("yellow");
	animateCastBar("reclaimElements");
	playAudio("spellCastHeal",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#reclaimelements',function(){
		var spellType = "Alteration";
		var CD = "24".fontcolor("#ff0000");
		var a=TTheal( (alterationTotal()*2.1)*(1+(talent7()*2.2)/100), .9);
		NG.tooltipname.innerHTML = "Reclaim Elements";
		NG.tooltipmsg.innerHTML = "Cost: "+green(mag.cost.reclaimElements)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2500)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Reclaim Elements drains health from your pet, absorbing "+a[0]+" to "+a[1]+" health. Your pet loses double the amount healed.";
	});
});
g.reclaimElementsFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneHeal");
	T.delayedCall(24, reclaimElementsTimer);
	timerTick(D.getElementById('reclaimelements'),24000/1000,'reclaimelements');
    setD('reclaimelements', true);
    BGP('reclaimelements', "-900% -100%");
	g.drawMyMp(-spellMpCost);
	Chat((petName+" channels elemental power to you."),3);
	var healAmount = minMax( (alterationTotal()*2.1)*(1+(talent7()*2.2)/100), .9);
	var hurtAmount = M.ceil(healAmount*2);
	if(hurtAmount > petHp){ 
		petHp=1; 
	}else{
		petHp-=hurtAmount;
	}
	if(GLB.videoSetting==="High"){ animateReclaimElements(); }
	g.popupHeal(healAmount);
}
function animateReclaimElements(){
	var x2 = (MOB[5].offsetLeft+(petWidth/2)-100);
	var y2 = (MOB[5].offsetTop+(petHeight/2)-100);
	function doit(count){
		var p1 = can('yellowOrb', 6, x2, y2, 200, 200);
		T.to(p1, .2, {
			y:660,
			x:540,
			ease:ez.Qin,
			onComplete:function(){
				T.to(p1, .5, {
					alpha:0,
					ease:ez.lin,
					onComplete:function(){
						cRem(6, p1);
					}
				});
			}
		});
		count++;
		if(count<10){ 
			T.delayedCall(.05, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
}

function elementalFuryReady(){
	if(D.getElementById('elementalfury').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
	refreshelementalFury.kill();
    setD('elementalfury', false);
    BGP('elementalfury', "-1000% 0%");
	g.checkMagicianSkills();
}
function elementalFuryTimer(){
	refreshelementalFury = T.to('', .1, {repeat:-1, onRepeat:elementalFuryReady});
}
function elementalFury(){
	if(paused===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(btn.d.elementalfury===true||my.level<24){ return;}
	if(g.petAlive===false){
		Chat(("Your minion is not here."));
		return;
	}
	if(checkBashFear()===true){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	var d=40000;
	if(my.talent8>=20){ d=20000; }
	T.delayedCall(d/1000, elementalFuryTimer);
	timerTick(D.getElementById('elementalfury'),d/1000,'elementalfury');
    setD('elementalfury', true);
    BGP('elementalfury', "-1000% -100%");
	if(petImage==="an earth elemental"){
		playAudio("spellDoneHeal");
		for(var i=0;i<=4;i++){
			if(mob[i].name!==""){
					snareTarget(i);
					addMobBuffIcon("Root",i,"rootBuffIcon",0,-544);
			}
		}
	}else if(petImage==="an air elemental"){
		Chat(petName+" summons a lightning storm.");
		preload(['/images1/lightningBlast.png']);
		var hits=2+M.round((conjurationTotal()/60));
		for(var i=0;i<=hits;i++){
			var duration = 1000+M.random()*17000;
			T.delayedCall(duration/1000, function(){ 
				doAir();
			});
		}
	}else if(petImage==="a fire elemental"){
		preload(['/images1/fireNova.png']);
		for(var i=0;i<7;i++){
			T.delayedCall((i*3)+3, function(){ 
				doFire();
			});
		}
	}else if(petImage==="a frost elemental"){
		if(countMobs()<1){ return; }
		playAudio('blue3')
		var Slot = petTarget;
		for (var i=(Slot-1);i<=(Slot+1);i++){
			if(i>=0&&i<=4){
				if(mob[i].name){
					stopMob(i);
					if(!mob[i].phased){ MOB[i].style.opacity=1; }
					var damage = minMax(evocationTotal()*1.6, .9);
					g.myMagicDamage("cold", damage, i, checkCrit(), "Glacier");
					var duration=5000+M.random()*(5000);
					mob[i].spellActive.kill();
					mob[i].frozenTimer.kill();
					$("#iceIcon"+i).remove();
					T.to(bmp[i], 1, {
						easel:{
							tint:"#08f",
							tintAmount:0
						}
					});
					freezeTarget(i, duration, -320);
				}
			}
		}
	}
	function doAir(){
		if(countMobs()<1){ return; }
		playAudio("lightning"+ ~~(M.random()*(3)+1));
		if(mob[petTarget].name!==""){
			var damage = minMax(conjurationTotal()*3, .35);
			if(GLB.videoSetting==="High"){ animateLightningBlast(petTarget); }
			g.myMagicDamage("lightning", damage, petTarget, checkCrit(), "Chaos Lightning");
		}
	}
	function doFire(){
		if(countMobs()<1){ return; }
		playAudio("poisonnova");
		animateNova('fireNova',true);
		for (var i=0;i<=4;i++){
			if(mob[i].name!==""){
				var damage = minMax(evocationTotal()*1.1, .77);
				g.myMagicDamage("fire", damage, i, checkCrit(), "Pulsing Inferno");
			}
		}
	}
}
$(function(){
	$NG.window3.on('mouseenter','#elementalfury',function(){
		var minimum = ( M.ceil((3+evocationTotal()*6.2)+( ((intTotal())-70)/6) )+"").fontcolor("#00ff00");
		var maximum = ( M.ceil(((3+evocationTotal()*6.2)+( ((intTotal())-70)/6)+(evocationTotal()/2) ) )+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Elemental Fury";
		var cd=40;
		if(my.talent8>=20){ cd=20; }
		var s="Cooldown: "+green(cd)+" Seconds<br><br>"+
		"Command your elemental to unleash its fury.<br><br>";
		if(petImage==='an earth elemental'){
			s+="Earth Elemental casts Punishing Earth which snares all targets.";
		}else if(petImage==='an air elemental'){
			var a=TTmag( conjurationTotal()*3, .35, "lightning", "Chaos Lightning");
			var hits=2+M.round((conjurationTotal()/60));
			s+="Air Elemental casts Chaos Lightning, striking your pet's target "+green(hits)+" times for "+a[0]+" to "+a[1]+" lightning damage.";
		}else if(petImage==='a fire elemental'){
			var a=TTmag( evocationTotal()*1.1, .77, "fire", "Pulsing Inferno");			
			s+="Fire Elemental casts Pulsing Inferno, striking all targets "+green("7")+" times for "+a[0]+" to "+a[1]+" fire damage.";
		}else if(petImage==='a frost elemental'){
			var a=TTmag( evocationTotal()*1.6, .9, "cold", "Glacier");		
			s+="Frost Elemental casts Glacier, striking three targets for "+a[0]+" to "+a[1]+" cold damage."+
			"<BR><BR>Effect: Your targets are frozen for "+green("5")+" to "+green("10")+" seconds.";
		}
		"Earth: Snares all targets<br>"+
		"Air: Strikes target with lightning<br>"+
		"Fire: Bursts forth a flame nova<br>"+
		"Frost: Freezes nearby targets";
		NG.tooltipmsg.innerHTML = s;
	});
});


function armageddonReady(){
	if(D.getElementById('armageddon').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('armageddon', false);
    BGP('armageddon', "-1100% 0%");
	g.checkMagicianSkills();
	refresharmageddon.kill();
}
function armageddonTimer(){
	refresharmageddon = T.to('', .1, {repeat:-1, onRepeat:armageddonReady});
}
function armageddon(){
	if(btn.d.armageddon===true||my.level<28){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = mag.cost.armageddon;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Armageddon";
	spellCastTime = castSpeedTotal(3000);
	spellType = "evocation";
	if(startSpell()===false){ return; }
	animateParticlesDown("red");
	animateCastBar("armageddon");
	playAudio("spellDoneFlames",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#armageddon',function(){
		var spellType = "Evocation";
		var CD = "30".fontcolor("#ff0000");
		var duration = "45".fontcolor("#00ff00");
		var a=TTmag( evocationTotal()*.6, .69, "fire", "Armageddon");
		NG.tooltipname.innerHTML = "Armageddon";
		NG.tooltipmsg.innerHTML = "Cost: "+green(mag.cost.armageddon)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Armageddon creates a meteor shower to rain fiery destruction on all targets. Each meteor hits for "+a[0]+" to "+a[1]+" fire damage.";
	});
});
function armageddonHits(Slot,damage){
	T.delayedCall(.5, function(){ 
		g.myMagicDamage("fire", damage, Slot, checkCrit(), "Armageddon");
	});
}
g.armageddonFinish=function(){
	if(endSpell()===false){ return; }
    setD('armageddon', true);
    BGP('armageddon', "-1100% -100%");
	T.delayedCall(30, armageddonTimer);
	timerTick(D.getElementById('armageddon'),30000/1000,'armageddon');
	g.drawMyMp(-spellMpCost);
	function armageddonTick(armageddonTickCount){
		if(mobsFound()===false){
			if(armageddonTickCount <= 45){ 
				T.delayedCall((M.random()*(.25)+.05), function(){
					armageddonTick(++armageddonTickCount); 
				}); 
			}
		}else{
			var Slot = selectFlayTarget();
			animateArmageddon(Slot);
			playAudio("explode"+ ~~(M.random()*(3)+1));
			if(mob[Slot].name!==""){
				var damage = minMax(evocationTotal()*.6, .69);
				armageddonHits(Slot,damage);
			}
			if(armageddonTickCount <= 45){
				T.delayedCall((M.random()*(.25)+.05), function(){
					armageddonTick(++armageddonTickCount); 
				}); 
			}
		}
	}
	T.delayedCall(2, function(){ 
		armageddonTick(0);
	});
}
function animateArmageddon(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	if(!mob[Slot].name){
		var x2 = ((Slot*320)+240);
	}
	var y2 = 467;
	var e1 = can('armageddon', 5, x2-1500, y2-1500, 400, 400);
	T.to(e1, .5, {
		x:(x2-300),
		y:(y2-200),
		ease:ez.lin,
		onComplete:function(){
			cRem(5, e1);
			animateTremor(x2, 800);
		}
	});
}

function stasisFieldReady(){
	if(D.getElementById('stasisfield').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('stasisfield', false);
    BGP('stasisfield', "-1200% 0%");
	refreshstasisField.kill();
}
function stasisFieldTimer(){
	refreshstasisField = T.to('', .1, {repeat:-1, onRepeat:stasisFieldReady});
}
$(function(){
	$NG.window3.on('mouseenter','#stasisfield',function(){
		var spellType = "Conjuration";
		var CD = "80".fontcolor("#ff0000");
		var value1 = "35".fontcolor("#00ff00");
		var value2 = "45".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Stasis Field";
		NG.tooltipmsg.innerHTML = "Cost: "+green(mag.cost.stasisField)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Stasis Field seals your target in a dimensional rift. Your target cannot attack or be attacked for "+value1+" to "+value2+" seconds.";
	});
});
function stopMob(Slot){
	if(mob[Slot].name!==""){
		T.killTweensOf(MOB[Slot]);
		T.killChildTweensOf(MOB[Slot]);
	}
}
function stasisField(){
	if(btn.d.stasisfield===true||my.level<32){return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = mag.cost.stasisField;
	if(my.mp<spellMpCost){ return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	spellType = "conjuration";
    setD('stasisfield', true);
    BGP('stasisfield', "-1200% -100%");
	T.delayedCall(80, stasisFieldTimer);
	timerTick(D.getElementById('stasisfield'),80000/1000,'stasisfield');
	var Slot = TGT;
	var stasisDuration = M.random()*(10000)+35000;
	if(mob[Slot].level > my.level){
		stasisDuration -= (M.pow((mob[Slot].level - my.level),1.2));
	}
	if(stasisDuration < 15000){ stasisDuration = 15000; }
	stasisTarget(Slot, stasisDuration, -384, "Stasis Field");
	g.drawMyMp(-spellMpCost);
	addMobBuffIcon("Stasis Field",Slot,"stasisIcon",stasisDuration,-384);
	checkSpellLevelUp();
}
function stasisTarget(Slot, d, img, name){
	if(mob[Slot].rare===3){
		Chat(mob[Slot].name + " is immune to stasis.");
	}else{
		Chat(mob[Slot].name + " is sealed in a dimensional rift.",3);
		interruptTarget(Slot);
		stopMob(Slot);
		T.to(canvas[Slot], 1, {
			opacity:.2,
		});
		blur(Slot, 12);
		d = d/1000;
		mob[Slot].stasisFieldStatus = true;
		if(mob[Slot].phased){
			T.delayedCall(d, function(){
				T.to(canvas[Slot], .5, {
					opacity:.5
				});
				mob[Slot].stasisFieldStatus=false;
				blur(Slot, 0);
			});
		}else{
			T.delayedCall(d, function(){
				T.to(canvas[Slot], .5, {
					opacity:1
				});
				mob[Slot].stasisFieldStatus=false;
				blur(Slot, 0);
			});
		}
		animateStasis("purple", 25, Slot);
		addMobBuffIcon(name, Slot,"stasisIcon",d*1000,img);
		playAudio("novaelec");
	}
}

function alteredStateReady(){
	if(D.getElementById('alteredstate').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('alteredstate', false);
    BGP('alteredstate', "-1300% 0%");
	refreshalteredState.kill();
}
function alteredStateTimer(){
	refreshalteredState = T.to('', .1, {repeat:-1, onRepeat:alteredStateReady});
}
$(function(){
	$NG.window3.on('mouseenter','#alteredstate',function(){
		var spellType = "Evocation";
		var CD = "60".fontcolor("#ff0000");
		var minimum = ( M.ceil((3+evocationTotal()*1.8)+( ((intTotal())-70)/8) )+"").fontcolor("#00ff00");
		var maximum = ( M.ceil(((3+evocationTotal()*1.8)+( ((intTotal())-70)/8)+(spellSkillCheck()/4.4)/2) )+"").fontcolor("#00ff00");
		var d = "6".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Altered State";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Seconds<br><br>"+
		"Altered State reverses the state of reality and causes all damage to heal you for "+d+" seconds.";
	});
});
function alteredState(){
	if(btn.d.alteredstate===true||my.level<38){return;}
	if(checkBashFear()===true){ return; }
    setD('alteredstate', true);
    BGP('alteredstate', "-1300% -100%");
	T.delayedCall(60, alteredStateTimer);
	timerTick(D.getElementById('alteredstate'),60000/1000,'alteredstate');
	beginGlobalCooldown();
	var Slot = TGT;
	Chat(("A dimensional abnormality ripples around your body."),3);
	g.drawMyMp();
	if(GLB.videoSetting==="High"){ animateAlteredState(); }
	playAudio("fade");
	alteredStateStatus=true;
	function doit(){
		alteredStateStatus=false;
	}
	T.delayedCall(6, doit);
	T.delayedCall(6, function(){ 
		removeIcon("alteredStateIcon"); 
	});
	addBuffIcon("Altered State","alteredStateIcon",6000,-416);
}
function animateAlteredState(){
	var c2 = img("alteredState2", 1380, 100);
	function doit(count){
		var e1 = cacheAdd(c2, 5, (-50+M.random()*(25)), -100+(count*50), 1, 1, true);
		T.to(e1, .1, {
			alpha:.4,
			onComplete:function(){
				T.to(e1, 3, {
					alpha:0,
					onComplete:function(){
						cRem(5, e1);
					},
					ease:ez.cout
				});
			}
		});
		count++;
		if(count<16){ 
			T.delayedCall(.01, function(){ 
				doit(count);
			}); 
		}
	}
	doit(0);
}

function iceBoltReady(){
	if(D.getElementById('icebolt').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('icebolt', false);
    BGP('icebolt', "-300% 0%");
	g.checkWizardSkills();
	refreshiceBolt.kill();
}
function iceBoltTimer(){
	refreshiceBolt = T.to('', .1, {repeat:-1, onRepeat:iceBoltReady});
}
function iceBolt(){
	if(btn.d.icebolt===true){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	if(my.talent1<20&&my.talent10<20){ 
		currentSpell = "Ice Bolt";
	}
	if(my.talent1>=20){
		currentSpell = "Static Bolt";
	}
	if(my.talent10>=20){
		currentSpell = "Fire Bolt";
	}
	spellType = "evocation";
	spellCastTime = castSpeedTotal(2000);
	if(startSpell()===false){ return; }
	if(my.talent1<20&&my.talent10<20){ 
		animateParticlesDown("teal"); 
	}
	if(my.talent1>=20&&my.talent10<20){
		animateParticlesDown("white");
	}
	if(my.talent10>=20){
		animateParticlesDown("orange");
	}
	animateCastBar("iceBolt");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#icebolt',function(){
		var mType="cold";
		if(my.talent1>=20){
			mType='lightning';
		}
		if(my.talent10>=20){
			mType='fire';
		}
		if(mType==='cold'){
			var spellName = "Ice Bolt";
			var a=TTmag( 3+evocationTotal()*1.85, .85, "cold", "Ice Bolt");
		}else if(mType==='lightning'){
			var spellName = "Static Bolt";
			var a=TTmag( 3+evocationTotal()*3.1, .45, "lightning", "Static Bolt");
		}else{
			var spellName = "Fire Bolt";
			var a=TTmag( 3+evocationTotal()*2.5, .75, "lightning", "Fire Bolt");
		}
		NG.tooltipname.innerHTML = spellName;
		var s="Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: Evocation<br><br>"+
		spellName+" hits your target for "+a[0]+" to "+a[1]+" "+mType+" damage.";
		if(mType==='cold'){
			s+="<br><br>Effect: Slows your target "+green("33%")+" for "+green("5")+" seconds.";
		}
		NG.tooltipmsg.innerHTML = s;
	});
});
g.iceBoltFinish=function(){
	if(endSpell()===false){ return; }
	var Slot = TGT;
	var mType="cold";
	if(my.talent1>=20){
		mType='lightning';
	}
	if(my.talent10>=20){
		mType='fire';
	}
	if(GLB.videoSetting==="High"){ animateIceBolt(Slot, mType); }
	function boltHit(){
		if(mType==='cold'){
			var damage = minMax( 3+evocationTotal()*1.85, .85);
			var spellName = "Ice Bolt";
			playAudio("spellDoneSlam");
		}else if(mType==='lightning'){
			var damage = minMax( 3+evocationTotal()*3.1, .45);
			var spellName = "Static Bolt";
			playAudio('zap'+M.ceil(M.random()*(3)));
		}else{
			var damage = minMax( 3+evocationTotal()*2.5, .75);
			var spellName = "Fire Bolt";
			playAudio("explode"+ ~~(M.random()*(3)+1));
		}
		g.myMagicDamage(mType, damage, Slot, checkCrit(), spellName);
		if(mType==="cold"){
			chillTarget(Slot, 5000, -96);
		}
		checkMirrorImages(mType,damage,Slot);
	}
	T.delayedCall(.2, boltHit);
}
function animateIceBolt(Slot,mType){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX-100;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY-100;
	
	var img1='iceBolt';
	var color="teal";
	if(mType==='lightning'){
		img1='staticBolt';
		color='yellow';
	}
	if(mType==='fire'){
		img1='fireBolt';
		color='orange';
	}
	var e1 = can(img1, 5, 540, 618, 300, 300, true);
	T.to(e1, .2, {
		rotation:540,
		scaleX:.4,
		scaleY:.4,
		x:cX+100,
		y:cY+100,
		onComplete:function(){
			cRem(5, e1);
			particleBurst(Slot,color,'blank');
		}
	});
}

function chargedBoltsReady(){
	if(D.getElementById('chargedbolts').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('chargedbolts', false);
    BGP('chargedbolts', "-400% 0%");
	g.checkWizardSkills();
	refreshchargedBolts.kill();
}
function chargedBoltsTimer(){
	refreshchargedBolts = T.to('', .1, {repeat:-1, onRepeat:chargedBoltsReady});
}
function chargedBolts(){
	function chargedBoltsHit(Slot){
		T.delayedCall(.75, function(){
			if(mob[Slot].name!==""){
				var damage = minMax(evocationTotal()*1.6, .2);
				g.myMagicDamage("lightning",damage, Slot, checkCrit(), "Charged Bolts");
				playAudio("zap"+ ~~(M.random()*(3)+1));
				checkMirrorImages("lightning",damage,Slot);
			}
		});
	}
	if(btn.d.chargedbolts===true||my.level<2){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = wiz.cost.chargedBolts;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Charged Bolts";
	spellType = "evocation";
	playAudio("chargedbolt");
    setD('chargedbolts', true);
    BGP('chargedbolts', "-400% -100%");
	var d=8000;
	if(my.talent3>=20){ d=4000; }
	T.delayedCall(d/1000, chargedBoltsTimer);
	timerTick(D.getElementById('chargedbolts'),d/1000,'chargedbolts');
	g.drawMyMp(-spellMpCost);
	function goBolt(Slot){
		if(Slot===undefined){
			Slot = selectRandomTarget();
		}
		if(Slot!==undefined){
			left = (Slot+1)*256-220+(M.random()*(100));
			animateChargedBolts(Slot,left);
			chargedBoltsHit(Slot);
		}
	}
	goBolt(TGT);
	var hits = M.ceil(evocationTotal()/65)+1;
	for (var i=0;i<hits;i++){
		goBolt();
	}
	function doit(count){
		var e1 = can('whiteLight3', 5, -640, 0, 2560, 1597);
		T.to(e1, .75, {
			startAt:{
				alpha:.3
			},
			alpha:0
		});
		count++;
		if(count<4){ 
			doit(count);
		}
	}
	doit(0);
	beginGlobalCooldown();
	checkSpellLevelUp();
}
$(function(){
	$NG.window3.on('mouseenter','#chargedbolts',function(){
		var spellType = "Evocation";
		var CD = 8
		if(my.talent3>=20){
			CD/=2;
		}
		var a=TTmag( evocationTotal()*1.6, .2, "lightning", "Charged Bolts");
		var hits = M.ceil(evocationTotal()/65)+1;
		NG.tooltipname.innerHTML = "Charged Bolts";
		NG.tooltipmsg.innerHTML = "Cost: "+green(wiz.cost.chargedBolts)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Charged Bolts hits random targets up to "+green(hits)+" times for "+a[0]+" to "+a[1]+" lightning damage. Your current target takes a guaranteed hit.";
	});
});
function animateChargedBolts(Slot,left){
	if(GLB.videoSetting!=="High"){ return; }
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX-40;
	var img1='chargedBolts';
	if(M.random()>.5){ 
		img1='chargedBolts2';
	}
	var e1 = can(img1, 5, 590, 655, 100, 100);
	T.to(e1, .75, {
		scaleX:.8,
		scaleY:.8,
		y:550,
		x:left,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	function doit(count){
		count-=50;
		flipImg(e1);
		if(count>0){ 
			T.delayedCall(.1, function(){ 
				doit(count);
			}); 
		}
	}
	doit(750);
}


function frostNovaReady(){
	if(D.getElementById('frostnova').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('frostnova', false);
    BGP('frostnova', "-500% 0%");
	g.checkWizardSkills();
	refreshfrostNova.kill();
}
function frostNovaTimer(){
	refreshfrostNova = T.to('', .1, {repeat:-1, onRepeat:frostNovaReady});
}
$(function(){
	$NG.window3.on('mouseenter','#frostnova',function(){
		var spellType = "Alteration";
		var CD = "12".fontcolor("#ff0000");
		NG.tooltipname.innerHTML = "Frost Nova";
		NG.tooltipmsg.innerHTML = "Cost: "+green(wiz.cost.frostNova)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Frost Nova roots all targets to the ground in an ice formation.";
	});
});
function frostNova(){
	if(btn.d.frostnova===true||my.level<3){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = wiz.cost.frostNova;
	if(my.mp<spellMpCost){ return; }
    setD('frostnova', true);
    BGP('frostnova', "-500% -100%");
	beginGlobalCooldown();
	currentSpell = "Frost Nova";
	spellType = "alteration";
	var d=12000;
	T.delayedCall(d/1000, frostNovaTimer);
	timerTick(D.getElementById('frostnova'),d/1000,'frostnova');
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	for (var i=0;i<=4;i++){
		if(mob[i].name!==""){
			var Slot = i;
			if(statusResist(Slot)===true){
				Chat((mob[Slot].name+" resisted Frost Nova."),1);
			}else{
				Chat((mob[Slot].name+" is immobilized by a wave of frost."),3);
				stopMob(Slot);
				setMobOpacity(Slot);
				mob[Slot].rootStatus=4;
				$("#rootIcon"+Slot+",#rootBuffIcon"+Slot).remove();
				animateRoot(Slot, true);
				addMobBuffIcon("Root",Slot,"rootBuffIcon",0,-160);
			}
		}
	}
	animateNova('frostNova');
	playAudio("novaice");
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
}
function magicMissilesReady(){
	if(D.getElementById('magicmissiles').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;}
	if(bashStatus===0||fearStatus===0){ return; }
    setD('magicmissiles', false);
    BGP('magicmissiles', "-600% 0%");
	g.checkWizardSkills();
	refreshmagicMissiles.kill();
}
function magicMissilesTimer(){
	refreshmagicMissiles = T.to('', .1, {repeat:-1, onRepeat:magicMissilesReady});
}
function magicMissiles(){
	if(btn.d.magicmissiles===true||my.level<5){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = wiz.cost.magicMissiles;
	if(my.mp<spellMpCost){ return; }
    setD('magicmissiles', true);
    BGP('magicmissiles', "-600% -100%");
	T.delayedCall(15, magicMissilesTimer);
	timerTick(D.getElementById('magicmissiles'),15000/1000,'magicmissiles');
	referenceDate2 = new Date();
	// castingSpell = 0;
	currentSpell = "Arcane Missiles";
	spellType = "conjuration";
	checkSpellLevelUp();
	spellCastTime = 2700;
	Chat(("You cast "+currentSpell+"."),3);
	beginGlobalCooldown();
	g.drawMyMp(-spellMpCost);
	function launchMissile(count){
		var Slot = TGT;
		if(count>=5||fearStatus===0||bashStatus===0||!mob[Slot].name){ return; }
		count++;
		playAudio("icebolt"+ ~~(M.random()*(3)+1));
		var damage = minMax(conjurationTotal()*1.1, .77);
		if(GLB.videoSetting==="High"){ animateMagicMissile(Slot); }
		T.delayedCall(.25, function(){ 
			g.myMagicDamage("magic", damage, Slot, checkCrit(), "Arcane Missiles");
		});
		checkMirrorImages("magic", damage,Slot);
		if(fearStatus===1&&bashStatus===1){
			T.delayedCall(.5, function(){ 
				launchMissile(count);
			});
		}
	}
	T.delayedCall(.25, function(){ 
		launchMissile(0);
	});
}
$(function(){
	$NG.window3.on('mouseenter','#magicmissiles',function(){
		var a=TTmag( conjurationTotal()*1.1, .77, "magic", "Arcane Missiles");
		NG.tooltipname.innerHTML = "Arcane Missiles";
		NG.tooltipmsg.innerHTML = "Cost: "+green(wiz.cost.magicMissiles)+" Mana Points<br>"+
		"Spell Type: Conjuration<br>"+
		"Cooldown: "+green("15")+" Seconds<br><br>"+
		"Arcane Missiles launches five projectiles at your target for "+a[0]+" to "+a[1]+" arcane damage.<br><br>"+
		"Effect: Arcane Missiles absorb health and mana on a killing blow. The amount absorbed is based on your target's level";
	});
});
function magicMissileAbsorb(Slot){
	g.popupMana(M.ceil(mob[Slot].level*1.5));
	g.popupHeal(M.ceil(mob[Slot].level*2.5));
}
function animateMagicMissile(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX-100;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY-100;
	var e1 = can('magicMissile', 5, 490, 618, 300, 300, true);
	T.to(e1, .25, {
		startAt:{
			rotation:(M.random()*(360))
		},
		rotation:"+=540",
		ease:ez.lin
	});
	T.to(e1, .25, {
		scaleX:.25,
		scaleY:.25,
		x:cX-38+125,
		y:cY-38+125,
		onComplete:function(){
			cRem(5, e1);
			var c2 = img("purpleparticle50");
			function doit(count){
				var ranX = cX+88+ (M.random()*(300)-150);
				var ranY = cY+88+ (M.random()*(250)-175);
				var p1 = cacheAdd(c2, 5, ranX, ranY, 1, 1, true);
				T.to(p1, 1, {
					y:"+="+(M.random()*(30)+10),
					scaleX:0,
					scaleY:0,
					onComplete:function(){
						cRem(5, p1);
					}
				});
				count++;
				if(count<15){ doit(count); }
			}
			doit(0);
			
		}
	});
}
function viziersShielding(){
	if(btn.d.viziersshielding===true||my.level<7){ return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = wiz.cost.viziersShielding;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Vizier's Shielding";
	spellCastTime = castSpeedTotal(4000);
	spellType = "abjuration";
	if(startSpell()===false){ return; }
	animateParticlesUp("teal");
	animateCastBar("viziersShielding");
	playAudio("spellCastAbjure",0,spellCastTime);
}

$(function(){
	$NG.window3.on('mouseenter','#viziersshielding',function(){
		var spellType = "Abjuration";
		var duration = "54".fontcolor("#00ff00");
		var v1 = abjurationTotal();
		var v2 = talent9();
		var value1 = ( M.ceil( (v1*.75)*((v2*11.3/100)+1) )+"").fontcolor("#00ff00");
		var value2 = ( M.ceil( (v1*.12)*((v2*6.1/100)+1) )+"").fontcolor("#00ff00");
		var value3 = ( M.ceil(v1*.11)+"").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Vizier's Shielding";
		NG.tooltipmsg.innerHTML = "Cost: "+green(wiz.cost.viziersShielding)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br><br>"+
		"Vizier's Shielding buffs your armor by "+value2+", your health by "+value1+", and all resistances by "+value3+" for "+duration+" minutes.";
	});
});
g.viziersShieldingFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("spellDoneBuff");
	g.drawMyMp(-spellMpCost);
	Chat(("You are shielded by strands of flowing ether."),3);
	if(viziersShieldingStatus===true){
		maxHpBuff-=viziersShieldingHpBoost;
		armorBuff-=viziersShieldingArmorBoost;
		svpoisonBuff-=viziersShieldingPoisonBoost;
		svmagicBuff-=viziersShieldingMagicBoost;
		svlightningBuff-=viziersShieldingLightningBoost;
		svcoldBuff-=viziersShieldingColdBoost;
		svfireBuff-=viziersShieldingFireBoost;
	}
	viziersShieldingTimeout.kill(); 
	viziersShieldingTimeout = T.delayedCall(3240, viziersShieldingExpire);
	var v2 = abjurationTotal();
	viziersShieldingHpBoost = M.ceil( (v2*.75)*((talent9()*11.3/100)+1) );
	viziersShieldingArmorBoost = M.ceil( (v2*.12)*((talent9()*6.1/100)+1) );	
	var v1 = M.ceil(v2*.11);
	viziersShieldingPoisonBoost = v1;
	viziersShieldingMagicBoost = v1;
	viziersShieldingLightningBoost = v1;
	viziersShieldingColdBoost = v1;
	viziersShieldingFireBoost = v1;
	maxHpBuff+=viziersShieldingHpBoost;
	armorBuff+=viziersShieldingArmorBoost;
	svpoisonBuff+=viziersShieldingPoisonBoost;
	svmagicBuff+=viziersShieldingMagicBoost;
	svlightningBuff+=viziersShieldingLightningBoost;
	svcoldBuff+=viziersShieldingColdBoost;
	svfireBuff+=viziersShieldingFireBoost;
	viziersShieldingStatus=true;
	g.drawMyHp();
	CStat();
	var buffId = "hpbuffIcon";
	var duration = 3240000;
	hpbuffIconTimer.kill();
	hpbuffIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon("Vizier's Shielding",buffId,duration,-544);
	animateBuff('teal','easeInBack', 25, 5, 150, 3);
}
function viziersShieldingExpire(){
	viziersShieldingStatus=false;
	maxHpBuff-=viziersShieldingHpBoost;
	armorBuff-=viziersShieldingArmorBoost;
	svpoisonBuff-=viziersShieldingPoisonBoost;
	svmagicBuff-=viziersShieldingMagicBoost;
	svlightningBuff-=viziersShieldingLightningBoost;
	svcoldBuff-=viziersShieldingColdBoost;
	svfireBuff-=viziersShieldingFireBoost;
	CStat();
	g.drawMyHp();
}

function fireballReady(){
	if(D.getElementById('fireball').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
	setD('fireball', false);
	BGP('fireball', "-700% 0%");
	g.checkWizardSkills();
	refreshfireball.kill();
}
function fireballTimer(){
	refreshfireball = T.to('', .1, {repeat:-1, onRepeat:fireballReady});
}
function fireball(){
	if(btn.d.fireball===true||my.level<9){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = wiz.cost.fireball;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Fireball";
	spellType = "evocation";
	spellCastTime = castSpeedTotal(2000);
	if(startSpell()===false){ return; }
	animateParticlesDown("orange");
	animateCastBar("fireball");
	playAudio("spellDoneFlames",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#fireball',function(){
		var spellType = "Evocation";
		var CD = 15;
		if(my.talent10>=20){
			CD/=2;
		}
		var a=TTmag( 3+evocationTotal()*4.3, .8, "fire", "Fireball");
		NG.tooltipname.innerHTML = "Fireball";
		NG.tooltipmsg.innerHTML = "Cost: "+green(wiz.cost.fireball)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Fireball hits your target and adjacent targets for "+a[0]+" to "+a[1]+" fire damage.";
	});
});
g.fireballFinish=function(skip, Slot){
	if(endSpell()===false){ return; }
	if(Slot===undefined){
		var Slot = TGT;
	}
	if(GLB.videoSetting==="High"){ animateFireball(Slot); }
	if(!skip){
		var d=15000;
		if(my.talent10>=20){ d=7500; }
		setD('fireball', true);
		BGP('fireball', "-700% -100%");
		T.delayedCall(d/1000, fireballTimer);
		timerTick(D.getElementById('fireball'),d/1000,'fireball');
		g.drawMyMp(-spellMpCost);
	}
	function fireballHit(){
		playAudio("spellDoneBoom");
		for (var i=(Slot-1);i<=(Slot+1);i++){
			if(i===-1||i===5){ continue; }
				var damage = minMax( 3+evocationTotal()*4.3, .8);
				g.myMagicDamage("fire", damage, i, checkCrit(), "Fireball");
				checkMirrorImages("fire", damage, i);
			}
		}
	T.delayedCall(.25, fireballHit);
}
function animateFireball(Slot){
	if(GLB.videoSetting!=="High"){ return; }
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX-400;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY-400;
	var speed = 250;
	var e1 = can('fireball', 5, 240, 130, 800, 800, true);
	T.to(e1, speed/1000, {
		rotation:360,
		scaleX:.375,
		scaleY:.375,
		x:cX+400,
		y:cY+400,
		ease:ez.lin,
		onComplete:function(){
			cRem(5, e1);
		}
	});
	var particles = 50;
	var c2 = img("orangeparticle50");
	function doit(count){
		var ranX = cX+388+ (M.random()*(700)-350);
		var ranY = cY+388+ (M.random()*(350)-225);
		var p1 = cacheAdd(c2, 5, ranX, ranY);
		T.to(p1, .75, {
			x:(ranX+12+M.random()*(20)-10),
			y:(ranY+50),
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		if(count<particles){ 
			doit(++count); 
		}
	}
	T.delayedCall(speed/1000, function(){
		doit(0);
	});
}

function deepFreezeReady(){
	if(D.getElementById('deepfreeze').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('deepfreeze', false);
    BGP('deepfreeze', "-800% 0%");
	g.checkWizardSkills();
	refreshdeepFreeze.kill();
}
function deepFreezeTimer(){
	refreshdeepFreeze = T.to('', .1, {repeat:-1, onRepeat:deepFreezeReady});
}
$(function(){
	$NG.window3.on('mouseenter','#deepfreeze',function(){
		var spellType = "Alteration";
		var CD = 24;
		if(my.talent7>=20){
			CD/=2;
		}
		var target='your target';
		if(my.talent6>=20){ 
			target='three targets';
		}
		var a=TTmag( alterationTotal()*1.9, .88, "cold", "Deep Freeze");
		var duration = ( (3000+(alterationTotal()*42) )/1000 ).toFixed(1);
		var duration = duration.fontcolor("#00ff00");
		var value1 = "100%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Deep Freeze";
		NG.tooltipmsg.innerHTML = "Cost: "+green(wiz.cost.deepFreeze)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Deep Freeze hits "+target+" for "+a[0]+" to "+a[1]+" cold damage.<br><br>"+
		"Effect: Encases "+target+" in a cone of ice for "+duration+" seconds. Encased targets cannot attack and take "+value1+" more damage the next time you hit them, but the encasement shatters.";
	});
});
function deepFreeze(){
	if(btn.d.deepfreeze===true||my.level<11){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = wiz.cost.deepFreeze;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Deep Freeze";
	spellType = "alteration";
    setD('deepfreeze', true);
    BGP('deepfreeze', "-800% -100%");
	var d=24000;
	if(my.talent7>=20){ d=12000; }
	T.delayedCall(d/1000, deepFreezeTimer);
	timerTick(D.getElementById('deepfreeze'),d/1000,'deepfreeze');
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	// freeze effect - restart according monster slot
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
	var Slot = TGT;
	var multi=false;
	if(my.talent6>=20){ multi=true; }
	var freezeDuration=3000+(alterationTotal()*42);
	freezeDuration*=freezeReduction();
	for(var i=0;i<=4;i++){
		if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
			if(i===Slot||multi===true){
				var damage = minMax(alterationTotal()*1.9, .88);
				g.myMagicDamage("cold", damage, i, checkCrit(), "Deep Freeze");
				encaseTarget(i, freezeDuration,-256);
			}
		}
	}
}

function encaseTarget(Slot, freezeDuration, spriteX){	
	if(mob[Slot].name!==""){
		freezeDuration*=freezeReduction();
		stopMob(Slot);
		setMobOpacity(Slot);
		mob[Slot].shatterStatus=true;
		mob[Slot].frozenStatus=true;
		mob[Slot].spellActive.kill();
		mob[Slot].frozenTimer.kill();
		$("#iceIcon"+Slot).remove();
		mob[Slot].frozenTimer = T.delayedCall(freezeDuration/1000, function(){
			mob[Slot].shatterStatus=false;
			mob[Slot].frozenStatus=false;
			T.to('#iceIcon'+Slot, .5, {
				opacity:0,
				onComplete:function(){
					$("#iceIcon"+Slot).remove();
				}
			});
		});
		Chat((mob[Slot].name+" is encased in ice."));
		interruptTarget(Slot);
		encaseAnimation(Slot, freezeDuration);
		addMobBuffIcon("Frozen",Slot,"freezeIcon",freezeDuration,spriteX);
		removeFreezeIcons(0, Slot);
		tint(Slot, 'cold', freezeDuration/1000);
	}
}
function removeFreezeIcons(count, Slot){
	function removeIt(count){
		T.to('.freezeIcon'+Slot, .5, {
			opacity:0,
			onComplete:function(){
				$(this).remove();
			}
		});
		if(count<8){
			T.delayedCall(.1, function(){
				removeIt(++count);
			});
		}
	}
	removeIt(count);
}

function chainLightningReady(){
	if(D.getElementById('chainlightning').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('chainlightning', false);
    BGP('chainlightning', "-900% 0%");
	g.checkWizardSkills();
	refreshchainLightning.kill();
}
function chainLightningTimer(){
	refreshchainLightning = T.to('', .1, {repeat:-1, onRepeat:chainLightningReady});
}
function chainLightning(){
	if(btn.d.chainlightning===true||my.level<13){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = wiz.cost.chainLightning;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Chain Lightning";
	spellType = "evocation";
	spellCastTime = castSpeedTotal(2000);
	if(startSpell()===false){ return; }
	animateParticlesDown("yellow");
	animateCastBar("chainLightning");
	playAudio("spellCastEvoke2",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#chainlightning',function(){
		var spellType = "Evocation";
		var CD = 20;
		if(my.talent3>=20){
			CD/=2;
		}
		var a=TTmag( evocationTotal()*4.8, .62, "lightning", "Chain Lightning");
		var b=TTmag( evocationTotal()*7.3, .62, "lightning", "Chain Lightning");
		NG.tooltipname.innerHTML = "Chain Lightning";
		NG.tooltipmsg.innerHTML = "Cost: "+green(wiz.cost.chainLightning)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Chain Lightning hits your primary target and chains to adjacent targets up to 6 times for "+a[0]+" to "+a[1]+" lightning damage.<br><br>"+
		"If Chain Lightning only hits one target, it will hit for "+b[0]+" to "+b[1]+" lightning damage.";
	});
});
g.chainLightningFinish=function(){
	if(endSpell()===false){ return; }
    setD('chainlightning', true);
    BGP('chainlightning', "-900% -100%");
	var d=20000;
	if(my.talent3>=20){ d=10000; }
	T.delayedCall(d/1000, chainLightningTimer);
	timerTick(D.getElementById('chainlightning'),d/1000,'chainlightning');
	g.drawMyMp(-spellMpCost);
	function chainRight(Slot){
		function checkLeft(){
			bounce=1;
			var mobleft = Slot-2;
			if(Slot>=0&&Slot<=4){
				if(mob[Slot].name===""){ return; }
				if(mobleft>=0&&mobleft<=4){ 
					if(mob[mobleft].name===""){ return; }
				}
			}
			Slot-=2;
			if(countMobs()===0){ return; }
			T.delayedCall(.1, function(){ 
				chainLeft(Slot); 
			});
			return;
		}
		// too far right
		if(Slot===5&&bounce===0){
			checkLeft();
			return;
		}
		// already bounced
		if(Slot===5&&bounce>=1){ return; }
		// no mob present
		 if(mob[Slot].name===""&&bounce===0){
			checkLeft();
			return;
		 }
		if(bounce===1&&mob[Slot].name===""){ return; }
		if(Slot===5){ return; }
		var damage = minMax(evocationTotal()*4.8, .62);
		var mType="lightning";
		var spellName = "Chain Lightning";
		if(GLB.videoSetting==="High"){ animateChainLightning(Slot); }
		playAudio("lightning"+ ~~(M.random()*(3)+1));
		g.myMagicDamage(mType, damage, Slot, checkCrit(), spellName);
		checkMirrorImages(mType, damage,Slot);
		Slot+=1;
		T.delayedCall(.2, function(){ 
			chainRight(Slot); 
		});
	}
	function chainLeft(Slot){
		function checkRight(){
			bounce=1;
			var mobright = Slot+2;
			if(Slot>=0&&Slot<=4){
				if(mob[mobright].name===""){ return; }
				if(mobright>=0&&mobright<=4){ 
					if(mob[mobright].name===""){ return; }
				}
			}
			Slot+=2;
			if(countMobs()===0){ return; }
			T.delayedCall(.1, function(){ 
				chainRight(Slot); 
			});
			return;
		}
		// too far left
		if(Slot===-1&&bounce===0){
			checkRight();
			return;
		}
		// bounced already
		if(Slot===-1&&bounce>=1){ return; }
		// no mob present
		if(mob[Slot].name===""&&bounce===0){
			checkRight();
			return;
		}
		if(bounce===1&&mob[Slot].name===""){ return; }
		if(Slot===-1){ return; }
		var damage = minMax(evocationTotal()*4.8, .62);
		var mType="lightning";
		var spellName = "Chain Lightning";
		if(GLB.videoSetting==="High"){ animateChainLightning(Slot); }
		playAudio("lightning"+ ~~(M.random()*(3)+1));
		g.myMagicDamage(mType, damage, Slot, checkCrit(), spellName);
		checkMirrorImages(mType, damage,Slot);
		Slot-=1;
		T.delayedCall(.2, function(){ 
			chainLeft(Slot); 
		});
	}
	var Slot = TGT;
	var bounce = 0;
	if(countMobs()===1||(countMobs()>1&&Slot===0&&mob[1].name==="")||(countMobs()>1&&Slot===3&&mob[2].name==="") ){
		function singleHit(){
			var damage = minMax(evocationTotal()*7.3, .62);
			var mType="lightning";
			var spellName = "Chain Lightning";
			if(GLB.videoSetting==="High"){ animateChainLightning(Slot); }
			playAudio("lightning"+ ~~(M.random()*(3)+1));
			g.myMagicDamage(mType, damage, Slot, checkCrit(), spellName);
			checkMirrorImages(mType, damage,Slot);
			return;
		}
		T.delayedCall(.5, singleHit);
	}
	if( (Slot===0||Slot===1)&&countMobs()>1){
		T.delayedCall(.5, function(){ 
			chainRight(Slot); 
		});
	}
	if( (Slot===2||Slot===3||Slot===4)&&countMobs()>1){
		T.delayedCall(.5, function(){ 
			chainLeft(Slot); 
		});
	}
}
function animateChainLightning(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY;
	var e1 = can('chainLightning', 5, cX+M.random()*(50)-125, -100, 200, 720);
	flipImg(e1);
	T.to(e1, .15, {
		alpha:1,
		onComplete:function(){
			T.to(e1, .15, {
				alpha:0,
				ease:ez.Qin,
				onComplete:function(){
					cRem(5, e1);
				}
			});
		}
	});
	function doit(count){
		var ranX = cX+ (M.random()*(400)-200);
		var ranY = cY+ (M.random()*(450)-375);
		var p1 = can('whiteparticle50', 5, ranX, ranY, 25, 25);
		T.to(p1, 1, {
			top:(ranY+M.random()*(40)-20),
			left:(ranX+4+M.random()*(40)-20),
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(5, p1);
			},
			ease:ez.cinout
		});
		count++;
		if(count<8){ doit(count); }
	}
	doit(0);
}


function glacialSpikeReady(){
	if(D.getElementById('glacialspike').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('glacialspike', false);
    BGP('glacialspike', "-1000% 0%");
	g.checkWizardSkills();
	refreshglacialSpike.kill();
}
function glacialSpikeTimer(){
	refreshglacialSpike = T.to('', .1, {repeat:-1, onRepeat:glacialSpikeReady});
}
function glacialSpike(){
	if(btn.d.glacialspike===true||my.level<15){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = wiz.cost.glacialSpike;
	if(my.mp<spellMpCost){ return; }
	currentSpell = "Glacial Spike";
	spellType = "evocation";
	spellCastTime = castSpeedTotal(2000);
	if(startSpell()===false){ return; }
	animateCastBar("glacialSpike");
	playAudio("spellDoneFlames",0,spellCastTime);
	animateParticlesDown("teal");
}
$(function(){
	$NG.window3.on('mouseenter','#glacialspike',function(){
		var spellType = "Evocation";
		var CD = 15;
		if(my.talent7>=20){
			CD/=2;
		}
		var a=TTmag( evocationTotal()*2, .84, "cold", "Glacial Spike");
		var v1 = "7".fontcolor("#00ff00");
		var v2 = "25%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Glacial Spike";
		NG.tooltipmsg.innerHTML = "Cost: "+green(wiz.cost.glacialSpike)+" Mana Points<br>"+
		"Cast Time: "+castTimeTT(2000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Glacial Spike hits your target for "+a[0]+" to "+a[1]+" cold damage.<br><br>"+
		"Effect: Freezes your target and adjacent targets for "+v1+" seconds. Frozen targets take "+v2+" additional damage.";
	});
});
g.glacialSpikeFinish=function(bypass){
	if(!bypass){
		if(endSpell()===false){ return; }
	}
	playAudio("icespike1");
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animateGlacialSpike(Slot); }
	if(!bypass){
		setD('glacialspike', true);
		BGP('glacialspike', "-1000% -100%");
		var d=15000;
		if(my.talent7>=20){
			d/=2;
		}
		T.delayedCall(d/1000, glacialSpikeTimer);
		timerTick(D.getElementById('glacialspike'),d/1000,'glacialspike');
		g.drawMyMp(-spellMpCost);
	}
	function spikeHit(){
		for (var i=(Slot-1);i<=(Slot+1);i++){
			if(i===-1||i===5){ continue; }
			var damage = minMax(evocationTotal()*2, .84);
			var d = 7000;
			var sX = -320;
			if(bypass){
				damage = minMax(693, .84);
				d = 4000;
				sX = -32;
			}
			g.myMagicDamage("cold", damage, i, checkCrit(), "Glacial Spike");
			//effect stuffs
			checkMirrorImages("cold", damage,i);
			freezeTarget(i, d, sX);
		}
	}
	T.delayedCall(.25, spikeHit);
}
function setMobOpacity(Slot){
	if(mob[Slot].name){
		if(mob[Slot].stasisFieldStatus===true){ 
			MOB[Slot].style.opacity=1;
			canvas[Slot].style.opacity=.2;
		}else if(mob[Slot].phased===true){
			MOB[Slot].style.opacity=1;
			canvas[Slot].style.opacity=.5;
		}else{
			MOB[Slot].style.opacity=1;
			canvas[Slot].style.opacity=1;
		}
	}
}
function freezeTarget(Slot, freezeDuration, spriteX){
	if(mob[Slot].name!==""){
		freezeDuration*=freezeReduction();
		stopMob(Slot);
		setMobOpacity(Slot);
		mob[Slot].frozenStatus=true;
		mob[Slot].chillStatus=true;
		mob[Slot].spellActive.kill();
		mob[Slot].frozenTimer.kill();
		$("#iceIcon"+Slot+",#freezeIcon"+Slot).remove();
		mob[Slot].frozenTimer = T.delayedCall(freezeDuration/1000, function(){
			mob[Slot].frozenStatus=false;
			mob[Slot].chillStatus=false;
			T.to('.freezeIcon'+Slot, .5, {
				opacity:0,
				onComplete:function(){
					$(this).remove();
				}
			});
		});
		Chat(mob[Slot].name+" is frozen.");
		interruptTarget(Slot);
		freezeAnimation(Slot, freezeDuration);
		addMobBuffIcon("Frozen",Slot,"freezeIcon",freezeDuration,spriteX);
		tint(Slot, 'cold', freezeDuration/1000);
	}
}
function animateGlacialSpike(Slot){
	var cX = MOB[Slot].offsetLeft+mob[Slot].cX-400;
	var cY = MOB[Slot].offsetTop+mob[Slot].cY-400;
	var e1 = can('glacialSpike', 5, 240, 368, 800, 800, true);
	var c2 = img("tealparticle50");
	T.to(e1, .25, {
		scaleX:.375,
		scaleY:.375,
		x:(cX+400),
		y:(cY+400),
		rotation:360,
		ease:ez.lin,
		onComplete:function(){
			cRem(5, e1);
			function doit(count){
				var ranX = (cX+388+(M.random()*(700)-350));
				var ranY = (cY+388+(M.random()*(350)-225));
				var e2 = cacheAdd(c2, 5, ranX, ranY);
				T.to(e2, .75, {
					x:(ranX+12+M.random()*(20)-10),
					y:(ranY+50),
					scaleX:0,
					scaleY:0,
					onComplete:function(){
						cRem(5, e2);
					}
				});
				if(count<40){ doit(++count); }
			}
			doit(0);
		}
	});
}

function iceBlockReady(){
	if(D.getElementById('iceblock').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;}
	setD('iceblock', false);
	BGP('iceblock', "-1100% 0%");
	g.checkWizardSkills();
	refreshiceBlock.kill();
}
function iceBlockTimer(){
	refreshiceBlock = T.to('', .1, {repeat:-1, onRepeat:iceBlockReady});
}
$(function(){
	$NG.window3.on('mouseenter','#iceblock',function(){
		var spellType = "Alteration";
		var CD = "90".fontcolor("#ff0000");
		var minimum = ( M.ceil(alterationTotal()/5)+"").fontcolor("#00ff00");
		var maximum = ( M.ceil(alterationTotal()/5)+"").fontcolor("#00ff00");
		var duration = "10".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Ice Block";
		NG.tooltipmsg.innerHTML = "Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Ice Block surrounds you in a protective block of ice for "+duration+" seconds. You cannot take damage throughout the duration and you recover "+minimum+" health and "+maximum+" mana every second. Ice Block can be used while feared or stunned.";
	});
});
function iceBlock(){
	if(my.hp<=0||paused===true){ return; }
	if(btn.d.iceblock===true||my.level<17){ return;}
	currentSpell = "Ice Block";
	if(startSpell()===false){ return; }
	if(invincibleStatus===true){ return; }
	beginGlobalCooldown();
	referenceDate2 = new Date();
	spellCastTime = 10000;
	castingSpell=0;
	spellType = "alteration";
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	function iceBlockExpire(){
		T.to(D.getElementById('iceBlock'), .5, {
			opacity:0,
			onComplete:function(){
				remove(this);
			}
		});
	}
	function tickRegen(){
		if(invincibleStatus===false){ return; }
		g.popupHeal(M.ceil(alterationTotal()/5));
		g.popupMana(M.ceil(alterationTotal()/5));
		T.delayedCall(1, tickRegen);
	}
	T.delayedCall(10, iceBlockExpire);
	NG.spellbardiv.style.display="block";
	Chat(("You surround yourself in a protective barrier of ice."),3);
	T.to(mySpellBar, 10, {
		startAt:{
			scaleX:1
		},
		scaleX:0,
		ease:ez.lin,
		onComplete:function(){
			tlSpellbar.kill();
			NG.spellbardiv.style.display="none";
			castingSpell=1;
			setD('iceblock', true);
			BGP('iceblock', "-1100% -100%");
			T.delayedCall(90, iceBlockTimer);
			timerTick(D.getElementById('iceblock'),90000/1000,'iceblock');
		}
	});
	startInvincible(10000);
	tickRegen();
	animateIceBlock();
	var skillName = "Ice Block";
	var buffId = "iceBlockIcon";
	var duration = 10000;
	var spriteX = -352;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon(skillName,buffId,duration,spriteX);
	playAudio("shivers");
}
function resetInvincible(){
	invincibleStatus=false;
}
function startInvincible(d){
	invincibleStatus=true;
	invincibleTimer.kill();
	if(Set.Warlord >= 6){
		d*=2;
	}
	invincibleTimer = T.delayedCall(d/1000, resetInvincible);
}

function iceCometReady(){
	if(D.getElementById('icecomet').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('icecomet', false);
    BGP('icecomet', "-1200% 0%");
	g.checkWizardSkills();
	refreshiceComet.kill();
}
function iceCometTimer(){
	refreshiceComet = T.to('', .1, {repeat:-1, onRepeat:iceCometReady});
}
function iceComet(){
	if(btn.d.icecomet===true||my.level<20){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	currentSpell = "Ice Comet";
	spellType = "evocation";
	spellCastTime = castSpeedTotal(3000);
	if(startSpell()===false){ return; }
	animateParticlesDown("teal");
	animateCastBar("iceComet");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#icecomet',function(){
		var spellType = "Evocation";
		var CD = 25;
		if(my.talent7>=20){
			CD/=2;
		}
		var a=TTmag( evocationTotal()*6, .87, "cold", "Ice Comet");
		var v1 = "33%".fontcolor("#00ff00");
		var v2 = "8".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Ice Comet";
		NG.tooltipmsg.innerHTML = "Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Ice Comet hits your target for "+a[0]+" to "+a[1]+" cold damage.<br><br>"+
		"Effect: Your target is slowed "+v1+" for "+v2+" seconds.";
	});
});
g.iceCometFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("meteorlaunch",0,2000);
	var Slot = TGT;
	if(GLB.videoSetting==="High"){ animateIceComet(Slot); }
    setD('icecomet', true);
    BGP('icecomet', "-1200% -100%");
	var d=25000;
	if(my.talent7>=20){ d=12500; }
	T.delayedCall(d/1000, iceCometTimer);
	timerTick(D.getElementById('icecomet'),d/1000,'icecomet');
	g.drawMyMp(-spellMpCost);
	function cometHit(){
		if(!mob[Slot].name){ return; }
		playAudio("spellDoneSlam");
		var damage = minMax(evocationTotal()*6, .87);
		var mType="cold";
		var spellName = "Ice Comet";
		g.myMagicDamage(mType, damage, Slot, checkCrit(), spellName);
		checkMirrorImages(mType, damage,Slot);
		chillTarget(Slot, 8000, -384);
		playAudio("spellDoneSlam");
	}
	T.delayedCall(2, cometHit);
}
function animateIceComet(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var y2 = (MOB[Slot].offsetTop+mob[Slot].cY);
	if(!mob[Slot].name){
		var x2 = ((Slot*244)+240);
		var y2 = 467;
	}
	function blam(count){
		var e3 = can('tealLight3', 5, x2-1980, -1077, 2560, 1844);
		T.to(e3, 2, {
			startAt:{
				alpha:0
			},
			alpha:.4,
			ease:ez.Qin,
			onComplete:function(){
				cRem(5, e3);
			}
		});
		count++;
		if(count<4){ 
			T.delayedCall(0, function(){ 
				blam(count);
			},0); 
		}
	}
	blam(0);
	var c2 = img("tealparticle50");
	function doit(count){
		var ranX = x2+ (M.random()*(700)-350);
		var ranY = y2+ (M.random()*(350)-225);
		var p1 = cacheAdd(c2, 5, ranX, ranY);
		T.to(p1, 1.2, {
			x:(ranX+12+M.random()*(40)-20),
			y:(ranY+50),
			scaleX:0,
			scaleY:0,
			onComplete:function(){
				cRem(5, p1);
			}
		});
		count++;
		if(count<80){ 
			T.delayedCall(.033, function(){ 
				doit(count);
			}); 
		}
	}
	var e1 = can('iceComet', 5, x2-2000, y2-2000, 600, 600);
	T.to(e1, .5, {
		startAt:{
			alpha:1
		},
		delay:1.5,
		x:(x2-450),
		y:(y2-300),
		ease:ez.lin,
		onComplete:function(){
			cRem(5, e1);
			doit(0);
			screenShake(1, 20, 0, 25);
			animateTremor(x2, 1000);
		}
	});
}
function animateTremor(left, width, loops, img){
	left = left || 640;
	width = width || 500;
	loops = loops || 1;
	img = img || 'tremor';
	var height = width/6.25;
	var top = height/2.9;
	var left2 = left-(width/2);
	var floor2 = floorT-top-20;
	var sx = width/400;
	var sy = height/100;
	function doit(count){
		var p4 = can(img, 7, left, (floorT-20), 0, 0);
		T.to(p4, .3, {
			scaleX:sx,
			scaleY:sy,
			x:left2,
			y:floor2,
			alpha:0,
			onComplete:function(){
				cRem(7, p4);
			}
		});
		if(++count<loops){
			T.delayedCall(.033, function(){
				doit(count);
			});
		}
	}
	doit(0);
}

function counterspellReady(){
	if(D.getElementById('counterspell').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('counterspell', false);
    BGP('counterspell', "-1300% 0%");
	g.checkWizardSkills();
	refreshcounterspell.kill();
}
function counterspellTimer(){
	refreshcounterspell = T.to('', .1, {repeat:-1, onRepeat:counterspellReady});
}
$(function(){
	$NG.window3.on('mouseenter','#counterspell',function(){
		var spellType = "Alteration";
		var CD = 24;
		if(my.talent10>=20){
			CD/=2;
		}
		var d1 = "6".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Counterspell";
		NG.tooltipmsg.innerHTML = "Cost: "+green(wiz.cost.counterspell)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Counterspell silences a casting target for "+d1+" seconds.";
	});
});
function counterspell(){
	if(btn.d.counterspell===true||my.level<24){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	spellMpCost = wiz.cost.counterspell;
	if(my.mp<spellMpCost){ return; }
    setD('counterspell', true);
    BGP('counterspell', "-1300% -100%");
	beginGlobalCooldown();
	spellType = "alteration";
	var d=24000;
	if(my.talent10>=20){ d=12000; }
	T.delayedCall(d/1000, counterspellTimer);
	timerTick(D.getElementById('counterspell'),d/1000,'counterspell');
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	var Slot = TGT;
	var silenceDuration = 6000;
	if(mob[Slot].dauntless){ silenceDuration*=dauntlessReduction(); }
	silenceTarget(Slot, silenceDuration, -416);
	if(GLB.videoSetting==="High"){ animateCounterspell(Slot); }
	playAudio("handofgod");
}
function silenceTarget(Slot, silenceDuration, spriteX){
	if(mob[Slot].name){
		interruptTarget(Slot);
		Chat((mob[Slot].name+"'s spell has been silenced."));
		mob[Slot].silenced=true;
		mob[Slot].silenceTimer.kill(); 
		mob[Slot].silenceTimer = T.delayedCall(silenceDuration/1000, function(){ 
			mob[Slot].silenced=false;
		});
		addMobBuffIcon("Silence",Slot,"silenceIcon",silenceDuration,-416);
	}
}
function animateCounterspell(Slot){
	var x2 = (MOB[Slot].offsetLeft+mob[Slot].cX);
	var xHeight = mob[Slot].imageHeight;
	var y2 = MOB[Slot].offsetTop;
	var xWidth = mob[Slot].imageWidth/2+40;
	//execute
	function doIt(count){
		var p8 = can('chainFG', 5, x2-xWidth, y2-150, xWidth*2, 100);
		T.to(p8, (800+(count*100))/1000, {
			y:600-(count*40),
			ease:ez.qout,
			onComplete:function(){
				T.to(p8, .5, {
					alpha:0,
					ease:ez.lin,
					onComplete:function(){
						cRem(5, p8);
					}
				});
			}
		});
		var p9 = can('chainBG', 7, x2-xWidth, y2-150, xWidth*2, 100);
		T.to(p9, (800+(count*100))/1000, {
			y:600-(count*40),
			ease:ez.qout,
			onComplete:function(){
				T.to(p9, .5, {
					alpha:0,
					ease:ez.lin,
					onComplete:function(){
						cRem(7, p9);
					}
				});
			}
		});
		count++;
		if(count<5){ 
			T.delayedCall(.1, function(){ 
				doIt(count);
			});
		}
	}
	doIt(0);
}


function harnessEtherReady(){
	if(D.getElementById('harnessEther').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('harnessEther', false);
    BGP('harnessEther', "-1400% 0%");
	g.checkWizardSkills();
	refreshharnessEther.kill();
}
function harnessEtherTimer(){
	refreshharnessEther = T.to('', .1, {repeat:-1, onRepeat:harnessEtherReady});
}
$(function(){
	$NG.window3.on('mouseenter','#harnessEther',function(){
		var spellType = "Conjuration";
		var CD = "45".fontcolor("#ff0000");
		var tBonus = talent11()*4.1;
		var minimum = (~~(100+(conjurationTotal()/2)+tBonus)+"%").fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Harness Ether";
		NG.tooltipmsg.innerHTML = "Cost: "+green(wiz.cost.harnessEther)+" Mana Points<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+CD+" Seconds<br><br>"+
		"Amplify the damage of your next spell by "+minimum+". While the effect is active, your mana recovers at "+green("250%")+" regeneration rate.";
	});
});
function harnessEther(){
	if(btn.d.harnessEther===true||my.level<28){return;}
	if(checkBashFear()===true){ return; }
	spellMpCost = wiz.cost.harnessEther;
	if(my.mp<spellMpCost){ return; }
	g.drawMyMp(-spellMpCost);
	currentSpell = "Harness Ether";
	spellCastTime = castSpeedTotal(12000);
	spellType = "conjuration";
	checkSpellLevelUp();
	playAudio("teleport");
	T.delayedCall(45, harnessEtherTimer);
    setD('harnessEther', true);
    BGP('harnessEther', "-1400% -100%");
	timerTick(D.getElementById('harnessEther'),45000/1000,'harnessEther');
	Chat(("Strands of ether coalesce in your hands."),3);
	harnessEtherStatus=true;
	addBuffIcon("Harness Ether","harnessEtherIcon",0,-448);
	animateBuff('blue','easeInOutQuad', 25, 5, 100, 2);
}


function meteorReady(){
	if(D.getElementById('meteor').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;} if(bashStatus===0||fearStatus===0){ return; }
    setD('meteor', false);
    BGP('meteor', "-1500% 0%");
	g.checkWizardSkills();
	refreshmeteor.kill();
}
function meteorTimer(){
	refreshmeteor = T.to('', .1, {repeat:-1, onRepeat:meteorReady});
}
function meteor(){
	if(btn.d.meteor===true||my.level<32){ return;}
	if(checkBashFear()===true){ return; }
	if(attackStatus===1){ targetRequired(); return; }
	currentSpell = "Meteor";
	spellType = "conjuration";
	spellCastTime = castSpeedTotal(3000);
	if(startSpell()===false){ return; }
	animateParticlesDown("red");
	animateCastBar("meteor");
	playAudio("spellCastEvoke1",0,spellCastTime);
}
$(function(){
	$NG.window3.on('mouseenter','#meteor',function(){
		var spellType = "Conjuration";
		var CD = 45;
		if(my.talent10>=20){
			CD/=2;
		}
		var a=TTmag( conjurationTotal()*9.5, .82, "fire", "Meteor");
		var b=TTmag( conjurationTotal()*.18, .65, "fire", "Meteor");
		var d1 = ".5".fontcolor("#00ff00");
		var d2 = "8".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Meteor";
		NG.tooltipmsg.innerHTML = "Cast Time: "+castTimeTT(3000)+" Seconds<br>"+
		"Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Meteor hits all targets for "+a[0]+" to "+a[1]+" fire damage. In its wake, meteor leaves a pool of lava inflicting "+b[0]+" to "+b[1]+" fire damage twice per second for "+d2+" seconds.";
	});
});
g.meteorFinish=function(){
	if(endSpell()===false){ return; }
	playAudio("meteorlaunch",0,2500);
	animateMeteor();
    setD('meteor', true);
    BGP('meteor', "-1500% -100%");
	var d=45000;
	if(my.talent10>=20){ d=22500; }
	T.delayedCall(d/1000, meteorTimer);
	timerTick(D.getElementById('meteor'),d/1000,'meteor');
	g.drawMyMp(-spellMpCost);
	function meteorHit(){
		playAudio("spellDoneBoom");
		for (var i=0;i<=4;i++){
			if(mob[i].name!==""){
				var Slot = i;
				var damage = minMax(conjurationTotal()*9.5, .82);
				var spellName = "Meteor";
				g.myMagicDamage("fire", damage, i, checkCrit(), spellName);
				checkMirrorImages("fire", damage,i);
				interruptTarget(i);
			}
		}
		function meteorTick(meteorTickCount, newMob){
			if(mob[newMob].name!==""){
				playAudio("explode"+ ~~(M.random()*(3)+1));
				var damage = minMax(conjurationTotal()*.18, .65);
				g.myMagicDamage("fire", damage, newMob, checkCrit(), "Meteor");
			}
			meteorTickCount += 1;
			if(meteorTickCount <= 16){ 
				T.delayedCall(.5, function(){ 
					meteorTick(meteorTickCount, newMob); 
				}); 
			}
		}
		for (var i=0;i<=4;i++){
			var meteorTickCount = 0;
			var newMob = i;
			meteorTick(meteorTickCount, newMob);
		}
	}
	T.delayedCall(2.5, meteorHit);
}
function animateMeteor(stop){
	if(GLB.videoSetting!=="High"){ return; }
	var x2 = 640;
	var y2 = 440;
	function blam(count){
		var e2 = can('orangeLight3', 5, x2-1780, -1497, 1844, 2560);
		T.to(e2,2.5,{
			startAt:{
				alpha:0,
			},
			alpha:.4,
			ease:ez.Qin,
			onComplete:function(){
				cRem(5, e2);
			}
		});
		if(count<3){ 
			blam(++count);
		}
	}
	blam(0);
	var e1 = can('meteor', 5, x2-2000, y2-2000, 600, 600);
	T.to(e1, 2, {
		startAt:{
			alpha:0
		},
		alpha:1,
		onComplete:function(){
			T.to(e1, .5, {
				x:(x2-350),
				y:(y2-125),
				ease:ez.Qin,
				onComplete:function(){
					cRem(5, e1);
					if(stop){ return; }
					screenShake(1, 20, 0, 25);
					function goFissure(count){
						var p5 = can('fissure', 6, 640, 1068, 1280, 0, true);
						T.to(p5, .25, {
							alpha:.5,
							scaleX:1.38,
							scaleY:1.38,
							y:720-100,
							x:M.random()*(800)-400+640,
							onComplete:function(){
								T.to(p5, 1, {
									y:720,
									scaleX:1,
									scaleY:.5,
									alpha:0,
									onComplete:function(){
										cRem(6, p5);
									}
								});
							}
						});
						if(count<=70){ 
							T.delayedCall(.1, function(){ 
								goFissure(++count);
							}); 
						}
					}
					goFissure(0);
				}
			});
		}
	});
}

function mirrorImagesReady(){
	if(D.getElementById('mirrorimages').textContent!==''){return;}
	if(castingSpell==0){return;}
	if(castingGlobal==0){return;}
	if(bashStatus===0||fearStatus===0){ return; }
    setD('mirrorimages', false);
    BGP('mirrorimages', "-1600% 0%");
	g.checkWizardSkills();
	refreshmirrorImages.kill();
	playAudio("summon");
}
function mirrorImagesTimer(){
	refreshmirrorImages = T.to('', .1, {repeat:-1, onRepeat:mirrorImagesReady});
}
$(function(){
	$NG.window3.on('mouseenter','#mirrorimages',function(){
		var spellType = "Alteration";
		var CD = 30;
		if(my.talent3>=20){
			CD/=2;
		}
		var v1 = 10;
		if(talent4()>0){
			v1 = (fix(talent4()*.8)*1)+v1;
		}
		NG.tooltipname.innerHTML = "Mirror Images";
		NG.tooltipmsg.innerHTML = "Spell Type: "+spellType+"<br>"+
		"Cooldown: "+green(CD)+" Seconds<br><br>"+
		"Create five Mirror Images to fight on your behalf. Each Mirror Image casts the same spells as you for "+green(v1+"%")+" of your damage. Mirror Images also absorb a single hit, which kills them instantly. You cannot have more than 5 Mirror Images at once.";
	});
});
function mirrorImages(){
	if(btn.d.mirrorimages===true||my.level<38){ return;}
	if(checkBashFear()===true){ return; }
    setD('mirrorimages', true);
    BGP('mirrorimages', "-1600% -100%");
	spellType = "alteration";
	var d=30000;
	if(my.talent3>=20){ d=15000; }
	T.delayedCall(d/1000, mirrorImagesTimer);
	timerTick(D.getElementById('mirrorimages'),d/1000,'mirrorimages');
	checkSpellLevelUp();
	g.drawMyMp(-spellMpCost);
	mirrorImageStatus = 5;
	var buffId = "mirrorImagesIcon";
	var duration = 30000;
	mirrorImagesIconTimer.kill();
	mirrorImagesIconTimer = T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffIcon("Mirror Images",buffId,duration,-512);
	playAudio("summon");
	var newBuff1 = $('<div>').css({
			width:32,
			height:32,
			color:"#0f0",
			position:"absolute",
			fontSize:14,
			top:22,
			left:2,
			padding:0,
			background:"transparent",
			zIndex:76
		}).attr("id","mirrorImagesCount")
		.addClass("blackOutline3")
		.appendTo("#mirrorImagesIcon")
		.html(mirrorImageStatus);
}
function checkMirrorImages(mType, damage,Slot){
	function mirrorImageExecute(){
		if(mirrorCount>=mirrorImageStatus){ return; }
		mirrorDamage[mirrorCount] = (damage*.05)+( ((talent4()*.8)/100)*damage);
		g.myMagicDamage(mType, minMax(mirrorDamage[mirrorCount], .8), Slot, checkCrit(), "Mirror Images");
		mirrorCount++;
		T.delayedCall(.1, mirrorImageExecute);
	}
	var mirrorDamage = [];
	var mirrorCount = 0;
	if(mirrorImageStatus>0){ mirrorImageExecute(); }
}

function checkLevelUp(){
	if(my.exp>=nextLevel()&&my.level<99){
		beforeSpacerLength = $(".spacers").length;
		my.level++;
		playAudio('levelup2');
		Error("You have leveled up! You are now level "+my.level+"!","#ffff00");
		flashScreen("#daa520",.3,2);
		var x;
		var L = my.level;
		if(my.job==="Warrior"){
			if(L===6&&my.dodge<1){ my.dodge=1; x="how to dodge.";}
			if(L===13&&my.dualWield<1){ my.dualWield=1; x="how to dual wield.";}
			if(L===10&&my.parry<1){ my.parry=1; x="how to parry.";}
			if(L===15&&my.doubleAttack<1){ my.doubleAttack=1; x="how to double attack.";}
			if(L===25&&my.riposte<1){ my.riposte=1; x="how to riposte.";}
			if(L===2){ x="Slam.";}
			if(L===3){ x="Kick.";}
			if(L===5){ x="Enrage.";}
			if(L===7){ x="Pummel.";}
			if(L===9){ x="Subjugate.";}
			if(L===11){ x="Furious Scorn.";}
			if(L===13){ x="Triage.";}
			if(L===15){ x="Decisive Blow.";}
			if(L===17){ x="Hemorrhage.";}
			if(L===20){ x="Absorb Spell.";}
			if(L===24){ x="Intrepid Might.";}
			if(L===28){ x="Bulwark.";}
			if(L===32){ x="Frenzied Rampage.";}
			if(L===38){ x="Shockwave.";}
		}
		if(my.job==="Monk"){
			if(L===6&&my.dodge<1){ my.dodge=1; x="how to block."; }
			if(L===12&&my.parry<1){ my.parry=1; x="how to parry.";}
			if(L===15&&my.doubleAttack<1){ my.doubleAttack=1; x="how to double attack.";}
			if(L===1){ x="Tiger Strike.";}
			if(L===2){ x="Crane Kick.";}
			if(L===3){ x="Eagle Strike.";}
			if(L===5){ x="Feign Death.";}
			if(L===7){ x="Windmill Kick.";}
			if(L===9){ x="Stone Fist Reversal.";}
			if(L===11){ x="Mend.";}
			if(L===13){ x="Intimidation.";}
			if(L===15){ x="Inner Peace.";}
			if(L===17){ x="Cheetah Strike.";}
			if(L===20){ x="Cobra Strike.";}
			if(L===24){ x="Chakra Blast.";}
			if(L===28){ x="Flying Kick.";}
			if(L===32){ x="Ancestral Flurry.";}
			if(L===38){ x="Dragon Strike.";}
			if(L===35&&my.riposte<1){ my.riposte=1; x="how to riposte.";}
		}
		if(my.job==="Rogue"){
			if(L===2){ x="Lacerate."; }
			if(L===3){ x="Evade."; }
			if(L===4&&my.dodge<1){ my.dodge=1; x="how to dodge.";}
			if(L===5){ x="Sonic Strike."; }
			if(L===7){ x="Backstab."; }
			if(L===9){ x="Cold Blood."; }
			if(L===12&&my.parry<1){ my.parry=1; x="how to parry.";}
			if(L===13&&my.dualWield<1){ my.dualWield=1; x="how to dual wield.";}
			if(L===11){ x="Flash Powder."; }
			if(L===16&&my.doubleAttack<1){ my.doubleAttack=1; x="how to double attack.";}
			if(L===13){ x="Hyper Strike."; }
			if(L===15){ x="Illusive Mist."; }
			if(L===17){ x="Stagger Shot."; }
			if(L===20){ x="Widow Strike."; }
			if(L===24){ x="Lobotomize."; }
			if(L===28){ x="Ancient Will."; }
			if(L===30&&my.riposte<1){ my.riposte=1; x="how to riposte.";}
			if(L===32){ x="Mirage Strike."; }
			if(L===38){ x="Prowling Gash."; }
		}
		if(my.job==="Ranger"){
			if(L===8&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===17&&my.dualWield<1){ x="how to dual wield.";my.dualWield=1; }
			if(L===20&&my.doubleAttack<1){ x="how to double attack.";my.doubleAttack=1; }
			if(L===18&&my.parry<1){ x="how to parry.";my.parry=1; }
			if(L===35&&my.riposte<1){ x="how to riposte.";my.riposte=1; }
			if(L===2){ x="Kick"; } 
			if(L===3){ x="Counter Shot."; }
			if(L===6){ x="Trueshot Arrow."; }
			if(L===9){ x="Light Healing."; }
			if(L===11){ x="Faerie Flame."; }
			if(L===13){ x="Ignite."; }
			if(L===15){ x="Thistlecoat."; }
			if(L===17){ x="Snare."; }
			if(L===19){ x="Feet Like Cat."; }
			if(L===21){ x="Shield of Brambles."; }
			if(L===24){ x="Warder's Rift."; }
			if(L===28){ x="Spirit of the Wolf."; }
			if(L===32){ x="Volley Shot."; }
			if(L===38){ x="Weapon Shield."; }
		}
		if(my.job==="Paladin"){
			if(L===10&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===20&&my.doubleAttack<1){ x="how to double attack.";my.doubleAttack=1; }
			if(L===17&&my.parry<1){ x="how to parry.";my.parry=1; }
			if(L===30&&my.riposte<1){ x="how to riposte.";my.riposte=1; }
			if(L===2){ x="Slam."; }
			if(L===3){ x="Rebuke."; }
			if(L===6){ x="Vengeance."; }
			if(L===9){ x="Greater Healing."; }
			if(L===11){ x="Holy Might."; }
			if(L===13){ x="Valor."; }
			if(L===15){ x="Ardent Judgment."; }
			if(L===17){ x="Spirit Armor."; }
			if(L===19){ x="Root."; }
			if(L===21){ x="Yaulp."; }
			if(L===24){ x="Fervent Prayer."; }
			if(L===28){ x="Divine Providence."; }
			if(L===32){ x="Flash of Light."; }
			if(L===38){ x="Symbol of Marshan."; }
		}
		if(my.job==="Shadow Knight"){
			if(L===10&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===20&&my.doubleAttack<1){ x="how to double attack.";my.doubleAttack=1; }
			if(L===17&&my.parry<1){ x="how to parry.";my.parry=1; }
			if(L===30&&my.riposte<1){ x="how to riposte.";my.riposte=1; }
			if(L===2){ x="Slam."; }
			if(L===3){ x="Death Strike."; }
			if(L===6){ x="Gasping Frenzy."; }
			if(L===9){ x="Summon Dead."; }
			if(L===11){ x="Life Tap."; }
			if(L===13){ x="Dooming Darkness."; }
			if(L===15){ x="Fear."; }
			if(L===17){ x="Siphon Strength."; }
			if(L===19){ x="Heat Blood."; }
			if(L===21){ x="Vampiric Embrace."; }
			if(L===24){ x="Strengthen Dead."; }
			if(L===28){ x="Resist Cold."; }
			if(L===32){ x="Feign Death."; }
			if(L===38){ x="Shadow Vortex."; }
		}
		if(my.job==="Bard"){
			if(L===10&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===17&&dualWieldTotal()<1){ x="how to dual wield.";my.dualWield=1; }
			if(L===2){ x="Chant of Battle."; }
			if(L===3){ x="Accelerando."; }
			if(L===5){ x="Hymn of Restoration."; }
			if(L===7){ x="Solon's Song of the Sirens."; }
			if(L===9){ x="Brusco's Boastful Bellow."; }
			if(L===11){ x="Elemental Rhythms."; }
			if(L===13){ x="Lucid Lullaby."; }
			if(L===15){ x="Consonant Chain."; }
			if(L===17){ x="Dissension."; }
			if(L===20){ x="Cassandra's Chorus of Clarity."; }
			if(L===24){ x="Anthem De Arms."; }
			if(L===28){ x="Euphonic Hymn."; }
			if(L===32){ x="Shield of Songs."; }
			if(L===38){ x="Denon's Desperate Dirge."; }
		}
		if(my.job==="Cleric"){
			if(L===15&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===2){ x="Sound of Force."; }
			if(L===3){ x="Superior Healing."; }
			if(L===5){ x="Resolution."; }
			if(L===7){ x="Binding Earth."; }
			if(L===9){ x="Expel Corruption."; }
			if(L===11){ x="Searing Revelation."; }
			if(L===13){ x="Martyr's Blessing."; }
			if(L===15){ x="Armor of Faith."; }
			if(L===17){ x="Guardian Angel."; }
			if(L===20){ x="Divine Sanctuary."; }
			if(L===24){ x="Holy Wrath."; }
			if(L===28){ x="Mark of Judgement."; }
			if(L===32){ x="Symbol of Yentus."; }
			if(L===38){ x="Benediction."; }
		}
		if(my.job==="Druid"){
			if(L===15&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===2){ x="Drones of Doom."; }
			if(L===3){ x="Greater Healing."; }
			if(L===5){ x="Skin Like Nature."; }
			if(L===7){ x="Tornado."; }
			if(L===9){ x="Engulfing Roots."; }
			if(L===11){ x="Shield of Spikes."; }
			if(L===13){ x="Drifting Death."; }
			if(L===15){ x="Spirit of the Wolf."; }
			if(L===17){ x="Lightning Blast."; }
			if(L===20){ x="Earthquake."; }
			if(L===24){ x="Chloroplast."; }
			if(L===28){ x="Hurricane."; }
			if(L===32){ x="Sylvan Creep."; }
			if(L===38){ x="Volcano."; }
		}
		if(my.job==="Shaman"){
			if(L===15&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===2){ x="Scourge."; }
			if(L===3){ x="Greater Healing."; }
			if(L===5){ x="Call of the Ancients."; }
			if(L===7){ x="Guardian Spirit."; }
			if(L===9){ x="Togor's Insects."; }
			if(L===11){ x="Cannibalize."; }
			if(L===13){ x="Poison Nova."; }
			if(L===15){ x="Spirit of the Wolf."; }
			if(L===17){ x="Enstill."; }
			if(L===20){ x="Affliction."; }
			if(L===24){ x="Reclaim Blood."; }
			if(L===28){ x="Glacial Impact."; }
			if(L===32){ x="Talisman of Trogmaar."; }
			if(L===38){ x="Devouring Plague."; }
		}
		if(my.job==="Necromancer"){
			if(L===22&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===2){ x="Invoke Death."; }
			if(L===3){ x="Cascading Darkness."; }
			if(L===5){ x="Invoke Fear."; }
			if(L===7){ x="Drain Soul."; }
			if(L===9){ x="Arch Shielding."; }
			if(L===11){ x="Feign Death."; }
			if(L===13){ x="Augment Death."; }
			if(L===15){ x="Ignite Blood."; }
			if(L===17){ x="Corpse Explosion."; }
			if(L===20){ x="Bond of Death."; }
			if(L===24){ x="Diamond Skin."; }
			if(L===28){ x="Asystole."; }
			if(L===32){ x="Detonate Soul."; }
			if(L===38){ x="Howling Terror."; }

		}
		if(my.job==="Enchanter"){
			if(L===22&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===2){ x="Gasping Embrace."; }
			if(L===3){ x="Cajoling Whispers."; }
			if(L===5){ x="Color Shift."; }
			if(L===7){ x="Mesmerize."; }
			if(L===9){ x="Discordant Barrier."; }
			if(L===11){ x="Shiftless Deeds."; }
			if(L===13){ x="Enchant Weapon."; }
			if(L===15){ x="Adorning Grace."; }
			if(L===17){ x="Alacrity."; }
			if(L===20){ x="Gravity Flux."; }
			if(L===24){ x="Mystic Rune."; }
			if(L===28){ x="Tashania."; }
			if(L===32){ x="Clarity."; }
			if(L===38){ x="Enthrall."; }
		}
		if(my.job==="Magician"){
			if(L===22&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===2){
				QMsg("You have learned Earth Elemental.");
				QMsg("You have learned Air Elemental.");
				QMsg("You have learned Fire Elemental.");
				QMsg("You have learned Frost Elemental.");
			}
			if(L===3){ x="Shield of Lava."; }
			if(L===5){ x="Firestorm."; }
			if(L===7){ x="Phantom Plate."; }
			if(L===9){ x="Frozen Orb."; }
			if(L===11){ x="Burnout."; }
			if(L===13){ x="Mana Shield."; }
			if(L===15){ x="Elemental Armor."; }
			if(L===17){ x="Psionic Storm."; }
			if(L===20){ x="Reclaim Elements."; }
			if(L===24){ x="Elemental Fury."; }
			if(L===28){ x="Armageddon."; }
			if(L===32){ x="Stasis Field."; }
			if(L===38){ x="Altered State."; }
		}

		if(my.job==="Wizard"){
			if(L===22&&my.dodge<1){ x="how to dodge.";my.dodge=1; }
			if(L===2){ x="Charged Bolts."; }
			if(L===3){ x="Frost Nova."; }
			if(L===5){ x="Arcane Missiles."; }
			if(L===7){ x="Vizier's Shielding."; }
			if(L===9){ x="Fireball."; }
			if(L===11){ x="Deep Freeze."; }
			if(L===13){ x="Chain Lightning."; }
			if(L===15){ x="Glacial Spike."; }
			if(L===17){ x="Ice Block."; }
			if(L===20){ x="Ice Comet."; }
			if(L===24){ x="Counterspell."; }
			if(L===28){ x="Harness Ether."; }
			if(L===32){ x="Meteor."; }
			if(L===38){ x="Mirror Images."; }
		}
		if(x){ QMsg("You have learned "+x); }
		if(my.level===20){
			QMsg("You may now assume a surname by clicking your name by your health bar.");
		}
		levelUpStats();
		checkLevelUp();
		saveButtonPositions();
		initNG();
		petHp = petMaxHp;
		talentNotify();
		NG.myexpbarId.style.width = '0px';
		drawExpBar();
		$.ajax({
			url: 'php/game1.php',
			data:{
				run: "updateExpGold", // level up
				lastName: my.lastName,
				title: my.title,
				level: my.level,
				job: my.job,
				race: my.race,
				exp: 0,
				gold: 0,
				name: my.name
				
			}
		}).fail(function(data){
			failToCommunicate();
		});
	}else{
		drawExpBar();
		CStat();
		showButtons();
		moveLockedSkills();
		writeMapHtml();
		g.drawMyHp();
		g.drawMyMp();
	}
}

// end current globals to prepare going to another state like fear, stun, etc
function globalCooldownEnd2(){
	lockoutTimer1.kill();
	cooldownTimer1.kill();
	lockoutTimer2.kill();
	cooldownTimer2.kill();
	if(bardSingStatus===true){bardSinging(); }
	for(var key in btn.cd){
		if(btn.cd[key]===true){
			btn.cd[key]=false;
			btn.d[key]=false;
		}
	}
}
//disable all buttons due to status effect for argument's duration - mob's stun, fear
function beginLockout(lockoutDuration){
	function lockoutInterval(){
		lockoutTimer2.kill(); 
		lockoutTimer2 = T.to('', .1, {repeat:-1, onRepeat:globalCooldownEnd});
	}
	castingGlobal = 0;
	castingSpell = 1;
	g[JOB.Cooldowns]();
	if(my.job==="Warrior"){
		checkIntrepidMight();
	}else if(my.job==="Rogue"){
		if(btn.d.ancientwillId===false){
			setBtn('ancientwillId', false, false);
		}
		if((bashStatus===0||
		fearStatus===0||
		rootStatus===0)&&
		ancientWillStatus===true&&
		btn.d.ancientwillId===false){
			ancientWillTimer.kill();
			BGP('ancientwillId', "-1700% 0");
		}
	}else if(my.job==="Paladin"){
		if(D.getElementById('layhandsId').textContent===''){
			setBtn('layhandsId', false, false);
			BGP('layhandsId', "-700% 0%");
		}
	}else if(my.job==="Cleric"){
		if( guardianAngelStatus===true ){
			setBtn('guardianangel', false, false);
			BGP('guardianangel', "-1000% 0%");
		}
	}else if(my.job==="Wizard"){
		if(D.getElementById('iceblock').textContent===''){
			setBtn('iceblock', false, false);
			BGP('iceblock', "-1100% 0%");
		}
	}
	lockoutTimer1.kill();
	lockoutTimer2.kill();
	lockoutTimer1 = T.delayedCall(lockoutDuration/1000, lockoutInterval);
}
function beginGlobalCooldown(d){
	function cooldownInterval(){
		cooldownTimer2.kill();
		cooldownTimer2 = T.to('', .1, {
			repeat:-1, 
			onRepeat:globalCooldownEnd
		});
	}
	castingGlobal = 0;
	g[JOB.Cooldowns]();
	cooldownTimer1.kill();
	cooldownTimer2.kill();
	cooldownTimer1 = T.delayedCall(phyGlobalTotal()/1000, function(){
		cooldownInterval();
	});
}

function globalCooldownEnd(){
	if(bashStatus===0||fearStatus===0){ return; }
	lockoutTimer1.kill(); 
	lockoutTimer2.kill();
	cooldownTimer1.kill(); 
	cooldownTimer2.kill();
	castingGlobal = 1;
	g[JOB.DoneCD]();
	g.drawMyMp();	// refreshes button status
}

g.updateRootStatus = function(Slot){
	if(mob[Slot].rootStatus>0){
		var rootDegrade = M.ceil(M.random()*(5));
		var rootWeaken=0;
		if(rootDegrade>=2&&rootDegrade<=3){ rootWeaken=2; }
		if(rootDegrade>=4){ rootWeaken=1; }
		mob[Slot].rootStatus-=rootWeaken;
		T.to(D.getElementById("rootIcon"+Slot), .5, {
			height:"-=10",
			force3D:true,
			ease:ez.lin
		});
	}
}
function weaponSkillCheck(){
	var foo=oneHandSlashTotal();
	if(P.eq[12].type==="crushed"){ foo = oneHandBluntTotal(); }
	if(P.eq[12].type==="punched"){ foo = handToHandTotal(); }
	if(P.eq[12].type==="pierced"){ foo = piercingTotal(); }
	if(P.eq[12].type==="cleaved"){ foo = twoHandSlashTotal(); }
	if(P.eq[12].type==="smashed"){ foo = twoHandBluntTotal(); }
	if("staff"===P.eq[12].type){ foo = twoHandBluntTotal(); }
	return foo;
}
function spellSkillCheck(){
	if(spellType==="alteration"){ return alterationTotal(); }
	if(spellType==="abjuration"){ return abjurationTotal(); }
	if(spellType==="evocation"){ return evocationTotal(); }
	if(spellType==="conjuration"){ return conjurationTotal(); }
	if(spellType==="channeling"){ return channelingTotal(); }
}

//racial skills
//human - ignore next cooldown timer

function resetSecondWind(){
	secondWindStatus=false;
}
function secondWindReady(){
	if(D.getElementById('secondwindId').textContent!==''){return;}
    setD('secondwindId', false);
    BGP('secondwindId', "0% 0%");
	refreshsecondWind.kill();
}
function secondWindTimer(){
	refreshsecondWind = T.to('', .1, {repeat:-1, onRepeat:secondWindReady});
}
$(function(){
	$NG.gameView.on('mouseenter','#secondwindId',function(){
		var minimum = "25".fontcolor("#00ff00");
		var multiplier = "12".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Second Wind";
		NG.tooltipmsg.innerHTML = "Cooldown: "+green("120")+" Seconds<br><br>"+
		"Reach deep within your soul to find an additional reserve of energy. Enhances all damage and reduces all damage taken by "+green("25%")+". Triggers health and mana regeneration for "+multiplier+" seconds.";
	});
});
function secondWind(){
	if(checkBashFear()===true){ return; }
	if(btn.d.secondwindId===true){return;}
	secondWindStatus=true;
	CStat();
    setD('secondwindId', true);
    BGP('secondwindId', "0% -100%");
	T.delayedCall(120, secondWindTimer);
	timerTick(D.getElementById('secondwindId'),120000/1000,'secondwindId');
	humanRacial.kill();
	humanRacial = T.delayedCall(12, resetSecondWind);
	Chat("Your tenacity unveils renewed vigor in your veins.",3);
	T.delayedCall(12, function(){ removeIcon("secondWindIcon"); });
	animateHealing("yellow",false,45);
	regenHealth(my.maxHp * .02, "Second Wind", 12, 0, 1, false, true);
	regenHealth(my.maxMp * .02, "Second Wind", 12, 0, 1, false, "bypass", true); // mp
}

function resetdivineAegis(){
	divineAegisStatus=false;
	setEquipValues();
	CStat();
}
function divineAegisReady(){
	if(D.getElementById('divineaegisId').textContent!==''){return;}
    setD('divineaegisId', false);
    BGP('divineaegisId', "0% 0%");
	refreshdivineAegis.kill();
}
function divineAegisTimer(){
	refreshdivineAegis = T.to('', .1, {repeat:-1, onRepeat:divineAegisReady});
}
$(function(){
	$NG.gameView.on('mouseenter','#divineaegisId',function(){
		var CD = "2".fontcolor("#ff0000");
		var multiplier = "20".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Divine Aegis";
		NG.tooltipmsg.innerHTML = "Cooldown: "+CD+" Minutes<br><br>"+
		"Surround yourself with a chromatic aegis that makes you highly resistant to all magic for "+multiplier+" seconds.";
	});
});
function divineAegis(){
	if(checkBashFear()===true){ return; }
	if(btn.d.divineaegisId===true){return;}
	divineAegisStatus=true;
	setEquipValues();
	CStat();
    setD('divineaegisId', true);
    BGP('divineaegisId', "0% -100%");
	T.delayedCall(120, divineAegisTimer);
	timerTick(D.getElementById('divineaegisId'),120000/1000,'divineaegisId');
	eruditeRacial.kill();
	eruditeRacial = T.delayedCall(20, resetdivineAegis);
	Chat(("You are enveloped by a chromatic aegis."),3);
	var buffId = "divineAegisIcon";
	addBuffRaceIcon("Divine Aegis",buffId,20000,0);
	animateHealing('purple',false,45);
}

//barbarian - add damage per hit
function resetancestralRampage(){
	ancestralRampageStatus=false;
}
function ancestralRampageReady(){
	if(D.getElementById('ancestralrampageId').textContent!==''){return;}
    setD('ancestralrampageId', false);
    BGP('ancestralrampageId', "0% 0%");
	refreshancestralRampage.kill();
}
function ancestralRampageTimer(){
	refreshancestralRampage = T.to('', .1, {repeat:-1, onRepeat:ancestralRampageReady});
}
function ancestralRampage(){
	if(checkBashFear()===true){ return; }
	if(btn.d.ancestralrampageId===true){return;}
	ancestralRampageStatus=true;
    setD('ancestralrampageId', true);
    BGP('ancestralrampageId', "0% -100%");
	T.delayedCall(120, ancestralRampageTimer);
	timerTick(D.getElementById('ancestralrampageId'),120000/1000,'ancestralrampageId');
	barbarianRacial.kill();
	barbarianRacial = T.delayedCall(12, resetancestralRampage);
	Chat(("A thousand ancestral roars bears down on your foe."),3);
	addBuffRaceIcon("Ancestral Rampage","ancestralRampageIcon",12000,0);
	animateHealing('red',false,45);
}
$(function(){
	$NG.gameView.on('mouseenter','#ancestralrampageId',function(){
		var multiplier = "12".fontcolor("#00ff00");
		var value1 = "100%".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Ancestral Rampage";
		NG.tooltipmsg.innerHTML = "Cooldown: "+green("120")+" Seconds<br><br>"+
		"Inspired by your ancestral pride, your bolstered might increases all damage by "+value1+" for "+multiplier+" seconds.";
	});
});
//wood elf - boost dex and agi
function tunaresGlowReady(){
	if(D.getElementById('tunaresglowId').textContent!==''){return;}
    setD('tunaresglowId', false);
    BGP('tunaresglowId', "0% 0%");
	refreshtunaresGlow.kill();
}
function tunaresGlowTimer(){
	refreshtunaresGlow = T.to('', .1, {repeat:-1, onRepeat:tunaresGlowReady});
}
$(function(){
	$NG.gameView.on('mouseenter','#tunaresglowId',function(){
		var minimum = ( 10+~~((defenseTotal()/5)*3)+"").fontcolor("#00ff00");
		var multiplier = "20".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Camouflage";
		NG.tooltipmsg.innerHTML = "Cooldown: "+green("120")+" Seconds<br><br>"+
		"Disappear from combat for six seconds. If you attack while evading, you will ambush your target and stun them for five seconds and inflict an additional "+green("90%")+" damage.<br><br>"+
		"Effect: Camouflage makes mobs unable to target you. DoTs will still hit you and cancel Camouflage.";
	});
});
function tunaresGlow(){
	if(checkBashFear()===true){ return; }
	if(btn.d.tunaresglowId===true){return;}
    setD('tunaresglowId', true);
    BGP('tunaresglowId', "0% -100%");
	T.delayedCall(120, tunaresGlowTimer);
	timerTick(D.getElementById('tunaresglowId'),120000/1000,'tunaresglowId');
	Chat(("You blend into your environment."),3);
	addBuffRaceIcon("Camouflage","evadeIcon",6000,0);
	playAudio("fade");
	evadeStatus=true;
	function doit2(){
		evadeStatus=false;
	}
	T.delayedCall(5, doit2);
	if(g.autoAttackStatus===0){ toggleAutoAttackStatus(); }
	animateEvade("green");
}
//half elf - boost all stats
function karanasInfusionReady(){
	if(D.getElementById('karanasinfusionId').textContent!==''){return;}
    setD('karanasinfusionId', false);
    BGP('karanasinfusionId', "0% 0%");
	refreshkaranasInfusion.kill();
}
function karanasInfusionTimer(){
	refreshkaranasInfusion = T.to('', .1, {repeat:-1, onRepeat:karanasInfusionReady});
}
$(function(){
	$NG.gameView.on('mouseenter','#karanasinfusionId',function(){
		var v1 = ~~(my.maxHp * .04);
		NG.tooltipname.innerHTML = "Hybrid Vigor";
		NG.tooltipmsg.innerHTML = "Cooldown: "+green("120")+" Seconds<br><br>"+
		"Breaks out of stun and fear effects and regenerates "+green(v1)+" health every second for 7 seconds.";
	});
});
function karanasInfusion(){
	if(btn.d.karanasinfusionId===true){return;}
    setD('karanasinfusionId', true);
    BGP('karanasinfusionId', "0% -100%");
	T.delayedCall(120, karanasInfusionTimer);
	timerTick(D.getElementById('karanasinfusionId'),120000/1000,'karanasinfusionId');
	Chat("Your body snaps to life with natural vigor.",3);
	var skillName = "Hybrid Vigor";
	animateHealing('teal',false,60);
	regenHealth(my.maxHp * .04, skillName, 7, 0, 1, false, true);
	//break fear
	fearStatus=1;
	monsterFearCooldown.kill();
	//break stun
	stunCooldown.kill();
	bashStatus=1;
	$("#mobBashIcon,#mobFearIcon").remove();
	lockoutTimer1.kill();
	globalCooldownEnd2();
	g[JOB.CheckSkills]();
	
}
//dark elf - life leech based on damage
function resetsanguineTorment(){
	sanguineTormentStatus=false;
}
function sanguineTormentReady(){
	if(D.getElementById('sanguinetormentId').textContent!==''){return;}
    setD('sanguinetormentId', false);
    BGP('sanguinetormentId', "0% 0%");
	refreshsanguineTorment.kill();
}
function sanguineTormentTimer(){
	refreshsanguineTorment = T.to('', .1, {repeat:-1, onRepeat:sanguineTormentReady});
}
$(function(){
	$NG.gameView.on('mouseenter','#sanguinetormentId',function(){
		var multiplier = "12".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Sanguine Torment";
		NG.tooltipmsg.innerHTML = "Cooldown: "+green("120")+" Seconds<br><br>"+
		"Your attacks are imbued with vampiric power. All damage inflicted leeches health for "+multiplier+" seconds.";
	});
});
function sanguineTorment(){
	if(checkBashFear()===true){ return; }
	if(btn.d.sanguinetormentId===true){return;}
	sanguineTormentStatus=true;
    setD('sanguinetormentId', true);
    BGP('sanguinetormentId', "0% -100%");
	T.delayedCall(120, sanguineTormentTimer);
	timerTick(D.getElementById('sanguinetormentId'),120000/1000,'sanguinetormentId');
	darkElfRacial = T.delayedCall(12, resetsanguineTorment);
	Chat(("You emanate with vampiric power."),3);
	var skillName = "Sanguine Torment";
	var buffId = "sanguineTormentIcon";
	var duration = 12000;
	var spriteX = 0;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffRaceIcon(skillName,buffId,duration,spriteX);
	animateHealing('purple',false,45);
}
//high elf - boost passive mp regen DONE
//dwarf - reduce physical damage per hit
function resetgraniteVisage(){
	graniteVisageStatus=false;
	CStat();
}
function graniteVisageReady(){
	if(D.getElementById('granitevisageId').textContent!==''){return;}
    setD('granitevisageId', false);
    BGP('granitevisageId', "0% 0%");
	refreshgraniteVisage.kill();
}
function graniteVisageTimer(){
	refreshgraniteVisage = T.to('', .1, {repeat:-1, onRepeat:graniteVisageReady});
}
$(function(){
	$NG.gameView.on('mouseenter','#granitevisageId',function(){
		NG.tooltipname.innerHTML = "Granite Visage";
		NG.tooltipmsg.innerHTML = "Cooldown: "+green("120")+" Seconds<br><br>"+
		"Your countenance hardens and your skin resembles granite. All physical damage is reduced by "+green("25%")+" for "+green("12")+" seconds.";
	});
});
function graniteVisage(){
	if(checkBashFear()===true){ return; }
	if(btn.d.granitevisageId===true){return;}
	graniteVisageStatus=true;
    setD('granitevisageId', true);
    BGP('granitevisageId', "0% -100%");
	T.delayedCall(120, graniteVisageTimer);
	timerTick(D.getElementById('granitevisageId'),120000/1000,'granitevisageId');
	dwarfRacial = T.delayedCall(12, resetgraniteVisage);
	Chat(("Your countenance is hardened by a granite shell."),3);
	var skillName = "Granite Visage";
	var buffId = "graniteVisageIcon";
	var duration = 12000;
	var spriteX = 0;
	T.delayedCall(duration/1000, function(){ removeIcon(buffId); });
	addBuffRaceIcon(skillName,buffId,duration,spriteX);
	animateHealing('white',false,45);
	CStat();
}
//halfling - hide and better run skill

function hideRacial(){
	if(checkBashFear()===true||mobsFound()===true){ return; }
	if(hideStatus===1){
		$("#halflinghideId").css({backgroundPosition:"0 -100%"});
		Chat(("You disappear into the shadows."),3);
		setCurtainColor("#001");
		T.to(spellCurtain, 1, {
			alpha:.5,
			ease:ez.Qin
		});
		hideStatus=0;
	}else{
		$("#halflinghideId").css({backgroundPosition:"0 0"});
		Chat(("You emerge from the shadows."),3);
		T.to(spellCurtain, .5, {
			alpha:0,
			ease:ez.Qin
		});
		hideStatus=1;
	}
}
$(function(){
	$NG.gameView.on('mouseenter','#halflinghideId',function(){
		NG.tooltipname.innerHTML = "Hide";
		NG.tooltipmsg.innerHTML = "Attacking while hidden will increase your initial attacks' damage by "+green("60%")+" and stun your target for 5 seconds.";
	});
});
//gnome - 1/2 cast time and leech energy per hit ?
function resetshortCircuit(){
	shortCircuitStatus=false;
	CStat();
}
function shortCircuitReady(){
	if(D.getElementById('shortcircuitId').textContent!==''){return;}
    setD('shortcircuitId', false);
    BGP('shortcircuitId', "0% 0%");
	refreshshortCircuit.kill();
}
function shortCircuitTimer(){
	refreshshortCircuit = T.to('', .1, {repeat:-1, onRepeat:shortCircuitReady});
}
$(function(){
	$NG.gameView.on('mouseenter','#shortcircuitId',function(){
		var CD = 120;
		var minimum = "50%".fontcolor("#00ff00");
		var multiplier = "7".fontcolor("#00ff00");
		NG.tooltipname.innerHTML = "Warp Field";
		NG.tooltipmsg.innerHTML = "Cooldown: "+green(CD)+" Seconds<br><br>"+
		"You trap your target in a Warp Field, making them unable to attack or be attacked for 20-25 seconds.";
	});
});
function shortCircuit(){
	if(checkBashFear()===true){ return; }
	if(btn.d.shortcircuitId===true){return;}
	if(attackStatus===1){ targetRequired(); return; }
	if(mob[TGT].attackStatus===1){ attackOn(true); }
	shortCircuitStatus=true;
    setD('shortcircuitId', true);
    BGP('shortcircuitId', "0% -100%");
	T.delayedCall(120, shortCircuitTimer);
	timerTick(D.getElementById('shortcircuitId'),120000/1000,'shortcircuitId');
	stasisTarget(TGT, M.random()*(5000)+25000, 9999, "Warp Field");
}

function checkUndead(Slot){
	var targetUndead = false;
	if(mob[Slot].image==="a dhampyre"||mob[Slot].image==="a vampire female"||mob[Slot].image==="a skeleton"||mob[Slot].image==="a dark skeleton" ||mob[Slot].image==="a male zombie"||mob[Slot].image==="a female zombie"||mob[Slot].image==="a ghoul"||mob[Slot].image==="garanel rucksif" || mob[Slot].image==="a mummy"){
		targetUndead = true;
	}
	return targetUndead;
}

function selectFlayTarget(){
	if(attackStatus===1){ return; }
	var kek=false;
	while(kek===false){
		flayTarget++;
		if(flayTarget>1){ flayTarget = -1; }
		if(TGT+flayTarget>=0){
			if(mob[TGT+flayTarget].name!==""){
				return TGT+flayTarget;
			}
		}
	}
}
function selectRandomTarget(){
	if(attackStatus===1){ return; }
	var Slot=5;
	while(Slot===5){
		var x = ~~(M.random()*(5));
		if(mob[x].name!==""&&mob[x].charmStatus===false){
			return x;
		}
	}
}


function skillMax(minDamage, multiplier){
	if(P.eq[12].type==="slashed"||P.eq[12].type==="crushed"||P.eq[12].type==="punched"||P.eq[12].type==="pierced"){
		var foo = ((P.eq[12].damage/(totalHaste1()))*30000)*(attackFunct()/1200);
	}
	if(P.eq[12].type==="smashed"||"staff"===P.eq[12].type||P.eq[12].type==="cleaved"){
		var foo = ((P.eq[12].damage/(totalHaste1()))*20000)*(attackFunct()/1200);
	}
	foo = M.round(foo * multiplier + minDamage);
	return foo;
}
function slainPet(){
	petHp=0; 
	g.petAlive=false;
	for(var i=0;i<=4;i++){
		if(mob[i].petDot===true){ 
			mob[i].petDot=false; 
			mob[i].dotActive.kill(); 
		}
	}
	T.to(mob5, 1, {
		opacity:0,
		ease:ez.lin,
		onComplete:function(){
			T.set(mob5, {bottom:0, display:'none'});
		}
	});
	songOfTheSirensTicking.kill();
	mob[charmSlot].charmStatus = false;
	if(my.job==="Bard"||my.job==="Enchanter"){
		g.checkForDeadMonsters();
	}else{
		Chat((petName+" has been slain!"));
	}
	petName = "";
	if(my.job==="Shadow Knight"){ 
		BGP('summondeadId', "-1600% 0"); 
	}else if(my.job==="Shaman"){ 
		BGP('guardianspirit', "-1500% 0"); 
	}else if(my.job==="Necromancer"){ 
		BGP('invokedeath', "-1600% 0"); 
	}else if(my.job==="Magician"){
		if(petImage==="an earth elemental pet"){ 
			BGP('earthelemental', "-1700% 0"); 
		}else if(petImage==="an air elemental pet"){ 
			BGP('airelemental', "-1700% -100%"); 
		}else if(petImage==="a fire elemental pet"){ 
			BGP('fireelemental', "-1700% -200%"); 
		}else if(petImage==="a frost elemental pet"){ 
			BGP('frostelemental', "-1700% -300%"); 
		}
		petImage="";
	}
	$("#pethpbardiv").css('display','none');
	if(my.job==="Magician"){ 
		playAudio("elem_die3"); 
	}else if(my.job==="Necromancer"||my.job==="Shadow Knight"){ 
		playAudio("skeleton_die"); 
	}else if(my.job==="Shaman"){ 
		playAudio("wolf_die2"); 
	}
}
function createPetName(){
	var x = ~~(M.random()*(26))+1;
	var y = ~~(M.random()*16)+1;
	var z = ~~(M.random()*(5))+1;
	var i = "Jo";
	var j = "bek";
	var k = "er";
	if(x===1){ i = "Ga"; }
	if(x===2){ i = "Ge"; }
	if(x===3){ i = "Go"; }
	if(x===4){ i = "Gi"; }
	if(x===5){ i = "Ja"; }
	if(x===6){ i = "Jo"; }
	if(x===7){ i = "Je"; }
	if(x===8){ i = "Ji"; }
	if(x===9){ i = "Ka"; }
	if(x===10){ i = "Ke"; }
	if(x===11){ i = "Ko"; }
	if(x===12){ i = "Ki"; }
	if(x===13){ i = "La"; }
	if(x===14){ i = "Le"; }
	if(x===15){ i = "Lo"; }
	if(x===16){ i = "Li"; }
	if(x===17){ i = "Va"; }
	if(x===18){ i = "Ve"; }
	if(x===19){ i = "Vo"; }
	if(x===20){ i = "Xa"; }
	if(x===21){ i = "Xe"; }
	if(x===22){ i = "Xo"; }
	if(x===23){ i = "Za"; }
	if(x===24){ i = "Ze"; }
	if(x===25){ i = "Zo"; }
	if(x===26){ i = "Bo"; }
	if(y===1){ j = "b"; }
	if(y===2){ j = "ban"; }
	if(y===3){ j = "bar"; }
	if(y===4){ j = "bek"; }
	if(y===5){ j = "bob"; }
	if(y===6){ j = "rek"; }
	if(y===7){ j = "rar"; }
	if(y===8){ j = "nar"; }
	if(y===9){ j = "ran"; }
	if(y===10){ j = "sar"; }
	if(y===11){ j = "sek"; }
	if(y===12){ j = "sob"; }
	if(y===13){ j = "n"; }
	if(y===14){ j = "s"; }
	if(y===15){ j = "k"; }
	if(y===16){ j = "n"; }
	if(z===1){ k = "tik"; }
	if(z===2){ k = "n"; }
	if(z===3){ k = "er"; }
	if(z===4){ k = "ab"; }
	if(z===5){ k = ""; }
	petName= i+j+k;
	if($("#petBarName").length===0){
		var e1=$('<div id="petBarName">').html(petLevel+" - "+petName);
		$("#pethpbardiv").append(e1);
	}else{
		$("#petBarName").html(petLevel+" - "+petName);
	}
	g.drawMyHp();
	D.getElementById('petName').innerHTML=petName;
}
function petDamage(){ //pet's attack cycle
	if(g.petAlive===false||petHp<=0){ return; }
	g.checkForDeadMonsters();
	if(my.hp<=0||!mob[TGT].name){ return; }
	if(petBashStatus===true||petFearStatus===true||petParalyzeStatus===true){
		petAttack = T.delayedCall((petSpeed*petSpeedBuff)/1000, petDamage);
		return;
	}
	if(!petTarget||!mob[petTarget].name){ petTarget = TGT; }
	if(petBlindStatus===true){
		var blindChance = M.ceil(M.random()*(5));
		if(blindChance>3){
			Chat((petName+" is blinded by darkness."));
			petAttack = T.delayedCall((petSpeed*petSpeedBuff)/1000, petDamage);
			return;
		}
	}
	//Check for skill chance
	var petSkillChance = M.ceil(M.random()*petCastingFrequency); 
	// Default 1 in 10 chance of using 2nd skill
	if(petSkillChance===petCastingFrequency){
		petSkillCheck(petTarget);
		return;
	}
	function mobHits(){
		if(petBashStatus===true||petFearStatus===true||petParalyzeStatus===true){ return; }
		if(mob[petTarget].hp<=0||my.hp<=0||attackStatus!==0){ return; }
		if(g.petAlive===false||petHp<=0){ return; }
		if(attackStatus!==0){ return; }
		var foo=(petStrTotal()/2);
		var petsDamage=M.ceil(foo+ M.random()*foo);
		if(my.job==="Shaman"){
			if(my.talent10>=20&&M.random()>.93){
				var Slot = petTarget;
				playAudio('gnollsat');
				for(var i=0;i<=4;i++){
					if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
						var dam = M.ceil(foo+ M.random()*foo);
						g.petPhysical(dam, i);
						stunTarget(i, 2500, -480, 0, "Maul");
						bleedTarget(i, 9, 1000);
					}
				}
				return;
			}
		}else if(my.job==="Necromancer"){
			if(my.talent6>=20){
				var Slot = petTarget;
				for(var i=0;i<=4;i++){
					if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
						var dam = M.ceil(foo+ M.random()*foo);
						if(my.talent5>=20){
							if(M.random()>.95){
								stunTarget(i, 1800, -512, 0, "Bash");
							}
						}
						g.petPhysical(dam, i);
					}
				}
				return;
			}
		}else if(my.job==="Magician"){
			if(my.talent6>=20){
				var Slot = petTarget;
				for(var i=0;i<=4;i++){
					if(mob[i].name&&(i>=Slot-1&&i<=Slot+1)){
						var dam = M.ceil(foo+ M.random()*foo);
						g.petPhysical(dam, i);
					}
				}
				return;
			}
		}
		g.petPhysical(petsDamage, petTarget);
	}
	//mob position
	var mobCenterX = MOB[petTarget].offsetLeft+mob[petTarget].cX;
	//pet position
	var petCenterX = M.round(MOB[5].offsetLeft + petWidth/2);
	if(mobCenterX < petCenterX){ //look left
		T.set(NG.petImage, {rotationY:180});
	}else{  //look right
		T.set(NG.petImage, {rotationY:0});
	}
	//check if pet is rooted out of position
	if(animatePetAttack(mobCenterX,petCenterX)===true){ 
		T.delayedCall(.5, mobHits);
		if(my.job==="Shaman"){
			if(my.talent11>=20){
				T.delayedCall(.3, mobHits);
			}
		}
	}
	resumePetAttack();
}
g.petPhysical = function(petsDamage, Slot, mType, familiar){ //commit pet's physical damage
	//mag stasis
	if(mob[Slot].stasisFieldStatus===true){
		petsDamage = 0;
		popupPetDamage(petsDamage,Slot);
		return;
	}
	//frozen damage boost
	var damEnh = 0;
	if(mob[Slot].frozenStatus===true){
		damEnh += 25;
	}
	if(my.job==="Shadow Knight"){
		damEnh += talent10()*6.6;
	}else if(my.job==="Bard"){
		damEnh+=talent9()*12.8;
		if(my.talent9>=20){
			bleedTarget(Slot, 2, 1000);
		}
	}else if(my.job==="Shaman"){
		damEnh += talent10()*8.6;
	}else if(my.job==="Necromancer"){
		damEnh += talent5()*4.7;
		if(my.talent6>=1&&petSpeedBuff===.5){
			damEnh += talent6()*6.5;
		}
	}else if(my.job==="Enchanter"){
		damEnh+=talent5()*13.5;		
	}else if(my.job==="Magician"){
		damEnh += talent5()*6.2;
		if(my.talent6>=1&&petSpeedBuff===.4){
			damEnh += talent6()*5.8;
		}
	}
	damEnh += (g.conjurationEquip+g.allSkillsEquip)*2;
	petsDamage = M.ceil(petsDamage+(petsDamage*(damEnh/100)));
	if(my.job==="Shadow Knight"||
	my.job==="Necromancer"||
	my.job==="Shaman"||
	my.job==="Magician"||
	familiar===true){
		if(!familiar){
			//defense
			petsDamage = M.ceil(petsDamage*(g.mobDefense(Slot) ) );
			//damage limits
			if(petsDamage <=3){ petsDamage = M.ceil(M.random()*(4)); }
			if(petName===""){ return; }
		}
		//rune active
		if(mob[Slot].runeHp>0){
			mob[Slot].runeHp-=petsDamage;
			if(mob[Slot].runeHp<=0){ $("#MruneIcon"+Slot).remove(); }
			playAudio("blockBlunt");
		}
		//damage report
		if(mob[Slot].runeHp<=0){
			//Chat((petName+" hits "+mob[Slot].name+" for "+petsDamage+" damage."));
			if(familiar===true){
				Chat(g.familiarName+" bites "+mob[Slot].name+" for "+petsDamage+" damage.");
			}
			mob[Slot].hp-=petsDamage;
			playAudio("flshhit1");
			if(M.random()>.8&&!familiar){
				if(my.job==="Magician"){ playAudio("elem_att3"); }
				if(my.job==="Necromancer"||my.job==="Shadow Knight"){ playAudio("skeleton_att"); }
				if(my.job==="Shaman"){ playAudio("wolf_att2"); }
			}
		}
		popupPetDamage(petsDamage,Slot,mType);
		//screw up status effects
		if(mob[Slot].sleepStatus===true){
			mob[Slot].sleepStatus=false;
			$("#sleepIcon"+Slot).remove();
		}
		//thorns
		if(mob[Slot].thornsActive===0&&!familiar){
			//Chat((petName+" is pierced by thorns for "+M.ceil(mob[Slot].level/10)+" damage."),3);
			petHp-=M.ceil(mob[Slot].level/10);
		}
		//lavashield
		if(mob[Slot].lavaShieldActive===0&&!familiar){
			//Chat((petName+" is burned by lava for "+M.ceil(mob[Slot].level/6)+" damage."),3);
			petHp-=M.ceil(mob[Slot].level/6);
		}
		g.drawMonsterHp(Slot);
		g.checkForDeadMonsters();
	}else{ //charmed pet
		//defense
		petsDamage = M.ceil(petsDamage*(g.mobDefense(Slot) ));
		//damage limits
		if(petsDamage<mob[charmSlot].level*.3){ petsDamage=M.ceil(mob[charmSlot].level*.3); }
		if(petsDamage <=3){ petsDamage = M.ceil(M.random()*(4)); }
		if(petName===""&&my.job!=="Cleric"){ return; }
		//rune active
		if(mob[Slot].runeHp>0){
			Chat((mob[Slot].name+"'s skin absorbs the blow."),3);
			mob[Slot].runeHp-=petsDamage;
			if(mob[Slot].runeHp<=0){ $("#MruneIcon"+Slot).remove(); }
			playAudio("blockBlunt");
		}
		//damage report
		if(mob[Slot].runeHp<=0){
			//Chat((petName+" "+mType+" "+mob[Slot].name+" for "+petsDamage+" damage."));
			mob[Slot].hp-=petsDamage;
			playAudio("flshhit1");
		}
		popupPetDamage(petsDamage,Slot);
		//screw up status effects
		if(mob[Slot].sleepStatus===true){
			mob[Slot].sleepStatus=false;
			$("#sleepIcon"+Slot).remove();
		}
		//thorns
		if(mob[Slot].thornsActive===0){
			//Chat((petName+" is pierced by thorns for "+M.ceil(mob[Slot].level/10)+" damage."),3);
			mob[charmSlot].hp-=M.ceil(mob[Slot].level/10);
		}
		//lavashield
		if(mob[Slot].lavaShieldActive===0){
			//Chat((petName+" is burned by lava for "+M.ceil(mob[Slot].level/6)+" damage."),3);
			mob[charmSlot].hp-=M.ceil(mob[Slot].level/6);
		}
		g.drawMonsterHp(Slot);
		g.checkForDeadMonsters();
	}

}
function resumePetAttack(){
	//double attack chance
	var randomNum = M.random()*100;
	var doubleAttackChance = petLevel;
	if(petDoubleAttackCD===false){
		if(petLevel > 15&&(doubleAttackChance > randomNum)){
			petDoubleAttackCD=true;
			petAttack = T.delayedCall(.1, petDamage);
			return;
		}
	}
	petDoubleAttackCD=false;
	if(attackStatus!==0){return;}
	petAttack = T.delayedCall((petSpeed*petSpeedBuff)/1000, petDamage);
}

function petStrTotal(){
	var foo = petStr;
	return foo;
}
function animatePetAttack(mobCenterX,petCenterX){
	var petOk = true;
	var xDiff = petCenterX - mobCenterX;
	var targetLeftX = mobCenterX-petWidth+20;
	var targetLeftX2 = targetLeftX+30;
	var targetRightX = mobCenterX;
	var targetRightX2 = targetRightX-30;
	if(xDiff > 250&&petRootStatus===true){ petOk = false; }
	var tl=TM();
	T.killTweensOf(NG.mob5);
	if(petCenterX >= mobCenterX&&petOk===true){
		if(xDiff < 60&&xDiff > -45){
			tl.to(NG.mob5, .2, {left:"-=25",bottom:"+=10",force3D:"auto"})
			.to(NG.mob5, .1, {bottom:"+=10",left:"-=45",force3D:"auto"})
			.to(NG.mob5, .2, {bottom:60,force3D:"auto"});
			return petOk;
		}
		tl.to(NG.mob5, .2, {left:targetRightX,bottom:"+=5",force3D:"auto"})
		.to(NG.mob5, .1, {bottom:"+=10",left:targetRightX2,force3D:"auto"})
		.to(NG.mob5, .2, {left:"+=70",bottom:60,force3D:"auto"});
	}
	if(petCenterX < mobCenterX&&petOk===true){
		if(xDiff < 60&&xDiff > -45){
			tl.to(NG.mob5, .2, {left:"+=25",bottom:"+=10",force3D:"auto"})
			.to(NG.mob5, .1, {bottom:"+=10",left:"+=45",force3D:"auto"})
			.to(NG.mob5, .2, {bottom:60,force3D:"auto"});
			return petOk;
		}
		tl.to(NG.mob5, .2, {left:targetLeftX,bottom:"+=5",force3D:"auto"})
		.to(NG.mob5, .1, {bottom:"+=10",left:targetLeftX2,force3D:"auto"})
		.to(NG.mob5, .2, {left:"-=70",bottom:60,force3D:"auto"});
	}
	return petOk;
}

function petSkillCheck(Slot){
	var monsterSkillSelect = M.ceil(M.random()*(4));
	if(monsterSkillSelect===1){
		if(petSkill1==="kick"){ petKick(Slot); return;}
		if(petSkill1==="bash"){ petBash(Slot); return;}
		if(petSkill1==="snare"){ petSnare(Slot); return;}
		if(petSkill1==="burstofflame"){ petBurstOfFlame(Slot); return;}
		if(petSkill1==="freeze"){ petFreeze(Slot); return;}
	}
	if(monsterSkillSelect===2){
		if(petSkill2==="kick"){ petKick(Slot); return;}
		if(petSkill2==="bash"){ petBash(Slot); return;}
		if(petSkill2==="snare"){ petSnare(Slot); return;}
		if(petSkill2==="burstofflame"){ petBurstOfFlame(Slot); return;}
		if(petSkill2==="freeze"){ petFreeze(Slot); return;}
	}
	if(monsterSkillSelect===3){
		if(petSkill3==="kick"){ petKick(Slot); return;}
		if(petSkill3==="bash"){ petBash(Slot); return;}
		if(petSkill3==="snare"){ petSnare(Slot); return;}
		if(petSkill3==="burstofflame"){ petBurstOfFlame(Slot); return;}
		if(petSkill3==="freeze"){ petFreeze(Slot); return;}
	}
	if(monsterSkillSelect===4){
		if(petSkill4==="kick"){ petKick(Slot); return;}
		if(petSkill4==="bash"){ petBash(Slot); return;}
		if(petSkill4==="snare"){ petSnare(Slot); return;}
		if(petSkill4==="burstofflame"){ petBurstOfFlame(Slot); return;}
		if(petSkill4==="freeze"){ petFreeze(Slot); return;}
	}
}
function petKick(Slot){
	if(my.hp<=0||mobsFound()===false){ return; }
	if(mob[Slot].stasisFieldStatus===true){
		var petsDamage = 0;
		popupPetDamage(petsDamage,Slot);
		resumePetAttack();
		return;
	}
	function mobHits(){
		var kickBonus = M.ceil(petLevel/4);
		var petsDamage=M.ceil( (M.random()*(petStr)) );
		//class skills affecting damage
		if(petsDamage<=0){ petsDamage=1; }
		if(petsDamage<petLevel*.3){ petsDamage=M.ceil(petLevel*.3); }
		g.petPhysical(petsDamage, Slot);
	}
	//mob position
	var mobCenterX = MOB[Slot].offsetLeft+mob[Slot].cX;
	//pet position
	var petCenterX = MOB[5].offsetLeft + petWidth/2;
	if(mobCenterX < petCenterX){ //look left
		T.set(NG.petImage, {rotationY:180});
	}else{  //look right
		T.set(NG.petImage, {rotationY:0});
	}
	//check if pet is rooted out of position
	if(animatePetAttack(mobCenterX,petCenterX)===true){ T.delayedCall(.3, mobHits); }

	if(attackStatus!==0){return;}
	resumePetAttack();
}
function petBash(Slot){
	if(mob[Slot].stasisFieldStatus===true){
		var petsDamage = 0;
		popupPetDamage(petsDamage,Slot);
		resumePetAttack();
		return;
	}
	function mobHits(){
		if(my.hp<=0||mobsFound()===false){ return; }
		var bashBonus = M.ceil(petLevel/3);
		var petsDamage=M.ceil( (M.random()*(petStr)+bashBonus) );
		//class skills affecting damage
		if(petsDamage<=0){ petsDamage=1; }
		if(petsDamage<petLevel*.3){ petsDamage=M.ceil(petLevel*.3); }
		stunTarget(Slot, 2500, -544, -32, "Bash");
		g.petPhysical(petsDamage, Slot);
	}
	//mob position
	var mobCenterX = MOB[Slot].offsetLeft+mob[Slot].cX;
	//pet position
	var petCenterX = MOB[5].offsetLeft + petWidth/2;
	if(mobCenterX < petCenterX){ //look left
		T.set(NG.petImage, {rotationY:180});
	}else{  //look right
		T.set(NG.petImage, {rotationY:0});
	}
	//check if pet is rooted out of position
	if(animatePetAttack(mobCenterX,petCenterX)===true){ T.delayedCall(.3, mobHits); }
	if(attackStatus!==0){return;}
	resumePetAttack();
}
function petSnare(Slot){
	if(my.hp<=0||mobsFound()===false){ return; }
	if(mob[Slot].stasisFieldStatus===true){
		var petsDamage = 0;
		popupPetDamage(petsDamage,Slot);
		resumePetAttack();
		return;
	}
	function mobHits(){
		if(mob[Slot].name){
			snareTarget(Slot);
			addMobBuffIcon("Snare",Slot,"snareIcon",0,-544);
		}
	}
	//mob position
	var mobCenterX = MOB[Slot].offsetLeft+mob[Slot].cX;
	//pet position
	var petCenterX = MOB[5].offsetLeft + petWidth/2;
	if(mobCenterX < petCenterX){ //look left
		T.set(NG.petImage, {rotationY:180});
	}else{  //look right
		T.set(NG.petImage, {rotationY:0});
	}
	//check if pet is rooted out of position
	if(animatePetAttack(mobCenterX,petCenterX)===true){ T.delayedCall(.3, mobHits); }
	if(attackStatus!==0){return;}
	resumePetAttack();
}
function petBurstOfFlame(Slot){
	if(my.hp<=0||mobsFound()===false){ return; }
	if(mob[Slot].stasisFieldStatus===true){
		var petsDamage = 0;
		popupPetDamage(petsDamage,Slot);
		resumePetAttack();
		return;
	}
	function mobHits(){
		var flameBonus = M.ceil(petLevel*1.2);
		var petsDamage=M.ceil( (M.random()*(petStr)+flameBonus)*(mob[Slot].fire/100) );
		var mType="fire";
		//rune active
		if(mob[Slot].runeHp>0){
			var crit=false;
			var spellName = "Burst of Flame";
			g.myMagicDamage(mType, petsDamage, Slot, crit, spellName);
		}
		//damage report
		if(mob[Slot].runeHp<=0){
			var crit=false;
			var spellName = "Burst of Flame";
			g.myMagicDamage(mType, petsDamage, Slot, crit, spellName);
		}
	}
	//mob position
	var mobCenterX = MOB[Slot].offsetLeft+mob[Slot].cX;
	//pet position
	var petCenterX = MOB[5].offsetLeft + petWidth/2;
	if(mobCenterX < petCenterX){ //look left
		T.set(NG.petImage, {rotationY:0});
	}else{  //look right
		T.set(NG.petImage, {rotationY:180});
	}
	//check if pet is rooted out of position
	if(animatePetAttack(mobCenterX,petCenterX)===true){ T.delayedCall(.3, mobHits); }
	if(attackStatus!==0){return;}
	resumePetAttack();
}
function petFlameShield(Slot){
	var flameShield = M.ceil( (petLevel*1.5)*(mob[Slot].fire/100) );
	var mType="fire";
	mob[Slot].hp-=flameShield;
	popupPetDamage(flameShield, Slot, mType);
	g.checkForDeadMonsters();
}
function petFreeze(Slot){
	if(mob[Slot].stasisFieldStatus===true){
		var petsDamage = 0;
		popupPetDamage(petsDamage,Slot);
		resumePetAttack();
		return;
	}
	function mobHits(){
		if(my.hp<=0||mobsFound()===false){ return; }
		var freezeBonus = M.ceil(petLevel/4);
		var petsDamage=M.ceil( (M.random()*(petStr)+freezeBonus)*(mob[Slot].cold/100) );
		//rune active
		if(mob[Slot].runeHp>0){
			mob[Slot].runeHp-=petsDamage;
			if(mob[Slot].runeHp<=0){ $("#MruneIcon"+Slot).remove(); }
			playAudio("blockBlunt");
		}
		if(mob[Slot].runeHp<=0){
			Chat((petName+" freezes "+mob[Slot].name+" for "+petsDamage+" damage."));
		}
		g.petPhysical(petsDamage, Slot, "cold");
		var freezeDuration=3500;
		freezeDuration*=freezeReduction();
		encaseTarget(Slot, freezeDuration,-256);
	}
	//mob position
	var mobCenterX = MOB[Slot].offsetLeft+mob[Slot].cX;
	//pet position
	var petCenterX = MOB[5].offsetLeft + petWidth/2;
	if(mobCenterX < petCenterX){ //look left
		T.set(NG.petImage, {rotationY:180});
	}else{  //look right
		T.set(NG.petImage, {rotationY:0});
	}
	//check if pet is rooted out of position
	if(animatePetAttack(mobCenterX,petCenterX)===true){ T.delayedCall(.3, mobHits); }
	if(attackStatus!==0){return;}
	resumePetAttack();
}

function startSpell(){
	if(my.hp<=0||paused===true){ return; }
	spellCanceled = false;
	if(castingSpell===0){
		Chat("You are already casting a spell.");
		return false;
	}
	if(silenceStatus===true){
		Chat("You cannot channel spells while silenced!");
		return false;
	}
	referenceDate2 = new Date();
	castingSpell = 0;
	mySpellBar.scaleX=0;
	NG.spellbardiv.style.display="block";
	return true;
}
function endSpell(){
	var foo = true;
	if(spellCanceled===true){ foo = false; }
	spellCanceled = false;
	castingSpell = 1;
	if(foo===true){ 
		checkSpellLevelUp(); 
		if(my.job==="Enchanter"){
			if(my.talent11>=20&&mob[TGT].attackStatus===0){
				animatePsychicBeam(TGT, 9);
			}
		}
	}
	return foo;
}

function snareTimeout(Slot){
	mob[Slot].snareStatus=false;
}
function countMobs(){
	var foo=0;
	if(mob[0].name!==""){ foo++; }
	if(mob[1].name!==""){ foo++; }
	if(mob[2].name!==""){ foo++; }
	if(mob[3].name!==""){ foo++; }
	if(mob[4].name!==""){ foo++; }
	return foo;
}

function calculateBardDamage(mType,Slot){
	if(!mob[Slot].name){ return; }
	// check crit damage
	if(checkCrit()===false){
		var crit = false;
		var spellName = "Brusco's Boastful Bellow";
		g.myMagicDamage(mType, spellDamage,Slot,crit,spellName)
	}else{
		spellDamage=M.ceil(spellDamage + spellDamage*(g.criticalDamage()));
		var crit = true;
		var spellName = "Brusco's Boastful Bellow";
		g.myMagicDamage(mType, spellDamage,Slot,crit,spellName);
	}
}
//falling damage
function calculateSpellDamage3(damage, Slot){
	if(mob[Slot].name===""){ return; }
	if(mob[Slot].runeHp>0){
		Chat((mob[Slot].name+"'s skin absorbs the blow."),3);
		playAudio("blockBlunt");
	}
	if(mob[Slot].runeHp<=0){
		playAudio("fall_hit");
	}
	var crit=false;
	var spellName="falling";
	var mType = "physical";
	g.myMagicDamage(mType, damage, Slot, crit, spellName);
}
function checkBashFear(){
	if(my.hp<=0 || paused===true){ return true; }
	if(fearStatus===0){
		Chat("You are feared!");
		return true;
	}
	if(bashStatus===0){
		Chat("You are stunned!");
		return true;
	}
	if(castingSpell===0){
		Chat("You are already casting!");
		return true;
	}
}
function checkRootImmune(Slot){
	var foo = false;
	if(mob[Slot].image==="a bat"||mob[Slot].image===""||mob[Slot].image==="a faerie"||mob[Slot].image==="a fire elemental"||mob[Slot].image==="a gargoyle"||mob[Slot].image==="a wisp"||mob[Slot].image==="an earth elemental"||mob[Slot].image==="an evil eye round"||mob[Slot].image==="an imp"||mob[Slot].image==="garanel rucksif"||mob[Slot].image===""||mob[Slot].rare===3){
		foo = true;
	}
	if(my.job==="Druid"){
		if(my.talent3>=20){
			foo=false;
		}
	}
	return foo;
}
function checkSpellLevelUp(){
	if(spellType === "evocation"){
		if(skillLevelUp() > my.evocation){
			levelUpEvocation();
		}
	}else if(spellType === "alteration"){
		if(skillLevelUp() > my.alteration){
			levelUpAlteration();
		}
	}else if(spellType === "abjuration"){
		if(skillLevelUp() > my.abjuration){
			levelUpAbjuration();
		}
	}else if(spellType === "conjuration"){
		if(skillLevelUp() > my.conjuration){
			levelUpConjuration();
		}
	}else if(spellType === "channeling"&&my.job==="Bard"){
		if(skillLevelUp() > my.channeling){
			levelUpChanneling();
		}
	}
}
function skillLevelUp(){
	var bar = (intTotal()-80)/12;
	if(bar<0){ bar = 0; }
	var foo = (M.random()*(210) + M.random()*(210) + bar);
	return foo;
}

//combat skill map
function skillMap(z){
	if(my.job==="Warrior"){ 
		warSkillMap(z); 
	}else if(my.job==="Monk"){ 
		mnkSkillMap(z); 
	}else if(my.job==="Rogue"){ 
		rogSkillMap(z); 
	}else if(my.job==="Ranger"){ 
		rngSkillMap(z); 
	}else if(my.job==="Paladin"){ 
		palSkillMap(z); 
	}else if(my.job==="Shadow Knight"){ 
		shdSkillMap(z); 
	}else if(my.job==="Bard"){ 
		brdSkillMap(z); 
	}else if(my.job==="Cleric"){ 
		clrSkillMap(z); 
	}else if(my.job==="Druid"){ 
		druSkillMap(z); 
	}else if(my.job==="Shaman"){ 
		shmSkillMap(z); 
	}else if(my.job==="Necromancer"){ 
		necSkillMap(z); 
	}else if(my.job==="Enchanter"){ 
		encSkillMap(z); 
	}else if(my.job==="Magician"){ 
		magSkillMap(z); 
	}else if(my.job==="Wizard"){ 
		wizSkillMap(z); 
	}
}
function executeRacialSkill(){
	if(my.race==="Human"){ secondWind(); }
	if(my.race==="Erudite"){ divineAegis(); }
	if(my.race==="Barbarian"){ ancestralRampage(); }
	if(my.race==="Wood Elf"){ tunaresGlow(); }
	if(my.race==="Half Elf"){ karanasInfusion(); }
	if(my.race==="Dark Elf"){ sanguineTorment(); }
	if(my.race==="Dwarf"){ graniteVisage(); }
	if(my.race==="Gnome"){ shortCircuit(); }
	if(my.race==="Halfling"){ hideRacial(); }
}
g.WarriorSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="shockwaveId"){ shockwave(); }
	if(z==="absorbspellId"){ absorbSpell(); }
	if(z==="enrageId"){ enrage(); }
	if(z==="furiousscornId"){ furiousScorn(); }
	if(z==="triageId"){ triage(); }
	if(z==="bulwarkId"){ bulwark(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="warriorkickId"){ warriorKick(); }
	if(z==="slamId"){ slam(); }
	if(z==="avengingstrikeId"){ avengingStrike(); }
	if(z==="hemorrhageId"){ hemorrhage(); }
	if(z==="pummelId"){ pummel(); }
	if(z==="subjugateId"){ subjugate(); }
	if(z==="decisiveblowId"){ decisiveBlow(); }
	if(z==="frenziedrampageId"){ frenziedRampage(); }
	if(z==="intrepidmightId"){ intrepidMight(); }
}
g.MonkSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="feigndeathId"){ feignDeath(); }
	if(z==="mendId"){ mend(); }
	if(z==="stonefistsId"){ stoneFists(); }
	if(z==="innerpeaceId"){ innerPeace(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="tigerstrikeId"){ tigerStrike(); }
	if(z==="eaglestrikeId"){ eagleStrike(); }
	if(z==="cheetahstrikeId"){ cheetahStrike(); }
	if(z==="cobrastrikeId"){ cobraStrike(); }
	if(z==="dragonstrikeId"){ dragonStrike(); }
	if(z==="cranekickId"){ craneKick(); }
	if(z==="windmillkickId"){ windmillKick(); }
	if(z==="ancestralflurryId"){ ancestralFlurry(); }
	if(z==="flyingkickId"){ flyingKick(); }
	if(z==="chakrablastId"){ chakraBlast(); }
	if(z==="intimidationId"){ intimidation(); }
}
g.RogueSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="roguehideId"){ 
		hideRogue(); 
	}
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="evadeId"){ evade(); }
	if(z==="coldbloodId"){ coldBlood(); }
	if(z==="illusivemistId"){ illusiveMist(); }
	if(z==="ancientwillId"){ ancientWill(); }
	if(z==="runId"){ run(); }
	if(z==="shadowstrikeId"){ shadowStrike(); }
	if(z==="sonicstrikeId"){ sonicStrike(); }
	if(z==="hyperstrikeId"){ hyperStrike(); }
	if(z==="widowstrikeId"){ widowStrike(); }
	if(z==="miragestrikeId"){ mirageStrike(); }
	if(z==="lacerateId"){ lacerate(); }
	if(z==="backstabId"){ backstab(); }
	if(z==="staggershotId"){ staggerShot(); }
	if(z==="lobotomizeId"){ lobotomize(); }
	if(z==="prowlinggashId"){ prowlingGash(); }
	if(z==="flashpowderId"){ flashPowder(); }
}
g.PaladinSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="valorId"){ valor(); }
	if(z==="spiritarmorId"){ spiritArmor(); }
	if(z==="divineprovidenceId"){ divineProvidence(); }
	if(z==="symbolofryltanId"){ symbolOfRyltan(); }
	if(z==="layhandsId"){ layHands(); }
	if(z==="greaterhealingId"){ greaterHealing(); }
	if(z==="yaulpId"){ yaulp(); }
	if(z==="cleanseId"){ cleanse(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="palslamId"){ palSlam(); }
	if(z==="rebukeId"){ rebuke(); }
	if(z==="purgeId"){ purge(); }
	if(z==="vengeanceId"){ vengeance(); }
	if(z==="holymightId"){ holyMight(); }
	if(z==="palrootId"){ palRoot(); }
	if(z==="ardentjudgment"){ ardentJudgment(); }
	if(z==="flashoflightId"){ flashOfLight(); }
}
g.RangerSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="rangertrackId"){ rangerTrack(); }
	if(z==="thistlecoatId"){ thistlecoat(); }
	if(z==="feetlikecatId"){ feetLikeCat(); }
	if(z==="shieldofbramblesId"){ shieldOfBrambles(); }
	if(z==="rangersowId"){ spiritOfTheWolf(); }
	if(z==="weaponshieldId"){ weaponShield(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="rangerkickId"){ rangerKick(); }
	if(z==="rapidshotId"){ rapidShot(); }
	if(z==="countershotId"){ counterShot(); }
	if(z==="trueshotarrowId"){ trueshotArrow(); }
	if(z==="volleyshotId"){ volleyShot(); }
	if(z==="lighthealingId"){ lightHealing(); }
	if(z==="wardersrift"){ wardersRift(); }
	if(z==="igniteId"){ ignite(); }
	if(z==="snareId"){ snare(); }
	if(z==="faerieflameId"){ faerieFlame(); }
}
g.ShadowKnightSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="summondeadId"){ summonDead(); }
	if(z==="vampiricembraceId"){ vampiricEmbrace(); }
	if(z==="resistcoldId"){ resistCold(); }
	if(z==="shdfeigndeathId"){ shdFeignDeath(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="shdslamId"){ shdSlam(); }
	if(z==="crescentcleaveId"){ crescentCleave(); }
	if(z==="deathstrikeId"){ deathStrike(); }
	if(z==="gaspingfrenzyId"){ gaspingFrenzy(); }
	if(z==="harmtouchId"){ harmTouch(); }
	if(z==="shdlifetapId"){ shdLifeTap(); }
	if(z==="doomingdarknessId"){ doomingDarkness(); }
	if(z==="heatbloodId"){ heatBlood(); }
	if(z==="strengthendeadId"){ strengthenDead(); }
	if(z==="shdfearId"){ shdFear(); }
	if(z==="siphonstrengthId"){ siphonStrength(); }
	if(z==="shadowvortexId"){ shadowVortex(); }
}
g.BardSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="rangertrackId"){ rangerTrack(); }
	if(z==="chantofbattle"){ chantOfBattle(); }
	if(z==="chordsofdissonance"){ chordsOfDissonance(); }
	if(z==="accelerando"){ accelerando(); }
	if(z==="hymnofrestoration"){ hymnOfRestoration(); }
	if(z==="anthemdearms"){ anthemDeArms(); }
	if(z==="elementalrhythms"){ elementalRhythms(); }
	if(z==="lucidlullaby"){ lucidLullaby(); }
	if(z==="dissension"){ dissension(); }
	if(z==="chorusofclarity"){ chorusOfClarity(); }
	if(z==="euphonichymn"){ euphonicHymn(); }
	if(z==="shieldofsongs"){ shieldOfSongs(); }
	if(z==="desperatedirge"){ desperateDirge(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="consonantchain"){ consonantChain(); }
	if(z==="songofthesirens"){ songOfTheSirens(); }
	if(z==="boastfulbellow"){ boastfulBellow(); }
}
g.ClericSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="resolution"){ resolution(); }
	if(z==="armoroffaith"){ armorOfFaith(); }
	if(z==="divinesanctuary"){ divineSanctuary(); }
	if(z==="symbolofnaltron"){ symbolOfNaltron(); }
	if(z==="superiorhealing"){ superiorHealing(); }
	if(z==="guardianangel"){ guardianAngel(); }
	if(z==="markofjudgement"){ markOfJudgement(); }
	if(z==="benediction"){ benediction(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="smite"){ smite(); }
	if(z==="soundofforce"){ soundOfForce(); }
	if(z==="bindingearth"){ bindingEarth(); }
	if(z==="expelcorruption"){ expelCorruption(); }
	if(z==="martyrsblessing"){ martyrsBlessing(); }
	if(z==="searingrevelation"){ searingRevelation(); }
	if(z==="holywrath"){ holyWrath(); }
}
g.DruidSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="rangertrackId"){ rangerTrack(); }
	if(z==="skinlikenature"){ skinLikeNature(); }
	if(z==="shieldofspikes"){ shieldOfSpikes(); }
	if(z==="drusow"){ druSow(); }
	if(z==="chloroplast"){ chloroplast(); }
	if(z==="druhealing"){ druHealing(); }
	if(z==="earthquake"){ earthquake(); }
	if(z==="hurricane"){ hurricane(); }
	if(z==="sylvangrasp"){ sylvanGrasp(); }
	if(z==="driftingdeath"){ driftingDeath(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="starfire"){ starfire(); }
	if(z==="dronesofdoom"){ dronesOfDoom(); }
	if(z==="tornado"){ tornado(); }
	if(z==="engulfingroots"){ engulfingRoots(); }
	if(z==="lightningblast"){ lightningBlast(); }
	if(z==="volcano"){ volcano(); }
}
g.ShamanSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="calloftheancients"){ callOfTheAncients(); }
	if(z==="guardianspirit"){ guardianSpirit(); }
	if(z==="shmsow"){ shmSow(); }
	if(z==="talismanofaltuna"){ talismanOfAltuna(); }
	if(z==="shmhealing"){ shmHealing(); }
	if(z==="cannibalize"){ cannibalize(); }
	if(z==="reclaimblood"){ reclaimBlood(); }
	if(z==="poisonnova"){ poisonNova(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="froststrike"){ frostStrike(); }
	if(z==="scourge"){ scourge(); }
	if(z==="togorsinsects"){ togorsInsects(); }
	if(z==="enstill"){ enstill(); }
	if(z==="affliction"){ affliction(); }
	if(z==="glacialimpact"){ glacialImpact(); }
	if(z==="devouringplague"){ devouringPlague(); }
}
g.NecromancerSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="invokedeath"){ invokeDeath(); }
	if(z==="archshielding"){ archShielding(); }
	if(z==="augmentdeath"){ augmentDeath(); }
	if(z==="diamondskin"){ diamondSkin(); }
	if(z==="howlingterror"){ howlingTerror(); }
	if(z==="feigndeath"){ necFeignDeath(); }
	if(z==="corpseexplosion"){ corpseExplosion(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="bonespirit"){ boneSpirit(); }
	if(z==="cascadingdarkness"){ cascadingDarkness(); }
	if(z==="invokefear"){ invokeFear(); }
	if(z==="drainsoul"){ drainSoul(); }
	if(z==="igniteblood"){ igniteBlood(); }
	if(z==="bondofdeath"){ bondOfDeath(); }
	if(z==="asystole"){ asystole(); }
	if(z==="detonatesoul"){ detonateSoul(); }
}
g.EnchanterSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="discordantbarrier"){ discordantBarrier(); }
	if(z==="enchantweapon"){ enchantWeapon(); }
	if(z==="adorninggrace"){ adorningGrace(); }
	if(z==="clarity"){ clarity(); }
	if(z==="colorshift"){ colorShift(); }
	if(z==="mysticrune"){ mysticRune(); }
	if(z==="gravityflux"){ gravityFlux(); }
	if(z==="alacrity"){ alacrity(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="chaosflux"){ chaosFlux(); }
	if(z==="gaspingembrace"){ gaspingEmbrace(); }
	if(z==="cajolingwhispers"){ cajolingWhispers(); }
	if(z==="mesmerize"){ mesmerize(); }
	if(z==="shiftlessdeeds"){ shiftlessDeeds(); }
	if(z==="tashania"){ tashania(); }
	if(z==="enthrall"){ enthrall(); }
}
g.MagicianSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="earthelemental"){ earthElemental(); }
	if(z==="airelemental"){ airElemental(); }
	if(z==="fireelemental"){ fireElemental(); }
	if(z==="frostelemental"){ frostElemental(); }
	if(z==="shieldoflava"){ shieldOfLava(); }
	if(z==="phantomplate"){ phantomPlate(); }
	if(z==="elementalarmor"){ elementalArmor(); }
	if(z==="burnout"){ burnout(); }
	if(z==="manashield"){ manaShield(); }
	if(z==="alteredstate"){ alteredState(); }
	if(z==="psionicstorm"){ psionicStorm(); }
	if(z==="reclaimelements"){ reclaimElements(); }
	if(z==="armageddon"){ armageddon(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="lavabolt"){ lavaBolt(); }
	if(z==="firestorm"){ firestorm(); }
	if(z==="frozenorb"){ frozenOrb(); }
	if(z==="elementalfury"){ elementalFury(); }
	if(z==="stasisfield"){ stasisField(); }
}
g.WizardSkillMap = function(z){
	if(z==="addmonsterId"){ addMonster(); }
	if(z==="toggleattackId"){ toggleAutoAttackStatus(); }
	if(z==="viziersshielding"){ viziersShielding(); }
	if(z==="mirrorimages"){ mirrorImages(); }
	if(z==="harnessEther"){ harnessEther(); }
	if(racialSkillId!==''){
		if(z===racialSkillId){ executeRacialSkill(); }
	}
	if(z==="runId"){ run(); }
	if(z==="icebolt"){ iceBolt(); }
	if(z==="chargedbolts"){ chargedBolts(); }
	if(z==="frostnova"){ frostNova(); }
	if(z==="magicmissiles"){ magicMissiles(); }
	if(z==="fireball"){ fireball(); }
	if(z==="deepfreeze"){ deepFreeze(); }
	if(z==="chainlightning"){ chainLightning(); }
	if(z==="glacialspike"){ glacialSpike(); }
	if(z==="iceblock"){ iceBlock(); }
	if(z==="icecomet"){ iceComet(); }
	if(z==="counterspell"){ counterspell(); }
	if(z==="meteor"){ meteor(); }
}
