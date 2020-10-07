import React from 'react';
import styled from 'styled-components';
import SubMenuCategory from './SubMenuCategory.jsx';
import JewelryAccessories from './MenuBarItems/JewelryAccessories.jsx';
import ClothingShoes from './MenuBarItems/ClothingShoes.jsx';
import HomeLiving from './MenuBarItems/HomeLiving.jsx';
import WeddingParty from './MenuBarItems/WeddingParty.jsx';
import ToysEntertainment from './MenuBarItems/ToysEntertainment.jsx';
import ArtCollectibles from './MenuBarItems/ArtCollectibles.jsx'
import CraftSupplies from './MenuBarItems/CraftSupplies.jsx'

const MenuBarContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  @media only screen and (max-width: 900px) {
    display: none !important;
  }
`;

const MenuBarList = styled.ul`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  list-style: none;
  padding-left: 52px;
  padding-right: 48px;
  padding-top: 11px;
  z-index: 202;
`;

const MenuBarListEntry = styled.li`
  box-sizing: border-box;
  margin: 0;
  padding-bottom: 10px;
  font-family: "Graphik Webfont";
  line-height: 18px;
  color: #222222;
  font-size: 14px;
  cursor: pointer;
  z-index: 1;
  &:hover {
    text-decoration: underline;
  }
`;

const MenuDropDown = styled.div`
  box-sizing: border-box;
  margin: 0;
  position: absolute;
  max-width: 1400px;
  top: 100px;
  height: auto;
  z-index: 202;
  background-color: white;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-top: 1px solid lightgrey;
  border-radius: 5px;
  border-color: rgba(34, 34, 34, 0.10);
  @media only screen and (min-width: 0) {
    width: 100%;
  }

  @media only screen and (max-width: 939px) {
    top: 118px;
  }
`;

const MenuContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: grid;
  grid-template-columns: 30% auto;
`;

const OverLay = styled.div`
  box-sizing: border-box;
  margin: 0;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${(props) => (props.hovering ? 'all' : 'none')};
`;

const MenuDropDownLeftContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  border-right: 1px solid lightgrey;
`;

const MenuDropDownHeader = styled.div`
  box-sizing: border-box;
  margin: 0;
  cursor: pointer;
  padding: 12px 0 12px 10px;
`;

const Pointer = styled.img`
  box-sizing: border-box;
  margin: 0;
  padding-left: 4px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    padding-left: 10px;
  }
`;

const MenuDropDownTitle = styled.span`
  box-sizing: border-box;
  margin: 0;
  font-family: "Graphik Webfont";
  font-size: 14px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    padding-right: 8px;
  }
`;

const MenuSubItemList = styled.ul`
  box-sizing: border-box;
  margin: 0;
  list-style: none;
  padding: 0;
`;

const MenuSubItems = styled.li`
  box-sizing: border-box;
  margin: 0;
  padding: 10px 0 10px 10px;
  font-family: "Graphik Webfont";
  width: 100%;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) => (props.isFirst ? '#e8eaf6;' : 'none;')}
  &:hover {
    background-color: #e8eaf6;
  }
`;

const MenuDropDownRightContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0 0 12px 10px;
`;

class MenuBar extends React.Component {
  constructor() {
    super();
    this.state = {
      hovering: '',
      subItem: '',
      isFirst: true,
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    this.isHovering = this.isHovering.bind(this);
    this.handleFirstItemMouseLeave = this.handleFirstItemMouseLeave.bind(this);
    this.handleResetFirstItemHover = this.handleResetFirstItemHover.bind(this);
    this.handleHoverSubItem = this.handleHoverSubItem.bind(this);
  }

  handleHover(target) {
    this.setState({
      hovering: target,
    });
  }

  handleHoverLeave() {
    this.setState({
      hovering: '',
    });
  }

  handleFirstItemMouseLeave() {
    this.setState({
      isFirst: false,
    });
  }

  handleResetFirstItemHover() {
    this.setState({
      isFirst: true,
    });
  }

  handleHoverSubItem(item) {
    this.setState({
      subItem: item,
    });
  }

  isHovering() {
    const { hovering, isFirst, subItem } = this.state;
    if (hovering === 'Jewelry & Accessories') {
      return (
        <MenuDropDown>
          <MenuContainer>
            <MenuDropDownLeftContainer>
              <MenuDropDownHeader>
                <MenuDropDownTitle>All Jewelry & Accessories</MenuDropDownTitle>
                <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
              </MenuDropDownHeader>
              <MenuSubItemList>
                <MenuSubItems isFirst={isFirst} onMouseLeave={() => this.handleFirstItemMouseLeave()} onMouseOver={() => this.handleHoverSubItem('Accessories')}>
                  <SubMenuCategory category="Accessories" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Bags & Purses')}>
                  <SubMenuCategory category="Bags & Purses" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Necklaces')}>
                  <SubMenuCategory category="Necklaces" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Rings')}>
                  <SubMenuCategory category="Rings" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Earrings')}>
                  <SubMenuCategory category="Earrings" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Bracelets')}>
                  <SubMenuCategory category="Bracelets" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Body Jewelry')}>
                  <SubMenuCategory category="Body Jewelry" />
                </MenuSubItems>
              </MenuSubItemList>
              <MenuDropDownHeader>
                <MenuDropDownTitle>All Jewelry</MenuDropDownTitle>
                <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
              </MenuDropDownHeader>
            </MenuDropDownLeftContainer>
            <MenuDropDownRightContainer>
              <JewelryAccessories subItem={subItem} />
            </MenuDropDownRightContainer>
          </MenuContainer>
        </MenuDropDown>
      );
    } if (hovering === 'Clothing & Shoes') {
      return (
        <MenuDropDown>
          <MenuContainer>
            <MenuDropDownLeftContainer>
              <MenuDropDownHeader>
                <MenuDropDownTitle>All Clothing & Shoes</MenuDropDownTitle>
                <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
              </MenuDropDownHeader>
              <MenuSubItemList>
                <MenuSubItems isFirst={isFirst} onMouseLeave={() => this.handleFirstItemMouseLeave()} onMouseOver={() => this.handleHoverSubItem('Women\'s')}>
                  <SubMenuCategory category={'Women\'s'} />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Men\'s')}>
                  <SubMenuCategory category={'Men\'s'} />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Kid\'s & Baby')}>
                  <SubMenuCategory category={'Kid\'s & Baby'} />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Bags & Purses')}>
                  <SubMenuCategory category="Bags & Purses" />
                </MenuSubItems>
              </MenuSubItemList>
            </MenuDropDownLeftContainer>
            <MenuDropDownRightContainer>
              <ClothingShoes subItem={subItem} />
            </MenuDropDownRightContainer>
          </MenuContainer>
        </MenuDropDown>
      );
    } if (hovering === 'Home & Living') {
      return (
        <MenuDropDown>
          <MenuContainer>
            <MenuDropDownLeftContainer>
              <MenuDropDownHeader>
                <MenuDropDownTitle>All Home & Living</MenuDropDownTitle>
                <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
              </MenuDropDownHeader>
              <MenuSubItemList>
                <MenuSubItems isFirst={isFirst} onMouseLeave={() => this.handleFirstItemMouseLeave()} onMouseOver={() => this.handleHoverSubItem('Home')}>
                  <SubMenuCategory category="Home" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Bath & Beauty')}>
                  <SubMenuCategory category="Bath & Beauty" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Pet Supplies')}>
                  <SubMenuCategory category="Pet Supplies" />
                </MenuSubItems>
              </MenuSubItemList>
            </MenuDropDownLeftContainer>
            <MenuDropDownRightContainer>
              <HomeLiving subItem={subItem} />
            </MenuDropDownRightContainer>
          </MenuContainer>
        </MenuDropDown>
      );
    } if (hovering === 'Wedding & Party') {
      return (
        <MenuDropDown>
          <MenuContainer>
            <MenuDropDownLeftContainer>
              <MenuDropDownHeader>
                <MenuDropDownTitle>All Wedding & Party</MenuDropDownTitle>
                <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
              </MenuDropDownHeader>
              <MenuSubItemList>
                <MenuSubItems isFirst={isFirst} onMouseLeave={() => this.handleFirstItemMouseLeave()} onMouseOver={() => this.handleHoverSubItem('Party Supplies')}>
                  <SubMenuCategory category="Party Supplies" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Invitations & Paper')}>
                  <SubMenuCategory category="Invitations & Paper" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Wedding Decorations')}>
                  <SubMenuCategory category="Wedding Decorations" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Wedding Gifts')}>
                  <SubMenuCategory category="Wedding Gifts" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Wedding Accessories')}>
                  <SubMenuCategory category="Wedding Accessories" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Wedding Clothing')}>
                  <SubMenuCategory category="Wedding Clothing" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Wedding Jewelry')}>
                  <SubMenuCategory category="Wedding Jewelry" />
                </MenuSubItems>
                <MenuDropDownHeader>
                  <MenuDropDownTitle>All Wedding</MenuDropDownTitle>
                  <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
                </MenuDropDownHeader>
              </MenuSubItemList>
            </MenuDropDownLeftContainer>
            <MenuDropDownRightContainer>
              <WeddingParty subItem={subItem} />
            </MenuDropDownRightContainer>
          </MenuContainer>
        </MenuDropDown>
      );
    } if (hovering === 'Toys & Entertainment') {
      return (
        <MenuDropDown>
          <MenuDropDownRightContainer>
            <ToysEntertainment />
          </MenuDropDownRightContainer>
        </MenuDropDown>
      );
    } if (hovering === 'Art & Collectibles') {
      return (
        <MenuDropDown>
          <MenuDropDownRightContainer>
            <ArtCollectibles />
          </MenuDropDownRightContainer>
        </MenuDropDown>
      );
    } if (hovering === 'Craft Supplies') {
      return (
        <MenuDropDown>
          <MenuContainer>
            <MenuDropDownLeftContainer>
              <MenuDropDownHeader>
                <MenuDropDownTitle>All Craft Supplies & Tools</MenuDropDownTitle>
                <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
              </MenuDropDownHeader>
              <MenuSubItemList>
                <MenuSubItems isFirst={isFirst} onMouseLeave={() => this.handleFirstItemMouseLeave()} onMouseOver={() => this.handleHoverSubItem('Home & Hobby')}>
                  <SubMenuCategory category="Home & Hobby" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Jewelry & Beauty')}>
                  <SubMenuCategory category="Jewelry & Beauty" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Sewing & Fiber')}>
                  <SubMenuCategory category="Sewing & Fiber" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Papercraft')}>
                  <SubMenuCategory category="Papercraft" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Visual Arts')}>
                  <SubMenuCategory category="Visual Arts" />
                </MenuSubItems>
                <MenuSubItems onMouseOver={() => this.handleHoverSubItem('Sculpting & Forming')}>
                  <SubMenuCategory category="Sculpting & Forming" />
                </MenuSubItems>
              </MenuSubItemList>
            </MenuDropDownLeftContainer>
            <MenuDropDownRightContainer>
              <CraftSupplies subItem={subItem} />
            </MenuDropDownRightContainer>
          </MenuContainer>
        </MenuDropDown>
      );
    }
  }

  render() {
    const { hovering } = this.state;
    return (
      <div>
        <MenuBarContainer>
          <MenuBarList>
            <MenuBarListEntry>Everyday Finds</MenuBarListEntry>
            <MenuBarListEntry onMouseOver={() => { this.handleHoverSubItem('Accessories'); this.handleHover('Jewelry & Accessories'); this.handleResetFirstItemHover(); }}>Jewelry & Accessories</MenuBarListEntry>
            <MenuBarListEntry onMouseOver={() => { this.handleHoverSubItem('Women\'s'); this.handleHover('Clothing & Shoes'); this.handleResetFirstItemHover(); }}>Clothing & Shoes</MenuBarListEntry>
            <MenuBarListEntry onMouseOver={() => { this.handleHoverSubItem('Home'); this.handleHover('Home & Living'); this.handleResetFirstItemHover(); }}>Home & Living</MenuBarListEntry>
            <MenuBarListEntry onMouseOver={() => { this.handleHoverSubItem('Party Supplies'); this.handleHover('Wedding & Party'); this.handleResetFirstItemHover(); }}>Wedding & Party</MenuBarListEntry>
            <MenuBarListEntry onMouseOver={() => this.handleHover('Toys & Entertainment')}>Toys & Entertainment</MenuBarListEntry>
            <MenuBarListEntry onMouseOver={() => this.handleHover('Art & Collectibles')}>Art & Collectibles</MenuBarListEntry>
            <MenuBarListEntry onMouseOver={() => { this.handleHoverSubItem('Home & Hobby'); this.handleHover('Craft Supplies'); this.handleResetFirstItemHover(); }}>Craft Supplies</MenuBarListEntry>
            <MenuBarListEntry>Gifts</MenuBarListEntry>
          </MenuBarList>
          {this.isHovering()}
        </MenuBarContainer>
        <OverLay hovering={hovering} onMouseOver={() => { this.handleHoverLeave(); this.handleHoverSubItem('Accessories'); }} />
      </div>
    );
  }
}

export default MenuBar;
