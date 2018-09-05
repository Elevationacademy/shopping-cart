const express = require('express');
const router = express.Router();

router.use(express.static('./node_modules'));
router.use(express.static('public'));

router.get('/', function(request, response){
    response.send("hello");
});

module.exports = router;