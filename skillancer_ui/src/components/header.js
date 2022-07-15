import React from 'react'
import logo from '../images/Skillancer logo (1) 1.png'
import "./header.css"


export const Header = () => {
  return (
    <div className='header'>

    <img className='logo' src={logo} alt="Logo" />

    <div className='input'>
   <input  className='searchbar'  type="search" id="search" placeholder='What Service You are looking for?'/>  
      <input className='search' type="submit" value="Submit"/>
 
    </div>

    <div className='list'>
    
    <li className='about'>About</li>
    <li className='howitwork'>How it Work</li>
    <li className='FAQ'>FAQ</li>
    <li className='blog'>Blog</li>
    <li className='content'>Content</li>

    </div>

    <div className='rightlist'>
    <li className='seller'>Become a seller</li>
    <li className='signin'>Sign in</li>
    <button className='join'>Join</button>
    </div>
  
    </div>
  )
}
