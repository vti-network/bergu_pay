//login.jsx
import '../css/form.css';
import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes, Navigate, Link  } from 'react-router-dom';
import { BrowserRouter as Navigate, Link  } from 'react-router-dom';
import {DefaultURL,DefaultDbName}  from '../conf/Url.jsx';
//import {Body_register} from '../conf/Body.jsx';

function Login () {
    const refresh_token = localStorage.getItem('refresh_token');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const MSG = document.getElementById('alert');
      const email_cek = email;
      const pass_cek = password;
      try {
          const data = await cek_email(email_cek,pass_cek);
          if (data) {
            alert("berhasil login");
            MSG.textContent = email_cek;
            set_token(email_cek);
            window.location.href = '/';
            return
          } else {
            alert("email atau password  salah");
          }

      } catch (error) {
          MSG.textContent = error.message;
          alert('Terjadi kesalahan saat validasi');
          console.error('Terjadi kesalahan:', error);
      }

  };
  
  async function cek_email(email_cek,pass_cek) {
    try {
        // Fetch all data from the specified URL
        const response = await fetch(DefaultURL + DefaultDbName);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        // Check if any entry matches the provided email or password
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const entry = data[key];
                
                if (entry.email === email_cek && entry.password === pass_cek) {
                    return true; // Email or password already in use
                }
            }
        }
        return false; // Email and password are not already in use
    } catch (error) {
        console.error('Error checking if email or password is already in use:', error.message);
        throw error;
    }
  }

  async function set_token(email_cek){
    try {
      // Fetching data from the URL
      const response = await fetch(DefaultURL + DefaultDbName);
      const data = await response.json();

      // Searching for the token corresponding to the email address
      let token = null;
      for (const key in data) {
          if (data[key].email === email_cek) {
              token = data[key].token;
              localStorage.setItem('refresh_token', token);
              break;
          }
      }

      return token ? `Token for email '${email_cek}': ${token}` : `No token found for email '${email_cek}'`;
    } catch (error) {
      
        console.error("Error fetching data:", error);
        return "Error fetching data. Please try again later.";
    }
  }
  
    if (refresh_token) {
      return <Navigate  to="/" />;
    }
  
  
    return (
        <div className="box">
          <span id='alert' style={{color:'red'}}></span><br />
          <h3 className="box_spin">Login</h3>
          <div className="box_box">
            <span>email</span><br />
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  className='from_login_input'
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='some@email'
                />
              </label>
              <br /><br />
              <span>password</span>
              <br />
              <label>
                <input
                  className='from_login_input'
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br /><br />
  
              <button type="submit" className='btn_login'>
                Login
              </button>
              <div className="space">
                <Link to="/" className='in_space'>Home</Link>
                <Link to="/register" className='in_space'>Register</Link>
              </div>
            </form>
          </div>
        </div>      
    );
}
  
  export default Login;