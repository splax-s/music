/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Music from './Nav-links/Music';
import Youtube from './Nav-links/Youtube';
import SignUp from './Auth/SignUP';
import LogIn from './Auth/Login';
import Newsletter from './Nav-links/Newsletter';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/Music">
              <Music></Music>
            </Route>

            <Route path="/Youtube">
              <Youtube></Youtube>
            </Route>

            <Route path="/Newsletter">
              <Newsletter></Newsletter>
            </Route>

            <Route path="/SignUp">
              <SignUp></SignUp>
            </Route>

            <Route path="/LogIn">
              <LogIn></LogIn>
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
