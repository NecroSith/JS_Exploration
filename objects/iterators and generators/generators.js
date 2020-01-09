// Generators basics
// generators are functions that serve as a factory for iterators
// they consist of 2 parts:
// Generator function
// and generator iterator


// asterisk indicates that it's a generator
// yield keword pauses function execution and returns (yields) a value
function* sample() {
    yield "simple";
    yield "generator";
}

const it = sample();

console.log(it.next());
console.log(it.next());
console.log(it.next());

// the output is alsmost the same as the one in iterator
// { value: 'simple', done: false }
// { value: 'generator', done: false }
// { value: undefined, done: true }


// Communication with generators can happen in both directions
// generators can yield values to iterators
// but iterators can also send values to generators in next() method

function favGame() {
    const reply = yield "What is your favorite game?";
    console.log(reply);
    if (reply !== 'doom') return "Get out!";
    return "Good!";
}

{
    const it = favGame();
    const res = it.next().value;
    console.log(res);
    const input = it.next('quake').value;
    console.log(input);
}

{
    const it = favGame();
    const res = it.next().value;
    console.log(res);
    const input = it.next('doom').value;
    console.log(input);
}