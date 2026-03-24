const express = require('express');
const app = express();

const PORT = 3000;

// Root
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Backend API" });
});

// Hello endpoint
app.get('/hello', (req, res) => {
    res.json({ message: "Hello from Kubernetes Project 🚀" });
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: "OK" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});