import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { Provider } from "react-redux";

import CheckerContainer from "./hocs/CheckerContainer";
import PrivateRoute from "./hocs/PrivateRoute";

import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";

import { store } from "./store";

export const App = () => {
    let responsive = false 
    if (useMediaQuery({ query: '(max-width: 1200px)' })){
        responsive = true
    }

    return (
        <Provider store={store}>
            <CheckerContainer>
                <Router>
                    <Routes>
                        <Route exact path="/*" element={<Home responsive={responsive}/>}/>
                        <Route exact path="/login" element={<Login responsive={responsive}/>}/>
                        <Route exact path="/register" element={<Register responsive={responsive}/>}/>
                        <Route exact path="/dashboard" element={<PrivateRoute>
                                                                    <Dashboard responsive={responsive}/>
                                                                </PrivateRoute>}/>
                        <Route exact path="/profile" element={<PrivateRoute>
                                                                    <Profile responsive={responsive}/>
                                                              </PrivateRoute>}/>
                    </Routes>
                </Router>
            </CheckerContainer>
        </Provider>
    );
}
