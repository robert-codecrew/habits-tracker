require('dotenv').config()
const configs = {
    port: process.env.PORT || 3030,
   
    root:'/',
    connectionString: process.env.CONNECTION_STRING ||'mongodb+srv://gold_:<password>@cluster0.6uhfg.mongodb.net/?retryWrites=true&w=majority',
    axios: require('axios'),
    express:require('express'),
    cors:require('cors'),
     mongoose:require('mongoose'),
    listening: function(port){
       console.log(`listening on ${port}`)
    }
}



module.exports = configs;
