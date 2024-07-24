import React from 'react'
import Navbar from '../components/Navbar'
import CardA from '../components/CardA'
import Notification from '../components/Notification'
import Footer from '../components/Footer'
import Box from '../components/Box'

function Home() {
  return (
    <>
        <Navbar />
        <CardA />
        <Box />
        <Notification />
        <Footer />
    </>
  )
}

export default Home
