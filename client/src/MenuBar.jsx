import React from 'react';

class MenuBar extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="menubar-container">
        <ul className="menubar-list">
          <li>Everyday Finds</li>
          <li>Jewelry & Accessories</li>
          <li>Clothing & Shoes</li>
          <li>Home & Living</li>
          <li>Wedding & Party</li>
          <li>Toys & Entertainment</li>
          <li>Art & Collectibles</li>
          <li>Craft Supplies</li>
          <li>Gifts</li>
        </ul>
      </div>
    );
  }
}

export default MenuBar;
