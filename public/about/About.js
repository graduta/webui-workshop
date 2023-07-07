import {Observable, RemoteData} from '/js/src/index.js';

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

        const {result: data, ok} = await this.model.loader.get('/api/data');
        if (!ok) {
            console.log(data);
            this.setData(RemoteData.Failure(data.message))
            return
        }

        data.requestedTimes = ++this.requestedTimes

        this.setData(RemoteData.success(data));
    }
}