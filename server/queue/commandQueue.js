import {app} from '../index'

export default function (command, commandArgs = {}) {
    app.queue.create('commands-queue', {
        command: command,
        commandArgs: commandArgs
    }).save()
}
