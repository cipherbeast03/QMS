import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import Audit from './Audit/audit';
import AuditReview from './ad-review/review';
import Dashboard from './Dashboard/dashboard';
import Monitorpage from './Audit-sheet/first';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/audit" element={<Audit />} />
        <Route exact path="/audit-review" element={<AuditReview />} />
        <Route exact path="/first" element={<AuditReview />} />
        <Route exact path="/first-page" element={<Monitorpage />} />
      </Routes>
      <Footer />
    </div>
  );
}
