import React from 'react';
import { useEffect } from 'react';
import {useDispatch,useSelector}from 'react-redux';
import { getUserData } from '../redux/actions';
import { Link } from "react-router-dom";

const EmployeeView = () => {


    const dispatch = useDispatch();
const token=localStorage.getItem('Session');
    const data = useSelector((state)=>{
      return state.user;
    })
    
    useEffect(()=>{

     dispatch(getUserData(token)) ;
    },[dispatch])

    return (
        <div > 
      <h1>Employee Details</h1>
      <div>
          {  data.data.map((item)=>{
            return(
              <div className="list">
                <table>
                  <th>
                    ID
                  </th>
                  <th>
                    Name
                  </th>
                  <th>
                    City
                  </th>
                  <tr>
                    <td>{item.id}</td>
                   <td> {item.name}</td>
                   <td>{item.city}</td>

                    <th><Link to= {{ pathname: '/employeeEdit'}} state={{ id: item.id }}>Employee Edit</Link></th>
                  </tr>
                </table>
              </div>
            )
          })}
      </div>
    </div>);
}
export default EmployeeView;