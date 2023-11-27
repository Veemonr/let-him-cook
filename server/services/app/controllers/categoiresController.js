const { Category } = require("../models/index")

class ControllerCategories {

    static async getCategories(req, res, next) {
        try {
            const categories = await Category.findAll()
            res.status(200).json(categories)
        } catch(err) {
            next(err)
        }
    }

    static async createCategories(req, res, next) {
        try {
            const { name } = req.body
            const newCategory = await Category.create({name})
            res.status(201).json(newCategory)
        } catch(err) {
            next(err)
        }
    }

    static async deleteCategory(req, res, next) {
        try {
            const { id } = req.params
            const findCategory = await Category.findByPk(id)
            if(!findCategory) throw({name: "appErr", status: 404, message: "Category Is Not Found"})
            await Category.destroy({where: {id}})
            res.status(200).json({message: "Category Has Been Destroyed"})
        } catch(err) {
            next(err)
        }
    }
}

module.exports = ControllerCategories