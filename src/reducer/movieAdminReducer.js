import { GET_ADMIN_ERRORS ,GET_ADMIN_MOVIES, UPDATE_ADMIN_MOVIE,DELETE_ADMIN_MOVIE} from "../actions/Types";
const initialState={
    movies:[],
    movie:{}
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_ADMIN_MOVIES:
            return {...state,
                movies:action.payload
            };
            case UPDATE_ADMIN_MOVIE:
                return {
                    ...state,
                movie:action.payload
                };
                case DELETE_ADMIN_MOVIE:
                    return {
                      ...state,
                      movies: state.movies.filter(
                        movie => movie.id !== action.payload
                      )
                    };
            default:
                return state;
    }
}