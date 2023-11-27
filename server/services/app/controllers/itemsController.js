const { sequelize } = require("../models/index")
const { Item, Category, Ingredient } = require("../models/index")

class ControllerItem {
    static async getItems(req, res, next) {
        try {   
            const allItem = await Item.findAll({include: [Category, Ingredient]})
            res.status(200).json(allItem)
        } catch(err) {
            next (err)
        }
    }

    static async createItem(req, res, next) {
        const t = await sequelize.transaction()
        try {
            const { name, description, price, imgUrl, categoryId, ingredients, authorId } = req.body
            // const authorId = req.user.id
            if(!ingredients) throw({name: "appErr", status: 400, message: "Ingredients Is Required"})
            if(ingredients.length < 2 && typeof(ingredients) !== "array") throw({name: "appErr", status: 400, message: "Must Insert Ingredients At Least 2"})
            const newItem = await Item.create({name, description, price, imgUrl, categoryId, ingredients, authorId}, { transaction: t})
            const ingridientsToCreate = ingredients.map(el => {
                el.itemId = newItem.id
                return el
            })

            const bulkNewIngredient = await Ingredient.bulkCreate(ingridientsToCreate, {transaction: t})

            await t.commit()

            res.status(201).json(Item)
        } catch(err) {
            await t.rollback()
            next(err)
        }
    }

    static async deleteItem(req, res, next) {
        try {
            const { id } = req.params
            const itemFind = await Item.findByPk(id)
            if(!itemFind) throw({name: "appErr", status: 404, message: "Item Is Not Found"})
            await Item.destroy({where: {id}})
            
            res.status(200).json({message: "Item Has Been Deleted"})
        } catch(err) {
            next(err)
        }
    }

    static async getItemById(req, res, next) {
        try {
            const { id } = req.params
            const itemFind = await Item.findByPk(id, {include:[Ingredient, Category]})
            res.status(200).json(itemFind)
        } catch(err) {
            next(err)
        }
    }

    static async editItem(req, res, next) {
        const t = await sequelize.transaction()
        try {
            const { id } = req.params
            const itemFind = await Item.findByPk(id)
            if(!itemFind) throw({name: "appErr", status: 404, message: "Item Is Not Found"})
            const { name, description, price, imgUrl, categoryId, authorId } = req.body
            await Item.update({name, description, price, imgUrl, categoryId, authorId}, {where: {id}, transaction: t})

            await t.commit()

            res.status(201).json({message: "Edit Item Succes"})
        } catch(err) {
            await t.rollback()
            next(err)
        }
    }
}

module.exports = ControllerItem