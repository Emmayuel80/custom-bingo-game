const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    let id = require('../services/generateRandomString')(125) //Generate random string with length of 125
    res.redirect('/card/' + id);
});

//CARD GENERATION
router.get('/card/:cardId', function(req,res){
    let card = require('../services/generateCard')(req.params.cardId);
    res.render('card', { card: card })
})

module.exports = router;