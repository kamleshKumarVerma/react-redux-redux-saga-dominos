const initialState = {
	items: []
}

export default function Reducer (state=initialState, action) {
	var newState = {...state};
	switch(action.type) {

		case "SET_INITIAL":
			newState = action.payload;
			return newState;

		case "SET_NAME_ASYNC":
			newState.items = newState.items.map((item)=> {
				var obj = {...item};
				if(obj.label === action.payload.label) {
					obj.name = action.payload.name;
				}
				return obj;
			});
			return newState;
		default: 
			return newState;
	}
}