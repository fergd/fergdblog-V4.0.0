var $headerNav = $('.header-inner');

$headerNav.waypoint(function(direction){
	
	if (direction == 'down'){
		console.log('Waypoint down');
		$headerNav.addClass('stick');
	}else{
		$headerNav.removeClass('stick');
		console.log('Waypoint up');
	}
});
