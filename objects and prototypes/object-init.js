// Object literals are made using {}

const user1 = {
    name: 'Yan',
    age: '26',
    greet: function() {
        console.log('Greetings ' + this.name + '!');
    }
}

// In ES6+ this can be remade like

const user2 = {
    name: 'Yan',
    age: '26',
    greet() {
        console.log('Greetings ' + this.name + '!');
    }
}


// they are accessed by key name

console.log(user2.name); // Outputs Yan
user2.greet();

function c() {
    return this;
}

const a = () => {
    return this;
}

console.log(c.call({ test: 'binding' })); // Outputs test: 'binding
console.log(a.call({ test: 'binding' })); // Ouputs {} because arrow function doesn't create context