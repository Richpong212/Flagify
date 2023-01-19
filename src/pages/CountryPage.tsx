import { ChevronDownIcon } from '@chakra-ui/icons'
import { 
  Box, Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
   } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CountryPage = () => {
  const [country, setCountry]:any = useState([])  
  const location = useLocation()
  const id = location.pathname.split('/country/')[1]
  console.log(country)


  useEffect(() => {
    try {
      const fectchCountry = async () => {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${id}`)
        setCountry(response.data)
      }
      fectchCountry()
    } catch (error) {
       console.log(error)
    }
  }, [id])


  return (
    <Box
     height='80vh'
    >
       <h1>{country.area}</h1>
       <Box
        width={["100%", "100%", "100%", "100%"]}
       >
          {
            country.map((item:any) => (
              <Box key={item.name}
              >
                 <Image 
                   src={item.flags.png} 
                   alt={item.name.common} 
                   width={["100%", "100%", "100%", "100%"]}
                   height='350px'
                  />
                  <Box
                   w='50%'
                   margin='0 auto'
                  >
                    <Menu>
                      <MenuButton
                      as={Button} rightIcon={<ChevronDownIcon />}
                      padding='10px'
                      fontSize='1.2rem'
                      width={["100%", "100%", "100%", "100%"]}
                      bg= '#122738'
                      color='white'
                      border='none'
                      >
                        {item.name.common} Details
                      </MenuButton>
                      <MenuList
                       
                      >
                        <MenuItem
                         bg= '#122738'
                         color='white'
                         border='none'
                         fontSize='1.2rem'
                         margin= '10px 0'
                         
                        >Capital: {item.capital}</MenuItem>
                        <MenuItem
                         bg= '#122738'
                         color='white'
                         border='none'
                         fontSize='1.2rem'
                         margin= '10px 0'
                        >Region: {item.region}
                        </MenuItem>
                        <MenuItem
                         bg= '#122738'
                         color='white'
                         border='none'
                         fontSize='1.2rem'
                         margin= '10px 0'
                        >Population: {item.population}
                        </MenuItem>
                        <MenuItem
                         bg= '#122738'
                         color='white'
                         border='none'
                         fontSize='1.2rem'
                         margin= '10px 0'
                        >Borders: {item.borders[0]}, {item.borders[1]}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                 </Box>
              </Box>
            ))
          }
       </Box>
    </Box>
  )
}

export default CountryPage