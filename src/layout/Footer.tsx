import { Box } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Footer = () => {
  const color = useSelector((state: any) => state.backgroundColor.color)
  return (
    <Box
      as="footer"
      bg="gray.800"
      color= {color === '#112838' ? '#fff' : '#112838'}
      textAlign="center"
      justifyContent='center'
    >
      <span>Made with love By  Richard Acheampong @CodeGenitor</span>
    </Box>
  )
}

export default Footer