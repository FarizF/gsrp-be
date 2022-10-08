import { Router } from "express";
import { send } from "process";
// import { Player } from "@fariz_f/gsrp-types/models";

const router = Router();

router.post("/new-player", (req, res) => {
    // let newplayer: Player = {};
    console.log("TEST");
    console.log(req);
    res.status(200).send(JSON.stringify(req));
});

export default router;