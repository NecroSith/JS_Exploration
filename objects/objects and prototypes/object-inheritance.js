// Example of prototype chain

// simple object
const human = {
    height: '170cm', // an average height of a person worldwide, I think

    getHeight() {
        console.log(this.height);
    }
}

human.getHeight();

const yan = {
    height: '185cm'
}

// Set proto to yan
yan.__proto__ = human; // __proto__ is used only for demo purposes

yan.getHeight(); // Gets 185cm
// yan doesn't have getHeight() method
// so js goes up to proto
// proto has it
// but 'this' still refers to yan

const yansHand = {
    height: '60cm' // Hey, it's roughly
}

yansHand.__proto__ = yan;

yansHand.getHeight(); // gets 60cm
// it doesnt have getHeight either
// so it goes up to yan to find getheight
// and up again since yan doesnt have this method too