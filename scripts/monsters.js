function checkMyDeathBySkill(Slot) {
    if (g.petAlive === true) {
        if (petHp <= 0) {
            slainPet();
        }
    }
    if (my.hp <= 0) {
        Chat(("You have been slain by " + mob[Slot].name + "!"), 1);
        monsterKilledMe();
    }
}

function monsterMpLow(Slot) {
    //skill fails and try another attack
    mobResumeAttackTimer(Slot, 0, 100);
    return;
}

function damagePet(damage) {
    damRed = 0;
    damRed += (g.conjurationEquip + g.allSkillsEquip) / 3.5;
    if (damRed > 50) {
        damRed = 50;
    }
    damage = damage * (1 - (damRed / 100));
    return M.ceil(damage);
}

function monsterKick(Slot, targetPet, targetCharm) {
    if (mob[Slot].mp < 2) {
        monsterMpLow(Slot);
        return;
    }
    tlMob[Slot] = TM();
    playAudio(mob[Slot].audio1);
    if (targetPet === true) {
        function mobHits1() {
            if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true) {
                return;
            }
            if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
                return;
            }

            var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) + (mobStrength(Slot)) / 3) * (1 - (((petDef) / 4) / 100)));
            if (monsterDamage < mob[Slot].level * .45) {
                monsterDamage = M.ceil(mob[Slot].level * .45);
            }
            monsterDamage = damagePet(monsterDamage);
            petHp -= monsterDamage;
            Chat((mob[Slot].name + " kicks " + petName + " for " + monsterDamage + " damage."));
            g.drawMyHp();
            if (petImage === "a fire elemental pet") {
                petFlameShield(Slot);
            }
            // death trigger
            checkMyDeathBySkill(Slot);
        }
        T.delayedCall(.4, mobHits1);
        mob[Slot].mp -= 2;
        resumeMonsterAttack(Slot);
        if (mob[Slot].rootStatus <= 0) {
            var petCenter = M.round(MOB[5].offsetLeft + (petWidth / 2));
            var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
            if (152 + (Slot * 244) - (mob[Slot].imageWidth / 2) < petCenter) { // if pet is to right
                var randomLeft1 = M.round(leftReset + M.random() * 35 + 15); //1st attack step
                var randomLeft2 = M.round(leftReset + M.random() * 65 + 0); //2nd attack step
            } else { // if pet is to left
                var randomLeft1 = M.round(leftReset + M.random() * 15 - 35); //1st attack step
                var randomLeft2 = M.round(leftReset + M.random() * 65 - 65); //2nd attack step
            }
            resetMobAttack(Slot);
            tlMob[Slot].to(MOB[Slot], .2, {
                    left: randomLeft1,
                    bottom: 146,
                    ease: ez.Bin,
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .2, {
                    left: randomLeft2,
                    bottom: 106,
                    ease: ez.qout,
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .5, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        return;
    }
    if (targetCharm === true) {
        function mobHits2() {
            if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true) {
                return;
            }
            if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
                return;
            }

            var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) + (mobStrength(Slot)) / 3) * (g.mobDefense(charmSlot)));
            if (monsterDamage < mob[Slot].level * .45) {
                monsterDamage = M.ceil(mob[Slot].level * .45);
            }
            mob[charmSlot].hp -= monsterDamage;
            g.slotDamage(monsterDamage, charmSlot);
            Chat((mob[Slot].name + " kicks " + petName + " for " + monsterDamage + " damage."));
            g.drawMyHp();
            if (mob[charmSlot].sleepStatus === true) {
                mob[charmSlot].sleepStatus = false;
                $("#sleepIcon" + charmSlot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        T.delayedCall(.5, mobHits2);
        mob[Slot].mp -= 2;
        resumeMonsterAttack(Slot);
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        resetMobAttack(Slot);
        if (charmSlot > Slot) {
            tlMob[Slot].to(MOB[Slot], .25, {
                    left: "+=50",
                    bottom: "+=50",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .25, {
                    left: "+=50",
                    bottom: "-=70",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .25, {
                    left: "-=20",
                    bottom: "-=40"
                })
                .to(MOB[Slot], .3, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        if (charmSlot < Slot) {
            tlMob[Slot].to(MOB[Slot], .25, {
                    left: "-=50",
                    bottom: "+=50",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .25, {
                    left: "-=50",
                    bottom: "-=70",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .25, {
                    left: "+=20",
                    bottom: "-=40"
                })
                .to(MOB[Slot], .3, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        return;
    }
    if (targetCharm === false) {
        function mobHits3() {
            if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true || mob[Slot].charmStatus === true) {
                return;
            }
            if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) + (mobStrength(Slot)) / 3));
            g.petPhysical(monsterDamage, TGT, "kicks");
        }
        mob[Slot].mp -= 2;
        resumeMonsterAttack(Slot);
        T.delayedCall(.5, mobHits3);
        resetMobAttack(Slot);
        enchanterMultiHit(Slot);
        //animate
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        if (TGT > Slot) {
            tlMob[Slot].to(MOB[Slot], .25, {
                    left: "+=50",
                    bottom: "+=50",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .25, {
                    left: "+=50",
                    bottom: "-=70",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .25, {
                    left: "-=20",
                    bottom: "-=40"
                })
                .to(MOB[Slot], .3, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        if (TGT < Slot) {
            tlMob[Slot].to(MOB[Slot], .25, {
                    left: "-=50",
                    bottom: "+=50",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .25, {
                    left: "-=50",
                    bottom: "-=70",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .25, {
                    left: "+=20",
                    bottom: "-=40"
                })
                .to(MOB[Slot], .3, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        return;
    }

    function mobHits4() {
        if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true || mob[Slot].fallingStatus === true) {
            return;
        }
        if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
            return;
        }
        //check root status
        if (mob[Slot].rootStatus > 0) {
            return;
        }

        var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) + (mobStrength(Slot)) / 3));
        if (monsterDamage < mob[Slot].level * .45) {
            monsterDamage = M.ceil(mob[Slot].level * .45);
        }
        var skill = "kicks";
        physicalDamage(monsterDamage, Slot, skill);
        //channeling formula - add knockback - Kick causes triple knockback
        checkSpellKnockback(Slot);
        checkSpellKnockback(Slot);
    }
    //check root status
    if (mob[Slot].rootStatus > 0) {
        resumeMonsterAttack(Slot);
        return;
    }
    T.delayedCall(.4, mobHits4);
    resumeMonsterAttack(Slot);
    resetMobAttack(Slot);
    mob[Slot].mp -= 2;
    var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
    if (Slot <= 1) { // if mob is to right
        var randomLeft1 = M.round(leftReset + M.random() * (35) + 15); //1st attack step
        var randomLeft2 = M.round(leftReset + M.random() * (65) + 0); //2nd attack step
    } else { // if mob is to left
        var randomLeft1 = M.round(leftReset + M.random() * (15) - 35); //1st attack step
        var randomLeft2 = M.round(leftReset + M.random() * (65) - 65); //2nd attack step
    }
    var Yconvert = (mob[Slot].imageWidth / mob[Slot].imageBaseX); // find growth % from base image
    var mobHeight = (mob[Slot].imageBaseY * Yconvert); // finds actual Y value
    tlMob[Slot].to(MOB[Slot], .2, {
            scale: 1.1,
            left: randomLeft1,
            bottom: 146,
            ease: ez.Bin,
            onStart: function() {
                flipMob(Slot);
            }
        })
        .to(MOB[Slot], .2, {
            scale: 1.2,
            left: randomLeft2,
            bottom: 106,
            ease: ez.qout,
            onStart: function() {
                flipMob(Slot);
            }
        })
        .to(MOB[Slot], .5, {
            scale: 1,
            left: leftReset,
            bottom: floorB
        }, '+=.2');
}

function stunCooldownCheck() {
    if (my.hp <= 0) {
        return;
    }
    bashStatus = 1;
    if (my.job === "Warrior") {
        checkIntrepidMight();
    }
    if (my.job === "Rogue") {
        ancientWillStatus = false;
        g.checkRogueSkills();
    }
}

function stunCooldownCheck2() {
    petBashStatus = false;
}

function monsterBash(Slot, targetPet, targetCharm) {
    if (mob[Slot].mp < 5) {
        monsterMpLow(Slot);
        return;
    }
    tlMob[Slot] = TM();
    playAudio(mob[Slot].audio1);
    if (targetPet === true) {
        var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) + (mobStrength(Slot)) / 4) * (1 - (((petDef) / 4) / 100)));
        if (monsterDamage < mob[Slot].level * .55) {
            monsterDamage = M.ceil(mob[Slot].level * .55);
        }
        monsterDamage = damagePet(monsterDamage);
        petHp -= monsterDamage;
        g.drawMyHp();
        Chat((mob[Slot].name + " bashes " + petName + " for " + monsterDamage + " damage."));
        playAudio("flshhit2");
        Chat((petName + " has been stunned!"));
        if (petImage === "a fire elemental pet") {
            petFlameShield(Slot);
        }
        petBashStatus = true;
        stunCooldown2.kill();
        stunCooldown2 = T.delayedCall(4, stunCooldownCheck2);
        var animateSeed = 0;
        var stunDuration = 4000;
        $NG.mob5.stop(true, false);
        var stunFlag = true;
        mob[5].animateStun.kill();
        mob[5].animateStun = T.delayedCall(.005, function() {
            animateStun(5, stunDuration, animateSeed, stunFlag);
        });
        // death trigger
        checkMyDeathBySkill(Slot);
        mob[Slot].mp -= 5;
        resumeMonsterAttack(Slot);
        resetMobAttack(Slot);
        if (mob[Slot].rootStatus <= 0) {
            var petCenter = M.round(MOB[5].offsetLeft + (petWidth / 2));
            var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
            if (152 + (Slot * 244) - (mob[Slot].imageWidth / 2) < petCenter) {
                var randomLeft1 = M.round(leftReset + M.random() * (35) + 15); //1st attack step
                var randomLeft2 = M.round(leftReset + 10); //2nd attack step
            } else { // if mob is to right
                var randomLeft1 = M.round(leftReset + M.random() * (15) - 35); //1st attack step
                var randomLeft2 = M.round(leftReset - 10); //2nd attack step
            }
            tlMob[Slot].to(MOB[Slot], .15, {
                    left: randomLeft1,
                    bottom: 62,
                    ease: ez.lin
                })
                .to(MOB[Slot], .25, {
                    left: randomLeft2,
                    bottom: 176
                }, '+=.4')
                .to(MOB[Slot], .25, {
                    left: leftReset,
                    bottom: floorB,
                    ease: ez.Qin
                });
        }
        return;
    }
    if (targetCharm === true) {
        var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) + (mobStrength(Slot)) / 4) * (1 - (((petDef) / 4) / 100)));
        if (monsterDamage < mob[Slot].level * .55) {
            monsterDamage = M.ceil(mob[Slot].level * .55);
        }
        mob[charmSlot].hp -= monsterDamage;
        g.drawMyHp();
        Chat((mob[Slot].name + " bashes " + petName + " for " + monsterDamage + " damage."));
        playAudio("flshhit2");
        stunTarget(charmSlot, 4000, 0);
        animateStun(charmSlot, 4000);
        Chat((petName + " has been stunned."));
        mob[charmSlot].hp -= monsterDamage;
        if (mob[charmSlot].sleepStatus === true) {
            mob[charmSlot].sleepStatus = false;
            $("#sleepIcon" + charmSlot).remove();
        }
        mob[Slot].mp -= 5;
        resumeMonsterAttack(Slot);
        resetMobAttack(Slot);
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        if (charmSlot > Slot) {
            tlMob[Slot].to(MOB[Slot], .2, {
                    left: "+=80"
                })
                .to(MOB[Slot], .15, {
                    bottom: "+=20",
                    left: "-=35"
                }, '+=.4')
                .to(MOB[Slot], .15, {
                    left: "-=15"
                })
                .to(MOB[Slot], .15, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        if (charmSlot < Slot) {
            tlMob[Slot].to(MOB[Slot], .2, {
                    left: "-=80"
                })
                .to(MOB[Slot], .15, {
                    bottom: "+=20",
                    left: "+=35"
                }, '+=.4')
                .to(MOB[Slot], .15, {
                    left: "+=15"
                })
                .to(MOB[Slot], .15, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        g.checkForDeadMonsters();
        return;
    }
    if (targetCharm === false) {
        var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) + (mobStrength(Slot)) / 4) * (g.mobDefense(TGT)));
        if (monsterDamage < mob[Slot].level * .55) {
            monsterDamage = M.ceil(mob[Slot].level * .55);
        }
        playAudio("flshhit2");
        stunTarget(TGT, 4000, 0);
        animateStun(TGT, 4000);
        g.petPhysical(monsterDamage, TGT, "bashes");
        Chat((mob[TGT].name + " has been stunned."));
        mob[Slot].mp -= 5;
        resumeMonsterAttack(Slot);
        resetMobAttack(Slot);
        enchanterMultiHit(Slot);
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        if (TGT > Slot) {
            tlMob[Slot].to(MOB[Slot], .2, {
                    left: "-=80"
                })
                .to(MOB[Slot], .15, {
                    bottom: "+=20",
                    left: "-=35"
                }, '+=.4')
                .to(MOB[Slot], .15, {
                    left: "-=15"
                })
                .to(MOB[Slot], .15, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        if (TGT < Slot) {
            tlMob[Slot].to(MOB[Slot], .2, {
                    left: "-=80"
                })
                .to(MOB[Slot], .15, {
                    bottom: "+=20",
                    left: "+=35"
                }, '+=.4')
                .to(MOB[Slot], .15, {
                    left: "+=15"
                })
                .to(MOB[Slot], .15, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        return;
    }
    if (
        mob[Slot].stunStatus === true ||
        mob[Slot].fearStatus === true ||
        mob[Slot].sleepStatus === true ||
        mob[Slot].frozenStatus === true ||
        mob[Slot].stasisFieldStatus === true) {
        mobResumeAttackTimer(Slot, 0, 100);
        return;
    }
    //check root status
    if (mob[Slot].rootStatus > 0) {
        resumeMonsterAttack(Slot);
        return;
    }
    var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) + (mobStrength(Slot)) / 4));
    if (monsterDamage < mob[Slot].level * .55) {
        monsterDamage = M.ceil(mob[Slot].level * .55);
    }
    var skill = "bashes";
    var zug = physicalDamage(monsterDamage, Slot, skill);
    if (my.hp > 0) {
        if (my.race === "Ogre") {
            // nothing
        } else {
            if (mirageStrikeStatus <= 0 && mirrorImageStatus <= 0 && zug === true) {
                ancientWillStatus = true;
                bashStatus = 0;
                animateMobStun();
                Chat(("You have been stunned!"));
                playAudio("flshhit2");
                tlSpellbar.kill();
                NG.spellbardiv.style.display = "none";
                castingSpell = 1;
                castingGlobal = 1;
                var bashDuration = 3000;
                bashDuration = (bashDuration * ((100 - g.stunEquip) / 100));
                globalCooldownEnd2();
                beginLockout(bashDuration);
                stunCooldown.kill();
                stunCooldown = T.delayedCall(bashDuration / 1000, stunCooldownCheck);
                var skillName = "Bash";
                var buffId = "mobBashIcon";
                var duration = bashDuration;
                mobBashTimer.kill();
                mobBashTimer = T.delayedCall(duration / 1000, function() {
                    removeIcon(buffId);
                });
                mobBuffIcon(skillName, buffId, duration, 0);
            }
        }
    }
    mob[Slot].mp -= 5;
    resumeMonsterAttack(Slot);
    resetMobAttack(Slot);
    var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
    if (Slot <= 1) { // if mob is to left
        var randomLeft1 = M.round(leftReset + M.random() * (35) + 15); //1st attack step
        var randomLeft2 = M.round(leftReset + 10); //2nd attack step
    } else { // if mob is to right
        var randomLeft1 = M.round(leftReset + M.random() * (15) - 35); //1st attack step
        var randomLeft2 = M.round(leftReset - 10); //2nd attack step
    }
    tlMob[Slot].to(MOB[Slot], .15, {
            scale: 1.3,
            left: randomLeft1,
            bottom: 62,
            ease: ez.lin
        })
        .to(MOB[Slot], .25, {
            scale: 1.1,
            left: randomLeft2,
            bottom: 176
        }, '+=.4')
        .to(MOB[Slot], .25, {
            scale: 1,
            left: leftReset,
            bottom: floorB,
            ease: ez.Qin
        });
}

function animateMobStun() {
    myBashTimer.kill();
    flashScreen("#fff", .1, .25);
    var s2 = new C.Shape();
    s2.graphics.beginFill("#ffa")
        .setStrokeStyle(1)
        .beginStroke("#000")
        .drawPolyStar(0, 0, 13, 5, .7, 0);
    s2.cache(-13, -13, 26, 26);
    screenShake(1, 4, 2, 33);
    var s1 = s2.cacheCanvas;

    function doit1() {
        if (bashStatus === 1) {
            return;
        }
        var s = new C.Bitmap(s1);
        s.set({
            x: 320 + M.random() * (320) + M.random() * (320),
            y: (M.random() * 50 + 100),
            regX: 13,
            regY: 13
        });
        stage[7].addChild(s);
        T.to(s, .75, {
            x: "+=" + (M.random() * 20 - 10),
            y: -25,
            ease: ez.Qin,
            rotation: (M.random() * (720) - 360),
            onComplete: function() {
                cRem(7, s);
            }
        });
        T.to(s, .25, {
            delay: .35,
            alpha: 0
        });
        myBashTimer = T.delayedCall(.05, doit1);
    }

    if (GLB.videoSetting === "High") {
        doit1();
    }
}

function monsterBackstab(Slot, targetPet, targetCharm) {
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot, targetPet, targetCharm);
        return;
    }
    tlMob[Slot] = TM();
    playAudio(mob[Slot].audio1);
    if (targetPet === true) {
        function mobHits1() {
            if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true) {
                return;
            }
            if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
                return;
            }

            var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) / 3) + (mobStrength(Slot)));
            if (monsterDamage < mob[Slot].level * .75) {
                monsterDamage = M.ceil(mob[Slot].level * .75);
            }
            monsterDamage = damagePet(monsterDamage);
            petHp -= monsterDamage;
            Chat((mob[Slot].name + " backstabs " + petName + " for " + monsterDamage + " damage."));
            playAudio("flshhit2");
            g.drawMyHp();
            if (petImage === "a fire elemental pet") {
                petFlameShield(Slot);
            }
            // death trigger
            checkMyDeathBySkill(Slot);
        }
        T.delayedCall(.7, mobHits1);
        resumeMonsterAttack(Slot);
        if (mob[Slot].rootStatus <= 0) {
            mob[Slot].mp -= 4;
            resetMobAttack(Slot);
            var petCenter = M.round(MOB[5].offsetLeft + (petWidth / 2));
            var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
            if (152 + (Slot * 244) - (mob[Slot].imageWidth / 2) < petCenter) {
                var randomLeft1 = M.round(leftReset + 80); //1st attack step
                var randomLeft2 = M.round(leftReset + M.random() * (50) + 20); //2nd attack step
            } else { // if mob is to right
                var randomLeft1 = M.round(leftReset - 80); //1st attack step
                var randomLeft2 = M.round(leftReset + M.random() * (30) - 70); //2nd attack step
            }
            tlMob[Slot].to(MOB[Slot], .15, {
                    left: randomLeft1,
                    bottom: 91,
                    ease: ez.cinout
                })
                .to(MOB[Slot], .15, {
                    left: randomLeft2,
                    bottom: 71
                })
                .to(MOB[Slot], .5, {
                    left: leftReset,
                    bottom: floorB,
                    ease: ez.Qin
                });
        }
        return;
    }
    if (targetCharm === true) {
        function mobHits2() {
            if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true) {
                return;
            }
            if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
                return;
            }

            var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) / 3) + (mobStrength(Slot)));
            if (monsterDamage < mob[Slot].level * .75) {
                monsterDamage = M.ceil(mob[Slot].level * .75);
            }
            mob[charmSlot].hp -= monsterDamage;
            g.slotDamage(monsterDamage, charmSlot);
            Chat((mob[Slot].name + " backstabs " + petName + " for " + monsterDamage + " damage."));
            playAudio("flshhit2");
            g.drawMyHp();
            if (mob[charmSlot].sleepStatus === true) {
                mob[charmSlot].sleepStatus = false;
                $("#sleepIcon" + charmSlot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        T.delayedCall(.5, mobHits2);
        mob[Slot].mp -= 4;
        resumeMonsterAttack(Slot);
        resetMobAttack(Slot);
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        if (charmSlot < Slot) {
            tlMob[Slot].to(MOB[Slot], .3, {
                    bottom: "-=40",
                    left: "-=150",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .2, {
                    bottom: "-=60",
                    left: "+=20",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .25, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        if (charmSlot > Slot) {
            tlMob[Slot].to(MOB[Slot], .3, {
                    bottom: "-=40",
                    left: "+=150",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .2, {
                    bottom: "-=60",
                    left: "-=20",
                    onStart: function() {
                        flipMob(Slot);
                    }
                })
                .to(MOB[Slot], .25, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        return;
    }
    if (targetCharm === false) {
        function mobHits3() {
            if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true) {
                return;
            }
            if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) / 3) + (mobStrength(Slot)));
            if (monsterDamage < mob[Slot].level * .75) {
                monsterDamage = M.ceil(mob[Slot].level * .75);
            }
            g.petPhysical(monsterDamage, TGT, "backstabs");
            playAudio("flshhit2");
        }
        T.delayedCall(.5, mobHits3);
        mob[Slot].mp -= 4;
        resumeMonsterAttack(Slot);
        resetMobAttack(Slot);
        enchanterMultiHit(Slot);
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        if ((TGT < Slot) && mobsFound() === true) {
            tlMob[Slot].to(MOB[Slot], .3, {
                    bottom: "-=40",
                    left: "-=150"
                })
                .to(MOB[Slot], .2, {
                    bottom: "-=60",
                    left: "+=20"
                })
                .to(MOB[Slot], .25, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        if ((TGT > Slot) && mobsFound() === true) {
            tlMob[Slot].to(MOB[Slot], .3, {
                    bottom: "-=40",
                    left: "+=150"
                })
                .to(MOB[Slot], .2, {
                    bottom: "-=60",
                    left: "-=20"
                })
                .to(MOB[Slot], .25, {
                    left: leftReset,
                    bottom: floorB
                });
        }
        return;
    }
    if (mob[Slot].stunStatus === true ||
        mob[Slot].fearStatus === true ||
        mob[Slot].sleepStatus === true ||
        mob[Slot].frozenStatus === true ||
        mob[Slot].stasisFieldStatus === true) {
        mobResumeAttackTimer(Slot, 0, 100);
        return;
    }

    function mobHits4() {
        if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true || mob[Slot].fallingStatus === true) {
            return;
        }
        if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
            return;
        }
        //check root status
        if (mob[Slot].rootStatus > 0) {
            return;
        }

        var monsterDamage = M.ceil((M.random() * (mobStrength(Slot)) / 3) + (mobStrength(Slot)));
        if (monsterDamage < mob[Slot].level * .75) {
            monsterDamage = M.ceil(mob[Slot].level * .75);
        }
        var skill = "backstabs";
        physicalDamage(monsterDamage, Slot, skill);
        playAudio("flshhit2");
        mob[Slot].mp -= 4;
        //channeling formula - add knockback
        checkSpellKnockback(Slot);
    }
    //check root status
    if (mob[Slot].rootStatus > 0) {
        resumeMonsterAttack(Slot);
        return;
    }
    T.delayedCall(.3, mobHits4);
    resumeMonsterAttack(Slot);
    resetMobAttack(Slot);
    if (mob[Slot].rootStatus <= 0 && mobsFound() === true) {
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        if (Slot <= 1) { // if mob is to left
            var randomLeft1 = M.round(leftReset - 100); //1st attack step
            var randomLeft2 = M.round(leftReset + M.random() * (30) + 15); //2nd attack step
        } else { // if mob is to right
            var randomLeft1 = M.round(leftReset + 100); //1st attack step
            var randomLeft2 = M.round(leftReset + M.random() * (30) - 15); //2nd attack step
        }
        tlMob[Slot].to(MOB[Slot], .15, {
                scale: 1.1,
                left: randomLeft1,
                bottom: 91,
                ease: ez.cinout
            })
            .to(MOB[Slot], .15, {
                scale: 1.2,
                left: randomLeft2,
                bottom: 71,
                ease: ez.cinout
            })
            .to(MOB[Slot], .5, {
                scale: 1,
                left: leftReset,
                bottom: floorB,
                ease: ez.Qin
            });
    }
}

function monsterShadowKick(Slot, targetPet, targetCharm) {
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    tlMob[Slot] = TM();
    tlMobSh[Slot] = TM();
    playAudio(mob[Slot].audio1);
    if (targetPet === true) {
        function mobHits1() {
            if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true) {
                return;
            }
            if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
                return;
            }

            var monsterDamage = M.ceil((M.random() * ((mobStrength(Slot) / 2)) + (mobStrength(Slot)) / 1) * (1 - (((petDef) / 4) / 100)));
            var ranNum = M.random() * 100;
            if (ranNum < 15) {
                monsterDamage = (M.ceil(monsterDamage * 1.5));
            }
            if (monsterDamage < mob[Slot].level * .65) {
                monsterDamage = M.ceil(mob[Slot].level * .65);
            }
            monsterDamage = damagePet(monsterDamage);
            petHp -= monsterDamage;
            Chat((mob[Slot].name + " shadow kicks " + petName + " for " + monsterDamage + " damage."));
            playAudio("flshhit2");
            g.drawMyHp();
            if (petImage === "a fire elemental pet") {
                petFlameShield(Slot);
            }
            // death trigger
            checkMyDeathBySkill(Slot);
        }
        T.delayedCall(.6, mobHits1);
        mob[Slot].mp -= 4;
        resumeMonsterAttack(Slot);
        resetMobAttack(Slot);
        var petCenter = M.round(MOB[5].offsetLeft + (petWidth / 2));
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        if (mob[Slot].rootStatus <= 0) {
            var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
            if (152 + (Slot * 244) - (mob[Slot].imageWidth / 2) < petCenter) {
                var left3 = M.random() * (35) + 15;
                var randomLeft1 = M.round(leftReset + left3); //1st attack step
                var randomLeft2 = M.round(leftReset + (left3 * 2)); //2nd attack step
            } else { // if mob is to left
                var left3 = M.random() * (15) - 35;
                var randomLeft1 = M.round(leftReset + left3); //1st attack step
                var randomLeft2 = M.round(leftReset + (left3 * 2)); //2nd attack step
            }
            var Yconvert = (mob[Slot].imageWidth / mob[Slot].imageBaseX); // find growth % from base image
            var mobHeight = (mob[Slot].imageBaseY * Yconvert); // finds actual Y value
            tlMob[Slot].to(MOB[Slot], .3, {
                    left: randomLeft1,
                    bottom: 71
                })
                .to(MOB[Slot], .3, {
                    left: randomLeft2,
                    bottom: 62
                })
                .to(MOB[Slot], .5, {
                    left: leftReset,
                    bottom: floorB
                });
            tlMobSh[Slot].to(MOBSHADOW[Slot], .3, {
                    width: "95%",
                    height: 42,
                    bottom: -54
                })
                .to(MOBSHADOW[Slot], .3, {
                    width: "90%",
                    height: 46,
                    bottom: -15,
                    ease: ez.Qin
                })
                .to(MOBSHADOW[Slot], .5, {
                    width: "100%",
                    height: 50,
                    bottom: 0
                });
        }
        return;
    }
    if (targetCharm === true) {
        function mobHits2() {
            if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true) {
                return;
            }
            if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
                return;
            }

            var monsterDamage = M.ceil((M.random() * ((mobStrength(Slot) / 2)) + (mobStrength(Slot)) / 1) * (1 - (((petDef) / 4) / 100)));
            var ranNum = M.random() * 100;
            if (ranNum < 15) {
                monsterDamage = (M.ceil(monsterDamage * 1.5));
            }
            if (monsterDamage < mob[Slot].level * .65) {
                monsterDamage = M.ceil(mob[Slot].level * .65);
            }
            mob[charmSlot].hp -= monsterDamage;
            g.slotDamage(monsterDamage, charmSlot);
            Chat((mob[Slot].name + " shadow kicks " + petName + " for " + monsterDamage + " damage."));
            playAudio("flshhit2");
            g.drawMyHp();
            if (mob[charmSlot].sleepStatus === true) {
                mob[charmSlot].sleepStatus = false;
                $("#sleepIcon" + charmSlot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        T.delayedCall(.5, mobHits2);
        mob[Slot].mp -= 4;
        resumeMonsterAttack(Slot);
        resetMobAttack(Slot);
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        if (charmSlot > Slot) {
            tlMob[Slot].to(MOB[Slot], .25, {
                    scale: 1.15,
                    left: "+=80",
                    bottom: 205
                })
                .to(MOB[Slot], .25, {
                    scale: 1.3,
                    left: "+=60",
                    bottom: 167
                })
                .to(MOB[Slot], .4, {
                    scale: 1,
                    left: leftReset,
                    bottom: floorB
                });
            tlMobSh[Slot].to(MOBSHADOW[Slot], .25, {
                    width: "98%",
                    height: 45,
                    bottom: -25
                })
                .to(MOBSHADOW[Slot], .25, {
                    width: "95%",
                    height: 48,
                    bottom: -10,
                    ease: ez.Qin
                })
                .to(MOBSHADOW[Slot], .4, {
                    width: "100%",
                    height: 50,
                    bottom: 0
                });
        } else {
            tlMob[Slot].to(MOB[Slot], .25, {
                    scale: 1.15,
                    left: "-=80",
                    bottom: 205
                })
                .to(MOB[Slot], .25, {
                    scale: 1.3,
                    left: "-=60",
                    bottom: 167
                })
                .to(MOB[Slot], .4, {
                    scale: 1,
                    left: leftReset,
                    bottom: floorB
                });
            tlMobSh[Slot].to(MOBSHADOW[Slot], .25, {
                    width: "98%",
                    height: 45,
                    bottom: -25
                })
                .to(MOBSHADOW[Slot], .25, {
                    width: "95%",
                    height: 48,
                    bottom: -10,
                    ease: ez.Qin
                })
                .to(MOBSHADOW[Slot], .4, {
                    width: "100%",
                    height: 50,
                    bottom: 0
                });
        }
        return;
    }
    if (targetCharm === false) {
        function mobHits3() {
            if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true) {
                return;
            }
            if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * ((mobStrength(Slot) / 2)) + (mobStrength(Slot)) / 1));
            if (M.random() * 100 < 15) {
                monsterDamage = (M.ceil(monsterDamage * 1.5));
            }
            g.petPhysical(monsterDamage, TGT, "shadow kicks");
            playAudio("flshhit2");
        }
        T.delayedCall(.5, mobHits3);
        mob[Slot].mp -= 4;
        resumeMonsterAttack(Slot);
        resetMobAttack(Slot);
        enchanterMultiHit(Slot);
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        if ((TGT > Slot) && mobsFound() === true) {
            tlMob[Slot].to(MOB[Slot], .25, {
                    left: "+=80",
                    bottom: 205
                })
                .to(MOB[Slot], .25, {
                    left: "+=60",
                    bottom: 167
                })
                .to(MOB[Slot], .4, {
                    left: leftReset,
                    bottom: floorB
                });
            tlMobSh[Slot].to(MOBSHADOW[Slot], .25, {
                    width: "98%",
                    height: 45,
                    bottom: -25
                })
                .to(MOBSHADOW[Slot], .25, {
                    width: "95%",
                    height: 48,
                    bottom: -10,
                    ease: ez.Qin
                })
                .to(MOBSHADOW[Slot], .4, {
                    width: "100%",
                    height: 50,
                    bottom: 0
                });
        } else {
            tlMob[Slot].to(MOB[Slot], .25, {
                    left: "-=80",
                    bottom: 205
                })
                .to(MOB[Slot], .25, {
                    left: "-=60",
                    bottom: 167
                })
                .to(MOB[Slot], .4, {
                    left: leftReset,
                    bottom: floorB
                });
            tlMobSh[Slot].to(MOBSHADOW[Slot], .25, {
                    width: "98%",
                    height: 45,
                    bottom: -25
                })
                .to(MOBSHADOW[Slot], .25, {
                    width: "95%",
                    height: 48,
                    bottom: -10,
                    ease: ez.Qin
                })
                .to(MOBSHADOW[Slot], .4, {
                    width: "100%",
                    height: 50,
                    bottom: 0
                });
        }
        return;
    }
    if (
        mob[Slot].stunStatus === true ||
        mob[Slot].fearStatus === true ||
        mob[Slot].sleepStatus === true ||
        mob[Slot].frozenStatus === true ||
        mob[Slot].stasisFieldStatus === true) {
        mobResumeAttackTimer(Slot, 0, 100);
        return;
    }

    function mobHits4() {
        if (mob[Slot].stunStatus === true || mob[Slot].fearStatus === true || mob[Slot].sleepStatus === true || mob[Slot].fallingStatus === true) {
            return;
        }
        if (mob[Slot].hp <= 0 || my.hp <= 0 || mob[Slot].attackStatus !== 0) {
            return;
        }
        //check root status
        if (mob[Slot].rootStatus > 0) {
            return;
        }

        var monsterDamage = M.ceil((M.random() * ((mobStrength(Slot) / 2)) + (mobStrength(Slot)) / 1));
        var ranNum = M.random() * 100;
        if (ranNum < 15) {
            monsterDamage = (M.ceil(monsterDamage * 1.5));
        }
        var skill = "shadow kicks";
        if (monsterDamage < mob[Slot].level * .65) {
            monsterDamage = M.ceil(mob[Slot].level * .65);
        }
        physicalDamage(monsterDamage, Slot, skill);
        playAudio("flshhit2");
        mob[Slot].mp -= 4;
        //channeling formula - add knockback
    }
    //check root status
    if (mob[Slot].rootStatus > 0) {
        resumeMonsterAttack(Slot);
        return;
    }
    T.delayedCall(.4, mobHits4);
    resumeMonsterAttack(Slot);
    resetMobAttack(Slot);
    if (mob[Slot].rootStatus <= 0) {
        var leftReset = 152 + (Slot * 244) - (mob[Slot].imageWidth / 2);
        if (Slot <= 1) { // if mob is to right
            var left3 = M.random() * (35) + 15;
            var randomLeft1 = M.round(leftReset + left3); //1st attack step
            var randomLeft2 = M.round(leftReset + (left3 * 2)); //2nd attack step
        } else { // if mob is to left
            var left3 = M.random() * (15) - 35;
            var randomLeft1 = M.round(leftReset + left3); //1st attack step
            var randomLeft2 = M.round(leftReset + (left3 * 2)); //2nd attack step
        }
        tlMob[Slot].to(MOB[Slot], .2, {
                scale: 1.15,
                left: randomLeft1,
                bottom: 71,
                onStart: function() {
                    flipMob(Slot);
                }
            })
            .to(MOB[Slot], .2, {
                scale: 1.3,
                left: randomLeft2,
                bottom: 62,
                ease: ez.Qin,
                onStart: function() {
                    flipMob(Slot);
                }
            })
            .to(MOB[Slot], .5, {
                scale: 1,
                left: leftReset,
                bottom: floorB
            });
        tlMobSh[Slot].to(MOBSHADOW[Slot], .2, {
                width: "95%",
                height: 42,
                bottom: -54
            })
            .to(MOBSHADOW[Slot], .2, {
                width: "90%",
                height: 46,
                bottom: -15,
                ease: ez.Qin
            })
            .to(MOBSHADOW[Slot], .5, {
                width: "100%",
                height: 50,
                bottom: 0
            });
    }
}

function playAudioCast(Slot) {
    if (mob[Slot].rare !== 3) {
        playAudio(mob[Slot].audio5);
    } else {
        playAudio(mob[Slot].audio5);
        screenShake(6, 20, 10, 33);
    }
}

function MpoisonCloudDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || mob[Slot].attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    if (targetPet === true) {
        var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((petPoison) / 4) / 100)));
        if (monsterDamage <= 0) {
            monsterDamage = 1;
        }
        petHp -= monsterDamage;
        g.drawMyHp();
        Chat((mob[Slot].name + " casts Poison Cloud on " + petName + " for " + monsterDamage + " damage."), 3);
        playAudio("spellDoneBoom");
        // death trigger
        checkMyDeathBySkill(Slot);
        mob[Slot].mp -= 3;
        mob[Slot].castingStatus = false;
        var charmAttack, charmTarget;
        castProjectile('green', mob[Slot].imageHeight / 2, Slot, charmAttack, charmTarget, true);
        return;
    }
    if (targetCharm === true) {
        function poisonCloudProjectileCharm1(Slot) {
            if (mob[charmSlot].hp <= 0 || mob[Slot].attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((mob[charmSlot].poison) / 4) / 100)));
            if (monsterDamage <= 0) {
                monsterDamage = 1;
            }
            mob[charmSlot].hp -= monsterDamage;
            g.drawMyHp();
            Chat((mob[Slot].name + " casts Poison Cloud on " + mob[charmSlot].name + " for " + monsterDamage + " damage."), 3);
            g.slotDamage(monsterDamage, charmSlot);
            playAudio("spellDoneBoom");
            if (mob[charmSlot].sleepStatus === true) {
                mob[charmSlot].sleepStatus = false;
                $("#sleepIcon" + charmSlot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        mob[Slot].mp -= 3;
        mob[Slot].castingStatus = false;
        castProjectile('green', mob[Slot].imageHeight / 2, Slot, true);
        T.delayedCall(.4, function() {
            poisonCloudProjectileCharm1(Slot);
        });
        return;
    }
    if (targetCharm === false) {
        function poisonCloudProjectileCharm2(Slot, charmTGT) {
            if (mob[charmTGT].hp <= 0 || mob[charmTGT].attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((mob[charmTGT].poison) / 4) / 100)));
            if (monsterDamage <= 0) {
                monsterDamage = 1;
            }
            mob[charmTGT].hp -= monsterDamage;
            g.drawMonsterHp(charmTGT);
            Chat((mob[Slot].name + " casts Poison Cloud on " + mob[charmTGT].name + " for " + monsterDamage + " damage."), 3);
            playAudio("spellDoneBoom");
            g.slotDamage(monsterDamage, charmTGT);
            if (mob[charmTGT].sleepStatus === true) {
                mob[charmTGT].sleepStatus = false;
                $("#sleepIcon" + Slot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        var charmTGT = TGT;
        mob[Slot].castingStatus = false;
        if (charmSlot === charmTGT) {
            return;
        }
        mob[Slot].mp -= 3;
        castProjectile('green', mob[Slot].imageHeight / 2, Slot, true, charmTGT);
        T.delayedCall(.4, function() {
            poisonCloudProjectileCharm2(Slot, charmTGT);
        });
        return;
    }

    function poisonCloudProjectile(Slot) {
        if (my.hp <= 0 || attackStatus !== 0) {
            return;
        }
        var monsterDamage = M.ceil(minMax(mob[Slot].intel * 2, .8) * (1 - ((poisonTotal()) / 4) / 100));
        if (monsterDamage <= 0) {
            monsterDamage = 1;
        }
        var spell = "Poison Cloud";
        var mType = "Poison";
        magicalDamage(monsterDamage, Slot, spell, mType);
        playAudio("spellDoneBoom");
    }
    mob[Slot].mp -= 3;
    mob[Slot].castingStatus = false;
    castProjectile('green', mob[Slot].imageHeight / 2, Slot);
    flashScreen("#32cd32", .3, .5, true);
    T.delayedCall(.5, function() {
        poisonCloudProjectile(Slot);
    });
    if (mob[Slot].name === "Falzitherin") {
        function doit(count) {
            castProjectile("green", 200, Slot);
            if (count < 8) {
                T.delayedCall(.033, function() {
                    doit(++count);
                });
            }
        }
        doit(0);
    }
}

function mobCastSpeed(Slot) {
    var s1 = mob[Slot].castSpeed;
    var penalty = 1;
    if (mob[Slot].snareStatus) {
        penalty += 1;
    }
    s1 = s1 * penalty;
    return s1;
}

function MpoisonCloud(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 3) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastEvoke1", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("green", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            MpoisonCloudDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function monsterSmiteDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    if (targetPet === true) {
        var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((petMagic) / 4) / 100)));
        if (monsterDamage <= 0) {
            monsterDamage = 1;
        }
        petHp -= monsterDamage;
        g.drawMyHp();
        Chat((mob[Slot].name + " casts Smite on " + petName + " for " + monsterDamage + " damage."), 3);
        playAudio("spellDoneFlames");
        // death trigger
        checkMyDeathBySkill(Slot);
        mob[Slot].mp -= 3;
        mob[Slot].castingStatus = false;
        var charmAttack, charmTarget;
        castProjectile('magenta', mob[Slot].imageHeight / 2, Slot, charmAttack, charmTarget, true);
        return;
    }
    if (targetCharm === true) {
        function smiteProjectileCharm1(Slot) {
            if (mob[charmSlot].hp <= 0 || attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((mob[charmSlot].magic) / 4) / 100)));
            if (monsterDamage <= 0) {
                monsterDamage = 1;
            }
            mob[charmSlot].hp -= monsterDamage;
            g.drawMyHp();
            Chat((mob[Slot].name + " casts Smite on " + mob[charmSlot].name + " for " + monsterDamage + " damage."), 3);
            g.slotDamage(monsterDamage, charmSlot);
            playAudio("spellDoneFlames");
            if (mob[charmSlot].sleepStatus === true) {
                mob[charmSlot].sleepStatus = false;
                $("#sleepIcon" + charmSlot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        mob[Slot].mp -= 3;
        mob[Slot].castingStatus = false;
        castProjectile('magenta', mob[Slot].imageHeight / 2, Slot, true);
        T.delayedCall(.4, function() {
            smiteProjectileCharm1(Slot);
        });
        return;
    }
    if (targetCharm === false) {
        function smiteProjectileCharm2(Slot, charmTGT) {
            if (mob[charmTGT].hp <= 0 || attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((mob[charmTGT].magic) / 4) / 100)));
            if (monsterDamage <= 0) {
                monsterDamage = 1;
            }
            mob[charmTGT].hp -= monsterDamage;
            g.drawMonsterHp(charmTGT);
            Chat((mob[Slot].name + " casts Smite on " + mob[charmTGT].name + " for " + monsterDamage + " damage."), 3);
            g.slotDamage(monsterDamage, charmTGT);
            playAudio("spellDoneFlames");
            if (mob[charmTGT].sleepStatus === true) {
                mob[charmTGT].sleepStatus = false;
                $("#sleepIcon" + Slot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        var charmTGT = TGT;
        mob[Slot].castingStatus = false;
        if (charmSlot === charmTGT) {
            return;
        }
        mob[Slot].mp -= 3;
        castProjectile('magenta', mob[Slot].imageHeight / 2, Slot, true, charmTGT);
        T.delayedCall(.4, function() {
            smiteProjectileCharm2(Slot, charmTGT);
        });
        return;
    }

    function smiteProjectile(Slot) {
        if (my.hp <= 0 || attackStatus !== 0) {
            return;
        }
        var monsterDamage = M.ceil(minMax(mob[Slot].intel * 2, .8) * (1 - ((magicTotal()) / 4) / 100));
        if (monsterDamage <= 0) {
            monsterDamage = 1;
        }
        var spell = "Smite";
        var mType = "Magic";
        magicalDamage(monsterDamage, Slot, spell, mType);
        playAudio("spellDoneFlames");
    }
    mob[Slot].mp -= 3;
    mob[Slot].castingStatus = false;
    castProjectile('magenta', mob[Slot].imageHeight / 2, Slot);
    flashScreen("#ff00ff", .3, .5, true);
    T.delayedCall(.5, function() {
        smiteProjectile(Slot);
    });
}

function monsterSmite(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 3) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastEvoke2", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("magenta", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterSmiteDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function monsterEnergyBoltDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    if (targetPet === true) {
        var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((petLightning) / 4) / 100)));
        if (monsterDamage <= 0) {
            monsterDamage = 1;
        }
        petHp -= monsterDamage;
        g.drawMyHp();
        Chat((mob[Slot].name + " casts Energy Bolt on " + petName + " for " + monsterDamage + " damage."), 3);
        playAudio("spellDoneFlames");
        // death trigger
        checkMyDeathBySkill(Slot);
        mob[Slot].mp -= 3;
        mob[Slot].castingStatus = false;
        var charmAttack, charmTarget;
        castProjectile('yellow', mob[Slot].imageHeight / 2, Slot, charmAttack, charmTarget, true);
        return;
    }
    if (targetCharm === true) {
        function energyBoltProjectileCharm1(Slot) {
            if (mob[charmSlot].hp <= 0 || attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((mob[charmSlot].lightning) / 4) / 100)));
            if (monsterDamage <= 0) {
                monsterDamage = 1;
            }
            mob[charmSlot].hp -= monsterDamage;
            g.drawMyHp();
            Chat((mob[Slot].name + " casts Energy Bolt on " + mob[charmSlot].name + " for " + monsterDamage + " damage."), 3);
            playAudio("spellDoneFlames");
            g.slotDamage(monsterDamage, charmSlot);
            if (mob[charmSlot].sleepStatus === true) {
                mob[charmSlot].sleepStatus = false;
                $("#sleepIcon" + charmSlot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        mob[Slot].mp -= 3;
        mob[Slot].castingStatus = false;
        castProjectile('yellow', mob[Slot].imageHeight / 2, Slot, true);
        T.delayedCall(.4, function() {
            energyBoltProjectileCharm1(Slot);
        });
        return;
    }
    if (targetCharm === false) {
        function energyBoltProjectileCharm2(Slot, charmTGT) {
            if (mob[charmTGT].hp <= 0 || attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((mob[charmTGT].lightning) / 4) / 100)));
            if (monsterDamage <= 0) {
                monsterDamage = 1;
            }
            mob[charmTGT].hp -= monsterDamage;
            g.drawMonsterHp(charmTGT);
            Chat((mob[Slot].name + " casts Energy Bolt on " + mob[charmTGT].name + " for " + monsterDamage + " damage."), 3);
            playAudio("spellDoneFlames");
            g.slotDamage(monsterDamage, charmTGT);
            if (mob[charmTGT].sleepStatus === true) {
                mob[charmTGT].sleepStatus = false;
                $("#sleepIcon" + Slot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        var charmTGT = TGT;
        mob[Slot].castingStatus = false;
        if (charmSlot === charmTGT) {
            return;
        }
        mob[Slot].mp -= 3;
        castProjectile('yellow', mob[Slot].imageHeight / 2, Slot, true, charmTGT);
        T.delayedCall(.4, function() {
            energyBoltProjectileCharm2(Slot, charmTGT);
        });
        return;
    }

    function energyBoltProjectile(Slot) {
        if (my.hp <= 0 || attackStatus !== 0) {
            return;
        }
        var monsterDamage = M.ceil(minMax(mob[Slot].intel * 2, .8) * (1 - ((lightningTotal()) / 4) / 100));
        if (monsterDamage <= 0) {
            monsterDamage = 1;
        }
        var spell = "Energy Bolt";
        var mType = "Lightning";
        magicalDamage(monsterDamage, Slot, spell, mType);
        playAudio("spellDoneFlames");
    }
    if (mob[Slot].rare === 3) {
        mob[Slot].mp -= 2;
    } else {
        mob[Slot].mp -= 3;
    }
    mob[Slot].castingStatus = false;
    castProjectile('yellow', mob[Slot].imageHeight / 2, Slot);
    flashScreen("#ffd700", .3, .5, true);
    T.delayedCall(.5, function() {
        energyBoltProjectile(Slot);
    });
}

function monsterEnergyBolt(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 3) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastEvoke2", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("yellow", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterEnergyBoltDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function monsterIceShardDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    if (targetPet === true) {
        var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((petCold) / 4) / 100)));
        if (monsterDamage <= 0) {
            monsterDamage = 1;
        }
        petHp -= monsterDamage;
        g.drawMyHp();
        Chat((mob[Slot].name + " casts Ice Shard on " + petName + " for " + monsterDamage + " damage."), 3);
        playAudio("spellDoneBoom");
        // death trigger
        checkMyDeathBySkill(Slot);
        mob[Slot].mp -= 3;
        mob[Slot].castingStatus = false;
        var charmAttack, charmTarget;
        castProjectile('blue', mob[Slot].imageHeight / 2, Slot, charmAttack, charmTarget, true);
        return;
    }
    if (targetCharm === true) {
        function iceShardProjectileCharm1(Slot) {
            if (mob[charmSlot].hp <= 0 || attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((mob[charmSlot].cold) / 4) / 100)));
            if (monsterDamage <= 0) {
                monsterDamage = 1;
            }
            mob[charmSlot].hp -= monsterDamage;
            g.drawMyHp();
            Chat((mob[Slot].name + " casts Ice Shard on " + mob[charmSlot].name + " for " + monsterDamage + " damage."), 3);
            g.slotDamage(monsterDamage, charmSlot);
            playAudio("spellDoneBoom");
            if (mob[charmSlot].sleepStatus === true) {
                mob[charmSlot].sleepStatus = false;
                $("#sleepIcon" + charmSlot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        mob[Slot].mp -= 3;
        mob[Slot].castingStatus = false;
        castProjectile('blue', mob[Slot].imageHeight / 2, Slot, true);
        T.delayedCall(function() {
            iceShardProjectileCharm1(Slot);
        });
        return;
    }
    if (targetCharm === false) {
        function iceShardProjectileCharm2(Slot, charmTGT) {
            if (mob[charmTGT].hp <= 0 || attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((mob[charmTGT].cold) / 4) / 100)));
            if (monsterDamage <= 0) {
                monsterDamage = 1;
            }
            mob[charmTGT].hp -= monsterDamage;
            g.drawMonsterHp(charmTGT);
            Chat((mob[Slot].name + " casts Ice Shard on " + mob[charmTGT].name + " for " + monsterDamage + " damage."), 3);
            g.slotDamage(monsterDamage, charmTGT);
            playAudio("spellDoneBoom");
            if (mob[charmTGT].sleepStatus === true) {
                mob[charmTGT].sleepStatus = false;
                $("#sleepIcon" + Slot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        var charmTGT = TGT;
        mob[Slot].castingStatus = false;
        if (charmSlot === charmTGT) {
            return;
        }
        mob[Slot].mp -= 3;
        castProjectile("blue", mob[Slot].imageHeight / 2, Slot, true, charmTGT);
        T.delayedCall(.4, function() {
            iceShardProjectileCharm2(Slot, charmTGT);
        });
        return;
    }

    function iceShardProjectile(Slot) {
        if (my.hp <= 0 || attackStatus !== 0) {
            return;
        }
        var monsterDamage = M.ceil(minMax(mob[Slot].intel * 2, .8) * (1 - ((coldTotal()) / 4) / 100));
        if (monsterDamage <= 0) {
            monsterDamage = 1;
        }
        var spell = "Ice Shard";
        if (mob[Slot].name === "Matron Maelentia") {
            spell = "Dragon's Ice Breath";
        }
        var mType = "Cold";
        magicalDamage(monsterDamage, Slot, spell, mType);
        playAudio("spellDoneBoom");
    }
    mob[Slot].mp -= 3;
    mob[Slot].castingStatus = false;
    castProjectile("blue", mob[Slot].imageHeight / 2, Slot);
    flashScreen("#00ced1", .3, .5, true);
    T.delayedCall(.5, function() {
        iceShardProjectile(Slot);
    });
    if (mob[Slot].name === "Matron Maelentia") {
        function doit(count) {
            castProjectile("blue", 200, Slot);
            if (count < 8) {
                T.delayedCall(.033, function() {
                    doit(++count);
                });
            }
        }
        doit(0);
    }
}

function monsterIceShard(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 3) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastEvoke1", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("teal", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterIceShardDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function MfireballDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    if (targetPet === true) {
        var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((petFire) / 4) / 100)));
        if (monsterDamage <= 0) {
            monsterDamage = 1;
        }
        petHp -= monsterDamage;
        g.drawMyHp();
        Chat((mob[Slot].name + " casts Fireball on " + petName + " for " + monsterDamage + " damage."), 3);
        playAudio("spellDoneBoom");
        // death trigger
        checkMyDeathBySkill(Slot);
        mob[Slot].mp -= 3;
        mob[Slot].castingStatus = false;
        var charmAttack, charmTarget;
        castProjectile("red", mob[Slot].imageHeight / 2, Slot, charmAttack, charmTarget, true);
        return;
    }
    if (targetCharm === true) {
        function fireballProjectileCharm1(Slot) {
            if (mob[charmSlot].hp <= 0 || attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((mob[charmSlot].fire) / 4) / 100)));
            if (monsterDamage <= 0) {
                monsterDamage = 1;
            }
            mob[charmSlot].hp -= monsterDamage;
            g.drawMyHp();
            Chat((mob[Slot].name + " casts Fireball on " + mob[charmSlot].name + " for " + monsterDamage + " damage."), 3);
            g.slotDamage(monsterDamage, charmSlot);
            playAudio("spellDoneBoom");
            if (mob[charmSlot].sleepStatus === true) {
                mob[charmSlot].sleepStatus = false;
                $("#sleepIcon" + charmSlot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        mob[Slot].mp -= 3;
        mob[Slot].castingStatus = false;
        castProjectile("red", mob[Slot].imageHeight / 2, Slot, true);
        T.delayedCall(.4, function() {
            fireballProjectileCharm1(Slot);
        });
        return;
    }
    if (targetCharm === false) {
        function fireballProjectileCharm2(Slot, charmTGT) {
            if (mob[charmTGT].hp <= 0 || attackStatus !== 0) {
                return;
            }
            var monsterDamage = M.ceil((M.random() * (mob[Slot].intel) + (mob[Slot].intel) / 2 + mob[Slot].level) * (1 - (((mob[charmTGT].fire) / 4) / 100)));
            if (monsterDamage <= 0) {
                monsterDamage = 1;
            }
            mob[charmTGT].hp -= monsterDamage;
            g.drawMonsterHp(charmTGT);
            Chat((mob[Slot].name + " casts Fireball on " + mob[charmTGT].name + " for " + monsterDamage + " damage."), 3);
            g.slotDamage(monsterDamage, charmTGT);
            playAudio("spellDoneBoom");
            if (mob[charmTGT].sleepStatus === true) {
                mob[charmTGT].sleepStatus = false;
                $("#sleepIcon" + Slot).remove();
            }
            // death trigger
            g.checkForDeadMonsters();
        }
        var charmTGT = TGT;
        mob[Slot].castingStatus = false;
        if (charmSlot === charmTGT) {
            return;
        }
        mob[Slot].mp -= 3;
        castProjectile("red", mob[Slot].imageHeight / 2, Slot, true, charmTGT);
        T.delayedCall(.4, function() {
            fireballProjectileCharm2(Slot, charmTGT);
        });
        return;
    }

    function fireballProjectile(Slot) {
        if (my.hp <= 0 || attackStatus !== 0) {
            return;
        }
        var monsterDamage = M.ceil(minMax(mob[Slot].intel * 2, .8) * (1 - ((fireTotal()) / 4) / 100));
        if (monsterDamage <= 0) {
            monsterDamage = 1;
        }
        var spell = "Fireball";
        if (mob[Slot].name === "Highlord Szarthax") {
            spell = "Dragon's Lava Bolt";
        }
        var mType = "Fire";
        magicalDamage(monsterDamage, Slot, spell, mType);
        playAudio("spellDoneBoom");
    }

    mob[Slot].mp -= 3;
    mob[Slot].castingStatus = false;
    castProjectile("red", mob[Slot].imageHeight / 2, Slot);
    flashScreen("#d00", .3, .5, true);
    T.delayedCall(.5, function() {
        fireballProjectile(Slot);
    });
    if (mob[Slot].name === "Highlord Szarthax") {
        function doit(count) {
            castProjectile("red", 200, Slot);
            if (count < 8) {
                T.delayedCall(.033, function() {
                    doit(++count);
                });
            }
        }
        doit(0);
    }
}

function Mfireball(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 3) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastEvoke1", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("orange", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            MfireballDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function checkMyDeathByDot(Slot) {
    if (my.job === "Bard" || my.job === "Enchanter") {
        if (petName !== "") {
            if (mob[charmSlot].hp <= 0) {
                slainPet();
            }
        }
    }
    if (petHp <= 0 && g.petAlive === true) {
        slainPet();
    }
    if (my.hp <= 0) {
        var altMessage = 1;
        if (mob[Slot].name === "") {
            var altMessage = 0;
        }
        if (altMessage === 1) {
            Chat(("You have been slain by " + mob[Slot].name + "!"), 1);
        }
        if (altMessage === 0) {
            Chat(("You have been slain!"), 1);
        }
        monsterKilledMe();
    }
}


function monsterEnvenomTick(Slot, targetPet, targetCharm, charmTGT) {
    if (my.hp <= 0) {
        mob[Slot].envenomTicks = 0;
        return;
    }
    if (targetPet === true && petHp <= 0) {
        mob[Slot].envenomTicks = 0;
        return;
    }
    if (targetCharm === true && mob[charmSlot].hp <= 0) {
        mob[charmSlot].envenomTicks = 0;
        return;
    }
    if (targetCharm === false && mob[charmTGT].hp <= 0) {
        mob[charmTGT].envenomTicks = 0;
        return;
    }
    if (targetPet === true) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((petPoison) / 4) / 100));
        if (mob[Slot].envenomTicks === 0) {
            mob[Slot].envenomTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].envenomTicks -= 1;
        if (petHp <= 0) {
            return;
        }
        petHp -= dotDamage;
        if (petName !== "") {
            Chat(("Envenom poisons " + petName + " for " + dotDamage + " damage."), 3);
        }
        g.drawMyHp();
        checkMyDeathByDot();
        return;
    }
    if (targetCharm === true) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((mob[charmSlot].poison) / 4) / 100));
        if (mob[Slot].envenomTicks === 0) {
            mob[Slot].envenomTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].envenomTicks -= 1;
        if (mob[charmSlot].hp <= 0) {
            return;
        }
        mob[charmSlot].hp -= dotDamage;
        if (mob[charmSlot].sleepStatus === true) {
            mob[charmSlot].sleepStatus = false;
            $("#sleepIcon" + charmSlot).remove();
        }
        if (petName !== "") {
            Chat(("Envenom poisons " + mob[charmSlot].name + " for " + dotDamage + " damage."), 3);
        }
        g.drawMyHp();
        checkMyDeathByDot();
        return;
    }
    if (targetCharm === false) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((mob[charmTGT].poison) / 4) / 100));
        if (mob[Slot].envenomTicks === 0) {
            mob[Slot].envenomTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].envenomTicks -= 1;
        if (mob[charmTGT].hp <= 0 || attackStatus !== 0) {
            return;
        }
        mob[charmTGT].hp -= dotDamage;
        if (mob[charmTGT].sleepStatus === true) {
            mob[charmTGT].sleepStatus = false;
            $("#sleepIcon" + Slot).remove();
        }
        Chat(("Envenom poisons " + mob[charmTGT].name + " for " + dotDamage + " damage."), 3);
        g.drawMyHp();
        g.checkForDeadMonsters();
        return;
    }
    var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((poisonTotal()) / 4) / 100));
    if (mob[Slot].envenomTicks === 0) {
        mob[Slot].dotActive.kill();
        return;
    }
    // report damage and adjust HP
    var tickMessage = 1;
    var mType = "Poison";
    magicalDotTick(dotDamage, Slot, 8, tickMessage, mType);
    mob[Slot].envenomTicks -= 1;
}

function monsterEnvenomDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneBoom");
    var monsterDamage = M.ceil((M.random() * (mob[Slot].intel / 9) + (mob[Slot].intel / 9) / 2 + mob[Slot].level / 2));
    if (targetPet === true) {
        mob[Slot].castingStatus = false;
        Chat((petName + " is wrought by venom."), 3);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].envenomTicks = 8;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterEnvenomTick(Slot, targetPet, targetCharm);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("green", 25, 40, Slot, charmSlot, targetPet);
        }
        return;
    }
    if (targetCharm === true) {
        mob[Slot].castingStatus = false;
        Chat((mob[charmSlot].name + " is wrought by venom."), 3);
        //icon
        var skillName = "Envenom";
        var buffId = "mobsEnvenomIcon" + charmSlot;
        var duration = 24000;
        mobsEnvenomTimer[charmSlot].kill();
        mobsEnvenomTimer[charmSlot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -256, charmSlot);
        var skillName = "Envenom";
        var buffId = "mobEnvenomIcon";
        var duration = 2400;
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].envenomTicks = 8;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterEnvenomTick(Slot, targetPet, targetCharm);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("green", 25, 40, Slot, targetCharm);
        }
        return;
    }
    if (targetCharm === false) {
        mob[Slot].castingStatus = false;
        if (TGT === charmSlot) {
            return;
        }
        Chat((mob[TGT].name + " is wrought by venom."), 3);
        var skillName = "Envenom";
        var buffId = "mobsEnvenomIcon" + TGT;
        var duration = 24000;
        mobsEnvenomTimer[TGT].kill();
        mobsEnvenomTimer[TGT] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -256, TGT);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].envenomTicks = 8;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            var charmTGT = TGT;
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterEnvenomTick(Slot, targetPet, targetCharm, charmTGT);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("green", 25, 40, Slot, charmTGT);
        }
        return;
    }
    //class skills affecting damage
    if (monsterDamage <= 0) {
        monsterDamage = 1;
    }
    Chat(("You are wrought by venom."), 3);
    flashScreen("#6b8e23", .4, 1);
    mob[Slot].castingStatus = false;
    if (mobsFound() === true) {
        mob[Slot].mp -= 4;
        mob[Slot].envenomTicks = 8;
        mob[Slot].dotDamage = monsterDamage;
        if (mob[Slot].name === "Falzitherin") {
            mob[Slot].envenomTicks *= 3;
            mob[Slot].dotDamage *= 2;
        }
        if (mob[Slot].name === "a slavering corpse" ||
            mob[Slot].name === "an embalmed vagrant" ||
            mob[Slot].name === "an infected rodent") {
            mob[Slot].envenomTicks *= 4;
        }
        mob[Slot].dotActive.kill();
        mob[Slot].dotActive = T.to('', 3, {
            repeat: -1,
            onRepeat: function() {
                monsterEnvenomTick(Slot, targetPet, targetCharm);
            }
        });
        var duration = mob[Slot].envenomTicks * 3000;
        mobEnvenomTimer[Slot].kill();
        mobEnvenomTimer[Slot] = T.delayedCall(duration / 1000, function() {
            removeIcon("mobEnvenomIcon" + Slot);
        });
        mobBuffIcon("Envenom", "mobEnvenomIcon" + Slot, duration, -256);
    }
    var spell = "Envenom";
    mobDotLands(monsterDamage, Slot, spell);
    if (mob[Slot].name === "Falzitherin") {
        function doit(count) {
            castProjectile("green", 320, Slot, undefined, undefined, undefined, 1);
            if (count < 20) {
                T.delayedCall(.01, function() {
                    doit(++count);
                });
            }
        }
        doit(0);
    } else {
        mobDotFinish("green", 25, 40, Slot);
    }
}

function monsterEnvenom(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastDot", 0, 0, .5);
    // start cast time
    mob[Slot].castingStatus = true;
    mobCastDot("green", 25, Slot);
    mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
        monsterEnvenomDone(Slot, targetPet, targetCharm);
    });
    mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
}

function monsterEngulfingDarknessTick(Slot, targetPet, targetCharm, charmTGT) {
    if (my.hp <= 0) {
        mob[Slot].engulfingDarknessTicks = 0;
        return;
    }
    if (targetPet === true && petHp <= 0) {
        mob[Slot].engulfingDarknessTicks = 0;
        return;
    }
    if (targetCharm === true && mob[charmSlot].hp <= 0) {
        mob[charmSlot].engulfingDarknessTicks = 0;
        return;
    }
    if (targetCharm === false && mob[charmTGT].hp <= 0) {
        mob[charmTGT].engulfingDarknessTicks = 0;
        return;
    }
    if (targetPet === true) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((petMagic) / 4) / 100));
        if (mob[Slot].engulfingDarknessTicks === 0) {
            mob[Slot].engulfingDarknessTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].engulfingDarknessTicks -= 1;
        if (petHp <= 0) {
            return;
        }
        petHp -= dotDamage;
        if (petName !== "") {
            Chat(("Engulfing Darkness strangles " + petName + " for " + dotDamage + " damage."), 3);
        }
        g.drawMyHp();
        checkMyDeathByDot();
        return;
    }
    if (targetCharm === true) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((mob[charmSlot].magic) / 4) / 100));
        if (mob[Slot].engulfingDarknessTicks === 0) {
            mob[Slot].engulfingDarknessTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].engulfingDarknessTicks -= 1;
        if (mob[charmSlot].hp <= 0) {
            return;
        }
        mob[charmSlot].hp -= dotDamage;
        if (mob[charmSlot].sleepStatus === true) {
            mob[charmSlot].sleepStatus = false;
            $("#sleepIcon" + charmSlot).remove();
        }
        if (petName !== "") {
            Chat(("Engulfing Darkness strangles " + mob[charmSlot].name + " for " + dotDamage + " damage."), 3);
        }
        g.drawMyHp();
        checkMyDeathByDot();
        return;
    }
    if (targetCharm === false) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((mob[charmTGT].magic) / 4) / 100));
        if (mob[Slot].engulfingDarknessTicks === 0) {
            mob[Slot].engulfingDarknessTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].engulfingDarknessTicks -= 1;
        if (mob[charmTGT].hp <= 0) {
            return;
        }
        mob[charmTGT].hp -= dotDamage;
        if (mob[charmTGT].sleepStatus === true) {
            mob[charmTGT].sleepStatus = false;
            $("#sleepIcon" + Slot).remove();
        }
        Chat(("Engulfing Darkness strangles " + mob[charmTGT].name + " for " + dotDamage + " damage."), 3);
        g.drawMyHp();
        g.checkForDeadMonsters();
        return;
    }
    var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((magicTotal()) / 4) / 100));
    if (mob[Slot].engulfingDarknessTicks === 0) {
        mob[Slot].dotActive.kill();
        return;
    }
    magicalDotTick(dotDamage, Slot, 6, 2, "Magic");
    mob[Slot].engulfingDarknessTicks -= 1;
}

function monsterEngulfingDarknessDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneHeal");
    var monsterDamage = M.ceil((M.random() * (mob[Slot].intel / 12) + (mob[Slot].intel / 12) / 2 + mob[Slot].level / 1.5));
    if (targetPet === true) {
        Chat((petName + " is engulfed in darkness."), 3);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].castingStatus = false;
            mob[Slot].engulfingDarknessTicks = 6;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterEngulfingDarknessTick(Slot, targetPet, targetCharm);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("purple", 25, 40, Slot, charmSlot, targetPet);
        }
        return;
    }
    if (targetCharm === true) {
        Chat((mob[charmSlot].name + " is engulfed in darkness."), 3);
        //icon
        var skillName = "Engulfing Darkness";
        var buffId = "mobsEngulfingDarknessIcon" + charmSlot;
        var duration = 18000;
        mobsEngulfingDarknessTimer[charmSlot].kill();
        mobsEngulfingDarknessTimer[charmSlot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -288, charmSlot);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].castingStatus = false;
            mob[Slot].engulfingDarknessTicks = 6;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterEngulfingDarknessTick(Slot, targetPet, targetCharm);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("purple", 25, 40, Slot, targetCharm);
        }
        return;
    }
    if (targetCharm === false) {
        mob[Slot].castingStatus = false;
        if (TGT === charmSlot) {
            return;
        }
        Chat((mob[TGT].name + " is engulfed in darkness."), 3);
        var skillName = "Engulfing Darkness";
        var buffId = "mobsEngulfingDarknessIcon" + TGT;
        var duration = 18000;
        mobsEngulfingDarknessTimer[TGT].kill();
        mobsEngulfingDarknessTimer[TGT] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -288, TGT);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].engulfingDarknessTicks = 6;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            var charmTGT = TGT;
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterEngulfingDarknessTick(Slot, targetPet, targetCharm, charmTGT);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("purple", 25, 40, Slot, charmTGT);
        }
        return;
    }
    //class skills affecting damage
    if (monsterDamage <= 0) {
        monsterDamage = 1;
    }
    // report damage and adjust HP
    Chat(("You are engulfed in darkness."), 3);
    flashScreen("#c71585", .4, 1);
    mobDotFinish("purple", 25, 40, Slot);
    if (mobsFound() === true) {
        mob[Slot].mp -= 4;
        mob[Slot].castingStatus = false;
        mob[Slot].engulfingDarknessTicks = 6;
        mob[Slot].dotDamage = monsterDamage;
        mob[Slot].dotActive.kill();
        mob[Slot].dotActive = T.to('', 3, {
            repeat: -1,
            onRepeat: function() {
                monsterEngulfingDarknessTick(Slot, targetPet, targetCharm);
            }
        });
        if (mob[Slot].name === "Sanctum Guardian Ghalentus") {
            mob[Slot].engulfingDarknessTicks *= 3;
            mob[Slot].dotDamage *= 2;
        }
        if (mob[Slot].name === "Revenant Viston") {
            mob[Slot].engulfingDarknessTicks *= 2;
        }
        var duration = mob[Slot].engulfingDarknessTicks * 3000;
        mobEngulfingDarknessTimer[Slot].kill();
        mobEngulfingDarknessTimer[Slot] = T.delayedCall(duration / 1000, function() {
            removeIcon("mobEngulfingDarknessIcon" + Slot);
        });
        mobBuffIcon("Engulfing Darkness", "mobEngulfingDarknessIcon" + Slot, duration, -288);
    }
    mobDotLands(monsterDamage, Slot, "Engulfing Darkness");
}

function monsterEngulfingDarkness(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastDot", 0, 0, .5);
    // start cast time
    mob[Slot].castingStatus = true;
    mobCastDot("magenta", 25, Slot);
    mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
        monsterEngulfingDarknessDone(Slot, targetPet, targetCharm);
    });
    mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
}

function monsterStaticFieldResume2() {
    petParalyzeStatus = false;
}

function monsterStaticFieldTick(Slot, targetPet, targetCharm, charmTGT) {
    if (my.hp <= 0) {
        mob[Slot].staticFieldTicks = 0;
        return;
    }
    if (targetPet === true && petHp <= 0) {
        mob[Slot].staticFieldTicks = 0;
        return;
    }
    if (targetCharm === true && mob[charmSlot].hp <= 0) {
        mob[charmSlot].staticFieldTicks = 0;
        return;
    }
    if (targetCharm === false && mob[charmTGT].hp <= 0) {
        mob[charmTGT].staticFieldTicks = 0;
        return;
    }
    if (targetPet === true) {
        if (mob[Slot].staticFieldTicks === 0) {
            mob[Slot].staticFieldTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        var monsterDamage = M.ceil(petHp * .03);
        var dotDamage = M.ceil(monsterDamage * (1 - ((petLightning) / 4) / 100));
        mob[Slot].staticFieldTicks -= 1;
        if (petHp <= 0) {
            return;
        }
        petHp -= dotDamage;
        if (petName !== "") {
            Chat(("Static Field electrocutes " + petName + " for " + dotDamage + " damage."), 3);
        }
        g.drawMyHp();
        checkMyDeathByDot();
        return;
    }
    if (targetCharm === true) {
        if (mob[Slot].staticFieldTicks === 0) {
            mob[Slot].staticFieldTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        monsterDamage = M.ceil(mob[charmSlot].hp * .03);
        var dotDamage = M.ceil(monsterDamage * (1 - ((mob[charmSlot].lightning) / 4) / 100));
        if (mob[charmSlot].sleepStatus === true) {
            mob[charmSlot].sleepStatus = false;
            $("#sleepIcon" + charmSlot).remove();
        }
        mob[Slot].staticFieldTicks -= 1;
        if (mob[charmSlot].hp <= 0) {
            return;
        }
        mob[charmSlot].hp -= dotDamage;
        if (petName !== "") {
            Chat(("Static Field electrocutes " + mob[charmSlot].name + " for " + dotDamage + " damage."), 3);
        }
        if (M.random() > .85) {
            var silenceDuration = 5000;
            if (mob[charmSlot].dauntless) {
                silenceDuration *= dauntlessReduction();
            }
            silenceTarget(charmSlot, silenceDuration, -768);
        }
        g.drawMyHp();
        g.checkForDeadMonsters();
        return;
    }
    if (targetCharm === false) {
        monsterDamage = M.ceil(mob[charmSlot].hp * .03);
        var dotDamage = M.ceil(monsterDamage * (1 - ((mob[charmSlot].lightning) / 4) / 100));
        if (mob[Slot].staticFieldTicks === 0) {
            mob[Slot].staticFieldTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].staticFieldTicks -= 1;
        if (mob[charmTGT].hp <= 0) {
            return;
        }
        mob[charmTGT].hp -= dotDamage;
        if (mob[charmTGT].sleepStatus === true) {
            mob[charmTGT].sleepStatus = false;
            $("#sleepIcon" + charmTGT).remove();
        }
        Chat(("Static Field electrocutes " + mob[charmTGT].name + " for " + dotDamage + " damage."), 3);
        if (M.random() > .85) {
            var silenceDuration = 5000;
            if (mob[charmTGT].dauntless) {
                silenceDuration *= dauntlessReduction();
            }
            silenceTarget(charmTGT, silenceDuration, -768);
        }
        g.drawMyHp();
        g.checkForDeadMonsters();
        return;
    }
    var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((lightningTotal()) / 4) / 100));
    if (mob[Slot].staticFieldTicks === 0) {
        mob[Slot].dotActive.kill();
        return;
    }
    if (dotDamage <= 0) {
        dotDamage = 1;
    }
    // report damage and adjust HP
    var tickMessage = 3;
    magicalDotTick(dotDamage, Slot, 6, tickMessage, "Lightning");
    mob[Slot].staticFieldTicks -= 1;
}

function monsterStaticFieldDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellCastEvoke2");
    var monsterDamage = M.ceil(my.hp * .04);
    if (targetPet === true) {
        Chat(("A Static Field surrounds " + petName + "."), 3);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].castingStatus = false;
            mob[Slot].staticFieldTicks = 6;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterStaticFieldTick(Slot, targetPet, targetCharm);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("yellow", 25, 40, Slot, charmSlot, targetPet);
        }
        return;
    }
    if (targetCharm === true) {
        Chat(("A Static Field surrounds " + mob[charmSlot].name + "."), 3);
        //icon
        var skillName = "Static Field";
        var buffId = "mobsStaticFieldIcon" + charmSlot;
        var duration = 18000;
        mobsStaticFieldTimer[charmSlot].kill();
        mobsStaticFieldTimer[charmSlot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -320, charmSlot);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].castingStatus = false;
            mob[Slot].staticFieldTicks = 6;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterStaticFieldTick(Slot, targetPet, targetCharm);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("yellow", 25, 40, Slot, targetCharm);
        }
        return;
    }
    if (targetCharm === false) {
        mob[Slot].castingStatus = false;
        if (TGT === charmSlot) {
            return;
        }
        Chat(("A Static Field surrounds " + mob[TGT].name + "."), 3);
        var skillName = "Static Field";
        var buffId = "mobsStaticFieldIcon" + TGT;
        var duration = 18000;
        mobsStaticFieldTimer[TGT].kill();
        mobsStaticFieldTimer[TGT] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -320, TGT);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].staticFieldTicks = 6;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            var charmTGT = TGT;
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterStaticFieldTick(Slot, targetPet, targetCharm, charmTGT);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("yellow", 25, 40, Slot, charmTGT);
        }
        return;
    }
    Chat(("A Static Field surrounds you."), 3);
    flashScreen("#daa520", .4, 1);
    mobDotFinish("yellow", 25, 40, Slot);
    if (mobsFound() === true) {
        mob[Slot].mp -= 4;
        mob[Slot].castingStatus = false;
        mob[Slot].staticFieldTicks = 6;
        mob[Slot].dotDamage = monsterDamage;
        if (mob[Slot].name === "Revenant Viston") {
            mob[Slot].staticFieldTicks *= 3;
            mob[Slot].dotDamage = ~~(mob[Slot].dotDamage * 2);
        }
        if (mob[Slot].name === "Sanctum Guardian Ghalentus") {
            mob[Slot].staticFieldTicks *= 2;
        }
        mob[Slot].dotActive.kill();
        mob[Slot].dotActive = T.to('', 3, {
            repeat: -1,
            onRepeat: function() {
                monsterStaticFieldTick(Slot, targetPet, targetCharm);
            }
        });
        var duration = mob[Slot].staticFieldTicks * 3000;
        mobStaticFieldTimer[Slot].kill();
        mobStaticFieldTimer[Slot] = T.delayedCall(duration / 1000, function() {
            removeIcon("mobStaticFieldIcon" + Slot);
        });
        mobBuffIcon("Static Field", "mobStaticFieldIcon" + Slot, duration, -320);
    }
    mobDotLands(monsterDamage, Slot, "Static Field");
}

function monsterStaticField(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastEvoke2", 0, 0, .5);
    // start cast time
    mob[Slot].castingStatus = true;
    mobCastDot("yellow", 25, Slot);
    mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
        monsterStaticFieldDone(Slot, targetPet, targetCharm);
    });
    mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
}

function monsterBlizzardTick(Slot, targetPet, targetCharm, charmTGT) {
    if (my.hp <= 0) {
        mob[Slot].blizzardTicks = 0;
        return;
    }
    if (targetPet === true && petHp <= 0) {
        mob[Slot].blizzardTicks = 0;
        return;
    }
    if (targetCharm === true && mob[charmSlot].hp <= 0) {
        mob[charmSlot].blizzardTicks = 0;
        return;
    }
    if (targetCharm === false && mob[charmTGT].hp <= 0) {
        mob[charmTGT].blizzardTicks = 0;
        return;
    }
    if (targetPet === true) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((petCold) / 4) / 100));
        if (mob[Slot].blizzardTicks === 0) {
            mob[Slot].blizzardTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].blizzardTicks -= 1;
        if (petHp <= 0) {
            return;
        }
        petHp -= dotDamage;
        if (petName !== "") {
            Chat(("Blizzard storms down on " + petName + " for " + dotDamage + " damage."), 3);
        }
        g.drawMyHp();
        checkMyDeathByDot();
        return;
    }
    if (targetCharm === true) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((mob[charmSlot].cold) / 4) / 100));
        if (mob[Slot].blizzardTicks === 0) {
            mob[Slot].blizzardTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].blizzardTicks -= 1;
        if (mob[charmSlot].hp <= 0) {
            return;
        }
        mob[charmSlot].hp -= dotDamage;
        if (mob[charmSlot].sleepStatus === true) {
            mob[charmSlot].sleepStatus = false;
            $("#sleepIcon" + charmSlot).remove();
        }
        if (petName !== "") {
            Chat(("Blizzard storms down on " + mob[charmSlot].name + " for " + dotDamage + " damage."), 3);
        }
        g.drawMyHp();
        checkMyDeathByDot();
        return;
    }
    if (targetCharm === false) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((mob[charmTGT].cold) / 4) / 100));
        if (mob[Slot].blizzardTicks === 0) {
            mob[Slot].blizzardTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].blizzardTicks -= 1;
        if (mob[charmTGT].hp <= 0) {
            return;
        }
        mob[charmTGT].hp -= dotDamage;
        if (mob[charmTGT].sleepStatus === true) {
            mob[charmTGT].sleepStatus = false;
            $("#sleepIcon" + Slot).remove();
        }
        Chat(("Blizzard storms down on " + mob[charmTGT].name + " for " + dotDamage + " damage."), 3);
        g.drawMyHp();
        g.checkForDeadMonsters();
        return;
    }
    var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((coldTotal()) / 4) / 100));
    if (mob[Slot].blizzardTicks === 0) {
        mob[Slot].dotActive.kill();
        return;
    }
    var tickMessage = 4;
    magicalDotTick(dotDamage, Slot, 4, tickMessage, "Cold");
    mob[Slot].blizzardTicks -= 1;
}

function monsterBlizzardDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneHeal");
    var monsterDamage = M.ceil((M.random() * (mob[Slot].intel / 16) + (mob[Slot].intel / 16) / 2 + mob[Slot].level / 1.3));
    if (targetPet === true) {
        Chat((mob[Slot].name + " casts Blizzard on " + petName + "."), 3);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].castingStatus = false;
            mob[Slot].blizzardTicks = 4;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterBlizzardTick(Slot, targetPet, targetCharm);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("teal", 25, 40, Slot, charmSlot, targetPet);
        }
        return;
    }
    if (targetCharm === true) {
        Chat((mob[Slot].name + " casts Blizzard on " + mob[charmSlot].name + "."), 3);
        //icon
        var skillName = "Blizzard";
        var buffId = "mobsBlizzardIcon" + charmSlot;
        var duration = 12000;
        mobsBlizzardTimer[charmSlot].kill();
        mobsBlizzardTimer[charmSlot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -352, charmSlot);
        mob[charmSlot].coldTimer.kill();
        mob[charmSlot].snareStatus = true;
        mob[charmSlot].coldTimer = T.delayedCall(12, function() {
            snareTimeout(charmSlot)
        });
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].castingStatus = false;
            mob[Slot].blizzardTicks = 4;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterBlizzardTick(Slot, targetPet, targetCharm);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("teal", 25, 40, Slot, targetCharm);
        }
        return;
    }
    if (targetCharm === false) {
        mob[Slot].castingStatus = false;
        if (TGT === charmSlot) {
            return;
        }
        Chat((mob[charmSlot].name + " casts Blizzard on " + mob[TGT].name + "."), 3);
        var skillName = "Blizzard";
        var buffId = "mobsBlizzardIcon" + TGT;
        var duration = 12000;
        mobsBlizzardTimer[TGT].kill();
        mobsBlizzardTimer[TGT] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -352, TGT);
        mob[TGT].coldTimer.kill();
        mob[TGT].snareStatus = true;
        mob[TGT].coldTimer = T.delayedCall(12, function() {
            snareTimeout(TGT)
        });
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].blizzardTicks = 4;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            var charmTGT = TGT;
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterBlizzardTick(Slot, targetPet, targetCharm, charmTGT);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("teal", 25, 40, Slot, charmTGT);
        }
        return;
    }
    Chat((mob[Slot].name + " casts Blizzard on you."), 3);
    flashScreen("#6495ed", .4, 1);
    chillStatus = true;
    chilledTimer.kill();
    chilledTimer = T.delayedCall(12, mobChillExpire);
    if (mobsFound() === true) {
        mob[Slot].mp -= 4;
        mob[Slot].castingStatus = false;
        mob[Slot].blizzardTicks = 4;
        mob[Slot].dotDamage = monsterDamage;
        if (mob[Slot].name === "Matron Maelentia") {
            mob[Slot].blizzardTicks *= 3;
            mob[Slot].dotDamage *= 2;
        }
        mob[Slot].dotActive.kill();
        mob[Slot].dotActive = T.to('', 3, {
            repeat: -1,
            onRepeat: function() {
                monsterBlizzardTick(Slot, targetPet, targetCharm);
            }
        });
        var buffId = "mobBlizzardIcon" + Slot;
        var duration = 3000 * mob[Slot].blizzardTicks;
        mobBlizzardTimer[Slot].kill();
        mobBlizzardTimer[Slot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobBuffIcon("Blizzard", buffId, duration, -352);
    }
    var spell = "Blizzard";
    mobDotLands(monsterDamage, Slot, spell);
    CStat();
    if (mob[Slot].name === "Matron Maelentia") {
        function doit(count) {
            castProjectile("blue", 320, Slot, undefined, undefined, undefined, 1);
            if (count < 20) {
                T.delayedCall(.01, function() {
                    doit(++count);
                });
            }
        }
        doit(0);
    } else {
        mobDotFinish("teal", 25, 40, Slot);
    }

}

function monsterBlizzard(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastDot", 0, 0, .5);
    // start cast time
    mob[Slot].castingStatus = true;
    mobCastDot("teal", 25, Slot);
    mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
        monsterBlizzardDone(Slot, targetPet, targetCharm);
    });
    mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
}

function monsterConflagrationTick(Slot, targetPet, targetCharm, charmTGT) {
    if (my.hp <= 0) {
        mob[Slot].conflagrationTicks = 0;
        CStat();
        return;
    }
    if (targetPet === true && petHp <= 0) {
        mob[Slot].conflagrationTicks = 0;
        return;
    }
    if (targetCharm === true && mob[charmSlot].hp <= 0) {
        mob[charmSlot].conflagrationTicks = 0;
        return;
    }
    if (targetCharm === false && mob[charmTGT].hp <= 0) {
        mob[charmTGT].conflagrationTicks = 0;
        return;
    }
    if (targetPet === true) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((petFire) / 4) / 100));
        if (mob[Slot].conflagrationTicks === 0) {
            mob[Slot].conflagrationTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].conflagrationTicks -= 1;
        if (petHp <= 0) {
            return;
        }
        petHp -= dotDamage;
        if (petName !== "") {
            Chat(("Conflagration scorches " + petName + " for " + dotDamage + " damage."), 3);
        }
        g.drawMyHp();
        checkMyDeathByDot();
        return;
    }
    if (targetCharm === true) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((mob[charmSlot].fire) / 4) / 100));
        if (mob[Slot].conflagrationTicks === 0) {
            mob[Slot].conflagrationTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].conflagrationTicks -= 1;
        if (mob[charmSlot].hp <= 0) {
            return;
        }
        mob[charmSlot].hp -= dotDamage;
        if (mob[charmSlot].sleepStatus === true) {
            mob[charmSlot].sleepStatus = false;
            $("#sleepIcon" + charmSlot).remove();
        }
        if (petName !== "") {
            Chat(("Conflagration scorches " + mob[charmSlot].name + " for " + dotDamage + " damage."), 3);
        }
        g.drawMyHp();
        checkMyDeathByDot();
        return;
    }
    if (targetCharm === false) {
        var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((mob[charmTGT].fire) / 4) / 100));
        if (mob[Slot].conflagrationTicks === 0) {
            mob[Slot].conflagrationTicks = 0;
            mob[Slot].dotActive.kill();
            mob[Slot].petDot = false;
            return;
        }
        mob[Slot].conflagrationTicks -= 1;
        if (mob[charmTGT].hp <= 0) {
            return;
        }
        mob[charmTGT].hp -= dotDamage;
        if (mob[charmTGT].sleepStatus === true) {
            mob[charmTGT].sleepStatus = false;
            $("#sleepIcon" + Slot).remove();
        }
        Chat(("Conflagration scorches " + mob[charmTGT].name + " for " + dotDamage + " damage."), 3);
        g.drawMyHp();
        g.checkForDeadMonsters();
        return;
    }
    var dotDamage = M.ceil(mob[Slot].dotDamage * (1 - ((fireTotal()) / 4) / 100));
    if (mob[Slot].conflagrationTicks === 0) {
        mob[Slot].dotActive.kill();
        return;
    }
    // report damage and adjust HP
    var tickMessage = 5;
    var mType = "Fire";
    magicalDotTick(dotDamage, Slot, 7, tickMessage, mType);
    mob[Slot].conflagrationTicks -= 1;
}

function monsterConflagrationDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneFlames");
    var monsterDamage = M.ceil((M.random() * (mob[Slot].intel / 12) + (mob[Slot].intel / 12) / 2 + mob[Slot].level / 1.8));
    if (targetPet === true) {
        Chat((mob[Slot].name + " casts Conflagration on " + petName + "."), 3);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].castingStatus = false;
            mob[Slot].conflagrationTicks = 7;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterConflagrationTick(Slot, targetPet, targetCharm);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("red", 25, 40, Slot, charmSlot, targetPet);
        }
        return;
    }
    if (targetCharm === true) {
        Chat((mob[Slot].name + " casts Conflagration on " + mob[charmSlot].name + "."), 3);
        //icon
        var skillName = "Conflagration";
        var buffId = "mobsConflagrationIcon" + charmSlot;
        var duration = 21000;
        mobsConflagrationTimer[charmSlot].kill();
        mobsConflagrationTimer[charmSlot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -384, charmSlot);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].castingStatus = false;
            mob[Slot].conflagrationTicks = 7;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterConflagrationTick(Slot, targetPet, targetCharm);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("red", 25, 40, Slot, targetCharm);
        }
        return;
    }
    if (targetCharm === false) {
        mob[Slot].castingStatus = false;
        if (TGT === charmSlot) {
            return;
        }
        Chat((mob[charmSlot].name + " casts Conflagration on " + mob[TGT].name + "."), 3);
        var skillName = "Conflagration";
        var buffId = "mobsConflagrationIcon" + TGT;
        var duration = 21000;
        mobsConflagrationTimer[TGT].kill();
        mobsConflagrationTimer[TGT] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -384, TGT);
        if (mobsFound() === true) {
            mob[Slot].mp -= 4;
            mob[Slot].conflagrationTicks = 7;
            mob[Slot].dotDamage = monsterDamage;
            mob[Slot].dotActive.kill();
            var charmTGT = TGT;
            mob[Slot].dotActive = T.to('', 3, {
                repeat: -1,
                onRepeat: function() {
                    monsterConflagrationTick(Slot, targetPet, targetCharm, charmTGT);
                }
            });
            mob[Slot].petDot = true;
            mobDotFinish("red", 25, 40, Slot, charmTGT);
        }
        return;
    }
    if (monsterDamage <= 0) {
        monsterDamage = 1;
    }
    Chat((mob[Slot].name + " casts Conflagration on you."), 3);
    flashScreen("#b22222", .4, 1);
    if (mobsFound() === true) {
        mob[Slot].mp -= 4;
        mob[Slot].castingStatus = false;
        mob[Slot].conflagrationTicks = 7;
        mob[Slot].dotDamage = monsterDamage;
        if (mob[Slot].name === "Highlord Szarthax") {
            mob[Slot].conflagrationTicks *= 3;
            mob[Slot].dotDamage *= 2;
        }
        mob[Slot].dotActive.kill();
        mob[Slot].dotActive = T.to('', 3, {
            repeat: -1,
            onRepeat: function() {
                monsterConflagrationTick(Slot, targetPet, targetCharm);
            }
        });
        var buffId = "mobConflagrationIcon" + Slot;
        var duration = mob[Slot].conflagrationTicks * 3000;
        mobConflagrationTimer[Slot].kill();
        mobConflagrationTimer[Slot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobBuffIcon("Conflagration", buffId, duration, -384);
    }
    CStat();
    mobDotLands(monsterDamage, Slot, "Conflagration");
    if (mob[Slot].name === "Highlord Szarthax") {
        function doit(count) {
            castProjectile("red", 320, Slot, undefined, undefined, undefined, 1);
            if (count < 20) {
                T.delayedCall(.01, function() {
                    doit(++count);
                });
            }
        }
        doit(0);
    } else {
        mobDotFinish("red", 25, 40, Slot);
    }
}

function monsterConflagration(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastDot", 0, 0, .5);
    // start cast time
    mob[Slot].castingStatus = true;
    mobCastDot("orange", 25, Slot);
    mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
        monsterConflagrationDone(Slot, targetPet, targetCharm);
    });
    mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
}

function monsterFearResume() {
    fearStatus = 1;
    if (my.job === "Warrior") {
        checkIntrepidMight();
    }
    if (my.job === "Rogue") {
        ancientWillStatus = false;
    }
    g.drawMyMp();
}

function monsterFearResume2() {
    petFearStatus = false;
}

function monsterFearDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellCastEvoke2");
    var fearDuration = 12000 - (((magicTotal()) * 50) * (M.random() * (2) + 1));
    if (fearDuration >= 12000) {
        fearDuration = 12000;
    }
    if (fearDuration < 1000) {
        fearDuration = 1000;
    }
    fearDuration = (fearDuration * ((100 - g.fearEquip) / 100));
    if (mob[Slot].rare !== 3) {
        mob[Slot].mp -= 8;
    } else {
        mob[Slot].mp -= 2;
    }
    mob[Slot].castingStatus = false;
    if (targetPet === true) {
        if (myStatusResist(Slot) === true) {
            Chat((petName + " resisted Fear."), 1);
            return;
        }
        Chat((petName + " is consumed by fear."), 3);
        petFearStatus = true;
        $("#fearIcon5").remove();
        mob[Slot].fearAnimate.kill();
        $NG.mob5.stop(true, false);
        monsterFearCooldown2.kill();
        monsterFearCooldown2 = T.delayedCall(fearDuration / 1000, function() {
            monsterFearResume2();
        });
        animateFear(5, fearDuration, true, .8, true, true);
        return;
    }
    if (targetCharm === true) {
        if (myStatusResist(Slot) === true) {
            Chat((mob[charmSlot].name + " resisted Fear."), 1);
            return;
        }
        fearTarget(charmSlot, fearDuration, 0, mob[charmSlot].name + " is consumed by fear.");
        return;
    }
    if (targetCharm === false) {
        if (TGT === charmSlot) {
            return;
        }
        if (M.random() > .95) {
            Chat((mob[TGT].name + " resisted Fear."), 1);
            return;
        }
        fearTarget(TGT, fearDuration, 0, mob[TGT].name + " is consumed by fear.");
        return;
    }
    if (absorbSpellStatus === 0) {
        absorbSpellStatus = 1;
        $("#absorbSpellIcon,#spellAbsorbImage").remove();
        Chat(("You absorb Fear."), 3);
        return;
    }
    //compare resist odds and report
    if (myStatusResist(Slot) === true || (my.job === "Monk" && my.talent12 >= 20) || (my.job === "Necromancer" && my.talent4 >= 20)) {
        Chat(("You resisted Fear."), 1);
        return;
    }
    if (invincibleStatus === true) {
        Chat("Fear has no effect on you.", 1);
        return;
    }
    Chat(("You are consumed by fear."), 3);
    flashScreen("#4b0082", .5, 3);
    var skillName = "Fear";
    var buffId = "mobFearIcon";
    mobFearTimer.kill();
    mobFearTimer = T.delayedCall(fearDuration / 1000, function() {
        removeIcon(buffId);
    });
    mobBuffIcon(skillName, buffId, fearDuration, -32);
    ancientWillStatus = true;
    fearStatus = 0;
    checkIntrepidMight();
    globalCooldownEnd2();
    beginLockout(fearDuration);
    tlSpellbar.kill();
    NG.spellbardiv.style.display = "none";
    castingSpell = 1;
    castingGlobal = 1;
    if (my.job === "Warrior") {
        g.checkWarriorSkills();
    }
    monsterFearCooldown.kill();
    monsterFearCooldown = T.delayedCall(fearDuration / 1000, function() {
        monsterFearResume();
    });
    if (my.job === "Shaman") {
        if (my.talent5 >= 20) {
            g.glacialImpactFinish(Slot, true)
        }
    }

}

function monsterFear(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 8) {
        monsterMpLow(Slot);
        return;
    }
    Chat((mob[Slot].name + " begins to cast a spell"), 3);
    playAudio("spellDoneFlames", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("purple", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterFearDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function monsterBlindResume() {
    T.set(NG.spellblind, {
        opacity: 1,
        background: 'transparent'
    });
    g.blindStatus = 1;
    petBlindStatus = false;
}

function monsterBlindResume2() {
    petBlindStatus = false;
}

function monsterBlindDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneHeal");
    //resist calculations
    var blindDuration = 15000 - (15000 * M.random() * (1 - (magicTotal() / 400)));
    if (blindDuration < 3000) {
        blindDuration = 3000;
    }
    mob[Slot].mp -= 4;
    mob[Slot].castingStatus = false;
    if (targetPet === true) {
        if (myStatusResist(Slot) === true) {
            Chat((petName + " resisted Globe of Darkness."), 1);
            return;
        }
        Chat((petName + " is shrouded in a Globe of Darkness."), 3);
        petBlindStatus = true;
        monsterBlindCooldown2.kill();
        monsterBlindCooldown2 = T.delayedCall(blindDuration / 1000, monsterBlindResume2);
        return;
    }
    if (targetCharm === true) {
        if (myStatusResist(Slot) === true) {
            Chat((mob[charmSlot].name + " resisted Globe of Darkness."), 1);
            return;
        }
        Chat((mob[charmSlot].name + " is shrouded in a Globe of Darkness."), 3);
        //icon
        var skillName = "Globe of Darkness";
        var buffId = "mobGlobeOfDarknessIcon" + charmSlot;
        var duration = blindDuration;
        mobGlobeOfDarknessTimers[charmSlot].kill();
        mobGlobeOfDarknessTimers[charmSlot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -64, charmSlot);
        mob[charmSlot].dazeStatus = true;
        var charmFlag = true;
        mob[charmSlot].dazeTimer.kill();
        mob[charmSlot].dazeTimer = T.delayedCall(blindDuration / 1000, function() {
            flashOfLightExpire(charmSlot, charmFlag)
        });
        return;
    }
    if (targetCharm === false) {
        if (TGT === charmSlot) {
            return;
        }
        if (M.random() > .95) {
            Chat((mob[TGT].name + " resisted Globe of Darkness."), 1);
            return;
        }
        Chat((mob[TGT].name + " is shrouded in a Globe of Darkness."), 3);
        //icon
        var skillName = "Globe of Darkness";
        var buffId = "mobGlobeOfDarknessIcon" + TGT;
        var duration = blindDuration;
        mobGlobeOfDarknessTimers[TGT].kill();
        mobGlobeOfDarknessTimers[TGT] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -64, TGT);
        mob[TGT].dazeStatus = true;
        var charmFlag = true;
        mob[TGT].dazeTimer.kill();
        mob[TGT].dazeTimer = T.delayedCall(blindDuration / 1000, function() {
            flashOfLightExpire(TGT, charmFlag)
        });
        return;
    }
    if (absorbSpellStatus === 0) {
        absorbSpellStatus = 1;
        $("#absorbSpellIcon,#spellAbsorbImage").remove();
        Chat(("You absorb Globe of Darkness."), 3);
        return;
    }
    if (myStatusResist(Slot) === true) {
        Chat(("You resisted Globe of Darkness."), 1);
        return;
    }
    if (invincibleStatus === true) {
        Chat("Globe of Darkness has no effect on you.", 1);
        return;
    }
    $NG.spellblind.stop(true, true).css({
        "background": "#000",
        opacity: .6
    });
    Chat(("You are shrouded in a Globe of Darkness."), 3);
    var skillName = "Globe of Darkness";
    var buffId = "mobGlobeOfDarknessIcon";
    var duration = blindDuration;
    mobGlobeOfDarknessTimer.kill();
    mobGlobeOfDarknessTimer = T.delayedCall(duration / 1000, function() {
        removeIcon(buffId);
    });
    mobBuffIcon(skillName, buffId, duration, -64);
    g.blindStatus = 0;
    monsterBlindCooldown.kill();
    monsterBlindCooldown = T.delayedCall(blindDuration / 1000, monsterBlindResume);
}

function flashOfLightExpire(Slot, charmFlag) {
    if (charmFlag) {
        mob[charmSlot].dazeStatus = false;
        return;
    }
    mob[Slot].dazeStatus = false;
}

function monsterBlind(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    Chat((mob[Slot].name + " begins to cast a spell"), 3);
    playAudio("spellCastDot", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("black", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterBlindDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function monsterRootResume() {
    rootStatus = 1;
    if (my.job === "Warrior") {
        checkIntrepidMight();
        g.checkWarriorSkills();
    }
    if (my.job === "Rogue") {
        ancientWillStatus = false;
        g.checkRogueSkills();
    }
}

function monsterRootResume2() {
    petRootStatus = false;
}

function monsterRootDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneHeal");
    var rootDuration = 20000 - (((magicTotal()) * 50) * (M.random() * (2) + 1));
    if (rootDuration < 5000) {
        rootDuration = 5000;
    }
    mob[Slot].mp -= 4;
    mob[Slot].castingStatus = false;
    if (targetPet === true) {
        if (my.job === "Magician") {
            Chat((petName + " is immune to Root."), 1);
            return;
        }
        if (myStatusResist(Slot) === true) {
            Chat((petName + " resisted Root."), 1);
            return;
        }
        Chat((petName + " has been rooted."), 3);
        petRootStatus = true;
        monsterRootCooldown2.kill();
        monsterRootCooldown2 = T.delayedCall(rootDuration / 1000, monsterRootResume2);
        return;
    }
    if (absorbSpellStatus === 0) {
        absorbSpellStatus = 1;
        $("#absorbSpellIcon,#spellAbsorbImage").remove();
        Chat(("You absorb Root."), 3);
        return;
    }
    if (myStatusResist(Slot) === true) {
        Chat(("You resisted Root."), 1);
        return;
    }
    if (invincibleStatus === true) {
        Chat("Root has no effect on you.", 1);
        return;
    }
    Chat(("Your legs are entangled by roots."), 3);
    var skillName = "Root";
    var buffId = "mobRootIcon";
    var duration = rootDuration;
    mobRootTimer.kill();
    mobRootTimer = T.delayedCall(duration / 1000, function() {
        removeIcon(buffId);
    });
    mobBuffIcon(skillName, buffId, duration, -96);
    flashScreen("#008000", .3, .5);
    rootStatus = 0;
    if (my.job === "Warrior") {
        checkIntrepidMight();
    }
    if (my.job === "Rogue") {
        ancientWillStatus = true;
        g.checkRogueSkills();
    }
    monsterRootCooldown.kill();
    monsterRootCooldown = T.delayedCall(rootDuration / 1000, monsterRootResume);
}

function monsterRoot(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    Chat((mob[Slot].name + " begins to cast a spell"), 3);
    playAudio("spellCastAbjure", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("green", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterRootDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function monsterMindDrainDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneHeal");
    //resist calculations
    mob[Slot].mp -= 4;
    mob[Slot].castingStatus = false;
    if (targetPet === true) {
        Chat((petName + " is immune to Mind Drain."));
        return;
    }
    if (targetCharm === true) {
        if (myStatusResist(Slot) === true) {
            Chat((mob[charmSlot].name + " resisted Mind Drain."), 1);
            return;
        }
        Chat((mob[charmSlot].name + "'s mind has been drained."), 3);
        mob[charmSlot].mp -= 10;
        if (mob[charmSlot].mp < 0) {
            mob[charmSlot].mp = 0;
        }
        return;
    }
    if (targetCharm === false) {
        if (TGT === charmSlot) {
            return;
        }
        if (M.random() > .95) {
            Chat((mob[TGT].name + " resisted Mind Drain."), 1);
            return;
        }
        Chat((mob[TGT].name + "'s mind has been drained."), 3);
        mob[TGT].mp -= 10;
        if (mob[TGT].mp < 0) {
            mob[TGT].mp = 0;
        }
        return;
    }
    //compare resist odds and report

    if (absorbSpellStatus === 0) {
        absorbSpellStatus = 1;
        $("#absorbSpellIcon,#spellAbsorbImage").remove();
        Chat(("You absorb Mind Drain."), 3);
        return;
    }
    if (myStatusResist(Slot) === true) {
        Chat(("You resisted Mind Drain."), 1);
        return;
    }
    if (invincibleStatus === true) {
        Chat("Mind Drain has no effect on you.", 1);
        return;
    }
    Chat(("Your mind is drained."), 3);
    flashScreen("#ffa500", .4, 1);
    if (my.job !== "Warrior" && my.job !== "Monk" && my.job !== "Rogue") {
        my.mp -= M.ceil(mob[Slot].level * 1.5);
        if (my.mp < 0) {
            my.mp = 0;
        }
    }
    g.drawMyMp();
    CStat();
}

function monsterMindDrain(Slot, targetPet, targetCharm) {
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot, targetPet, targetCharm);
        return;
    }
    Chat((mob[Slot].name + " begins to cast a spell"), 3);
    playAudio("spellCastDot", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("orange", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterMindDrainDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function monsterConfuseCooldownDone() {
    confuseStatus = false;
    monsterConfuseCooldown.kill();
}

function monsterConfuseResume() {
    if (castingSpell === 0) {
        return;
    }
    if (M.random() > .5) {
        targetNextMob();
    } else {
        targetLastMob();
    }
}

function monsterConfuseDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneHeal");
    //resist calculations
    var confuseDuration = 18000 - (((magicTotal()) * 50) * (M.random() * (2) + 1));
    if (confuseDuration < 5000) {
        confuseDuration = 5000;
    }
    mob[Slot].mp -= 4;
    mob[Slot].castingStatus = false;
    if (targetPet === true) {
        if (myStatusResist(Slot) === true) {
            Chat((petName + " resisted Confuse."), 1);
            return;
        }
        Chat((petName + " is immune to Confuse."));
        return;
    }
    if (targetCharm === true) {
        if (myStatusResist(Slot) === true) {
            Chat((mob[charmSlot].name + " resisted Confuse."), 1);
            return;
        }
        Chat((mob[charmSlot].name + " is immune to Confuse."), 3);
        return;
    }
    if (targetCharm === false) {
        if (TGT === charmSlot) {
            return;
        }
        if (M.random() > .95) {
            Chat((mob[TGT].name + " resisted Confuse."), 1);
            return;
        }
        Chat((mob[TGT].name + " is immune to Confuse."), 3);
        return;
    }
    if (absorbSpellStatus === 0) {
        absorbSpellStatus = 1;
        $("#absorbSpellIcon,#spellAbsorbImage").remove();
        Chat(("You absorb Confuse."), 3);
        return;
    }
    if (myStatusResist(Slot) === true) {
        Chat(("You resisted Confuse."), 1);
        return;
    }
    if (invincibleStatus === true) {
        Chat("Confuse has no effect on you.", 1);
        return;
    }
    Chat(("You are confused and attack at random."), 3);
    flashScreen("#da70d6", .4, 2);
    var skillName = "Confuse";
    var buffId = "mobConfuseIcon";
    var duration = confuseDuration;
    mobConfuseTimer.kill();
    mobConfuseTimer = T.delayedCall(duration / 1000, function() {
        removeIcon(buffId);
    });
    mobBuffIcon(skillName, buffId, duration, -192);
    // effect calls function to change target repeatedly
    confuseStatus = true;
    monsterConfuseCooldown.kill();
    monsterConfuseCooldown = T.to('', .5, {
        repeat: -1,
        onRepeat: monsterConfuseResume
    });
    monsterConfuseCooldownComplete.kill();
    monsterConfuseCooldownComplete = T.delayedCall(confuseDuration / 1000, monsterConfuseCooldownDone);
}

function monsterConfuse(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot, targetPet, targetCharm);
        return;
    }
    Chat((mob[Slot].name + " begins to cast a spell"), 3);
    playAudio("spellCastDot", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("red", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterConfuseDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function monsterMindNumbResume(Slot) {
    mindNumbActive = 1;
    intelBuff += mindNumbIntelDebuff;
    wisBuff += mindNumbWisDebuff;
    CStat();
}

function monsterMindNumbDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneHeal");
    //resist calculations
    var mindNumbDuration = 30000 - (((magicTotal()) * 50) * (M.random() * (2) + 1));
    if (mindNumbDuration < 8000) {
        mindNumbDuration = 12000;
    }
    mob[Slot].mp -= 4;
    mob[Slot].castingStatus = false;
    if (targetPet === true) {
        Chat((petName + " is immune to Mind Numb."));
        return;
    }
    if (targetCharm === true) {
        if (myStatusResist(Slot) === true) {
            Chat((mob[charmSlot].name + " resisted Mind Numb."), 1);
            return;
        }
        Chat((mob[charmSlot].name + "'s mind is numbed."), 3);
        //icon
        var skillName = "Mind Numb";
        var buffId = "mobMindNumbIcon" + charmSlot;
        var duration = mindNumbDuration;
        mobMindNumbTimers[charmSlot].kill();
        mobMindNumbTimers[charmSlot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -224, charmSlot);
        mob[charmSlot].intel -= M.ceil(mob[charmSlot].intel / 5);
        if (mob[charmSlot].intel < 0) {
            mob[charmSlot].intel = 0;
        }
        return;
    }
    if (targetCharm === false) {
        if (TGT === charmSlot) {
            return;
        }
        if (M.random() > .95) {
            Chat((mob[TGT].name + " resisted Mind Numb."), 1);
            return;
        }
        Chat((mob[TGT].name + "'s mind is numbed."), 3);
        //icon
        var skillName = "Mind Numb";
        var buffId = "mobMindNumbIcon" + TGT;
        var duration = mindNumbDuration;
        mobMindNumbTimers[TGT].kill();
        mobMindNumbTimers[TGT] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -224, TGT);
        mob[TGT].intel -= M.ceil(mob[TGT].intel / 5);
        if (mob[TGT].intel < 0) {
            mob[TGT].intel = 0;
        }
        return;
    }
    if (absorbSpellStatus === 0) {
        absorbSpellStatus = 1;
        $("#absorbSpellIcon,#spellAbsorbImage").remove();
        Chat(("You absorb Mind Numb."), 3);
        return;
    }
    if (myStatusResist(Slot) === true) {
        Chat(("You resisted Mind Numb."), 1);
        return;
    }
    if (invincibleStatus === true) {
        Chat("Mind Numb has no effect on you.", 1);
        return;
    }
    Chat(("Your mind is numbed."), 3);
    var skillName = "Mind Numb";
    var buffId = "mobMindNumbIcon";
    var duration = mindNumbDuration;
    mobMindNumbTimer.kill();
    mobMindNumbTimer = T.delayedCall(duration / 1000, function() {
        removeIcon(buffId);
    });
    mobBuffIcon(skillName, buffId, duration, -224);
    flashScreen("#000082", .4, 2);
    if (mindNumbActive === 0) {
        intelBuff += mindNumbIntelDebuff;
        wisBuff += mindNumbWisDebuff;
    }
    mindNumbActive = 0;
    mindNumbIntelDebuff = M.ceil(mob[Slot].level * .75);
    mindNumbWisDebuff = M.ceil(mob[Slot].level * .75);
    intelBuff -= mindNumbIntelDebuff;
    wisBuff -= mindNumbWisDebuff;
    CStat();
    monsterMindNumbCooldown.kill();
    monsterMindNumbCooldown = T.delayedCall(mindNumbDuration / 1000, function() {
        monsterMindNumbResume(Slot);
    });
}

function monsterMindNumb(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    Chat((mob[Slot].name + " begins to cast a spell"), 3);
    playAudio("spellCastDot", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("orange", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterMindNumbDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function monsterHealDone(Slot, healTarget) {
    playAudioCast(Slot);
    playAudio("spellDoneHeal", 0, 0, .5);
    if (!mob[healTarget].name) {
        return;
    }
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    Chat((mob[healTarget].name + " feels much better."), 3);
    mob[Slot].mp -= 4;
    mob[Slot].castingStatus = false;
    var healAmount = minMax((mob[Slot].maxHp / 4), .85);
    if (mob[Slot].ampMagicStatus === true) {
        healAmount = M.ceil(healAmount + (healAmount * .5));
    }
    mob[healTarget].hp += healAmount;
    g.popupHealSlot(healAmount, healTarget);
    if (mob[healTarget].hp > mob[healTarget].maxHp) {
        mob[healTarget].hp = mob[healTarget].maxHp;
    }
    g.drawMonsterHp(healTarget);
}

function monsterHeal(Slot, healTarget) {
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    Chat((mob[Slot].name + " begins to cast a spell"), 3);
    playAudio("spellCastHeal", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("teal", 25, Slot, (mobCastSpeed(Slot) * 1.25) / 1000);
        mob[Slot].spellActive = T.delayedCall((mobCastSpeed(Slot) * 1.25) / 1000, function() {
            monsterHealDone(Slot, healTarget);
        });
        mobResumeAttackTimer(Slot, 0, (mobCastSpeed(Slot) * 1.25) + 1500);
    }
}

function monsterLayHandsDone(Slot) {
    playAudioCast(Slot);
    playAudio("spellDoneHeal", 0, 0, .5);
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    mob[Slot].castingStatus = false;
    mob[Slot].layHands = false;
    if (mob[Slot].name === "Matron Maelentia") {
        Chat((mob[Slot].name + " uses complete heal."), 3);
        var healAmount = ~~(mob[Slot].maxHp / 2);
    } else {
        Chat((mob[Slot].name + " uses Lay Hands."), 3);
        var healAmount = ~~(mob[Slot].maxHp * .75);
    }
    mob[Slot].hp += healAmount;
    g.popupHealSlot(healAmount, Slot);
    if (mob[Slot].hp > mob[Slot].maxHp) {
        mob[Slot].hp = mob[Slot].maxHp;
    }
    g.drawMonsterHp(Slot);
}

function monsterLayHands(Slot) {
    Chat((mob[Slot].name + " begins to cast a spell"), 3);
    playAudio("spellCastHeal", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("teal", 25, Slot, 3);
        mob[Slot].spellActive = T.delayedCall(3, function() {
            monsterLayHandsDone(Slot);
        });
        mobResumeAttackTimer(Slot, 0, 3000);
    }
}


function monsterWeakenResume(Slot, targetPet, targetCharm) {
    weakenActive = 1;
    strBuff += weakenStrDebuff;
    dexBuff += weakenDexDebuff;
    CStat();
}

function monsterWeakenDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneHeal");
    //resist calculations
    var weakenDuration = 30000 - (((magicTotal()) * 50) * (M.random() * (2) + 1));
    if (weakenDuration < 8000) {
        weakenDuration = 12000;
    }
    mob[Slot].mp -= 4;
    mob[Slot].castingStatus = false;
    if (targetPet === true) {
        Chat((petName + " is immune to Weaken."));
        return;
    }
    if (targetCharm === true) {
        if (myStatusResist(Slot) === true) {
            Chat((mob[charmSlot].name + " resisted Weaken."), 1);
            return;
        }
        Chat((mob[charmSlot].name + " feels weak and clumsy."), 3);
        //icon
        var skillName = "Weaken";
        var buffId = "mobWeakenIcon" + charmSlot;
        var duration = weakenDuration;
        mobWeakenTimers[charmSlot].kill();
        mobWeakenTimers[charmSlot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -160, charmSlot);
        mob[charmSlot].weaken = true;
        return;
    }
    if (targetCharm === false) {
        if (TGT === charmSlot) {
            return;
        }
        if (M.random() > .95) {
            Chat((mob[TGT].name + " resisted Weaken."), 1);
            return;
        }
        Chat((mob[TGT].name + " feels weak and clumsy."), 3);
        //icon
        var skillName = "Weaken";
        var buffId = "mobWeakenIcon" + TGT;
        var duration = weakenDuration;
        mobWeakenTimers[TGT].kill();
        mobWeakenTimers[TGT] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -160, TGT);
        mob[TGT].weaken = true;
        return;
    }
    if (absorbSpellStatus === 0) {
        absorbSpellStatus = 1;
        $("#absorbSpellIcon,#spellAbsorbImage").remove();
        Chat(("You absorb Weaken."), 3);
        return;
    }
    if (myStatusResist(Slot) === true) {
        Chat(("You resisted Weaken."), 1);
        return;
    }
    if (invincibleStatus === true) {
        Chat("Weaken has no effect on you.", 1);
        return;
    }
    Chat(("Your feel weak and clumsy."), 3);
    Chat(("Your mind is numbed."), 3);
    var skillName = "Weaken";
    var buffId = "mobWeakenIcon";
    var duration = weakenDuration;
    mobWeakenTimer.kill();
    mobWeakenTimer = T.delayedCall(duration / 1000, function() {
        removeIcon(buffId);
    });
    mobBuffIcon(skillName, buffId, duration, -160);
    flashScreen("#c71585", .4, 2);
    if (weakenActive === 0) {
        strBuff += weakenStrDebuff;
        dexBuff += weakenDexDebuff;
    }
    weakenActive = 0;
    weakenStrDebuff = M.ceil(mob[Slot].level * .75);
    weakenDexDebuff = M.ceil(mob[Slot].level * .75);
    strBuff -= weakenStrDebuff;
    dexBuff -= weakenDexDebuff;
    CStat();
    monsterWeakenCooldown.kill();
    monsterWeakenCooldown = T.delayedCall(weakenDuration / 1000, function() {
        monsterWeakenResume(Slot, targetPet, targetCharm);
    });
}

function monsterWeaken(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    Chat((mob[Slot].name + " begins to cast a spell"), 3);
    playAudio("spellCastDot", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("purple", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterWeakenDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function monsterYawnResume() {
    hasteBuff -= 400;
    yawnActive = 1;
    CStat();
}

function monsterYawnDone(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudioCast(Slot);
    playAudio("spellDoneHeal");
    var yawnDuration = 24000 - (((magicTotal()) * 50) * (M.random() * (2) + 1));
    if (yawnDuration < 6000) {
        yawnDuration = 6000;
    }
    mob[Slot].mp -= 4;
    mob[Slot].castingStatus = false;
    if (targetPet === true) {
        Chat((petName + " is immune to Yawn."));
        return;
    }
    if (targetCharm === true) {
        if (myStatusResist(Slot) === true) {
            Chat((mob[charmSlot].name + " resisted Yawn."), 1);
            return;
        }
        Chat((mob[charmSlot].name + " yawns."), 3);
        //icon
        var skillName = "Yawn";
        var buffId = "mobYawnIcon" + charmSlot;
        var duration = yawnDuration;
        mobYawnTimers[charmSlot].kill();
        mobYawnTimers[charmSlot] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -128, charmSlot);
        mob[charmSlot].speed += 1000;
        if (mob[charmSlot].speed > 6000) {
            mob[charmSlot].speed = 6000;
        }
        return;
    }
    if (targetCharm === false) {
        if (TGT === charmSlot) {
            return;
        }
        if (M.random() > .95) {
            Chat((mob[TGT].name + " resisted Yawn."), 1);
            return;
        }
        Chat((mob[TGT].name + " yawns."), 3);
        //icon
        var skillName = "Yawn";
        var buffId = "mobYawnIcon" + TGT;
        var duration = yawnDuration;
        mobYawnTimers[TGT].kill();
        mobYawnTimers[TGT] = T.delayedCall(duration / 1000, function() {
            removeIcon(buffId);
        });
        mobSelfBuffIcon(skillName, buffId, duration, -128, TGT);
        mob[TGT].speed += 1000;
        if (mob[TGT].speed > 6000) {
            mob[TGT].speed = 6000;
        }
        return;
    }
    if (absorbSpellStatus === 0) {
        absorbSpellStatus = 1;
        $("#absorbSpellIcon,#spellAbsorbImage").remove();
        Chat(("You absorb Yawn."), 3);
        return;
    }
    if (myStatusResist(Slot) === true) {
        Chat(("You resisted Yawn."), 1);
        return;
    }
    if (invincibleStatus === true) {
        Chat("Yawn has no effect on you.", 1);
        return;
    }
    Chat(("You feel drowsy."), 3);
    var skillName = "Yawn";
    var buffId = "mobYawnIcon";
    var duration = yawnDuration;
    mobYawnTimer.kill();
    mobYawnTimer = T.delayedCall(duration / 1000, function() {
        removeIcon(buffId);
    });
    mobBuffIcon(skillName, buffId, duration, -128);
    if (yawnActive === 0) {
        hasteBuff -= 400;
    }
    yawnActive = 0;
    flashScreen("#fff5ee", .4, 2);
    hasteBuff += 400;
    monsterYawnCooldown.kill();
    monsterYawnCooldown = T.delayedCall(yawnDuration / 1000, monsterYawnResume);
}

function monsterYawn(Slot, targetPet, targetCharm) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    if (mob[Slot].mp < 4) {
        monsterMpLow(Slot);
        return;
    }
    
    playAudio("spellCastDot", 0, 0, .5);
    // start cast time
    if (mobsFound() === true) {
        mob[Slot].castingStatus = true;
        mobCastDown("white", 25, Slot, mobCastSpeed(Slot) / 1000);
        mob[Slot].spellActive = T.delayedCall(mobCastSpeed(Slot) / 1000, function() {
            monsterYawnDone(Slot, targetPet, targetCharm);
        });
        mobResumeAttackTimer(Slot, 0, resumeAttacking(mobCastSpeed(Slot), Slot));
    }
}

function resumeAttacking(castSpeed, Slot) {
    if (castSpeed < mob[Slot].speed) {
        castSpeed = mob[Slot].speed;
    }
    return castSpeed;
}

//Single-Use Monster Skills
function monsterHarmTouch(Slot) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    mobCastSelf("red", 25, 10, Slot);
    mobResumeAttackTimer(Slot, 0, mobAttackSpeed(Slot));
    var harmTouchDamage = M.ceil(mob[Slot].level * 4) + 10;
    if (invincibleStatus === true) {
        Chat("Harm Touch has no effect on you.", 1);
        return;
    }
    if (mob[Slot].charmStatus === false) {
        if (shieldHp > 0) {
            playAudio("blockBlunt");
            shieldHp -= harmTouchDamage;
            if (my.job === "Cleric") {
                Chat(("Your guardian angel absorbs the blow."));
                if (shieldHp <= 0) {
                    $("#guardianAngelIcon").remove();
                }
            }
            if (my.job === "Necromancer") {
                Chat(("Your diamond skin absorbs the blow."));
                if (shieldHp <= 0) {
                    $("#diamondSkinIcon").remove();
                }
            }
            if (my.job === "Enchanter") {
                Chat(("Your mystic rune absorbs the blow."));
                if (shieldHp <= 0) {
                    $("#shieldHpIcon").remove();
                }
            }
            if (my.job === "Paladin") {
                Chat("Your protective bubble absorbs the blow.");
                if (shieldHp <= 0) {
                    $("#yaulpShieldIcon").remove();
                }
            }
            if (my.job === "Bard") {
                Chat("Your shield of songs absorbs the blow.");
                if (shieldHp <= 0) {
                    $("#shieldOfSongsIcon").remove();
                }
            }
        } else {
            my.hp -= harmTouchDamage;
            battleDamageTaken += harmTouchDamage;
            Chat((mob[Slot].name + " harm touches YOU for " + harmTouchDamage + " damage."), 1);
        }
        CStat();
        g.drawMyHp();
        flashScreen("#f00", .7, 1.25);
    } else {
        if (TGT === charmSlot) {
            return;
        } else {
            var foo = g.myMagicDamage("magic", harmTouchDamage, TGT, false, "Harm Touch");
            Chat(mob[Slot].name + " harm touches " + mob[TGT].name + " for " + foo + " damage.", 3);
            g.checkForDeadMonsters();
        }
    }
    if (my.job === "Warrior") {
        getFuryRegen(harmTouchDamage);
    }
    mob[Slot].harmTouch = 1;
    // death trigger
    checkMyDeathBySkill(Slot);
    playAudio("spellDoneHarm");
    if (mob[Slot].name === "Nalatos, God of Chaos" || mob[Slot].name === "ghastly indulger") {
        function resetHT() {
            if (mob[Slot].name === "Nalatos, God of Chaos" || mob[Slot].name === "ghastly indulger") {
                mob[Slot].harmTouch = 0;
            }
        }
        var d = 45000;
        if (g.difficulty === 2) {
            d = 35000;
        }
        if (g.difficulty === 3) {
            d = 25000;
        }
        T.delayedCall(d / 1000, resetHT);
    }
}

function resetAddMonster() {
    setD('addmonsterId', false);
    BGP('addmonsterId', "0 -200%");
}

function addSummonedWolf(Slot, summoned) {
    if (countMobs() > 4 || !mob[Slot].name) {
        return;
    }
    // load random monster and make them appear in a new slot
    setD('addmonsterId', true);
    BGP('addmonsterId', "0 -300%");
    addMonsterTimer.kill();
    addMonsterTimer = T.delayedCall(.5, resetAddMonster);
    timerTick(D.getElementById('addmonsterId'), .5, 'addmonsterId');
    Mimg = "a wolf";
    Mlvl = M.ceil(mob[Slot].level * .5);
    MmaxHp = M.ceil(Mlvl * 100);
    Mhp = MmaxHp;
    Mxp = Mlvl * 4;
    Mstr = (5 + (Mlvl * 2));
    Mdef = 100;
    monsterTC = Mlvl;
    Mgold = 0;
    Mint = (5 + (Mlvl * 2));
    Mpoison = 100;
    Mmagic = 100;
    Mlightning = 100;
    Mfire = 100;
    Mcold = 100;
    monsterSpeed = 3000;
    McastSpeed = 2000 * g.speed;
    Mskill = [];
    Mskill[1] = "kick";
    Mskill[2] = "kick";
    Mskill[3] = "kick";
    Mskill[4] = "kick";
    Mfreq = 10;
    Mrare = 1;
    MharmTouch = 1;
    Mrune = 1;
    Mskeleton = 1;
    Melemental = 1;
    Mthorns = 1;
    Mlava = 1;
    Mresolution = 1;
    Mwolf = 1;
    Menrage = false;
    MironMaiden = false;
    Mflurry = false;
    Mamp = false;
    Msanctuary = false;
    Mbarrier = false;
    Mdrain = false;
    initChampTraits();
    if (mob[Slot].summoner === true) {
        mob[Slot].summoner = false;
    } else {
        mob[Slot].wolf = 1;
    }
    Mflee = 0;
    Mwidth = 250 + M.ceil(mob[Slot].level / 4);
    mobImgX = 538;
    mobImgY = 400;
    cX = 385;
    cY = 286;
    Mname = mob[Slot].name + "'s pet";
    Maud1 = "wolf_att2";
    Maud2 = "wolf_hit2";
    Maud3 = "wolf_die2";
    loadSlotData(Slot, summoned);
    playAudio("spellCastAbjure", 0, 0, .5);
}

function monsterSummonWolf(Slot) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudio("spellDoneSlam", 0, 0, .5);
    Chat(("A wolf is summoned into battle."), 3);
    // trigger normal attacks
    mobCastSelf("green", 25, 20, Slot);
    mob[Slot].castingStatus = true;
    mob[Slot].spellActive = T.delayedCall(1, function() {
        addSummonedWolf(Slot, 1);
    });
    mobResumeAttackTimer(Slot, 0, 1250);
}

function addSummonedSkeleton(Slot, summoned) {
    if (countMobs() > 4 || !mob[Slot].name) {
        return;
    }
    // load random monster and make them appear in a new slot
    setD('addmonsterId', true);
    BGP('addmonsterId', "0 -300%");
    addMonsterTimer.kill();
    addMonsterTimer = T.delayedCall(.5, resetAddMonster);
    timerTick(D.getElementById('addmonsterId'), .5, 'addmonsterId');
    Mimg = "a skeleton";
    Mlvl = M.ceil(mob[Slot].level * .65);
    MmaxHp = M.ceil(Mlvl * 100);
    Mhp = MmaxHp;
    Mxp = Mlvl * 4;
    Mstr = (5 + (Mlvl * 2));
    Mdef = 100;
    monsterTC = Mlvl;
    Mgold = 0;
    Mint = (5 + (Mlvl * 2));
    Mpoison = 100;
    Mmagic = 100;
    Mlightning = 100;
    Mfire = 125;
    Mcold = 100;
    monsterSpeed = 3000;
    Mskill[1] = "kick";
    Mskill[2] = "kick";
    Mskill[3] = "kick";
    Mskill[4] = "kick";
    McastSpeed = 500;
    Mfreq = 10;
    Mrare = 1;
    MharmTouch = 1;
    Mrune = 1;
    Mskeleton = 1;
    Melemental = 1;
    Mthorns = 1;
    Mlava = 1;
    Mresolution = 1;
    Mwolf = 1;
    Menrage = false;
    MironMaiden = false;
    Mflurry = false;
    Mamp = false;
    Msanctuary = false;
    Mbarrier = false;
    Mdrain = false;
    initChampTraits();
    if (mob[Slot].summoner === true) {
        mob[Slot].summoner = false;
    } else {
        mob[Slot].skeleton = 1;
    }
    Mflee = 0;
    Mwidth = 150 + M.ceil(mob[Slot].level / 4);
    mobImgX = 240;
    mobImgY = 503;
    cX = 123;
    cY = 114;
    Mname = mob[Slot].name + "'s pet";
    Maud1 = "skeleton_att";
    Maud2 = "skeleton_hit";
    Maud3 = "skeleton_die";
    loadSlotData(Slot, summoned);
    playAudio("spellCastAbjure", 0, 0, .5);
}

function monsterSummonSkeleton(Slot) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudio("spellDoneSlam", 0, 0, .5);
    Chat(("A skeleton is summoned into battle."), 3);
    // trigger normal attacks
    mobCastSelf("black", 25, 20, Slot);
    mob[Slot].castingStatus = true;
    mob[Slot].spellActive = T.delayedCall(1, function() {
        addSummonedSkeleton(Slot, 1);
    });
    mobResumeAttackTimer(Slot, 0, 1250);
}

function addSummonedElemental(Slot, summoned) {
    if (countMobs() > 4 || !mob[Slot].name) {
        return;
    }
    // load random monster and make them appear in a new slot
    setD('addmonsterId', true);
    BGP('addmonsterId', "0 -300%");
    addMonsterTimer.kill();
    addMonsterTimer = T.delayedCall(.5, resetAddMonster);
    timerTick(D.getElementById('addmonsterId'), .5, 'addmonsterId');
    MmaxHp = M.ceil(Mlvl * 100);
    Mhp = MmaxHp;
    Mxp = Mlvl * 4;
    Mstr = (5 + (Mlvl * 2));
    Mdef = 100;
    monsterTC = Mlvl;
    Mgold = 0;
    Mint = (5 + (Mlvl * 2));
    Mpoison = 100;
    Mmagic = 100;
    Mlightning = 100;
    Mfire = 100;
    Mcold = 100;
    monsterSpeed = 3000;
    McastSpeed = 500 * g.speed;
    Mskill[1] = "kick";
    Mskill[2] = "kick";
    Mfreq = 10;
    Mrare = 1;
    MharmTouch = 1;
    Mrune = 1;
    Mskeleton = 1;
    Melemental = 1;
    Mthorns = 1;
    Mlava = 1;
    Mresolution = 1;
    Mwolf = 1;
    Menrage = false;
    MironMaiden = false;
    Mflurry = false;
    Mamp = false;
    Msanctuary = false;
    Mbarrier = false;
    Mdrain = false;
    initChampTraits();
    if (mob[Slot].summoner === true) {
        mob[Slot].summoner = false;
    } else {
        mob[Slot].elemental = 1;
    }
    Mflee = 0;
    var x = M.ceil(M.random() * (4));
    if (x === 1) {
        Mimg = "an earth elemental";
        Mskill[3] = "root";
        Mskill[4] = "root";
        Mlvl = M.ceil(mob[Slot].level * .65);
        Mlightning = 67;
        Mpoison = 125;
        Mwidth = 300;
        mobImgX = 346;
        mobImgY = 400;
        cX = 171;
        cY = 98;
    } else if (x === 2) {
        Mimg = "an air elemental";
        Mskill[3] = "energy bolt";
        Mskill[4] = "energy bolt";
        Mlvl = M.ceil(mob[Slot].level * .65);
        Mmagic = 67;
        Mlightning = 125;
        Mwidth = 300;
        mobImgX = 354;
        mobImgY = 400;
        cX = 183;
        cY = 116;
    } else if (x === 3) {
        Mimg = "a fire elemental";
        Mskill[3] = "fireball";
        Mskill[4] = "fireball";
        Mlvl = M.ceil(mob[Slot].level * .65);
        Mfire = 67;
        Mcold = 125;
        Mwidth = 300;
        mobImgX = 358;
        mobImgY = 400;
        cX = 176;
        cY = 140;
    } else {
        Mimg = "a frost elemental";
        Mskill[3] = "ice shard";
        Mskill[4] = "ice shard";
        Mlvl = M.ceil(mob[Slot].level * .65);
        Mcold = 67;
        Mfire = 125;
        Mwidth = 300;
        mobImgX = 397;
        mobImgY = 500;
        cX = 196;
        cY = 147;

    }
    Mname = mob[Slot].name + "'s pet";
    Maud1 = "elem_att3";
    Maud2 = "elem_hit3";
    Maud3 = "elem_die3";
    loadSlotData(Slot, summoned);
    playAudio("spellCastAbjure", 0, 0, .5);
}

function monsterSummonElemental(Slot) {
    if (my.hp <= 0 || attackStatus !== 0) {
        return;
    }
    playAudio("spellDoneSlam", 0, 0, .5);
    Chat((mob[Slot].name + " begins summoning an elemental."), 3);
    // trigger normal attacks
    mobCastSelf("blue", 25, 20, Slot);
    mob[Slot].castingStatus = true;
    mob[Slot].spellActive = T.delayedCall(1, function() {
        addSummonedElemental(Slot, 1);
    });
    mobResumeAttackTimer(Slot, 0, 1250);
}

function monsterRune(Slot) {
    Chat((Mname + "'s skin shimmers with power."), 3);
    //icon
    playAudio("spellDoneBuff", 0, 0, .5);
    mobSelfBuffIcon("Rune", "MruneIcon" + Slot, 0, -416, Slot);
    mob[Slot].rune = 1;
    mobCastSelf("teal", 25, 25, Slot);
    mob[Slot].runeHp = 20 + (mob[Slot].intel * 10);
    mobResumeAttackTimer(Slot, 0, mobAttackSpeed(Slot));
}

function monsterThornsDone(Slot) {
    mob[Slot].thornsActive = 1;
}

function monsterThorns(Slot) {
    Chat((Mname + "'s skin is covered in thorns."), 3);
    //icon
    playAudio("spellDoneBuff", 0, 0, .5);
    MthornsTimers[Slot].kill();
    MthornsTimers[Slot] = T.delayedCall(40, function() {
        removeIcon("MthornsIcon" + Slot);
    });
    mobSelfBuffIcon("Thorns", "MthornsIcon" + Slot, 40000, -448, Slot);
    mobCastSelf("green", 25, 20, Slot);
    mob[Slot].thorns = 1;
    mob[Slot].thornsActive = 0;
    mob[Slot].thornsTimer = T.delayedCall(40, function() {
        monsterThornsDone(Slot);
    });
    mobResumeAttackTimer(Slot, 0, mobAttackSpeed(Slot));
}

function monsterLavaShieldDone(Slot) {
    mob[Slot].lavaShieldActive = 1;
}

function monsterLavaShield(Slot) {
    Chat((Mname + "'s is surrounded by a shield of lava."), 3);
    //icon
    playAudio("spellDoneBuff", 0, 0, .5);
    MlavaTimers[Slot].kill();
    MlavaTimers[Slot] = T.delayedCall(30, function() {
        removeIcon("MlavaIcon" + Slot);
    });
    mobSelfBuffIcon("Lava Shield", "MlavaIcon" + Slot, 30000, -480, Slot);
    mobCastSelf("orange", 25, 20, Slot);
    mob[Slot].lavaShield = 1;
    mob[Slot].lavaShieldActive = 0;
    mob[Slot].lavaShieldTimer = T.delayedCall(30, function() {
        monsterLavaShieldDone(Slot);
    });
    mobResumeAttackTimer(Slot, 0, mobAttackSpeed(Slot));
}

function setCurtainColor(color) {
    spellCurtain.graphics
        .clear()
        .beginFill(color)
        .drawRect(0, 0, 1280, 720)
        .endFill();
}

function flashScreen(color, o, d, reverse) {
    if (!reverse) {
        setCurtainColor(color);
        T.to(spellCurtain, d, {
            startAt: {
                alpha: o
            },
            alpha: 0,
            ease: ez.Qin
        });
    } else {
        setCurtainColor(color);
        T.to(spellCurtain, d, {
            startAt: {
                alpha: 0
            },
            alpha: o,
            ease: ez.Qin,
            onComplete: function() {
                if (my.hp > 0) {
                    spellCurtain.alpha = 0;
                }
            }
        });
    }
}

function monsterSilence(Slot) {
    mob[Slot].silenceStatus = false;
    playAudio("handofgod");
    if (my.race !== "Gnome") {
        Chat((mob[Slot].name + " silences you!"));
        var silenceDuration = 2500;
        silenceDuration = ~~(silenceDuration * (1 - (g.silenceEquip / 100)));
        mobBuffIcon("Silence", 'silenceIcon', silenceDuration, -768);
        tlSpellbar.kill();
        NG.spellbardiv.style.display = "none";
        castingSpell = 1;
        silenceStatus = true;
        T.delayedCall(silenceDuration / 1000, function() {
            silenceStatus = false;
        });
    } else {
        Chat(("You resist silence!"), 1);
    }
    mobCastSelf("white", 25, 15, Slot);
    mobResumeAttackTimer(Slot, 0, 2000);
    flashScreen('white', .7, 1);
    if (mob[2].rare === 3) {
        function doit() {
            if (mob[2].rare === 3) {
                mob[2].silenceStatus = true;
            }
        }
        var timer = 45000;
        if (g.difficulty === 3) {
            timer = 30000;
        }
        T.delayedCall(timer / 1000, doit);
    }
}

function monsterEnrage(Slot) {
    function monsterEnrageExpire(Slot, mobID) {
        if (mobID === mob[Slot].ID && mobsFound() === true && mob[Slot].name) {
            Chat((mob[Slot].name + "'s enrage fades."));
        }
        mob[Slot].enrage = false;
    }
    var mobID = mob[Slot].ID;
    Chat((mob[Slot].name + " enrages!"));
    //icon
    playAudio("spellDoneFlames", 0, 0, .5);
    MenrageTimers[Slot].kill();
    MenrageTimers[Slot] = T.delayedCall(20, function() {
        removeIcon("MenrageIcon" + Slot);
    });
    mobSelfBuffIcon("Enrage", "MenrageIcon" + Slot, 20000, -544, Slot);
    mobCastSelf("purple", 26, 20, Slot);
    mob[Slot].enrageStatus = false;
    mob[Slot].enrage = true;
    mob[Slot].enrageTimer = T.delayedCall(20, function() {
        monsterEnrageExpire(Slot, mobID);
    });
    mobResumeAttackTimer(Slot, 0, 2000);
}

function monsterFlurry(Slot) {
    function monsterflurryExpire() {
        mob[Slot].flurry = false;
    }
    Chat((mob[Slot].name + " unleashes a vicious flurry!"));
    //icon
    playAudio("spellDoneFlames", 0, 0, .5);
    mobSelfBuffIcon("Flurry", "MflurryIcon" + Slot, 4000, -608, Slot);
    mobCastSelf("red", 26, 45, Slot);
    mob[Slot].flurryStatus = false;
    mob[Slot].flurry = true;
    mob[Slot].flurryTimer = T.delayedCall(4, function() {
        monsterflurryExpire(Slot);
    });
    mobResumeAttackTimer(Slot, 0, 1500);
    if (mob[2].name === "Vixen Sarmina") {
        function doit() {
            if (mob[2].name === "Vixen Sarmina") {
                mob[2].flurryStatus = true;
            }
        }
        var timer = 30000;
        if (g.difficulty === 3) {
            timer = 20000;
        }
        T.delayedCall(timer / 1000, doit);
    }
}

function monsterAmpMagic(Slot) {
    function monsterampMagicExpire(Slot, mobID) {
        if (mobID === mob[Slot].ID && mobsFound() === true && mob[Slot].name) {
            Chat((mob[Slot].name + "'s amplified magic fades."));
            mob[Slot].intel -= M.ceil(mob[Slot].level / 2);
            mob[Slot].castFreq += 1;
        }
        mob[Slot].ampMagic = false;
    }
    var mobID = mob[Slot].ID;
    Chat((mob[Slot].name + " channels amplified magic!"));
    //icon
    playAudio("spellCastEvoke1", 0, 0, .5);
    MamplifyMagicTimers[Slot].kill();
    MamplifyMagicTimers[Slot] = T.delayedCall(20, function() {
        removeIcon("MamplifyMagicIcon" + Slot);
    });
    mobSelfBuffIcon("Amplify Magic", "MamplifyMagicIcon" + Slot, 20000, -640, Slot);
    mobCastSelf('magenta', 26, 12, Slot);
    mob[Slot].ampMagicStatus = false;
    mob[Slot].ampMagic = true;
    mob[Slot].castFreq -= 1;
    mob[Slot].ampMagicTimer = T.delayedCall(20, function() {
        monsterampMagicExpire(Slot, mobID);
    });
    mob[Slot].intel += M.ceil(mob[Slot].level / 2);
    mobResumeAttackTimer(Slot, 0, 2500);
}

function monsterSanctuary(Slot) {
    function monstersanctuaryExpire(Slot, mobID) {
        if (mobID === mob[Slot].ID && mobsFound() === true && mob[Slot].name) {
            Chat((mob[Slot].name + "'s sanctuary fades."));
        }
        mob[Slot].sanctuary = false;
    }
    var mobID = mob[Slot].ID;
    Chat((mob[Slot].name + " is shielded by a translucent shell."));
    //icon
    playAudio("spellDoneBuff", 0, 0, .5);
    MsanctuaryTimers[Slot].kill();
    MsanctuaryTimers[Slot] = T.delayedCall(20, function() {
        removeIcon("MsanctuaryIcon" + Slot);
    });
    mobSelfBuffIcon("Sanctuary", "MsanctuaryIcon" + Slot, 20000, -672, Slot);
    mobCastSelf("white", 26, 12, Slot);
    mob[Slot].sanctuaryStatus = false;
    mob[Slot].sanctuary = true;
    mob[Slot].sanctuaryTimer = T.delayedCall(20, function() {
        monstersanctuaryExpire(Slot, mobID);
    });
    mobResumeAttackTimer(Slot, 0, 2500);
}

function monsterBarrier(Slot) {
    function monsterBarrierExpire(Slot, mobID) {
        if (mobID === mob[Slot].ID && mobsFound() === true && mob[Slot].name) {
            Chat((mob[Slot].name + "'s barrier fades."));
        }
        mob[Slot].barrier = false;
    }
    var mobID = mob[Slot].ID;
    Chat((mob[Slot].name + " is bolstered by a defensive barrier!"));
    //icon
    playAudio("spellDoneBuff", 0, 0, .5);
    MbarrierTimers[Slot].kill();
    MbarrierTimers[Slot] = T.delayedCall(20, function() {
        removeIcon("MbarrierIcon" + Slot);
    });
    mobSelfBuffIcon("Barrier", "MbarrierIcon" + Slot, 20000, -704, Slot);
    mobCastSelf("blue", 26, 12, Slot);
    mob[Slot].barrierStatus = false;
    mob[Slot].barrier = true;
    mob[Slot].barrierTimer = T.delayedCall(20, function() {
        monsterBarrierExpire(Slot, mobID);
    });
    mobResumeAttackTimer(Slot, 0, 2500);
}

function monsterIronMaiden(Slot) {
    function monsterIronMaidenExpire(Slot) {
        if (mobID === mob[Slot].ID && mobsFound() === true && mob[Slot].name) {
            Chat(mob[Slot].name + "'s iron maiden fades.", 1);
        }
        mob[Slot].ironMaiden = false;
    }
    var mobID = mob[Slot].ID;
    Chat(mob[Slot].name + " is shielded by an iron maiden!", 1);
    //icon
    if (GLB.videoSetting === "High") {
        animateIronMaiden(Slot);
    }
    playAudio("spellDoneBuff", 0, 0, .5);
    MironMaidenTimers[Slot].kill();
    MironMaidenTimers[Slot] = T.delayedCall(6, function() {
        removeIcon("MironMaidenIcon" + Slot);
    });
    mobSelfBuffIcon("Iron Maiden", "MironMaidenIcon" + Slot, 10000, -576, Slot);
    mobCastSelf("yellow", 26, 45, Slot);
    mob[Slot].ironMaidenStatus = false;
    mob[Slot].ironMaiden = true;
    mob[Slot].ironMaidenTimer = T.delayedCall(6, function() {
        monsterIronMaidenExpire(Slot, mobID);
    });
    mobResumeAttackTimer(Slot, 0, 2500);
    if (mob[2].name === "Sanctum Guardian Ghalentus") {
        function doit() {
            if (mob[2].name === "Sanctum Guardian Ghalentus") {
                mob[2].ironMaidenStatus = true;
            }
        }
        var d = 45000;
        if (g.difficulty === 2) {
            d = 35000;
        }
        if (g.difficulty === 3) {
            d = 25000;
        }
        T.delayedCall(d / 1000, doit);
    }
}

function animateIronMaiden(Slot) {
    if (mob[Slot].hp <= 0) {
        return;
    }
    var bottomAdjust = M.ceil(MOB[Slot].offsetTop + mob[Slot].cY);
    var leftAdjust = M.ceil(MOB[Slot].offsetLeft + mob[Slot].cX);
    var H1 = IMG(leftAdjust, bottomAdjust, 0, 0, 'ironMaidenIcon');
    H1.opacity = .75;
	NG.eWin2.appendChild(H1);
	T.to(H1, .5, {
		height: 400,
		width: 400,
		opacity: .75,
		top: bottomAdjust - 200,
		left: leftAdjust - 200,
		force3D: "auto",
		ease: ez.bout
	});
	T.to(H1, 6, {
		rotation: 720,
		force3D: "auto",
		ease: ez.lin
	});
	T.delayedCall(5.5, function() {
		T.to(H1, .5, {
			scale: 0,
			ease: ez.lin,
			onComplete: function() {
				Remove(H1);
			}
		});
	});
}

function monsterResolution(Slot) {
    Chat((Mname + "'s skin glows with divine protection."), 3);
    //icon
    playAudio("spellDoneBuff", 0, 0, .5);
    mobSelfBuffIcon("Resolution", "MresolutionIcon" + Slot, 0, -512, Slot);
    mob[Slot].resolution = 1;
    mob[Slot].resolutionStatus = true;
    mobCastSelf('yellow', 25, 20, Slot);
    mob[Slot].maxHp += (mob[Slot].intel * 20);
    mob[Slot].hp += (mob[Slot].intel * 20);
    mob[Slot].def += ~~(mob[Slot].intel * .12);
    mobResumeAttackTimer(Slot, 0, 2000);
    g.drawMonsterHp(Slot);
}

// SPELL ANIMATIONS !!!!!! GO!

function mobCastDot(spellColor, spellSize, Slot) {
    stopMob(Slot);
    var leftHand = monsterCastingParticleLeft1(Slot);
    var rightHand = monsterCastingParticleLeft2(Slot);
    if (M.random() > .5) {
        T.set(canvas[Slot], {
            rotationY: 0
        });
    } else {
        T.set(canvas[Slot], {
            rotationY: 180
        });
        leftHand[0] = mob[Slot].imageWidth - leftHand[0];
        rightHand[0] = mob[Slot].imageWidth - rightHand[0];
    }
    //init hands
    var x1 = (MOB[Slot].offsetLeft + leftHand[0]);
    var y1 = (MOB[Slot].offsetTop + mob[Slot].imageHeight - leftHand[1]);
    var x2 = (MOB[Slot].offsetLeft + rightHand[0]);
    var y2 = (MOB[Slot].offsetTop + mob[Slot].imageHeight - rightHand[1]);
    var s2 = img(spellColor + "particle50");

    function doit() {
        if (mob[Slot].castingStatus === false) {
            return;
        }
        var angle = M.random() * 360;
        var x3 = circX(x1, 40, angle);
        var y3 = circY(y1, 40, angle);
        var p2 = cacheAdd(s2, 5, x3, y3);
        T.to(p2, .5, {
            x: x1,
            y: y1,
            scaleX: .2,
            scaleY: .2,
            ease: ez.Qinout,
            onComplete: function() {
                cRem(5, p2);
            }
        });
        var angle = M.random() * 360;
        var x4 = circX(x2, 40, angle);
        var y4 = circY(y2, 40, angle);
        var p1 = cacheAdd(s2, 5, x4, y4);
        T.to(p1, .5, {
            x: x2 - 2,
            y: y2 - 2,
            scaleX: .2,
            scaleY: .2,
            ease: ez.Qinout,
            onComplete: function() {
                cRem(5, p1);
            }
        });
        T.delayedCall(.1, doit);
    }
    if (GLB.videoSetting === "High") {
        doit();
    }
}

function mobCastDown(spellColor, spellSize, Slot, castTime) {
    stopMob(Slot);
    var s2 = img(spellColor + "particle50");
    var leftHand = monsterCastingParticleLeft1(Slot);
    var rightHand = monsterCastingParticleLeft2(Slot);
    if (M.random() > .5) {
        T.set(canvas[Slot], {
            rotationY: 0
        });
    } else {
        T.set(canvas[Slot], {
            rotationY: 180
        });
        leftHand[0] = mob[Slot].imageWidth - leftHand[0];
        rightHand[0] = mob[Slot].imageWidth - rightHand[0];
    }
    //init hands
    var x1 = (MOB[Slot].offsetLeft + leftHand[0] - 12);
    var y1 = (MOB[Slot].offsetTop + mob[Slot].imageHeight - leftHand[1] - 12);
    var x2 = (MOB[Slot].offsetLeft + rightHand[0] - 12);
    var y2 = (MOB[Slot].offsetTop + mob[Slot].imageHeight - rightHand[1] - 12);
    var interval = .15;

    function doit() {
        if (mob[Slot].castingStatus === false) {
            return;
        }
        if (castTime <= 0) {
            return;
        }
        var p2 = cacheAdd(s2, 5, x1, y1);
        T.to(p2, 1, {
            x: (x1 + M.random() * (30) - 15),
            y: (y1 + M.random() * (30) + leftHand[1]),
            ease: ez.Qin,
            onComplete: function() {
                cRem(5, p2);
            }
        });
        var p1 = cacheAdd(s2, 5, x2, y2);
        T.to(p1, 1, {
            x: (x2 + M.random() * (30) - 15),
            y: (y2 + M.random() * (30) + rightHand[1]),
            ease: ez.Qin,
            onComplete: function() {
                cRem(5, p1);
            }
        });
        castTime -= interval;
        T.delayedCall(interval, function() {
            doit();
        });
    }
    if (GLB.videoSetting === "High") {
        doit();
    }
}

// Monster self-buffs
function mobCastSelf(spellColor, spellSize, spellCount, Slot) {
    stopMob(Slot);
    var s2 = img(spellColor + "particle50");

    function doit(spellCount) {
        if (spellCount === 0) {
            return;
        }
        var angle = M.random() * 360;
        var x = circX(cx, 150, angle);
        var y = circY(cy, 150, angle);
        var p2 = cacheAdd(s2, 5, x, y);
        T.to(p2, .75, {
            x: cx,
            y: cy,
            scaleX: 0,
            scaleY: 0,
            ease: ez.Qin,
            onComplete: function() {
                cRem(5, p2);
            }
        });
        var angle = M.random() * 360;
        var x2 = circX(cx, 150, angle);
        var y2 = circY(cy, 150, angle);
        var p1 = cacheAdd(s2, 5, x2, y2);
        T.to(p1, .75, {
            x: cx,
            y: cy,
            scaleX: 0,
            scaleY: 0,
            ease: ez.Qin,
            onComplete: function() {
                cRem(5, p1);
            }
        });
        T.delayedCall(.03, function() {
            doit(--spellCount);
        });
    }
    var cx = MOB[Slot].offsetLeft + mob[Slot].cX;
    var cy = MOB[Slot].offsetTop + mob[Slot].cY;
    if (GLB.videoSetting !== "Low") {
        spellCount *= 2;
        if (GLB.videoSetting === "High") {
            spellCount *= 2;
        }
        doit(spellCount);
    }
}

function animateStasis(spellColor, spellSize, Slot) { // 20*.5
    stopMob(Slot);
    var s2 = img(spellColor + "particle50");

    function doit() {
        if (!mob[Slot].stasisFieldStatus ||
            mob[Slot].name === '') {
            mob[Slot].stasisFieldStatus = false;
            return;
        }
        var angle = M.random() * 360;
        var x = circX(cx, 150, angle);
        var y = circY(cy, 150, angle);
        var p2 = cacheAdd(s2, 5, x, y);
        T.to(p2, .75, {
            x: cx,
            y: cy,
            scaleX: 0,
            scaleY: 0,
            ease: ez.Qin,
            onComplete: function() {
                cRem(5, p2);
            }
        });
        var angle = M.random() * 360;
        var x2 = circX(cx, 150, angle);
        var y2 = circY(cy, 150, angle);
        var p1 = cacheAdd(s2, 5, x2, y2);
        T.to(p1, .75, {
            x: cx,
            y: cy,
            scaleX: 0,
            scaleY: 0,
            ease: ez.Qin,
            onComplete: function() {
                cRem(5, p1);
            }
        });
        T.delayedCall(.01, function() {
            doit();
        });
    }
    var cx = MOB[Slot].offsetLeft + mob[Slot].cX;
    var cy = MOB[Slot].offsetTop + mob[Slot].cY;
    doit();
}

// cast projectile spells
function castProjectile(spellColor, spellSize, Slot, attackCharmedMob, charmPetAttack, attackPet, breath) {
    var img1 = spellColor + "particle200";
    var imgsize = 200;
    if (spellColor === "red") {
        img1 = 'fireball';
        imgsize = 800;
    } else if (spellColor === "blue") {
        img1 = 'glacialSpike';
        imgsize = 800;
    }
    var centerPointx = MOB[Slot].offsetLeft + mob[Slot].cX;
    var centerPointy = MOB[Slot].offsetTop + mob[Slot].cY;
    var e1 = can(img1, 5, centerPointx - (imgsize / 2), centerPointy - (imgsize / 2), spellSize, spellSize, true, true);
    if (attackCharmedMob === undefined && attackPet === undefined) { // hitting me
        T.to(e1, .5, {
            y: 720,
            x: 640,
            scaleX: (spellSize / imgsize) * 3,
            scaleY: (spellSize / imgsize) * 3,
            ease: ez.sin,
            onComplete: function() {
                cRem(5, e1);
            }
        });
        return;
    }
    if (attackPet === true) { // pet
        var x2 = MOB[5].offsetLeft + (petWidth / 2);
        var y2 = MOB[5].offsetTop + (petHeight / 2);
        T.to(e1, .4, {
            y: y2,
            x: x2,
            scaleX: (spellSize / imgsize) * 1.5,
            scaleY: (spellSize / imgsize) * 1.5,
            ease: ez.sin,
            onComplete: function() {
                cRem(5, e1);
            }
        });
        return;
    }
    if (attackCharmedMob && charmPetAttack === undefined) { //mobs attack my charmed pet
        var x2 = MOB[charmSlot].offsetLeft + (mob[charmSlot].imageWidth / 2);
        var y2 = MOB[charmSlot].offsetTop + (mob[charmSlot].imageHeight / 2);
        T.to(e1, .4, {
            y: y2,
            x: x2,
            scaleX: (spellSize / imgsize) * 1.5,
            scaleY: (spellSize / imgsize) * 1.5,
            ease: ez.sin,
            onComplete: function() {
                cRem(5, e1);
            }
        });
        return;
    }
    if (attackCharmedMob && charmPetAttack !== undefined) { //charmed pet attacks my target
        var x2 = MOB[TGT].offsetLeft + (mob[TGT].imageWidth / 2);
        var y2 = MOB[TGT].offsetTop + (mob[TGT].imageHeight / 2);
        T.to(e1, .4, {
            y: y2,
            x: x2,
            scaleX: (spellSize / imgsize) * 1.5,
            scaleY: (spellSize / imgsize) * 1.5,
            ease: ez.sin,
            onComplete: function() {
                cRem(5, e1);
            }
        });
    }
}

function mobDotFinish(spellColor, spellSize, spellCount, Slot, targetCharm, targetPet) {
    //mob DoT falling particles
    if (spellCount === 0 || GLB.videoSetting !== "High") {
        return;
    }

    function doit() {
        // I am hit by dot
        if (targetPet === undefined && targetCharm === undefined) {
            var centerPointx = (M.random() * (1290) - 5);
            var centerPointy = (M.random() * (250)) + 25;
            var p1 = can(spellColor + "particle50", 6, centerPointx, centerPointy, 25, 25);
            T.to(p1, .75, {
                x: "+=12",
                y: "+=" + 155,
                scaleX: 0,
                scaleY: 0,
                ease: ez.Qin,
                onComplete: function() {
                    cRem(6, p1);
                }
            });
        } else if (targetPet === true) {
            var randomLeft = (M.random() * (200)) - 100;
            var randomBottom = (M.random() * (50)) - 25;
            var centerPointx = leftAdjust + randomLeft;
            var centerPointy = topAdjust + randomBottom;
            var p1 = can(spellColor + "particle50", 6, centerPointx, centerPointy, 25, 25);
            T.to(p1, .75, {
                y: '+=100',
                scaleX: 0,
                scaleY: 0,
                ease: ez.Qin,
                onComplete: function() {
                    cRem(6, p1);
                }
            });
        } else if (targetCharm === true) { //charmed mob is target
            var randomLeft = (M.random() * mob[charmSlot].imageWidth) - halfWidth;
            var randomBottom = (M.random() * (50)) - 25;
            var centerPointx = leftAdjust + randomLeft;
            var centerPointy = topAdjust + randomBottom;
            var p1 = can(spellColor + "particle50", 6, centerPointx, centerPointy, 25, 25);
            T.to(p1, .75, {
                y: '+=100',
                scaleX: 0,
                scaleY: 0,
                ease: ez.Qin,
                onComplete: function() {
                    cRem(6, p1);
                }
            });
        } else { // charmed pet targets mob
            var randomLeft = (M.random() * (mob[targetCharm].imageWidth)) - halfWidth;
            var randomBottom = (M.random() * (50)) - 25;
            var centerPointx = leftAdjust + randomLeft;
            var centerPointy = topAdjust + randomBottom;
            var p1 = can(spellColor + "particle50", 6, centerPointx, centerPointy, 25, 25);
            T.to(p1, .75, {
                y: '+=100',
                scaleX: 0,
                scaleY: 0,
                ease: ez.Qin,
                onComplete: function() {
                    cRem(6, p1);
                }
            });
        }
        if (spellCount > 0) {
            T.delayedCall(.015, function() {
                doit(--spellCount);
            });
        }
    }
    if (targetPet === true) {
        var leftAdjust = MOB[5].offsetLeft + (petWidth / 2) - spellSize;
        var topAdjust = MOB[5].offsetTop;
    } else if (targetCharm === true) {
        // mob targets my pet with dot FIX THIS SHIT
        var halfWidth = (mob[charmSlot].imageWidth / 2);
        var leftAdjust = MOB[charmSlot].offsetLeft + halfWidth - spellSize;
        var topAdjust = MOB[charmSlot].offsetTop;
    } else if (targetCharm >= 0 && targetCharm <= 4) { // this is if charmed mob targets pet
        var halfWidth = (mob[targetCharm].imageWidth / 2);
        var leftAdjust = (MOB[targetCharm].offsetLeft + halfWidth - spellSize);
        var topAdjust = MOB[targetCharm].offsetTop;
    }
    doit();
}

function animateStun(Slot, stunDuration) {
    if (GLB.videoSetting !== "High") {
        return;
    }
    if (Slot === 5) {
        var foo = petWidth;
    } else {
        var foo = mob[Slot].imageWidth;
    }
    var targetsWidth = ((foo) / 2);
    var topAdjust = MOB[Slot].offsetTop;
    var leftAdjust = MOB[Slot].offsetLeft + targetsWidth;
    var s2 = new C.Shape();
    s2.graphics.beginFill("#ffa")
        .setStrokeStyle(1)
        .beginStroke("#000")
        .drawPolyStar(0, 0, 10, 5, .7, 0);
    s2.cache(-5, -5, 10, 10);
    var s1 = s2.cacheCanvas;

    function doit1() {
        if (mob[Slot].fallingStatus === true || mob[Slot].stunStatus === false || mob[Slot].name === '') {
            return;
        }
        var s = new C.Bitmap(s1);
        s.set({
            x: leftAdjust + M.random() * (100) - 50,
            y: topAdjust + M.random() * (30),
            regX: 5,
            regY: 5
        });
        stage[5].addChild(s);
        T.to(s, .5, {
            y: "-=" + 20,
            x: "+=" + (M.random() * (40) - 20),
            rotation: (M.random() * (720) - 360),
            onComplete: function() {
                cRem(5, s);
            }
        });
        T.to(s, .1, {
            delay: .35,
            alpha: 0
        });
        mob[Slot].animateStun = T.delayedCall(.05, doit1);
    }
    //pet
    function doit2() {
        if (petHp <= 0 || petBashStatus === false) {
            return;
        }
        var s = new C.Bitmap(s1);
        s.set({
            x: leftAdjust + M.random() * (100) - 50,
            y: topAdjust + M.random() * (30)
        });
        stage[6].addChild(s);
        T.to(s, .66, {
            y: "-=" + 20,
            x: "+=" + (M.random() * (40) - 20),
            rotation: (M.random() * (720) - 360),
            onComplete: function() {
                cRem(6, s);
            }
        });
        mob[Slot].animateStun = T.delayedCall(.05, doit2);
    }
    if (Slot !== 5) {
        doit1();
    } else {
        doit2();
    }
}

function animateBlind(Slot, blindDuration) {
    blindDuration -= 50;
    if (blindDuration <= 0) {
        return;
    }
    if (mob[Slot].hp <= 0) {
        return;
    }
    if (mob[Slot].sleepStatus === false) {
        return;
    }

    function doit() {
        if (blindDuration <= 0) {
            return;
        }
        if (mob[Slot].hp <= 0) {
            return;
        }
        if (mob[Slot].sleepStatus === false) {
            return;
        }
        if (mob[Slot].attackStatus === 1) {
            return;
        }
        animateBlindSmoke(Slot);
        T.delayedCall(.05, function() {
            doit();
        });
    }
    doit();
}

function animateBlindSmoke(Slot) {
    var targetsWidth = ((mob[Slot].imageWidth) / 2);
    var randomLeft = (M.random() * (60) - 60);
    var randomBottom = (M.random() * 60);
    var topAdj = (MOB[Slot].offsetTop + randomBottom);
    var leftAdjust = (MOB[Slot].offsetLeft + targetsWidth + randomLeft);
    var e1 = can('blindImage', 5, leftAdjust, topAdj, 50, 50, true);
    T.to(e1, 1.5, {
        startAt: {
            alpha: .7
        },
        alpha: 0,
        scaleX: 4,
        scaleY: 4
    });
}

function animateFear(Slot, fearDuration, triggerFlag, opacityFlag) {
    var finishFear = false;
    fearDuration -= 100;
    if (fearDuration <= 0) {
        finishFear = true;
    }
    if (Slot !== 5) {
        if (mob[Slot].name === '' ||
            mob[Slot].fearStatus === false) {
            finishFear = true;
        }
    } else {
        if (petHp <= 0 ||
            petFearStatus === false) {
            finishFear = true;
        }
    }
    if (finishFear === true) {
        $("#fearIcon" + Slot).remove();
        stopMob(Slot);
        mob[Slot].fearAnimate.kill();
        if (petHp > 0 && Slot === 5) {
            $NG.mob5.stop(true, false);
        }
        if (mob[Slot].name === '' && Slot !== 5) {
            hideMob(Slot);
        }
        return;
    }
    // add skull image once
    if (triggerFlag === true) {
        if (Slot === 5) {
            var targetsWidth = petWidth / 2;
        } else {
            var targetsWidth = M.ceil((mob[Slot].imageWidth) / 2);
        }
        var randomLeft = M.random() * (50) - 25;
        var bottomAdjust = M.ceil(766 - MOB[Slot].offsetTop);
        var leftAdjust = M.ceil(MOB[Slot].offsetLeft + targetsWidth - 40);
        mob[Slot].fearAnimate.kill();
        $("#fearIcon" + Slot).remove();
        triggerFlag = false;
        var myH1 = $('<img>', {
            id: 'fearIcon' + Slot
        }).css({
            position: "absolute",
            height: 80,
            width: 80,
            bottom: bottomAdjust,
            left: leftAdjust,
            opacity: .7
        }).attr("src", "/images1/fearImage2.png");
        if (Slot <= 4) {
            if (GLB.videoSetting === "High") {
                $NG.eWin.append(myH1.css({
                    opacity: opacityFlag
                }));
            }
        } else {
            if (GLB.videoSetting === "High") {
                $NG.eWin2.append(myH1.css({
                    opacity: opacityFlag
                }));
            }
        }
        T.to('#fearIcon' + Slot, 1, {
            rotation: 360,
            force3D: "auto",
            repeat: -1,
            ease: ez.lin
        });
        T.to("#fearIcon" + Slot, .66, {
            opacity: .2,
            force3D: "auto",
            yoyo: true,
            repeat: -1
        });
        T.to(MOB[Slot], .033, {
            startAt: {
                left: "-=3"
            },
            left: "+=3",
            force3D: "auto",
            yoyo: true,
            repeat: -1,
            ease: ez.lin
        });
    }
    mob[Slot].fearAnimate = T.delayedCall(.1, function() {
        animateFear(Slot, fearDuration, triggerFlag, opacityFlag);
    });
}

function maxAll() {
    if (dev) {
        my.level = 99;
        maxAllSkills();
        maxTalents();
        unlockQuests();
        P.eq[12].damage = 255;
        P.eq[12].dex = 255;
        P.eq[12].haste = -100;
        P.eq[12].globalHaste = -100;
        P.eq[12].castingHaste = -100;
        P.eq[12].hpRegen = 3555;
        P.eq[12].mpRegen = 3555;
        P.eq[12].hp = 2534;
    }
}

function getItems() {
    if (dev) {
        mob[2].level = 99;
        while(typeof findFirstInvSlot() === 'number'){
            getLoot(2);
        }
    }
}

function animateRoot(Slot, rootFlag) {
    function clearRoot(Slot) {
        $("#rootIcon" + Slot + ",#rootBuffIcon" + Slot).remove();
        return;
    }

    function clearAllRoots() {
        for (var i = 0; i <= 4; i++) {
            $("#rootIcon" + i + ",#rootBuffIcon" + i).remove();
        }
        return;
    }
    if (mob[TGT].attackStatus === 1) {
        attackOn(true);
    }
    var randomRoot = M.ceil(M.random() * 10);
    var rootWeaken = 0;
    if (randomRoot === 10) {
        rootWeaken = 1;
        mob[Slot].rootStatus -= rootWeaken;
        T.to("#rootIcon" + Slot, .5, {
            height: "-=10",
            force3D: true,
            ease: ez.lin
        });
    }
    if (mob[Slot].rootStatus <= 0) {
        clearRoot(Slot);
        return;
    }
    if (mob[Slot].hp <= 0) {
        clearRoot(Slot);
        return;
    }
    if (mobsFound() === false) {
        clearRoot(Slot);
        clearAllRoots();
        return;
    }
    if (my.job === "Cleric") {
        if (my.talent3 >= 1) {
            var dam = minMax((alterationTotal()) * ((talent3() * 1.85) / 100), .9);
            g.myMagicDamage("magic", dam, Slot, checkCrit(), "elemental");
        }
    } else if (my.job === "Shaman") {
        if (my.talent3 >= 1) {
            var dam = minMax((alterationTotal() * (1 + (talent3() * .235))) / 20, .9);
            g.myMagicDamage("magic", dam, Slot, checkCrit(), "elemental");
        }
    }
    if (rootFlag === true) {
        rootFlag = false;
        var halfWidth = M.ceil((mob[Slot].imageWidth) / 2);
        var targetsHeight = mob[Slot].imageHeight;
        if (my.job !== "Wizard") {
            var bottomAdjust = M.ceil(718 - targetsHeight - MOB[Slot].offsetTop);
            var spellSize = 100;
        } else {
            var bottomAdjust = M.ceil(718 - targetsHeight - MOB[Slot].offsetTop);
            var spellSize = mob[Slot].imageWidth * .75;
            if (spellSize < 200) {
                spellSize = 200;
            } else if (spellSize > 600) {
                spellSize = 600;
            }
        }
        var leftAdjust = M.ceil(MOB[Slot].offsetLeft + halfWidth - (spellSize / 2));
        if (my.job !== "Wizard") {
            var myH1 = $('<img>', {
                id: 'rootIcon' + Slot
            }).css({
                position: "absolute",
                height: spellSize * 2,
                width: spellSize,
                bottom: bottomAdjust,
                left: leftAdjust,
                opacity: 1
            }).attr("src", "/images1/rootImage.png");
        } else {
            var myH1 = $('<img>', {
                id: 'rootIcon' + Slot
            }).css({
                position: "absolute",
                width: spellSize,
                bottom: bottomAdjust,
                left: leftAdjust,
                opacity: .7
            }).attr("src", "/images1/freezeRoot.png");
        }
        $NG.eWin.append(myH1);
    }
    T.delayedCall(1, function() {
        animateRoot(Slot, rootFlag);
    });
}

function encaseAnimation(Slot, freezeDuration) {
    if (GLB.videoSetting !== "High") {
        return;
    }
    if (mob[Slot].hp <= 0) {
        return;
    }
    if (mob[Slot].attackStatus === 1) {
        return;
    }
    var bottomAdjust = M.ceil(720 - mob[Slot].imageHeight - MOB[Slot].offsetTop + 35);
    var spellSize = mob[Slot].imageWidth;
    var leftAdjust = M.ceil(MOB[Slot].offsetLeft + mob[Slot].cX - (spellSize / 2));
    var spellHeight = (spellSize * 1.1);
    var myH1 = $('<img>', {
        id: 'iceIcon' + Slot
    }).css({
        position: "absolute",
        height: spellHeight,
        width: spellSize,
        bottom: bottomAdjust,
        left: leftAdjust
    }).attr("src", "/images1/iceIcon.png");
    $NG.eWin.append(myH1);
    playAudio('blue3')
}

function freezeAnimation(Slot, freezeDuration) {
    if (mob[Slot].name === "" || attackStatus === 1) {
        return;
    }
    if (GLB.videoSetting !== "High") {
        return;
    }
    var H1 = D.createElement('img');
    H1.src = "/images1/freezeRoot.png";
    H1.className = 'freezeIcon' + Slot;
    var w = mob[Slot].imageWidth * .6;
    if (w < 200) {
        w = 200;
    } else if (w > 400) {
        w = 400;
    }

    function makeIce(fooCount) {
        var randomLeft = (M.random() * (100) - 50);
        var newLeft = leftAdjust + randomLeft;
        var zig = H1.cloneNode();
        zig.style.cssText = "position:absolute; opacity:1; width:" + w + "px; bottom:" + bottomAdjust + "px; left: " + newLeft + "px;";
        bottomAdjust += (targetsHeight / 15);
        NG.eWin.appendChild(zig);
        T.set(zig, {
            rotationY: ~~(M.random() * (2)) * 180
        });
        if (fooCount <= 3) {
            T.delayedCall(.1, function() {
                makeIce(++fooCount);
            });
        }
    }
    var targetsWidth = (mob[Slot].imageWidth / 2);
    var targetsHeight = mob[Slot].imageHeight;
    var bottomAdjust = (720 - (targetsHeight + MOB[Slot].offsetTop));
    var leftAdjust = (MOB[Slot].offsetLeft + targetsWidth - (w / 2));
    $(".freezeIcon" + Slot).remove();
    makeIce(0);
}

function animateIceBlock() {
    var H1 = D.createElement('img');
    H1.style.cssText = "position:absolute; height: 797px; width: 1880px; bottom: -50px; left: -225px; opacity:0;";
    H1.src = "/images1/iceIcon.png";
    H1.id = 'iceBlock';
    NG.eWin2.appendChild(H1);
    T.to(H1, 1, {
        opacity: .9
    });
}


function sleepAnimation(Slot) {
    if (mob[Slot].hp <= 0 || mob[Slot].sleepStatus === false || mob[Slot].attackStatus === 1) {
        mob[Slot].sleepTimer.kill();
        mob[Slot].sleepStatus = false;
        return;
    }
    var targetsWidth = ((mob[Slot].imageWidth) / 2);
    var topAdj = (MOB[Slot].offsetTop + 20);
    var leftJitter = (M.random() * (100) - 50);
    var finalBottom = (M.random() * (10) + 50);
    var leftAdjust = (MOB[Slot].offsetLeft + targetsWidth - 10);
    var p4 = can('sleepImage', 5, leftAdjust, topAdj, 20, 20);
    mob[Slot].sleepTimer = T.delayedCall(.5, function() {
        sleepAnimation(Slot);
    });
    if (GLB.videoSetting !== "Low") {
        var tl = TM();
        tl.to(p4, .1, {
            y: "-=10"
        }).to(p4, 1, {
            y: "-=" + finalBottom,
            x: "+=" + leftJitter,
            alpha: 0,
            onComplete: function() {
                cRem(5, p4);
            }
        });
    }
}

//monsters.js
function checkRareMob(bar) { //returns true if rare is found and passes argument
    var foo = false;
    var rareOdds = 98;
    if (chainCounter >= 1) { // bonuses are only applied with a chain combo
        rareOdds -= (M.sqrt(chainCounter)); // chainCounter bonus can take it to 90% normal mob chance - zone bonus
        if (rareOdds <= 90) {
            rareOdds = 90;
        }
    }
    if (chainCounter === 0) {
        rareOdds += 2;
    }
    if (rangerTrackStatus == true) {
        if (my.job == "Ranger") {
            rareOdds = 90;
        } else {
            rareOdds = 95;
        }
    }
    if (M.random() * 100 >= rareOdds) {
        foo = true;
    }
    return foo;
}

function initChampTraits() {
    mobVicious = false;
    mobFrenzy = false;
    mobJuggernaut = false;
    mobTough = false;
    mobChromatic = false;
    mobSummoner = false;
    mobSprinter = false;
    mobVampiric = false;
    mobLamprey = false;
    mobShreddingAura = false;
    mobFireEnchanted = false;
    mobColdEnchanted = false;
    mobLightningEnchanted = false;
    mobPoisonEnchanted = false;
    mobMartyr = false;
    mobPhased = false;
    mobDauntless = false;
    mobCripplingAura = false;
    mobDisruptionAura = false;
    mobConvictionAura = false;
    mobConcussiveAura = false;
    mobEnsnaringAura = false;
    mobZealousAura = false;
}

function getMonster(count, rareMobFlag) {
    monsterFound = false;
    Mname = "";
    Mimg = "";
    Mlvl = 0;
    cX = 100;
    cY = 100;
    if (!count) {
        var count = 1;
        var rareMobFlag = checkRareMob();
        initChampTraits();
    }
    if (count >= 2010) {
        if (ambushStatus < 2) {
            T.delayedCall(.1, getMonster);
        }
        Mname = "";
        ambushStatus = 1;
        return;
    }
    if (count > 500) {
        rareMobFlag === false;
    }
    // single use skill flags
    MharmTouch = 1;
    Mrune = 1;
    Mwolf = 1;
    Mskeleton = 1;
    Melemental = 1;
    Mthorns = 1;
    Mlava = 1;
    Mresolution = 1;
    // single-use buffs
    Menrage = false;
    Mflurry = false;
    Mamp = false;
    Msanctuary = false;
    Mbarrier = false;
    Mdrain = false;
    MironMaiden = false;
    MlayHands = false;
    Msilence = false;
    Mflee = 0;
    // initialize monster values
    Mwidth = 200;
    MmaxHp = 0;
    Mhp = 0;
    Mxp = 0;
    Mstr = 0;
    Mdef = 100; //0 normal, 1 is 33%; 2 is 90%;
    Mint = 0;
    Mgold = 0;
    Mpoison = 100;
    Mmagic = 100;
    Mlightning = 100;
    Mfire = 100;
    Mcold = 100;
    Mskill = [];
    Mskill[1] = "kick";
    Mskill[2] = "kick";
    Mskill[3] = "kick";
    Mskill[4] = "bash"; //defaults
    Mfreq = 10;
    monsterMp = 20;
    monsterSpeed = 3000 * g.speed;
    McastSpeed = 2500 * g.speed;
    Mrare = 1;
    // default male sounds
    Maud1 = "blankAudio"; // atk roar
    Maud2 = "gethit3m"; // hit
    Maud3 = "death_mb"; //die
    Maud4 = "blankAudio"; // idle
    Maud5 = "blankAudio"; // cast
    Maud6 = "blankAudio"; // cast2
    var df = g.difficulty - 1;
    var Mjob = "";
    var _Z = myZone();
    var _SZ = mySubzone();
    if (_Z === "Fahlnir Citadel") {
        if (rareMobFlag == false) {
            var x = ~~((M.random() * 42));
            if (M.random() > .0011) {
                var z2 = M.random();
                if (P.Q[df].CastleMistmoore === 1 && _SZ === 1) {
                    if (z2 > .62) {
                        x = 29;
                    } else if (z2 < .33) {
                        x = 0;
                    } else {
                        x = 15;
                    }
                    if (P.Q[df].CM1 >= 8 && P.Q[df].CM2 >= 7 && P.Q[df].CM3 >= 6 && mobsFound() === false) {
                        x = 45;
                    }
                }
                if (P.Q[df].CastleMistmoore === 2 && _SZ === 2) {
                    if (z2 > .66) {
                        x = 18;
                    } else if (z2 > .41) {
                        x = 19;
                    } else if (z2 > .16) {
                        x = 14;
                    } else {
                        x = 40;
                    }
                    if (P.Q[df].CM1 >= 8 && P.Q[df].CM2 >= 6 && P.Q[df].CM3 >= 6 && P.Q[df].CM4 >= 4 && mobsFound() === false) {
                        x = 42;
                        delayedMonsterTimer();
                    }
                }
                if ((P.Q[df].CastleMistmoore === 3 && _SZ === 3) || (P.Q[df].CastleMistmoore > 3 && P.Q[df].repeatCm3 === false && _SZ === 3)) {
                    if (z2 > .75) {
                        x = 5;
                    } else if (z2 > .5) {
                        x = 3;
                    } else if (z2 > .25) {
                        x = 30;
                    } else {
                        x = 27;
                    }
                    if (P.Q[df].CM1 >= 7 && P.Q[df].CM2 >= 7 && P.Q[df].CM3 >= 7 && P.Q[df].CM4 >= 7) {
                        if (mobsFound() === false) {
                            delayedMonsterTimer();
                            if (P.Q[df].CM5 < 1) {
                                x = 43;
                                P.Q[df].CM5 = 1;
                            } else {
                                x = 44;
                                P.Q[df].CM6 = 1;
                            }
                        } else {
                            if (P.Q[df].CM5 < 1) {
                                x = 43;
                                P.Q[df].CM5 = 1;
                            }
                            if (P.Q[df].CM6 < 1) {
                                x = 44;
                                P.Q[df].CM6 = 1;
                            }
                        }
                    }
                }
            }
            if (x == 0) {
                Mname = "an initiate familiar";
                Mlvl = 32;
                Mimg = "a dark elf female";
                Mjob = "ROG";
            }
            if (x == 1) {
                Mname = "a dark elf noble";
                Mlvl = 32;
                Mimg = "a dark elf female";
                Mjob = "WIZ";
            }
            if (x == 2) {
                Mname = "a dark offerer";
                Mlvl = 33;
                Mimg = "a dark elf matron";
                Mjob = "NEC";
            }
            if (x == 3) {
                Mname = "a dark ritualist";
                Mlvl = 34;
                Mimg = "a dark elf matron";
                Mjob = "NEC";
            }
            if (x == 4) {
                Mname = "a dark sacrificer";
                Mlvl = 33;
                Mimg = "a dark elf matron";
                Mjob = "NEC";
            }
            if (x == 5) {
                Mname = "a deathly harbinger";
                Mlvl = 36;
                Mimg = "a dark elf male plate";
            }
            if (x == 6) {
                Mname = "a deathly herald";
                Mlvl = 34;
                Mimg = "a dark elf male plate";
            }
            if (x == 7) {
                Mname = "a deathly usher";
                Mlvl = 32;
                Mimg = "a dark elf male plate";
            }
            if (x == 8) {
                Mname = "a flouting gargoyle";
                Mlvl = 33;
                Mimg = "a gargoyle";
                Mwidth = 250;
            }
            if (x == 9) {
                Mname = "a ghastish ancille";
                Mlvl = 32;
                Mimg = "a dark elf female plate";
            }
            if (x == 10) {
                Mname = "a deathly usher";
                Mlvl = 32;
                Mimg = "a dark elf male plate";
            }
            if (x == 11) {
                Mname = "a ghostly ancille";
                Mlvl = 35;
                Mimg = "a dark elf female";
                Mjob = "WIZ";
            }
            if (x == 12) {
                Mname = "a ghoulish ancille";
                Mlvl = 33;
                Mimg = "a dark elf female plate";
            }
            if (x == 13) {
                Mname = "a glyphed aegis";
                Mlvl = 31;
                Mimg = "a dark elf male";
            }
            if (x == 14) {
                Mname = "a glyphed custodian";
                Mlvl = 33;
                Mimg = "a dark elf female";
                Mjob = "CLR";
            }
            if (x == 15) {
                Mname = "a glyphed familiar";
                Mlvl = 32;
                Mimg = "a dark elf female";
            }
            if (x == 16) {
                Mname = "a glyphed forbidder";
                Mlvl = 30;
                Mimg = "a dark elf female";
                Mjob = "CLR";
            }
            if (x == 17) {
                Mname = "a deathly usher";
                Mlvl = 32;
                Mimg = "a dark elf male plate";
            }
            if (x == 18) {
                Mname = "a glyphed guard";
                Mlvl = 32;
                Mimg = "a dark elf female";
            }
            if (x == 19) {
                Mname = "a glyphed sentry";
                Mlvl = 32;
                Mimg = "a dark elf male";
            }
            if (x == 20) {
                Mname = "a glyphed warder";
                Mlvl = 31;
                Mimg = "a dark elf male";
                Mjob = "CLR";
            }
            if (x == 21) {
                Mname = "a grinning gargoyle";
                Mlvl = 31;
                Mimg = "a gargoyle";
                Mwidth = 210;
            }
            if (x == 22) {
                Mname = "a deathly harbinger";
                Mlvl = 36;
                Mimg = "a dark elf male plate";
            }
            if (x == 23) {
                Mname = "a deathly herald";
                Mlvl = 34;
                Mimg = "a dark elf male plate";
            }
            if (x == 24) {
                Mname = "a deathly usher";
                Mlvl = 32;
                Mimg = "a dark elf male plate";
            }
            if (x == 25) {
                Mname = "a deathly herald";
                Mlvl = 34;
                Mimg = "a dark elf male plate";
            }
            if (x == 26) {
                Mname = "a jeering gargoyle";
                Mlvl = 34;
                Mimg = "a gargoyle";
                Mwidth = 230;
            }
            if (x == 27) {
                Mname = "a leering gargoyle";
                Mlvl = 36;
                Mimg = "a gargoyle";
                Mwidth = 250;
            }
            if (x == 28) {
                Mname = "a negotiator";
                Mlvl = 33;
                Mimg = "a dark elf female";
                Mjob = "ENC";
            }
            if (x == 29) {
                Mname = "a pledge familiar";
                Mlvl = 31;
                Mimg = "a dark elf female";
            }
            if (x == 30) {
                Mname = "a shadowy sage";
                Mlvl = 36;
                Mimg = "a dark elf female";
                Mjob = "WIZ";
            }
            if (x == 31) {
                Mname = "a shadowy scribe";
                Mlvl = 33;
                Mimg = "a dark elf female";
                Mjob = "WIZ";
            }
            if (x == 32) {
                Mname = "a shadowy scrivener";
                Mlvl = 31;
                Mimg = "a dark elf female";
                Mjob = "WIZ";
            }
            if (x == 33) {
                Mname = "a sneering gargoyle";
                Mlvl = 31;
                Mimg = "a gargoyle";
            }
            if (x == 34) {
                Mname = "a dark offerer";
                Mlvl = 33;
                Mimg = "a dark elf matron";
                Mjob = "NEC";
            }
            if (x == 35) {
                Mname = "a dark ritualist";
                Mlvl = 34;
                Mimg = "a dark elf matron";
                Mjob = "NEC";
            }
            if (x == 36) {
                Mname = "a dark sacrificer";
                Mlvl = 33;
                Mimg = "a dark elf matron";
                Mjob = "NEC";
            }
            if (x == 37) {
                Mname = "a shadowy sage";
                Mlvl = 36;
                Mimg = "a dark elf female";
                Mjob = "WIZ";
            }
            if (x == 38) {
                Mname = "a shadowy scribe";
                Mlvl = 33;
                Mimg = "a dark elf female";
                Mjob = "WIZ";
            }
            if (x == 39) {
                Mname = "a shadowy scrivener";
                Mlvl = 31;
                Mimg = "a dark elf female";
                Mjob = "WIZ";
            }
            if (x == 40) {
                Mname = "a negotiator";
                Mlvl = 33;
                Mimg = "a dark elf female";
                Mjob = "ENC";
            }
            if (x == 41) {
                Mname = "a wightish ancille";
                Mlvl = 33;
                Mimg = "a dark elf matron";
                Mjob = "NEC";
            }
            if (x == 42) {
                Mname = "Dragoon Reklyn";
                Mlvl = 33;
                Mimg = "a dark elf male plate";
                Mfreq = 4;
                Menrage = true;
                Mbarrier = true;
                Mrare = 0;
            }
            if (x == 43) {
                Mname = "Countess Varnia";
                Mlvl = 36;
                Mimg = "a dark elf matron";
                Mjob = "NEC";
                Mrare = 0;
            }
            if (x == 44) {
                Mname = "Zigruben";
                Mlvl = 36;
                Mimg = "a dark elf male plate";
                Mrare = 0;
                Mjob = "SK";
            }
            if (x == 45) {
                Mname = "Lieutenant Xagorn";
                Mlvl = 32;
                Mimg = "a dark elf male";
                Mrare = 0;
            }
        } else {
            Mrare = 0;
            var x = ~~(M.random() * (7));
            if (x == 0) {
                Mname = "Butler Armetrin";
                Mlvl = 33;
                Mimg = "a dark elf male";
                Mjob = "SK";
            }
            if (x == 1) {
                Mname = "Vindemir Remadi";
                Mlvl = 35;
                Mimg = "a dark elf male plate";
                Mfreq = 4;
                Mjob = "SK";
            }
            if (x == 2) {
                Mname = "Arlyssa Divin";
                Mlvl = 34;
                Mimg = "a dark elf female";
                Mjob = "NEC";
            }
            if (x == 3) {
                Mname = "Maid Tarmuni";
                Mlvl = 33;
                Mimg = "a dark elf female";
                Mfreq = 4;
                Mjob = "NEC";
            }
            if (x == 4) {
                Mname = "Serena Artulis";
                Mlvl = 32;
                Mimg = "a dark elf female";
                Mjob = "ENC";
                Msanctuary = true;
            }
            if (x == 5) {
                Mname = "an imp familiar";
                Mlvl = 33;
                Mimg = "an imp";
                Mwidth = 170;
                Mflurry = true;
            }
            if (x == 6) {
                Mname = "Methrudin";
                Mlvl = 31;
                Mimg = "a shadowed man";
                Mwidth = 180;
                Mjob = "WIZ";
                MironMaiden = true;
                Msanctuary = true;
            }
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 32) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 32 || Mlvl > 33) {
                a = 0;
            }
        } else {
            if (Mlvl < 33) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Lanfeld Outpost") {
        if (rareMobFlag == false) {
            var x = ~~((M.random() * (10)));
            if (M.random() > .0011) {
                if (P.Q[df].Crushbone === 1 && _SZ === 1) {
                    var z2 = M.random();
                    if (z2 > .5) {
                        x = 5;
                    } else if (z2 < .25) {
                        x = 1;
                    } else {
                        x = 8;
                    }
                }
                if (P.Q[df].Crushbone === 2 && _SZ === 2) {
                    var z2 = M.random();
                    if (z2 > .66) {
                        x = 4;
                    } else if (z2 < .33) {
                        x = 3;
                    } else {
                        x = 7;
                    }
                    if (P.Q[df].CB1 >= 7 && P.Q[df].CB2 >= 7 && P.Q[df].CB3 >= 7 && mobsFound() === false) {
                        x = 10;
                    }
                }
                if (P.Q[df].Crushbone >= 3 && P.Q[df].repeatCB === false && _SZ === 3) {
                    var z2 = M.random();
                    if (z2 > .58) {
                        x = 6;
                    } else if (z2 < .33) {
                        x = 0;
                    } else {
                        x = 2;
                    }
                    if (P.Q[df].CB1 >= 10 && P.Q[df].CB2 >= 8 && P.Q[df].CB3 >= 6) {
                        if (mobsFound() === false) {
                            x = 11;
                        }
                    }
                }
            }
            if (x == 0) {
                Mname = "an orc royal guard";
                Mlvl = 19;
                Mimg = "an orc";
                Mwidth = 220;
            }
            if (x == 1) {
                Mname = "an orc centurion";
                Mlvl = 16;
                Mimg = "an orc";
                Mwidth = 200;
            }
            if (x == 2) {
                Mname = "an orc emissary";
                Mlvl = 19;
                Mimg = "an orc";
                Mwidth = 240;
            }
            if (x == 3) {
                Mname = "an orc legionnaire";
                Mlvl = 18;
                Mimg = "an orc";
                Mwidth = 260;
            }
            if (x == 4) {
                Mname = "an orc oracle";
                Mlvl = 17;
                Mimg = "an orc";
                Mwidth = 220;
                Mjob = "SHM";
            }
            if (x == 5) {
                Mname = "an orc pawn";
                Mlvl = 15;
                Mimg = "an orc";
                Mwidth = 160;
            }
            if (x == 6) {
                Mname = "an orc scoutsman";
                Mlvl = 18;
                Mimg = "an orc";
                Mwidth = 210;
            }
            if (x == 7) {
                Mname = "an orc lookout";
                Mlvl = 17;
                Mimg = "an orc";
                Mwidth = 210;
            }
            if (x == 8) {
                Mname = "an orc slaver";
                Mlvl = 17;
                Mimg = "an orc";
                Mwidth = 240;
            }
            if (x == 9) {
                Mname = "an orc warden";
                Mlvl = 17;
                Mimg = "an orc";
                Mwidth = 250;
            }
            if (x == 10) {
                Mname = "an orc warlord";
                Mlvl = 18;
                Mimg = "an orc";
                Mwidth = 260;
                Mfreq = 8;
                Menrage = true;
                MironMaiden = true;
                Mrare = 0;
            }
            if (x == 11) {
                Mname = "Chief Grimden";
                Mlvl = 20;
                Mimg = "grimden";
                Mwidth = 370;
                Mfreq = 8;
                Mrare = 3;
            }
        } else {
            Mrare = 0;
            var x = ~~((M.random() * (4)));
            if (x == 0) {
                Mname = "Soothsayer Kundo";
                Mlvl = 18;
                Mimg = "an orc";
                Mwidth = 240;
                Mjob = "SHM";
                Msanctuary = true;
            }
            if (x == 1) {
                Mname = "Lord Xavol";
                Mlvl = 17;
                Mimg = "an orc";
                Mwidth = 280;
            }
            if (x == 2) {
                Mname = "an orc slavedriver";
                Mlvl = 16;
                Mimg = "an orc";
                Mwidth = 250;
            }
            if (x == 3) {
                Mname = "an orc sergeant";
                Mlvl = 15;
                Mimg = "an orc";
                Mwidth = 240;
                Mbarrier = true;
            }
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 17) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 17 || Mlvl > 18) {
                a = 0;
            }
        } else {
            if (Mlvl < 18) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Arcturin's Crypt") {
        if (rareMobFlag == false) {
            var x = ~~((M.random() * (20)));
            if (M.random() > .0011) {
                var z2 = M.random();
                if (P.Q[df].EstateofUnrest === 1 && _SZ === 1) {
                    if (z2 > .56) {
                        x = 5;
                    } else if (z2 < .33) {
                        x = 2;
                    } else {
                        x = 14;
                    }
                }
                if (P.Q[df].EstateofUnrest === 2 && _SZ === 2) {
                    if (z2 > .68) {
                        x = 19;
                    } else if (z2 < .33) {
                        x = 11;
                    } else {
                        x = 0;
                    }
                    if (P.Q[df].ER1 >= 10 && P.Q[df].ER2 >= 8 && P.Q[df].ER3 >= 6 && mobsFound() === false) {
                        x = 20;
                        delayedMonsterTimer();
                    }
                }
                if (P.Q[df].EstateofUnrest >= 3 && P.Q[df].repeatER === false && _SZ === 3) {
                    if (z2 > .69) {
                        x = 4;
                    } else if (z2 > .38) {
                        x = 6;
                    } else if (z2 > .19) {
                        x = 8;
                    } else {
                        x = 18;
                    }
                    if (P.Q[df].ER1 >= 8 &&
                        P.Q[df].ER2 >= 8 &&
                        P.Q[df].ER3 >= 5 &&
                        P.Q[df].ER4 >= 5 &&
                        mobsFound() === false) {
                        x = 21;
                    }
                }
            }
            if (x == 0) {
                Mname = "a nymph";
                Mlvl = 30;
                Mimg = "a faerie";
                Mjob = "WIZ";
            }
            if (x == 1) {
                Mname = "a werewolf";
                Mlvl = 31;
                Mimg = "a werewolf";
                Mdrain = true;
            }
            if (x == 2) {
                Mname = "a tormented dead";
                Mlvl = 28;
                Mimg = "a male zombie";
            }
            if (x == 3) {
                Mname = "a dark cephalid";
                Mlvl = 32;
                Mimg = "a terror";
                Mjob = "ENC"
            }
            if (x == 4) {
                Mname = "a mortuary fungus";
                Mlvl = 31;
                Mimg = "a fungus";
            }
            if (x == 5) {
                Mname = "a death beetle";
                Mlvl = 27;
                Mimg = "a beetle";
                Mwidth = 320;
            }
            if (x == 6) {
                Mname = "a dusty werewolf";
                Mlvl = 31;
                Mimg = "a werewolf";
            }
            if (x == 7) {
                Mname = "a dark boned skeleton";
                Mlvl = 29;
                Mimg = "a dark skeleton";
            }
            if (x == 8) {
                Mname = "a cephalid subverter";
                Mlvl = 32;
                Mimg = "a terror";
                Mjob = "ENC"
            }
            if (x == 9) {
                Mname = "a barbed bone skeleton";
                Mlvl = 31;
                Mimg = "a dark skeleton";
                Mthorns = 0;
            }
            if (x == 10) {
                Mname = "an undead brewer";
                Mlvl = 30;
                Mimg = "a male zombie";
            }
            if (x == 11) {
                Mname = "a crazed ghoul";
                Mlvl = 30;
                Mimg = "a ghoul";
                Mwidth = 350;
            }
            if (x == 12) {
                Mname = "a skeletal monk";
                Mlvl = 29;
                Mimg = "a dark skeleton";
                Mjob = "MNK";
            }
            if (x == 13) {
                Mname = "a lurking mummy";
                Mlvl = 30;
                Mimg = "a mummy";
            }
            if (x == 14) {
                Mname = "a lumbering mummy";
                Mlvl = 29;
                Mimg = "a mummy";
            }
            if (x == 15) {
                Mname = "a greater skeleton";
                Mlvl = 28;
                Mimg = "a skeleton";
            }
            if (x == 16) {
                Mname = "a greater dark bone";
                Mlvl = 30;
                Mimg = "a dark skeleton";
            }
            if (x == 17) {
                Mname = "a ghoul";
                Mlvl = 29;
                Mimg = "a ghoul";
                Mwidth = 320;
            }
            if (x == 18) {
                Mname = "a festering hag";
                Mlvl = 32;
                Mimg = "a female zombie";
                Mjob = "WIZ";
            }
            if (x == 19) {
                Mname = "a dry bone skeleton";
                Mlvl = 29;
                Mimg = "a skeleton";
            }
            if (x == 20) {
                Mname = "Arch Duke of Artremia";
                Mlvl = 31;
                Mimg = "a male zombie";
                Mflurry = true;
                Mbarrier = true;
                Mrare = 0;
            }
            if (x == 21) {
                Mname = "Arcturin, the Lich King";
                Mlvl = 32;
                Mimg = "garanel rucksif";
                Mwidth = 280;
                Mfreq = 6;
                Mrare = 3;
            }
        } else {
            Mrare = 0;
            var x = ~~(M.random() * 5);
            if (x == 0) {
                Mname = "Crackshot";
                Mlvl = 28;
                Mimg = "a beetle";
                Mfreq = 8;
                Mflurry = true;
                Mwidth = 450;
            }
            if (x == 1) {
                Mname = "Sarth Dimnog";
                Mlvl = 28;
                Mimg = "a ghoul";
                Mwidth = 330;
                Mjob = "CLR";
                Msanctuary = true;
            }
            if (x == 2) {
                Mname = "Murgle the Intrepid";
                Mlvl = 29;
                Mimg = "a male zombie";
                Mfreq = 8;
                Menrage = true;
                Mskill[2] = "engulfing darkness";
                Mskill[4] = "poison cloud";
                Mfreq = 8;
                MharmTouch = 0;
                Mskeleton = 0;
            }
            if (x == 3) {
                Mname = "an undead bartender";
                Mlvl = 30;
                Mimg = "a male zombie";
                Mbarrier = true;
            }
            if (x == 4) {
                Mname = "Roble Shermith";
                Mlvl = 31;
                Mimg = "a ghoul";
                Mwidth = 320;
                Mjob = "NEC";
                Msanctuary = true;
            }
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 29) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 29 || Mlvl > 31) {
                a = 0;
            }
        } else {
            if (Mlvl < 31) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Salubrin Forest") {
        if (rareMobFlag == false) {
            var x = ~~((M.random() * (28)));
            var z = M.random();
            if (P.Q[df].GreaterFaydark === 1 && z > .0011) {
                x = 27;
            }
            if (P.Q[df].GreaterFaydark === 3 && z > .0011) {
                if (M.random() > .5) {
                    x = 25;
                } else {
                    x = 24;
                }
            }
            if (x == 0) {
                Mname = "an orc centurion";
                Mlvl = 2;
                Mimg = "an orc";
                Mwidth = 200;
            }
            if (x == 1) {
                Mname = "a prowling wolf";
                Mlvl = 1;
                Mimg = "a wolf";
                Mwidth = 280;
            }
            if (x == 2) {
                Mname = "a coyote";
                Mlvl = 3;
                Mimg = "a wolf";
                Mwidth = 330;
            }
            if (x == 3) {
                Mname = "a young coyote";
                Mlvl = 2;
                Mimg = "a wolf";
                Mwidth = 270;
                Mwidth = 270;
            }
            if (x == 4) {
                Mname = "an orc oracle";
                Mlvl = 3;
                Mimg = "an orc";
                Mwidth = 200;
                Mjob = "SHM";
            }
            if (x == 5) {
                Mname = "an orc centurion";
                Mlvl = 2;
                Mimg = "an orc";
                Mwidth = 200;
            }
            if (x == 6) {
                Mname = "an orc centurion";
                Mlvl = 2;
                Mimg = "an orc";
                Mwidth = 200;
            }
            if (x == 7) {
                Mname = "a faerie";
                Mlvl = 2;
                Mimg = "a faerie";
                Mwidth = 150;
                Mjob = "RNG";
            }
            if (x == 8) {
                Mname = "an orc shaman";
                Mlvl = 2;
                Mimg = "an orc";
                Mwidth = 200;
                Mjob = "SHM";
            }
            if (x == 9) {
                Mname = "a faerie courtier";
                Mlvl = 3;
                Mimg = "a faerie";
                Mwidth = 150;
                Mjob = "RNG";
            }
            if (x == 10) {
                Mname = "a faerie duchess";
                Mlvl = 3;
                Mimg = "a faerie";
                Mwidth = 150;
                Mjob = "RNG";
            }
            if (x == 11) {
                Mname = "a faerie guard";
                Mlvl = 3;
                Mimg = "a faerie";
                Mwidth = 150;
                Mjob = "RNG";
            }
            if (x == 12) {
                Mname = "a faerie maiden";
                Mlvl = 3;
                Mimg = "a faerie";
                Mwidth = 150;
                Mjob = "RNG";
            }
            if (x == 13) {
                Mname = "a faerie noble";
                Mlvl = 1;
                Mimg = "a faerie";
                Mwidth = 150;
                Mjob = "RNG";
            }
            if (x == 14) {
                Mname = "a faerie maiden";
                Mlvl = 3;
                Mimg = "a faerie";
                Mwidth = 150;
                Mjob = "RNG";
            }
            if (x == 15) {
                Mname = "a faerie noble";
                Mlvl = 3;
                Mimg = "a faerie";
                Mwidth = 150;
            }
            if (x == 16) {
                Mname = "a faerie royal guard";
                Mlvl = 3;
                Mimg = "a faerie";
                Mwidth = 150;
                Mjob = "RNG";
            }
            if (x == 17) {
                Mname = "a faerie troublemaker";
                Mlvl = 1;
                Mimg = "a faerie";
                Mwidth = 150;
                Mjob = "RNG";
            }
            if (x == 18) {
                Mname = "an orc pawn";
                Mlvl = 1;
                Mimg = "an orc";
                Mwidth = 160;
            }
            if (x == 19) {
                Mname = "an orc pawn";
                Mlvl = 1;
                Mimg = "an orc";
                Mwidth = 160;
            }
            if (x == 20) {
                Mname = "an orc pawn";
                Mlvl = 1;
                Mimg = "an orc";
                Mwidth = 160;
            }
            if (x == 21) {
                Mname = "an orc pawn";
                Mlvl = 1;
                Mimg = "an orc";
                Mwidth = 160;
            }
            if (x == 22) {
                Mname = "a willowisp";
                Mlvl = 3;
                Mimg = "a wisp";
            }
            if (x == 23) {
                Mname = "a decaying skeleton";
                Mlvl = 1;
                Mimg = "a skeleton";
            }
            if (x == 24) {
                Mname = "an orc centurion";
                Mlvl = 2;
                Mimg = "an orc";
                Mwidth = 200;
            }
            if (x == 25) {
                Mname = "an orc hatchetman";
                Mlvl = 3;
                Mimg = "an orc";
                Mwidth = 200;
            }
            if (x == 26) {
                Mname = "an orc oracle";
                Mlvl = 3;
                Mimg = "an orc";
                Mwidth = 200;
                Mjob = "SHM";
            }
            if (x == 27) {
                Mname = "an orc pawn";
                Mlvl = 1;
                Mimg = "an orc";
                Mwidth = 160;
            }
        } else {
            Mrare = 0;
            var x = ~~(M.random() * 2);
            if (x == 0) {
                Mname = "Corpsefire";
                Mlvl = 1;
                Mimg = "a male zombie";
                Mfreq = 6;
                Mskill[1] = "fireball";
                Mskill[2] = "conflagration";
                Mskill[3] = "fireball";
            }
            if (x == 1) {
                Mname = "Sergeant Boggun";
                Mlvl = 2;
                Mimg = "an orc";
                Mwidth = 215;
                Msanctuary = true;
            }
        }
    }
    if (_Z === "Viston's Redoubt") {
        if (_SZ !== 4) {
            if (rareMobFlag == false) {
                var x = ~~((M.random() * (22)));
                if (M.random() > .0011) {
                    var z2 = M.random();
                    if (P.Q[df].KedgeKeep === 1 && _SZ === 1) {
                        if (z2 > .66) {
                            x = 1;
                        } else if (z2 < .33) {
                            x = 14;
                        } else {
                            x = 12;
                        }
                        if (P.Q[df].KK1 >= 8 && P.Q[df].KK2 >= 8 && P.Q[df].KK3 >= 8 && mobsFound() === false) {
                            x = 25;
                            delayedMonsterTimer();
                        }
                    }
                    if (P.Q[df].KedgeKeep === 2 && _SZ === 2) {
                        if (z2 > .69) {
                            x = 9;
                        } else if (z2 > .39) {
                            x = 13;
                        } else if (z2 > .18) {
                            x = 4;
                        } else {
                            x = 6;
                        }
                        if (P.Q[df].KK1 >= 8 && P.Q[df].KK2 >= 8 && P.Q[df].KK3 >= 5 && P.Q[df].KK4 >= 5 && mobsFound() === false) {
                            x = 22;
                            delayedMonsterTimer();
                        }
                    }
                    if (P.Q[df].KedgeKeep === 3 && _SZ === 3 || (P.Q[df].KedgeKeep > 3 && P.Q[df].repeatKk3 === false && _SZ === 3)) {
                        if (z2 > .64) {
                            x = 18;
                        } else if (z2 > .29) {
                            x = 17;
                        } else {
                            x = 21;
                        }
                        if (P.Q[df].KK1 >= 10 && P.Q[df].KK2 >= 10 && P.Q[df].KK3 >= 8) {
                            if (mobsFound() === false) {
                                delayedMonsterTimer();
                                if (P.Q[df].KK4 < 1) {
                                    x = 24;
                                    P.Q[df].KK4 = 1;
                                } else {
                                    x = 23;
                                    P.Q[df].KK5 = 1;
                                }
                            } else {
                                if (P.Q[df].KK4 < 1) {
                                    x = 24;
                                    P.Q[df].KK4 = 1;
                                }
                                if (P.Q[df].KK5 < 1) {
                                    x = 23;
                                    P.Q[df].KK5 = 1;
                                }
                            }
                        }
                    }
                }
                if (x == 0) {
                    Mname = "a gazing gargoyle";
                    Mlvl = 43;
                    Mimg = "a gargoyle";
                    Mwidth = 250;
                }
                if (x == 1) {
                    Mname = "a peering gargoyle";
                    Mlvl = 40;
                    Mimg = "a gargoyle";
                    Mwidth = 250;
                }
                if (x == 2) {
                    Mname = "a voracious gargoyle";
                    Mlvl = 43;
                    Mimg = "a gargoyle";
                    Mwidth = 250;
                }
                if (x == 3) {
                    Mname = "an afflicted gargoyle";
                    Mlvl = 44;
                    Mimg = "a gargoyle";
                    Mwidth = 250;
                }
                if (x == 4) {
                    Mname = "a lusting werewolf";
                    Mlvl = 42;
                    Mimg = "a werewolf";
                }
                if (x == 5) {
                    Mname = "a rapacious gargoyle";
                    Mlvl = 43;
                    Mimg = "a gargoyle";
                    Mwidth = 250;
                }
                if (x == 6) {
                    Mname = "a bloodthirsty bat";
                    Mlvl = 43;
                    Mimg = "a bat";
                    Mdrain = true;
                }
                if (x == 7) {
                    Mname = "a shrieking bat";
                    Mlvl = 41;
                    Mimg = "a bat";
                    Mdrain = true;
                }
                if (x == 8) {
                    Mname = "a prancing werewolf";
                    Mlvl = 42;
                    Mimg = "a werewolf";
                }
                if (x == 9) {
                    Mname = "a brooding imp";
                    Mlvl = 41;
                    Mimg = "an imp";
                }
                if (x == 10) {
                    Mname = "a fuming imp";
                    Mlvl = 41;
                    Mimg = "an imp";
                }
                if (x == 11) {
                    Mname = "a fretting imp";
                    Mlvl = 40;
                    Mimg = "an imp";
                }
                if (x == 12) {
                    Mname = "a dread werewolf";
                    Mlvl = 41;
                    Mimg = "a werewolf";
                }
                if (x == 13) {
                    Mname = "a manacled spoiler";
                    Mlvl = 42;
                    Mimg = "a vampire female";
                    Mjob = "WIZ";
                }
                if (x == 14) {
                    Mname = "a fettered defiler";
                    Mlvl = 40;
                    Mimg = "a vampire female";
                    Mjob = "NEC";
                }
                if (x == 15) {
                    Mname = "an inveigled ravisher";
                    Mlvl = 42;
                    Mimg = "a vampire female";
                }
                if (x == 16) {
                    Mname = "a heart destroyer";
                    Mlvl = 41;
                    Mimg = "a vampire female";
                }
                if (x == 17) {
                    Mname = "a soul destroyer";
                    Mlvl = 44;
                    Mimg = "a dhampyre";
                    Mjob = "WIZ";
                }
                if (x == 18) {
                    Mname = "a pained seether";
                    Mlvl = 44;
                    Mimg = "a dhampyre";
                    Mjob = "MAG";
                }
                if (x == 19) {
                    Mname = "a panic imbiber";
                    Mlvl = 43;
                    Mimg = "a dhampyre";
                }
                if (x == 20) {
                    Mname = "a dread fomenter";
                    Mlvl = 42;
                    Mimg = "a dhampyre";
                }
                if (x == 21) {
                    Mname = "a vampire bat";
                    Mlvl = 44;
                    Mimg = "a bat";
                    Mdrain = true;
                }
                if (x == 22) {
                    Mname = "Shardok";
                    Mlvl = 43;
                    Mimg = "a gargoyle";
                    Mfreq = 8;
                    Menrage = true;
                    Mbarrier = true;
                    Mrare = 0;
                    Mwidth = 320;
                }
                if (x == 23) {
                    Mname = "Korman Valen";
                    Mlvl = 45;
                    Mimg = "a dhampyre";
                    Mjob = "SK";
                    Msanctuary = true;
                    Mrare = 0;
                }
                if (x == 24) {
                    Mname = "Artun Desmoni";
                    Mlvl = 44;
                    Mimg = "a vampire female";
                    Mjob = "WIZ";
                    Msanctuary = true;
                    Mrare = 0;
                }
                if (x == 25) {
                    Mname = "Sari Portentia";
                    Mlvl = 41;
                    Mimg = "a vampire female";
                    Mjob = "NEC";
                    Mflurry = true;
                    Mrare = 0;
                }
            } else {
                Mrare = 0;
                var x = ~~(M.random() * 3);
                if (x == 0) {
                    Mname = "Kragmore";
                    Mlvl = 41;
                    Mimg = "a gargoyle";
                    Mwidth = 320;
                    Mfreq = 8;
                    Menrage = true;
                    Mbarrier = true;
                }
                if (x == 1) {
                    Mname = "Vera Sintella";
                    Mlvl = 45;
                    Mimg = "a vampire female";
                    Mjob = "MAG";
                    Msanctuary = true;
                }
                if (x == 2) {
                    Mname = "Gorelyanthe";
                    Mlvl = 43;
                    Mimg = "a purple dragon";
                    Mjob = "WIZ";
                    Mamp = true;
                    Msanctuary = true;
                    Mwidth = 640;
                }
            }
        }
        if (_SZ === 4) {
            if (P.Q[df].KedgeKeep >= 4) {
                var x = 0;
                if (M.random() > .6) {
                    x = 1;
                }
                if (P.Q[df].KK6 >= 18 && P.Q[df].KK7 >= 12) {
                    if (mobsFound() === false && P.Q[df].KK8 === 0) {
                        x = 2;
                    } else {
                        x = 0;
                    }
                }
            }
            if (x == 0) {
                Mname = "a sinew punisher";
                Mlvl = 44;
                Mimg = "a dhampyre";
                Mwidth = 180;
                Mjob = "CLR";
            }
            if (x == 1) {
                Mname = "Blood Guardian";
                Mlvl = 45;
                Mimg = "a dhampyre";
                Mwidth = 180;
                Mjob = "CLR";
            }
            if (x == 2) {
                Mname = "Revenant Viston";
                Mlvl = 45;
                Mimg = "phinigel autropos";
                Mrare = 3;
            }
            /*
            if(P.Q[df].repeatKk4===true){
                Chat("The zone has been cleared.");
                Mname="";
                return;
            }
			*/
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 42) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 41 || Mlvl > 43) {
                a = 0;
            }
        } else {
            if (Mlvl < 43) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Tendolin Meadows") {
        if (rareMobFlag == false) {
            var x = ~~((M.random() * (29)));
            var z = M.random();
            if (P.Q[df].LesserFaydark === 1 && z > .0011) {
                var z2 = M.random();
                if (z2 > .66) {
                    x = 17;
                } else {
                    x = 18;
                }
            }
            if (x == 0) {
                Mname = "a skeleton";
                Mlvl = 3;
                Mimg = "a skeleton";
            }
            if (x == 1) {
                Mname = "an orc legionnaire";
                Mlvl = 4;
                Mimg = "an orc";
                Mwidth = 230;
            }
            if (x == 2) {
                Mname = "an orc legionnaire";
                Mlvl = 4;
                Mimg = "an orc";
                Mwidth = 230;
            }
            if (x == 3) {
                Mname = "an orc legionnaire";
                Mlvl = 4;
                Mimg = "an orc";
                Mwidth = 230;
            }
            if (x == 4) {
                Mname = "an orc legionnaire";
                Mlvl = 4;
                Mimg = "an orc";
                Mwidth = 230;
            }
            if (x == 5) {
                Mname = "an orc legionnaire";
                Mlvl = 4;
                Mimg = "an orc";
                Mwidth = 230;
            }
            if (x == 6) {
                Mname = "a faerie";
                Mlvl = 4;
                Mimg = "a faerie";
                Mwidth = 150;
            }
            if (x == 7) {
                Mname = "a faerie";
                Mlvl = 4;
                Mimg = "a faerie";
                Mwidth = 150;
            }
            if (x == 8) {
                Mname = "a faerie";
                Mlvl = 4;
                Mimg = "a faerie";
                Mwidth = 150;
            }
            if (x == 9) {
                Mname = "a faerie courtier";
                Mlvl = 5;
                Mimg = "a faerie";
                Mwidth = 150;
            }
            if (x == 10) {
                Mname = "a faerie guard";
                Mlvl = 5;
                Mimg = "a faerie";
                Mwidth = 150;
            }
            if (x == 11) {
                Mname = "a faerie maiden";
                Mlvl = 5;
                Mimg = "a faerie";
                Mwidth = 150;
            }
            if (x == 12) {
                Mname = "a fairy guard";
                Mlvl = 5;
                Mimg = "a faerie";
                Mwidth = 150;
            }
            if (x == 13) {
                Mname = "a giant spider";
                Mlvl = 4;
                Mimg = "a brown spider";
                Mwidth = 300;
            }
            if (x == 14) {
                Mname = "a mist wolf";
                Mlvl = 4;
                Mimg = "a wolf";
                Mwidth = 320;
            }
            if (x == 15) {
                Mname = "a faerie";
                Mlvl = 4;
                Mimg = "a faerie";
                Mwidth = 150;
            }
            if (x == 16) {
                Mname = "a mummy";
                Mlvl = 5;
                Mimg = "a mummy";
            }
            if (x == 17) {
                Mname = "a pixie prankster";
                Mlvl = 3;
                Mimg = "a faerie";
            }
            if (x == 18) {
                Mname = "a pixie trickster";
                Mlvl = 4;
                Mimg = "a faerie";
            }
            if (x == 19) {
                Mname = "a shadowed man";
                Mlvl = 5;
                Mimg = "a shadowed man";
                Mwidth = 180;
            }
            if (x == 20) {
                Mname = "a skeleton";
                Mlvl = 3;
                Mimg = "a skeleton";
            }
            if (x == 21) {
                Mname = "a spiderling";
                Mlvl = 3;
                Mimg = "a heart spider";
                Mwidth = 200;
            }
            if (x == 22) {
                Mname = "an orc pawn";
                Mlvl = 1;
                Mimg = "an orc";
                Mwidth = 160;
            }
            if (x == 23) {
                Mname = "a faerie";
                Mlvl = 4;
                Mimg = "a faerie";
                Mwidth = 150;
            }
            if (x == 24) {
                Mname = "an orc centurion";
                Mlvl = 3;
                Mimg = "an orc";
                Mwidth = 200;
            }
            if (x == 25) {
                Mname = "an orc chief";
                Mlvl = 5;
                Mimg = "an orc";
                Mwidth = 220;
            }
            if (x == 26) {
                Mname = "an orc legionnaire";
                Mlvl = 4;
                Mimg = "an orc";
                Mwidth = 230;
            }
            if (x == 27) {
                Mname = "an orc oracle";
                Mlvl = 5;
                Mimg = "an orc";
                Mwidth = 220;
                Mjob = "SHM";
            }
            if (x == 28) {
                Mname = "an orc pawn";
                Mlvl = 1;
                Mimg = "an orc";
                Mwidth = 160;
            }
        } else {
            Mrare = 0;
            var x = ~~(M.random() * 2);
            if (x == 0) {
                Mname = "Queen Fargash";
                Mlvl = 5;
                Mimg = "a brown spider";
                Mwidth = 420;
                Mskill[2] = "blind";
                Mskill[3] = "blind";
                Mflurry = true;
                Mdrain = true;
            }
            if (x == 1) {
                Mname = "Fara Quindletip";
                Mlvl = 4;
                Mimg = "a faerie";
                Mthorns = 0;
                Msanctuary = true;
            }
        }
    }

    function humanGender() {
        if (M.random() > .5) {
            Mimg = "a human female";
        } else {
            Mimg = "a human male";
        }
    }
    if (_Z === "Riven Grotto") {
        if (rareMobFlag == false) {
            var x = ~~((M.random() * (23)));
            if (M.random() > .0011) {
                var z2 = M.random();
                if (P.Q[df].Befallen === 1 && _SZ === 1) {
                    if (z2 > .66) {
                        x = 6;
                    } else if (z2 < .33) {
                        x = 5;
                    } else {
                        x = 11;
                    }
                }
                if (P.Q[df].Befallen === 2 && _SZ === 2) {
                    if (z2 > .62) {
                        x = 8;
                    } else if (z2 < .38) {
                        x = 3;
                    } else {
                        x = 13;
                    }
                    if (P.Q[df].BF1 >= 8 && P.Q[df].BF2 >= 8 && P.Q[df].BF3 >= 5 && mobsFound() === false) {
                        x = 23;
                    }
                }
                if (P.Q[df].Befallen === 3 && _SZ === 3) {
                    if (z2 > .6) {
                        x = 22;
                    } else if (z2 < .3) {
                        x = 9;
                    } else {
                        x = 12;
                    }
                    if (P.Q[df].BF1 >= 9 && P.Q[df].BF2 >= 7 && P.Q[df].BF3 >= 7) {
                        if (mobsFound() === false) {
                            x = 24;
                            delayedMonsterTimer();
                        }
                    }
                }
            }
            if (x == 0) {
                Mname = "a giant rat";
                Mlvl = 10;
                Mimg = "a rat";
            }
            if (x == 1) {
                Mname = "a diseased rat";
                Mlvl = 11;
                Mimg = "a rat";
            }
            if (x == 2) {
                Mname = "a large diseased rat";
                Mlvl = 12;
                Mimg = "a rat";
            }
            if (x == 3) {
                Mname = "a necro acolyte";
                Mlvl = 13;
                Mimg = "a dark elf male";
                Mjob = "NEC";
            }
            if (x == 4) {
                Mname = "a necro apprentice";
                Mlvl = 12;
                Mimg = "a dark elf male";
                Mjob = "NEC";
            }
            if (x == 5) {
                Mname = "a necro initiate";
                Mlvl = 12;
                humanGender();
                Mwidth = 180;
                Mjob = "NEC";
            }
            if (x == 6) {
                Mname = "a necro neophyte";
                Mlvl = 11;
                Mimg = "a dark elf male";
                Mjob = "NEC";
            }
            if (x == 7) {
                Mname = "a willowisp";
                Mlvl = 13;
                Mimg = "a wisp";
            }
            if (x == 8) {
                Mname = "an ice boned skeleton";
                Mlvl = 12;
                Mimg = "a skeleton";
            }
            if (x == 9) {
                Mname = "a burnt zombie";
                Mlvl = 15;
                Mimg = "a male zombie";
            }
            if (x == 10) {
                Mname = "a cracked skeleton";
                Mlvl = 12;
                Mimg = "a skeleton";
            }
            if (x == 11) {
                Mname = "a dread bone";
                Mlvl = 12;
                Mimg = "a dark skeleton";
            }
            if (x == 12) {
                Mname = "a dread corpse";
                Mlvl = 16;
                Mimg = "a dark skeleton";
            }
            if (x == 13) {
                Mname = "a ghoul";
                Mlvl = 13;
                Mimg = "a ghoul";
                Mwidth = 350;
            }
            if (x == 14) {
                Mname = "a greater skeleton";
                Mlvl = 13;
                Mimg = "a skeleton";
            }
            if (x == 15) {
                Mname = "a lesser mummy";
                Mlvl = 13;
                Mimg = "a mummy";
                Mwidth = 180;
            }
            if (x == 16) {
                Mname = "a putrid skeleton";
                Mlvl = 11;
                Mimg = "a skeleton";
            }
            if (x == 17) {
                Mname = "a skeletal excavator";
                Mlvl = 14;
                Mimg = "a skeleton";
            }
            if (x == 18) {
                Mname = "a skeletal foreman";
                Mlvl = 14;
                Mimg = "a dark skeleton";
            }
            if (x == 19) {
                Mname = "a skeleton";
                Mlvl = 10;
                Mimg = "a skeleton";
                Mskill[3] = "fireball";
            }
            if (x == 20) {
                Mname = "a sturdy skeleton";
                Mlvl = 12;
                Mimg = "a skeleton";
            }
            if (x == 21) {
                Mname = "a zombie";
                Mlvl = 12;
                Mimg = "a female zombie";
            }
            if (x == 22) {
                Mname = "an elf skeleton";
                Mlvl = 14;
                Mimg = "a skeleton";
            }
            if (x == 23) {
                Mname = "Dark Priest Nymda";
                Mlvl = 14;
                Mimg = "a dark elf male";
                Mjob = "CLR";
                Msanctuary = true;
                Mrare = 0;
            }
            if (x == 24) {
                Mname = "The Black Seer";
                Mlvl = 16;
                Mimg = "a dark elf male";
                Mjob = "WIZ";
                Mamp = true;
                Mrare = 0;
            }
        } else {
            Mrare = 0;
            var x = ~~(M.random() * 5);
            if (x == 0) {
                Mname = "Necromus Ignoble";
                Mlvl = 11;
                Mimg = "a human male";
                Mwidth = 180;
                Mjob = "NEC";
                Mamp = true;
            }
            if (x == 1) {
                Mname = "Gerdin Farth";
                Mlvl = 13;
                Mimg = "a mummy";
                Menrage = true;
            }
            if (x == 2) {
                Mname = "Sinfura Dagon";
                Mlvl = 15;
                Mimg = "a human female";
                Mjob = "ROG";
                Mfreq = 8;
                Mflurry = true;
            }
            if (x == 3) {
                Mname = "Lieutenant Relben";
                Mlvl = 15;
                Mimg = "a male zombie";
                Menrage = true;
            }
            if (x == 4) {
                Mname = "Flippy the Rat God";
                Mlvl = 12;
                Mimg = "a rat";
                Mjob = "RNG";
                Mskeleton = 0;
                Mwolf = 0;
                Melemental = 0;
                Mflurry = true;
                Menrage = true;
            }
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 12) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 11 || Mlvl > 14) {
                a = 0;
            }
        } else {
            if (Mlvl < 14) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Greenthorn Cavern") {
        if (rareMobFlag == false) {
            var x = ~~(M.random() * (12));
            if (M.random() > .0011) {
                if (P.Q[df].Blackburrow === 1 && _SZ === 1) {
                    var z2 = M.random();
                    if (z2 > .55) {
                        x = 4;
                    } else if (z2 < .33) {
                        x = 9;
                    } else {
                        x = 5;
                    }
                }
                if (P.Q[df].Blackburrow === 2 && _SZ === 2) {
                    var z2 = M.random();
                    if (z2 > .64) {
                        x = 6;
                    } else if (z2 < .36) {
                        x = 8;
                    } else {
                        x = 11;
                    }
                    if (P.Q[df].BB1 >= 8 && P.Q[df].BB2 >= 8 && P.Q[df].BB3 >= 6 && mobsFound() === false) {
                        x = 12;
                    }
                }
                if (P.Q[df].Blackburrow === 3 && _SZ === 3) {
                    var z2 = M.random();
                    if (z2 > .5) {
                        x = 10;
                    } else if (z2 < .33) {
                        x = 7;
                    } else {
                        x = 2;
                    }
                    if (P.Q[df].BB1 >= 12 && P.Q[df].BB2 >= 8 && P.Q[df].BB3 >= 4 && mobsFound() === false) {
                        x = 13;
                        if (g.difficulty > 1) {
                            delayedMonsterTimer();
                        }
                    }
                }
            }
            if (x == 0) {
                Mname = "a burly gnoll";
                Mlvl = 9;
                Mimg = "a gnoll";
                Mwidth = 300;
            }
            if (x == 1) {
                Mname = "a gnoll";
                Mlvl = 7;
                Mimg = "a gnoll";
                Mwidth = 250;
            }
            if (x == 2) {
                Mname = "a gnoll commander";
                Mlvl = 11;
                Mimg = "a gnoll";
                Mwidth = 350;
            }
            if (x == 3) {
                Mname = "a gnoll guardsman";
                Mlvl = 10;
                Mimg = "a gnoll";
                Mwidth = 330;
            }
            if (x == 4) {
                Mname = "a gnoll pup";
                Mlvl = 6;
                Mimg = "a gnoll";
                Mwidth = 200;
            }
            if (x == 5) {
                Mname = "a gnoll scout";
                Mlvl = 7;
                Mimg = "a gnoll";
                Mwidth = 250;
            }
            if (x == 6) {
                Mname = "a gnoll shaman";
                Mlvl = 8;
                Mimg = "a gnoll";
                Mwidth = 270;
                Mjob = "SHM";
            }
            if (x == 7) {
                Mname = "a gnoll tactician";
                Mlvl = 10;
                Mimg = "a gnoll";
                Mwidth = 270;
            }
            if (x == 8) {
                Mname = "a patrolling gnoll";
                Mlvl = 7;
                Mimg = "a gnoll";
                Mwidth = 270;
            }
            if (x == 9) {
                Mname = "a scrawny gnoll";
                Mlvl = 6;
                Mimg = "a gnoll";
                Mwidth = 230;
            }
            if (x == 10) {
                Mname = "an elite gnoll guard";
                Mlvl = 10;
                Mimg = "a gnoll";
                Mwidth = 310;
            }
            if (x == 11) {
                Mname = "a gnoll sergeant";
                Mlvl = 8;
                Mimg = "a gnoll";
            }
            if (x == 12) {
                Mname = "Furrpaw Barxen";
                Mlvl = 9;
                Mimg = "a gnoll";
                Mwidth = 330;
                Mfreq = 8;
                Menrage = true;
                Mdrain = true;
                Mrare = 0;
            }
            if (x == 13) {
                Mname = "Viceroy Tanaden";
                Mlvl = 11;
                Mimg = "a gnoll";
                Mwidth = 350;
                Mjob = "SK";
                Mdrain = true;
                Mrare = 0;
            }
        } else {
            Mrare = 0;
            var x = ~~(M.random() * 3);
            if (x == 0) {
                Mname = "Rikren Armaw";
                Mlvl = 6;
                Mimg = "a gnoll";
                Mwidth = 270;
                Mjob = "ROG";
                Mdrain = true;
            }
            if (x == 1) {
                Mname = "Grifruf Arpen";
                Mlvl = 8;
                Mimg = "a gnoll";
                Mwidth = 300;
                Mfreq = 8;
                Menrage = true;
                Mdrain = true;
            }
            if (x == 2) {
                Mname = "Rappy Grimpaw";
                Mlvl = 11;
                Mimg = "a gnoll";
                Mwidth = 330;
                Menrage = true;
            }
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 7) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 7 || Mlvl > 9) {
                a = 0;
            }
        } else {
            if (Mlvl < 10) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Temple of Prenssor") {
        if (rareMobFlag == false) {
            var x = ~~((M.random() * 19));
            if (M.random() > .0011) {
                var z2 = M.random();
                if (P.Q[df].CazicThule === 1 && _SZ === 1) {
                    if (z2 > .56) {
                        x = 6;
                    } else if (z2 < .33) {
                        x = 12;
                    } else {
                        x = 5;
                    }
                    if (P.Q[df].CT1 >= 8 && P.Q[df].CT2 >= 6 && P.Q[df].CT3 >= 4 && mobsFound() === false) {
                        x = 19;
                    }
                }
                if (P.Q[df].CazicThule === 2 && _SZ === 2) {
                    if (z2 > .58) {
                        x = 9;
                    } else if (z2 < .33) {
                        x = 14;
                    } else {
                        x = 11;
                    }
                    if (P.Q[df].CT1 >= 10 && P.Q[df].CT2 >= 8 && P.Q[df].CT3 >= 6) {
                        if (mobsFound() === false) {
                            delayedMonsterTimer();
                            if (P.Q[df].CT4 < 1) {
                                x = 20;
                                P.Q[df].CT4 = 1;
                            } else {
                                x = 21;
                                P.Q[df].CT5 = 1;
                            }
                        } else {
                            if (P.Q[df].CT4 < 1) {
                                x = 20;
                                P.Q[df].CT4 = 1;
                            }
                            if (P.Q[df].CT5 < 1) {
                                x = 21;
                                P.Q[df].CT5 = 1;
                            }
                        }
                    }
                }
                if ((P.Q[df].CazicThule === 3 && _SZ === 3) || (P.Q[df].CazicThule > 3 && P.Q[df].repeatCt3 === false && _SZ === 3)) {
                    if (z2 > .64) {
                        x = 17;
                    } else if (z2 < .36) {
                        x = 4;
                    } else {
                        x = 3;
                    }
                    if (P.Q[df].CT1 >= 10 && P.Q[df].CT2 >= 10 && P.Q[df].CT3 >= 8 && mobsFound() === false) {
                        x = 22;
                    }
                }
            }
            if (x == 0) {
                Mname = "a raging gorilla";
                Mlvl = 40;
                Mimg = "a gorilla";
                Mwidth = 400;
            }
            if (x == 1) {
                Mname = "a hulking gorilla";
                Mlvl = 39;
                Mimg = "a gorilla";
                Mwidth = 380;
            }
            if (x == 2) {
                Mname = "a fierce gorilla";
                Mlvl = 38;
                Mimg = "a gorilla";
                Mwidth = 360;
            }
            if (x == 3) {
                Mname = "a lizard champion";
                Mlvl = 42;
                Mimg = "a lizardman";
            }
            if (x == 4) {
                Mname = "a lizard crusader";
                Mlvl = 41;
                Mimg = "a lizardman";
                Mjob = "SK";
            }
            if (x == 5) {
                Mname = "a lizard defender";
                Mlvl = 39;
                Mimg = "a lizardman";
            }
            if (x == 6) {
                Mname = "a lizard disciple";
                Mlvl = 38;
                Mimg = "a lizardman";
            }
            if (x == 7) {
                Mname = "a lizard fanatic";
                Mlvl = 40;
                Mimg = "a lizardman";
            }
            if (x == 8) {
                Mname = "a lizard guard";
                Mlvl = 38;
                Mimg = "a lizardman";
            }
            if (x == 9) {
                Mname = "a lizard herald";
                Mlvl = 39;
                Mimg = "a lizardman";
                Mjob = "CLR";
            }
            if (x == 10) {
                Mname = "a lizard judicator";
                Mlvl = 40;
                Mimg = "a lizardman";
                Mjob = "CLR";
            }
            if (x == 11) {
                Mname = "a lizard justicar";
                Mlvl = 40;
                Mimg = "a lizardman";
                Mjob = "CLR";
            }
            if (x == 12) {
                Mname = "a lizard page";
                Mlvl = 38;
                Mimg = "a lizardman";
                Mjob = "CLR";
            }
            if (x == 13) {
                Mname = "a lizard proselyte";
                Mlvl = 38;
                Mimg = "a lizardman";
            }
            if (x == 14) {
                Mname = "a lizard protector";
                Mlvl = 39;
                Mimg = "a lizardman";
            }
            if (x == 15) {
                Mname = "a lizard sentinel";
                Mlvl = 39;
                Mimg = "a lizardman";
            }
            if (x == 16) {
                Mname = "a lizard warder";
                Mlvl = 37;
                Mimg = "a lizardman";
            }
            if (x == 17) {
                Mname = "a lizard zealot";
                Mlvl = 41;
                Mimg = "a lizardman";
            }
            if (x == 18) {
                Mname = "a silvered guard";
                Mlvl = 38;
                Mimg = "a lizardman";
            }
            if (x == 19) {
                Mname = "Soprenti the Anointed";
                Mlvl = 39;
                Mimg = "a lizardman";
                Menrage = true;
                Mdrain = true;
                Mjob = "CLR";
                Mrare = 0;
            }
            if (x == 20) {
                Mname = "Sartuth the Possessed";
                Mlvl = 40;
                Mimg = "a lizardman";
                Msanctuary = true;
                Mjob = "CLR";
                Mrare = 0;
            }
            if (x == 21) {
                Mname = "Merszas the Divine";
                Mlvl = 39;
                Mimg = "a lizardman";
                Msanctuary = true;
                Mbarrier = true;
                Mjob = "ENC";
                Mrare = 0;
            }
            if (x == 22) {
                Mname = "Sentoth, Lord of Rapture";
                Mlvl = 42;
                Mimg = "avatar of fear";
                Mjob = "SK";
                Mrare = 3;
            }
        } else {
            Mrare = 0;
            var x = ~~(M.random() * (5));
            if (x == 0) {
                Mname = "a clay golem";
                Mlvl = 39;
                Mimg = "a clay golem";
                Mwidth = 320;
                Mbarrier = true;
                Msanctuary = true;
            }
            if (x == 1) {
                Mname = "a steel golem";
                Mlvl = 38;
                Mimg = "a steel golem";
                Mwidth = 280;
                Mbarrier = true;
                Msanctuary = true;
                Menrage = true;
            }
            if (x == 2) {
                Mname = "a stone golem";
                Mlvl = 40;
                Mimg = "a stone golem";
                Mbarrier = true;
                Msanctuary = true;
            }
            if (x == 3) {
                Mname = "Vergundi the Blasted";
                Mlvl = 41;
                Mimg = "a lizardman";
                Mjob = "WIZ";
                Mamp = true;
                Msilence = true;
            }
            if (x == 4) {
                Mname = "Vestresst";
                Mlvl = 38;
                Mimg = "a lizardman";
                Mjob = "ROG";
            }
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 39) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 39 || Mlvl > 40) {
                a = 0;
            }
        } else {
            if (Mlvl < 40) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Kordata Ruins") {
        if (rareMobFlag == false) {
            var x = ~~(M.random() * 40);
            if (M.random() > .0011) {
                var z2 = M.random();
                if (P.Q[df].LowerGuk === 1 && _SZ === 1) {
                    if (z2 > .58) {
                        x = 22;
                    } else if (z2 < .33) {
                        x = 35;
                    } else {
                        x = 6;
                    }
                    if (P.Q[df].LG1 >= 10 && P.Q[df].LG2 >= 8 && P.Q[df].LG3 >= 6) {
                        if (mobsFound() === false) {
                            delayedMonsterTimer();
                            if (P.Q[df].LG4 < 1) {
                                x = 40;
                                P.Q[df].LG4 = 1;
                            } else {
                                x = 41;
                                P.Q[df].LG5 = 1;
                            }
                        } else {
                            if (P.Q[df].LG4 < 1) {
                                x = 40;
                                P.Q[df].LG4 = 1;
                            }
                            if (P.Q[df].LG5 < 1) {
                                x = 41;
                                P.Q[df].LG5 = 1;
                            }
                        }
                    }
                }
                if (P.Q[df].LowerGuk === 2 && _SZ === 2) {
                    if (z2 > .71) {
                        x = 18;
                    } else if (z2 > .43) {
                        x = 26;
                    } else if (z2 > .22) {
                        x = 32;
                    } else {
                        x = 4;
                    }
                    if (P.Q[df].LG1 >= 8 && P.Q[df].LG2 >= 8 && P.Q[df].LG3 >= 6 && P.Q[df].LG4 >= 6) {
                        if (mobsFound() === false) {
                            delayedMonsterTimer();
                            if (P.Q[df].LG5 < 1) {
                                x = 42;
                                P.Q[df].LG5 = 1;
                            } else {
                                x = 43;
                                P.Q[df].LG6 = 1;
                            }
                        } else {
                            if (P.Q[df].LG5 < 1) {
                                x = 42;
                                P.Q[df].LG5 = 1;
                            }
                            if (P.Q[df].LG6 < 1) {
                                x = 43;
                                P.Q[df].LG6 = 1;
                            }
                        }
                    }
                }
                if (P.Q[df].LowerGuk === 3 && _SZ === 3 || (P.Q[df].LowerGuk > 3 && P.Q[df].repeatLg3 === false && _SZ === 3)) {
                    if (z2 > .6) {
                        x = 2;
                    } else if (z2 > .27) {
                        x = 31;
                    } else {
                        x = 30;
                    }
                    if (P.Q[df].LG1 >= 12 && P.Q[df].LG2 >= 10 && P.Q[df].LG3 >= 8) {
                        if (mobsFound() === false) {
                            delayedMonsterTimer();
                            if (P.Q[df].LG4 < 1) {
                                x = 44;
                                P.Q[df].LG4 = 1;
                            } else {
                                x = 45;
                                P.Q[df].LG5 = 1;
                            }
                        } else {
                            if (P.Q[df].LG4 < 1) {
                                x = 44;
                                P.Q[df].LG4 = 1;
                            }
                            if (P.Q[df].LG5 < 1) {
                                x = 45;
                                P.Q[df].LG5 = 1;
                            }
                        }
                    }
                }
            }
            if (x == 0) {
                Mname = "a basalt gargoyle";
                Mlvl = 36;
                Mimg = "a gargoyle";
                Mwidth = 230;
            }
            if (x == 1) {
                Mname = "an evil eye";
                Mlvl = 36;
                Mimg = "an evil eye round";
                Mwidth = 120;
                Mjob = "WIZ";
            }
            if (x == 2) {
                Mname = "a mal anuran knight";
                Mlvl = 38;
                Mimg = "an anuran";
            }
            if (x == 3) {
                Mname = "a clay gargoyle";
                Mlvl = 35;
                Mimg = "a gargoyle";
                Mwidth = 230;
            }
            if (x == 4) {
                Mname = "a ber anuran knight";
                Mlvl = 38;
                Mimg = "an anuran";
            }
            if (x == 5) {
                Mname = "a deadly black widow";
                Mlvl = 36;
                Mimg = "a heart spider";
                Mwidth = 350;
            }
            if (x == 6) {
                Mname = "an amn anuran wizard";
                Mlvl = 36;
                Mimg = "an anuran";
                Mjob = "WIZ";
            }
            if (x == 7) {
                Mname = "an anuran mal knight";
                Mlvl = 38;
                Mimg = "an anuran";
            }
            if (x == 8) {
                Mname = "a zig anuran knight";
                Mlvl = 36;
                Mimg = "an anuran";
            }
            if (x == 9) {
                Mname = "an anuran ber knight";
                Mlvl = 37;
                Mimg = "an anuran";
            }
            if (x == 10) {
                Mname = "an anuran zod knight";
                Mlvl = 39;
                Mimg = "an anuran";
            }
            if (x == 11) {
                Mname = "an anuran zod shaman";
                Mlvl = 39;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 12) {
                Mname = "an anuran ber knight";
                Mlvl = 37;
                Mimg = "an anuran";
            }
            if (x == 13) {
                Mname = "an anuran ohm shaman";
                Mlvl = 38;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 14) {
                Mname = "an anuran vex shaman";
                Mlvl = 37;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 15) {
                Mname = "a mal anuran knight";
                Mlvl = 38;
                Mimg = "an anuran";
            }
            if (x == 16) {
                Mname = "an anuran cham knight";
                Mlvl = 34;
                Mimg = "an anuran";
            }
            if (x == 17) {
                Mname = "an anuran cham warrior";
                Mlvl = 34;
                Mimg = "an anuran";
                Mbarrier = true;
            }
            if (x == 18) {
                Mname = "a pul anuran knight";
                Mlvl = 36;
                Mimg = "an anuran";
            }
            if (x == 19) {
                Mname = "an anuran lem shaman";
                Mlvl = 35;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 20) {
                Mname = "an anuran fal shaman";
                Mlvl = 34;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 21) {
                Mname = "an anuran amn shaman";
                Mlvl = 35;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 22) {
                Mname = "an anuran tir knight";
                Mlvl = 35;
                Mimg = "an anuran";
            }
            if (x == 23) {
                Mname = "an anuran zig knight";
                Mlvl = 35;
                Mimg = "an anuran";
            }
            if (x == 24) {
                Mname = "an anuran dol shaman";
                Mlvl = 35;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 25) {
                Mname = "an anuran pul knight";
                Mlvl = 36;
                Mimg = "an anuran";
            }
            if (x == 26) {
                Mname = "a dol anuran wizard";
                Mlvl = 36;
                Mimg = "an anuran";
                Mjob = "WIZ";
            }
            if (x == 27) {
                Mname = "a granite gargoyle";
                Mlvl = 36;
                Mimg = "a gargoyle";
                Mwidth = 230;
            }
            if (x == 28) {
                Mname = "a greater ice bones";
                Mlvl = 35;
                Mimg = "a skeleton";
            }
            if (x == 29) {
                Mname = "an evil eye sentinel";
                Mlvl = 35;
                Mimg = "an evil eye round";
                Mjob = "WIZ";
            }
            if (x == 30) {
                Mname = "a zod anuran knight";
                Mlvl = 39;
                Mimg = "an anuran";
            }
            if (x == 31) {
                Mname = "a zod anuran wizard";
                Mlvl = 38;
                Mimg = "an anuran";
                Mjob = "WIZ";
            }
            if (x == 32) {
                Mname = "a vex anuran wizard";
                Mlvl = 37;
                Mimg = "an anuran";
                Mjob = "WIZ";
            }
            if (x == 33) {
                Mname = "a cham anuran knight";
                Mlvl = 34;
                Mimg = "an anuran";
            }
            if (x == 34) {
                Mname = "a cham anuran warrior";
                Mlvl = 34;
                Mimg = "an anuran";
            }
            if (x == 35) {
                Mname = "a lem anuran wizard";
                Mlvl = 35;
                Mimg = "an anuran";
                Mjob = "WIZ";
            }
            if (x == 36) {
                Mname = "a fal anuran wizard";
                Mlvl = 35;
                Mimg = "an anuran";
                Mjob = "WIZ";
            }
            if (x == 37) {
                Mname = "an amn anuran wizard";
                Mlvl = 35;
                Mimg = "an anuran";
                Mjob = "WIZ";
            }
            if (x == 38) {
                Mname = "an anuran dol shaman";
                Mlvl = 36;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 39) {
                Mname = "a tir anuran knight";
                Mlvl = 35;
                Mimg = "an anuran";
            }
            if (x == 40) {
                Mname = "an anuran assassin";
                Mlvl = 36;
                Mimg = "an anuran";
                Mrare = 0;
                Mjob = "ROG";
                Mflurry = true;
            }
            if (x == 41) {
                Mname = "an anuran supplier";
                Mlvl = 36;
                Mimg = "an anuran";
                MironMaiden = true;
                Mrare = 0;
            }
            if (x == 42) {
                Mname = "a frenzied anuran";
                Mlvl = 37;
                Mimg = "an anuran";
                Mflurry = true;
                Msanctuary = true;
                Mrare = 0;
            }
            if (x == 43) {
                Mname = "an anuran sentinel";
                Mlvl = 38;
                Mimg = "an anuran";
                Mfreq = 6;
                Mflurry = true;
                MironMaiden = true;
                Mrare = 0;
            }
            if (x == 44) {
                Mname = "King Froaki";
                Mlvl = 39;
                Mimg = "an anuran";
                Menrage = true;
                Mflurry = true;
                MironMaiden = true;
                Mjob = "SK";
                Mdrain = true;
                Mbarrier = true;
                Mrare = 0;
            }
            if (x == 45) {
                Mname = "the anuran arch magus";
                Mlvl = 38;
                Mimg = "an anuran";
                MironMaiden = true;
                Mdrain = true;
                Mbarrier = true;
                Msilence = true;
                Mjob = "WIZ";
                Mamp = true;
                Msanctuary = true;
                Mrare = 0;
            }
        } else {
            Mrare = 0;
            var x = ~~(M.random() * 15);
            if (x == 0) {
                Mname = "a bloodthirsty anuran";
                Mlvl = 37;
                Mimg = "an anuran";
                Menrage = true;
                Mflurry = true;
            }
            if (x == 1) {
                Mname = "an anuran herbalist";
                Mlvl = 35;
                Mimg = "an anuran";
                MironMaiden = true;
                Msanctuary = true;
            }
            if (x == 2) {
                Mname = "an anuran tactician";
                Mlvl = 38;
                Mimg = "an anuran";
                MironMaiden = true;
                Msanctuary = true;
                Mjob = "WIZ";
            }
            if (x == 3) {
                Mname = "an anuran cavalier";
                Mlvl = 35;
                Mimg = "an anuran";
                Msanctuary = true;
                Mbarrier = true;
                Mjob = "SK";
                MironMaiden = true;
            }
            if (x == 4) {
                Mname = "an anuran executioner";
                Mlvl = 36;
                Mimg = "an anuran";
                castinFrequency = 7;
                Menrage = true;
                Mflurry = true;
            }
            if (x == 5) {
                Mname = "an anuran ritualist";
                Mlvl = 35;
                Mimg = "an anuran";
                MironMaiden = true;
                Mamp = true;
                Mjob = "NEC";
            }
            if (x == 6) {
                Mname = "an anuran sage";
                Mlvl = 37;
                Mimg = "an anuran";
                Mamp = true;
                Msanctuary = true;
                Msilence = true;
                Mjob = "WIZ";
                Mresolution = 0;
                MironMaiden = true;
            }
            if (x == 7) {
                Mname = "an anuran savant";
                Mlvl = 37;
                Mimg = "an anuran";
                Mamp = true;
                Mjob = "CLR";
                MironMaiden = true;
            }
            if (x == 8) {
                Mname = "an anuran scribe";
                Mlvl = 36;
                Mimg = "an anuran";
                Mamp = true;
                Mjob = "ENC";
                Msanctuary = true;
                Msilence = true;
            }
            if (x == 9) {
                Mname = "an evil eye elder";
                Mlvl = 37;
                Mimg = "an evil eye round";
                Mfreq = 6;
                Mwidth = 120;
                Mjob = "WIZ";
                Mbarrier = true;
            }
            if (x == 10) {
                Mname = "a nymph";
                Mlvl = 37;
                Mimg = "a faerie";
                Mamp = true;
                Msanctuary = true;
                Mjob = "WIZ";
                Msilence = true;
            }
            if (x == 11) {
                Mname = "an evil eye tormentor";
                Mlvl = 37;
                Mimg = "an evil eye round";
                Mfreq = 6;
                Mwidth = 120;
                Mjob = "WIZ";
                MironMaiden = true;
            }
            if (x == 12) {
                Mname = "an anuran crusader";
                Mlvl = 38;
                Mimg = "an anuran";
                Mjob = "PAL";
                Msanctuary = true;
                Mbarrier = true;
            }
            if (x == 13) {
                Mname = "the anuran king";
                Mlvl = 39;
                Mimg = "an anuran";
                Mjob = "PAL";
                Msanctuary = true;
                Mbarrier = true;
            }
            if (x == 14) {
                Mname = "an anuran noble";
                Mlvl = 37;
                Mimg = "an anuran";
                MironMaiden = true;
                Mjob = "ENC";
            }
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 36) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 36 || Mlvl > 38) {
                a = 0;
            }
        } else {
            if (Mlvl < 38) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Ashenflow Peak") {
        if (_SZ !== 4) {
            if (rareMobFlag == false) {
                var x = ~~((M.random() * (9)));
                if (M.random() > .0011) {
                    var z2 = M.random();
                    if (P.Q[df].NagafensLair === 1 && _SZ === 1) {
                        if (z2 > .69) {
                            x = 0;
                        } else if (z2 > .39) {
                            x = 1;
                        } else if (z2 > .19) {
                            x = 4;
                        } else {
                            x = 5;
                        }
                        if (P.Q[df].NL1 >= 8 && P.Q[df].NL2 >= 8 && P.Q[df].NL3 >= 5 && P.Q[df].NL4 >= 5) {
                            if (mobsFound() === false) {
                                delayedMonsterTimer();
                                if (P.Q[df].NL5 < 1) {
                                    x = 13;
                                    P.Q[df].NL5 = 1;
                                } else {
                                    x = 9;
                                    P.Q[df].NL6 = 1;
                                }
                            } else {
                                if (P.Q[df].NL5 < 1) {
                                    x = 13;
                                    P.Q[df].NL5 = 1;
                                }
                                if (P.Q[df].NL6 < 1) {
                                    x = 9;
                                    P.Q[df].NL6 = 1;
                                }
                            }
                        }
                    }
                    if (P.Q[df].NagafensLair === 2 && _SZ === 2) {
                        if (z2 > .62) {
                            x = 6;
                        } else if (z2 > .31) {
                            x = 7;
                        } else {
                            x = 3;
                        }
                        if (P.Q[df].NL1 >= 10 && P.Q[df].NL2 >= 8 && P.Q[df].NL3 >= 8) {
                            if (mobsFound() === false) {
                                delayedMonsterTimer();
                                if (P.Q[df].NL4 < 1) {
                                    x = 10;
                                    P.Q[df].NL4 = 1;
                                } else {
                                    x = 11;
                                    P.Q[df].NL5 = 1;
                                }
                            } else {
                                if (P.Q[df].NL4 < 1) {
                                    x = 10;
                                    P.Q[df].NL4 = 1;
                                }
                                if (P.Q[df].NL5 < 1) {
                                    x = 11;
                                    P.Q[df].NL5 = 1;
                                }
                            }
                        }
                    }
                    if (P.Q[df].NagafensLair === 3 && _SZ === 3 || (P.Q[df].NagafensLair > 3 && P.Q[df].repeatNl3 === false && _SZ === 3)) {
                        if (z2 > .6) {
                            x = 8;
                        } else {
                            x = 2;
                        }
                        if (P.Q[df].NL1 >= 10 && P.Q[df].NL2 >= 15 && mobsFound() === false) {
                            x = 12;
                            delayedMonsterTimer();
                        }
                    }
                }
                if (x == 0) {
                    Mname = "a greater kobold";
                    Mlvl = 46;
                    Mimg = "a kobold";
                    Mwidth = 300;
                }
                if (x == 1) {
                    Mname = "a greater kobold shaman";
                    Mlvl = 46;
                    Mimg = "a kobold";
                    Mwidth = 320;
                    Mjob = "SHM";
                }
                if (x == 2) {
                    Mname = "an imp protector";
                    Mlvl = 49;
                    Mimg = "an imp";
                    Mwidth = 170;
                }
                if (x == 3) {
                    Mname = "a lava duct crawler";
                    Mlvl = 48;
                    Mimg = "a heart spider";
                    Mwidth = 400;
                }
                if (x == 4) {
                    Mname = "an ashenflow kobold";
                    Mlvl = 47;
                    Mimg = "a kobold";
                    Mwidth = 300;
                }
                if (x == 5) {
                    Mname = "an ashenflow kobold shaman";
                    Mlvl = 47;
                    Mimg = "a kobold";
                    Mwidth = 320;
                    Mjob = "SHM";
                }
                if (x == 6) {
                    Mname = "a sonic bat";
                    Mlvl = 47;
                    Mimg = "a bat";
                    Mskill[3] = "bash";
                    Mfreq = 8;
                }
                if (x == 7) {
                    Mname = "a lava beetle";
                    Mlvl = 47;
                    Mimg = "a beetle";
                    Mwidth = 420;
                }
                if (x == 8) {
                    Mname = "a lava guardian";
                    Mlvl = 48;
                    Mimg = "a fire elemental";
                }
                if (x == 9) {
                    Mname = "an ashenflow kobold king";
                    Mlvl = 47;
                    Mimg = "a kobold";
                    Mwidth = 380;
                    Mfreq = 8;
                    Mdrain = true;
                    Mflurry = true;
                    Mbarrier = true;
                    Mrare = 0;
                }
                if (x == 10) {
                    Mname = "a noxious spider";
                    Mlvl = 48;
                    Mimg = "a jungle spider";
                    Mwidth = 290;
                    Mskill[1] = "envenom";
                    Mskill[2] = "poison cloud";
                    Mskill[3] = "poison cloud";
                    Mdrain = true;
                    Mamp = true;
                    Mrare = 0;
                }
                if (x == 11) {
                    Mname = "a stone spider";
                    Mlvl = 48;
                    Mimg = "a brown spider";
                    Mwidth = 500;
                    Mbarrier = true;
                    Msanctuary = true;
                    Mrare = 0;
                    Msilence = true;
                }
                if (x == 12) {
                    Mname = "General Ovext";
                    Mlvl = 49;
                    Mimg = "an imp";
                    Mwidth = 240;
                    Mskill[1] = "conflagration";
                    Mskill[2] = "fireball";
                    Mskill[3] = "fireball";
                    Mflurry = true;
                    Mamp = true;
                    Mrare = 0;
                }
                if (x == 13) {
                    Mname = "a kobold noble";
                    Mlvl = 46;
                    Mimg = "a kobold";
                    Mwidth = 370;
                    MironMaiden = true;
                    Msanctuary = true;
                    Mjob = "ENC";
                    Mrare = 0;
                }
            } else {
                Mrare = 0;
                var x = ~~((M.random() * (4)));
                if (x == 0) {
                    Mname = "a kobold champion";
                    Mlvl = 47;
                    Mimg = "a kobold";
                    Mwidth = 400;
                    Mbarrier = true;
                    Menrage = true;
                }
                if (x == 1) {
                    Mname = "a dung collector";
                    Mlvl = 49;
                    Mimg = "a red goblin";
                    Msanctuary = true;
                    MironMaiden = true;
                }
                if (x == 2) {
                    Mname = "a death beetle";
                    Mlvl = 48;
                    Mimg = "a beetle";
                    Mwidth = 500;
                    Menrage = true;
                    Mflurry = true;
                    Mdrain = true;
                }
                if (x == 3) {
                    Mname = "a kobold priest";
                    Mlvl = 46;
                    Mimg = "a kobold";
                    Mwidth = 360;
                    Mskill[1] = "heal";
                    Mskill[2] = "blind";
                    Mskill[3] = "smite";
                    Mskill[4] = "root";
                    Mresolution = 0;
                    Mfreq = 4;
                    Msanctuary = true;
                    Mbarrier = true;
                    Mamp = true;
                }
            }
        }
        if (_SZ === 4) {
            if (P.Q[df].NagafensLair >= 4) {
                var x = 0;
                if (M.random() < .4) {
                    x = 1;
                }
                if (P.Q[df].NL7 >= 12 && P.Q[df].NL8 >= 8) {
                    if (P.Q[df].NL11 <= 1 && mobsFound() === false) {
                        x = 3;
                        P.Q[df].NL11 = 1;
                        delayedMonsterTimer();
                    }
                }
                if (P.Q[df].NL7 >= 8) {
                    if (P.Q[df].NL10 <= 1 && mobsFound() === false) {
                        x = 4;
                        P.Q[df].NL10 = 1;
                        delayedMonsterTimer();
                    }
                }
                if (P.Q[df].NL7 >= 4) {
                    if (P.Q[df].NL9 <= 1 && mobsFound() === false) {
                        x = 2;
                        P.Q[df].NL9 = 1;
                        delayedMonsterTimer();
                    }
                }
                if (P.Q[df].NL7 >= 12 && P.Q[df].NL8 >= 8 && P.Q[df].NL9 >= 2 && P.Q[df].NL10 >= 2 && P.Q[df].NL11 >= 2) {
                    if (mobsFound() === false && P.Q[df].NL12 === 0) {
                        x = 5;
                    } else {
                        x = 0;
                    }
                }
            }
            if (x == 0) {
                Mname = "a fire giant warrior";
                Mlvl = 50;
                Mimg = "a fire giant";
            }
            if (x == 1) {
                Mname = "a fire giant wizard";
                Mlvl = 50;
                Mimg = "a fire giant";
                Mskill[1] = "smite";
                Mskill[2] = "conflagration";
                Mskill[3] = "energy bolt";
                Mskill[4] = "fireball";
                Mfreq = 3;
                Mamp = true;
            }
            if (x == 2) {
                Mname = "King Argentus";
                Mlvl = 51;
                Mimg = "a fire giant";
                Mrare = 0;
                Mskill[2] = "engulfing darkness";
                Mskill[3] = "fear";
                Mskill[4] = "poison cloud";
                Mfreq = 7;
                MharmTouch = 0;
                Mskeleton = 0;
            }
            if (x == 3) {
                Mname = "Battle Mage Turento";
                Mlvl = 51;
                Mimg = "a fire giant";
                Mrare = 0;
                Mskill[1] = "smite";
                Mskill[2] = "conflagration";
                Mskill[3] = "energy bolt";
                Mskill[4] = "fireball";
                Mfreq = 3;
                Mamp = true;
                Msilence = true;
            }
            if (x == 4) {
                Mname = "Duke Carthenage";
                Mlvl = 50;
                Mimg = "a fire giant";
                Mrare = 0;
            }
            if (x == 5) {
                Mname = "Highlord Szarthax";
                Mlvl = 51;
                Mimg = "a red dragon";
                Mrare = 3;
            }
            /*
            if(P.Q[df].repeatNl4===true){
                Chat("The zone has been cleared.");
                Mname="";
                return;
            }
			*/
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 47) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 47 || Mlvl > 48) {
                a = 0;
            }
        } else {
            if (Mlvl < 48) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Braxxen's Bastille") {
        if (rareMobFlag == false) {
            var x = ~~((M.random() * 16));
            if (M.random() > .0011) {
                var z2 = M.random();
                if (P.Q[df].Najena === 1 && _SZ === 1) {
                    if (z2 > .5) {
                        x = 3;
                    } else if (z2 < .3) {
                        x = 4;
                    } else {
                        x = 13;
                    }
                    if (P.Q[df].NJ1 >= 10 && P.Q[df].NJ2 >= 6 && P.Q[df].NJ3 >= 4 && mobsFound() === false) {
                        x = 15;
                    }
                }
                if (P.Q[df].Najena === 2 && _SZ === 2) {
                    if (z2 > .58) {
                        x = 5;
                    } else if (z2 < .33) {
                        x = 10;
                    } else {
                        x = 0;
                    }
                    if (P.Q[df].NJ1 >= 10 && P.Q[df].NJ2 >= 8 && P.Q[df].NJ3 >= 6 && mobsFound() === false) {
                        x = 16;
                    }
                }
                if (P.Q[df].Najena === 3 && _SZ === 3) {
                    if (z2 > .62) {
                        x = 7;
                    } else if (z2 < .31) {
                        x = 11;
                    } else {
                        x = 6;
                    }
                    if (P.Q[df].NJ1 >= 10 && P.Q[df].NJ2 >= 8 && P.Q[df].NJ3 >= 8) {
                        if (mobsFound() === false) {
                            delayedMonsterTimer();
                            if (P.Q[df].NJ4 < 1) {
                                x = 17;
                                P.Q[df].NJ4 = 1;
                            } else {
                                x = 18;
                                P.Q[df].NJ5 = 1;
                            }
                        } else {
                            if (P.Q[df].NJ4 < 1) {
                                x = 17;
                                P.Q[df].NJ4 = 1;
                            }
                            if (P.Q[df].NJ5 < 1) {
                                x = 18;
                                P.Q[df].NJ5 = 1;
                            }
                        }
                    }
                }
            }
            if (x == 0) {
                Mname = "an anuran torturer";
                Mlvl = 23;
                Mimg = "an anuran";
            }
            if (x == 1) {
                Mname = "a giant black widow";
                Mlvl = 21;
                Mimg = "a heart spider";
                Mwidth = 350;
            }
            if (x == 2) {
                Mname = "a goblin magician";
                Mlvl = 21;
                Mimg = "a red goblin";
                Mwidth = 170;
                Mjob = "MAG";
            }
            if (x == 3) {
                Mname = "a goblin warrior";
                Mlvl = 20;
                Mimg = "a red goblin";
                Mwidth = 180;
            }
            if (x == 4) {
                Mname = "a greater skeleton";
                Mlvl = 20;
                Mimg = "a skeleton";
            }
            if (x == 5) {
                Mname = "a goblin officer";
                Mlvl = 21;
                Mimg = "a red goblin";
            }
            if (x == 6) {
                Mname = "a goblin captain";
                Mlvl = 24;
                Mimg = "a red goblin";
            }
            if (x == 7) {
                Mname = "a magician";
                Mlvl = 23;
                Mimg = "a dark elf female";
                Mjob = "MAG";
            }
            if (x == 8) {
                Mname = "a tentacle horror";
                Mlvl = 22;
                Mimg = "a terror";
                Mjob = "ENC"
            }
            if (x == 8) {
                Mname = "a tentacle thrasher";
                Mlvl = 20;
                Mimg = "a terror";
                Mjob = "ENC"
            }
            if (x == 10) {
                Mname = "a necromancer";
                Mlvl = 22;
                humanGender();
                Mwidth = 180;
                Mjob = "NEC";
            }
            if (x == 11) {
                Mname = "a cephalid subverter";
                Mlvl = 23;
                Mimg = "a terror";
                Mjob = "ENC"
            }
            if (x == 12) {
                Mname = "an injured anuran";
                Mlvl = 21;
                Mimg = "an anuran";
            }
            if (x == 13) {
                Mname = "an anuran guard";
                Mlvl = 21;
                Mimg = "an anuran";
            }
            if (x == 14) {
                Mname = "a dark boned skeleton";
                Mlvl = 20;
                Mimg = "a dark skeleton";
            }
            if (x == 15) {
                Mname = "Grippywor";
                Mlvl = 21;
                Mimg = "an anuran";
                Menrage = true;
                Mrare = 0;
            }
            if (x == 16) {
                Mname = "Munin";
                Mlvl = 23;
                Mimg = "a dark elf male";
                Mjob = "NEC";
                Mamp = true;
                Mrare = 0;
            }
            if (x == 17) {
                Mname = "Burzina";
                Mlvl = 23;
                Mimg = "a dark elf female plate";
                Mjob = "SK";
                Mrare = 0;
            }
            if (x == 18) {
                Mname = "Braxxen";
                Mlvl = 24;
                Mimg = "braxxen";
                Mjob = "MAG";
                Mamp = true;
                Msanctuary = true;
                Mrare = 0;
            }
        } else {
            Mrare = 0;
            var x = ~~((M.random() * (6)));
            if (x == 0) {
                Mname = "Rendozi";
                Mlvl = 22;
                Mimg = "a human male";
                Mjob = "ROG";
                Mflurry = true;
            }
            if (x == 1) {
                Mname = "Officer Flipbip";
                Mlvl = 21;
                Mimg = "an anuran";
                Menrage = true;
            }
            if (x == 2) {
                Mname = "Yibuppin";
                Mlvl = 21;
                Mimg = "an anuran";
                Mflurry = true;
                MironMaiden = true;
            }
            if (x == 3) {
                Mname = "Munin's Incarnate";
                Mlvl = 23;
                Mimg = "a skeleton";
                MironMaiden = true;
                Mbarrier = true;
            }
            if (x == 4) {
                Mname = "Carmaxxen";
                Mlvl = 22;
                Mimg = "a dark elf male";
                Mjob = "NEC";
                Mamp = true;
            }
            if (x == 5) {
                Mname = "Carmina Devorin";
                Mlvl = 23;
                Mimg = "a dark elf female";
                Mjob = "ROG";
                Mdrain = true;
            }
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 21) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 21 || Mlvl > 23) {
                a = 0;
            }
        } else {
            if (Mlvl < 23) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Galeblast Fortress") {
        if (_SZ !== 4) {
            if (rareMobFlag == false) {
                var x = ~~(M.random() * 16);
                if (M.random() > .0011) {
                    var z2 = M.random();
                    if (P.Q[df].PermafrostKeep === 1 && _SZ === 1) {
                        if (z2 > .6) {
                            x = 12;
                        } else if (z2 < .3) {
                            x = 3;
                        } else {
                            x = 1;
                        }
                        if (P.Q[df].PK1 >= 8 && P.Q[df].PK2 >= 6 && P.Q[df].PK3 >= 6 && mobsFound() === false) {
                            x = 16;
                            delayedMonsterTimer();
                        }
                    }
                    if (P.Q[df].PermafrostKeep === 2 && _SZ === 2) {
                        if (z2 > .66) {
                            x = 8;
                        } else if (z2 > .33) {
                            x = 14;
                        } else {
                            x = 6;
                        }
                        if (P.Q[df].PK1 >= 7 && P.Q[df].PK2 >= 7 && P.Q[df].PK3 >= 7 && mobsFound() === false) {
                            x = 17;
                            delayedMonsterTimer();
                        }
                    }

                    if (P.Q[df].PermafrostKeep === 3 && _SZ === 3) {
                        if (z2 > .6) {
                            x = 10;
                        } else if (z2 > .2) {
                            x = 15;
                        } else {
                            x = 13;
                        }
                        if (P.Q[df].PK1 >= 10 && P.Q[df].PK2 >= 10 && P.Q[df].PK3 >= 5) {
                            if (P.Q[df].PK4 <= 1 && mobsFound() === false) {
                                delayedMonsterTimer();
                                if (P.Q[df].PK4 < 1) {
                                    x = 18;
                                    P.Q[df].PK4 = 1;
                                } else {
                                    x = 19;
                                    P.Q[df].PK5 = 1;
                                }
                            } else {
                                if (P.Q[df].PK4 < 1) {
                                    x = 18;
                                    P.Q[df].PK4 = 1;
                                }
                                if (P.Q[df].PK5 < 1) {
                                    x = 19;
                                    P.Q[df].PK5 = 1;
                                }
                            }
                        }
                    }
                }
                if (x == 0) {
                    Mname = "a dire pup";
                    Mlvl = 43;
                    Mimg = "a white wolf";
                    Mwidth = 270;
                }
                if (x == 1) {
                    Mname = "a dire wolf";
                    Mlvl = 44;
                    Mimg = "a white wolf";
                    Mwidth = 340;
                }
                if (x == 2) {
                    Mname = "a goblin diviner";
                    Mlvl = 43;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mjob = "CLR";
                }
                if (x == 3) {
                    Mname = "a goblin evoker";
                    Mlvl = 43;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mjob = "WIZ";
                }
                if (x == 4) {
                    Mname = "a goblin mendicant";
                    Mlvl = 44;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mjob = "CLR";
                }
                if (x == 5) {
                    Mname = "an icy goblin";
                    Mlvl = 45;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mjob = "WIZ";
                }
                if (x == 6) {
                    Mname = "a goblin preacher";
                    Mlvl = 45;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mjob = "CLR";
                }
                if (x == 7) {
                    Mname = "a goblin priest";
                    Mlvl = 43;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mskill[1] = "heal";
                    Mskill[2] = "blind";
                    Mskill[3] = "smite";
                    Mskill[4] = "root";
                    Mresolution = 0;
                    Mfreq = 4;
                }
                if (x == 8) {
                    Mname = "a goblin wizard";
                    Mlvl = 44;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mskill[1] = "ice shard";
                    Mskill[2] = "blizzard";
                    Mskill[3] = "energy bolt";
                    Mskill[4] = "fireball";
                    Mfreq = 3;
                }
                if (x == 9) {
                    Mname = "a large dire wolf";
                    Mlvl = 45;
                    Mimg = "a white wolf";
                    Mwidth = 420;
                }
                if (x == 10) {
                    Mname = "a goblin sage";
                    Mlvl = 45;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mjob = "WIZ";
                }
                if (x == 11) {
                    Mname = "a young dire wolf";
                    Mlvl = 44;
                    Mimg = "a white wolf";
                    Mwidth = 290;
                }
                if (x == 12) {
                    Mname = "an ice goblin";
                    Mlvl = 43;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                }
                if (x == 13) {
                    Mname = "an ice giant youth";
                    Mlvl = 46;
                    Mimg = "an ice giant";
                }
                if (x == 14) {
                    Mname = "an elite goblin guard";
                    Mlvl = 44;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Menrage = true;
                }
                if (x == 15) {
                    Mname = "an elite honor guard";
                    Mlvl = 45;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                }
                if (x == 16) {
                    Mname = "an ice goblin keymaster";
                    Mlvl = 44;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mflurry = true;
                    MironMaiden = true;
                    Mrare = 0;
                }
                if (x == 17) {
                    Mname = "a goblin excavator";
                    Mlvl = 45;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mflurry = true;
                    Mrare = 0;
                }
                if (x == 18) {
                    Mname = "Pontiff Krindletin";
                    Mlvl = 46;
                    Mimg = "a blue goblin";
                    Mwidth = 195;
                    Mjob = "CLR";
                    Mamp = true;
                    Msanctuary = true;
                    Mrare = 0;
                }
                if (x == 19) {
                    Mname = "Magnate Dinbopp";
                    Mlvl = 46;
                    Mimg = "a blue goblin";
                    Mwidth = 195;
                    Mskill[3] = "bash";
                    Mfreq = 8;
                    Menrage = true;
                    MironMaiden = true;
                    Mrare = 0;
                }
            } else {
                Mrare = 0;
                var x = ~~(M.random() * (5));
                if (x == 0) {
                    Mname = "Vober Slibable";
                    Mlvl = 44;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mskill[2] = "poison cloud";
                    Mskill[3] = "envenom";
                    MironMaiden = true;
                    Mamp = true;
                }
                if (x == 1) {
                    Mname = "Cribub Upbuppi";
                    Mlvl = 43;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mjob = "SHM";
                    Mamp = true;
                }
                if (x == 2) {
                    Mname = "Boger Dinviegle";
                    Mlvl = 45;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Menrage = true;
                }
                if (x == 3) {
                    Mname = "Bazile Ortemmi";
                    Mlvl = 45;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Menrage = true;
                    MironMaiden = true;
                }
                if (x == 4) {
                    Mname = "Prin Fradl";
                    Mlvl = 44;
                    Mimg = "a blue goblin";
                    Mwidth = 180;
                    Mjob = "CLR";
                    Mfreq = 4;
                    Mamp = true;
                    Msanctuary = true;
                }
            }
        }
        if (_SZ === 4) {
            if (P.Q[df].PermafrostKeep >= 4) {
                var x = 0;
                if (P.Q[df].PK1 < 4 || P.Q[df].PK2 < 4 || P.Q[df].PK3 < 4) {
                    x = ~~(M.random() * (3)) + 3; //animals
                } else if (P.Q[df].PK4 < 3 || P.Q[df].PK5 < 2 || P.Q[df].PK6 < 2) {
                    x = ~~(M.random() * (3)); //giants
                } else if (P.Q[df].PK7 === 0) {
                    x = 7; //diplomat
                    P.Q[df].PK7 = 1;
                    P.Q[df].PK8 = 0;
                    delayedMonsterTimer();
                } else {
                    if (P.Q[df].PK8 === 0) {
                        x = 6; //priest of nagafen
                        P.Q[df].PK8 = 1;
                    }
                }
                if (P.Q[df].PK1 >= 4 && P.Q[df].PK2 >= 4 && P.Q[df].PK3 >= 4 && P.Q[df].PK4 >= 3 && P.Q[df].PK5 >= 2 && P.Q[df].PK6 >= 2 && P.Q[df].PK7 >= 2 && P.Q[df].PK8 >= 2) {
                    if (mobsFound() === false && P.Q[df].PK9 === 0) {
                        x = 8;
                    } else {
                        x = 0;
                    }
                }
            }
            if (x == 0) {
                Mname = "an ice giant";
                Mlvl = 47;
                Mimg = "an ice giant";
            }
            if (x == 1) {
                Mname = "an ice giant magus";
                Mlvl = 46;
                Mimg = "an ice giant";
                Mskill[1] = "ice shard";
                Mskill[2] = "blizzard";
                Mskill[3] = "ice shard";
                Mskill[4] = "ice shard";
                Mfreq = 3;
            }
            if (x == 2) {
                Mname = "an ice giant priest";
                Mlvl = 47;
                Mimg = "an ice giant";
                Mjob = "CLR";
            }
            if (x == 3) {
                Mname = "an ice giant champion";
                Mlvl = 46;
                Mimg = "an ice giant";
                Mjob = "PAL";
            }
            if (x == 4) {
                Mname = "an ice giant warder";
                Mlvl = 46;
                Mimg = "an ice giant";
                Mjob = "RNG";
            }
            if (x == 5) {
                Mname = "an ice giant preserver";
                Mlvl = 46;
                Mimg = "an ice giant";
                Mjob = "DRU";
            }
            if (x == 6) {
                Mname = "Vizier Kongumen Divorn";
                Mlvl = 48;
                Mimg = "an ice giant";
                Mwidth = 350;
                Mjob = "CLR";
                Mrare = 0;
            }
            if (x == 7) {
                Mname = "Margrave Kalgresh the Usurper";
                Mlvl = 48;
                Mimg = "an ice giant";
                Mrare = 0;
            }
            if (x == 8) {
                Mname = "Matron Maelentia";
                Mlvl = 48;
                Mimg = "a blue dragon";
                Mrare = 3;
            }
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 44) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 44 || Mlvl > 45) {
                a = 0;
            }
        } else if (_SZ === 3) {
            if (Mlvl < 45 || Mlvl > 46) {
                a = 0;
            }
        } else if (_SZ === 4) {
            if (Mlvl < 46) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    if (_Z === "Nimgaul") {
        if (rareMobFlag == false) {
            var x = ~~(M.random() * 17);
            if (P.Q[df].PF15 < 3 || P.Q[df].PF16 < 3 || P.Q[df].PF17 < 3 || P.Q[df].PF22 < 1) {
                x = ~~(M.random() * (3)) + 14;
                if (P.Q[df].PF22 === 0 && P.Q[df].PF15 >= 3 && P.Q[df].PF16 >= 3 && P.Q[df].PF17 >= 3 && mobsFound() === false) {
                    x = 21;
                } //cazic
            }
            if (P.Q[df].PF12 < 3 || P.Q[df].PF13 < 3 || P.Q[df].PF14 < 3 || P.Q[df].PF20 < 1) {
                x = ~~(M.random() * (3)) + 11;
                if (P.Q[df].PF20 === 0 && P.Q[df].PF12 >= 3 && P.Q[df].PF13 >= 3 && P.Q[df].PF14 >= 3 && mobsFound() === false) {
                    x = 19;
                } //terror
            }
            if (P.Q[df].PF9 < 3 || P.Q[df].PF10 < 3 || P.Q[df].PF11 < 3 || P.Q[df].PF19 < 1) {
                x = ~~(M.random() * (3)) + 8;
                if (P.Q[df].PF19 === 0 && P.Q[df].PF9 >= 3 && P.Q[df].PF10 >= 3 && P.Q[df].PF11 >= 3 && mobsFound() === false) {
                    x = 18;
                } //dread
            }
            if (P.Q[df].PF5 < 3 || P.Q[df].PF6 < 3 || P.Q[df].PF7 < 3 || P.Q[df].PF8 < 3 || P.Q[df].PF21 < 1) {
                x = ~~(M.random() * (4)) + 4;
                if (P.Q[df].PF21 === 0 && P.Q[df].PF5 >= 3 && P.Q[df].PF6 >= 3 && P.Q[df].PF7 >= 3 && P.Q[df].PF8 >= 3 && mobsFound() === false) {
                    x = 20;
                } //dracoliche
            }
            if (P.Q[df].PF1 < 3 || P.Q[df].PF2 < 3 || P.Q[df].PF3 < 3 || P.Q[df].PF4 < 3 || P.Q[df].PF18 < 1) {
                x = ~~(M.random() * (4));
                if (P.Q[df].PF18 === 0 && P.Q[df].PF1 >= 3 && P.Q[df].PF2 >= 3 && P.Q[df].PF3 >= 3 && P.Q[df].PF4 >= 3 && mobsFound() === false) {
                    x = 17;
                } //fright
            }
            if (x == 0) {
                Mname = "a wailing banshee";
                Mlvl = 51;
                Mimg = "a ghoul";
                Mskill[2] = "root";
                Mskill[3] = "root";
                Mskill[4] = "root";
                McastSpeed = 500;
                Mwidth = 400;
            }
            if (x == 1) {
                Mname = "a festering dreg";
                Mlvl = 52;
                Mwidth = 220;
                McastSpeed = 500;
                Mskill[2] = "envenom";
                Mskill[3] = "envenom";
                Mskill[4] = "envenom";
                if (M.random() > .5) {
                    Mimg = "a female zombie";
                    Mwidth = 190;
                } else {
                    Mimg = "a male zombie";
                    Mwidth = 210;
                }
            }
            if (x == 2) {
                Mname = "a lurid nymph";
                Mlvl = 52;
                Mimg = "a faerie";
                Mwidth = 140;
                Mjob = "WIZ";
            }
            if (x == 3) {
                Mname = "a peering menace";
                Mlvl = 52;
                Mimg = "an evil eye round";
                Mwidth = 120;
                Mjob = "ENC";
            }
            if (x == 4) {
                Mname = "an accursed slattern";
                Mlvl = 51;
                Mimg = "a vampire female";
                Mjob = "NEC";
            }
            if (x == 5) {
                Mname = "a brooding fungus";
                Mlvl = 52;
                Mimg = "a fungus";
                Mskill[1] = "blind";
                Mskill[2] = "blind";
                Mskill[3] = "yawn";
                Mskill[4] = "yawn";
                Mfreq = 7;
            }
            if (x == 6) {
                Mname = "a cursed marionette";
                Mlvl = 52;
                Mimg = "a faerie";
                Mwidth = 140;
                Mjob = "ENC";
            }
            if (x == 7) {
                Mname = "a tremulant imp";
                Mlvl = 52;
                Mimg = "an imp";
                Mwidth = 160;
                Mjob = "ROG";
                Mflurry = true;
            }
            if (x == 8) {
                Mname = "a deranged gorilla";
                Mlvl = 53;
                Mimg = "a gorilla";
                Mwidth = 500;
                Menrage = true;
            }
            if (x == 9) {
                Mname = "a boreal spider";
                Mlvl = 53;
                Mimg = "a white spider";
                Mfreq = 5;
                Mskill[1] = "ice shard";
                Mskill[2] = "ice shard";
                Mskill[3] = "blizzard";
                Mskill[4] = "blizzard";
                McastSpeed = 500;
            }
            if (x == 10) {
                Mname = "a cephalid enticer";
                Mlvl = 51;
                Mimg = "a terror";
                Mdrain = true;
                Mjob = "SHM";
            }
            if (x == 11) {
                Mname = "a panicked anuran";
                Mlvl = 52;
                Mimg = "an anuran";
                Mskill[2] = "fear";
                Mskill[3] = "fear";
                Mskill[4] = "fear";
            }
            if (x == 12) {
                Mname = "a chaos punisher";
                Mlvl = 52;
                Mimg = "a clay golem";
                Mwidth = 270;
                Mbarrier = true;
                Mskill[2] = "mind drain";
                Mskill[3] = "mind drain";
                Mskill[4] = "mind drain";
            }
            if (x == 13) {
                Mname = "a chaos enforcer";
                Mlvl = 53;
                Mimg = "a stone golem";
                Mskill[1] = "mind drain";
                Mskill[2] = "mind drain";
                Mskill[3] = "engulfing darkness";
                Mskill[4] = "fear";
                Mfreq = 7;
                MharmTouch = 0;
                Mskeleton = 0;
            }
            if (x == 14) {
                Mname = "a pustulant vessel";
                Mlvl = 52;
                Mimg = "a mummy";
                Mskill[1] = "mind numb";
                Mskill[2] = "mind numb";
                Mskill[3] = "weaken";
                Mskill[4] = "weaken";
            }
            if (x == 15) {
                Mname = "a shrieking wisp";
                Mlvl = 52;
                Mimg = "a wisp";
            }
            if (x == 16) {
                Mname = "a sorrow slitherer";
                Mlvl = 52;
                Mimg = "a terror";
                Mjob = "ENC"
            }

            if (x == 17) {
                Mname = "Guardian of Misery";
                Mlvl = 55;
                Mimg = "a clay golem";
                Mwidth = 360;
                Mrare = 0;
                MironMaiden = true;
                Mdrain = true;
            }
            if (x == 18) {
                Mname = "Guardian of Strife";
                Mlvl = 55;
                Mimg = "a stone golem";
                Mrare = 0;
                Mbarrier = true;
                Msanctuary = true;
            }
            if (x == 19) {
                Mname = "Guardian of Ruin";
                Mlvl = 55;
                Mimg = "a steel golem";
                Mwidth = 360;
                Mrare = 0;
                Mflurry = true;
                Menrage = true;
            }
            if (x == 20) {
                Mname = "Falzitherin";
                Mlvl = 54;
                Mimg = "dracoliche";
                Mwidth = 829;
                Mrare = 3;
                Mstr *= 1.6;
                Mpoison = 67;
                MharmTouch = 0;
                Mtype = 3;
                McastSpeed = 500;
                Mint *= 2.3;
                Mfreq = 4;

                Mskill[1] = "envenom";
                Mskill[2] = "engulfing darkness";
                Mskill[3] = "poison cloud";
                Mskill[4] = "fear";
                Mdrain = true;
                Mskeleton = 0;
            }
            if (x == 21) {
                Mname = "Nalatos, God of Chaos";
                Mlvl = 55;
                Mimg = "cazic";
                Mrare = 3;
                Mwidth = 602;
            }
        } else {
            Mrare = 0;
            var x = ~~(M.random() * (7));
            if (x == 0) {
                Mname = "Anastaryan";
                Mlvl = 53;
                Mimg = "a faerie";
                Mjob = "WIZ";
                Mamp = true;
                Msanctuary = true;
            }
            if (x == 1) {
                Mname = "Erghal";
                Mlvl = 54;
                Mimg = "an evil eye round";
                Mjob = "ENC";
                Mamp = true;
                Msilence = true;
            }
            if (x == 2) {
                Mname = "Oshomurm";
                Mlvl = 53;
                Mimg = "a fungus";
                Mjob = "SHM";
                Mbarrier = true;
                Msanctuary = true;
            }
            if (x == 3) {
                Mname = "Shevn Ohn";
                Mlvl = 54;
                Mimg = "an imp";
                Mjob = "ROG";
                Mflurry = true;
                Mrune = 1;
                Mdrain = true;
            }
            if (x == 4) {
                Mname = "Burzwhorl";
                Mlvl = 53;
                Mimg = "a white spider";
                Mjob = "ENC";
                Mdrain = true;
                MironMaiden = true;
            }
            if (x == 5) {
                Mname = "Sisyphen";
                Mlvl = 54;
                Mimg = "a wisp";
                Mjob = "WIZ";
                Msanctuary = true;
                Msilence = true;
            }
            if (x == 6) {
                Mname = "General Burble";
                Mlvl = 53;
                Mimg = "an anuran";
                Menrage = true;
                Mbarrier = true;
            }
        }
    }
    if (_Z === "Dire Sanctum") {
        if (rareMobFlag == false) {
            var x = ~~(M.random() * 11);
            if (P.Q[df].PH7 < 5 || P.Q[df].PH8 < 5 || P.Q[df].PH9 < 5 || P.Q[df].PH10 < 5 || P.Q[df].PH11 < 5 || P.Q[df].PH13 < 1) {
                x = ~~(M.random() * (5)) + 6;
                if (P.Q[df].PH13 === 0 && P.Q[df].PH7 >= 5 && P.Q[df].PH8 >= 5 && P.Q[df].PH9 >= 5 && P.Q[df].PH10 >= 5 && P.Q[df].PH11 >= 5 && mobsFound() === false) {
                    x = 12;
                } //innoruuk
            }
            if (P.Q[df].PH1 < 4 || P.Q[df].PH2 < 4 || P.Q[df].PH3 < 4 || P.Q[df].PH4 < 4 || P.Q[df].PH5 < 4 || P.Q[df].PH6 < 4 || P.Q[df].PH12 < 1) {
                x = ~~(M.random() * (6));
                if (P.Q[df].PH12 === 0 && P.Q[df].PH1 >= 4 && P.Q[df].PH2 >= 4 && P.Q[df].PH3 >= 4 && P.Q[df].PH4 >= 4 && P.Q[df].PH5 >= 4 && P.Q[df].PH6 >= 4 && mobsFound() === false) {
                    x = 11;
                } //maestro
            }
            if (x == 0) {
                Mname = "a toiling drudge";
                Mlvl = 50;
                Mimg = "a stone golem";
                Mmagic = 67;
                Mfire = 67;
                Mcold = 67;
                Mjob = "SHM";
            }
            if (x == 1) {
                Mname = "a slavering corpse";
                Mlvl = 50;
                Mimg = "a female zombie";
                Mwidth = 240;
                Mskill[2] = "envenom";
                Mskill[3] = "envenom";
                Mskill[4] = "envenom";
                Mfreq = 7;
            }
            if (x == 2) {
                Mname = "a fetid vagabond";
                Mlvl = 50;
                Mimg = "a dhampyre";
                Mjob = "MAG";
                if (M.random() > .5) {
                    Mimg = "a vampire female";
                }
            }
            if (x == 3) {
                Mname = "an impulse servant";
                Mlvl = 49;
                Mimg = "a gargoyle";
                Mwidth = 250;
                Mjob = "ROG";
                Mfreq = 6;
                Mmagic = 125;
            }
            if (x == 4) {
                Mname = "a servant of corruption";
                Mlvl = 51;
                MlayHands = true;
                McastSpeed = 2250;
                MmaxHp *= .9;
                Mimg = "a dark elf male";
            }
            if (x == 5) {
                Mname = "an embalmed vagrant";
                Mlvl = 49;
                Mimg = "a mummy";
                Mfreq = 6;
                Mskill[2] = "envenom";
                Mskill[3] = "envenom";
                Mskill[4] = "envenom";
            }
            if (x == 6) {
                Mname = "a ghastly indulger";
                Mlvl = 50;
                Mimg = "a ghoul";
                Mwidth = 400;
                Mjob = "SK";
            }
            if (x == 7) {
                Mname = "an infected rodent";
                Mlvl = 49;
                Mimg = "a rat";
                Mfreq = 7;
                Mskill[2] = "envenom";
                Mskill[3] = "envenom";
                Mskill[4] = "envenom";
            }
            if (x == 8) {
                Mname = "a flittering menace";
                Mlvl = 51;
                Mimg = "an imp";
                Mjob = "NEC";
                Mmagic = 67;
            }
            if (x == 9) {
                Mname = "a hallowed harbinger";
                Mlvl = 51;
                Mimg = "a skeleton";
                Menrage = true;
            }
            if (x == 10) {
                Mname = "a cephalid sorcerer";
                Mlvl = 50;
                Mimg = "a terror";
                Mjob = "WIZ";
            }

            if (x == 11) {
                Mname = "Vixen Sarmina";
                Mlvl = 52;
                Mimg = "maestro";
                Mrare = 3;
                Mwidth = 250;
                Mdrain = true;
                Mflurry = true;
            }
            if (x == 12) {
                Mname = "Sanctum Guardian Ghalentus";
                Mlvl = 53;
                Mimg = "innoruuk";
                Mrare = 3;
                Mwidth = 325;
            }
        } else {
            Mrare = 0;
            var x = ~~(M.random() * (5));
            if (x == 0) {
                Mname = "Adendu Noughyn";
                Mlvl = 52;
                Mimg = "a dark elf male";
                Mjob = "ROG";
                Mflurry = true;
            }
            if (x == 1) {
                Mname = "Shenmo Gourtan";
                Mlvl = 51;
                Mimg = "a dhampyre";
                Mjob = "ENC";
                Msanctuary = true;
            }
            if (x == 2) {
                Mname = "Phenochlord";
                Mlvl = 52;
                Mimg = "a terror";
                Mjob = "WIZ";
                Mamp = true;
            }
            if (x == 3) {
                Mname = "Atorc Aldiph";
                Mlvl = 52;
                Mimg = "a stone golem";
                Mjob = "SHM";
                Mdrain = true;
                MironMaiden = true;
            }
            if (x == 4) {
                Mname = "Phadol Theril";
                Mlvl = 53;
                Mimg = "a skeleton";
                Mjob = "PAL";
                Menrage = true;
            }
        }
    }
    if (_Z === "Kordata Marshlands") {
        if (rareMobFlag == false) {
            var x = ~~((M.random() * 43));
            if (M.random() > .0011) {
                var z2 = M.random();
                if (P.Q[df].UpperGuk === 1 && _SZ === 1) {
                    if (z2 > .58) {
                        x = 31;
                    } else if (z2 < .285) {
                        x = 29;
                    } else {
                        x = 30;
                    }
                }
                if (P.Q[df].UpperGuk === 2 && _SZ === 2) {
                    if (z2 > .64) {
                        x = 37;
                    } else if (z2 < .36) {
                        x = 33;
                    } else {
                        x = 11;
                    }
                    if (P.Q[df].UG1 >= 8 && P.Q[df].UG2 >= 8 && P.Q[df].UG3 >= 6 && mobsFound() === false) {
                        x = 43;
                    }
                }
                if (P.Q[df].UpperGuk === 3 && _SZ === 3) {
                    if (z2 > .58) {
                        x = 27;
                    } else if (z2 < .285) {
                        x = 21;
                    } else {
                        x = 28;
                    }
                    if (P.Q[df].UG1 >= 12 && P.Q[df].UG2 >= 8 && P.Q[df].UG3 >= 8) {
                        if (mobsFound() === false) {
                            x = 44;
                            delayedMonsterTimer(2);
                        }
                    }
                }
            }
            if (x == 0) {
                Mname = "an anuran apprentice";
                Mlvl = 23;
                Mimg = "an anuran";
            }
            if (x == 1) {
                Mname = "an anuran ith knight";
                Mlvl = 25;
                Mimg = "an anuran";
            }
            if (x == 2) {
                Mname = "an anuran ith shaman";
                Mlvl = 25;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 3) {
                Mname = "an anuran guard";
                Mlvl = 24;
                Mimg = "an anuran";
            }
            if (x == 4) {
                Mname = "an anuran guard";
                Mlvl = 24;
                Mimg = "an anuran";
            }
            if (x == 5) {
                Mname = "a skeletal slave";
                Mlvl = 24;
                Mimg = "a dark skeleton";
            }
            if (x == 6) {
                Mname = "an anuran necromancer";
                Mlvl = 24;
                Mimg = "an anuran";
                Mjob = "NEC";
            }
            if (x == 7) {
                Mname = "an anuran neophyte";
                Mlvl = 23;
                Mimg = "an anuran";
            }
            if (x == 8) {
                Mname = "an anuran nokta shaman";
                Mlvl = 24;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 9) {
                Mname = "an anuran novice";
                Mlvl = 23;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 10) {
                Mname = "an anuran outlander";
                Mlvl = 24;
                Mimg = "an anuran";
            }
            if (x == 11) {
                Mname = "an anuran priest";
                Mlvl = 27;
                Mimg = "an anuran";
                Mjob = "CLR";
            }
            if (x == 12) {
                Mname = "an anuran realist";
                Mlvl = 25;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 13) {
                Mname = "a skeletal monk";
                Mlvl = 25;
                Mimg = "a dark skeleton";
                Mjob = "MNK";
            }
            if (x == 14) {
                Mname = "an anuran sentinel";
                Mlvl = 24;
                Mimg = "an anuran";
            }
            if (x == 15) {
                Mname = "an anuran sentry";
                Mlvl = 24;
                Mimg = "an anuran";
            }
            if (x == 16) {
                Mname = "an anuran cham knight";
                Mlvl = 26;
                Mimg = "an anuran";
            }
            if (x == 17) {
                Mname = "a skeletal servant";
                Mlvl = 26;
                Mimg = "a dark skeleton";
                Mjob = "MNK";
            }
            if (x == 18) {
                Mname = "an anuran cham shaman";
                Mlvl = 26;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 19) {
                Mname = "an anuran cham warrior";
                Mlvl = 26;
                Mimg = "an anuran";
            }
            if (x == 20) {
                Mname = "an anuran shinta warrior";
                Mlvl = 25;
                Mimg = "an anuran";
            }
            if (x == 21) {
                Mname = "an anuran summoner";
                Mlvl = 27;
                Mimg = "an anuran";
                Mjob = "MAG";
            }
            if (x == 22) {
                Mname = "an anuran recruit";
                Mlvl = 23;
                Mimg = "an anuran";
            }
            if (x == 23) {
                Mname = "an anuran lem shaman";
                Mlvl = 26;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 24) {
                Mname = "an anuran ton knight";
                Mlvl = 24;
                Mimg = "an anuran";
            }
            if (x == 25) {
                Mname = "an anuran ton shaman";
                Mlvl = 25;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 26) {
                Mname = "an anuran ton warrior";
                Mlvl = 26;
                Mimg = "an anuran";
            }
            if (x == 27) {
                Mname = "an anuran tonta knight";
                Mlvl = 27;
                Mimg = "an anuran";
            }
            if (x == 28) {
                Mname = "an anuran fal shaman";
                Mlvl = 28;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 29) {
                Mname = "an anuran sur knight";
                Mlvl = 24;
                Mimg = "an anuran";
            }
            if (x == 30) {
                Mname = "an anuran sur shaman";
                Mlvl = 25;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 31) {
                Mname = "an anuran sur warrior";
                Mlvl = 24;
                Mimg = "an anuran";
            }
            if (x == 32) {
                Mname = "an anuran tir knight";
                Mlvl = 28;
                Mimg = "an anuran";
            }
            if (x == 33) {
                Mname = "an anuran tir shaman";
                Mlvl = 26;
                Mimg = "an anuran";
                Mjob = "SHM";
            }
            if (x == 34) {
                Mname = "an anuran witch doctor";
                Mlvl = 24;
                Mimg = "an anuran";
                Mjob = "NEC";
            }
            if (x == 35) {
                Mname = "an anuran dol priest";
                Mlvl = 27;
                Mimg = "an anuran";
                Mjob = "CLR";
            }
            if (x == 36) {
                Mname = "a fungus ancient";
                Mlvl = 27;
                Mimg = "a fungus";
                Mjob = "RNG";
            }
            if (x == 37) {
                Mname = "a fungus breeder";
                Mlvl = 25;
                Mimg = "a fungus";
                Mjob = "RNG";
            }
            if (x == 38) {
                Mname = "a fungus drone";
                Mlvl = 25;
                Mimg = "a fungus";
                Mjob = "RNG";
            }
            if (x == 39) {
                Mname = "a fungus mutant";
                Mlvl = 26;
                Mimg = "a fungus";
                Mjob = "RNG";
            }
            if (x == 40) {
                Mname = "a fungus soldier";
                Mlvl = 25;
                Mimg = "a fungus";
                Mjob = "RNG";
            }
            if (x == 41) {
                Mname = "a large heart spider";
                Mlvl = 25;
                Mimg = "a heart spider";
                Mwidth = 320;
            }
            if (x == 42) {
                Mname = "a heart spider";
                Mlvl = 24;
                Mimg = "a heart spider";
                Mwidth = 270;
            }
            if (x == 43) {
                Mname = "the anuran warden";
                Mlvl = 27;
                Mimg = "an anuran";
                Mrare = 0;
                Mflurry = true;
            }
            if (x == 44) {
                Mname = "Prince Kerpple";
                Mlvl = 28;
                Mimg = "an anuran";
                Mjob = "PAL";
                Mflurry = true;
                Msanctuary = true;
                Mbarrier = true;
                Mrare = 0;
            }
        } else {
            Mrare = 0;
            var x = ~~((M.random() * (5)));
            if (x == 0) {
                Mname = "an anuran idealist";
                Mlvl = 24;
                Mimg = "an anuran";
                Mflurry = true;
            }
            if (x == 1) {
                Mname = "an anuran cartographer";
                Mlvl = 27;
                Mimg = "an anuran";
                Menrage = true;
            }
            if (x == 2) {
                Mname = "an anuran ith squire";
                Mlvl = 25;
                Mimg = "an anuran";
                Mjob = "CLR";
                Msanctuary = true;
            }
            if (x == 3) {
                Mname = "a giant heart spider";
                Mlvl = 24;
                Mimg = "a heart spider";
                Mwidth = 325;
                Mflurry = true;
                Mdrain = true;
            }
            if (x == 4) {
                Mname = "an anuran scryer";
                Mlvl = 25;
                Mimg = "an anuran";
                Mjob = "ENC";
                Msanctuary = true;
            }
        }
        var a = 1;
        if (_SZ === 1) {
            if (Mlvl > 25) {
                a = 0;
            }
        } else if (_SZ === 2) {
            if (Mlvl < 25 || Mlvl > 27) {
                a = 0;
            }
        } else {
            if (Mlvl < 27) {
                a = 0;
            }
        }
        if (a === 0 && Mrare !== 0) {
            getMonster(++count, rareMobFlag);
            return;
        }
    }
    count++;
    //level-based filtering
    if (count < 2000) {
        //ensure no double rares
        for (var i = 0; i <= 4; i++) {
            if (Mname == mob[i].name && Mrare == 0) {
                getMonster(count, rareMobFlag);
                return;
            }
        }
    }
    //found nothing
    if (Mname == "") {
        getMonster(count, rareMobFlag);
        return;
    }
    //filtering FINISHED
    if (g.difficulty === 2) {
        Mlvl += 25;
        monsterSpeed *= .8;
        McastSpeed *= .8;
    }
    if (g.difficulty === 3) {
        Mlvl += 44;
        if (Mlvl > 99) {
            Mlvl = 99;
        }
        monsterSpeed *= .6;
        McastSpeed *= .6;
    }
    Mlvl = DADJ(Mlvl); // dAdj
    if (Mrare === 3) {
        monsterSpeed = 2500;
        if (g.difficulty === 2) {
            monsterSpeed = 2000;
        }
        if (g.difficulty === 3) {
            monsterSpeed = 1500;
        }
    }
    if (Mrare === 0) {
        if (g.difficulty === 2) {
            Mlvl++;
        } else if (g.difficulty === 3) {
            Mlvl += 2;
        }
    }
	if (Mlvl > 99) {
		Mlvl = 99;
	}
	var mobLevelBoost = ~~(chainCounter/10);
	if(mobLevelBoost > 25){
		mobLevelBoost = 25;
	}
	Mlvl += mobLevelBoost;
    //tracking message
    if (rangerTrackStatus == true && rareMobFlag == false) {
        rangerTrackStatus = false;
        Chat(("You failed to find your quarry this time."));
    }
    if (rangerTrackStatus == true && rareMobFlag == true) {
        Mrare = 0;
        rangerTrackStatus = false;
        Chat(("You successfully tracked " + Mname + "."));
    }
    // boost monster HP at level 10 increments
    if (Mlvl >= 10) {
        MmaxHp += (Mlvl * 10);
    }
    if (Mlvl >= 20) {
        MmaxHp += (Mlvl * 10);
    }
    if (Mlvl >= 30) {
        MmaxHp += (Mlvl * 10);
    }
    if (Mlvl >= 40) {
        MmaxHp += (Mlvl * 10);
    }
    if (Mlvl >= 50) {
        MmaxHp += (Mlvl * 10);
    } //4500 extra at 50
    if (Mlvl >= 60) {
        MmaxHp += (Mlvl * 10);
    }
    if (Mlvl >= 70) {
        MmaxHp += (Mlvl * 10);
    }
    if (Mlvl >= 80) {
        MmaxHp += (Mlvl * 10);
    }
    if (Mlvl >= 90) {
        MmaxHp += (Mlvl * 10);
    } //8910 extra hp at level 99
    MmaxHp += (Mlvl * 100); // 8910 at 99
    Mstr += 1 + (Mlvl * 2.3);
    Mdef = 100;
    Mint += 5 + (Mlvl * 2.3);
    Mpoison = 100;
    Mmagic = 100;
    Mlightning = 100;
    Mcold = 100;
    Mfire = 100;
    if (g.difficulty === 2) {
        MmaxHp = MmaxHp * 1.2;
    } else if (g.difficulty === 3) {
        MmaxHp = MmaxHp * 1.5;
    }
    monsterID = monsterID + 1;
    if (monsterID > 1024) {
        monsterID = 1;
    };
    Mxp = Mlvl * 18 + 12;
    //job skill assignment
    if (Mrare === 3) {
        Mjob = "";
    }
    if (Mjob !== "") {
        if (Mjob === "MNK") {
            Mskill[1] = "shadow kick";
            Mskill[2] = "shadow kick";
            Mskill[3] = "shadow kick";
            Mskill[4] = "shadow kick";
            Mfreq = 8;
            MmaxHp *= .9;
        }
        if (Mjob === "ROG") {
            Mskill[1] = "backstab";
            Mskill[2] = "backstab";
            Mskill[3] = "backstab";
            Mskill[4] = "backstab";
            Mfreq = 8;
            MmaxHp *= .95;
        }
        if (Mjob === "SK") {
            Mskill[2] = "engulfing darkness";
            Mskill[3] = "fear";
            Mskill[4] = "poison cloud";
            Mfreq = 7;
            MharmTouch = 0;
            Mskeleton = 0;
            Mfreq = 8;
        }
        if (Mjob === "DRU" || Mjob === "RNG") {
            Mskill[1] = "heal";
            Mskill[2] = "conflagration";
            Mskill[3] = "fireball";
            Mskill[4] = "root";
            Mfreq = 4;
            if (Mjob === "RNG") {
                monsterSpeed *= .9;
                Mstr *= 1.1;
                Mfreq = 7;
                MmaxHp *= .95;
            } else {
                Mthorns = 0;
                Mint *= 1.1;
                MmaxHp *= .95;
                MmaxHp *= .9;
            }
        }
        if (Mjob === "CLR" || Mjob === "PAL") {
            Mskill[1] = "heal";
            Mskill[2] = "blind";
            Mskill[3] = "smite";
            Mskill[4] = "root";
            Mresolution = 0;
            Mfreq = 4;
            if (Mjob === "PAL") {
                MlayHands = true;
            } else {
                Mint *= 1.1;
            }
        }
        if (Mjob === "SHM") {
            Mskill[1] = "heal";
            Mskill[2] = "envenom";
            Mskill[3] = "yawn";
            Mskill[4] = "weaken";
            Mfreq = 4;
            Mwolf = 0;
            Mint *= 1.1;
        }
        if (Mjob === "NEC") {
            Mskill[1] = "engulfing darkness";
            Mskill[2] = "fear";
            Mskill[3] = "poison cloud";
            Mskill[4] = "energy bolt";
            Mskeleton = 0;
            Mfreq = 3;
            Mint *= 1.1;
            MmaxHp *= .8;
        }
        if (Mjob === "ENC") {
            Mskill[1] = "yawn";
            Mskill[2] = "mind numb";
            Mskill[3] = "confuse";
            Mskill[4] = "smite";
            Mfreq = 3;
            Mrune = 0;
            Mint *= 1.1;
            MmaxHp *= .8;
        }
        if (Mjob === "MAG") {
            Mskill[1] = "energy bolt";
            Mskill[2] = "ice shard";
            Mskill[3] = "mind drain";
            Mskill[4] = "static field";
            Mfreq = 3;
            Melemental = 0;
            Mlava = 0;
            Mint *= 1.1;
            MmaxHp *= .8;
        }
        if (Mjob === "WIZ") {
            Mskill[1] = "ice shard";
            Mskill[2] = "blizzard";
            Mskill[3] = "energy bolt";
            Mskill[4] = "fireball";
            Mfreq = 3;
            Mint *= 1.1;
            MmaxHp *= .8;
        }
    }
    // image traits
    Mtype = 0; // 0 is animal, 1 normal, 2 giant, 3 boss
    if (Mimg == "a bat") {
        mobImgX = 290;
        mobImgY = 427;
        cX = 137;
        cY = 99;
        if (Mwidth === 200) {
            Mwidth = 220;
        }
        Maud1 = "bat_att";
        Maud2 = "bat_hit";
        Maud3 = "bat_die";
    }
    if (Mimg == "a beetle") {
        mobImgX = 200;
        mobImgY = 85;
        cX = 93;
        cY = 56;
        Maud1 = "beetlatt";
        Maud2 = "beetlhit";
        Maud3 = "beetldie";
        Mlightning = 67;
    }
    if (Mimg == "a blue goblin") {
        mobImgX = 200;
        mobImgY = 249;
        cX = 96;
        cY = 70;
        Maud1 = "gob_att";
        Maud2 = "gob_hit";
        Maud3 = "gob_die";
        Mcold = 67;
        Mtype = 1;
    }
    if (Mimg == "a brown spider") {
        mobImgX = 200;
        mobImgY = 111;
        cX = 101;
        cY = 56;
        Maud1 = "spid_att";
        Maud2 = "spid_hit";
        Maud3 = "spid_die";
        Mdrain = true;
        Mpoison = 67;
    }
    if (Mimg == "a clay golem") {
        mobImgX = 274;
        mobImgY = 365;
        cX = 108;
        cY = 99;
        Maud1 = "golumatt";
        Maud2 = "golumhit";
        Maud3 = "golumdie";
        MmaxHp *= 1.2;
        Mpoison = 67;
    }
    if (Mimg == "a dark elf female plate") {
        mobImgX = 200;
        mobImgY = 345;
        cX = 110;
        cY = 108;
        Maud2 = "gethit3f";
        Maud3 = "death_fl";
        Mtype = 1;
        MmaxHp *= 1.2;
    }
    if (Mimg == "a dark elf female" || Mimg == "a dark elf matron") {
        mobImgX = 200;
        mobImgY = 320;
        cY = 79;
        Maud2 = "gethit3f";
        Maud3 = "death_fl";
        MmaxHp *= .9;
        Mint *= 1.1;
        Mtype = 1;
    }
    if (Mimg == "a dark elf male plate") {
        mobImgX = 200;
        mobImgY = 313;
        Mtype = 1;
        MmaxHp *= 1.2;
    }
    if (Mimg == "a dark elf male") {
        Mwidth = 124;
        mobImgX = 124;
        mobImgY = 286;
        cX = 65;
        cY = 66;
        MmaxHp *= .9;
        Mint *= 1.1;
        Mtype = 1;
    }
    if (Mimg == "a dark skeleton") {
        mobImgX = 200;
        mobImgY = 334;
        cX = 97;
        cY = 81;
        Maud1 = "skeleton_att";
        Maud2 = "skeleton_hit";
        Maud3 = "skeleton_die";
        Mfire = 125;
        Mtype = 1;
        Mskill[3] = "fireball";
        Mskill[4] = "fireball";
        McastSpeed = 500 * g.speed;
    }
    if (Mimg == "a dhampyre") {
        mobImgX = 200;
        mobImgY = 306;
        Maud1 = "vmpematt";
        Maud2 = "vmpemhit";
        Maud3 = "vmpemdie";
        Mfire = 125;
        Mtype = 1;
        Mdrain = true;
    }
    if (Mimg == "a faerie") {
        mobImgX = 200;
        mobImgY = 310;
        cX = 103;
        cY = 70;
        Maud1 = "fairyatt";
        Maud2 = "fairyhit";
        Maud3 = "fairydie";
        Mlightning = 67;
        Mtype = 1;
    }
    if (Mimg == "a female zombie") {
        mobImgX = 200;
        mobImgY = 333;
        Maud1 = "zomf_att";
        Maud2 = "gethit3f";
        Maud3 = "zomf_die";
        MmaxHp *= .9;
        Mfire = 125;
        Mtype = 1;
    }
    if (Mimg == "a fire elemental") {
        mobImgX = 200;
        mobImgY = 241;
        cX = 122;
        cY = 73;
        Maud1 = "elem_att3";
        Maud2 = "elem_hit3";
        Maud3 = "elem_die3";
        Mfire = 67;
        Mcold = 125;
        Mskill[3] = "fireball";
        Mskill[4] = "fireball";
        McastSpeed = 500;
        Mlava = 0;
    }
    if (Mimg == "an anuran") {
        mobImgX = 220;
        mobImgY = 233;
        cX = 112;
        cY = 82;
        Maud1 = "frog_att";
        Maud2 = "frog_hit";
        Maud3 = "frog_die";
        Mtype = 1;
    }
    if (Mimg == "a fungus") {
        mobImgX = 200;
        mobImgY = 315;
        cY = 138;
        Maud1 = "fung_att";
        Maud2 = "fung_hit";
        Maud3 = "fung_die";
        Mpoison = 67;
        Mtype = 1;
        Mskill[3] = "yawn";
        Mskill[4] = "yawn";
    }
    if (Mimg === "a gargoyle") {
        mobImgX = 269;
        mobImgY = 410;
        cX = 120;
        cY = 86;
        Maud1 = "garg_att";
        Maud2 = "garg_hit";
        Maud3 = "garg_die";
        Mlightning = 67;
        Mtype = 1;
    }
    if (Mimg === "a ghoul") {
        mobImgX = 200;
        mobImgY = 235;
        cY = 58;
        Maud1 = "ghoulatt";
        Maud2 = "ghoulhit";
        Maud3 = "ghouldie";
        Mfire = 125;
        Mtype = 1;
        Mskill[2] = "root";
        Mskill[3] = "root";
        McastSpeed = 500;
    }
    if (Mimg === "a gnoll") {
        mobImgX = 200;
        mobImgY = 285;
        Maud1 = "gnollatt";
        Maud2 = "gnollhit";
        Maud3 = "gnolldie";
        Mtype = 1;
        Mwolf = 1;
    }
    if (Mimg === "a gorilla") {
        mobImgX = 200;
        mobImgY = 172;
        cX = 104;
        cY = 75;
        Maud1 = "gorilatt";
        Maud2 = "gorilhit";
        Maud3 = "gorildie";
        Mstr *= 1.05;
    }
    if (Mimg === "a heart spider") {
        mobImgX = 200;
        mobImgY = 100;
        cX = 93;
        cY = 49;
        Maud1 = "spid_att";
        Maud2 = "spid_hit";
        Maud3 = "spid_die";
        Mdrain = true;
        Mpoison = 67;
    }
    if (Mimg === "a human male") {
        mobImgX = 200;
        mobImgY = 330;
        cX = 95;
        cY = 78;
        MmaxHp *= .9;
        Mwidth = 200;
        Mtype = 1;
    }
    if (Mimg === "a human female") {
        mobImgX = 200;
        mobImgY = 330;
        cX = 101;
        cY = 74;
        Maud2 = "gethit3f";
        Maud3 = "death_fl";
        MmaxHp *= .9;
        Mtype = 1;
    }
    if (Mimg === "a jungle spider") {
        mobImgX = 200;
        mobImgY = 108;
        cX = 93;
        cY = 69;
        Maud1 = "spid_att";
        Maud2 = "spid_hit";
        Maud3 = "spid_die";
        Mdrain = true;
        Mpoison = 67;
    }
    if (Mimg === "a kobold") {
        mobImgX = 200;
        mobImgY = 200;
        cX = 92;
        cY = 82;
        Maud1 = "werewatt";
        Maud2 = "werewhit";
        Maud3 = "werewdie";
        Mtype = 1;
    }
    if (Mimg === "a lizardman") {
        mobImgX = 200;
        mobImgY = 254;
        cX = 108;
        cY = 71;
        Maud1 = "liza_att";
        Maud2 = "liza_hit";
        Maud3 = "liza_die";
        Mfire = 67;
        Mtype = 1;
    }
    if (Mimg === "a male zombie") {
        mobImgX = 100;
        mobImgY = 329;
        cX = 47;
        cY = 76;
        Maud1 = "zom_att";
        Maud3 = "zom_die";
        MmaxHp *= .9;
        Mfire = 125;
        Mtype = 1;
        Mwidth = 100;
    }
    if (Mimg === "a mummy") {
        mobImgX = 200;
        mobImgY = 330;
        cY = 81;
        Maud1 = "zom_att";
        Maud3 = "zom_die";
        MmaxHp *= .9;
        Mfire = 125;
        Mtype = 1;
    }
    if (Mimg === "a rat") {
        mobImgX = 200;
        mobImgY = 170;
        cX = 90;
        cY = 90;
        Maud1 = "rat_att";
        Maud2 = "rat_hit";
        Maud3 = "rat_die";
        MmaxHp *= .9;
        Mpoison = 67;
        Mdrain = true;
    }
    if (Mimg === "a red goblin") {
        mobImgX = 200;
        mobImgY = 270;
        cX = 88;
        cY = 74;
        Maud1 = "gob_att";
        Maud2 = "gob_hit";
        Maud3 = "gob_die";
        Mfire = 67;
        Mtype = 1;
    }
    if (Mimg === "a shadowed man") {
        mobImgX = 200;
        mobImgY = 332;
        cX = 94;
        cY = 86;
        Mmagic = 67;
        Mint * 1.1;
        Mtype = 1;
    }
    if (Mimg === "a skeleton") {
        mobImgX = 200;
        mobImgY = 334;
        cX = 95;
        cY = 85;
        Maud1 = "skeleton_att";
        Maud2 = "skeleton_hit";
        Maud3 = "skeleton_die";
        if (Mname.indexOf(" pet") === -1) {
            Mskill[3] = "fireball";
            Mskill[4] = "fireball";
        }
        Mfire = 125;
        Mtype = 1;
        McastSpeed = 500;
    }
    if (Mimg === "a steel golem") {
        mobImgX = 250;
        mobImgY = 336;
        cX = 132;
        Maud1 = "golumatt";
        Maud2 = "golumhit";
        Maud3 = "golumdie";
        MmaxHp *= 1.2;
        Mpoison = 67;
    }
    if (Mimg === "a stone golem") {
        mobImgX = 274;
        mobImgY = 365;
        cX = 108;
        cY = 99;
        Maud1 = "golumatt";
        Maud2 = "golumhit";
        Maud3 = "golumdie";
        MmaxHp *= 1.2;
        Mpoison = 67;
        Msilence = true;
    }
    if (Mimg === "a terror") {
        mobImgX = 200;
        mobImgY = 198;
        cX = 110;
        cY = 128;
        Maud1 = "tent_att";
        Maud2 = "tent_hit";
        Maud3 = "tent_die";
        Mmagic = 67;
        Mdrain = true;
    }
    if (Mimg === "a vampire female") {
        mobImgX = 200;
        mobImgY = 256;
        cX = 79;
        cY = 88;
        Maud1 = "vmpefatt";
        Maud2 = "vmpefhit";
        Maud3 = "vmpefdie";
        Mfire = 125;
        Mtype = 1;
        Mdrain = true;
    }
    if (Mimg === "a werewolf") {
        mobImgX = 260;
        mobImgY = 288;
        cX = 122;
        cY = 133;
        Maud1 = "werewatt";
        Maud2 = "werewhit";
        Maud3 = "werewdie";
        Mmagic = 67;
        Mtype = 1;
        Mdrain = true;
    }
    if (Mimg === "a white spider") {
        mobImgX = 333;
        mobImgY = 151;
        cX = 164;
        cY = 70;
        Mwidth = 333;
        Maud1 = "spid_att";
        Maud2 = "spid_hit";
        Maud3 = "spid_die";
        Mdrain = true;
        Mcold = 67;
    }
    if (Mimg === "a white wolf") {
        mobImgX = 200;
        mobImgY = 215;
        Maud1 = "wolf_att2";
        Maud2 = "wolf_hit2";
        Maud3 = "wolf_die2";
        Mcold = 67;
    }
    if (Mimg === "a wisp") {
        mobImgX = 200;
        mobImgY = 300;
        cY = 69;
        Maud1 = "wilo_att";
        Maud2 = "wilo_hit";
        Maud3 = "wilo_die";
        Mint *= 1.1;
        Mskill[2] = "static field";
        Mskill[3] = "energy bolt";
        Mlightning = 67;
    }
    if (Mimg === "a wolf") {
        Maud1 = "wolf_att2";
        Maud2 = "wolf_hit2";
        Maud3 = "wolf_die2";
        Mcold = 67;
    }
    if (Mimg === "an earth elemental") {
        mobImgX = 240;
        mobImgY = 299;
        cX = 114;
        cY = 76;
        Maud1 = "elem_att3";
        Maud2 = "elem_hit3";
        Maud3 = "elem_die3";
        Mlightning = 67;
        Mpoison = 125;
        Mskill[3] = "root";
        Mskill[4] = "root";
        McastSpeed = 500;
    }
    if (Mimg === "an evil eye round") {
        mobImgX = 200;
        mobImgY = 512;
        cX = 88;
        cY = 95;
        Maud1 = "behdatt";
        Maud2 = "behldhit";
        Maud3 = "behddie";
        Mint *= 1.1;
        Mmagic = 67;
        Msilence = true;
    }
    if (Mimg === "an ice giant") {
        mobImgX = 304;
        mobImgY = 410;
        cX = 161;
        cY = 119;
        Mwidth = 380;
        Maud1 = "giantatt";
        Maud2 = "gianthit";
        Maud3 = "giantdie";
        MmaxHp *= 1.6;
        Mcold = 67;
        Mtype = 2;
    }
    if (Mimg === "an imp") {
        mobImgX = 200;
        mobImgY = 280;
        cX = 114;
        cY = 49;
        Maud1 = "imp_att";
        Maud2 = "imp_hit";
        Maud3 = "imp_die";
        Mfire = 67;
        Mtype = 1;
        Mskill[3] = "fireball";
        Mskill[4] = "fireball";
        McastSpeed = 500;
    }
    if (Mimg === "an orc") {
        mobImgX = 200;
        mobImgY = 266;
        cX = 111;
        cY = 90;
        Maud1 = "orc_att";
        Maud2 = "orc_hit";
        Maud3 = "orc_die";
        Mcold = 67;
        Mtype = 1;
        Mwolf = 1;
    }
    if (Mimg === "grimden") {
        Maud1 = "orc_att";
        Maud2 = "orc_hit";
        Maud3 = "orc_die";
        Mcold = 67;
        Mtype = 1;
        Mwolf = 1;
    }
    if (Mimg === "avatar of fear") {
        mobImgX = 200;
        mobImgY = 279;
        Maud1 = "cazt_att";
        $Maud2 = "cazt_hit";
        Maud3 = "cazt_die";
        Mtype = 1;
        McastSpeed = 500;
        Mstr *= 1.2;
        Mmagic = 67;
        MmaxHp *= 1.35;
        Msilence = true;
    }
    if (Mimg === "garanel rucksif") {
        mobImgX = 200;
        mobImgY = 244;
        cX = 105;
        cY = 110;
        Maud1 = "ghostatt";
        Maud2 = "giosthit";
        Maud3 = "ghostdie";
        Mstr *= 1.2;
        Mmagic = 67;
        Mtype = 1;
    }
    if (Mimg === "a fire giant") {
        mobImgX = 348;
        mobImgY = 426;
        cX = 185;
        cY = 148;
        Maud1 = "giantatt";
        Maud2 = "gianthit";
        Maud3 = "giantdie";
        MmaxHp *= 1.6;
        Mfire = 67;
        Mtype = 2;
        Mwidth = 348;
    }
    //boss shit
    if (Mimg === "a purple dragon") {
        mobImgX = 606;
        mobImgY = 588;
        cX = 285;
        cY = 66;
        Maud1 = "drag_att";
        Maud2 = "drag_hit";
        Maud3 = "drag_die";
        MmaxHp *= 3;
    }
    if (Mimg === "a red dragon") {
        mobImgX = 606;
        mobImgY = 588;
        cX = 285;
        cY = 66;
        Maud1 = "drag_att";
        Maud2 = "drag_hit";
        Maud3 = "drag_die";
        Mstr *= 1.6;
        MmaxHp *= 3.4;
        Mfire = 67;
        Mtype = 3;
        Mint *= 2;
        Mfreq = 4;
        Mskill[1] = "conflagration";
        Mskill[2] = "conflagration";
        Mskill[3] = "fireball";
        Mskill[4] = "fear";
        Mwidth = 570;
    }
    if (Mimg === "a blue dragon") {
        mobImgX = 493;
        mobImgY = 479;
        cX = 254;
        cY = 116;
        Maud1 = "drag_att";
        Maud2 = "dragfhit";
        Maud3 = "drag_die";
        Mstr *= 1.5;
        MmaxHp *= 3.4;
        Mcold = 67;
        Mtype = 3;
        Mwidth = 606;
        Mint *= 2;
        Mfreq = 4;
        Mskill[1] = "blizzard";
        Mskill[2] = "blizzard";
        Mskill[3] = "ice shard";
        Mskill[4] = "fear";
        MlayHands = true;
    }
    if (Mimg === "phinigel autropos") {
        mobImgX = 647;
        mobImgY = 540;
        cX = 294;
        cY = 157;
        Maud1 = "kedgeatt";
        Maud2 = "kedgehit";
        Maud3 = "kedgedie";
        Mstr *= 1.5;
        MmaxHp *= 3.2;
        Mlightning = 67;
        Mtype = 3;
        Mwidth = 606;
        Mint *= 2.2;
        Mfreq = 3;
        Mskill[1] = "engulfing darkness";
        Mskill[2] = "static field";
        Mskill[3] = "smite";
        Mskill[4] = "energy bolt";
        Mrune = 0;
        Msilence = true;
    }
    if (Mimg === "maestro") {
        mobImgX = 396;
        mobImgY = 586;
        cX = 260;
        cY = 165;
        Maud1 = "vampkatt";
        Maud2 = "vampkhit";
        Maud3 = "vampkdie";
        Mlightning = 125;
        Mtype = 3;
        Mstr *= 1.5;
        MmaxHp *= 2.7;
        Mpoison = 67;
        Mdrain = true;
    }
    if (Mimg === "dracoliche") {
        mobImgX = 629;
        mobImgY = 396;
        cX = 217;
        cY = 268;
        Maud1 = "drsk_att";
        Maud2 = "drskhit";
        Maud3 = "drsk_die";
        if (Mname === "Falzitherin") {
            MmaxHp *= 3.2;
        }
    }
    if (Mimg === "innoruuk") {
        mobImgX = 325;
        mobImgY = 476;
        cX = 165;
        cY = 176;
        Maud1 = "inn_att";
        Maud2 = "inn_hit";
        Maud3 = "inn_die";
        Mtype = 3;
        Mstr *= 1.7;
        MmaxHp *= 3;
        Mrune = 0;
        MironMaiden = true;
        Mfreq = 3;
        Mskill[1] = "static field";
        Mskill[2] = "engulfing darkness";
        Mskill[3] = "smite";
        Mskill[4] = "ice shard";
        Msilence = true;
    }
    if (Mimg === "cazic") {
        mobImgX = 602;
        mobImgY = 695;
        cX = 261;
        cY = 290;
        Maud1 = "cazt_att";
        Maud2 = "cazt_hit";
        Maud3 = "cazt_die";
        Mtype = 3;
        Mstr *= 1.6;
        MmaxHp *= 3.8;
        MharmTouch = 0;
        Mskeleton = 0;
        Msilence = true;
    }
    //NEWIMG
    if (Mimg == "a bat") {
        Mwidth = 500;
        mobImgX = 600;
        mobImgY = 500;
        cX = 298;
        cY = 151;
        Maud1 = "bat_att2";
        Maud2 = "bat_hit2";
        Maud3 = "bat_die2";
    }
    if (Mimg == "a beetle") {
        mobImgX = 600;
        mobImgY = 230;
        cX = 300;
        cY = 177;
        Maud1 = "beetle_att";
        Maud2 = "beetle_hit";
        Maud3 = "beetle_die";
    }
    if (Mimg == "a blue goblin") {
        Mwidth = 220;
        mobImgX = 377;
        mobImgY = 400;
        cX = 183;
        cY = 149;
        Maud1 = "goblin_att";
        Maud2 = "goblin_hit";
        Maud3 = "goblin_die";
    }
    if (Mimg == "a brown spider") {
        mobImgX = 500;
        mobImgY = 251;
        cX = 249;
        cY = 181;
        Maud1 = "spider_att";
        Maud2 = "spider_hit";
        Maud3 = "spider_die";
    }
    if (Mimg == "a clay golem") {
        if (Mname === "Guardian of Misery") {
            Mwidth = 455;
        } else {
            Mwidth = 350;
        }
        mobImgX = 455;
        mobImgY = 600;
        cX = 228;
        cY = 158;
        Maud1 = "zombie_att";
        Maud2 = "zombie_hit";
        Maud3 = "zombie_die";
    }
    if (Mimg == "a dark elf female plate") {
        Mwidth = 210;
        mobImgX = 223;
        mobImgY = 400;
        cX = 108;
        cY = 119;
        Maud2 = "gethit3f";
        Maud3 = "death_fl";
    }
    if (Mimg == "a dark elf female") {
        Mwidth = 190;
        mobImgX = 207;
        mobImgY = 400;
        cX = 106;
        cY = 94;
        Maud2 = "gethit3f";
        Maud3 = "death_fl";
    }
    if (Mimg == "braxxen") {
        Mwidth = 320;
        mobImgX = 470;
        mobImgY = 600;
        cX = 228;
        cY = 173;
        Maud2 = "gethit3f";
        Maud3 = "death_fl";
    }
    if (Mimg == "a dark elf matron") {
        Mwidth = 280;
        mobImgX = 287;
        mobImgY = 400;
        cX = 136;
        cY = 120;
        Maud2 = "gethit3f";
        Maud3 = "death_fl";
    }
    if (Mimg == "a dark elf male plate") {
        Mwidth = 225;
        mobImgX = 240;
        mobImgY = 400;
        cX = 137;
        cY = 111;
    }
    if (Mimg == "a dark elf male") {
        Mwidth = 190;
        mobImgX = 203;
        mobImgY = 400;
        cX = 99;
        cY = 104;
    }
    if (Mimg == "a dark skeleton") {
        Mwidth = 175;
        mobImgX = 240;
        mobImgY = 503;
        cX = 123;
        cY = 114;
        Maud1 = "skeleton_att";
        Maud2 = "skeleton_hit";
        Maud3 = "skeleton_die";
    }
    if (Mimg == "a dhampyre") {
        Mwidth = 220;
        mobImgX = 227;
        mobImgY = 400;
        cX = 117;
        cY = 108;
        Maud1 = "dhampyre_att";
        Maud2 = "dhampyre_hit";
        Maud3 = "dhampyre_die";
    }
    if (Mimg == "a faerie") {
        Mwidth = 130;
        mobImgX = 205;
        mobImgY = 500;
        cX = 101;
        cY = 124;
        Maud1 = "fairy_att";
        Maud2 = "fairy_hit";
        Maud3 = "fairy_die";
    }
    if (Mimg == "a female zombie") {
        Mwidth = 160;
        mobImgX = 176;
        mobImgY = 400;
        cX = 82;
        cY = 99;
        Maud1 = "zombief_att";
        Maud2 = "zombief_hit";
        Maud3 = "zombief_die";
    }
    if (Mimg == "a fire elemental") {
        Mwidth = 300;
        mobImgX = 358;
        mobImgY = 400;
        cX = 176;
        cY = 140;
        Maud1 = "elem_att3";
        Maud2 = "elem_hit3";
        Maud3 = "elem_die3";
    }
    if (Mimg == "an anuran") {
        Mwidth = 290;
        mobImgX = 370;
        mobImgY = 282;
        cX = 186;
        cY = 127;
        Maud1 = "anuran_att";
        Maud2 = "anuran_hit";
        Maud3 = "anuran_die";
    }
    if (Mimg == "a fungus") {
        Mwidth = 320;
        mobImgX = 386;
        mobImgY = 400;
        cX = 192;
        cY = 175;
        Maud1 = "fungus_att";
        Maud2 = "fungus_hit";
        Maud3 = "fungus_die";
    }
    if (Mimg == "a gargoyle") {
        Mwidth = 430;
        mobImgX = 479;
        mobImgY = 550;
        cX = 236;
        cY = 116;
        Maud1 = "garg_att2";
        Maud2 = "garg_hit2";
        Maud3 = "garg_die2";
    }
    if (Mimg == "a ghoul") {
        mobImgX = 442;
        mobImgY = 400;
        cX = 244;
        cY = 91;
        Maud1 = "ghoul_att";
        Maud2 = "ghoul_hit";
        Maud3 = "ghoul_die";
    }
    if (Mimg === "a gnoll") {
        mobImgX = 400;
        mobImgY = 473;
        cX = 205;
        cY = 203;
        Maud1 = "gnoll_att";
        Maud2 = "gnoll_hit2";
        Maud3 = "gnoll_die";
    }
    if (Mimg == "a gorilla") {
        mobImgX = 585;
        mobImgY = 600;
        cX = 293;
        cY = 282;
        Maud1 = "gorilla_att";
        Maud2 = "gorilla_hit";
        Maud3 = "gorilla_die";
    }
    if (Mimg == "a heart spider") {
        mobImgX = 500;
        mobImgY = 266;
        cX = 247;
        cY = 171;
        Maud1 = "spider_att";
        Maud2 = "spider_hit";
        Maud3 = "spider_die";
    }
    if (Mimg == "a human male") {
        Mwidth = 170;
        mobImgX = 224;
        mobImgY = 500;
        cX = 110;
        cY = 121;
    }
    if (Mimg == "a human female") {
        Mwidth = 165;
        mobImgX = 223;
        mobImgY = 500;
        cX = 112;
        cY = 115;
        Maud2 = "gethit3f";
        Maud3 = "death_fl";
    }
    if (Mimg == "a jungle spider") {
        Mwidth = 500;
        mobImgX = 500;
        mobImgY = 158;
        cX = 251;
        cY = 94;
        Maud1 = "spider_att";
        Maud2 = "spider_hit";
        Maud3 = "spider_die";
    }
    if (Mimg == "a kobold") {
        mobImgX = 460;
        mobImgY = 420;
        cX = 220;
        cY = 153;
        Maud1 = "kobold_att";
        Maud2 = "kobold_hit";
        Maud3 = "kobold_die";
    }
    if (Mimg === "a lizardman") {
        Mwidth = 400;
        mobImgX = 501;
        mobImgY = 400;
        cX = 253;
        cY = 134;
        Maud1 = "liz_att2";
        Maud2 = "liz_hit2";
        Maud3 = "liz_die2";
        Maud5 = "liz_cast";
    }
    if (Mimg == "a male zombie") {
        Mwidth = 190;
        mobImgX = 210;
        mobImgY = 400;
        cX = 101;
        cY = 91;
        Maud1 = "zombie_att";
        Maud2 = "zombie_hit";
        Maud3 = "zombie_die";
    }
    if (Mimg == "a mummy") {
        Mwidth = 250;
        mobImgX = 324;
        mobImgY = 500;
        cX = 159;
        cY = 157;
        Maud1 = "werewolf_att";
        Maud2 = "werewolf_hit";
        Maud3 = "werewolf_die";
    }
    if (Mimg == "a rat") {
        if (Mname === 'Flippy the Rat God') {
            Mwidth = 665;
            MmaxHp *= 1.75;
        } else {
            Mwidth = 350;
        }
        mobImgX = 465;
        mobImgY = 200;
        cX = 233;
        cY = 127;
        Maud1 = "rat_att2";
        Maud2 = "rat_hit2";
        Maud3 = "rat_die2";
    }
    if (Mimg == "a red goblin") {
        Mwidth = 220;
        mobImgX = 377;
        mobImgY = 400;
        cX = 183;
        cY = 149;
        Maud1 = "goblin_att";
        Maud2 = "goblin_hit";
        Maud3 = "goblin_die";
    }
    if (Mimg == "a shadowed man") {
        Mwidth = 182;
        mobImgX = 182;
        mobImgY = 400;
        cX = 87;
        cY = 89;
    }
    if (Mimg == "a skeleton") {
        Mwidth = 180;
        mobImgX = 240;
        mobImgY = 503;
        cX = 123;
        cY = 114;
        Maud1 = "skeleton_att";
        Maud2 = "skeleton_hit";
        Maud3 = "skeleton_die";
    }
    if (Mimg == "a steel golem") {
        if (Mname === "Guardian of Ruin") {
            Mwidth = 641;
        } else {
            Mwidth = 500;
        }
        mobImgX = 641;
        mobImgY = 600;
        cX = 317;
        cY = 243;
        Maud1 = "zombie_att";
        Maud2 = "zombie_hit";
        Maud3 = "zombie_die";
    }
    if (Mimg == "a stone golem") {
        if (Mname === "Guardian of Strife") {
            Mwidth = 643;
        } else {
            Mwidth = 500;
        }
        mobImgX = 643;
        mobImgY = 600;
        cX = 322;
        cY = 156;
        Maud1 = "zombie_att";
        Maud2 = "zombie_hit";
        Maud3 = "zombie_die";
    }
    if (Mimg == "a terror") {
        Mwidth = 480;
        mobImgX = 582;
        mobImgY = 400;
        cX = 288;
        cY = 200;
        Maud1 = "terror_att";
        Maud2 = "terror_hit";
        Maud3 = "terror_die";
    }
    if (Mimg == "a vampire female") {
        Mwidth = 193;
        mobImgX = 193;
        mobImgY = 400;
        cX = 97;
        cY = 100;
        Maud1 = "vampire_att";
        Maud2 = "vampire_hit";
        Maud3 = "vampire_die";
    }
    if (Mimg == "a werewolf") {
        Mwidth = 250;
        mobImgX = 300;
        mobImgY = 500;
        cX = 157;
        cY = 177;
        Maud1 = "werewolf_att";
        Maud2 = "werewolf_hit";
        Maud3 = "werewolf_die";
    }
    if (Mimg == "a white spider") {
        Mwidth = 500;
        mobImgX = 500;
        mobImgY = 209;
        cX = 249;
        cY = 118;
        Maud1 = "spider_att";
        Maud2 = "spider_hit";
        Maud3 = "spider_die";
    }
    if (Mimg == "a white wolf") {
        mobImgX = 538;
        mobImgY = 400;
        cX = 285;
        cY = 153;
        Maud1 = "wolf_att2";
        Maud2 = "wolf_hit2";
        Maud3 = "wolf_die2";
    }
    if (Mimg == "a wisp") {
        Mwidth = 250;
        mobImgX = 331;
        mobImgY = 500;
        cX = 158;
        cY = 128;
        Maud1 = "wisp_att";
        Maud2 = "wisp_hit";
        Maud3 = "wisp_die";
    }
    if (Mimg == "a wolf") {
        mobImgX = 538;
        mobImgY = 400;
        cX = 387;
        cY = 114;
        Maud1 = "wolf_att2";
        Maud2 = "wolf_hit2";
        Maud3 = "wolf_die2";
    }
    if (Mimg == "an earth elemental") {
        Mwidth = 300;
        mobImgX = 346;
        mobImgY = 400;
        cX = 171;
        cY = 98;
        Maud1 = "earth_att";
        Maud2 = "earth_hit";
        Maud3 = "earth_die";
    }
    if (Mimg == "an evil eye round") {
        Mwidth = 240;
        mobImgX = 321;
        mobImgY = 400;
        cX = 162;
        cY = 80;
        Maud1 = "wisp_att";
        Maud2 = "wisp_hit";
        Maud3 = "wisp_die";
    }
    if (Mimg == "an ice giant") {
        Mwidth = 528;
        mobImgX = 528;
        mobImgY = 600;
        cX = 269;
        cY = 160;
        Maud1 = "giant_att";
        Maud2 = "giant_hit";
        Maud3 = "giant_die";
    }
    if (Mimg === "an imp") {
        Mwidth = 320;
        mobImgX = 385;
        mobImgY = 500;
        cX = 189;
        cY = 99;
        Maud1 = "imp_att2";
        Maud2 = "imp_hit2";
        Maud3 = "imp_die2";
    }
    if (Mimg === "an orc") {
        Mwidth += 60;
        mobImgX = 382;
        mobImgY = 400;
        cX = 189;
        cY = 112;
        Maud1 = "orc_att2";
        Maud2 = "orc_hit2";
        Maud3 = "orc_die2";
    }
    if (Mimg === "grimden") {
        Mwidth = 739;
        mobImgX = 739;
        mobImgY = 500;
        cX = 367;
        cY = 138;
        Maud1 = "orc_att2";
        Maud2 = "orc_hit2";
        Maud3 = "orc_die2";
    }
    if (Mimg === "avatar of fear") {
        Mwidth = 600;
        mobImgX = 633;
        mobImgY = 600;
        cX = 329;
        cY = 170;
        Maud1 = "avatar_att";
        Maud2 = "avatar_hit";
        Maud3 = "avatar_die";
    }
    if (Mimg === "garanel rucksif") {
        Mwidth = 500;
        mobImgX = 597;
        mobImgY = 600;
        cX = 303;
        cY = 175;
        Maud1 = "garanel_att";
        Maud2 = "garanel_hit";
        Maud3 = "garanel_die";
    }
    if (Mimg === "a fire giant") {
        Mwidth = 674;
        mobImgX = 674;
        mobImgY = 600;
        cX = 339;
        cY = 155;
        Maud1 = "giant_att";
        Maud2 = "giant_hit";
        Maud3 = "giant_die";
    }
    //boss shit
    if (Mimg === "a purple dragon" ||
        Mimg === "a red dragon" ||
        Mimg === "a blue dragon") {
        if (Mimg === "a purple dragon") {
            Mwidth = 940;
        } else {
            Mwidth = 1431;
        }
        mobImgX = 1431;
        mobImgY = 550;
        cX = 713;
        cY = 132;
        Maud1 = "dragon_att";
        Maud2 = "dragon_hit";
        Maud3 = "dragon_die";
        Maud5 = "dragon_cast";
    }
    if (Mimg === "phinigel autropos") {
        Mwidth = 720;
        mobImgX = 720;
        mobImgY = 500;
        cX = 358;
        cY = 155;
        Maud1 = "viston_att";
        Maud2 = "viston_hit";
        Maud3 = "viston_die";
    }
    if (Mimg === "maestro") {
        Mwidth = 557;
        mobImgX = 650;
        mobImgY = 700;
        cX = 310;
        cY = 257;
        Maud1 = "vixen_att";
        Maud2 = "vixen_hit";
        Maud3 = "vixen_die";
    }
    if (Mimg === "dracoliche") {
        Mwidth = 1431;
        mobImgX = 1431;
        mobImgY = 550;
        cX = 713;
        cY = 132;
        Maud1 = "dragon_att";
        Maud2 = "dragon_hit";
        Maud3 = "dragon_die";
        Maud5 = "dragon_cast";
    }
    if (Mimg === "innoruuk") {
        Mwidth = 1100;
        mobImgX = 1100;
        mobImgY = 600;
        cX = 550;
        cY = 180;
        Maud1 = "innoruuk_att";
        Maud2 = "innoruuk_hit";
        Maud3 = "innoruuk_die";
    }
    if (Mimg === "cazic") {
        Mwidth = 1100;
        mobImgX = 1186;
        mobImgY = 700;
        cX = 589;
        cY = 235;
        Maud1 = "cazic_att";
        Maud2 = "cazic_hit";
        Maud3 = "cazic_die";
    }

    //boss buffs
    if (Mrare === 3) {
        if (g.difficulty === 1) {
            Mxp = Mxp * 3.2;
        } else if (g.difficulty === 2) {
            Mxp = Mxp * 3.4;
        } else {
            Mxp = Mxp * 3.6;
        }
        McastSpeed = 500;
        if (Mname === "Chief Grimden") {
            Mcold = 100;
            Mskill[1] = "envenom";
            Mskill[2] = "envenom";
            Mskill[3] = "poison cloud";
            Mtype = 3;
            Mstr *= 1.3;
            MmaxHp *= 2.6;
            Mfreq = 5;
        }
        if (Mname === "Arcturin, the Lich King") {
            Mskill[1] = "ice shard";
            Mskill[2] = "blizzard";
            Mskill[3] = "blizzard";
            Mskill[4] = "blizzard";
            Mtype = 3;
            Mstr *= 1.3;
            MmaxHp *= 2.6;
            Msilence = true;
            Mrune = 0;
            Mfreq = 5;
        }
        if (Mname === "Sentoth, Lord of Rapture") {
            Mskill[1] = "energy bolt";
            Mskill[2] = "static field";
            Mskill[3] = "static field";
            Mskill[4] = "static field";
            Mtype = 3;
            Mstr *= 1.3;
            MmaxHp *= 2.6;
            Mdrain = true;
            Mfreq = 5;
        }
        mobDauntless = true;
        if (g.difficulty >= 2) {
            if (Mname === "Chief Grimden") {
                mobPoisonEnchanted = true;
                Mpoison = 67;
                Mbarrier = true;
            }
            if (Mname === "Arcturin, the Lich King") {
                mobColdEnchanted = true;
                Msanctuary = true;
                Mpcold = 67;
            }
            if (Mname === "Sentoth, Lord of Rapture") {
                mobLightningEnchanted = true;
                MironMaiden = true;
                Mlightning = 67;
            }
            if (Mname === "Highlord Szarthax") {
                mobFireEnchanted = true;
                Mfire = 67;
            }
            if (Mname === "Matron Maelentia") {
                mobColdEnchanted = true;
                Mcold = 67;
            }
            if (Mname === "Revenant Viston") {
                mobLightningEnchanted = true;
                Mlightning = 67;
            }
            if (Mname === "Falzitherin") {
                mobPoisonEnchanted = true;
                Mpoison = 67;
            }
            if (Mname === "Vixen Sarmina") {
                mobVampiric = true;
            }
            if (Mname === "Nalatos, God of Chaos") {
                mobSummoner = true;
            }
            if (Mname === "Sanctum Guardian Ghalentus") {
                mobConvictionAura = true;
            }
        }
        if (g.difficulty === 3) {
            if (Mname === "Chief Grimden") {
                mobShreddingAura = true;
            }
            if (Mname === "Arcturin, the Lich King") {
                mobLamprey = true;
            }
            if (Mname === "Sentoth, Lord of Rapture") {
                mobCripplingAura = true;
            }
            if (Mname === "Highlord Szarthax") {
                mobShreddingAura = true;
            }
            if (Mname === "Matron Maelentia") {
                mobLamprey = true;
            }
            if (Mname === "Revenant Viston") {
                mobConcussiveAura = true;
            }
            if (Mname === "Falzitherin") {
                mobDisruptionAura = true;
            }
            if (Mname === "Vixen Sarmina") {
                mobFrenzy = true;
                Mflurry = true;
            }
            if (Mname === "Nalatos, God of Chaos") {
                mobZealousAura = true;
            }
            if (Mname === "Sanctum Guardian Ghalentus") {
                mobCripplingAura = true;
            }
        }
    }
    if (cityStatus === true) {
        MmaxHp *= 5;
        Mxp = 0;
    }
    //mob limits
    if (g.difficulty === 1) {
        if (monsterSpeed < 2500 * g.speed) {
            monsterSpeed = 2500 * g.speed;
        }
        if (McastSpeed < 2000) {
            McastSpeed = 2000;
        }
    } else if (g.difficulty === 2) {
        if (monsterSpeed < 2000 * g.speed) {
            monsterSpeed = 2000 * g.speed;
        }
        if (McastSpeed < 1750) {
            McastSpeed = 1750;
        }
    } else {
        if (monsterSpeed < 1500 * g.speed) {
            monsterSpeed = 1500 * g.speed;
        }
        if (McastSpeed < 1500) {
            McastSpeed = 1500;
        }
    }
    //some mobs have instant cast no matter what
    if (Mname === "Chief Grimden") {
        McastSpeed = 0;
    }
    //gold assignment
    if (Mtype === 0) {
        Mgold = 0;
    } else if (Mtype === 1) {
        Mgold += M.random() * (Mlvl * .75);
    } else if (Mtype === 2) {
        Mgold += M.random() * (Mlvl * 1.5);
    } else {
        Mgold += M.random() * (Mlvl * 4.5) + Mlvl;
    }
    if (Mrare === 0) { // rare?
        Mwidth *= 1.05;
        if (g.difficulty === 1) {
            MmaxHp = MmaxHp * 2;
            Mxp = Mxp * 1.2;
        } else if (g.difficulty === 2) {
            MmaxHp = ~~(MmaxHp * 2.5);
            Mxp = Mxp * 1.4;
        } else {
            MmaxHp = MmaxHp * 3;
            Mxp = Mxp * 1.6;
        }
        Mxp = Mxp * 1.75;
    } else {
        if (g.difficulty === 1) { // champion ?
            var zoo = 1 / 9;
        } else if (g.difficulty === 2) {
            var zoo = 1 / 5.3;
        } else {
            var zoo = 1 / 3.2;
        }
        // don't allow champs if any rares are alive - this helps even out the balance in quest fights particularly
        if (g.difficulty === 1) {
            if (mob[2].rare === 0) {
                zoo = 0;
            }
        }
        // don't allow champs if out of combat
        if (mobsFound() === false) {
            zoo = 0;
        }
        if (Mlvl > 20 && M.random() < zoo && Mrare !== 3 && cityStatus === false) {
            Mrare = 2;
            if (g.difficulty === 1) {
                MmaxHp *= 2.2;
                Mxp = Mxp * 2.2;
            } else if (g.difficulty === 2) {
                MmaxHp *= 2.6;
                Mxp = Mxp * 2.4;
            } else {
                MmaxHp *= 3.2;
                Mxp = Mxp * 2.6;
            }
            Mstr = (Mstr * 1.1);
            Mint = (Mint * 1.1);
            Mgold = (Mgold * 2) + Mlvl;
            if (g.difficulty >= 1) {
                getTrait();
            }
            if (g.difficulty >= 2) {
                getTrait();
            }
            if (g.difficulty === 3) {
                getTrait();
            }
        }
    }

    function getTrait() {
        var foo = ~~(M.random() * (23)) + 1;
        if (foo == 1 && !mobFireEnchanted) {
            mobFireEnchanted = true;
            Mfire = 67;
            Mskill[1] = "fireball";
            Mskill[2] = "fireball";
            Mskill[3] = "fireball";
            Mskill[4] = "conflagration";
            Mfreq = 4;
        } else if (foo == 2 && !mobColdEnchanted) {
            mobColdEnchanted = true;
            Mcold = 67;
            Mskill[1] = "ice shard";
            Mskill[2] = "ice shard";
            Mskill[3] = "ice shard";
            Mskill[4] = "blizzard";
            Mfreq = 4;
        } else if (foo == 3 && !mobLightningEnchanted) {
            mobLightningEnchanted = true;
            Mlightning = 67;
            Mskill[1] = "energy bolt";
            Mskill[2] = "energy bolt";
            Mskill[3] = "energy bolt";
            Mskill[4] = "static field";
            Mfreq = 4;
        } else if (foo == 4 && !mobPoisonEnchanted) {
            mobPoisonEnchanted = true;
            Mpoison = 67;
            Mskill[1] = "poison cloud";
            Mskill[2] = "poison cloud";
            Mskill[3] = "poison cloud";
            Mskill[4] = "envenom";
            Mfreq = 4;
        } else if (foo == 5 && !mobSummoner) {
            mobSummoner = true;
            Melemental = 0;
            Mlava = 0;
            getRandomDD1();
            getRandomDD2();
            getRandomDD3();
            getRandomDot();
            Mfreq = 4;
        } else if (foo == 6 && !mobVicious) {
            mobVicious = true;
            MironMaiden = true;
            Mstr = (Mstr * 1.2);
            Mint = (Mint * 1.2);
            Mskill[2] = "backstab";
            Mskill[3] = "shadow kick";
        } else if (foo == 7 && !mobFrenzy) {
            mobFrenzy = true;
            Mflurry = true;
            monsterSpeed -= 700;
            Mskill[2] = "shadow kick";
            Mskill[3] = "shadow kick";
        } else if (foo == 8 && !mobJuggernaut) {
            mobJuggernaut = true;
            Mwidth = (Mwidth * 1.2);
            MmaxHp *= 1.5;
            Menrage = true;
        } else if (foo == 9 && !mobTough) {
            mobTough = true;
            Mbarrier = true;
            Mdef = 66;
            Mskill[2] = "weaken";
            Mskill[3] = "weaken";
        } else if (foo == 10 && !mobChromatic) {
            mobChromatic = true;
            Msanctuary = true;
        } else if (foo == 11 && !mobSprinter) {
            getTrait(); // temp removed
        } else if (foo == 12 && !mobVampiric) {
            mobVampiric = true;
            Mdrain = true;
            Mskill[2] = "yawn";
            Mskill[3] = "heal";
        } else if (foo == 13 && !mobLamprey) {
            mobLamprey = true;
            Msilence = true;
            Mskill[2] = "mind drain";
            Mskill[3] = "mind drain";
        } else if (foo == 14 && !mobMartyr) {
            mobMartyr = true;
            Mskill[2] = "heal";
            Mskill[3] = "shadow kick";
        } else if (foo == 15 && !mobPhased) {
            mobPhased = true;
            Msilence = true;
            Mrune = 0;
            Mlava = 0;
        } else if (foo == 16 && !mobDauntless) {
            mobDauntless = true;
            Mresolution = 0;
            Mskill[3] = "fear";
            Mskill[2] = "heal";
        } else if (foo == 17 && !mobCripplingAura) {
            mobCripplingAura = true;
            Mskill[2] = "shadow kick";
            Mskill[3] = "weaken";
        } else if (foo == 18 && !mobDisruptionAura) {
            mobDisruptionAura = true;
            Msilence = true;
            Mskill[2] = "confuse";
            Mskill[3] = "mind numb";
        } else if (foo == 19 && !mobConvictionAura) {
            mobConvictionAura = true;
            Msilence = true;
            getRandomDD1();
            getRandomDD2();
            getRandomDD3();
            getRandomDot();
            Mfreq = 4;
            Mamp = true;
        } else if (foo == 20 && !mobConcussiveAura) {
            mobConcussiveAura = true;
            Mskill[2] = "confuse";
            Mskill[3] = "blind";
        } else if (foo == 21 && !mobEnsnaringAura) {
            mobEnsnaringAura = true;
            Mthorns = 0;
            Mskill[2] = "root";
            Mskill[3] = "root";
        } else if (foo == 22 && !mobZealousAura) {
            mobZealousAura = true;
            Mskill[2] = "blind";
            Mskill[3] = "heal";
        } else if (foo == 23 && !mobShreddingAura) {
            mobShreddingAura = true;
            Mskill[2] = "backstab";
            Mskill[3] = "shadow kick";
        } else {
            getTrait();
        }
    }

    function getRandomDD1() {
        var foo = ~~(M.random() * (5)) + 1;
        if (foo == 1) {
            Mskill[1] = "poison cloud";
        }
        if (foo == 2) {
            Mskill[1] = "smite";
        }
        if (foo == 3) {
            Mskill[1] = "energy bolt";
        }
        if (foo == 4) {
            Mskill[1] = "ice shard";
        }
        if (foo == 5) {
            Mskill[1] = "fireball";
        }
    }

    function getRandomDD2() {
        var foo = ~~(M.random() * (5)) + 1;
        if (foo == 1) {
            Mskill[2] = "poison cloud";
        }
        if (foo == 2) {
            Mskill[2] = "smite";
        }
        if (foo == 3) {
            Mskill[2] = "energy bolt";
        }
        if (foo == 4) {
            Mskill[2] = "ice shard";
        }
        if (foo == 5) {
            Mskill[2] = "fireball";
        }
    }

    function getRandomDD3() {
        var foo = ~~(M.random() * (5)) + 1;
        if (foo == 1) {
            Mskill[3] = "poison cloud";
        }
        if (foo == 2) {
            Mskill[3] = "smite";
        }
        if (foo == 3) {
            Mskill[3] = "energy bolt";
        }
        if (foo == 4) {
            Mskill[3] = "ice shard";
        }
        if (foo == 5) {
            Mskill[3] = "fireball";
        }
    }

    function getRandomDot() {
        var foo = ~~(M.random() * (5)) + 1;
        if (foo == 1) {
            Mskill[4] = "envenom";
        }
        if (foo == 2) {
            Mskill[4] = "engulfing darkness";
        }
        if (foo == 3) {
            Mskill[4] = "static field";
        }
        if (foo == 4) {
            Mskill[4] = "blizzard";
        }
        if (foo == 5) {
            Mskill[4] = "conflagration";
        }
    }
    checkTestData();
    monsterFound = true;
    if (Mlvl < 20) {
        if (Mfreq < 9) {
            Mfreq = 9;
        }
    }
    if (g.difficulty === 1) {
        if (mobChromatic === true) {
            if (Mpoison > 67) {
                Mpoison = 80;
            }
            if (Mmagic > 67) {
                Mmagic = 80;
            }
            if (Mlightning > 67) {
                Mlightning = 80;
            }
            if (Mfire > 67) {
                Mfire = 80;
            }
            if (Mcold > 67) {
                Mcold = 80;
            }
        }
        if (Mrare === 3) {
            MmaxHp = ~~(MmaxHp * 1.5);
        }
    } else if (g.difficulty === 2) {
        if (Mdef === 67) {
            Mdef = 58;
        }
        if (Mpoison === 67) {
            Mpoison = 50;
        }
        if (Mmagic === 67) {
            Mmagic = 50;
        }
        if (Mlightning === 67) {
            Mlightning = 50;
        }
        if (Mcold === 67) {
            Mcold = 50;
        }
        if (Mfire === 67) {
            Mfire = 50;
        }
        if (mobChromatic === true) {
            if (Mpoison > 50) {
                Mpoison = 67;
            }
            if (Mmagic > 50) {
                Mmagic = 67;
            }
            if (Mlightning > 50) {
                Mlightning = 67;
            }
            if (Mfire > 50) {
                Mfire = 67;
            }
            if (Mcold > 50) {
                Mcold = 67;
            }
        }
        if (Mrare === 3) {
            MmaxHp = ~~(MmaxHp * 2);
        }
    } else if (g.difficulty === 3) {
        if (Mdef === 67) {
            Mdef = 50;
        }
        if (Mpoison === 67) {
            Mpoison = 33;
        }
        if (Mmagic === 67) {
            Mmagic = 33;
        }
        if (Mlightning === 67) {
            Mlightning = 33;
        }
        if (Mcold === 67) {
            Mcold = 33;
        }
        if (Mfire === 67) {
            Mfire = 33;
        }
        if (mobChromatic === true) {
            if (Mpoison > 33) {
                Mpoison = 50;
            }
            if (Mmagic > 33) {
                Mmagic = 50;
            }
            if (Mlightning > 33) {
                Mlightning = 50;
            }
            if (Mfire > 33) {
                Mfire = 50;
            }
            if (Mcold > 33) {
                Mcold = 50;
            }
        }
        if (Mrare === 3) {
            MmaxHp = ~~(MmaxHp * 3);
        }
    }
    if (Mlvl < 10) {
        Mdef = 100;
        Mpoison = 100;
        Mmagic = 100;
        Mlightning = 100;
        Mcold = 100;
        Mfire = 100;
    }
    // final adjust for new skill adjustment
    if (g.difficulty === 2) {
        MmaxHp *= 1.25; // 131328 vs 210124
    } else if (g.difficulty === 3) {
        MmaxHp *= 1.8; // 321651 vs 723714
    }
    Mhp = MmaxHp;
    loadSlotData();
    if (Mrare === 3) {
        triggerAmbush(true);
        if (Mname === "Chief Grimden") {
            playMusic("The Dark Amulet (New)");
        } else if (Mname === "Arcturin, the Lich King") {
            playMusic("Heroic Demise (2013 - With Choir)");
        } else if (Mname === "Sentoth, Lord of Rapture") {
            playMusic("Dark Descent (Adventure Edit) from _Fatblade_");
        } else if (Mname === "Revenant Viston") {
            playMusic("Blackmoor Colossus");
        } else if (Mname === "Matron Maelentia") { // lady vox
            playMusic("Heroic Demise (2013 - With Choir)");
        } else if (Mname === "Highlord Szarthax") { // lord nagafen
            playMusic("Arclight");
        } else if (Mname === "Vixen Sarmina") { // maestro
            playMusic("The Dark Amulet (New)");
        } else if (Mname === "Falzitherin") { // dracoliche
            playMusic("Dark Descent (Adventure Edit) from _Fatblade_");
        } else if (Mname === "Sanctum Guardian Ghalentus") { // innoruuk
            playMusic("Blackmoor Colossus");
        } else if (Mname === "Nalatos, God of Chaos") { // cazic
            playMusic("Arclight");
        }
    }
    initChampTraits();
}

function getNewSlotNumber() {
    var count = countMobs();
    if (count >= 5) {
        newSlotNumber = false;
    } else if (count === 0) {
        newSlotNumber = 2;
    } else {
        function doit() {
            var x = ~~(M.random() * (5));
            if (!mob[x].name) {
                newSlotNumber = x;
            } else {
                doit();
            }
        }
        doit();
    }
}

function DADJ(Mlvl) {
    if (g.difficulty === 2) {
        if (Mlvl < 75) {
            var adj = ~~((75 - Mlvl) / 2);
            Mlvl += adj;
        }
    } else if (g.difficulty === 3) {
        if (Mlvl < 94) {
            var adj = ~~((94 - Mlvl) / 2);
            Mlvl += adj;
        }
    }
    return Mlvl;
}

function loadSlotData(Slot, summoned) {
    getNewSlotNumber();
    if (newSlotNumber === false) {
        return;
    }
    attackStatus = 0;
    var x = newSlotNumber;
    var aggro = false;
    for (var i = 0; i <= 4; i++) {
        if (mob[i].attackStatus === 0) {
            aggro = true;
        }
    }
    if (aggro === true) {
        if (cityStatus === false) {
            mob[x].attackStatus = 0;
            mob[x].attack.kill();
            mob[x].attack = T.delayedCall(.75, function() {
                mobDamage(x);
            });
        }
    } else { // target, no aggro
        TGT = x;
        mob[x].attackStatus = 1;
        MOBNAME[x].style.color = '#ffff00';
        D.getElementById('mobShadow' + x).src = "//i.imgur.com/fnHtalN.png";
    }
    // monster slot data will get loaded here
    MOB[x].style.display = 'block';
    mob[x].name = Mname;
    mob[x].level = Mlvl;
    mob[x].maxHp = ~~(MmaxHp);
    mob[x].hp = ~~(Mhp);
    mob[x].xp = ~~(Mxp);
    mob[x].str = ~~(Mstr);
    mob[x].def = ~~(Mdef);
    mob[x].gold = M.ceil(Mgold);
    mob[x].type = Mtype;
    mob[x].image = Mimg;
    mob[x].rare = Mrare;
    mob[x].skill1 = Mskill[1];
    mob[x].skill2 = Mskill[2];
    mob[x].skill3 = Mskill[3];
    mob[x].skill4 = Mskill[4];
    mob[x].castFreq = Mfreq;
    mob[x].poison = ~~(Mpoison);
    mob[x].magic = ~~(Mmagic);
    mob[x].lightning = ~~(Mlightning);
    mob[x].fire = ~~(Mfire);
    mob[x].cold = ~~(Mcold);
    mob[x].speed = ~~(monsterSpeed);
    mob[x].castSpeed = ~~(McastSpeed);
    mob[x].imageWidth = Mwidth;
    mob[x].intel = ~~(Mint);
    mob[x].mp = monsterMp;
    mob[x].harmTouch = MharmTouch;
    mob[x].rune = Mrune;
    mob[x].skeleton = Mskeleton;
    mob[x].wolf = Mwolf;
    mob[x].elemental = Melemental;
    mob[x].thorns = Mthorns;
    mob[x].lavaShield = Mlava;
    mob[x].silenceStatus = Msilence;
    mob[x].silenced = false;
    mob[x].resolution = Mresolution;
    mob[x].enrageStatus = Menrage;
    mob[x].ironMaidenStatus = MironMaiden;
    mob[x].layHands = MlayHands;
    mob[x].flurryStatus = Mflurry;
    mob[x].ampMagicStatus = Mamp;
    mob[x].sanctuaryStatus = Msanctuary;
    mob[x].barrierStatus = Mbarrier;
    mob[x].drainStatus = Mdrain;
    mob[x].ID = ~~(monsterID);
    mob[x].enrageTimer.kill();
    mob[x].ironMaidenTimer.kill();
    mob[x].flurryTimer.kill();
    mob[x].ampMagicTimer.kill();
    mob[x].sanctuaryTimer.kill();
    mob[x].barrierTimer.kill();
    mob[x].enrage = false;
    mob[x].ironMaiden = false;
    mob[x].barrier = false;
    mob[x].sanctuary = false;
    mob[x].ampMagic = false;
    mob[x].flurry = false;
    mob[x].imageBaseX = mobImgX;
    mob[x].imageBaseY = mobImgY;
    mob[x].cX = cX;
    mob[x].cY = cY;
    mob[x].vicious = mobVicious;
    mob[x].frenzy = mobFrenzy;
    mob[x].juggernaut = mobJuggernaut;
    mob[x].tough = mobTough;
    mob[x].chromatic = mobChromatic;
    mob[x].summoner = mobSummoner;
    mob[x].sprinter = mobSprinter;
    mob[x].vampiric = mobVampiric;
    mob[x].lamprey = mobLamprey;
    mob[x].fireEnchanted = mobFireEnchanted;
    mob[x].coldEnchanted = mobColdEnchanted;
    mob[x].lightningEnchanted = mobLightningEnchanted;
    mob[x].poisonEnchanted = mobPoisonEnchanted;
    mob[x].mobMartyr = mobMartyr;
    mob[x].phased = mobPhased;
    mob[x].dauntless = mobDauntless;
    mob[x].cripplingAura = mobCripplingAura;
    mob[x].disruptionAura = mobDisruptionAura;
    mob[x].convictionAura = mobConvictionAura;
    mob[x].concussiveAura = mobConcussiveAura;
    mob[x].ensnaringAura = mobEnsnaringAura;
    mob[x].zealousAura = mobZealousAura;
    mob[x].shreddingAura = mobShreddingAura;
    mob[x].audio1 = Maud1;
    mob[x].audio2 = Maud2;
    mob[x].audio3 = Maud3;
    mob[x].audio4 = Maud4;
    mob[x].audio5 = Maud5;
    mob[x].audio6 = Maud6;
    Mskeleton = 1;
    Melemental = 1;
    Mwolf = 1;
    // slots 210 - 240 for audio1-6 for five slots
    for (var i = 1; i <= 6; i++) {
        loadAudio(mob[x]['audio' + i]);
    }
    // load mob skill images
    for (var i = 1; i <= 4; i++) {
        if (Mskill[i] === "poison cloud") {
            asset[240 + i + (x * 4)] = new Image();
            asset[240 + i + (x * 4)].src = "/images1/greenparticle200.png";
        } else if (Mskill[i] === "smite") {
            asset[240 + i + (x * 4)] = new Image();
            asset[240 + i + (x * 4)].src = "/images1/magentaparticle200.png";
        } else if (Mskill[i] === "energy bolt") {
            asset[240 + i + (x * 4)] = new Image();
            asset[240 + i + (x * 4)].src = "/images1/yellowparticle200.png";
        } else if (Mskill[i] === "ice shard") {
            asset[240 + i + (x * 4)] = new Image();
            asset[240 + i + (x * 4)].src = "/images1/glacialSpike.png";
        } else if (Mskill[i] === "fireball") {
            asset[240 + i + (x * 4)] = new Image();
            asset[240 + i + (x * 4)].src = "/images1/fireball.png";
        }
    }


    mob[x].traits = champString(x);
    var imgRatio = (mob[x].imageWidth / mob[x].imageBaseX);
    mob[x].cX = mob[x].cX * imgRatio;
    mob[x].cY = mob[x].cY * imgRatio;
    //reveal mob
    var leftAdjust = 152 + (x * 244) - (mob[x].imageWidth / 2);
    var u = Mwidth / mob[x].imageBaseX;
    var mobHeight = M.round(mob[x].imageBaseY * u);
    mob[x].imageHeight = mobHeight;
    canvas[x].width = Mwidth;
    canvas[x].height = mobHeight;
    stage[x].removeAllChildren();
    bmp[x] = new C.Bitmap("/images1/" + Mimg + ".png");
    bmpTint[x].poison = new C.Bitmap("/images1/" + Mimg + ".png");
    bmpTint[x].magic = new C.Bitmap("/images1/" + Mimg + ".png");
    bmpTint[x].lightning = new C.Bitmap("/images1/" + Mimg + ".png");
    bmpTint[x].fire = new C.Bitmap("/images1/" + Mimg + ".png");
    bmpTint[x].cold = new C.Bitmap("/images1/" + Mimg + ".png");
    bmp[x].image.onload = function() {
        var e = bmp[x].getBounds();
        var t = bmp[x].image.width / 2;
        var r = bmp[x].image.height / 2;
        var i = Mwidth / 2;
        var s = mobHeight / 2;
        bmp[x].setTransform(i, s, u, u, 0, 0, 0, t, r);
        bmpTint[x].poison.setTransform(i, s, u, u, 0, 0, 0, t, r);
        bmpTint[x].magic.setTransform(i, s, u, u, 0, 0, 0, t, r);
        bmpTint[x].lightning.setTransform(i, s, u, u, 0, 0, 0, t, r);
        bmpTint[x].fire.setTransform(i, s, u, u, 0, 0, 0, t, r);
        bmpTint[x].cold.setTransform(i, s, u, u, 0, 0, 0, t, r);
        bmp[x].cache(e.x, e.y, e.width, e.height);
        bmpTint[x].poison.cache(e.x, e.y, e.width, e.height);
        bmpTint[x].magic.cache(e.x, e.y, e.width, e.height);
        bmpTint[x].lightning.cache(e.x, e.y, e.width, e.height);
        bmpTint[x].fire.cache(e.x, e.y, e.width, e.height);
        bmpTint[x].cold.cache(e.x, e.y, e.width, e.height);
        bmpTint[x].poison.alpha = 0;
        bmpTint[x].magic.alpha = 0;
        bmpTint[x].lightning.alpha = 0;
        bmpTint[x].fire.alpha = 0;
        bmpTint[x].cold.alpha = 0;
        stage[x].addChild(bmp[x]);
        stage[x].addChild(bmpTint[x].poison);
        stage[x].addChild(bmpTint[x].magic);
        stage[x].addChild(bmpTint[x].lightning);
        stage[x].addChild(bmpTint[x].fire);
        stage[x].addChild(bmpTint[x].cold);
		
		// start test
		/*
		if(dev){
			mob[x].fireEnchanted = true;
			mob[x].coldEnchanted = true;
			mob[x].lightningEnchanted = true;
			mob[x].poisonEnchanted = true;
		}
		mob[x].vicious = mobVicious;
		mob[x].frenzy = mobFrenzy;
		mob[x].juggernaut = mobJuggernaut;
		mob[x].tough = mobTough;
		mob[x].chromatic = mobChromatic;
		mob[x].summoner = mobSummoner;
		mob[x].sprinter = mobSprinter;
		mob[x].vampiric = mobVampiric;
		mob[x].lamprey = mobLamprey;
		mob[x].mobMartyr = mobMartyr;
		mob[x].phased = mobPhased;
		mob[x].dauntless = mobDauntless;
		mob[x].cripplingAura = mobCripplingAura;
		mob[x].disruptionAura = mobDisruptionAura;
		mob[x].convictionAura = mobConvictionAura;
		mob[x].concussiveAura = mobConcussiveAura;
		mob[x].ensnaringAura = mobEnsnaringAura;
		mob[x].zealousAura = mobZealousAura;
		mob[x].shreddingAura = mobShreddingAura;
		*/
    }
    var bot1 = (M.random() * (268) - 300);
    var bot2 = floorB;
    T.set(MOB[x], {
        scale: 1,
        width: Mwidth,
        height: mobHeight,
        left: leftAdjust,
        bottom: bot2
    });
    MOBNAME[x].style.fontSize = '1.2em';
    MOBNAME[x].textContent = Mname;
    var nameWid = MOBNAME[x].offsetWidth;
    var mobWid = MOB[x].offsetWidth;
    var ADJ = (mobWid / 2) - (nameWid / 2);
    MOBNAME[x].style.left = ADJ + 'px';
    $("#mobIcons" + x).empty();
    T.to(MOB[x], .5, {
        startAt: {
            opacity: 0,
            left: leftAdjust + (M.random() * (320) - 160)
        },
        left: leftAdjust,
        opacity: 1
    });
    T.to(MOB[x], .5, {
        startAt: {
            bottom: bot1
        },
        bottom: bot2,
        force3D: "auto",
        ease: ez.Bout
    });
    if (mob[x].phased) {
        T.set(canvas[x], {
            scale: 1,
            rotationY: ~~(M.random() * (2)) * 180,
            opacity: .5
        });
    } else {
        T.set(canvas[x], {
            scale: 1,
            rotationY: ~~(M.random() * (2)) * 180,
            opacity: 1
        });
    }
    CStat();
    // hell exp bonus
    if (diff() === 2) {
        mob[x].xp = ~~(mob[x].xp * 1.15)
    }
    if (location.protocol === 'https:' && mob[x].name) {
        $.ajax({
            url: 'php/game1.php',
            data: {
                run: "setMob",
                name: mob[x].name,
                Slot: x,
                exp: mob[x].xp,
                gold: mob[x].gold
            }
        }).fail(function(data) {
            failToCommunicate();
        });
    }
}

function failToCommunicate() {
	Chat("SERVER ERROR: Cannot contact the server", 1);
	T.pauseAll();
	setTimeout(function() {
		serverLogout();
	}, 5000);
}

function champString(Slot) {
    var foo = "";
    var zag = 1;
    var x = newSlotNumber;
    //champ traits
    if (mob[Slot].vicious) {
        foo += "&nbsp;Vicious&nbsp;";
        zag = 0;
    }
    if (mob[Slot].frenzy) {
        foo += "&nbsp;Frenzied&nbsp;";
        zag = 0;
    }
    if (mob[Slot].juggernaut) {
        foo += "&nbsp;Juggernaut&nbsp;";
        zag = 0;
    }
    if (mob[Slot].tough) {
        foo += "&nbsp;Tough&nbsp;";
        zag = 0;
    }
    if (mob[Slot].chromatic) {
        foo += "&nbsp;Chromatic&nbsp;";
        zag = 0;
    }
    if (mob[Slot].summoner) {
        foo += "&nbsp;Summoner&nbsp;";
        zag = 0;
    }
    if (mob[Slot].sprinter) {
        foo += "&nbsp;Sprinter&nbsp;";
        zag = 0;
    }
    if (mob[Slot].vampiric) {
        foo += "&nbsp;Vampiric&nbsp;";
        zag = 0;
    }
    if (mob[Slot].lamprey) {
        foo += "&nbsp;Lamprey&nbsp;";
        zag = 0;
    }
    if (mob[Slot].fireEnchanted) {
        foo += "&nbsp;Fire Enchanted&nbsp;";
        zag = 0;
    }
    if (mob[Slot].coldEnchanted) {
        foo += "&nbsp;Cold Enchanted&nbsp;";
        zag = 0;
    }
    if (mob[Slot].lightningEnchanted) {
        foo += "&nbsp;Lightning Enchanted&nbsp;";
        zag = 0;
    }
    if (mob[Slot].poisonEnchanted) {
        foo += "&nbsp;Poison Enchanted&nbsp;";
        zag = 0;
    }
    if (mob[Slot].mobMartyr) {
        foo += "&nbsp;Martyr&nbsp;";
        zag = 0;
    }
    if (mob[Slot].phased) {
        foo += "&nbsp;Phased&nbsp;";
        zag = 0;
    }
    if (mob[Slot].dauntless) {
        foo += "&nbsp;Dauntless&nbsp;";
        zag = 0;
    }
    if (mob[Slot].cripplingAura) {
        foo += "&nbsp;Crippling Aura&nbsp;";
        zag = 0;
    }
    if (mob[Slot].disruptionAura) {
        foo += "&nbsp;Disruption Aura&nbsp;";
        zag = 0;
    }
    if (mob[Slot].convictionAura) {
        foo += "&nbsp;Conviction Aura&nbsp;";
        zag = 0;
    }
    if (mob[Slot].concussiveAura) {
        foo += "&nbsp;Concussive Aura&nbsp;";
        zag = 0;
    }
    if (mob[Slot].ensnaringAura) {
        foo += "&nbsp;Ensnaring Aura&nbsp;";
        zag = 0;
    }
    if (mob[Slot].zealousAura) {
        foo += "&nbsp;Zealous Aura&nbsp;";
        zag = 0;
    }
    if (mob[Slot].shreddingAura) {
        foo += "&nbsp;Shredding Aura&nbsp;";
        zag = 0;
    }
    if (zag == 0) {
        foo += "<br>";
    }
    if (mob[x].def < 100) {
        foo += "&nbsp;Physical Resistant&nbsp;".fontcolor("#ffffff");
    }
    if (mob[x].poison < 100) {
        foo += "&nbsp;Poison Resistant&nbsp;".fontcolor("#00ff00");
    }
    if (mob[x].magic < 100) {
        foo += "&nbsp;Magic Resistant&nbsp;".fontcolor("#ff00ff");
    }
    if (mob[x].lightning < 100) {
        foo += "&nbsp;Lightning Resistant&nbsp;".fontcolor("#ffff00");
    }
    if (mob[x].cold < 100) {
        foo += "&nbsp;Cold Resistant&nbsp;".fontcolor("#00ffff");
    }
    if (mob[x].fire < 100) {
        foo += "&nbsp;Fire Resistant&nbsp;".fontcolor("#ff0000");
    }
    if (mob[x].def > 100) {
        foo += "&nbsp;Physical Weakness&nbsp;".fontcolor("#ffffff");
    }
    if (mob[x].poison > 100) {
        foo += "&nbsp;Poison Weakness&nbsp;".fontcolor("#00ff00");
    }
    if (mob[x].magic > 100) {
        foo += "&nbsp;Magic Weakness&nbsp;".fontcolor("#ff00ff");
    }
    if (mob[x].lightning > 100) {
        foo += "&nbsp;Lightning Weakness&nbsp;".fontcolor("#ffff00");
    }
    if (mob[x].cold > 100) {
        foo += "&nbsp;Cold Weakness&nbsp;".fontcolor("#00ffff");
    }
    if (mob[x].fire > 100) {
        foo += "&nbsp;Fire Weakness&nbsp;".fontcolor("#ff0000");
    }
    return foo;
}

function monsterCastingParticleLeft1(Slot) { // determine mob's left hand location
    var y = 0;
    var x = 0;
    var z = mob[Slot].image;
    if (Slot === 5) {
        var z = petImage;
        y -= 50;
    }
    if (z === "a lizardman") {
        x += 116;
        y += 229;
    }
    if (z === "an orc") {
        x += 52;
        y += 240;
    }
    if (z === "a gnoll") {
        x += 61;
        y += 260;
    }
    if (z === "a kobold") {
        x += 103;
        y += 236;
    }
    if (z === "a purple dragon") {
        x += 714;
        y += 418;
    }
    if (z === "a red dragon") {
        x += 714;
        y += 418;
    }
    if (z === "a blue dragon") {
        x += 714;
        y += 418;
    }
    if (z === "dracoliche") {
        x += 714;
        y += 418;
    }
    if (z === "an anuran") {
        x += 53;
        y += 133;
    }
    if (z === "a skeleton") {
        x += 63;
        y += 256;
    }
    if (z === "a dark skeleton") {
        x += 63;
        y += 256;
    }
    if (z === "a male zombie") {
        x += 21;
        y += 207;
    }
    if (z === "a female zombie") {
        x += 24;
        y += 212;
    }
    if (z === "garanel rucksif") {
        x += 200;
        y += 296;
    }
    if (z === "a dark elf male plate") {
        x += 63;
        y += 220;
    }
    if (z === "a dark elf male") {
        x += 21;
        y += 215;
    }
    if (z === "a dark elf female") {
        x += 20;
        y += 257;
    }
    if (z === "a dark elf female plate") {
        x += 24;
        y += 275;
    }
    if (z === "a dark elf matron") {
        x += 104;
        y += 194;
    }
    if (z === "a vampire female") {
        x += 14;
        y += 337;
    }
    if (z === "a dhampyre") {
        x += 44;
        y += 230;
    }
    if (z === "phinigel autropos") {
        x += 247;
        y += 300;
    }
    if (z === "a red goblin") {
        x += 48;
        y += 216;
    }
    if (z === "a blue goblin") {
        x += 49;
        y += 216;
    }
    if (z === "braxxen") {
        x += 86;
        y += 361;
    }
    if (z === "an ice giant") {
        x += 62;
        y += 368;
    }
    if (z === "cazic") {
        x += 388;
        y += 362;
    }
    if (z === "innoruuk") {
        x += 417;
        y += 335;
    }
    if (z === "maestro") {
        x += 213;
        y += 371;
    }
    if (z === "a faerie") {
        x += 62;
        y += 390;
    }
    if (z === "grimden") {
        x += 256;
        y += 253;
    }
    if (z === "an evil eye round") {
        x += 160;
        y += 320;
    }
    if (z === "a gargoyle") {
        x += 160;
        y += 365;
    }
    if (z === "an imp") {
        x += 128;
        y += 361;
    }
    if (z === "a mummy") {
        x += 69;
        y += 240;
    }
    if (z === "a human female") {
        x += 27;
        y += 279;
    }
    if (z === "a human male") {
        x += 27;
        y += 254;
    }
    if (z === "a stone golem") {
        x += 71;
        y += 225;
    }
    if (z === "a shadowed man") {
        x += 21;
        y += 198;
    }
    if (z === "avatar of fear") {
        x += 208;
        y += 358;
    }
    if (z === "a steel golem") {
        x += 159;
        y += 271;
    }
    if (z === "a werewolf") {
        x += 113;
        y += 263;
    }
    if (z === "a clay golem") {
        x += 103;
        y += 321;
    }
    if (z === "a fungus") {
        x += 100;
        y += 147;
    }
    if (z === "a fire giant") {
        x += 94;
        y += 305;
    }
    if (z === "a beetle") {
        x += 300;
        y += 50;
    }
    if (z === "a bat") {
        x += 298;
        y += 348;
    }
    if (z === "a brown spider") {
        x += 250;
        y += 68;
    }
    if (z === "a jungle spider") {
        x += 250;
        y += 63;
    }
    if (z === "a heart spider") {
        x += 246;
        y += 105;
    }
    if (z === "a ghoul") {
        x += 119;
        y += 275;
    }
    if (z === "a white spider") {
        x += 249;
        y += 89;
    }
    if (z === "a gorilla") {
        x += 170;
        y += 145;
    }
    if (z === "a rat") {
        x += 233;
        y += 69;
    }
    if (z === "a wisp") {
        x += 61;
        y += 382;
    }
    if (z === "a terror") {
        x += 135;
        y += 201;
    }
    if (z === "a white wolf") {
        x += 385;
        y += 286;
    }
    if (z === "a wolf") {
        x += 385;
        y += 286;
    }
    if (z === "an earth elemental") {
        x += 60;
        y += 253;
    }
    if (z === "a fire elemental") {
        x += 71;
        y += 205;
    }
    //width adjustment for mob variation
    if (Slot !== 5) {
        var widthDifferenceX = mob[Slot].imageWidth / mob[Slot].imageBaseX;
        var widthDifferenceY = mob[Slot].imageHeight / mob[Slot].imageBaseY;
        x = M.ceil(x * widthDifferenceX);
        y = M.ceil(y * widthDifferenceY);
    } else {
        x = (MOB[5].offsetLeft + petWidth / 2);
        y = (497 - MOB[5].offsetTop - 100);
    }
    return [x, y];
}

function monsterCastingParticleLeft2(Slot) { // determine mob's right hand location
    var y = 0;
    var x = 0;
    var z = mob[Slot].image;
    if (Slot === 5) {
        z = petImage;
        y -= 50;
    }
    if (z === "a lizardman") {
        x += 397;
        y += 231;
    }
    if (z === "an orc") {
        x += 334;
        y += 195;
    }
    if (z === "a gnoll") {
        x += 351;
        y += 251;
    }
    if (z === "a kobold") {
        x += 373;
        y += 241;
    }
    if (z === "a purple dragon") {
        x += 714;
        y += 418;
    }
    if (z === "a red dragon") {
        x += 714;
        y += 418;
    }
    if (z === "a blue dragon") {
        x += 714;
        y += 418;
    }
    if (z === "dracoliche") {
        x += 714;
        y += 418;
    }
    if (z === "an anuran") {
        x += 322;
        y += 133;
    }
    if (z === "a skeleton") {
        x += 190;
        y += 266;
    }
    if (z === "a dark skeleton") {
        x += 190;
        y += 266;
    }
    if (z === "a male zombie") {
        x += 179;
        y += 211;
    }
    if (z === "a female zombie") {
        x += 150;
        y += 218;
    }
    if (z === "garanel rucksif") {
        x += 415;
        y += 299;
    }
    if (z === "a dark elf male plate") {
        x += 198;
        y += 207;
    }
    if (z === "a dark elf male") {
        x += 179;
        y += 234;
    }
    if (z === "a dark elf female") {
        x += 186;
        y += 242;
    }
    if (z === "a dark elf female plate") {
        x += 196;
        y += 266;
    }
    if (z === "a dark elf matron") {
        x += 245;
        y += 342;
    }
    if (z === "a vampire female") {
        x += 165;
        y += 346;
    }
    if (z === "a dhampyre") {
        x += 186;
        y += 228;
    }
    if (z === "phinigel autropos") {
        x += 450;
        y += 295;
    }
    if (z === "a red goblin") {
        x += 345;
        y += 237;
    }
    if (z === "a blue goblin") {
        x += 345;
        y += 237;
    }
    if (z === "braxxen") {
        x += 362;
        y += 444;
    }
    if (z === "an ice giant") {
        x += 461;
        y += 337;
    }
    if (z === "cazic") {
        x += 781;
        y += 356;
    }
    if (z === "innoruuk") {
        x += 726;
        y += 334;
    }
    if (z === "maestro") {
        x += 460;
        y += 368;
    }
    if (z === "a faerie") {
        x += 145;
        y += 387;
    }
    if (z === "grimden") {
        x += 508;
        y += 255;
    }
    if (z === "an evil eye round") {
        x += 160;
        y += 320;
    }
    if (z === "a gargoyle") {
        x += 311;
        y += 365;
    }
    if (z === "an imp") {
        x += 246;
        y += 369;
    }
    if (z === "a mummy") {
        x += 269;
        y += 222;
    }
    if (z === "a human female") {
        x += 194;
        y += 280;
    }
    if (z === "a human male") {
        x += 187;
        y += 255;
    }
    if (z === "a stone golem") {
        x += 567;
        y += 224;
    }
    if (z === "a shadowed man") {
        x += 152;
        y += 200;
    }
    if (z === "avatar of fear") {
        x += 461;
        y += 413;
    }
    if (z === "a steel golem") {
        x += 528;
        y += 272;
    }
    if (z === "a werewolf") {
        x += 256;
        y += 239;
    }
    if (z === "a clay golem") {
        x += 370;
        y += 321;
    }
    if (z === "a fungus") {
        x += 285;
        y += 145;
    }
    if (z === "a fire giant") {
        x += 579;
        y += 302;
    }
    if (z === "a beetle") {
        x += 300;
        y += 50;
    }
    if (z === "a bat") {
        x += 298;
        y += 347;
    }
    if (z === "a brown spider") {
        x += 250;
        y += 68;
    }
    if (z === "a jungle spider") {
        x += 250;
        y += 63;
    }
    if (z === "a heart spider") {
        x += 246;
        y += 105;
    }
    if (z === "a ghoul") {
        x += 382;
        y += 263;
    }
    if (z === "a white spider") {
        x += 249;
        y += 89;
    }
    if (z === "a gorilla") {
        x += 439;
        y += 140;
    }
    if (z === "a rat") {
        x += 233;
        y += 69;
    }
    if (z === "a wisp") {
        x += 257;
        y += 377;
    }
    if (z === "a terror") {
        x += 517;
        y += 206;
    }
    if (z === "a white wolf") {
        x += 385;
        y += 286;
    }
    if (z === "a wolf") {
        x += 385;
        y += 286;
    }
    if (z === "an earth elemental") {
        x += 275;
        y += 244;
    }
    if (z === "a fire elemental") {
        x += 275;
        y += 206;
    }
    //width percent adjustment
    if (Slot !== 5) {
        var widthDifferenceX = mob[Slot].imageWidth / mob[Slot].imageBaseX;
        var widthDifferenceY = mob[Slot].imageHeight / mob[Slot].imageBaseY;
        x = M.ceil(x * widthDifferenceX);
        y = M.ceil(y * widthDifferenceY);
    } else {
        x = (MOB[5].offsetLeft + petWidth / 2);
        y = (497 - MOB[5].offsetTop - 100);
    }
    return [x, y];
}