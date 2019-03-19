/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const userRouter = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.render('./client/build/index.html')
})

app.use('/api/v1/user', userRouter)

// catch 404 and just render client side
app.use((req, res, next) => {
  res.render('./client/build/index.html')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
