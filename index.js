var tax = 0.0975;

function Diner(name) {
    var tax = 0.0975;
    this.name = name;
    this.dishes = [];
    this.total = 0;
    this.tax = 0;
    this.tip = 0;
    this.addDish = function(dish) {
        this.dishes.push(dish);
        this.total += dish.cost;
        this.tax += dish.cost * tax;
        this.tip += (dish.cost + (dish.cost * tax)) * 0.20;
    };
};

function Bill() {
    this.diners = [];
    this.addDiner = function(diners) {
        this.diners.push(diners);
    };
    this.total = function() {
        result = {};
        result.total = 0;
        result.tip = 0;
        result.grandTotal = 0;
        for (var i = 0; i < this.diners.length; i++) {
            result.total += this.diners[i].total;
            result.tip += this.diners[i].tip;
            result.grandTotal += this.diners[i].tip + this.diners[i].total + this.diners[i].tax;
        }
        console.log(result.total);
        console.log(result.tip);
        console.log(result.grandTotal);
        return result
    };
};


var Dish = function(name, cost) {
    this.name = name;
    this.cost = cost;
};

// create Bill
var group = new Bill("group");

// create diners
var ryan = new Diner("Ryan");
group.addDiner(ryan);
var john = new Diner("John");
group.addDiner(john);
var jane = new Diner("Jane");
group.addDiner(jane);

// create dishes
var dish = new Dish("Pancakes", 10.50);
ryan.addDish(dish);
var dish = new Dish("Coffee", 2.50);
ryan.addDish(dish);
var dish = new Dish("Waffles", 12.50);
john.addDish(dish);
var dish = new Dish("Chicken", 8.00);
john.addDish(dish);
var dish = new Dish("Juice", 1.50);
jane.addDish(dish);
var dish = new Dish("Eggs", 6.50);
jane.addDish(dish);

// add total to Bill
group.total();



console.log(group);
console.log(ryan);
console.log(john);
console.log(jane);
