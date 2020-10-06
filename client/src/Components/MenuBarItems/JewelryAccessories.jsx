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

const JewelryAccessories = ({ subItem }) => {
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
        <MenuCategoryPicture url={"https://i.etsystatic.com/11266858/d/il/ef6883/2581486117/il_340x270.2581486117_4ljl.jpg?version=0"} more={['Jewelry, handbags, and accessories']} />
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
        <CategoryList>
          <BoldCategoryItem item={['Luggage & Duffel Bags', 'Phone Cases']} />
          <MenuDropDownTitle>All Bags & Purses</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url={"https://i.etsystatic.com/11266858/d/il/ef6883/2581486117/il_340x270.2581486117_4ljl.jpg?version=0"} more={['Jewelry, handbags, and accessories']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Necklaces') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Pendants', 'Chokers', 'Charm Necklaces', 'Crystal Necklaces', 'Monogram & Name Necklaces', 'Beaded Necklaces']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Chains', 'Bib Necklaces', 'Tassel Necklaces']} />
          <MenuDropDownTitle>All Necklaces</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url={"https://i.etsystatic.com/11266858/d/il/ef6883/2581486117/il_340x270.2581486117_4ljl.jpg?version=0"} more={['Jewelry, handbags, and accessories']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Rings') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Stackable Rings', 'Statement Rings', 'Bands', 'Signet Rings', 'Multi-Stone Rings', 'Solitaire Rings', 'Midi Rings']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Wedding & Engagement']} />
          <NotBoldCategoryItem item={['Engagement Rings', 'Wedding Bands', 'Promise Rings', 'Bridal Sets']} />
          <MenuDropDownTitle>All Rings</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url={"https://i.etsystatic.com/11266858/d/il/ef6883/2581486117/il_340x270.2581486117_4ljl.jpg?version=0"} more={['Jewelry, handbags, and accessories']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Earrings') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Dangle & Drop Earrings', 'Stud Earrings', 'Hoop Earrings', 'Chandelier Earrings', 'Ear Jackets & Climbers']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Cluster Earrings', 'Cuff & Wrap Earrings', 'Clip-On Earrings']} />
          <MenuDropDownTitle>All Earrings</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url={"https://i.etsystatic.com/11266858/d/il/ef6883/2581486117/il_340x270.2581486117_4ljl.jpg?version=0"} more={['Jewelry, handbags, and accessories']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Bracelets') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Beaded Bracelets', 'Bangles', 'Charm Bracelets', 'Woven & Braided Bracelets']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Cuff Bracelets', 'Chain & Link Bracelets']} />
          <MenuDropDownTitle>All Bracelets</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url={"https://i.etsystatic.com/11266858/d/il/ef6883/2581486117/il_340x270.2581486117_4ljl.jpg?version=0"} more={['Jewelry, handbags, and accessories']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Body Jewelry') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Anklets', 'Hair Jewelry', 'Nose Rings & Studs', 'Arm Bands', 'Nipple Jewelry', 'Belly Rings']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Shoulder Jewelry', 'Toe Rings', 'Lip Rings']} />
          <MenuDropDownTitle>All Body Jewelry</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url={"https://i.etsystatic.com/11266858/d/il/ef6883/2581486117/il_340x270.2581486117_4ljl.jpg?version=0"} more={['Jewelry, handbags, and accessories']} />
      </SubCategoriesContainer>
    );
  }
  return null;
};

export default JewelryAccessories;
