'use strict';

const configs = require('../.configuration/config');

const {express, mongoose} = configs;

const router = express.Router();

router.post('/',(req,res)=>{

res.json({
    posted:"this item here"
})    
})

module.exports = router;

