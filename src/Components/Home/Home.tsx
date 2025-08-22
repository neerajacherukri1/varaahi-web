 import React from 'react'
import { useNavigate } from 'react-router-dom'
import AboutUs from '../Homepage/AboutSection/AboutUs';

const Home = () => {

    const navigate = useNavigate();
 const handleNavigate = () => {
   navigate( '/login')
  };

  return (
    <div>
      <button  onClick={handleNavigate}> login</button>
      <AboutUs/>
    </div>
  )
}

export default Home
