import React, { useEffect, useState } from 'react'
import { Box,Image } from '@chakra-ui/react'
import Banner from '../components/Banner'
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios'
import LoadingGlobe from '../components/LoadingGlobe';
import { NavLink } from 'react-router-dom';


const HomePage = () => {
  const [countries, setCountries] = useState([])

  // fetching the data
  useEffect(() => {
     try {
       const fetchCountries = async () => {
          const response = await axios.get('https://restcountries.com/v3.1/all')
          console.log(response.data)
          const data = response.data
          setCountries(data)
       }
        setTimeout(() => {
          fetchCountries()
        }, 3000)
     } catch (error) {
       console.log(error)
     }
  }, [])

  return (
    <Box>
       <Banner />
       {/* heading */}
       <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p='1rem'
       >
          <Box><span>flag</span></Box>
          <Box><span>Name</span></Box>
          <Box><span>Region</span></Box>
          <Box><span>Capital</span></Box>
          <Box><span>Population</span></Box>
          <Box><span>Favorite</span></Box>
       </Box>
       <hr style={{width: '100%'}} />
        {/* country */}
        {
          countries.length > 0 ? (countries.map((country: any) => (
            <Box key={country.latlng}>
             <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p='1rem'
              >
                <NavLink to=''>
                  <Image 
                   src={country.flags.png}
                   alt={country.name.common}
                   boxSize="50px"
                  />
                </NavLink>
                <NavLink to={`/country/${country.latlng}`}><span className='country__span'>{country.name.official}</span></NavLink>
                <NavLink to={`/country/${country.latlng}`}><span className='country__span'>{country.region}</span></NavLink>
                <NavLink to={`/country/${country.latlng}`}><span className='country__span'>{country.capital}</span></NavLink>
                <NavLink to={`/country/${country.latlng}`}><span className='country__span'>{country.population}</span></NavLink>
                <NavLink to={`/country/${country.latlng}`}><span className='country__span'><FavoriteIcon /></span></NavLink>
             </Box>
            <hr style={{width: '100%'}} />
            </Box>
          ))): <LoadingGlobe />
        }
        
    </Box>
  )
}

export default HomePage