import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Categories from './pages/Categories';
import SponsorshipForm from './pages/SponsorshipForm';
import BrandMatch from './pages/BrandMatch';
import MyRequests from './pages/MyRequests';

// Protected Route Component (Mock)
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (!isAuthenticated) return <Navigate to="/login" />;
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Landing />} />
      <Route path="/sponsorship/categories" element={
        <ProtectedRoute>
          <Categories />
        </ProtectedRoute>
      } />
      <Route path="/sponsorship/form" element={
        <ProtectedRoute>
          <SponsorshipForm />
        </ProtectedRoute>
      } />
      <Route path="/sponsorship/match" element={
        <ProtectedRoute>
          <BrandMatch />
        </ProtectedRoute>
      } />
      <Route path="/requests" element={
        <ProtectedRoute>
          <MyRequests />
        </ProtectedRoute>
      } />
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default App;
