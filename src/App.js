import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import signIn from './Components/auth/signIn';
import signUp from './Components/auth/signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={signIn} />
            <Route path="/" component={signUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
