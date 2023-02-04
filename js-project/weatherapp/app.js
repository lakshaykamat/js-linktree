//DOM
const tempElem = document.getElementById('temp')
const tempMinElem = document.getElementById('tempMin')
const tempMaxElem = document.getElementById('tempMax')
const searchElem = document.getElementById('search')
const errorMsg = document.getElementById('errorMsg')
const placeElem = document.getElementById('place')
const weatherElem = document.getElementById('weather')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '04f144a486mshf8408ceb53634b3p1ac06cjsnfb9e4811bf3f',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
};
const stringToArray = ()=>{
    // I have to do 'New%20Delhi'
    const userInput = searchElem.value
    searchElem.value = ''
    mainApi(userInput)
}
const mainApi = (userCity)=>{
fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${userCity}&units=metric`, options)
    .then(response => response.json())
    .then(response => {
        document.getElementById('mainDiv').style.width = 'auto'
        if(response.cod == 404 || response.cod == 400){
            // Error msg if city not found and nothing in Input filed
            errorMsg.textContent = response.message
        }else{
        errorMsg.textContent = ''
        showWeather(response.weather[0].main)
        showTemp(response.main.temp)
        showMinMaxTemp(response.main.temp_min, response.main.temp_max)
        showCity(response.name,response.sys.country)
        }
    })
    .catch(err => console.log(err))
}

const showWeather = (weather) =>{
    weatherElem.textContent = weather
}
const showTemp = (temp) => {
    tempElem.textContent = `Temp ${temp.toFixed(1)}°`
}
const showMinMaxTemp = (min, max) => {
    tempMinElem.textContent = `Min Temp ${min.toFixed(1)}°`
    tempMaxElem.textContent = `Max Temp ${max.toFixed(1)}°`
}
const showCity = (city,country)=>{
    placeElem.textContent = `${city}, ${country}`
}