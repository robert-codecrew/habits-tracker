'use strict';
const configs = require('../.configuration/config.js');

const {express} = configs;

const Habit = require('../models/habit')

const router = express.Router();

router.use((req,res,next)=>{
    console.log('hello world')
    next()
})
router.get('/',async (req,res)=>{
   
res.send('hello')
})



module.exports = router