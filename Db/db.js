//we will handle connectivity between express and mongoDb
//in common js ==> const mongoose = reqiure('mongoose)
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const connectDb = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("db has been Connected");
    }
    catch (err) {
        console.log(err);
    }
}
export default connectDb
