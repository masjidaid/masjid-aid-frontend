import React, { Component } from 'react';
import './footer.scss';
import masjidIcon from '../../masjid-images/footer-masjid-icon.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-icon">
            <img src={masjidIcon} alt="Masjid Icon" />
          </div>
          <ul>
            <h4>Contact info</h4>
            <li>
              <a href="mailto:trial@masjidaid.com?Subject=test%20again">trial@masjidaid.com</a>
            </li>
            <li>
              <a href="https://fb.com/">Fb</a>
            </li>
            <li>
              <a href="https://twitter.com">Tweet</a>
            </li>
            <li>
              <a href="https://instagram.com">IG</a>
            </li>
            <li>
              <p>+23458744758957</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
