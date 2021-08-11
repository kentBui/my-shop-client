import mongoose from "mongoose";

const specSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required,
    },
    width: String,
    height: String,
    depth: String,
    weight: String,
    qualityChecking: Boolean,
    freshnessDuration: Number,
    whenPackeing: String,
    eachBoxContains: Number,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default mongoose.models.Specification ||
  mongoose.model("Specification", specSchema);
