import Home from './components/Home';
import Users from './routes/Users';
//import App from './App.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//<Route path="/" component={App}>
//<IndexRoute components={{content: Home}} />
//<Route path='users' components={{content: Users}} />
//</Route>

let content = document.getElementById('content')

ReactDOM.render(
  (<Router history={browserHistory}>
     <Route path='/' component={Home} />
     <Route path='users' component={Users} />
   </Router>),
   content);
