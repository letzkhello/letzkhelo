// import mongoose from "mongoose";
// export async function connect() {
//   try {
//     mongoose.connect(process.env.MONGO_URL!);
//     const connection = mongoose.connection;
//     connection.on("connected", () => {
//       console.log("mongodb connected succesfully");
//     });
//     connection.on("error", (err) => {
//       console.log("mongodb error", err);
//        process.exit();
//     });
//   } catch (error) {
//     console.log("erro connectiong mongoose", error);
//   }
// }


import mongoose from "mongoose";

export function connect() {
  mongoose.connect(process.env.MONGODB_URL!,{
    tls: true,
    ssl: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Hey there is some error", err));
}