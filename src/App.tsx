import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login} from './Components/Login/Login';
import ContactForm from './Components/ContactForm/ContactForm';
import OurTeam from './Pages/OurTeam/OurTeam';
import NavBar from './Components/NabBar/NavBar';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/Homepage/AboutSection/AboutUs';

function App() {
  return (
   <BrowserRouter>
                  <NavBar />
  <main className="main-content">
     <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs/>}/>
                
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/team" element={<OurTeam />} />
                          
                {/* <Route
                  path="*"
                  element={
                    <NoData
                      message="Page not found!"
                      header={true}
                      footer={true}
                    />
                  }
                /> */}
              </Routes>
              <Footer/>
   
  </main>
      
             
          
    </BrowserRouter>
  );
}

export default App;
