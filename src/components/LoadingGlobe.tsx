import { Box } from '@chakra-ui/react';
import { Backdrop } from '@mui/material';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/globe.json';

const LoadingGlobe = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <Box
        margin='0 auto'
        width="20%"
        height="20%"
        mt='5rem'
        backgroundColor='transparent'
    >
        <Lottie 
         options={defaultOptions}
         width={200}
         height={200}
         style={{
            backgroundColor: 'transparent',
            margin: '0 auto',
         }}
        />
    </Box>
  )
}

export default LoadingGlobe