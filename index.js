const express = require('express');
const exphbs  = require('express-handlebars');
const app = express()
const port = 3000
app.listen(port, () => {
    console.log('app is running on 3000')
})

const routes = require('./routes')
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));


app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');



//Routes 
app.use('/', routes)
