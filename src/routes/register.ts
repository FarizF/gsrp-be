import { Router } from "express";
// import { Player } from "@fariz_f/gsrp-types/models";

export const router = Router();

router.get("/new-player", (req, res) => {
    // let newplayer: Player = {};
    console.log("TEST");
    console.log(req, res);
});
