import React from 'react';

class CartButton extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <li>
        <button type="submit" className="cart-button" onClick={() => console.log('hello from cart button')}>Cart</button>
      </li>
    );
  }
}

export default CartButton;
