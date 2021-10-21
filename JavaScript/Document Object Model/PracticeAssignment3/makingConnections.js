var countRequest = 2 
var two = document.querySelector(".two")
var todd = document.querySelector(".todd")

function hideTodd(){
    todd.remove()
    countRequest--
    two.innerText = countRequest
}

var phil =document.querySelector(".phil")

function hidePhil(){
    phil.remove()
    countRequest--
    two.innerText = countRequest
}

var edit = document.querySelector(".edit")
var user = document.querySelector(".user")

function editProfile(){
    edit.remove()
    user.innerText = "Meghan Smith"
}

var countConnections = 500
var five = document.querySelector(".five")

function countDown(){
    countConnections--
    five.innerText = countConnections
}
