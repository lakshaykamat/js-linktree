//List availabile currency
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '04f144a486mshf8408ceb53634b3p1ac06cjsnfb9e4811bf3f',
// 		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
// 	}
// };

// fetch('https://currency-exchange.p.rapidapi.com/listquotes', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//Main API
const checkMoney = ()=>{
	const fromOption = document.getElementById('allQuote').value
	const toOption = document.getElementById('allQuotes').value
	main(fromOption,toOption)
}
const main = (fromOption,toOption)=>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04f144a486mshf8408ceb53634b3p1ac06cjsnfb9e4811bf3f',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
};

fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${fromOption}&to=${toOption}&q=1.0`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		getAmount(response)
	})
	.catch(err => console.error(err));
}

//DOM
const userText = document.getElementById('userText')
const outText = document.getElementById('outText')

const getAmount = (govtAmount) => {
	const userAmount = Number(userText.value)
	convertAmount(govtAmount, userAmount)
}
const convertAmount = (govtAmount, userAmount)=>{
	outText.value = govtAmount * userAmount
}
const myfun = ()=>{
	console.log("Changed")
}