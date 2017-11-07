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
import CreatePatient from './containers/patient/CreatePatient';
import EditPatient from './containers/patient/EditPatient';



ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
     <Route path="/" component={App}>
       <IndexRoute component={HomePage} />
        <Route path="/patients" component={PatientPage} />
        <Route path="/create-patient" component={CreatePatient} />
        <Route path="/patients/:patientId" component={EditPatient} />
     </Route>
   </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
