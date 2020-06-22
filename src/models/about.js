export class AboutModel {

    constructor() {
    }

    getAboutData() {
        return fetch('./data/about.json')
            .then(resp => resp.json());
    }

}
