import { Search2Icon } from '@chakra-ui/icons'
import { Box, Heading, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Box>
       <Box
         display="flex"
         flexDirection='column'
         alignItems='center'
         justifyContent='center'
         pt='2rem'
         gap={'3rem'}
       >
            <Heading letterSpacing='1rem' size='6xl' fontSize={'6rem'} >Flagify</Heading>
            <Text letterSpacing='0.5rem'>Country-data, made elegantly simple</Text>            
                <Input 
                    placeholder="Search for a country..." size="lg" mt='1rem' 
                    w='100%'
                    h={'3rem'}
                    borderRadius='0.5rem'
                    p={10}
                />
       </Box>
    </Box>
  )
}

export default Banner