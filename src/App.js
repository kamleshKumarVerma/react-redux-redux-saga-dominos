import React from 'react';
import Main from './Main';
import { Provider } from "react-redux";
import store from "./store";

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items : []
		};
		this.loadData();
	}

	loadData = () => {
		setTimeout(()=> {
			this.setState({
				items: [
					{
						"name": "kamlesh",
						"label": "Person's Name",
						"type": "text",
					},
					{
						"name": "Tavarekere main road",
						"label": "Person's Address",
						"type": "text",
					},
					{
						"name": "Kerala",
			          	"label": "Person's state",
						"type": "dropdown",
			          	"values": [
			              	"Maharashtra",
			               	"Kerala",
			               	"Tamil Nadu"
						]
					}
		   		]
	  		});
	  		store.dispatch({type:"SET_INITIAL", payload: this.state});
		}, 5000);
	}

	render() {
		return (
			<Provider store={store}>
				<Main items={this.state.items}/>
			</Provider>
		)
	}
}