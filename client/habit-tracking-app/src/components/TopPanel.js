import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import onNewBadHabit from '../eventHandlers/onNewBadHabit'
export default class TopPanel extends Component {
  render() {
    return (
      <div id="top-panel">
       <input type='text' />
        <Button onClick={()=>{onNewBadHabit()}} id = "make-new-habit-button" variant='primary'>
          New Habit
        </Button>
      </div>
    );
  }
}
