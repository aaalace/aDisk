import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";

import CheckerContainer from "./hocs/CheckerContainer";
import PrivateWrapper from "./hocs/PrivateRoute";
import AnonymousRoute from "./hocs/AnonymousRoute";

import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";

import { store } from "./store";

export const App = () => {

    return (
        <Provider store={store}>
            <CheckerContainer>
                <Router>
                    <Routes>
                        <Route exact path="/*" element={<Home/>}/>
                        <Route
                        exact path="/login"
                        element={
                            <AnonymousRoute>
                                <Login/>
                            </AnonymousRoute>
                        }
                        />
                        <Route
                        exact path="/register"
                        element={
                            <AnonymousRoute>
                                <Register/>
                            </AnonymousRoute>
                        }
                        />
                        <Route element={<PrivateWrapper />}>
                            <Route exact path="/dashboard" element={<Dashboard/>} />
                        </Route>
                        <Route element={<PrivateWrapper />}>
                            <Route exact path="/profile" element={<Profile/>} />
                        </Route>
                    </Routes>
                </Router>
            </CheckerContainer>
        </Provider>
    );
}
