
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Array of strings (sports)
let sports = ['Soccer', 'Handball', 'Volleyball', 'Cricket', 'Swimming'];

// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Get all sports - You can sort this array if needed
app.get('/api/items', (req, res) => {
  res.json(sports);
});

// Get one sport by ID
app.get('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  if (itemId >= 0 && itemId < sports.length) {
    res.json({ sport: sports[itemId] });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Add new sport
app.post('/api/items', (req, res) => {
  const newItem = req.body.sportName;
  sports.push(newItem);
  res.status(201).json({ message: `Added ${newItem} as item identifier ${sports.length - 1}` });
});

// Edit existing sport by ID
app.put('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  if (itemId >= 0 && itemId < sports.length) {
    const updatedItem = req.body.sportName;
    sports[itemId] = updatedItem;
    res.json({ message: `Updated item with identifier: ${itemId} to ${updatedItem}` });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Delete sport by ID
app.delete('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  if (itemId >= 0 && itemId < sports.length) {
    const deletedItem = sports.splice(itemId, 1)[0];
    res.status(200).json({ message: `Deleted sport: ${deletedItem}` });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send('Resource not found');
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
  console.log('Ready to handle requests on port ' + HTTP_PORT);
});

