"use client";

import React, { useEffect, useState } from "react";
import TransactionList from "@/components/TransactionList";
import TransactionForm from "@/components/TransactionForm";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state

  // Fetch transactions from API
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/transactions");

      if (!response.ok) throw new Error("Failed to fetch transactions");

      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("🚨 Error fetching transactions:", error);
      setError("Failed to load transactions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Add transaction
  const handleTransactionAdded = async (newTransaction) => {
    try {
      setLoading(true);
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransaction),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to add transaction");

      setTransactions((prev) => [...prev, data.transaction]); // Efficient state update
    } catch (error) {
      console.error("🚨 Error adding transaction:", error);
      setError("Failed to add transaction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Delete transaction
  const handleTransactionDeleted = async (transactionId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/transactions/${transactionId}`, { 
        method: "DELETE" 
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to delete transaction");

      setTransactions((prev) => prev.filter((transaction) => transaction._id !== transactionId));
    } catch (error) {
      console.error("🚨 Error deleting transaction:", error);
      setError("Failed to delete transaction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle transaction edit selection
  const handleTransactionEdit = (transaction) => {
    setSelectedTransaction(transaction);
  };

  // Update transaction
  const handleTransactionUpdated = async (updatedTransaction) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/transactions/${updatedTransaction._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTransaction),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to update transaction");

      setTransactions((prev) =>
        prev.map((transaction) =>
          transaction._id === updatedTransaction._id ? updatedTransaction : transaction
        )
      ); // Efficient state update

      setSelectedTransaction(null);
    } catch (error) {
      console.error("🚨 Error updating transaction:", error);
      setError("Failed to update transaction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Transactions</h1>
      <p>Here you can view and manage your transactions.</p>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display errors */}
      {loading && <p>Loading...</p>} {/* Display loading indicator */}

      {/* Transaction Form */}
      <TransactionForm
        transaction={selectedTransaction}
        onAddTransaction={handleTransactionAdded}
        onEditTransaction={handleTransactionUpdated}
      />

      {/* Transactions List */}
      <TransactionList
        transactions={transactions}
        onEditClick={handleTransactionEdit}
        onDeleteClick={handleTransactionDeleted}
      />
    </div>
  );
}