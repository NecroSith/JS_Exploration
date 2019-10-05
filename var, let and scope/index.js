// Here we initialize and declare two variable with the same name, "name"
// One of them is declared globally.
var name = 'Yan';

{
    // One of them is inside {} so it's supposed to have it's own scope and not mess with the global one
    // But it doesn't
    // The output is "Alex", "Alex"
    // Because var creates variable in all possible (for it) scopes up to the global
    // Thus in this example var created a variable named Alex and rewrote the global variable name Yan with Alex as well.

    var name = 'Alex';
    console.log(name);

}

console.log(name);


// ------------ Solution 1a ----------- //

var name = 'Yan';

// One solution is to create a function and wrap it around new var initialization so it can't mess with the global variable.
function createNewName() {
    var name = "Markus";
    console.log(name);

}

createNewName();

console.log(name);

// the output is "Markus", "Yan"


// ------------ Solution 1b ----------- //

// Another solution is to create an anonymous function and wrap it round new var initialization
// Pretty much the same method as the previous one but this time there is no need to explicitly call a function

var name = 'Yan';

(function() {
    var name = "Markus";
    console.log(name);

})();

console.log(name);

// the output is "Markus", "Yan"


// ------------ Solution 2 ----------- //

// The most practical and modern approach is to use let/const instead of var
// In contrast to var, let as well as const doesn't create a variable in all scopes but only in the current one instead

var name = 'Yan';

{
    let name = 'Alex';
    // It goes the same with const as it has the same scope properties as let
    // const name = "Alex"; 
    console.log(name);

}

console.log(name);

//The output is "Alex", "Yan";