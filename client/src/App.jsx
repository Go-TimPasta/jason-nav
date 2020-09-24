import React from 'react';
import SearchBar from './SearchBar.jsx';
import SignInButton from './SignInButton.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="main-navbar-container">
        <SearchBar />
        <SignInButton />
      </div>
    );
  }
}

export default App;
