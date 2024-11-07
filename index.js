const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello from dockerized Node.js app')
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});