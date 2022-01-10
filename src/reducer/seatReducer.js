import { GET_SEATS } from "../actions/Types.js";
const initialState={
    seats:[],
    seat:{}
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_SEATS:
            return {...state,
                seats:action.payload
            };
            
            default:
                return state;
    }
}