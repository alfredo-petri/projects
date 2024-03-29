import { Box, Drawer, useTheme, Divider, useMediaQuery } from "@mui/material";
import { UserAvatar } from "../user-avatar/UserAvatar";
import { MenuOptions } from "./MenuOptions";
import { useDrawerContext } from "../../contexts";
import { HomeRepairService } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';


interface IMenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()


    return (
        <Box>
            <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
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
                        <MenuOptions 
                            label="Home"
                            to="/pagina-inicial"
                            onClick={smDown? toggleDrawerOpen : undefined}
                            icon= {<HomeIcon />}
                        />
                        <MenuOptions 
                            label="pagina"
                            to="/pagina"
                            onClick={smDown? toggleDrawerOpen : undefined}
                            icon= {<HomeRepairService />}
                        />
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smDown? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </Box>
    );
};
