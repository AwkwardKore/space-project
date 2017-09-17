import React, { Component } from 'react';
import '../stylesheets/Navbar.css';
import Logo from '../images/logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a>
              <img src={Logo} alt="Logo"/>
            </a>
          </li>
          <div className="navbar-links">
            <li>
              <a>
                Inicio
              </a>
            </li>
            <li>
              <a>
                Equipo
              </a>
            </li>
            <li>
              <a>
                Entrevistas
              </a>
            </li>
            <li>
              <a>
                Reacciones
              </a>
            </li>
          </div>
        </ul>
        <hr className="navbar-divider" />
      </div>
    );
  }
}

export default Navbar;
