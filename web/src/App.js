import React, { Component } from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import styled from 'styled-components';

import logo from './logo.svg';
import LoginContainer from './components/LoginContainer';
import Profile from './components/profile/Profile';
import './App.css';
import 'tachyons/css/tachyons.css';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const foo = () => {
  return <div><Link to="/login">Go to login</Link></div>
}


class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Match exactly pattern="/" component={foo} />
          <Match pattern="/login" component={LoginContainer} />
          <Match pattern="/profile" component={Profile} />
        </Wrapper>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ pathname }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${pathname}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${pathname}/components`}>Components</Link></li>
      <li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
    </ul>

    <Match pattern={`${pathname}/:topicId`} component={Topic}/>
    <Match pattern={pathname} exactly render={() => (
      <h3>Please select a topic</h3>
    )}/>
  </div>
)

const Topic = ({ params }) => (
  <div>
    <h3>{params.topicId}</h3>
  </div>
)

export default App;
