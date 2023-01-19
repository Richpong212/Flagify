import React from 'react'
import { Box } from '@chakra-ui/react'
import HomeIcon from '@mui/icons-material/Home';
import { MoonIcon } from '@chakra-ui/icons'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {  NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <Box
        display="flex"
        width= '100%'
        justifyContent="space-between"
        alignItems="center"
    >
       <NavLink to='/'><span>Logo</span></NavLink>
       <Box
          display="flex"
          gap='1rem'
       > 
          <NavLink to='/'><span><HomeIcon style={{fontSize: '25px'}} /></span></NavLink>
          <NavLink to=''><span><FavoriteIcon style={{fontSize: '25px'}} /></span></NavLink>
          <NavLink to=''><span><MoonIcon style={{fontSize: '25px'}} /></span></NavLink>
       </Box>
    </Box>
  )
}

export default Navbar