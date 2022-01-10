import axios from "axios";
import { GET_SEAT_BOOKINGS } from "./Types.js";
export const getSeatsBookingByUserId=(userId)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/seatbooking/seatbookingbyid/${userId}`);
    //console.log(res.data);
    dispatch({
        type:GET_SEAT_BOOKINGS,
        payload:res.data
    })
}