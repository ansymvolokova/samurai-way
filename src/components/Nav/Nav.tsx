import React from 'react'
import classes from './Nav.module.css'

export const NavBar = () => {
    return (
        <nav className='nav'>
            <div className={classes.item}>
                <a href="">Profile</a>
            </div>
            <div className='item'>
                <a href="">Messages</a>
            </div>
            <div className='item'>
                <a href="">News</a>
            </div>
            <div className='item'>
                <a href="">Music</a>
            </div>
            <div className='item'>
                <a href="">Settings</a>
            </div>
        </nav>
        )
}