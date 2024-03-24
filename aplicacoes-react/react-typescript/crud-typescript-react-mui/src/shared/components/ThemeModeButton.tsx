import { Stack, Switch } from "@mui/material";
import { useAppThemeContext } from "../contexts";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

export const ThemeModeButton = () => {
    const { themeName, toggleTheme } = useAppThemeContext();
    const isDark = themeName === "DarkTheme";

    return (
        <Stack
            direction="row"
            spacing={0}
            sx={{ alignItems: "center", p: "5px 10px", width: "fit-content" }}
        >
            <LightModeIcon sx={{ color: isDark ? "#f7f6f3" : "#999997" }} />
            <Switch
                onChange={toggleTheme}
                color="default"
                sx={{
                    "& .MuiSwitch-thumb": {
                        color: isDark ? "#f7f6f3" : "#f2f2f2",
                    },
                    "& .MuiSwitch-track": {
                        backgroundColor: isDark ? "#f7f6f3" : "default",
                    },
                }}
            />
            <ModeNightIcon sx={{ color: isDark ? "#f7f6f3" : "#999997" }} />
        </Stack>
    );
};
