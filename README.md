## How to run the toy robot simulator?
Follow the following steps to setup the project

##### Setup Environment
- Install Docker https://docs.docker.com/engine/installation/ `(> 17.12.0+)`
- Install Docker Compose https://docs.docker.com/compose/install/

Ensure that `docker` command does not need `sudo` to run
`sudo usermod -aG docker $USER`

##### Setup Project
- `$ git clone git@github.com:bikalbasnet/robot-test.git`
- `cd robot-test`
- `docker-compose up -d`

##### Run the project
http://127.0.0.1:8080

##### To run the test
- `$ cd server && npm test`

## About this robot simulator
There are two parts of this simulator - Client and Server. They are kept in two different folders. Client is built on `React Js` and Server on `Node Js`.
Multiple clients can send command to server, server stores the commands on redis backed `queue` and pushes the position data to the clients through `socket`. Javascipts are written on `ES2015` and transpiled using `babel`

##### Stacks
ReactJs - for client
NodeJs - for server
[Kue](https://github.com/Automattic/kue) - for queue backed by redis
[Socket.io](https://github.com/socketio/socket.io) - for realtime sending data from server to clients using web sockets.
