$(document).ready(function(){

	// Nobody is attending by default, until they RSVP.
	var attending = 0;

	// Set up RSVP based on input number.
	$('.guest-lookup').click(function(){
		var guestinput = $('.guestinput').val();
		goGetEm(guestinput);
	});

	// Handle RSVP Yes.
	$('.guest-rsvp-yes').click(function(){
		// At the very least, one person is attending.
		attendanceNumber(1);
		$('.basic-rsvp').hide();
		$('.attending').show();
	});

	// Handle RSVP No.
	$('.guest-rsvp-no').click(function(){
		attendanceNumber(0);
		saveIt();
		$('.basic-rsvp').hide();
		$('.no-show').show();
	});

	// Handle RSVP submit.
	$('.guest-submit').click(function(){
		var newValue = $('.ingroup').val();
		attendanceNumber(newValue);
		saveIt();
	});

	// Change attendance status.
	function attendanceNumber(number){
		attending = number;
	}

	// Loookup row #
	function goGetEm(guestinput){
		$.getJSON("lib/get.php?id=" + guestinput , function(data) {
			var name = data.name;
			var meals = data.seats;
			var email = data.email;
			renderValues(name, meals, email);
		});
		flipSteps(1,2);
	}

	// Populate front-end with guest details
	function renderValues(name, meals, email){
		$('.guestname').text(name);
		$('.guestmeals').text(meals);
		$('.ingroup').val(meals).attr('max',meals);
		$('.guestemail').val(email);
	}

	// Change "attending" value based on number the invitee says are coming
	$('.ingroup').change(function(){
		var newValue = $(this).val();
		attendanceNumber(newValue);
	});


	// AJAX post to store values
	function saveIt(){
		var idToSubmit = $('.guestinput').val();
		var newemail = $('input[name=guestemail]').val();
		var dataString = 'id=' + idToSubmit + '&attending=' + attending + '&guest_email=' + newemail;
		$.ajax({
			type: "POST",
			url: "lib/store.php",
			data: dataString,
			success: function(){
				flipSteps(2,3);
			}
		});
		return false;
	}

	// Hide completed step, show next step
	function flipSteps(current,next){
		$('.step-' + current).hide();
		$('.step-' + next).show();
	}

});