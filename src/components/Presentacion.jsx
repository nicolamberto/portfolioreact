import { Box, Button, Typography, } from "@mui/material";
import fondo from '../images/fondo-inicio.jpg'
import Wave from "react-wavify";
import computer from '../images/computer.png';
import ParticlesBackground from "./ParticlesBackground";




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
                
                <Typography variant="h2">Welcome. </Typography>
                <Typography sx={{display:'flex', flexDirection:'row'}} variant="h3">I am <Typography variant="h3" color={'#DBDFEA'}> . Frontend developer</Typography>.</Typography>
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