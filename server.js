const express = require('express');
const app = express();
const mongoose = require('mongoose');


const userRouter  = require('./routes/users');
const authRouter = require('./routes/auth');

app.use('/user' , userRouter);
app.use('/auth', authRouter);

app.listen(3000)

