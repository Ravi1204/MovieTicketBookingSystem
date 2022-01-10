import axios from "axios";
import { GET_THEATRES } from "./Types.js";
export const getTheatres=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/theatre/theatres");
    
    dispatch({
        type:GET_THEATRES,
        payload:res.data
    })
}