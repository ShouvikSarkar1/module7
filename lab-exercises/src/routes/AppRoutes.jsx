import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from '../pages/Login'
import BitcoinPage from "../pages/BitcoinPage";
import PageNotFound from "../pages/PageNotFound";


function AppRoutes(props) {

    return (
        <Routes>
            <Route index element={<HomePage {...props}/>}/>
            <Route path='/login' element={<Login {...props}/>}/>
            <Route path='/bitcoinpage' element={<BitcoinPage {...props}/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}
export default AppRoutes;