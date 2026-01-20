import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET single job by id
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findOne({ id: req.params.id });
    if (job) res.json(job);
    else res.status(404).json({ message: "Job not found" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
