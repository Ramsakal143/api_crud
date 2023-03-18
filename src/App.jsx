import React from "react";
import Register from "./components/Register";
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { Route,Routes } from "react-router-dom";
import StudentShow from "./components/StudentShow";
import Header from "./components/Header";
import Home from "./components/Home";

const App=()=>{
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="" element={<Home/>} />
                <Route path="/create" element={<StudentShow/>} />
                <Route path="/show" element={<Register/>} />
            </Routes>
            
        </div>
    )
}

export default App