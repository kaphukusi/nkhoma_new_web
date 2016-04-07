var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Nkhoma University' });
});

router.get('/courses', function(req, res, next) {
  res.render('courses', { title: 'Our Services' });
});

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Our Services' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Our Services' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Our Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.get('/portfolio-1-col', function(req, res, next) {
  res.render('portfolio-1-col', { title: 'Contact Us' });
});

router.get('/portfolio-2-col', function(req, res, next) {
  res.render('portfolio-2-col', { title: 'Contact Us' });
});

router.get('/portfolio-3-col', function(req, res, next) {
  res.render('portfolio-3-col', { title: 'Contact Us' });
});

router.get('/portfolio-4-col', function(req, res, next) {
  res.render('portfolio-4-col', { title: 'Contact Us' });
});

router.get('/portfolio-item', function(req, res, next) {
  res.render('portfolio-item', { title: 'Contact Us' });
});

module.exports = router;
