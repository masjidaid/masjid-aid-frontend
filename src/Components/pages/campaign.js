import React, { Component } from 'react';
import './campaign.scss';

export default class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="open-campaign">
        <h1>Ongoing Campaign</h1>
        <div className="list-campaigns">
          <div className="campaign-item">
            <h3>sdklvkdfkbdb</h3>
            <p>svjksdlkskdo</p>
          </div>
        </div>
      </div>
    );
  }
}
