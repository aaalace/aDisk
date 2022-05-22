import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { IntlProvider } from 'react-intl';

import CheckerContainer from "./hocs/CheckerContainer";
import PrivateWrapper from "./hocs/PrivateRoute";

import { messages } from './i18n/messages'
import { LOCALES } from './i18n/locales'

import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";

import { store } from "./store";

export const App = () => {

    const [currentLocale, setCurrentLocale] = useState(getInitialLocale())
    
    const handleChange = ({ target: { value } }) => {
        setCurrentLocale(value)
        localStorage.setItem('locale', JSON.stringify(value))
    }

    function getInitialLocale() {
        const savedLocale = JSON.parse(localStorage.getItem('locale'))
        return savedLocale || LOCALES.ENGLISH
    }

    return (
        <IntlProvider messages={messages[currentLocale]} locale={currentLocale}>
            <Provider store={store}>
                <CheckerContainer>
                    <Router>
                        <Routes>
                            <Route exact path="/*" element={<Home currentLocale={currentLocale} handleChange={handleChange}/>}/>
                            <Route exact path="/login" element={<Login/>}/>
                            <Route exact path="/register" element={<Register/>}/>
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
        </IntlProvider>
    );
}
