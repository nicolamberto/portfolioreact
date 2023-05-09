import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function Projects() {
  return (

    <Box component={'div'} className='' sx={{
      height:1000,
      background:'#F4EEE0',
      p:'100px 100px 100px'
    }}>
      <Box sx={{
        width:'100%',
        height:'auto'
      }}>

      </Box>
<Card sx={{ 
      maxWidth: 265,
      boxShadow:'-1px 1px 30px 0px',
      cursor:'pointer'
      }}>
      <CardMedia
        component="img"
        alt="green iguana"
        src=''
        height="150"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
    
  );
}