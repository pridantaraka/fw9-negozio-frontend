
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import ProductsDetail from './pages/home/ProductsDetail'
import Login from './pages/auth/Login'
import LoginSeller from './pages/auth/LoginSeller'
import Register from './pages/auth/Register'
import RegisterSeller from './pages/auth/RegisterSeller'
import ResetPassword from './pages/auth/ResetPassword'
import ConfirmResetPassword from './pages/auth/ConfirmResetPassword'
import Checkout from './pages/profile/Checkout'
import ProfileSeller from './pages/profile/ProfileSeller'
import ShippingAddress from './pages/profile/ShippingAddress'
import MyOrder from './pages/profile/MyOrder'
import MyBag from './pages/profile/MyBag';

function App() {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/Checkout" element={<Checkout/>}/>
            <Route path="profile" element={<ProfileSeller/>}/>
            <Route path="shippingaddress" element={<ShippingAddress />} />
            <Route path="myorder" element={<MyOrder />} />
            <Route path="loginseller" element={<LoginSeller />} />
            <Route path="register" element={<Register />} />
            <Route path="registerseller" element={<RegisterSeller />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="confirmresetpassword" element={<ConfirmResetPassword />} />
            <Route path="/ProductsDetail" element={<ProductsDetail />} />
            <Route path="mybag" element={<MyBag />} />
        </Routes>
        </>
    )
}

export default App;
