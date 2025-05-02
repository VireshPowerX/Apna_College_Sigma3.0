"use client";

import React, { useEffect, useState } from "react";
import CategoryPieChart from "@/components/CategoryPieChart";

export default function DashboardPage() {
  const [summary, setSummary] = useState({
    totalExpenses: 0,
    categoryBreakdown: [],
    recentTransactions: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch("/api/dashboard");
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        setSummary(data);
      } catch (error) {
        console.error("🚨 Error fetching dashboard data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) {
    return <p>Loading dashboard data...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="summary-cards">
        <div className="card">
          <h3>Total Expenses</h3>
          <p>${summary.totalExpenses.toFixed(2)}</p>
        </div>

        <div className="card">
          <h3>Category Breakdown</h3>
          {summary.categoryBreakdown.length > 0 ? (
            <CategoryPieChart transactions={summary.categoryBreakdown} />
          ) : (
            <p>No category data available.</p>
          )}
        </div>

        <div className="card">
          <h3>Recent Transactions</h3>
          {summary.recentTransactions.length > 0 ? (
            <ul>
              {summary.recentTransactions.map((transaction, index) => (
                <li key={index}>
                  {transaction.description} - ${transaction.amount.toFixed(2)} ({transaction.category})
                </li>
              ))}
            </ul>
          ) : (
            <p>No recent transactions found.</p>
          )}
        </div>
      </div>
    </div>
  );
}