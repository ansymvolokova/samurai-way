import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className='nav'>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
        )
}