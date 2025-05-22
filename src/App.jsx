import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanSelection from './pages/PlanSelection';
import Payment from './pages/Payment';
import Customization from './pages/Customization';
import DomainHostingPage from './pages/DomainHosting';
import ThankYouCustom from './pages/ThankYouCustom';
import PaymentSuccess from './pages/PaymentSuccess';
import PlanRequests from './pages/PlanRequests';
import DomainHostingTable from './pages/DomainHostingTable';
import PaymentRequests from './pages/PaymentRequests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/plans" element={<PlanSelection />} />
        <Route path="/Customization" element={<Customization />} />
        <Route path="/thankyou-custom" element={<ThankYouCustom />} />
        <Route path="/domain-hosting" element={<DomainHostingPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/plan-requests" element={<PlanRequests />} />
        <Route path="/plan-requests-domain" element={<DomainHostingTable />} />
        <Route path="/payment-requests" element={<PaymentRequests />} />
      </Routes>
    </Router>
  );
}

export default App;
