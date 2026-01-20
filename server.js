import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jobRoutes from "./routes/jobsRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Mount jobs routes
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.redirect("/api/jobs");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
