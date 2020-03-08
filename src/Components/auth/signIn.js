import React, { Component } from 'react';
import { validate } from 'indicative/validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome//fontawesome-svg-core';
import './signIn.scss';

library.add(faFacebook);

class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      email: '',
      // eslint-disable-next-line react/no-unused-state
      password: '',
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
      email: 'required|email',
      password: 'required',
    };
    const messages = {
      required: (field) => `${field} is required`,
      'email.email': 'Please enter a valid email address',
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
      <div className="signin-wrapper">
        <h1>WELCOME BACK</h1>
        <hr />
        <div className="signin">
          <h3 className="continue">Log In to Continue</h3>
          <div>
            <Link to="/">
              <button type="button" className="btn btn-primary btn-lg">
                <FontAwesomeIcon icon={faFacebook} />
                &nbsp;
                Continue with Facebook
              </button>
            </Link>
            <br />
            <small> We will never post without your consent. </small>
          </div>
          <h3>Or</h3>
          <Link to="/">
            <button type="button" className="btn btn-light btn-lg">
              <FontAwesomeIcon icon={faGoogle} />
              &nbsp;
              Continue with Gmail
            </button>
          </Link>

          <form method="post" onSubmit={this.handleSubmit}>
            <div className="email">
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

            <div className="password">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <br />
              <Link to="/">
                <small> Forgot Your Password</small>
              </Link>

              <br />
              <label htmlFor="error" className="error">
                {errors.password ? errors.password : ''}
              </label>
              <br />

            </div>

            <div>
              <button type="submit" id="login" className="btn btn-success btn-lg">
                <FontAwesomeIcon icon={faDoorOpen} />
                &nbsp;
                Log In Masjidaid
              </button>
            </div>
          </form>

        </div>
        <hr />
        Don&lsquo;t have an account? &nbsp;
        <Link to="/sign-up">SignUp</Link>
      </div>
    );
  }
}
export default signIn;
