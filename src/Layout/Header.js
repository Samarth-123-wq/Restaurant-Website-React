import React, { useState } from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import Menu from '@mui/icons-material/Menu';
import { Link , NavLink} from 'react-router-dom';
import '../styles/headerStyles.css'
const Header = () => {
  const [drawopen,setdrawopen] = useState(false);
// menu
 const handleToggle =()=>{
  setdrawopen(!drawopen)
 }
  //menu drawer
  const drawer =(
    <Box onClick ={handleToggle} sx={{textAlign :  'centers'}}>
 <Typography variant='h6' component={'div'} color={'greenyellow'} sx={{flexGrow : 1,my:2}}>
              <FoodBankIcon />
              My Restaurant
            </Typography>
            <Divider />
              <ul className='mobile-navigation'>
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
              </ul>
    </Box>
  )
  return (
    <>
      <Box>
          <AppBar component={'nav'} sx={{bgcolor : "orange"}}>
            <Toolbar>
              <IconButton color = "white" aria-label='open drawer' edge = 'start'
              sx ={{mr : 2,"& .MuiDrawer-paper":{
                boxSizing : 'border-box',
                width : '240px'
              },display : { sm:'none'}}}
              onClick={handleToggle}>
              <Menu />
              </IconButton>
            <Typography variant='h6' component={'div'} color={'greenyellow'} sx={{flexGrow : 1}}>
              <FoodBankIcon />
              My Restaurant
            </Typography>
            <Box sx={{ display :{sm : 'block', xs : 'none'}}}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink activeClassName = 'active'to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
              </ul>
            </Box>
            </Toolbar>
          </AppBar>
          <Box>
            <Drawer variant='temporary' open={drawopen} onClose={handleToggle}
            sx={{display:{xs:'block',sm:'none'}}}>
              {drawer}
            </Drawer>
          </Box>
          <Box>
          <Toolbar />
          </Box>
      </Box>
    </>
  )
}

export default Header
