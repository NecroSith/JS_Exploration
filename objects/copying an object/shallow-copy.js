// Shallow copy of an object

// shallow copy is a copy with only values trasferred but references stayed the same
// for this we can use Ibject.assign(target, ...sources)
// target is the new object
// sources are object we copy from

const a = {
    prop: 'value'
}

const b = {
    pos: {
        x: 40,
        y: 2,
        z: 6
    }
}

const c = Object.assign({}, a);

console.log(c); // outputs { prop: 'value' }

// Values are copied, objects are different
console.log(c === a); // false
console.log(Object.is(c, a)); // false


// But references are still the same
const d = Object.assign({}, b);
console.log(d); // { pos: { x: 40, y: 2, z: 6 } }

console.log(d.pos === b.pos); // true
delete d.pos.x;

console.log(d, b); // { pos: { y: 2, z: 6 } } { pos: { y: 2, z: 6 } }
// Both objects were affected as they have the same reference


// Spread operators are also shallow copies

const e = {...b };
console.log(e.pos === b.pos); // true