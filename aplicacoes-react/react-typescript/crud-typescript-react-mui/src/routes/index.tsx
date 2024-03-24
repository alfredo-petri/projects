import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeModeButton } from "../shared/components/theme-mode/ThemeModeButton";
import { Button } from "@mui/material";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {

    const {toggleDrawerOpen} = useDrawerContext();

    return (
        <>
            <ThemeModeButton />
            <Button onClick={toggleDrawerOpen}>menu</Button>

            <Routes>
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Routes>
        </>
    );
};
