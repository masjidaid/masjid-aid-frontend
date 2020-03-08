import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import signIn from './Components/auth/signIn';
import signUp from './Components/auth/signup';
import Navbar from './Components/layout/navbar';
import Home from './Components/pages/home';
import RegisterMasjid from './Components/pages/register-masjid';
import Masjids from './Components/pages/masjids';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-in" component={signIn} />
            <Route path="/sign-up" component={signUp} />
            <Route path="/register-masjid" component={RegisterMasjid} />
            <Route path="/masjids" component={Masjids} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
