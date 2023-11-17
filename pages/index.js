import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'
import AccountCreation from './AccountCreationTab'
import UserDetails from './UserDetailsTab'



function index() {
  const [activeTab, setActiveTab] = useState('userDetails');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1 className={styles.h1}>DASHBOARD</h1>
      </header>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === 'userDetails' ? styles.active : ''}`}
          onClick={() => handleTabChange('userDetails')}
        >
          User Details
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'accountCreation' ? styles.active : ''}`}
          onClick={() => handleTabChange('accountCreation')}
        >
          Account Creation
        </div>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'userDetails' && <UserDetails/>}
        {activeTab === 'accountCreation' && <AccountCreation />}
      </div>
    </div>
  );
}

export default index
