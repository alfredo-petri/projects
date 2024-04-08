import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useAppThemeContext, useDrawerContext } from "../contexts";
import { DarkTheme, LightTheme, useBreakpoints } from "../themes";
import MenuIcon from "@mui/icons-material/Menu";

interface ILayoutBaseDePaginaProps {
    children: React.ReactNode;
    titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
    children,
    titulo,
}) => {
    const { toggleDrawerOpen } = useDrawerContext();
    const { isTablet } = useBreakpoints();
    const theme = useTheme();
    const { themeName } = useAppThemeContext();

    // const isDark = themeName === "DarkTheme";
    const isLight = themeName === "LightTheme";

    return (
        <Box
            height={"calc(100vh - 48px)"}
            paddingTop={"48px"}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
        >
            <Stack
                direction="row"
                spacing={0}
                alignItems="center"
                display={"block"}
            >
                <IconButton
                    aria-label="menu"
                    onClick={toggleDrawerOpen}
                    sx={{
                        display: isTablet ? "block" : "none",
                        position: "fixed",
                        top: "5px",
                        right: "15px",
                        color: isLight ? LightTheme.palette.text.primary : DarkTheme.palette.text.primary
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </Stack>
            <Box
                padding={1}
                display={"flex"}
                alignItems={"center"}
                height={theme.spacing(5)}
            >
                <Typography variant="h5">{titulo}</Typography>
            </Box>
            <Box>Barra de Ferramentas</Box>
            <Box>{children}</Box>
        </Box>
    );
};
