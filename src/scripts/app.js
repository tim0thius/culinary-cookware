// product page custom 
$( document ).ready(function() {
	let button = $('#multi-variant-form .product-form--atc-button');
	button.attr('disabled', 'disabled');
	var disable_flag = true;

	$('.quantity.field').change(function() {
		var val = $(this).val();
		
		$(this).attr('value', val);
		var max = parseInt($(this).attr('data-max'), 10);
		var value = (parseInt($(this).val(), 10) || 0);
		if (value > max) { 
		  alert('Sorry, we only have ' + max + ' of this item in stock');
		  $(this).val(max); 
		}

		var nonzeros = $('.quantity.field').filter(function(index){
			return parseInt($(this).val(), 10) > 0;
		});

		console.log(nonzeros.length);

		if(nonzeros.length == 0){
			button.attr('disabled', 'disabled');
		}else{
			button.removeAttr('disabled');
		}		


		// if(value > 0) {
		// 	disable_flag = false;
		// }else{
		// 	$('.quantity.field')not(this).each(function(index){
		// 			if( parseInt($(this).val(), 10) > 0 ){
		// 				disable_flag = false;
		// 			}else{
						
		// 			} 
		// 			console.log(disable_flag);
		// 			console.log(parseInt($(this).val(), 10));
		// 		});
		// }

				

		// if(disable_flag){
		// 	button.attr('disabled', 'disabled');
		// }else{
		// 	button.removeAttr('disabled');
		// }


		// if(value > 0 ){
		// 	// parseInt($('.quantity.field').not(this).attr('value'), 10) > 0
		// 	button.removeAttr('disabled');
		// }else{
		// 	button.attr('disabled', 'disabled');
		// }  
	});
});
