const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' }).status(200)
})

app.get('/connectionStatus', (req, res) => {
  res.json({ msg: 'Connection ok' }).status(200)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})