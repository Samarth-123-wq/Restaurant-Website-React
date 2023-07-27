import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import GitHub from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign : "center",bgcolor:"black",color:"white",p:2}}>
        <Box sx ={{ my:3, "& svg":{
            fontSize:"60px",
            cursor:"pointer",
            mr:2,
        },
        "& svg:hover":{
            color:"goldenrod",
            transform:'translateX(5px)',
            transition:" all 400ms"
        }
        }}>
         <InstagramIcon />
         <Twitter />
         <GitHub />
          <WhatsappIcon />
        </Box>
        <Typography variant='h5' sx={{"@media(max-width:600px)":{fontSize:"1rem",},}}>Made By Samarth Jain &copy; 
        </Typography>
      </Box>
    </>
  )
}

export default Footer
