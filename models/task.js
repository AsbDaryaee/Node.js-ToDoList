const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must Provide Name."],
        trim: true,
        maxlength: [50, 'Name Cannot be more than 50 Characters']
    },
    completed: {
        type: Boolean,
        default: false,
    }
})


// module.exports = mongoose.model(name of the set, schema)
module.exports = mongoose.model('Tasks', taskSchema)