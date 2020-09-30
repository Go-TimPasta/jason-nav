import React from 'react';
import styled from 'styled-components';

const CartButtonElement = styled.button`
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

const ButtonListItem = styled.li`
  padding-left: 15px;
`;

class CartButton extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <ButtonListItem>
        <CartButtonElement onClick={() => console.log('hello from cart button')}>Cart</CartButtonElement>
      </ButtonListItem>
    );
  }
}

export default CartButton;
