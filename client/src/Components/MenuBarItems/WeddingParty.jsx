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

const WeddingParty = ({ subItem }) => {
  if (subItem === 'Party Supplies') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Party Décor', 'Baking & Cake Decoration']} />
        </CategoryList>
        <CategoryList>
          <MenuDropDownTitle>All Party Supplies</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/6739878/c/2000/1589/0/17/il/287269/2198306279/il_340x270.2198306279_4ngm.jpg" more={['Getsy weddings']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Invitations & Paper') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Invitations & Announcements']} />
          <NotBoldCategoryItem item={['Wedding Invitations', 'Wedding Invitation Kits', 'Wedding Templates', 'Save The Dates']} />
          <BoldCategoryItem item={['Greeting Cards']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Gift Wrapping', 'Holiday & Seasonal Cards', 'Stationery']} />
          <MenuDropDownTitle>All Invitations & Paper</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/6739878/c/2000/1589/0/17/il/287269/2198306279/il_340x270.2198306279_4ngm.jpg" more={['Getsy weddings']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Wedding Decorations') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Centerpieces', 'Cake Toppers', 'Serving & Dining']} />
          <NotBoldCategoryItem item={['Cake Servers & Knives', 'Table Décor']} />
          <BoldCategoryItem item={['Candles & Holders']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Baskets & Boxes', 'Ring Bearer Pillows', 'Plants']} />
          <MenuDropDownTitle>All Wedding Decorations</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/6739878/c/2000/1589/0/17/il/287269/2198306279/il_340x270.2198306279_4ngm.jpg" more={['Getsy weddings']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Wedding Gifts') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Bridesmaids Gifts', 'Wedding Favors', 'Gifts For The Couple', 'Groomsmen Gifts', 'Guest Books']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Portraits & Frames', 'Albums & Scrapbooks']} />
          <MenuDropDownTitle>All Wedding Gifts</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/6739878/c/2000/1589/0/17/il/287269/2198306279/il_340x270.2198306279_4ngm.jpg" more={['Getsy weddings']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Wedding Accessories') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Something Blue', 'Bouquets & Corsages', 'Veils', 'Bags & Purses', 'Cover Ups & Scarves', 'Hair Accessories']} />
          <NotBoldCategoryItem item={['Barrettes & Clips', 'Decorative Combs', 'Fascinators & Mini Hats', 'Hair Jewelry', 'Hair Pins', 'Wreaths & Tiaras']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Cummerbunds', 'Neckties', 'Umbrellas', 'Hats']} />
          <MenuDropDownTitle>All Wedding Accessories</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/6739878/c/2000/1589/0/17/il/287269/2198306279/il_340x270.2198306279_4ngm.jpg" more={['Getsy weddings']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Wedding Clothing') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Dresses']} />
          <NotBoldCategoryItem item={['Bridal Gowns & Separates', 'Bridesmaid Dresses', 'Flower Girl Dresses', 'Mother of the Bride Dresses']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Lingerie & Garters', 'Suits']} />
          <MenuDropDownTitle>All Wedding Clothing</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/6739878/c/2000/1589/0/17/il/287269/2198306279/il_340x270.2198306279_4ngm.jpg" more={['Getsy weddings']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Wedding Jewelry') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Earrings', 'Rings']} />
          <NotBoldCategoryItem item={['Engagement Rings', 'Wedding Bands', 'Bridal Sets']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Necklaces', 'Bracelets', 'Jewelry Sets']} />
          <MenuDropDownTitle>All Wedding Jewelry</MenuDropDownTitle>
          <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/6739878/c/2000/1589/0/17/il/287269/2198306279/il_340x270.2198306279_4ngm.jpg" more={['Getsy weddings']} />
      </SubCategoriesContainer>
    );
  }
  return null;
};

export default WeddingParty;
