import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

export const MenuOptions = () => {
  return (
    <>
        <List component="nav">
            <ListItemButton>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
        </List>
    </>
  )
}
