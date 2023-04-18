import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import employeeRoute from "./routes/employee.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors(
    {
        origin: "http://localhost:3000", 
        credentials: true
    },
    { withCredentials: true }
));

app.use("/api/emp", employeeRoute);

const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "Settyl_Assignment"
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => {
        console.log(error);
    })
