import React from 'react';
import styled from 'styled-components';
import SubMenuCategory from './SubMenuCategory.jsx';
import MenuCategoryPicture from './CategoryPicture.jsx';
import BoldCategoryItem from './BoldCategoryItem.jsx';
import NotBoldCategoryItem from './NotBoldCategoryItem.jsx';

const MenuBarContainer = styled.div`
  display: flex;
  margin-right: 100px;
  max-width: 1400px;
  margin: 0 auto;
`;

const MenuBarList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  list-style: none;
  padding-left: 52px;
  padding-right: 48px;
  padding-top: 11px;
`;

const MenuBarListEntry = styled.li`
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
  position: fixed;
  top: 100px;
  left: 178px;
  z-index: 100;
  background-color: white;
  width: 1328px;
  height: auto;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-top: 1px solid lightgrey;
  border-radius: 5px;
  border-color: rgba(34, 34, 34, 0.10);
`;

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
`;

const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${(props) => (props.hovering ? 'all' : 'none')};
`;

const MenuDropDownLeftContainer = styled.div`
  border-right: 1px solid lightgrey;
`;

const MenuDropDownHeader = styled.div`
  cursor: pointer;
  padding: 12px 0 12px 10px;
`;

const Pointer = styled.img`
  padding-left: 4px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    padding-left: 10px;
  }
`;

const MenuDropDownTitle = styled.span`
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
  list-style: none;
  padding: 0;
`;

const MenuSubItems = styled.li`
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
  padding: 0 0 12px 10px;
`;

const SubCategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CategoryList = styled.ul`
  padding: 10px;
  list-style: none;
`;

class MenuBar extends React.Component {
  constructor() {
    super();
    this.state = {
      hovering: '',
      subItem: 'Accessories',
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
    const { hovering, isFirst } = this.state;
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
                <MenuSubItems>
                  <SubMenuCategory category="Necklaces" />
                </MenuSubItems>
                <MenuSubItems>
                  <SubMenuCategory category="Rings" />
                </MenuSubItems>
                <MenuSubItems>
                  <SubMenuCategory category="Earrings" />
                </MenuSubItems>
                <MenuSubItems>
                  <SubMenuCategory category="Bracelets" />
                </MenuSubItems>
                <MenuSubItems>
                  <SubMenuCategory category="Body Jewelry" />
                </MenuSubItems>
              </MenuSubItemList>
              <MenuDropDownHeader>
                <MenuDropDownTitle>All Jewelry</MenuDropDownTitle>
                <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
              </MenuDropDownHeader>
            </MenuDropDownLeftContainer>
            <MenuDropDownRightContainer>
              {this.isHoveringItem()}
            </MenuDropDownRightContainer>
          </MenuContainer>
        </MenuDropDown>
      );
    }
  }

  isHoveringItem() {
    const { subItem } = this.state;
    if (subItem === 'Accessories') {
      return (
        <SubCategoriesContainer>
          <CategoryList>
            <BoldCategoryItem item={['Hats & Caps']} />
            <NotBoldCategoryItem item={['Beanies & Winter Hats']} />
            <BoldCategoryItem item={['Hair Accessories']} />
            <NotBoldCategoryItem item={['Headbands', 'Fascinators & Mini Hats', 'Wreaths & Tiaras']} />
            <BoldCategoryItem item={['Sunglasses & Eyewear']} />
          </CategoryList>
          <CategoryList>
            <BoldCategoryItem item={['Scarves & Wraps', 'Belts & Suspenders', 'Keychains & Lanyards', 'Gloves & Mittens', 'Umbrellas & Rain Accessories']} />
            <MenuDropDownTitle>All Accessories</MenuDropDownTitle>
            <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
          </CategoryList>
          <MenuCategoryPicture more={['Jewelry, handbags, and accessories']} />
        </SubCategoriesContainer>
      );
    } if (subItem === 'Bags & Purses') {
      return (
        <SubCategoriesContainer>
          <CategoryList>
            <BoldCategoryItem item={['Backpacks', 'Hand Bags']} />
            <NotBoldCategoryItem item={['Clutches & Evening Bags', 'Shoulder Bags']} />
            <BoldCategoryItem item={['Diaper Bags']} />
          </CategoryList>
        </SubCategoriesContainer>
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
            <MenuBarListEntry onMouseOver={() => { this.handleHover('Jewelry & Accessories'); this.handleResetFirstItemHover(); }}>Jewelry & Accessories</MenuBarListEntry>
            <MenuBarListEntry onMouseOver={() => { this.handleHover('Clothing & Shoes'); this.handleResetFirstItemHover(); }}>Clothing & Shoes</MenuBarListEntry>
            <MenuBarListEntry>Home & Living</MenuBarListEntry>
            <MenuBarListEntry>Wedding & Party</MenuBarListEntry>
            <MenuBarListEntry>Toys & Entertainment</MenuBarListEntry>
            <MenuBarListEntry>Art & Collectibles</MenuBarListEntry>
            <MenuBarListEntry>Craft Supplies</MenuBarListEntry>
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
