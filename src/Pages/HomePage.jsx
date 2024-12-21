import React from 'react'
import Navbar from '../Components/Navbar'
import HeroCarousel from '../Components/Hero2'
import Footer from '../Components/Footer'
import API from '../Components/API'
import FoodPage from '../Components/Crd'

function HomePage() {
  return (<>
  
  <Navbar />
    <HeroCarousel />
    <FoodPage />
    <Footer />
  </>
  )
}

export default HomePage