
function errorHandler(err, req, res, next) {
    console.log(err);
    // return res.status(500).json(err)
    
    let status = 500
    let message = "Invalid Server Error"
    
    if(err.name === "SequelizeValidationError") {
        status = 400
        message = err.errors[0].message
    } 
    else if (err.name === "SequelizeUniqueConstraintError") {
        status = 400
        message = err.errors[0].message
       
    }
    else if (err.name === "appErr") {
        status = err.status
        message = err.message
    }
    else if (err.name === "JsonWebTokenError") {
        status = 401
        message = "Invalid Token"
    }
    
    res.status(status).json({message})
}

module.exports = errorHandler