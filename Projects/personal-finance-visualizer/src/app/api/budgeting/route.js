// Example for handling budgets
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let budgets = []; // Mock database for budgets

// GET endpoint for fetching budgets
app.get('/api/budgeting', (req, res) => {
  res.status(200).json(budgets); // Returns the list of budgets
});

// POST endpoint to add a new budget
app.post('/api/budgeting', (req, res) => {
  const newBudget = req.body;
  newBudget._id = Date.now().toString(); // Generating a unique ID for each budget
  budgets.push(newBudget);

  res.status(201).json(newBudget); // Send back the newly added budget
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
