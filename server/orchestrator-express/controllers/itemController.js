const axios = require("axios")
const itemServer = process.env.APP_SERVER_LINK + "items/"
const userServer = process.env.USER_SERVER_LINK
const redis = require("../config/redisConfig")

class ItemController {
    static async getAllItem(req, res, next) {
        try {
            const itemRegis = await redis.get("items")
            if(itemRegis) {
                const itemData = JSON.parse(itemRegis)
                res.status(200).json(itemData)
            } else {
                const { data } = await axios(itemServer)
                const redisData = JSON.stringify(data)
                redis.set("items", redisData)
                res.status(200).json(data)
            }
        } catch(err) {
            next(err)
        }
    }

    static async createItem(req, res, next) {
        try {
            const itemInput = req.body
            const { data } = await axios({
                url: itemServer,
                method: "POST",
                data: itemInput
            })
            await redis.del("items")
            res.status(201).json(data)
        } catch(err) {
            next(err)
        }
    }
    
    static async deleteItem(req, res, next) {
        try {
            const { id } = req.params
            const { data } = await axios({
                url: itemServer + id,
                method: "DELETE",
            })
            await redis.del("items")
            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }
    static async getItemById(req, res, next) {
        try {
            const { id } = req.params
            const itemFind = await fetch(itemServer + id)
            const authorId = itemFind.authorId
            const userFind = await fetch(userServer + authorId)
            res.status(200).json({item: itemFind.data, user: userFind.data})
        } catch(err) {
            next(err)
        }
    }
    static async editItem(req, res, next) {
        try {
            const { id } = req.params
            const itemInput = req.body
            const { data } = await fetch({
                method: "PUT",
                url: itemServer + id,
                data: itemInput
            })
            await redis.del("items")
            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

}

module.exports = ItemController