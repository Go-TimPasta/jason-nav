import React from 'react';
import styled from 'styled-components';
import CartButton from './CartButton.jsx';

const SignInAndCartContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding-top: 10px;
  @media only screen and (min-width: 0) {
    flex-shrink: 0 !important;
  }
`;

const ButtonList = styled.ul`
  box-sizing: border-box;
  margin: 0;
  list-style: none;
  display: flex;
  padding: 0;
`;

const ButtonListItem = styled.li`
  box-sizing: border-box;
  margin: 0;
  padding-left: 15px;
  width: 100px;
`;

const SignInButtonElement = styled.button`
  box-sizing: border-box;
  margin: 0;
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
