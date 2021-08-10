import mongoose from "mongoose";

export const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useFindAndModify: true,
      useCreateIndex: true,
    })
    .then((_) => console.log("Connect to database"));
};
