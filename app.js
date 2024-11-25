import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

import { mongourl } from "./db.config.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);


mongoose.connect(mongourl).then(() => {
    app.listen(5000);
    console.log("Connected to MongoDB and listening on port 5000");
})
.catch((err) => console.error("Error connecting to MongoDB:", err));


