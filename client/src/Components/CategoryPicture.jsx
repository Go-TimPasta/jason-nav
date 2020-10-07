import React from 'react';
import styled from 'styled-components';
import BoldCategoryItem from './BoldCategoryItem.jsx';

const PictureContainer = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  &:hover {
    transition: transform 200ms cubic-bezier(0.345, 0.115, 0.135, 1.42), opacity 150ms easy-out, border-color 200ms ease-out;
    border-radius: 9px;
    background: #FFFFFF;
    box-shadow: 0 2px 18px rgba(34, 34, 34, 0.2);
  }
`;

const CategoryPicture = styled.img`
  box-sizing: border-box;
  margin: 0;
  max-height: 220px;
  width: auto;
  border-radius: 3px;
`;

const PicListContainer = styled.ul`
box-sizing: border-box;
  margin: 0;
  padding: 0px;
  list-style: none;
`;

const ItalicSpan = styled.span`
  box-sizing: border-box;
  margin: 0;
  font-family: "Graphik Webfont";
  font-size: 15px;
  font-style: italic;
  color: #616161;
`;

const MenuCategoryPicture = ({ more, url }) => (
  <PictureContainer>
    <CategoryPicture src={url} />
    <PicListContainer>
      <ItalicSpan>Editors' Picks</ItalicSpan>
      <BoldCategoryItem item={more} />
    </PicListContainer>
  </PictureContainer>
);

export default MenuCategoryPicture;
