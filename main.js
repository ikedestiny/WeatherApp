const apiKey ="dcdfc79d3b7e614a7c580c8f7803aa80";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');

let icon = document.querySelector('.weather-icon');



async function checkWeather(city){
    const response = await fetch(apiUrl+`${city}`);
        if(response.status==404||response.status==400){
            document.querySelector('.error').style.display='block';
            document.querySelector('.weather').style.display='none';

        }else{
            var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/h";

    const weather = data.weather[0].main;

    if(weather == 'Clear'){
        icon.src = "images/clear.png";
    }else if(weather == 'Clouds'){
        icon.src = "images/clouds.png"
    }else if(weather == 'Rain'){
        icon.src = "images/rain.png";
    }else if(weather =='Drizzle'){
        icon.src="images/drizzle.png";
    }else if(weather=='Mist'){
        icon.src="images/mist.png";
    }else if(weather=="Snow"){
        icon.src="images/snow.png";
    }

    document.querySelector('.weather').style.display='block';
    document.querySelector('.error').style.display='none';

        }
    

}


    searchButton.addEventListener("click",()=>{checkWeather(searchBox.value)
    })



