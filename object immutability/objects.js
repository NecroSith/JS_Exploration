// Objects as well as arrays (because they are the same type) are mutable by default
// So even if you intitialize an object with const it will still be mutable

const film = {
    title: "Star Wars IV: A new hope",
    director: "George Lucas"
}

film.title = "Christmas holiday";

console.log(film) // Output: { title: 'Christmas holiday', director: 'George Lucas' }



// ------------- Half solution ---------------- //



// To make objects immutable we should freeze them
// To freeze objects Object.freeze() can be used. 
// So no one can add, remove or edit properties

const film = Object.freeze({
    title: "Star Wars IV: A new hope",
    director: "George Lucas"
});

film.title = "Christmas holiday";

console.log(film) // Output: { title: 'Star Wars IV: A new hope', director: 'George Lucas' } Nothing changed

// However, this method doesn't wrap nested objects
// So they can still be changed
const film = Object.freeze({
    title: "Star Wars IV: A new hope",
    director: "George Lucas",
    characters: [{
            name: "Luke Skywalker",
            race: "Human"
        },
        {
            name: "Chewbacca",
            race: "Wookie"
        }
    ]
});

film.characters[0].name = "Han Solo";

console.log(film.characters[0]); // { name: 'Han Solo', race: 'Human' } Oh crap



// ------------- Solution ---------------- //


// We need a some kind of deep freeze to make even nested objects immutable
// Here are a simple function to make it happen
function deepFreeze(object) {
    Object.keys(object).forEach(name => {
        if (typeof object[name] === "object") {
            deepFreeze(object[name]);
        }
    });
    return Object.freeze(object);
}

const film = deepFreeze({
    title: "Star Wars IV: A new hope",
    director: "George Lucas",
    characters: [{
            name: "Luke Skywalker",
            race: "Human"
        },
        {
            name: "Chewbacca",
            race: "Wookie"
        }
    ]
});

film.characters[0].name = "Han Solo";

console.log(film.characters[0]); // { name: 'Luke Skywalker', race: 'Human' } Nothing changed!