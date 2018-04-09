const apiEndPointUrl = process.env.REACT_APP_API_URL

export function placeRobot(x, y, direction) {
    fetch(apiEndPointUrl + 'place/', {
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
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

export function moveRobot() {
    fetch(apiEndPointUrl + 'move/', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

export function rotateRobot(direction) {
    fetch(apiEndPointUrl + 'rotate', {
        method: 'POST',
        body: JSON.stringify({
            direction: direction
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}

export function report() {
    return fetch(apiEndPointUrl + 'report', {
        method: 'GET'
    })
    .then(res => res.json())
}
