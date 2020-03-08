import React, { Component } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="main-nav">
        <div className="navbar-div">
          <ul className="left-navbar-items">
            <li><Link className="item" to="/">Explore</Link></li>
            <li><Link className="item" to="/">Campaign</Link></li>
            <li><Link className="item" to="/">List Masjids</Link></li>
          </ul>

          <div className="masjid-logo">
            <h2><Link className="item" to="/">Masjid-AID</Link></h2>
          </div>

          <ul className="right-navbar-items">
            <li><Link className="item" to="/register-masjid">Register a Masjid</Link></li>
            <li><Link className="item" to="/">About</Link></li>
            <li>
              <Link className="item" to="/sign-in">
                <button type="button" className="btn btn-success btn-lg">Sign in</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
