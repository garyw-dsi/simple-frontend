const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5000/greet');
        res.send(`Backend says: ${response.data.message}`);
    } catch (error) {
        res.send('Error connecting to the backend');
    }
});

app.listen(port, () => {
    console.log(`Frontend running at http://localhost:${port}`);
});
