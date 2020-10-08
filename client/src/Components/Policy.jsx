import React from 'react';
import styled from 'styled-components';

const PolicyContainer = styled.div`
  box-sizing: border-box;
  margin: 20px;
`;

const NavBarPolicy = styled.span`
  box-sizing: border-box;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 18px;
  padding-top: 5px;
  color: #595959;
  text-align: center;
`;

const LinkTags = styled.a`
  color: #595959;
`;

const Policy = () => (
  <PolicyContainer>
    <NavBarPolicy>
      By clicking Sign in or Continue with Google, Facebook, or Apple, you agree to Etsy's <LinkTags href="#">Terms of Use</LinkTags> and <LinkTags href="#"> Privacy Policy</LinkTags>. Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.
    </NavBarPolicy>
  </PolicyContainer>
  );

export default Policy;
