import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import React from "react";

interface IMenuOptionsProps {
    label: string;
    icon: React.ReactNode;
    to: string;
    onClick: (() => void) | undefined;
}

export const MenuOptions: React.FC<IMenuOptionsProps> = ({
    icon,
    label,
    onClick,
    to,
}) => {
    const navigate = useNavigate();

    const resolvePath = useResolvedPath(to);
    const match = useMatch ({path: resolvePath.pathname, end: false })
    
    const handleClick = () => {
        onClick?.();
        navigate(to);
    };

    return (
        <>
            <List component="nav">
                <ListItemButton selected={!!match} onClick={handleClick}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
                </ListItemButton>
            </List>
        </>
    );
};
