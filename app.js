/* eslint-disable import/order */
/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const {ApolloServer} = require('apollo-server-express')

const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolvers')

const app = express()

const userRouter = require('./routes/user')

// So the server can
// render the build version of react
app.use(express.static(`${__dirname}/client/build`))

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// Index route
app.get('/', (req, res) => {
  res.render('index.html')
})

// API routes
app.use('/api/v1/user', userRouter)

// Apply middleware before 404,
// so it catches the graphql routes
// first
server.applyMiddleware({app})

// catch 404 and just render client side
app.use((req, res, next) => {
  res.render('index.html')
})

const PORT = process.env.PORT || 8080

app.listen({port: PORT}, () => {
  console.log(`
  🚀  Apollo Server ready at http://localhost:${PORT}${server.graphqlPath}
  🗺  API routes ready at: http://localhost:${PORT}/api/v1/[api_name]
  🔨  Built version of project at: http://localhost:${PORT}
`)
  console.log('Press Ctrl+C to quit.')
})
