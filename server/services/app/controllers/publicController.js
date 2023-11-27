const { Category, Item, Ingredient } = require("../models/index")
// const { comparePass, createToken } = require("../helpers/helpers")

class ControllerPublic {
   
    // static async registerUser(req, res, next) {
    //     try {
    //         const { email, password, username, phoneNumber, address } = req.body
    //         const newUser = await User.create({email, password, username, phoneNumber, address, role: "user"})
    //         res.status(201).json(newUser)
    //     } catch(err) {
    //         next(err)
    //     }
    // }

    // static async loginUser(req, res, next) {
    //     try {
    //         const { email, password } = req.body
    //         if(!email) throw({name: "appErr", status: 400, message: "Email Is Required"})
    //         if(!password) throw({name: "appErr", status: 400, message: "Password Is Required"})
    //         const userFind = await User.findOne({where: {email}})
    //         if(!userFind) throw({name: "appErr", status: 401, message: "Invalid Password/Email"})
    //         const passwordCheck = comparePass(password, userFind.password)
    //         if(!passwordCheck) throw({name: "appErr", status: 401, message: "Invalid Password/Email"})
    //         if(userFind.role !== "user") throw({name: "appErr", status: 403, message: "You Can Only Login This Site With Role User"})
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

    static async getItems(req, res, next) {
        try {
            const items = await Item.findAll()
            res.status(200).json(items)
        } catch(err) {
            next(err)
        }
    }

    static async getItemById(req, res, next) {
        try {
            const { id } = req.params
            const findItem = await Item.findByPk(id, {include: [Category, Ingredient]})
            if(!findItem) throw({name: "appErr", status: 404, message: "Item Not Found"})
            res.status(200).json(findItem)
        } catch(err) {
            next(err)
        }
    }

    static async filterItemByCategory(req, res, next) {
        try {
            const { categoryId } = req.body
            console.log(req.body);
            let option = {}
            if(categoryId) {
                option.where = {categoryId} 
            }
            option.include = [Category, Ingredient]
            const itemFiltered = await Item.findAll(option)
            res.status(200).json(itemFiltered)
        } catch(err) {
            next(err)
        }
    }

    static async getCategories(req, res, next) {
        try {
            const categories = await Category.findAll()
            res.status(200).json(categories)
        } catch(err) {
            next(err)
        }
    }
}

module.exports = ControllerPublic