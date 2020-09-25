import React from 'react';

class SignInModal extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
            <input id="email-address" type="text" name="email" value={this.state.email} onChange={this.onChangeHandler} ></input>
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={this.state.password} onChange={this.onChangeHandler} ></input>
          </div>
          <button onClick={() => console.log('hello')} className="sign-in-submit-button" type="submit">Sign In</button>
        </div>
      </div>
    );
  }
}

export default SignInModal;
