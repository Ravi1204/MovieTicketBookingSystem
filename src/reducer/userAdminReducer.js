import { GET_ADMIN_USERS,DELETE_ADMIN_USER} from "../actions/Types";
const initialState={
    users:[],
    user:{}
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_ADMIN_USERS:
            return {...state,
                users:action.payload
            };

                case DELETE_ADMIN_USER:
                    return {
                      ...state,
                      users: state.users.filter(
                        user => user.id !== action.payload
                      )
                    };
            default:
                return state;
    }
}