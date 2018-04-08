import {app} from '../index'
import commandQueue from '../queue/commandQueue'

export function place(req, res) {
    const param = req.body
    commandQueue('place', {
        x: param.x,
        y: param.y,
        direction: param.direction
    })
}

export function move(req, res) {
    commandQueue('move')
}

export function rotate(req, res) {
    const param = req.body
    commandQueue('rotate', {
        direction: param.direction
    })
}
