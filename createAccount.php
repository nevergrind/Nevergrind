<?php
	session_start();
	
	if($_SERVER["SERVER_NAME"] === "localhost"){
		error_reporting(E_ALL);
		ini_set('display_errors', true);
	}
	require('php/values.php');
	
	if(isset($_SESSION['email'])){
		if(strlen($_SESSION['email']) > 0){
			header("Location: /");
			exit();
		}
	}
	$refer = isset($_GET['back']) ? $_GET['back'] : "/";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Nevergrind | Login & Account Creation</title>
	<meta name="viewport" content="width=1280,user-scalable=no">
	<link rel='stylesheet' type='text/css' href="/css/global.css">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<?php
		include($_SERVER['DOCUMENT_ROOT'] . "/includes/head.html");
	?>
	<style>
		#currencyIndicator{
			width: 100%;
		}
		#mainBG{
			width: 1024px;
			height: 768px;
			background: url('/backgrounds/sanctum.jpg') -110px 0px;
		}
		#createAccount{
			color: #fff;
		}
		#createAccount:hover{
			color: #fff;
		}
		label{
			font-weight: normal;
			display: block;
			margin: .1em 0;
		}
		#login{
			border: 2px groove #357;
		}
		.textLeft, .signupHeader{
			margin-top: .375em;
		}
		.loginInputs{
			background: #132239;
			border: 1px solid #357;
		}
		#tosWrap, #loginVerifyPassword, #promoCode, #loginAccount, .create-account{
			display: block;
		}
		#loginWrap{
			top: 10%;
			bottom: auto;
			padding: 10px 0;
			border-radius: 6px;
			border: 2px ridge #337ab7;
			background: rgba(0,0,0,.9);
			box-shadow: 0 0 4px #000;
		}
	</style>
</head>

<body id="curtain">
	<div id="mainBG">
		<header id="currencyIndicator" class="strongShadow">
		<?php
			echo "<div class='modePanel'>";
				echo "Account Creation";
			echo '</div>';
		?>
		</header>
		<div class="message blackOutline3"></div>
	<?php
		echo 
		'<form id="loginWrap" accept-charset="UTF-8" class="strongShadow" onSubmit="return createAccount(this);">
			<fieldset>
				<div id="createAccountWrap">
					<a id="createAccount" href="/login.php?back=' . $refer . '" class="btn btn-primary strongShadow">Return to Login</a>
				</div>
				
				<label class="textLeft" for="loginEmail">Email Address
					<input name="username" type="text" id="loginEmail" class="loginInputs" maxlength="255" placeholder="Account or Email Address" required="required" />
				</label>
				
				<label class="textLeft" for="password">Password
					<input name="password" type="password" id="password" class="loginInputs" maxlength="20" placeholder="Password" required="required" />
				</label>
				
				<label class="textLeft create-account signupHeader" for="loginAccount">Account Name
					<input name="account" type="text" name="account" id="loginAccount" class="loginInputs create-account" maxlength="16" placeholder="Account Name" required="required" />
				</label>
				
				<label class="signupHeader create-account" for="promoCode">Promo Code
					<input name="promo" type="text" id="promoCode" class="loginInputs create-account" maxlength="20" placeholder="Promo Code" />
				</label>
				
				<label class="signupHeader create-account" for="referFriend">Referral Account Name
					<input name="refer" type="text" id="referFriend" class="loginInputs create-account" maxlength="20" placeholder="Referral Account Name" />
				</label>
				
				<div id="tosWrap" class="create-account">
					<span id="tos" class="aqua">
						<a target="_blank" href="//nevergrind.com/blog/terms-of-service/">Terms of Service</a> | <a target="_blank" href="//nevergrind.com/blog/privacy-policy/">Privacy Policy</a>
					</span>
				</div>
				
				<input id="login" type="submit" value="Create Account" class="btn btn-primary strongShadow" />
			</fieldset>
		</form>';
		echo "<a id='refer' style='display:none' href='{$refer}'></a>";
	?>
	</div><!-- window 2 -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	<script>
	$.ajaxSetup({
		type: 'POST',
		url: '/php/master1.php'
	});
	function QMsg(msg){
		var str = "<p>" + msg + "</p>";
		$(".message").html(str);
	}
	function createAccount(f) {
		if (createAccountLock === true) {
			return false;
		}
		var pw = $("#password").val();
		var acc = $("#loginAccount").val();
		
		var newAcc = acc.replace(/[^a-z0-9]/gi, '');
		if (acc.match(/[a-z0-9]/gi, '').length < acc.length) {
			QMsg("Your account name should only contain letters and numbers.");
			return false;
		}
		if (acc.length < 2) {
			QMsg("Your account name must be more than two characters long.");
			return false;
		}
		if (acc.length > 16) {
			QMsg("Your account name must be less than 16 characters long.");
			return false;
		}
		if (pw.length < 6) {
			QMsg("Your password must be at least six characters long.");
			return false;
		}
		QMsg("Connecting to server...");
		createAccountLock = true;
		$.ajax({
			data: {
				run: "createAccount",
				email: $("#loginEmail").val().toLowerCase(),
				account: newAcc.toLowerCase(),
				password: pw,
				promo: $("#promoCode").val().toLowerCase(),
				referral: $("#referFriend").val().toLowerCase()
			}
		}).done(function(data) {
			if (data.indexOf("Account Created") === -1){
				QMsg(data);
			} else {
				QMsg(data + " Redirecting!");
				setTimeout(function(){
					$("#refer")[0].click();
				}, 100);
			}
			createAccountLock = false;
		}).fail(function() {
			QMsg("Could not contact the server!");
		});
		return false; // prevent form submission
	}
	$('#login').on('click', function() {
		createAccount();
	});
	
	var focusInputs = false,
		createAccountLock = false;
		
	$(".loginInputs").on('focus', function() {
		focusInputs = true;
	}).on('blur', function() {
		focusInputs = false;
	});
	
	$(document).on('keydown',function(e){
		// hit enter
		if(e.keyCode===13){
			createAccount();
		}
	});
	$(function(){
		$("#loginEmail").focus();
	});
	</script>
	<?php
		require($_SERVER['DOCUMENT_ROOT'] . "/includes/ga.html");
	?>
</body>
</html>