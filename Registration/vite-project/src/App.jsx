import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Products';
import Reviews from './Reviews';
import Updates from './Updates';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<>
          <Nav />
          <Home />
          <Footer />
        </>} />
        <Route path="/Products" element={<>
          <Nav />
          <Products />
          <Footer />
        </>} />
        <Route path="/Reviews" element={<>
          <Nav />
          <Reviews />
          <Footer />
        </>} />
        <Route path="/Updates" element={<>
          <Nav />
          <Updates />
          <Footer />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

