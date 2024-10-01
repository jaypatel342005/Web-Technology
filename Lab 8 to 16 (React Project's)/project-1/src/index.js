import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faculty from './pages/faculty';
import Layout from './Layout';
import Students from './pages/Student';
import Product from './pages/Product';
import Card from './pages/card';
import FacultyDetail from './pages/FacultyDetail';
import AddEditFaculty from './pages/CrudFaculty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="faculty" element={<Faculty />}></Route>
        <Route path="student" element={<Students />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="faculties/:id" element={<FacultyDetail />}></Route>
        <Route path="card" element={<Card />}></Route>
        <Route path="Addfaculty" element={<AddEditFaculty/>}></Route>
        <Route path="faculties/edit/:id" element={<AddEditFaculty/>}></Route>

      </Route>
    </Routes>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
