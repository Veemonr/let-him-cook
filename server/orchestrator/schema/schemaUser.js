const axios = require("axios");
const userServer = "http://user:3001/users/";

const userTypeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    role: String
    phoneNumber: String
    address: String
    password: String
  }

  type Respond {
    message: String
  }
  type Query {
    users: [User]
    userById(id: ID!): User
  }

  type Mutation {
    createUser(username: String, email: String, password: String, role: String, phoneNumber: String, addrress: String): Respond
    deleteUser(id: ID): Respond
  }
`;

const userResolver = {
  Query: {
    users: async () => {
      try {
        const { data } = await axios(userServer);
        return data;
      } catch (err) {
        throw err;
      }
    },
    userById: async (_, args) => {
      try {
        const id = args.id;
        const { data } = await axios(userServer + id);
        return data;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      try {
        const { data } = await axios({
            method: "POST",
            url: userServer,
            data: args
        })
        return data
      } catch (err) {
        throw err;
      }
    },
    deleteUser: async (_, args) => {
        try {
            const id = args.id
            const { data } = await axios.delete(userServer + id)
            return data
        } catch(err) {
            throw err
        }
    }
  },
};

module.exports = { userResolver, userTypeDefs };
