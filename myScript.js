
var app = {
	initialize: function(){
		$('#submit').click(function() {
			var city = $('#CityInput').val();
			var myApiID = 'APPID=b8fa89ce01d350743d89dc466f6ec135';
			var units = 'units=imperial';

			$.ajax({
				 url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&' + myApiID + '&' + units, 
				 type: 'GET',
				 dataType: 'json',
				 error: function(data){
				 	alert("Please enter a valid city name and ensure that you have internet connection.");
				 	//make separate alerts for different errors (e.g. invalid name and no internet connection)
				 },
				 success: function(data){
				 	console.log(data);
				 	$('#displayTemp').html('The current temperature in ' + city+ ' is ' + data.main.temp)
				 }

			});

		});
	}
}

    
