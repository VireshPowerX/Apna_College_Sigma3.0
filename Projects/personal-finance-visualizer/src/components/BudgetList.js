import React from 'react';

const BudgetList = ({ budgets }) => (
  <div>
    <h2>Budgets</h2>
    <ul>
      {budgets.map((budget, index) => (
        <li key={index}>
          {budget.category}: ${budget.amount}
        </li>
      ))}
    </ul>
  </div>
);

export default BudgetList;
