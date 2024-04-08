import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext, useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { DashBoard } from "../pages";
import { DarkTheme, LightTheme } from "../shared/themes";

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();
    const {themeName} = useAppThemeContext()
    const isDark = themeName === "DarkTheme"

    useEffect(() => {
        setDrawerOptions([
            {
                label: "Home",
                path: "/home",
                icon: <HomeIcon sx={{color: "#212121"}} />,
                color: isDark ? DarkTheme.palette.text.secondary : LightTheme.palette.text.primary
            },
        ]);
    }, []);

    return (
        <>
            <Routes>
                <Route path="/home" element={<DashBoard />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </>
    );
};
