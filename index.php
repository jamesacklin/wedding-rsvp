<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>RSVP-O-Matic</title>
	<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

	<div class="container-fluid">

		<div class="step-1">
			<h3>Please enter your invitation number</h3>
			<input type="text" class="guestinput">
			<button class="guest-lookup btn btn-default">Next &rarr;</button>
		</div>

		<div class="step-2" style="display: none;">
			<h2>Hello, <span class="guestname"></span>!</h2>

			<div class="basic-rsvp">
				<p>Will you be attending our wedding on May 10, 2014?</p>
				<button class="guest-rsvp-yes btn btn-default">Absolutely</button>
				<button class="guest-rsvp-no btn btn-default">Respectfully, No</button>
			</div>

			<div class="attending" style="display: none;">

				<p>Great to have you with us!</p>
				<p>Your party allows for <span class="guestmeals"></span> people (including yourself). How many of you are attending?</p>

				<div class="form-group party-size">
					<label for="ingroup">Party Size</label>
					<input type="number" class="ingroup form-control" name="ingroup" min="1" />
				</div>

				<div class="individual-responses row">
				</div>

				<div class="form-group email-address">
					<label for="guestemail">Email Address</label>
					<input type="email" name="guestemail" class="guestemail form-control" placeholder="e.g., name@gmail.com">
				</div>

				<div class="debug"></div>

				<button class="guest-submit btn btn-primary">RSVP</button>

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

	</div>


	<div style="display: none;">
		<div class="col-sm-6 individual-template">
			<div class="panel panel-default">
				<div class="panel-heading">
					<strong>Guest <span class="attendee-number"></span></strong>
				</div>
				<div class="panel-body">
					<div class="form-group">
						<label for="attendee-name">Name</label>
						<input type="text" id="attendee-name-" class="attendee-name form-control" name="attendee-name-">
						<div class="radio">
							<label>
								<input type="radio" name="meal-option-" value="chicken">
								Chicken
							</label>
						</div>
						<div class="radio">
							<label>
								<input type="radio" name="meal-option-" value="fish">
								Fish
							</label>
						</div>
						<div class="radio">
							<label>
								<input type="radio" name="meal-option-" value="veg">
								Vegetarian
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="static/js/main.js"></script>

</body>
</html>