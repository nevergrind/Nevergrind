<?php
	session_start();
	
	if($_SERVER["SERVER_NAME"] === "localhost"){
		error_reporting(E_ALL);
		ini_set('display_errors', true);
	}
	require('php/values.php');
	
	if (isset($_SESSION['email'])){
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
		#curtain{
			visibility: hidden;
		}
		#currencyIndicator{
			width: 100%;
		}
		#mainBG{
			width: 1024px;
			height: 768px;
			background: url('/backgrounds/sanctum.jpg') -110px 0px;
		}
		label{
			font-weight: normal;
			display: block;
			margin: .1em 0;
		}
		#login{
			border: 2px groove #357;
		}
		#createAccount{
			color: #fff;
		}
		#createAccount:hover{
			color: #fff;
		}
		#forgotPassword{
			color: #fff;
		}
		.textLeft, .signupHeader{
			margin-top: .375em;
		}
		.loginInputs{
			background: #132239;
			border: 1px solid #357;
		}
		.hide{
			display: none;
		}
		#rememberMe{
			position: relative;
			top: 2px;
		}
		#loginWrap{
			bottom: 30%;
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
				echo "Login to Nevergrind.com";
			echo '</div>';
		?>
		</header>
		<div class="message blackOutline3"></div>
	<?php
		if (isset($_GET['reset'])){
			echo 
				'<form id="loginWrap" class="strongShadow">
					<div>Reset Your Password</div>
					<div class="textLeft">Password</div>
					<input type="password" id="resetPassword" class="loginInputs" maxlength="20" placeholder="Password" />
					<div class="textLeft">Re-type Password</div>
					<input type="password" id="resetVerifyPassword" class="loginInputs" maxlength="20" placeholder="Verify Password" />
					<div id="resetPW" class="strongShadow NGgradient">Reset Password</div>
				</form>';
		} else {
			echo 
				'<form id="loginWrap" accept-charset="UTF-8" class="strongShadow" onSubmit="return authenticate(this);">
					<fieldset>
						<div id="createAccountWrap">
							<a id="createAccount" href="/createAccount.php?back=' . $refer . '" class="btn btn-primary strongShadow">Create Account</a>
						</div>
						
						<label class="textLeft" for="loginEmail">Account or Email Address
							<input name="username" type="text" id="loginEmail" class="loginInputs" maxlength="255" placeholder="Account or Email Address" required="required" />
						</label>
						
						<label class="textLeft" for="password">Password
							<input name="password" type="password" id="password" class="loginInputs" maxlength="20" placeholder="Password" required="required" />
						</label>
						
						<label for="rememberMe">
							<input type="checkbox" id="rememberMe" name="rememberMe" checked> Remember Me
						</label>
						
						<input id="login" type="submit" value="Login" class="btn btn-primary strongShadow" />
						 
						<div id="forgotPasswordWrap">
							<span title="Neverworks Games will send you an email. Click the link to reset your password." id="forgotPassword">Forgot Password?</span>
						</div>
					</fieldset>
				</form>';
		}
		echo "<a id='refer' style='display:none' href='{$refer}'></a>";
	?>
	</div>
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
	$('#login').on('click', function() {
		authenticate();
	});
	$("#forgotPassword").on('click', function() {
		if (this.textContent === "Checking...") {
			return;
		}
		var email = $("#loginEmail").val().toLowerCase();
		var msg = "Forgot Password?";
		$("#forgotPassword").text("Checking...");
		if (!email || email.length < 3) {
			QMsg("Enter a valid email address");
			$("#forgotPassword").text(msg);
			return;
		}
		QMsg("Checking account status...");
		$.ajax({
			data: {
				run: "forgotPassword",
				email: email
			}
		}).done(function(data){
			QMsg(data, 0, 0, 8000);
			$("#forgotPassword").text(msg);
		});
	});
	
	var focusInput = false,
		authenticationLock = false;
		
	$(".loginInputs").on('focus', function() {
		focusInput = true;
	}).on('blur', function() {
		focusInput = false;
	});
	
	$(document).on('keydown',function(e){
		// hit enter
		if(e.keyCode === 13){
			authenticate();
		}
	});
	function authenticate(f) {
		if (authenticationLock === true) {
			return false;
		}
		if ($("#loginEmail").val().length < 3) {
			QMsg("This is not a valid email address.");
			return false;
		}
		if ($("#password").val().length < 6 && !token) {
			QMsg("Passwords must be at least six characters long.");
			return false;
		}
		var login = $("#loginEmail").val().toLowerCase();
		var setToken = false;
		if ($("#rememberMe").prop('checked')){
			localStorage.setItem('email', login);
			localStorage.setItem('token', token);
			setToken = true;
		} else {
			localStorage.removeItem('email');
		}
		QMsg("Connecting to server...");
		authenticationLock = true;
		
		$.ajax({
			type: 'POST',
			data: {
				run: "authenticate",
				email: login,
				password: $("#password").val()
			}
		}).done(function(data){
			gotoRefer(data);
		}).fail(function() {
			QMsg("Could not contact the server!");
		}).always(function(){
			authenticationLock = false;
		});
		return false; // prevent form submission
	}
	function tokenAuthenticate(){
		$.ajax({
			type: 'POST',
			data: {
				run: "authenticate",
				email: email,
				token: token
			}
		}).done(function(data){
			gotoRefer(data, true);
		}).always(function(){
			document.getElementById('curtain').style.visibility = 'visible';
		});
	}
	function gotoRefer(data, suppress){
		var target = "https://" + location.host + $("#refer").attr("href");
		if (data === "Login successful!"){
			location.replace(target);
		} else {
			if (!suppress){
				QMsg(data);
			}
		}
	}
	
	(function(){
		var e = document.getElementById('curtain');
		email = localStorage.getItem('email');
		token = localStorage.getItem('token');
		if (email){
			// attempt persistent login
			$("#loginEmail").val(email);
			if (token){
				tokenAuthenticate();
			} else {
				$("#password").focus();
				$.ajax({
					type: 'POST',
					data: {
						run: "getToken",
						email: email
					}
				}).done(function(data){
					token = data;
				}).always(function(){
					document.getElementById('curtain').style.visibility = 'visible';
				});
			}
		} else {
			$("#loginEmail").focus();
			document.getElementById('curtain').style.visibility = 'visible';
		}
	})();
	</script>
	<?php
		require($_SERVER['DOCUMENT_ROOT'] . "/includes/ga.html");
	?>
</body>
</html>