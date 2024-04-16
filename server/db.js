require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.DB_URL);

const paymentSchema = new mongoose.Schema({
    id: String,
    ItemID: String,
    paid: Boolean
});

const itemSchema = new mongoose.Schema({
    id: String,
    url: String,
    owner: String,
    prize: String
})


const Payment = new mongoose.model('Payment',paymentSchema);
const Item = new mongoose.model('Item',itemSchema);


module.exports = {
    Payment,
    Item
};