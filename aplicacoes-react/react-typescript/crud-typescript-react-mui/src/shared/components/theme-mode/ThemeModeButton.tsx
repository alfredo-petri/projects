import { Stack, Switch,  } from "@mui/material";
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkTheme, LightTheme, useBreakpoints } from "../../themes";

export const ThemeModeButton: React.FC = () => {
    const { themeName, toggleTheme } = useAppThemeContext();
    const isDark = themeName === "DarkTheme";
    const isLight = themeName === "LightTheme";
    

    return (
        <Stack
            direction="row"
            spacing={0}
            // sx={{ alignItems: "center", p: "5px 10px", width: "fit-content", position:"Fixed", top: isDrawerOpen ? "" : "0", bottom: isDrawerOpen ? "0" : "",  left: isTablet? (isDrawerOpen? "45px" : "0") : "", right: isTablet? (isDrawerOpen? "" : "") : "0", zIndex: isDrawerOpen ? "10000" : "" }}
            sx={{ alignItems: "center", p: "5px 10px", width: "fit-content", position:"relative", bottom: 0, left : "45px", }}
        >
            <LightModeIcon sx={{ color: isDark ? DarkTheme.palette.text.secondary : LightTheme.palette.text.primary }} />
            <Switch
                onChange={toggleTheme}
                color="default"
                sx={{
                    "& .MuiSwitch-thumb": {
                        color: isDark ? DarkTheme.palette.text.secondary : LightTheme.palette.text.primary
                    },
                    "& .MuiSwitch-track": {
                        backgroundColor: isLight ? LightTheme.palette.text.primary : DarkTheme.palette.text.primary 
                    },
                }}
            />
            <ModeNightIcon sx={{ color: isDark ? DarkTheme.palette.text.secondary : LightTheme.palette.text.primary }} />
        </Stack>
    );
};
