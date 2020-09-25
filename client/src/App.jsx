import React from 'react';
import SearchBar from './SearchBar.jsx';
import SignInButton from './SignInButton.jsx';
import CartButton from './CartButton.jsx';
import MenuBar from './MenuBar.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchData: []
    };
  }



  render() {
    return (
      <div className="main-navbar-container">
        <SearchBar />
        <SignInButton />
        <MenuBar />
      </div>
    );
  }
}

export default App;
