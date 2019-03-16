import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import stores from '../stores';
import Application from '../containers/Application';
import initializeStreamOfTweets from '../utils/WebAPIUtils';

initializeStreamOfTweets();

const application = (
  <Provider store={stores}>
    <Application />
  </Provider>
);
const applicationDiv = document.getElementById('react-application');

ReactDOM.render(application, applicationDiv);
