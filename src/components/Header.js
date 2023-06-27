import React from 'react';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.webp';
import '../assets/css/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
       
      </div>
      <div className='main'>
      <input style={{width:"100%"}}type='text' placeholder='Search Company name, industry,website or EIN number'/> 
      <input  style={{width:"100%"}} type='text' placeholder='enter location by address,zip code ,city country or State'/>
      <i class="fa fa-map-marker" aria-hidden="true"></i> 
      <input style={{width:"100%",color:'black',fontSize:"15px",fontFamily:'sans-serif',fontWeight:'bold'}}
      type="search" placeholder="Search" name="search"/>
      <button className="btn" type="submit"><i class="fa fa-search"></i></button>
      </div>
      
      <div className='profile'>
      
        <img src={profile} alt='profile'/><box-icon name='menu'></box-icon>
      </div>
    </div>
    
  )
}

export default Header;