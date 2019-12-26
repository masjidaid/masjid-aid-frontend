import React, { Component } from 'react';
import { validate } from 'indicative/validator';
import './signIn.css';

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
      [e.target.id]: e.target.value
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
              <br />
              <a href="/">
                <small> Forgot Your Password</small>
              </a>
            </div>

            <div>
              <button type="submit" id="login">Log In Masjidaid </button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}
export default signIn;
