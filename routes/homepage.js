const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});
router.get('/contact', (req, res) => {
  res.render('contact');
});
router.get('/courses', (req, res) => {
  res.render('courses');
});


module.exports = router;
