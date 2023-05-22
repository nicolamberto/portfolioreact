import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {motion} from 'framer-motion'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const navLinks = [
    {
        title: 'AboutMe', path: '#aboutme'
    },
    {
        title: 'Skills', path: '#skills'
    },
    {
        title: 'Projects', path: '#projects'
    },
    
]

export default function NavBar(){

    const [open, setOpen] = useState(false);
    
    return(
        <AppBar>

            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <IconButton 
                    color="inherit" 
                    onClick={()=> setOpen(true)}
                    sx={{display: {xs:'flex', sm:'flex', md: 'none'}}}> 
                    <MenuOpenIcon/>
                    </IconButton>
                    <motion.h2 initial={{x:-100}} animate={{x:0}} transition={{duration:0.5}}>NL</motion.h2>
                </Box>

                <motion.div
                initial={{scale:0}}
                transition={{duration:0.5}}
                animate={{scale:1}}
                >
                    <Box sx={{display:{xs:'none', sm:'none', md:'flex'}, gap:3}}>
                        {
                            navLinks.map(item =>(
                                <a style={{textDecoration:'none', color:'white'}} href={item.path}>
                                <Button 
                                color="inherit" 
                                key={item.title}
                                component={motion.div} whileHover={{scale:1.1}} whileTap={{scale:0.9}}
                                >{item.title}</Button>
                                </a>
                                
                                ))
                        }
                    </Box>
                </motion.div>

                <motion.div
                initial={{x:100}}
                animate={{x:0}}
                transition={{duration:0.5}}
                >
                    <Box sx={{padding:0}}>
                        
                            <IconButton  component={motion.div} whileHover={{scale:1.3}} whileTap={{scale:0.9}} color="inherit"><a style={{textDecoration:'none', color:'white'}} target="_blank" href="https://api.whatsapp.com/send?phone=5493512642805&text=Hi!%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20getting%20in%20touch%20with%20you."><WhatsAppIcon/></a></IconButton>
                            <IconButton component={motion.div} whileHover={{scale:1.3}} whileTap={{scale:0.9}} color="inherit"><a style={{textDecoration:'none', color:'white'}} target="_blank" href="https://www.instagram.com/nicolamberto_/"><InstagramIcon/></a> </IconButton>
                            <IconButton component={motion.div} whileHover={{scale:1.3}} whileTap={{scale:0.9}} color="inherit"><a style={{textDecoration:'none', color:'white'}} target="_blank" href="https://www.linkedin.com/in/nicolaslamberto/"><LinkedInIcon/></a> </IconButton>
                            <IconButton component={motion.div} whileHover={{scale:1.3}} whileTap={{scale:0.9}} color="inherit"><a style={{textDecoration:'none', color:'white'}} target="_blank" href="https://github.com/nicolamberto"><GitHubIcon/></a> </IconButton>
                        
                    </Box>
                </motion.div>
                
                
                <Drawer open={open} anchor='left' onClose={()=> setOpen(false)}>
                    
                    <Box sx={{width: 250, bgcolor:'white'}}>
                        <nav aria-label="secondary mailbox folders">
                        <List>
                            {
                            navLinks.map(item=> (
                                <ListItem onClick={()=> setOpen(false)} key={item.title}>
                                <ListItemButton  component='a' href={item.path}>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                                </ListItem>
                            ))
                            }
                        </List>
                        </nav>
                    </Box>
                    
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}