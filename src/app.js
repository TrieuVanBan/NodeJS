
// const express = require('express');
import express from 'express';
import cors from 'cors';
import productRoute from './routes/products';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// routes
app.use("/api", productRoute)

// connect db
    mongoose.connect ("mongodb://localhost:27017/we16310")
    .then(() => console.log("Ket noi DB thanh cong"))
    .catch(() => console.log("error"))
// connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});