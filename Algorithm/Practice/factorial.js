var ranNum = Math.ceil(Math.random() * 100 + 1)
var product = 1
function factorial(num){
    for(i = 1; i <= num; i++){
        product *= i
    }
    return product
}

console.log("The factorial of " + ranNum + " is: " + factorial(ranNum))