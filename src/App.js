import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import './App.css';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/dashboard' element={<ProjectsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
