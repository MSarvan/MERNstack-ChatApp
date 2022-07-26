const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const userRoutes = require('./routes/userRoutes')

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running successfully");
})

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));