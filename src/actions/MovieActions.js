import axios from "axios";
import { GET_MOVIES } from "./Types.js";
export const getMovies=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/movie/movies");
    dispatch({
        type:GET_MOVIES,
        payload:res.data
    })
}