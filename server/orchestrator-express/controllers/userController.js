const userServer = process.env.USER_SERVER_LINK + "users/"
const axios = require("axios")

class UserController {

    static async getAllUser(req, res, next) {
        try {
            const { data } = await axios(userServer)
            res.status(200).json(data)
        } catch(err) {
            console.log(err);
            next(err)
        }
    }

    static async createUser(req, res, next) {
        try {
            const userInput = req.body
            const { data } = await axios({
                method: "POST",
                url: userServer,
                data: userInput
            })
            res.status(201).json(data)
        } catch(err) {
            next(err)
        }
    }

    static async getUserById(req, res, next) {
        try {
            const { id } = req.params
            const { data } = await axios(userServer + id)
            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

    static async deleteById(req, res, next) {
        try {
            const { id } = req.params
            const { data } = await axios({
                method: "DELETE",
                url: userServer + id
            })
            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

}

module.exports = UserController