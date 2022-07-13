const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Book{
        authors:String
        description: String
        bookId: ID!
        image: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        User(userId: ID!): User
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addBook(userId: ID!, savedBooks: String!): User
        removeBook: User
    }
`;

module.exports = typeDefs;
