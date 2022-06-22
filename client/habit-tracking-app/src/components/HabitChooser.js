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
      
      >   <Button onClick = {this.setOpen}>{this.props.buttonTitle}</Button>
        
        <Modal  show={this.state.open}>
          <Modal.Header closeButton onClick={this.setOpen}>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Button onClick={this.setOpen} variant="success">Make a new Habit</Button>
          {" "}
            <Button onClick = {this.setOpen} variant="danger">Break an old Habit</Button>
          </Modal.Body>
          <Modal.Footer>
         
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
