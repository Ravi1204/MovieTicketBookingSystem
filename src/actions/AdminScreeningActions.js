import axios from "axios";
import {GET_ADMIN_ERRORS,GET_ADMIN_SCREENINGS,UPDATE_ADMIN_SCREENING,DELETE_ADMIN_SCREENING} from "./Types";
export const createScreenings=(screening,history)=>async dispatch=>{


    const res=await axios.post("http://localhost:8080/screening/save",screening);
        history.push("/adminscreeninglist");
        dispatch({
            type:GET_ADMIN_ERRORS,
            payload:res.data
        })
   
}
export const getScreenings=()=>async dispatch=>{
    
        const res=await axios.get(`http://localhost:8080/screening/screenings`);
        dispatch({
            type:GET_ADMIN_SCREENINGS,
            payload:res.data
        })
  
}
export const updateScreenings=(id,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/screening/${id}`);
    dispatch({
        type:UPDATE_ADMIN_SCREENING,
        payload:res.data
    })

}
export const deleteScreening =(id) => async dispatch => {

    if (
      window.confirm(
        "Are you sure? This will delete the Screening and all the data related to it"
      )
    ) {
      await axios.delete(`http://localhost:8080/screening/screenings/${id}`);
     window.location.reload();
      dispatch({
        type: DELETE_ADMIN_SCREENING,
        payload: id
      });
    }
  };