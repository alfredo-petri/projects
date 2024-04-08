import { Box, Drawer, Divider, useTheme } from "@mui/material";
import { UserAvatar } from "../user-avatar/UserAvatar";
import { MenuOptions } from "./MenuOptions";
import { useDrawerContext } from "../../contexts";
import { useBreakpoints } from "../../themes";
import { ThemeModeButton } from "../theme-mode/ThemeModeButton";

interface IMenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const { isTablet } = useBreakpoints();

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } =
        useDrawerContext();

    return (
        <Box>
            <Drawer
                open={isDrawerOpen}
                variant={isTablet ? "temporary" : "permanent"}
                onClose={toggleDrawerOpen}
            >
                <Box
                    width={theme.spacing(28)}
                    height="100vh"
                    display="flex"
                    flexDirection="column"
                >
                    <Box
                        width="100%"
                        height={theme.spacing(20)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <UserAvatar />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        {drawerOptions.map((drawerOption) => (
                            <MenuOptions
                                key={drawerOption.path}
                                label={drawerOption.label}
                                to={drawerOption.path}
                                onClick={isTablet ? toggleDrawerOpen : undefined}
                                icon={drawerOption.icon}
                            />
                        ))}
                    </Box>

                    <ThemeModeButton />
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={isTablet ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </Box>
    );
};
