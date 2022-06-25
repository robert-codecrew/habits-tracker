import React, { Component } from "react";
import './styles/leftPanel.css'
// import getNewQuote from "../eventHandlers/getNewQuote";
export default class LeftPanel extends Component {

  sectionStyle = {
    display: "flex",
    flexDirection: "row",
    margin:'15px',
    fontSize:'2rem',
    marginBottom:'2rem',
    justifyContent: "center",
  }
  render() {
  //  getNewQuote()

    return (
      <div id="left-panel">  
      <section style={this.sectionStyle} id='user'>
     
          
          <span id = 'user-detail'><i class="fa-solid fa-user"></i>Robert Armstrong</span>
   
    

      </section>
      <hr/>
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
