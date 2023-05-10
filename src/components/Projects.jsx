import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { motion } from 'framer-motion';

import furnimark from '../images/projectpics/furnimark.png';
import calculator from '../images/projectpics/calculator.png';
import moviesapi from '../images/projectpics/moviesapi.png';
import oldportfolio from '../images/projectpics/oldportfolio.png';
import photopaty from '../images/projectpics/photopaty.png';
import portfolioreact from '../images/projectpics/portfolioreact.png';
import randomuser from '../images/projectpics/randomuser.png';
import rickandmortyapi from '../images/projectpics/rickandmortyapi.png';
import tasklist from '../images/projectpics/tasklist.png';
import weatherreact from '../images/projectpics/weatherreact.png';
import weather from '../images/projectpics/weather.png';
import fondo from '../images/projectpics/fondoprojects.jpg';



const projects = [
  {name:'Furnimark', tecs:'HTML/CSS', image: furnimark},
  {name:'Calculator', tecs:'HTML/CSS/JS', image: calculator},
  {name:'Movies API', tecs:'HTML/CSS/JS', image: moviesapi},
  {name:'Old Portfolio', tecs:'HTML/CSS/JS', image: oldportfolio},
  {name:'Photopathy', tecs:'HTML/CSS/JS', image: photopaty},
  {name:'Portfolio React JS', tecs:'React JS', image: portfolioreact},
  {name:'Random User', tecs:'React JS', image: randomuser},
  {name:'Rick and Morty API', tecs:'HTML/CSS/JS', image: rickandmortyapi},
  {name:'Tasklist', tecs:'React JS', image: tasklist},
  {name:'Weather API React', tecs:'React JS', image: weatherreact},
  {name:'Weather API', tecs:'HTML/CSS/JS', image: weather},
  
]

export default function Projects() {

  useEffect(()=>{
    Aos.init();
},[])

  return (

    <Box sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      background: `linear-gradient(#2C74B3, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${fondo});`,
      backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
    }}>
      <Typography data-aos='fade-left' variant='h2' sx={{p:10, color:'white'}}>Projects</Typography>
      <Box component={'div'} className='' sx={{
      display:'grid',
      gridTemplateColumns:'1fr 1fr 1fr',
      gap:5,
      height:'auto',
      
      p:''
    }}>
      
      {projects.map((item) => (
        <Card data-aos="fade-left" 
          sx={{ 
            width: 265,
            height:300,
            boxShadow:'-1px 1px 30px 0px',
            cursor:'pointer'
          }}
          component={motion.div}
          whileHover={{scale:1.1}} whileTap={{scale:0.9}}
          >
            
          <CardMedia
            component="img"
            alt={item.name}
            src={item.image}
            height="150"
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.tecs}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">github</Button>
            <Button size="small">deployment</Button>
          </CardActions>
        </Card>  
              ))}

      </Box>
    </Box>
    
    
  );
}