import { Avatar, Badge, Box, styled, useTheme } from "@mui/material";
import userIcon2 from "../../assets/icon-02.png";


export const UserAvatar = () => {
    const theme = useTheme();

    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            backgroundColor: "#16C60C",
            color: "#16C60C",
            boxShadow: `0 0 0 8px ${theme.palette.background.paper}`,
            "&::after": {
                position: "absolute",
                top: -2,
                left: -2,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "2px solid currentColor",
                content: '""',
            },
        },
        "@keyframes ripple": {
            "0%": {
                transform: "scale(0.8)",
                opacity: 1,
            },
            "100%": {
                transform: "scale(2.5)",
                opacity: 0,
            },
        },
    }));

  return (
    <Box>
        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            variant="dot"
                        >
                            <Avatar
                                sx={{ width: theme.spacing(10), height: theme.spacing(10)}}
                                src={userIcon2}
                            />
                        </StyledBadge>
    </Box>
  )
}
