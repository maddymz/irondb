var express = require('express');
var router = express.Router();

/* GET light page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Psyche', sheet: "custom-white",  toplinkscolor: " " });
});

module.exports = router;