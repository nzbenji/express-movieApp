const express = require('express')
const router = express.Router()

const moviesJSON = require('./movies.json')

const data = {
    title: 'Star wars movies',
    movies: ['The first movie', 'The second movie', 'The third movie']
}

//Routes
router.get('/', (req, res) => {
    res.render('home', data)
})

router.get('/star_wars_episode/:id', (req, res) => {
    const episode_id = req.params.id
    res.send("this is episode " + episode_id)
})

router.get('*', (req, res) => {
    res.send('Page not found')
})



module.exports = router