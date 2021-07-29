export interface ThemeConfig {
    button: {
        props: {
            borderRadius: string | number;
            fontSize: string | number;
            fontFamily: string;
            padding:string;
            lineHeight:string | number
            background:string;
        }
    }
}
const theme: ThemeConfig = {
    button: {
        props: {
            borderRadius: ".25rem",
            fontSize: ".8rem",
            fontFamily: "Arial",
            padding:".375rem .35rem",
            lineHeight:1.5,
            background:"transparent"
        }
    }
}

export default theme;