import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import './App.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='dashboard' element={<DashboardPage />}> 
          <Route path=":projectIndex" element={<ProjectPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
