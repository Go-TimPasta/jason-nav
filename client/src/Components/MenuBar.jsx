import React from 'react';
import styled from 'styled-components';

const MenuBarContainer = styled.div`
  display: flex;
  margin-right: 100px;
`;

const MenuBarList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  max-width: 1400px;
  padding-left: 4px;
`;

const MenuBarListEntry = styled.li`
  margin-top: 20px;
  padding-right: 61px;
  font-family: "Graphik Webfont";
  line-height: 18px;
  color: #222222;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

class MenuBar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <MenuBarContainer>
        <MenuBarList>
          <MenuBarListEntry>Everyday Finds</MenuBarListEntry>
          <MenuBarListEntry>Jewelry & Accessories</MenuBarListEntry>
          <MenuBarListEntry>Clothing & Shoes</MenuBarListEntry>
          <MenuBarListEntry>Home & Living</MenuBarListEntry>
          <MenuBarListEntry>Wedding & Party</MenuBarListEntry>
          <MenuBarListEntry>Toys & Entertainment</MenuBarListEntry>
          <MenuBarListEntry>Art & Collectibles</MenuBarListEntry>
          <MenuBarListEntry>Craft Supplies</MenuBarListEntry>
          <MenuBarListEntry>Gifts</MenuBarListEntry>
        </MenuBarList>
      </MenuBarContainer>
    );
  }
}

export default MenuBar;
