import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header/index.jsx";
import { Home } from "./components/Home/index.jsx";
import { Login } from "./components/Login/index.jsx";
import { Registration } from "./components/Registration/index.jsx";

export const App = () => {

  return (
    <div className="app">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
    </div>
  );
}