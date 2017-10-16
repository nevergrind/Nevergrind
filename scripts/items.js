function setAbsorbAll(NI, x) {
	P.item[NI].absorbPoison = x;
	P.item[NI].absorbMagic = x;
	P.item[NI].absorbLightning = x;
	P.item[NI].absorbCold = x;
	P.item[NI].absorbFire = x;
}

function setAllResists(NI, pr, mr, lr, cr, fr) {
	P.item[NI].resistPoison = pr;
	P.item[NI].resistMagic = mr;
	P.item[NI].resistLightning = lr;
	P.item[NI].resistCold = cr;
	P.item[NI].resistFire = fr;
}

function setAllStatus(NI, sr, fr, cr, sr) {
	P.item[NI].stun = sr;
	P.item[NI].fear = fr;
	P.item[NI].cold = cr;
	P.item[NI].silence = sr;
}

function getItemSlot(lvl) {
	var x = M.random() * 100;
	var foo = "shoulders";
	// shoulders require level 7
	if (foo === "shoulders" && lvl < 10 && x < 7) {
		x = M.random() * (86) + 14;
	}
	if (x >= 7 && x < 14) {
		foo = "helmet";
	}
	// helmets require level 15
	if (foo === "helmet" && lvl < 15) {
		x = M.random() * (86) + 14;
	}
	if (x >= 14 && x < 17) {
		foo = "neck";
	}
	if (x >= 17 && x < 22) {
		foo = "ring";
	}
	if (x >= 22 && x < 29) {
		foo = "back";
	}
	if (x >= 29 && x < 36) {
		foo = "chest";
	}
	if (x >= 36 && x < 43) {
		foo = "bracers";
	}
	if (x >= 43 && x < 50) {
		foo = "gloves";
	}
	if (x >= 50 && x < 57) {
		foo = "belt";
	}
	if (x >= 57 && x < 64) {
		foo = "legs";
	}
	if (x >= 64 && x < 71) {
		foo = "boots";
	}
	if (x >= 71 && x < 88) {
		foo = "weapons";
	}
	if (x >= 88 && x < 96) {
		foo = "shield";
	}
	if (x >= 96) {
		foo = "range";
	}
	return foo;
}

function getItemTier(Slot) {
	var minBump = M.random() * (.33) + M.random() * (.33) + M.random() * (.33);
	var d = diff();
	var x = mob[Slot].level;
	if (d === 0) {
		if (x > 55) {
			x = 55;
		}
	} else if (d === 1) {
		if (x > 80) {
			x = 80;
		}
	} else if (d === 2) {
		if (x > 99) {
			x = 99;
		}
	}
	var min = x * minBump;
	if (min < 1) {
		min = 1;
	}
	var range = mob[Slot].level - min;
	var foo = M.ceil(M.random() * range + min);
	if (foo > 99) {
		foo = 99;
	}
	if (foo < 1) {
		foo = 1;
	}
	return foo;
}

function getArmor(Slot, newItem, newTier) {
	var foo = 0;
	var xPos = 0;
	var yPos = 0;
	var name = "";
	var damage = 0;
	var delay = 0;
	var type = "";
	var quality = 0;
	var N = newTier;
	var qux = ~~(M.random() * 4) + 1;
	if (newItem === "helmet") {
		xPos = -64;
		if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
			// helm is the only slot that goes cloth to plate
			type = "cloth";
			if (qux == 1) {
				foo = 2;
				yPos = 0;
				name = "Hood";
			}
			if (qux == 2) {
				foo = 5;
				yPos = -64;
				name = "Cap";
			}
			if (qux == 3) {
				foo = 8;
				yPos = -128;
				name = "Bandana";
			}
			if (qux == 4) {
				foo = 12;
				yPos = -192;
				name = "Diadem";
			}
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 12;
			}
			if (N >= 77) {
				quality = 2;
				foo += 24;
			}
		}
		if ((N > 12 && N <= 24) || (N >= 55 && N <= 62) || (N >= 83 && N <= 88)) {
			type = "cloth";
			if (qux == 1) {
				foo = 8;
				yPos = -256;
				name = "Dark Hood";
			}
			if (qux == 2) {
				foo = 9;
				yPos = -320;
				name = "Coronet";
			}
			if (qux == 3) {
				foo = 10;
				yPos = -384;
				name = "Miter";
			}
			if (qux == 4) {
				foo = 12;
				yPos = -448;
				name = "Astral Hood";
			}
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 12;
			}
			if (N >= 77) {
				quality = 2;
				foo += 24;
			}
		}
		if ((N > 24 && N <= 36) || (N >= 63 && N <= 69) || (N >= 89 && N <= 94)) {
			type = "chain";
			if (qux == 1) {
				foo = 16;
				yPos = -512;
				name = "Mail Hood";
			}
			if (qux == 2) {
				foo = 20;
				yPos = -576;
				name = "Coif";
			}
			if (qux == 3) {
				foo = 22;
				yPos = -640;
				name = "Armet";
			}
			if (qux == 4) {
				foo = 24;
				yPos = -704;
				name = "Sallet";
			}
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 24;
			}
			if (N >= 77) {
				quality = 2;
				foo += 48;
			}
		}
		if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
			type = "plate";
			if (qux == 1) {
				foo = 24;
				yPos = -768;
				name = "Burgonet";
			}
			if (qux == 2) {
				foo = 26;
				yPos = -832;
				name = "Great Helm";
			}
			if (qux == 3) {
				foo = 28;
				yPos = -896;
				name = "Barbute";
			}
			if (qux == 4) {
				foo = 30;
				yPos = -960;
				name = "Royal Helm";
			}
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 30;
			}
			if (N >= 77) {
				quality = 2;
				foo += 60;
			}
		}
	}
	if (newItem === "neck") {
		xPos = 0;
		name = "Amulet";
		var x = ~~(1 + M.random() * (5));
		if (x === 1) {
			yPos = -64;
		}
		if (x === 2) {
			yPos = -128;
		}
		if (x === 3) {
			yPos = -192;
		}
		if (x === 4) {
			yPos = -256;
		}
		if (x === 5) {
			yPos = -320;
		}
		if (N >= 49 && N <= 76) {
			quality = 1;
		}
		if (N >= 77) {
			quality = 2;
		}
	}
	if (newItem === "ring") {
		xPos = 0;
		name = "Ring";
		var x = ~~(1 + M.random() * (4));
		if (x === 1) {
			yPos = -384;
		}
		if (x === 2) {
			yPos = -448;
		}
		if (x === 3) {
			yPos = -512;
		}
		if (x === 4) {
			yPos = -576;
		}
		if (N >= 49 && N <= 76) {
			quality = 1;
		}
		if (N >= 77) {
			quality = 2;
		}
	}
	if (newItem === "shoulders") {
		xPos = -128;
		if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
			if (qux == 1) {
				foo = 2;
				yPos = 0;
				name = "Cloth Drape";
			}
			if (qux == 2) {
				foo = 7;
				yPos = -256;
				name = "Leather Shoulders";
			}
			if (qux == 3) {
				foo = 9;
				yPos = -512;
				name = "Scaled Mantle";
			}
			if (qux == 4) {
				foo = 12;
				yPos = -768;
				name = "Cobalt Spaulders";
			}
		}
		if ((N > 12 && N <= 24) || (N >= 55 && N <= 62) || (N >= 83 && N <= 88)) {
			if (qux == 1) {
				foo = 4;
				yPos = -64;
				name = "Woven Drape";
			}
			if (qux == 2) {
				foo = 10;
				yPos = -320;
				name = "Studded Shoulders";
			}
			if (qux == 3) {
				foo = 12;
				yPos = -576;
				name = "Chain Mantle";
			}
			if (qux == 4) {
				foo = 16;
				yPos = -832;
				name = "Mithril Pauldrons";
			}
		}
		if ((N > 24 && N <= 36) || (N >= 63 && N <= 69) || (N >= 89 && N <= 94)) {
			if (qux == 1) {
				foo = 7;
				yPos = -128;
				name = "Azure Shawl";
			}
			if (qux == 2) {
				foo = 12;
				yPos = -384;
				name = "Spiked Shoulders";
			}
			if (qux == 3) {
				foo = 16;
				yPos = -640;
				name = "Kusari Mantle";
			}
			if (qux == 4) {
				foo = 20;
				yPos = -896;
				name = "Sode";
			}
		}
		if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
			if (qux == 1) {
				foo = 10;
				yPos = -192;
				name = "Archon Shawl";
			}
			if (qux == 2) {
				foo = 16;
				yPos = -448;
				name = "Brigand Shoulders";
			}
			if (qux == 3) {
				foo = 20;
				yPos = -704;
				name = "Laminar Mantle";
			}
			if (qux == 4) {
				foo = 24;
				yPos = -960;
				name = "Monarch Pauldrons";
			}
		}
		if (qux === 1) {
			type = "cloth";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 10;
			}
			if (N >= 77) {
				quality = 2;
				foo += 20;
			}
		}
		if (qux === 2) {
			type = "leather";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 16;
			}
			if (N >= 77) {
				quality = 2;
				foo += 32;
			}
		}
		if (qux === 3) {
			type = "chain";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 20;
			}
			if (N >= 77) {
				quality = 2;
				foo += 40;
			}
		}
		if (qux === 4) {
			type = "plate";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 25;
			}
			if (N >= 77) {
				quality = 2;
				foo += 50;
			}
		}
	}
	if (newItem === "back") {
		xPos = -192;
		if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
			if (qux === 1) {
				foo = 1;
				yPos = 0;
				name = "Cape";
			}
			if (qux === 2) {
				foo = 2;
				yPos = -64;
				name = "Cloak";
			}
			if (qux === 3) {
				foo = 3;
				yPos = -128;
				name = "Woven Cloak";
			}
			if (qux === 4) {
				foo = 4;
				yPos = -192;
				name = "Fur-Lined Cloak";
			}
		}
		if ((N > 12 && N <= 24) || (N >= 55 && N <= 62) || (N >= 83 && N <= 88)) {
			if (qux === 1) {
				foo = 4;
				yPos = -256;
				name = "Drake-hide Cloak";
			}
			if (qux === 2) {
				foo = 5;
				yPos = -320;
				name = "Brigand's Shroud";
			}
			if (qux === 3) {
				foo = 5;
				yPos = -384;
				name = "Regal Shroud";
			}
			if (qux === 4) {
				foo = 5;
				yPos = -448;
				name = "Orcish Cloak";
			}
		}
		if ((N > 24 && N <= 36) || (N >= 63 && N <= 69) || (N >= 89 && N <= 94)) {
			if (qux === 1) {
				foo = 6;
				yPos = -512;
				name = "Elven Shroud";
			}
			if (qux === 2) {
				foo = 7;
				yPos = -576;
				name = "Emerald Cloak";
			}
			if (qux === 3) {
				foo = 7;
				yPos = -640;
				name = "Aviak Cloak";
			}
			if (qux === 4) {
				foo = 8;
				yPos = -704;
				name = "Chlamys";
			}
		}
		if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
			if (qux === 1) {
				foo = 8;
				yPos = -768;
				name = "Dragon Cape";
			}
			if (qux === 2) {
				foo = 9;
				yPos = -832;
				name = "Umbral Shroud";
			}
			if (qux === 3) {
				foo = 9;
				yPos = -896;
				name = "Archon Cloak";
			}
			if (qux === 4) {
				foo = 10;
				yPos = -960;
				name = "Astral Cloak";
			}
		}
		if (qux === 1) {
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 15;
			}
			if (N >= 77) {
				quality = 2;
				foo += 30;
			}
		}
		if (qux === 2) {
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 15;
			}
			if (N >= 77) {
				quality = 2;
				foo += 30;
			}
		}
		if (qux === 3) {
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 15;
			}
			if (N >= 77) {
				quality = 2;
				foo += 30;
			}
		}
		if (qux === 4) {
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 15;
			}
			if (N >= 77) {
				quality = 2;
				foo += 30;
			}
		}
	}
	if (newItem === "chest") {
		xPos = -256;
		if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
			if (qux == 1) {
				foo = 4;
				yPos = 0;
				name = "Elven Robe";
			}
			if (qux == 2) {
				foo = 11;
				yPos = -256;
				name = "Quilted Tunic";
			}
			if (qux == 3) {
				foo = 14;
				yPos = -512;
				name = "Chain Mail";
			}
			if (qux == 4) {
				foo = 16;
				yPos = -768;
				name = "Breast Plate";
			}
		}
		if ((N > 12 && N <= 24) || (N >= 55 && N <= 62) || (N >= 83 && N <= 88)) {
			if (qux == 1) {
				foo = 7;
				yPos = -64;
				name = "Silk Robe";
			}
			if (qux == 2) {
				foo = 16;
				yPos = -320;
				name = "Spiked Vestment";
			}
			if (qux == 3) {
				foo = 20;
				yPos = -576;
				name = "Ring Mail";
			}
			if (qux == 4) {
				foo = 24;
				yPos = -832;
				name = "Cuirass";
			}
		}
		if ((N > 24 && N <= 36) || (N >= 63 && N <= 69) || (N >= 89 && N <= 94)) {
			if (qux == 1) {
				foo = 11;
				yPos = -128;
				name = "Linen Robe";
			}
			if (qux == 2) {
				foo = 20;
				yPos = -384;
				name = "Leather Armor";
			}
			if (qux == 3) {
				foo = 24;
				yPos = -640;
				name = "Scale Mail";
			}
			if (qux == 4) {
				foo = 30;
				yPos = -896;
				name = "Gothic Plate";
			}
		}
		if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
			if (qux == 1) {
				foo = 14;
				yPos = -192;
				name = "Azure Robe";
			}
			if (qux == 2) {
				foo = 24;
				yPos = -448;
				name = "Studded Leather";
			}
			if (qux == 3) {
				foo = 30;
				yPos = -704;
				name = "Kusari Mail";
			}
			if (qux == 4) {
				foo = 38;
				yPos = -960;
				name = "Archon Plate";
			}
		}
		if (qux === 1) {
			type = "cloth";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 15;
			}
			if (N >= 77) {
				quality = 2;
				foo += 30;
			}
		}
		if (qux === 2) {
			type = "leather";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 24;
			}
			if (N >= 77) {
				quality = 2;
				foo += 48;
			}
		}
		if (qux === 3) {
			type = "chain";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 31;
			}
			if (N >= 77) {
				quality = 2;
				foo += 62;
			}
		}
		if (qux === 4) {
			type = "plate";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 38;
			}
			if (N >= 77) {
				quality = 2;
				foo += 76;
			}
		}
	}
	if (newItem === "bracers") {
		xPos = -320;
		if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
			if (qux == 1) {
				foo = 3;
				yPos = 0;
				name = "Jade Bracers";
			}
			if (qux == 2) {
				foo = 8;
				yPos = -256;
				name = "Leather Bracers";
			}
			if (qux == 3) {
				foo = 10;
				yPos = -512;
				name = "Scaled Bracers";
			}
			if (qux == 4) {
				foo = 12;
				yPos = -768;
				name = "Bronze Bracers";
			}
		}
		if ((N > 12 && N <= 24) || (N >= 55 && N <= 62) || (N >= 83 && N <= 88)) {
			if (qux == 1) {
				foo = 4;
				yPos = -64;
				name = "Bone Bracers";
			}
			if (qux == 2) {
				foo = 10;
				yPos = -320;
				name = "Patent Bracers";
			}
			if (qux == 3) {
				foo = 12;
				yPos = -576;
				name = "Laminar Bracers";
			}
			if (qux == 4) {
				foo = 16;
				yPos = -832;
				name = "Cobalt Bracers";
			}
		}
		if ((N > 24 && N <= 36) || (N >= 63 && N <= 69) || (N >= 89 && N <= 94)) {
			if (qux == 1) {
				foo = 7;
				yPos = -128;
				name = "Sapphire Bracers";
			}
			if (qux == 2) {
				foo = 12;
				yPos = -384;
				name = "Bonded Bracers";
			}
			if (qux == 3) {
				foo = 16;
				yPos = -640;
				name = "Splinted Bracers";
			}
			if (qux == 4) {
				foo = 20;
				yPos = -896;
				name = "Tetrarch Bracers";
			}
		}
		if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
			if (qux == 1) {
				foo = 10;
				yPos = -192;
				name = "Opulent Bracers";
			}
			if (qux == 2) {
				foo = 16;
				yPos = -448;
				name = "Elven Bracers";
			}
			if (qux == 3) {
				foo = 20;
				yPos = -704;
				name = "Kusari Bracers";
			}
			if (qux == 4) {
				foo = 24;
				yPos = -960;
				name = "Gilded Bracers";
			}
		}
		if (qux === 1) {
			type = "cloth";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 10;
			}
			if (N >= 77) {
				quality = 2;
				foo += 20;
			}
		}
		if (qux === 2) {
			type = "leather";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 16;
			}
			if (N >= 77) {
				quality = 2;
				foo += 32;
			}
		}
		if (qux === 3) {
			type = "chain";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 20;
			}
			if (N >= 77) {
				quality = 2;
				foo += 40;
			}
		}
		if (qux === 4) {
			type = "plate";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 25;
			}
			if (N >= 77) {
				quality = 2;
				foo += 50;
			}
		}
	}
	if (newItem === "gloves") {
		xPos = -384;
		if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
			if (qux == 1) {
				foo = 3;
				yPos = 0;
				name = "Gloves";
			}
			if (qux == 2) {
				foo = 8;
				yPos = -256;
				name = "Rawhide Gloves";
			}
			if (qux == 3) {
				foo = 10;
				yPos = -512;
				name = "Lamellar Gauntlets";
			}
			if (qux == 4) {
				foo = 12;
				yPos = -768;
				name = "Cobalt Gauntlets";
			}
		}
		if ((N > 12 && N <= 24) || (N >= 55 && N <= 62) || (N >= 83 && N <= 88)) {
			if (qux == 1) {
				foo = 5;
				yPos = -64;
				name = "Cloth Gloves";
			}
			if (qux == 2) {
				foo = 10;
				yPos = -320;
				name = "Drakescale Gloves";
			}
			if (qux == 3) {
				foo = 12;
				yPos = -576;
				name = "Banded Gauntlets";
			}
			if (qux == 4) {
				foo = 16;
				yPos = -832;
				name = "Ornate Gauntlets";
			}
		}
		if ((N > 24 && N <= 36) || (N >= 63 && N <= 69) || (N >= 89 && N <= 94)) {
			if (qux == 1) {
				foo = 8;
				yPos = -128;
				name = "Woven Gloves";
			}
			if (qux == 2) {
				foo = 12;
				yPos = -384;
				name = "Sharkskin Gloves";
			}
			if (qux == 3) {
				foo = 16;
				yPos = -640;
				name = "Kusari Gauntlets";
			}
			if (qux == 4) {
				foo = 20;
				yPos = -896;
				name = "Tetrarch Gauntlets";
			}
		}
		if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
			if (qux == 1) {
				foo = 10;
				yPos = -192;
				name = "Mesh Gloves";
			}
			if (qux == 2) {
				foo = 16;
				yPos = -448;
				name = "Studded Gloves";
			}
			if (qux == 3) {
				foo = 20;
				yPos = -704;
				name = "Brigandine Gauntlets";
			}
			if (qux == 4) {
				foo = 24;
				yPos = -960;
				name = "Gilded Gauntlets";
			}
		}
		if (qux === 1) {
			type = "cloth";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 10;
			}
			if (N >= 77) {
				quality = 2;
				foo += 20;
			}
		}
		if (qux === 2) {
			type = "leather";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 16;
			}
			if (N >= 77) {
				quality = 2;
				foo += 32;
			}
		}
		if (qux === 3) {
			type = "chain";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 20;
			}
			if (N >= 77) {
				quality = 2;
				foo += 40;
			}
		}
		if (qux === 4) {
			type = "plate";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 25;
			}
			if (N >= 77) {
				quality = 2;
				foo += 50;
			}
		}
	}
	if (newItem === "belt") {
		xPos = -448;
		if (N <= 24 || (N >= 49 && N <= 62) || (N >= 77 && N <= 88)) {
			if (qux == 1) {
				foo = 2;
				yPos = 0;
				name = "Sash";
			}
			if (qux == 2) {
				foo = 7;
				yPos = -128;
				name = "Leather Belt";
			}
			if (qux == 3) {
				foo = 10;
				yPos = -256;
				name = "Mesh Belt";
			}
			if (qux == 4) {
				foo = 12;
				yPos = -384;
				name = "Monarch Girdle";
			}
		}
		if ((N > 24 && N <= 48) || (N >= 63 && N <= 76) || N >= 89) {
			if (qux == 1) {
				foo = 7;
				yPos = -64;
				name = "Azure Sash";
			}
			if (qux == 2) {
				foo = 12;
				yPos = -192;
				name = "Heavy Belt";
			}
			if (qux == 3) {
				foo = 16;
				yPos = -320;
				name = "Splinted Belt";
			}
			if (qux == 4) {
				foo = 20;
				yPos = -448;
				name = "Mithril Girdle";
			}
		}
		if (qux === 1) {
			type = "cloth";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 8;
			}
			if (N >= 77) {
				quality = 2;
				foo += 16;
			}
		}
		if (qux === 2) {
			type = "leather";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 12;
			}
			if (N >= 77) {
				quality = 2;
				foo += 24;
			}
		}
		if (qux === 3) {
			type = "chain";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 16;
			}
			if (N >= 77) {
				quality = 2;
				foo += 32;
			}
		}
		if (qux === 4) {
			type = "plate";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 20;
			}
			if (N >= 77) {
				quality = 2;
				foo += 40;
			}
		}
	}
	if (newItem === "legs") {
		xPos = -512;
		if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
			if (qux == 1) {
				foo = 2;
				yPos = 0;
				name = "Pants";
			}
			if (qux == 2) {
				foo = 8;
				yPos = -256;
				name = "Fur Pants";
			}
			if (qux == 3) {
				foo = 10;
				yPos = -512;
				name = "Scaled Legs";
			}
			if (qux == 4) {
				foo = 14;
				yPos = -768;
				name = "Cobalt Legplates";
			}
		}
		if ((N > 12 && N <= 24) || (N >= 55 && N <= 62) || (N >= 83 && N <= 88)) {
			if (qux == 1) {
				foo = 5;
				yPos = -64;
				name = "Cotton Pants";
			}
			if (qux == 2) {
				foo = 12;
				yPos = -320;
				name = "Wolf-Hide Pants ";
			}
			if (qux == 3) {
				foo = 14;
				yPos = -576;
				name = "Chausses";
			}
			if (qux == 4) {
				foo = 11;
				yPos = -832;
				name = "Iron Legplates";
			}
		}
		if ((N > 24 && N <= 36) || (N >= 63 && N <= 69) || (N >= 89 && N <= 94)) {
			if (qux == 1) {
				foo = 9;
				yPos = -128;
				name = "Linen Pants";
			}
			if (qux == 2) {
				foo = 16;
				yPos = -384;
				name = "Sharkskin Legs";
			}
			if (qux == 3) {
				foo = 20;
				yPos = -640;
				name = "Kusazuri";
			}
			if (qux == 4) {
				foo = 24;
				yPos = -896;
				name = "Mithril Legplates";
			}
		}
		if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
			if (qux == 1) {
				foo = 12;
				yPos = -192;
				name = "Silk Leggings";
			}
			if (qux == 2) {
				foo = 20;
				yPos = -448;
				name = "Studded Legs";
			}
			if (qux == 3) {
				foo = 24;
				yPos = -704;
				name = "Poleyn";
			}
			if (qux == 4) {
				foo = 28;
				yPos = -960;
				name = "Royal Legplates";
			}
		}
		if (qux === 1) {
			type = "cloth";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 12;
			}
			if (N >= 77) {
				quality = 2;
				foo += 24;
			}
		}
		if (qux === 2) {
			type = "leather";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 20;
			}
			if (N >= 77) {
				quality = 2;
				foo += 40;
			}
		}
		if (qux === 3) {
			type = "chain";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 24;
			}
			if (N >= 77) {
				quality = 2;
				foo += 48;
			}
		}
		if (qux === 4) {
			type = "plate";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 30;
			}
			if (N >= 77) {
				quality = 2;
				foo += 60;
			}
		}
	}
	if (newItem === "boots") {
		xPos = -448;
		if (N <= 24 || (N >= 49 && N <= 62) || (N >= 77 && N <= 88)) {
			if (qux == 1) {
				foo = 3;
				yPos = -512;
				name = "Boots";
			}
			if (qux == 2) {
				foo = 9;
				yPos = -640;
				name = "Heavy Boots";
			}
			if (qux == 3) {
				foo = 11;
				yPos = -768;
				name = "Chain Boots";
			}
			if (qux == 4) {
				foo = 14;
				yPos = -896;
				name = "Steel Boots";
			}
		}
		if ((N > 24 && N <= 48) || (N >= 63 && N <= 76) || N >= 89) {
			if (qux == 1) {
				foo = 9;
				yPos = -576;
				name = "Light Boots";
			}
			if (qux == 2) {
				foo = 15;
				yPos = -704;
				name = "Sharkskin Boots";
			}
			if (qux == 3) {
				foo = 19;
				yPos = -832;
				name = "Sovereign Boots";
			}
			if (qux == 4) {
				foo = 24;
				yPos = -960;
				name = "Sabatons";
			}
		}
		if (qux === 1) {
			type = "cloth";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 10;
			}
			if (N >= 77) {
				quality = 2;
				foo += 20;
			}
		}
		if (qux === 2) {
			type = "leather";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 16;
			}
			if (N >= 77) {
				quality = 2;
				foo += 32;
			}
		}
		if (qux === 3) {
			type = "chain";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 20;
			}
			if (N >= 77) {
				quality = 2;
				foo += 40;
			}
		}
		if (qux === 4) {
			type = "plate";
			if (N >= 49 && N <= 76) {
				quality = 1;
				foo += 25;
			}
			if (N >= 77) {
				quality = 2;
				foo += 50;
			}
		}
	}
	if (newItem === "weapons") {
		var ber = M.random();
		if (ber < .25) {
			xPos = -576;
			if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
				if (qux === 1 || qux === 2) {
					yPos = 0;
					name = "Sword";
					damage = 3;
					delay = 3300;
				}
				if (qux === 3 || qux === 4) {
					yPos = -64;
					name = "Scimitar";
					damage = 3;
					delay = 3000;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 5;
				}
				if (N >= 77) {
					quality = 2;
					damage += 10;
				}
			}
			if ((N > 12 && N <= 24) || (N >= 55 && N <= 62)
					|| (N >= 83 && N <= 88)) {
				if (qux === 1 || qux === 2) {
					yPos = -128;
					name = "Axe";
					damage = 4;
					delay = 3600;
				}
				if (qux === 3 || qux === 4) {
					yPos = -192;
					name = "Claws";
					damage = 4;
					delay = 3200;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 5;
				}
				if (N >= 77) {
					quality = 2;
					damage += 10;
				}
			}
			if ((N > 24 && N <= 36) || (N >= 63 && N <= 69)
					|| (N >= 89 && N <= 94)) {
				if (qux === 1 || qux === 2) {
					yPos = -256;
					name = "Long Sword";
					damage = 5;
					delay = 3500;
				}
				if (qux === 3 || qux === 4) {
					yPos = -320;
					name = "Chokuto";
					damage = 6;
					delay = 3600;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 5;
				}
				if (N >= 77) {
					quality = 2;
					damage += 10;
				}
			}
			if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
				if (qux === 1 || qux === 2) {
					yPos = -384;
					name = "War Axe";
					damage = 7;
					delay = 3500;
				}
				if (qux === 3 || qux === 4) {
					yPos = -448;
					name = "Kusanagi";
					damage = 8;
					delay = 3200;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 4;
				}
				if (N >= 77) {
					quality = 2;
					damage += 8;
				}
			}
			type = "slashed";
		}
		if (ber >= .25 && ber < .5) {
			xPos = -640;
			if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
				if (qux === 1 || qux === 2) {
					yPos = 0;
					name = "Mace";
					damage = 4;
					delay = 4200;
				}
				if (qux === 3 || qux === 4) {
					yPos = -64;
					name = "Club";
					damage = 4;
					delay = 3800;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 6;
				}
				if (N >= 77) {
					quality = 2;
					damage += 12;
				}
			}
			if ((N > 12 && N <= 24) || (N >= 55 && N <= 62)
					|| (N >= 83 && N <= 88)) {
				if (qux === 1 || qux === 2) {
					yPos = -128;
					name = "Morning Star";
					damage = 5;
					delay = 4200;
				}
				if (qux === 3 || qux === 4) {
					yPos = -192;
					name = "Spiked Club";
					damage = 5;
					delay = 3800;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 6;
				}
				if (N >= 77) {
					quality = 2;
					damage += 12;
				}
			}
			if ((N > 24 && N <= 36) || (N >= 63 && N <= 69)
					|| (N >= 89 && N <= 94)) {
				if (qux === 1 || qux === 2) {
					yPos = -256;
					name = "Jagged Star";
					damage = 6;
					delay = 4000;
				}
				if (qux === 3 || qux === 4) {
					yPos = -320;
					name = "Scepter";
					damage = 7;
					delay = 4100;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 6;
				}
				if (N >= 77) {
					quality = 2;
					damage += 12;
				}
			}
			if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
				if (qux === 1 || qux === 2) {
					yPos = -384;
					name = "Cudgel";
					damage = 8;
					delay = 3900;
				}
				if (qux === 3 || qux === 4) {
					yPos = -448;
					name = "Caduceus";
					damage = 9;
					delay = 3500;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 4;
				}
				if (N >= 77) {
					quality = 2;
					damage += 9;
				}
			}
			type = "crushed";
		}
		if (ber >= .5 && ber < .75) {
			xPos = -704;
			if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
				if (qux === 1 || qux === 2) {
					yPos = 0;
					name = "Dagger";
					damage = 2;
					delay = 2400;
				}
				if (qux === 3 || qux === 4) {
					yPos = -64;
					name = "Dirk";
					damage = 3;
					delay = 3100;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 5;
				}
				if (N >= 77) {
					quality = 2;
					damage += 8;
				}
			}
			if ((N > 12 && N <= 24) || (N >= 55 && N <= 62)
					|| (N >= 83 && N <= 88)) {
				if (qux === 1 || qux === 2) {
					yPos = -128;
					name = "Kris";
					damage = 3;
					delay = 2800;
				}
				if (qux === 3 || qux === 4) {
					yPos = -192;
					name = "Poignard";
					damage = 3;
					delay = 2500;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 5;
				}
				if (N >= 77) {
					quality = 2;
					damage += 8;
				}
			}
			if ((N > 24 && N <= 36) || (N >= 63 && N <= 69)
					|| (N >= 89 && N <= 94)) {
				if (qux === 1 || qux === 2) {
					yPos = -256;
					name = "Rondel";
					damage = 4;
					delay = 2900;
				}
				if (qux === 3 || qux === 4) {
					yPos = -320;
					name = "Spear";
					damage = 4;
					delay = 2600;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 5;
				}
				if (N >= 77) {
					quality = 2;
					damage += 10;
				}
			}
			if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
				if (qux === 1 || qux === 2) {
					yPos = -384;
					name = "Cinquedeas";
					damage = 5;
					delay = 2600;
				}
				if (qux === 3 || qux === 4) {
					yPos = -448;
					name = "Stiletto";
					damage = 6;
					delay = 2500;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 3;
				}
				if (N >= 77) {
					quality = 2;
					damage += 7;
				}
			}
			type = "pierced";
		}
		if (ber >= .75 && ber < .85) {
			xPos = -576;
			if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
				if (qux === 1 || qux === 2) {
					yPos = -512;
					name = "Giant Sword";
					damage = 5;
					delay = 4200;
				}
				if (qux === 3 || qux === 4) {
					yPos = -576;
					name = "Giant Axe";
					damage = 6;
					delay = 4400;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 12;
				}
				if (N >= 77) {
					quality = 2;
					damage += 24;
				}
			}
			if ((N > 12 && N <= 24) || (N >= 55 && N <= 62)
					|| (N >= 83 && N <= 88)) {
				if (qux === 1 || qux === 2) {
					yPos = -640;
					name = "Champion Sword";
					damage = 7;
					delay = 4400;
				}
				if (qux === 3 || qux === 4) {
					yPos = -704;
					name = "Bastard Sword";
					damage = 8;
					delay = 4200;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 13;
				}
				if (N >= 77) {
					quality = 2;
					damage += 26;
				}
			}
			if ((N > 24 && N <= 36) || (N >= 63 && N <= 69)
					|| (N >= 89 && N <= 94)) {
				if (qux === 1 || qux === 2) {
					yPos = -768;
					name = "Gothic Axe";
					damage = 10;
					delay = 4200;
				}
				if (qux === 3 || qux === 4) {
					yPos = -832;
					name = "Katana";
					damage = 11;
					delay = 4000;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 13;
				}
				if (N >= 77) {
					quality = 2;
					damage += 26;
				}
			}
			if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
				if (qux === 1 || qux === 2) {
					yPos = -896;
					name = "Colossus Sword";
					damage = 13;
					delay = 4100;
				}
				if (qux === 3 || qux === 4) {
					yPos = -960;
					name = "Mythical Sword";
					damage = 16;
					delay = 4200;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 12;
				}
				if (N >= 77) {
					quality = 2;
					damage += 26;
				}
			}
			type = "cleaved";
		}
		if (ber >= .85) {
			if (M.random() < .65) {
				xPos = -640;
				if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
					if (qux === 1 || qux === 2) {
						yPos = -512;
						name = "Giant Mace";
						damage = 6;
						delay = 4800;
					}
					if (qux === 3 || qux === 4) {
						yPos = -576;
						name = "Auric Maul";
						damage = 7;
						delay = 4900;
					}
					if (N >= 49 && N <= 76) {
						quality = 1;
						damage += 15;
					}
					if (N >= 77) {
						quality = 2;
						damage += 30;
					}
				}
				if ((N > 12 && N <= 24) || (N >= 55 && N <= 62)
						|| (N >= 83 && N <= 88)) {
					if (qux === 1 || qux === 2) {
						yPos = -640;
						name = "Mallet";
						damage = 8;
						delay = 4800;
					}
					if (qux === 3 || qux === 4) {
						yPos = -704;
						name = "Ogre Maul";
						damage = 9;
						delay = 4500;
					}
					if (N >= 49 && N <= 76) {
						quality = 1;
						damage += 15;
					}
					if (N >= 77) {
						quality = 2;
						damage += 30;
					}
				}
				if ((N > 24 && N <= 36) || (N >= 63 && N <= 69)
						|| (N >= 89 && N <= 94)) {
					if (qux === 1 || qux === 2) {
						yPos = -768;
						name = "Great Maul";
						damage = 11;
						delay = 4400;
					}
					if (qux === 3 || qux === 4) {
						yPos = -832;
						name = "Sledgehammer";
						damage = 13;
						delay = 4600;
					}
					if (N >= 49 && N <= 76) {
						quality = 1;
						damage += 14;
					}
					if (N >= 77) {
						quality = 2;
						damage += 30;
					}
				}
				if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
					if (qux === 1 || qux === 2) {
						yPos = -896;
						name = "Umbral Hammer";
						damage = 15;
						delay = 4500;
					}
					if (qux === 3 || qux === 4) {
						yPos = -960;
						name = "Thunder Maul";
						damage = 11;
						delay = 4500;
					}
					if (N >= 49 && N <= 76) {
						quality = 1;
						damage += 13;
					}
					if (N >= 77) {
						quality = 2;
						damage += 27;
					}
				}
				type = "smashed";
			} else { // staves
				xPos = 0;
				if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
					yPos = -640;
					name = "Staff";
					damage = 5;
					delay = 4800;
					if (N >= 49 && N <= 76) {
						quality = 1;
						damage += 15;
					}
					if (N >= 77) {
						quality = 2;
						damage += 30;
					}
				}
				if ((N > 12 && N <= 24) || (N >= 55 && N <= 62)
						|| (N >= 83 && N <= 88)) {
					if (qux === 1 || qux === 2) {
						yPos = -704;
						name = "Runic Staff";
						damage = 7;
						delay = 4600;
					}
					if (qux === 3 || qux === 4) {
						yPos = -768;
						name = "Cedar Staff";
						damage = 10;
						delay = 4500;
					}
					if (N >= 49 && N <= 76) {
						quality = 1;
						damage += 15;
					}
					if (N >= 77) {
						quality = 2;
						damage += 30;
					}
				}
				if ((N > 24 && N <= 36) || (N >= 63 && N <= 69)
						|| (N >= 89 && N <= 94)) {
					yPos = -832;
					name = "Quarterstaff";
					damage = 12;
					delay = 4600;
					if (N >= 49 && N <= 76) {
						quality = 1;
						damage += 14;
					}
					if (N >= 77) {
						quality = 2;
						damage += 30;
					}
				}
				if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
					if (qux === 1 || qux === 2) {
						yPos = -896;
						name = "Cosmic Staff";
						damage = 14;
						delay = 4600;
					}
					if (qux === 3 || qux === 4) {
						yPos = -960;
						name = "Archon Staff";
						damage = 11;
						delay = 4500;
					}
					if (N >= 49 && N <= 76) {
						quality = 1;
						damage += 13;
					}
					if (N >= 77) {
						quality = 2;
						damage += 27;
					}
				}
				type = "staff";
			}
		}
	}
	if (newItem === "shield") {
		xPos = -768;
		type = "shield";
		if (M.random() > .5) {
			if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
				if (qux === 1 || qux === 2) {
					foo = 6;
					yPos = 0;
					name = "Buckler";
				}
				if (qux === 3 || qux === 4) {
					foo = 13;
					yPos = -64;
					name = "Small Shield";
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					foo += 15;
				}
				if (N >= 77) {
					quality = 2;
					foo += 30;
				}
			}
			if ((N > 12 && N <= 24) || (N >= 55 && N <= 62)
					|| (N >= 83 && N <= 88)) {
				if (qux === 1 || qux === 2) {
					foo = 17;
					yPos = -128;
					name = "Kite Shield";
				}
				if (qux === 3 || qux === 4) {
					foo = 24;
					yPos = -192;
					name = "Round Shield";
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					foo += 24;
				}
				if (N >= 77) {
					quality = 2;
					foo += 48;
				}
			}
			if ((N > 24 && N <= 36) || (N >= 63 && N <= 69)
					|| (N >= 89 && N <= 94)) {
				if (qux === 1 || qux === 2) {
					foo = 26;
					yPos = -256;
					name = "Gothic Shield";
				}
				if (qux === 3 || qux === 4) {
					foo = 30;
					yPos = -320;
					name = "Crown Shield";
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					foo += 31;
				}
				if (N >= 77) {
					quality = 2;
					foo += 62;
				}
			}
			if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
				if (qux === 1 || qux === 2) {
					foo = 33;
					yPos = -384;
					name = "Aegis";
				}
				if (qux === 3 || qux === 4) {
					foo = 38;
					yPos = -448;
					name = "Monarch";
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					foo += 38;
				}
				if (N >= 77) {
					quality = 2;
					foo += 76;
				}
			}
		} else {
			type = "offhand";
			if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
				if (qux === 1 || qux === 2) {
					yPos = -512;
					name = "Stein";
				}
				if (qux === 3 || qux === 4) {
					yPos = -576;
					name = "Dark Orb";
				}
			}
			if ((N > 12 && N <= 24) || (N >= 55 && N <= 62)
					|| (N >= 83 && N <= 88)) {
				if (qux === 1 || qux === 2) {
					yPos = -640;
					name = "Ancient Tome";
				}
				if (qux === 3 || qux === 4) {
					yPos = -704;
					name = "Totem";
				}
			}
			if ((N > 24 && N <= 36) || (N >= 63 && N <= 69)
					|| (N >= 89 && N <= 94)) {
				if (qux === 1 || qux === 2) {
					yPos = -768;
					name = "Crystal Ball";
				}
				if (qux === 3 || qux === 4) {
					yPos = -832;
					name = "Skull";
				}
			}
			if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
				if (qux === 1 || qux === 2) {
					yPos = -896;
					name = "Emblazoned Orb";
				}
				if (qux === 3 || qux === 4) {
					yPos = -960;
					name = "Idol";
				}
			}
			if (N >= 49 && N <= 76) {
				quality = 1;
			}
			if (N >= 77) {
				quality = 2;
			}
		}
	}
	// bows and trinkets
	if (newItem === "range") {
		xPos = -704;
		if (M.random() < .7) {
			if (N <= 12 || (N >= 49 && N <= 54) || (N >= 77 && N <= 82)) {
				if (qux === 1 || qux === 2) {
					yPos = -512;
					name = "Short Bow";
					damage = 5;
					delay = 3900;
				}
				if (qux === 3 || qux === 4) {
					yPos = -512;
					name = "Hunter's Bow";
					damage = 6;
					delay = 4100;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 12;
				}
				if (N >= 77) {
					quality = 2;
					damage += 24;
				}
			}
			if ((N > 12 && N <= 24) || (N >= 55 && N <= 62)
					|| (N >= 83 && N <= 88)) {
				if (qux === 1 || qux === 2) {
					yPos = -576;
					name = "Composite Bow";
					damage = 7;
					delay = 4100;
				}
				if (qux === 3 || qux === 4) {
					yPos = -640;
					name = "Siege Bow";
					damage = 8;
					delay = 3900;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 12;
				}
				if (N >= 77) {
					quality = 2;
					damage += 25;
				}
			}
			if ((N > 24 && N <= 36) || (N >= 63 && N <= 69)
					|| (N >= 89 && N <= 94)) {
				if (qux === 1 || qux === 2) {
					yPos = -704;
					name = "Astral Bow";
					damage = 10;
					delay = 3900;
				}
				if (qux === 3 || qux === 4) {
					yPos = -704;
					name = "Gothic Bow";
					damage = 11;
					delay = 3700;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 11;
				}
				if (N >= 77) {
					quality = 2;
					damage += 24;
				}
			}
			if ((N > 36 && N <= 48) || (N >= 70 && N <= 76) || N >= 95) {
				if (qux === 1 || qux === 2) {
					yPos = -768;
					name = "Ward Bow";
					damage = 13;
					delay = 3800;
				}
				if (qux === 3 || qux === 4) {
					yPos = -768;
					name = "Hydra Bow";
					damage = 16;
					delay = 3900;
				}
				if (N >= 49 && N <= 76) {
					quality = 1;
					damage += 11;
				}
				if (N >= 77) {
					quality = 2;
					damage += 23;
				}
			}
			type = "range";
		} else {
			if (N <= 16 || (N >= 49 && N <= 58) || (N >= 77 && N <= 85)) {
				yPos = -832;
				name = "Trinket";
			}
			if ((N > 16 && N <= 32) || (N >= 59 && N <= 67)
					|| (N >= 86 && N <= 92)) {
				yPos = -896;
				name = "Memento";
			}
			if ((N > 32 && N <= 48) || (N >= 68 && N <= 76) || N >= 93) {
				yPos = -960;
				name = "Charm";
			}
			if (N >= 49 && N <= 76) {
				quality = 1;
			}
			if (N >= 77) {
				quality = 2;
			}
			type = "trinket";
		}
	}
	return [ M.ceil(foo), xPos, yPos, name, damage, delay, type, quality ];
}

function findFirstInvSlot() {
	var foo = false;
	for (var i = 23; i >= 0; i--) {
		if (!P.item[i].name) {
			foo = i;
		}
	}
	return foo;
}

function getRareName(newItem, newType, newName) {
	var foo = newName;
	var x = "Beast";
	var qux = ~~(1 + M.random() * 42);
	if (qux === 1) {
		x = "Armageddon";
	}
	if (qux === 2) {
		x = "Beast";
	}
	if (qux === 3) {
		x = "Bitter";
	}
	if (qux === 4) {
		x = "Blood";
	}
	if (qux === 5) {
		x = "Bone";
	}
	if (qux === 6) {
		x = "Bramble";
	}
	if (qux === 7) {
		x = "Brimstone";
	}
	if (qux === 8) {
		x = "Carrion";
	}
	if (qux === 9) {
		x = "Chaos";
	}
	if (qux === 10) {
		x = "Corpse";
	}
	if (qux === 11) {
		x = "Corruption";
	}
	if (qux === 12) {
		x = "Cruel";
	}
	if (qux === 13) {
		x = "Death";
	}
	if (qux === 14) {
		x = "Demon";
	}
	if (qux === 15) {
		x = "Dire";
	}
	if (qux === 16) {
		x = "Dread";
	}
	if (qux === 17) {
		x = "Doom";
	}
	if (qux === 11) {
		x = "Eagle";
	}
	if (qux === 19) {
		x = "Entropy";
	}
	if (qux === 20) {
		x = "Fiend";
	}
	if (qux === 21) {
		x = "Gale";
	}
	if (qux === 22) {
		x = "Ghoul";
	}
	if (qux === 23) {
		x = "Glyph";
	}
	if (qux === 24) {
		x = "Grim";
	}
	if (qux === 25) {
		x = "Hailstone";
	}
	if (qux === 26) {
		x = "Havoc";
	}
	if (qux === 27) {
		x = "Imp";
	}
	if (qux === 28) {
		x = "Loath";
	}
	if (qux === 29) {
		x = "Order";
	}
	if (qux === 30) {
		x = "Pain";
	}
	if (qux === 31) {
		x = "Plague";
	}
	if (qux === 32) {
		x = "Raven";
	}
	if (qux === 33) {
		x = "Rift";
	}
	if (qux === 34) {
		x = "Rune";
	}
	if (qux === 35) {
		x = "Shadow";
	}
	if (qux === 36) {
		x = "Skull";
	}
	if (qux === 37) {
		x = "Soul";
	}
	if (qux === 38) {
		x = "Spirit";
	}
	if (qux === 39) {
		x = "Stone";
	}
	if (qux === 40) {
		x = "Storm";
	}
	if (qux === 41) {
		x = "Viper";
	}
	if (qux === 42) {
		x = "Wraith";
	}
	var y = "Torc";
	if (newItem === "helmet") {
		var bar = ~~(1 + M.random() * (9));
		if (bar === 1) {
			y = "Brow";
		}
		if (bar === 2) {
			y = "Casque";
		}
		if (bar === 3) {
			y = "Cowl";
		}
		if (bar === 4) {
			y = "Crest";
		}
		if (bar === 5) {
			y = "Horn";
		}
		if (bar === 6) {
			y = "Mask";
		}
		if (bar === 7) {
			y = "Veil";
		}
		if (bar === 8) {
			y = "Visage";
		}
		if (bar === 9) {
			y = "Visor";
		}
	}
	if (newItem === "neck") {
		var bar = ~~(1 + M.random() * (9));
		if (bar === 1) {
			y = "Beads";
		}
		if (bar === 2) {
			y = "Collar";
		}
		if (bar === 3) {
			y = "Gorget";
		}
		if (bar === 4) {
			y = "Heart";
		}
		if (bar === 5) {
			y = "Necklace";
		}
		if (bar === 6) {
			y = "Noose";
		}
		if (bar === 7) {
			y = "Scarab";
		}
		if (bar === 8) {
			y = "Talisman";
		}
		if (bar === 9) {
			y = "Torc";
		}
	}
	if (newItem === "ring") {
		var bar = ~~(1 + M.random() * 16);
		if (bar === 1) {
			y = "Band";
		}
		if (bar === 2) {
			y = "Circle";
		}
		if (bar === 3) {
			y = "Coil";
		}
		if (bar === 4) {
			y = "Eye";
		}
		if (bar === 5) {
			y = "Finger";
		}
		if (bar === 6) {
			y = "Grasp";
		}
		if (bar === 7) {
			y = "Grip";
		}
		if (bar === 8) {
			y = "Gyre";
		}
		if (bar === 9) {
			y = "Hold";
		}
		if (bar === 10) {
			y = "Knuckle";
		}
		if (bar === 11) {
			y = "Loop";
		}
		if (bar === 12) {
			y = "Nails";
		}
		if (bar === 13) {
			y = "Spiral";
		}
		if (bar === 14) {
			y = "Touch";
		}
		if (bar === 15) {
			y = "Turn";
		}
		if (bar === 16) {
			y = "Whorl";
		}
	}
	if (newItem === "shoulders") {
		var bar = ~~(1 + M.random() * (7));
		if (bar === 1) {
			y = "Tabard";
		}
		if (bar === 2) {
			y = "Bulkhead";
		}
		if (bar === 3) {
			y = "Drape";
		}
		if (bar === 4) {
			y = "Stout";
		}
		if (bar === 5) {
			y = "Clavicle";
		}
		if (bar === 6) {
			y = "Awning";
		}
		if (bar === 7) {
			y = "Shelter";
		}
	}
	if (newItem === "back") {
		var bar = ~~(1 + M.random() * (7));
		if (bar === 1) {
			y = "Blind";
		}
		if (bar === 2) {
			y = "Guiser";
		}
		if (bar === 3) {
			y = "Manteau";
		}
		if (bar === 4) {
			y = "Capote";
		}
		if (bar === 5) {
			y = "Veneer";
		}
		if (bar === 6) {
			y = "Facade";
		}
		if (bar === 7) {
			y = "Talma";
		}
	}
	if (newItem === "chest") {
		var bar = ~~(1 + M.random() * (7));
		if (bar === 1) {
			y = "Carapace";
		}
		if (bar === 2) {
			y = "Hide";
		}
		if (bar === 3) {
			y = "Jack";
		}
		if (bar === 4) {
			y = "Pelt";
		}
		if (bar === 5) {
			y = "Shroud";
		}
		if (bar === 6) {
			y = "Suit";
		}
		if (bar === 7) {
			y = "Wrap";
		}
	}
	if (newItem === "bracers") {
		var bar = ~~(1 + M.random() * (8));
		if (bar === 1) {
			y = "Bracket";
		}
		if (bar === 2) {
			y = "Peg";
		}
		if (bar === 3) {
			y = "Grip";
		}
		if (bar === 4) {
			y = "Clamp";
		}
		if (bar === 5) {
			y = "Strut";
		}
		if (bar === 6) {
			y = "Splint";
		}
		if (bar === 7) {
			y = "Truss";
		}
		if (bar === 8) {
			y = "Vice";
		}
	}
	if (newItem === "gloves") {
		var bar = ~~(1 + M.random() * (9));
		if (bar === 1) {
			y = "Claw";
		}
		if (bar === 2) {
			y = "Clutches";
		}
		if (bar === 3) {
			y = "Finger";
		}
		if (bar === 4) {
			y = "Fist";
		}
		if (bar === 5) {
			y = "Grasp";
		}
		if (bar === 6) {
			y = "Grip";
		}
		if (bar === 7) {
			y = "Hand";
		}
		if (bar === 8) {
			y = "Touch";
		}
		if (bar === 9) {
			y = "Knuckle";
		}
	}
	if (newItem === "belt") {
		var bar = ~~(1 + M.random() * (10));
		if (bar === 1) {
			y = "Buckle";
		}
		if (bar === 2) {
			y = "Chain";
		}
		if (bar === 3) {
			y = "Clasp";
		}
		if (bar === 4) {
			y = "Cord";
		}
		if (bar === 5) {
			y = "Fringe";
		}
		if (bar === 6) {
			y = "Harness";
		}
		if (bar === 7) {
			y = "Lash";
		}
		if (bar === 8) {
			y = "Lock";
		}
		if (bar === 9) {
			y = "Strap";
		}
		if (bar === 10) {
			y = "Winding";
		}
	}
	if (newItem === "legs") {
		var bar = ~~(1 + M.random() * (7));
		if (bar === 1) {
			y = "Muster";
		}
		if (bar === 2) {
			y = "Join";
		}
		if (bar === 3) {
			y = "Cowl";
		}
		if (bar === 4) {
			y = "Pillar";
		}
		if (bar === 5) {
			y = "Support";
		}
		if (bar === 6) {
			y = "Trestle";
		}
		if (bar === 7) {
			y = "Stud";
		}
	}
	if (newItem === "boots") {
		var bar = ~~(1 + M.random() * (6));
		if (bar === 1) {
			y = "Treck";
		}
		if (bar === 2) {
			y = "Spur";
		}
		if (bar === 3) {
			y = "Fate";
		}
		if (bar === 4) {
			y = "Destiny";
		}
		if (bar === 5) {
			y = "Dare";
		}
		if (bar === 6) {
			y = "Hazard";
		}
	}
	if (newType === "slashed" || newType === "cleaved") {
		var bar = ~~(1 + M.random() * 11);
		if (bar === 1) {
			y = "Barb";
		}
		if (bar === 2) {
			y = "Bite";
		}
		if (bar === 3) {
			y = "Cleaver";
		}
		if (bar === 4) {
			y = "Edge";
		}
		if (bar === 5) {
			y = "Fang";
		}
		if (bar === 6) {
			y = "Gutter";
		}
		if (bar === 7) {
			y = "Impaler";
		}
		if (bar === 8) {
			y = "Needle";
		}
		if (bar === 9) {
			y = "Razor";
		}
		if (bar === 10) {
			y = "Saw";
		}
		if (bar === 11) {
			y = "Scalpel";
		}
		if (bar === 12) {
			y = "Scratch";
		}
		if (bar === 13) {
			y = "Scythe";
		}
		if (bar === 14) {
			y = "Sever";
		}
		if (bar === 15) {
			y = "Skewer";
		}
		if (bar === 16) {
			y = "Song";
		}
		if (bar === 17) {
			y = "Stinger";
		}
		if (bar === 11) {
			y = "Thirst";
		}
	}
	if (newType === "crushed" || newType === "smashed" || newType === "staff") {
		var bar = ~~(1 + M.random() * (12));
		if (bar === 1) {
			y = "Bane";
		}
		if (bar === 2) {
			y = "Blow";
		}
		if (bar === 3) {
			y = "Brand";
		}
		if (bar === 4) {
			y = "Break";
		}
		if (bar === 5) {
			y = "Crack";
		}
		if (bar === 6) {
			y = "Crusher";
		}
		if (bar === 7) {
			y = "Grinder";
		}
		if (bar === 8) {
			y = "Knell";
		}
		if (bar === 9) {
			y = "Mallet";
		}
		if (bar === 10) {
			y = "Ram";
		}
		if (bar === 11) {
			y = "Smasher";
		}
		if (bar === 12) {
			y = "Star";
		}
	}
	if (newType === "pierced") {
		var bar = ~~(1 + M.random() * 17);
		if (bar === 1) {
			y = "Barb";
		}
		if (bar === 2) {
			y = "Branch";
		}
		if (bar === 3) {
			y = "Dart";
		}
		if (bar === 4) {
			y = "Fang";
		}
		if (bar === 5) {
			y = "Goad";
		}
		if (bar === 6) {
			y = "Gutter";
		}
		if (bar === 7) {
			y = "Impaler";
		}
		if (bar === 8) {
			y = "Lance";
		}
		if (bar === 9) {
			y = "Nails";
		}
		if (bar === 10) {
			y = "Needle";
		}
		if (bar === 11) {
			y = "Prod";
		}
		if (bar === 12) {
			y = "Scourge";
		}
		if (bar === 13) {
			y = "Scratch";
		}
		if (bar === 14) {
			y = "Skewer";
		}
		if (bar === 15) {
			y = "Spike";
		}
		if (bar === 16) {
			y = "Stinger";
		}
		if (bar === 17) {
			y = "Wrack";
		}
	}
	if (newType === "staff") {
		var bar = ~~(1 + M.random() * (10));
		if (bar === 1) {
			y = "Branch";
		}
		if (bar === 2) {
			y = "Call";
		}
		if (bar === 3) {
			y = "Chant";
		}
		if (bar === 4) {
			y = "Cry";
		}
		if (bar === 5) {
			y = "Goad";
		}
		if (bar === 6) {
			y = "Gnarl";
		}
		if (bar === 7) {
			y = "Spell";
		}
		if (bar === 8) {
			y = "Spire";
		}
		if (bar === 9) {
			y = "Song";
		}
		if (bar === 10) {
			y = "Weaver";
		}
	}
	if (newType === "shield") {
		var bar = ~~(1 + M.random() * (9));
		if (bar === 1) {
			y = "Badge";
		}
		if (bar === 2) {
			y = "Emblem";
		}
		if (bar === 3) {
			y = "Guard";
		}
		if (bar === 4) {
			y = "Mark";
		}
		if (bar === 5) {
			y = "Rock";
		}
		if (bar === 6) {
			y = "Tower";
		}
		if (bar === 7) {
			y = "Ward";
		}
		if (bar === 8) {
			y = "Wing";
		}
		if (bar === 9) {
			y = "Bulwark";
		}
	}
	if (newType === "offhand") {
		var bar = ~~(1 + M.random() * (9));
		if (bar === 1) {
			y = "Globule";
		}
		if (bar === 2) {
			y = "Marble";
		}
		if (bar === 3) {
			y = "Star";
		}
		if (bar === 4) {
			y = "Crest";
		}
		if (bar === 5) {
			y = "Cycle";
		}
		if (bar === 6) {
			y = "Dust";
		}
		if (bar === 7) {
			y = "Smoke";
		}
		if (bar === 8) {
			y = "Void";
		}
		if (bar === 9) {
			y = "Tremor";
		}
	}
	if (newType === "range") {
		var bar = ~~(1 + M.random() * (9));
		if (bar === 1) {
			y = "Bolt";
		}
		if (bar === 2) {
			y = "Thirst";
		}
		if (bar === 3) {
			y = "Fletch";
		}
		if (bar === 4) {
			y = "Flight";
		}
		if (bar === 5) {
			y = "Horn";
		}
		if (bar === 6) {
			y = "Nock";
		}
		if (bar === 7) {
			y = "Quarrel";
		}
		if (bar === 8) {
			y = "Quill";
		}
		if (bar === 9) {
			y = "Stinger";
		}
	}
	if (newType === "trinket") {
		var bar = ~~(1 + M.random() * (7));
		if (bar === 1) {
			y = "Breaker";
		}
		if (bar === 2) {
			y = "Chant";
		}
		if (bar === 3) {
			y = "Cry";
		}
		if (bar === 4) {
			y = "Song";
		}
		if (bar === 5) {
			y = "Star";
		}
		if (bar === 6) {
			y = "Talisman";
		}
		if (bar === 7) {
			y = "Torc";
		}
	}
	foo = x + " " + y + " " + foo;
	return foo;
}

function getUniqueItem(NI, newItem, newTier, newType, newName, Slot, newQuality) {
	var I = P.item[NI];
	var N = newName;
	var nt = newType;
	var nT = newTier;
	var ni = newItem;
	if (newQuality === 0) {
		if (ni === "helmet") {
			if (N === "Hood") {
				I.name = "Glyphed Cowl";
				I.intel = 11;
				I.wis = 13;
				I.evocation = 4;
				I.channeling = 3;
				I.allStats = 5;
				I.mp = 30;
				I.req = 11;
			}
			if (N === "Cap") {
				I.name = "Rendo's Bonnet";
				I.enhancedArmor = 35;
				I.defense = 5;
				I.attack = 2;
				I.hp = 15;
				I.mp = 15;
			}
			if (N === "Bandana") {
				if (M.random() > .5) {
					I.name = "Laozen's Headband";
					I.enhancedArmor = 50;
					I.cold = 7;
					I.handtohand = 3;
					I.lightningDamage = 6;
					I.fear = 8;
					I.hp = 25;
					I.hpKill = 6;
					I.req = 11;
				} else {
					I.name = "Samurai's Devotion";
					I.armor = 25;
					I.allSkills = 2;
					I.dex = 15;
					I.str = 10;
					I.allResist = 6;
					I.fear = 15;
					I.req = 24;
					I.rarity = 4;
				}
			}
			if (N === "Diadem") {
				I.name = "Grandmaster's Crown";
				I.enhancedArmor = 75;
				I.dualWield = 5
				I.doubleAttack = 6;
				I.handtohand = 6;
				I.cold = 13
				I.allSkills = 1;
				I.phyMit = 3;
				I.allResist = 7;
				I.flavorText = "A thousand fists are not as strong as a tempered mind.";
				I.req = 32;
			}
			if (N === "Dark Hood") {
				var xyz = ~~(1 + M.random() * (2));
				if (xyz === 1) {
					I.name = "Reaper's Cowl";
					I.enhancedArmor = 55;
					I.conjuration = 5;
					I.mpKill = 6;
					I.silence = 13;
					I.hp = 15;
					I.mp = 30;
					I.resistCold = 15;
					I.critDamage = 6;
					I.req = 32;
				}
				if (xyz === 2) {
					I.name = "Executioner's Hood";
					I.enhancedArmor = 75;
					I.offense = 3;
					I.str = 14;
					I.dex = 11;
					I.critDamage = 6;
					I.cold = 13;
					I.riposte = 5;
					I.dualWield = 3;
					I.req = 34;
				}
			}
			if (N === "Coronet") {
				I.name = "Crown of King Argentus";
				I.enhancedArmor = 55;
				I.alteration = 5;
				I.channeling = 5;
				I.stun = 9;
				I.silence = 13;
				I.resistMagic = 20;
				I.cha = 15;
				I.twoHandBlunt = 6;
				I.req = 34;
			}
			if (N === "Miter") {
				if (M.random() > .5) {
					I.name = "Summoner's Beacon";
					I.enhancedArmor = 44;
					I.conjuration = 6;
					I.abjuration = 4;
					I.silence = 13;
					I.hp = 30;
					I.hpKill = 7;
					I.allResist = 9;
					I.lightRadius = 12;
					I.req = 34;
				} else {
					I.name = "Orator's Shout";
					I.enhancedArmor = 45;
					I.allSkills = 1;
					I.resistPoison = 30;
					I.resistLightning = 20;
					I.silence = 35;
					I.expFind = 12;
					I.req = 24;
					I.rarity = 4;
				}
			}
			if (N === "Astral Hood") {
				I.name = "Dragon Lord's Cowl";
				I.enhancedArmor = 40;
				I.absorbFire = 8;
				I.evocation = 7;
				I.enhanceFire = 3;
				I.silence = 13;
				I.hp = 25;
				I.mp = 35;
				I.critChance = 5;
				I.goldFind = 10;
				I.req = 34;
			}
			if (N === "Mail Hood") {
				if (M.random() > .5) {
					I.name = "Windstalker's Malice";
					I.enhancedArmor = 49;
					I.dualWield = 8;
					I.allSkills = 2;
					I.oneHandSlash = 3;
					I.allResist = 9;
					I.weight = 1;
					I.riposte = 5;
					I.flavorText = "A legendary warder's protective hood. Used in defense of rabid bears and wolves.";
					I.req = 26;
				} else {
					I.name = "Sage's Vision";
					I.enhancedArmor = 45;
					I.allSkills = 2;
					I.hp = 35;
					I.mpKill = 3;
					I.critChance = 3;
					I.critDamage = 7;
					I.req = 25;
					I.rarity = 4;
				}
			}
			if (N === "Coif") {
				I.name = "Coif of Glory";
				I.enhancedArmor = 42;
				I.allSkills = 1;
				I.goldFind = 11;
				I.resistLightning = 20;
				I.hpKill = 12;
				I.lightRadius = 9;
				I.thorns = 6;
				I.req = 16;
			}
			if (N === "Armet") {
				I.name = "Pride of Fenwoven";
				I.enhancedArmor = 43;
				I.conjuration = 5;
				I.alteration = 6;
				I.wis = 15;
				I.allResist = 5;
				I.resistCold = 21;
				I.wraith = 4;
				I.req = 20;
			}
			if (N === "Sallet") {
				I.name = "Dusky Visor";
				I.enhancedArmor = 50;
				I.weight = 1;
				I.physicalDamage = 8;
				I.allResist = 15;
				I.phyMit = 7;
				I.req = 22;
			}
			if (N === "Burgonet") {
				I.name = "Crested Helm";
				I.enhancedArmor = 42;
				I.allSkills = 1;
				I.dualWield = 5;
				I.alteration = 5;
				I.str = 11;
				I.cha = 14;
				I.req = 12;
			}
			if (N === "Great Helm") {
				if (M.random() > .5) {
					I.name = "Call of the Hero";
					I.enhancedArmor = 45;
					I.alteration = 5;
					I.allSkills = 1;
					I.allStats = 9;
					I.cold = 9;
					I.hpKill = 5;
					I.mpKill = 5;
					I.hp = 15;
					I.req = 15;
				} else {
					I.name = "Minotaur's Horns";
					I.enhancedArmor = 55;
					I.critChance = 4;
					I.phyMit = 3;
					I.stun = 12;
					I.resistCold = 20;
					I.resistLightning = 25;
					I.req = 24;
					I.rarity = 4;
				}
			}
			if (N === "Barbute") {
				I.name = "Wurmskull Barbute";
				I.enhancedArmor = 60;
				I.twoHandSlash = 7;
				I.twoHandBlunt = 7;
				I.resistMagic = 22;
				I.str = 22;
				I.hp = 45;
				I.req = 20;
			}
			if (N === "Royal Helm") {
				I.name = "Vor's Adulation";
				I.enhancedArmor = 50;
				I.defense = 4;
				I.allResist = 14;
				I.allStats = 9;
				I.wraith = 3;
				I.silence = 10;
				I.fear = 10;
				I.hpRegen = 3;
				I.req = 36;
			}
		}
		if (ni === "neck") {
			if (nT <= 16) {
				var zoo = ~~(1 + M.random() * (5));
				if (zoo === 1) {
					I.name = "Kordata Relic";
					I.globalHaste = -40;
					I.resistFire = 12;
					I.absorbFire = 4;
					I.fireDamage = 5;
					I.fear = 10;
					I.lightRadius = 5;
					I.req = 10;
				}
				if (zoo === 2) {
					I.name = "The Eye of Riltan";
					I.lightRadius = 4;
					I.allSkills = 1;
					I.hpKill = 9;
					I.coldDamage = 5;
					I.phyMit = 3;
					I.req = 11;
				}
				if (zoo === 3) {
					I.name = "The Arboretum Curio";
					I.armor = 10;
					I.attack = 10;
					I.allResist = 10;
					I.allStats = 10;
					I.req = 14;
				}
				if (zoo === 4) {
					I.name = "Chancellor's Remorse";
					I.abjuration = 4;
					I.conjuration = 4;
					I.resistCold = 20;
					I.allSkills = 1;
					I.mp = 35;
					I.req = 12;
					I.rarity = 4;
				}
				if (zoo === 5) {
					I.name = "Etched Granite Charm";
					I.str = 5;
					I.wis = 5;
					I.intel = 5;
					I.stun = 4;
					I.fear = 4;
					I.dodge = 2;
				}
			}
			if (nT > 16 && nT <= 32) {
				var zoo = ~~(1 + M.random() * (4));
				if (zoo === 1) {
					I.name = "Saracen's Guard";
					I.thorns = 9;
					I.allResist = 10;
					I.allStats = 8;
					I.req = 14;
				}
				if (zoo === 2) {
					I.name = "Magnate's Token";
					I.resistAll = 14;
					I.allStats = 5;
					I.allSkills = 2;
					I.enhanceFire = 3;
					I.req = 24;
					I.rarity = 4;
				}
				if (zoo === 3) {
					I.name = "Miner's Memento";
					I.hp = 25;
					I.mp = 25;
					I.dex = 16;
					I.goldFind = 15;
					I.allResist = 7;
					I.req = 20;
					I.rarity = 4;
				}
				if (zoo === 4) {
					I.name = "Martyr's Manifesto";
					I.allSkills = 2;
					I.agi = 11;
					I.critDamage = 6;
					I.critChance = 3;
					I.fear = 25;
					I.req = 22;
					I.rarity = 4;
				}
			}
			if (nT > 32) {
				var zoo = ~~(1 + M.random() * (4));
				if (zoo === 1) {
					I.name = "The Prowler's Eye";
					I.runSpeed = 15;
					I.haste = -60;
					I.armor = 25;
					I.dex = 20;
					I.req = 22;
				}
				if (zoo === 2) {
					I.name = "Wyvern's Scale";
					I.resistFire = 35;
					I.enhanceFire = 3;
					I.absorbFire = 2;
					I.hp = 33;
					I.mp = 55;
					I.evocation = 3;
					I.req = 20;
					I.rarity = 4;
				}
				if (zoo === 3) {
					I.name = "Enchanted Bone Collar";
					I.hp = 30;
					I.mp = 30;
					I.lightRadius = -3;
					I.armor = 8;
					I.stun = 8;
					I.twoHandBlunt = 3;
					I.req = 24;
				}
				if (zoo === 4) {
					I.name = "Anuran Talisman";
					I.intel = 10;
					I.wis = 10;
					I.mp = 35;
					I.mpKill = 5;
					I.dex = 8;
					I.critDamage = 7;
					I.req = 26;
					I.xPos = 0;
					I.yPos = -64;
				}
			}
		}
		if (ni === "ring") {
			if (nT <= 16) {
				var zoo = ~~(1 + M.random() * (4));
				if (zoo === 1) {
					I.name = "Samurai's Fidelity";
					I.leech = 3;
					I.wraith = 3;
					I.hpKill = 5;
					I.resistCold = 25;
					I.resistLightning = 25;
					I.mp = 25;
					I.req = 12;
					I.rarity = 4;
				}
				if (zoo === 2) {
					I.name = "Magnate's Curio";
					I.resistLightning = 20;
					I.castingHaste = -40;
					I.magMit = 3;
					I.phyMit = 3;
					I.stun = 8;
					I.fear = 8;
					I.silence = 8;
					I.req = 12;
					I.rarity = 4;
				}
				if (zoo === 3) {
					I.name = "Vagabond's Seal";
					I.resistCold = 24;
					I.offense = 5;
					I.str = 15;
					I.parry = 3;
					I.hp = 25;
					I.enhancePhysical = 2;
					I.req = 12;
					I.rarity = 4;
				}
				if (zoo === 4) {
					I.name = "Bishop's Faith";
					I.wraith = 4;
					I.silence = 15;
					I.expFind = 8;
					I.allSkills = 1;
					I.alteration = 6;
					I.req = 12;
					I.rarity = 4;
				}
			}
			if (nT > 16 && nT <= 32) {
				var zoo = ~~(1 + M.random() * (4));
				if (zoo === 1) {
					if (M.random() > .5) {
						I.name = "Stone of Artremia";
						I.allSkills = 1;
						I.mpKill = 5;
						I.lightningDamage = 6;
						I.mp = 25;
						I.req = 15;
						I.silence = 7;
						I.wraith = 5;
						I.flavorText = "An enchanted ring worn by elven elites.";
					} else {
						I.name = "Miner's Glimmer";
						I.mpRegen = 2;
						I.magMit = 4;
						I.runSpeed = 12;
						I.silence = 16;
						I.allStats = 6;
						I.req = 8;
						I.rarity = 4;
					}
				}
				if (zoo === 2) {
					I.name = "Jagged Band";
					I.str = 12;
					I.armor = 5;
					I.parry = 3;
					I.thorns = 5;
					I.critDamage = 5;
					I.req = 12;
				}
				if (zoo === 3) {
					I.name = "Ring of Howling Thicket";
					I.armor = 6;
					I.wis = 10;
					I.intel = 10;
					I.resistPoison = 13;
					I.wraith = 3;
					I.dex = 5;
					I.alteration = 3;
					I.req = 13;
				}
				if (zoo === 4) {
					I.name = "Beryl Skull Ring";
					I.hp = 25;
					I.mp = 20;
					I.cha = -5;
					I.hpKill = 12;
					I.leech = 3;
					I.physicalDamage = 5;
					I.critDamage = 6;
					I.req = 11;
				}
			}
			if (nT > 32) {
				var zoo = ~~(1 + M.random() * (4));
				if (zoo === 1) {
					I.name = "Blazing Star";
					I.hp = 30;
					I.dodge = 2;
					I.absorbFire = 5;
					I.magMit = 5;
					I.goldFind = 10;
					I.silence = 10;
					I.req = 21;
				}
				if (zoo === 2) {
					I.name = "Crow's Frost";
					I.attack = 13;
					I.coldDamage = 9;
					I.dex = 11;
					I.mp = 30;
					I.cold = 13;
					I.absorbCold = 6;
					I.req = 24;
				}
				if (zoo === 3) {
					I.name = "Moonstone Band";
					I.str = 5;
					I.mp = 30;
					I.wis = 12;
					I.evocation = 3;
					I.alteration = 3;
					I.conjuration = 3;
					I.silence = 10;
					I.wraith = 3;
					I.req = 25;
				}
				if (zoo === 4) {
					if (M.random() > .5) {
						I.name = "Ovext's Amethyst Ring";
						I.hp = 35;
						I.agi = 15;
						I.dex = 5;
						I.critChance = 3;
						I.critDamage = 5;
						I.resistFire = 13;
						I.wraith = 3;
						I.req = 28;
					} else {
						I.name = "Miner's Shard";
						I.hpKill = 6;
						I.str = 20;
						I.sta = 12;
						I.cold = 15;
						I.globalHaste = -50;
						I.req = 8;
						I.rarity = 4;
					}
				}
			}
		}
		if (ni === "shoulders") {
			if (N === "Cloth Drape") {
				I.name = "Gilded Cloth";
				I.enhancedArmor = 11;
				I.intel = 13;
				I.wis = 8;
				I.alteration = 2;
				I.silence = 7;
				I.critChance = 2;
				I.resistMagic = 7;
			}
			if (N === "Woven Drape") {
				I.name = "Pegasus Feather Drape";
				I.enhancedArmor = 30;
				I.globalHaste = -30;
				I.agi = 5;
				I.dex = 15;
				I.resistLightning = 12;
				I.absorbLightning = 3;
				I.runSpeed = 9;
				I.xPos = -192;
				I.yPos = -128;
			}
			if (N === "Azure Shawl") {
				I.name = "Ringwraith's Amice";
				I.enhancedArmor = 40;
				I.conjuration = 4;
				I.alteration = 3;
				I.dex = 11;
				I.mpKill = 5;
				I.coldDamage = 7;
				I.silence = 9;
				I.allResist = 12;
				I.lightRadius = -10;
				I.req = 11;
			}
			if (N === "Archon Shawl") {
				I.name = "Riptide Shawl";
				I.enhancedArmor = 44;
				I.mp = 32;
				I.sta = 5;
				I.critDamage = 8;
				I.resistCold = 11;
				I.evocation = 4;
				I.channeling = 3;
				I.req = 22;
			}
			if (N === "Leather Shoulders") {
				I.name = "Lizardscale Mantle";
				I.enhancedArmor = 27;
				I.alteration = 2;
				I.wis = 5;
				I.intel = 5;
				I.resistPoison = 7;
				I.defense = 2;
				I.resistFire = 7;
			}
			if (N === "Studded Shoulders") {
				I.name = "Vagrant's Timber";
				I.armor = 20;
				I.allResist = 12;
				I.thorns = 12;
				I.mpRegen = 2;
				I.sta = 12;
				I.resistCold = 15;
				I.resistMagic = 15;
				I.resistPoison = 12;
				I.req = 11;
				I.rarity = 4;
			}
			if (N === "Spiked Shoulders") {
				I.name = "Tanaden's Spiked Shoulderpads";
				I.enhancedArmor = 45;
				I.hp = 15;
				I.agi = 15;
				I.stun = 10;
				I.offense = 2;
				I.attack = 2;
				I.leech = 3;
				I.allResist = 5;
				I.req = 16;
			}
			if (N === "Brigand Shoulders") {
				I.name = "Prayer Shawl";
				I.enhancedArmor = 45;
				I.hp = 35;
				I.wis = 20;
				I.dex = 5;
				I.absorbMagic = 3;
				I.silence = 7;
				I.alteration = 4;
				I.fear = 12;
				I.req = 23;
			}
			if (N === "Scaled Mantle") {
				I.name = "Guardian's Bulwark";
				I.enhancedArmor = 30;
				I.mp = 16;
				I.wis = 8;
				I.dex = 5;
				I.expFind = 7;
				I.silence = 7;
				I.poisonDamage = 5;
			}
			if (N === "Chain Mantle") {
				I.name = "Bloodstained Mantle";
				I.enhancedArmor = 28;
				I.fear = 5;
				I.str = 7;
				I.resistMagic = 12;
				I.hpKill = 4;
				I.leech = 3;
				I.doubleAttack = 3;
				I.attack = 2;
				I.req = 12;
			}
			if (N === "Kusari Mantle") {
				I.name = "Matsuwari's Solace";
				I.enhancedArmor = 35;
				I.hp = 20;
				I.agi = 10;
				I.dex = 10;
				I.critChance = 3;
				I.phyMit = 5;
				I.fear = 9;
				I.req = 11;
			}
			if (N === "Laminar Mantle") {
				I.name = "Frostwalker's Covenant";
				I.enhancedArmor = 41;
				I.hp = 35;
				I.wis = 15;
				I.twoHandBlunt = 5;
				I.cold = 13;
				I.conjuration = 4;
				I.resistCold = 13;
				I.resistPoison = 13;
				I.req = 24;
			}
			if (N === "Cobalt Spaulders") {
				I.name = "Blackened Iron Spaulders";
				I.enhancedArmor = 40;
				I.hp = 10;
				I.defense = 2;
				I.oneHandBlunt = 2;
				I.oneHandSlash = 2;
				I.str = 5;
				I.thorns = 2;
			}
			if (N === "Mithril Pauldrons") {
				I.name = "Minotaur's Sprawl";
				I.enhancedArmor = 30;
				I.oneHandSlash = 2;
				I.hpKill = 6;
				I.lightRadius = 7;
				I.str = 15;
				I.critDamage = 12;
				I.req = 12;
				I.rarity = 4;
			}
			if (N === "Sode") {
				I.name = "Golem's Shelf";
				I.enhancedArmor = 38;
				I.abjuration = 3;
				I.resistMagic = 25;
				I.mp = 20;
				I.oneHandBlunt = 3;
				I.req = 15;
				I.rarity = 4;
			}
			if (N === "Monarch Pauldrons") {
				I.name = "Carnal Pauldrons";
				I.enhancedArmor = 45;
				I.mp = 25;
				I.mpRegen = 1;
				I.dex = 11;
				I.magMit = 5;
				I.allResist = 10;
				I.fear = 11;
				I.req = 25;
			}
		}
		if (ni === "back") {
			if (N === "Cape") {
				I.name = "Arctic Cloak";
				I.expFind = 2;
				I.attack = 4;
				I.dex = 5;
				I.abjuration = 2;
				I.coldDamage = 4;
				I.resistCold = 7;
				I.cold = 9;
			}
			if (N === "Cloak") {
				I.name = "Lizardscale Cloak";
				I.mpKill = 2;
				I.intel = 7;
				I.abjuration = 1;
				I.alteration = 2;
				I.critDamage = 5;
				I.resistPoison = 7;
			}
			if (N === "Woven Cloak") {
				I.name = "Gossamer Cloak";
				I.dodge = 2;
				I.intel = 8;
				I.wis = 6;
				I.channeling = 4;
				I.phyMit = 4;
				I.resistLightning = 8;
				I.resistPoison = 8;
				I.silence = 9;
			}
			if (N === "Fur-Lined Cloak") {
				I.name = "Vagrant's Copse";
				I.castingHaste = -80;
				I.silence = 30;
				I.wis = 20;
				I.enhanceFire = 5;
				I.hpRegen = 2;
				I.critChance = 3;
				I.req = 15;
				I.rarity = 4;
			}
			if (N === "Drake-hide Cloak") {
				I.name = "Highwayman's Cloak";
				I.goldFind = 13;
				I.dex = 10;
				I.dodge = 2;
				I.parry = 2;
				I.piercing = 3;
				I.physicalDamage = 2;
				I.req = 12;
			}
			if (N === "Brigand's Shroud") {
				I.name = "Cloak of the Polar Bear";
				I.hp = 20;
				I.coldDamage = 2;
				I.magMit = 2;
				I.absorbCold = 3;
				I.twoHandSlash = 2;
				I.twoHandBlunt = 2;
				I.cold = 13;
				I.resistCold = 25;
				I.req = 14;
			}
			if (N === "Regal Shroud") {
				if (M.random() > .5) {
					I.name = "Molten Cloak";
					I.thorns = 3;
					I.intel = 13;
					I.absorbFire = 2;
					I.evocation = 2;
					I.critChance = 2;
					I.resistFire = 21;
					I.req = 15;
				} else {
					I.name = "Samurai's Ardor";
					I.haste = -50;
					I.globalHaste = -50;
					I.allStats = 7;
					I.critChance = 5;
					I.req = 12;
					I.rarity = 4;
				}
			}
			if (N === "Orcish Cloak") {
				I.name = "Ominous Black Cloak";
				I.hp = 45;
				I.str = 5;
				I.alteration = 2;
				I.oneHandBlunt = 2;
				I.oneHandSlash = 2;
				I.piercing = 2;
				I.req = 11;
			}
			if (N === "Elven Shroud") {
				I.name = "Grovecaller's Shroud";
				I.conjuration = 3;
				I.absorbLightning = 2;
				I.agi = 13;
				I.dex = 13;
				I.oneHandSlash = 5;
				I.resistFire = 9;
				I.resistLightning = 17;
				I.req = 11;
			}
			if (N === "Emerald Cloak") {
				I.name = "Cloak of Leaves";
				I.wis = 13;
				I.alteration = 3;
				I.thorns = 5;
				I.conjuration = 2;
				I.critDamage = 7;
				I.resistLightning = 9;
				I.silence = 9;
				I.req = 11;
			}
			if (N === "Aviak Cloak") {
				I.name = "Seahorse Scale Cloak";
				I.attack = 3;
				I.channeling = 3;
				I.abjuration = 3;
				I.dex = 12;
				I.mpKill = 6;
				I.coldDamage = 3;
				I.resistCold = 21;
				I.req = 21;
			}
			if (N === "Chlamys") {
				I.name = "Tribal Warfare Cloak";
				I.goldFind = 15;
				I.str = 14;
				I.agi = 8;
				I.piercing = 3;
				I.alteration = 3;
				I.critChance = 3;
				I.allResist = 9;
				I.req = 21;
			}
			if (N === "Dragon Cape") {
				if (M.random() > .5) {
					I.name = "Cloak of Qalon";
					I.dex = 9;
					I.agi = 9;
					I.haste = -60;
					I.handtohand = 4;
					I.offense = 2;
					I.oneHandSlash = 3;
					I.fireDamage = 2;
					I.resistFire = 14;
					I.req = 26;
				} else {
					I.name = "Magmashroud";
					I.dex = 16;
					I.agi = 16;
					I.haste = -150;
					I.handtohand = 4;
					I.offense = 3;
					I.fireDamage = 7;
					I.resistFire = 28;
					I.flavorText = "The royal cape of Highlord Szarthax. Stolen by a dwarven rogue with a reckless disdain for his own life.";
					I.req = 32;
				}
			}
			if (N === "Umbral Shroud") {
				I.name = "Wyvern's Wing";
				I.defense = 6;
				I.hp = 20;
				I.agi = 23;
				I.silence = 25;
				I.expFind = 12;
				I.alteration = 5;
				I.critDamage = 5;
				I.req = 17;
				I.rarity = 4;
			}
			if (N === "Archon Cloak") {
				I.name = "Cloak of Icing Death";
				I.twoHandSlash = 3;
				I.allStats = 9;
				I.magMit = 8;
				I.resistCold = 17;
				I.cold = 17;
				I.coldDamage = 5;
				I.absorbCold = 5;
				I.flavorText = "A cape used in Dragon ceremonies to bury Tetrarchs of the Scaled Order.";
				I.req = 35;
			}
			if (N === "Astral Cloak") {
				I.name = "Soothsayer's Ethereal Cloak";
				I.twoHandBlunt = 3;
				I.alteration = 4;
				I.allResist = 9;
				I.allStats = 8;
				I.allSkills = 1;
				I.fear = 9;
				I.stun = 9;
				I.silence = 16;
				I.flavorText = "A slumbering inter-dimensional dragon sleeps quietly, waiting to shatter the world.";
				I.req = 38;
			}
		}
		if (ni === "chest") {
			if (N === "Elven Robe") {
				I.name = "Green Silken Drape";
				I.enhancedArmor = 25;
				I.sta = 9;
				I.dex = 10;
				I.intel = 5;
				I.resistPoison = 9;
				I.stun = 2;
			}
			if (N === "Silk Robe") {
				if (M.random() > .5) {
					I.name = "Heavenly Garb";
					I.enhancedArmor = 33;
					I.mp = 21;
					I.mpRegen = 2;
					I.allResist = 7;
					I.enhanceMagic = 3;
					I.silence = 9;
					I.req = 12;
				} else {
					I.name = "Chancellor's Ceremony";
					I.armor = 22;
					I.allResist = 10;
					I.allStats = 9;
					I.hpRegen = 5;
					I.mpRegen = 5;
					I.intel = 10;
					I.req = 25;
					I.rarity = 4;
				}
			}
			if (N === "Linen Robe") {
				I.name = "Orator's Whisper";
				I.enhancedArmor = 45;
				I.mp = 75;
				I.hp = 30;
				I.intel = 25;
				I.conjuration = 5;
				I.req = 26;
				I.rarity = 4;
			}
			if (N === "Azure Robe") {
				var qux = ~~(1 + M.random() * (2));
				if (qux === 1) {
					I.name = "Metallic-Plated Robe";
					I.enhancedArmor = 55;
					I.intel = 11;
					I.agi = 11;
					I.evocation = 3;
					I.castingHaste = -50;
					I.mpKill = 5;
					I.resistCold = 10;
					I.resistFire = 10;
					I.enhanceCold = 5;
					I.silence = 12;
					I.req = 26;
					I.xPos = -256;
					I.yPos = -128;
				} else {
					I.name = "Robe of the Seer";
					I.enhancedArmor = 55;
					I.mp = 30;
					I.intel = 11;
					I.wis = 11;
					I.evocation = 4;
					I.conjuration = 3;
					I.enhanceLightning = 5;
					I.silence = 13;
					I.req = 32;
				}
			}
			if (N === "Quilted Tunic") {
				I.name = "Foreman's Tunic";
				I.enhancedArmor = 30;
				I.handtohand = 2;
				I.wis = 12;
				I.str = 12;
				I.dodge = 2;
				I.weight = 1;
				I.defense = 2;
				I.physicalDamage = 4;
			}
			if (N === "Spiked Vestment") {
				I.name = "Ripjaw Hide Vest";
				I.enhancedArmor = 42;
				I.attack = 3;
				I.sta = 11;
				I.handtohand = 3;
				I.stun = 8;
				I.globalHaste = -50;
				I.weight = 1;
				I.req = 11;
			}
			if (N === "Leather Armor") {
				I.name = "Twitchthrash";
				I.enhancedArmor = 39;
				I.haste = -30;
				I.twoHandBlunt = 2;
				I.runSpeed = 10;
				I.dex = 14;
				I.str = 14;
				I.resistPoison = 17;
				I.req = 16;
			}
			if (N === "Studded Leather") {
				I.name = "Brown Chitin Shell";
				I.enhancedArmor = 45;
				I.dex = 11;
				I.sta = 11;
				I.agi = 11;
				I.abjuration = 2;
				I.alteration = 3;
				I.defense = 3;
				I.phyMit = 5;
				I.silence = 24;
				I.req = 22;
			}
			if (N === "Chain Mail") {
				I.name = "Samurai's Duty";
				I.armor = 45;
				I.dodge = 5;
				I.defense = 5;
				I.parry = 5;
				I.riposte = 5;
				I.allResist = 11;
				I.hp = 35;
				I.req = 12;
				I.rarity = 4;
			}
			if (N === "Ring Mail") {
				I.name = "Eagle Claw Armor";
				I.enhancedArmor = 34;
				I.hp = 17;
				I.poisonDamage = 3;
				I.hpKill = 5;
				I.runSpeed = 9;
				I.absorbCold = 4;
				I.resistCold = 14;
				I.cold = 13;
				I.req = 10;
			}
			if (N === "Scale Mail") {
				I.name = "Frost Flicker";
				I.enhancedArmor = 30;
				I.conjuration = 4;
				I.twoHandBlunt = 5;
				I.wis = 17;
				I.coldDamage = 5;
				I.resistCold = 17;
				I.magMit = 3;
				I.lightRadius = 5;
				I.cold = 11;
				I.req = 15;
			}
			if (N === "Kusari Mail") {
				I.name = "Fencer's Tunic";
				I.enhancedArmor = 40;
				I.str = 19;
				I.sta = 12;
				I.weight = 1;
				I.oneHandSlash = 3;
				I.piercing = 3;
				I.globalHaste = -80;
				I.allSkills = 1;
				I.physicalDamage = 7;
				I.silence = 7;
				I.req = 23;
			}
			if (N === "Breast Plate") {
				I.name = "Gravelstone Coat";
				I.enhancedArmor = 30;
				I.hp = 20;
				I.str = 8;
				I.defense = 2;
				I.expFind = 5;
				I.phyMit = 7;
				I.weight = 1;
			}
			if (N === "Cuirass") {
				I.name = "Chestplate of the Blooddrinker";
				I.enhancedArmor = 30;
				I.str = 17;
				I.allSkills = 1;
				I.resistFire = 11;
				I.dualWield = 3;
				I.evocation = 2;
				I.alteration = 2;
				I.req = 14;
			}
			if (N === "Gothic Plate") {
				I.name = "Dahlia's Chestplate";
				I.enhancedArmor = 50;
				I.hpRegen = 5;
				I.hpKill = 5;
				I.leech = 4;
				I.allResist = 9;
				I.allSkills = 2;
				I.abjuration = 4;
				I.flavorText = "A mythical breastplate discovered by the lizardmen of Temple of Prenssor. Often rumored to be a legend, but it has recently been discovered once again.";
				I.req = 23;
			}
			if (N === "Archon Plate") {
				if (M.random() > .5) {
					I.name = "Silks of the Guardian";
					I.enhancedArmor = 50;
					I.dex = 13;
					I.resistMagic = 17;
					I.wraith = 3;
					I.mpKill = 5;
					I.absorbLightning = 8;
					I.silence = 9;
					I.hpKill = 10;
					I.magicDamage = 8;
					I.lightRadius = 7;
					I.allSkills = 1;
					I.req = 34;
				} else {
					I.name = "Golem's Ore";
					I.enhancedArmor = 45;
					I.enhanceMagic = 3;
					I.leech = 3;
					I.sta = 25;
					I.mp = 33;
					I.resistPoison = 15;
					I.allSkills = 1;
					I.req = 15;
					I.rarity = 4;
				}
			}
		}
		if (ni === "bracers") {
			if (N === "Jade Bracers") {
				I.name = "Gilded Jade Bracelet";
				I.enhancedArmor = 28;
				I.hp = 16;
				I.wis = 10;
				I.evocation = 2;
				I.channeling = 3;
				I.conjuration = 3;
				I.lightRadius = 4;
			}
			if (N === "Bone Bracers") {
				I.name = "Burnished Bone Bracelet";
				I.enhancedArmor = 35;
				I.mp = 21;
				I.wis = 12;
				I.intel = 12;
				I.resistMagic = 9;
				I.silence = 12;
				I.critDamage = 5;
				I.channeling = 2;
				I.req = 10;
			}
			if (N === "Sapphire Bracers") {
				I.name = "Bracelet of Woven Silk";
				I.enhancedArmor = 30;
				I.hp = 17;
				I.wis = 5;
				I.intel = 10;
				I.resistLightning = 9;
				I.thorns = 3;
				I.silence = 9;
				I.castingHaste = -40;
				I.channeling = 2;
				I.req = 11;
			}
			if (N === "Opulent Bracers") {
				I.name = "Orator's Entreat";
				I.enhancedArmor = 45;
				I.resistFire = 15;
				I.sta = 12;
				I.dex = 9;
				I.fear = 10;
				I.stun = 15;
				I.dodge = 5;
				I.req = 17;
				I.rarity = 4;
			}
			if (N === "Leather Bracers") {
				I.name = "Bracers of Battle";
				I.enhancedArmor = 25;
				I.attack = 3;
				I.str = 3;
				I.dex = 9;
				I.twoHandSlash = 2;
				I.physicalDamage = 2;
				I.flavorText = "The bracers of an orc warlord that patrols Lanfeld Outpost's perimeter.";
			}
			if (N === "Patent Bracers") {
				I.name = "Ivory Bracelet";
				I.enhancedArmor = 33;
				I.mp = 11;
				I.agi = 12;
				I.hpRegen = 1;
				I.expFind = 5;
				I.goldFind = 5;
				I.critDamage = 5;
				I.stun = 5;
				I.req = 11;
			}
			if (N === "Bonded Bracers") {
				I.name = "Granite Bracer";
				I.enhancedArmor = 42;
				I.hp = 10;
				I.str = 7;
				I.sta = 12;
				I.weight = 1;
				I.stun = 10;
				I.cold = 12;
				I.phyMit = 4;
				I.req = 16;
			}
			if (N === "Elven Bracers") {
				I.name = "Serpentine Bracer";
				I.enhancedArmor = 40;
				I.mpRegen = 2;
				I.agi = 16;
				I.dex = 10;
				I.castingHaste = -40;
				I.dodge = 2;
				I.resistPoison = 12;
				I.wraith = 3;
				I.req = 22;
			}
			if (N === "Scaled Bracers") {
				I.name = "Basilisk Bracer";
				I.enhancedArmor = 28;
				I.hp = 12;
				I.wis = 10;
				I.agi = 5;
				I.cold = 9;
				I.stun = 13;
				I.oneHandBlunt = 2;
				I.abjuration = 2;
			}
			if (N === "Laminar Bracers") {
				I.name = "Runed Adamantium Bracer";
				I.enhancedArmor = 40;
				I.mpKill = 5;
				I.wis = 14;
				I.str = 5;
				I.magMit = 2;
				I.silence = 13;
				I.magicDamage = 2;
				I.weight = 1;
				I.req = 11;
			}
			if (N === "Splinted Bracers") {
				I.name = "Martyr's Agony";
				I.enhancedArmor = 55;
				I.haste = -50;
				I.dex = 13;
				I.hp = 12;
				I.stun = 10;
				I.dualWield = 4;
				I.req = 12;
				I.rarity = 4;
			}
			if (N === "Kusari Bracers") {
				if (M.random() > .5) {
					I.name = "Dragon Bane Bracer";
					I.enhancedArmor = 36;
					I.str = 14;
					I.agi = 9;
					I.abjuration = 3;
					I.piercing = 2;
					I.resistFire = 9;
					I.resistMagic = 9;
					I.resistCold = 9;
					I.leech = 3;
					I.req = 25;
				} else {
					I.name = "Emissary's Dispute";
					I.enhancedArmor = 45;
					I.resistLightning = 30;
					I.silence = 15;
					I.fear = 15;
					I.parry = 3;
					I.offense = 5;
					I.hp = 11;
					I.req = 11;
					I.rarity = 4;
				}
			}
			if (N === "Bronze Bracers") {
				I.name = "Chief Grimden's Bracer";
				I.enhancedArmor = 25;
				I.hp = 16;
				I.str = 8;
				I.hpKill = 3;
				I.expFind = 4;
				I.physicalDamage = 2;
				I.flavorText = "Formerly used by a wood elf that dared to spy on Lanfeld Outpost, it was later kept by Chief Grimden as a trophy.";
				I.runSpeed = 5;
			}
			if (N === "Cobalt Bracers") {
				I.name = "Arbiter's Galvanized Bracer";
				I.enhancedArmor = 35;
				I.mp = 10;
				I.alteration = 3;
				I.defense = 3;
				I.abjuration = 2;
				I.oneHandBlunt = 5;
				I.req = 12;
			}
			if (N === "Tetrarch Bracers") {
				I.name = "Dragon Claw Bracer";
				I.enhancedArmor = 30;
				I.mp = 11;
				I.hp = 9;
				I.critChance = 3;
				I.hpKill = 5;
				I.weight = 1;
				I.thorns = 4;
				I.allResist = 8;
				I.leech = 3;
				I.req = 20;
			}
			if (N === "Gilded Bracers") {
				I.name = "Scaled Brass Bracer";
				I.enhancedArmor = 50;
				I.fear = 9;
				I.silence = 12;
				I.cha = 25;
				I.critDamage = 9;
				I.oneHandSlash = 2;
				I.dex = 12;
				I.allResist = 9;
				I.req = 26;
			}
		}
		if (ni === "gloves") {
			if (N === "Gloves") {
				I.name = "The Hand of Armetrin";
				I.enhancedArmor = 34;
				I.mp = 13;
				I.mpRegen = 1;
				I.leech = 3;
				I.hpKill = 2;
				I.mpKill = 2;
				I.defense = 2;
				I.resistPoison = 8;
			}
			if (N === "Cloth Gloves") {
				I.name = "Dusty Bloodstained Gloves";
				I.enhancedArmor = 30;
				I.mp = 21;
				I.intel = 12;
				I.evocation = 2;
				I.channeling = 3;
				I.resistMagic = 9;
				I.resistLightning = 9;
				I.req = 12;
			}
			if (N === "Woven Gloves") {
				I.name = "Gauntlets of Omnipotence";
				I.enhancedArmor = 37;
				I.evocation = 3;
				I.intel = 12;
				I.mpKill = 5;
				I.enhanceCold = 4;
				I.resistCold = 11;
				I.silence = 7;
				I.castingHaste = -60;
				I.req = 19;
			}
			if (N === "Mesh Gloves") {
				I.name = "Luminescent Touch";
				I.enhancedArmor = 28;
				I.hp = 12;
				I.critChance = 2;
				I.critDamage = 5;
				I.allStats = 5;
				I.allResist = 7;
				I.castingHaste = -40;
				I.req = 26;
			}
			if (N === "Rawhide Gloves") {
				I.name = "Bloodfist Gloves";
				I.enhancedArmor = 35;
				I.hp = 25;
				I.haste = -30;
				I.globalHaste = -30;
				I.oneHandBlunt = 2;
				I.leech = 3;
				I.defense = 3;
				I.physicalDamage = 5;
			}
			if (N === "Drakescale Gloves") {
				if (M.random() > .5) {
					I.name = "Greenthorn Hide Gloves";
					I.enhancedArmor = 24;
					I.hp = 21;
					I.mp = 14;
					I.dex = 9;
					I.sta = 9;
					I.dodge = 3;
					I.conjuration = 2;
					I.resistPoison = 14;
					I.req = 13;
				} else {
					I.name = "Vagabond's Survey";
					I.armor = 22;
					I.resistPoison = 20;
					I.haste = -70;
					I.fireDamage = 7;
					I.str = 24;
					I.stun = 30;
					I.req = 22;
					I.rarity = 4;
				}
			}
			if (N === "Sharkskin Gloves") {
				I.name = "Griffon Talon Gloves";
				I.enhancedArmor = 33;
				I.mp = 16;
				I.haste = -40;
				I.hpKill = 3;
				I.leech = 3;
				I.offense = 3;
				I.parry = 3;
				I.resistLightning = 12;
				I.req = 11;
			}
			if (N === "Studded Gloves") {
				if (M.random() > .5) {
					I.name = "Impskin Gloves";
					I.enhancedArmor = 45;
					I.mp = 21;
					I.wis = 12;
					I.leech = 2;
					I.intel = 12;
					I.leech = 3;
					I.silence = 7;
					I.lightRadius = 6;
					I.resistPoison = 10;
					I.resistFire = 11;
					I.req = 22;
				} else {
					I.name = "Lupine Serrated Gauntlets";
					I.enhancedArmor = 38;
					I.haste = -50;
					I.critChance = 4;
					I.lightningDamage = 3;
					I.leech = 3;
					I.resistLightning = 10;
					I.handtohand = 3;
					I.str = 10;
					I.req = 20;
				}
			}
			if (N === "Lamellar Gauntlets") {
				I.name = "Merchant's Guards";
				I.enhancedArmor = 11;
				I.lightRadius = 5;
				I.goldFind = 13;
				I.expFind = 5;
				I.defense = 2;
				I.attack = 2;
			}
			if (N === "Banded Gauntlets") {
				I.name = "Sorcerer's Gauntlets";
				I.enhancedArmor = 28;
				I.mp = 16;
				I.defense = 2
				I.castingHaste = -50;
				I.weight = 1;
				I.enhanceFire = 3;
				I.mpRegen = 3;
				I.fireDamage = 4;
				I.silence = 9;
				I.req = 15;
			}
			if (N === "Kusari Gauntlets") {
				I.name = "Moss Etched Gauntlets";
				I.enhancedArmor = 32;
				I.mp = 16;
				I.hp = 24
				I.dualWield = 5;
				I.doubleAttack = 4;
				I.attack = 3;
				I.allResist = 8;
				I.req = 19;
			}
			if (N === "Brigandine Gauntlets") {
				I.name = "Sage's Acumen";
				I.enhancedArmor = 45;
				I.castingHaste = -80;
				I.hp = 20;
				I.mp = 35;
				I.silence = 15;
				I.resistFire = 24;
				I.req = 22;
				I.rarity = 4;
			}
			if (N === "Cobalt Gauntlets") {
				I.name = "Frostburn Grips";
				I.enhancedArmor = 44;
				I.mp = 25;
				I.wis = 10;
				I.evocation = 3;
				I.intel = 7;
				I.wraith = 4;
				I.cold = 7;
				I.defense = 3;
				I.coldDamage = 5;
			}
			if (N === "Ornate Gauntlets") {
				I.name = "Junon's Gleaming Gauntlets";
				I.enhancedArmor = 40;
				I.hpKill = 5;
				I.leech = 3;
				I.dualWield = 5;
				I.cha = 11;
				I.lightRadius = 10;
				I.conjuration = 3;
				I.channeling = 3;
				I.req = 14;
			}
			if (N === "Tetrarch Gauntlets") {
				I.name = "Charred Gauntlets";
				I.enhancedArmor = 30;
				I.mp = 16;
				I.wis = 8;
				I.mpKill = 3;
				I.sta = 7;
				I.defense = 2;
				I.fireDamage = 5;
				I.leech = 3;
				I.lightRadius = 9;
				I.req = 17;
			}
			if (N === "Gilded Gauntlets") {
				I.name = "Gauntlets of Brute Strength";
				I.enhancedArmor = 50;
				I.sta = 14;
				I.str = 20;
				I.globalHaste = -50;
				I.twoHandSlash = 4;
				I.twoHandBlunt = 4;
				I.thorns = 6;
				I.critDamage = 6;
				I.req = 26;
			}
		}
		if (ni === "belt") {
			if (N === "Sash") {
				if (M.random() > .5) {
					I.name = "Lenymo Sash";
					I.enhancedArmor = 15;
					I.critDamage = 4;
					I.hp = 15;
					I.mp = 15;
					I.lightRadius = 4;
					I.allResist = 5;
					I.mpKill = 3;
				} else {
					I.name = "Sphinx Hair Cord";
					I.enhancedArmor = 15;
					I.phyMit = 2;
					I.cha = 9;
					I.intel = 9;
					I.stun = 12;
					I.castingHaste = -40;
					setAllResists(NI, 0, 0, 10, 10, 10);
				}
			}
			if (N === "Azure Sash") {
				if (M.random() > .5) {
					I.name = "Grimsmoke Belt";
					I.enhancedArmor = 24;
					I.defense = 2;
					I.mpKill = 7;
					I.phyMit = 4;
					I.allResist = 9;
					I.mp = 25;
				} else {
					if (M.random() > .5) {
						I.name = "Sash of the Dragonborn";
						I.enhancedArmor = 25;
						I.critChance = 2;
						I.mpKill = 7;
						I.haste = -50;
						I.globalHaste = -50;
						I.castingHaste = -50;
						I.resistFire = 15;
						I.yPos = -192;
						I.mp = 25;
					} else {
						I.name = "Orator's Desire";
						I.enhancedArmor = 45;
						I.castingHaste = -70;
						I.resistMagic = 15;
						I.resistCold = 10;
						I.mpKill = 3;
						I.critDamage = 5;
						I.silence = 15;
						I.req = 19;
						I.rarity = 4;
					}
				}
			}
			if (N === "Leather Belt") {
				if (M.random() > .5) {
					I.name = "Snakecord";
					I.enhancedArmor = 30;
					I.agi = 3;
					I.wis = 5;
					I.hpRegen = 1;
					I.magMit = 4;
					I.resistPoison = 9;
					I.poisonDamage = 2;
					I.defense = 2;
					I.wraith = 4;
					I.req = 12;
				} else {
					I.name = "Thalen Belt";
					I.enhancedArmor = 30;
					I.str = 8;
					I.wis = 12;
					I.intel = 8;
					I.fireDamage = 5;
					I.resistFire = 12;
					I.silence = 5;
					I.absorbFire = 3;
					I.req = 12;
				}
			}
			if (N === "Heavy Belt") {
				if (M.random() > .5) {
					if (M.random() > .5) {
						I.name = "Frenzied Sash of Kordata";
						I.enhancedArmor = 30;
						I.haste = -120;
						I.globalHaste = -60;
						I.weight = 1;
						I.req = 21;
					} else {
						I.name = "Vagabond's Cinch";
						I.enhancedArmor = 45;
						I.resistFire = 12;
						I.globalHaste = -100;
						I.lightRadius = 10;
						I.magMit = 3;
						I.doubleAttack = 5;
						I.absorbMagic = 3;
						I.req = 11;
						I.rarity = 4;
					}
				} else {
					I.name = "Sash of Infinite Blows";
					I.enhancedArmor = 30;
					I.haste = -70;
					I.globalHaste = -120;
					I.handtohand = 5;
					I.dualWield = 3;
					I.doubleAttack = 3;
					I.leech = 2;
					I.weight = 1;
					I.req = 21;
				}
			}
			if (N === "Mesh Belt") {
				if (M.random() > .5) {
					I.name = "Archivist's Belt";
					I.enhancedArmor = 30;
					I.allStats = 5;
					I.wis = 10;
					I.weight = 1;
					I.hp = 21;
					I.alteration = 2;
					I.channeling = 2;
					I.req = 24;
				} else {
					I.name = "Spinechill Belt";
					I.enhancedArmor = 31;
					I.haste = -50;
					I.wis = 10;
					I.resistCold = 21;
					I.absorbCold = 3;
					I.mpKill = 5;
					I.mp = 25;
					I.req = 24;
				}
			}
			if (N === "Splinted Belt") {
				if (M.random() > .5) {
					I.name = "Sage's Clamp";
					I.enhancedArmor = 45;
					I.castingHaste = -50;
					I.haste = -80;
					I.goldFind = 10;
					I.hpKill = 5;
					I.dodge = 3;
					I.resistLightning = 11;
					I.req = 6;
					I.rarity = 4;
				} else {
					I.name = "Martyr's Ideal";
					I.enhancedArmor = 40;
					I.globalHaste = -80;
					I.hpRegen = 2;
					I.agi = 12;
					I.str = 15;
					I.resistPoison = 30;
					I.resistFire = 12;
					I.req = 16;
					I.rarity = 4;
				}
			}
			if (N === "Monarch Girdle") {
				if (M.random() > .5) {
					if (M.random() > .5) {
						I.name = "Goldclasp";
						I.enhancedArmor = 45;
						I.goldFind = 14;
						I.silence = 11;
						I.cold = 11;
						I.haste = -50;
						I.weight = 1;
						I.lightRadius = 5;
						I.hpKill = 3;
						I.req = 20;
					} else {
						I.name = "Sludged Girdle";
						I.enhancedArmor = 45;
						I.cha = 5;
						I.intel = 12;
						I.hp = 20;
						I.mp = 10;
						I.enhancePoison = 3;
						I.enhanceMagic = 3;
						I.req = 20;
					}
				} else {
					I.name = "Bishop's Purity";
					I.enhancedArmor = 55;
					I.globalHaste = -80;
					I.cold = 15;
					I.magMit = 5;
					I.resistMagic = 25;
					I.resistFire = 25;
					I.abjuration = 4;
					I.req = 20;
					I.rarity = 4;
				}
			}
			if (N === "Mithril Girdle") {
				if (M.random() > .5) {
					I.name = "Mithril Plated Girth";
					I.enhancedArmor = 40;
					I.str = 12;
					I.sta = 9;
					I.dex = 14;
					I.allResist = 9;
					I.phyMit = 6;
					I.mpKill = 4;
					I.hpKill = 5;
					I.req = 26;
				} else {
					I.name = "Guardian Girdle";
					I.enhancedArmor = 40;
					I.hp = 25;
					I.sta = 8;
					I.cha = 5;
					I.defense = 3;
					I.hpKill = 6;
					I.resistMagic = 15;
					I.req = 26;
				}
			}
		}
		if (ni === "legs") {
			if (N === "Pants") {
				I.name = "Blessed Chargers";
				I.enhancedArmor = 20;
				I.channeling = 6;
				I.lightRadius = 6;
				I.allResist = 4;
				I.mp = 13;
				I.evocation = 2;
				I.mpKill = 5;
				I.intel = 9;
			}
			if (N === "Cotton Pants") {
				I.name = "Gossamer Leggings";
				I.enhancedArmor = 36;
				I.defense = 2
				I.dodge = 2
				I.runSpeed = 4;
				I.hpKill = 3;
				I.lightRadius = 7;
				I.cha = 10;
				I.abjuration = 2;
				I.req = 11;
			}
			if (N === "Linen Pants") {
				I.name = "Chancellor's Qualm";
				I.armor = 16;
				I.defense = 3;
				I.hp = 26;
				I.dodge = 7;
				I.channeling = 5;
				I.evocation = 3;
				I.critChance = 3;
				I.req = 20;
				I.rarity = 4;
			}
			if (N === "Silk Leggings") {
				I.name = "Wyvern's Tail";
				I.enhancedArmor = 45;
				I.runSpeed = 10;
				I.dex = 12;
				I.intel = 30;
				I.allResist = 7;
				I.req = 23;
				I.rarity = 4;
			}
			if (N === "Fur Pants") {
				if (M.random() > .5) {
					I.name = "Feathered Leggings";
					I.enhancedArmor = 25;
					I.sta = 10;
					I.agi = 5;
					I.hpKill = 2;
					I.offense = 2
					I.runSpeed = 5;
					I.stun = 5;
				} else {
					I.name = "Disciple's Oath";
					I.enhancedArmor = 28;
					I.defense = 2
					I.offense = 2;
					I.handtohand = 3;
					I.hpRegen = 2;
					I.thorns = 3;
					I.physicalDamage = 4;
				}
			}
			if (N === "Wolf-Hide Pants ") {
				I.name = "Gatorscale Leggings";
				I.enhancedArmor = 35;
				I.hp = 16;
				I.sta = 5;
				I.wis = 10;
				I.expFind = 5;
				I.defense = 2;
				I.physicalDamage = 4;
				I.req = 9;
			}
			if (N === "Sharkskin Legs") {
				I.name = "Damask Leggings";
				I.enhancedArmor = 42;
				I.critDamage = 5;
				I.dex = 9;
				I.phyMit = 4;
				I.offense = 3;
				I.agi = 8;
				I.piercing = 2;
				I.weight = 1;
				I.req = 16;
			}
			if (N === "Studded Legs") {
				I.name = "Gladewalker's Leggings";
				I.enhancedArmor = 44;
				I.mp = 58;
				I.wis = 15;
				I.evocation = 3;
				I.conjuration = 3;
				I.mpRegen = 3;
				I.absorbLightning = 5;
				I.req = 25;
			}
			if (N === "Scaled Legs") {
				I.name = "Barbed Legplates";
				I.enhancedArmor = 21;
				I.agi = 7;
				I.thorns = 4;
				I.expFind = 7;
				I.defense = 2;
				I.coldDamage = 5;
			}
			if (N === "Chausses") {
				I.name = "Silver-Plated Leggings";
				I.enhancedArmor = 30;
				I.mp = 16;
				I.wis = 8;
				I.mpKill = 3;
				I.expFind = 7;
				I.defense = 2;
				I.coldDamage = 5;
				I.req = 13;
			}
			if (N === "Kusazuri") {
				I.name = "Emissary's Poise";
				I.enhancedArmor = 45;
				I.allSkills = 1;
				I.allStats = 10;
				I.absorbCold = 4;
				I.thorns = 8;
				I.magMit = 4;
				I.resistMagic = 20;
				I.req = 24;
				I.rarity = 4;
			}
			if (N === "Poleyn") {
				I.name = "Black Chitin Leggings";
				I.enhancedArmor = 30;
				I.mp = 16;
				I.wis = 9;
				I.mpKill = 5;
				I.silence = 9;
				I.resistPoison = 11;
				I.resistFire = 11;
				I.conjuration = 4;
				I.alteration = 3;
				I.req = 22;
			}
			if (N === "Cobalt Legplates") {
				I.name = "Dauntless Legplates";
				I.enhancedArmor = 30;
				I.hp = 16;
				I.str = 9;
				I.hpKill = 2;
				I.lightningDamage = 3;
				I.stun = 5;
				I.fear = 11;
			}
			if (N === "Iron Legplates") {
				I.name = "Bishop's Merit";
				I.enhancedArmor = 40;
				I.allStats = 7;
				I.mpRegen = 3;
				I.wis = 14;
				I.str = 20;
				I.resistPoison = 50;
				I.req = 11;
				I.rarity = 4;
			}
			if (N === "Mithril Legplates") {
				I.name = "Golem's Crust";
				I.enhancedArmor = 45;
				I.attack = 12;
				I.alteration = 4;
				I.allSkills = 3;
				I.stun = 30;
				I.cold = 30;
				I.req = 20;
				I.rarity = 4;
			}
			if (N === "Royal Legplates") {
				I.name = "Icy Greaves";
				I.enhancedArmor = 43;
				I.mp = 30;
				I.critDamage = 8;
				I.mpKill = 5;
				I.resistCold = 11;
				I.absorbCold = 4;
				I.coldDamage = 6;
				I.cold = 13;
				I.req = 22;
			}
		}
		if (ni === "boots") {
			if (N === "Boots") {
				if (M.random() > .5) {
					I.name = "Lavaspur";
					I.enhancedArmor = 33;
					I.dex = 8;
					I.evocation = 1;
					I.intel = 8;
					I.defense = 2;
					I.fireDamage = 3;
					I.resistFire = 15;
					I.req = 8;
				} else {
					I.name = "Firewalker Boots";
					I.enhancedArmor = 37;
					I.evocation = 2;
					I.allStats = 4;
					I.critChance = 2;
					I.enhanceFire = 2;
					I.resistFire = 20;
					I.req = 8;
				}
			}
			if (N === "Light Boots") {
				if (M.random() > .5) {
					I.name = "Golden Baelor Boots";
					I.enhancedArmor = 45;
					I.hp = 16;
					I.wis = 15;
					I.intel = 15;
					I.allSkills = 1;
					I.absorbFire = 3;
					I.resistFire = 14;
					I.silence = 7;
					I.req = 26;
				} else {
					I.name = "Amice-Lined Shoes";
					I.enhancedArmor = 42;
					I.hp = 15;
					I.allStats = 5;
					I.dodge = 2;
					I.evocation = 3;
					I.resistPoison = 13
					I.resistCold = 18;
					I.cold = 15;
					I.req = 26;
				}
			}
			if (N === "Heavy Boots") {
				if (M.random() > .5) {
					I.name = "Vagabond's Voyage";
					I.armor = 24;
					I.runSpeed = 28;
					I.allStats = 6;
					I.lightRadius = 13;
					I.fear = 12;
					I.allResist = 7;
					I.req = 24;
					I.rarity = 4;
				} else {
					I.name = "Boots of the Destroyer";
					I.enhancedArmor = 25;
					I.str = 10;
					I.sta = 15;
					I.twoHandSlash = 4;
					I.twoHandBlunt = 4;
					I.runSpeed = 12;
					I.hp = 15;
					I.attack = 5;
					I.req = 9;
				}
			}
			if (N === "Sharkskin Boots") {
				if (M.random() > .5) {
					I.name = "Craftsman's Boots";
					I.enhancedArmor = 40;
					I.goldFind = 9;
					I.agi = 15;
					I.wis = 5;
					I.runSpeed = 11;
					I.stun = 5;
					I.offense = 2;
					I.weight = 1;
					I.flavorText = "A legendary item preferred by adventurers of all types. Its ability to whisk its owner away to safety is widely regarded.";
					I.req = 21;
				} else {
					I.name = "Gorilla-Hide Boots";
					I.enhancedArmor = 40;
					I.str = 11;
					I.agi = 9;
					I.sta = 11;
					I.runSpeed = 15;
					I.parry = 3;
					I.attack = 5;
					I.req = 21;
				}
			}
			if (N === "Chain Boots") {
				if (M.random() > .5) {
					I.name = "Treads of Vergundi";
					I.enhancedArmor = 27;
					I.hp = 17;
					I.poisonDamage = 4;
					I.hpKill = 4;
					I.resistPoison = 9;
					I.resistFire = 9;
					I.runSpeed = 15;
					I.req = 8;
				} else {
					I.name = "Emissary's Finesse";
					I.armor = 25;
					I.runSpeed = 35;
					I.conjuration = 3;
					I.offense = 3;
					I.allResist = 6;
					I.channeling = 5;
					I.expFind = 8;
					I.req = 14;
					I.rarity = 4;
				}
			}
			if (N === "Sovereign Boots") {
				if (M.random() > .5) {
					I.name = "Dwarven Militia Boots";
					I.enhancedArmor = 44;
					I.hp = 17;
					I.str = 10;
					I.dex = 15;
					I.allResist = 9;
					I.critDamage = 5;
					I.flavorText = "Boots of a Dwarven nobleman that haunted the basement of Unrest.";
					I.req = 20;
				} else {
					I.name = "Charred Boots";
					I.enhancedArmor = 44;
					I.abjuration = 4;
					I.channeling = 6;
					I.absorbFire = 5;
					I.agi = 7;
					I.resistFire = 21;
					I.resistPoison = 15;
					I.req = 20;
				}
			}
			if (N === "Steel Boots") {
				if (M.random() > .5) {
					I.name = "Goblin Captain's Boots";
					I.enhancedArmor = 30;
					I.hp = 16;
					I.mp = 16;
					I.magMit = 2;
					I.phyMit = 3;
					I.critDamage = 7;
					I.lightRadius = -3;
					I.offense = 2;
					I.req = 7;
				} else {
					I.name = "Greenmist Boots";
					I.enhancedArmor = 30;
					I.hp = 20;
					I.mp = 20;
					I.str = 10;
					I.sta = 10;
					I.intel = 10;
					I.agi = 10;
					I.resistPoison = 20;
					I.req = 7;
				}
			}
			if (N === "Sabatons") {
				if (M.random() > .5) {
					I.name = "Minotaur's Hooves";
					I.enhancedArmor = 35;
					I.runSpeed = 20;
					I.resistFire = 11;
					I.expFind = 8;
					I.agi = 12;
					I.hp = 15;
					I.dodge = 3;
					I.req = 15;
					I.rarity = 4;
				} else {
					I.name = "Boots of the Righteous";
					I.enhancedArmor = 30;
					I.str = 19;
					I.wis = 14;
					I.abjuration = 4;
					I.alteration = 3;
					I.enhanceMagic = 2;
					setAllStatus(NI, 15, 15, 15, 15);
					I.req = 11;
				}
			}
		}
		if (ni === "weapons") {
			if (nt === "slashed") {
				if (N === "Sword") {
					I.name = "Gladius";
					I.ias = .05 + (2 * .05);
					I.enhancedDamage = 3;
					I.magMit = 4;
					I.agi = 7;
					I.dex = 7;
					I.sta = 7;
					I.critDamage = 5;
					I.magicDamage = 7;
				}
				if (N === "Scimitar") {
					I.name = "Iceshard Scimitar";
					I.enhancedDamage = 4;
					I.hp = 16;
					I.allStats = 5;
					I.lightRadius = 7;
					I.mpKill = 4;
					I.resistCold = 9;
					I.coldDamage = 9;
					I.proc = "Effect: Arctic Blast";
					I.req = 12;
				}
				if (N === "Axe") {
					if (M.random() > .5) {
						I.name = "Minotaur Battle Axe";
						I.ias = .05 + (2 * .05);
						I.enhancedDamage = 3;
						I.str = 10;
						I.sta = 5;
						I.oneHandSlash = 3;
						I.attack = 3;
						I.stun = 7;
						I.physicalDamage = 9;
						I.req = 13;
						I.flavorText = "The axe of choice for bloodthirsty minotaurs.";
					} else {
						I.name = "Minotaur's Gore";
						I.damage = 11;
						I.delay = 3200;
						I.coldDamage = 12;
						I.resistLightning = 20;
						I.enhancePhysical = 3;
						I.critDamage = 5;
						I.str = 13;
						I.req = 11;
						I.rarity = 4;
					}
				}
				if (N === "Claws") {
					I.name = "Bladed Prenssor Claws";
					I.ias = .4;
					I.enhancedDamage = 1;
					I.oneHandSlash = 4;
					I.leech = 4;
					I.dex = 10;
					I.fear = 8;
					I.haste = -40;
					I.allSkills = 1;
					I.proc = "Effect: Blistering Blood";
					I.poisonDamage = 10;
					I.req = 15;
					I.flavorText = "Deep within the Temple of Prenssor, howls of terror echoed throughout the antechamber. Yet another victim to Sentoth's orgy of bloodletting.";
				}
				if (N === "Long Sword") {
					I.name = "Razormaw Cutlass";
					I.ias = .05 + (2 * .05);
					I.enhancedDamage = 3;
					I.sta = 13;
					I.enhancePhysical = 2;
					I.magMit = 5;
					I.thorns = 7;
					I.leech = 3;
					I.critChance = 3;
					I.coldDamage = 12;
					I.req = 19;
				}
				if (N === "Chokuto") {
					if (M.random() > .5) {
						I.name = "Short Sword of the Crokyn";
						I.enhancedDamage = 5;
						I.globalHaste = -60;
						I.hpKill = 4;
						I.leech = 3;
						I.riposte = 4;
						I.allResist = 7;
						I.oneHandSlash = 5;
						I.magicDamage = 14;
						I.proc = "Effect: Crokyn";
						I.req = 26;
						I.flavorText = "Crafted in secrecy by the anuran zod elites, the Short Sword of the Crokyn was entrusted to the ghoulish Anuran Lord for safe keeping.";
					} else {
						I.name = "Soulgrinder";
						I.ias = .34;
						I.enhancedDamage = 2;
						I.mpRegen = 2;
						I.lightRadius = 15;
						I.wraith = 4;
						I.parry = 5;
						I.resistMagic = 17;
						I.oneHandSlash = 5;
						I.abjuration = 5;
						I.magicDamage = 15;
						I.proc = "Effect: Dismiss Undead";
						I.req = 24;
						I.yPos = -704;
						I.flavorText = "Wielded by an anuran with a penchant for justice, the Soulgrinder brings tidings of deliverance upon undead adversaries.";
					}
				}
				if (N === "War Axe") {
					I.name = "Silvery War Axe";
					I.ias = .05 + (2 * .05);
					I.enhancedDamage = 3;
					I.magMit = 5;
					I.channeling = 5;
					I.dodge = 5;
					I.castingHaste = -50;
					I.allResist = 9;
					I.defense = 4;
					I.wraith = 3;
					I.coldDamage = 25;
					I.req = 24;
				}
				if (N === "Kusanagi") {
					if (M.random() > .5) {
						I.name = "Chromium-Bladed Masamune";
						I.ias = .05 + (2 * .05);
						I.enhancedDamage = 1;
						I.critChance = 4;
						I.critDamage = 5;
						I.allStats = 5;
						I.wraith = 3;
						I.enhancePhysical = 3;
						I.allSkills = 1;
						I.lightningDamage = 11;
						I.req = 26;
						I.flavorText = "A treasure discovered by a captured servant beholden to the High Revenant Viston. Stolen from Revenant Viston's armory in the middle of the night.";
					} else {
						I.name = "Spriggan's Blade";
						I.enhancedDamage = 2;
						I.thorns = 15;
						I.hpRegen = 2;
						I.conjuration = 3;
						I.evocation = 3;
						I.phyMit = 4;
						I.leech = 5;
						I.enhancePhysical = 2;
						I.critDamage = 11;
						I.physicalDamage = 15;
						I.req = 25;
						I.proc = "Effect: Entangling Roots";
						I.flavorText = "This sinister blade was once the prized possession of an anuran elder in Kordata Ruins. Its thorny properties make attackers think twice.";
					}
				}
			}
			if (nt === "crushed") {
				if (N === "Mace") {
					I.name = "Sageknot";
					I.ias = .1;
					I.enhancedDamage = 3;
					I.mp = 16;
					I.wis = 5;
					I.oneHandBlunt = 2;
					I.phyMit = 4;
					I.resistLightning = 14;
					I.resistFire = 7;
				}
				if (N === "Club") {
					I.name = "Brimthorn";
					I.ias = .1;
					I.enhancedDamage = 3;
					I.globalHaste = -60;
					I.sta = 8;
					I.critDamage = 4;
					I.thorns = 7;
					I.magMit = 4;
					I.physicalDamage = 7;
					I.flavorText = "A piece of wood with a protruding nail. This makes it much more effective than a regular piece of wood.";
				}
				if (N === "Morning Star") {
					if (M.random() > .5) {
						I.name = "Howling Mace";
						I.ias = .1;
						I.enhancedDamage = 4;
						I.mpRegen = 2;
						I.fear = 5;
						I.enhanceMagic = 2;
						I.wraith = 3;
						I.alteration = 3;
						I.evocation = 3;
						I.magicDamage = 9;
						I.proc = "Effect: Howling Strike";
						I.flavorText = "The slave revolt in Lanfeld Outpost was ultimately quelled, but not before this was discovered in the taskmaster's den.";
						I.req = 12;
					} else {
						I.name = "Sage's Wit";
						I.damage = 12;
						I.delay = 3900;
						I.mpRegen = 3;
						I.mpKill = 3;
						I.lightRadius = 12;
						I.silence = 15;
						I.stun = 10;
						I.intel = 13;
						I.req = 11;
						I.rarity = 4;
					}
				}
				if (N === "Spiked Club") {
					if (M.random() > .5) {
						I.name = "Bloodrise";
						I.ias = .1;
						I.enhancedDamage = 4;
						I.hp = 11;
						I.hpKill = 5;
						I.leech = 3;
						I.lightRadius = 8;
						I.attack = 4;
						I.fireDamage = 10;
						I.absorbFire = 3;
						I.req = 13;
					} else {
						I.name = "Vagrant's Branch";
						I.damage = 9;
						I.delay = 2900;
						I.wis = 20;
						I.intel = 15;
						I.enhanceCold = 3;
						I.critDamage = 7;
						I.req = 11;
						I.rarity = 4;
					}
				}
				if (N === "Jagged Star") {
					I.name = "Cold Iron Morning Star";
					I.ias = .1;
					I.enhancedDamage = 5;
					I.critDamage = 6;
					I.wis = 8;
					I.castingHaste = -50;
					I.resistCold = 11;
					I.oneHandBlunt = 3;
					I.wraith = 3;
					I.coldDamage = 10;
					I.proc = "Effect: Boreal Blast";
					I.req = 15;
				}
				if (N === "Scepter") {
					if (M.random() > .5) {
						I.name = "Ebony Black Mace";
						I.ias = .1;
						I.enhancedDamage = 5;
						I.allStats = 5;
						I.mp = 30;
						I.mpKill = 4;
						I.castingHaste = -50;
						I.wraith = 4;
						I.abjuration = 3;
						I.physicalDamage = 12;
						I.req = 11;
					} else {
						I.name = "Golem's Crag";
						I.damage = 13;
						I.delay = 3600;
						I.resistCold = 30;
						I.wis = 15;
						I.globalHaste = -60;
						I.phyMit = 5;
						I.enhanceCold = 4;
						I.req = 22;
						I.rarity = 4;
					}
				}
				if (N === "Cudgel") {
					I.name = "Orcish Warhammer";
					I.enhancedDamage = 5;
					I.oneHandBlunt = 3;
					I.enhancePhysical = 4;
					I.critChance = 5;
					I.fear = 8;
					I.leech = 3;
					I.globalHaste = -60;
					I.thorns = 7;
					I.coldDamage = 14;
					I.flavorText = "Chief Grimden's preferred weapon when routing out invaders in Lanfeld Outpost.";
					I.req = 21;
				}
				if (N === "Caduceus") {
					I.name = "Stormeye";
					I.enhancedDamage = 3;
					I.allSkills = 1;
					I.allStats = 5;
					I.mpRegen = 3;
					I.mpKill = 6;
					I.castingHaste = -50;
					I.evocation = 3;
					I.allResist = 9;
					I.lightningDamage = 11;
					I.proc = "Effect: Thunderstruck";
					I.flavorText = "A crackling aura of static electricity seems to grip its wielder's hand firmly in place.";
					I.req = 23;
				}
			}
			if (nt === "pierced") {
				if (N === "Dagger") {
					I.name = "Whimsical Dagger";
					I.ias = .05 + (2 * .05);
					I.enhancedDamage = 2;
					I.mp = 16;
					I.mpKill = 3;
					I.hpKill = 6;
					I.expFind = 5;
					I.goldFind = 5;
					I.physicalDamage = 7;
				}
				if (N === "Dirk") {
					I.name = "The Witch Doctor";
					I.ias = .05 + (2 * .05);
					I.enhancedDamage = 2;
					I.resistCold = 8;
					I.absorbPoison = 3;
					I.enhancePoison = 4;
					I.poisonDamage = 9;
					I.resistPoison = 11;
					I.proc = "Effect: Rotting Flesh";
				}
				if (N === "Kris") {
					I.name = "Sacrificial Dagger";
					I.ias = .15 + (2 * .05);
					I.enhancedDamage = 2;
					I.mp = 21;
					I.intel = 10;
					I.mpRegen = 2;
					I.leech = 3;
					I.wraith = 3;
					I.hpKill = 5;
					I.piercing = 3;
					I.poisonDamage = 11;
					I.proc = "Effect: Brain Hew";
					I.flavorText = "Carving out the heart of a newborn is grizzly business, but, in dark elf society, it is a requirement to ascend to High Priestess.";
					I.req = 11;
				}
				if (N === "Poignard") {
					I.name = "Pugius";
					I.ias = M.round(.05 + (2 * .05));
					I.enhancedDamage = 2;
					I.magMit = 7;
					I.globalHaste = -50;
					I.critDamage = 5;
					I.allSkills = 1;
					I.allResist = 5;
					I.magicDamage = 10;
					I.req = 13;
				}
				if (N === "Rondel") {
					I.name = "Shark Tooth";
					I.ias = .2 + (2 * .05);
					I.enhancedDamage = 2;
					I.offense = 3;
					I.globalHaste = -80;
					I.doubleAttack = 3;
					I.leech = 3;
					I.resistPoison = 10;
					I.piercing = 3;
					I.coldDamage = 9;
					I.flavorText = "Though lightweight and unorthodox, a serrated shark tooth attached to a hilt is a deadly weapon.";
					I.req = 11;
				}
				if (N === "Spear") {
					I.name = "Trident of Edenburg";
					I.enhancedDamage = 4;
					I.agi = 8;
					I.sta = 5;
					I.critChance = 3;
					I.wraith = 3;
					I.allResist = 7;
					I.defense = 3;
					I.coldDamage = 14;
					I.proc = "Effect: Stormy Seas";
					I.req = 19;
				}
				if (N === "Cinquedeas") {
					I.name = "Serrated Bone Cinquedeas";
					I.ias = .1 + (2 * .05);
					I.enhancedDamage = 2;
					I.agi = 15;
					I.haste = -30;
					I.critDamage = 6;
					I.piercing = 4;
					I.physicalDamage = 4;
					I.magicDamage = 12;
					I.proc = "Effect: Life Leech";
					I.flavorText = "A weapon forged by the anuran necromancers of Kordata Ruins after some medical experiments on troll slaves.";
					I.req = 22;
				}
				if (N === "Stiletto") {
					if (M.random() > .5) {
						I.name = "Fanged Skull Carver";
						I.ias = .1;
						I.enhancedDamage = 2;
						I.hpRegen = 4;
						I.leech = 4;
						I.fear = 8;
						I.phyMit = 6;
						I.critChance = 6;
						I.critDamage = 8;
						I.physicalDamage = 11;
						I.flavorText = "A lost treasure that was hidden deep in the nether chambers of Fahlnir Citadel. Long thought to be a mythical weapon, recent discoveries have proven otherwise.";
						I.req = 31;
					} else {
						I.name = "Martyr's Shiv";
						I.damage = 7;
						I.delay = 2200;
						I.leech = 3;
						I.expFind = 7;
						I.magMit = 3;
						I.lightRadius = 7;
						I.poisonDamage = 12;
						I.req = 24;
						I.rarity = 4;
					}
				}
			}
			if (nt === "cleaved") {
				if (N === "Giant Sword") {
					I.name = "Obsidian Flamberge";
					I.ias = .05 + (2 * .05);
					I.enhancedDamage = 4;
					I.expFind = 5;
					I.allStats = 5;
					I.leech = 3;
					I.critChance = 4;
					I.expFind = 7;
					I.twoHandSlash = 3;
					I.fireDamage = 11;
				}
				if (N === "Giant Axe") {
					I.name = "Silvery Two-Handed Axe";
					I.ias = .05 + (2 * .05);
					I.enhancedDamage = 4;
					I.mp = 14;
					I.hp = 11;
					I.allStats = 5;
					I.allResist = 9;
					I.allSkills = 1;
					I.coldDamage = 24;
					I.req = 11;
				}
				if (N === "Champion Sword") {
					I.name = "Blackened Iron Bastard Sword";
					I.ias = .05 + (2 * .05);
					I.enhancedDamage = 4;
					I.hp = 21;
					I.defense = 4;
					I.parry = 4;
					I.twoHandSlash = 4;
					I.physicalDamage = 28;
					I.req = 13;
				}
				if (N === "Bastard Sword") {
					if (M.random() > .5) {
						I.name = "Gigantic Frostreaper";
						I.ias = .05 + (2 * .05);
						I.enhancedDamage = 6;
						I.hp = 25;
						I.leech = 4;
						I.doubleAttack = 3;
						I.allStats = 9;
						I.absorbCold = 4;
						I.resistCold = 11;
						I.coldDamage = 36;
						I.proc = "Effect: Gust of Everfrost";
						I.flavorText = "The weapon of choice for adventurous Barbarians seeking to lay waste to odious vermin in the frigid north.";
						I.req = 16;
					} else {
						I.name = "Bishop's Justice";
						I.damage = 19;
						I.delay = 4000;
						I.magicDamage = 40;
						I.twoHandSlash = 5;
						I.riposte = 8;
						I.doubleAttack = 6;
						I.allResist = 7;
						I.req = 11;
						I.rarity = 4;
					}
				}
				if (N === "Gothic Axe") {
					I.name = "Executioner's Axe";
					I.enhancedDamage = 9;
					I.mp = 16;
					I.str = 25;
					I.critDamage = 13;
					I.fear = 5;
					I.twoHandSlash = 3;
					I.physicalDamage = 42;
					I.leech = 7;
					I.flavorText = "The howls of terror can scarcely be heard from the anuran executioner's vestibule. The encrusted blood leaves few doubts about its deeds.";
					I.req = 21;
				}
				if (N === "Katana") {
					I.name = "Mithril Two-Handed Sword";
					I.ias = .1 + (2 * .05);
					I.enhancedDamage = 5;
					I.fireDamage = 43;
					I.allResist = 14;
					I.haste = -80;
					I.wraith = 7;
					I.critChance = 7;
					I.offense = 4;
					I.doubleAttack = 8;
					I.req = 23;
				}
				if (N === "Colossus Sword") {
					I.name = "Lamentation Blade";
					I.ias = .05 + (2 * .05);
					I.enhancedDamage = 5;
					I.absorbCold = 5;
					I.str = 23;
					I.leech = 7;
					I.wraith = 7;
					I.sta = 23;
					I.allResist = 14;
					I.attack = 12;
					I.coldDamage = 46;
					I.proc = "Effect: Wailing Sorrow";
					I.flavorText = "Vera Sintella knew that she would never be fully trusted. Revenant Viston entrusted his inner sanctum to the Blood Guardians.";
					I.req = 25;
				}
				if (N === "Mythical Sword") {
					I.name = "Razing Sword of Carthenage";
					I.ias = .05 + (2 * .05);
					I.enhancedDamage = 3;
					I.absorbFire = 5;
					I.critDamage = 10;
					I.critChance = 9;
					I.allStats = 13;
					I.allSkills = 2;
					I.resistFire = 28;
					I.resistMagic = 28;
					I.physicalDamage = 36;
					I.flavorText = "Officers of the Fire Giants of Ashenflow Peak have been sighted wielding this blade in defense of Highlord Szarthax's Lair.";
					I.req = 29;
				}
			}
			if (nt === "staff") {
				if (N === "Staff") {
					I.name = "Runed Totem Staff";
					I.mp = 16;
					I.hp = 16;
					I.wis = 10;
					I.intel = 10;
					I.castingHaste = (5) * (-10);
					I.magicDamage = 11;
					I.resistMagic = 9;
					I.expFind = 9;
				}
				if (N === "Runic Staff") {
					I.name = "Bane Ash";
					I.mp = 25;
					I.castingHaste = (5) * (-10);
					I.mpRegen = 4;
					I.critChance = 3;
					I.resistFire = 11;
					I.fireDamage = 25;
					I.silence = 9;
					I.coldDamage = 10;
				}
				if (N === "Cedar Staff") {
					I.name = "Serpent Lord";
					I.mp = 16;
					I.allStats = 10;
					I.enhancePoison = 5;
					I.poisonDamage = 23;
					I.leech = 5;
					I.wraith = 5;
					I.mpKill = 15;
					I.resistPoison = 40;
					I.req = 14;
				}
				if (N === "Quarterstaff") {
					I.name = "Spire of Sentoth";
					I.mp = 25;
					I.allSkills = 1;
					I.enhanceLightning = 5;
					I.mpRegen = 7;
					I.intel = 13;
					I.phyMit = 5;
					I.lightningDamage = 25;
					I.resistLightning = 43;
					I.silence = 12;
					I.req = 17;
				}
				if (N === "Cosmic Staff") {
					I.name = "Staff of the Sentinel";
					I.mp = 36;
					I.wis = 11;
					I.intel = 11;
					I.castingHaste = (9) * (-10);
					I.stun = 9;
					I.magicDamage = 42;
					I.silence = 13;
					I.lightRadius = 15;
					I.allSkills = 1;
					I.alteration = 3;
					I.flavorText = "A knowing glance seemed to confirm her suspicions. Even in private it seemed to know her inner-most thoughts.";
					I.req = 22;
				}
				if (N === "Archon Staff") {
					I.name = "The Salamander";
					I.mp = 50;
					I.mpRegen = 8;
					I.enhanceFire = 5;
					I.evocation = 3;
					I.channeling = 3;
					I.conjuration = 3;
					I.wraith = 7;
					I.leech = 7;
					I.castingHaste = (10) * (-10);
					I.fireDamage = 48;
					I.allSkills = 2;
					I.proc = "Effect: Hydra Bolt";
					I.req = 25;
					I.flavorText = "Wrought from the netherworld and born once again with the blood of serpents, the reckoning is upon us and, this time, we came prepared.";
				}
			}
			if (nt === "smashed") {
				if (N === "Giant Mace") {
					I.name = "Crushflange";
					I.ias = .1 + (2 * .05);
					I.enhancedDamage = 5;
					I.magicDamage = 14;
					I.str = 15;
					I.sta = 6;
					I.lightRadius = 8;
					I.stun = 14;
					I.resistFire = 11;
					I.critDamage = 14;
				}
				if (N === "Auric Maul") {
					I.name = "Runic Warhammer";
					I.ias = .1 + (2 * .05);
					I.enhancedDamage = 5;
					I.hpRegen = 4;
					I.critChance = 4;
					I.sta = 8;
					I.wis = 14;
					I.magMit = 8;
					I.magicDamage = 11;
				}
				if (N === "Mallet") {
					I.name = "Midnight Mallet";
					I.ias = .1 + (2 * .05);
					I.enhancedDamage = 4;
					I.wraith = 5;
					I.globalHaste = -50;
					I.phyMit = 8;
					I.allSkills = 1;
					I.defense = 4;
					I.attack = 4;
					I.coldDamage = 23;
					I.flavorText = "In darkness the werewolves and vampires swarmed about, yet they vanish like phantoms at dawn. Evil cannot withstand the holy fires of Yentus.";
					I.req = 13;
				}
				if (N === "Ogre Maul") {
					I.name = "Ogre War Maul";
					I.ias = .15 + (2 * .05);
					I.enhancedDamage = 3;
					I.leech = 7;
					I.str = 30;
					I.sta = 30;
					I.stun = 15;
					I.critDamage = 14;
					I.physicalDamage = 21;
					I.req = 17;
				}
				if (N === "Great Maul") {
					I.name = "Bonesnap";
					I.ias = .2;
					I.enhancedDamage = 4;
					I.defense = 5;
					I.str = 25;
					I.dex = 15;
					I.leech = 6;
					I.resistFire = 25;
					I.resistCold = 25;
					I.allSkills = 3;
					I.physicalDamage = 25;
					I.req = 19;
				}
				if (N === "Sledgehammer") {
					I.name = "Blighthammer";
					I.ias = .1 + (2 * .05);
					I.enhancedDamage = 5;
					I.critDamage = 11;
					I.allStats = 11;
					I.leech = 7;
					I.wraith = 9;
					I.fear = 12;
					I.alteration = 5;
					I.conjuration = 8;
					I.poisonDamage = 45;
					I.proc = "Effect: Wretched Plague";
					I.req = 22;
				}
				if (N === "Umbral Hammer") {
					I.name = "Steeldriver";
					I.ias = .1 + (2 * .05);
					I.enhancedDamage = 3;
					I.critChance = 9;
					I.critDamage = 10;
					I.leech = 7;
					I.twoHandBlunt = 6;
					I.doubleAttack = 7;
					I.riposte = 5;
					I.physicalDamage = 45;
					I.flavorText = "Pain. Suffering. Despair. Crushing all in its path without mercy.";
					I.req = 25;
				}
				if (N === "Thunder Maul") {
					I.name = "Gerke's Toy";
					I.enhancedDamage = 5;
					I.allStats = 13;
					I.wraith = 9;
					I.hpRegen = 5;
					I.haste = -60;
					I.critChance = 10;
					I.twoHandBlunt = 5;
					I.physicalDamage = 55;
					I.proc = "Effect: Thunderstorm";
					I.flavorText = "Once in a while, Gerke is seen wandering the plains looking for lions to smash. His penchant for squishing hapless adventurers earned him an ignoble reputation.";
					I.req = 28;
				}
			}
		}
		if (ni === "shield") {
			if (nt === "shield") {
				if (N === "Buckler") {
					if (M.random() > .5) {
						I.name = "Bark Shield";
						I.enhancedArmor = 24;
						I.mp = 16;
						I.agi = 15;
						I.lightningDamage = 2;
						I.expFind = 7;
						I.leech = 4;
						I.alteration = 2;
						I.thorns = 4;
					} else {
						I.name = "Vagrant's Slab";
						I.armor = 25;
						I.resistCold = 25;
						I.resistFire = 25;
						I.resistLightning = 25;
						I.allStats = 10;
						I.allSkills = 1;
						I.hpRegen = 2;
						I.req = 12;
						I.rarity = 4;
					}
				}
				if (N === "Small Shield") {
					I.name = "Shiny Brass Shield";
					I.enhancedArmor = 28;
					I.hp = 11;
					I.phyMit = 5;
					I.magMit = 5;
					I.leech = 5;
					I.hpKill = 7;
					I.critDamage = 5;
					I.resistMagic = 11;
				}
				if (N === "Kite Shield") {
					I.name = "Singed Guardian Shield";
					I.enhancedArmor = 30;
					I.mp = 16;
					I.wis = 15;
					I.castingHaste = -60;
					I.absorbFire = 3;
					I.fireDamage = 5;
					I.resistFire = 14;
					I.hpKill = 9;
					I.req = 11;
				}
				if (N === "Round Shield") {
					I.name = "Scute Shield";
					I.enhancedArmor = 40;
					I.sta = 11;
					I.oneHandBlunt = 3;
					I.sta = 10;
					I.defense = 3;
					I.cold = 9;
					I.globalHaste = (9) * (-10);
					I.hpKill = 5;
					I.req = 14;
				}
				if (N === "Gothic Shield") {
					I.name = "Crested Viston Shield";
					I.enhancedArmor = 35;
					I.hp = 25;
					I.dex = 12;
					I.hpKill = 5;
					I.fear = 8;
					I.leech = 5;
					I.globalHaste = (10) * (-10);
					I.resistMagic = 10;
					I.resistLightning = 10;
					I.resistPoison = 10;
					I.req = 19;
				}
				if (N === "Crown Shield") {
					I.name = "Chitin Shell Shield";
					I.enhancedArmor = 40;
					I.hp = 16;
					I.mp = 25;
					I.critChance = 5;
					I.haste = (5) * (-10);
					I.resistPoison = 9;
					I.cold = 11;
					I.poisonDamage = 9;
					I.req = 21;
				}
				if (N === "Aegis") {
					I.name = "The Ward";
					I.enhancedArmor = 45;
					I.defense = 5;
					I.str = 15;
					I.lightRadius = 15;
					I.oneHandBlunt = 4;
					I.leech = 5;
					I.magMit = 8;
					I.silence = 13;
					I.allResist = 14;
					I.req = 23;
				}
				if (N === "Monarch") {
					I.name = "Steelclash";
					I.enhancedArmor = 50;
					I.phyMit = 9;
					I.parry = 5;
					I.oneHandBlunt = 5;
					I.castingHaste = -80;
					I.lightRadius = 9;
					I.leech = 5;
					I.wraith = 5;
					I.allSkills = 1;
					I.allResist = 12;
					I.req = 26;
				}
			}
			if (nt === "offhand") {
				if (N === "Stein") {
					if (M.random() > .5) {
						I.name = "Stein of Gorgek";
						I.hp = 21;
						I.mp = 21;
						I.dex = 10;
						I.intel = 15;
						I.mpRegen = 2;
						I.castingHaste = -40;
						I.expFind = 5;
						I.alteration = 3;
					} else {
						I.name = "Drunkard's Stein";
						I.enhanceMagic = 2;
						I.mpRegen = 2;
						I.sta = 14;
						I.cha = 11;
						I.runSpeed = 5;
						I.stun = 7;
						I.goldFind = 7;
						I.hpRegen = 2;
					}
				}
				if (N === "Dark Orb") {
					if (M.random() > .5) {
						I.name = "Shimmering Orb";
						I.armor = 15;
						I.hp = 23;
						I.conjuration = 4;
						I.mpKill = 9;
						I.mp = 36;
						I.castingHaste = -70;
						I.resistPoison = 10;
						I.req = 10;
					} else {
						I.name = "Chancellor's Bias";
						I.castingHaste = -120;
						I.mp = 55;
						I.hp = 40;
						I.silence = 20;
						I.enhancePoison = 3;
						I.mpKill = 12;
						I.req = 11;
						I.rarity = 4;
					}
				}
				if (N === "Ancient Tome") {
					I.name = "Testament of Rinara";
					I.mp = 28;
					I.mp = 36;
					I.intel = 12;
					I.cha = 20;
					I.castingHaste = -60;
					I.allSkills = 1;
					I.mpRegen = 3;
					I.req = 13;
				}
				if (N === "Totem") {
					I.name = "Paw of Rockgard";
					I.mp = 40;
					I.wis = 14;
					I.sta = 10;
					I.agi = 9;
					I.silence = 12;
					I.castingHaste = -50;
					I.mpRegen = 2;
					I.resistPoison = 11;
					I.req = 16;
				}
				if (N === "Crystal Ball") {
					if (M.random() > .5) {
						I.name = "Manastone";
						I.fear = 10;
						I.allStats = 8;
						I.mp = 55;
						I.channeling = 6;
						I.lightRadius = 12;
						I.mpRegen = 7;
						I.mpKill = 12;
						I.castingHaste = (9) * (-10);
						I.silence = 9;
						I.stun = 10;
						I.flavorText = "A legendary stone known for its mana restoration properties. Some believe that an anuran wizard inverted the energy from an evil eye's soul inside.";
						I.req = 22;
					} else {
						I.name = "Wyvern's Eye";
						I.hp = 60;
						I.mp = 25;
						I.mpRegen = 5;
						I.mpKill = 5;
						I.castingHaste = -110;
						I.enhanceLightning = 5;
						I.req = 20;
						I.rarity = 4;
					}
				}
				if (N === "Skull") {
					I.name = "Skull of Fintler";
					I.mp = 45;
					I.critDamage = 6;
					I.mpKill = 4;
					I.hpKill = 8;
					I.conjuration = 4;
					I.castingHaste = (9) * (-10);
					I.silence = 13;
					I.resistPoison = 21;
					I.req = 23;
				}
				if (N === "Emblazoned Orb") {
					if (M.random() > .5) {
						I.name = "Glowing Black Stone";
						I.mp = 45;
						I.intel = 14;
						I.mpKill = 9;
						I.mpRegen = 4;
						I.critChance = 3;
						I.silence = 13;
						I.evocation = 8;
						I.resistMagic = 23;
						I.flavorText = "A powerful stone possessed by a hapless, quirky gnome. Nobody knows for sure how she got her hands on it.";
						I.req = 25;
					} else {
						I.name = "Magnate's Sapphire";
						I.resistCold = 15;
						I.mp = 60;
						I.hp = 35;
						I.mpRegen = 4;
						I.critChance = 5;
						I.castingHaste = -70;
						I.globalHaste = -120;
						I.req = 21;
						I.rarity = 4;
					}
				}
				if (N === "Idol") {
					I.name = "Pearl Fahlnir Totem";
					I.mp = 50;
					I.str = -9;
					I.wis = 11;
					I.allSkills = 1;
					I.allResist = 14;
					I.castingHaste = (9) * (-10);
					I.req = 28;
				}
			}
		}
		if (nt === "range") {
			if (N === "Short Bow") {
				I.name = "Pluckstring";
				I.ias = .15;
				I.enhancedDamage = 3;
				I.hp = 14;
				I.agi = 5;
				I.mpKill = 2;
				I.lightRadius = 5;
				I.attack = 2;
				I.coldDamage = 5;
			}
			if (N === "Hunter's Bow") {
				I.name = "Chirpstrike";
				I.ias = .15;
				I.enhancedDamage = 3;
				I.attack = 4;
				I.critDamage = 3;
				I.hpKill = 2;
				I.expFind = 5;
				I.resistMagic = 9;
				I.physicalDamage = 4;
			}
			if (N === "Composite Bow") {
				I.name = "Runed Oak Bow";
				I.ias = .15;
				I.enhancedDamage = 3;
				I.alteration = 1;
				I.wis = 5;
				I.resistCold = 8;
				I.expFind = 7;
				I.defense = 2;
				I.coldDamage = 5;
				I.req = 13;
			}
			if (N === "Siege Bow") {
				I.name = "Raven Maw Bow";
				I.ias = .15;
				I.enhancedDamage = 3;
				I.attack = 2;
				I.str = 6;
				I.dex = 6;
				I.lightRadius = 5;
				I.channeling = 2;
				I.fireDamage = 3;
				I.req = 15;
			}
			if (N === "Astral Bow") {
				I.name = "Larktwitter Bow";
				I.ias = .15;
				I.enhancedDamage = 3;
				I.mp = 14;
				I.wis = 7;
				I.magMit = 3;
				I.resistMagic = 9;
				I.absorbMagic = 3;
				I.flavorText = "The bow of a mischievous fairy known to flutter about Tendolin Meadows.";
				I.req = 17;
			}
			if (N === "Gothic Bow") {
				I.name = "Stormstrike Bow";
				I.ias = .15;
				I.enhancedDamage = 3;
				I.mp = 16;
				I.parry = 3;
				I.attack = 3;
				I.str = 12;
				I.lightningDamage = 3;
				I.resistLightning = 9;
				I.req = 20;
			}
			if (N === "Ward Bow") {
				I.name = "Qalonscathe";
				I.ias = .15;
				I.enhancedDamage = 3;
				I.critDamage = 5;
				I.attack = 5;
				I.dex = 12;
				I.resistFire = 9;
				I.fireDamage = 3;
				I.req = 22;
			}
			if (N === "Hydra Bow") {
				I.name = "Stormcaller Bow";
				I.ias = .15;
				I.enhancedDamage = 2;
				I.critChance = 3;
				I.absorbLightning = 5;
				I.lightningDamage = 5;
				I.hpKill = 5;
				I.resistCold = 9;
				I.flavorText = "A bow imbued by Rinara to strike down on the Godless aberrations of Vandamor.";
				I.req = 25;
			}
		}
		if (nt === "trinket") {
			if (N === "Trinket") {
				if (M.random() > .5) {
					I.name = "Shyclasp's Fortune";
					I.goldFind = 9;
					I.cha = 10;
					I.sta = 10;
					I.resistCold = 4;
					I.resistLightning = 3;
					I.resistPoison = 7;
					I.resistFire = 9;
					I.flavorText = "A lucky charm used by an old drunkard while gambling in the desert.";
					I.req = 13;
				} else {
					I.name = "Emissary's Craft";
					I.allSkills = 1;
					I.resistPoison = 15;
					I.resistFire = 10;
					I.dodge = 3;
					I.evocation = 5;
					I.req = 12;
					I.rarity = 4;
				}
			}
			if (N === "Memento") {
				if (M.random() > .5) {
					I.name = "Omen of Will";
					I.mp = 9;
					I.hpKill = 7;
					I.mpKill = 2;
					I.expFind = 5;
					I.cold = 9;
					I.defense = 2;
					I.sta = 5;
					I.req = 19;
				} else {
					I.name = "Magnate's Lamp";
					I.expFind = 9;
					I.goldFind = 12;
					I.lightRadius = 12;
					I.hp = 45;
					I.mp = 25;
					I.resistFire = 50;
					I.req = 15;
					I.rarity = 4;
				}
			}
			if (N === "Charm") {
				I.name = "Signet of the Scaled Order";
				I.mp = 16;
				I.offense = 2;
				I.evocation = 3;
				I.fear = 8;
				I.silence = 9;
				I.absorbFire = 2;
				I.absorbCold = 2;
				I.resistFire = 11;
				I.resistCold = 11;
				I.flavorText = "The signet used to identify fellow dragon luminaries.";
				I.req = 30;
			}
		}
	}
	if (newQuality === 1) {
		if (ni === "helmet") {
			if (N === "Hood") {
				I.name = "Vampire Cowl";
				I.enhancedArmor = 65
				I.coldDamage = 5;
				I.sta = 19;
				I.leech = 3;
				I.wraith = 3;
				I.phyMit = 2;
				I.magMit = 2;
				I.flavorText = "This vampiric relic is a favorite amongst the cold-blooded harbingers that wander the depths of Viston's Redoubt.";
				I.req = 36;
			}
			if (N === "Cap") {
				if (M.random() > .5) {
					I.name = "Peasant Crown";
					I.enhancedArmor = 60;
					I.allSkills = 1;
					I.runSpeed = 10;
					I.hpRegen = 4;
					I.intel = 19;
					I.sta = 19;
					I.req = 38;
				} else {
					I.name = "Willow's Flare";
					I.enhancedArmor = 90;
					I.enhanceFire = 5;
					I.allSkills = 2;
					I.resistFire = 24;
					I.resistLightning = 14;
					I.thorns = 25;
					I.allStats = 10;
					I.mpKill = 3;
					I.absorbFire = 3;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Bandana") {
				I.name = "Ebony Headband";
				I.enhancedArmor = 65
				I.fear = 6;
				I.handtohand = 4;
				I.attack = 6;
				I.expFind = 5;
				I.hp = 35;
				I.globalHaste = -30;
				I.req = 40;
			}
			if (N === "Diadem") {
				if (M.random() > .5) {
					I.name = "Crystal Chitin Circlet";
					I.enhancedArmor = 75;
					I.phyMit = 4;
					I.abjuration = 5;
					I.defense = 5;
					I.allSkills = 1;
					I.dex = 16;
					I.abjuration = 4;
					I.req = 42;
				} else {
					I.name = "Venova's Halo";
					I.enhancedArmor = 90;
					I.allSkills = 5;
					I.enhanceMagic = 5;
					I.allResist = 14;
					I.hp = 35;
					I.mp = 65;
					I.resistLightning = 55;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Dark Hood") {
				I.name = "Blood Harvester";
				I.enhancedArmor = 75;
				I.conjuration = 4;
				I.hpKill = 7;
				I.hpRegen = 3;
				I.hp = 30;
				I.leech = 3;
				I.resistCold = 21;
				I.req = 44;
			}
			if (N === "Coronet") {
				I.name = "Crown of Thieves";
				I.enhancedArmor = 75;
				I.dodge = 4;
				I.goldFind = 15;
				I.dex = 25;
				I.hp = 35;
				I.resistFire = 33;
				I.leech = 4;
				I.req = 46;
			}
			if (N === "Miter") {
				if (M.random() > .5) {
					I.name = "Halo of the Enlightened";
					I.enhancedArmor = 75;
					I.critChance = 3;
					I.sta = 15;
					I.alteration = 4;
					I.mp = 42;
					I.allResist = 10;
					I.silence = 6;
					I.lightRadius = 10;
					I.req = 48;
				} else {
					I.name = "Satyr's Turban";
					I.enhancedArmor = 90;
					I.allSkills = 1;
					I.resistMagic = 22;
					I.resistFire = 25;
					setAllStatus(NI, 12, 12, 12, 12);
					I.defense = 8;
					I.mp = 55;
					I.intel = 25;
					I.req = 43;
					I.rarity = 4;
				}
			}
			if (N === "Astral Hood") {
				if (M.random() > .5) {
					I.name = "Acolyte's Sacrament Hood";
					I.allSkills = 2;
					I.alteration = 5;
					I.enhanceMagic = 2;
					I.hpKill = 8;
					I.hp = 40;
					I.mp = 25;
					I.lightRadius = 6;
					I.resistMagic = 40;
					I.req = 50;
				} else {
					I.name = "Malefactor's Terminal";
					I.enhancedArmor = 90;
					I.allSkills = 1;
					I.lightRadius = 20;
					I.enhanceAll = 3;
					I.absorbLightning = 5;
					I.resistLightning = 20;
					I.resistPoison = 13;
					I.resistCold = 13;
					I.allStats = 5;
					I.req = 46;
					I.rarity = 4;
				}
			}
			if (N === "Mail Hood") {
				I.name = "Doomchains";
				I.enhancedArmor = 65;
				I.allStats = 11;
				I.allSkills = 1;
				I.attack = 7;
				I.allResist = 9;
				I.critDamage = 7;
				I.req = 38;
			}
			if (N === "Coif") {
				I.name = "Gleaming Sundered Coif";
				I.enhancedArmor = 75;
				I.critDamage = 6;
				I.evocation = 4;
				I.channeling = 4;
				I.mpKill = 4;
				I.hpKill = 8;
				I.lightRadius = 12;
				I.resistLightning = 36;
				I.req = 42;
			}
			if (N === "Armet") {
				I.name = "Hager's Sparring Helmet";
				I.enhancedArmor = 75;
				I.critChance = 3;
				I.oneHandSlash = 4;
				I.wis = 25;
				I.physicalDamage = 5;
				I.allStats = 12;
				I.allResist = 8;
				I.req = 46;
			}
			if (N === "Sallet") {
				I.name = "Indomitable Guise";
				I.enhancedArmor = 75;
				I.thorns = 12;
				I.weight = 1;
				I.absorbCold = 2;
				I.sta = 24;
				I.hpRegen = 4;
				I.allResist = 14;
				I.req = 50;
			}
			if (N === "Burgonet") {
				if (M.random() > .5) {
					I.name = "Duke's Adoration";
					I.enhancedArmor = 100;
					I.resistMagic = 35;
					I.resistCold = 20;
					I.resistPoison = 15;
					I.wis = 25;
					I.cold = 21;
					I.hp = 20;
					I.req = 42;
					I.rarity = 4;
				} else {
					I.name = "Daimyo's Enso";
					I.enhancedArmor = 90;
					I.enhancePhysical = 5;
					I.enhanceFire = 9;
					I.critChance = 7;
					I.critDamage = 15;
					I.runSpeed = 15;
					I.cold = 40;
					I.castingHaste = -100;
					I.allStats = 13
					I.req = 44;
					I.rarity = 4;
				}
			}
			if (N === "Great Helm") {
				I.name = "Stealskull";
				I.enhancedArmor = 75;
				I.globalHaste = -80;
				I.defense = 5;
				I.leech = 4;
				I.wraith = 4;
				I.hpKill = 10;
				I.mpKill = 5;
				I.hp = 15;
				I.req = 42;
			}
			if (N === "Barbute") {
				if (M.random() > .5) {
					I.name = "Lustrous Brass Helm";
					I.enhancedArmor = 75;
					I.allStats = 10;
					I.silence = 6;
					I.allResist = 15;
					I.enhanceMagic = 3;
					I.magMit = 3;
					I.req = 46;
				} else {
					I.name = "Guardian's Merlon";
					I.enhancedArmor = 90;
					I.allSkills = 2;
					I.allResists = 13;
					I.hp = 66;
					I.globalHaste = -70;
					I.enhancePhysical = 7;
					I.absorbMagic = 5;
					I.critChance = 9;
					I.str = 45;
					I.magMit = 5;
					I.req = 46;
					I.rarity = 4;
				}
			}
			if (N === "Royal Helm") {
				I.name = "Augur's Skull";
				I.enhancedArmor = 90;
				I.allSkills = 2;
				I.resistCold = 21;
				I.resistPoison = 35;
				setAllStatus(NI, 9, 9, 9, 9);
				I.intel = 20;
				I.doubleAttack = 6;
				I.enhanceAll = 2;
				I.req = 42;
				I.rarity = 4;
			}
		}
		if (ni === "neck") {
			if (nT <= 58) {
				var zoo = ~~(1 + M.random() * (5));
				if (zoo === 1) {
					I.name = "Bloodletter's Vial";
					I.allSkills = 1;
					I.runSpeed = 15;
					I.hpRegen = 7;
					I.stun = 16;
					I.cold = 12;
					I.goldFind = 24;
					I.critChance = 5;
					I.doubleAttack = 3;
					I.riposte = 6;
					I.req = 49;
					I.rarity = 4;
				}
				if (zoo === 2) {
					I.name = "The Rising Sun";
					I.lightRadius = 4;
					I.enhanceFire = 3;
					I.hpRegen = 5;
					I.fireDamage = 8;
					I.absorbFire = 3;
					I.req = 38;

				}
				if (zoo === 3) {
					I.name = "Disciple's Symbol of Rinara";
					I.wis = 35;
					I.hpRegen = 5;
					I.resistLightning = 50;
					I.thorns = 15;
					I.enhanceLightning = 5;
					I.req = 40;

				}
				if (zoo === 4) {
					if (M.random() > .5) {
						I.name = "Entariz's Talisman";
						I.resistMagic = 35;
						I.runSpeed = 10;
						I.critChance = 3;
						I.intel = 30;
						I.castingHaste = -60;
						I.req = 40;
					} else {
						I.name = "Satyr's Opulence";
						I.alteration = 5;
						I.conjuration = 5;
						I.resistMagic = 43;
						I.resistCold = 20;
						I.intel = 46;
						I.mpRegen = 4;
						I.enhanceMagic = 4;
						I.req = 45;
						I.rarity = 4;
					}
				}
				if (zoo === 5) {
					if (M.random() > .5) {
						I.name = "Necklace of Whispering Winds";
						I.lightningDamage = 8;
						I.alteration = 4;
						I.conjuration = 4;
						I.silence = 10;
						I.mpKill = 5;
						I.expFind = 3;
						I.req = 40;
					} else {
						I.name = "Baron's Cadenza";
						I.agi = 22;
						I.cold = 35;
						I.allSkills = 2;
						I.cha = 15;
						I.phyMit = 5;
						I.hp = 33;
						I.castingHaste = -120;
						I.wraith = 4;
						I.req = 47;
						I.rarity = 4;
					}
				}
			}
			if (nT >= 59 && nT <= 68) {
				var zoo = ~~(1 + M.random() * (5));
				if (zoo === 1) {
					I.name = "Twinkling Fae Pendant";
					I.dex = 25;
					I.agi = 25;
					I.cha = 25;
					I.lightRadius = 9;
					I.oneHandSlash = 4;
					I.resistLightning = 35;
					I.req = 42;

				}
				if (zoo === 2) {
					I.name = "Amulet of Bozrah";
					I.intel = 33;
					I.resistMagic = 40;
					I.conjuration = 12;
					I.channeling = 5;
					I.critDamage = 5;
					I.flavorText = "Rumors abound that this condemned item possesses a demonic power unknown to those outside the halls of necromancy.";
					I.req = 42;

				}
				if (zoo === 3) {
					I.name = "Shadow Fang Necklace";
					I.attack = 8;
					I.piercing = 6;
					I.parry = 5;
					I.hpKill = 7;
					I.resistCold = 32;
					I.agi = 25;
					I.req = 44;

				}
				if (zoo === 4) {
					I.name = "Amulet of the Storm";
					I.critChance = 5;
					I.critDamage = 10;
					I.castingHaste = -100;
					I.enhanceLightning = 3;
					I.silence = 12;
					I.absorbLightning = 4;
					I.req = 46;
				}
				if (zoo === 5) {
					I.name = "Mendicant's Agimat";
					I.alteration = 7;
					I.abjuration = 12;
					I.mpRegen = 7;
					I.enhanceAll = 3;
					I.resistCold = 40;
					I.resistPoison = 25;
					I.wis = 25;
					I.castingHaste = -100;
					I.req = 49;
					I.rarity = 4;
				}
			}
			if (nT >= 69) {
				var zoo = ~~(1 + M.random() * (5));
				if (zoo === 1) {
					I.name = "Kanthrixen's Talisman";
					I.piercing = 7;
					I.haste = -50;
					I.poisonDamage = 15;
					I.absorbPoison = 5;
					I.str = 35;
					I.req = 46;

				}
				if (zoo === 2) {
					I.name = "Amulet of the Dreadgazer";
					I.defense = 5;
					I.hp = 45;
					I.allResist = 13
					I.offense = 5;
					I.phyMit = 3;
					I.stun = 12;
					I.req = 46;

				}
				if (zoo === 3) {
					I.name = "Kaedorn Badge of Honor";
					I.hp = 55;
					I.mp = 33;
					I.lightRadius = 10;
					I.twoHandSlash = 7;
					I.allResist = 6;
					I.flavorText = "Awarded by Miranda Crossheart to those that earn the Star Citizen award for each month. Typically awarded for cleansing the land of mischievous gnolls that terrorize the countryside.";
					I.req = 48;

				}
				if (zoo === 4) {
					I.name = "Hematite Pentacle";
					I.mp = 60;
					I.intel = 20;
					I.evocation = 8;
					I.conjuration = 4;
					I.enhanceMagic = 5;
					I.castingHaste = -80;
					I.lightRadius = -15;
					I.req = 48;
				}
				if (zoo === 5) {
					I.name = "Duke's Laurel";
					I.allSkills = 3;
					I.globalHaste = -100;
					I.castingHaste = -150;
					I.silence = 15;
					I.stun = 25;
					I.enhanceMagic = 5;
					I.mpRegen = 5;
					I.leech = 3;
					I.req = 43;
					I.rarity = 4;
				}
			}
		}
		if (ni === "ring") {
			if (nT <= 58) {
				var zoo = ~~(1 + M.random() * (5));
				if (zoo === 1) {
					I.name = "Gronk's Wedding Ring";
					I.str = 15;
					I.attack = 5;
					I.hp = 20;
					I.stun = 10;
					I.critDamage = 10;
					I.flavorText = '"Gronk make find of true love. Shiny make me strong. Broken Skull Clan no have ring like dis."';
					I.req = 38;
				}
				if (zoo === 2) {
					I.name = "Augur's Pustule";
					I.allResist = 10;
					I.absorbCold = 5;
					I.leech = 4;
					I.wraith = 6;
					I.lightRadius = 10;
					I.magMit = 5;
					I.critChance = 5;
					I.req = 42;
					I.rarity = 4;
				}
				if (zoo === 3) {
					I.name = "Willow's Seed";
					I.castingHaste = -60;
					I.absorbLightning = 6;
					I.absorbCold = 4;
					I.fear = 20;
					I.mpRegen = 3;
					I.hpRegen = 3;
					I.allStats = 7;
					I.req = 42;
					I.rarity = 4;
				}
				if (zoo === 4) {
					I.name = "Mendicant's Clover";
					I.haste = -80;
					I.mpRegen = 7;
					I.leech = 5;
					I.wis = 15;
					I.intel = 21;
					I.enhanceCold = 5;
					I.critChance = 3;
					I.req = 42;
					I.rarity = 4;
				}
				if (zoo === 5) {
					I.name = "Summoner's Gyre";
					I.castingHaste = -130;
					I.allSkills = 3;
					I.hp = 30;
					I.intel = 15;
					I.critChance = 5;
					I.conjuration = 4;
					I.lightRadius = 15;
					setAbsorbAll(NI, 5);
					I.req = 45;
					I.rarity = 4;
				}
			}
			if (nT >= 59 && nT <= 68) {
				var zoo = ~~(1 + M.random() * (5));
				if (zoo === 1) {
					I.name = "Daimyo's Miyabi";
					I.wraith = 6;
					I.wis = 20;
					I.agi = 15;
					I.enhanceFire = 3;
					I.str = 12;
					I.doubleAttack = 6;
					I.resistCold = 20;
					I.resistLightning = 20;
					I.req = 46;
					I.rarity = 4;
				}
				if (zoo === 2) {
					I.name = "Wraith's Lesion";
					I.hp = 33;
					I.mp = 20;
					I.castingHaste = -80;
					I.critDamage = 12;
					I.magMit = 4;
					I.intel = 15;
					I.enhanceMagic = 3;
					I.req = 43;
					I.rarity = 4;
				}
				if (zoo === 3) {
					I.name = "Venova's Eternity";
					I.haste = -50;
					I.castingHaste = -70;
					I.hpRegen = 5;
					I.mpRegen = 5;
					I.allStats = 8;
					I.absorbMagic = 4;
					I.enhanceMagic = 2;
					I.req = 42;
					I.rarity = 4;
				}
				if (zoo === 4) {
					I.name = "Band of Screaming Winds";
					I.hp = 25;
					I.mp = 25;
					I.resistLightning = 25;
					I.critDamage = 10;
					I.critChance = 3;
					I.req = 46;
				}
				if (zoo === 5) {
					I.name = "Bloodletter's Clot";
					I.leech = 12;
					I.agi = 35;
					I.enhancePhysical = 4;
					I.piercing = 6;
					I.attack = 15;
					I.dex = 15;
					I.haste = -50;
					I.req = 48;
					I.rarity = 4;
				}
			}
			if (nT >= 69) {
				var zoo = ~~(1 + M.random() * (4));
				if (zoo === 1) {
					I.name = "Ring of Rainbow Skies";
					I.offense = 6;
					I.abjuration = 6;
					I.allStats = 7;
					I.allResist = 11;
					I.req = 48;

				}
				if (zoo === 2) {
					I.name = "Elusive Warping Ring";
					I.dodge = 5;
					I.stun = 5;
					I.runSpeed = 8;
					I.dex = 12;
					I.agi = 15;
					I.haste = -40;
					I.req = 48;

				}
				if (zoo === 3) {
					I.name = "Titan's Wrath";
					I.str = 30;
					I.hp = 25;
					I.critChance = 3;
					I.stun = 8;
					I.doubleAttack = 8;
					I.req = 50;

				}
				if (zoo === 4) {
					I.name = "Shirk's Wretched Ring";
					I.allStats = 8;
					I.allResist = 10;
					I.allSkills = 1;
					I.haste = -30;
					I.req = 50;

				}
			}
		}
		if (ni === "shoulders") {
			if (N === "Cloth Drape") {
				I.name = "Spectre's Drape";
				I.enhancedArmor = 65
				I.hp = 35;
				I.dex = 8;
				I.intel = 15;
				I.silence = 10;
				I.fear = 10;
				I.resistMagic = 20;
				I.req = 36;
			}
			if (N === "Woven Drape") {
				I.name = "Gnome Prodigy's Mantle";
				I.enhancedArmor = 65;
				I.evocation = 3;
				I.intel = 21;
				I.abjuration = 3;
				I.resistLightning = 24;
				I.mpRegen = 2;
				I.mp = 20;
				I.req = 40;
			}
			if (N === "Azure Shawl") {
				I.name = "Summoner's Residue";
				I.enhancedArmor = 90;
				I.allResist = 13;
				I.alteration = 3;
				I.abjuration = 3;
				I.intel = 30;
				I.silence = 38;
				I.fear = 25;
				I.hp = 21;
				I.req = 42;
				I.rarity = 4;
			}
			if (N === "Archon Shawl") {
				if (M.random() > .5) {
					I.name = "Shawl of the Siren";
					I.enhancedArmor = 75;
					I.sta = 25;
					I.cha = 35;
					I.fear = 8;
					I.resistCold = 24;
					I.resistFire = 24;
					I.channeling = 5;
					I.req = 48;
				} else {
					I.name = "Willow's Frost";
					I.enhancedArmor = 90;
					I.allResist = 18;
					I.absorbCold = 7;
					I.wis = 36;
					I.enhanceCold = 10;
					I.silence = 33;
					I.magMit = 5;
					I.stun = 20;
					I.sta = 11;
					I.req = 46;
					I.rarity = 4;
				}
			}
			if (N === "Leather Shoulders") {
				I.name = "Gaulite Pads";
				I.enhancedArmor = 65
				I.allStats = 7
				I.riposte = 5;
				I.parry = 5;
				I.physicalDamage = 3;
				I.defense = 5;
				I.phyMit = 5;
				I.req = 36;
			}
			if (N === "Studded Shoulders") {
				I.name = "Simmering Mantle";
				I.enhancedArmor = 65;
				I.absorbFire = 2;
				I.resistFire = 30;
				I.enhanceFire = 2;
				I.evocation = 5;
				I.thorns = 8;
				I.goldFind = 15;
				I.req = 40;
			}
			if (N === "Spiked Shoulders") {
				I.name = "Shang Zhou's Defiance";
				I.enhancedArmor = 75;
				I.handtohand = 10;
				I.agi = 15;
				I.stun = 16;
				I.resistMagic = 35;
				I.critDamage = 8;
				I.req = 44;
			}
			if (N === "Brigand Shoulders") {
				I.name = "Everlasting Grace";
				I.enhancedArmor = 75;
				I.allStats = 10;
				I.alteration = 6;
				I.channeling = 6;
				I.silence = 12;
				I.allResist = 10;
				I.weight = 1;
				I.req = 48;
			}
			if (N === "Scaled Mantle") {
				if (M.random() > .5) {
					I.name = "Doubtful Repent";
					I.enhancedArmor = 65
					I.mp = 35;
					I.wis = 12;
					I.dex = 10;
					I.expFind = 8;
					I.abjuration = 8;
					I.resistPoison = 40;
					I.req = 36;
				} else {
					I.name = "Mendicant's Albatross";
					I.enhancedArmor = 90;
					I.allResist = 14;
					I.enhanceCold = 9;
					I.enhancePoison = 5;
					I.castingHaste = -60;
					I.critChance = 7;
					I.cold = 30;
					I.silence = 45;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Chain Mantle") {
				I.name = "Scavenger's Embrace";
				I.enhancedArmor = 65;
				I.stun = 10;
				I.critDamage = 8;
				I.allResist = 8;
				I.hpKill = 5;
				I.leech = 3;
				I.doubleAttack = 6;
				I.attack = 6;
				I.req = 40;
			}
			if (N === "Kusari Mantle") {
				I.name = "Rowyl's Forged Mantle";
				I.enhancedArmor = 75;
				I.hp = 25;
				I.agi = 10;
				I.dex = 10;
				I.critChance = 2;
				I.resistLightning = 15;
				I.resistCold = 25;
				I.req = 44;
			}
			if (N === "Laminar Mantle") {
				I.name = "Blitzing Vambrace";
				I.enhancedArmor = 75;
				I.hp = 25;
				I.offense = 5;
				I.attack = 8;
				I.cold = 12;
				I.expFind = 7;
				I.resistCold = 30;
				I.req = 48;
			}
			if (N === "Cobalt Spaulders") {
				I.name = "Solitude's Penance";
				I.enhancedArmor = 65
				I.hp = 20;
				I.defense = 4;
				I.twoHandSlash = 8;
				I.wis = 15;
				I.thorns = 12;
				I.req = 36;
			}
			if (N === "Mithril Pauldrons") {
				I.name = "Herbignat's Evisceration";
				I.enhancedArmor = 65;
				I.hp = 25;
				I.str = 15;
				I.conjuration = 8;
				I.channeling = 4;
				I.twoHandBlunt = 8;
				I.resistCold = 35;
				I.req = 40;
			}
			if (N === "Sode") {
				if (M.random() > .5) {
					I.name = "Beguiler's Sonnet";
					I.enhancedArmor = 75;
					I.mp = 20;
					I.dex = 15;
					I.cha = 15;
					I.goldFind = 15;
					I.expFind = 15;
					I.weight = 1;
					I.req = 44;
				} else {
					I.name = "Duke's Proclamation";
					I.enhancedArmor = 90;
					I.allResist = 8;
					I.allStats = 5;
					I.enhanceMagic = 5;
					I.alteration = 3;
					I.hpKill = 8;
					I.absorbMagic = 3;
					I.mpRegen = 3;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Monarch Pauldrons") {
				if (M.random() > .5) {
					I.name = "Wing of Victory";
					I.enhancedArmor = 75;
					I.hpKill = 10;
					I.str = 15;
					I.dex = 15;
					I.allSkills = 2;
					I.allResist = 12;
					I.req = 48;
				} else {
					I.name = "Guardian's Bastion";
					I.enhancedArmor = 80;
					I.resistLightning = 45;
					I.hp = 35;
					I.absorbCold = 5;
					I.req = 42;
					I.rarity = 4;
				}
			}
		}
		if (ni === "back") {
			if (N === "Cape") {
				if (M.random() > .5) {
					I.name = "Hallowed Cloak";
					I.expFind = 8;
					I.allStats = 5;
					I.dex = 5;
					I.hp = 20;
					I.mp = 20;
					I.allResist = 5;
					I.silence = 5;
					I.req = 36;
				} else {
					I.name = "Wraith's Pall";
					I.castingHaste = -200;
					I.intel = 42;
					I.enhancePoison = 7;
					I.enhanceFire = 4;
					I.critChance = 5;
					I.sta = 17;
					I.lightRadius = 15;
					I.allSkills = 3;
					I.req = 36;
					I.rarity = 4;
				}
			}
			if (N === "Cloak") {
				I.name = "Cloak of Autumn";
				I.hpRegen = 2;
				I.abjuration = 4;
				I.alteration = 4;
				I.thorns = 15;
				I.resistFire = 25;
				I.resistCold = 25;
				I.req = 37;
			}
			if (N === "Woven Cloak") {
				if (M.random() > .5) {
					I.name = "Cloak of Penitence";
					I.intel = 15;
					I.sta = 12;
					I.cha = 12;
					I.silence = 12;
					I.enhanceMagic = 2;
					I.magicDamage = 5;
					I.req = 38;
				} else {
					I.name = "Duke's Ascension";
					I.haste = -60;
					I.globalHaste = -100;
					I.mp = 50;
					I.dex = 11;
					I.agi = 12;
					I.str = 11;
					I.evocation = 5;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Fur-Lined Cloak") {
				I.name = "Cloak of Madness";
				I.fireDamage = 5;
				I.hpKill = 10;
				I.defense = 4;
				I.offense = 4;
				I.allResist = 10;
				I.haste = -50;
				I.req = 39;
			}
			if (N === "Drake-hide Cloak") {
				I.name = "Winter's Death";
				I.goldFind = 12;
				I.piercing = 7;
				I.absorbCold = 3;
				I.coldDamage = 10;
				I.resistCold = 40;
				I.enhanceCold = 3;
				I.req = 40;
			}
			if (N === "Brigand's Shroud") {
				I.name = "Venova's Wings";
				I.castingHaste = -120;
				I.str = 11;
				I.agi = 9;
				I.allResist = 10;
				I.hp = 27;
				setAllStatus(NI, 20, 20, 20, 20);
				I.req = 42;
				I.rarity = 4;
			}
			if (N === "Regal Shroud") {
				I.name = "Monarch's Ceremonial Shroud";
				I.cha = 20;
				I.sta = 15;
				I.mp = 20;
				I.parry = 4;
				I.channeling = 6;
				I.critDamage = 7;
				I.lightRadius = 12;
				I.req = 41;
			}
			if (N === "Orcish Cloak") {
				I.name = "Brazen Rectifier's Cloak";
				I.hp = 25;
				I.mp = 25;
				I.mpKill = 12;
				I.oneHandBlunt = 8;
				I.fear = 12;
				I.stun = 8;
				I.req = 42;
			}
			if (N === "Elven Shroud") {
				I.name = "Nature's Punishment";
				I.hpRegen = 3;
				I.silence = 12;
				I.allStats = 12;
				I.enhanceLightning = 5;
				I.absorbLightning = 3;
				I.req = 43;
			}
			if (N === "Emerald Cloak") {
				if (M.random() > .5) {
					I.name = "Rinara's Loathing";
					I.wis = 20;
					I.alteration = 5;
					I.thorns = 20;
					I.critChance = 3;
					I.critDamage = 8;
					I.resistLightning = 50;
					I.req = 43;
				} else {
					I.name = "Daimyo's Wabi";
					I.haste = -80;
					I.castingHaste = -120;
					I.critDamage = 8;
					I.dex = 19;
					I.hp = 16;
					I.mp = 34;
					I.lightRadius = 10;
					setAllStatus(NI, 13, 13, 13, 13);
					I.req = 43;
					I.rarity = 4;
				}
			}
			if (N === "Aviak Cloak") {
				I.name = "Cloak of the Underdark";
				I.attack = 10;
				I.dodge = 4;
				I.offense = 4;
				I.dex = 20;
				I.fear = 10;
				I.poisonDamage = 12;
				I.resistPoison = 30;
				I.req = 44;
			}
			if (N === "Chlamys") {
				I.name = "Molting Griffon Cloak";
				I.offense = 5;
				I.hp = 25;
				I.runSpeed = 5;
				I.critChance = 3;
				I.resistLightning = 25;
				I.resistPoison = 12;
				I.req = 44;
			}
			if (N === "Dragon Cape") {
				I.name = "Rukishna Cloak";
				I.channeling = 5;
				I.evocation = 5;
				I.wis = 15;
				I.intel = 15;
				I.mpKill = 5;
				I.resistFire = 55;
				I.req = 45;
			}
			if (N === "Umbral Shroud") {
				I.name = "Excrescent Cloak";
				I.allStats = 5;
				I.allSkills = 2;
				I.allResist = 10;
				I.expFind = 5;
				I.lightRadius = 5;
				I.req = 46;
			}
			if (N === "Archon Cloak") {
				I.name = "Nordic Sanctuary";
				I.abjuration = 6;
				I.allStats = 6;
				I.hp = 30;
				I.resistCold = 60;
				I.coldDamage = 15;
				I.absorbCold = 5;
				I.req = 47;
			}
			if (N === "Astral Cloak") {
				I.name = "Solfeaux Berserker Cloak";
				I.str = 9;
				I.dex = 9;
				I.haste = -120;
				I.globalHaste = -60;
				I.sta = 9;
				I.agi = 9;
				I.hp = 50;
				I.flavorText = 'A anuran relic imported from the far reaches of Vandamor. Rumored to be enchanted by a high-ranking anuran shaman.';
				I.req = 47;
			}
		}
		if (ni === "chest") {
			if (N === "Elven Robe") {
				I.name = "Robe of the Blighted";
				I.enhancedArmor = 65
				I.sta = 10;
				I.mp = 100;
				I.intel = 10;
				I.resistPoison = 30;
				I.resistLightning = 30;
				I.silence = 15;
				I.flavorText = 'For a brief time this was the favored robe of Revenant Viston.';
				I.req = 36;
			}
			if (N === "Silk Robe") {
				if (M.random() > .5) {
					I.name = "The Spirit Shroud";
					I.enhancedArmor = 65;
					I.magMit = 12;
					I.allSkills = 1;
					I.hpRegen = 5;
					I.absorbCold = 5;
					I.cold = 20;
					I.req = 40;
				} else {
					I.name = "Satyr's Delusion";
					I.enhancedArmor = 90;
					I.allSkills = 3;
					I.allResist = 13
					I.allStats = 13;
					setAllStatus(NI, 10, 10, 10, 10);
					I.enhanceAll = 3;
					I.castingHaste = -100;
					I.lightRadius = 10;
					I.req = 47;
					I.rarity = 4;
				}
			}
			if (N === "Linen Robe") {
				if (M.random() > .5) {
					I.name = "Skin of the Serpent Lord";
					I.enhancedArmor = 75;
					I.magMit = 9;
					I.absorbPoison = 2;
					I.poisonDamage = 25;
					I.allSkills = 1;
					I.castingHaste = -50;
					I.allResist = 10;
					I.req = 44;
				} else {
					I.name = "Wraith's Husk";
					I.enhancedArmor = 90;
					I.magMit = 10;
					I.phyMit = 24;
					I.hp = 80;
					I.enhancePoison = 12;
					I.critChance = 8;
					I.critDamage = 13;
					I.allResist = 14;
					I.conjuration = 20;
					I.req = 44;
					I.rarity = 4;
				}
			}
			if (N === "Azure Robe") {
				if (M.random() > .5) {
					I.name = "Ambrosia Robe";
					I.enhancedArmor = 75;
					I.intel = 20;
					I.mpRegen = 4;
					I.mpKill = 10;
					I.resistMagic = 45;
					I.resistCold = 20;
					I.enhanceMagic = 2;
					I.silence = 8;
					I.req = 48;
				} else {
					I.name = "Summoner's Furnace";
					I.enhancedArmor = 90;
					I.absorbFire = 12;
					I.enhanceFire = 8;
					I.enhanceLightning = 5;
					I.enhanceCold = 5;
					I.conjuration = 13;
					I.evocation = 5;
					I.phyMit = 8;
					I.magMit = 15;
					I.intel = 22;
					I.req = 48;
					I.rarity = 4;
				}
			}
			if (N === "Quilted Tunic") {
				I.name = "Ghastly Vapors";
				I.enhancedArmor = 65
				I.handtohand = 5;
				I.poisonDamage = 15;
				I.hp = 30;
				I.dodge = 5;
				I.enhancePoison = 6;
				I.allResist = 9;
				I.absorbPoison = 4;
				I.req = 36;
			}
			if (N === "Spiked Vestment") {
				I.name = "Zealous Battle Wraps";
				I.enhancedArmor = 65;
				I.attack = 7;
				I.hpKill = 15;
				I.handtohand = 7;
				I.allStats = 12;
				I.critDamage = 7;
				I.req = 40;
			}
			if (N === "Leather Armor") {
				if (M.random() > .5) {
					I.name = "Skin of the Goblin Kin";
					I.enhancedArmor = 75;
					I.leech = 5;
					I.piercing = 7;
					I.hpRegen = 5;
					I.thorns = 17;
					I.req = 44;
				} else {
					I.name = "Friar's Sacrifice";
					I.enhancedArmor = 90;
					I.allResist = 25;
					I.cha = 24;
					I.str = 45;
					I.phyMit = 20;
					I.magMit = 12;
					I.haste = -120;
					setAllStatus(NI, 15, 15, 15, 15);
					I.req = 44;
					I.rarity = 4;
				}
			}
			if (N === "Studded Leather") {
				I.name = "Bronze-Plated Pelt";
				I.enhancedArmor = 75;
				I.defense = 6;
				I.phyMit = 12;
				I.magMit = 12;
				I.hp = 40;
				I.stun = 13;
				I.req = 48;
			}
			if (N === "Chain Mail") {
				if (M.random() > .5) {
					I.name = "Raven Mail";
					I.enhancedArmor = 65
					I.haste = -40;
					I.dex = 20;
					I.cold = 8;
					I.stun = 12;
					I.physicalDamage = 13;
					I.req = 36;
				} else {
					I.name = "Bloodletter's Spleen";
					I.enhancedArmor = 90;
					I.resistPoison = 45;
					I.resistFire = 38;
					I.fear = 26;
					I.lightRadius = 12;
					I.globalHaste = -80;
					I.enhancePhysical = 5;
					I.critChance = 4;
					I.hpKill = 25;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Ring Mail") {
				I.name = "Soul Forge";
				I.enhancedArmor = 65;
				I.hp = 50;
				I.sta = 23;
				I.oneHandSlash = 5;
				I.lightRadius = 5;
				I.fireDamage = 24;
				I.resistFire = 12;
				I.req = 40;
			}
			if (N === "Scale Mail") {
				I.name = "Fanged Bulwark";
				I.enhancedArmor = 75;
				I.str = 10;
				I.defense = 12;
				I.resistFire = 15;
				I.thorns = 30;
				I.req = 44;
			}
			if (N === "Kusari Mail") {
				I.name = "Jin Tao's Wisdom";
				I.enhancedArmor = 75;
				I.intel = 11;
				I.magMit = 10;
				I.stun = 8;
				I.cold = 8;
				I.castingHaste = -60;
				I.mpKill = 7;
				I.allSkills = 1;
				I.req = 48;
			}
			if (N === "Breast Plate") {
				I.name = "Driela's Shell";
				I.enhancedArmor = 65
				I.hp = 50;
				I.str = 15;
				I.defense = 4;
				I.resistPoison = 20;
				I.resistLightning = 20;
				I.resistFire = 20;
				I.resistCold = 50;
				I.cold = 20;
				I.flavorText = 'A rare inter-dimensional treasure originally worn by the King of Maggots.';
				I.req = 36;
			}
			if (N === "Cuirass") {
				if (M.random() > .5) {
					I.name = "Bluntgarde";
					I.enhancedArmor = 65;
					I.hp = 60;
					I.phyMit = 12;
					I.magMit = 12;
					I.defense = 5;
					I.req = 40;
				} else {
					I.name = "Guardian's Fortress";
					I.enhancedArmor = 90;
					I.allSkills = 3;
					I.hp = 60;
					I.stun = 15;
					I.fear = 35;
					I.str = 15;
					I.sta = 25;
					I.enhancePhysical = 5;
					I.lightRadius = 12;
					I.req = 40;
					I.rarity = 4;
				}
			}
			if (N === "Gothic Plate") {
				if (M.random() > .5) {
					I.name = "Morgann's Wrath";
					I.enhancedArmor = 75;
					I.goldFind = 15;
					I.hpKill = 15;
					I.mpKill = 8;
					I.allSkills = 2;
					I.magMit = 10;
					I.req = 44;
				} else {
					I.name = "Venova's Silks";
					I.enhancedArmor = 90;
					I.enhanceMagic = 8;
					I.enhancePhysical = 3;
					setAbsorbAll(NI, 5);
					I.silence = 35;
					I.allResist = 25;
					I.hp = 75;
					I.mp = 42;
					I.req = 44;
					I.rarity = 4;
				}
			}
			if (N === "Archon Plate") {
				I.name = "Raiment of Venova";
				I.enhancedArmor = 75;
				I.magMit = 12;
				I.abjuration = 5;
				I.lightRadius = 15;
				I.silence = 15;
				I.cold = 15;
				I.fear = 15;
				I.stun = 15;
				I.allSkills = 1;
				I.weight = 1;
				I.flavorText = '"Doubt of divine providence must never infest your thoughts. An army full of doubt carries no angels on its shoulders." -Brek Stolrus, Cleric Guildmaster';
				I.req = 48;
			}
		}
		if (ni === "bracers") {
			if (N === "Jade Bracers") {
				I.name = "Accursed Jade Bracer";
				I.enhancedArmor = 65
				I.conjuration = 4;
				I.wis = 12;
				I.sta = 12;
				I.resistPoison = 25;
				I.poisonDamage = 6;
				I.expFind = 5;
				I.req = 36;
			}
			if (N === "Bone Bracers") {
				I.name = "Dragon Bone Bracelet";
				I.enhancedArmor = 65;
				I.mp = 25;
				I.str = 15;
				I.agi = 15;
				I.allSkills = 2;
				I.hp = 25;
				I.resistFire = 15;
				I.resistCold = 15;
				I.req = 40;
			}
			if (N === "Sapphire Bracers") {
				I.name = "Summoner's Cinder";
				I.enhancedArmor = 90;
				I.stun = 20;
				I.enhanceFire = 5;
				I.intel = 20;
				I.critChance = 5;
				I.critDamage = 12;
				I.absorbFire = 5;
				I.mp = 15;
				I.req = 45;
				I.rarity = 4;
			}
			if (N === "Opulent Bracers") {
				I.name = "Ormir's Gift";
				I.enhancedArmor = 75;
				I.expFind = 8;
				I.hpKill = 8;
				I.channeling = 5;
				I.twoHandBlunt = 12;
				I.lightningDamage = 35;
				I.str = 20;
				I.req = 48;
			}
			if (N === "Leather Bracers") {
				I.name = "Staunch Battle Wraps";
				I.enhancedArmor = 65
				I.attack = 5;
				I.oneHandBlunt = 9;
				I.physicalDamage = 6;
				I.resistMagic = 20;
				I.parry = 5;
				I.req = 36;
			}
			if (N === "Patent Bracers") {
				I.name = "Soothing Smoked Bracer";
				I.enhancedArmor = 65;
				I.channeling = 10;
				I.mp = 24;
				I.hpKill = 8;
				I.alteration = 7;
				I.fear = 12;
				I.stun = 12;
				I.req = 40;
			}
			if (N === "Bonded Bracers") {
				if (M.random() > .5) {
					I.name = "Burnt Treant Bracer";
					I.enhancedArmor = 75;
					I.hp = 20;
					I.wis = 15;
					I.hpRegen = 2;
					I.alteration = 8;
					I.evocation = 8;
					I.req = 44;
				} else {
					I.name = "Friar's Candor";
					I.enhancedArmor = 90;
					I.globalHaste = -70;
					I.haste = -50;
					I.allSkills = 1;
					I.critChance = 3;
					I.critDamage = 5;
					I.allStats = 5;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Elven Bracers") {
				I.name = "Conqueror's Bracer";
				I.enhancedArmor = 75;
				I.allStats = 6;
				I.allSkills = 2;
				I.critChance = 4;
				I.globalHaste = -30;
				I.critDamage = 8;
				I.req = 48;
			}
			if (N === "Scaled Bracers") {
				I.name = "Bartender's Bracer";
				I.enhancedArmor = 65
				I.hp = 15;
				I.str = 12;
				I.handtohand = 8;
				I.oneHandBlunt = 8;
				I.weight = 1;
				I.cold = 8;
				I.allResist = 5;
				I.req = 36;
			}
			if (N === "Laminar Bracers") {
				I.name = "Daimyo's Honne";
				I.enhancedArmor = 90;
				I.allResist = 11;
				I.wis = 20;
				I.absorbLightning = 5;
				I.enhanceMagic = 3;
				I.fear = 12;
				I.stun = 8;
				I.lightRadius = 8;
				I.thorns = 15;
				I.req = 42;
				I.rarity = 4;
			}
			if (N === "Splinted Bracers") {
				I.name = "Bloodletter's Serum";
				I.enhancedArmor = 90;
				I.leech = 4;
				I.resistCold = 20;
				I.critDamage = 7;
				I.magMit = 5;
				I.agi = 12;
				I.str = 15;
				I.sta = 20;
				I.req = 42;
				I.rarity = 4;
			}
			if (N === "Kusari Bracers") {
				I.name = "Marshall's Survival Bracer";
				I.enhancedArmor = 75;
				I.runSpeed = 8;
				I.hpKill = 8;
				I.hpRegen = 4;
				I.allResist = 14;
				I.req = 48;
			}
			if (N === "Bronze Bracers") {
				if (M.random() > .5) {
					I.name = "Surestout's Bracer";
					I.enhancedArmor = 65
					I.hp = 25;
					I.defense = 4;
					I.parry = 3;
					I.dodge = 3;
					I.riposte = 2;
					I.sta = 15;
					I.req = 36;
				} else {
					I.name = "Baron's Coda";
					I.enhancedArmor = 90;
					I.mp = 45;
					I.cha = 32;
					I.intel = 15;
					I.allResist = 12;
					I.allStats = 12;
					I.stun = 11;
					I.fear = 25;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Cobalt Bracers") {
				if (M.random() > .5) {
					I.name = "Feblizi's Bracer";
					I.enhancedArmor = 65;
					I.cha = 13;
					I.allResist = 6;
					I.cold = 6;
					I.stun = 6;
					I.oneHandBlunt = 6;
					I.req = 40;
				} else {
					I.name = "Guardian's Parapet";
					I.enhancedArmor = 90;
					I.cold = 45;
					I.allStats = 9;
					I.critChance = 7;
					I.critDamage = 9;
					I.allResist = 14;
					I.hp = 35;
					I.req = 38;
					I.rarity = 4;
				}
			}
			if (N === "Tetrarch Bracers") {
				I.name = "Pindle's Valium Bracer";
				I.enhancedArmor = 75;
				I.channeling = 5;
				I.sta = 14;
				I.thorns = 15;
				I.weight = 1;
				I.wis = 14;
				I.magicDamage = 7;
				I.req = 44;
			}
			if (N === "Gilded Bracers") {
				I.name = "Desolate Binding";
				I.enhancedArmor = 75;
				I.mpKill = 5;
				I.agi = 12;
				I.critChance = 3;
				I.piercing = 6;
				I.allResist = 5;
				I.req = 48;
			}
		}
		if (ni === "gloves") {
			if (N === "Gloves") {
				I.name = "Celestial Gloves";
				I.enhancedArmor = 65
				I.allStats = 7;
				I.conjuration = 4;
				I.allResist = 7;
				I.agi = 7;
				I.dex = 7;
				I.intel = 7;
				I.req = 36;
			}
			if (N === "Cloth Gloves") {
				if (M.random() > .5) {
					I.name = "Gloves of Wyrm Calling";
					I.enhancedArmor = 65;
					I.fear = 15;
					I.evocation = 5;
					I.abjuration = 3;
					I.resistCold = 25;
					I.resistFire = 25;
					I.req = 40;
				} else {
					I.name = "Malefactor's Ballast";
					I.enhancedArmor = 90;
					I.castingHaste = -110;
					I.resistLightning = 45;
					I.hp = 25;
					I.mp = 33;
					I.agi = 19;
					I.intel = 20;
					I.critChance = 7;
					I.enhanceAll = 3;
					I.req = 43;
					I.rarity = 4;
				}
			}
			if (N === "Woven Gloves") {
				if (M.random() > .5) {
					I.name = "Hellish Gloves of Sadism";
					I.enhancedArmor = 75;
					I.goldFind = 15;
					I.intel = 10;
					I.sta = 12;
					I.enhanceFire = 2;
					I.critChance = 3;
					I.castingHaste = -50;
					I.resistFire = 35;
					I.req = 44;
				} else {
					I.name = "Wraith's Flesh";
					I.enhancedArmor = 90;
					I.castingHaste = -130;
					I.resistCold = 50;
					I.resistFire = 25;
					I.hpKill = 12;
					I.mp = 50;
					I.mpRegen = 4;
					I.enhancePoison = 5;
					I.enhanceMagic = 3;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Mesh Gloves") {
				I.name = "Satyr's Satin";
				I.enhancedArmor = 90;
				I.castingHaste = -100;
				I.enhanceMagic = 4;
				I.hpRegen = 3;
				I.mpRegen = 5;
				I.critChance = 5;
				I.sta = 17;
				I.silence = 25;
				I.req = 42;
				I.rarity = 4;
			}
			if (N === "Rawhide Gloves") {
				if (M.random() > .5) {
					I.name = "Venom Grip";
					I.enhancedArmor = 65
					I.sta = 12;
					I.handtohand = 4;
					I.resistPoison = 30;
					I.leech = 4;
					I.poisonDamage = 8;
					I.req = 36;
				} else {
					I.name = "Friar's Epiphany";
					I.enhancedArmor = 90;
					I.haste = -130;
					I.globalHaste = -50;
					I.leech = 10;
					I.resistMagic = 50;
					I.resistFire = 25;
					I.critDamage = 15;
					I.critChance = 6;
					I.riposte = 4;
					I.req = 46;
					I.rarity = 4;
				}
			}
			if (N === "Drakescale Gloves") {
				I.name = "Gravepalm";
				I.enhancedArmor = 65;
				I.hp = 25;
				I.thorns = 8;
				I.intel = 12;
				I.str = 19;
				I.fear = 12;
				I.silence = 8;
				I.stun = 5;
				I.req = 40;
			}
			if (N === "Sharkskin Gloves") {
				I.name = "Negated Grasp";
				I.enhancedArmor = 75;
				I.mp = 16;
				I.phyMit = 2;
				I.magMit = 3;
				I.dodge = 5;
				I.defense = 5;
				I.resistPoison = 15;
				I.resistLightning = 15;
				I.req = 44;
			}
			if (N === "Studded Gloves") {
				I.name = "Ancestral Clutch";
				I.enhancedArmor = 75;
				I.hp = 30;
				I.hpRegen = 2;
				I.globalHaste = -50;
				I.allStats = 6;
				I.allSkills = 1;
				I.fear = 8;
				I.cold = 5;
				I.req = 48;
			}
			if (N === "Lamellar Gauntlets") {
				I.name = "Ghoulhide";
				I.enhancedArmor = 65
				I.coldDamage = 15;
				I.resistCold = 27;
				I.str = 5;
				I.hp = 20;
				I.wraith = 4;
				I.goldFind = 10;
				I.req = 36;
			}
			if (N === "Banded Gauntlets") {
				I.name = "Flame Reckoning";
				I.enhancedArmor = 65;
				I.absorbFire = 7
				I.castingHaste = -80;
				I.weight = 1;
				I.enhanceFire = 6;
				I.evocation = 2;
				I.mpKill = 4;
				I.fireDamage = 15;
				I.thorns = 15;
				I.silence = 25;
				I.cold = 75;
				I.flavorText = '"Few mortals have hitherto dared to glimpse upon the countenance of Highlord Szarthax. Fewer still have lived to confirm his existence." -Brenthalion Aleslammer, Paladin Guildmaster';
				I.req = 40;
			}
			if (N === "Kusari Gauntlets") {
				I.name = "Pyroclastic Grips";
				I.enhancedArmor = 75;
				I.haste = -40;
				I.fireDamage = 15;
				I.resistFire = 32;
				I.attack = 6;
				I.cold = 12;
				I.req = 44;
			}
			if (N === "Brigandine Gauntlets") {
				I.name = "Chameleon's Deception";
				I.enhancedArmor = 75;
				I.cha = 24;
				I.mp = 30;
				I.weight = 1;
				I.agi = 15;
				I.alteration = 5;
				I.allResist = 12;
				I.req = 48;
			}
			if (N === "Cobalt Gauntlets") {
				I.name = "Chaos Knight Gauntlets";
				I.enhancedArmor = 65
				I.hp = 20;
				I.mp = 20;
				I.intel = 12;
				I.oneHandBlunt = 4;
				I.abjuration = 4;
				I.enhanceMagic = 2;
				I.req = 36;
			}
			if (N === "Ornate Gauntlets") {
				if (M.random() > .5) {
					I.name = "Force Chain Gauntlets";
					I.enhancedArmor = 65;
					I.hpKill = 5;
					I.leech = 4;
					I.wraith = 3;
					I.doubleAttack = 4;
					I.magMit = 3;
					I.magicDamage = 6;
					I.req = 40;
				} else {
					I.name = "Duke's Amity";
					I.enhancedArmor = 90;
					I.castingHaste = -160;
					I.leech = 5;
					I.wraith = 12;
					I.enhanceMagic = 3;
					I.allResist = 11;
					I.agi = 17;
					I.req = 46;
					I.rarity = 4;
				}
			}
			if (N === "Tetrarch Gauntlets") {
				I.name = "Qalon's Eruption";
				I.enhancedArmor = 75;
				I.allSkills = 1;
				I.sta = 7;
				I.expFind = 8;
				I.lightRadius = 15;
				I.fireDamage = 20;
				I.absorbFire = 7;
				I.flavorText = 'A gaping maw of death bursts forth, scorching all in its wake.';
				I.req = 44;
			}
			if (N === "Gilded Gauntlets") {
				if (M.random() > .5) {
					I.name = "Gravedigger's Punishment";
					I.enhancedArmor = 75;
					I.hp = 20;
					I.str = 28;
					I.twoHandBlunt = 7;
					I.riposte = 8;
					I.mpKill = 3;
					I.hpKill = 15;
					I.flavorText = 'The loathesome scent of death eminates like rotting flesh.';
					I.req = 48;
				} else {
					I.name = "Baron's Sonata";
					I.enhancedArmor = 90;
					I.castingHaste = -80;
					I.leech = 5;
					I.attack = 20;
					I.mpRegen = 3;
					I.resistPoison = 22;
					I.resistFire = 15;
					I.enhanceMagic = 3;
					I.req = 42;
					I.rarity = 4;
				}
			}
		}
		if (ni === "belt") {
			if (N === "Sash") {
				if (M.random() > .5) {
					I.name = "Clasp of Ears";
					I.enhancedArmor = 65
					I.defense = 3;
					I.leech = 5;
					I.magMit = 4;
					I.phyMit = 6;
					I.flavorText = 'A collection of battle trophies adorned upon your waist serve as a grisly warning to your foes.';
					I.req = 36;
				} else {
					I.name = "Loam Addled Sash";
					I.enhancedArmor = 65
					I.str = 8;
					I.mana = 15;
					I.resistFire = 10;
					I.resistMagic = 10;
					I.abjuration = 3;
					I.conjuration = 2;
					I.req = 36;
				}
			}
			if (N === "Azure Sash") {
				if (M.random() > .5) {
					I.name = "Malefactor's Fuse";
					I.enhancedArmor = 90;
					I.castingHaste = -130;
					I.resistFire = 33;
					I.resistCold = 20;
					I.intel = 15;
					I.wis = 15;
					I.absorbLightning = 5;
					I.critDamage = 8;
					I.allSkills = 1;
					I.req = 42;
					I.rarity = 4;
				} else {
					I.name = "Wraith's Lust";
					I.enhancedArmor = 90;
					I.castingHaste = -100;
					I.intel = 15;
					I.sta = 12;
					I.resistFire = 20;
					I.resistMagic = 20;
					I.evocation = 3;
					I.alteration = 3;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Leather Belt") {
				if (M.random() > .5) {
					I.name = "Terrorwhip";
					I.enhancedArmor = 65
					I.defense = 3;
					I.physicalDamage = 5;
					I.dex = 20;
					I.thorns = 15;
					I.req = 36;
				} else {
					I.name = "Honeycomb Belt";
					I.enhancedArmor = 65
					I.cha = 5;
					I.mana = 50;
					I.haste = -90;
					I.wis = 15;
					I.expFind = 12;
					I.offense = 3;
					I.req = 36;
				}
			}
			if (N === "Heavy Belt") {
				if (M.random() > .5) {
					I.name = "Fairy's Trap";
					I.enhancedArmor = 75;
					I.mpRegen = 3;
					I.mp = 25;
					I.sta = 15;
					I.wraith = 3;
					I.lightRadius = 12;
					I.weight = 1;
					I.req = 42;
				} else {
					I.name = "Friar's Gift";
					I.enhancedArmor = 110;
					I.resistLightning = 15;
					I.resistMagic = 30;
					I.globalHaste = -150;
					I.dex = 19;
					I.critChance = 5;
					I.offense = 4;
					I.req = 45;
					I.rarity = 4;
				}
			}
			if (N === "Mesh Belt") {
				if (M.random() > .5) {
					I.name = "Runed Frontier Belt";
					I.enhancedArmor = 65
					I.str = 10;
					I.dex = 10;
					I.sta = 10;
					I.haste = -150;
					I.weight = 1;
					I.req = 36;
				} else {
					if (M.random() > .5) {
						I.name = "Girdle of Wurmslaying";
						I.enhancedArmor = 65
						I.str = 10;
						I.wis = 10;
						I.intel = 10;
						I.allSkills = 2;
						I.weight = 1;
						I.allStats = 5;
						I.req = 36;
					} else {
						I.name = "Bloodletter's Marrow";
						I.enhancedArmor = 90;
						I.hp = 63;
						I.fear = 24;
						I.allResist = 12;
						I.critDamage = 15;
						I.globalHaste = -50;
						I.agi = 24;
						I.resistMagic = 21;
						I.resistLightning = 25;
						I.req = 45;
						I.rarity = 4;
					}
				}
			}
			if (N === "Splinted Belt") {
				if (M.random() > .5) {
					I.name = "Glacial Dust";
					I.enhancedArmor = 75;
					I.absorbCold = 5;
					I.resistCold = 20;
					I.coldDamage = 15;
					I.enhanceCold = 5;
					I.weight = 1;
					I.req = 42;
				} else {
					I.name = "Pegasus Belt";
					I.enhancedArmor = 75;
					I.runSpeed = 10;
					I.agi = 12;
					I.intel = 12;
					I.str = 12;
					I.critChance = 3;
					I.haste = -150;
					I.req = 42;
				}
			}
			if (N === "Monarch Girdle") {
				if (M.random() > .5) {
					I.name = "Bone-Clasped Girdle";
					I.enhancedArmor = 65
					I.hp = 75;
					I.mp = 75;
					I.str = 7;
					I.dex = 7;
					I.sta = 7;
					I.weight = 1;
					I.req = 36;
				} else {
					I.name = "Belt of Concordance";
					I.enhancedArmor = 65
					I.str = 10;
					I.cha = 10;
					I.resistPoison = 15;
					I.haste = -50;
					I.castingHaste = -50;
					I.allSkills = 1;
					I.req = 36;
				}
			}
			if (N === "Mithril Girdle") {
				if (M.random() > .5) {
					I.name = "Guardian's Moat";
					I.enhancedArmor = 90;
					I.resistPoison = 25;
					I.haste = -80;
					I.globalHaste = -120;
					I.hp = 25;
					I.thorns = 12;
					I.leech = 5;
					I.fear = 15;
					I.req = 45;
					I.rarity = 4;
				} else {
					I.name = "Bile Etched Obsidian Choker";
					I.enhancedArmor = 75;
					I.sta = 10;
					I.str = 10;
					I.dex = 10;
					I.hp = 50;
					I.mp = 50;
					I.allResist = 5;
					I.req = 42;
				}
			}
		}
		if (ni === "legs") {
			if (N === "Pants") {
				I.name = "Imbued Viperskin";
				I.enhancedArmor = 65
				I.hp = 30;
				I.agi = 12;
				I.expFind = 7;
				I.evocation = 3;
				I.resistFire = 15;
				I.resistPoison = 25;
				I.req = 38;
			}
			if (N === "Cotton Pants") {
				I.name = "Villainous Lordship Pants";
				I.enhancedArmor = 65;
				I.mp = 35;
				I.resistMagic = 15;
				I.mpKill = 6;
				I.critChance = 4;
				I.goldFind = 20;
				I.silence = 20;
				I.req = 42;
			}
			if (N === "Linen Pants") {
				I.name = "Mystical Vizier's Pants";
				I.enhancedArmor = 75;
				I.critDamage = 15;
				I.runSpeed = 8;
				I.conjuration = 3;
				I.evocation = 5;
				I.channeling = 7;
				I.req = 46;
			}
			if (N === "Silk Leggings") {
				I.name = "Fantoam Pantaloons";
				I.enhancedArmor = 75;
				I.hp = 50;
				I.intel = 11;
				I.allSkills = 2;
				I.allResist = 10;
				I.req = 50;
			}
			if (N === "Fur Pants") {
				if (M.random() > .5) {
					I.name = "Exalted Furs";
					I.enhancedArmor = 65
					I.allStats = 8;
					I.phyMit = 9;
					I.mpRegen = 3;
					I.resistMagic = 15;
					I.resistCold = 15;
					I.req = 38;
				} else {
					I.name = "Willow's Gust";
					I.enhancedArmor = 90;
					I.mpRegen = 8;
					I.hpRegen = 12;
					I.phyMit = 20;
					I.hp = 50;
					I.enhanceCold = 9;
					I.enhanceLightning = 12;
					I.castingHaste = -50;
					I.silence = 35;
					I.req = 45;
					I.rarity = 4;
				}
			}
			if (N === "Wolf-Hide Pants ") {
				I.name = "Abyssimal Pants";
				I.enhancedArmor = 65;
				I.expFind = 8;
				I.sta = 13;
				I.wis = 17;
				I.dodge = 7;
				I.enhanceMagic = 3;
				I.thorns = 8;
				I.req = 42;
			}
			if (N === "Sharkskin Legs") {
				I.name = "Ethereal Kraken Leggings";
				I.enhancedArmor = 75;
				I.parry = 5;
				I.defense = 7;
				I.globalHaste = -80;
				I.dodge = 5;
				I.cold = 8;
				I.stun = 10;
				I.req = 46;
			}
			if (N === "Studded Legs") {
				I.name = "Friar's Penance";
				I.enhancedArmor = 90;
				I.allResist = 10;
				I.magMit = 6;
				I.phyMit = 10;
				I.hp = 35;
				I.enhancePhysical = 3;
				I.lightRadius = 8;
				I.str = 20;
				I.sta = 16;
				I.agi = 13;
				I.req = 42;
				I.rarity = 4;
			}
			if (N === "Scaled Legs") {
				I.name = "Accursed Serenity Leggings";
				I.enhancedArmor = 65
				I.agi = 14;
				I.dex = 25;
				I.goldFind = 12;
				I.globalHaste = -60;
				I.magicDamage = 8;
				I.silence = 13;
				I.req = 38;
			}
			if (N === "Chausses") {
				I.name = "Vorpal Leggings";
				I.enhancedArmor = 65;
				I.hp = 33;
				I.mp = 22;
				I.wis = 25;
				I.mpRegen = 5;
				I.enhancePoison = 4;
				I.req = 42;
			}
			if (N === "Kusazuri") {
				I.name = "Honored Samurai Legplates";
				I.enhancedArmor = 75;
				I.leech = 5;
				I.dualWield = 5;
				I.doubleAttack = 8;
				I.riposte = 8;
				I.dex = 30;
				I.flavorText = 'The serpent-scaled order fears the samurai.';
				I.req = 46;
			}
			if (N === "Poleyn") {
				I.name = "Haunted Wail";
				I.enhancedArmor = 65
				I.runSpeed = 5;
				I.conjuration = 9;
				I.allStats = 8;
				I.fear = 8;
				I.absorbMagic = 3;
				I.req = 50;
			}
			if (N === "Cobalt Legplates") {
				if (M.random() > .5) {
					I.name = "Eternal Annihilator Legplates";
					I.enhancedArmor = 65;
					I.hp = 35;
					I.str = 17;
					I.hpKill = 20;
					I.globalHaste = -60;
					I.allResist = 10;
					I.req = 38;
				} else {
					I.name = "Baron's Tenor";
					I.enhancedArmor = 90;
					I.allResist = 20;
					I.sta = 25;
					I.absorbMagic = 4;
					I.enhanceMagic = 5;
					I.mpRegen = 4;
					I.lightRadius = 13;
					I.dualWield = 11;
					I.intel = 25;
					I.req = 38;
					I.rarity = 4;
				}
			}
			if (N === "Iron Legplates") {
				if (M.random() > .5) {
					I.name = "Sinister Legplates";
					I.enhancedArmor = 75;
					I.offense = 6;
					I.attack = 10;
					I.sta = 11;
					I.allSkills = 2;
					I.resistMagic = 15;
					I.req = 42;
				} else {
					I.name = "Duke's Rule";
					I.enhancedArmor = 90;
					I.resistCold = 30;
					I.resistLightning = 11;
					I.absorbFire = 5;
					I.allStats = 13
					I.lightRadius = 20;
					I.expFind = 12;
					I.enhanceAll = 3;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Mithril Legplates") {
				if (M.random() > .5) {
					I.name = "Forlorn Lover's Legplates";
					I.enhancedArmor = 75;
					I.castingHaste = -50;
					I.cha = 15;
					I.enhanceMagic = 2;
					I.channeling = 4;
					I.mpKill = 15;
					I.resistMagic = 26;
					I.req = 46;
				} else {
					I.name = "Augur's Rancor";
					I.enhancedArmor = 90;
					I.hp = 95;
					I.resistFire = 30;
					I.resistMagic = 24;
					I.globalHaste = -50;
					I.defense = 6;
					I.critDamage = 5;
					I.enhanceMagic = 5;
					I.allSkills = 2;
					I.req = 46;
					I.rarity = 4;
				}
			}
			if (N === "Royal Legplates") {
				I.name = "Doomhaunch";
				I.enhancedArmor = 65
				I.hp = 50;
				I.globalHaste = -80;
				I.critChance = 5;
				I.critDamage = 15;
				I.fireDamage = 20;
				I.req = 50;
			}
		}
		if (ni === "boots") {
			if (N === "Boots") {
				if (M.random() > .5) {
					I.name = "Strideblazers";
					I.enhancedArmor = 65
					I.runSpeed = 20;
					I.fireDamage = 8;
					I.defense = 3;
					I.goldFind = 15;
					I.lightRadius = 5;
					I.resistFire = 30;
					I.req = 36;
				} else {
					I.name = "Apothic Boots";
					I.enhancedArmor = 65
					I.runSpeed = 15;
					I.hp = 25;
					I.agi = 13;
					I.enhanceMagic = 4;
					I.mpKill = 3;
					I.critChance = 2;
					I.resistPoison = 25;
					I.req = 36;
				}
			}
			if (N === "Light Boots") {
				if (M.random() > .5) {
					I.name = "Sadist's Frostwalkers";
					I.enhancedArmor = 75;
					I.thorns = 7;
					I.critDamage = 8;
					I.attack = 6;
					I.runSpeed = 25;
					I.resistCold = 24;
					I.absorbCold = 2;
					I.req = 42;
				} else {
					I.name = "Malefactor's Resistor";
					I.enhancedArmor = 90;
					I.resistLightning = 40;
					I.runSpeed = 40;
					I.enhanceLightning = 7;
					I.expFind = 7;
					I.allResist = 10;
					I.intel = 33;
					I.req = 43;
					I.rarity = 4;
				}
			}
			if (N === "Heavy Boots") {
				if (M.random() > .5) {
					I.name = "Miracle Workers";
					I.enhancedArmor = 65
					I.hp = 55;
					I.dodge = 5;
					I.dex = 15;
					I.sta = 10;
					I.runSpeed = 20;
					I.channeling = 4;
					I.req = 36;
				} else {
					I.name = "White Lotus Slippers";
					I.enhancedArmor = 65
					I.parry = 4;
					I.riposte = 6;
					I.offense = 4;
					I.fireDamage = 12;
					I.runSpeed = 12;
					I.str = 20;
					I.hp = 30;
					I.allResist = 3;
					I.req = 36;
				}
			}
			if (N === "Sharkskin Boots") {
				if (M.random() > .5) {
					if (M.random() > .5) {
						I.name = "Trek of Glory";
						I.enhancedArmor = 75;
						I.goldFind = 15;
						I.expFind = 15;
						I.mpKill = 8;
						I.hpKill = 12;
						I.cold = 10;
						I.runSpeed = 30;
						I.req = 42;
					} else {
						I.name = "Friar's Grace";
						I.enhancedArmor = 150;
						I.resistAll = 12;
						I.enhancePhysical = 7;
						I.critChance = 7;
						I.globalHaste = -70;
						I.critDamage = 12;
						I.fear = 30;
						I.stun = 30;
						I.req = 42;
						I.rarity = 4;
					}
				} else {
					if (M.random() > .5) {
						I.name = "Peerless Dragonhorn Boots";
						I.enhancedArmor = 75;
						I.magMit = 3;
						setAbsorbAll(NI, 3);
						I.defense = 5;
						I.resistMagic = 12;
						I.agi = 10;
						I.critChance = 5;
						I.req = 42;
					} else {
						I.name = "Willow's Mildew";
						I.enhancedArmor = 90;
						I.runSpeed = 33;
						I.sta = 23;
						I.wis = 19;
						I.enhanceCold = 5;
						I.evocation = 3;
						I.alteration = 3;
						I.dex = 15;
						I.req = 43;
						I.rarity = 4;
					}
				}
			}
			if (N === "Chain Boots") {
				if (M.random() > .5) {
					I.name = "Silkweaver's Treads";
					I.enhancedArmor = 65
					I.hp = 17;
					I.defense = 4;
					I.mpKill = 5;
					I.allStats = 7;
					I.resistPoison = 30;
					I.runSpeed = 30;
					I.req = 36;
				} else {
					I.name = "Mendicant's Horseshoe";
					I.enhancedArmor = 90;
					I.runSpeed = 25;
					I.fear = 25;
					I.stun = 20;
					I.sta = 13;
					I.dex = 20;
					I.abjuration = 5;
					I.evocation = 3;
					I.channeling = 8;
					I.conjuration = 4;
					I.req = 42;
					I.rarity = 4;
				}
			}
			if (N === "Sovereign Boots") {
				if (M.random() > .5) {
					I.name = "Battle Traveler";
					I.enhancedArmor = 75;
					I.runSpeed = 25;
					I.physicalDamage = 15;
					I.sta = 15;
					I.str = 15;
					I.hpKill = 15;
					I.thorns = 7;
					I.goldFind = 24;
					I.req = 42;
				} else {
					I.name = "Blazing Boots of Erasthule";
					I.enhancedArmor = 75;
					I.runSpeed = 13;
					I.absorbFire = 5;
					I.piercing = 6;
					I.dex = 16;
					I.cha = 10;
					I.agi = 20;
					I.resistFire = 20;
					I.castingHaste = -40;
					I.phyMit = 2;
					I.req = 42;
				}
			}
			if (N === "Steel Boots") {
				if (M.random() > .66) {
					I.name = "Blood Rider";
					I.enhancedArmor = 65
					I.poisonDamage = 6;
					I.critDamage = 15;
					I.hp = 25;
					I.weight = 1;
					I.dex = 40;
					I.req = 36;
				} else {
					if (M.random() > .5) {
						I.name = "Augur's Sludge";
						I.enhancedArmor = 90;
						I.runSpeed = 25;
						I.resistLightning = 25;
						I.resistPoison = 40;
						I.resistMagic = 12;
						I.hp = 35;
						I.mp = 15;
						I.fear = 35;
						I.enhanceAll = 2;
						I.conjuration = 8;
						I.req = 42;
						I.rarity = 4;
					} else {
						I.name = "Baron's Rhythm";
						I.enhancedArmor = 90;
						I.runSpeed = 30;
						I.cold = 15;
						I.expFind = 10;
						I.stun = 20;
						I.cha = 24;
						I.dex = 19;
						I.resistCold = 25;
						I.resistPoison = 25;
						I.hp = 15;
						I.req = 42;
						I.rarity = 4;
					}
				}
			}
			if (N === "Sabatons") {
				if (M.random() > .5) {
					I.name = "Blessed Traveler";
					I.enhancedArmor = 75;
					I.allStats = 8;
					I.cold = 15;
					I.allResist = 13
					I.runSpeed = 40;
					I.alteration = 5;
					I.req = 42;
				} else {
					I.name = "Boots of the Storm";
					I.enhancedArmor = 75;
					I.str = 10;
					I.hp = 35;
					I.sta = 10;
					I.resistCold = 25;
					I.resistMagic = 25;
					I.runSpeed = 33;
					I.conjuration = 4;
					I.evocation = 2;
					I.req = 42;
				}
			}
		}
		if (ni === "weapons") {
			if (nt === "slashed") {
				if (N === "Sword") {
					I.name = "Clastocaust's Flame";
					I.enhancedDamage = 6;
					I.hp = 50;
					I.sta = 10;
					I.fireDamage = 30;
					I.resistFire = 20;
					I.req = 36;
					I.proc = "Effect: Flame of the Thalens";
				}
				if (N === "Scimitar") {
					I.name = "Scimitar of the Grovecaller";
					I.enhancedDamage = 5;
					I.ias = .16666;
					I.hp = 25;
					I.allSkills = 2;
					I.thorns = 12;
					I.wraith = 5;
					I.lightningDamage = 25;
					I.req = 38;
					I.flavorText = 'Your lupine familiar can always be counted upon to tank a God for you.';
					I.proc = "Effect: Grovecaller";
				}
				if (N === "Axe") {
					I.name = "Fluxbladed Axe";
					I.enhancedDamage = 9;
					I.str = 12;
					I.sta = 10;
					I.oneHandSlash = 4;
					I.fear = 9;
					I.magicDamage = 30;
					I.req = 40;
					I.flavorText = 'This artifact appears to be a rusty old axe adorned in twirling strands of ether.';
					I.proc = "Effect: Chaos Flux";
				}
				if (N === "Claws") {
					I.name = "Spined Dragon Claws"; // good proc
					I.ias = .34;
					I.enhancedDamage = 1;
					I.oneHandSlash = 4;
					I.leech = 6;
					I.critDamage = 8;
					I.resistPoison = 25;
					I.poisonDamage = 15;
					I.flavorText = 'Falzitherin\'s oozing salivations appear to be encrusted upon the blades.';
					I.req = 42;
				}
				if (N === "Long Sword") {
					I.name = "Hydraclash";
					I.enhancedDamage = 8;
					I.fireDamage = 21;
					I.allSkills = 1;
					I.absorbFire = 2;
					I.resistFire = 30;
					I.enhanceFire = 3;
					I.req = 44;
					I.proc = "Effect: Hydra Bolt";
				}
				if (N === "Chokuto") {
					if (M.random() > .5) {
						I.name = "Bloodmoon";
						I.enhancedDamage = 9;
						I.globalHaste = -60;
						I.hpKill = 12;
						I.mpKill = 5;
						I.leech = 5;
						I.conjuration = 12;
						I.str = 15;
						I.req = 46;
					} else {
						I.name = "Daimyo's Giri";
						I.damage = 20;
						I.delay = 2600;
						I.globalHaste = -300;
						I.fireDamage = 75;
						I.enhanceFire = 12;
						I.enhancePhysical = 7;
						I.resistFire = 60;
						I.leech = 9;
						I.critChance = 13;
						I.proc = "Effect: Combustion";
						I.req = 46;
						I.rarity = 4;
					}
				}
				if (N === "War Axe") {
					I.name = "Axe of Resistance";
					I.enhancedDamage = 10;
					I.allResist = 20;
					I.allSkills = 2;
					I.allStats = 6;
					I.req = 48;
				}
				if (N === "Kusanagi") {
					I.name = "Fernzephyr";
					I.ias = .25;
					I.enhancedDamage = 4;
					I.critChance = 7;
					I.critDamage = 7;
					I.allStats = 5;
					I.leech = 6;
					I.thorns = 21;
					I.lightningDamage = 24;
					I.req = 50;
				}
			}
			if (nt === "crushed") {
				if (N === "Mace") {
					I.name = "Spiroc Warhammer";
					I.enhancedDamage = 8;
					I.mp = 16;
					I.wis = 15;
					I.hp = 50;
					I.abjuration = 4;
					I.mp = 50;
					I.resistLightning = 15;
					I.mpRegen = 4;
					I.req = 36;
				}
				if (N === "Club") {
					if (M.random() > .5) {
						I.name = "Fleshrender";
						I.enhancedDamage = 8;
						I.globalHaste = -50;
						I.str = 12;
						I.allSkills = 1;
						I.critDamage = 15;
						I.critChance = 4;
						I.physicalDamage = 11;
						I.req = 38;
					} else {
						I.name = "Willow's Calamity";
						I.damage = 21;
						I.delay = 2800;
						I.allResist = 18;
						I.allSkills = 3;
						I.hp = 65;
						I.castingHaste = -130;
						I.enhanceFire = 13;
						I.enhanceMagic = 6;
						I.stun = 26;
						I.wis = 35;
						I.req = 38;
						I.rarity = 4;
					}
				}
				if (N === "Morning Star") {
					I.name = "Rathmonan's Vortex";
					I.ias = .45;
					I.mp = 100;
					I.abjuration = 4;
					I.alteration = 8;
					I.castingHaste = -80;
					I.lightningDamage = 32;
					I.req = 40;
					I.proc = "Effect: Shock Nova";
				}
				if (N === "Spiked Club") {
					I.name = "Moonfall";
					I.enhancedDamage = 9;
					I.mpKill = 4;
					I.physicalDamage = 8;
					I.fireDamage = 27;
					I.magMit = 8;
					I.lightRadius = 12;
					I.req = 42;
					I.proc = "Effect: Meteor Strike";
				}
				if (N === "Jagged Star") {
					I.name = "Sureshrill Frost";
					I.enhancedDamage = 10;
					I.allStats = 7;
					I.absorbCold = 3;
					I.physicalDamage = 10;
					I.coldDamage = 21;
					I.cold = 15;
					I.req = 44;
				}
				if (N === "Scepter") {
					I.name = "Truesight Hammer";
					I.enhancedDamage = 11;
					I.wis = 25;
					I.hpKill = 8;
					I.mpKill = 8;
					I.enhanceMagic = 2;
					I.channeling = 6;
					I.evocation = 6;
					I.req = 46;
					I.proc = "Effect: Banish Summoned";
				}
				if (N === "Cudgel") {
					I.name = "Earthshaker";
					I.enhancedDamage = 13;
					I.critDamage = 15;
					I.stun = 12;
					I.mpRegen = 3;
					I.castingHaste = -50;
					I.enhanceFire = 2;
					I.enhancePhysical = 4;
					I.evocation = 8;
					I.req = 48;
					I.proc = "Effect: Tremor";
				}
				if (N === "Caduceus") {
					I.name = "Venova's Dawn";
					I.enhancedDamage = 10;
					I.hp = 30;
					I.silence = 15;
					I.enhanceAll = 3;
					I.allSkills = 2;
					I.wis = 15;
					I.resistMagic = 15;
					I.resistPoison = 40;
					I.req = 50;
					I.flavorText = '"The harbinger of light carries his torch at the darkest hour." -Alimaja Shanthun, Cleric Guildmaster';
					I.proc = "Effect: Banish Undead";
				}
			}
			if (nt === "pierced") {
				if (N === "Dagger") {
					if (M.random() > .5) {
						I.name = "Spineripper";
						I.enhancedDamage = 4;
						I.mp = 25;
						I.castingHaste = -50;
						I.allSkills = 1;
						I.expFind = 8;
						I.wraith = 8;
						I.dex = 16;
						I.req = 36;
					} else {
						I.name = "Malefactor's Coil";
						I.damage = 15;
						I.delay = 1900;
						I.castingHaste = -150;
						I.enhanceCold = 12;
						I.allResist = 12;
						I.evocation = 5;
						I.critChance = 5;
						I.silence = 50;
						I.conjuration = 5;
						I.alteration = 9;
						I.lightRadius = 7;
						setAbsorbAll(NI, 4);
						I.req = 36;
						I.rarity = 4;
					}
				}
				if (N === "Dirk") {
					if (M.random() > .5) {
						I.name = "Stormspike";
						I.enhancedDamage = 6;
						I.castingHaste = -70;
						I.silence = 15;
						I.mpRegen = 3;
						I.enhanceLightning = 3;
						I.thorns = 15;
						I.resistLightning = 35;
						I.req = 38;
					} else {
						I.name = "Baron's Glissando";
						I.damage = 18;
						I.delay = 2400;
						I.haste = -220;
						I.cha = 35;
						setAbsorbAll(NI, 4);
						setAllStatus(NI, 8, 8, 8, 8);
						I.dex = 24;
						I.sta = 24;
						I.lightRadius = 10;
						I.proc = "Effect: Crash Cymbal";
						I.req = 38;
						I.rarity = 4;
					}
				}
				if (N === "Kris") {
					I.name = "Blade of the Fahlnir";
					I.enhancedDamage = 7;
					I.dex = 16;
					I.sta = 12;
					I.parry = 4;
					I.leech = 5;
					I.dodge = 5;
					I.riposte = 3;
					I.runSpeed = 10;
					I.req = 40;
				}
				if (N === "Poignard") {
					if (M.random() > .5) {
						I.name = "Fleshripper";
						I.enhancedDamage = 4;
						I.leech = 5;
						I.attack = 7;
						I.critDamage = 8;
						I.critChance = 5;
						I.enhancePhysical = 4;
						I.req = 42;
					} else {
						I.name = "Bloodletter's Lancet";
						I.damage = 22;
						I.delay = 2900;
						I.allStats = 16;
						I.allSkills = 2;
						I.globalHaste = -160;
						I.allResist = 11;
						I.expFind = 9;
						I.hpKill = 12;
						I.fear = 15;
						I.absorbPoison = 4;
						I.proc = "Effect: Incision";
						I.req = 42;
						I.rarity = 4;
					}
				}
				if (N === "Rondel") {
					I.name = "Dawnrider";
					I.ias = .15;
					I.enhancedDamage = 6;
					I.cha = 15;
					I.wraith = 6;
					I.doubleAttack = 6;
					I.resistMagic = 25;
					I.magicDamage = 15;
					I.allSkills = 2;
					I.req = 44;
				}
				if (N === "Spear") {
					I.name = "Thicket Slime Harpoon";
					I.enhancedDamage = 6;
					I.mp = 30;
					I.wis = 15;
					I.critChance = 5;
					I.conjuration = 6;
					I.abjuration = 5;
					I.castingHaste = -60;
					I.resistPoison = 15;
					I.req = 46;
				}
				if (N === "Cinquedeas") {
					if (M.random() > .5) {
						I.name = "Vexthorne";
						I.ias = .27;
						I.enhancedDamage = 4;
						I.offense = 5;
						I.allSkills = 2;
						I.critChance = 6;
						I.physicalDamage = 24;
						I.enhancePhysical = 5;
						I.fear = 8;
						I.req = 48;
					} else {
						I.name = "Satyr's Artifice";
						I.damage = 15;
						I.delay = 2000;
						I.haste = -150;
						I.castingHaste = -100;
						I.enhanceAll = 3;
						I.allResist = 28;
						I.allSkills = 2;
						I.lightRadius = 15;
						I.proc = "Effect: Elysian Litany";
						I.req = 49;
						I.rarity = 4;
					}
				}
				if (N === "Stiletto") {
					I.name = "Gold-Plated Stiletto";
					I.enhancedDamage = 7;
					I.allStats = 10;
					I.leech = 6;
					I.wraith = 6;
					I.goldFind = 15;
					I.piercing = 8;
					I.resistFire = 25;
					I.req = 50;
					I.proc = "Effect: Dismiss Summoned";
				}
			}
			if (nt === "cleaved") {
				if (N === "Giant Sword") {
					I.name = "Steel Overcast";
					I.enhancedDamage = 5;
					I.abjuration = 8;
					I.evocation = 6;
					I.defense = 8;
					I.thorns = 32;
					I.lightRadius = 12;
					I.lightningDamage = 44;
					I.req = 36;
				}
				if (N === "Giant Axe") {
					I.name = "Crokyn Broad Axe";
					I.enhancedDamage = 9;
					I.str = 11;
					I.wis = 25;
					I.intel = 25;
					I.allResist = 9;
					I.allSkills = 2;
					I.magicDamage = 50;
					I.proc = "Effect: Crokyn";
					I.req = 38;
				}
				if (N === "Champion Sword") {
					if (M.random() > .5) {
						I.name = "Swordguard";
						I.enhancedDamage = 10;
						I.leech = 10;
						I.defense = 8;
						I.parry = 5;
						I.twoHandSlash = 5;
						I.mpRegen = 4;
						I.allResist = 18;
						I.req = 40;
					} else {
						I.name = "Augur's Harvester";
						I.damage = 50;
						I.delay = 4400;
						I.globalHaste = -350;
						I.allResist = 25;
						setAllResists(NI, 5, 5, 5, 5, 5);
						I.hp = 80;
						I.mp = 55;
						I.conjuration = 15;
						I.poisonDamage = 135;
						I.critChance = 10;
						I.hpKill = 15;
						I.str = 25;
						I.sta = 15;
						I.proc = "Effect: Burning Rupture";
						I.req = 40;
						I.rarity = 4;
					}
				}
				if (N === "Bastard Sword") {
					I.name = "Dark Sword of Tolloth";
					I.enhancedDamage = 11;
					I.hp = 50;
					I.intel = 30;
					I.globalHaste = -60;
					I.dex = 25;
					I.twoHandSlash = 6;
					I.resistCold = 40;
					I.leech = 15;
					I.req = 42;
					I.flavorText = '"Eat your enemies alive-body, mind, and soul!" -Loveal S\'Nez, Shadow Knight Guildmaster';
					I.proc = "Effect: Soul Leech";
				}
				if (N === "Gothic Axe") {
					I.name = "Polyburst Axe";
					I.enhancedDamage = 12;
					I.allSkills = 3;
					I.allStats = 13
					I.allResist = 14;
					I.leech = 10;
					I.wraith = 10;
					I.req = 44;
				}
				if (N === "Katana") {
					I.name = "Emperor's Katana of Resolve";
					I.enhancedDamage = 11;
					I.attack = 15;
					I.lightningDamage = 55;
					I.leech = 11;
					I.critChance = 12;
					I.hpKill = 15;
					I.globalHaste = -80;
					I.yPos = -448;
					I.req = 46;
					I.proc = "Effect: Rain of Swords";
				}
				if (N === "Colossus Sword") {
					I.name = "Monsoon";
					I.enhancedDamage = 13;
					I.haste = -100;
					I.str = 30;
					I.sta = 25;
					I.cold = 15;
					I.doubleAttack = 7;
					I.resistLightning = 25;
					I.yPos = -448;
					I.req = 48;
				}
				if (N === "Mythical Sword") {
					I.name = "Beckon";
					I.enhancedDamage = 14;
					I.intel = 35;
					I.conjuration = 15;
					I.channeling = 8;
					I.critDamage = 20;
					I.fear = 20;
					I.leech = 9;
					I.enhanceMagic = 3;
					I.poisonDamage = 60;
					I.req = 50;
				}
			}
			if (nt === "staff") {
				if (N === "Staff") {
					I.name = "Ribcracker";
					I.enhancedDamage = 21;
					I.globalHaste = -120;
					I.dex = 35;
					I.critChance = 12;
					I.critDamage = 11;
					I.physicalDamage = 75;
					I.flavorText = 'It\'s not abuse if it doesn\'t leave a mark.';
					I.req = 36;
				}
				if (N === "Runic Staff") {
					I.name = "Chromatic Malice";
					I.enhancedDamage = 5;
					I.mp = 25;
					I.intel = 20;
					I.enhanceCold = 2;
					I.enhanceLightning = 2;
					I.enhanceFire = 2;
					I.hp = 50;
					I.allSkills = 3;
					I.castingHaste = -100;
					I.thorns = 30;
					I.allResist = 30;
					I.req = 38;
				}
				if (N === "Cedar Staff") {
					I.name = "Staff of Undead Heretics";
					I.enhancedDamage = 6;
					I.mp = 75;
					I.allStats = 13
					I.resistPoison = 50;
					I.resistMagic = 30;
					I.conjuration = 12;
					I.mpKill = 8;
					I.intel = 25;
					I.enhancePoison = 7;
					I.req = 40;
				}
				if (N === "Quarterstaff") {
					I.name = "Sin Collector";
					I.enhancedDamage = 7;
					I.mp = 50;
					I.mpKill = 12;
					I.allSkills = 4;
					I.silence = 12;
					I.fear = 12;
					I.castingHaste = -80;
					I.intel = 32;
					I.expFind = 25;
					I.req = 42;
				}
				if (N === "Cosmic Staff") {
					if (M.random() > .5) {
						I.name = "Staff of the Earthcrafter";
						I.enhancedDamage = 8;
						I.mp = 50;
						I.wis = 40;
						I.hp = 60;
						I.enhanceLightning = 6;
						I.allSkills = 3;
						I.allResist = 18;
						I.req = 44;
					} else {
						I.name = "Summoner's Conduit";
						I.damage = 42;
						I.delay = 3700;
						I.hp = 63;
						I.mp = 137;
						I.allSkills = 5;
						I.enhanceLightning = 15;
						I.enhanceCold = 9;
						I.enhanceFire = 9;
						I.conjuration = 15;
						I.mpRegen = 10;
						I.castingHaste = -200;
						I.fireDamage = 199;
						I.req = 44;
						I.rarity = 4;
					}
				}
				if (N === "Archon Staff") {
					I.name = "Withered Totem of Gorgek";
					I.enhancedDamage = 9;
					I.wis = 30;
					I.intel = 30;
					I.dex = 20;
					I.abjuration = 8;
					I.conjuration = 8;
					I.evocation = 5;
					I.mpRegen = 3;
					I.hpRegen = 5;
					I.castingHaste = -80;
					I.enhanceAll = 4;
					I.req = 46;
				}
			}
			if (nt === "smashed") {
				if (N === "Giant Mace") {
					I.name = "Blight, Hammer of Vedria";
					I.enhancedDamage = 10;
					I.poisonDamage = 36;
					I.wis = 25;
					I.sta = 25;
					I.intel = 25;
					I.conjuration = 5;
					I.globalHaste = -80;
					I.absorbPoison = 4;
					I.resistPoison = 40;
					I.req = 36;
					I.proc = "Effect: Scourge";
				}
				if (N === "Auric Maul") {
					if (M.random() > .5) {
						I.name = "Facesmasher";
						I.enhancedDamage = 14;
						I.hp = 60;
						I.armor = 25;
						I.sta = 15;
						I.allSkills = 3;
						I.physicalDamage = 40;
						I.req = 38;
					} else {
						I.name = "Venova's Martel";
						I.damage = 55;
						I.delay = 4800;
						I.critChance = 20;
						I.enhanceAll = 10;
						I.wis = 50;
						I.sta = 33;
						I.lightRadius = 24;
						I.castingHaste = -250;
						I.haste = -100;
						I.leech = 6;
						I.alteration = 9;
						I.proc = "Effect: Baptism";
						I.req = 38;
						I.rarity = 4;
					}
				}
				if (N === "Mallet") {
					I.name = "Shattermaul";
					I.enhancedDamage = 14;
					I.leech = 6;
					I.critChance = 12;
					I.critDamage = 20;
					I.twoHandBlunt = 5;
					I.offense = 8;
					I.physicalDamage = 40;
					I.req = 40;
				}
				if (N === "Ogre Maul") {
					I.name = "Bloodtree Stump";
					I.enhancedDamage = 14;
					I.critChance = 13;
					I.str = 25;
					I.twoHandBlunt = 7;
					I.globalHaste = -90;
					I.allResist = 20;
					I.magicDamage = 45;
					I.req = 42;
				}
				if (N === "Great Maul") {
					I.name = "The Martel of Pain";
					I.enhancedDamage = 13;
					I.wraith = 9;
					I.leech = 9;
					I.enhancePhysical = 6;
					I.globalHaste = -120;
					I.thorns = 26;
					I.physicalDamage = 50;
					I.flavorText = 'My prediction is pain.';
					I.req = 44;
				}
				if (N === "Sledgehammer") {
					I.name = "Gardash";
					I.enhancedDamage = 14;
					I.haste = -60;
					I.allStats = 13
					I.leech = 15;
					I.silence = 15;
					I.alteration = 10;
					I.conjuration = 10;
					I.enhancePhysical = 3;
					I.poisonDamage = 50;
					I.req = 46;
				}
				if (N === "Umbral Hammer") {
					I.name = "Barbarian Spiritist's Hammer";
					I.enhancedDamage = 14;
					I.wis = 28;
					I.intel = 28;
					I.wraith = 10;
					I.alteration = 5;
					I.abjuration = 9;
					I.enhanceCold = 5;
					I.absorbCold = 5;
					I.coldDamage = 75;
					I.req = 48;
					I.proc = "Effect: Winter's Roar";
				}
				if (N === "Thunder Maul") {
					I.name = "Ashenbone Warhammer";
					I.enhancedDamage = 13;
					I.critDamage = 25;
					I.doubleAttack = 12;
					I.attack = 20;
					I.goldFind = 12;
					I.leech = 12;
					I.globalHaste = -100;
					I.fear = 20;
					I.enhancePhysical = 6;
					I.physicalDamage = 60;
					I.req = 50;
				}
			}
		}
		if (ni === "shield") {
			if (nt === "shield") {
				if (N === "Buckler") {
					I.name = "Arwen's Blessed Circle";
					I.enhancedArmor = 65
					I.defense = 6;
					I.wraith = 5;
					I.globalSkill = -60;
					I.alteration = 4;
					I.oneHandBlunt = 4;
					I.allResist = 18;
					I.req = 36;
				}
				if (N === "Small Shield") {
					I.name = "Runewood Shield";
					I.enhancedArmor = 65
					I.wis = 21;
					I.mpRegen = 3;
					I.alteration = 6;
					I.abjuration = 5;
					I.expFind = 12;
					I.cold = 15;
					I.fear = 10;
					I.resistFire = 40;
					I.req = 38;
				}
				if (N === "Kite Shield") {
					I.name = "Wexxen's Rebuke";
					I.enhancedArmor = 65;
					I.enhanceAll = 2;
					I.coldDamage = 35;
					I.fireDamage = 45;
					I.lightningDamage = 45;
					I.allResist = 30;
					I.req = 40;
				}
				if (N === "Round Shield") {
					I.name = "Shield of Prachen";
					I.enhancedArmor = 65;
					I.attack = 8;
					I.evocation = 6;
					I.lightningDamage = 25;
					I.runSpeed = 12;
					I.cold = 20;
					I.resistLightning = 50;
					I.req = 42;
				}
				if (N === "Gothic Shield") {
					I.name = "Destitute Wall";
					I.enhancedArmor = 75;
					I.silence = 10;
					I.mp = 50;
					I.castingHaste = -80;
					I.mpKill = 8;
					I.intel = 25;
					I.allSkills = 1;
					I.flavorText = 'A shield that inspires hopelessness in your foes.';
					I.req = 44;
				}
				if (N === "Crown Shield") {
					I.name = "Shield of Prism Hues";
					I.enhancedArmor = 75;
					I.cha = 22;
					I.magMit = 11;
					I.leech = 9;
					I.globalHaste = -60;
					I.fear = 12;
					I.allResist = 35;
					I.req = 46;
				}
				if (N === "Aegis") {
					I.name = "Ashenbone Shield";
					I.enhancedArmor = 75;
					I.sta = 15;
					I.hp = 60;
					I.enhancePhysical = 2;
					I.critChance = 5;
					I.wraith = 9;
					I.doubleAttack = 6;
					I.resistPoison = 45;
					I.req = 48;
				}
				if (N === "Monarch") {
					if (M.random() > .5) {
						I.name = "Shield of Conqueror";
						I.enhancedArmor = 75;
						I.phyMit = 6;
						I.absorbPoison = 4;
						I.mpRegen = 4;
						I.wraith = 8;
						I.leech = 10;
						I.str = 30;
						I.resistMagic = 35;
						I.resistPoison = 50;
						I.flavorText = '"With sword and shield in hand, we shall rout you out like a den of vipers." -Captain Tillin, Warrior Guildmaster';
						I.req = 50;
					} else {
						I.name = "Guardian's Wall";
						I.enhancedArmor = 90;
						I.resistCold = 45;
						I.resistMagic = 30;
						I.hp = 35;
						I.allSkills = 1;
						setAllStatus(NI, 15, 15, 15, 15);
						setAbsorbAll(NI, 4);
						I.req = 42;
						I.rarity = 4;
					}
				}
			}
			if (nt === "offhand") {
				if (N === "Stein") {
					if (M.random() > .5) {
						I.name = "Silandra's Special Brew";
						I.hp = 25;
						I.mp = 60;
						I.channeling = 6;
						I.evocation = 4;
						I.conjuration = 6;
						I.goldFind = 20;
						I.castingHaste = -60;
						I.req = 36;
					} else {
						I.name = "Satyr's Chalice";
						I.req = 36;
						I.mp = 133;
						I.hp = 70;
						I.castingHaste = -110;
						I.enhanceMagic = 10;
						I.mpRegen = 10;
						I.defense = 5;
						I.dodge = 5;
						I.mpKill = 19;
						I.hpRegen = 5;
						I.rarity = 4;
					}
				}
				if (N === "Dark Orb") {
					I.name = "Orb of Tashonia";
					I.armor = 15;
					I.str = 19;
					I.sta = 19;
					I.mp = 35;
					I.allSkills = 3;
					I.castingHaste = -80;
					I.enhanceAll = 3;
					I.req = 38;

				}
				if (N === "Ancient Tome") {
					I.name = "Encyclopedia Necronomicon";
					I.hp = 40;
					I.mp = 55;
					I.allStats = 10;
					I.enhancePoison = 2;
					I.enhanceMagic = 2;
					I.castingHaste = -60;
					I.conjuration = 10;
					I.mpRegen = 6;
					I.req = 40;

				}
				if (N === "Totem") {
					if (M.random() > .5) {
						I.name = "Margyn's Deranged Totem";
						I.mp = 77;
						I.hp = 55;
						I.conjuration = 13;
						I.mpKill = 10;
						I.castingHaste = -100;
						I.mpRegen = 7;
						I.resistLightning = 11;
						I.resistCold = 17;
						I.resistMagic = 33;
						I.resistPoison = 33;
						I.req = 42;
					} else {
						I.name = "Mendicant's Effigy";
						I.mp = 124;
						I.hp = 45;
						I.conjuration = 9;
						I.abjuration = 15;
						I.mpKill = 23;
						I.castingHaste = -200;
						I.wis = 77;
						I.req = 42;
						I.enhancePoison = 9;
						I.rarity = 4;
					}
				}
				if (N === "Crystal Ball") {
					I.name = "Vermillion Orb of Torrefaction";
					I.goldFind = 14;
					I.critChance = 7;
					I.mp = 60;
					I.evocation = 9;
					I.lightRadius = 9;
					I.mpRegen = 6;
					I.absorbFire = 5;
					I.castingHaste = -90;
					I.silence = 12;
					I.enhanceFire = 5;
					I.req = 44;

				}
				if (N === "Skull") {
					I.name = "Sirran's Memento";
					I.mp = 45;
					I.critDamage = 20;
					I.hpKill = 9;
					I.mpKill = 15;
					I.abjuration = 10;
					I.castingHaste = -150;
					I.stun = 15;
					I.resistMagic = 35;
					I.resistCold = 20;
					I.req = 46;

				}
				if (N === "Emblazoned Orb") {
					if (M.random() > .5) {
						I.name = "Eye of Ghalentus";
						I.mp = 75;
						I.intel = 24;
						I.armor = 25;
						I.allSkills = 3;
						I.castingHaste = -70;
						I.enhanceMagic = 5;
						I.evocation = 7;
						I.resistLightning = 20;
						I.resistMagic = 55;
						I.flavorText = '"Even if you succeed, in time you will realize that my cause was just and you, too, will solemnly ache for your kind\'s own extinction." -Sanctum Guardian Ghalentus';
						I.req = 48;
					} else {
						I.name = "Malefactor's Yttrium";
						I.mp = 199;
						I.hp = 99;
						I.enhanceLightning = 9;
						I.enhanceCold = 9;
						I.enhanceFire = 9;
						setAllStatus(NI, 9, 9, 9, 9);
						I.allResist = 9;
						I.mpRegen = 9;
						I.critChance = 9;
						I.critDamage = 9;
						I.allStats = 9;
						I.castingHaste = -90;
						I.req = 48;
						I.rarity = 4;
					}

				}
				if (N === "Idol") {
					I.name = "Camin's False Idol";
					I.mp = 50;
					I.enhanceAll = 3;
					I.mpRegen = 5;
					I.allStats = 13
					I.allResist = 25;
					I.allSkills = 3;
					I.req = 50;

				}
			}
		}
		if (nt === "range") {
			if (N === "Short Bow") {
				I.name = "Skystriker";
				I.enhancedDamage = 5;
				I.allSkills = 1;
				I.intel = 15;
				I.attack = 5;
				I.haste = -20;
				I.evocation = 3;
				I.lightningDamage = 10;
				I.req = 36;
			}
			if (N === "Hunter's Bow") {
				I.name = "Adamant Volley";
				I.enhancedDamage = 6;
				I.mp = 25;
				I.mpKill = 3;
				I.hpKill = 3;
				I.defense = 2;
				I.resistCold = 35;
				I.coldDamage = 12;
				I.req = 38;
			}
			if (N === "Composite Bow") {
				I.name = "Juton's Venomburst";
				I.enhancedDamage = 7;
				I.conjuration = 3;
				I.intel = 12;
				I.channeling = 2;
				I.expFind = 5;
				I.absorbPoison = 2;
				I.poisonDamage = 14;
				I.req = 40;
			}
			if (N === "Siege Bow") {
				I.name = "Goldstrike Arch";
				I.enhancedDamage = 9;
				I.hpRegen = 2;
				I.attack = 6;
				I.dex = 15;
				I.lightRadius = 9;
				I.resistLightning = 20;
				I.magicDamage = 15;
				I.req = 42;
			}
			if (N === "Astral Bow") {
				I.name = "Panicstriker";
				I.ias = .26;
				I.riposte = 4;
				I.globalHaste = -30;
				I.oneHandSlash = 3;
				I.resistMagic = 15;
				I.resistLightning = 10;
				I.fear = 12;
				I.req = 44;
			}
			if (N === "Gothic Bow") {
				I.name = "Final Punishment";
				I.enhancedDamage = 9;
				I.hp = 20;
				I.dualWield = 6;
				I.attack = 5;
				I.dex = 15;
				I.str = 9;
				I.req = 46;
			}
			if (N === "Ward Bow") {
				if (M.random() > .5) {
					I.name = "Magewrath";
					I.enhancedDamage = 10;
					I.mpRegen = 1;
					I.alteration = 3;
					I.mpKill = 5;
					I.magMit = 5;
					I.allSkills = 1;
					I.req = 48;
				} else {
					I.name = "Daimyo's Yugen";
					I.damage = 62;
					I.delay = 5700;
					I.cold = 25;
					I.silence = 15;
					I.evocation = 9;
					I.dualWield = 9;
					I.leech = 5;
					I.enhancePhysical = 4;
					I.req = 48;
					I.rarity = 4;
				}
			}
			if (N === "Hydra Bow") {
				I.name = "Zidr's Crackling Thunder Bow";
				I.enhancedDamage = 11;
				I.allStats = 7;
				I.oneHandSlash = 3;
				I.resistLightning = 15;
				I.absorbLightning = 2;
				I.lightningDamage = 20;
				I.flavorText = '"Even I get tired of shooting at the same target every day. Explore the world and conquer new frontiers." Zidr Shur, Ranger Guildmaster';
				I.req = 50;
			}
		}
		if (nt === "trinket") {
			var zz = M.random();
			if (N === "Trinket") {
				if (zz > .66) {
					I.name = "Tempered Spirits";
					I.sta = 15;
					I.wis = 12;
					I.lightRadius = 20;
					I.resistMagic = 20;
					I.silence = 13;
					I.expFind = 6;
					I.req = 36;
				} else if (zz > .33) {
					I.name = "Augur's Enmity";
					I.resistFire = 25;
					I.enhancePoison = 2;
					I.enhanceFire = 2;
					I.critDamage = 8;
					I.thorns = 15;
					I.hp = 25;
					I.evocation = 3;
					I.abjuration = 2;
					I.req = 47;
					I.rarity = 4;
				} else {
					I.name = "Summoner's Ember";
					I.resistFire = 15;
					I.enhanceFire = 7;
					I.mpRegen = 10;
					I.conjuration = 8;
					I.hp = 35;
					I.req = 44;
					I.rarity = 4;
				}

			}
			if (N === "Memento") {
				I.name = "Clay of Everliving Golem";
				I.hp = 15;
				I.mp = 15;
				I.allResist = 10;
				I.hpRegen = 3;
				I.offense = 5;
				I.goldFind = 12;
				I.req = 38;
			}
			if (N === "Charm") {
				I.name = "Azulite's Breath";
				I.mpRegen = 4;
				I.globalHaste = -30;
				I.critChance = 3;
				I.silence = 15;
				I.allStats = 10;
				I.req = 40;
			}
		}
	}
	if (newQuality === 2) {
		if (ni === "helmet") {
			if (N === "Hood") {
				I.name = "Wenerva's Cowl of Destruction";
				I.enhancedArmor = 80;
				I.allStats = 13
				I.mp = 50;
				I.expFind = 12;
				I.evocation = 13;
				I.silence = 20;
				I.resistCold = 50;
				I.enhanceCold = 3;
				I.req = 52;
			}
			if (N === "Cap") {
				if (M.random() > .5) {
					I.name = "Cap of the Insubstantial";
					I.enhancedArmor = 80;
					I.dex = 35;
					I.cha = 25;
					I.allSkills = 3;
					I.stun = 15;
					I.enhanceMagic = 4;
					I.resistMagic = 35;
					I.resistPoison = 15;
					I.req = 54;
				} else {
					I.name = "Harlequin Crest";
					I.enhancedArmor = 80;
					I.hp = 112;
					I.mp = 112;
					I.hpRegen = 6;
					I.mpRegen = 4;
					I.magMit = 10;
					I.phyMit = 10;
					I.allSkills = 2;
					I.req = 54;
				}
			}
			if (N === "Bandana") {
				if (M.random() > .32) {
					I.name = "Brother Xave's Headband";
					I.enhancedArmor = 85;
					I.hp = 75;
					I.str = 15;
					I.dex = 10;
					I.sta = 10;
					I.agi = 10;
					I.handtohand = 6;
					I.allResist = 14;
					I.globalHaste = -120;
					I.flavorText = '"Followers of the True Path find no value in the short-lived trends that bend impressionable minds. Divine virtue is found in the longstanding practices of our order." -Brother Xave, Legendary Monk of Qiromir';
					I.req = 56;
				} else {
					I.name = "Grandmaster's Symmetry";
					I.enhancedArmor = 120;
					I.offense = 8;
					I.defense = 8;
					I.attack = 25;
					I.hp = 111;
					I.enhancePhysical = 8;
					I.runSpeed = 11;
					I.lightRadius = 11;
					I.expFind = 11;
					I.critChance = 11;
					setAllResists(NI, 11, 25, 88, 25, 11);
					setAllStatus(NI, 25, 25, 25, 25);
					I.rarity = 4;
					I.req = 58;
				}
			}
			if (N === "Diadem") {
				I.name = "Phantasmist's Acumen";
				I.enhancedArmor = 120;
				I.allSkills = 3;
				I.cold = 45;
				I.expFind = 14;
				I.allStats = 15;
				I.offense = 25;
				I.defense = 8;
				I.enhancePhysical = 21;
				I.enhanceMagic = 7;
				I.hpRegen = 9;
				setAllResists(NI, 59, 15, 46, 25, 33);
				I.rarity = 4;
				I.req = 60;
			}
			if (N === "Dark Hood") {
				if (M.random() > .32) {
					I.name = "Tattered Death Shroud";
					I.enhancedArmor = 90;
					I.str = 15;
					I.sta = 25;
					I.wis = 15;
					I.mp = 25;
					I.conjuration = 12;
					I.mpRegen = 4;
					I.enhancePoison = 5;
					I.allResist = 10;
					I.req = 60;
				} else {
					I.name = "Warlock's Doom";
					I.enhancedArmor = 120;
					I.fear = 90;
					I.enhanceAll = 7;
					I.allResist = 15;
					I.conjuration = 15;
					I.evocation = 9;
					I.intel = 33;
					I.dex = 20;
					I.lightRadius = 16;
					I.magMit = 10;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Coronet") {
				I.name = "Diadem of the Ages";
				I.enhancedArmor = 90;
				I.defense = 8;
				setAbsorbAll(NI, 4);
				I.stun = 25;
				I.allResist = 25;
				I.allSkills = 2;
				I.enhanceAll = 5;
				I.flavorText = 'Your consciousness is brief candlelight, but this diadem shines eternally.';
				I.req = 62;
			}
			if (N === "Miter") {
				I.name = "Griffon's Tower";
				I.enhancedArmor = 95;
				I.defense = 8;
				I.evocation = 11;
				I.channeling = 6;
				I.enhanceLightning = 9;
				I.castingHaste = -120;
				I.resistLightning = 35;
				I.allSkills = 1;
				I.req = 64;
			}
			if (N === "Astral Hood") {
				I.name = "Rorvalen's Guardian";
				I.enhancedArmor = 95;
				I.abjuration = 9;
				I.conjuration = 7;
				I.mpRegen = 3;
				I.stun = 20;
				I.cold = 35;
				I.allResist = 45;
				I.req = 66;
			}
			if (N === "Mail Hood") {
				I.name = "Shendoma's Velium Crown";
				I.enhancedArmor = 80;
				I.lightRadius = 15;
				I.mpRegen = 3;
				I.evocation = 10;
				setAllResists(NI, 10, 35, 5, 20, 10);
				I.weight = 1;
				I.enhanceCold = 5;
				I.req = 52;
			}
			if (N === "Coif") {
				I.name = "Xalgozian Coif";
				I.enhancedArmor = 85;
				I.conjuration = 8;
				I.alteration = 7;
				I.hpKill = 12;
				I.mpRegen = 4;
				setAllStatus(NI, 10, 10, 10, 10);
				I.allResist = 13
				I.enhancePoison = 5;
				I.req = 56;
			}
			if (N === "Armet") {
				I.name = "Steel Shade";
				I.enhancedArmor = 90;
				I.hpRegen = 8;
				I.wraith = 5;
				I.critChance = 5;
				I.enhancePhysical = 4;
				I.defense = 7;
				I.absorbFire = 7;
				I.req = 60;
			}
			if (N === "Sallet") {
				I.name = "Valkyrie's Bane";
				I.enhancedArmor = 95;
				I.weight = 1;
				I.oneHandSlash = 7;
				I.attack = 8;
				I.critDamage = 15;
				setAllResists(NI, 12, 0, 20, 35, 15);
				I.enhanceAll = 4;
				I.enhancePhysical = 4;
				I.req = 64;
			}
			if (N === "Burgonet") {
				I.name = "High Priest's Abstention";
				I.enhancedArmor = 120;
				I.allSkills = 5;
				I.enhanceMagic = 5;
				I.lightRadius = 25;
				I.magMit = 10;
				I.mp = 70;
				I.allResist = 15;
				I.critChance = 4;
				I.absorbMagic = 10;
				setAllStatus(NI, 25, 25, 25, 25);
				I.rarity = 4;
				I.req = 58;
			}
			if (N === "Great Helm") {
				if (M.random() > .32) {
					I.name = "Iron Veil";
					I.enhancedArmor = 85;
					I.defense = 7;
					I.allResist = 50;
					I.str = 30;
					I.sta = 30;
					I.lightRadius = -4;
					I.req = 58;
				} else {
					I.name = "Grave Lord's Deceit";
					I.enhancedArmor = 120;
					I.critDamage = 18;
					I.allResist = 15;
					I.allSkills = 3;
					I.silence = 44;
					I.stun = 30;
					I.lightRadius = 17;
					I.goldFind = 30;
					I.mpRegen = 6;
					I.intel = 55;
					I.rarity = 4;
					I.req = 60;
				}
			}
			if (N === "Barbute") {
				if (M.random() > .32) {
					I.name = "Viston's Veil";
					I.enhancedArmor = 90;
					I.weight = 1;
					I.absorbCold = 5;
					I.cold = 25;
					I.dex = 25;
					I.enhanceCold = 10;
					I.allSkills = 3;
					I.req = 62;
				} else {
					I.name = "Warlord's Scowl";
					I.enhancedArmor = 120;
					I.allSkills = 3;
					I.hp = 75;
					I.enhancePhysical = 7;
					I.allResist = 21;
					setAllStatus(NI, 25, 25, 25, 25);
					I.absorbFire = 5;
					I.critDamage = 15;
					I.sta = 40;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Royal Helm") {
				I.name = "Messiah's Crown";
				I.enhancedArmor = 95;
				I.allStats = 13
				I.hpRegen = 5;
				I.mpKill = 8;
				I.enhanceAll = 3;
				I.enhancePhysical = 3;
				I.allResist = 13
				setAllStatus(NI, 12, 12, 12, 12);
				I.req = 66;
			}
		}
		if (ni === "neck") {
			if (nT <= 83) {
				var zoo = ~~(1 + M.random() * (4));
				if (zoo === 1) {
					I.name = "Highlord's Avarice";
					I.globalHaste = -40;
					I.thorns = 15;
					I.critChance = 9;
					I.critDamage = 12;
					I.resistLightning = 35;
					I.lightningDamage = 15;
					I.haste = -120;
					I.allSkills = 1;
					I.req = 52;

				}
				if (zoo === 2) {
					if (M.random() > .32) {
						I.name = "Miranda's Kaleidoscope";
						I.allStats = 13
						I.wraith = 5;
						I.leech = 5;
						I.allResist = 35;
						I.allSkills = 3;
						I.flavorText = 'A chromatic sheen glimmers from this pendant';
						I.req = 53;
					} else {
						I.name = "Assassin's Guile";
						I.armor = 50;
						I.resistPoison = 100;
						I.allStats = 20;
						I.piercing = 10;
						I.dualWield = 15;
						I.haste = -180;
						I.absorbMagic = 7;
						I.hp = 85;
						I.leech = 13;
						setAllStatus(NI, 21, 21, 21, 21);
						I.rarity = 4;
						I.req = 56;
					}
				}
				if (zoo === 3) {
					I.name = "Seraph's Melody";
					I.abjuration = 12;
					I.alteration = 10;
					I.wraith = 10;
					I.lightRadius = 8;
					I.allSkills = 3;
					I.req = 55;
				}
				if (zoo === 4) {
					I.name = "Beholder's Eye";
					I.conjuration = 10;
					I.alteration = 7;
					I.magMit = 9;
					I.enhanceFire = 6;
					I.fear = 25;
					I.mpRegen = 5;
					I.req = 57;
				}
			}
			if (nT >= 84 && nT <= 91) {
				var zoo = ~~(1 + M.random() * (4));
				if (zoo === 1) {
					if (M.random() > .32) {
						I.name = "Medal of Deep Thought";
						I.hp = 75;
						I.mp = 30;
						I.wis = 11;
						I.intel = 11;
						I.allResist = 9;
						I.enhanceFire = 6;
						I.req = 61;
					} else {
						I.name = "Warder's Zephyr";
						I.runSpeed = 20;
						I.enhancePhysical = 7;
						I.enhanceFire = 7;
						I.enhanceMagic = 7;
						I.allSkills = 5;
						I.cold = 45;
						I.leech = 11;
						I.globalHaste = -120;
						setAllResists(NI, 0, 33, 55, 77, 22);
						I.rarity = 4;
						I.req = 62;
					}
				}
				if (zoo === 2) {
					if (M.random() > .32) {
						I.name = "Necklace of Nightstalking";
						I.hp = 60;
						I.dex = 21;
						I.agi = 28;
						I.dodge = 13;
						I.runSpeed = 10;
						I.piercing = 7;
						I.req = 62;
					} else {
						I.name = "Crusader's Cathexis";
						I.enhanceAll = 5;
						I.leech = 12;
						I.enhanceMagic = 12;
						I.absorbMagic = 8;
						I.allSkills = 3;
						I.critChance = 9;
						I.silence = 60;
						I.goldFind = 23;
						I.lightRadius = 19;
						setAllResists(NI, 32, 85, 40, 0, 0);
						I.rarity = 4;
						I.req = 62;
					}
				}
				if (zoo === 3) {
					I.name = "Amulet of the Void";
					I.armor = 20;
					I.dex = 20;
					I.cha = 20;
					I.intel = 20;
					I.agi = 20;
					I.mp = 50;
					I.enhanceMagic = 7;
					I.req = 63;
				}
				if (zoo === 4) {
					if (M.random() > .32) {
						I.name = "Prime Lord's Torc";
						I.allStats = 8;
						I.absorbMagic = 7;
						I.resistFire = 50;
						I.resistCold = 35;
						I.castingHaste = -80;
						I.enhanceCold = 3;
						I.enhanceFire = 5;
						I.req = 64;
					} else {
						I.name = "Oracle's Sibyl";
						I.enhancePoison = 11;
						I.enhanceCold = 7;
						I.mp = 77;
						I.hp = 53;
						I.allSkills = 3;
						I.mpKill = 21;
						I.wis = 42;
						I.intel = 21;
						I.dex = 33;
						I.cold = 45;
						I.runSpeed = 15;
						I.magMit = 7;
						I.rarity = 4;
						I.req = 64;
					}
				}
			}
			if (nT >= 92) {
				var zoo = ~~(1 + M.random() * (4));
				if (zoo === 1) {
					I.name = "Glamour of Rinara";
					I.cha = 45;
					I.hpRegen = 5;
					I.wraith = 11;
					I.resistLightning = 15;
					I.resistMagic = 35;
					I.allSkills = 3;
					I.enhanceMagic = 6;
					I.req = 64;

				}
				if (zoo === 2) {
					if (M.random() > .32) {
						I.name = "Primal Grid";
						I.attack = 25;
						I.allResist = 30;
						I.hpKill = 7;
						I.mpKill = 5;
						I.magMit = 5;
						I.enhancePhysical = 6;
						I.req = 65;
					} else {
						I.name = "Sorcerer's Zodiac";
						I.allSkills = 7;
						I.enhanceLightning = 8;
						I.enhanceCold = 6;
						I.allResist = 42;
						I.intel = 55;
						I.sta = 40;
						I.fireDamage = 66;
						I.lightningDamage = 39;
						I.evocation = 10;
						I.conjuration = 10;
						I.silence = 25;
						I.fear = 25;
						I.critChance = 9;
						I.rarity = 4;
						I.req = 64;
					}

				}
				if (zoo === 3) {
					I.name = "Stalker's Garrote";
					I.armor = 30;
					I.str = 35;
					I.dex = 20;
					I.agi = 35;
					I.hp = 75;
					I.haste = -100;
					I.allResist = 25;
					I.req = 66;

				}
				if (zoo === 4) {
					if (M.random() > .32) {
						I.name = "Lendiniara's Talisman";
						I.armor = 16;
						I.allStats = 14;
						I.hp = 70;
						I.mp = 70;
						I.leech = 10;
						I.mpRegen = 7;
						I.allResist = 24;
						I.enhanceAll = 4;
						I.enhancePhysical = 4;
						I.req = 66;
					} else {
						I.name = "High Priest's Mastery";
						I.enhanceMagic = 15;
						setAllResists(NI, 44, 105, 25, 0, 0);
						I.castingHaste = -100;
						I.wis = 60;
						I.intel = 35;
						I.sta = 20;
						I.hpKill = 12;
						I.mpKill = 12;
						I.expFind = 8;
						I.critDamage = 24;
						I.rarity = 4;
						I.req = 68;
					}
				}
			}
		}
		if (ni === "ring") {
			if (nT <= 83) {
				var zoo = ~~(1 + M.random() * (3));
				if (zoo === 1) {
					I.name = "Ring of the Sky";
					I.hp = 45;
					I.sta = 20;
					I.resistLightning = 24;
					I.enhanceLightning = 7;
					I.silence = 15;
					I.allSkills = 2;
					I.req = 57;
				}
				if (zoo === 2) {
					if (M.random() > .32) {
						I.name = "Carrion Zephyr";
						I.enhanceCold = 5;
						I.enhancePoison = 5;
						I.mpRegen = 3;
						I.phyMit = 5;
						I.leech = 7;
						I.resistPoison = 55;
						I.req = 55;
					} else {
						I.name = "High Priest's Piety";
						I.mp = 35;
						I.hp = 60;
						setAllStatus(NI, 24, 24, 24, 24);
						I.wis = 30;
						I.intel = 15;
						I.agi = 24;
						I.critChance = 5;
						I.allSkills = 2;
						setAbsorbAll(NI, 5);
						I.castingHaste = -60;
						I.rarity = 4;
						I.req = 55;
					}

				}
				if (zoo === 3) {
					if (M.random() > .32) {
						I.name = "Ring of Winter";
						I.hp = 55;
						I.mp = 25;
						I.armor = 15;
						I.wis = 15;
						I.intel = 15;
						I.resistMagic = 20;
						I.resistCold = 33;
						I.enhanceCold = 6;
						I.req = 55;
					} else {
						I.name = "Warlock's Carnage";
						I.castingHaste = -100;
						I.enhanceAll = 3;
						I.resistCold = 50;
						I.resistLightning = 35;
						I.physicalDamage = 55;
						I.silence = 25;
						I.stun = 40;
						I.critChance = 10;
						I.critDamage = 16;
						I.allStats = 10;
						I.attack = 100;
						I.absorbLightning = 25;
						I.rarity = 4;
						I.req = 55;
					}
				}
			}
			if (nT >= 84 && nT <= 91) {
				var zoo = ~~(1 + M.random() * (3));
				if (zoo === 1) {
					if (M.random() > .32) {
						I.name = "Reaper's Ring";
						I.sta = 15;
						I.hp = 40;
						I.mp = 40;
						I.armor = 12;
						I.enhanceAll = 3;
						I.enhancePhysical = 3;
						I.wraith = 3;
						I.req = 58;
					} else {
						I.name = "Arch Mage's Periapt";
						I.intel = 25;
						I.sta = 25;
						I.mp = 50;
						I.hp = 35;
						I.enhanceAll = 5;
						I.resistFire = 32;
						I.resistCold = 32;
						I.allSkills = 4;
						I.critChance = 5;
						I.critDamage = 5;
						I.rarity = 4;
						I.req = 58;
					}
				}
				if (zoo === 2) {
					if (M.random() > .32) {
						I.name = "Nature's Agony";
						I.str = 12;
						I.armor = 5;
						I.phyMit = 9;
						I.thorns = 23;
						I.resistPoison = 25;
						I.absorbLightning = 7;
						setAllStatus(NI, 15, 15, 15, 15);
						I.req = 59;
					} else {
						I.name = "Hierophant's Holocaust";
						I.enhanceFire = 8;
						I.hpKill = 10;
						I.mpKill = 7;
						I.fear = 30;
						I.absorbFire = 15;
						I.resistFire = 50;
						I.fireDamage = 50;
						I.allSkills = 2;
						I.critChance = 5;
						I.rarity = 4;
						I.req = 59;
					}
				}
				if (zoo === 3) {
					if (M.random() > .32) {
						I.name = "Signet of Desticor";
						I.castingHaste = -60;
						I.intel = 29;
						I.mpKill = 7;
						I.hpKill = 12;
						I.enhancePoison = 5;
						I.enhanceMagic = 3;
						I.resistMagic = 35;
						I.absorbPoison = 9;
						I.flavorText = '"Your corporeal forms are destined for decay. Resign yourself to your consummate death, for your kind are nothing more than a plague upon Vandamor." Desticor, the Pestilent';
						I.req = 62;
					} else {
						I.name = "Sorcerer's Pulsar";
						setAllResists(NI, 20, 12, 0, 48, 31);
						setAllStatus(NI, 10, 10, 10, 10);
						I.critChance = 10;
						I.critDamage = 25;
						I.allSkills = 3;
						I.allStats = 9;
						I.absorbFire = 7;
						I.absorbMagic = 7;
						I.armor = 90;
						I.lightRadius = 21;
						I.goldFind = 13;
						I.fear = 15;
						I.rarity = 4;
						I.req = 62;
					}
				}
			}
			if (nT >= 92) {
				var zoo = ~~(1 + M.random() * (4));
				if (zoo === 1) {
					I.name = "Wisp's Cradle";
					I.sta = 35;
					I.haste = -50;
					I.thorns = 25;
					I.attack = 15;
					I.enhanceLightning = 5;
					I.goldFind = 25;
					I.absorbLightning = 9;
					I.req = 63;

				}
				if (zoo === 2) {
					if (M.random() > .32) {
						I.name = "Crystasia's Onyx Ring";
						I.hp = 50;
						I.mp = 50;
						I.armor = 30;
						I.allResist = 18;
						setAbsorbAll(NI, 4);
						I.leech = 4;
						I.req = 63;
					} else {
						I.name = "Grave Lord's Perfidy";
						I.leech = 6;
						I.absorbMagic = 6;
						I.wraith = 6;
						I.castingHaste = -70;
						I.critDamage = 12;
						I.sta = 25;
						I.enhancePhysical = 4;
						I.allSkills = 2;
						I.resistLightning = 49;
						I.resistCold = 37;
						I.rarity = 4;
						I.req = 63;
					}
				}
				if (zoo === 3) {
					if (M.random() > .32) {
						I.name = "Ring of Surlin";
						I.armor = 10;
						I.str = 30;
						I.sta = 30;
						I.hp = 60;
						I.resistMagic = 50;
						I.attack = 15;
						I.hpRegen = 4;
						I.thorns = 20;
						I.globalHaste = -60;
						I.enhancePhysical = 5;
						I.flavorText = '"Swear fealty to your King and a blood pact to your fellow dwarves. Your King and your race are the greatest gifts that the Gods ever gave you." Surlin Grimhelm';
						I.req = 64;
					} else {
						I.name = "Crusader's Allegiance";
						I.hpRegen = 5;
						I.leech = 7;
						I.wraith = 4;
						I.resistLightning = 24;
						I.resistCold = 35;
						I.allSkills = 2;
						I.mp = 33;
						I.expFind = 13;
						setAllStatus(NI, 14, 14, 14, 14);
						I.rarity = 4;
						I.req = 64;
					}

				}
				if (zoo === 4) {
					if (M.random() > .32) {
						I.name = "Ormir's Cyclone";
						I.leech = 6;
						I.wraith = 6;
						I.allStats = 9;
						I.allSkills = 2;
						I.critChance = 6;
						I.critDamage = 15;
						I.enhanceLightning = 6;
						I.absorbLightning = 12;
						I.flavorText = '"Only a fool denies the almighty forces of nature that regulate your very lives." Ormir';
						I.req = 65;
					} else {
						I.name = "Assassin's Helix";
						I.attack = 30;
						I.offense = 7;
						I.hpKill = 20;
						I.allStats = 15;
						I.lightRadius = 12;
						I.goldFind = 25;
						I.leech = 5;
						I.stun = 15;
						I.runSpeed = 20;
						I.dodge = 7;
						I.enhancePhysical = 5;
						I.resistFire = 50;
						I.resistLightning = 50;
						I.rarity = 4;
						I.req = 66;
					}
				}
			}
		}
		if (ni === "shoulders") {
			if (N === "Cloth Drape") {
				I.name = "Glimmershard";
				I.enhancedArmor = 80;
				I.intel = 21;
				I.cha = 15;
				I.allSkills = 2;
				I.stun = 12;
				I.enhanceMagic = 3;
				I.goldFind = 25;
				I.resistMagic = 25;
				I.req = 54;
			}
			if (N === "Woven Drape") {
				I.name = "Worn Cloth Mantle";
				I.enhancedArmor = 85;
				I.str = 12;
				I.cha = 12;
				I.agi = 15;
				I.allResist = 7;
				I.absorbMagic = 4;
				I.alteration = 4;
				I.conjuration = 6;
				I.req = 58;
			}
			if (N === "Azure Shawl") {
				I.name = "Shawl of Perception";
				I.enhancedArmor = 90;
				I.hp = 30;
				I.mp = 30;
				I.sta = 18;
				I.wis = 18;
				I.intel = 18;
				I.allResist = 9;
				I.silence = 12;
				I.stun = 8;
				I.req = 62;
			}
			if (N === "Archon Shawl") {
				I.name = "Arch Mage's Debacle";
				I.enhancedArmor = 120;
				I.enhanceFire = 9;
				I.hp = 80;
				setAllResists(NI, 38, 37, 55, 8, 0);
				I.silence = 34;
				I.stun = 15;
				I.intel = 41;
				I.dex = 23;
				I.lightRadius = 17;
				I.thorns = 12;
				I.absorbFire = 6;
				I.rarity = 4;
				I.req = 65;
			}
			if (N === "Leather Shoulders") {
				I.name = "Poisoned Mantle";
				I.enhancedArmor = 80;
				I.str = 14;
				I.dex = 14;
				I.sta = 14;
				I.agi = 14;
				I.resistPoison = 30;
				I.enhancePoison = 4;
				I.weight = 1;
				I.req = 54;
			}
			if (N === "Studded Shoulders") {
				I.name = "Pioneer's Raiment";
				I.enhancedArmor = 85;
				I.hpKill = 12;
				I.handtohand = 10;
				I.oneHandBlunt = 7;
				I.leech = 4;
				I.mpKill = 5;
				I.resistCold = 35;
				I.runSpeed = 15;
				I.goldFind = 25;
				I.expFind = 15;
				I.req = 58;
			}
			if (N === "Spiked Shoulders") {
				if (M.random() > .32) {
					I.name = "Planewalker's Shoulders";
					I.enhancedArmor = 90;
					I.hp = 25;
					I.fear = 15;
					setAbsorbAll(NI, 4);
					I.weight = 1;
					I.allStats = 7;
					I.allResist = 10;
					I.req = 62;
				} else {
					I.name = "Hierophant's Blizzard";
					I.enhancedArmor = 120;
					I.resistCold = 60;
					I.absorbCold = 9;
					I.enhanceCold = 5;
					I.enhanceMagic = 3;
					I.allSkills = 2;
					I.mpRegen = 5;
					I.critDamage = 16;
					I.cold = 100;
					I.stun = 33;
					I.silence = 33;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Brigand Shoulders") {
				I.name = "Smuggler's Shoulders";
				I.enhancedArmor = 95;
				I.dodge = 9;
				I.leech = 5;
				I.resistCold = 32;
				I.resistMagic = 15;
				I.enhancePhysical = 5;
				I.critDamage = 13;
				I.critChance = 5;
				I.goldFind = 15;
				I.req = 66;
			}
			if (N === "Scaled Mantle") {
				I.name = "Obulus Mantle";
				I.enhancedArmor = 80;
				I.str = 15;
				I.sta = 15;
				I.mp = 30;
				I.twoHandSlash = 8;
				I.enhanceAll = 2;
				I.silence = 15;
				I.resistMagic = 45;
				I.wraith = 5;
				I.weight = 1;
				I.req = 54;
			}
			if (N === "Chain Mantle") {
				I.name = "Flamecloud Mantle";
				I.enhancedArmor = 85;
				I.leech = 3;
				I.resistLightning = 35;
				I.cold = 12;
				I.allResist = 10;
				I.enhancePhysical = 5;
				I.enhanceFire = 3;
				I.doubleAttack = 9;
				I.attack = 2;
				I.req = 58;
			}
			if (N === "Kusari Mantle") {
				if (M.random() > .32) {
					I.name = "Beldron's Vambraces of Impiety";
					I.enhancedArmor = 90;
					I.leech = 5;
					I.intel = 35;
					I.conjuration = 8;
					I.channeling = 6;
					I.twoHandBlunt = 5;
					I.offense = 5;
					I.resistMagic = 35;
					I.resistLightning = 12;
					I.req = 62;
				} else {
					I.name = "Oracle's Ailment";
					I.enhancedArmor = 120;
					setAllResists(NI, 20, 33, 25, 55, 0);
					I.magMit = 13;
					I.goldFind = 23;
					I.hpKill = 15;
					I.silence = 45;
					I.stun = 45;
					I.absorbPoison = 10;
					I.allStats = 20;
					I.enhanceAll = 5;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Laminar Mantle") {
				I.name = "Onyx Chain Sleeves";
				I.enhancedArmor = 95;
				I.allStats = 13
				I.hp = 40;
				I.mp = 40;
				I.allResist = 18;
				I.enhancePoison = 3;
				I.enhanceCold = 5;
				I.weight = 1;
				I.req = 66;
			}
			if (N === "Cobalt Spaulders") {
				I.name = "Thunderous Spaulders";
				I.enhancedArmor = 80;
				I.critChance = 6;
				I.resistLightning = 45;
				I.wraith = 6;
				I.defense = 5;
				I.silence = 15;
				I.absorbLightning = 6;
				I.lightningDamage = 15;
				I.req = 54;
			}
			if (N === "Mithril Pauldrons") {
				if (M.random() > .32) {
					I.name = "Krelg's Pauldrons of Pain";
					I.enhancedArmor = 85;
					I.doubleAttack = 5;
					I.dualWield = 4;
					I.offense = 4;
					I.oneHandBlunt = 5;
					I.str = 30;
					I.critDamage = 15;
					I.attack = 15;
					I.leech = 4;
					I.req = 58;
				} else {
					I.name = "Warlord's Disdain";
					I.enhancedArmor = 135;
					I.offense = 12;
					I.hpKill = 15;
					I.str = 25;
					I.dex = 25;
					I.phyMit = 5;
					I.thorns = 20;
					I.critChance = 5;
					I.resistPoison = 75;
					I.resistFire = 75;
					I.rarity = 4;
					I.req = 58;
				}
			}
			if (N === "Sode") {
				if (M.random() > .32) {
					I.name = "Pauldrons of Blight";
					I.enhancedArmor = 90;
					I.str = 20;
					I.dex = 15;
					I.hp = 35;
					I.allResist = 11;
					I.enhancePoison = 5;
					I.absorbPoison = 3;
					I.weight = 1;
					I.poisonDamage = 12;
					I.req = 62;
				} else {
					I.name = "Virtuoso's Orotund";
					I.enhancedArmor = 120;
					I.allResist = 25;
					I.channeling = 12;
					I.abjuration = 12;
					I.alteration = 9;
					I.hp = 35;
					I.enhancePhysical = 12;
					I.allStats = 12;
					I.fear = 35;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Monarch Pauldrons") {
				if (M.random() > .32) {
					I.name = "Wurm Claw Pauldrons";
					I.enhancedArmor = 95;
					setAllStatus(NI, 7, 7, 7, 7);
					setAbsorbAll(NI, 4);
					I.resistFire = 25;
					I.resistCold = 25;
					I.str = 25;
					I.sta = 15;
					I.intel = 15;
					I.wis = 15;
					I.hp = 30;
					I.mp = 30;
					I.req = 66;
				} else {
					I.name = "Crusader's Fervor";
					I.enhancedArmor = 120;
					I.allStats = 13;
					I.hp = 39;
					I.critDamage = 20;
					I.fear = 35;
					I.hpKill = 15;
					I.enhancePhysical = 8;
					I.enhanceMagic = 4;
					I.resistPoison = 70;
					I.resistLightning = 32;
					I.rarity = 4;
					I.req = 67;
				}
			}
		}
		if (ni === "back") {
			if (N === "Cape") {
				I.name = "Hierophant's Cloak";
				I.mpRegen = 4;
				I.allStats = 7;
				I.thorns = 15;
				I.abjuration = 6;
				I.enhanceCold = 4;
				I.enhanceLightning = 5;
				I.castingHaste = -80;
				I.req = 54;
			}
			if (N === "Cloak") {
				I.name = "Wraithcloak";
				I.mpKill = 9;
				I.intel = 25;
				I.wraith = 5;
				I.allSkills = 2;
				I.globalHaste = -50;
				I.poisonDamage = 15;
				I.enhanceMagic = 5;
				I.enhancePoison = 7;
				I.req = 55;
			}
			if (N === "Woven Cloak") {
				if (M.random() > .32) {
					I.name = "Fallen Ancients' Cloak";
					I.dodge = 2;
					I.intel = 8;
					I.wis = 6;
					I.channeling = 4;
					I.phyMit = 4;
					I.resistLightning = 8;
					I.resistPoison = 8;
					I.silence = 9;
					I.req = 55;
				} else {
					I.name = "Grandmaster's Peace";
					I.globalHaste = -240;
					I.resistPoison = 45;
					I.resistMagic = 77;
					I.hp = 45;
					I.allSkills = 3;
					I.agi = 35;
					I.dex = 54;
					I.thorns = 15;
					I.critDamage = 16;
					setAllStatus(NI, 20, 20, 20, 20);
					I.rarity = 4;
					I.req = 55;
				}
			}
			if (N === "Fur-Lined Cloak") {
				I.name = "Goldensilk Cloak";
				I.intel = 25;
				I.goldKill = 20;
				I.cha = 17;
				I.wis = 20;
				I.enhanceMagic = 6;
				I.evocation = 8;
				I.alteration = 10;
				I.castingHaste = -80;
				I.req = 56;
			}
			if (N === "Drake-hide Cloak") {
				if (M.random() > .32) {
					I.name = "Spirit Caller's Cloak";
					I.mpRegen = 3;
					I.enhanceAll = 3;
					I.dodge = 2;
					I.alteration = 6;
					I.evocation = 4;
					I.abjuration = 11;
					setAllStatus(NI, 8, 8, 8, 8);
					I.req = 57;
				} else {
					I.name = "Phantasmist's Catharsis";
					I.enhancedArmor = 120;
					I.allResist = 14;
					I.alteration = 13;
					I.conjuration = 9;
					I.enhanceMagic = 5;
					I.hpKill = 13;
					I.intel = 35;
					I.wis = 26;
					I.cha = 22;
					I.hp = 35;
					I.fear = 36;
					I.rarity = 4;
					I.req = 57;
				}
			}
			if (N === "Brigand's Shroud") {
				I.name = "Imperial Assassin Shroud";
				I.hp = 30;
				I.poisonDamage = 20;
				I.agi = 35;
				I.offense = 10;
				I.piercing = 5;
				I.resistMagic = 15;
				I.resistPoison = 25;
				I.haste = -150;
				I.req = 58;
			}
			if (N === "Regal Shroud") {
				I.name = "Dimensional Cloak";
				I.absorbMagic = 5;
				I.evocation = 6;
				setAllResists(NI, 0, 25, 15, 10, 10);
				setAllStatus(NI, 10, 10, 10, 10);
				I.critChance = 8;
				I.castingHaste = -120;
				I.req = 58;
			}
			if (N === "Orcish Cloak") {
				I.name = "Illuminated Cloak";
				I.mp = 35;
				I.wis = 20;
				I.intel = 25;
				I.silence = 25;
				I.allSkills = 3;
				setAbsorbAll(NI, 4);
				I.expFind = 20;
				I.req = 59;
			}
			if (N === "Elven Shroud") {
				I.name = "Cloak of Thorns";
				I.absorbLightning = 8;
				I.absorbCold = 5;
				I.absorbFire = 3;
				I.thorns = 30;
				I.critChance = 6;
				I.globalHaste = -80;
				I.haste = -50;
				I.allStats = 8;
				I.req = 60;
			}
			if (N === "Emerald Cloak") {
				if (M.random() > .32) {
					I.name = "Cloak of Venom";
					I.poisonDamage = 40;
					I.haste = -90;
					I.attack = 8;
					I.absorbPoison = 9;
					I.enhancePoison = 5;
					I.leech = 6;
					I.agi = 20;
					I.allSkills = 2;
					I.req = 60;
				} else {
					I.name = "Hierophant's Cyclone";
					I.allResist = 18;
					I.enhancePhysical = 10;
					I.phyMit = 15;
					I.wis = 40;
					I.sta = 16;
					I.dex = 23;
					I.hpRegen = 6;
					I.mpRegen = 6;
					I.castingHaste = -120;
					I.rarity = 4;
					I.req = 60;
				}
			}
			if (N === "Aviak Cloak") {
				if (M.random() > .32) {
					I.name = "Fletcher's Cloak";
					I.attack = 12;
					I.critDamage = 6;
					I.critChance = 6;
					I.hp = 25;
					I.mp = 25;
					I.resistLightning = 20;
					I.enhanceAll = 5;
					I.enhancePhysical = 5;
					I.globalHaste = -120;
					I.req = 61;
				} else {
					I.name = "Warlock's Demise";
					I.castingHaste = -150;
					I.enhanceFire = 7;
					I.enhanceMagic = 4;
					setAllStatus(NI, 20, 20, 20, 20);
					I.allStats = 12;
					I.expFind = 12;
					I.allSkills = 5;
					I.intel = 42;
					I.wis = 30;
					I.sta = 15;
					I.rarity = 4;
					I.req = 61;
				}
			}
			if (N === "Chlamys") {
				if (M.random() > .32) {
					I.name = "Cloak of Silver Eyes";
					I.mpKill = 7;
					I.hpKill = 11;
					I.leech = 7;
					I.mpRegen = 4;
					I.haste = -50;
					I.magMit = 7;
					I.oneHandSlash = 9;
					I.cold = 16;
					I.req = 61;
				} else {
					I.name = "Assassin's Slander";
					I.allResist = 19;
					I.allSkills = 3;
					I.agi = 25;
					I.sta = 47;
					I.phyMit = 15;
					I.critChance = 7;
					I.goldFind = 25;
					I.haste = -180;
					I.thorns = 25;
					I.stun = 35;
					I.fear = 15;
					I.cold = 27;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Dragon Cape") {
				I.name = "Cloak of Piety";
				I.wis = 18;
				I.dex = 18;
				I.hp = 35;
				I.enhanceAll = 2;
				I.enhancePhysical = 2;
				I.handtohand = 9;
				I.critDamage = 15;
				I.haste = -50;
				I.globalHaste = -50;
				I.castingHaste = -50;
				I.flavorText = 'The worldly man leaves all treasures behind him. A pious man leaves all treasures in front of him.';
				I.req = 62;
			}
			if (N === "Umbral Shroud") {
				if (M.random() > .32) {
					I.name = "Demon Slayer's Shroud";
					I.hpKill = 8;
					I.absorbFire = 8;
					I.hpRegen = 3;
					I.twoHandSlash = 10;
					I.haste = -130;
					I.enhanceCold = 6;
					I.enhanceFire = 3;
					I.fear = 24;
					I.req = 63;
				} else {
					I.name = "Grave Lord's Treachery";
					I.allResist = 27;
					I.absorbLightning = 7;
					I.absorbPoison = 7;
					I.critChance = 8;
					I.expFind = 16;
					I.haste = -110;
					I.globalHaste = -150;
					I.magMit = 13;
					I.str = 33;
					I.stun = 66;
					I.cold = 52;
					I.rarity = 4;
					I.req = 64;
				}
			}
			if (N === "Archon Cloak") {
				I.name = "Dragoon's Glory";
				I.allStats = 9;
				I.twoHandSlash = 9;
				I.defense = 6;
				I.globalHaste = -150;
				I.phyMit = 3;
				I.attack = 9;
				I.absorbCold = 5;
				setAllResists(NI, 10, 25, 0, 15, 15);
				setAllStatus(NI, 8, 8, 8, 8);
				I.flavorText = 'In search of glory one must first search for resolve.';
				I.req = 64;
			}
			if (N === "Astral Cloak") {
				I.name = "Prism Seer's Cloak";
				I.allStats = 10;
				I.allSkills = 3;
				I.resistMagic = 35;
				I.resistFire = 25;
				setAbsorbAll(NI, 4);
				I.castingHaste = -160;
				I.silence = 25;
				I.req = 65;
			}
		}
		if (ni === "chest") {
			if (N === "Elven Robe") {
				I.name = "Robe of Fungus Growth";
				I.enhancedArmor = 80;
				I.resistFire = 30;
				I.wis = 12;
				I.sta = 36;
				I.allSkills = 3;
				I.hpRegen = 15;
				I.cold = 25;
				I.req = 54;
			}
			if (N === "Silk Robe") {
				I.name = "Sorcerer's Nebula";
				I.enhancedArmor = 120;
				I.hp = 100;
				I.mp = 100;
				I.allResist = 25;
				I.enhanceAll = 7;
				I.hpKill = 25;
				I.mpRegen = 9;
				I.lightRadius = 25;
				I.phyMit = 25;
				I.magMit = 16;
				I.critChance = 7;
				I.critDamage = 17;
				I.rarity = 4;
				I.req = 62;
			}
			if (N === "Linen Robe") {
				if (M.random() > .32) {
					I.name = "Robe of Adversity";
					I.enhancedArmor = 90;
					I.mp = 55;
					I.sta = 20;
					I.cha = 20;
					I.intel = 33;
					I.resistPoison = 55;
					I.conjuration = 10;
					I.resistMagic = 20;
					I.fear = 15;
					I.critChance = 5;
					I.req = 62;
				} else {
					I.name = "Warlock's Abomination";
					I.enhancedArmor = 120;
					I.enhancePoison = 15;
					I.enhanceFire = 5;
					I.enhanceMagic = 7;
					I.fear = 32;
					I.silence = 58;
					I.mp = 110;
					I.hp = 75;
					I.critChance = 8;
					I.phyMit = 10;
					I.critChance = 12;
					I.critDamage = 15;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Azure Robe") {
				I.name = "Robe of the Pale Moon Sky";
				I.enhancedArmor = 95;
				I.intel = 20;
				I.wis = 20;
				I.hp = 85;
				I.mp = 100;
				I.allResist = 15;
				I.allSkills = 2;
				I.castingHaste = -80;
				I.req = 66;
			}
			if (N === "Quilted Tunic") {
				I.name = "Wyvern Hide Tunic";
				I.enhancedArmor = 80;
				I.sta = 15;
				I.wis = 24;
				I.intel = 11;
				I.mp = 25;
				I.resistFire = 25;
				I.resistMagic = 15;
				I.mpRegen = 5;
				setAllStatus(NI, 7, 7, 7, 7);
				I.castingHaste = -100;
				I.req = 54;
			}
			if (N === "Spiked Vestment") {
				I.name = "The Gladiator's Vestment";
				I.enhancedArmor = 85;
				setAbsorbAll(NI, 5);
				I.thorns = 20;
				I.magMit = 18;
				I.phyMit = 18;
				I.resistPoison = 40;
				I.stun = 25;
				I.cold = 35;
				I.req = 58;
			}
			if (N === "Leather Armor") {
				I.name = "Fungus Covered Scale Tunic";
				I.enhancedArmor = 90;
				I.abjuration = 8;
				I.enhancePoison = 4;
				I.globalHaste = -50;
				I.str = 21;
				I.hpKill = 5;
				I.expFind = 12;
				setAllResists(NI, 15, 24, 33, 10, 0);
				I.hpRegen = 15;
				I.flavorText = 'A coveted artifact rumored to be hidden in the unknown depths of Kordata. Enchanted with the regenerative properties of fungus.';
				I.req = 62;
			}
			if (N === "Studded Leather") {
				I.name = "Gelke's Valor";
				I.enhancedArmor = 95;
				I.critChance = 7;
				I.critDamage = 12;
				I.enhancePhysical = 3;
				I.enhanceFire = 5;
				I.phyMit = 13
				I.sta = 35;
				I.stun = 25;
				I.allSkills = 3;
				I.req = 66;
			}
			if (N === "Chain Mail") {
				if (M.random() > .32) {
					I.name = "Mithril Chains of the Underdark";
					I.enhancedArmor = 80;
					I.hp = 60;
					I.phyMit = 15;
					I.critChance = 7;
					I.conjuration = 9;
					I.haste = -90;
					I.enhanceAll = 5;
					I.enhancePhysical = 5;
					setAllResists(NI, 10, 35, 20, 5, 5);
					I.cold = 15;
					I.weight = 1;
					I.flavorText = "Famously worn by an outcast dark elven ranger. He spent his days wandering the dungeons of Vandamor in search of friendship, adventure, and his identity.";
					I.req = 54;
				} else {
					I.name = "Assassin's Deception";
					I.enhancedArmor = 120;
					I.hp = 120;
					I.allResist = 30;
					I.doubleAttack = 13;
					I.hpKill = 25;
					I.enhancePhysical = 9;
					I.agi = 75;
					I.phyMit = 25;
					I.magMit = 15;
					I.absorbLightning = 7;
					I.absorbMagic = 10;
					I.absorbPoison = 7;
					setAllStatus(NI, 18, 18, 18, 18);
					I.rarity = 4;
					I.req = 55;
				}
			}
			if (N === "Ring Mail") {
				I.name = "Anuran Scale Chestplate";
				I.enhancedArmor = 85;
				I.hp = 25;
				I.mp = 35;
				I.cha = 15;
				I.intel = 25;
				I.wis = 25;
				I.mpRegen = 5;
				I.enhancePoison = 6;
				I.enhanceMagic = 5;
				I.allResist = 14;
				I.allSkills = 4;
				I.req = 58;
			}
			if (N === "Scale Mail") {
				I.name = "Leviathan";
				I.enhancedArmor = 90;
				I.phyMit = 25;
				I.str = 50;
				setAbsorbAll(NI, 5);
				I.allResist = 18;
				I.defense = 10;
				I.coldDamage = 25;
				I.cold = 20;
				I.req = 62;
			}
			if (N === "Kusari Mail") {
				I.name = "Chains of Sovereignty";
				I.enhancedArmor = 95;
				I.leech = 8;
				I.hpRegen = 6;
				I.str = 20;
				I.phyMit = 15;
				I.magMit = 21;
				I.allSkills = 2;
				I.allResist = 28;
				I.expFind = 15;
				I.mpKill = 15;
				I.hpKill = 9;
				I.req = 66;
			}
			if (N === "Breast Plate") {
				if (M.random() > .32) {
					I.name = "Breastplate of Honor";
					I.enhancedArmor = 80;
					I.hp = 50;
					I.mp = 50;
					I.allStats = 14;
					I.allResist = 14;
					I.allSkills = 3;
					setAllStatus(NI, 15, 15, 15, 15);
					I.weight = 1;
					I.req = 54;
				} else {
					I.name = "High Priest's Reverence";
					I.hp = 175;
					I.fear = 30;
					I.stun = 55;
					I.silence = 20;
					I.enhanceAll = 5;
					I.allResist = 35;
					I.allSkills = 5;
					I.castingHaste = -100;
					I.lightRadius = 25;
					I.weight = 1;
					I.rarity = 4;
					I.req = 56;
				}

			}
			if (N === "Cuirass") {
				if (M.random() > .32) {
					I.name = "Steel Carapace";
					I.enhancedArmor = 85;
					I.resistMagic = 40;
					I.thorns = 35;
					I.resistCold = 55;
					I.phyMit = 24;
					I.stun = 25;
					I.mpRegen = 9;
					I.castingHaste = -100;
					I.conjuration = 11;
					I.globalHaste = -100;
					I.enhanceAll = 3;
					I.req = 58;
				} else {
					I.name = "Warlord's Blitzkrieg";
					I.enhancedArmor = 120;
					I.hp = 125;
					I.allSkills = 5;
					I.enhancePhysical = 8;
					I.doubleAttack = 24;
					setAllResists(NI, 20, 30, 75, 35, 35);
					I.fear = 40;
					I.str = 55;
					I.magicDamage = 14;
					I.lightningDamage = 88;
					setAbsorbAll(NI, 5);
					I.rarity = 4;
					I.req = 59;
				}
			}
			if (N === "Gothic Plate") {
				if (M.random() > .32) {
					I.name = "Chestplate of Cremated Care";
					I.enhancedArmor = 90;
					I.allStats = 24;
					I.hp = 30;
					I.mp = 30;
					I.allResist = 17;
					I.allSkills = 1;
					I.enhanceFire = 7;
					I.absorbFire = 15;
					I.thorns = 7;
					I.hpRegen = 5;
					I.weight = 1;
					I.flavorText = '"The future is carved by men who fight in the arena. It costs nothing to mock a man who dares greatly; such people never dare enter the arena." -Tynkale, Paladin Guildmaster';
					I.req = 62;
				} else {
					I.name = "Grave Lord's Cozen";
					I.enhancedArmor = 120;
					I.hp = 100;
					I.mp = 100;
					I.phyMit = 35;
					I.enhanceAll = 5;
					I.weight = 1;
					I.allStats = 20;
					I.mpKill = 13;
					I.conjuration = 10;
					I.doubleAttack = 7;
					I.offense = 7;
					I.resistPoison = 79;
					I.resistLightning = 37;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Archon Plate") {
				if (M.random() > .32) {
					I.name = "Archon's Might";
					I.enhancedArmor = 95;
					I.mpRegen = 5;
					I.leech = 5;
					I.castingHaste = -120;
					I.haste = -80;
					I.globalHaste = -120;
					I.absorbMagic = 9;
					I.enhanceAll = 6;
					I.enhancePhysical = 6;
					I.str = 30;
					I.runSpeed = 15;
					I.allResist = 25;
					I.cold = 50;
					I.weight = 1;
					I.flavorText = 'And those who cried, \"appease, appease\" are hung by those they tried to please. -Unknown';
					I.req = 66;
				} else {
					I.name = "Virtuoso's Bombast";
					I.enhancedArmor = 120;
					I.allResist = 35;
					setAllStatus(NI, 32, 32, 32, 32);
					I.enhanceMagic = 9;
					I.enhancePhysical = 4;
					I.hp = 120;
					I.cha = 48;
					I.hpRegen = 4;
					I.mpRegen = 4;
					I.dex = 35;
					I.critChance = 10;
					I.dex = 35;
					I.allSkills = 4;
					I.rarity = 4;
					I.req = 68;
				}
			}
		}
		if (ni === "bracers") {
			if (N === "Jade Bracers") {
				I.name = "Stoutwraps";
				I.enhancedArmor = 80;
				I.hp = 25;
				I.intel = 15;
				I.abjuration = 5;
				I.alteration = 4;
				I.resistPoison = 25;
				I.resistMagic = 25;
				setAllStatus(NI, 15, 15, 15, 15);
				I.req = 54;
			}
			if (N === "Bone Bracers") {
				if (M.random() > .32) {
					I.name = "Bracelet of Frostbite";
					I.enhancedArmor = 85;
					I.hp = 30;
					I.wis = 12;
					I.intel = 12;
					I.critDamage = 9;
					I.silence = 12;
					I.mpKill = 6;
					I.resistCold = 35;
					I.enhanceCold = 3;
					I.req = 58;
				} else {
					I.name = "Phantasmist's Sagacity";
					I.enhancedArmor = 120;
					I.allResist = 16;
					setAllStatus(NI, 13, 13, 13, 13);
					setAbsorbAll(NI, 3);
					I.critDamage = 12;
					I.cha = 25;
					I.intel = 38;
					I.enhanceAll = 4;
					I.allSkills = 1;
					I.phyMit = 9;
					I.thorns = 10;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Sapphire Bracers") {
				if (M.random() > .32) {
					I.name = "Hardened Clay Bracelet";
					I.enhancedArmor = 90;
					I.allStats = 13
					I.goldFind = 15;
					I.expFind = 12;
					I.phyMit = 7;
					I.magMit = 7;
					I.stun = 12;
					I.abjuration = 4;
					I.req = 62;
				} else {
					I.name = "Arch Mage's Squall";
					I.enhancedArmor = 120;
					I.critDamage = 13;
					I.critChance = 5;
					I.allResist = 20;
					I.evocation = 8;
					I.conjuration = 14;
					setAllStatus(NI, 25, 25, 25, 25);
					I.enhanceCold = 15;
					I.absorbCold = 15;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Opulent Bracers") {
				I.name = "Clawed Guardian Bracer";
				I.enhancedArmor = 95;
				I.intel = 12;
				I.str = 20;
				I.hp = 50;
				I.allResist = 15;
				I.fear = 15;
				I.enhanceCold = 5;
				I.enhanceFire = 5;
				I.req = 66;
			}
			if (N === "Leather Bracers") {
				I.name = "Spectre's Bracers";
				I.enhancedArmor = 80;
				I.attack = 3;
				I.alteration = 7;
				I.mpKill = 6;
				I.hpKill = 6;
				I.allStats = 6;
				I.fear = 35;
				I.resistMagic = 33;
				I.resistCold = 22;
				I.req = 54;
			}
			if (N === "Patent Bracers") {
				I.name = "Caretaker's Wraps";
				I.enhancedArmor = 85;
				I.mp = 25;
				I.hp = 20;
				I.mpRegen = 4;
				I.alteration = 7;
				I.sta = 15;
				setAllStatus(NI, 13, 13, 13, 13);
				I.critDamage = 5;
				setAbsorbAll(NI, 3);
				I.silence = 15;
				I.req = 58;
			}
			if (N === "Bonded Bracers") {
				I.name = "Crazed Lunatic Bracers";
				I.enhancedArmor = 90;
				I.critChance = 5;
				I.handtohand = 8;
				I.globalHaste = -70;
				I.haste = -40;
				I.enhancePhysical = 5;
				I.doubleAttack = 7;
				I.req = 62;
			}
			if (N === "Elven Bracers") {
				I.name = "Camii's Bracer of Vigor";
				I.alteration = 5;
				I.piercing = 5;
				I.agi = 25;
				I.enhanceAll = 3;
				I.enhancePhysical = 3;
				I.runSpeed = 10;
				I.haste = -50;
				I.castingHaste = -80;
				I.req = 66;
			}
			if (N === "Scaled Bracers") {
				if (M.random() > .32) {
					I.name = "Dragon Skin Bracelet";
					I.enhancedArmor = 80;
					I.hp = 75;
					I.goldFind = 15;
					I.cold = 15;
					I.fear = 15;
					setAllResists(NI, 15, 5, 5, 25, 25);
					I.weight = 1;
					I.req = 54;
				} else {
					I.name = "Warder's Reclaim";
					I.enhancedArmor = 120;
					I.allResist = 20;
					setAllStatus(NI, 20, 20, 20, 20);
					I.allStats = 13;
					I.expFind = 12;
					I.goldFind = 20;
					I.lightRadius = 15;
					I.enhancePhysical = 5;
					I.weight = 1;
					I.hpKill = 15;
					I.rarity = 4;
					I.req = 55;
				}
			}
			if (N === "Laminar Bracers") {
				I.name = "Vampire Slayer's Bracer";
				I.enhancedArmor = 85;
				I.allSkills = 2;
				I.hpRegen = 4;
				I.hpKill = 12;
				I.mpKill = 8;
				I.absorbMagic = 5;
				I.fireDamage = 12;
				I.enhanceFire = 5;
				I.req = 58;
			}
			if (N === "Splinted Bracers") {
				I.name = "Magmaburst Manacles";
				I.enhancedArmor = 90;
				I.critDamage = 9;
				I.resistFire = 45;
				I.absorbFire = 9;
				I.fireDamage = 15;
				I.enhanceFire = 6;
				I.weight = 1;
				I.req = 62;
			}
			if (N === "Kusari Bracers") {
				I.name = "Glimpsefade Bracers";
				I.enhancedArmor = 95;
				I.dex = 15;
				I.agi = 25;
				I.runSpeed = 5;
				I.dualWield = 3;
				I.doubleAttack = 3;
				I.resistMagic = 10;
				setAbsorbAll(NI, 3);
				I.cold = 12;
				I.stun = 8;
				I.enhancePhysical = 2;
				I.phyMit = 8;
				I.weight = 1;
				I.req = 66;
			}
			if (N === "Bronze Bracers") {
				I.name = "High Priest's Humility";
				I.enhancedArmor = 120;
				setAllResists(NI, 0, 0, 15, 35, 35);
				I.enhanceAll = 5;
				I.enhancePhysical = 5;
				I.str = 50;
				I.wis = 25;
				I.sta = 20;
				I.defense = 10;
				I.alteration = 7;
				I.abjuration = 7;
				I.absorbPoison = 10;
				I.rarity = 4;
				I.req = 57;
			}
			if (N === "Cobalt Bracers") {
				I.name = "Crusader's Fealty";
				I.enhancedArmor = 120;
				I.allResist = 13;
				I.mp = 55;
				I.mpRegen = 7;
				I.magMit = 7;
				I.enhancePhysical = 12;
				I.critChance = 7;
				I.wis = 30;
				I.sta = 22;
				I.cold = 45;
				I.weight = 1;
				I.allSkills = 2;
				I.rarity = 4;
				I.req = 59;
			}
			if (N === "Tetrarch Bracers") {
				if (M.random() > .32) {
					I.name = "Dragon Tribe Bracers";
					I.enhancedArmor = 90;
					I.critChance = 6;
					I.goldFind = 12;
					I.resistPoison = 15;
					I.resistCold = 15;
					I.resistFire = 15;
					I.allSkills = 3;
					I.enhanceAll = 4;
					I.enhancePhysical = 4;
					I.req = 62;
				} else {
					I.name = "Warlord's Defiance";
					I.enhancedArmor = 120;
					I.allResist = 16;
					I.haste = -70;
					I.critDamage = 12;
					I.allStats = 21;
					I.hp = 50;
					I.defense = 10;
					I.lightRadius = 15;
					I.enhancePhysical = 4;
					I.weight = 1;
					setAllStatus(NI, 12, 12, 12, 12);
					I.rarity = 4;
					I.req = 63;
				}
			}
			if (N === "Gilded Bracers") {
				I.name = "Waking Dawn Bracers";
				I.enhancedArmor = 95;
				I.weight = 1;
				I.castingHaste = -50;
				I.magicDamage = 25;
				I.cha = 20;
				I.allStats = 13
				setAbsorbAll(NI, 5);
				setAllStatus(NI, 18, 18, 18, 18);
				I.req = 66;
			}
		}
		if (ni === "gloves") {
			if (N === "Gloves") {
				I.name = "Dainty Gloves";
				I.enhancedArmor = 80;
				I.mp = 35;
				I.cha = 16;
				I.intel = 24;
				I.alteration = 4;
				I.abjuration = 7;
				I.silence = 12;
				I.castingHaste = -50;
				I.absorbMagic = 9;
				I.magicDamage = 12;
				I.req = 54;
			}
			if (N === "Cloth Gloves") {
				I.name = "Arch Mage's Calamity";
				I.enhancedArmor = 120;
				I.castingHaste = -120;
				I.globalHaste = -250;
				I.enhanceLightning = 12;
				I.enhanceCold = 5;
				I.lightRadius = 10;
				I.allSkills = 2;
				I.mpKill = 15;
				I.hpKill = 15;
				I.allStats = 10;
				I.rarity = 4;
				I.req = 58;
			}
			if (N === "Woven Gloves") {
				I.name = "Phantasmist's Serendipity";
				I.enhancedArmor = 120;
				I.castingHaste = -250;
				I.expFind = 17;
				I.goldFind = 25;
				I.lightRadius = 30;
				I.critChance = 7;
				I.critDamage = 10;
				I.resistCold = 35;
				I.resistFire = 35;
				I.allStats = 20;
				I.leech = 12;
				I.wraith = 12;
				I.rarity = 4;
				I.req = 62;
			}
			if (N === "Mesh Gloves") {
				I.name = "Gloves of Bladecalling";
				I.enhancedArmor = 95;
				I.mp = 50;
				I.sta = 15;
				I.intel = 15;
				I.conjuration = 10;
				I.abjuration = 6;
				I.castingHaste = -50;
				I.expFind = 12;
				I.thorns = 15;
				I.absorbMagic = 3;
				I.req = 66;
			}
			if (N === "Rawhide Gloves") {
				I.name = "Assassin's Hoax";
				I.enhancedArmor = 120;
				I.enhancePhysical = 9;
				I.agi = 65;
				I.allResist = 24;
				I.globalHaste = -200;
				I.critChance = 7;
				I.critDamage = 15;
				I.fear = 45;
				I.leech = 15;
				I.rarity = 4;
				I.req = 62;
			}
			if (N === "Drakescale Gloves") {
				I.name = "Gladeclutch";
				I.enhancedArmor = 85;
				I.hp = 45;
				I.mpRegen = 4;
				I.leech = 9;
				I.wraith = 9;
				I.critChance = 7;
				I.dodge = 7;
				I.thorns = 13;
				I.lightRadius = 15;
				I.globalHaste = -50;
				I.haste = -50;
				I.req = 58;
			}
			if (N === "Sharkskin Gloves") {
				I.name = "Tyrant's Iron Will";
				I.enhancedArmor = 90;
				I.hp = 50;
				I.hpRegen = 5;
				I.hpKill = 12;
				I.allResist = 12;
				I.allSkills = 3;
				I.phyMit = 5;
				setAllStatus(NI, 9, 9, 9, 9);
				I.req = 62;
			}
			if (N === "Studded Gloves") {
				I.name = "Soul Drainer";
				I.enhancedArmor = 95;
				I.mp = 21;
				I.wis = 12;
				I.leech = 7;
				I.wraith = 7;
				I.mpKill = 14;
				I.mpKill = 14;
				setAbsorbAll(NI, 7);
				I.attack = 15;
				I.enhancePhysical = 6;
				I.req = 66;
			}
			if (N === "Lamellar Gauntlets") {
				I.name = "Twisted Steel Gauntlets";
				I.enhancedArmor = 80;
				I.str = 32;
				I.critDamage = 16;
				I.haste = -100;
				I.physicalDamage = 44;
				I.resistLightning = 25;
				I.resistPoison = 25;
				I.stun = 25;
				I.req = 54;
			}
			if (N === "Banded Gauntlets") {
				I.name = "Do'Vassir's Gauntlets of Might";
				I.enhancedArmor = 85;
				I.hp = 50;
				I.mp = 50;
				I.allStats = 18;
				I.castingHaste = -60;
				I.weight = 1;
				I.enhanceAll = 5;
				I.enhancePhysical = 5;
				I.allResist = 14;
				I.silence = 25;
				I.req = 58;
			}
			if (N === "Kusari Gauntlets") {
				I.name = "Eternal Loyalty Gauntlets";
				I.enhancedArmor = 90;
				I.critChance = 5;
				I.hpRegen = 4
				I.agi = 35;
				I.lightRadius = 17;
				I.leech = 10;
				I.attack = 15;
				I.enhancePhysical = 6;
				I.req = 62;
			}
			if (N === "Brigandine Gauntlets") {
				if (M.random() > .32) {
					I.name = "Unholy Caller's Gauntlets";
					I.enhancedArmor = 95;
					I.allStats = 10;
					I.mpRegen = 5;
					I.mpRegen = 3;
					I.conjuration = 7;
					I.castingHaste = -120;
					I.enhanceCold = 6;
					I.enhancePoison = 6;
					I.silence = 12;
					I.fear = 24;
					I.req = 66;
				} else {
					I.name = "Oracle's Contagion";
					I.enhancedArmor = 120;
					I.globalHaste = -100;
					I.castingHaste = -160;
					I.resistFire = 55;
					I.resistPoison = 90;
					I.mp = 40;
					I.alteration = 8;
					I.evocation = 5;
					I.enhancePhysical = 9;
					I.enhancePoison = 6;
					I.rarity = 4;
					I.req = 67;
				}
			}
			if (N === "Cobalt Gauntlets") {
				I.name = "Gutrender";
				I.enhancedArmor = 80;
				I.str = 40;
				I.twoHandSlash = 9;
				I.critChance = 10;
				I.critDamage = 20;
				I.defense = 12;
				I.stun = 25;
				I.fear = 15;
				I.physicalDamage = 20;
				I.enhancePhysical = 6;
				I.req = 54;
			}
			if (N === "Ornate Gauntlets") {
				I.name = "Virtuoso's Conceit";
				I.enhancedArmor = 120;
				I.mpKill = 21;
				I.dualWield = 16;
				I.dex = 28;
				I.agi = 40;
				I.critDamage = 33;
				I.goldFind = 40;
				I.hp = 50;
				I.mpRegen = 4;
				I.castingHaste = -200;
				setAllResists(NI, 37, 39, 25, 15, 0);
				I.rarity = 4;
				I.req = 62;
			}
			if (N === "Tetrarch Gauntlets") {
				if (M.random() > .32) {
					I.name = "Queensguard Gauntlets";
					I.enhancedArmor = 90;
					I.allSkills = 4;
					I.allStats = 10;
					setAbsorbAll(NI, 4);
					I.enhanceMagic = 6;
					I.silence = 24;
					I.fireDamage = 5;
					I.mpRegen = 3;
					I.goldFind = 40;
					I.req = 62;
				} else {
					I.name = "Warlord's Derision";
					I.enhancedArmor = 120;
					I.haste = -200;
					I.enhancePhysical = 7;
					I.leech = 13;
					I.absorbFire = 8;
					I.absorbPoison = 8;
					I.resistCold = 60;
					I.resistFire = 60;
					I.hpKill = 20;
					I.critChance = 9;
					I.critDamage = 15;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Gilded Gauntlets") {
				I.name = "Berserker's Vengeance Gauntlets";
				I.enhancedArmor = 95;
				I.hpKill = 15;
				I.leech = 10;
				I.globalHaste = -150;
				I.haste = -150;
				I.allSkills = 5;
				I.magMit = 5;
				I.phyMit = 7;
				I.req = 66;
			}
		}
		if (ni === "belt") {
			if (N === "Sash") {
				if (M.random() > .5) {
					I.name = "Girdle of Dark Power";
					I.enhancedArmor = 80;
					I.hp = 28;
					I.mp = 28;
					I.castingHaste = -150;
					I.allResist = 13
					I.intel = 15;
					I.str = 15;
					I.conjuration = 6;
					I.evocation = 6;
					I.enhancePoison = 6;
					I.req = 54;
				} else {
					if (M.random() > .32) {
						I.name = "Silver Girdle of Stability";
						I.enhancedArmor = 80;
						I.hp = 50;
						I.mp = 50;
						I.allResist = 10;
						I.str = 8;
						I.wis = 5;
						I.intel = 5;
						I.allSkills = 2;
						I.enhanceMagic = 5;
						I.req = 54;
					} else {
						I.name = "Phantasmist's Insight";
						I.enhancedArmor = 120;
						I.allResist = 35;
						I.mp = 90;
						I.alteration = 5;
						I.cha = 45;
						I.channeling = 11;
						I.abjuration = 7;
						I.intel = 30;
						I.wis = 30;
						I.absorbMagic = 9;
						I.enhanceAll = 5;
						I.phyMit = 12;
						I.runSpeed = 15;
						I.rarity = 4;
						I.req = 58;
					}
				}
			}
			if (N === "Azure Sash") {
				if (M.random() > .5) {
					I.name = "Arachnid Sash";
					I.enhancedArmor = 90;
					I.mp = 25;
					I.mpKill = 15;
					I.mpRegen = 7;
					I.fear = 15;
					I.silence = 25;
					I.castingHaste = -80;
					I.allSkills = 5;
					I.req = 62;
				} else {
					if (M.random() > .32) {
						I.name = "Crystalline Silk Belt";
						I.enhancedArmor = 90;
						I.hp = 35;
						I.mp = 35;
						I.wis = 15;
						I.intel = 25;
						I.abjuration = 5;
						I.silence = 25;
						I.castingHaste = -130;
						I.enhanceLightning = 7;
						I.req = 62;
					} else {
						I.name = "Sorcerer's Equinox";
						I.enhancedArmor = 120;
						I.enhanceCold = 6;
						I.enhanceFire = 6;
						setAbsorbAll(NI, 4);
						I.castingHaste = -200;
						I.globalHaste = -200;
						I.critDamage = 24;
						I.thorns = 15;
						I.stun = 25;
						I.fear = 33;
						I.rarity = 4;
						I.req = 62;
					}
				}
			}
			if (N === "Leather Belt") {
				if (M.random() > .5) {
					if (M.random() > .32) {
						I.name = "Belt of the Destroyer";
						I.enhancedArmor = 80;
						I.wis = 30;
						I.str = 15;
						I.intel = 30;
						I.hp = 50;
						I.enhanceFire = 10;
						I.evocation = 8;
						I.resistFire = 45;
						I.castingHaste = -120;
						I.req = 54;
					} else {
						I.name = "Grandmaster's Affinity";
						I.enhancedArmor = 120;
						I.haste = -180;
						I.globalHaste = -60;
						I.allStats = 15;
						I.enhancePhysical = 15;
						I.parry = 12;
						I.handtohand = 20;
						I.riposte = 7;
						I.absorbMagic = 12;
						I.cold = 50;
						I.rarity = 4;
						I.req = 58;
					}
				} else {
					I.name = "Windraider's Belt";
					I.enhancedArmor = 80;
					I.hpRegen = 3;
					I.defense = 5;
					I.enhanceFire = 5;
					I.enhanceLightning = 5;
					I.str = 25;
					I.allResist = 7;
					I.castingHaste = -120;
					I.globalHaste = -110;
					I.req = 54;
				}
			}
			if (N === "Heavy Belt") {
				if (M.random() > .5) {
					I.name = "Sarmina's Cord of Velocity";
					I.enhancedArmor = 90;
					I.haste = -150;
					I.str = 28;
					I.dex = 28;
					I.sta = 28;
					I.agi = 28;
					I.enhanceAll = 5;
					I.enhancePhysical = 5;
					I.cold = 30;
					I.absorbCold = 12;
					I.absorbPoison = 9;
					I.req = 65;
				} else {
					if (M.random() > .32) {
						I.name = "Belt of Dwarf Slaying";
						I.enhancedArmor = 90;
						I.stun = 24;
						I.critChance = 7;
						I.intel = 15;
						I.wis = 15;
						I.str = 15;
						I.allResist = 5;
						I.mp = 50;
						I.hp = 50;
						I.attack = 12;
						I.weight = 1;
						I.req = 65;
					} else {
						I.name = "Assassin's Subversion";
						I.enhancedArmor = 120;
						I.haste = -200;
						I.cold = 50;
						I.absorbCold = 10;
						setAllResists(NI, 15, 25, 10, 75, 0);
						I.lightRadius = 21;
						I.hp = 66;
						I.str = 36;
						I.dex = 50;
						I.allSkills = 2;
						I.rarity = 4;
						I.req = 66;
					}
				}
			}
			if (N === "Mesh Belt") {
				if (M.random() > .5) {
					I.name = "Viston's Coil";
					I.enhancedArmor = 80;
					I.leech = 9;
					I.mpKill = 11;
					I.weight = 1;
					I.str = 32;
					I.haste = -80;
					I.globalHaste = -80;
					I.enhancePhysical = 5;
					I.enhancePoison = 6;
					I.req = 54;
				} else {
					I.name = "White Dragon Scale Sash";
					I.enhancedArmor = 80;
					I.wis = 9;
					I.mp = 75;
					I.resistCold = 30;
					I.mpRegen = 3;
					I.castingHaste = -100;
					I.allSkills = 2;
					I.enhanceMagic = 8;
					I.req = 54;
				}
			}
			if (N === "Splinted Belt") {
				if (M.random() > .5) {
					I.name = "Runebranded Cord";
					I.enhancedArmor = 90;
					I.weight = 1;
					I.str = 15;
					I.dex = 15;
					I.sta = 15;
					I.haste = -100;
					I.globalHaste = -100;
					I.castingHaste = -100;
					I.allResist = 10;
					I.allSkills = 3;
					I.req = 65;
				} else {
					I.name = "Spiked Siren Hide Belt";
					I.enhancedArmor = 90;
					I.hp = 25;
					I.mp = 25;
					I.allStats = 13
					I.allResist = 7;
					I.haste = -200;
					I.enhanceCold = 10;
					I.req = 65;
				}
			}
			if (N === "Monarch Girdle") {
				if (M.random() > .5) {
					I.name = "White Wolf-hide Girdle";
					I.enhancedArmor = 80;
					I.str = 11;
					I.dex = 26;
					I.cold = 35;
					I.haste = -200;
					I.weight = 1;
					I.lightRadius = 25;
					I.mpKill = 12;
					I.fear = 15;
					I.stun = 15;
					I.resistCold = 40;
					I.absorbCold = 8;
					I.req = 54;
				} else {
					if (M.random() > .32) {
						I.name = "Belt of the Great Turtle";
						I.enhancedArmor = 80;
						I.str = 25;
						I.dex = 25;
						I.hp = 30;
						I.cold = 50;
						I.stun = 20;
						I.globalHaste = -160;
						I.haste = -120;
						I.abjuration = 5;
						I.defense = 5;
						I.req = 54;
					} else {
						I.name = "High Priest's Constraint";
						I.enhancedArmor = 120;
						I.castingHaste = -120;
						I.haste = -150;
						I.globalHaste = -200;
						I.expFind = 20;
						I.sta = 30;
						I.dex = 30;
						I.allSkills = 3;
						I.phyMit = 15;
						I.leech = 7;
						I.weight = 1;
						I.silence = 33;
						I.enhanceMagic = 4;
						I.enhancePhysical = 7;
						I.rarity = 4;
						I.req = 59;
					}
				}
			}
			if (N === "Mithril Girdle") {
				if (M.random() > .5) {
					if (M.random() > .32) {
						I.name = "Grimden's Hearty Cord";
						I.enhancedArmor = 90;
						I.stun = 30;
						I.sta = 35;
						I.hpRegen = 4;
						I.mpRegen = 6;
						I.castingHaste = -120;
						I.enhanceAll = 5;
						setAbsorbAll(NI, 7);
						I.req = 64;
					} else {
						I.name = "Virtuoso's Plangent";
						I.allResist = 25;
						setAllResists(NI, 0, 15, 25, 50, 50);
						setAllStatus(NI, 26, 26, 26, 26);
						I.absorbLightning = 10;
						I.haste = -140;
						I.weight = 1;
						I.allSkills = 2;
						I.enhanceMagic = 6;
						I.critDamage = 15;
						I.hp = 60;
						I.rarity = 4;
						I.req = 65;
					}
				} else {
					I.name = "Grotesque Girdle";
					I.enhancedArmor = 90;
					I.hp = 75;
					I.mp = 75;
					I.wis = 25;
					I.intel = 25;
					I.castingHaste = -80;
					I.mpRegen = 5;
					I.leech = 5;
					I.wraith = 5;
					I.poisonDamage = 25;
					I.weight = 1;
					I.req = 64;
				}
			}
		}
		if (ni === "legs") {
			if (N === "Pants") {
				I.name = "Spider Queen's Leggings";
				I.enhancedArmor = 80;
				I.conjuration = 8;
				I.channeling = 7;
				I.alteration = 8;
				I.hp = 35;
				I.mp = 55;
				I.magMit = 15;
				I.resistPoison = 35;
				I.enhancePoison = 6;
				I.req = 54;
			}
			if (N === "Cotton Pants") {
				I.name = "Arch Angel's Trousers";
				I.enhancedArmor = 85;
				I.allStats = 13
				I.abjuration = 9;
				I.alteration = 9;
				I.mpRegen = 6;
				I.lightRadius = 15;
				I.expFind = 11;
				I.silence = 16;
				I.resistMagic = 24;
				I.resistLightning = 15;
				I.allSkills = 4;
				I.req = 58;
			}
			if (N === "Linen Pants") {
				if (M.random() > .32) {
					I.name = "Martyr's Destiny";
					I.enhancedArmor = 90;
					I.critChance = 9;
					I.enhanceFire = 9;
					I.hpKill = 30;
					I.mpKill = 18;
					I.evocation = 10;
					I.silence = 16;
					I.fear = 30;
					setAllResists(NI, 0, 15, 20, 25, 45);
					I.req = 62;
				} else {
					I.name = "Sorcerer's Quasar";
					I.enhancedArmor = 120;
					setAllStatus(NI, 20, 20, 20, 20);
					I.enhanceLightning = 8;
					I.enhanceMagic = 5;
					I.sta = 40;
					I.intel = 45;
					I.mp = 55;
					I.silence = 44;
					I.stun = 20;
					I.mpRegen = 7;
					I.hpRegen = 7;
					I.phyMit = 10;
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Silk Leggings") {
				I.name = "Sacred Striders";
				I.enhancedArmor = 95;
				I.hp = 80;
				I.mp = 80;
				I.hpRegen = 12;
				I.magMit = 18;
				I.phyMit = 13
				I.allSkills = 4;
				I.enhanceAll = 6;
				I.resistMagic = 65;
				I.req = 66;
			}
			if (N === "Fur Pants") {
				I.name = "Hierophant's Cataclysm";
				I.enhancedArmor = 120;
				I.allResist = 24;
				I.hp = 50;
				I.mp = 50;
				I.alteration = 9;
				I.abjuration = 9;
				I.enhanceAll = 4;
				setAllStatus(NI, 15, 15, 15, 15);
				I.thorns = 30;
				I.runSpeed = 15;
				I.critChance = 5;
				I.critDamage = 12;
				I.rarity = 4;
				I.req = 55;
			}
			if (N === "Wolf-Hide Pants ") {
				I.name = "Tranquil Breeches";
				I.enhancedArmor = 85;
				I.handtohand = 15;
				I.riposte = 9;
				I.parry = 9;
				I.dodge = 9;
				I.expFind = 13;
				I.defense = 6;
				I.physicalDamage = 20;
				I.critChance = 6;
				I.critDamage = 12;
				setAbsorbAll(NI, 5);
				setAllStatus(NI, 12, 12, 12, 12);
				I.req = 58;
			}
			if (N === "Sharkskin Legs") {
				I.name = "Heavenly Gait";
				I.allStats = 13
				I.allSkills = 3;
				setAllStatus(NI, 13, 13, 13, 13);
				I.globalHaste = -100;
				I.phyMit = 12;
				I.magMit = 21;
				I.weight = 1;
				I.resistMagic = 25;
				I.resistLightning = 25;
				I.req = 62;
			}
			if (N === "Studded Legs") {
				if (M.random() > .32) {
					I.name = "Preacher's Disciple";
					I.enhancedArmor = 95;
					I.mp = 60;
					I.hp = 40;
					I.alteration = 3;
					I.hpRegen = 5;
					I.mpRegen = 7;
					setAbsorbAll(NI, 4);
					I.enhanceLightning = 7;
					I.enhanceMagic = 7;
					I.req = 66;
				} else {
					I.name = "Grandmaster's Consonance";
					I.enhancedArmor = 120;
					I.fear = 35;
					I.stun = 35;
					I.hp = 80;
					I.critChance = 9;
					I.globalHaste = -120;
					I.resistPoison = 44;
					I.resistFire = 60;
					I.hpKill = 22;
					I.critDamage = 17;
					I.str = 40;
					I.rarity = 4;
					I.req = 67;
				}
			}
			if (N === "Scaled Legs") {
				I.name = "Coward's Redemption";
				I.fear = 30;
				I.agi = 35;
				I.runSpeed = 15;
				I.hpRegen = 4;
				I.allStats = 14;
				I.enhancePhysical = 6;
				I.req = 54;
			}
			if (N === "Chausses") {
				I.name = "Cobrastrike Chausses";
				I.enhancedArmor = 85;
				I.critChance = 5;
				I.agi = 35;
				I.hpKill = 12;
				I.leech = 5;
				I.wraith = 3;
				I.piercing = 10;
				I.resistFire = 25;
				I.resistPoison = 35;
				I.poisonDamage = 24;
				I.req = 58;
			}
			if (N === "Kusazuri") {
				I.name = "Dark Scale Greaves";
				I.enhancedArmor = 90;
				I.hp = 55;
				I.phyMit = 21;
				I.magMit = 15;
				I.dodge = 7;
				I.cold = 25;
				I.globalHaste = -80;
				I.enhancePhysical = 6;
				I.req = 62;
			}
			if (N === "Poleyn") {
				if (M.random() > .32) {
					I.name = "Drunken Master's Shinguards";
					I.enhancedArmor = 95;
					I.str = 35;
					I.fear = 8;
					I.stun = 8;
					I.critDamage = 14;
					I.absorbPoison = 9;
					I.haste = -50;
					I.enhancePhysical = 5;
					I.enhanceFire = 6;
					I.weight = 1;
					I.req = 66;
				} else {
					I.name = "Oracle's Malady";
					I.enhancedArmor = 120;
					I.allResist = 30;
					I.fear = 40;
					I.hpRegen = 7;
					I.allSkills = 4;
					I.hpKill = 25;
					I.critChance = 10;
					I.critDamage = 10;
					I.enhanceCold = 5;
					I.enhancePoison = 9;
					setAbsorbAll(NI, 7);
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Cobalt Legplates") {
				I.name = "Crackling Whisper";
				I.enhancedArmor = 110;
				I.resistLightning = 95;
				I.mp = 75;
				I.hp = 44;
				I.absorbLightning = 7;
				I.enhanceLightning = 12;
				I.allStats = 12;
				I.critChance = 7;
				I.silence = 55;
				I.stun = 25;
				I.mpRegen = 9;
				I.weight = 1;
				I.req = 66;
			}
			if (N === "Iron Legplates") {
				I.name = "Tides of Dover";
				I.enhancedArmor = 110;
				I.resistCold = 80;
				I.resistMagic = 55;
				I.resistLightning = 33;
				I.allSkills = 5;
				I.attack = 20;
				I.lightRadius = 25;
				I.globalHaste = -150;
				I.haste = -80;
				I.hpKill = 25;
				I.leech = 7;
				I.weight = 1;
				I.absorbCold = 10;
				setAllStatus(NI, 25, 25, 25, 25);
				I.req = 62;
			}
			if (N === "Mithril Legplates") {
				if (M.random() > .32) {
					I.name = "Call to Destiny";
					I.enhancedArmor = 90;
					I.allSkills = 2;
					I.enhanceAll = 5;
					I.enhancePhysical = 5;
					I.runSpeed = 15;
					I.lightRadius = 15;
					I.allResist = 14;
					I.globalHaste = -150;
					I.cold = 20;
					I.req = 62;
				} else {
					I.name = "Grave Lord's Chicane";
					I.enhancedArmor = 120;
					I.hp = 61;
					I.allResist = 22;
					I.defense = 120;
					I.parry = 8;
					I.riposte = 12;
					I.dodge = 6;
					I.str = 44;
					I.dex = 31;
					I.intel = 38;
					I.critChance = 9;
					setAllStatus(NI, 21, 21, 21, 21);
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Royal Legplates") {
				if (M.random() > .32) {
					I.name = "Call to Providence";
					I.enhancedArmor = 95;
					I.hp = 65;
					I.mp = 50;
					setAllStatus(NI, 20, 20, 20, 20);
					setAllResists(NI, 15, 35, 15, 5, 5);
					I.absorbMagic = 15;
					I.alteration = 9;
					I.enhanceMagic = 9;
					I.req = 66;
				} else {
					I.name = "Warlord's Ferocity";
					I.enhancedArmor = 120;
					I.phyMit = 20;
					I.attack = 34;
					I.stun = 60;
					I.enhancePhysical = 5;
					I.allResist = 25;
					I.sta = 36;
					I.runSpeed = 15;
					I.globalHaste = -170;
					I.critChance = 7;
					I.rarity = 4;
					I.req = 68;
				}
			}
		}
		if (ni === "boots") {
			if (N === "Boots") {
				if (M.random() > .5) {
					I.name = "Marrow Waders";
					I.enhancedArmor = 80;
					I.leech = 6;
					I.conjuration = 9;
					I.runSpeed = 20;
					I.str = 15;
					I.dex = 17;
					I.cold = 20;
					I.hpRegen = 3;
					I.mpRegen = 3;
					I.resistCold = 35;
					I.enhancePoison = 3;
					I.req = 54;
				} else {
					I.name = "Blighted Boots";
					I.enhancedArmor = 80;
					I.hp = 20;
					I.runSpeed = 25;
					I.agi = 25;
					I.resistMagic = 25;
					I.resistPoison = 33;
					I.enhancePoison = 7;
					I.enhanceMagic = 5;
					I.mpRegen = 3;
					I.critChance = 3;
					I.req = 54;
				}
			}
			if (N === "Light Boots") {
				if (M.random() > .5) {
					if (M.random() > .32) {
						I.name = "Sandstorm Slippers";
						I.enhancedArmor = 90;
						I.str = 15;
						I.sta = 15;
						I.runSpeed = 20;
						I.allSkills = 2;
						I.absorbFire = 5;
						I.enhanceFire = 5;
						I.stun = 20;
						I.resistPoison = 57;
						I.req = 64;
					} else {
						I.name = "Warlock's Nightmare";
						I.enhancedArmor = 120;
						setAllResists(NI, 65, 30, 0, 15, 55);
						I.runSpeed = 35;
						I.enhanceAll = 3;
						I.stun = 50;
						I.silence = 25;
						I.critDamage = 27;
						I.allStats = 12;
						I.lightRadius = 20;
						I.expFind = 20;
						I.conjuration = 12;
						I.rarity = 4;
						I.req = 65;
					}
				} else {
					I.name = "Frozen Thalen Boots";
					I.enhancedArmor = 90;
					I.wis = 11;
					I.castingHaste = -70;
					I.runSpeed = 15;
					I.evocation = 4;
					I.resistCold = 45;
					I.enhanceCold = 9;
					I.cold = 50;
					I.channeling = 9;
					I.req = 64;
				}
			}
			if (N === "Heavy Boots") {
				if (M.random() > .5) {
					I.name = "Lizardman Hide Boots";
					I.enhancedArmor = 80;
					I.hp = 25;
					I.str = 25;
					I.cha = 15;
					I.agi = 25;
					I.critChance = 5;
					I.enhanceAll = 3;
					I.runSpeed = 25;
					I.resistFire = 35;
					I.weight = 1;
					I.req = 54;
				} else {
					I.name = "Sandals of Harmony";
					I.enhancedArmor = 80;
					I.mp = 20;
					I.cha = 26;
					I.resistCold = 25;
					I.resistFire = 25;
					I.resistLightning = 40;
					setAllStatus(NI, 12, 12, 12, 12);
					I.runSpeed = 35;
					I.lightRadius = 15;
					I.alteration = 7;
					I.req = 54;
				}
			}
			if (N === "Sharkskin Boots") {
				if (M.random() > .5) {
					if (M.random() > .32) {
						I.name = "Sirran's Boots of Insanity";
						I.enhancedArmor = 90;
						I.runSpeed = 35;
						I.intel = 25;
						I.wis = 25;
						I.sta = 25;
						I.castingHaste = -50;
						I.hp = 50;
						I.mp = 50;
						I.weight = 1;
						I.allResist = 18;
						I.req = 64;
					} else {
						I.name = "Hierophant's Cascade";
						I.enhancedArmor = 120;
						setAllResists(NI, 54, 35, 12, 0, 35);
						setAllStatus(NI, 20, 20, 20, 20);
						I.runSpeed = 55;
						I.lightRadius = 30;
						I.critChance = 4;
						I.allStats = 9;
						I.thorns = 45;
						I.mpRegen = 5;
						I.hpRegen = 7;
						I.enhanceAll = 3;
						I.rarity = 4;
						I.req = 66;
					}
				} else {
					if (M.random() > .32) {
						I.name = "White Dragonscale Boots";
						I.enhancedArmor = 90;
						I.wis = 17;
						I.intel = 17;
						I.hp = 10;
						I.mp = 35;
						setAllResists(NI, 5, 10, 5, 20, 5);
						I.weight = 1;
						I.mpRegen = 5;
						I.req = 64;
					} else {
						I.name = "Grandmaster's Balance";
						I.enhancedArmor = 200;
						I.runSpeed = 50;
						I.allResist = 22;
						I.enhancePhysical = 8;
						I.allSkills = 4;
						I.allStats = 13;
						I.hpRegen = 7;
						I.lightRadius = 25;
						I.attack = 30;
						I.fear = 15;
						I.globalHaste = -100;
						I.rarity = 4;
						I.req = 67;
					}
				}
			}
			if (N === "Chain Boots") {
				if (M.random() > .5) {
					I.name = "Shadow Dancers";
					I.enhancedArmor = 120;
					I.leech = 5;
					I.agi = 20;
					I.dex = 25;
					I.stun = 30;
					I.haste = -40;
					I.runSpeed = 30;
					I.attack = 8;
					I.enhancePhysical = 3;
					I.weight = 1;
					I.req = 54;
				} else {
					I.name = "Scaled Hierophant Boots";
					I.enhancedArmor = 95;
					I.str = 20;
					I.agi = 10;
					I.sta = 10;
					I.stun = 30;
					setAllResists(NI, 12, 0, 12, 12, 12);
					I.runSpeed = 25;
					I.enhanceLightning = 7;
					I.weight = 1;
					I.req = 54;
				}
			}
			if (N === "Sovereign Boots") {
				if (M.random() > .5) {
					I.name = "Maclaer's Boots of Silence";
					I.enhancedArmor = 90;
					I.hp = 17;
					I.allStats = 9;
					setAllResists(NI, 12, 20, 15, 25, 0);
					I.cold = 25;
					I.silence = 35;
					I.defense = 7;
					I.enhanceCold = 5;
					I.req = 64;
				} else {
					if (M.random() > .32) {
						I.name = "Tortoise Shell Boots";
						I.enhancedArmor = 90;
						I.hp = 20;
						I.str = 15;
						I.cold = 45;
						I.stun = 25;
						I.abjuration = 7;
						I.defense = 5;
						I.phyMit = 3;
						I.magMit = 3;
						I.enhanceCold = 4;
						I.req = 64;
					} else {
						I.name = "Warder's Preserve";
						I.enhancedArmor = 120;
						I.allResist = 30;
						setAbsorbAll(NI, 3);
						I.hpRegen = 5;
						I.mpRegen = 5;
						I.hp = 33;
						I.mp = 24;
						I.str = 25;
						I.sta = 25;
						I.agi = 36;
						I.runSpeed = 44;
						I.critChance = 7;
						I.critDamage = 17;
						I.rarity = 4;
						I.req = 66;
					}
				}
			}
			if (N === "Steel Boots") {
				if (M.random() > .32) {
					I.name = "Boots of the Dead Dream";
					I.enhancedArmor = 80;
					I.hp = 25;
					I.mp = 50;
					I.str = 15;
					I.wis = 15;
					I.intel = 15;
					I.enhanceAll = 3;
					I.weight = 1;
					I.haste = -60;
					I.req = 54;
				} else {
					I.name = "Crusader's Vehemence";
					I.enhancedArmor = 120;
					setAllResists(NI, 15, 24, 0, 33, 50);
					I.runSpeed = 25;
					I.str = 33;
					I.lightRadius = 35;
					I.hpKill = 7;
					I.mpKill = 10;
					I.enhancePhysical = 6;
					I.enhanceMagic = 6;
					I.stun = 23;
					I.fear = 15;
					I.alteration = 12;
					I.rarity = 4;
					I.req = 59;
				}
			}
			if (N === "Sabatons") {
				if (M.random() > .5) {
					I.name = "Reviled March";
					I.enhancedArmor = 90;
					I.twoHandBlunt = 7;
					I.abjuration = 6;
					I.globalHaste = -50;
					I.cha = 27;
					I.enhanceAll = 3;
					I.enhancePhysical = 3;
					I.runSpeed = 40;
					I.allSkills = 3;
					I.allResist = 9;
					I.req = 64;
				} else {
					I.name = "Boots of the Vindicator";
					I.enhancedArmor = 90;
					I.str = 25;
					I.sta = 25;
					I.wis = 25;
					I.intel = 25;
					I.runSpeed = 25;
					I.hp = 50;
					I.resistLightning = 25;
					I.resistPoison = 15;
					I.req = 64;
				}
			}
		}
		if (ni === "weapons") {
			if (nt === "slashed") {
				if (N === "Sword") {
					I.name = "Gallantine's Gleaming Bastard Sword";
					I.enhancedDamage = 13;
					I.hp = 45;
					I.alteration = 6;
					I.abjuration = 6;
					I.magicDamage = 18;
					I.fear = 15;
					I.wraith = 9;
					I.haste = -80;
					I.enhancePhysical = 6;
					I.enhanceMagic = 5;
					I.req = 54;
					I.proc = "Effect: Holy Burst";
				}
				if (N === "Scimitar") {
					I.name = "Nature Covenant's Scimitar"; // dru epic
					I.enhancedDamage = 7;
					I.hp = 10;
					I.mp = 90;
					I.str = 15;
					I.sta = 15;
					I.wis = 20;
					I.mpRegen = 5;
					I.mpRegen = 5;
					I.allSkills = 3;
					I.globalHaste = -100;
					I.castingHaste = -150;
					I.enhanceAll = 6;
					I.enhancePhysical = 6;
					I.req = 56;
					I.flavorText = '"Be neither here nor there, left or right, up or down. Adapting to your surroundings is the key to survival." -Sana Treewind';
					I.proc = "Effect: Wrath of Nature";
				}
				if (N === "Axe") {
					I.name = "Green Jade Axe";
					I.enhancedDamage = 15;
					I.str = 10;
					I.hp = 25;
					I.leech = 6;
					I.hpKill = 8;
					I.attack = 12;
					I.globalHaste = -80;
					I.resistPoison = 45;
					I.poisonDamage = 35;
					I.enhancePoison = 7;
					I.enhancePhysical = 6;
					I.req = 58;
				}
				if (N === "Claws") {
					I.name = "Claw of Darafar";
					I.ias = .35;
					I.enhancedDamage = 5;
					I.oneHandSlash = 4;
					I.leech = 9;
					I.haste = -120;
					I.enhancePhysical = 6;
					I.globalHaste = -80;
					I.allSkills = 3;
					I.critChance = 7;
					I.critDamage = 11;
					I.req = 60;
					I.flavorText = 'In a fit of rage, all obstacles in his path were reduced to dust.';
					I.proc = "Effect: Frenzy";
				}
				if (N === "Long Sword") {
					I.name = "Harmonic Short Sword"; // brd epic
					I.enhancedDamage = 16;
					I.sta = 5;
					I.str = 15;
					I.dex = 10;
					I.cha = 20;
					I.hp = 60;
					I.castingHaste = -140;
					I.wraith = 10;
					I.runSpeed = 15;
					setAbsorbAll(NI, 4);
					I.enhanceMagic = 9;
					I.req = 62;
					I.proc = "Effect: Dance of the Blade";
				}
				if (N === "Chokuto") {
					if (M.random() > .32) {
						I.name = "Azure Zephyr"; // rng epic 16/36
						I.enhancedDamage = 3;
						I.ias = .42;
						I.hp = 50;
						I.globalHaste = -150;
						I.haste = -100;
						I.str = 15;
						I.dex = 5;
						I.sta = 10;
						I.leech = 7;
						I.wraith = 7;
						I.critChance = 9;
						I.enhancePhysical = 6;
						I.req = 64;
					} else {
						I.name = "Warder's Hailrend";
						I.damage = 25;
						I.delay = 2400;
						I.coldDamage = 49;
						I.enhancePhysical = 13;
						I.enhanceFire = 5;
						I.wraith = 9;
						I.leech = 5;
						I.fear = 43;
						I.haste = -120;
						I.critDamage = 20;
						I.critChance = 7;
						I.hpKill = 9;
						I.mp = 30;
						I.rarity = 4;
						I.proc = "Effect: Hail Storm";
						I.req = 67;
					}
				}
				if (N === "War Axe") {
					I.name = "Axe of the Phased Dragon";
					I.enhancedDamage = 19;
					I.fear = 12;
					I.thorns = 33;
					I.haste = -200;
					I.expFind = 12;
					I.allStats = 13
					I.leech = 8;
					I.wraith = 3;
					I.magicDamage = 35;
					I.allSkills = 4;
					I.enhancePhysical = 9;
					I.req = 66;
				}
				if (N === "Kusanagi") {
					if (M.random() > .32) {
						I.name = "Artremian Blade"; // rng epic
						I.ias = .25;
						I.enhancedDamage = 7;
						I.haste = -150;
						I.resistLightning = 33;
						I.mpRegen = 9;
						I.silence = 25;
						I.str = 15;
						I.dex = 10;
						I.sta = 5;
						I.hp = 50;
						I.enhancePhysical = 6;
						I.enhanceLightning = 10;
						I.allSkills = 1;
						I.lightningDamage = 55;
						I.req = 68;
						I.proc = "Effect: Earthcall";
					} else {
						I.name = "Warder's Magmahew";
						I.damage = 29;
						I.delay = 2700;
						I.fireDamage = 58;
						I.enhancePhysical = 11;
						I.enhanceMagic = 7;
						I.leech = 7;
						I.stun = 50;
						I.globalHaste = -150;
						I.castingHaste = -100;
						I.critChance = 13;
						I.hp = 40;
						I.mpKill = 7;
						I.rarity = 4;
						I.proc = "Effect: Magma Eruption";
						I.req = 62;
					}
				}
			}
			if (nt === "crushed") {
				if (N === "Mace") {
					I.name = "Stone Crusher";
					I.enhancedDamage = 15;
					I.mp = 25;
					I.str = 30;
					I.globalHaste = -100;
					I.castingHaste = -120;
					I.mpRegen = 5;
					I.critDamage = 14;
					I.critChance = 9;
					I.enhancePhysical = 5;
					I.enhanceMagic = 6;
					I.resistLightning = 14;
					I.physicalDamage = 28;
					I.req = 54;
				}
				if (N === "Club") {
					I.name = "Cane of Harmony";
					I.enhancedDamage = 15;
					I.globalHaste = -130;
					I.str = 15;
					I.dex = 15;
					I.cha = 24;
					I.intel = 24;
					I.magMit = 8;
					I.dodge = 6;
					I.parry = 5;
					I.lightRadius = 21;
					I.critDamage = 15;
					I.expFind = 12;
					I.hpRegen = 5;
					setAbsorbAll(NI, 5);
					I.enhancePhysical = 7;
					I.req = 56;
				}
				if (N === "Morning Star") {
					I.name = "Water Sprinkler of Yentus"; // clr epic
					I.enhancedDamage = 19;
					I.sta = 10;
					I.cha = 15;
					I.wis = 25;
					I.mp = 100;
					I.castingHaste = -150;
					I.haste = -70;
					I.mp = 100;
					I.enhanceMagic = 10;
					I.enhancePhysical = 6;
					I.alteration = 6;
					I.abjuration = 6;
					I.lightRadius = 15;
					I.magicDamage = 25;
					I.expFind = 20;
					I.flavorText = 'Redeem your soul in a codified lifestyle free from degeneracy.';
					I.req = 58;
				}
				if (N === "Spiked Club") {
					I.name = "Singed Cudgel";
					I.enhancedDamage = 17;
					I.mp = 50;
					I.wis = 24;
					I.leech = 6;
					I.mpRegen = 6;
					I.castingHaste = -90;
					I.globalHaste = -120;
					I.evocation = 12;
					I.resistFire = 30;
					I.fireDamage = 30;
					I.allSkills = 4;
					I.enhanceAll = 5;
					I.enhancePhysical = 5;
					I.req = 60;
					I.proc = "Effect: Blaze";
				}
				if (N === "Jagged Star") {
					I.name = "Star of the Guardian";
					I.enhancedDamage = 11;
					I.armor = 25;
					I.phyMit = 9;
					I.magMit = 5;
					I.leech = 7;
					I.thorns = 15;
					I.wis = 25;
					I.castingHaste = -70;
					I.skillHaste = -70;
					I.lightRadius = 25;
					I.defense = 5;
					I.abjuration = 9;
					setAbsorbAll(NI, 4);
					setAllStatus(NI, 10, 10, 10, 10);
					I.allResist = 10;
					I.enhancePhysical = 5;
					I.req = 62;
					I.proc = "Effect: Angel's Blessing";
				}
				if (N === "Scepter") {
					I.name = "Ebony Mace";
					I.enhancedDamage = 19;
					I.critChance = 7;
					I.globalHaste = -150;
					I.castingHaste = -120;
					I.wraith = 9;
					I.leech = 9;
					I.alteration = 4;
					I.absorbCold = 8;
					I.conjuration = 6;
					I.coldDamage = 35;
					I.enhancePhysical = 7;
					I.enhanceFire = 6;
					I.enhanceMagic = 6;
					I.req = 64;
				}
				if (N === "Cudgel") {
					I.name = "Fists of Qiromir"; // epic mnk
					I.ias = .35;
					I.armor = 12;
					I.attack = 12;
					I.enhancedDamage = 7;
					I.str = 20;
					I.dex = 10;
					I.sta = 10;
					I.hp = 60;
					I.enhancePhysical = 9;
					I.critChance = 9;
					I.critChance = 13
					I.globalHaste = -200;
					I.leech = 10;
					I.xPos = -384;
					I.yPos = -576;
					I.req = 66;
					I.flavorText = 'Honor your ancestors with your actions.';
					I.proc = "Effect: Celestial Tranquility";
				}
				if (N === "Caduceus") {
					I.name = "Waking Nightmare"; // epic nec
					I.enhancedDamage = 16;
					I.str = 5;
					I.sta = 10;
					I.cha = 5;
					I.intel = 20;
					I.hp = 20;
					I.mp = 80;
					I.haste = -90;
					I.castingHaste = -160;
					I.allSkills = 4;
					I.enhancePoison = 10;
					I.enhanceFire = 7;
					I.enhanceMagic = 7;
					setAllResists(NI, 15, 10, 15, 5, 5);
					I.req = 68;
					I.flavorText = 'Conquer the naive among you with deception and lies. Infiltrate them and spread disease in their minds and actions.';
					I.proc = "Effect: Torment of Shadows";
				}
			}
			if (nt === "pierced") {
				if (N === "Dagger") {
					I.name = "Dragon Claw Main Gauche";
					I.enhancedDamage = 5;
					I.armor = 15;
					I.hp = 22;
					I.mp = 35;
					I.mpKill = 5;
					I.mpRegen = 5;
					I.castingHaste = -150;
					I.haste = -70;
					I.evocation = 6;
					I.silence = 16;
					setAllResists(NI, 10, 0, 12, 15, 15);
					I.enhanceAll = 5;
					I.enhancePhysical = 5;
					I.req = 54;
				}
				if (N === "Dirk") {
					I.name = "Bone Razor";
					I.ias = .2;
					I.enhancedDamage = 7;
					I.hpKill = 12;
					I.haste = -170;
					I.leech = 13;
					I.critDamage = 8;
					I.agi = 30;
					I.enhancePoison = 10;
					I.enhancePhysical = 7;
					I.resistPoison = 35;
					I.absorbPoison = 6;
					I.poisonDamage = 54;
					I.req = 56;
				}
				if (N === "Kris") {
					I.name = "Razor Fang of Sartuz";
					I.ias = .11;
					I.enhancedDamage = 8;
					I.hp = 20;
					I.dex = 20;
					I.leech = 16;
					I.wraith = 7;
					I.hpKill = 9;
					I.mpKill = 9;
					I.allSkills = 3;
					I.enhanceMagic = 10;
					I.enhancePhysical = 6;
					I.magicDamage = 30;
					I.req = 58;
					I.proc = "Effect: Blessing of Nature";
				}
				if (N === "Poignard") {
					I.name = "Chromaspike";
					I.enhancedDamage = 12;
					I.intel = 25;
					I.castingHaste = -200;
					I.enhanceAll = 6;
					I.allSkills = 3;
					I.allResist = 24;
					I.mpRegen = 5;
					I.silence = 30;
					I.mpKill = 10;
					I.req = 60;
				}
				if (N === "Rondel") {
					I.name = "Ragestriker"; // rog epic
					I.ias = .15;
					I.enhancedDamage = 11;
					I.armor = 9;
					I.attack = 20;
					I.haste = -110;
					I.globalHaste = -120;
					I.str = 20;
					I.dex = 20;
					I.sta = 10;
					I.agi = 10;
					I.hp = 60;
					I.leech = 9;
					I.resistPoison = 20;
					I.resistLightning = 20;
					I.resistMagic = 10;
					I.enhancePhysical = 6;
					I.fireDamage = 35;
					I.flavorText = 'Seeds of chaos are potent creators of opportunity.';
					I.req = 62;
				}
				if (N === "Spear") {
					I.name = "Spear of the Ancients"; // shm epic
					I.enhancedDamage = 10;
					I.str = 10;
					I.dex = 10;
					I.sta = 10;
					I.wis = 25;
					I.hp = 30;
					I.mp = 60;
					I.mpRegen = 4;
					I.hpRegen = 4;
					I.castingHaste = -160;
					I.enhanceCold = 7;
					I.enhancePoison = 7;
					I.allSkills = 3;
					I.coldDamage = 35;
					I.req = 64;
					I.flavorText = 'Act as though your every action were designed by God himself. Addled Scholars are crippled by their doubt.';
					I.proc = "Effect: Curse of the Spirits";
				}
				if (N === "Cinquedeas") {
					I.name = "Orcish Croaking Dirk";
					I.enhancedDamage = 12;
					I.armor = 9;
					I.cha = 15;
					I.agi = 25;
					I.resistPoison = 25;
					I.resistMagic = 25;
					I.piercing = 9;
					I.expFind = 12;
					I.haste = -120;
					I.leech = 7;
					I.magicDamage = 28;
					I.enhancePhysical = 7;
					I.cold = 15;
					I.stun = 15;
					I.req = 66;
				}
				if (N === "Stiletto") {
					if (M.random() > .32) {
						I.name = "Nightfall";
						I.enhancedDamage = 11;
						I.str = 28;
						I.dex = 28;
						I.agi = 15;
						I.leech = 4;
						I.hp = 25;
						I.offense = 9;
						I.attack = 15;
						I.critChance = 9;
						I.critDamage = 13
						I.enhanceMagic = 14;
						I.enhancePhysical = 9;
						I.magicDamage = 45;
						I.req = 68;
						I.proc = "Effect: Loathing Darkness";
					} else {
						I.name = "Warlock's Nemesis";
						I.damage = 26;
						I.delay = 2200;
						I.allResist = 50;
						I.castingHaste = -250;
						I.magMit = 21;
						I.phyMit = 15;
						setAbsorbAll(NI, 7);
						I.lightRadius = 12;
						I.intel = 75;
						I.enhancePoison = 13;
						I.enhanceMagic = 8;
						I.rarity = 4;
						I.req = 68;
					}
				}
			}
			if (nt === "cleaved") {
				if (N === "Giant Sword") {
					I.name = "Kordata Battle Sword";
					I.enhancedDamage = 16;
					I.expFind = 12;
					I.allStats = 18;
					I.leech = 10;
					I.wraith = 10;
					I.critChance = 4;
					I.haste = -100;
					I.globalHaste = -200;
					I.enhancePhysical = 7;
					I.expFind = 7;
					I.offense = 13
					I.physicalDamage = 65;
					I.req = 54;
				}
				if (N === "Giant Axe") {
					I.name = "Wenerva's Axe of Slaughter";
					I.enhancedDamage = 20;
					I.armor = 25;
					I.hp = 75;
					I.mp = 40;
					I.haste = -200;
					I.globalHaste = -240;
					I.enhancePhysical = 10;
					I.str = 25;
					I.dex = 25;
					I.sta = 25;
					I.agi = 25;
					I.leech = 15;
					I.wraith = 10;
					I.physicalDamage = 72;
					I.req = 56;
					I.proc = "Effect: Shatter";
				}
				if (N === "Champion Sword") {
					I.name = "Curse of Ghalentus"; // sk epic
					I.enhancedDamage = 22;
					I.str = 40;
					I.dex = 30;
					I.intel = 30;
					I.hp = 50;
					I.mp = 35;
					I.haste = -300;
					I.globalHaste = -150;
					I.castingHaste = -200;
					I.enhancePhysical = 14;
					I.enhanceMagic = 6;
					I.enhanceFire = 6;
					I.leech = 24;
					I.conjuration = 14;
					setAllResists(NI, 15, 45, 15, 30, 30);
					I.poisonDamage = 85;
					I.req = 58;
					I.flavorText = '"Death is a blessing upon the weak who lead wretched, ill-conceived lives." -Dragoon Zornin';
					I.proc = "Effect: Soul Consumption";
				}
				if (N === "Bastard Sword") {
					I.name = "Fiery Defender"; // pal epic
					I.enhancedDamage = 22;
					I.str = 40;
					I.sta = 20;
					I.wis = 30;
					I.hp = 66;
					I.mp = 25;
					I.haste = -150;
					I.globalHaste = -150;
					I.castingHaste = -300;
					I.enhancePhysical = 12;
					I.enhanceMagic = 14;
					I.wraith = 20;
					I.alteration = 10;
					I.abjuration = 10;
					I.magicDamage = 85;
					I.req = 60;
					I.flavorText = '"Rouse your comrades to battle when justice demands it." -Reklon Gnallen, Paladin Guildmaster';
					I.proc = "Effect: Holy Shock";
				}
				if (N === "Gothic Axe") {
					if (M.random() > .32) {
						I.name = "Executioner's Blade";
						I.enhancedDamage = 21;
						I.str = 60;
						I.haste = -150;
						I.globalHaste = -250;
						I.enhancePhysical = 14;
						I.critChance = 13
						I.critDamage = 18;
						I.fear = 20;
						I.parry = 7;
						I.resistCold = 100;
						I.resistPoison = 60;
						I.twoHandSlash = 13
						I.physicalDamage = 75;
						I.leech = 16;
						I.req = 62;
					} else {
						I.name = "Grave Lord's Crescent";
						I.damage = 89;
						I.delay = 5900;
						I.coldDamage = 101;
						I.attack = 33;
						I.offense = 15;
						I.absorbCold = 17;
						I.enhancePhysical = 12;
						I.fear = 75;
						I.leech = 16;
						I.wraith = 25;
						I.critChance = 15;
						I.haste = -250;
						I.rarity = 4;
						I.req = 67;
					}
				}
				if (N === "Katana") {
					I.name = "Serrated Blade of War"; // war epic
					I.enhancedDamage = 20;
					I.str = 40;
					I.dex = 30;
					I.sta = 30;
					I.hp = 90;
					I.haste = -200;
					I.globalHaste = -250;
					I.enhancePhysical = 19;
					I.critChance = 13
					I.critDamage = 18;
					I.defense = 13
					I.parry = 13
					I.riposte = 13
					I.twoHandSlash = 13
					I.physicalDamage = 85;
					I.leech = 15;
					I.req = 64;
					I.flavorText = '"There are no nations without men willing to bleed for them." -Manik Compolten';
					I.proc = "Effect: Rage of Carthak";
				}
				if (N === "Colossus Sword") {
					I.name = "Flamebelcher";
					I.enhancedDamage = 21;
					I.str = 40;
					I.sta = 20;
					I.cold = 50;
					I.haste = -150;
					I.globalHaste = -150;
					I.enhancePhysical = 19;
					I.enhanceFire = 13
					I.critDamage = 18;
					I.attack = 25;
					I.parry = 13
					I.riposte = 13
					I.resistFire = 120;
					I.absorbFire = 25;
					I.fireDamage = 222;
					I.leech = 10;
					I.req = 66;
					I.proc = "Effect: Flame Nova";
				}
				if (N === "Mythical Sword") {
					I.name = "The Grandfather";
					I.enhancedDamage = 21;
					I.allStats = 20;
					I.allSkills = 6;
					I.haste = -250;
					I.globalHaste = -250;
					I.enhancePhysical = 24;
					I.hp = 80;
					I.attack = 20;
					I.doubleAttack = 24;
					I.lightRadius = 30;
					I.resistLightning = 75;
					I.resistPoison = 75;
					I.physicalDamage = 96;
					setAllStatus(NI, 40, 40, 40, 40);
					I.flavorText = 'A grandfather\'s illegible inscription is carved into the hilt.';
					I.req = 68;
				}
			}
			if (nt === "staff") {
				if (N === "Staff") {
					I.name = "Arwen's Wisdom";
					I.enhancedDamage = 11;
					I.intel = 56;
					I.armor = 115;
					I.magMit = 8;
					I.defense = 13
					I.allSkills = 4;
					I.castingHaste = -300;
					I.expFind = 30;
					I.enhanceAll = 10;
					I.req = 54;
				}
				if (N === "Runic Staff") {
					I.name = "Prentian Apothic Staff";
					I.enhancedDamage = 15;
					I.sta = 25;
					I.wis = 36;
					I.castingHaste = -200;
					I.critChance = 3;
					I.alteration = 14;
					I.resistMagic = 50;
					I.resistPoison = 75;
					I.enhanceMagic = 12;
					I.fear = 45;
					I.silence = 30;
					I.req = 56;
				}
				if (N === "Cedar Staff") {
					I.name = "Ornate Prism Staff"; // wiz epic shield effect
					I.enhancedDamage = 15;
					I.str = 20;
					I.dex = 10;
					I.sta = 20;
					I.intel = 50;
					I.mp = 125;
					I.castingHaste = -330;
					I.mpRegen = 13;
					I.alteration = 15;
					I.enhanceMagic = 15;
					I.enhanceFire = 15;
					I.enhanceCold = 15;
					I.enhanceLightning = 10;
					I.critChance = 13;
					I.silence = 50;
					setAllResists(NI, 10, 20, 10, 20, 20);
					I.req = 58;
					I.flavorText = 'The three elements and holy magic empower the Ornate Prism Staff.';
					I.proc = "Effect: Barrier of Force";
				}
				if (N === "Quarterstaff") {
					I.name = "Staff of Occult Rites";
					I.enhancedDamage = 17;
					I.hp = 50;
					I.mp = 50;
					I.sta = 25;
					I.wis = 27;
					I.castingHaste = -150;
					I.critChance = 15;
					I.hpKill = 20;
					I.mpKill = 30;
					I.hpRegen = 12;
					I.allSkills = 5;
					I.resistCold = 77;
					I.resistMagic = 55;
					I.enhanceCold = 24;
					I.cold = 75;
					I.silence = 20;
					I.flavorText = '"You cannot count on others to perform important tasks. If you want it done right, do it yourself." -Mate Basterson';
					I.req = 60;
				}
				if (N === "Cosmic Staff") {
					if (M.random() > .32) {
						I.name = "Staff of Sentoth"; // enc epic
						I.enhancedDamage = 24;
						I.armor = 35;
						I.str = 10;
						I.sta = 20;
						I.agi = 25;
						I.cha = 30;
						I.intel = 40;
						I.hp = 40;
						I.mp = 60;
						I.castingHaste = -250;
						I.haste = -400;
						I.alteration = 10;
						I.abjuration = 7;
						I.enhanceMagic = 24;
						I.silence = 35;
						I.stun = 35;
						I.req = 63;
						I.flavorText = 'A slithering serpent quietly percolates your destruction.';
						I.proc = "Effect: Speed of the Shissar";
					} else {
						I.name = "Arch Mage's Catastrophe";
						I.damage = 102;
						I.delay = 6000;
						I.enhanceFire = 15;
						I.enhanceCold = 15;
						I.enhanceLightning = 25;
						I.allSkills = 10;
						I.allResist = 30;
						I.mp = 330;
						I.hp = 136;
						I.mpKill = 45;
						I.critChance = 20;
						I.mpRegen = 15;
						I.lightRadius = 40;
						I.rarity = 4;
						I.req = 66;
					}
				}
				if (N === "Archon Staff") {
					I.name = "Hierophant's Crook";
					I.str = 30;
					I.dex = 30;
					I.wis = 30;
					I.castingHaste = -300;
					I.allSkills = 4;
					setAbsorbAll(NI, 9);
					I.enhancePhysical = 28;
					I.enhanceFire = 13
					I.enhanceCold = 10;
					I.enhanceLightning = 14;
					I.stun = 60;
					I.silence = 25;
					I.fireDamage = 150;
					I.coldDamage = 66;
					I.lightningDamage = 255;
					I.goldFind = 50;
					I.req = 66;
					I.proc = "Effect: Earthquake";
				}
			}
			if (nt === "smashed") {
				if (N === "Giant Mace") {
					I.name = "Blackstone Maul";
					I.enhancedDamage = 16;
					I.str = 30;
					I.wis = 40;
					I.intel = 30;
					I.castingHaste = -200;
					I.enhancePoison = 10;
					I.enhanceCold = 10;
					I.allSkills = 4;
					I.resistLightning = 44;
					I.resistCold = 28;
					I.resistFire = 120;
					I.mp = 56;
					I.mpKill = 7;
					I.physicalDamage = 61;
					I.leech = 10;
					I.req = 54;
				}
				if (N === "Auric Maul") {
					I.name = "Shatterfrost";
					I.enhancedDamage = 11;
					I.haste = -120;
					I.globalHaste = -150;
					I.castingHaste = -120;
					I.enhancePhysical = 10;
					I.enhanceCold = 18;
					I.critDamage = 24;
					I.cold = 45;
					I.evocation = 12;
					I.resistCold = 80;
					I.absorbCold = 16;
					I.coldDamage = 115;
					I.wraith = 12;
					I.req = 56;
					I.proc = "Effect: Cone of Frost";
				}
				if (N === "Mallet") {
					I.name = "Earth Shifter";
					I.enhancedDamage = 20;
					I.hp = 45;
					I.mp = 45;
					I.allSkills = 9;
					I.castingHaste = -120;
					I.enhanceLightning = 9;
					I.enhanceCold = 9;
					I.enhanceFire = 9;
					I.hpRegen = 8;
					I.mpRegen = 5;
					I.absorbLightning = 12;
					I.absorbFire = 8;
					I.lightningDamage = 173;
					I.req = 58;
					I.proc = "Effect: Fissure";
				}
				if (N === "Ogre Maul") {
					I.name = "The Cranium Basher";
					I.enhancedDamage = 11;
					I.str = 50;
					I.sta = 20;
					I.stun = 30;
					I.haste = -250;
					I.globalHaste = -100;
					I.enhancePhysical = 14;
					I.critChance = 24;
					I.offense = 10;
					I.riposte = 18;
					I.twoHandBlunt = 13
					I.physicalDamage = 85;
					I.leech = 13;
					I.req = 60;
					I.proc = "Effect: Amplify Damage";
				}
				if (N === "Great Maul") {
					I.name = "Granite Face Smasher";
					I.enhancedDamage = 17;
					I.str = 40;
					I.wis = 40;
					I.intel = 40;
					I.haste = -200;
					I.castingHaste = -250;
					I.enhanceAll = 9;
					I.allSkills = 5;
					setAllStatus(NI, 15, 15, 15, 15);
					setAbsorbAll(NI, 6);
					I.poisonDamage = 90;
					I.magicDamage = 90;
					I.coldDamage = 90;
					I.mpRegen = 10;
					I.flavorText = '"Ha, ha! Me never find weapon that smash as gud as this." -Gronk, Warrior Guildmaster.';
					I.req = 62;
				}
				if (N === "Sledgehammer") {
					I.name = "Runestone Maul";
					I.enhancedDamage = 19;
					I.allStats = 24;
					I.enhanceAll = 18;
					I.critChance = 14;
					I.defense = 15;
					I.dodge = 12;
					I.alteration = 10;
					I.abjuration = 18;
					I.channeling = 24;
					I.lightRadius = 35;
					I.magicDamage = 75;
					I.physicalDamage = 311;
					I.req = 64;
				}
				if (N === "Umbral Hammer") {
					I.name = "Blackstar Mace of Slagnon";
					I.enhancedDamage = 22;
					I.str = 30;
					I.sta = 40;
					I.wis = 40;
					I.hp = 112;
					I.mp = 100;
					I.castingHaste = -250;
					I.globalHaste = -150;
					I.enhancePhysical = 15;
					I.enhanceMagic = 15;
					I.critDamage = 25;
					I.allSkills = 6;
					I.resistPoison = 90;
					I.magicDamage = 85;
					I.leech = 8;
					I.mpRegen = 15;
					I.req = 66;
					I.proc = "Effect: Blessing of the Blackstar";
				}
				if (N === "Thunder Maul") {
					if (M.random() > .5) {
						I.name = "Hammer of the Dragonborn";
						I.enhancedDamage = 23;
						I.allStats = 28;
						I.allSkills = 7;
						setAllStatus(NI, 25, 25, 25, 25);
						I.haste = -250;
						I.globalHaste = -250;
						I.castingHaste = -250;
						I.enhanceAll = 10;
						I.critChance = 18;
						setAbsorbAll(NI, 9);
						I.physicalDamage = 90;
						I.leech = 15;
						I.mpRegen = 9;
						I.req = 68;
						I.proc = "Effect: Primal Corruption";
					} else {
						I.name = "Hallowed Gavel of Pharmakos";
						I.damage = 83;
						I.delay = 5500;
						I.critChance = 24;
						I.enhanceAll = 8;
						I.enhancePhysical = 16;
						I.str = 45;
						I.sta = 70;
						I.dex = 33;
						I.expFind = 20;
						I.allSkills = 9;
						setAllStatus(NI, 40, 40, 40, 40);
						I.globalHaste = -180;
						I.haste = -300;
						I.magicDamage = 172;
						I.absorbMagic = 20;
						I.leech = 15;
						I.mpRegen = 9;
						I.req = 68;
						I.proc = "Effect: Kelpie Snare";
					}
				}
			}
		}
		if (ni === "shield") {
			if (nt === "shield") {
				if (N === "Buckler") {
					I.name = "Blackoak Shield";
					I.enhancedArmor = 80;
					I.hp = 55;
					I.dex = 50;
					I.lightningDamage = 35;
					I.enhancePhysical = 6;
					I.leech = 12;
					I.stun = 35;
					I.cold = 50;
					I.resistLightning = 55;
					I.resistCold = 35;
					I.resistFire = 35;
					I.absorbLightning = 15;
					I.req = 54;
				}
				if (N === "Small Shield") {
					I.name = "Spirit Ward";
					I.enhancedArmor = 80;
					I.hp = 35;
					I.mp = 50;
					I.castingHaste = -90;
					I.phyMit = 10;
					I.magMit = 20;
					I.leech = 9;
					I.wraith = 12;
					I.stun = 25;
					I.absorbCold = 8;
					I.allResist = 35;
					I.req = 56;
				}
				if (N === "Kite Shield") {
					I.name = "Stormshield";
					I.enhancedArmor = 85;
					I.defense = 10;
					I.str = 30;
					I.thorns = 15;
					I.resistCold = 60;
					I.resistLightning = 25;
					I.phyMit = 35;
					I.globalHaste = -70;
					I.stun = 60;
					I.req = 58;
				}
				if (N === "Round Shield") {
					if (M.random() > .5) {
						I.name = "Gnoll Commander's Battle Shield";
						I.enhancedArmor = 85;
						I.sta = 15;
						I.str = 15;
						I.hp = 35;
						setAllResists(NI, 0, 40, 0, 40, 40);
						setAbsorbAll(NI, 9);
						I.globalHaste = -100;
						I.haste = -50;
						I.leech = 15;
						I.req = 60;
					} else {
						I.name = "March of Vithe";
						I.enhancedArmor = 100;
						I.cha = 45;
						I.dex = 35;
						I.intel = 25;
						I.allSkills = 5;
						I.hp = 70;
						setAllResists(NI, 25, 75, 30, 60, 45);
						I.enhanceAll = 4;
						I.castingHaste = -90;
						I.haste = -90;
						I.leech = 9;
						I.wraith = 9;
						I.mpKill = 12;
						I.proc = "Effect: Ostinato";
						I.req = 60;
					}
				}
				if (N === "Gothic Shield") {
					I.name = "Head Hunter's Pride";
					I.enhancedArmor = 90;
					I.defense = 6;
					I.resistFire = 30;
					I.resistPoison = 55;
					I.hpKill = 30;
					I.fear = 25;
					I.stun = 25;
					I.leech = 10;
					I.wraith = 15;
					I.castingHaste = -120;
					I.globalHaste = -70;
					I.poisonDamage = 24;
					I.req = 62;
				}
				if (N === "Crown Shield") {
					I.name = "Bladestopper";
					I.enhancedArmor = 90;
					I.hp = 50;
					I.sta = 30;
					I.phyMit = 18;
					I.parry = 9;
					I.riposte = 9;
					I.allResist = 28;
					I.absorbFire = 15;
					I.fireDamage = 40;
					I.stun = 25;
					I.req = 64;
				}
				if (N === "Aegis") {
					if (M.random() > .32) {
						I.name = "Shield of Elders";
						I.enhancedArmor = 95;
						I.allStats = 24;
						I.allResists = 28;
						I.lightRadius = 25;
						I.allSkills = 3;
						I.leech = 15;
						I.mpRegen = 8;
						I.stun = 40;
						I.req = 66;
					} else {
						I.name = "Crusader's Aegis";
						I.enhancedArmor = 120;
						I.hp = 69;
						I.mp = 56;
						I.allResist = 32;
						setAllStatus(NI, 50, 50, 50, 50);
						I.thorns = 30;
						I.leech = 20;
						I.castingHaste = -120;
						I.phyMit = 16;
						I.magMit = 22;
						setAbsorbAll(NI, 12);
						I.rarity = 4;
						I.req = 68;
					}
				}
				if (N === "Monarch") {
					I.name = "Shield of the Clawed Guardian";
					I.enhancedArmor = 95;
					I.str = 20;
					I.sta = 20;
					I.wis = 15;
					I.intel = 15;
					I.hp = 50;
					I.mp = 50;
					I.castingHaste = -90;
					I.globalHaste = -90;
					I.haste = -90;
					I.leech = 16;
					I.critChance = 9;
					setAllResists(NI, 15, 50, 15, 25, 25);
					setAllStatus(NI, 35, 35, 35, 35);
					I.req = 68;
				}
			}
			if (nt === "offhand") {
				if (N === "Stein") {
					I.name = "The Holy Grail";
					I.allResist = 35;
					I.intel = 55;
					I.wis = 35;
					I.cha = 40;
					I.stun = 35;
					I.fear = 24;
					I.mp = 215;
					I.hp = 125;
					I.allSkills = 3;
					I.critChance = 12;
					I.castingHaste = -180;
					I.enhanceMagic = 15;
					I.enhanceLightning = 9;
					I.enhancePoison = 9;
					I.hpRegen = 13;
					I.mpRegen = 9;
					I.req = 56;
				}
				if (N === "Dark Orb") {
					if (M.random() > .32) {
						I.name = "Cone of the Mystics";
						I.wis = 35;
						I.intel = 35;
						I.mp = 72;
						I.alteration = 7;
						I.conjuration = 10;
						I.channeling = 13
						I.mpKill = 16;
						I.castingHaste = -130;
						I.enhanceCold = 12;
						I.enhancePoison = 7;
						I.mpRegen = 7;
						I.req = 56;
					} else {
						I.name = "Virtuoso's Resonance";
						I.mp = 155;
						I.hp = 114;
						I.castingHaste = -150;
						I.critChance = 10;
						I.critDamage = 20;
						I.enhanceMagic = 8;
						I.leech = 20;
						I.wraith = 20;
						I.magMit = 35;
						I.stun = 30;
						I.cha = 68;
						I.rarity = 4;
						I.req = 62;
					}
				}
				if (N === "Ancient Tome") {
					I.name = "Book of Obulus";
					I.mp = 77;
					I.hp = 37;
					I.intel = 40;
					I.wis = 40;
					I.fear = 35;
					I.castingHaste = -150;
					I.conjuration = 13
					I.enhanceMagic = 7;
					I.enhancePoison = 12;
					I.resistFire = 25;
					I.resistMagic = 25;
					I.mpRegen = 6;
					I.hpRegen = 6;
					I.req = 58;

				}
				if (N === "Totem") {
					if (M.random() > .32) {
						I.name = "Death's Fathom";
						I.mp = 90;
						I.mpKill = 15;
						I.silence = 20;
						I.enhanceCold = 13
						I.enhanceLightning = 18;
						I.castingHaste = -100;
						I.allSkills = 3;
						I.resistFire = 35;
						I.yPos = -576;
						I.req = 60;
					} else {
						I.name = "Hierophant's Cloudburst";
						I.mp = 200;
						I.enhanceCold = 12;
						I.enhanceLightning = 8;
						I.castingHaste = -180;
						I.hp = 55;
						I.mpRegen = 12;
						I.hpRegen = 5;
						I.evocation = 12;
						I.alteration = 7;
						I.lightRadius = 15;
						I.wis = 44;
						setAllResists(NI, 15, 15, 52, 99, 0);
						I.rarity = 4;
						I.req = 65;
					}
				}
				if (N === "Crystal Ball") {
					if (M.random() > .32) {
						I.name = "Silver Disk";
						I.armor = 20;
						I.dex = 50;
						I.sta = 40;
						I.agi = 20;
						I.hp = 50;
						I.resistMagic = 30;
						I.mp = 35;
						I.defense = 7;
						I.mpRegen = 13;
						I.hpRegen = 7;
						I.mpKill = 12;
						I.castingHaste = -200;
						I.req = 62;
					} else {
						I.name = "Phantasmist's Kismet";
						I.castingHaste = -200;
						I.hp = 210;
						I.thorns = 35;
						I.critChance = 10;
						I.resistMagic = 120;
						I.enhanceMagic = 12;
						I.magMit = 15;
						I.allSkills = 3;
						I.silence = 100;
						I.stun = 40;
						I.cha = 90;
						I.rarity = 4;
						I.req = 66;
					}

				}
				if (N === "Skull") {
					if (M.random() > .32) {
						I.name = "Fatesealer";
						I.str = 25;
						I.dex = 25;
						I.wis = 50;
						I.intel = 50;
						I.hp = 75;
						I.mp = 75;
						I.evocation = 14;
						I.castingHaste = -120;
						I.critChance = 10;
						I.critDamage = 12;
						I.yPos = -576;
						I.req = 64;
					} else {
						I.name = "Oracle's Fetish";
						I.mp = 155;
						I.castingHaste = -170;
						I.hpRegen = 10;
						I.mpRegen = 15;
						I.expFind = 15;
						I.lightRadius = 22;
						I.allResist = 55;
						I.conjuration = 10;
						I.abjuration = 15;
						I.enhancePoison = 10;
						I.silence = 33;
						I.rarity = 4;
						I.req = 62;
					}
				}
				if (N === "Emblazoned Orb") { // mag epic
					if (M.random() > .32) {
						I.name = "Orb of the Dark Magus";
						I.mp = 100;
						I.str = 25;
						I.dex = 15;
						I.sta = 20;
						I.intel = 40;
						I.castingHaste = -150;
						I.mpKill = 11;
						I.mpRegen = 8;
						I.enhanceFire = 14;
						I.enhanceLightning = 9;
						I.enhanceCold = 10;
						I.critChance = 5;
						I.evocation = 9;
						I.conjuration = 12;
						I.resistFire = 50;
						I.resistCold = 50;
						I.resistMagic = 50;
						I.flavorText = 'The key to elemental mastery lies in knowledge of oneself.';
						I.req = 66;
					} else {
						I.name = "Sorcerer's Pleiades";
						I.castingHaste = -120;
						I.enhanceAll = 6;
						setAllStatus(NI, 30, 30, 30, 30);
						I.allSkills = 6;
						I.expFind = 10;
						I.lightRadius = 15;
						I.magMit = 30;
						I.mpRegen = 12;
						I.resistLightning = 99;
						I.resistMagic = 53;
						I.intel = 77;
						I.hp = 55;
						I.rarity = 4;
						I.req = 68;
					}
				}
				if (N === "Idol") {
					I.name = "Clastocaust's Temper";
					I.allStats = 18;
					I.enhanceAll = 10;
					I.allSkills = 5;
					I.allResist = 19;
					I.silence = 33;
					I.critChance = 10;
					setAbsorbAll(NI, 6, 3);
					I.yPos = -576;
					I.req = 68;

				}
			}
		}
		if (nt === "range") {
			if (N === "Short Bow") {
				I.name = "Eaglecaller";
				I.enhancedDamage = 13;
				I.hp = 24;
				I.resistLightning = 20;
				I.parry = 5;
				I.evocation = 3;
				I.dex = 25;
				I.allSkills = 1;
				I.physicalDamage = 20;
				I.enhancePhysical = 2;
				I.req = 54;
			}
			if (N === "Hunter's Bow") {
				I.name = "Hail of Death";
				I.enhancedDamage = 16;
				I.critDamage = 7;
				I.haste = -40;
				I.hpKill = 8;
				I.offense = 4;
				I.resistPoison = 35;
				I.poisonDamage = 35;
				I.enhanceCold = 2;
				I.req = 56;
			}
			if (N === "Composite Bow") {
				I.name = "Widowmaker";
				I.enhancedDamage = 15;
				I.evocation = 5;
				I.critChance = 3;
				I.oneHandSlash = 6;
				I.fear = 15;
				I.absorbPoison = 5;
				I.fireDamage = 20;
				I.enhanceFire = 2;
				I.req = 58;
			}
			if (N === "Siege Bow") {
				I.name = "Treant Bow";
				I.enhancedDamage = 17;
				I.hpRegen = 2;
				I.wis = 12;
				I.sta = 20;
				I.alteration = 5;
				I.evocation = 5;
				I.enhanceLightning = 3;
				I.lightningDamage = 30;
				I.req = 60;
			}
			if (N === "Astral Bow") {
				I.name = "Demoncaller's Wrath";
				I.enhancedDamage = 16;
				I.mp = 25;
				I.conjuration = 5;
				I.magMit = 5;
				I.channeling = 7;
				I.enhancePoison = 2;
				I.enhanceMagic = 2;
				I.req = 62;
			}
			if (N === "Gothic Bow") {
				I.name = "Wind Saber";
				I.enhancedDamage = 15;
				I.dex = 15;
				I.wis = 15;
				I.agi = 15;
				I.enhancePhysical = 2;
				I.resistCold = 24;
				I.absorbLightning = 3;
				I.req = 64;
			}
			if (N === "Ward Bow") {
				if (M.random() > .32) {
					I.name = "Bow of the Destroyer";
					I.enhancedDamage = 11;
					I.mp = 50;
					I.str = 15;
					I.dex = 15;
					I.agi = 15;
					I.allResist = 13
					I.req = 66;
				} else {
					I.name = "Warder's Tempest";
					I.damage = 81;
					I.delay = 5500;
					I.attack = 16;
					I.resistLightning = 58;
					I.riposte = 7;
					I.evocation = 13;
					I.enhanceMagic = 7;
					I.enhanceFire = 11;
					I.dex = 29;
					I.silence = 33;
					I.chill = 20;
					setAbsorbAll(NI, 7);
					I.rarity = 4;
					I.req = 62;
				}
			}
			if (N === "Hydra Bow") {
				I.name = "Windforce";
				I.enhancedDamage = 20;
				I.str = 20;
				I.dex = 10;
				I.enhanceAll = 3;
				I.enhancePhysical = 3;
				I.haste = -50;
				I.wraith = 6;
				I.flavorText = 'The mountains trembled and the heavens let loose the hail of death.';
				I.req = 68;
			}
		}
		if (nt === "trinket") {
			if (N === "Trinket") {
				var r1 = M.random();
				if (r1 > .67) {
					I.name = "Left Eye of Kurnst";
					I.wis = 15;
					I.intel = 15;
					I.mp = 50;
					I.castingHaste = -50;
					I.resistMagic = 25;
					I.resistPoison = 15;
					I.mpRegen = 3;
					I.enhanceMagic = 2;
					I.req = 54;
				} else if (r1 > .33) {
					I.name = "Oracle's Presage";
					I.mpRegen = 5;
					I.hpRegen = 5;
					I.defense = 5;
					I.allSkills = 1;
					I.hp = 45;
					I.lightRadius = 15;
					I.expFind = 12;
					I.enhanceCold = 6;
					I.allResist = 10;
					setAllStatus(NI, 23, 23, 23, 23);
					I.rarity = 4;
					I.req = 62;
				} else {
					I.name = "Arch Mage's Mojo";
					I.mpRegen = 5;
					I.hpRegen = 5;
					I.enhanceAll = 3;
					setAbsorbAll(NI, 3);
					I.allSkills = 5;
					I.allStats = 10;
					I.allResist = 10;
					setAllStatus(NI, 15, 15, 15, 15);
					I.rarity = 4;
					I.req = 65;
				}
			}
			if (N === "Memento") {
				if (M.random() > .32) {
					I.name = "Pulsating Gem";
					I.armor = 7;
					I.allStats = 10;
					I.allSkills = 2;
					I.globalHaste = -50;
					I.cold = 10;
					I.fireDamage = 9;
					I.offense = 3;
					I.enhancePhysical = 2;
					I.req = 58;
				} else {
					I.name = "Virtuoso's Fanfare";
					I.enhancedArmor = 120;
					I.hp = 90;
					I.lightRadius = 22;
					I.expFind = 12;
					I.runSpeed = 20;
					I.fear = 20;
					I.stun = 35;
					I.mpKill = 8;
					I.hpKill = 12;
					setAbsorbAll(NI, 6);
					I.rarity = 4;
					I.req = 64;
				}
			}
			if (N === "Charm") {
				if (M.random() > .32) {
					I.name = "Blue Resistance Stone";
					I.armor = 10;
					I.hp = 20;
					I.allStats = 7;
					setAllResists(NI, 5, 5, 10, 35, 15);
					setAbsorbAll(NI, 4);
					setAllStatus(NI, 9, 9, 9, 9);
					I.enhanceCold = 3;
					I.req = 62;
				} else {
					I.name = "Grandmaster's Comity";
					I.leech = 15;
					I.allResist = 13;
					I.allSkills = 5;
					I.phyMit = 9;
					I.magMit = 12;
					I.str = 35;
					I.agi = 55;
					I.lightRadius = 33;
					I.expFind = 12;
					I.enhancePhysical = 8;
					I.thorns = 8;
					I.rarity = 4;
					I.req = 68;
				}
			}
		}
	}
}

function magicFind(foo) {
	var bar = 0;
	var qux = 0;
	if (foo > 0) {
		qux = foo;
		if (qux > 5) {
			qux = 5;
		}
	}
	bar += qux * 4;
	qux = 0;
	if (foo > 5) {
		qux = foo - 5;
		if (qux > 5) {
			qux = 5;
		}
	}
	bar += qux * 3;
	qux = 0;
	if (foo > 10) {
		qux = foo - 10;
		if (qux > 5) {
			qux = 5;
		}
	}
	bar += qux * 2;
	qux = 0;
	if (foo > 15) {
		qux = foo - 15;
	}
	bar += qux;
	if (bar > 100) {
		bar = 100;
	}
	return bar;
}

function dimRet(x) {
	var foo = 0;
	var rem = 0;
	if (x <= 20) {
		foo = x;
	} else if (x > 20 && x <= 40) {
		foo = 20;
		rem = x - 20;
		rem = rem * .8;
		foo = foo + rem;
	} else if (x > 40 && x <= 60) {
		foo = 36;
		rem = x - 40;
		rem = rem * .6;
		foo = foo + rem;
	} else if (x > 60 && x <= 80) {
		foo = 48;
		rem = x - 60;
		rem = rem * .4;
		foo = foo + rem;
	} else if (x > 80) {
		foo = 56;
		rem = x - 80;
		rem = rem * .2;
		foo = foo + rem;
	}
	if (foo > 100) {
		foo = 100;
	} // 100 mf cap - 220 raw mf is cap 80 + ((100-56)*5)
	return foo;
}

function getLoot(Slot, Qitem, weaponType, rarity, armorType) {
	var newItem = getItemSlot(mob[Slot].level);
	if (Qitem) {
		newItem = Qitem;
	} // quest
	var newTier = getItemTier(Slot);
	var foo = getArmor(Slot, newItem, newTier);
	var newArmor = foo[0];
	var newX = foo[1];
	var newY = foo[2];
	var newName = foo[3];
	var newDamage = foo[4];
	var newDelay = foo[5];
	var newType = foo[6];
	var newQuality = foo[7];
	if (Qitem === "shield") {
		if (my.job === "Necromancer" || my.job === "Enchanter"
				|| my.job === "Magician" || my.job === "Wizard") {
			if (newType !== "offhand") {
				getLoot(Slot, Qitem, weaponType, rarity);
				return;
			}
		} else {
			if (newType !== "shield") {
				getLoot(Slot, Qitem, weaponType, rarity);
				return;
			}
		}
	}
	if (Qitem === "range" && newType !== "trinket") {
		getLoot(Slot, Qitem, weaponType, rarity, armorType);
		return;
	}
	if (armorType) {
		if (newType !== armorType) {
			getLoot(Slot, Qitem, weaponType, rarity, armorType);
			return;
		}
	}
	if (weaponType) {
		if (newType !== weaponType) {
			getLoot(Slot, Qitem, weaponType, rarity); // quest - loop until
														// correct weaponType
			return;
		}
	}
	var newRarity = 0;
	// uh oh, it's magic ... or rare?
	var champBuff = 0;
	if (mob[Slot].rare === 2) {
		champBuff = 25;
	}
	if (mob[Slot].rare === 0) {
		champBuff = 70;
	}
	if (mob[Slot].rare === 3) {
		var goy = g.difficulty - 1;
		champBuff = 200;
		if (mob[Slot].rare === 3) {
			var _zone = myZone();
			if (_zone === "Lanfeld Outpost") {
				if (P.Q[goy].Crushbone === 3) {
					// virgin kill
					champBuff = 700;
				}
			}
			if (_zone === "Arcturin's Crypt") {
				if (P.Q[goy].EstateofUnrest === 3) {
					champBuff = 700;
				}
			}
			if (_zone === "Temple of Prenssor") {
				if (P.Q[goy].CazicThule === 3) {
					champBuff = 700;
				}
			}
			if (_zone === "Ashenflow Peak") {
				if (P.Q[goy].NagafensLair === 4) {
					champBuff = 700;
				}
			}
			if (_zone === "Galeblast Fortress") {
				if (P.Q[goy].PermafrostKeep === 4) {
					champBuff = 700;
				}
			}
			if (_zone === "Viston's Redoubt") {
				if (P.Q[goy].KedgeKeep === 4) {
					champBuff = 700;
				}
			}
			if (_zone === "Nimgaul") {
				if (P.Q[goy].PlaneofFear === 1) {
					champBuff = 700;
				}
			}
			if (_zone === "Dire Sanctum") {
				if (P.Q[goy].PlaneofHate === 1) {
					champBuff = 700;
				}
			}
		}
	}
	var mfBonus = dimRet(g.lightRadiusEquip);
	if (my.race === "Halfling") {
		mfBonus += 10;
	}
	var mobHordeBonus = 0;
	var count = countMobs();
	if (count > 1) {
		mobHordeBonus = 10;
		if (count === 3) {
			mobHordeBonus = 25;
		} else if (count === 4) {
			mobHordeBonus = 50;
		} else if (count === 5) {
			mobHordeBonus = 80;
		}
	}
	if (mob[Slot].rare === 3) {
		mobHordeBonus = 0;
	}
	champBuff += (mfBonus + mobHordeBonus);
	var cC = chainCounter;
	if (M.random() * 100 < (3 + (champBuff / 10) + (magicFind(cC) / 9))) { // unique
		newRarity = 3;
	} else if (M.random() * 100 < (12 + champBuff / 2 + (magicFind(cC) / 4))) { // rare
		newRarity = 2;
	} else if (M.random() * 100 < (75 + champBuff + magicFind(cC))) { // magic
		newRarity = 1;
	}
	// champ rare adjustment
	if (mob[Slot].rare === 0) {
		newRarity += 1;
		if (newRarity < 2) {
			newRarity = 2;
		}
		if (newRarity > 3) {
			newRarity = 3;
		}
	}
	if (newItem === "ring" || newItem === "neck" || newType === "offhand"
			|| newType === "trinket") {
		if (newRarity === 1 || newRarity === 2) {
			newQuality = 0; // no such thing as an elite/exceptional version of
							// these items.
		} else if (newRarity === 0) {
			getLoot(Slot, Qitem, weaponType, rarity);
			return;
		}
	}
	if (rarity) {
		newRarity = rarity;
	} // quest bonus
	// can't find unique helms until level 20 mobs
	if (newItem === "helmet" && newRarity === 3 && mob[Slot] < 20) {
		getLoot(Slot, Qitem, weaponType, rarity, armorType);
		return;
	}
	// find free slot and start assigning values
	var NI = findFirstInvSlot();
	if (NI === false) {
		Error("There is no room in your inventory to collect new items.");
		return;
	}

	function initSlot() {
		for (var x = 0, len = g.key.length; x < len; x++) {
			P.item[NI][g.key[x]] = g.val[x];
		}
	}
	initSlot();

	function convertFilter(x) {
		var v = 0;
		if (x === "Normal") {
			v = 1;
		} else if (x === "Exceptional") {
			v = 2;
		} else if (x === "All") {
			v = 3;
		}
		return v;
	}
	P.item[NI].rarity = newRarity;
	P.item[NI].itemSlot = newItem;
	P.item[NI].xPos = newX;
	P.item[NI].yPos = newY;
	P.item[NI].name = newName;
	P.item[NI].armor = newArmor;
	P.item[NI].damage = newDamage;
	P.item[NI].delay = newDelay;
	P.item[NI].type = newType;
	P.item[NI].quality = newQuality;
	if (newRarity === 3) {
		getUniqueItem(NI, newItem, newTier, newType, newName, Slot, newQuality);
	} else if (newRarity === 2) { // rare
		var nmBonus = 0;
		var hellBonus = 0;
		if (diff() > 0) {
			nmBonus = 1;
		}
		if (diff() > 1) {
			hellBonus = 2;
		}
		var prefCount = ~~(1 + M.random() * (3) + nmBonus);
		var sufCount = ~~(1 + M.random() * (3) + hellBonus);
		if ((prefCount + sufCount) < 4) {
			prefCount = 2;
			sufCount = 2;
		}
		for (var i = 1; i <= prefCount; i++) {
			getItemPrefix(NI, newItem, newType, Slot, newName);
		}
		for (var i = 1; i <= sufCount; i++) {
			getItemSuffix(NI, newItem, newType, Slot, newName);
		}
		P.item[NI].name = getRareName(newItem, newType, newName);
	} else if (newRarity === 1) { // magic
		if (M.random() <= .5) {
			getItemPrefix(NI, newItem, newType, Slot, newName);
			if (M.random() > .5) {
				getItemSuffix(NI, newItem, newType, Slot, newName);
			}
		} else {
			getItemSuffix(NI, newItem, newType, Slot, newName);
			if (M.random() <= .5) {
				getItemPrefix(NI, newItem, newType, Slot, newName);
			}
		}
	}
	if (P.item[NI].rarity === 4) {
		newRarity = 4;
	}

	var zub = false;
	if (newRarity === 0) {
		var filter = convertFilter(Lmy.normalFilter);
		if (filter > newQuality) {
			zub = true;
		}
	} else if (newRarity === 1) {
		var filter = convertFilter(Lmy.magicFilter);
		if (filter > newQuality) {
			zub = true;
		}
	} else if (newRarity === 2) {
		var filter = convertFilter(Lmy.rareFilter);
		if (filter > newQuality) {
			zub = true;
		}
	} else if (newRarity === 3) {
		var filter = convertFilter(Lmy.uniqueFilter);
		if (filter > newQuality) {
			zub = true;
		}
	} else if (newRarity === 4) {
		var filter = convertFilter(Lmy.setFilter);
		if (filter > newQuality) {
			zub = true;
		}
	}
	if (zub === true) {
		if (newQuality === 0) {
			Chat("You discarded an item: "
					+ logItemName(newName, newRarity));
		}
		if (newQuality === 1) {
			"<span class='exceptionalItem'>Exceptional </span>"
			Chat("You discarded an <span class='exceptionalItem'>Exceptional </span>item: "
					+ logItemName(newName, newRarity));
		}
		if (newQuality === 2) {
			"<span class='eliteItem'>Exceptional </span>"
			Chat("You discarded an <span class='eliteItem'>Elite </span>item: "
					+ logItemName(newName, newRarity));
		}
		initSlot();
		return;
	}

	if (newItem === "ring" || newItem === "neck" || newType === "offhand"
			|| newType === "trinket") {
		if (P.item[NI].rarity < 3) {
			P.item[NI].quality = 0;
		}
	}
	// post processing
	if (P.item[NI].enhancedDamage) {
		P.item[NI].damage += P.item[NI].enhancedDamage;
	}
	if (P.item[NI].enhancedArmor) {
		P.item[NI].armor = P.item[NI].armor
				+ M.round(P.item[NI].armor * (P.item[NI].enhancedArmor / 100));
	}
	if (P.item[NI].ias) {
		P.item[NI].delay = P.item[NI].delay * (1 - P.item[NI].ias);
		P.item[NI].delay = M.round(P.item[NI].delay / 100);
		P.item[NI].delay *= 100;
		P.item[NI].ias = M.round(P.item[NI].ias * 100);
	}
	// report
	var foo = logItemName(P.item[NI].name, P.item[NI].rarity);
	var s1 = " an ";
	var s2 = " a ";
	if (newQuality === 1) {
		var goy = "<span class='exceptionalItem'>Exceptional </span>";
		s1 = " an " + goy;
		s2 = " an " + goy;
	}
	if (newQuality === 2) {
		var goy = "<span class='eliteItem'>Elite </span>";
		s1 = " an " + goy;
		s2 = " a " + goy;
	}
	var x = "You found " + s1 + "item: " + foo;
	if (newRarity === 1) {
		x = "You found" + s2 + "magic item: " + foo;
		my.magicFound += 1;
	} else if (newRarity === 2) {
		x = "You found" + s2 + "rare item: " + foo;
		my.raresFound += 1;
	} else if (newRarity === 3) {
		x = "You found" + s2 + "unique item: " + foo;
		my.uniquesFound += 1;
	} else if (newRarity === 4) {
		x = "You found" + s2 + "set item: " + foo;
		my.setFound += 1;
	}
	Chat(x);
	if (newRarity >= 3) {
		g.lastDrop = P.item[NI].name;
		if (!dev) {
			$.ajax({
				data : {
					run : "addLoot",
					itemName : P.item[NI].name,
					rarity : P.item[NI].rarity,
					name : my.name
				}
			});
		}
	}
	var mobX = MOB[Slot].offsetLeft + (mob[Slot].imageWidth / 2) - 32
			+ M.random() * (100) - 50;
	var mobY = MOB[Slot].offsetTop + (mob[Slot].imageHeight / 2) - 32
			+ M.random() * (100) - 50;
	var e1 = DIV(mobX, mobY, 64, 64);
	e1.style.background = "url('//" + itemSprite + "') " + P.item[NI].xPos
			+ "px " + P.item[NI].yPos + "px";
	NG.eWin.appendChild(e1);
	var m1 = 200;
	var mX = ~~M.random() * (m1);
	m1 -= mX;
	var mY = m1;
	if (M.random() > .5) {
		mX = mX * -1;
	}
	if (M.random() > .5) {
		mY = mY * -1;
	}
	T.set(e1, {
		scale : 0
	});
	T.to(e1, 1, {
		left : "+=" + mX,
		top : "+=" + mY,
		scale : 1,
		ease : ez.Bout
	});
	T.to(e1, 1, {
		rotation : 720
	});
	T.to(e1, 2, {
		delay : 1,
		top : -14,
		left : 1066,
		scale : .625,
		ease : ez.qout,
		onComplete : function() {
			remove(this);
		}
	});
	if (Qitem) {
		QMsg("Quest Reward: ");
	}
	itemNotify();
	if (GLB.hideMenu === "On") {
		T.to(D.getElementById('window5Id'), .5, {
			startAt : {
				opacity : 1
			},
			delay : 6,
			opacity : 0
		});
	}
	cancelDragging();
	updateInvDrag(NI);
	save.item(NI);
}

function talentNotify() {
	talentNotifyStatus = true;
	if (GLB.hideMenu === "On") {
		T.to(D.getElementById('window5Id'), 0, {
			startAt : {
				opacity : 1
			},
			delay : 8,
			opacity : 0
		});
	}
	var zig = D.getElementById('talentNotify');
	T.set(zig, {
		opacity : 1
	});
}

function itemNotify() {
	if (GLB.hideMenu === "On") {
		T.to(D.getElementById('window5Id'), 0, {
			startAt : {
				opacity : 1
			},
			delay : 8,
			opacity : 0
		});
	}
	T.to(D.getElementById('itemNotify'), .5, {
		startAt : {
			opacity : 1
		},
		opacity : .5,
		ease : ez.lin,
		repeat : -1,
		yoyo : true
	});
}

function getItemPrefix(NI, newItem, newType, Slot, newName) {
	var foo = ~~(1 + M.random() * (39));
	if (foo === 1) {
		attackAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 2) {
		physicalDamageAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 3) {
		poisonDamageAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 4) {
		magicDamageAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 5) {
		lightningDamageAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 6) {
		coldDamageAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 7) {
		fireDamageAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 8) {
		enhancedDamageAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 9) {
		enhancePhysicalAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 10) {
		mpAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 11) {
		lightRadiusAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 12) {
		resistPoisonAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 13) {
		resistMagicAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 14) {
		resistLightningAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 15) {
		resistColdAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 16) {
		resistFireAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 17) {
		allResistAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 18) {
		oneHandSlashAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 19) {
		twoHandSlashAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 20) {
		oneHandBluntAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 21) {
		twoHandBluntAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 22) {
		piercingAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 23) {
		handtohandAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 24) {
		offenseAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 25) {
		dualWieldAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 26) {
		doubleAttackAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 27) {
		defenseAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 28) {
		dodgeAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 29) {
		parryAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 30) {
		riposteAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 31) {
		alterationAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 32) {
		evocationAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 33) {
		conjurationAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 34) {
		abjurationAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 35) {
		channelingAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 36) {
		allSkillsAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 37) {
		hpKillAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 38) {
		mpKillAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 39) {
		enhancedArmorAdd(NI, newItem, newType, Slot, newName);
	}
}

function getItemSuffix(NI, newItem, newType, Slot, newName) {
	var foo = ~~(1 + M.random() * (30));
	if (foo === 1) {
		strAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 2) {
		staAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 3) {
		agiAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 4) {
		dexAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 5) {
		intelAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 6) {
		wisAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 7) {
		chaAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 8) {
		allStatsAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 9) {
		hpAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 10) {
		hpRegenAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 11) {
		mpRegenAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 12) {
		critChanceAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 13) {
		critDamageAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 14) {
		wraithAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 15) {
		phyMitAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 16) {
		magMitAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 17) {
		goldFindAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 18) {
		expFindAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 19) {
		hasteAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 20) {
		globalHasteAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 21) {
		castingHasteAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 22) {
		thornsAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 23) {
		weightAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 24) {
		runSpeedAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 25) {
		stunAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 26) {
		fearAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 27) {
		coldAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 28) {
		silenceAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 29) {
		leechAdd(NI, newItem, newType, Slot, newName);
	}
	if (foo === 30) {
		iasAdd(NI, newItem, newType, Slot, newName);
	}
}

function itemValueAdjust(foo, Slot) {
	foo = foo * (mob[Slot].level / 99);
	return M.ceil(foo);
}

function attackAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.attack || newType === "offhand") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (6) + 4;
	if (newItem === "ring" || newItem === "shoulders" || newItem === "back"
			|| newItem === "bracers" || newItem === "gloves"
			|| newItem === "boots") {
		foo = M.random() * (3) + 2;
	}
	if (newType === "smashed" || newType === "staff" || newType === "cleaved") {
		foo = M.random() * (12) + 8;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Platinum " + I.name;
	I.attack = foo;
}

function physicalDamageAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.physicalDamage || I.poisonDamage || I.magicDamage
			|| I.lightningDamage || I.coldDamage || I.fireDamage
			|| newItem !== "weapons") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (11) + 12;
	if (newType === "smashed" || newType === "staff" || newType === "cleaved") {
		foo = M.random() * (36) + 24;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Deadly " + I.name;
	I.physicalDamage = foo;
}

function poisonDamageAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.physicalDamage || I.poisonDamage || I.magicDamage
			|| I.lightningDamage || I.coldDamage || I.fireDamage
			|| newItem !== "weapons") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (11) + 12;
	if (newType === "smashed" || newType === "staff" || newType === "cleaved") {
		foo = M.random() * (54) + 36;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Toxic " + I.name;
	I.poisonDamage = foo;
}

function magicDamageAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.physicalDamage || I.poisonDamage || I.magicDamage
			|| I.lightningDamage || I.coldDamage || I.fireDamage
			|| newItem !== "weapons") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (11) + 12;
	if (newType === "smashed" || newType === "staff" || newType === "cleaved") {
		foo = M.random() * (54) + 36;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Sacred " + I.name;
	I.magicDamage = foo;
}

function lightningDamageAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.physicalDamage || I.poisonDamage || I.magicDamage
			|| I.lightningDamage || I.coldDamage || I.fireDamage
			|| newItem !== "weapons") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (11) + 12;
	if (newType === "smashed" || newType === "staff" || newType === "cleaved") {
		foo = M.random() * (54) + 36;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Shocking " + I.name;
	I.lightningDamage = foo;
}

function coldDamageAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.physicalDamage || I.poisonDamage || I.magicDamage
			|| I.lightningDamage || I.coldDamage || I.fireDamage
			|| newItem !== "weapons") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (11) + 12;
	if (newType === "smashed" || newType === "staff" || newType === "cleaved") {
		foo = M.random() * (54) + 36;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Boreal " + I.name;
	I.coldDamage = foo;
}

function fireDamageAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.physicalDamage || I.poisonDamage || I.magicDamage
			|| I.lightningDamage || I.coldDamage || I.fireDamage
			|| newItem !== "weapons") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (11) + 12;
	if (newType === "smashed" || newType === "staff" || newType === "cleaved") {
		foo = M.random() * (54) + 36;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Flaming " + I.name;
	I.fireDamage = foo;
}

function enhancedDamageAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.enhancedDamage && (newItem === "weapons" || newType === "range")) {
		qux = true;
	}
	if (newType === "staff") {
		qux = false;
	}
	if (qux === false) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 33));
	if (newType === "smashed" || newType === "staff" || newType === "cleaved"
			|| newType === "range") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	I.enhancedDamage = foo;
	I.name = "Savage " + I.name;
	I.damage += foo;
}

function enhancedArmorAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.enhancedArmor
			&& (newItem === "helmet" || newType === "cloth"
					|| newType === "leather" || newType === "chain" || newType === "plate")) {
		qux = true;
	}
	if (qux === false) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (60) + 40;
	foo = itemValueAdjust(foo, Slot);
	if (foo < 5) {
		foo = 5;
	}
	if (foo > 100) {
		foo = 100;
	}
	I.enhancedArmor = foo;
	I.name = "Godly " + I.name;
}

function mpAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.mp) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (30) + 20;
	if (newType === "offhand") {
		foo = M.random() * (60) + 40;
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.random() * (36) + 24;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Dragon's " + I.name;
	I.mp = foo;
}

function lightRadiusAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.lightRadius) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = ~~(1 + M.random() * (10));
	if (foo < 2) {
		foo = 2;
	}
	I.name = "Lucky " + I.name;
	I.lightRadius = foo;
}

function resistPoisonAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.resistPoison || I.allResist) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "neck" || newType === "cleaved" || newType === "smashed"
			|| newType === "staff" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (24) + 16;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Emerald " + I.name;
	I.resistPoison = foo;
}

function resistMagicAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.resistMagic || I.allResist) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "neck" || newType === "cleaved" || newType === "smashed"
			|| newType === "staff" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (24) + 16;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Divine " + I.name;
	I.resistMagic = foo;
}

function resistLightningAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.resistLightning || I.allResist) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "neck" || newType === "cleaved" || newType === "smashed"
			|| newType === "staff" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (24) + 16;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Ocher " + I.name;
	I.resistLightning = foo;
}

function resistColdAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.resistCold || I.allResist) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "neck" || newType === "cleaved" || newType === "smashed"
			|| newType === "staff" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (24) + 16;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Sapphire " + I.name;
	I.resistCold = foo;
}

function resistFireAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.resistFire || I.allResist) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "neck" || newType === "cleaved" || newType === "smashed"
			|| newType === "staff" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (24) + 16;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Ruby " + I.name;
	I.resistFire = foo;
}

function allResistAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var z = mob[Slot].level;
	if (I.resistPoison || I.resistMagic || I.resistLightning || I.resistCold
			|| I.resistFire || I.allResist || z < 24) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (9) + 6;
	if (newItem === "neck" || newType === "cleaved" || newType === "smashed"
			|| newType === "staff" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (11) + 12;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Chromatic " + I.name;
	I.allResist = foo;
}

function oneHandSlashAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.oneHandSlash || newType === "offhand" || newType === "crushed"
			|| newType === "pierced" || newType === "cleaved"
			|| newType === "smashed" || newType === "staff") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Soldier's " + I.name;
	I.oneHandSlash = foo;
	itemHasSkill = true;
}

function twoHandSlashAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.twoHandSlash || newType === "shield" || newType === "offhand"
			|| newType === "crushed" || newType === "pierced"
			|| newType === "slashed" || newType === "smashed"
			|| newType === "staff") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Knight's " + I.name;
	I.twoHandSlash = foo;
}

function oneHandBluntAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.oneHandBlunt || newType === "offhand" || newType === "slashed"
			|| newType === "pierced" || newType === "cleaved"
			|| newType === "smashed" || newType === "staff"
			|| newType === "shield") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Keeper's " + I.name;
	I.oneHandBlunt = foo;
}

function twoHandBluntAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.twoHandBlunt || newType === "shield" || newType === "offhand"
			|| newType === "crushed" || newType === "pierced"
			|| newType === "cleaved" || newType === "slashed"
			|| newType === "shield") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Warden's " + I.name;
	I.twoHandBlunt = foo;
}

function piercingAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.piercing || newType === "offhand" || newType === "crushed"
			|| newType === "slashed" || newType === "cleaved"
			|| newType === "smashed" || newType === "staff") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Assassin's " + I.name;
	I.piercing = foo;
}

function handtohandAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var x = newType;
	var i = newItem;
	if (I.handtohand || x === "offhand" || x === "range" || x === "cleaved"
			|| x === "slashed" || x === "pierced" || x === "smashed"
			|| x === "staff") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (i === "helmet" || i === "neck" || i === "chest" || i === "legs"
			|| i === "shield" || i === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	I.name = "Pugilist's " + I.name;
	I.handtohand = foo;
}

function offenseAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.offense || newType === "offhand") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Master's " + I.name;
	I.offense = foo;
}

function dualWieldAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var z = mob[Slot].level;
	if (I.dualWield || newType === "offhand" || newType === "shield"
			|| newType === "cleaved" || newType === "smashed"
			|| newType === "staff" || z < 12) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	I.name = "Hunter's " + I.name;
	I.dualWield = foo;
}

function doubleAttackAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var z = mob[Slot].level;
	if (I.doubleAttack || newType === "offhand" || z < 15) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Slayer's " + I.name;
	I.doubleAttack = foo;
}

function defenseAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.defense) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Guardian's " + I.name;
	I.defense = foo;
}

function dodgeAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var z = mob[Slot].level;
	if (I.dodge || z < 4) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Acrobat's " + I.name;
	I.dodge = foo;
}

function parryAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var z = mob[Slot].level;
	if (I.parry || newType === "offhand" || z < 10) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Athletic " + I.name;
	I.parry = foo;
}

function riposteAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.riposte || newType === "offhand" || z < 28) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Fencer's " + I.name;
	I.riposte = foo;
}

function alterationAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.alteration || newType === "shield") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Spiritual " + I.name;
	I.alteration = foo;
}

function evocationAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.evocation || newType === "shield") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Evoker's " + I.name;
	I.evocation = foo;
}

function conjurationAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.conjuration || newType === "shield") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Summoner's " + I.name;
	I.conjuration = foo;
}

function abjurationAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.abjuration || newType === "shield") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Caretaker's " + I.name;
	I.abjuration = foo;
}

function channelingAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.channeling || newType === "shield") {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	I.name = "Focused " + I.name;
	I.channeling = foo;
}

function allSkillsAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var z = mob[Slot].level;
	if (I.allSkills || z < 24) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = ~~(1 + M.random() * (z / 49.5));
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs") {
		foo = ~~(1 + M.random() * (z / 33));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 24.75));
	}
	I.name = "Empyrean " + I.name;
	I.allSkills = foo;
}

function hpKillAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.hpKill) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (6) + 4;
	if (newItem === "neck" || newItem === "chest" || newItem === "legs"
			|| newType === "cleaved" || newType === "smashed"
			|| newType === "staff" || newType === "shield") {
		foo = M.random() * (12) + 8;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Triumphant " + I.name;
	I.hpKill = foo;
}

function mpKillAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.mpKill) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (3) + 2;
	if (newItem === "neck" || newItem === "chest" || newItem === "legs"
			|| newType === "cleaved" || newType === "smashed"
			|| newType === "staff" || newType === "shield") {
		foo = M.random() * (6) + 4;
	}
	if (newType === "offhand") {
		foo = M.random() * (24) + 16;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name = "Vulpine " + I.name;
	I.mpKill = foo;
}

function enhancePhysicalAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.enhancePhysical
			&& (newType === "slashed" || newType === "crushed"
					|| newType === "piercing" || newType === "cleaved"
					|| newType === "smashed" || newType === "staff" || newType === "shield")) {
		qux = true;
	}
	if (newType === "staff") {
		qux = false;
	}
	if (qux === false) {
		getItemPrefix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (11) + 12;
	foo = itemValueAdjust(foo, Slot);
	if (foo < 5) {
		foo = 5;
	}
	I.name = "King's " + I.name;
	I.enhancePhysical = foo;
}
// yes
function strAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.str) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (11) + 12;
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.random() * (24) + 16;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name += " of the Titans";
	I.str = foo;
}

function staAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.sta) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (11) + 12;
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.random() * (24) + 16;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name += " of the Colossus";
	I.sta = foo;
}

function agiAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.agi) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (11) + 12;
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.random() * (24) + 16;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name += " of Deflection";
	I.agi = foo;
}

function dexAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.dex) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield") {
		foo = M.random() * (11) + 12;
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.random() * (24) + 16;
	}
	if (newType === "offhand") {
		foo = M.random() * (36) + 24;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name += " of Perfection";
	I.dex = foo;
}

function wisAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.wis) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield") {
		foo = M.random() * (11) + 12;
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.random() * (24) + 16;
	}
	if (newType === "offhand") {
		foo = M.random() * (36) + 24;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name += " of Preservation";
	I.wis = foo;
}

function intelAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.intel) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield") {
		foo = M.random() * (11) + 12;
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.random() * (24) + 16;
	}
	if (newType === "offhand") {
		foo = M.random() * (36) + 24;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name += " of Sorcery";
	I.intel = foo;
}

function chaAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.cha) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (12) + 8;
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield") {
		foo = M.random() * (11) + 12;
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.random() * (24) + 16;
	}
	if (newType === "offhand") {
		foo = M.random() * (36) + 24;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name += " of Grace";
	I.cha = foo;
}

function allStatsAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var z = mob[Slot].level;
	if (I.allStats || z < 24) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (6) + 4;
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (9) + 6;
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.random() * (12) + 8;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name += " of the Angels";
	I.allStats = foo;
}

function hpAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.hp) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (11) + 12;
	if (newItem === "helmet" || newItem === "neck" || newItem === "chest"
			|| newItem === "legs" || newType === "shield"
			|| newType === "offhand") {
		foo = M.random() * (30) + 20;
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.random() * (36) + 24;
	}
	foo = itemValueAdjust(foo, Slot);
	I.name += " of the Whale";
	I.hp = foo;
}

function hpRegenAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.hpRegen
			&& (newItem === "helmet" || newItem === "neck"
					|| newItem === "chest" || newItem === "legs"
					|| newType === "shield" || newType === "offhand")) {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 16.5));
	I.name += " of Regrowth";
	I.hpRegen = foo;
}

function mpRegenAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.mpRegen
			&& (newItem === "helmet" || newItem === "neck"
					|| newItem === "chest" || newItem === "legs"
					|| newType === "shield" || newType === "offhand")) {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 16.5));
	I.name += " of the Wraith";
	I.mpRegen = foo;
}

function critChanceAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.critChance && newItem !== "range") {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = ~~(1 + M.random() * (z / 24.75));
	if (newItem === "neck" || newItem === "chest" || newItem === "legs") {
		foo = ~~(1 + M.random() * (z / 16.5));
	}
	if (newType === "slashed" || newType === "crushed" || newType === "pierced"
			|| newType === "shield" || newType === "offhand") {
		foo = ~~(1 + M.random() * (z / 12.375));
	}
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = ~~(1 + M.random() * (z / 6.1175));
	}
	I.name += " of Slaughter";
	I.critChance = foo;
}

function critDamageAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.critDamage && newItem !== "range") {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.round(M.random() * (6) + 4);
	if (newType === "cleaved" || newType === "smashed" || newType === "staff") {
		foo = M.round(M.random() * (12) + 8);
	}
	I.name += " of Maiming";
	I.critDamage = foo;
}

function iasAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.ias
			&& (newType === "slashed" || newType === "crushed"
					|| newType === "pierced" || newType === "smashed"
					|| newType === "staff" || newType === "cleaved")) {
		qux = true;
	}
	if (newType === "staff") {
		qux = false;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = M.random() * (z / 330);
	if (foo < .075) {
		foo = .05;
	}
	if (foo >= .075 && foo < .125) {
		foo = .1;
	}
	if (foo >= .125 && foo < .175) {
		foo = .15;
	}
	if (foo >= .175 && foo < .225) {
		foo = .2;
	}
	if (foo >= .225 && foo < .275) {
		foo = .25;
	}
	if (foo >= .275) {
		foo = .3;
	}
	I.ias = foo;
}

function phyMitAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.phyMit
			&& (newItem === "chest" || newItem === "legs"
					|| newType === "shield" || newType === "offhand")) {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (10) + 6;
	foo = itemValueAdjust(foo, Slot);
	I.name += " of Protection";
	I.phyMit = foo;
}

function magMitAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.magMit
			&& (newItem === "chest" || newItem === "legs"
					|| newType === "shield" || newType === "offhand")) {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (10) + 6;
	foo = itemValueAdjust(foo, Slot);
	I.name += " of Negation";
	I.magMit = foo;
}

function goldFindAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.goldFind) {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = M.round(M.random() * (z / 4.95));
	if (foo < 3) {
		foo = 3;
	}
	I.name += " of Wealth";
	I.goldFind = foo;
}

function expFindAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.expFind) {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = M.round(M.random() * (z / 9.9));
	if (foo < 2) {
		foo = 2;
	}
	I.name += " of the Scholar";
	I.expFind = foo;
}

function hasteAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.haste
			&& (newItem === "gloves" || newItem === "amulet" || newType === "shield")) {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = (~~(1 + M.random() * (z / .99))) * -1;
	if (newType === "shield") {
		foo = (~~(1 + M.random() * (z / .61175))) * -1;
	}
	foo /= 10;
	foo = M.round(foo);
	foo *= 10;
	if (foo > -20) {
		foo = -20;
	}
	I.name += " of Alacrity";
	I.haste = foo;
}

function globalHasteAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.globalHaste
			&& (newItem === "legs" || newItem === "amulet" || newType === "shield")) {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = (~~(1 + M.random() * (z / .99))) * -1;
	if (newType === "shield") {
		foo = (~~(1 + M.random() * (z / .61175))) * -1;
	}
	foo /= 10;
	foo = M.round(foo);
	foo *= 10;
	if (foo > -20) {
		foo = -20;
	}
	I.name += " of Swiftness";
	I.globalHaste = foo;
}

function castingHasteAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.castingHaste
			&& (newItem === "ring" || newType === "offhand" || newType === "shield")) {
		qux = true;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = (~~(1 + M.random() * (z / .99))) * -1;
	if (newType === "offhand") {
		foo = (~~(1 + M.random() * (z / .495))) * -1;
	}
	foo /= 10;
	foo = M.round(foo);
	foo *= 10;
	if (foo > -20) {
		foo = -20;
	}
	I.name += " of the Magus";
	I.castingHaste = foo;
}

function thornsAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.thorns) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = M.random() * (6) + 4;
	foo = itemValueAdjust(foo, Slot);
	I.name += " of Razors";
	I.thorns = foo;
}

function weightAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (!I.weight
			&& (newItem === "helmet" || newItem === "shoulders"
					|| newItem === "chest" || newItem === "bracers"
					|| newItem === "gloves" || newItem === "belt"
					|| newItem === "legs" || newItem === "boots")) {
		qux = true;
	}
	if (newType === "cloth") {
		qux = false;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var foo = 1;
	I.name += " of Ease";
	I.weight = foo;
}

function runSpeedAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.runSpeed || newItem !== "boots") {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = M.round(M.random() * (z / 2.475));
	if (foo < 5) {
		foo = 5;
	}
	I.name += " of Speed";
	I.runSpeed = foo;
}

function stunAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.stun || newItem === "weapons") {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = M.round(M.random() * (z / 9.9));
	if (newType === "shield" || newType === "offhand") {
		var foo = M.round(M.random() * (z / 4.95));
	}
	if (foo < 2) {
		foo = 2;
	}
	I.name += " of Stability";
	I.stun = foo;
}

function fearAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.fear || newItem === "weapons") {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = M.round(M.random() * (z / 9.9));
	if (newType === "shield" || newType === "offhand") {
		var foo = M.round(M.random() * (z / 4.95));
	}
	if (foo < 2) {
		foo = 2;
	}
	I.name += " of Courage";
	I.fear = foo;
}

function coldAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.cold || newItem === "weapons") {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = M.round(M.random() * (z / 9.9));
	if (newType === "shield" || newType === "offhand") {
		var foo = M.round(M.random() * (z / 4.95));
	}
	if (foo < 2) {
		foo = 2;
	}
	I.name += " of Thawing";
	I.cold = foo;
}

function silenceAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	if (I.silence || newItem === "weapons") {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = M.round(M.random() * (z / 9.9));
	if (newType === "shield" || newType === "offhand") {
		var foo = M.round(M.random() * (z / 4.95));
	}
	if (foo < 2) {
		foo = 2;
	}
	I.name += " of Resolve";
	I.silence = foo;
}

function leechAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (newItem === "weapons" || newType === "shield" || newItem === "ring"
			|| newItem === "neck" || newItem === "gloves") {
		qux = true;
	}
	if (I.leech) {
		qux = false;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = M.round(M.random() * (z / 11.25));
	if (foo > 8) {
		foo = 8;
	}
	if (newType === "offhand" || newType === "shield" || newType === "cleaved"
			|| newType === "smashed" || newType === "staff") {
		var foo = M.round(M.random() * (z / 5.9375));
		if (foo > 16) {
			foo = 16;
		}
	}
	if (foo < 2) {
		foo = 2;
	}
	I.name += " of the Leech";
	I.leech = foo;
}

function wraithAdd(NI, newItem, newType, Slot, newName) {
	var I = P.item[NI];
	var qux = false;
	if (newItem === "weapons" || newType === "shield" || newItem === "ring"
			|| newItem === "neck" || newItem === "gloves") {
		qux = true;
	}
	if (I.wraith) {
		qux = false;
	}
	if (qux === false) {
		getItemSuffix(NI, newItem, newType, Slot, newName);
		return;
	}
	var z = mob[Slot].level;
	var foo = M.round(M.random() * (z / 11.25));
	if (foo > 8) {
		foo = 8;
	}
	if (newType === "offhand" || newType === "shield" || newType === "cleaved"
			|| newType === "smashed" || newType === "staff") {
		var foo = M.round(M.random() * (z / 5.9375));
		if (foo > 16) {
			foo = 16;
		}
	}
	if (foo < 2) {
		foo = 2;
	}
	I.name += " of the Wraith";
	I.wraith = foo;
}