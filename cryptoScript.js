function getBTCPrice(){
	var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD";
	$.getJSON(url, function(data) {

		var dataJSON = data.JSON;
		var dataRAW = data.dataJSON;
		var dataBTC = data.dataRAW;
		var dataUSD = data.dataBTC;
		var price = dataUSD[PRICE];

		console.log(price);
		//var weatherConditions = data.weather[0]['description'];

		//document.getElementById("villanovaWeatherConditions").innerHTML = weatherConditions;
	});
}