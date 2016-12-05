<?php
	$myFile = "data/enteredWorld.txt";
	$fh = fopen($myFile, 'a') or die("can't open file");
	$a = $_POST['myName'];
	$b = $_POST['myLevel'];
	$c = $_POST['myJob'];
	$d = $_POST['myRace'];
	$e = $_POST['myKills'];
	$f = $_POST['myDeaths'];
	$g = $_POST['myUniques'];
	$h = $_POST['myHours'];
	
	// pre-processing
	$h = round($h);
	
	$stringData = $e.",".round(microtime(true)).",".date("Y/m/d").",$a,$b,$c,$d,$f,$g,$h\n";
	fwrite($fh, $stringData);
	fclose($fh);
?>