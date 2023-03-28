import React from 'react'
import Details from '../components/Details'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import Topimage from '../components/Topimage'

export default function Tour() {
  return (
    <div>
      <div>
        <Topimage />
      </div>
      
      <div>
      <NavbarComp />
      </div>

      <div>
        <Details />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
