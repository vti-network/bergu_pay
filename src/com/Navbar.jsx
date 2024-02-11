// Mynav.jsx
import '../css/Mynav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Mynav = () => {
    const refresh_token = localStorage.getItem('refresh_token');

    const Logout = () => {
      localStorage.removeItem('refresh_token');
    };

    return (
      <div className="header">
        <nav>
          <input type="checkbox" id="toggle" className="toggle-input " />
          <label htmlFor="toggle" className="toggle-btn">&#9776;</label>
          <div className="navbar">
            <Link to="/" className="a"><Homei/>
            <span style={{fontSize:'20px'}}> Home</span>
            </Link>
            <Link to="/history" className="a"><Historyi/>
            <span style={{fontSize:'20px'}}> History</span>
            </Link>
            <Link to="/" className="a"><Gridi/>
            <span style={{fontSize:'20px'}}> Task</span>
            </Link>
   
            {refresh_token ? (
              <Link to="/" className="a"><UserCircle/>
                <span style={{fontSize:'20px'}}> Dashboard</span>
              </Link>
            ) : (
              <Link to="/" className="a">Public</Link>
            )}
            {refresh_token ? (
              <Link to="/login" className="a" onClick={Logout}><Logouti/>
                <span style={{fontSize:'20px'}}> Logout</span>
              </Link>
            ) : (
              <Link to="/login" className="a" ><Logini/>
              <span style={{fontSize:'20px'}}> Login</span>
              </Link>
              )}
              {/* <Link to="/register" className="a"><Logini/>
              <span style={{fontSize:'20px'}}> Register</span>
              </Link> */}
          </div>
        </nav>
      </div>
    );
};

export default Mynav;

const Gridi = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>);
const Homei = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>);
const Logini = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg>);
const Logouti = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/></svg>);
const Historyi = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/></svg>);
const UserCircle = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>);

