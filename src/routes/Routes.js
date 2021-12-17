import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "../pages/Home";

function RoutesFromSite() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}


export default RoutesFromSite;