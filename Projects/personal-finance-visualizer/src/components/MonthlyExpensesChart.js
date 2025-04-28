import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const MonthlyExpensesChart = ({ data }) => (
  <div>
    <h2>Monthly Expenses</h2>
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="expenses" fill="#8884d8" />
    </BarChart>
  </div>
);

export default MonthlyExpensesChart;