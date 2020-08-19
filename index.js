const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())
app.get('/superSecret', (req, res) => {
    console.log(req);
    console.log(res);
    fetch("http://api.icndb.com/jokes/random/").then((response) => {
        response.json().then(responseJSON => {
          res.send(responseJSON)
        })
      }).catch((error) => {
        console.error(error)
      })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})