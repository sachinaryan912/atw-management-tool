import React from 'react';
import '../styles/InvoiceForm.css';

function InvoiceForm() {
  return (
    <div className="invoice-form">
      <h2>Invoice Details</h2>
      <div className="form-group">
        <label>Company Name</label>
        <input type="text" value="AryanTechWorld" disabled />
      </div>
      <div className="form-group">
        <label>Client Name</label>
        <input type="text" placeholder="Client Email" />
      </div>
      <div className="form-group">
        <label>Client Address</label>
        <input type="text" placeholder="Invoice Address" />
      </div>
      <div className="form-group-row">
        <div className="form-group">
          <label>Invoice Number</label>
          <input type="text" value="1001" />
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Currency</label>
          <select>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>

      <div className="items-header">
        <span>Description</span>
        <span>Qty</span>
        <span>Rate</span>
        <span>Amount</span>
      </div>
      <div className="item-row">
        <input placeholder="Service" />
        <input type="number" value="1" />
        <input type="number" value="0.00" />
        <input type="text" value="$0.00" disabled />
      </div>

      <div className="buttons">
        <button className="preview">Preview</button>
        <button className="draft">Save as Draft</button>
        <button className="pdf">Generate PDF</button>
      </div>
    </div>
  );
}

export default InvoiceForm;
