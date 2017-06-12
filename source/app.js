var React       = require('react');
var ReactDOM    = require('react-dom');
var Application = require('./components/Application.react');
var WebAPIUtil  = require('./utils/WebAPIUtils');

WebAPIUtil.initializeStreamOfTweets();

ReactDOM.render(<Application />, document.getElementById('react-application'));
