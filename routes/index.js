var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'HNEC ' });
});

/* GET home page. */
router.get('/hello', function(req, res) {
  res.send('what ever hello');
});

module.exports = router;
