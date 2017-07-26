
var app = {
	initialize: function(){
		console.log('hello there');
		$('#submit').click(function() {
			console.log('haha')
			var city = $('#CityInput').val();
			var myApiID = 'APPID=b8fa89ce01d350743d89dc466f6ec135';
			var url = 'api.openweathermap.org/data/2.5/weather?q=' + city + '&' + myApiID;

			$.get('url', function(data){
				console.log(data)
			});
		});
	}
}

    
