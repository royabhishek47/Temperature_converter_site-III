let celcius = document.getElementById("celsius");
let Fahrenheit = document.getElementById("Fahrenheit");
//console.log(celcius,Fahrenheit);
function celToFar(){
    let output = ( parseFloat(celcius.value)*9/5)+32;
    Fahrenheit.value=parseFloat(output.toFixed(2));
    //console.log(output);
}
function farToCel(){
    let output = (parseFloat(Fahrenheit.value)-32)*5/9;
    celcius.value = parseFloat(output.toFixed(2));
    console.log(output);
}