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

const CraftSupplies = ({ subItem }) => {
  if (subItem === 'Home & Hobby') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Woodworking & Carpentry', 'Home Improvement', 'Electronics & Circuitry', 'Framing', 'Doll & Model Making', 'Candle Making']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Food & Fermenting', 'Floral & Garden Crafts']} />
          <NotBoldCategoryItem item={['Gardening & Plants', 'Floral Arranging']} />
          <MenuDropDownHeader>
            <MenuDropDownTitle>All Home & Hobby</MenuDropDownTitle>
            <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
          </MenuDropDownHeader>
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/20370089/c/800/635/0/164/il/ecfe48/2320758227/il_340x270.2320758227_ix48.jpg" more={['DIY craft projects']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Jewelry & Beauty') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Jewelry Making & Beading']} />
          <NotBoldCategoryItem item={['Beads', 'Cabochons', 'Charms', 'Jewelry Findings', 'Pendants']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Makeup & Face Painting']} />
          <MenuDropDownHeader>
            <MenuDropDownTitle>All Jewelry & Beauty</MenuDropDownTitle>
            <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
          </MenuDropDownHeader>
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/20370089/c/800/635/0/164/il/ecfe48/2320758227/il_340x270.2320758227_ix48.jpg" more={['DIY craft projects']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Sewing & Fiber') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Knitting', 'Crochet', 'Sewing', 'Quilting']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Embroidery', 'Cross Stitch']} />
          <MenuDropDownHeader>
            <MenuDropDownTitle>All Sewing & Fiber</MenuDropDownTitle>
            <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
          </MenuDropDownHeader>
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/20370089/c/800/635/0/164/il/ecfe48/2320758227/il_340x270.2320758227_ix48.jpg" more={['DIY craft projects']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Papercraft') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Card Making & Stationery', 'Scrapbooking', 'Bookbinding', 'Stamping']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Origami', 'Party & Gifting']} />
          <MenuDropDownHeader>
            <MenuDropDownTitle>All Papercraft</MenuDropDownTitle>
            <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
          </MenuDropDownHeader>
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/20370089/c/800/635/0/164/il/ecfe48/2320758227/il_340x270.2320758227_ix48.jpg" more={['DIY craft projects']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Visual Arts') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Painting', 'Printing & Printmaking', 'Drawing & Drafting', 'Photography']} />
        </CategoryList>
        <CategoryList>
          <BoldCategoryItem item={['Collage', 'Calligraphy & Pens']} />
          <MenuDropDownHeader>
            <MenuDropDownTitle>All Visual Arts</MenuDropDownTitle>
            <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
          </MenuDropDownHeader>
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/20370089/c/800/635/0/164/il/ecfe48/2320758227/il_340x270.2320758227_ix48.jpg" more={['DIY craft projects']} />
      </SubCategoriesContainer>
    );
  } if (subItem === 'Sculpting & Forming') {
    return (
      <SubCategoriesContainer>
        <CategoryList>
          <BoldCategoryItem item={['Ceramics & Pottery', 'Metalworking', 'Carving & Whittling']} />
        </CategoryList>
        <CategoryList>
          <MenuDropDownHeader>
            <MenuDropDownTitle>All Sculpting & Forming</MenuDropDownTitle>
            <Pointer src="https://img.icons8.com/fluent-systems-filled/17/000000/long-arrow-right.png" />
          </MenuDropDownHeader>
        </CategoryList>
        <MenuCategoryPicture url="https://i.etsystatic.com/20370089/c/800/635/0/164/il/ecfe48/2320758227/il_340x270.2320758227_ix48.jpg" more={['DIY craft projects']} />
      </SubCategoriesContainer>
    );
  }
  return null;
};

export default CraftSupplies;
