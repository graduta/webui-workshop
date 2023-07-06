import {Observable} from '/js/src/index.js';
import {fetchClient} from '/js/src/index.js';
import {RemoteData} from '/js/src/index.js';

export class About extends Observable {
    constructor(model) {
        super();
        this.model = model;
        // this.data = {};
        this.data = RemoteData.NotAsked();
        console.log(this.data);
        this.requestedTimes = 0;
    }

    setData(data) {
        this.data = data
        this.notify();
    }

    getData() {
        return this.data;
    }

    async fetchDataFromServer() {
        this.setData(RemoteData.Loading())

        const data = await fetchClient('/api/data')
            .then(res => res.json());
        data.requestedTimes = ++this.requestedTimes

        // Fake an error from the server for purpose of demonstration
        if (this.requestedTimes % 3 == 0) {
            this.setData(RemoteData.Failure(":("))
            return
        }

        this.setData(RemoteData.success(data));
    }
}