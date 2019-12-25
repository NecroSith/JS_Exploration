// Prototype example

const objConstructor = function(x, y) {
    this.x = x;
    this.y = y;

    this.getCoords = () => {
        return [this.x, this.y];
    }
}

// lets create two instances
const one = new objConstructor(3, 2);
const two = new objConstructor(3, 5);

one.getCoords();
two.getCoords();

// this will get FALSE because they each have own function in memory!
console.log(one.getCoords === two.getCoords);
console.log(Object.is(two.getCoords, one.getCoords));

// this will get FALSE as well
console.log(two.getCoords() === one.getCoords());


// Now let's try with proto

const withProto = function(x, y) {
    this.x = x;
    this.y = y;
}

withProto.prototype.getCoords = function() {
    return [this.x, this.y];
}

const pOne = new withProto(3, 2);
const pTwo = new withProto(3, 5);

console.log(pOne.getCoords()); // 3,2
console.log(pTwo.getCoords()); // 3,5

// This gets TRUE because there is only one function existing in memory!
console.log(pOne.getCoords === pTwo.getCoords);
console.log(Object.is(pTwo.getCoords, pOne.getCoords));

// prototype target object's own prototype
// __proto__ target object parent's prototype

console.log(pOne.prototype); // undefinded - because it has no own prototype
console.log(pOne.__proto__); // withProto - because it links to parent's prototype