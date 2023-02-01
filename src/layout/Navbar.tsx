import React from 'react'
import { Box } from '@chakra-ui/react'
import HomeIcon from '@mui/icons-material/Home';
import { MoonIcon } from '@chakra-ui/icons'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {  NavLink } from 'react-router-dom'
import { Badge } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, itemColor } from '../redux/colorSlice';



const Navbar = () => {
   // get state from redux store
   const Fav = useSelector((state: any) => state.favorite.value)
   const color = useSelector((state: any) => state.backgroundColor.color)
   const dispatch:any = useDispatch()

   // handle dispatch
   const handleDistpatch = () => {
      dispatch(changeColor())
      dispatch(itemColor())
   }


  return (
    <Box
        display="flex"
        width= '100%'
        justifyContent="space-between"
        alignItems="center"
    >
       <NavLink to='/'><span
            style={{
               fontSize: '25px',
               color: color === '#112838' ? '#fff' : '#112838'
            }}
       >CodeGenitor</span></NavLink>
       <Box
          display="flex"
          gap='1rem'
       > 
          <NavLink to='/'><span><HomeIcon style={{
            fontSize: '25px',
            color: color === '#112838' ? '#fff' : '#112838'
            }} /></span></NavLink>
          <NavLink to=''>
             <Badge
              badgeContent={Fav}
              color="primary"
             >
               <FavoriteIcon style={{
                  fontSize: '25px',
                  color: color === '#112838' ? '#fff' : '#112838'
                  }} />
             </Badge>
          </NavLink>
          <NavLink
           to=''
           ><span
            onClick={handleDistpatch}
           ><MoonIcon style={{
            fontSize: '25px',
            color: color === '#112838' ? '#fff' : '#112838'
            }} /></span></NavLink>
       </Box>
    </Box>
  )
}

export default Navbar