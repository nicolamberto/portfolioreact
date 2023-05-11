import { Box, Button, Typography, } from "@mui/material";
import fondo from '../images/fondo-inicio.jpg'
import { Typewriter } from 'react-simple-typewriter'





export default function Presentacion (){
    return(
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',   
            background: `linear-gradient(#2C74B3, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${fondo});`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            height:'100vh',
            width:'100%',
            
            
        }} >
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                gap:3,
                color:'white'
            }}>
                
                <Typography sx={{fontSize:{xs:35, sm:50, md:60}}} variant="h2">Welcome. </Typography>
                <Typography sx={{fontSize:{xs:30, sm:50, md:60}}} variant="h3">I am 
                <Typography sx={{fontSize:{xs:35, sm:50, md:60}, color:'#5C469C'}} variant="span">
                <Typewriter 
                words={[' Software developer']}
                loop={false}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                />   
                </Typography>
                </Typography>
                <Button variant="contained">Go to portfolio. </Button>
                
            </Box>
            
            
            {/* <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                color:'white',
                gap:4,
                width:'90%',
                height:'auto',
                textAlign:'center',
                pt: 10,
            }}>
            </Box> */}
                
        </Box>
    )
}