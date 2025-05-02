"use client";

import React, { useEffect, useState } from "react";
import TransactionList from "@/components/TransactionList";
import TransactionForm from "@/components/TransactionForm";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    try {
      const response = await fetch("/api/transactions");
      if (!response.ok) throw new Error("Failed to fetch transactions");

      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("🚨 Error fetching transactions:", error);
      setError("Failed to load transactions. Please try again.");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleTransactionAdded = async (newTransaction) => {
    try {
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) throw new Error("Failed to add transaction");

      fetchTransactions(); // Refresh transactions after adding
    } catch (error) {
      console.error("🚨 Error adding transaction:", error);
      setError("Failed to add transaction. Please try again.");
    }
  };

  const handleTransactionDeleted = async (transactionId) => {
    try {
      const response = await fetch(`/api/transactions/${transactionId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete transaction");

      setTransactions((prev) => prev.filter((transaction) => transaction._id !== transactionId));
    } catch (error) {
      console.error("🚨 Error deleting transaction:", error);
      setError("Failed to delete transaction. Please try again.");
    }
  };

  const handleTransactionEdit = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleTransactionUpdated = async (updatedTransaction) => {
    try {
      const response = await fetch(`/api/transactions/${updatedTransaction._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTransaction),
      });

      if (!response.ok) throw new Error("Failed to update transaction");

      fetchTransactions(); // Refresh transactions after updating
      setSelectedTransaction(null);
    } catch (error) {
      console.error("🚨 Error updating transaction:", error);
      setError("Failed to update transaction. Please try again.");
    }
  };

  return (
    <div>
      <h1>Transactions</h1>
      <p>Here you can view and manage your transactions.</p>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display errors */}

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