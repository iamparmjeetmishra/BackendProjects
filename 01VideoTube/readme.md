### MongoDB connection with Index file

```
import mongoose from "mongoose";
import DB_NAME from './constants'
import express  from "express";

const app = express()

    ; ( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('ErrDBConn:', (error) => {
            console.log('ErrDBConn', error)
            throw error
        })
        app.listen(process.ebv.PORT, () => {
            console.log(`App is listening on Port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(`Error: ${error}`)
        throw error
    }
})()


```

### Other solution is by Separate file - Modular version

```
// In Db File

import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance}`)
        console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`MongoDBError`, error)
        // throw error;
        process.exit(1)
    }
}

export default connectDB;

// Importing in Index file
// require('dotenv').config({path: './env'}) // by Using require it make code unease to the eye

import dotenv from 'dotenv';

import connectDB from "./db";

dotenv.config({
    path: './env'
})


connectDB()

```

### Loading 'Import' function of dotenv 
#### By changing scripts of package.json file

```
"scripts": {
    "dev": "nodemon src/index.js"
}
"scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
}

```

### Custom APi Response and Error Handling with Middleware function

#### We are going to use async function like DB Connection again and again. As a result we can make this global Higher Order function

###### Higher Order function with Try and Catch

```
<!-- const asyncHandler = (fn) => {() => {}} -->
const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

```
###### Higher Order function with Promise

```
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => {
            next(err)
        })
    }
}

```