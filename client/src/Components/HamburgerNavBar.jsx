import React from 'react';
import styled from 'styled-components';

const HamburgerNavBarContainer = styled.div`
  height: 100vh;
  top: 0;
  position: fixed;
  width: 100%;
  background: white;
  z-index: ${(props) => (props.HBnavbar ? '400' : '0')};
  opacity: ${(props) => (props.HBnavbar ? '1' : '0')};
  @media only screen and (min-width: 640px) {
    min-width: 320px;
    max-width: 40%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 640px)
  .ui-toolkit .pt-md-4 {
      padding-top: 24px;
  }
  @media only screen and (min-width: 640px)
  .ui-toolkit .pl-md-2 {
      padding-left: 12px;
  }
  @media only screen and (min-width: 640px)
  .ui-toolkit .pb-md-2 {
      padding-bottom: 12px;
  }
`;

const Logo = styled.div`
font-family: Graphik Webfont;
  color: #F1641E;
  cursor: pointer;
  font-size: 30px;
  padding: 15px;

  @media only screen and (min-width: 640px)
  .ui-toolkit .pl-md-0 {
      padding-left: 0px;
  }
  @media only screen and (min-width: 640px)
  .ui-toolkit .flex-md-5 {
      flex: 5 1 0% !important;
  }
`;

const XbuttonContainer = styled.div`
  padding: 15px;
  @media only screen and (min-width: 640px)
  .ui-toolkit .pr-md-2 {
      padding-right: 12px;
  }
  @media only screen and (min-width: 640px)
  .ui-toolkit .flex-md-1 {
      flex: 1 1 0% !important;
  }
`;

const OverLay = styled.div`
  position: fixed;
  opacity: ${(props) => (props.HBnavbar ? '1' : '0')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, .5);
  z-index: 119;
  pointer-events: ${(props) => (props.HBnavbar ? 'all' : 'none')};
`;

class HamburgerNavBar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <HamburgerNavBarContainer HBnavbar={this.props.HBnavbar}>
          <Header>
            <Logo>Getsy</Logo>
            <XbuttonContainer>
              <img src="https://img.icons8.com/ios/45/000000/multiply.png"/>
            </XbuttonContainer>
          </Header>
        </HamburgerNavBarContainer>
        <OverLay HBnavbar={this.props.HBnavbar} onClick={() => this.props.handleBurgerClickClose()}></OverLay>
      </div>
    );
  }
}

export default HamburgerNavBar;
