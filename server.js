// const app = require('express')()
// const http = require('http').createServer(app)
// const socketio = require('socket.io')
// const io = socketio(http)
// const PORT = process.env.PORT || 5000

// io.on('connection', (socket)=> {
//     console.log('connected')
// })

// http.listen(PORT, ()=>{
//     console.log('LISTENING ON PORT ' + PORT)
// })

const express = require('express')
const router = require('./routes/routes')

const PORT = process.env.PORT || 5000 //тут мы в первую очередь пытаемся получить порт из системных переменных, а если он не задан, то 5000

const app = express()
app.use(express.json())
app.use('/api', router)

app.listen(PORT, ()=>{
    console.log('LISTENING ON PORT ' + PORT)
})

    