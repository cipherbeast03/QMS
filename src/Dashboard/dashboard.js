// Dashboard.js
import React from 'react';
import './dashboard.css'; // Import your CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* Cards */}
      <div className="card-container">
        <div className="card">
          <h2>Card 1</h2>
          <p>This is the content of Card 1</p>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>This is the content of Card 2</p>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <p>This is the content of Card 3</p>
        </div>
        <div className="card">
          <h2>Card 4</h2>
          <p>This is the content of Card 4</p>
        </div>
        <div className="card">
          <h2>Card 5</h2>
          <p>This is the content of Card 5</p>
        </div>
        <div className="card">
          <h2>Card 6</h2>
          <p>This is the content of Card 6</p>
        </div>
      </div>

      {/* Basic Graph */}
      <div className="graph">
        <h2>Overall Report</h2>
        {/* Your graph component or representation here */}
        <div className="graph-placeholder">
          {/* Example graph placeholder */}
          <div className="graph-bar" style={{ height: '150px' }}></div>
          <div className="graph-bar" style={{ height: '100px' }}></div>
          <div className="graph-bar" style={{ height: '200px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
