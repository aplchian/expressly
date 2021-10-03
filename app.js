const express = require('express')
const app = express()
const posts = require('./posts.json')
var cors = require('cors')
app.use(cors())

app.get('/authors', (req, res) => {
  res.json(authors)
})

app.get('/author/:id', (req, res) => {
  const author = authors.find((x) => x.id == req.params.id)
  if(author){
    author.posts = posts.filter(post => post.userId == req.params.id)
    res.json(author)
  }else{
    res.status(404).send('author not found')
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var authors = [
  {
    name: 'Shannon Bills',
    slug: 'Shannon',
    id: 1,
    image:
      'https://robohash.org/mollitiaassumendaest.png?size=200x200&set=set1',
  },
  {
    name: 'Duffie Kynder',
    slug: 'Duffie',
    id: 2,
    image: 'https://robohash.org/sedliberotempore.png?size=200x200&set=set1',
  },
  {
    name: 'Raquel Pegden',
    slug: 'Raquel',
    id: 3,
    image: 'https://robohash.org/namvoluptatesvelit.png?size=200x200&set=set1',
  },
  {
    name: 'Scarface Prattin',
    slug: 'Scarface',
    id: 4,
    image: 'https://robohash.org/deseruntisteeaque.png?size=200x200&set=set1',
  },
  {
    name: 'Giovanna Rockhill',
    slug: 'Giovanna',
    id: 5,
    image:
      'https://robohash.org/aperiamsimiliqueomnis.png?size=200x200&set=set1',
  },
  {
    name: 'Jeanelle Wozencraft',
    slug: 'Jeanelle',
    id: 6,
    image: 'https://robohash.org/ducimuscorporisut.png?size=200x200&set=set1',
  },
  {
    name: 'Von Matthaus',
    slug: 'Von',
    id: 7,
    image: 'https://robohash.org/velitcommodiid.png?size=200x200&set=set1',
  },
  {
    name: 'Ailbert Ramsdell',
    slug: 'Ailbert',
    id: 8,
    image: 'https://robohash.org/velsedeius.png?size=200x200&set=set1',
  },
  {
    name: 'Kimmie Sturney',
    slug: 'Kimmie',
    id: 9,
    image:
      'https://robohash.org/dignissimosasperioreseos.png?size=200x200&set=set1',
  },
  {
    name: 'Agosto Bracey',
    slug: 'Agosto',
    id: 10,
    image:
      'https://robohash.org/iustoquibusdamarchitecto.png?size=200x200&set=set1',
  },
]
