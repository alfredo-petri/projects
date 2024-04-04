import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeModeButton } from "../shared/components/theme-mode/ThemeModeButton";
import { Button } from "@mui/material";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';

export const AppRoutes = () => {

    const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext();

    useEffect(()=>{
        setDrawerOptions([
            {
                label: "Home",
                path: "/home",
                icon: <HomeIcon />
            },           
        ])
    }, [])

    return (
        <>
            <ThemeModeButton />
            <Button onClick={toggleDrawerOpen}>menu</Button>

            <Routes>
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </>
    );
};
