import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './auth/Login' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
