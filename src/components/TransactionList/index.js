import React from 'react';
import './index.css';

function TransactionList({ transactions }) {

  return (
    <div className="transaction-list">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Office Transactions</th>
            <th>Title</th>
            <th>Amount</th>
            <th>+Add Transaction</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{new Date(transaction.id).toLocaleDateString()}</td>
              <td>{transaction.text}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
