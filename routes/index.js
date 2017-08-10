var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/data', function(req, res, next) {
		res.json([{"id":1, "title": "People Places Things",
 		"releaseDate": "14/08/2015", "duration": "85 minutes", "genre": "Comedy", 
 		"synopsis": "Will Henry is a newly single graphic novelist..."}]);
});

module.exports = router;
