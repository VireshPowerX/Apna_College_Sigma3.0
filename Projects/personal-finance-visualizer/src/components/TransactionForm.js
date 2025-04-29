import React, { useState, useEffect } from 'react';

const TransactionForm = ({ transaction, onAddTransaction, onEditTransaction }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  // Populate the form fields if editing a transaction
  useEffect(() => {
    if (transaction) {
      setAmount(transaction.amount);
      setDate(transaction.date);
      setDescription(transaction.description);
      setCategory(transaction.category);
    }
  }, [transaction]);
  
  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories'); // Make sure this endpoint works
        const data = await response.json();
        setCategories(data); // Update categories state
        console.log('Fetched Categories:', data); // Debugging log
      } catch (error) {
        console.error('Failed to fetch categories:', error); // Error logging
      }
    };
    fetchCategories();
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!amount || !date || !description || !category) {
      alert('All fields are required!');
      return;
    }
  
    const newTransaction = {
      _id: transaction?._id, // Include ID for editing
      amount,
      date,
      description,
      category,
    };
    transaction ? onEditTransaction(newTransaction) : onAddTransaction(newTransaction);
  
    // Clear form fields
    setAmount('');
    setDate('');
    setDescription('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{transaction ? 'Edit Transaction' : 'Add Transaction'}</h2>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select a category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">{transaction ? 'Save Changes' : 'Add Transaction'}</button>
    </form>
  );
};

export default TransactionForm;