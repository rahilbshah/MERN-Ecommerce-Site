import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'
import cartRoute from './routes/cartRoute.js'
import cors from "cors";
import cookieParser from 'cookie-parser'



const app =express();
dotenv.config();

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDb Disconnected");
})

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//MiddleWare
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use("/api/product", productRoute);
app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);


app.listen(8800,async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDb");
    } catch (error) {
        console.log(error);
    }
    console.log("Connected to Backend");
})