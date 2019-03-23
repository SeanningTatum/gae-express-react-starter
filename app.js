/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const userRouter = require('./routes/user')

// import so the server can
// render the build version of react
app.use(express.static(`${__dirname}/client/build`))

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

// Index route
app.get('/', (req, res) => {
  res.render('index.html')
})

// API routes
app.use('/api/v1/user', userRouter)

// catch 404 and just render client side
app.use((req, res, next) => {
  res.render('index.html')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
