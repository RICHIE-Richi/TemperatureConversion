const textbox = document.getElementById("textbox")
const tocelcius = document.getElementById("tocelcius")
const tofahrenheit = document.getElementById("tofahrenheit")
const Myresult = document.getElementById("Myresult")
let temp;

function convert(){
    if(tocelcius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        Myresult.textContent=temp.toFixed(1) + "°C"
    }
    else if(tofahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        Myresult.textContent=temp.toFixed(1) + "°F"
    }
    else{
        Myresult.textContent="select a unit"
    }
}