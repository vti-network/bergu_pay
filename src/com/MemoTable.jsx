import '../css/MemoTable.css';
import React, { useState, useEffect } from 'react';
import { DefaultURL, DefaultDbName } from '../conf/Url.jsx';

function MemoTable() {
  const [memoData, setMemoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DefaultURL + DefaultDbName, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMemoData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Semua History Transaksi</h2>
      <table className='memo-table'>
        <tbody>
          {Object.values(memoData).map((user) => (
            <tr key={user.ID}>
              <td>
                <div className='kiri'><AlertOctagon /></div>
                <div className='kanan'><ArrowDown /></div>
              </td>

              <td><Clock />
                <span style={{color:'black',marginRight:'60px',marginLeft:'5px'}}>waktu:</span>
                {user.history.transaksi.date_time}
              </td>

              <td><Tag />
                <span style={{color:'black',marginRight:'80px',marginLeft:'5px'}}>opt:</span>
              {user.history.transaksi.opt}
              </td>

              <td><DollarSign />
                <span style={{color:'black',marginRight:'58px',marginLeft:'5px'}}>jumlah:</span>
              {user.history.transaksi.jumlah}
              </td>

              <td><UserPlus />
                <span style={{color:'black',marginRight:'35px',marginLeft:'5px'}}>penerima: </span>
              {user.history.transaksi.penerima}
              </td>

              <td><UserMinus />
                <span style={{color:'black',marginRight:'40px',marginLeft:'5px'}}>pengirim: </span>
              {user.history.transaksi.pengirim}
              </td>

              <td><LinkED />
                <span style={{color:'black',marginRight:'10px',marginLeft:'5px'}}>txhash: </span>
              {user.history.transaksi.txhash}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MemoTable;
const ArrowDown = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v13M5 12l7 7 7-7"/></svg>);
const UserMinus = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>);
const UserPlus = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>);
const DollarSign = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>);
const Clock = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>);
const Tag = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>);
const AlertOctagon = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>);
const LinkED = ({size=24, color="#000000"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>);

