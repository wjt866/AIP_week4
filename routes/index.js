var express = require('express');
var router = express.Router();
var path = require('path');

var jsonVariable = [
    {"title": "People Places Things",
        "releaseDate": "14/08/2015",
        "duration": "85 minutes",
        "genre": "Comedy",
        "synopsis": "Will Henry is a newly single graphic novelist balancing " +
        "parenting his young twin daughters and a classroom full of students while" +
        "exploring and navigating the rich complexities of new love and letting " +
        "go of the woman who left him"} // one json object in an array
]

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/data', function(req, res, next) {
    res.json(jsonVariable);
});

//Add client side validation here

router.post('/', function (req, res, next) {
    jsonVariable = req.body;
    //res.send(req.body); //test
})

module.exports = router;
