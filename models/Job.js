import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  company: String,
  logo: String,
  logoBackground: String,
  position: String,
  postedAt: String,
  contract: String,
  location: String,
  website: String,
  apply: String,
  description: String,
  requirements: {
    content: String,
    items: [String],
  },
  role: {
    content: String,
    items: [String],
  },
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
