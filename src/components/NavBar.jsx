import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {motion} from 'framer-motion'

const navLinks = [
    {
        title: 'AboutMe', path: '#aboutme'
    },
    {
        title: 'Skills', path: '#skills'
    },
    {
        title: 'Projects', path: '#projetcs'
    },
    {
        title: 'Contact', path: '#contact'
    },
]

export default function NavBar(){

    const [open, setOpen] = useState(false);
    
    return(
        <AppBar>

            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <IconButton 
                    color="inherit" 
                    onClick={()=> setOpen(true)}
                    sx={{display: {xs:'block', sm:'block', md: 'none'}}}> 
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
                        
                            <IconButton component={motion.div} whileHover={{scale:1.3}} whileTap={{scale:0.9}} color="inherit"><WhatsAppIcon/></IconButton>
                            <IconButton component={motion.div} whileHover={{scale:1.3}} whileTap={{scale:0.9}} color="inherit"><InstagramIcon/></IconButton>
                            <IconButton component={motion.div} whileHover={{scale:1.3}} whileTap={{scale:0.9}} color="inherit"><LinkedInIcon/></IconButton>
                            <IconButton component={motion.div} whileHover={{scale:1.3}} whileTap={{scale:0.9}} color="inherit"><GitHubIcon/></IconButton>
                        
                        
                    </Box>
                </motion.div>
                
                
                <Drawer open={open} anchor='left' onClose={()=> setOpen(false)}>
                    <NavListDrawer navLinks={navLinks}/>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}