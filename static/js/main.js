$(document).ready(function(){

	$('.guest-rsvp-yes').click(function(){
		$('.basic-rsvp').hide();
		$('.attending').show();
	});

	$('.guest-rsvp-no').click(function(){
		$('.basic-rsvp').hide();
		$('.no-show').show();
	});

	$('.guest-lookup').click(function(){
		goGetEm();
	});

	$('.guest-submit').click(function(){
		saveIt();
	});

	function goGetEm(){
		var guestinput = $('.guestinput').val();
		$.getJSON("lib/get.php?id=" + guestinput , function(data) {
			var name = data.name;
			var meals = data.seats;
			var email = data.email;
			renderValues(name, meals, email);
		});
		flipSteps(1,2);
	}

	function renderValues(name, meals, email){
		$('.guestname').text(name);
		$('.guestmeals').text(meals);
		$('.guestemail').val(email);
	}

	function saveIt(){
		var idToSubmit = $('.guestinput').val();
		var newemail = $('input[name=guestemail]').val();
		var dataString = 'id=' + idToSubmit + '&guest_email=' + newemail;
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

	function flipSteps(current,next){
		$('.step-' + current).hide();
		$('.step-' + next).show();
	}

});