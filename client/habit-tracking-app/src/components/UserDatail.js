import React, { Component } from 'react'

export default class UserDatail extends Component {
    sectionStyle = {
        display: "flex",
        flexDirection: "row",
        marginRight:'15px',
        fontSize:'2rem',
        marginBottom:'2rem',
        justifyContent: "center",
      }
      i_styles={
        color:'blue',
        marginRight:'5px'
      }
  render() {
    return (
        <section style={this.sectionStyle} id='user'>
     
          
        <span id = 'user-detail'><i style={this.i_styles} class="fa-solid fa-user"></i>Robert Armstrong</span>
 
  

    </section>
    )
  }
}
