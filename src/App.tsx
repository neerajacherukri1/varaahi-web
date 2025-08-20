import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Login} from './Components/Login/Login';
import ContactForm from './Components/ContactForm/ContactForm';
import OurTeam from './Components/OurTeam/OurTeam';

function App() {
  return (
   <BrowserRouter>
      
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/ourteam" element={<OurTeam />} />
                          
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
          
    </BrowserRouter>
  );
}

export default App;
