import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const theme = {
  palette: {
    primary1Color: '#a58242',
  },
}

const Wrapper = () => (
  <MuiThemeProvider
    muiTheme={getMuiTheme(theme)}
  >
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
