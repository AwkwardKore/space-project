import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
              <NavLink exact to="/" activeClassName="aqua-color">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/team" activeClassName="aqua-color">Equipo</NavLink>
            </li>
            <li>
              <NavLink to="/interviews" activeClassName="aqua-color">Entrevistas</NavLink>
            </li>
            <li>
              <NavLink to="/reactions" activeClassName="aqua-color">Reacciones</NavLink>
            </li>
          </div>
        </ul>
        <hr className="navbar-divider" />
      </div>
    );
  }
}

export default Navbar;
