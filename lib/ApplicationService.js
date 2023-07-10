class ApplicationService {
    constructor(data) {
        this.data = data
    }

    getData() {
        return this.data;
    }
}

module.exports = {
    ApplicationService: ApplicationService
}