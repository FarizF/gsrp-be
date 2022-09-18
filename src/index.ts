import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World, from express");
});

app.get("/2xf-discord-auth", (req, res) => {
    console.log(req, res);
    res.send("Hello World, from express");
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});