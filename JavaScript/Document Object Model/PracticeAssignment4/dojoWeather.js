var unit1 = document.querySelector("#unit1")
var unit2 = document.querySelector("#unit2")
var unit3 = document.querySelector("#unit3")
var unit4 = document.querySelector("#unit4")
var unit5 = document.querySelector("#unit5")
var unit6 = document.querySelector("#unit6")
var unit7 = document.querySelector("#unit7")
var unit8 = document.querySelector("#unit8")

// function insert(){
//     unit1.innerText += "°"
//     unit2.innerText += "°"
//     unit3.innerText += "°"
//     unit4.innerText += "°"
//     unit5.innerText += "°"
//     unit6.innerText += "°"
//     unit7.innerText += "°"
//     unit8.innerText += "°"
// }

// function extract(){
//     unit1.innerText = unit1.innerText - "°"
//     unit2.innerText = unit2.innerText - "°"
//     unit3.innerText = unit3.innerText - "°"
//     unit4.innerText = unit4.innerText - "°"
//     unit5.innerText = unit5.innerText - "°"
//     unit6.innerText = unit6.innerText - "°"
//     unit7.innerText = unit7.innerText - "°"
//     unit8.innerText = unit8.innerText - "°"
// }


var bye = document.querySelector(".bye")

function hide(){
    bye.remove()
}

function check(element){

    if(element.value === "°F"){
        unit1.innerText = Math.floor(unit1.innerText * 1.8 + 32)
        unit2.innerText = Math.ceil(unit2.innerText * 1.8 + 32)
        unit3.innerText = Math.floor(unit3.innerText * 1.8 + 32)
        unit4.innerText = Math.floor(unit4.innerText * 1.8 + 32)
        unit5.innerText = Math.floor(unit5.innerText * 1.8 + 32)
        unit6.innerText = Math.ceil(unit6.innerText * 1.8 + 32)
        unit7.innerText = Math.floor(unit7.innerText * 1.8 + 32)
        unit8.innerText = Math.ceil(unit8.innerText * 1.8 + 32)
    }
    if(element.value === "°C"){
        unit1.innerText = Math.ceil((unit1.innerText - 32) / 1.8)
        unit2.innerText = Math.floor((unit2.innerText - 32) / 1.8)
        unit3.innerText = Math.ceil((unit3.innerText - 32) / 1.8)
        unit4.innerText = Math.ceil((unit4.innerText - 32) / 1.8)
        unit5.innerText = Math.ceil((unit5.innerText - 32) / 1.8)
        unit6.innerText = Math.floor((unit6.innerText - 32) / 1.8)
        unit7.innerText = Math.ceil((unit7.innerText - 32) / 1.8)
        unit8.innerText = Math.floor((unit8.innerText - 32) / 1.8)
    }
}
