import { Router } from "express";
// import { Player } from "@fariz_f/gsrp-types/models";

export const router = Router();

router.post("/new-player", (req, res) => {
    // let newplayer: Player = {};
    console.log("TEST");
    console.log(req, res);
});
