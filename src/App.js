// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceGenerator from './pages/InvoiceGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvoiceGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
