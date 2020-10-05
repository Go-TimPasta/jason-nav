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
  box-shadow: none;
  background: transparent;
  border-color: ${(props) => (props.isSearching === true ? 'black;' : 'rgba(34, 34, 34, 0.15);')}
  border-style: solid;
  border-width: 1px;
  font-size: 16px;
  line-height: 8px;
  height: 48px;
  outline: none;
  width: 100%;
  min-width: 0;
  padding-left: 20px;
  border-top-left-radius: 96px;
  border-bottom-left-radius: 96px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  &:hover {
    border-color: black;
  }
`;

const SearchIcon = styled.span`
  box-shadow: none;
  color: #222222;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
  position: relative;
  padding-right: 21px;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 12px;
  height: 48px;
  color: #222222;
  font-weight: bold;
  font-size: 16px;
  white-space: nowrap;
  z-index: 10;
  transition: all 200ms ease-out;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 96px;
  border-bottom-right-radius: 96px;
  border: 1px solid rgba(34, 34, 34, 0.15);
  border-left: 0;
  border-color: ${(props) => (props.isHovering ? 'black;' : 'none;')}
`;

const SearchDropDown = styled.div`
  position: fixed;
  top: 8%;
  left: 290px;
  z-index: 100;
  background-color: white;
  width: 1035px;
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

const SearchAndIconContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  position: relative;
  display: flex;
  border-radius: 96px;
  box-shadow: 1px 2px 4px 0 rgba(34, 34, 34, 0.1) inset;
`;

const MainSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media only screen and (min-width: 900px) {
    flex: 1 1 0% !important;
  }

  @media only screen and (min-width: 0) {
    flex-basis: 100% !important;
  }

  @media only screen and (max-width: 899px) and (min-width: 0) {
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 0) {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

`;

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchItem: '',
      searching: false,
      isHovering: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.searchDropDown = this.searchDropDown.bind(this);
    this.handleSearchBarClick = this.handleSearchBarClick.bind(this);
    this.isNotSearching = this.isNotSearching.bind(this);
    this.findShopNames = this.findShopNames.bind(this);
    this.handleSearchBarHover = this.handleSearchBarHover.bind(this);
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

  handleSearchBarHover() {
    this.setState((prevState) => ({
      isHovering: !prevState.isHovering,
    }));
  }

  render() {
    const { searchItem, searching, isHovering } = this.state;
    return (
      <MainSearchBarContainer>
        <Logo>Getsy</Logo>
        <SearchAndIconContainer>
          <SearchBarInput isSearching={searching} onMouseOver={() => this.handleSearchBarHover()} onMouseLeave={() => this.handleSearchBarHover()} onClick={() => { this.handleSearchBarClick(); this.props.getSearches(this.state.searchItem); }} onChange={(e) => this.handleSearch(e)} value={searchItem} name="searchItem" />
          <SearchIcon isHovering={isHovering}>
            <i className="fa fa-search" />
          </SearchIcon>
        </SearchAndIconContainer>
        {this.searchDropDown()}
        <OverLay active={searching} onClick={() => this.handleSearchBarClick()} />
      </MainSearchBarContainer>
    );
  }
}

export default SearchBar;
