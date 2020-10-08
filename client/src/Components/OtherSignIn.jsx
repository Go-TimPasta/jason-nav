import React from 'react';
import styled from 'styled-components';

const OtherSignInButtons = styled.div`
  box-sizing: border-box;
  margin: 0;
  background: none;
  background-color: white;
  border: 2px solid black;
  color: black;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto', sans-serif;
  border-radius: 24px;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  min-height: 48px;
  min-width: 48px;
  z-index: 10;
  margin: 6px 15px;
  display: flex;
  align-items: center;
  padding-left: 45px;
`;

const Icons = styled.img`
  box-sizing: border-box;
  margin: 0;
  padding-right: 5px;
`;

const OtherSignIn = () => (
  <div className="other-sign-in-buttons">
    <OtherSignInButtons>
      <Icons src="https://img.icons8.com/clouds/45/000000/google-logo.png" />
      <div>Continue with Google</div>
    </OtherSignInButtons>
    <OtherSignInButtons>
      <Icons src="https://img.icons8.com/clouds/50/000000/facebook-circled.png" />
      Continue with Facebook
    </OtherSignInButtons>
    <OtherSignInButtons>
      <Icons src="https://img.icons8.com/clouds/50/000000/mac-os.png" />
      Continue with Apple
    </OtherSignInButtons>
  </div>
);

export default OtherSignIn;
