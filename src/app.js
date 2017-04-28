import View from './js/view';

class App {
    constructor() {
        this.view = new View();
    };

    init() {
        this.view.render();
    };
}

const app = new App();

window.addEventListener('load', () => app.init());