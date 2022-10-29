const express = require('express');
const cors = require('cors');

const app = express();

// Inable cors requests
app.use(cors());

// Init middleware - enable get data from req.body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Defin routes
app.use('/api/hotels', require('./routes/api/hotels'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
