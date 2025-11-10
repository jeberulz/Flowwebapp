'use client';

import { useState } from 'react';
import Landing from './Landing';
import Dashboard from './Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard'>('landing');

  if (currentPage === 'dashboard') {
    return <Dashboard onNavigateToLanding={() => setCurrentPage('landing')} />;
  }

  return <Landing onNavigateToDashboard={() => setCurrentPage('dashboard')} />;
}