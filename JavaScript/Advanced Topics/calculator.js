var display =document.querySelector("#display")
var y 
var hold = 0
var OP 
var onOff = 0

function press(x){
    console.log("see me")
    if(onOff === 0){
        if(display.innerText >= 0 && display.innerText < 10000000000){
            y = display.innerText * 10 + x 
            display.innerText = y
        }
        else{
            display.innerText = display.innerText
        }
    }
    else{
        clr()
        if(display.innerText >= 0 && display.innerText < 10000000000){
            y = display.innerText * 10 + x 
            display.innerText = y
            onOff = 0
        }
        else{
            display.innerText = display.innerText
        }
    }
    
}

function setOP(s){
    if(s === '/'){
        hold = display.innerText
        onOff = 1
        OP = s
    }
    if(s === '*'){
        hold = display.innerText
        onOff = 1
        OP = s
    }
    if(s === '-'){
        hold = display.innerText
        onOff = 1
        OP = s
    }
    if(s === '+'){
        hold = display.innerText
        onOff = 1
        OP = s
    }
}

function calculate(){
    if(OP === '/'){
        display.innerText = hold / display.innerText
    }
    if(OP === '*'){
        display.innerText = hold * display.innerText
    }
    if(OP === '-'){
        display.innerText = hold - display.innerText
    }
    if(OP === '+'){
        display.innerText = hold + display.innerText
        console.log(display.innerText)
    }
}

function clr(){
    display.innerText = 0
    hold = 0
}