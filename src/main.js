const express = require('express')
const cors = require('cors')
const router = require('./app/index')

const app = express()
const port = 4000

app.use(cors())

app.use('/api', router)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = { app }
