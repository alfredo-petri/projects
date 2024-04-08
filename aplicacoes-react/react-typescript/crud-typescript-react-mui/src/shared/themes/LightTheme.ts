import {createTheme} from '@mui/material'
import { amber, blueGrey, grey } from '@mui/material/colors';

export const LightTheme = createTheme({
    
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
                default: grey[200],
                paper: grey[50], 
            },
            text: {
                primary: grey[700],
                secondary: grey[900],
            }
        }
    }
);
