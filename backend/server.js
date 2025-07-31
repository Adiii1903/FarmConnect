const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
    res.send('FarmConnect Backend Running 🚀');
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
