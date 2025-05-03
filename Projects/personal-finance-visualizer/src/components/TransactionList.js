import React from "react";

const TransactionList = ({ transactions, onEditClick, onDeleteClick }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Transaction History</h2>

      {transactions.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "16px", color: "#888" }}>
          No transactions found.
        </p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Amount</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Date</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Description</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Category</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px", fontWeight: "bold", textAlign: "left" }}>
                  ${transaction.amount ? transaction.amount.toFixed(2) : "N/A"}
                </td>
                <td style={{ padding: "10px", fontSize: "14px", color: "#555", textAlign: "left" }}>
                  {transaction.date ? new Date(transaction.date).toLocaleDateString() : "N/A"}
                </td>
                <td style={{ padding: "10px", fontSize: "14px", textAlign: "left" }}>
                  {transaction.description || "No description"}
                </td>
                <td style={{ padding: "10px", fontSize: "14px", fontStyle: "italic", textAlign: "left" }}>
                  {transaction.category || "Uncategorized"}
                </td>
                <td style={{ padding: "10px", display: "flex", gap: "10px", textAlign: "left" }}>
                  <button 
                    style={{ 
                      padding: "6px 12px", 
                      cursor: "pointer", 
                      border: "1px solid #007bff", 
                      color: "#007bff", 
                      backgroundColor: "transparent" 
                    }} 
                    onClick={() => onEditClick(transaction)}
                  >
                    Edit
                  </button>
                  <button 
                    style={{ 
                      padding: "6px 12px", 
                      cursor: "pointer", 
                      backgroundColor: "#ff4d4d", 
                      color: "#fff", 
                      border: "none" 
                    }} 
                    onClick={() => onDeleteClick(transaction._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionList;