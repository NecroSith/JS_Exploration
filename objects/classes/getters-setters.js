// Getters and setters

// Getter
// allows us to return a custom value when property is accessed

const usersController = {
    userIds: [2, 4, 3, 232, 421],

    get latest() {
        return this.userIds[this.userIds.length - 1];
    }
}

console.log(usersController.latest); // 421

// Setter
// similar to getter buy Handles setting values

const browser = {
    active: 'chrome',
    history: [],

    set currentPage(val) {
        this.history.push(this.active);
        this.active = val;
    }
}

browser.currectPage = 'medium';

console.log(browser);