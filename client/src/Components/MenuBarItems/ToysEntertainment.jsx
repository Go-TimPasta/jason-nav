import React from 'react';
import styled from 'styled-components';
import MenuCategoryPicture from '../CategoryPicture.jsx';
import BoldCategoryItem from '../BoldCategoryItem.jsx';
import NotBoldCategoryItem from '../NotBoldCategoryItem.jsx';

const SubCategoriesContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const CategoryList = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  list-style: none;
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

const MenuDropDownHeader = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  cursor: pointer;
  `;

const ToysEntertainment = () => (
  <SubCategoriesContainer>
    <CategoryList>
      <BoldCategoryItem item={['Toys']} />
      <NotBoldCategoryItem item={['Baby & Toddler Toys', 'Dolls & Action Figures', 'Stuffed Animals', 'Games & Puzzles', 'Learning & School', 'Kids\' Crafts', 'Slime & Foam']} />
      <BoldCategoryItem item={['Electronics & Accessories']} />
      <NotBoldCategoryItem item={['Cell Phone Accessories', 'Gadgets', 'Video Games', 'Decals & Skins', 'Cameras', 'Computers & Peripherals']} />
    </CategoryList>
    <CategoryList>
      <BoldCategoryItem item={['Books']} />
      <NotBoldCategoryItem item={['Blank Books', 'Calendars & Planners', 'Book Accessories', 'Children\'s Books', 'Art & Photography Books', 'Comics & Graphic Novels', 'Craft & Hobby Books', 'Literature & Fiction', 'Poetry', 'Guides & How Tos', 'Zines & Magazines']} />
    </CategoryList>
    <CategoryList>
      <BoldCategoryItem item={['Movies & Music']} />
      <NotBoldCategoryItem item={['Musical Instruments', 'Instrument Straps', 'Recorded Audio', 'Sheet Music', 'All Movies', 'All Music']} />
      <MenuDropDownHeader>
        <MenuDropDownTitle>All Toys & Entertainment</MenuDropDownTitle>
        <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
      </MenuDropDownHeader>
    </CategoryList>
    <MenuCategoryPicture url="https://i.etsystatic.com/7262992/d/il/c8ca2f/2024113706/il_340x270.2024113706_brm9.jpg?version=0" more={['Home tech accessories']} />
  </SubCategoriesContainer>
);

export default ToysEntertainment;

