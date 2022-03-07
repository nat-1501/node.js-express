const express = require('express')


const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Ola mundo pelo express!'))

app.get("/sobre", (req, res) => res.send('Minha pagina sobre'))

app.get("/quemsomos", (req, res) => res.send('somos o que somos'))

app.get("/ola/:nome/:cargo", (req, res) => res.send('ola'))


app.listen(port, () => console.log('Api rodando na porta 3001'))