//function pizzaOven(crust, sause, cheese, toppings){
    //var pizza = {};
    //pizza.crust = crust;
    //pizza.sause = sause;
    //pizza.cheese = cheese;
    //pizza.toppings = toppings;
    //return pizza;
//}

//var order1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])

//var order2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]) 

//var order3 = pizzaOven("crunchy thin", "marinara", ["mozzarella"], ["sausage", "jalapeno", "bacon"])

//var order4 = pizzaOven("handmade pan", "garlic parmesan", ["mozzarella", "extra"], ["chicken", "onions" "spinach"])

var makePizza = {
    crust: ["hand tossed", "handmade pan", "crunchy thin", "brooklyn style", "gluten free", "deep dish"], 
    sause: ["marinara", "honey bbq", "garlic parmesan", "alfredo", "ranch", "hot buffalo"], 
    cheese: ["mozzarella", "feta", "cheddar", "extra"], 
    meat: ["ham", "beef", "salami", "pepperoni", "sausage", "chicken", "bacon", "philly steak"], 
    veggiesMore: ["jalapenos", "onions", "banana peppers", "diced tomatoes", "black olives", "mushrooms", "pineapple", "green peppers","spinach", "roasted red peppers"]
}

function randomPizza(){
    var randomOrder = {};
    randomOrder.crust = makePizza.crust[Math.floor(Math.random() * (makePizza.crust.length -1))];
    randomOrder.sause = makePizza.sause[Math.floor(Math.random() * (makePizza.sause.length -1))];
    randomOrder.cheese = makePizza.cheese[Math.floor(Math.random() * (makePizza.cheese.length -1))];
    randomOrder.meat = makePizza.meat[Math.floor(Math.random() * (makePizza.meat.length -1))];
    randomOrder.veggiesMore = makePizza.veggiesMore[Math.floor(Math.random() * (makePizza.veggiesMore.length -1))];
    return randomOrder;
}

console.log(randomPizza())