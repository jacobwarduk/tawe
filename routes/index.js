var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
      title: 'Tawe',
      description: 'Tawe transforms a humble image into a dazzling presentation or video.'
  });
});

module.exports = router;
