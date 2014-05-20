	/*	menu btn listners	*/
$( "#horario" ).click(function() {
  $("#container").load("index.html");
	// so that the menu collapse after the user clicks on this optn
	$('.collapse-button').trigger('click');
});

$( "#ementa" ).click(function() {
		
	$('.collapse-button').trigger('click');
	$('#content').append("<iframe id='frame_ementa' src='ementa.html' width='100%' height='400px'></iframe>");
	

	$('#frame_ementa').load(function() {
    	$('#frame_ementa').show();
	});
});

$( "#contactos" ).click(function() {

	$('.collapse-button').trigger('click');
});

$( "#sobre" ).click(function() {

	$('.collapse-button').trigger('click');
});

