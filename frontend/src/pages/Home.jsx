import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        height: "100vh",
      }}>
        <Navbar/>
    </div>
  )
}

export default Home