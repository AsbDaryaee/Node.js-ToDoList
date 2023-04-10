const express = require('express')
const app = express()
const tasks = require('./routers/tasks')
const connectDB = require('./db/connect');
const dotenv = require('dotenv').config();

const port = 3000

// *** *** *** MiddleWares
app.use(express.json())
app.use('/api/v1/tasks', tasks)


// *** *** ***  Routes
app.get('/', (req, res) => res.send("All Tasks: * http://localhost:3000/api/v1/tasks"))


// *** *** *** Listener and Port

// *** *** *** Start Function

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`*** *** *** App is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()