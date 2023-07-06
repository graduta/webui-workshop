import {Observable} from '/js/src/index.js';
import {fetchClient} from '/js/src/index.js'

export class About extends Observable {
    constructor(model) {
        super();
        this.model = model;
        this.data = {};
        this.requestedTimes = 0;
    }

    setData(data) {
        this.data = data;
        this.notify();
    }

    getData() {
        return this.data;
    }

    async fetchDataFromServer() {
        const data = await fetchClient('/api/data')
            .then(res => res.json());
        this.setData(data)
        this.requestedTimes++;
    }
}