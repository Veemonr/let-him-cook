const { ObjectId } = require("mongodb")
const { getDb } = require("../config/mongoDb")
const bcrypt = require("bcryptjs")

class ModelUser {

    static userCollection() {
        return getDb().collection("User")
    }

    static async createUser(userInput) {
        try {
            const collection = this.userCollection()
            if(!userInput.password) throw({name: "appErr", status: 400, message: "Password Is Required"})
            if(!userInput.email) throw({name: "appErr", status: 400, message: "Email Is Required"})
            const salt = bcrypt.genSaltSync(10)
            userInput.password = bcrypt.hashSync(userInput.password, salt)
            const newUser = await collection.insertOne(userInput)

            return newUser
        } catch(err) {
            console.log(err);
            throw(err)
        }
    }

    static async findAllUser() {
        try {
            const collection = this.userCollection()
            const allUser = await collection.find().toArray()

            return allUser
        } catch(err) {
            throw(err)
        }
    }

    static async findUserById(id) {
        try {
            const collection = this.userCollection()

            const userFind = await collection.findOne({ _id: new ObjectId(id)})
            if(!userFind) throw({name: "appErr", status: 404, message: "User Not Found"})
            return userFind
        } catch(err) {
            throw(err)
        }
    }

    static async deleteUserById(id) {
        try {
            const findUser = await this.findUserById(id)

            if(!findUser) throw({name: "appErr", status: 404, message: "User Not Found"})

            const collection = this.userCollection()

            const userDeleted = await collection.deleteOne({ _id: new ObjectId(id)})

            return userDeleted
        } catch(err) {
            throw(err)
        }
    }

}

module.exports = ModelUser