// ES5
var hylands = function (ellie, charlie) {
    return ellie * charlie;
};
// ES6
var hylands2 = (ellie, charlie) => ellie *

    function pluralize(word, ct) {
        if (ct < 2) {
            return word
        }
        return word + "s"
    }

// ternary
// cond ? true : false
// ct < 2 ? word : word + "s"

// if / else if / else if / else
function calculatePrice(unitPrice, ct) {
    if (ct < 10) {
        return unitPrice
    } else if (ct < 15) {
        return unitPrice * .8
    } else if (ct < 30) {
        return unitPrice * .6
    } else {
        return unitPrice * .5
    }
}

function calculatePriceTernary(unitPrice, ct) {
    return ct < 10
        ? unitPrice
        : ct < 15
            ? unitPrice * .8
            : ct < 30
                ? unitPrice * .6
                : unitPrice * .5;
}

function calculatePriceSwitchWithReturns(unitPrice, ct) {
    switch (true) {
        case ct < 10:
            return unitPrice;
        case ct < 20:
            return unitPrice * .8;
        case ct < 30:
            return unitPrice * .6
        default:
            return unitPrice * .5;
    }
}

function calculatePriceSwitchWithBreaks(unitPrice, ct) {
    var price = 0;
    switch (ct) {
        case 10:
            price = unitPrice;
            break
        case 20:
            price = unitPrice * .8;
            break
        default:
            price = unitPrice * .5;
    }
    return price
}

function letterGrade(gradePercent) {
    switch (true) {
        case gradePercent > 90:
            return "A";
        case gradePercent > 80:
            return "B";
        case gradePercent > 70:
            return "C";
        case gradePercent > 60:
            return "D";
        default:
            return "F"
    }
}
console.log("My grade is:", letterGrade(65))

console.log("I want to purchase this stuff...", calculatePriceSwitchWithReturns(100, 16))

console.log(hylands2(hylands(2, 3), 1));
var owner = "nathan"
var animal = "cat"
console.log(owner + " and his " + animal);
console.log(`${owner} and his ${animal}`)

var customer = { name: "Foo" }
var card = { qty: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.qty} ${card.qty < 2 ? card.product : card.product + "s"} for
a total of ${card.qty * card.unitprice} bucks?`

console.log(message)


// function brewCoffee(caf, milk, sugar);
// function doYouWantASoda(kind, temp, ice);
function listCat(name, type, age, color, annoyance_level, description) {
var result = name + ", " + type + ", " + annoyance_level;
return result;
}
var resultCharlie = listCat("Charlie", "cat", 1, "orangey", "top-notch level of annoyance", "He meows a lot, sorry");
console.log('Buttwipe: ', resultCharlie);

var x = [1,2,3,4]

var y = x.map(function(num) {
    return num+1
})
var z = x.filter(num => num !== 4)