//register.jsx
import '../css/form.css';
import React, { useState } from 'react';
import { BrowserRouter as  Navigate, Link  } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes, Navigate, Link  } from 'react-router-dom';
import {DefaultURL,DefaultDbName}  from '../conf/Url.jsx';
import {Body_register} from '../conf/Body.jsx';

function Register () {
  const refresh_token = localStorage.getItem('refresh_token');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const MSG = document.getElementById('alert');
    const email_cek = email;
    try {
        // Panggil fungsi ValidateEmail
        const data = await cek_email(email_cek);

        if (data) {
          //MSG.textContent = "email sudah di gunakan"
          alert("email sudah di gunakan");
          return
        } else {
                // Lakukan pendaftaran jika email belum digunakan
                try {
                    const response = await fetch(DefaultURL + DefaultDbName, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ ...Body_register, email, password })
                    });
                    const data = await response.json();
                    if (response.ok) {
                        MSG.textContent = data.message;
                        alert('Berhasil');
                        window.location.href = '/login';
                    } else {
                        MSG.textContent = data.message;
                    }
                } catch (error) {
                    MSG.textContent = error.message;
                    alert('Terjadi kesalahan saat pendaftaran');
                    console.error('Terjadi kesalahan:', error);
                }
        }
    } catch (error) {
        MSG.textContent = error.message;
        alert('Terjadi kesalahan saat validasi email');
        console.error('Terjadi kesalahan:', error);
    }
};

async function cek_email(email_cek) {
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
              if (entry.email === email_cek) {
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

  if (refresh_token) {
    return <Navigate  to="/" />;
  }


  return (

      <div className="box">
        <span id='alert' style={{color:'red'}}></span><br />
        <h3 className="box_spin">Register</h3>
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
              Register
            </button>
            <div className="space">
              <Link to="/" className='in_space'>Home</Link>
              <Link to="/login" className='in_space'>Login</Link>
            </div>
          </form>
        </div>
      </div>      

  );
}

export default Register;