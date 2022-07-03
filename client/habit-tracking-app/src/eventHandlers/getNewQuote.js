import axios from 'axios'

// I want to write a method that makes an api call to the quotes api and adds the quotes that are returned to an array of quotes
export default function getNewQuote (query){
// bring in my api url for zenquotes
const url = `https://quptable.io/quotes/?tags=${query}`
// need an array to  hold all my quotes
const quotesArray = []

// call the api every 30 seconds
async function callApiEvery30Seconds(){

const res = await axios.get(url)
console.log(res.data)
 
return quotesArray.map((el)=>quotesArray.push(

    {  
        "tags" : el.tags,
         "_id" :el._id,
        "content" : el.content,
        "author" : el.author,
        "chars" : el.length,
    }
))

}
setInterval(async function(){await callApiEvery30Seconds()},10000)
// store the quotes in the quotes array

//return the quotes array
return quotesArray;

}