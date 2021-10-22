var sum = 0
var top = Math.floor(Math.random() * 10001 + 1001)
function sigma(x){
    for(i = 1; i <= x; i++){
        sum += i
    }
    return sum
}

console.log(sigma(top))