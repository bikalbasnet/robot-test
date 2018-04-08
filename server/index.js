import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import index from "./routes/index"

const app = express()
app.use(bodyParser.json())
app.use(index)

const server = http.createServer(app)

const port = process.env.PORT || 4001
server.listen(port, () => console.log(`Listening on port ${port}`))
