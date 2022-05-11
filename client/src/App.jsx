import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Home } from "./routes/Home";
import { Dashboard } from "./routes/Dashboard";
import { Profile } from "./routes/Profile";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/*" element={<Home/>}/>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>
    );
}
