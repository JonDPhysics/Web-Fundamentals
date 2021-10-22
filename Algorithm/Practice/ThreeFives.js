var sum = 0
var betterSum = 0
var start = Math.floor(Math.random() * 100 + 1)
var end = Math.floor(Math.random() * 4000000 + 101)

function ThreeFives(){
    for(i = 100; i < 4000001; i++){
        if(i % 3 === 0 || i % 5 === 0 && i % 15 != 0){
            sum += i
        }
    }
    return sum
}

function BetterThreeFive(start, end){
    for(i = start; i < end + 1; i++){
        if(i % 3 === 0 || i % 5 === 0 && i % 15 != 0){
            betterSum += i
        }
    }
    return betterSum
}

console.log(ThreeFives())
console.log(BetterThreeFive(start, end))