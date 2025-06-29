// src/pages/InvoiceGenerator.jsx
import React from 'react';
import InvoiceForm from '../components/InvoiceForm';
import InvoicePreview from '../components/InvoicePreview';
import '../styles/InvoiceGenerator.css';

function InvoiceGenerator() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">AryanTechWorld</div>
        <nav>
          <a href="#">My Invoices</a>
          <a href="#">Settings</a>
          <span className="profile-icon">👤</span>
        </nav>
      </header>
      <main className="invoice-main">
        <InvoiceForm />
        <InvoicePreview />
      </main>
      <footer className="app-footer">Powered by AryanTechWorld</footer>
    </div>
  );
}

export default InvoiceGenerator;
