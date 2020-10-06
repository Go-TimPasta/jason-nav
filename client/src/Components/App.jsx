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
  text-align: left;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 2px solid lightgray;
  position: relative;
`;

const Header = styled.div`
  text-align: left;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1400px;
  width: 100%;
  align-items: center;
  display: flex;
  @media only screen and (min-width: 900px) {
    padding-left: 36px;
    padding-right: 36px;
  }
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
          userData: results.data,
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
      username,
      password,
      email,
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
    const { searchData, active } = this.state;
    return (
      <div>
        <GlobalStyle />
        <MainNavBarContainer>
          <Header>
            <SearchBar searches={searchData} getSearches={this.getSearches} />
            <SignInButton onSignInClick={this.onSignInClick} />
          </Header>
          <MenuBar />
          <SignInModal overlayClick={this.overlayClick} active={active} addUser={this.addUser} />
        </MainNavBarContainer>
      </div>
    );
  }
}

export default App;
