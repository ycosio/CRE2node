import React from 'react';

export default class List extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
        <tr>
          <td>{this.props.user.email}</td>
          <td>Delete</td>
          <td>Update</td>
        </tr>
    )
  }
}
