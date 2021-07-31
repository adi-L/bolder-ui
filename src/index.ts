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

