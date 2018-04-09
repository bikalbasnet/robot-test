import express from 'express'
import http from 'http'
import socketIo from 'socket.io'
import bodyParser from 'body-parser'
import index from './routes/index'
import kue from 'kue'
import {X, Y, DIRECTION, setX, setY, setDirection, move, rotate, isValidCoordinate} from './models/robot'

const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT")
  next();
})
app.use(bodyParser.json())
app.use(index)

const server = http.createServer(app)

const io = socketIo(server, {
    transports: ['websocket', 'polling']
})
app.io = io

const queue = kue.createQueue()
app.queue = queue

// Process Queue
queue.process('commands-queue', function(job, done) {
    const command = job.data.command
    const commandArgs = job.data.commandArgs

    switch(command) {
        case 'place':
            setX(commandArgs.x)
            setY(commandArgs.y)
            setDirection(commandArgs.direction)
        break;
        case 'move':
            move()
        break;
        case 'rotate':
            rotate(commandArgs.direction)
        break;
    }

    io.sockets.emit('commandForRobot', {
        x: X,
        y: Y,
        direction: DIRECTION
    })
    done()
});

const port = process.env.PORT || 4001
server.listen(port, () => console.log(`Listening on port ${port}`))

export {app}
