import React from 'react'
import Hero from '../components/layout/Hero'
import DiscoverSlider from '../components/layout/DiscoverSlider'
import About from '../components/layout/About'
const Home = () => {
  return (
    <div>
      <Hero />
      <DiscoverSlider/>
      <div id="about-us">
        <About/>
      </div>
    </div>
  )
}

export default Home
