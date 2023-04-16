const task = require("../models/task")
const Tasks = require("../models/task")
const asyncWrapper = require('../middlewares/asyncWrapper')


const getAllTasks = asyncWrapper(async (req, res) => {
    const query = await Tasks.find({})
    res.status(200).json({ Response: query })
})

const createTask = asyncWrapper(async (req, res) => {

    const task = await Tasks.create(req.body)
    res.status(201).json({ task })

})

const getTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params
    const singleTask = await Tasks.findOne({ _id: taskID });

    // The Query may not exist so...
    if (!singleTask) {
        return res.status(404).json({ message: "No Query found with this ID" })
    }

    res.status(200).json({ singleTask })

})

const deleteTask = asyncWrapper(async (req, res) => {
    // res.send('Delete a Task')
    const { id: taskID } = req.params
    const singleTask = await Tasks.deleteOne({ _id: taskID });

    // The Query may not exist so...
    if (!singleTask) {
        return res.status(404).json({ message: "No Query found with this ID" })
    }

    res.status(200).json({ message: "The Task Deleted Succssesfully", id: taskID })

})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const singleTask = await Tasks.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true })

    if (!singleTask) {
        return res.status(404).json({ message: "No Query found with this ID" })
    }
    res.status(200).json({ message: "The Task Updated", task: singleTask })

})

module.exports = { getAllTasks, createTask, getTask, deleteTask, updateTask }