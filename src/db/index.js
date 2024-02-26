import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async ()=>{
    try {
       const connectionInstance= await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n Mongodb connected !! dbhost :${connectionInstance.connection.host} `);
        // app.on("error",(error)=>{
        //   console.log("ERR:",error);
        //   throw error
        // })
  
        // app.listen(process.env.PORT,()=>{
        //   console.log(`App is listening on ${process.env.PORT}`);
        // })
    } catch (error) {
        console.log("Error connecting to the database: ", error);
        process.exit(1);
    }
}

export default connectDB;