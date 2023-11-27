// const { comparePass, createToken } = require("../helpers/helpers")
const { User } = require("../models/index")

class UsersController {

    static async register(req, res ,next) {
        try {
            const { email, password, username, phoneNumber, address } = req.body
            const newUser = await User.create({email, password, username, phoneNumber, address, role: "admin"})
            res.status(201).json(newUser)
        } catch(err) {
            next(err)
        }
    }

    // static async login(req, res, next) {
    //     try {
    //         const { email, password } = req.body
    //         if(!email) throw({name: "appErr", status: 400, message: "Email Is Required"})
    //         if(!password) throw({name: "appErr", status: 400, message: "Password Is Required"})
    //         const userFind = await User.findOne({where: {email}})
    //         if(!userFind) throw({name: "appErr", status: 401, message: "Invalid Password/Email"})
    //         const passwordCheck = comparePass(password, userFind.password)
    //         if(!passwordCheck) throw({name: "appErr", status: 401, message: "Invalid Password/Email"})
    //         if(userFind.role !== "admin") throw({name: "appErr", status: 403, message: "You Can Only Login This Site With Role Admin"})
    //         const payload = {
    //             id: userFind.id,
    //             role: userFind.role
    //         }
    //         const access_token = createToken(payload)
    //         res.status(201).json({access_token})
    //     } catch(err) {
    //         next(err)
    //     }
    // }
}

module.exports = UsersController