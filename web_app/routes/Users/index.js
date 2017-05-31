import React from 'react';
import ReactMixin from 'react-mixin';
import Reflux from 'reflux';

import AllUsers from '../../components/Users';
import UserActions from '../../actions/user';
import UserStore from '../../stores/user';

@ReactMixin.decorate(Reflux.connect(UserStore, 'allUsers'))
export default class Users extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    UserActions.fetchUsers();
  }

  render(){
    return (
      <div>
        <h1> Users </h1>
        <AllUsers users={this.state.allUsers}/>
      </div>
    );
  }
}
