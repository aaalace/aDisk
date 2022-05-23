import React, { Fragment } from "react";
import { useEffect } from "react";

const ThemeContainer = (props) => {

    useEffect(() => {
        let storedTheme = localStorage.getItem('theme')

        if(storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
        else{
            document.documentElement.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', 'light')
        }
    }, []);

    return(
        <Fragment>
            {props.children}
        </Fragment>
    )
};

export default ThemeContainer