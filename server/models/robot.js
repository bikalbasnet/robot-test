export let X
export let Y
export let DIRECTION

export const directions = ['north', 'east', 'south', 'west']
export const maxCoordinate = 5

export function setX(x) {
    X = x
}

export function setY (y) {
    Y = y
}

export function setDirection(direction) {
    DIRECTION = direction
}

/**
 * Check if params are valid and allowed to be placed
 * @param  x
 * @param  y
 * @param direction
 * @return {Boolean}
 */
export function isValidPlacementParameters(x, y, direction) {
    if (directions.indexOf(direction) < 0) {
        return false
    }

    if (!isValidCoordinate(x) || !isValidCoordinate(y)) {
        return false
    }

    return true
}

/**
 * Move robot on the direction it's facing
 */
export function move() {
    if (DIRECTION === 'north' && isValidCoordinate(X + 1)) {
        setX(X + 1)
    }
    if (DIRECTION === 'south' && isValidCoordinate(X - 1)) {
        setX(X - 1)
    }
    if (DIRECTION === 'east' && isValidCoordinate(Y + 1)) {
        setY(Y + 1)
    }
    if (DIRECTION === 'west' && isValidCoordinate(Y - 1)) {
        setY(Y - 1)
    }
}

/**
 * Rotate robot to the right or left
 * @param  string position       
 */
export function rotate(position) {
    const indexOfDirection = directions.indexOf(DIRECTION)
    if (indexOfDirection === 0 && position === 'left') {
        return setDirection(directions[3])
    }

    if (indexOfDirection === 3 && position === 'right') {
        return setDirection(directions[0])
    }

    if (position === 'left') {
        return setDirection(directions[indexOfDirection - 1 ])
    }

    return setDirection(directions[indexOfDirection + 1])
}

/**
 * check if X or Y cordinate is valid
 * @param  {[type]}  coordinate
 * @return {Boolean}
 */
export function isValidCoordinate (coordinate) {
    if(typeof coordinate !== 'number') {
        return false
    }

    return coordinate >= 0 && coordinate < maxCoordinate
}

/**
 * Is robot placed
 * @return {Boolean}
 */
export function hasRobotBeenPlaced() {
    if (
        typeof X === 'undefined' ||
        typeof Y === 'undefined' ||
        directions.indexOf(DIRECTION) < 0
    ){

        return false
    }

    return true
}
