import React from 'react';
import { useState } from 'react';
import {useDispatch}from 'react-redux';
import { setUserData } from '../redux/actions';
import { useNavigate  } from "react-router-dom";


const EmployeeRegister = () => {
    
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
 
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
      evt.preventDefault();
      dispatch(setUserData(name,city)) ;
      alert('Employee Saved Successfully')
            navigate('/employeeView');
  }
  
  
  return (
    <div className="App">
      <h1>Employee Register</h1>
      <form onSubmit={handleSubmit}>
       
      <label>
         Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
         City:
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default EmployeeRegister;
