import React from 'react';
import styled from 'styled-components';

const CartButtonElement = styled.img`
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
        <CartButtonElement src="https://img.icons8.com/material-sharp/24/000000/shopping-cart-promotion.png" />
      </ButtonListItem>
    );
  }
}

export default CartButton;
