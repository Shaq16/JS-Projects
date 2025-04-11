const apiKey="9278a9ccacf01a84771ceab98f619479"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBtn=document.querySelector("#searchBtn")
const search=document.querySelector("#search")
async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`)
    let data = await response.json()
    console.log(data); 
    if(response.status=="undefined"){
        alert("City not found")
        return
    }

    if (search.value==="") {
        alert("Please enter a city name")
        return
    }
    if(data.cod=="404"){
        alert("City not found")
        return
    }

    document.querySelector("#city").innerHTML=data.name
    document.querySelector("#temp").innerHTML=`${data.main.temp} °C`
    document.querySelector("#humidity").innerHTML=`${data.main.humidity}%`
    document.querySelector("#windspeed").innerHTML=`${data.wind.speed} km/h`
    const description = data.weather[0].main
    const image=document.querySelector(".weather img")

    switch(description){
        case "Clear":
            image.src="images/sun.png"
            break;
        case "Clouds":
            image.src="images/cloudy.png"
            break;
        case "Rain":
            image.src="images/heavy-rain.png"
            break;
        case "Thunderstorm":
            image.src="images/storm.png"
            break;
        case "Snow":
            image.src="images/snow.png"
            break;
        default:
            image.src="images/sun.png"
    }
    
    document.querySelector(".description").innerHTML=data.weather[0].description
    document.querySelector(".details").style.display="flex";
    document.querySelector(".weather").style.display="flex";


}

searchBtn.addEventListener("click",function(){
    const city=search.value
    checkWeather(city)
})

