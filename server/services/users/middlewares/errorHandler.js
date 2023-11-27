
function errorHandler(err, req, res, next) {

    let status = 500
    let message = "Internal Server error"

    if(err.name === "appErr") {
        status = err.status
        message = err.message
    }

    res.status(status).json({message})

}

module.exports = errorHandler