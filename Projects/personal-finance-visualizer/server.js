const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Mock data
let transactions = [];
let categories = [
  { _id: '1', name: 'Groceries' },
  { _id: '2', name: 'Rent' },
  { _id: '3', name: 'Entertainment' },
];

let budgets = [
  { _id: '1', name: 'Groceries', amount: 200 },
  { _id: '2', name: 'Rent', amount: 1200 },
];

// Routes for transactions
app.get('/api/transactions', (req, res) => {
  res.status(200).json(transactions);
});

app.post('/api/transactions', (req, res) => {
  const newTransaction = req.body;
  newTransaction._id = Date.now().toString();
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
});

app.put('/api/transactions/:id', (req, res) => {
  const updatedTransaction = req.body;
  const index = transactions.findIndex(t => t._id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Transaction not found' });
  
  transactions[index] = updatedTransaction;
  res.status(200).json(updatedTransaction);
});

app.delete('/api/transactions/:id', (req, res) => {
  transactions = transactions.filter(t => t._id !== req.params.id);
  res.status(204).end();
});

// Routes for categories
app.get('/api/categories', (req, res) => {
  res.status(200).json(categories);
});

// Routes for budgets
app.get('/api/budgeting', (req, res) => {
  res.status(200).json(budgets);
});

app.post('/api/budgeting', (req, res) => {
  const newBudget = req.body;
  newBudget._id = Date.now().toString();
  budgets.push(newBudget);
  res.status(201).json(newBudget);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
