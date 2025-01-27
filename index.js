// Ex 1                 Slide 11 - 13

// console.log('Hello World!')



// Example 2            Slide 14 - 17


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => { 
//     res.send('Hello World!')
// })

// app.get('/test', (req, res) => {
// res.send('This is a test')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })



// Exercise 1 - Create a basic back-end application with multiple web servers running on different ports.

// const express = require('express')

// const app1 = express()
// const port1 = 3060

// const app2 = express()
// const port2 = 3061

// app1.get('/', (req, res) => { 
//     res.send('Hello World!')
// })

// app1.listen(port1, () => {
//     console.log(`Example app listening at http://localhost:${port1}`)
// })

// app2.get('/', (req, res) => { 
// res.send('Hello World!')
// })

// app2.listen(port2, () => {
//     console.log(`Example app listening at http://localhost:${port2}`)
// })



// Example 3            Slide 24 - 26



// const testRoutes = require('./routes/myTestRoutes')

// const express = require('express')
// const app = express()
// const port = 3050

// app.use('/', express.static('public'))

// app.use('/myexamples', testRoutes)


// app.get('/users', (req, res) => { 
//     res.send('Hello Friends')
// })


// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


// Example 4


// const testRoutes = require('./routes/myTestRoutes')


// Dynamic Params Example               Slide 39
/*const calculatorRoutes = require('.routes/calculatorRoutes')

const userRoutes = require('./routes/userRoutes')

// M5lab4
const friendRoutes = require('./routes/friendRoutes')







const express = require('express')
const app = express()
const port = 3050

app.use(express,json())

app.use('/', express.static('public'))

// app.use('/myexamples', testRoutes)

app.use('/calculator', calculatorRoutes)
// app.get('/users', (req, res) => { 
//     res.send('Hello Friends')
// })

app.use('/users', userRoutes)

app.use('/friends', friendRoutes)  */

const app = require('./app')
const port = 3050


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

















































