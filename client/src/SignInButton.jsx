import React from 'react';
import CartButton from './CartButton.jsx';

class SignInButton extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="sign-in-button-container">
        <ul className="button-list">
          <li>
            <button type="submit" className="sign-in-button" onClick={() => this.props.onSignInClick()}>Sign in</button>
          </li>
          <CartButton />
        </ul>
      </div>
    );
  }
}

export default SignInButton;
