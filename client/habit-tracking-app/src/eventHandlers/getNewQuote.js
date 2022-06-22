import axios from 'axios'

// I want to write a method that makes an api call to the quotes api and adds the quotes that are returned to an array of quotes
export default function getNewQuote (){
// bring in my api url for zenquotes
const url = 'https://zenquotes.io/api/quotes/'
// need an array to  hold all my quotes
const quotesArray = []

// call the api every 30 seconds
async function callApiEvery30Seconds(){

const res = await axios.get(url)
console.log(res.data)

    
}
setInterval(function(){callApiEvery30Seconds()},10000)
// store the quotes in the quotes array

//return the quotes array
return quotesArray

}