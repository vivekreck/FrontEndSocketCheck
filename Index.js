import openSocket from 'socket.io-client';

const socket = openSocket('https://boiling-river-08041.herokuapp.com/');
socket.on('color', data => {
    if (data.action === 'change') {
        document.body.style.backgroundColor = data.color;
    }
})

const red = document.getElementById('red');
const yellow = document.getElementById('yellow');

const reqServer = (color) => {
    fetch('https://boiling-river-08041.herokuapp.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ color })
    })
        .then(resData => {
            return resData.json()
        })
        .then(data => {
            const { color } = data;
            document.body.style.backgroundColor = color;
        })
        .catch(err => {
            console.log('err', err)
        })
}

red.addEventListener('click', (e) => reqServer('red'))
yellow.addEventListener('click', (e) => reqServer('yellow'))

fetch('https://boiling-river-08041.herokuapp.com/')
    .then(resData => {
        return resData.json()
    })
    .then(data => {
        const { color } = data;
        document.body.style.backgroundColor = color;
    })
    .catch(err => {
        console.log('err', err)
    })
