const {gql} = require('apollo-server-express')

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    books: [Book]
  }

  type Query {
    author: Author
  }
`

module.exports = typeDefs
