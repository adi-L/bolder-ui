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
            boxShadow: "",
            "&hover": {
                boxShadow: ""
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