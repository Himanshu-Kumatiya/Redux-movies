import React from 'react'
import image from "../../images/avatar.jpg";
import "./Header.scss";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <Link to="/">
            <div className='logo'>Movie App</div>
        </Link>
      <div className='img-c'>
        <img src={image} alt="user" />
      </div>
    </div>
  )
}

export default Header
