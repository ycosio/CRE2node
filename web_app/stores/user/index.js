import Reflux from 'reflux';
import UserActions from '../../actions/user';
import HTTP from '../../services/HTTP.js'

let UserStore = Reflux.createStore({
  listenables: [UserActions],
  fetchUsers: fetchUsers
});

function fetchUsers(){
  HTTP.get('http://localhost:3000/users/all')
  .then(allUsers => {
    this.trigger(allUsers);
  });
}

export default UserStore;
