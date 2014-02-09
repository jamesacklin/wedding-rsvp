$(document).ready(function(){

	// Global variables
	var attending = 0;
	var mealList = [];

	// Set up RSVP based on input number.
	$('.guest-lookup').click(function(){
		var guestinput = $('.guestinput').val();
		goGetEm(guestinput);
		flipSteps(1,2);
	});

	// Loookup row #
	function goGetEm(guestinput){
		$.getJSON("lib/get.php?id=" + guestinput , function(data) {
			var name = data.name;
			var meals = data.seats;
			var email = data.email;
			renderValues(name, meals, email);
		});
	}

	// Populate front-end with guest details
	function renderValues(name, meals, email){
		$('.guestname').text(name);
		$('.guestmeals').text(meals);
		$('.ingroup').val(meals).attr('max',meals);
		defHeadcount(meals);
		$('.guestemail').val(email);
	}

	// Handle RSVP Yes.
	$('.guest-rsvp-yes').click(function(){
		// At the very least, one person is attending.
		$('.basic-rsvp').hide();
		$('.attending').show();
		makeIndividuals(headcount);
		serializeIndividuals();
	});

	// Change attendance status.
	function defHeadcount(number){
		headcount = number;
	}

	// Make the correct number of individual guest name / meal form sections
	function makeIndividuals(headcount){
		for (i = 1; i <= headcount; i++){
			$('.individual-template').clone().removeClass('individual-template').addClass('individual').appendTo('.individual-responses');
		}
	}

	// Serialize all the IDs and names nicely
	function serializeIndividuals(){
		$('.individual').each(function(index){
			var i = index + 1;
			var thisElem = $(this);
			thisElem.find('.attendee-name').attr({
				'id': 'attendee-name-' + i,
				'name': 'attendee-name-' + i
			});
			thisElem.find('.attendee-number').text(i);
			thisElem.find('input[type=radio]').attr({
				'name': 'meal-option-' + i
			});
		});
	}

	// Change "attending" value based on number the invitee says are coming
	$('.ingroup').change(function(){
		var newValue = $(this).val();
		defHeadcount(newValue);
		$('.individual-responses').empty();
		makeIndividuals(headcount);
		serializeIndividuals();
	});


	function tallyMeals(){
		for (i = 1; i <= headcount; i++){
			var respondent = [];
			respondent[0] = $('input[name=attendee-name-' + i + ']').val();
			respondent[1] = $('input[name=meal-option-' + i + ']:checked').val();
			mealList.push(respondent);
		}
	}


	// Handle RSVP submit.
	$('.guest-submit').click(function(){
		var finalCount = $('.ingroup').val();
		defHeadcount(finalCount);
		tallyMeals();
		saveIt();
	});

	// AJAX post to store values
	function saveIt(){
		var idToSubmit = $('.guestinput').val();
		var newemail = $('input[name=guestemail]').val();
		var dataString = 'id=' + idToSubmit + '&attending=' + headcount + '&meals=' + mealList + '&guest_email=' + newemail;
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

	// Handle RSVP No.
	$('.guest-rsvp-no').click(function(){
		attendanceNumber(0);
		saveIt();
		$('.basic-rsvp').hide();
		$('.no-show').show();
	});

	// Hide completed step, show next step
	function flipSteps(current,next){
		$('.step-' + current).hide();
		$('.step-' + next).show();
	}

});

