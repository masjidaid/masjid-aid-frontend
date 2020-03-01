import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import signIn from './Components/auth/signIn';
import signUp from './Components/auth/signup';
import Navbar from './Components/layout/navbar';
import Home from './Components/pages/home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={signIn} />
            <Route path="/signup" component={signUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
