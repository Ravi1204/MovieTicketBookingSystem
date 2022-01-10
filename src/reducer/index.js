import { combineReducers } from "redux";
import movieReducer from "./movieReducer.js";
import screeningReducer from "./screeningReducer.js";
import theatreReducer from "./theatreReducer.js";
import seatReducer from "./seatReducer.js";
import errorAdminReducer from "./errorAdminReducer";
import movieAdminReducer from "./movieAdminReducer";
import screeningAdminReducer from "./screeningAdminReducer.js";
import userAdminReducer from "./userAdminReducer.js";
import seatBookingReducer from "./seatBookingReducer.js";
export default combineReducers({
   movies:movieReducer,
   theatres:theatreReducer,
   screenings:screeningReducer,
   seats:seatReducer,
   adminErrors:errorAdminReducer,
   adminMovies:movieAdminReducer,
   adminScreenings:screeningAdminReducer,
   users:userAdminReducer,
   seatBookings:seatBookingReducer
});