import React from 'react';

export default class App extends React.Component {
  //static propTypes = {
    //content: React.PropTypes.element
  //}

  //constructor(props){
    //super(props);
    //this.state = {
      //session: {}
    //}
  //}

  render() {
    return <div>
      {React.cloneElement(this.props.content, {})}
    </div>
  }
}

