// Here is the top level class
class Animal {
    // we pass some values on the go
    constructor(name) {
        this.name = name;
    }

    // static method only exists on Animal constructor
    static extinct(species) {
        console.log(species + ' have gone extinct!');
    }
}

const firstAnimal = new Animal('Bob');

// Mammal has all animal properties and therefore it is its child
class Mammal extends Animal {
    constructor(name, hasFur) {
        super(name);

        this.hasFur = hasFur;
        this.warmblooded = true;
        this.level = 0;
    }

    // instance method that applies only to a specific mammal
    eat(food) {
        console.log(this.name + ' eats ' + food);
        this.level++;
    }
}

class Wolf extends Mammal {
    constructor(name) {
        // all wolves have fur so we pass true as the second argument
        super(name, true);

        this.carnivore = true;
    }
}

// Static properties have to be defined outside the class body
Wolf.speciesName = 'wolves';

const bob = new Wolf('Bob');
const fido = new Wolf('Fido');

// Now each instance of a class looks like this
// Wolf {
//     name: 'Fido',
//     hasFur: true,
//     warmblooded: true,
//     carnivore: true,
//     level: 0
// }

fido.eat('rabbit'); // Fido eats food
// fido is now level 1 but no other wolves affected

fido.extinct('Wolves'); // Won't work because 'extinct' is a static method and it's not available from child
Animal.extinct('Wolves'); // This is ok