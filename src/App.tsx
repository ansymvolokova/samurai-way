import React from 'react';
import './App.css';
import {Header} from "./components/ Header/Header";
import {NavBar} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <Profile/>
            </div>
        </BrowserRouter>
    );
}

export default App;
