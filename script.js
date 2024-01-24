const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78feb73930mshf4b338844d049a8p1945b6jsnebfcc4f9d49b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const GetWeather = function (city) {
	cityname.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			temp.innerHTML = response.temp
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp

			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity

			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err))

}

let submit = document.getElementById("submit")
submit.addEventListener('click', (e) => {
	let city = document.getElementById('city')

	e.preventDefault()
	GetWeather(city.value);
})

//byDefault Run 
GetWeather("Lahore")



//others country
// 1.Lahore
let lahore = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78feb73930mshf4b338844d049a8p1945b6jsnebfcc4f9d49b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let lahoreCountry = function (city) {

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, lahore)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			L_t.innerHTML = response.temp
			L_mnt.innerHTML = response.min_temp
			L_mxt.innerHTML = response.max_temp
			L_cp.innerHTML = response.cloud_pct
			L_fl.innerHTML = response.feels_like
			L_h.innerHTML = response.humidity
			L_ws.innerHTML = response.wind_speed
			L_wd.innerHTML = response.wind_degrees
			L_sr.innerHTML = response.sunrise
			L_ss.innerHTML = response.sunset

		})
		.catch(err => console.error(err))
}
lahoreCountry("lahore")


//2.karachi
let karachi = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78feb73930mshf4b338844d049a8p1945b6jsnebfcc4f9d49b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let karachiCountry = function (city) {

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, karachi)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			K_t.innerHTML = response.temp
			K_mnt.innerHTML = response.min_temp
			K_mxt.innerHTML = response.max_temp
			K_cp.innerHTML = response.cloud_pct
			K_fl.innerHTML = response.feels_like
			K_h.innerHTML = response.humidity
			K_ws.innerHTML = response.wind_speed
			K_wd.innerHTML = response.wind_degrees
			K_sr.innerHTML = response.sunrise
			K_ss.innerHTML = response.sunset

		})
		.catch(err => console.error(err))
}
karachiCountry("karachi")



//3.sindh
let sindh = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78feb73930mshf4b338844d049a8p1945b6jsnebfcc4f9d49b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let sindhCountry = function (city) {

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, sindh)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			S_t.innerHTML = response.temp
			S_mnt.innerHTML = response.min_temp
			S_mxt.innerHTML = response.max_temp
			S_cp.innerHTML = response.cloud_pct
			S_fl.innerHTML = response.feels_like
			S_h.innerHTML = response.humidity
			S_ws.innerHTML = response.wind_speed
			S_wd.innerHTML = response.wind_degrees
			S_sr.innerHTML = response.sunrise
			S_ss.innerHTML = response.sunset

		})
		.catch(err => console.error(err))
}
sindhCountry("sindh")


//4.islamabad
let islamabad = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78feb73930mshf4b338844d049a8p1945b6jsnebfcc4f9d49b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let islamabadCountry = function (city) {

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, islamabad)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			I_t.innerHTML = response.temp
			I_mnt.innerHTML = response.min_temp
			I_mxt.innerHTML = response.max_temp
			I_cp.innerHTML = response.cloud_pct
			I_fl.innerHTML = response.feels_like
			I_h.innerHTML = response.humidity
			I_ws.innerHTML = response.wind_speed
			I_wd.innerHTML = response.wind_degrees
			I_sr.innerHTML = response.sunrise
			I_ss.innerHTML = response.sunset

		})
		.catch(err => console.error(err))
}
islamabadCountry("islamabad")