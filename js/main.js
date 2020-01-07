$(document).ready( function() {
	
	
	
	$('#btn_contacts').click( function() {
		$('.button-inner-item').css('display', 'none');	
		$('.button-inner-item-close').css('display', 'block');
		$('.button-inner-item-telegram, .button-inner-item-viber').css('display', 'block');
		$('.backgroundcolor').css('display', 'block');
		
		var scrollPosition = [
  self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
  self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];
var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

		
			});
			
			$('#btn_contacts-close, .backgroundcolor').click( function() {
		$('.button-inner-item').css('display', 'block');	
		$('.button-inner-item-close').css('display', 'none');
		$('.button-inner-item-telegram, .button-inner-item-viber').css('display', 'none');
			$('.backgroundcolor').css('display', 'none');
			
			var html = jQuery('html');
var scrollPosition = html.data('scroll-position');
html.css('overflow', html.data('previous-overflow'));
window.scrollTo(scrollPosition[0], scrollPosition[1])
			
			});

	
	

}
);


$('#coffe, #cofee2').hover( function() {
$('#cofee2').removeClass('coffe').toggle();	
$('#cofee2').addClass('coffehover').toggle();	   

}) 


$('#coffe, #cofee2').mouseout( function() {
$('#cofee2').removeClass('coffehover');
$('#cofee2').addClass('coffe');	
	   

}) 




