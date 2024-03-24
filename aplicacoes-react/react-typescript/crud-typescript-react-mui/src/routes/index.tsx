import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeModeButton } from "../shared/components/ThemeModeButton";

export const AppRoutes = () => {

    return (
        <Routes>
            <Route
                path="/pagina-inicial"
                element={<ThemeModeButton/>}
            />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};
