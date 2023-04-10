const mongo = require('mongoose');


const connectDB = (url) => {
    return mongo
        .connect(url, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("*** *** *** Connected to the DB");
        })
}



module.exports = connectDB