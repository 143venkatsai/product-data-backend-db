const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./Routes/product.route.js');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api/products",productRoute);

app.get('/', (req, res) =>{
    res.send('Hello from Node API Server');
});


mongoose.connect("mongodb+srv://venkatsaipelluru:cPNrRSkXRXzpqeSM@backenddb.jmuab.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () =>{
        console.log('Server is running on port 3000');
    });
})
.catch(() =>{
    console.log('Error connecting to MongoDB');
})