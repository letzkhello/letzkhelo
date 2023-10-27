
import mongoose from "mongoose";

export function connect() {
  mongoose.connect(process.env.MONGODB_URL!,{
    tls: true,
    ssl: true,
  })
  .then(() => console.log())
  .catch((err) => console.log(err));
}