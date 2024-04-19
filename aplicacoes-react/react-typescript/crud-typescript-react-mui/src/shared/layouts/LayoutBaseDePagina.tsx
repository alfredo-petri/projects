import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useAppThemeContext, useDrawerContext } from "../contexts";
import { DarkTheme, LightTheme, useBreakpoints } from "../themes";
import MenuIcon from "@mui/icons-material/Menu";

interface ILayoutBaseDePaginaProps {
    children: React.ReactNode;
    title: string;
    listTool?: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
    children,
    title,
    listTool: listTool,
}) => {
    const { toggleDrawerOpen } = useDrawerContext();
    const { isTablet, isDesktop } = useBreakpoints();
    const theme = useTheme();
    const { themeName } = useAppThemeContext();

    // const isDark = themeName === "DarkTheme";
    const isLight = themeName === "LightTheme";

    return (
        <Box height={"100vh"} display={"flex"} flexDirection={"column"} gap={1}>
            <Box
                padding={1}
                display={"flex"}
                alignItems={"center"}
                height={isTablet ? theme.spacing(6) : isDesktop ? theme.spacing(9) : theme.spacing(12)}
            >
            {isTablet && (<Stack
                direction="row"
                spacing={0}
                alignItems="center"
                display={"block"}
            >
                <IconButton
                    aria-label="menu"
                    onClick={toggleDrawerOpen}
                    sx={{
                        position: "absolute",
                        top: "5px",
                        right: "15px",
                        color: isLight
                            ? LightTheme.palette.text.primary
                            : DarkTheme.palette.text.primary,
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </Stack>)}
                <Typography
                    variant={ isTablet ? "h5" : isDesktop ? "h4" : "h3"}
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                >
                    {title}
                </Typography>
            </Box>
            {listTool && <Box>{listTool}</Box>}
            <Box flex={1} overflow={"auto"}>
                {children}
            </Box>
        </Box>
    );
};
