import postresolvers from './userResolvers.js';
import userResolvers from './postResolvers.js'

const post = {

    Query: {
        ...postresolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation


    }

}
export default post;

