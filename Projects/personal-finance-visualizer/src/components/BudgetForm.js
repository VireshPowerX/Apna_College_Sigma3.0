import React, { useState } from 'react';

const BudgetForm = ({ onAddBudget }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddBudget = (e) => {
    e.preventDefault();
    if (!category || !amount) {
      alert('All fields are required!');
      return;
    }

    onAddBudget({ category, amount });
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleAddBudget}>
      <h2>Add Budget</h2>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Set Budget</button>
    </form>
  );
};

export default BudgetForm;
