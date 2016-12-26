import React, {Component} from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Stats from './Stats';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

class Profile extends Component {
  render () {
    return (
      <Wrapper>
        <Header
          name="suancarloj"
        />
        <Stats
          points={110}
          ranking={1}
          attended={3}
        />
        <Navigation
          
        />
      </Wrapper>
    )
  }
}

export default Profile