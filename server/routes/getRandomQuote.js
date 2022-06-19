'use strict';
const configs = require('../.configuration/config.js');

const {express,axios} = configs;


const router = express.Router();

router.use((req,res,next)=>{
    console.log('hello world')
    next()
})
router.get('/',async(req,res)=>{
    const url = 'https://zenquotes.io/api/quotes/'
    let response  = await axios.get(url);
    
res.send(response.data)
})



module.exports = router