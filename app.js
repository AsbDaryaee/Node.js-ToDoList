const express = require('express')
const app = express()
const tasks = require('./routers/tasks')
const connectDB = require('./db/connect');
const dotenv = require('dotenv').config();
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/customErrorHandler');
const port = process.env.PORT || 8000

// *** *** *** MiddleWares
app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(express.static('./public'))
app.use('*', notFound)
app.use(errorHandler)


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