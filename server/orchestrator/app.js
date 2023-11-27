if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } = require("@apollo/server/plugin/landingPage/default");
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { userResolver, userTypeDefs } = require("./schema/schemaUser")
const { itemResolver, itemTypeDefs } = require("./schema/schemaItem")
const server = new ApolloServer({
    typeDefs: [userTypeDefs, itemTypeDefs],
    resolvers: [userResolver, itemResolver],
    introspection: true,
    plugins: [
    // Install a landing page plugin based on NODE_ENV
       process.env.NODE_ENV === 'production'
         ? ApolloServerPluginLandingPageProductionDefault({
             graphRef: 'my-graph-id@my-graph-variant',
             footer: false,
           })
          : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
})

startStandaloneServer(server, {
    listen: { port: 4000 ||  process.env.PORT }
})
 .then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
 })
