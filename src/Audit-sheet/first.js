// Dashboard.js
import React from 'react';
import './page.css'; // Import your CSS file

const Monitorpage = () => {
  return (
    <div class="container">
      <div class="left-div"></div>
      <div class="right-div">
      <div className="auditcard-container">
        <div className="card">
          <h2>section 1</h2>
          <p>This is the content of section 1</p>
        </div>
        <div className="card">
          <h2>section 2</h2>
          <p>This is the content of section 2</p>
        </div>
        <div className="card">
          <h2>section 3</h2>
          <p>This is the content of section 3</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Monitorpage;
