import mongoose from "mongoose";
import { DB_URL } from "./config.js";
import chalk from "chalk";

const connectDB  = async ()=>{

    try {

       const conn =  await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        
        

       console.log(chalk.green.bold('connect'), chalk.white.bgGreen.bold('  DB  ') ,chalk.green.bold('successfully'),)
        
    } catch (error) {
        console.log('unknown error db' , error);
        res.json({status: false,message : 'unknown eror'});
        process.exit(1)
    }

}

export default connectDB ;