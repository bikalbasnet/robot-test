import {app} from '../index'
import commandQueue from '../queue/commandQueue'
import {X, Y, DIRECTION, isValidPlacementParameters, hasRobotBeenPlaced} from '../models/robot'

/**
 * Place the Robot's position on queue if valid
 * @param  req
 * @param  res
 * @return
 */
export function place(req, res) {
    const param = req.body

    const x = param.x
    const y = param.y
    const direction = param.direction

    if (!isValidPlacementParameters(x, y, direction)) {
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
 * @param  req
 * @param  res
 * @return
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

    if (param.direction !== 'left' && param.direction !== 'right') {
        return res.status(400).json({msg: 'Invalid parameters'})
    }

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

/**
 * Removes the robot from the table
 * @param  req
 * @param  res
 * @return
 */
export function remove(req, res) {
    if (!hasRobotBeenPlaced()) {
        return res.status(400).json({msg: 'There is no robot in the table'})
    }

    commandQueue('remove')

    res.json({msg: 'Robot Removed'})
}
