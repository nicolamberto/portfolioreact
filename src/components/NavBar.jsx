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

            <Toolbar sx={{diaplsy: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <IconButton 
                    color="inherit" 
                    onClick={()=> setOpen(true)}
                    sx={{display: {xs:'block', sm:'block', md: 'none'}}}> 
                    <MenuOpenIcon/>
                    </IconButton>
                    <motion.h2 initial={{x:-100}} animate={{x:0}}>NL</motion.h2>
                </Box>

                <motion.div
                initial={{scale:0}}
                transition={{duration:0.3}}
                animate={{scale:1}}
                >
                    <Box sx={{display:{xs:'none', sm:'none', md:'flex'}, gap:3}}>
                        {
                            navLinks.map(item =>(
                                <Button 
                                color="inherit" 
                                key={item.title}
                                component='a'
                                href={item.path}
                                >{item.title}</Button>
                                ))
                        }
                    </Box>
                </motion.div>

                <motion.div
                initial={{x:100}}
                animate={{x:0}}
                >
                    <Box sx={{padding:2.5}}>
                        <IconButton color="inherit"><WhatsAppIcon/></IconButton>
                        <IconButton color="inherit"><InstagramIcon/></IconButton>
                        <IconButton color="inherit"><LinkedInIcon/></IconButton>
                        <IconButton color="inherit"><GitHubIcon/></IconButton>
                    </Box>
                </motion.div>
                
                
                <Drawer open={open} anchor='left' onClose={()=> setOpen(false)}>
                    <NavListDrawer navLinks={navLinks}/>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}