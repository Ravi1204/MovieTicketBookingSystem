import { GET_SCREENINGS } from "../actions/Types.js";
import { GET_SCREENING } from "../actions/Types.js";
const initialState={
    screenings:[],
    screening:{}
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_SCREENINGS:
            return {...state,
                screenings:action.payload
            };
            case GET_SCREENING:
                return {...state,
                    screening:action.payload
                };
            default:
                return state;
    }
}

