import { controls } from './template';

export default class View {
    constructor() {
        this.el = document.getElementById('app');
    }
    // render app view
    render() {
        this.el.innerHTML = controls();
    }
}