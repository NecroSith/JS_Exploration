// Deep copy

const point = {
    pos: {
        x: 23,
        y: 21,
        z: 5
    }
}

// We can use JSON stringify and then parse
// to copy object with no shared references

const clone = JSON.parse(JSON.stringify(point));

//! Only works if there are no methods in the target object

clone.pos.x = 0;

console.log(point, clone); // outputs { pos: { x: 23, y: 21, z: 5 } } { pos: { x: 0, y: 21, z: 5 } }
// it works!