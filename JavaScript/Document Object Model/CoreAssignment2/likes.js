console.log("Running")
var clickOne = 0
var clickTwo = 0
var clickThree = 0

var likesOne = document.querySelector("#likesOne")
var likesTwo = document.querySelector("#likesTwo")
var likesThree = document.querySelector("#likesThree")

function addLikes(element) {
    if(element.id === "one"){
        clickOne++;
        likesOne.innerText = (clickOne + " like(s)");
    }
    else if(element.id === "two"){
        clickTwo++;
        likesTwo.innerText = (clickTwo + " like(s)");
    }
    else if(element.id === "three"){
        clickThree++;
        likesThree.innerText = (clickThree + " like(s)");
    }
}