import React from 'react';

const TransactionList = ({ transactions, onEditClick, onDeleteClick }) => (
  <div>
    <h2>Transaction History</h2>
    <table>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.amount}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>
                <button onClick={() => onEditClick(transaction)}>Edit</button>
                <button onClick={() => onDeleteClick(transaction._id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>No transactions found.</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default TransactionList;