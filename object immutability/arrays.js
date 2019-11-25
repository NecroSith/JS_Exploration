// In contrast to strings objects and arrays are mutable by default in Javascript
// So this array can be changed from anywhere

let arr = [1, 2, 3];
arr.push(4);

console.log(arr); // Output will be [1, 2, 3, 4]. Initial array is mutated

// Lets try to use const because const is, you know, constant so it will help right?
const arr = [1, 2, 3];
arr.push(4);

console.log(arr); // Wrong. Output will be [1, 2, 3, 4]. Initial array is mutated despite it is a constant! 
// You cannot reassign arr value to smth else, however you can change values of its elements and its quantity
arr = 5; // This will not work
arr.pop() // But it will


// ------------ Solution 1 --------------- //

// Just create a cope of the initial arr and make changes to it
const arr = [1, 2, 3];
const newArr = arr;

newArr.push(4);
console.log(newArr); // [1, 2, 3, 4]


// ------------ Solution 2 --------------- //

// Create a function to create and return new array and make changes in it without affecting the initial one
// To immutably push elements in ES6+ we can do smth like this
function immutablePush(arr, value) {
    return [...arr, value];
}

// In ES5 it will be
function immutablePushES5(arr, value) {
    return [].concat(arr, value);
}

const arr = [1, 2, 3];
const newArr = immutablePush(arr, 4);

console.log(newArr); // [1, 2, 3, 4]


// ------------ Solution 3 --------------- //

// You can use Object.assign to return new array with new values 
// It doesn't really fit for deleting element though 

const arr = [1, 2, 3];
const newArr = Object.assign([], arr, { 3: 4 });
const newArr2 = Object.assign([], arr.slice(0, arr.length - 1));

console.log(newArr); // [1, 2, 3, 4]
console.log(newArr2); // [1, 2]

// You can also use some external libraries like Immutable.js to do the same thing