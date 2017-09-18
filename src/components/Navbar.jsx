import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';
import Logo from '../images/logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="logo-container">
            <a>
              <img src={Logo} alt="Logo" className="logo"/>
            </a>
          </li>
          <div className="navbar-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/team">Equipo</Link>
            </li>
            <li>
              <Link to="/interviews">Entrevistas</Link>
            </li>
            <li>
              <Link to="/reactions">Reacciones</Link>
            </li>
          </div>
        </ul>
        <hr className="navbar-divider" />
      </div>
    );
  }
}

export default Navbar;
