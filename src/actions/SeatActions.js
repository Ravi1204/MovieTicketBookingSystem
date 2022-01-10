import axios from "axios";
import { GET_SEATS } from "./Types.js";
export const getSeatsByScreeningId=(screeningId)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/seat/seatsbyscreeningid/${screeningId}`);
    //console.log(res.data);
    dispatch({
        type:GET_SEATS,
        payload:res.data
    })
}