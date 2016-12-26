import React, {Component} from 'react';
import { Redirect } from 'react-router';
import LoginForm from './LoginForm';

class LoginContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirectToReferrer: false,
    }
  }

  handleSubmit(credentials) {
    this.setState({ redirectToReferrer: '/profile' })
  }

  render () {
    if (this.state.redirectToReferrer) {
      return <Redirect to={this.state.redirectToReferrer} />
    }

    return (
      <LoginForm
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default LoginContainer