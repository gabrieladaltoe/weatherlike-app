console.log('hello')

const button = document.querySelector('.search-btn');
const inputValue = document.querySelector('.search-input');


const temperature = document.querySelector('.temperature-number');
const cityName = document.querySelector('.city-name');
const minTemp = document.querySelector('.min-temp-number');
const maxTemp = document.querySelector('.max-temp-number');
const humidity = document.querySelector('.humidity-number');
const card = document.querySelector('#card');

const API_KEY = '708ed0fe5f20562cb2a25246aeb5e605'

card.className = 'empty'


button.addEventListener('click', function(e){
    e.preventDefault()

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {

        console.log(data)
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let minTempValue = data['main']['temp_min'];
        let maxTempValue = data['main']['temp_max'];
        let humidityValue = data['main']['humidity'];
        let icon = data['weather'][0]['icon'];

        temperature.innerHTML = tempValue
        cityName.innerHTML = nameValue
        minTemp.innerHTML = minTempValue
        maxTemp.innerHTML = maxTempValue
        humidity.innerHTML = humidityValue

        card.className = 'filled' 


    })
    .catch(err => alert("Wrong city name"))
    
})

