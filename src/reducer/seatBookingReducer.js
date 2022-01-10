import { GET_SEAT_BOOKINGS } from "../actions/Types.js";
const initialState={
    seatBookings:[],
    seatBooking:{}
  
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_SEAT_BOOKINGS:
            return {...state,
                seatBookings:action.payload
            };
            
            default:
                return state;
    }
}