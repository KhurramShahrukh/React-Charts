// library imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// local imports
import Navbar from './common/Navbar/Navbar';
import Patients from './pages/Patients/Patients';
import Error from './pages/Error/Error';
import ErrorBoundary from './pages/Error/ErrorBoundary';

const App: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/patients" component={Patients} />
            <Route exact path="/error" component={Error} />
            <Redirect to="/patients" />
          </Switch>
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
