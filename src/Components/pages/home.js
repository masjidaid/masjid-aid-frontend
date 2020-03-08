import React, { Component } from 'react';
import './home.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import topImage from '../../masjid-images/white-masjid.jpg';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [1, 2, 3, 4, 5],
    };
  }

  render() {
    const { cards } = this.state;
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

        <div className="campaigns">
          <h1>TOP CAMPAIGNS</h1>

          <div className="top-campaigns">
            <br />
            {cards.map(curVal => (
              <div className="columns">
                <div className="campaign-card" key={curVal}>
                  <img className="campaign-img" src={topImage} alt="Card img cap" />
                  <div className="campaign-body text-center">
                    <h5 className="campaign-title">Card title</h5>
                    <p className="campaign-description">
                      Some quick example text to build on the card title and make up the bulk of the card content.
                    </p>
                    <Link to="/" className="btn btn-success">Go somewhere</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/campaigns">
            <p className="text-center">
              See more &nbsp;
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </Link>
        </div>

        <div className="stories">
          {/* <h1></h1> */}
          <div className="story">
            <div className="story-content">
              <h3>MASJIDAID FUND RAISING STORIES</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </div>
            <div className="story-pics">
              <img className="story-pic" src={topImage} alt="Story-Pic" />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Home;
