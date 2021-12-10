import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import './App.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ProjectPage from './pages/ProjectPage';
import Grid from './components/Grid';

import { DashboardContextProvider } from './state/projects-context'

function App() {

  return (
    <DashboardContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
            <Route path='dashboard' element={<DashboardPage />}>
              <Route index element={<Grid/>} />
              <Route path=":projectIndex" element={<ProjectPage />} />
            </Route>
        </Routes>
      </Router>
    </DashboardContextProvider>
  );
}

export default App;
