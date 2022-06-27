' use strict ';

const config = require('../.configuration/config');

const {axios,rhymingUrl} = config;


const getRhymingWords = async (word) =>{
    const getWords = 'getRhymes';
    const max = 40;
    const exportableData = []
   try {
        const results = await axios.get(`${rhymingUrl}/talk?function=${getWords}&word=${word}&maxResults=${max}`);
        const exportMe = results.data
        // console.log(exportMe)
        exportableData.push(exportMe)
        return exportableData 
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports = getRhymingWords;

