import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeModeButton } from "../shared/components/theme-mode/ThemeModeButton";
import { IconButton } from "@mui/material";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

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
            <IconButton aria-label="menu" onClick={toggleDrawerOpen}><MenuIcon /></IconButton>

            <Routes>
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </>
    );
};
