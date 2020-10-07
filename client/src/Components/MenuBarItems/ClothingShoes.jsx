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

const ClothingShoes = ({ subItem }) => {
  if (subItem === 'Women\'s') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Women\'s Clothing']} />
          <NotBoldCategoryItem item={['Dresses', 'Tops & Tees', 'Skirts', 'Jackets & Coats', 'Pants & Capris', 'Sweaters', 'Costumes']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Women\'s Shoes']} />
          <NotBoldCategoryItem item={['Boots']} />
          <MenuDropDownTitle>All Women's</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/9341357/d/il/42b332/2055379748/il_340x270.2055379748_n886.jpg?version=0" more={['Women\'s fasion']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Men\'s') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Men\'s Clothing']} />
          <NotBoldCategoryItem item={['Shirts', 'Sweaters', 'Customes', 'Jackets & Coats']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Men\'s Shoes']} />
          <NotBoldCategoryItem item={['Boots']} />
          <MenuDropDownTitle>All Men's</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/9341357/d/il/42b332/2055379748/il_340x270.2055379748_n886.jpg?version=0" more={['Women\'s fasion']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Kid\'s & Baby') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Baby Girls\' Clothing', 'Girls\' Clothing']} />
          <NotBoldCategoryItem item={['Dresses', 'Skirts', 'Tops', 'Customes', 'Jackets & Coats', 'Sweaters']} />
          <BoldCategoryItem item={['Baby Boys\' Clothing', 'Boys\' Clothing']} />
          <NotBoldCategoryItem item={['Tops', 'Customes', 'Jackets & Coats', 'Sweaters']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Girls\' Shoes']} />
          <NotBoldCategoryItem item={['Boots']} />
          <BoldCategoryItem item={['Boys\' Shoes']} />
          <NotBoldCategoryItem item={['Boots']} />
          <MenuDropDownTitle>All Kids' & Baby</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/9341357/d/il/42b332/2055379748/il_340x270.2055379748_n886.jpg?version=0" more={['Women\'s fasion']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Bags & Purses') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Backpacks', 'Handbags']} />
          <NotBoldCategoryItem item={['Clutches & Evening Bags', 'Shoulder Bags']} />
          <BoldCategoryItem item={['Diaper Bags']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Luggage & Duffel Bags', 'Phone Cases']} />
          <MenuDropDownTitle>All Bags & Purses</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/9341357/d/il/42b332/2055379748/il_340x270.2055379748_n886.jpg?version=0" more={['Women\'s fasion']} />
      </SubCategoriesContainer>
    );
  }
  return null;
};

export default ClothingShoes;
