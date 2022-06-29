import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class SearchButton extends Component {
  render() {
    return (
      <Button style = {{
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
