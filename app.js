const path = require('path');
const PORT = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const reviewRoutes = require('./routes/reviews');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/reviews', reviewRoutes.routes);
app.use('/', reviewRoutes.routes);
//app.use('/', reviewRoutes.routes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);