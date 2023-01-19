import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import CountryPage from '../pages/CountryPage'
import ErrorPage from '../pages/ErrorPage'
import FavoritePage from '../pages/FavoritePage'
import HomePage from '../pages/HomePage'

const Index = () => {
  return (
    <BrowserRouter>
        <nav>
           <Navbar /> 
        </nav>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/country/:id" element={<CountryPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default Index