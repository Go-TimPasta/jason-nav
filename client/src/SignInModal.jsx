import React from 'react';

class SignInModal extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className={`sign-in-modal ${this.props.active}`}>
        <div className="sign-in-modal-header">
          <div className="sign-in-modal-title">Sign In</div>
          <button type="submit">Register</button>
        </div>
        <div className="sign-in-modal-body">
          <div className="email-address-container">
            <label htmlFor="email-address">Email address</label>
            <input id="email-address" type="text"></input>
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input id="password" type="text"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInModal;
