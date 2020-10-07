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

const ArtCollectibles = () => (
  <SubCategoriesContainer>
    <CategoryList>
      <BoldCategoryItem item={['Prints', 'Photography', 'Painting']} />
      <NotBoldCategoryItem item={['Oil', 'Water Color', 'Acrylic']} />
    </CategoryList>
    <CategoryList>
      <BoldCategoryItem item={['Sculpture', 'Glass Art', 'Drawing & Illustration', 'Mixed Media & Collage', 'Fiber Arts', 'Dolls & Miniatures']} />
    </CategoryList>
    <CategoryList>
      <BoldCategoryItem item={['Collectibles']} />
      <NotBoldCategoryItem item={['Figurines & Knick Knacks', 'Memorabilia', 'Coins & Money']} />
      <MenuDropDownTitle>All Art & Collectibles</MenuDropDownTitle>
      <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
    </CategoryList>
    <MenuCategoryPicture url="https://i.etsystatic.com/21866261/d/il/566e40/2344300190/il_340x270.2344300190_fdca.jpg?version=0" more={['Home gallery']} />
  </SubCategoriesContainer>
);

export default ArtCollectibles;
