import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Faculty from './faculty';
import Layout from './Layout';
import Students from './Student';
import Product from './Product';
import Card from './card';
import FacultyDetail from './FacultyDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path="faculty" element={<Faculty/>}></Route>
        <Route path="student" element={<Students/>}></Route>
        <Route path="product" element={<Product/>}></Route>
        <Route path="faculties/:id" element={<FacultyDetail/>}></Route>
        <Route path="card" element={<Card/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
     
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
