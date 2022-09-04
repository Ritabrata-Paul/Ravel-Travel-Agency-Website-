import React from 'react'
import Destination from './Components/Destination'
import DownloadApp from './Components/DownloadApp'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Offer from './Components/Offer'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
import Tours from './Components/Tours'

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destination />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
      <Footer />
    </div>
  )
}
