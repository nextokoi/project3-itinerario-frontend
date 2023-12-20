import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette:{
        type: 'light',
        primary: {
            main: '#006A60',
            fixed: '#74F8E5',
            fixedVariant: '#005048'
        },
        secondary: {
            main: '#785900',
            fixedDim: '#FABD00',
            fixedVariant: '#5B4300'
        },
        background: {
            default: '#DAE5E1'
        },
        text: {
            primary: '#00201C',
        }
    }
})