const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to my company website!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

