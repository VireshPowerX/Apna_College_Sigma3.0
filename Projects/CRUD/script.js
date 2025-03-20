// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
// Add task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText === '') return;
  // Create a new task item
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);
  // Add "Remove" button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.style.marginLeft = '10px';
  li.appendChild(removeButton);
  // Toggle task completion
  span.addEventListener('click', () => {
    span.classList.toggle('completed');
  });
  // Remove task
  removeButton.addEventListener('click', () => {
    taskList.removeChild(li);
  });
  // Add the task to the list
  taskList.appendChild(li);
  // Clear input
  taskInput.value = '';
});