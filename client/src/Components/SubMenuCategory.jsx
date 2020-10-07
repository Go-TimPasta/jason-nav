import React from 'react';
import styled from 'styled-components';

const SecondPointer = styled.img`
  box-sizing: border-box;
  margin: 0;
  float: right;
  padding-right: 20px;
  padding-top: 5px;
`;

const SubMenuCategory = (props) => (
  <span>
    {props.category}
    <span><SecondPointer src="https://img.icons8.com/fluent-systems-filled/13/000000/forward.png"/>
    </span>
  </span>
);

export default SubMenuCategory;
