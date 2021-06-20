console.log('hello')

const button = document.querySelector('.search-btn');
const inputValue = document.querySelector('.search-input');


const temperature = document.querySelector('.temperature-number');
const cityName = document.querySelector('.city-name');
const minTemp = document.querySelector('.min-temp-number');
const maxTemp = document.querySelector('.max-temp-number');
const humidity = document.querySelector('.humidity-number');
const icon = document.querySelector('.temperature-icon')
const card = document.querySelector('#card');

const API_KEY = '708ed0fe5f20562cb2a25246aeb5e605'

card.className = 'empty'


button.addEventListener('click', function(e){
    e.preventDefault()

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {

        const iconSrc = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        data.weather[0]["icon"]
      }.svg`;



        console.log(data)
        console.log(icon)
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let minTempValue = data['main']['temp_min'];
        let maxTempValue = data['main']['temp_max'];
        let humidityValue = data['main']['humidity'];
    

        temperature.innerHTML = Math.floor(tempValue)
        cityName.innerHTML = nameValue
        minTemp.innerHTML = Math.floor(minTempValue)
        maxTemp.innerHTML = Math.floor(maxTempValue)
        humidity.innerHTML = humidityValue
        icon.src = iconSrc

        card.className = 'filled' 


    })
    .catch(err => alert("Wrong city name"))
    
})

