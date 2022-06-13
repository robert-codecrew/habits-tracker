require('dotenv').config()
const envVariables = {
    port: process.env.PORT || 3030,
    connectionString: process.env.CONNECTION_STRING,
}

module.exports = envVariables;
