import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IpoList from './ipoList';
import IpoDetails from './ipoDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IpoList />} />
          <Route path="/ipo-details/:id" element={<IpoDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
