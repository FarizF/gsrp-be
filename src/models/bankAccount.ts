import mongoose from "mongoose";

const schema = new mongoose.Schema({ 
    accountName: String,
    balance: Number
});

export const BankAccount = mongoose.model("BankAccount", schema);