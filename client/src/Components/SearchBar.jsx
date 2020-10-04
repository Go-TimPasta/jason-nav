import React from 'react';
import styled from 'styled-components';

const Logo = styled.label`
  font-family: Graphik Webfont;
  font-size: 40px;
  color: #F1641E;
  padding-right: 10px;
  cursor: pointer;
`;

const SearchBarInput = styled.input`
  transition: border 200ms ease-out,background 200ms ease-out;
  box-shadow: 0 1px 4px 0 rgba(34, 34, 34, 0.1) inset;
  border-color: ${(props) => (props.isSearching === true ? 'black;' : 'rgba(34, 34, 34, 0.15);')}
  border-style: solid;
  border-width: 1px;
  border-radius: 40px;
  font-family: inherit;
  font-size: 16px;
  line-height: 8px;
  height: 48px;
  outline: none;
  width: 73%;
  min-width: 0;
  padding-left: 20px;
  &:hover {
    border-color: black;
  }
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
  z-index: 10;
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
pointer-events: ${(props) => (props.active ? 'all' : 'none')};
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
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaf6;
  }
`;

const FindShop = styled(SearchItem)`
  margin-bottom: 7px;
  font-style: italic;
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
    this.isNotSearching = this.isNotSearching.bind(this);
    this.findShopNames = this.findShopNames.bind(this);
  }

  handleSearch(e) {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => this.props.getSearches(this.state.searchItem));
  }

  isNotSearching() {
    const { searchItem } = this.state;
    if (searchItem === '') {
      return (
        <SearchDropDownHeader>Popular right now</SearchDropDownHeader>
      );
    }
  }

  findShopNames() {
    const { searchItem } = this.state;
    if (searchItem.length > 0) {
      return (
      <FindShop>find shop names containing "{this.state.searchItem}"</FindShop>
      );
    }
  }

  searchDropDown() {
    const { searching } = this.state;
    if (searching) {
      return (
        <SearchDropDown>
          {this.isNotSearching()}
          <SearchList>
            {this.props.searches.map((entry, index) => <SearchItem key={index}>{entry.item}</SearchItem>)}
            {this.findShopNames()}
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
    const { searchItem, searching } = this.state;
    return (
      <div>
        <Logo>Getsy</Logo>
        <SearchBarInput isSearching={searching} onClick={() => { this.handleSearchBarClick(); this.props.getSearches(this.state.searchItem); }} onChange={(e) => this.handleSearch(e)} value={searchItem} name="searchItem" />
        <SearchIcon>
          <i className="fa fa-search" />
        </SearchIcon>
        {this.searchDropDown()}
        <OverLay active={searching} onClick={() => this.handleSearchBarClick()} />
      </div>
    );
  }
}

export default SearchBar;
