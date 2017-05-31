import React from 'react';
import List from './List.js'

export default class AllUsers extends React.Component {
  constructor() {
    super();
  }

  userList() {
    if(this.props.users != null){
      return(
        Object.keys(this.props.users).map( key => {
          return <List user={this.props.users[key]} key={key} />
        })
      )
    }
    else{
      return <p>Loading</p>
    }
  }

  render(){
    return (
      <div>
        <table>
          <tbody>
            {this.userList()}
          </tbody>
        </table>
      <p>New</p>
      </div>
    );
  }
}
