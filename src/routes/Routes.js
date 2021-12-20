import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "../pages/Home/Home";
import Pokemon from "../pages/Pokemon/Pokemon";

function RoutesFromSite() {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<Home/>}></Route>
                <Route path='/pokemon/:id' element={<Pokemon/>}></Route>
            </Routes>
        </Router>
    )
}


export default RoutesFromSite;