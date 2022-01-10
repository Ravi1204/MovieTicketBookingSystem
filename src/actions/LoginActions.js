import axios from "axios";
import { useRef } from "react";
export const checkUserDetails=(user,history)=>async dispatch=>{

    try {
        const res=await axios.post("http://localhost:8080/user/check",user);
        if(res.data)
        history.push("/dashboard");
    } catch (error) {
       
    }
}
