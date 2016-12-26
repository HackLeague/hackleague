import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';

import logo from '../assets/images/logo.png';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  max-width: 300px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 16px;
`;

class LoginForm extends React.Component {
  render () {
    return (
      <Wrapper>
        <LogoWrapper>
          <img src={logo} />
        </LogoWrapper>        
        <form onSubmit={this.props.onSubmit}>
          <div>
            <TextField floatingLabelText="Email" name="email" />
          </div>
          <ButtonWrapper>
            <RaisedButton
              label="Send me a magic link"
              primary
              type="submit"
            />
          </ButtonWrapper>
        </form>  
      </Wrapper>
    );
  }
}

export default LoginForm;