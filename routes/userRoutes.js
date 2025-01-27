const express = require("express")
const router = express.Router()

const users = [
    {id: 1, name: 'Anthony Albanese', country: 'AU'},
    {id: 2, name: 'Joe Biden', country: 'US'},
    {id: 3, name: 'Chris Hopkins', country: 'NZ'},
    {id: 4, name: 'Lee Hsien Loong', country: 'SG'}
]

//Dynamic request param endpoint - get the user matching the specific ID ie. 

router.get('/:id', (req, res) => {
    console.log(req.params)

    //Slide 4 - Request Headers
    router.get('/headers', (req, res) => {
        console.log(req.headers)

        res.json(req.headers)
    })

        // Slide 41 -Request Body

    router.post('/', (req, res) => {
        let newUser = req.body
        console.log(newUser)

        if (!newUser.name || !newUser.location) {
            res.status(500).json({error: 'User must contain a name and location'})
            return
        }
        else if (!newUser.id) {
            newUser.id = users.length + 1
        }

        users.push(newUser)
        res.status(200).json(newUser)
    })




    let userId = req.params.id

    let user = users.find(user => user.id == userId)

    user ? res.status(200).json({result:user})
        : res.status(404).json({result: `user ${userId} not found`})
})

module.exports = router