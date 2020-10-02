// Question 1

var myString = "This is a string value";

// Question 2

var person = {
    name: "James",
    age: 28
};

// Question 3

var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
} 
else {
    console.log("In stock");
}

// Question 4

var numbers = [2, 4, 6, 8, 10];

for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Question 5

for(var count = 15; count <= 25; count++) {
    console.log(count);
}

// Question 6

for(var count = 15; count <= 25; count++) {
    if(count === 20) {
        console.log(count);
    }
}

// Question 7

var objects = [
    {
        username: "TheExpert",
        numberOfFriends: 158,
        online: true
    },
    {
        username: "SteelseriesForLife",
        numberOfFriends: 96,
        online: false
    }
];

for(var i = 0; i < objects.length; i++) {
    console.log(objects[i].numberOfFriends);
    console.log(objects[i].online);
}

// Question 8

function whatIDontLike(dislike) {
    console.log("I don't like " + dislike);
}

whatIDontLike("milk before cereal");

// Question 9

function subtraction(firstNumber, secondNumber) {
    var sum = firstNumber - secondNumber;
    console.log(sum);
}

subtraction(4, 2);

// Question 10

var myArray = [];

function addArgument(newValue) {
    var result = myArray.push(newValue);
    console.log(result);
}

addArgument(15);
