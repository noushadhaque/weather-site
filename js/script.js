
const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

function searchTemperature(){
    const cityInput = document.getElementById('city-input');
    const cityName = cityInput.value;
    cityInput.value = "";
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

const setInnerText = (id, input) => {
    document.getElementById(id).innerText = input;
}

const displayWeather = temperature => {
    // console.log(temperature.weather[0].main);
    setInnerText("city", temperature.name);
    // const city = document.getElementById('city');
    // city.innerText = temperature.name;
    setInnerText('city-temp', temperature.main.temp);
    // const cityTemp = document.getElementById('city-temp');
    // cityTemp.innerText = temperature.main.temp;
    setInnerText('temp-condition', temperature.weather[0].main);
    // const tempCondition = document.getElementById('temp-condition');
    // tempCondition.innerText = temperature.weather[0].main;

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);
};