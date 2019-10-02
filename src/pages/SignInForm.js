import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignInForm extends Component {
  constructor() {
    super();
      
    this.state = {
      email: '',
      password: '',
      users: [
        { email: 'a@a.com', password: 'passwordA' },
        { email: 'b@b.com', password: 'passwordB' },
        { email: 'c@c.com', password: 'passwordC' },
      ],
      isAuthenticated: false
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
      e.preventDefault();

      let target = e.target;
      console.log(target.id);

      

      let isValid = this.validateUser(this.state.email, this.state.password);
      this.setState({
        isAuthenticated: isValid
      });
      if (target.id =='back-button') {
            this.setState({isAuthenticated: false});
            this.render();
          }
          // console.log(this.state);
    }

  validateUser = (email, pwd) => {
    let uValid = false;
    this.state.users.forEach(user => {
      if (user.email == email && user.password == pwd) {
        uValid = true;
      }
    });
    return uValid;
  }

  render() {
    if (!this.state.isAuthenticated) {
      return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
              
                <button className="FormField__Button mr-20">
                  
                    Sign In
                  
                  </button> 
              </div>
            </form>
          </div>
        );
    } else {
      return (
        <div className = "Home">
          <h2> Welcome {this.state.email}</h2>
          <button id='back-button' onClick= {this.handleSubmit}>Back</button>
        </div>
      )
    }
      
    }
}

export default SignInForm;
