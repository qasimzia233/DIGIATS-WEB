import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.png'
import LogoLight from '../assets/logo-light.png'
import './NavBar.css'
import {useSelector} from 'react-redux'
import history from '../History/History'

const NavBar = () => {
    const [navbar, setNavbar] = useState(false)
    // redux selector 
    const selector =useSelector( state => state.user.obj)

    console.log('Nav selector');
    console.log(selector);
    const changeBackGround = () => {
        if (window.scrollY >= 80) {
            setNavbar(false)
        }
        else {
            setNavbar(true)
        }
    }
    window.addEventListener('scroll', changeBackGround)
    return (
        <div>
            <nav id='navBar' className={navbar ? 'navbar navbar-expand-md sticky-top navbar-dark navbar-custom' : 'navbar navbar-expand-lg sticky-top navbar-light active'} >
                <div className='container-fluid'>
                    <span className='navbar-brand'>{navbar ? <img src={LogoLight} width='60' height='60' /> : <img src={Logo} width='60' height='60' />}</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'><a href='#intro' className='nav-link'>Home</a></li>
                            <li className='nav-item'><a href='section-testimonials' className='nav-link'>Features</a></li>
                            <li className='nav-item'><a href='#section-benifits' className='nav-link'>Support</a></li>
                            <li className='nav-item'><a href='#section-benifits' className='nav-link'>About Us</a></li>
                            <li className='nav-item'><a href='section-testimonials' className='nav-link'>Blog</a></li>
                            <li className='nav-item'><a href='#section-footer' className='nav-link'>Shop</a></li>

                        </ul>
                        </div>
                     
                    </div>

                    { selector === null ?
                                        <button className='btn btn-primary rounded-pill px-4 mx-md-2 mx-1 ' onClick={()=>history.push('/login')} >Login </button>
                                        : 
                                        <button className='btn btn-primary rounded-pill px-4 mx-md-2 mx-1 ' onClick={()=>history.push('/dashboard')} >DashBoard </button>
    
                }
                </div>
                
            </nav>
         
        </div>
    )
}

export default NavBar
