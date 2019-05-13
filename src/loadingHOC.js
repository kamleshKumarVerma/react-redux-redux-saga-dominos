import React from "react";

const isEmpty = (data) => {
	return data === null || 
			data === undefined ||
				(data.hasOwnProperty("length") && data.length === 0) ||
					(data.constructor === Object && Object.keys(data).length ===0);

}

const LoadingHOC = (loadingDataName) => (WrappedComponent) => {

	return class HOC extends React.Component {

		componentDidMount() {
			this.startTimer = Date.now();
		}

		componentWillUpdate(nextProps, nextState) {
		  if(!isEmpty(nextProps[loadingDataName])) {
		  	this.endTimer = Date.now();
		  }
		}

		render() {
			const myProps = {
				loadingTime : ( (this.endTimer - this.startTimer) / 1000 ).toFixed(2)
			}

			if(isEmpty(this.props[loadingDataName])) {
				return <h1> Loading... </h1>
			} else {
				return (
					<WrappedComponent {...this.props} {...myProps}/>
				)
			}
		}
	}

}

export default LoadingHOC;