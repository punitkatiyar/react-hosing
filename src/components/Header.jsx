import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='head'>
            <Link to='/' className='title'>Blog App</Link>

            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/page1'>Page 1</NavLink></li>
                <li><NavLink to='/page2'>Page 2</NavLink></li>
                <li><NavLink to='/page3'>Page 3</NavLink></li>
                <li><NavLink to='/page4'>Page 4</NavLink></li>
            </ul>

        </div>
    )
}

export default Header