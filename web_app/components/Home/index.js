import React from 'react';
import {Link} from 'react-router'

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render(){
    return (
      <div>
        <h1> Home </h1>
        <Link to='/users'>Users</Link>
      </div>
    );
  }
}
