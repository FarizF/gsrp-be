import mongoose from "mongoose";
import { BankAccount } from "./bankAccount";

const schema = new mongoose.Schema({ 
    firstName: String,
    lastname: String,
    cash: Number,
    bankAccounts: [BankAccount]
});

export const Character = mongoose.model("Character", schema);