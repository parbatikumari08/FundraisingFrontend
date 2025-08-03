import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [internData, setInternData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fundraisingbackend.onrender.com/api/intern');

        setInternData(res.data);
      } catch (error) {
        console.error('Error fetching intern data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container dashboard">
      <h1>Dashboard</h1>
      {internData ? (
        <>
          <div className="card">
            <h2>{internData.name}</h2>
            <p>Referral Code: <strong>{internData.referralCode}</strong></p>
            <h3 style={{ color: '#27ae60' }}>Total Donations: ₹{internData.donationsRaised}</h3>
          </div>
          <div className="card">
            <h3>Rewards / Unlockables</h3>
            <ul>
              <li>🎉 Bronze Badge - ₹5,000 Raised</li>
              <li>🏅 Silver Badge - ₹10,000 Raised</li>
              <li>🏆 Gold Badge - ₹20,000 Raised</li>
            </ul>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
