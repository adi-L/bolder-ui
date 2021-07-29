import PKG from './package.json';

export const CONFIG: Config = {
    version: PKG.version,
    name: PKG.name,
    styles: {
        primary: "blue",
        secondary: "black"
    }
}
interface Config {
    version: string;
    name: string;
    styles: Styles
}
interface Styles {
    primary: string,
    secondary: string
}