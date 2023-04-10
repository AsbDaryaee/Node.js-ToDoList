const getAllTasks = (req, res) => {
    res.send('Get All Tasks')
}

const createTask = (req, res) => {
    res.send('Create a Task')
}

const getTask = (req, res) => {
    res.send('Get a single Task')
}

const updateTask = (req, res) => {
    res.send('Update Task')
}

const deleteTask = (req, res) => {
    res.send('Delete a Task')
}


module.exports = { getAllTasks, createTask, getTask, deleteTask, updateTask }