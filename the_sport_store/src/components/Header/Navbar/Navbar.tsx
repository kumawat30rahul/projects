import React from 'react'
import Contents from './Contents';
import '../../../Css/Navbar.css';
import LOGO from './LOGO.png';
import Icons from './Icons'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
  return (
    <div className='main_navbar'>
      <div className='second_navbar'>
        <div className='menu_btn'>
          <MenuIcon />
        </div>
        <div className='div_logo'>
          <img src={LOGO} alt='logo' className='logo'/>
        </div>
        <div className='content'>
          <Contents />
        </div>
        <div className='icons'>
          <div className='search_main'>
            <input className='search_input' type='text' placeholder='Search Here' />
            <div className='div_icon'>
              <SearchTwoToneIcon className='icon'/>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
