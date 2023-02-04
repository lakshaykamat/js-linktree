const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')
const dateEl = document.getElementById('date')
const dayEl = document.getElementById('day')
const monthEl = document.getElementById('month')
const yearEl = document.getElementById('year')
const completedDaysEl = document.getElementById('completedDays')
const remainingDaysEl = document.getElementById('remainingDays')
let weekdaysName = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"]
let monthsName = ["January","February","March","April","May","June","July","August","September","October","November","December"]


function currentTime(){
    const firstDay = new Date("01 Jan 2023").getTime()//to calculate completed days in this year
    const currentDay = new Date().getTime()//current time in milliseconds
    let gap = currentDay - firstDay//getting the difference
    const totalDay = Math.floor(gap /(24 * 60 * 60 * 1000))//divide by total milliseconds in a day hours*minutes*seconds*milliseconds
    const remainingDays = 365 - totalDay
    const date = new Date().getDate()
    const month = new Date().getMonth()
    const day = new Date().getDay()
    const year = new Date().getFullYear()
    const hourtime = new Date().getHours()
    const minstime = new Date().getMinutes()
    const secondstime = new Date().getSeconds()
    hoursEl.textContent = hourtime
    minsEl.textContent = minstime
    secondsEl.textContent = secondstime
    dateEl.textContent = date
    dayEl.textContent = weekdaysName[day]
    monthEl.textContent = monthsName[month]
    yearEl.textContent = year
    completedDaysEl.textContent = totalDay + " Days Completed on this year"
    remainingDaysEl.textContent = remainingDays + " Days left for this year"
}
setInterval(currentTime,1000)