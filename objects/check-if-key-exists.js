// Check if a key exists in an object

const obj = {
    a: 1
}

// We can use "in"
// but we should be aware that it will also look at prototype

console.log("a" in obj); // true
console.log("b" in obj); // false
console.log("toString" in obj); //! true because toString exists in prototype

// use obj.hasOwnProperty(property)
// it woll not check prototype

console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty("toString")); //* false