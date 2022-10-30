import React from "react";
import './index.css'
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { IntlProvider } from 'react-intl';

import { store } from "./store/store";

import AuthedCheckerContainer from "./hocs/AuthedCheckerContainer";
import ThemeContainer from "./hocs/ThemeContainer";
import PrivateWrapper from "./hocs/PrivateWrapper";

import { messages } from './i18n/messages'
import { LOCALES } from './i18n/locales'

import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";
import PasswordResetConfirm from "./routes/PasswordResetConfirm";

export const App = () => {

    const [currentLocale, setCurrentLocale] = useState(getInitialLocale())
    
    const handleChange = ({ target: { value } }) => {
        setCurrentLocale(value)
        localStorage.setItem('locale', JSON.stringify(value))
    }

    function getInitialLocale() {
        const savedLocale = JSON.parse(localStorage.getItem('locale'))
        if(!savedLocale){
            localStorage.setItem('locale', JSON.stringify('en'))
        }
        return savedLocale || LOCALES.ENGLISH
    }

    return (
        <IntlProvider messages={messages[currentLocale]} locale={currentLocale}>
            <Provider store={store}>
                    <ThemeContainer>
                        <AuthedCheckerContainer>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/login/:page" element={
                                        <Login currentLocale={currentLocale} handleChange={handleChange}/>
                                    }/>
                                    <Route path="/register" element={
                                        <Register currentLocale={currentLocale} handleChange={handleChange}/>
                                    }/>
                                    <Route path="/password-reset-confirm/:uid/:token" element={
                                        <PasswordResetConfirm />
                                    }/>
                                    <Route path="/dashboard/:page" element={
                                        <PrivateWrapper>
                                            <Dashboard/>
                                        </PrivateWrapper>
                                    }/>
                                    <Route path="/profile/:page" element={
                                        <PrivateWrapper>
                                            <Profile currentLocale={currentLocale} handleChange={handleChange}/>
                                        </PrivateWrapper>
                                    }/>
                                    <Route path="/*" element={<Home currentLocale={currentLocale} handleChange={handleChange}/>}/>
                                </Routes>  
                            </BrowserRouter>
                        </AuthedCheckerContainer>    
                    </ThemeContainer>
            </Provider>
        </IntlProvider>
    );
}
