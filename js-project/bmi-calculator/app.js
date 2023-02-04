function myFunction(){
    var weight = Number(document.getElementById('weight').value);
    var height  = Number(document.getElementById('height').value);
    var metre = height/100; //Converts cm to m
    var bmi = (weight / (metre*metre));//BMI Formula

    // Adding CSS to First div
    document.getElementById('bmi-result').innerText = "BMI:"+ bmi.toFixed(1);
    document.getElementById('bmi-result-div').style.backgroundColor = '#9999';
    document.getElementById('bmi-result-div').style.outline = '2px solid #111';
    document.getElementById('bmi-result-div').style.color = '#111';
    document.getElementById('bmi-result-div').style.display = 'flex';
    document.getElementById('bmi-result-div').style.justifyContent= 'center';
    document.getElementById('bmi-result-div').style.alignItems =  'center';
    document.getElementById('bmi-result-div').style.margin =  '.3rem';
    document.getElementById('bmi-result-div').style.padding =  '.3rem';

    //add CSS to second div
    document.getElementById('bmi-result-div-2').style.backgroundColor = '#9999';
    document.getElementById('bmi-result-div-2').style.outline = '2px solid #111';
    document.getElementById('bmi-result-div-2').style.color = '#111';
    document.getElementById('bmi-result-div-2').style.display = 'flex';
    document.getElementById('bmi-result-div-2').style.justifyContent= 'center';
    document.getElementById('bmi-result-div-2').style.alignItems =  'center';
    document.getElementById('bmi-result-div-2').style.margin =  '.3rem';
    document.getElementById('bmi-result-div-2').style.padding =  '.3rem';
    
    if(bmi < 18.5){
        document.getElementById('bmi-result-2').innerHTML = "Your are Underweight 	&#128514;"
    }
    else if(bmi > 18.5 && bmi < 24.9){
        document.getElementById('bmi-result-2').innerHTML = "You're Normal &#128512;"
    }
    else if(bmi > 25 && bmi < 29.9){
        document.getElementById('bmi-result-2').innerHTML = "You're Overweight 	&#128517;"
    }
    else if(bmi > 30 && bmi < 34.5){
        document.getElementById('bmi-result-2').innerHTML = "You're Obese 	&#128543"
    }
    else if(bmi > 34.5){
        document.getElementById('bmi-result-2').innerHTML = "You're Extremely Obese &#128576"
    }
    else{
        document.getElementById('bmi-result-2').innerHTML = "Enter BMI 🤦"
    }
}