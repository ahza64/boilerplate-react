var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');


var firstName = 'Justin'
var message;

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
