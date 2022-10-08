import { Router } from "express";
// import { Player } from "@fariz_f/gsrp-types/models";

export const router = Router();

router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
});

router.get("/new-player", (req, res) => {
    // let newplayer: Player = {};
    console.log(req, res);
});
