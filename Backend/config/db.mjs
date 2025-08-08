import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// mongoose.connection.on("disconnected", () => {
//     ConnectDB();
// });

// process.on("SIGINT", async () => {
//     await mongoose.connection.close();
//     process.exit(0);
// });

export default ConnectDB;
