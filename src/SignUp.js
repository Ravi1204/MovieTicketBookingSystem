import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from './firebase';
import './App.css';
import { connect } from 'react-redux';
import {checkUserDetails} from './actions/LoginActions.js';
import axios from 'axios';
import validator from 'validator'
export const Signup = (props) => {
  const userId=JSON.parse(localStorage.getItem('user'));;
  if(userId==null|| userId==0)
  {

  }
  else{
    props.history.push("/dashboard")
  }

  const adminId=JSON.parse(localStorage.getItem('admin'));;
  if(adminId==null|| adminId==0)
  {

  }
  else{
    props.history.push("/admindashboard")
  }
  // const [profile, setprofile] = useState('');
  // const [url, seturl] = useState('');
  const [error, setError] = useState('');
   const [userName, setUserName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // const [mobile, setmobile] = useState('');
  const [admin, setadmin] = useState(false);
  const history = useHistory();
  const signUp = () => {
    setError("");
    var container = document.getElementById('container');
    container.classList.add("right-panel-active");
  };
  const signIn = () => {
    setError("");
    var container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  };

  const handleSubmit = async (e) => {
     e.preventDefault();

     if(validator.isEmail(email))
     {

     }
    else{
      setError("Email Not Valid");
      return;
    }
    if(password.length < 6)
    {
      setError("Password length must be greater than 6 letters");
        return;
    }
          const user={userName:email,password:password}
          const res=await axios.post("http://localhost:8080/user/save",user);
          if(res.data==true)
          {
            const res1=await axios.post("http://localhost:8080/user/check",user);
            localStorage.removeItem("admin");
            localStorage.setItem("user", JSON.stringify(res1.data));
            props.history.push("/dashboard");
          }
          else{
            setError("Email Already Exist")
          }

  }

   const handleLogin = async (e) => {
    e.preventDefault();
      const user={userName:email,password:password}
     // console.log(user);
     const adm={adminEmail:email,password:password}
      //this.props.checkUserDetails(user,props.history);
      if(!admin)
      {
        const res=await axios.post("http://localhost:8080/user/check",user);
        console.log(res.data);

      if(res.data==0)
          setError("Wrong Email or Password");
          else
          {
            localStorage.removeItem("admin");
          localStorage.setItem("user", JSON.stringify(res.data));
          props.history.push("/dashboard");

          }
      }
     else
     {
      const res1=await axios.post("http://localhost:8080/admin/check",adm);
      if(res1.data==0)
          setError("Wrong Email or Password");
          else
          {
            localStorage.removeItem("user");
          localStorage.setItem("admin", JSON.stringify(res1.data));
          props.history.push("/admindashboard");

          }
     //console.log(res1.data);
         }

  }
  return (
    <div className="position-fluid">
      <h2><center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</center></h2>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>

            <span>or use your email for registration</span>

            <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <p style={{color:"red"}}>{error}</p>

            {/* <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setmobile(e.target.value)} /> */}
            <button onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>

            <span>or use your account</span>
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <br/>
            <input type="checkbox" style={{ marginLeft: "-66%", width: "-webkit-fill-available" }} value={admin} onChange={(e) => setadmin(true)} /><span style={{ marginLeft: "-8%", marginTop: "-8%" }}> &nbsp;&nbsp;Pick If You Are Admin</span>
            <p style={{color:"red"}}>{error}</p>
            <button onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button class="ghost" id="signIn" onClick={signIn}>Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp" onClick={signUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
 export default Signup;
// export default connect(null,{checkUserDetails}) (Signup);