import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="searchbar-container">
        <label className="navbar-logo" htmlFor="search-bar">Etsy</label>
        <input type="text" name="search-bar" id="search-bar" />
        <span className="search-icon" onClick={() => console.log('hello from button')}>
          <i className="fa fa-search" />
        </span>
      </div>
    );
  }
}

export default SearchBar;
