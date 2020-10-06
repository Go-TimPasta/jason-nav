import React from 'react';
import styled from 'styled-components';
import MenuCategoryPicture from '../CategoryPicture.jsx';
import BoldCategoryItem from '../BoldCategoryItem.jsx';
import NotBoldCategoryItem from '../NotBoldCategoryItem.jsx';

const SubCategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CategoryList = styled.ul`
  padding: 10px;
  list-style: none;
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
const Pointer = styled.img`
  padding-left: 4px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    padding-left: 10px;
  }
`;

const HomeLiving = ({ subItem }) => {
  if (subItem === 'Home') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Home Décor']} />
          <NotBoldCategoryItem item={['Wall Décor', 'Decorative Pillows', 'Picture Frames & Displays', 'Candles & Holders', 'Clocks', 'Vases', 'Holiday Wreaths', 'Christmas Trees', 'Holiday Décor', 'Menorahs']} />
          <BoldCategoryItem item={['Rugs']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Furniture', 'Bedding', 'Bathroom', 'Outdoor & Gardening', 'Storage & Organization', 'Office', 'Lighting', 'Kitchen & Dining', 'Food & Drink', 'Spirituality & Religion']} />
          <MenuDropDownTitle>All Home</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/13947205/c/1241/986/447/41/il/da112b/1740733266/il_340x270.1740733266_83i7.jpg" more={['Design ideas and inspiration']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Bath & Beauty') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Bath Accessories', 'Makeup & Cosmetics', 'Skin Care', 'Hair Care', 'Essential Oils', 'Fragrences']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Soaps & Bath Bombs', 'Sex Toys', 'Face Masks & Coverings', 'Hand Sanitizers']} />
          <MenuDropDownTitle>All Bath & Beauty</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/13947205/c/1241/986/447/41/il/da112b/1740733266/il_340x270.1740733266_83i7.jpg" more={['Design ideas and inspiration']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Pet Supplies') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Pet Collars & Leashes', 'Pet Furniture', 'Pet Clothing & Shoes']} />
          <NotBoldCategoryItem item={['Pet Costumes', 'Pet Hats & Wigs', 'Pet Jackets & Hoodies']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Pet Bedding', 'Pet Carriers & Houses']} />
          <MenuDropDownTitle>All Pet Supplies</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/13947205/c/1241/986/447/41/il/da112b/1740733266/il_340x270.1740733266_83i7.jpg" more={['Design ideas and inspiration']} />
      </SubCategoriesContainer>
    );
  }
  return null;
};

export default HomeLiving;
