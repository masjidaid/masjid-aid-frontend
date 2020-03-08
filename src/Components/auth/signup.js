/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { validate } from 'indicative/validator';
import './signup.scss';

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
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
      firstName: 'required|min:3',
      lastName: 'required|min:3',
      email: 'required|email',
      password: 'required|min:8',
      phoneNumber: 'required|min:3',

    };
    const messages = {
      required: (field) => `${field} is required`,
      'firstname.min': 'firstname is too short',
      'lastname.min': 'firstname is too short',
      'email.email': 'Please enter a valid email address',
      'password.min': 'Password is too short',
      'phonenumber.min': 'Password is too short',
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
      <div className="signup-wrapper">
        <h1>WELCOME</h1>
        <hr />
        <div>
          <h3>Sign up to Masjidaid</h3>

          <form method="post" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                // required
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="error" className="error">
                {errors.firstName ? errors.firstName : ''}
              </label>
            </div>
            <div>
              <label htmlFor="email">last Name</label>
              <br />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                // required
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="error" className="error">
                {errors.lastName ? errors.lastName : ''}
              </label>
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                // required
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="error" className="error">
                {errors.email ? errors.email : ''}
              </label>
            </div>

            <div>
              <label htmlFor="email">Phone Number</label>
              <br />
              <input
                type="tel"
                name="phonenumber"
                placeholder="Phone Number"
                // required
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="error" className="error">
                {errors.phoneNumber ? errors.phoneNumber : ''}
              </label>
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <br />

              <label htmlFor="error" className="error">
                {errors.password ? errors.password : ''}
              </label>
            </div>

            <div className="newsletter">
              <input type="checkbox" />
              {' '}
              &nbsp;
              <span>Sign me up for masjidaid newsletter</span>
            </div>

            <div>
              <button type="submit" className="btn btn-lg btn-success" id="signup">Sign up </button>
            </div>
          </form>

        </div>

        <hr />
        Already have an account? &nbsp;
        <Link to="/sign-in">Signin</Link>

      </div>
    );
  }
}
export default signUp;
