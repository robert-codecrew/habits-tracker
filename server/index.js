// require dotenv configurations
require('dotenv').config();
const bodyParser = require('body-parser')

// import my config files
const configs = require('./.configuration/config.js');
const connection = require('./.configuration/dbconfigs.js');

// deconstruct configurations   
const {
        port,
        root,
        express,
        cors,
        listening
    } = configs;

// database configurations

// express instance
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// mongoose connection from ./configuration/dbconfigs
connection()


//routes
const getRoute = require('./routes/getHabits')
const getRandomQuote = require('./routes/getRandomQuote')
const getOneRoute = require('./routes/getOneHabit.js')
const postRoute = require('./routes/postHabits')
const putRoute = require('./routes/updateHabits')
const deleteRoute = require('./routes/deleteHabits')
// external api routes


// get routes
app.get(root,(req,res)=>{

res.json(req.body)
console.log('accessed')
})

// handlers
app.use('/allHabits',getRoute)
app.use('/habit',getOneRoute)


// ____________________________________________________________
// external api get Routes
app.use('/randomquote',getRandomQuote)



// ____________________________________________________________


// post routes
app.use('/newHabit',postRoute)

// delete routes
app.use('/deletehabit',deleteRoute)

// put routes
app.use('/updatehabit',putRoute)


// listen 
app.listen(port,listening(port))
