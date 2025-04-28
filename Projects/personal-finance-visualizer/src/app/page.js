"use client";

import React, { useState, useEffect } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import MonthlyExpensesChart from "../components/MonthlyExpensesChart";

export default function HomePage() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch("/api/transactions");
      const data = await response.json();
      setTransactions(data);
      updateChartData(data);
    };

    fetchTransactions();
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

      if (response.ok) {
        const updatedTransactions = [...transactions, data.transaction];
        setTransactions(updatedTransactions); // Update UI
        updateChartData(updatedTransactions); // Update chart data
      } else {
        console.error("Failed to add transaction:", data.message);
      }
    } catch (error) {
      console.error("Error during POST:", error);
    }
  };

  // Function to edit an existing transaction
  const handleEditTransaction = async (updatedTransaction) => {
    try {
      const response = await fetch("/api/transactions", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: updatedTransaction._id,
          amount: updatedTransaction.amount,
          date: updatedTransaction.date,
          description: updatedTransaction.description,
          category: updatedTransaction.category,
        }),
      });

      if (response.ok) {
        const updatedTransactions = transactions.map((transaction) =>
          transaction._id === updatedTransaction._id
            ? updatedTransaction
            : transaction
        );
        setTransactions(updatedTransactions); // Update UI
        updateChartData(updatedTransactions); // Update chart data
        setEditingTransaction(null); // Exit editing mode
      } else {
        console.error("Failed to update transaction");
      }
    } catch (error) {
      console.error("Error during PUT:", error);
    }
  };

  // Function to delete a transaction
  const handleDeleteTransaction = async (id) => {
    try {
      const response = await fetch("/api/transactions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        const updatedTransactions = transactions.filter(
          (transaction) => transaction._id !== id
        );
        setTransactions(updatedTransactions); // Update UI
        updateChartData(updatedTransactions); // Update chart data
      } else {
        console.error("Failed to delete transaction");
      }
    } catch (error) {
      console.error("Error during DELETE:", error);
    }
  };

  // Function to calculate chart data
  const updateChartData = (transactions) => {
    const groupedData = transactions.reduce((acc, transaction) => {
      const month = new Date(transaction.date).toLocaleString("default", {
        month: "short",
      });
      acc[month] = (acc[month] || 0) + transaction.amount;
      return acc;
    }, {});

    const formattedData = Object.entries(groupedData).map(([name, expenses]) => ({
      name,
      expenses,
    }));

    setChartData(formattedData);
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
      <MonthlyExpensesChart data={chartData} />
    </div>
  );
}