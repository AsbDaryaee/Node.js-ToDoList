const Tasks = require("../models/task")

const getAllTasks = async (req, res) => {
    try {
        const query = await Tasks.find({})
        res.status(200).json({ Response: query })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const createTask = async (req, res) => {

    try {
        const task = await Tasks.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const singleTask = await Tasks.findOne({ _id: taskID });

        // The Query may not exist so...
        if (!singleTask) {
            return res.status(404).json({ message: "No Query found with this ID" })
        }

        res.status(200).json({ singleTask })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const updateTask = (req, res) => {
    res.send('Update Task')
}

const deleteTask = async (req, res) => {
    // res.send('Delete a Task')
    try {
        const { id: taskID } = req.params
        const singleTask = await Tasks.deleteOne({ _id: taskID });

        // The Query may not exist so...
        if (!singleTask) {
            return res.status(404).json({ message: "No Query found with this ID" })
        }

        res.status(200).json({ message: "The Task Deleted Succssesfully", id: taskID })
    } catch (error) {
        res.status(500).json({ message: error })
    }

}


module.exports = { getAllTasks, createTask, getTask, deleteTask, updateTask }