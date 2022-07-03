import React, { Component } from "react";
import './styles/leftPanel.css';
import getNewQuote from'../eventHandlers/getNewQuote';
// import getNewQuote from "../eventHandlers/getNewQuote";
export default class LeftPanel extends Component {
constructor(props) {
  super(props)

  this.state = {
     quotes:[],
  }
}



quoteState = () => {
const quoteArr = getNewQuote();
this.setState({quotes:quoteArr})
console.log(this.state.quotes)
  }


  
  render() {
  //  getNewQuote()
    setInterval(() =>{this.quoteState()},30000)
    return (
      <div id="left-panel">  
      
      <section id="quote-section">
        <h5>
      Life is but a series of habits.
        </h5>
        <span>
          - Robert Armstrong
        </span>
      </section>
      </div>
    );
  }
}
