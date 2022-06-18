import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class HabitChooser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open:false
    }
  }
    setOpen = () => {
      this.setState({open:!this.state.open})
  }
  render() {
    return (

      <div
   
        id="habit-chooser"
        style={{ display: "block", width: 700, padding: 30 }}
      >   <Button onClick = {this.setOpen}>{this.props.buttonTitle}</Button>
        
        <Modal show={this.state.open}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.setOpen} variant="primary">Save changes</Button>
            <Button onClick = {this.setOpen} variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
