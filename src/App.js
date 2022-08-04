import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import LoginSeller from './pages/auth/LoginSeller'
import Register from './pages/auth/Register'
import RegisterSeller from './pages/auth/RegisterSeller'
import ResetPassword from './pages/auth/ResetPassword'
import ConfirmResetPassword from './pages/auth/ConfirmResetPassword'
import Profile from './pages/profile/Profile'

function App() {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="loginseller" element={<LoginSeller />} />
            <Route path="register" element={<Register />} />
            <Route path="registerseller" element={<RegisterSeller />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="confirmresetpassword" element={<ConfirmResetPassword />} />
        </Routes>
        </>
    )
}

export default App