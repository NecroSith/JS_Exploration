// Convert key-value array to object

const arr = [
    ['key', 'value'],
    ['x', 122],
    ['y', 34],
    ['z', '6']
]

const objFromArray = Object.fromEntries(arr);

console.log(objFromArray); // outputs { key: 'value', x: 122, y: 34, z: '6' }


// Convert it back to key-value array

const arrayFromObj = Object.entries(objFromArray);

console.log(arrayFromObj); // outputs [ [ 'key', 'value' ], [ 'x', 122 ], [ 'y', 34 ], [ 'z', '6' ] ]
// just like the initial array