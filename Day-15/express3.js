var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('Get route o things.');
});
router.post('/', function(req, res){
	res.send('Post route o things.');
});
module.exports = router;