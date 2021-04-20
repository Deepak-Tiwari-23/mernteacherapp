import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import auth from './routes/auth.js'
import './db/conn.js';

dotenv.config({path:'./config.env'});

const app = express();


const __dirname = path.resolve();
app.set('views', path.join(__dirname,'views'));
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(auth);


const PORT = process.env.PORT || 5000;


mongoose.set('useFindAndModify', false);

if (process.env.NODE_ENV == "production") {
    app.use(express.static("teacher_plus/build"));
}

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
});