function hide(element){
    element.remove();
}

function inOut(element){
    if(element.innerText === "Login"){
        element.innerText = "Logout";
    }
    else{
        element.innerText = "Login";
    }
}