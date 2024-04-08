import {createTheme} from '@mui/material'
import { grey, amber, blueGrey } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette:{
        primary:{
            main: amber[700],
            dark: amber[900],
            light: amber[500],
            contrastText: blueGrey[900]
        },
        secondary:{
            main: blueGrey[500],
            dark: blueGrey[700],
            light: blueGrey[300],
            contrastText: blueGrey[900]
        },
        background:{
            default: grey[900],
            paper: grey[600], 
        },
        text: {
            primary: grey[50],
            secondary: grey[200],
        }
    }
});
