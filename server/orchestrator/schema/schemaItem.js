const axios = require("axios")
const redis = require('../config/configRedis')
const itemServer = "http://app:3002/items/"
const userServer = "http://user:3001/users/";


const itemTypeDefs =`#graphql
    type User {
        _id: ID
        username: String
        email: String
        role: String
        phoneNumber: String
        address: String
        password: String
    }

    type Item {
        id: ID
        name: String
        description: String
        price: Int
        imgUrl: String
        categoryId: ID
        authorId: ID
        Category: Category
        Ingredients: [Ingredients]
    }

    type Category {
        id: ID
        name: String
    }

    type Ingredients {
        id: ID
        itemId: ID
        name: String
    }

    type Response {
        message: String
    }

    type ItemDetail {
        item: Item
        author: User
    }

    type Query {
        items: [Item]
        itemById(id: ID!):ItemDetail
    }


    input ingredients {
        name: String
    }

    type Mutation {
        createItem(name: String, description: String, price: Int, imgUrl: String, ingredients: [ingredients], authorId: ID, categoryId: ID ): Item
        editItem(id: ID!,name: String, description: String, price: Int, imgUrl: String, authorId: ID, categoryId: ID ): Respond
        deleteItem(id: ID!): Respond
    }
`


const itemResolver = {
    Query: {
        items: async () => {
            try {
                const itemRedis = await redis.get("items")
                if(itemRedis) {
                   const itemData = JSON.parse(itemRedis)
                   return itemData
                } else {
                    const { data } = await axios(itemServer)
                    const redisData = JSON.stringify(data)
                    redis.set("items", redisData)
                    return data
                }
            } catch(err) {
                throw(err)
            }
        },

        itemById: async (_, args) => {
            try {
                const id = args.id
                const respondData = {}
                const item = await axios(itemServer + id)
                respondData.item = item.data
                const itemAuthorId = respondData.item.authorId
                const author = await axios(userServer + itemAuthorId)
                respondData.author = author.data
                return respondData
            } catch(err) {
                throw(err)
            }
        } 
    },

    Mutation: {
        createItem: async(_, args) => {
            try {
                const { data } = await axios({
                    url: itemServer,
                    method: "POST",
                    data: args
                })
                redis.del("items")
                return data
            } catch(err) {
                throw(err)
            }
        },

        editItem: async(_, args) => {
            try {
                const { data } = await axios({
                    url: itemServer + args.id,
                    method: "PUT",
                    data: args
                })
                redis.del("items")
                return data
            } catch(err) {
                throw(err)
            }
        },
        deleteItem: async(_, args) => {
            try {
                const { data } = await axios.delete(itemServer + args.id)
                redis.del("items")
                return data
            } catch(err) {
                throw(err)
            }
        } 
    }
}

module.exports = { itemResolver, itemTypeDefs }
