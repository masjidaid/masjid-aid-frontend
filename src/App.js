import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import signIn from './Components/auth/signIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={signIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
