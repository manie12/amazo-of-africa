import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { MONGODB } from './config.js';
import resolvers from './Graphql/Resolvers/index.js'
import typeDefs from './Graphql/TypeDefs.js'

const server = new ApolloServer({
    typeDefs,
    resolvers
});


mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).
    then(() => {

        return server.listen({ port: 5000 })
    }).then((res) => {
        console.log(`server running on port ${res.url}`)
    });