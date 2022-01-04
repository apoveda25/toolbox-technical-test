const express = require('express')
const router = require('./app/index')

const app = express()
const port = 3000

app.use('/api', router)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = { app }
