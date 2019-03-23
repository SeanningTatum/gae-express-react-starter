const authors = [{id: 1, name: 'Sean Urgel'}]

const resolvers = {
  Query: {
    author(parent, args, context, info) {
      return authors.find(author => args.id === author.id)
    },
  },
}

module.exports = resolvers
