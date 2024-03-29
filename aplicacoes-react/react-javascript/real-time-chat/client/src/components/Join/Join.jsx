import { Button } from "@mui/base";
import { Box, TextField } from "@mui/material";
import React from "react";

export default function Join() {
    return (
        <Box>
            <h1>Login</h1>
            <TextField label="User" placeholder="Nome de usuário" />
            <Button>Entrar</Button>
        </Box>
    );
}
