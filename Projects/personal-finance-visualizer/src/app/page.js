"use client";

import React, { useState, useEffect, useCallback } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import ExpensesChart from "../components/ExpensesChart";

export default function HomePage() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch transactions on mount
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
      updateChartData(data);
    } catch (error) {
      console.error("🚨 Error fetching transactions:", error);
      setError("Failed to load transactions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Update chart data based on transactions
  const updateChartData = useCallback((transactions) => {
    const groupedData = transactions.reduce((acc, transaction) => {
      const month = new Date(transaction.date).toLocaleString("default", { month: "short" });
      acc[month] = (acc[month] || 0) + transaction.amount;
      return acc;
    }, {});

    setChartData(
      Object.entries(groupedData).map(([name, expenses]) => ({ name, expenses }))
    );
  }, []);

  // Add transaction
  const handleAddTransaction = async (transaction) => {
    try {
      setLoading(true);
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transaction),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(`Failed to add transaction: ${data.message}`);

      setTransactions((prev) => [...prev, data.transaction]); // Efficient state update
      updateChartData([...transactions, data.transaction]);
    } catch (error) {
      console.error("🚨 Error adding transaction:", error);
      setError("Failed to add transaction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Edit transaction
  const handleEditTransaction = async (updatedTransaction) => {
    try {
      setLoading(true);
      console.log("Updating Transaction:", updatedTransaction); // Debugging

      const response = await fetch(`/api/transactions/${updatedTransaction._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTransaction),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(`Failed to update transaction: ${data.message}`);

      setTransactions((prev) =>
        prev.map((transaction) =>
          transaction._id === updatedTransaction._id ? updatedTransaction : transaction
        )
      );
      updateChartData(transactions);
      setEditingTransaction(null);
    } catch (error) {
      console.error("🚨 Error updating transaction:", error);
      setError("Failed to update transaction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Delete transaction
  const handleDeleteTransaction = async (id) => {
    try {
      setLoading(true);
      console.log("Deleting Transaction ID:", id); // Debugging

      const response = await fetch(`/api/transactions/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (!response.ok) throw new Error(`Failed to delete transaction: ${data.message}`);

      setTransactions((prev) => prev.filter((transaction) => transaction._id !== id));
      updateChartData(transactions.filter((transaction) => transaction._id !== id));
    } catch (error) {
      console.error("🚨 Error deleting transaction:", error);
      setError("Failed to delete transaction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Personal Finance Tracker</h1>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display errors */}
      {loading && <p>Loading...</p>} {/* Display loading state */}

      <TransactionForm
        transaction={editingTransaction}
        onAddTransaction={handleAddTransaction}
        onEditTransaction={handleEditTransaction}
      />
      <TransactionList
        transactions={transactions}
        onEditClick={setEditingTransaction}
        onDeleteClick={handleDeleteTransaction}
      />
      <ExpensesChart data={chartData} />
    </div>
  );
}