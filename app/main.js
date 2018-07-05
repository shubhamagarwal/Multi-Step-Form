import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Registration from './components/registration.jsx';

//import store from './store';

class AppContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let { store } = this.context;
  }

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Registration} />
          </div>
        </Router>
    )
  }
}

render(
  
    <AppContainer />,
  document.getElementById('registration-form')

);