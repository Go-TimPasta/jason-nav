import React from 'react';
import SearchBar from './SearchBar.jsx';
import SignInButton from './SignInButton.jsx';
import CartButton from './CartButton.jsx';
import MenuBar from './MenuBar.jsx';
import SignInModal from './SignInModal.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchData: [],
      active: '',
    };
    this.onSignInClick = this.onSignInClick.bind(this);
    this.overlayClick = this.overlayClick.bind(this);
  }

  onSignInClick() {
    this.setState({
      active: 'active',
    });
  }

  overlayClick() {
    this.setState({
      active: '',
    });
  }

  render() {
    return (
      <div className="main-navbar-container">
        <SearchBar />
        <SignInButton onSignInClick={this.onSignInClick} />
        <MenuBar />
        <SignInModal active={this.state.active} />
        <div id="overlay" className={this.state.active} onClick={() => this.overlayClick()}></div>
      </div>
    );
  }
}

export default App;
