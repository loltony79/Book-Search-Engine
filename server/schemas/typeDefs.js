const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String!]
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }
  type Auth {
    toke: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
  }

  type Mutation {
    createUser(): Auth
    login(email: String!, password)
    getUser(): Auth
    removeBook()

    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
