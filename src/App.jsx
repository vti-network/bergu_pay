//App.jsx
//import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import defaultURL  from './config/url.jsx';
import MemoTable from './com/MemoTable';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './com/Navbar.jsx';
import Register from './auth/register.jsx';
import Login from './auth/login.jsx';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="container_black">
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}
export default App;

const Home = () =>{
  const refresh_token = localStorage.getItem('refresh_token');

  // if (!refresh_token) {
  //  alert('untuk menggunakan app ini login terlebih dahulu')
  //  return <Navigate  to="/login" />;
  // } 
  // else {
  //   //rtkn(refresh_token);
  // }
  return (
    <div className="container_black">
    <div className="box">
      <Navbar />
        <div className="box_spin">
          <h3>Bergu Coin</h3>
        </div>
      <span className="box_spin">P2P Payer Solusion</span>
    </div>
    </div>
  )
}
const History = () =>{
  const refresh_token = localStorage.getItem('refresh_token');

  // if (!refresh_token) {
  //  alert('untuk menggunakan app ini login terlebih dahulu')
  //  return <Navigate  to="/login" />;
  // } 
  // else {
  //   //rtkn(refresh_token);
  // }
  return (
    <div className="container_black">
    <div className="box">
      <Navbar />
        <div className="box_spin">
          <h3>Bergu Coin</h3>
        </div>
        <div className="box_spin">
          <MemoTable/>
        </div>
    </div>
    </div>
  )
}

//const Hash_tag = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>);
