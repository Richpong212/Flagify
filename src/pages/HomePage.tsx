import React, { useEffect, useState } from 'react'
import { Box,Image, Input } from '@chakra-ui/react'
import Banner from '../components/Banner'
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios'
import LoadingGlobe from '../components/LoadingGlobe';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/counterSlice';


const HomePage = () => {
  const [countries, setCountries] = useState([])

  //state from redux store
  const dispatch = useDispatch()

  //handleClick
  const handleClick = (e:any) => {
    dispatch(increment())
    console.log(e.target.id)
  }


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
        }, 2000)
     } catch (error) {
       console.log(error)
     }
  }, [])

  // handleSearch
  const handleSearch = (e: any) => {
    if(!e.target.value) return setCountries(countries)    

    const searchResult = countries.filter((country: any) => {
      return country.name.official.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setCountries(searchResult)
  }


  return (
    <Box>
       <Banner  />
       <Box>
         <Input 
            placeholder="Search for a country..." size="lg" mt='1rem' 
             w='100%'
             h={'3rem'}
             borderRadius='0.5rem'
             p={10}
             id="search"
             onChange={handleSearch}
             onKeyDown={handleSearch}
             onBlur={() => setCountries(countries)}
         />
       </Box>
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
                <NavLink to={`/country/${country.name.official}`}><span className='country__span'>{country.name.official.split(' ')[0]}</span></NavLink>
                <NavLink to={`/country/${country.name.official}`}><span className='country__span'>{country.region}</span></NavLink>
                <NavLink to={`/country/${country.name.official}`}><span className='country__span'>{country.capital}</span></NavLink>
                <NavLink to={`/country/${country.name.official}`}><span className='country__span'>{country.population}</span></NavLink>
                <span 
                 className='country__span'
                 style={{cursor: 'pointer'}}
                 onClick={handleClick}
                 // id={country.name.official}
                 id={country.name.official}
                ><FavoriteIcon /></span>
             </Box>
            <hr style={{width: '100%'}} />
            </Box>
          ))): <LoadingGlobe />
        }
        
    </Box>
  )
}

export default HomePage