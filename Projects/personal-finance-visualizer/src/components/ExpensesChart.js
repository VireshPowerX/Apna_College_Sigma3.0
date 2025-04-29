"use client"; // Ensures this runs as a client component

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ExpensesChart({ data }) {
  if (!data || data.length === 0) {
    return <p>No data available for visualization.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="expenses" fill="#007bff" />
      </BarChart>
    </ResponsiveContainer>
  );
}