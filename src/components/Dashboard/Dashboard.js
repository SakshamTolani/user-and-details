// Dashboard.js
import React, { useState } from 'react';
import UserDetails from '../UserDetailsTab/UserDetailsTab';
import AccountCreation from '../AccountCreationTab/AccountCreationTab';

import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Dashboard</h1>
      </header>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'userDetails' ? 'active' : ''}`}
          onClick={() => handleTabChange('userDetails')}
        >
          User Details
        </div>
        <div
          className={`tab ${activeTab === 'accountCreation' ? 'active' : ''}`}
          onClick={() => handleTabChange('accountCreation')}
        >
          Account Creation
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'userDetails' && <UserDetails />}
        {activeTab === 'accountCreation' && <AccountCreation />}
      </div>
    </div>
  );
};

export default Dashboard;
