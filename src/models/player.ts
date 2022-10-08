import mongoose from "mongoose";
import { Character } from "./character";

const schema = new mongoose.Schema({
    id: {type: String, required: true},
    hardwareIds: {type: [String], required: true},
    characters: [Character.schema]
});

export const Player = mongoose.model("Player", schema);