import mongoose from "mongoose";

export async function connect(): Promise<typeof mongoose> {
    const address = process.env.BLADE + ":" + process.env.MONGO_PORT;
    const connectionString = `mongodb://${address}`;

    return await mongoose.connect(connectionString, { user: process.env.MONGO_USER, pass: process.env.MONGO_PW, dbName: "gsrp" });
}

