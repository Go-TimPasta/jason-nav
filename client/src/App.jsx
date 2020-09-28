import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import SignInButton from './SignInButton.jsx';
import MenuBar from './MenuBar.jsx';
import SignInModal from './SignInModal.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchData: [],
      userData: [],
      active: '',
    };
    this.onSignInClick = this.onSignInClick.bind(this);
    this.overlayClick = this.overlayClick.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  onSignInClick() {
    this.setState({
      active: 'active',
    });
  }

  getUsers() {
    axios.get('/user')
      .then((results) => {
        this.setState({
          userData: results.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addUser(username, password, email) {
    axios.post('/user', {
      username: username,
      password: password,
      email: email
    })
      .then(() => {
        this.getUsers();
      })
      .catch((err) => {
        console.error(err);
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
        <SignInModal overlayClick={this.overlayClick} active={this.state.active} addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
