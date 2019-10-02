import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Redirect , withRouter, BrowserRouter } from 'react-router-dom';
import SignInForm from './pages/SignInForm';

import './App.css';



class App extends Component {
  constructor () {
    super();

    this.state = {
      users: [
        {email:'a@a.com', password:'passwordA'},
        {email:'b@b.com', password:'passwordB'},
        {email:'c@c.com', password:'passwordC'},
    ],
      isAuthenticated: false
    };

    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
              </div>

            <Route exact path="/" render={props => <SignInForm/>}>
              </Route>
              <Route path="/sign-in" render={props => <SignInForm/>}>
              </Route>
                
          </div>

        </div>
      </Router>
    
    );
  }
}

export default App;
