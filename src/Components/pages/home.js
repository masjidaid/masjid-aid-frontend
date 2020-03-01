import React, { Component } from 'react';
import './home.scss';
import { Link } from 'react-router-dom';
// import topImage from '../../masjid-images/white-masjid (copy).jpg';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="top-section">
          {/* <img className="top-image" src={topImage} alt="top-img" /> */}
          <div className="get-started">
            <h2>Does your Masjid needs funding? </h2>
            <q>And the mosques are for Allah, so   not invoke with Allah anyone: Q(72:18)</q>
            <br />

            <Link to="/"><button type="button" className="btn btn-success btn-lg btn-item"> Raise Funds</button></Link>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
