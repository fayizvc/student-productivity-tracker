const express = require('express');
const app = express();
const port = 5000;

// Define a route for the home page URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen for connections on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});