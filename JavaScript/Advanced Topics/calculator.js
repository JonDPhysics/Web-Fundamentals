var display =document.querySelector("#display")
var y 

function press(x){
    console.log("see me")
    if(display.innerText >= 0 && display.innerText < 10000000000){
        y = display.innerText * 10 + x 
        display.innerText = y
    }
    else{
        display.innerText = display.innerText
    }
}

function setOP(s){
    if(s === '/'){}
    if(s === '*'){}
    if(s === '-'){}
    if(s === '+'){}
}

function clr(){
    display.innerText = 0
}