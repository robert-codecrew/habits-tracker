'use strict';
const configs = require('../.configuration/config.js');

const {express,mongoose,} = configs;

const router = express.Router();

router.use((req,res,next)=>{
    console.log('hello world')
    next()
})
router.get('/',(req,res)=>{
res.send('hello')
})


module.exports = router