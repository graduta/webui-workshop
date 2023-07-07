class ApplicationService {
    constructor() {
        this.data = {
            name: 'MyWebUI Project',
            version: 0.1,
            author: 'Batman'
        };
    }

    getData() {
        return this.data;
    }
}

module.exports = {
    ApplicationService: ApplicationService
}