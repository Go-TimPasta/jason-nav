import React from 'react';
import styled from 'styled-components';

const NotBoldItem = styled.li`
  font-family: "Graphik Webfont";
  font-size: 15px;
  padding-bottom: 10px;
  list-style: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NotBoldCategoryItem = (props) => props.item.map((category, index) => <NotBoldItem key={index}>{category}</NotBoldItem>);

export default NotBoldCategoryItem;
