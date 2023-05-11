import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import fondoskills from '../images/fondo-skills.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import {motion} from 'framer-motion'

import htmllogo from '../images/html.png.png';
import jslogo from '../images/javascript.png.png';
import muilogo from '../images/mui.png.png';
import gitlogo from '../images/git.png.png';
import bootstraplogo from '../images/bootstrap.png.png';
import reactlogo from '../images/react.png.png';
import sasslogo from '../images/sass.png.png';
import csslogo from '../images/css.png.png';
import { Box, Typography } from '@mui/material';


const skills = [
  {name:'HTML' ,image: htmllogo},
  {name:'CSS' ,image: csslogo},
  {name:'JavaScript' ,image: jslogo},
  {name:'React JS' ,image: reactlogo},
  {name:'SASS' ,image:sasslogo},
  {name:'Bootstrap' ,image: bootstraplogo},
  {name:'Material UI' ,image: muilogo},
  {name:'GIT' ,image: gitlogo},
]


export default function TitlebarImageList() {

  useEffect(()=>{
    Aos.init();
},[])

  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center',
      background: `linear-gradient( #2C74B3, rgba(33, 16, 16, 0.8)), url(${fondoskills})`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: '#fff',
      backgroundPosition: 'center center',
      padding: {xs:5, sm:8, md:10},
      textAlign: 'center',
    }}>
      <Typography sx={{fontSize:{xs:40, sm:45, md:60}}} variant='h2' data-aos='fade-right'>
        Skills
      </Typography>
      
      <Box data-aos='fade-right' sx={{ 
        width: '50%', 
        height: 'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap: 2,
        }}>
        
        {skills.map((item) => (
          <Box 
          key={item.name} 
          
          >
            <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
              <Box 
              sx={{
                cursor:'pointer',
                width:{lg:80, md:75, sm:58, xs:40}, 
                height:'auto'
              }}
              component={'img'}
              src={`${item.image}`}
              alt={item.title}
              loading="lazy"
              
              />
              <Typography variant='p' sx={{display:'none'}}>{item.name}</Typography>
            </motion.div>
            
              
              
            
          </Box>
        ))}
      </Box>
    </Box>
    
  );
}



