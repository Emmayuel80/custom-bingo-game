const express = require('express');
const router = express.Router();

router.get('/idGenerator', function(req, res){
    let id = require('../services/generateRandomString')(125) //Generate random string with length of 125
    return res.json({id: id})
});

//CARD GENERATION
router.get('/card/:cardId', function(req,res){
    let card = require('../services/generateCard')(req.params.cardId);
    return res.json({card: card});
})

module.exports = router;