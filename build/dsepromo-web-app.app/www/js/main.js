

$(function() {
	$('.button.email').click(function() {
		// console.log('you should email shelley');
		// alert('you should email shelley');
		var mailUI = new EmailComposer();
		mailUI.showEmailComposer('Message for Shelley from mobile app', 'BODYBODY', 'shelley.oliver@dsepromo.com');
		mailUI = null;
	});

//	$('.button.dsepromo').click(function() {
		// window.location.assign('http://diversifiedsourcingent.espwebsite.com/');
//		$.mobile.loading( 'show' , {
//			text: 'Going to the mall!',
//			textVisible: true,
//			theme: 'e'
//		});
//	});

//	$(window).unload(function() {
//		$.mobile.loading( 'hide' );
//	});
});


