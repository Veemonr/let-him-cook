const ModelUser = require("../models/modelUser")

class ControllerUser {
    static async userCreate(req, res, next) {
        try {
            const { username, email, password, role, phoneNumber, address } = req.body 
            const newUser = await ModelUser.createUser({username, email, password, role, phoneNumber, address})
            res.status(201).json({message: "Success Create User"})
        
        } catch(err) {
            next(err)
        }
    } 

    static async findAllUser(req, res, next) {
        try {
            const allUser = await ModelUser.findAllUser()
            res.status(200).json(allUser)
        } catch(err) {
            next(err)
        }
    } 

    static async findUserById(req, res, next) {
        try {
            const { id } = req.params
            console.log(id);
            const userFind = await ModelUser.findUserById(id)
            res.status(200).json(userFind)
        } catch(err) {
            next(err)
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const { id } = req.params
            await ModelUser.deleteUserById(id)
            res.status(200).json({message: "Success Delete User"})
        } catch(err) {
            next(err)
        }
    }
}

module.exports = ControllerUser