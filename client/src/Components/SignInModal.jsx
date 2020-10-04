import React from 'react';
import styled from 'styled-components';
import OtherSignIn from './OtherSignIn.jsx';
import Policy from './Policy.jsx';

const SignInModalMain = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${(props) => (props.active === 'active' ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)')};
  border: 1px solid black;
  border-radius: 5px;
  z-index: 10;
  background-color: white;
  width: 360px;
  max-width: 70%;
  height: 800px;
`;

const SignInModalHeader = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  line-height: 36px;
`;

const SignInModalTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  line-height: 36px;
`;

const RegisterButton = styled.div`
  cursor: pointer;
  border: 2px solid black;
  border-radius: 30px;
  padding: 10px 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 18px;
`;

const InputContainers = styled.div`
  margin: 13px;
`;

const InputContainerLabels = styled.div`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 5px;
`;

const Inputs = styled.input`
  transition: border 200ms ease-out,background 200ms ease-out;
  appearance: none;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgba(34, 34, 34, 0.1) inset;
  border-color: rgba(34, 34, 34, 0.15);
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  color: #222222;
  display: block;
  font-family: inherit;
  font-size: 16px;
  line-height: 28px;
  height: 48px;
  outline: none;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  min-width: 0;
  &:hover {
    border-color: black;
  }
  &:focus {
    border-color: black;
  }
`;

const SignInCheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SignInCheckBox = styled.label`
  font-family: 'Roboto', sans-serif;
  display: block;
  position: relative;
  padding-left: 55px;
  padding-top: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  line-height: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const SignInCheckBoxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  //need to figure out a way to check the box
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: #eee;
  border-radius: 6px;
  margin-left: 15px;
  margin-top: 10px;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const HelperLinksForgot = styled.span`
  text-decoration: underline;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 18px;
  padding-top: 5px;
  color: #595959;
  padding-right: 18px;
`;

const HelperLinksTrouble = styled(HelperLinksForgot)`
  padding-right: 0;
`;

const ButtonAndTroubleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SignInSubmitButton = styled.button`
  background: none;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto', sans-serif;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  min-height: 48px;
  min-width: 48px;
  text-align: center;
  vertical-align: middle;
  z-index: 10;
  width: 91%;
  margin: 15px;

  &:hover {
    opacity: 1;
    background-color: rgb(49, 49, 49);
  }
`;

const OrContainer = styled.div`
  margin-bottom: 24px;
  margin-top: 24px;
  border-bottom: 1px solid #E1E3DF;
  line-height: 0;
  text-align: center;
`;

const OrSpan = styled.span`
  text-align: center;
  line-height: 0;
  background-color: white;
  padding: 12px;
  vertical-align: bottom;
  color: #595959;
`;

const OverLay = styled.div`
  position: fixed;
  opacity: ${(props) => (props.active === 'active' ? '1' : '0')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, .5);
  pointer-events: ${(props) => (props.active === 'active' ? 'all' : 'none')};
`;

class SignInModal extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      username: '',
      register: false,
      searching: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleModulePage = this.handleModulePage.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
    this.onInputClick = this.onInputClick.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleModulePage() {
    this.setState((prevState) => ({
      register: !prevState.register,
    }));
  }

  resetInputs() {
    this.setState({
      email: '',
      password: '',
      username: '',
    });
  }

  onInputClick() {
    this.setState({
      searching: true,
    });
  }

  render() {
    const {
      email, password, username, register, searching,
    } = this.state;
    if (!register) {
      return (
        <div>
          <SignInModalMain active={this.props.active}>
            <SignInModalHeader>
              <SignInModalTitle>Sign In</SignInModalTitle>
              <RegisterButton onClick={() => { this.handleModulePage(); this.resetInputs(); }}>Register</RegisterButton>
            </SignInModalHeader>
            <div>
              <InputContainers>
                <InputContainerLabels>Email address</InputContainerLabels>
                <Inputs searching={searching} type="text" name="email" value={email} onChange={this.onChangeHandler} />
              </InputContainers>
              <InputContainers>
                <InputContainerLabels>Password</InputContainerLabels>
                <Inputs searching={searching} type="password" name="password" value={password} onChange={this.onChangeHandler} />
              </InputContainers>
              <SignInCheckBoxContainer>
                <label className="sign-in-checkbox">Stay signed in
                  <input className="sign-in-checkbox-input" type="checkbox" />
                  <span className="checkmark" />
                </label>
                <HelperLinksForgot><a href="#">Forgot your password?</a></HelperLinksForgot>
              </SignInCheckBoxContainer>
              <ButtonAndTroubleContainer>
                <SignInSubmitButton onClick={() => console.log('hi')}>Sign In</SignInSubmitButton>
                <HelperLinksTrouble><a href="#">Trouble signing in?</a></HelperLinksTrouble>
              </ButtonAndTroubleContainer>
            </div>
            <OrContainer>
              <OrSpan>OR</OrSpan>
            </OrContainer>
            <OtherSignIn />
            <Policy />
          </SignInModalMain>
          <OverLay active={this.props.active} onClick={() => {this.props.overlayClick(); this.resetInputs();}}></OverLay>
        </div>
      );
    }
    return (
      <div>
        <SignInModalMain active={this.props.active}>
          <SignInModalHeader>
            <SignInModalTitle>Create your account</SignInModalTitle>
          </SignInModalHeader>
          <div>
            <InputContainers>
              <InputContainerLabels>Email address</InputContainerLabels>
              <Inputs searching={searching} type="text" name="email" value={email} onChange={this.onChangeHandler} />
            </InputContainers>
            <InputContainers>
              <InputContainerLabels>First Name</InputContainerLabels>
              <Inputs searching={searching} type="text" name="username" value={username} onChange={this.onChangeHandler} />
            </InputContainers>
            <InputContainers>
              <InputContainerLabels>Password</InputContainerLabels>
              <Inputs searching={searching} type="password" name="password" value={password} onChange={this.onChangeHandler} />
            </InputContainers>
            <SignInSubmitButton onClick={() => {this.props.addUser(username, password, email); this.props.overlayClick(); this.resetInputs(); this.handleModulePage();}}>Register</SignInSubmitButton>
          </div>
          <OrContainer>
            <OrSpan>OR</OrSpan>
          </OrContainer>
          <OtherSignIn />
          <Policy />
        </SignInModalMain>
        <OverLay active={this.props.active} onClick={() => {this.props.overlayClick(); this.handleModulePage(); this.resetInputs();}}></OverLay>
      </div>
    );
  }
}

export default SignInModal;
