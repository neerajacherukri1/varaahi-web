 import React from 'react'
import { useNavigate } from 'react-router-dom'
import AboutUs from '../Homepage/AboutSection/AboutUs';
import ContactForm from '../ContactForm/ContactForm';
import ServiceSection from '../Homepage/ServiceSection/ServiceSection';
import Testimonials from '../Homepage/Testimonials/Testimonials';
import Clients from '../Homepage/Clients/Clients';
import GetStarted from '../GetSatrted/GetStarted';

const Home = () => {

    const navigate = useNavigate();
 const handleNavigate = () => {
   navigate( '/login')
  };

  return (
    <div>
      {/* <button  onClick={handleNavigate}> login</button> */}
      <AboutUs/>
      <ServiceSection/>
      <Testimonials/>
      <Clients/>
      <ContactForm/>
      <GetStarted/>
    </div>
  )
}

export default Home
