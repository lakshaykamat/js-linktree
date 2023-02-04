function multiply(){
    var number;
    var result = "";
    number = Number(document.getElementById("number").value);
    for(i = 1; i<=10;i++){
        result =   result + "<p>" + number +  " x " +  i  + " = " + number * i  + "</p>";
    }
    document.getElementById("result").innerHTML = result;
}