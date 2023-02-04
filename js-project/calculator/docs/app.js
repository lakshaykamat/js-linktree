//DOM elements
const currentOpBtn = document.getElementById("current-operation")
const previousOpBtn = document.getElementById("previous-operation")
//Array.form is for converting HTML elements into the array
const button = Array.from(document.getElementsByClassName("btn"))
console.log(button);
button.map(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.textContent) {
      case "AC":
        currentOpBtn.textContent = ""
        previousOpBtn.textContent = ""
        break
      case "DEL":
        currentOpBtn.textContent = currentOpBtn.textContent.slice(0, -1);
        break
        case '=':
          previousOpBtn.textContent = currentOpBtn.textContent
            try{
                currentOpBtn.textContent = eval(currentOpBtn.textContent)
            }
            catch{
                currentOpBtn.textContent = 'Invalid'
            }
            break
      default:
        currentOpBtn.textContent += e.target.textContent;
    }
  });
});