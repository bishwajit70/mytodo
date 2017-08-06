$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
});
$('input[type="text"]').on('keypress', function(event){
	//console.log("You press a key");
	//console.log(event);
	if (event.which === 13) {
		//console.log("You pressed enter button");
		var result = $(this).val();
		$('ul').prepend('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span>'+ result +'</li>');
		$(this).val('');
	};
});
$('.fa-plus').on('click', function(){
	$('input[type="text"]').slideToggle();
})