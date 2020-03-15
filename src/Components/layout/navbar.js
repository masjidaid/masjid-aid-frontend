import React, { Component } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMosque, faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  // onclickListIcon() {
  //   const =
  // }

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
            <h2>
              <Link className="item" to="/">
                <FontAwesomeIcon icon={faMosque} />
                {' '}
                &nbsp;
                Masjid-AID
              </Link>
            </h2>
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
          <label htmlFor="list-icon" className="list-icon">
            <FontAwesomeIcon icon={faBars} />
            {' '}
          </label>
          <input type="checkbox" id="chkToggle" />

        </div>
      </div>
    );
  }
}

export default Navbar;
