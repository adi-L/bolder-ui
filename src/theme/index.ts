export interface ThemeConfig {
    primary: string,
    secondary: string,
    button: {
        props: {
            borderRadius: string | number;
            fontSize: string | number;
            fontFamily: string;
            padding: string;
            lineHeight: string | number
            background: string;
            boxShadow: string;
            "&hover": {
                boxShadow: string;
            };
        }
    },
    navItem: {
        props: {
            fontSize: string | number;
            fontFamily: string;
            padding: string;
            lineHeight: string | number
            "&hover": {
            };
        }
    }
}
const theme: ThemeConfig = {
    primary: "blue",
    secondary: "red",
    button: {
        props: {
            borderRadius: ".25rem",
            fontSize: ".8rem",
            fontFamily: "Arial",
            padding: ".375rem .95rem",
            lineHeight: 1.5,
            background: "transparent",
            boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
            "&hover": {
                boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
            }
        }
    },
    navItem: {
        props: {
            fontSize: ".8rem",
            fontFamily: "Arial",
            padding: ".375rem .85rem",
            lineHeight: 1.5,
            "&hover": {
            }
        }
    }
}

export default theme;