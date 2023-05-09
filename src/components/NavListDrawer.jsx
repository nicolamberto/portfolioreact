import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function NavListDrawer ({navLinks}){
    return (
        <Box sx={{width: 250, bgcolor:'white'}}>
        <nav aria-label="secondary mailbox folders">
          <List>
            {
              navLinks.map(item=> (
                <ListItem disablePadding key={item.title}>
                  <ListItemButton component='a' href={item.path}>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
              </ListItem>
              ))
            }
          </List>
        </nav>
        </Box>
    )
}