$(document).ready( function() {
	
	
	
	$('#btn_contacts').click( function() {
		$('.button-inner-item').css('display', 'none');	
		$('.button-inner-item-close').css('display', 'block');
		$('.button-inner-item-telegram, .button-inner-item-viber').css('display', 'block');
			});
			
			$('#btn_contacts-close').click( function() {
		$('.button-inner-item').css('display', 'block');	
		$('.button-inner-item-close').css('display', 'none');
		$('.button-inner-item-telegram, .button-inner-item-viber').css('display', 'none');
			});

	
	

}
);



