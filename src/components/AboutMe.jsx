import { Box, Typography, Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import profileimage from '../images/fotoportfolio.jpg'
import ParticlesBackground from "./ParticlesBackground";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import fondo from '../images/projectpics/fondoabout.jpg';


export default function AboutMe(){

    useEffect(()=>{
        Aos.init();
    },[])

    return(
        
            <Box
            className="animatedback"
        sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                maxWidth:'100%',
                height:'700px',
            
            }}
            
        >
            <Box
            component={'div'}
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:2,
                borderRadius:3,                
                width:'100%',
                height:'100%',
                background: 'rgba(255, 255, 255, 0)',
                backdropFilter:'blur(1px)'
            }}
            >
                <ParticlesBackground/>
                <Box data-aos='fade-right'>
            

                    <Typography variant="img" component={'img'} src={profileimage}
                sx={{
                    maxWidth:280,
                    ml:5,
                    borderRadius:50
                }}
                    ></Typography>
                </Box>
                <Box
                    data-aos='fade-up'
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'cemter',
                        flexDirection:'column',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter:'blur(10px)',
                        gap:1,
                        mr:5,
                        pt:2,
                        pb:2,
                        pl:3,
                        pr:3
                    }}
                >
                    <Typography variant="h3">Hi, I`m  <Typography sx={{color:'#1D267D'}} variant="span">Nicolas Lamberto</Typography></Typography>
                    <Typography variant="h5">Frontend Developer.</Typography>
                    <Typography variant="p">My passion is web development and I have learned to use the front-end technology React to create dynamic and interactive user interfaces. I feel very comfortable working in a team and enjoy facing new challenges to improve my skills. I like to stay up-to-date on the latest trends and technologies in the programming world, and I am eager to continue learning and growing in my career. </Typography>

                    <div>
                        <Button>DOWNLOAD RESUME <DownloadIcon/> </Button>
                    </div>
                    
                </Box>
            </Box>
        </Box>
        
        
        
    )

}