import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();
 const handleNavigate = () => {
   navigate( '/login')
  };

  return (
    <div>
      <button  onClick={handleNavigate}> login</button>
    </div>
  )
}

export default Home
