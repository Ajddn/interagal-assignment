import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // ✅ Import Navigate
import Login from './pages/Login';
import Signup from './pages/Signup';
import OnboardingDashboard from './pages/OnboardingDashboard';
import Layout from './components/Layout';
import MainDashboard from './pages/MainDashboard'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Redirect root to /login */}
          <Route path="/" element={<Navigate to="/login" replace />} /> {/* ✅ Redirect root to /login */}

          {/* Define your routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding-dashboard" element={<OnboardingDashboard />} />
          <Route path="/main-dashboard" element={<MainDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
