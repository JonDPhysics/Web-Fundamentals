var penny = 0.01
var nickel = 0.05
var dime = 0.1
var quarter = 0.25

var coin = {
    penny: 0.01,
    nickel: 0.05,
    dime: 0.1,
    quarter: 0.25
}
var centsNum = Math.random()

function generateCoinChange(cents){
    var rounded = Math.round(cents * 100) / 100
    console.log(rounded)
    console.log(rounded % nickel)
    console.log(rounded / nickel)
    console.log(rounded % dime)
    console.log(rounded / dime)
    console.log(rounded % quarter)
    console.log(rounded / quarter)
}

generateCoinChange(centsNum)