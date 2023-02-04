const dayEl = document.getElementById('days')
const hourEl = document.getElementById('hours')
const minEl = document.getElementById('mins')
const secEl = document.getElementById('seconds')
const achieveEl = document.getElementById('achieve')
const sideBar = document.getElementById('sidebar')
const achievementName = document.getElementById('achieveName')
const quotesEl = document.getElementById('quote')
const relapseEl = document.getElementById('lastrelapse')


//Quotes API
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '04f144a486mshf8408ceb53634b3p1ac06cjsnfb9e4811bf3f',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};
fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    .then(response => response.json())
    .then(response => setQuotes(response.content))
    .catch(err => console.error(err));

//Sidebar
function sidebar () {
    sideBar.style.display = "flex"
}
const closeSideBar = () => {
    sideBar.style.display = "none"
}
//The Main function
function start () {
    let getItem = localStorage.getItem("Inputvalue")//geting the stored item
    if (getItem != "") {//if user did't enter any time to input 

        let inputMilli = new Date(getItem).getTime()//converting to millisecond(user time)
        let currentDate = new Date().getTime()//current time in milliseconds
        let gap = currentDate - inputMilli //subtracting to get the difference

        relapseEl.textContent = "Last Relapsed: " + getItem//shows last replased time
        const time = calculateTime(gap)
        dayEl.textContent = time[0]
        hourEl.textContent = time[1]
        minEl.textContent = time[2]
        secEl.textContent = time[3]
        achievement(time[0])//adding achievement day wise
    } else {
        console.error("Please Enter Some Value")
    }
}
//setting achiviement
const achievement = (day) => {
    if (day >= 0 && day < 3) {
        achieveEl.textContent = "New Bee"
        setStyle(1)
    } else if (day >= 3 && day < 5) {
        achieveEl.textContent = "Private"
        setStyle(2)
    } else if (day >= 5 && day < 7) {
        setStyle(3)
    } else if (day >= 7 && day < 10) {
        achieveEl.textContent = "Master Sergeant"
        setStyle(4)
    } else if (day >= 10 && day < 14) {
        achieveEl.textContent = "Knight"
        setStyle(5)
    } else if (day >= 14 && day < 21) {
        achieveEl.textContent = "Knight-Lieutenant"
        setStyle(6)
    } else if (day >= 21 && day < 30) {
        achieveEl.textContent = "Knight-Captain"
        setStyle(7)
    } else if (day >= 30 && day < 60) {
        achieveEl.textContent = "Knight-Champion"
        setStyle(8)
    } else if (day >= 60 && day < 90) {
        achieveEl.textContent = "Champion of the Light"
        setStyle(9)
    } else if (day >= 90 && day < 120) {
        achieveEl.textContent = "Commander"
        setStyle(10)
    } else if (day >= 120 && day < 150) {
        achieveEl.textContent = "Conqueror"
        setStyle(11)
    } else if (day >= 150 && day < 180) {
        achieveEl.textContent = "Marshal"
        setStyle(12)
    } else if (day >= 180 && day < 240) {
        achieveEl.textContent = "Field Marshal"
        setStyle(13)
    } else if (day >= 240 && day < 300) {
        achieveEl.textContent = "Grand Marshal"
        setStyle(14)
    } else if (day >= 300 && day < 365) {
        achieveEl.textContent = "High Overload"
        setStyle(15)
    } else if (day >= 300 && day < 365) {
        achieveEl.textContent = "High Overload"
        setStyle(16)
    } else if (day >= 365) {
        achieveEl.textContent = "Immortal"
        setStyle(17)
    }
}
function setQuotes (quote) {
    quotesEl.textContent = quote
}
function setStyle (i) {
    for (var j = 1; j <= i; j++) {
        achievementName.children[j].style.outline = "1px solid #00203f"
    }
}
setInterval(start, 1000)
function calculateTime (gap) {//return time gap in the array
    const second = 1000//1 second has 1000 milliseconds
    const minute = second * 60 // coverting minute to milliseconds
    const hour = minute * 60 //converting hour to milliseconds
    const day = hour * 24 //converting day to milliseconds

    let textDay = Math.floor(gap / day) //dividing to get the day passed
    let textHour = Math.floor((gap % day) / hour)
    let textMin = Math.floor((gap % hour) / minute)
    let textSecond = Math.floor((gap % minute) / second)
    const time = [textDay, textHour, textMin, textSecond];
    return time
}
function popup () {
    document.getElementById('popup').classList.add("addpop")
}
function removepop () {
    let input = document.getElementById('input').value//garbing the value
    localStorage.setItem("Inputvalue", input)//storing in a variable
    document.getElementById('popup').classList.remove('addpop')

}