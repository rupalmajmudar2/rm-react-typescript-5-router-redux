import React from 'react';
import {Link, NavLink} from 'react-router-dom'

//Link tag is <a> link in the inspector, but avoids sending a new request!
//Navlink [Go to the page, btn, rightclick, inspect] adds a "class=active" where we can add styling
const Navbar = () => {
    return (
        <nav className='ui raise very padded segment'>
            Gloria
            <div className='ui right floated header'>
                <button className='ui button'><Link to="/">Home</Link></button>
                <button className='ui button'><NavLink to="/about">About</NavLink></button>
                <button className='ui button'><Link to="/contact">Contact</Link></button>
            </div>
        </nav>
    )
}

export default Navbar