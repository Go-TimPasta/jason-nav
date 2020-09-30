import React from 'react';
import styled from 'styled-components';
import CartButton from './CartButton.jsx';

const SignInAndCartContainer = styled.div`
  float: right;
  position: absolute;
  right: 9%;
  top: 16%;
`;

const ButtonList = styled.ul`
  list-style: none;
  display: flex;
`;

const ButtonListItem = styled.li`
  padding-left: 15px;
`;

const SignInButtonElement = styled.button`
  font-family: "Graphik Webfont";
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  transition-duration: 0.4s;
  border-radius: 22px;
  padding: 13px;
  &:hover {
    opacity: 1;
    background-color: lightgrey;
  }
`;

class SignInButton extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <SignInAndCartContainer>
        <ButtonList>
          <ButtonListItem>
            <SignInButtonElement onClick={() => this.props.onSignInClick()}>Sign in</SignInButtonElement>
          </ButtonListItem>
          <CartButton />
        </ButtonList>
      </SignInAndCartContainer>
    );
  }
}

export default SignInButton;
