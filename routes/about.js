var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Harrisondill.com - About' });
});

module.exports = router;