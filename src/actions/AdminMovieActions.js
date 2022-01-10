import axios from "axios";
import {GET_ADMIN_ERRORS,GET_ADMIN_MOVIES, UPDATE_ADMIN_MOVIE,DELETE_ADMIN_MOVIE} from "./Types";
export const createMovies=(movie,history)=>async dispatch=>{


    const res=await axios.post("http://localhost:8080/movie/save",movie);
        history.push("/admindashboard");
        dispatch({
            type:GET_ADMIN_ERRORS,
            payload:res.data
        })
   
}
export const getMovies=()=>async dispatch=>{
    
        const res=await axios.get("http://localhost:8080/movie/movies");
        dispatch({
            type:GET_ADMIN_MOVIES,
            payload:res.data
        })
  
}
export const updateMovies=(id,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/movie/movies/${id}`);
    dispatch({
        type:UPDATE_ADMIN_MOVIE,
        payload:res.data
    })

}
export const deleteMovie =(id) => async dispatch => {

    if (
      window.confirm(
        "Are you sure? This will delete the Movie and all the data related to it"
      )
    ) {
      await axios.delete(`http://localhost:8080/movie/movies/${id}`);
     window.location.reload();
      dispatch({
        type: DELETE_ADMIN_MOVIE,
        payload: id
      });
    }
  };