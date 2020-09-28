import React from 'react';
import OtherSignIn from './OtherSignIn.jsx';
import Policy from './Policy.jsx';

class SignInModal extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      username: '',
      register: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleModulePage = this.handleModulePage.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleModulePage() {
    this.setState((prevState) => {
      return {
        register: !prevState.register
      }
    });
  }

  render() {
    if (!this.state.register) {
      return (
        <div>
          <div className={`sign-in-modal ${this.props.active}`}>
            <div className="sign-in-modal-header">
              <div className="sign-in-modal-title">Sign In</div>
              <button type="submit" onClick={() => this.handleModulePage()}>Register</button>
            </div>
            <div className="sign-in-modal-body">
              <div className="email-address-container">
                <label htmlFor="email-address">Email address</label>
                <input id="email-address" type="text" name="email" value={this.state.email} onChange={this.onChangeHandler} />
              </div>
              <div className="password-container">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" value={this.state.password} onChange={this.onChangeHandler} />
              </div>
              <div className="sign-in-checkbox-container">
                <label className="sign-in-checkbox">Stay signed in
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="helperLinks forgot"><a href="#">Forgot your password?</a></span>
              </div>
              <div className="button-and-trouble-link">
                <button onClick={() => console.log('hi')} className="sign-in-submit-button" type="submit">Sign In</button>
                <span className="helperLinks trouble"><a href="#">Trouble signing in?</a></span>
              </div>
            </div>
            <div className="OR-container">
              <span>OR</span>
            </div>
            <OtherSignIn />
            <Policy />
          </div>
          <div id="overlay" className={this.props.active} onClick={() => this.props.overlayClick()}></div>
        </div>
      );
    }
    return (
      <div>
        <div className={`sign-in-modal ${this.props.active}`}>
          <div className="sign-in-modal-header">
            <div className="sign-in-modal-title">Create your account</div>
          </div>
          <div className="sign-in-modal-body">
            <div className="email-address-container">
              <label htmlFor="email-address">Email address</label>
              <input id="email-address" type="text" name="email" value={this.state.email} onChange={this.onChangeHandler} />
            </div>
            <div className="username-container">
              <label htmlFor="username">First Name</label>
              <input id="username" type="text" name="username" value={this.state.username} onChange={this.onChangeHandler} />
            </div>
            <div className="password-container">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" value={this.state.password} onChange={this.onChangeHandler} />
            </div>
            <button onClick={() => {this.props.addUser(this.state.username, this.state.password, this.state.email); this.props.overlayClick();}} className="sign-in-submit-button" type="submit">Register</button>
          </div>
          <div className="OR-container">
            <span>OR</span>
          </div>
          <OtherSignIn />
          <Policy />
        </div>
        <div id="overlay" className={this.props.active} onClick={() => {this.props.overlayClick(); this.handleModulePage();}}></div>
      </div>
    );
  }
}

export default SignInModal;
