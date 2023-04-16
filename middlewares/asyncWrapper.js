const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            // Default Error Handler:
            next(error)
        }
    }
}

module.exports = asyncWrapper