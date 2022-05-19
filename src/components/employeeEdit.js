import React from 'react';
import { useState,useEffect } from 'react';
import {useDispatch,useSelector}from 'react-redux';
import { editUserData } from '../redux/actions';
import { useNavigate,useLocation  } from "react-router-dom";


const EmployeeEdit = () => {

     const dispatch = useDispatch();
        let location = useLocation();
  const data = useSelector((state)=>{
          return state.user.data;
        })
console.log(data);
console.log(data.name);
  const [id, setId] = useState(data.id);
  const [name, setName] = useState(data.name);
  const [city, setCity] = useState(data.city);


        console.log(id,name,city);

        useEffect(()=>{
         dispatch(editUserData(location.state.id)) ;
        },[dispatch])

 
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
      evt.preventDefault();

  }
  
  
  return (
    <div className="App">
      <h1>Employee Edit</h1>

      <form onSubmit={handleSubmit}>
       <label>
                Id:
               <input
                 type="text"
                 value={id}
                 onChange={e => setId(e.target.value)}
               />
             </label>
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

export default EmployeeEdit;
