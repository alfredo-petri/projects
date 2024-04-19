import { Box, Button, Paper, TextField, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

interface IListTool {
    search?: string;
    showInput?: boolean;
    onChangeSearch?: (newSearch: string) => void;
    textBtn?: string;
    showBtn?: boolean;
    onClickBtn?: () => void;
}

export const ListTool: React.FC<IListTool> = ({
    search = "",
    showInput = false,
    onChangeSearch,
    textBtn = "Novo",
    showBtn = true,
    onClickBtn,
}) => {
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
                justifyContent: showInput ? "space-between" : "end",
            }}
        >
            {showInput && (
                <TextField
                    size="small"
                    placeholder="Pesquisar"
                    InputProps={{ endAdornment: <SearchIcon /> }}
                    value={search}
                    onChange={(e) => onChangeSearch?.(e.target.value)}
                />
            )}
            {showBtn &&(<Button
                variant="contained"
                color="primary"
                disableElevation
                endIcon={<AddIcon />}
                sx={{ color: "primary.contrastText" }}
                onClick={onClickBtn}
            >
                {textBtn}
            </Button>)}
        </Box>
    );
};
