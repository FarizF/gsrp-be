import { Router } from "express";
import { Player } from "@fariz_f/gsrp-types/models";

Router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
});

Router.get("/2xf-discord-auth", (req, res) => {
    res.send("Hello World, from express");
});

Router.post("/add-new-player", (req, res) => {
    // let newplayer: Player = {};
    console.log(req, res);
});

export default Router;