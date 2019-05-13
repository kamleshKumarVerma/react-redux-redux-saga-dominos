import React from 'react';

export default class DropdownField extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		label: props.label,
  		name: props.name
  	}
  }

  onChangeHandler = (event) => {
  	this.setState({name: event.target.value});
  	this.props.onChangeName({label: this.props.label, name: event.target.value});
  }
  
  render() {
    return (
      <div>
      	<label> {this.state.label} </label>
      	<select value={this.state.name} onChange={this.onChangeHandler}>
      		{this.props.values.map((value)=> {
      			return <option key={value} value={value}>{value}</option>
      		})}
      	</select>
      </div>
    )
  }
}


