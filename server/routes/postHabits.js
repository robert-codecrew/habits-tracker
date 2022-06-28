'use strict';

const configs = require('../.configuration/config');

const user = require('../models/user');

const {express} = configs;

const router = express.Router();

router.post('/',async(req,res)=>{

res.json(req.body)    
})

module.exports = router;

