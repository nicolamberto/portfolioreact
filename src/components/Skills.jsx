import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import fondoskills from '../images/fondo-skills.jpg'


import htmllogo from '../images/html.png.png';
import jslogo from '../images/javascript.png.png';
import muilogo from '../images/mui.png.png';
import gitlogo from '../images/git.png.png';
import bootstraplogo from '../images/bootstrap.png.png';
import reactlogo from '../images/react.png.png';
import sasslogo from '../images/sass.png.png';
import csslogo from '../images/css.png.png';
import { Box, Typography } from '@mui/material';
import ParticlesBackground from './ParticlesBackground';

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
      padding: '50px 0',
      textAlign: 'center',
    }}>
      <Typography variant='h2'>
        Skills
      </Typography>
      
      <Box sx={{ 
        width: '50%', 
        height: 'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap: 2,
        }}>
        
        {skills.map((item) => (
          <ImageListItem key={item.name} 
          sx={{
            height:'90px'
          }}
          >
            <img
              src={`${item.image}`}
              alt={item.title}
              loading="lazy"
              style={{width:'80px', height:'auto'}}
            />
            <ImageListItemBar
              title={item.name}
              sx={{height:'30px', display:'none'}}
            />
          </ImageListItem>
        ))}
      </Box>
    </Box>
    
  );
}



