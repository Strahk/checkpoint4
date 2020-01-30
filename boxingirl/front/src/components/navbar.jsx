import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <ul>
        <li className="navbar"><NavLink activeClassName="active" exact to="/">Acceuil</NavLink></li>
        <li className="navbar"><NavLink activeClassName="active" to="/aboutus">A propos du site</NavLink></li>
        <li className="navbar"><NavLink activeClassName="active" to="/contactus">Contact</NavLink></li>
      </ul>
    </div>
  )
};

export default Navbar;