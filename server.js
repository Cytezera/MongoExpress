require('dotenv').config();
const express = require('express');
const connectDb = require('./db/db');
const app = express();
app.use(express.json());
connectDb();

const userRouter  = require('./routes/users');
const authRouter = require('./routes/auth');

app.use('/user' , userRouter);
app.use('/auth', authRouter);

app.listen(3000)

