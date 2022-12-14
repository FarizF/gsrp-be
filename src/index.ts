import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import * as dotenv from "dotenv";
dotenv.config();

import { connect } from "./mongo";

import RegisterRouter from "./routes/register";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
// adding Helmet to enhance your Rest API's security
app.use(helmet());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan());

connect();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World, from express");
});

app.use("/register", RegisterRouter);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});