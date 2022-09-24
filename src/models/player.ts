import mongoose from "mongoose";
import { Character } from "./character";

const schema = new mongoose.Schema({
    id: String,
    hardwareIds: [String],
    characters: [Character]
});

export const Player = mongoose.model("Player", schema);