import React, { Component } from 'react';

export default class RaiseFund extends Component {
  render() {
    return (
      <div className="raise-fund">
        <div className="section1">
          <h1>Raise Funds</h1>
        </div>
        <hr />
        <form>
          <div className="title">
            <label htmlFor="title">Project Title</label>
            <br />
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              // required
              onChange={this.handleChange}
            />
            {/* <br />
              <label htmlFor="error" className="error">
                {errors.email ? errors.email : ''}
              </label> */}
          </div>

          <div className="description">
            <label htmlFor="description">Project Description</label>
            <br />
            <input
              type="text"
              name="description"
              placeholder="Project Description"
              // required
              onChange={this.handleChange}
            />
            {/* <br />
              <label htmlFor="error" className="error">
                {errors.email ? errors.email : ''}
              </label> */}
          </div>

          <div className="images">
            <label htmlFor="images">Attached Images:</label>
            <br />
            <input
              className="image-input"
              type="file"
              name="images"
              placeholder="Masjid Images"
              // required
              onChange={this.handleChange}
            />
            <br />
            {/* <label htmlFor="error" className="error">
                  {errors.images ? errors.images : ''}
                </label> */}
          </div>
        </form>
      </div>
    );
  }
}
