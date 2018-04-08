import express from 'express'
import http from 'http'
import socketIo from 'socket.io'
import bodyParser from 'body-parser'
import index from './routes/index'
import kue from 'kue'

const app = express()
app.use(bodyParser.json())
app.use(index)

const server = http.createServer(app)

const io = socketIo(server)
app.io = io

const queue = kue.createQueue()
app.queue = queue

const port = process.env.PORT || 4001
server.listen(port, () => console.log(`Listening on port ${port}`))

export {app}
