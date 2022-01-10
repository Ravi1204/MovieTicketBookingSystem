import { GET_ADMIN_ERRORS ,GET_ADMIN_SCREENINGS, UPDATE_ADMIN_SCREENING,DELETE_ADMIN_SCREENING} from "../actions/Types";
const initialState={
    screenings:[],
    screening:{}
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_ADMIN_SCREENINGS:
            return {...state,
                screenings:action.payload
            };
            case UPDATE_ADMIN_SCREENING:
                return {
                    ...state,
                screening:action.payload
                };
                case DELETE_ADMIN_SCREENING:
                    return {
                      ...state,
                      screenings: state.screenings.filter(
                        screening => screening.id !== action.payload
                      )
                    };
            default:
                return state;
    }
}