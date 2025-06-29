import React from 'react';
import '../styles/InvoicePreview.css';

function InvoicePreview() {
  return (
    <div className="invoice-preview">
      <div className="company-info">
        <img src="/logo192.png" alt="Logo" width="50" />
        <h3>AryanTechWorld</h3>
      </div>
      <div className="invoice-header">
        <div>
          <strong>Client Info</strong>
          <p>AryanTechWorld<br/>122 Hot Catlli, Suite 400<br/>Teph City, TC 19,350<br/>info@aryantechworld.com<br/>+1 (232) 867 9900</p>
        </div>
        <div>
          <p><strong>Invoice Date:</strong> April 23, 2024</p>
          <p><strong>Due Date:</strong> April 28, 2024</p>
        </div>
      </div>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Service</td>
            <td>1</td>
            <td>$0.00</td>
            <td>$0.00</td>
          </tr>
        </tbody>
      </table>
      <div className="totals">
        <p><strong>Subtotal:</strong> $0.00</p>
        <p><strong>Tax:</strong> —</p>
        <p><strong>Total:</strong> $0.00</p>
      </div>
      <div className="notes">
        <p><strong>Notes:</strong> Thank you for your business!</p>
      </div>
    </div>
  );
}

export default InvoicePreview;
