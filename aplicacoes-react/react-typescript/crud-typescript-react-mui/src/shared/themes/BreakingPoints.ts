import { useMediaQuery, useTheme } from "@mui/material";


export const useBreakpoints = () => {
    
    const theme = useTheme();
    
    return {
        isMobile: useMediaQuery(theme.breakpoints.down("sm")),
        isTablet: useMediaQuery(theme.breakpoints.down("md")),
        isNotebook: useMediaQuery(theme.breakpoints.down("lg")),
        isDesktop: useMediaQuery(theme.breakpoints.down("xl")),
        isLargeView: useMediaQuery(theme.breakpoints.up("xl")),
    };
}
