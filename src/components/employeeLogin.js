import React from 'react';
import { useState } from 'react';
import {useDispatch}from 'react-redux';
import { checkLogin } from '../redux/actions';
import { useNavigate  } from "react-router-dom";


const EmployeeLogin = () => {
    
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
      evt.preventDefault();
      dispatch(checkLogin(userName,password,(response:any)=>{
        if(response.token){
        console.log('login',response.token);
            localStorage.setItem("Session",response.token);
        }
      })) ;
      alert('Employee Login Successfully')
            navigate('/employeeView');
  }
  
  
  return (
    <div className="App">
      <h1>Employee Login</h1>
      <form onSubmit={handleSubmit}>
       
      <label>
         User Name:
        <input
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      </label>
      <label>
         Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default EmployeeLogin;
