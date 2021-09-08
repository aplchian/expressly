const express = require('express')
const app = express()



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


  const port = 3000
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })