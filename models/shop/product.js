import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    sale: Number,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryProduct",
      required: true,
    },
    availble: {
      type: String,
      enum: ["in-stock", "out-stock"],
      default: "in-stock",
    },
    desc: {
      type: String,
    },
    fullDesc: String,
    quantity: Number,
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    color: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Color",
    },
    specification: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Specification",
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
