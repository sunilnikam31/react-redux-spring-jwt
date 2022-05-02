import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,  Routes,Route, } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store.js'
import EmployeeRegister from './components/employeeRegister';
import EmployeeView from './components/employeeView';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="employeeRegister" element={<EmployeeRegister />} />
      <Route path="employeeView" element={<EmployeeView />} />
      
      
    </Routes>
  </BrowserRouter>,
    </Provider>
      
    </React.StrictMode>,
    document.getElementById('root')
  );
