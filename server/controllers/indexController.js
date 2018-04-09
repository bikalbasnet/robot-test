import {app} from '../index'
import commandQueue from '../queue/commandQueue'
import {X, Y, DIRECTION, isValidParameters, hasRobotBeenPlaced} from '../models/robot'

/**
 * Place the Robot's position on queue if valid
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
export function place(req, res) {
    const param = req.body

    const x = param.x
    const y = param.y
    const direction = param.direction

    if (!isValidParameters(x, y, direction)) {
        return res.status(400).json({msg: 'Invalid parameters'})
    }

    commandQueue('place', {
        x: param.x,
        y: param.y,
        direction: param.direction
    })

    res.json({msg: 'command placed'})
}

/**
 * Changes robot's X or Y Cordinate based on the direction its facing
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
export function move(req, res) {
    if (!hasRobotBeenPlaced()) {
        return res.status(400).json({msg: 'There is no robot to move'})
    }

    commandQueue('move')

    res.json({msg: 'command placed'})
}

export function rotate(req, res) {
    if (!hasRobotBeenPlaced()) {
        return res.status(400).json({msg: 'There is no robot to rotate'})
    }

    const param = req.body
    commandQueue('rotate', {
        direction: param.direction
    })

    res.json({msg: 'command placed'})
}

export function report(req, res) {
    res.json({
        x: X,
        y: Y,
        direction: DIRECTION
    })
}
