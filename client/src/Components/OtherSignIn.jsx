import React from 'react';
import styled from 'styled-components';

const OtherSignInButtons = styled.div`
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
  text-align: center;
  vertical-align: middle;
  z-index: 10;
  width: 91%;
  margin: 6px 15px;
`;

const Icons = styled.img`
  padding-right: 5px;
`;

const OtherSignIn = () => {
  return (
    <div className="other-sign-in-buttons">
      <OtherSignInButtons><Icons src="https://img.icons8.com/clouds/45/000000/google-logo.png"/>Continue with Google</OtherSignInButtons>
      <OtherSignInButtons><Icons src="https://img.icons8.com/clouds/50/000000/facebook-circled.png"/>Continue with Facebook</OtherSignInButtons>
      <OtherSignInButtons><Icons src="https://img.icons8.com/clouds/50/000000/mac-os.png"/>Continue with Apple</OtherSignInButtons>
    </div>
  )
}

export default OtherSignIn;
