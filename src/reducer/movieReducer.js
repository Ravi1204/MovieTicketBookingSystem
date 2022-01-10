import { GET_MOVIES } from "../actions/Types.js";
const initialState={
    movies:[],
    movie:{}
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_MOVIES:
            return {...state,
                movies:action.payload
            };
            
            default:
                return state;
    }
}