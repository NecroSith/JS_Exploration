// Converting object to JSON

const b = {
    pos: {
        x: 14,
        y: 52,
        z: 20
    },

    privateKey: 123
}

// To convert object to JSON we can use JSON.stringify(value, replacer, spaces)
// Value is usually an object
// replacer is filtering values
// spaces are used for formatting

const stringified = JSON.stringify(b);
console.log(stringified); // {"pos":{"x":14,"y":52,"z":20},"privateKey":123}
// Ok, but doesn't look great

const stringifiedPrettified = JSON.stringify(b, null, 2);
console.log(stringifiedPrettified); // outputs
// {
//     "pos": {
//       "x": 14,
//       "y": 52,
//       "z": 20
//     },
//     "privateKey": 123
//   } 
// Much better!


// Replacer 
const replaced = JSON.stringify(b, (key, value) => {
    if (key === "privateKey") {
        return undefined;
    }
    return value;
});

console.log(replaced); // {"pos":{"x":14,"y":52,"z":20}}
// We got rid of privateKey property


// Array replacer filter

const allowed = ['pos', 'y'];

const filtered = JSON.stringify(b, allowed, 2);
console.log(filtered);
// {
//     "pos": {
//       "y": 52
//     }
//   }