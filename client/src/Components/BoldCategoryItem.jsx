import React from 'react';
import styled from 'styled-components';

const BoldItem = styled.li`
  font-family: "Graphik Webfont";
  font-size: 16px;
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  padding: 6px 0 12px 0;
  &:hover {
    text-decoration: underline;
  }
`;

const BoldCategoryItem = (props) => props.item.map((category, index) => <BoldItem key={index}>{category}</BoldItem>);

export default BoldCategoryItem;
