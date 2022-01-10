import axios from "axios";
import { GET_SCREENINGS,GET_SCREENING } from "./Types.js";

export const getScreeningsByMovieId=(movieId)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/screening/screeningsbyid/${movieId}`);
    console.log(res.data);
    dispatch({
        type:GET_SCREENINGS,
        payload:res.data
    })
}

    export const getScreeningById=(id)=>async dispatch=>{
        const res=await axios.get(`http://localhost:8080/screening/${id}`);
        //console.log(res.data);
        dispatch({
            type:GET_SCREENING,
            payload:res.data
        })
    
    

}
