'use strict';

const configs = require('../../.configuration/config.js');

const getRhyme = require('../../externalData/rhymes');


const {express,mongoose,} = configs;

const router = express.Router();

router.use((req,res,next)=>{
    console.log('hello world')
    next()
})
router.get('/:word',async (req,res)=>{
try{
    const newRhymingWords = await getRhyme(req.params.word)
    res.json(newRhymingWords);
}
catch(err){
return err
}
})


module.exports = router