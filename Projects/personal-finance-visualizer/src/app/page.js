"use client";

import React, { useState, useEffect, useCallback } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import ExpensesChart from "../components/ExpensesChart";

export default function HomePage() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [chartData, setChartData] = useState([]);

  // Fetch transactions on mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactions");
        if (!response.ok) throw new Error("Failed to fetch transactions");

        const data = await response.json();
        setTransactions(data);
        updateChartData(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  // Update chart data based on transactions
  const updateChartData = useCallback((transactions) => {
    const groupedData = transactions.reduce((acc, transaction) => {
      const month = new Date(transaction.date).toLocaleString("default", {
        month: "short",
      });
      acc[month] = (acc[month] || 0) + transaction.amount;
      return acc;
    }, {});

    setChartData(
      Object.entries(groupedData).map(([name, expenses]) => ({
        name,
        expenses,
      }))
    );
  }, []);

  // Function to add a new transaction
  const handleAddTransaction = async (transaction) => {
    try {
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transaction),
      });

      const data = await response.json();

      if (!response.ok)
        throw new Error(`Failed to add transaction: ${data.message}`);

      setTransactions([...transactions, data.transaction]);
      updateChartData([...transactions, data.transaction]);
    } catch (error) {
      console.error("Error during POST:", error);
    }
  };

  // Function to edit an existing transaction
  const handleEditTransaction = async (updatedTransaction) => {
    try {
      console.log("Updating Transaction:", updatedTransaction); // Debugging

      const response = await fetch("/api/transactions", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: updatedTransaction._id, // Ensure ID is included
          amount: updatedTransaction.amount,
          date: updatedTransaction.date,
          description: updatedTransaction.description,
          category: updatedTransaction.category,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (!response.ok) {
        throw new Error(`Failed to update transaction: ${data.message}`);
      }

      const updatedTransactions = transactions.map((transaction) =>
        transaction._id === updatedTransaction._id
          ? updatedTransaction
          : transaction
      );

      setTransactions(updatedTransactions);
      updateChartData(updatedTransactions);
      setEditingTransaction(null);
    } catch (error) {
      console.error("Error during PUT:", error);
    }
  };

  // Function to delete a transaction
  const handleDeleteTransaction = async (id) => {
    try {
      console.log("Deleting Transaction ID:", id); // Debugging

      const response = await fetch("/api/transactions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (!response.ok)
        throw new Error(`Failed to delete transaction: ${data.message}`);

      setTransactions(
        transactions.filter((transaction) => transaction._id !== id)
      );
      updateChartData(
        transactions.filter((transaction) => transaction._id !== id)
      );
    } catch (error) {
      console.error("Error during DELETE:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Personal Finance Tracker</h1>
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
