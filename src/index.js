import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import store, { history } from './store';
import HomePage from './containers/HomePage';
import PatientPage from './containers/patient/PatientPage';

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
     <Route path="/" component={App}>
       <IndexRoute component={HomePage} />
        <Route path="/patients" component={PatientPage} />
     </Route>
   </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
