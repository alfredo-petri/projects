import { Box, Button, Paper, useTheme } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

export const DetailTool: React.FC = () => {
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
            }}
        >
            <Button
                variant="contained"
                color="primary"
                disableElevation
                endIcon={<AddIcon />}
                sx={{ color: "primary.contrastText" }}
            >
                Salvar
            </Button>
            <Button
                variant="contained"
                color="primary"
                disableElevation
                endIcon={<AddIcon />}
                sx={{ color: "primary.contrastText" }}
            >Salvar e voltar</Button>
            <Button
                variant="contained"
                color="primary"
                disableElevation
                endIcon={<AddIcon />}
                sx={{ color: "primary.contrastText" }}
            >Apagar</Button>
            <Button
                variant="contained"
                color="primary"
                disableElevation
                endIcon={<AddIcon />}
                sx={{ color: "primary.contrastText" }}
            >
                Novo
            </Button>
            <Button
                variant="contained"
                color="primary"
                disableElevation
                endIcon={<AddIcon />}
                sx={{ color: "primary.contrastText" }}
            >Voltar</Button>
        </Box>
    );
};
