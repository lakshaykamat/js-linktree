const input = document.getElementById('input')
let  result = document.getElementById('result')
const inputOptions = document.getElementById('inputOptions')
const outputOptions = document.getElementById('outputOptions')
function conversion(){
    //Bit Conversion
    if(inputOptions.value == "bit" && outputOptions.value == "bit"){
        result.value = input.value
    }
    else if(inputOptions.value == "bit" && outputOptions.value == "kb" ){
        result.value= (input.value/1024)
    }
    else if(inputOptions.value == "bit" && outputOptions.value == "mb"){
        result.value= (input.value/1.049e+6)
    }
    else if(inputOptions.value == "bit" && outputOptions.value == "gb"){
        result.value= (input.value/1.074e+9)
    }
    else if(inputOptions.value == "bit" && outputOptions.value == "tb"){
        result.value= (input.value/1.1e+12)
    }
    //Kibibit Conversion
    else if(inputOptions.value == "kb" && outputOptions.value == "bit"){
        result.value= (input.value * 1024)
    }
    else if(inputOptions.value == "kb" && outputOptions.value == "kb"){
        result.value= input.value
    }
    else if(inputOptions.value == "kb" && outputOptions.value == "mb"){
        result.value= (input.value / 1024)
    }
    else if(inputOptions.value == "kb" && outputOptions.value == "gb"){
        result.value= (input.value / 1.049e+6)
    }
    else if(inputOptions.value == "kb" && outputOptions.value == "tb"){
        result.value= (input.value /1.074e+9)
    }
    //Mebibit Conversion
    else if(inputOptions.value == "mb" && outputOptions.value == "bit"){
        result.value= (input.value * 1.049e+6)
    }
    else if(inputOptions.value == "mb" && outputOptions.value == "kb"){
        result.value= (input.value * 1024)
    }
    else if(inputOptions.value == "mb" && outputOptions.value == "mb"){
        result.value= input.value
    }
    else if(inputOptions.value == "mb" && outputOptions.value == "gb"){
        result.value= (input.value / 1024)
    }
    else if(inputOptions.value == "mb" && outputOptions.value == "tb"){
        result.value= (input.value / 1.049e+6)
    }
    //Gibibit Conversion
    else if(inputOptions.value == "gb" && outputOptions.value == "bit"){
        result.value= (input.value * 1.074e+9)
    }
    else if(inputOptions.value == "gb" && outputOptions.value == "kb"){
        result.value= (input.value * 1.049e+6)
    }
    else if(inputOptions.value == "gb" && outputOptions.value == "mb"){
        result.value= (input.value *  1024)
    }
    else if(inputOptions.value == "gb" && outputOptions.value == "gb"){
        result.value= input.value
    }
    else if(inputOptions.value == "gb" && outputOptions.value == "tb"){
        result.value= (input.value / 1024)
    }
    //Tebibit Conversion
    else if(inputOptions.value == "tb" && outputOptions.value == "bit"){
        result.value= (input.value * 1.1e+12)
    }
    else if(inputOptions.value == "tb" && outputOptions.value == "kb"){
        result.value= (input.value * 1.074e+9)
    }
    else if(inputOptions.value == "tb" && outputOptions.value == "mb"){
        result.value= (input.value * 1.049e+6)
    }
    else if(inputOptions.value == "tb" && outputOptions.value == "gb"){
        result.value= (input.value * 1024)
    }
    else if(inputOptions.value == "tb" && outputOptions.value == "tb"){
        result.value= (input.value)
    }
}
setInterval(conversion,0.1)