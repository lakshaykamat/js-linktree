const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04f144a486mshf8408ceb53634b3p1ac06cjsnfb9e4811bf3f',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};


const futureElem = document.getElementById('future')
const percentageElem = document.getElementById('percen')
const buttonElem = document.getElementById('btn')
const person1Elem = document.getElementById('person1')
const person2Elem = document.getElementById('person2')
buttonElem.addEventListener('click',()=>{
    let person1Name = person1Elem.value
    let person2Name = person2Elem.value
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${person2Name}&fname=${person1Name}`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        percentageElem.textContent = `Percentage ❤️: ${response.percentage}%`
        futureElem.textContent = response.result
    })
	.catch(err => console.error(err));
    
})