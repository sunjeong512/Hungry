


let a = "a";

console.log(a);


let myVariable = 123;
const myConstant = "Good morning!";

console.log(myVariable);
console.log(myConstant);


let myNumber = 123;
let myString = "Good morning!";
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myObject = { name: "Select", age:21 };
let mySymbol = Symbol("myStmbal");

console.log(typeof mySymbol);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof myObject);
console.log(typeof mySymbol);


let x = 20;
let y = 1;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x === y);
console.log(x !== y);


let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);


let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are teen.");
} else {
    console.log("You are a baby.");
}


let fruit = "Pineapple";

switch (fruit) {
    case "apple":
        console.log("This is an apple.");
        break;
    case "banana":
        console.log("This is a banana.")
    case "orange":
        console.log("This is an orange");
        break;
    default:
        console.log("Unknown fruit.");
}


for (let i = 0; i < 5; i++) {
    console.log(i);
}


let i = 0;

while(i < 5) {
    console.log(i);
    i++;
}


const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function (element) {
    console.log(element);
});


function add(a, b) {
    return a + b;
}

let result = add(1, 2);

console.log(result);


let myObject2 = {
    name: "Select",
    age: 21,
    isMarried: false,
};

console.log(myObject2.name);
console.log(myObject2.age);
console.log(myObject2.isMarried);


let myArray = ["apple", "banana", "orange"];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

