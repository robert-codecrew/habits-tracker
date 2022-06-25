import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class HabitChooser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }
  
  showSelect = ()=>{
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div id="habit-chooser">
        
        {this.state.open?
       
         <>
         <Button onClick={()=>alert('new habit good or bad?')} onMouseLeave={this.showSelect}><i class="fa-solid fa-plus"></i>  Add Habits <i class='fa-solid fa-user'></i></Button>
         </>

        :<> <Button onMouseEnter={this.showSelect}><i class="fa-solid fa-plus"></i> Add Habits </Button></>}
      </div>
    );
  }
}
