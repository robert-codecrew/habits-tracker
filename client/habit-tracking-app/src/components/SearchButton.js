import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class SearchButton extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       clicked:false,
    }
    
  }
  checkClick = () =>{
    this.setState({clicked:true});
  }
  passClick = (text) =>{
    alert(text)
  }
  render() {
    return (
      <Button onClick = {this.props.clickMe} style = {{
        borderRadius:'50%',
        boxShadow:'1px 1px 1px 1px blue',
        margin:"10px",
      }}>
        <i class = " fa fa-search" aria-hidden={true}>
        </i>
         </Button>
    )
  }
}
