
function auhthorizationAdmin(req, res, next) {
    try {
        const { role } = req.user
        if(role !== "admin") throw({name: "appErr", status: 403, message: "Forbidden"}) 
        next()
    } catch(err) {
        next(err)
    }
}

module.exports = auhthorizationAdmin