import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,  Routes,Route, } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store.js'
import EmployeeRegister from './components/employeeRegister';
import EmployeeView from './components/employeeView';
import EmployeeEdit from './components/employeeEdit';
import EmployeeLogin from './components/employeeLogin';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="employeeRegister" element={<EmployeeRegister />} />
      <Route path="employeeEdit" element={<EmployeeEdit />} />
      <Route path="employeeView" element={<EmployeeView />} />
       <Route path="employeeLogin" element={<EmployeeLogin />} />
    </Routes>
  </BrowserRouter>,
    </Provider>
      
    </React.StrictMode>,
    document.getElementById('root')
  );
