import React from 'react';

class SignInButton extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="sign-in-button-container">
        <ul>
          <li>
            <button type="submit" className="sign-in-button" onClick={() => console.log('hello from sign in button')}>Sign in</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default SignInButton;
