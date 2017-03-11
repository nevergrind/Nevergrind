<?php
	session_start();
	if(php_uname('n')=="JOE-PC"){
		error_reporting(E_ALL);
		ini_set('display_errors', true);
	}
	require('php/values.php');
	
	if (!isset($_GET['reset'])){
		unset($_SESSION['reset']);
		unset($_SESSION['tempEmail']);
		exit();
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Nevergrind | Password Reset</title>
	<link rel='stylesheet' type='text/css' href="/css/global.css">
	<meta name="viewport" content="width=1280,user-scalable=no">
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
	</style>
</head>

<body id="curtain">
	<div id="mainBG">
		<header id="currencyIndicator" class="strongShadow">
		<?php
			if($_SESSION['protocol']=="https:"){
				require_once('php/connect_plain.php');
				// crystals
				$query = "select crystals from accounts where email='".$_SESSION['email']."' limit 1";
				$result = $link->query($query);
				$crystals = '';
				while($row = $result->fetch_assoc()){
					$crystals .= $row['crystals'];
				}
				
				echo '<div class="accountDetails">
					<div id="crystals" class="crystalIcon accountValues"></div>
					<div id="crystalCount" class="accountValueText2">'.$crystals.'</div>
				</div>';
				echo "<div class='modePanel'>";
					echo "Reset Password";
				echo '</div>';
			}
			?>
		</header>
		
		<?php
			if($_SESSION['protocol']=="https:"){
				$showReset = true;
				$checkHash = true;
				
				echo '<div class="message blackOutline3">';
				
				$_SESSION['reset'] = $_GET['reset'];
				$hash = crypt($_SESSION['reset'], '$2a$07$'.$_SESSION['salt'].'$');
				$verify = crypt($_SESSION['reset'], $hash);
				
				require("php/connect1.php");
				// 1-hour valid token - check if expired
				$query = "select email from resetpassword where reset='".$_SESSION['reset']."' and timestamp>date_sub(now(), interval 1 hour)";
				$stmt = $link->prepare($query);
				$stmt->execute();
				$stmt->store_result();
				if($stmt->num_rows==0){
					echo "<p>Your token has expired. Tokens are valid for one hour. Reset your password again at <a href='//nevergrind.com'>Nevergrind</a>.</p>";
					$showReset = false;
					$checkHash = false;
				} else {
					// email token found - set temp email
					$stmt->bind_result($stmtEmail);
					while($stmt->fetch()){
						$_SESSION['tempEmail'] = $stmtEmail;
					}
				}
				
				
				
				// hash token and make sure it matches
				if($checkHash){
					$query = "select hashedReset from accounts where email=? limit 1";
					if($stmt = $link->prepare($query)){
						$stmt->bind_param('s', $_SESSION['tempEmail']);
						$stmt->execute();
						$stmt->store_result();
						$count = $stmt->num_rows;
						$stmt->bind_result($stmtPassword);
						$dbPassword = '';
						while($stmt->fetch()){
							$dbPassword = $stmtPassword;
						}
						if($dbPassword!=$verify){
							// receives this error if they clicked twice or the token is wrong
							echo "<p>{$_SESSION['tempEmail']} Password reset failed due to mismatched or expired string! If you believe this is in error, contact <a href='mailto:support@nevergrind.com'>support@nevergrind.com</a> or visit <a href='//nevergrind.com'>Nevergrind</a> to reset your password again.</p>";
							// exit if not localhost
							$showReset = false;
						}else{
							// sets hashedReset to nothing; only works once
							$query = 'update accounts set hashedReset="" where email=?';
							$stmt = $link->prepare($query);
							$stmt->bind_param('s', $_SESSION['tempEmail']);
							$stmt->execute();
						}
					}
				}
				
				echo '</div>';
				// end
				if(isset($_GET['reset']) && $showReset){
					echo 
					'<form id="loginWrap" class="strongShadow">
						<div>Reset Your Password</div>
						<div class="textLeft">Password</div>
						<input type="password" id="resetPassword" class="loginInputs strongShadow" maxlength="20" placeholder="Password">
						<div class="textLeft">Re-type Password</div>
						<input type="password" id="resetVerifyPassword" class="loginInputs strongShadow" maxlength="20" placeholder="Verify Password">
						<div id="resetPW" class="strongShadow NGgradient">Reset Password</div>
					</form>';
				}
			}
		?>
	</div><!-- window 2 -->
	
	<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	<?php
		require($_SERVER['DOCUMENT_ROOT'] . "/includes/ga.html");
	?>
	<script>
		
		var lock = false;
		
		$("#resetPW").on('click', function() {
			if (lock){
				return;
			}
			if ($("#resetPassword").val() !== $("#resetVerifyPassword").val()) {
				$(".message").html("<p>Your passwords do not match.</p>");
				return;
			}
			if ($("#resetPassword").val().length < 6) {
				$(".message").html("<p>Your password be at least six characters long.</p>");
				return;
			}
			$(".message").html("<p>Connecting to server...</p>");
			lock = true;
			$.ajax({
				type: 'POST',
				url: '/php/master1.php',
				data: {
					run: "resetPW",
					password: $("#resetPassword").val(),
					verify: $("#resetVerifyPassword").val()
				}
			}).done(function(data){
				if (data === "Password Reset Successful.") {
					document.getElementById('loginWrap').style.display = 'none';
					$(".message").html("<p>Your password has been reset!</p>" +
						"<p><a href='/'>Play Nevergrind</a></p>" +
						"<p><a href='/games/firmament-wars'>Play Firmament Wars</a></p>");
				} else {
					$(".message").html("<p>There was a server error when resetting your password.</p>");
				}
			}).fail(function() {
				$(".message").html("<p>Could not contact the server!</p>");
			}).always(function() {
				lock = false;
			});
		});
	</script>
</body>
</html>