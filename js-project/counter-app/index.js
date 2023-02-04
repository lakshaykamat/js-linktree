let countUp = document.getElementById('count-txt').innerText = 0;
let count = document.getElementById('count-txt');
let para = document.getElementById('para-id');
//countUp Function
function increment() {
  countUp += 1;
    count.innerText = countUp;
}
// Decrement Function
function decrement() {
  countUp -= 1;
    count.innerText = countUp;
}
//Save function
function save() {
    let paraString =countUp + " - "
    para.textContent += paraString;
}