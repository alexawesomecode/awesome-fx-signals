import React from 'react';
import { Link } from 'react-router-dom';
import appstyles from './styles/appstyles.module.css';

const NavBar = () => (

  <nav className={appstyles.navbar}>
    <Link to="/"><h1 className={appstyles.white}>awesome fx signals</h1></Link>
    <Link to="/topgainers" className={appstyles.white}><span>top gainers</span></Link>

  </nav>
);

export default NavBar;
