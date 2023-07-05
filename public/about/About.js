import {Observable} from '/js/src/index.js';

export class About extends Observable {
    constructor(model) {
        super();
        this.model = model;
        this.data = {};
        this.requestedTimes = 0;
    }

    getDetails() {
        this.data = {
            field1: "value1", 
            field2: "value2",
            requestedTimes: this.requestedTimes
        }
        this.requestedTimes++;
        
        return this.data;
    }
}