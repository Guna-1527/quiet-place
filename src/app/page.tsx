import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Guide from './components/Guide'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Guide />
      <Footer />
    </div>
  )
}

export default page