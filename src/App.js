
import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/home/Home'
import ProductsDetail from './pages/home/ProductsDetail'
import Login from './pages/auth/Login'
import LoginSeller from './pages/auth/LoginSeller'
import Register from './pages/auth/Register'
import RegisterSeller from './pages/auth/RegisterSeller'
import ResetPassword from './pages/auth/ResetPassword'
import ConfirmResetPassword from './pages/auth/ConfirmResetPassword'
import Profile from './pages/profile/Profile'
import Category from './pages/home/Category'
import Checkout from './pages/profile/Checkout'
import ShippingAddress from './pages/profile/ShippingAddress'
import MyOrder from './pages/profile/MyOrder'
import MyBag from './pages/profile/MyBag';
import ProfileSeller from './pages/profile/ProfileSeller'
import MyProduct from './pages/profile/MyProduct'
import SellingProduct from './pages/profile/SellingProduct'
import MyOrderSeller from './pages/profile/MyOrderSeller'
import OrderCancel from './pages/profile/OrderCancel'

import PrivateRoute from "./components/PrivateRoute";


function App() {
    React.useEffect(() => {}, []);
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="checkout" element={<Checkout/>}/>
                <Route path="profile" element={
                <PrivateRoute>
                    <Profile/>
                </PrivateRoute>}/>
                <Route path="profileseller" element={<ProfileSeller />} />
                <Route path="myorder" element={<MyOrder />} />
                <Route path="ordercancel" element={<OrderCancel />} />
                <Route path="myorderseller" element={<MyOrderSeller />} />
                <Route path="myproduct" element={<MyProduct />} />
                <Route path="sellingproduct" element={<SellingProduct />} />
                <Route path="shippingaddress" element={<ShippingAddress />} />
                <Route path="myorder" element={<MyOrder />} />
                <Route path="loginseller" element={<LoginSeller />} />
                <Route path="register" element={<Register />} />
                <Route path="registerseller" element={<RegisterSeller />} />
                <Route path="resetpassword" element={<ResetPassword />} />
                <Route path="confirmresetpassword" element={<ConfirmResetPassword />} />
                <Route path="category" element={<Category />} />
                <Route path="productdetail" element={<ProductsDetail />} />
                <Route path="mybag" element={<MyBag />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
