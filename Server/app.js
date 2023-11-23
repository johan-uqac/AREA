const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const admin = require("firebase-admin");
const serverInfo = require("./serverInfo.json");

admin.initializeApp({
  credential: admin.credential.cert(serverInfo.firebaseInfo),
  databaseURL: serverInfo.databaseURL
});

const database = admin.database()

var spotifyToken = ''

app.use(cors())

app.use(express.json())

function searchUser(uid) {
  return database.ref("users").orderByChild("uid").equalTo(uid).once("value")
}

function createUser(uid, email) {
  return database.ref("users").push({
    uid: uid,
    email
  })
}

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' }).status(200)
})

app.get('/connectionStatus', (req, res) => {
  res.json({ msg: 'Connection ok' }).status(200)
})

app.get('/info', (req, res) => {
  res.json({ msg: 'Info' }).status(200)
})

app.get('/getUserInfo', async (req, res) => {
  const { uid, email } = req.query
  await searchUser(uid).then(async (snapshot) => {
    if (snapshot.exists()) {
      res.json({ user: snapshot.val() }).status(200)
    } else {
      await createUser(uid, email).then(() => {
        console.log(snapshot.key)
        res.json({ user: snapshot.key() }).status(200)
      }).catch((error) => {
        res.json({ error }).status(400)
      })
    }
  }).catch((error) => {
    res.json({ error }).status(400)
  })
})

function getBearerTokenSpotify() {
  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=' + serverInfo.spotifyClientID + '&client_secret=' + serverInfo.spotifyClientSecret,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  getBearerTokenSpotify().then(r => r.json()).then(r => {
    spotifyToken = r.access_token
    console.log(spotifyToken)
    fetch("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + spotifyToken
      }
    }).then(r => r.json()).then(r => {
      console.log(r)
    })
  })
})