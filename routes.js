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
    const movie = movies[episode_id - 1]

    if(episode_id >= 1 && episode_id <= 6) {
        res.render('movie_single', {
            moives: movies,
            movie: movie
        })
    } else res.send('Page not found')

    
})

router.get('*', (req, res) => {
    res.send('Page not found')
})





module.exports = router