import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./Routes/Userroute.js"
import postRoute from "./Routes/Postroute.js"
import messageRoute from "./Routes/Messageroute.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "I'm coming from backend",
        success: true
    });
});

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));

const corsOptions = {
    origin: 'http://localhost:5173',
    Credentials: true 
};

app.use(cors(corsOptions));

//here api are written

app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);
app.use("/api/v1/message", messageRoute);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening at port ${PORT}`);
});
