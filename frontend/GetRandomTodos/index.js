const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors());

// Sample array of todo objects
const todos = [
    { id: 1, title: 'Buy groceries', description: 'Milk, Bread, Eggs' },
    { id: 2, title: 'Finish project', description: 'Complete Node.js service' },
    { id: 3, title: 'Read book', description: 'Start with chapter 4' },
    { id: 4, title: 'Workout', description: 'Leg day at the gym' },
    { id: 5, title: 'Call mom', description: 'Weekend check-in' },
    { id: 6, title: 'Meditate', description: '10 mins mindfulness' },
    { id: 7, title: 'Pay bills', description: 'Electricity and internet' },
    { id: 8, title: 'Clean room', description: 'Organize books and desk' },
    { id: 9, title: 'Water plants', description: 'Don’t let them die like last time!' },
    { id: 10, title: 'Walk the dog', description: 'Or let the dog walk you 🐕' },
    { id: 11, title: 'Write a poem', description: 'Make it dramatic and overly deep' },
    { id: 12, title: 'Bake cookies', description: 'Chocolate chip or riot 🍪' },
    { id: 13, title: 'Learn guitar', description: 'Impress crush with 3 chords 🎸' },
    { id: 14, title: 'Watch tutorial', description: 'Forget 90% of it after watching' },
    { id: 15, title: 'Reply to emails', description: 'Finally respond after 2 weeks' },
    { id: 16, title: 'Plan vacation', description: 'But not actually go anywhere 😅' },
    { id: 17, title: 'Paint something', description: 'Even if it’s just stick figures' },
    { id: 18, title: 'Declutter phone', description: '3,742 screenshots say hi' },
    { id: 19, title: 'Learn to juggle', description: 'Start with oranges, fail proudly' },
    { id: 20, title: 'Do nothing', description: 'You earned it, champion 🛋️' }
  ];
  

// Random subset generator
function getRandomTodos() {
  const count = Math.floor(Math.random() * todos.length) + 1;
  const shuffled = [...todos].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Route to get random todos
app.get('/todos', (req, res) => {
  const randomTodos = getRandomTodos();
  res.json(randomTodos);
});

// Route to get todo by query param ?id=1
app.get('/todo', (req, res) => {
    const id = parseInt(req.query.id);
  
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid or missing id parameter' });
    }
  
    const todo = todos.find(t => t.id === id);
  
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
  
    res.json(todo);
    
});
  
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
