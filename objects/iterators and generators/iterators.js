// iterators provide a way to access items in a collectionone at a time
// while keeping track of the currect index

function makeIterator(arr) {
    let nextIndex = 0;
    console.log('nextIndex -> ', nextIndex);

    return {
        next: function() {
            return nextIndex < arr.length ? { value: arr[nextIndex++], done: false } : { done: true };
        }
    };
}

const it = makeIterator(['simple', 'array', 'in', 'iterator']);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// outputs
// nextIndex ->  0
// { value: 'simple', done: false }
// { value: 'array', done: false }
// { value: 'in', done: false }
// { value: 'iterator', done: false }
// { done: true }