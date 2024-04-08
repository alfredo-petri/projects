import { Stack, Switch } from "@mui/material";
import { useAppThemeContext } from "../../contexts";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

export const ThemeModeButton: React.FC = () => {
    const { toggleTheme } = useAppThemeContext();

    return (
        <>
            <Stack
                direction="row"
                spacing={0}
                sx={{
                    alignItems: "center",
                    p: "5px 10px",
                    justifyContent: "center",
                }}
            >
                <LightModeIcon />
                <Switch onChange={toggleTheme} color="default" />
                <ModeNightIcon />
            </Stack>
        </>
    );
};
