const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())



const whoIsDatingWho = {
    bessy: 'wilbur',
    pete: 'jan',
    allie: 'brad'
}


app.get('/partners/:name', (req, res) => {
    const personsName = req.params.name
    const response = whoIsDatingWho[personsName] ? whoIsDatingWho[personsName] : 'unknown'
    res.send(response)
  })

  app.get('/', (req, res) => {
    res.send('hello world')
  })


  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })