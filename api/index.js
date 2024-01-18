import  express  from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.Mongo)
.then(
    () => {
        console.log('Connected to Mongodb');
    }
).catch((err) => {
    console.log(err);
})

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`)
})