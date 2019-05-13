import React from 'react';
import TextField from "./textField";
import DropdownField from "./dropdownField";
import { connect } from "react-redux";

class Flexi extends React.Component {

  nameChangeHandler = (changeObj) => {
  	this.props.changeName(changeObj);
  }

  onSubmitHandler = () => {
  	this.props.onSubmit(this.props.currentData);
  }

  render() {
    return (<div>
         	{this.props.config.map((item) => {
         		if(item.type === "text") {
         			return <TextField key={item.name} name={item.name} label={item.label} onChangeName={this.nameChangeHandler}/>
         		} else  {
         			return <DropdownField key={item.name} name={item.name} label={item.label} values={item.values} onChangeName={this.nameChangeHandler}/>
         		}
         	})}
         	<div>
         		<button onClick={this.onSubmitHandler}> SUBMIT </button>
         	</div>
        </div>)
  }

};

const mapStateToProps = (state) => {
	return {
		currentData: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeName: (dataObj) => {
			dispatch({ type: "SET_NAME", payload: {...dataObj}});
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Flexi);

