const errorHandler = (err, req, res, next) => {
    return res.status(500).json({ Message: err })
}


module.exports = errorHandler