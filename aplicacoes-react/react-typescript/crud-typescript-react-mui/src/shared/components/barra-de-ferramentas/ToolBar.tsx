import {
    Box,
    Button,
    Paper,
    TextField,
    useTheme,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import React from "react";

export const ToolBar: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            component={Paper}
            sx={{
                height: theme.spacing(5),
                marginX: 1,
                padding: 0.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "space-between"
            }}
        >
            <TextField size="small" placeholder="Pesquisar" InputProps={{endAdornment: <SearchIcon />}} />
            <Button variant="contained" color="primary" disableElevation endIcon={<AddIcon />} sx={{color: "primary.contrastText"}}>Novo</Button>
        </Box>
    );
};
