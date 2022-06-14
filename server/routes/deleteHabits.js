'use strict';
const configs = require('../.configuration/config');

const {express,mongoose} = configs;

const router = express.Router();

router.delete('/',(req,res)=>{
    res.send({
        item:"deleted!"
    })
    console.log('deleted')
})

module.exports = router;