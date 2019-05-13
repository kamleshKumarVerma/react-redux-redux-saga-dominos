import React from 'react';
import LoadingHOC from "./loadingHOC";
import Flexi from './Flexi';

class Main extends React.Component {

  onFlexiSubmit = (currentState) => {
  	console.log("This is the current state ", currentState);
  }
  
  render() {
    return (
      <Flexi config={this.props.items} onSubmit={this.onFlexiSubmit}/>
    )
  }
}

export default LoadingHOC("items")(Main);

