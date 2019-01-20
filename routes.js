const express = require('express')
const router = express.Router()

const moviesJSON = require('./movies.json')
const movies = moviesJSON.movies
const data = {
    title: 'Star wars movies',
    movies: movies
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