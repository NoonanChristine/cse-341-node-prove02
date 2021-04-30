const path = require('path');

const express = require('express');

const rootDir = require('../public/css/util/path');

const router = express.Router();

const reviews = [];

router.get('/', (req, res, next) => {
    res.render('form', { 
        pageTitle: 'Add Review',
        path: '/', 
        formCSS: true,
        hasReviews: reviews.length > 0,
        activeAddReview: true 
    });
});

router.get('/all', (req, res, next) => {
    res.render('reviews', { 
        pageTitle: 'Reviews', 
        path: '/all',
        reviews: reviews,
        hasReviews: reviews.length > 0 
    });
});

router.post('/add-review', (req, res, next) => {
    const { book, author, reviewer, review } = req.body;
    reviews.push({ book, author, reviewer, review })
    console.log(reviews);
    res.redirect('../all');
});

exports.routes = router;
exports.reviews = reviews;