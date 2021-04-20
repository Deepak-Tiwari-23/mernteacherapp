import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path:'./config.env'});

const Database_Connection_URL = process.env.DATABASE;

mongoose.connect(Database_Connection_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('we are connected'))
.catch((err) => console.log(err.message));