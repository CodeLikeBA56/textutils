import React, { useState } from 'react';
import "./Navbar-Style.css";
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

export default function Navbar(props) {
  const [collapseStyle, setCollapseStyle] = useState({ top: '-100%', right: '-100%' });

  const toggleNavbar = () => {
    if (collapseStyle.top === '-100%') {
      setCollapseStyle({ top: '60px', right: '0px' });
    } else {
      setCollapseStyle({ top: '-100%', right: '-100%' });
    }
  };

  return (
    <nav className={`Navbar Navbar-${props.mode === 'dark' ? 'dark' : 'light'}`}>
      <a className="website-name" href="../App.js">{props.title}</a>
      <div className={`Collapse navbar-collapse-${props.mode === 'dark' ? 'dark' : 'light'}`} style={collapseStyle}>
        <ul>
          <li className="nav-item"><NavLink className="nav-Link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-Link" to="/about">About</NavLink></li>
          <li className="nav-item"><NavLink className="nav-Link" to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className='item'>
        <input type="checkbox" id="darkmode-toggle" onClick={props.toggleMode} />
        <label htmlFor="darkmode-toggle">
          <span className="material-symbols-outlined" id='lightmode-toggle'>{props.mode === 'dark' ? 'dark_mode' : 'light_mode'}</span>
        </label>
      </div>
      <span className="material-symbols-outlined" onClick={toggleNavbar} id='navbar-toggler'>{collapseStyle.top === '-100%' ? 'menu' : 'menu_open'}</span>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'STARWAY X'
};
