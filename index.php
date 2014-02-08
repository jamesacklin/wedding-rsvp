<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>RSVP-O-Matic</title>
</head>
<body>

	<div class="step-1">
		<h3>Please enter your invitation number</h3>
		<input type="text" class="guestinput">
		<button class="guest-lookup">Next &rarr;</button>
	</div>

	<div class="step-2" style="display: none;">
		<h2>Hello, <span class="guestname"></span>!</h2>

		<div class="basic-rsvp">
			<p>Will you be attending our wedding on May 10, 2014?</p>
			<button class="guest-rsvp-yes">Absolutely</button>
			<button class="guest-rsvp-no">Respectfully, No</button>
		</div>

		<div class="attending" style="display: none;">
			<p>Great to have you with us!</p>

			<p>Your party allows for <span class="guestmeals"></span> people (including yourself). How many of you are attending?</p>
			<div class="row">
				<label for="ingroup">
					Party Size
					<input type="number" class="ingroup" name="ingroup" min="1" />
				</label>
			</div>

			<div class="row">
				<label for="guestemail">Email Address
					<input type="email" name="guestemail" class="guestemail" placeholder="e.g., name@gmail.com"></label>
				</div>

				<button class="guest-submit">RSVP</button>
			</div>

		</div>

		<div class="step-3" style="display: none;">
			<h2>Thank You</h2>
			<div class="attending" style="display: none;">
				<p>Thanks for RSVPing. See you on May 10!</p>
			</div>
			<div class="no-show" style="display: none;">
				<p>We're sorry to hear that. You'll be there in spirit. Thanks for letting us know!</p>
			</div>
		</div>

		<script src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script src="static/js/main.js"></script>

	</body>
	</html>