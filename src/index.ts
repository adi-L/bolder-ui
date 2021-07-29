import "./app";

export default class Example {
    constructor(target: string) {
        const root = document.getElementById(target);
        const app = document.createElement("main-component");
        if (root) {
            root.appendChild(app);
        }
    }
}
const standAlone = {
    button: require('./components/button'),
    ripple: require('./components/ripple'),
    navbar: require('./components/navbar'),
    navItem: require('./components/navItem')
}
export { standAlone };