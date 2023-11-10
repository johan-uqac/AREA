const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
var admin = require("firebase-admin");
var serviceAccount = require("./area-ad17a-firebase-adminsdk-i64rt-5f3d6b8137.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' }).status(200)
})

app.get('/connectionStatus', (req, res) => {
  res.json({ msg: 'Connection ok' }).status(200)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})