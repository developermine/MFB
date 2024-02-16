import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <Link to="/"><h1>Aminu-<span className='primary'>-Bank</span></h1></Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li>
                        <a href='/'>Home</a>
                    </li> */}
                    <li>
                        <a href='/'>Featured</a>
                    </li>
                    <li>
                        <a href='/'>Earn</a>
                    </li>
                    <li>
                        {/* <a href='/'>Bank</a> */}
                        <Link to="/bank">Bank</Link>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <Link to="/login"><button className='btn'>Customer Login</button></Link>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar