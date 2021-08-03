export interface ThemeConfig {
    primary: string,
    secondary: string,
    input:{
        props:{
            fontSize: string | number;
            borderRadius: string | number;
            height: string | number;
            fontFamily: string;
        }
    },
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
    input:{
        props:{
            fontSize: ".8rem",
            borderRadius: ".25rem",
            height:"30px",
            fontFamily: "Arial",
        }
    },
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