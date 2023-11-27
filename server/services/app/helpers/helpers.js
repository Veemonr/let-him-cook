const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const secret = process.env.SECRET_KEY

function hashPassword(value) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(value, salt)
}

function comparePass(value, dbPassword) {
    return bcrypt.compareSync(value, dbPassword)
}

function createToken(payload) {
    return jwt.sign(payload, secret)
}

function signToken(token) {
    return jwt.verify(token, secret)
}

module.exports = { signToken, createToken, hashPassword, comparePass }