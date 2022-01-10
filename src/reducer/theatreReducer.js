import { GET_THEATRES } from "../actions/Types.js";
const initialState={
    theatres:[],
    theatre:{}
  
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_THEATRES:
            return {...state,
                theatres:action.payload
            };
            
            default:
                return state;
    }
}