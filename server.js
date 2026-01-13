const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('.')); // Serves your index.html and assets

// DATABASE: In the future, we will connect this to MySQL/MongoDB
const universalInventory = [
    { id: 1, name: "9x9 Dressed Stone", price: 50, category: "Premium", stock: 2500 },
    { id: 2, name: "6x9 Dressed Stone", price: 48, category: "Premium", stock: 1800 },
    { id: 3, name: "9x9 Undressed", price: 33, category: "Standard", stock: 5000 },
    { id: 4, name: "Machine Cut (Foundation)", price: 28, category: "Standard", stock: 10000 }
];

// API: Send stones to the frontend
app.get('/api/stones', (req, res) => {
    res.json(universalInventory);
});

// API: Process orders (Logged to server console)
app.post('/api/order', (req, res) => {
    const orderDetails = req.body;
    console.log(`ORDER RECEIVED - KENNETH OMONDI WARE LOGISTICS:`, orderDetails);
    res.status(200).json({ status: "Success", message: "Order Received in Backend" });
});

app.listen(PORT, () => {
    console.log(`Universal Server Live at http://localhost:${PORT}`);
    console.log(`Architect: OMONDI ROBIN`);
});