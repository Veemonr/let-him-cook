const { signToken } = require("../helpers/helpers")
const { User } = require("../models/index")

async function authentication(req, res, next ) {
    try {
        const { access_token } = req.headers
        const payload = signToken(access_token)
        const userFind = await User.findByPk(payload.id)
        if(!userFind) throw({name: "appErr", status: 401, message: "Invalid Token"})
        req.user = {
            id: userFind.id,
            role: userFind.role
        }
        next()
    } catch(err) {
        next(err)
    }
}

module.exports = authentication