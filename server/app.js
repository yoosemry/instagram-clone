import express from "express";
import chalk from "chalk"
import { port } from "./config/config.js";
import userRouter from "./routers/user.router.js";
import connectDB from "./config/db.js";


const app = express();

app.use('/api/v1/users', userRouter)


connectDB();
app.listen(port , ()=>{
    console.log(chalk.green.bold('Server '),'Connected at port' , chalk.bgGreen.bold(' ',port,' '));
});