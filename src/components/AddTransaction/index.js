import React, { useState } from 'react';
import './index.css';

function AddTransaction({ addTransaction }) {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("credit");

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      type,
    };
    addTransaction(newTransaction);
    setAmount(0);
    setDescription("");
    setType("credit");
  };

  return (
    <div className="add-transaction">
      <h2>New Transaction</h2>
      <form onSubmit={onSubmit}>
      <div>
          <label htmlFor="type">Transaction Type</label>
          <select
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
            required
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>
        <button className="submit" type="submit">Save</button>
        <button className="cancel" type="button" onClick={() => { setType(""); setAmount(0); setDescription(""); setType("credit"); }}>CANCEL</button>
      </form>
    </div>
  );
}

export default AddTransaction;
