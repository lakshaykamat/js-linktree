const inputElem = document.getElementById('search')
const buttonElem = document.getElementById('button')
const tempElem = document.getElementById('temp')
const placeElem = document.getElementById('place')
const countryElem = document.getElementById('place1')
const descriptionElem = document.getElementById('des')
const mainDivElem = document.getElementById('mainDiv')
let errorMsg = document.getElementById('errorMsg')
let weatherElem = document.getElementById('weather')

const giveStringToApi = () => {
    const searchString = inputElem.value
    console.log(inputElem.value)
    mainApi(searchString)
    inputElem.value = ''
}
const mainApi = (city) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '04f144a486mshf8408ceb53634b3p1ac06cjsnfb9e4811bf3f',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            weatherElem.textContent = ''
            console.log(response.current.temp_c)
            console.log(response.location.region)
            console.log(response.current.condition.icon)
            console.log(response.current.condition.text)
            showTemp(response.current.temp_c)
            showCity(response.location.region, response.location.country)
            showWeather(response.current.condition.icon, response.current.condition.text)
        }).catch(err => console.error(err));
}
const showTemp = (temp) => {
    mainDivElem.style.display = 'flex'
    descriptionElem.textContent =
        tempElem.textContent = `Temp ${temp}°`
}
const showCity = (city, country) => {
    placeElem.textContent = `${city}`
    countryElem.textContent = `${country}`
}
const showWeather = (png, txt) => {
    let img = document.createElement('img');
    img.src = png
    weatherElem.appendChild(img);
    descriptionElem.textContent = txt
}