import React from 'react';

// Libraries
import {CssBaseline, useMediaQuery, ThemeProvider} from '@material-ui/core';
import {Router, Route, Switch} from 'react-router-dom';

// Components
import {HomePage, AuthPage, ComposePage} from '../screens';
import {MobileView} from '../components';

// Config
import theme from './theme';

// Utils
import createBrowserHistory from '../utils/createBrowserHistory';

function App(): JSX.Element {
  const isMobileView = useMediaQuery('(max-width:600px)');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {isMobileView ? (
        <MobileView />
      ) : (
        <Router history={createBrowserHistory}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={AuthPage} />
            <Route exact path="/login" component={AuthPage} />
            <Route exact path="/compose" component={ComposePage} />
          </Switch>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
