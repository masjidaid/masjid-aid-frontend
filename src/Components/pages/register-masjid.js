/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { validate } from 'indicative/validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMosque } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './register-masjid.scss';

export default class RegisterMasjid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masjidName: '',
      addressLn1: '',
      addressLn2: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
      images: '',
      errors: {}
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleValidation = () => {
    const rules = {
      masjidName: 'required',
      addressLn1: 'required',
      // addressLn2: '',
      city: 'required',
      state: 'required',
      country: 'required',
      zipCode: 'required',
      images: 'required',
    };
    const messages = {
      required: (field) => `${field} is required`,
      'masjidName.masjidName': 'Please enter a valid masjidName address',
    };
    const data = this.state;

    validate(data, rules, messages)
      .then()
      .catch((errors) => {
        const formattedError = {};
        errors.forEach((error) => {
          formattedError[error.field] = error.message;
        });

        this.setState({ errors: formattedError });
      });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.handleValidation();
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="register-masjid">
        <div className="reg-head">
          <h1>Register your MASJID</h1>
          <hr />
        </div>
        <div className="reg-body">
          <div className="column-one">
            <form method="post" onSubmit={this.handleSubmit}>
              <div className="masjidName">
                <label htmlFor="masjidName">Masjid Name:</label>
                <br />
                <input
                  className="inp"
                  type="text"
                  name="masjidName"
                  placeholder="Masjid Name"
                  // required
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="error" className="error">
                  {errors.masjidName ? errors.masjidName : ''}
                </label>
              </div>

              <div className="addressLn1">
                <label htmlFor="addressLn1">Address Line 1:</label>
                <br />
                <input
                  className="inp"
                  type="text"
                  name="addressLn1"
                  placeholder="Address line 1"
                  // required
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="error" className="error">
                  {errors.addressLn1 ? errors.addressLn1 : ''}
                </label>
              </div>

              <div className="addressLn2">
                <label htmlFor="addressLn2">Address line 2:</label>
                <br />
                <input
                  className="inp"
                  type="text"
                  name="addressLn2"
                  placeholder="Address line 2"
                  // required
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="error" className="error">
                  {errors.addressLn2 ? errors.addressLn2 : ''}
                </label>
              </div>

              <div className="city">
                <label htmlFor="city">City:</label>
                <br />
                <input
                  className="inp"
                  type="text"
                  name="city"
                  placeholder="City"
                  // required
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="error" className="error">
                  {errors.city ? errors.city : ''}
                </label>
              </div>

              <div className="state">
                <label htmlFor="state">State:</label>
                <br />
                <input
                  className="inp"
                  type="text"
                  name="state"
                  placeholder="State"
                  // required
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="error" className="error">
                  {errors.state ? errors.state : ''}
                </label>
              </div>

              <div className="country">
                <label htmlFor="country">Country:</label>
                <br />
                <input
                  className="inp"
                  type="text"
                  name="country"
                  placeholder="Country"
                  // required
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="error" className="error">
                  {errors.country ? errors.country : ''}
                </label>
              </div>

              <div className="zipCode">
                <label htmlFor="zipCode">Zip Code:</label>
                <br />
                <input
                  className="inp"
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  // required
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="error" className="error">
                  {errors.zipCode ? errors.zipCode : ''}
                </label>
              </div>

              <div className="images">
                <label htmlFor="images">Masjid Images:</label>
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

              <div className="signin-btn">
                <button type="submit" id="login" className="btn btn-success btn-lg">
                  <FontAwesomeIcon icon={faMosque} />
                  &nbsp;
                  Register Masjid
                </button>
              </div>
            </form>
          </div>

          <div className="column-two">
            <h1> Register your masjid</h1>

            <h3>وأن المساجد لله فلا تدعوا مع الله أحد</h3>
          </div>
        </div>

        <hr />
        <p className="last-description">
          Checkout registered Masjids &nbsp;
          <Link to="/masjids">here</Link>
        </p>
      </div>
      // </div>
    );
  }
}
