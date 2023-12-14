import React from "react";
import ReactDOM from "react-dom/client";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import "./AppBar.css";



export default function AppBar({darkMode, darkModeToggle}) {

    return (
        <div className={`appbar ${darkMode && "appbar-Dark"}`}>
            <div><h1 className="app-heading">Where in the world?</h1></div>
            <div >{darkMode ? <div className="mode-toggle-wrapper" onClick={darkModeToggle} ><MdDarkMode /><h5>Light Mode</h5></div> : <div className="mode-toggle-wrapper" onClick={darkModeToggle}><CiDark /><h5>Dark Mode</h5></div>} </div>
        </div>
    )
};