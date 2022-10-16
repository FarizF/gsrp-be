import { Router } from "express";
import mongoose from "mongoose";
import { send } from "process";
import { Player } from "../models/";
// import { Player } from "@fariz_f/gsrp-types/models";

const router = Router();

router.get("/returning/:discordId", async (req, res) => {
    const discordId = req.params.discordId;
    const player = await Player.findOne({"_id": discordId});

    res.status(200).send(player);
});

router.post("/new-player", async (req, res) => {
    const newPlayerData = req.body;
    
    const doc = new Player({id: newPlayerData.id, hardwareIds: newPlayerData.hardwareIds});
    await doc.save();

    res.status(200).send(newPlayerData);
});

export default router;