import React from 'react';
import styled from 'styled-components';

const Logo = styled.label`
  font-family: Graphik Webfont;
  font-size: 40px;
  color: #F1641E;
  padding-right: 10px;
`;

const SearchBarInput = styled.input`
  transition: border 200ms ease-out,background 200ms ease-out;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgba(34, 34, 34, 0.1) inset;
  border-color: rgba(34, 34, 34, 0.15);
  border-style: solid;
  border-width: 1px;
  border-radius: 40px;
  color: #222222;
  font-family: inherit;
  font-size: 16px;
  line-height: 8px;
  height: 48px;
  outline: none;
  width: 73%;
  min-width: 0;
`;

const SearchIcon = styled.span`
  color: #222222;
  font-weight: bold;
  font-size: 23px;
  cursor: pointer;
  text-align: left;
  float: right;
  position: absolute;
  top: 28px;
  right: 20%;
`;

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        {/* htmlFor="search-bar" type="text" name="search-bar" */}
        <Logo>Etsy</Logo>
        <SearchBarInput />
        <SearchIcon>
          <i className="fa fa-search" />
        </SearchIcon>
      </div>
    );
  }
}

export default SearchBar;
