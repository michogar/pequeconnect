function calculate_price() {
	var centros = parseInt($('#centros').val());
	
	if (isNaN(centros)) {
		$('#centros').val(1000);
	}
	
	var precio = 0;
	if (centros === 1 ) {
		precio = 0.99;
	} else if (centros > 1 && centros <= 5) {
		precio = (4.2179 - (0.21 * centros)) / 4.01;
	} else if (centros > 5 && centros <= 100) {
		precio = (79 - (0.2 * centros))/100;
	} else {
		precio = 0.59;
	}
	
	$('.price').text(precise_round(precio, 2));
	$('.price-result').fadeIn(400);
}

function precise_round(num,decimals) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

$(function() {

	$('#myModal1').modal('hide');
	$('#myModal2').modal('hide');
	$('.price-result').hide();

}); 