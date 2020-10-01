import React from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import SearchBar from './SearchBar.jsx';
import SignInButton from './SignInButton.jsx';
import MenuBar from './MenuBar.jsx';
import SignInModal from './SignInModal.jsx';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
`;

const MainNavBarContainer = styled.div`
  padding-left: 180px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid lightgray;
  position: relative;
`;

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
    this.getSearches = this.getSearches.bind(this);
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

  getSearches(searchItem) {
    axios.get('/entry', {
      params: {
        search: searchItem,
      },
    })
      .then((results) => {
        this.setState({
          searchData: results.data,
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
      <div>
        <GlobalStyle />
        <MainNavBarContainer>
          <SearchBar searches={this.state.searchData} getSearches={this.getSearches} />
          <SignInButton onSignInClick={this.onSignInClick} />
          <MenuBar />
          <SignInModal overlayClick={this.overlayClick} active={this.state.active} addUser={this.addUser} />
        </MainNavBarContainer>
      </div>
    );
  }
}

export default App;
