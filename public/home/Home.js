import {Observable} from '/js/src/index.js';

export class Home extends Observable {
    constructor(model, username) {
        super();
        this.username = username;
        this.model = model;
    }

    getUserName() {
        return this.username;
    }

    setUserName(username) {
        this.username = username;
    }

    saveUserName() {
        // This could call an api or something!
        this.notify();
    }
}
