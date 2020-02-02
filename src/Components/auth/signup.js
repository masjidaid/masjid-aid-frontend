/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { validate } from 'indicative/validator';
import './signIn.css';

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
      [e.target.id]: e.target.value
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
      <div className="signin">
        <h1>WELCOME BACK</h1>
        <hr />
        <div>
          <h3>Log In to Continue</h3>
          <div>
            <button type="button"> Continue with Facebook </button>
            <br />
            <small> We will never post without your consent. </small>
          </div>
          <h3>Or</h3>
          <button type="button">Continue with Gmail</button>

          <form method="post" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                id="firstname"
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
                id="lastname"
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
                id="email"
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
                id="phonenumber"
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
                id="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <br />

              <label htmlFor="error" className="error">
                {errors.password ? errors.password : ''}
              </label>
            </div>

            <div>
              <input type="checkbox" />
              <p>Sign me up for he masjid aid newsletter</p>
            </div>

            <div>
              <button type="submit" id="signup">Sign up </button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}
export default signUp;
