const {gql} = require('apollo-server-express');

// Create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        forSale: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    input SavedBookInput {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        forSale: String
        link: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String], description: String, title: String, bookId: String, image: String, link: String): User
        removeBook(bookId: String): User
    }
`;

// Export the typeDefs
module.exports = typeDefs;
