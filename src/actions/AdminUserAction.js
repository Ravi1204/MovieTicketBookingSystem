import axios from "axios";
import {GET_ADMIN_USERS,DELETE_ADMIN_USER} from "./Types";

export const getUsers=()=>async dispatch=>{
    
        const res=await axios.get("http://localhost:8080/user/users");
        dispatch({
            type:GET_ADMIN_USERS,
            payload:res.data
        })
  
}

export const deleteUsers =(id) => async dispatch => {

    if (
      window.confirm(
        "Are you sure? This will delete the User and all the data related to it"
      )
    ) {
      await axios.delete(`http://localhost:8080/user/users/${id}`);
     window.location.reload();
      dispatch({
        type: DELETE_ADMIN_USER,
        payload: id
      });
    }
  };