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
  padding-left: 20px;
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
  right: 19%;
`;

const SearchDropDown = styled.div`
  position: fixed;
  top: 9%;
  left: 17%;
  z-index: 10;
  background-color: white;
  width: 1080px;
  height: auto;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0 1px 4px 0 rgba(34, 34, 34, 0.1) inset;
  border-color: rgba(34, 34, 34, 0.15);
  padding-top: 8px;
`;

const OverLay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
pointer-events: ${(props) => props.active ? 'all' : 'none'};
`;

const SearchDropDownHeader = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding-left: 15px;
`;

const SearchList = styled.ul`
  list-style: none;
  padding: 5px;
`;

const SearchItem = styled.li`
  // margin-bottom: 10px;
  padding: 5px 10px;
  &:hover {
    background-color: #e8eaf6;
  }
`;

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchItem: '',
      searching: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.searchDropDown = this.searchDropDown.bind(this);
    this.handleSearchBarClick = this.handleSearchBarClick.bind(this);
  }

  handleSearch(e) {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => this.props.getSearches(this.state.searchItem));
  }

  searchDropDown() {
    if (this.state.searching) {
      return (
        <SearchDropDown>
          <SearchDropDownHeader>Popular right now</SearchDropDownHeader>
          <SearchList>
            {this.props.searches.map((entry, index) => {
              return <SearchItem key={index}>{entry.item}</SearchItem>
            })}
          </SearchList>
        </SearchDropDown>
      );
    }
  }

  handleSearchBarClick() {
    this.setState((prevState) => ({
      searching: !prevState.searching,
    }));
  }

  render() {
    return (
      <div>
        <Logo>Getsy</Logo>
        <SearchBarInput onClick={() => this.handleSearchBarClick()} onChange={(e) => this.handleSearch(e)} value={this.state.searchItem} name="searchItem" />
        <SearchIcon>
          <i className="fa fa-search" />
        </SearchIcon>
        {this.searchDropDown()}
        <OverLay active={this.state.searching} onClick={() => this.handleSearchBarClick()} />
      </div>
    );
  }
}

export default SearchBar;
