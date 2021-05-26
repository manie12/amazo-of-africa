import gql from 'graphql-tag';

const typeDefs = gql`

type post{
id:ID!
username:String!
body:String!
createdAt:String!
}
input RegisterInput{
    username:String!
    email:String!
    password:String!
    confirmPassword:String!
}
type User{
    id:ID!
    username:String!
    email:String!
    token:String!
    createdAt:String!
}
type Query{
    
    getposts:[post]
}
type Mutation {
    register(registerInput:RegisterInput):User
    login(username:String!, password:String!):User
}

`
export default typeDefs;