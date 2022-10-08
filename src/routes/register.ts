import { Router } from "express";
import mongoose from "mongoose";
import { send } from "process";
import { Player } from "../models/";
// import { Player } from "@fariz_f/gsrp-types/models";

const router = Router();

router.post("/new-player", async (req, res) => {
    // let newplayer: Player = {};

    const newPlayerData = req.body;
    
    // const doc = new Player({id: newPlayerData.id, hardwareIds: newPlayerData.hardwareIds});
    // await doc.save();

    res.status(200).send(newPlayerData);
});

export default router;