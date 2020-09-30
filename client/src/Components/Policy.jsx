import React from 'react';
import styled from 'styled-components';

const PolicyContainer = styled.div`
  margin: 20px;
`;

const NavBarPolicy = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 18px;
  padding-top: 5px;
  color: #595959;
  text-align: center;
`;

const Policy = () => {
  return (
    <PolicyContainer>
      <NavBarPolicy>
        By clicking Sign in or Continue with Google, Facebook, or Apple, you agree to Etsy's <a href="#">Terms of Use</a> and <a href="#"> Privacy Policy</a>. Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.
      </NavBarPolicy>
    </PolicyContainer>
  )
}

export default Policy;
