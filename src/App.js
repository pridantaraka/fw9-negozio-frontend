import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import Profile from './pages/profile/Profile'

function App() {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </>
    )
}

export default App