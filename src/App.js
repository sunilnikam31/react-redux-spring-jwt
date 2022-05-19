import React from 'react';
import './App.css';

import { Link } from "react-router-dom";
const App = () => {
 
  return (
    <div className="App">
       <table>
        <th>
        <Link to="/employeeRegister">Employee Register</Link>
        </th>

        <th>
        <Link to="/employeeView">Employee View</Link> 
        </th>
         <th>
                <Link to="/employeeLogin">Employee Login</Link>
                </th>
      </table>
     
    </div>
  );
}

export default App;
