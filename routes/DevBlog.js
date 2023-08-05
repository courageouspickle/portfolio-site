var express = require('express');
var router = express.Router();

/* GET DevBlog page. */
router.get('/', function(req, res, next) {
  res.render('DevBlog', { title: 'Harrisondill.com - DevBlog' });
});

module.exports = router;