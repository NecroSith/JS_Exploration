// Loop an object

const human = {
    height: 184,
    age: 26,
    data: {
        name: 'Yan',
        parents: {
            name: 'Tanya'
        }
    }
};

// Loop keys
Object.keys(human).forEach(key => {
    const val = human[key];

    console.log(key, val); // outputs
    // height 184
    // age 26
    // data { name: 'Yan', parents: { name: 'Tanya' } }
});


// Loop values
Object.values(human).forEach(value => {
    console.log(value); // output
    // 184
    // 26
    // { name: 'Yan', parents: { name: 'Tanya' } }
});


// for loop, loops keys
for (const a in human) {
    console.log(a); // outputs
    // height
    // age
    // data
}

// Entries
for (const [key, val] of Object.entries(human)) {
    console.log(key, val); // outputs
    // height 184
    // age 26
    // data { name: 'Yan', parents: { name: 'Tanya' } }
}

// If you want to loop through children
// use recursion