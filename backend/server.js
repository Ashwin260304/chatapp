import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongodb.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use("/api/users", userRoutes);

app.get("/",(req,res) => {
    res.send('Hello !!!');
});



app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});