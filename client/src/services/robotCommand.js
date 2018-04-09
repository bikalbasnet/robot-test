const apiEndPointUrl = process.env.REACT_APP_API_URL

export function placeRobot(x, y, direction) {
    return fetch(apiEndPointUrl + 'place/', {
        method: 'PUT',
        body: JSON.stringify({
            x: x,
            y: y,
            direction: direction
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(res => res.json())
}

export function moveRobot() {
    return fetch(apiEndPointUrl + 'move/', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(res => res.json())
}

export function rotateRobot(direction) {
    return fetch(apiEndPointUrl + 'rotate', {
        method: 'POST',
        body: JSON.stringify({
            direction: direction
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
}

export function report() {
    return fetch(apiEndPointUrl + 'report', {
        method: 'GET'
    })
    .then(res => res.json())
}
