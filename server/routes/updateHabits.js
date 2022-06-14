' use strict';

const configs = require('../.configuration/config');

const {mongoose,express} = configs;

const router = express.Router();

router.put('/',()=>{
    res.json({
        "put?":"oh wow"
    })
    console.log('put route accessed')
})

module.exports = router;