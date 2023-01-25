import React, {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from './Images/Logo.png';
import './Navbar.css';

// ffc
function Navbar(){
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle('responsive_nav')
    }
    return(
        <>
        <header>
            <div id='logotitle'>
                <a id= 'logo'href='index.html'>
                    <img src={Logo} alt='agriculture'/>
                </a>
                <h1>AgriTech</h1>
            </div>
        {/*  <img src="./botagriculture.jpg" alt=''/>  */}
        <nav> 
        <div className ='titles' ref={navRef} >
        <a className='active' href='/#'>Home</a>
        <a href='/#'>About</a>
        <a href='/#'>Contact</a>
        <a href='/Signup'>Join</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
        </button>
        <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
        </button>
        </div>            
        </nav>
        </header>
        </>
    )
}
export default Navbar