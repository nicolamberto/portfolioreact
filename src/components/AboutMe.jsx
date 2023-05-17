import { Box, Typography, Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import profileimage from '../images/fotoportfolio.jpg'
import secondprofileimg from '../images/secondpic.jpg';
import ParticlesBackground from "./ParticlesBackground";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { motion } from "framer-motion";
import resume from '../resume/resume.pdf';


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
            <Box id="aboutme"
            component={'div'}
            sx={{
                display:'flex',
                flexDirection:{xs:'column', sm:'column', md:'row'},
                mb:{xs:0, sm:0},
                mt:{xs:0, sm:0},
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
                <Box data-aos='fade-right'
                
                
                >
                    <Typography variant="img" component={'img'} 
                    src={profileimage}
                    sx={{
                    maxWidth:{md:280, sm:280, lg:300, xs:250},
                    ml:{xs:0, sm:0, md:5, lg:5, xl:5},
                    borderRadius:50
                    }}
                    ></Typography>
                </Box>
                <Box
                    data-aos='fade-up'
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        flexDirection:'column',
                        
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter:'blur(10px)',
                        gap:1,
                        mr:5,
                        ml:5,
                        pt:2,
                        pb:2,
                        pl:3,
                        pr:3
                    }}
                >
                    <Typography sx={{fontSize:{xs:20, sm:30, md:35}}} variant="h3">Hi, I`m  <Typography sx={{color:'#1D267D'}} variant="span">Nicolas Lamberto</Typography></Typography>
                    <Typography sx={{fontSize:{xs:17, sm:20, md:25, lg:30}}} variant="h5">Frontend Developer.</Typography>
                    <Typography sx={{fontSize:{xs:14, sm:15, md:15, lg:17}}} variant="p">My passion is web development and I have learned to use the front-end technology React to create dynamic and interactive user interfaces. I feel very comfortable working in a team and enjoy facing new challenges to improve my skills. I like to stay up-to-date on the latest trends and technologies in the programming world, and I am eager to continue learning and growing in my career. </Typography>

                    <div>
                        <Button component={'a'} href={resume} download={'resume-lamberto'}>DOWNLOAD RESUME <DownloadIcon/> </Button>
                    </div>
                    
                </Box>
            </Box>
        </Box>
        
        
        
    )

}