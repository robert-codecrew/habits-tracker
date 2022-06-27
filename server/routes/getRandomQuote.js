'use strict';
const dataArr = require('../seed')
const configs = require('../.configuration/config.js');

const {express,axios} = configs;


const router = express.Router();

router.use((req,res,next)=>{
    console.log('hello world')
    next()
})
router.get('/',(req,res)=>{
    // TODO: Make the API call to randomquotes api
    // const url = 'https://zenquotes.io/api/quotes/'
    // let response  = await axios.get(url);
    
res.send(dataArr)
})



module.exports = router