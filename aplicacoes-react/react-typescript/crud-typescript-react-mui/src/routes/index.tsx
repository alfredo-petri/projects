import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { DashBoard } from "../pages";

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                label: "Home",
                path: "/home",
                icon: <HomeIcon />,
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
