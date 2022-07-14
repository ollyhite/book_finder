const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    title: String!
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    User(userId: ID!): User
    me: User
  }

  input saveBook {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    title: String!
    link: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(userId: ID!, input: saveBook): User
    removeBook: User
  }
`;

module.exports = typeDefs;
