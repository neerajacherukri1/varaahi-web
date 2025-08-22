import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login} from './Components/Login/Login';
import ContactForm from './Components/ContactForm/ContactForm';
import OurTeam from './Components/OurTeam/OurTeam';
import NavBar from './Components/NabBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <BrowserRouter>
                 <NavBar/>
      
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
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
          
    </BrowserRouter>
  );
}

export default App;
