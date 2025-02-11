import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Home from '../Home/Home';

const Routing = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
     
      </Routes>
    </div>
  );
}

export default Routing